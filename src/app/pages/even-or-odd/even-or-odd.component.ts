import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { EvenOrOddStore } from '../../stores/even-or-odd.store';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllMaterialsModule } from '../../all-materials.module';
import { EvenOrOdd } from '../../models/even-or-odd.interface';

@Component({
  selector: 'app-even-or-odd',
  imports: [AllMaterialsModule, FormsModule, ReactiveFormsModule],
  templateUrl: './even-or-odd.component.html',
  styleUrl: './even-or-odd.component.scss'
})
export class EvenOrOddComponent implements OnInit {

  evenOrOddForm: UntypedFormGroup = new FormGroup({});

  showErrors: WritableSignal<string[]> = signal([]);

  readonly evenOrOddStore = inject(EvenOrOddStore);
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.evenOrOddForm = this.fb.group({
      minimum: [this.evenOrOddStore.minimum(), [Validators.required, Validators.min(0), Validators.max(24)]],
      maximum: [this.evenOrOddStore.maximum(), [Validators.required, Validators.min(1), Validators.max(25)]],
      isEven: [this.evenOrOddStore.isEven(), Validators.required]
    });

    this.evenOrOddStore.showNumbers();
  }

  submitForm() : void {
    const min: number = parseInt(this.evenOrOddForm.get('minimum')?.value ?? '-1');
    const max: number = parseInt(this.evenOrOddForm.get('maximum')?.value ?? '-1');

    if(this.evenOrOddForm.valid && min < max && min > -1 && max > -1) {
      this.showErrors.set([]);

      const data: Partial<EvenOrOdd> = {
        minimum: min,
        maximum: max,
        isEven: this.evenOrOddForm.get('isEven')?.value
      };

      this.evenOrOddStore.setData(data);
      this.evenOrOddStore.showNumbers();
    } else {
      let errors: string[] = ["There are some errors:"];

      if(min < 0 || min > 24) {
        errors.push("Invalid minimum value");
      }

       if(max < 1 || max > 25) {
        errors.push("Invalid maximum value");
      }

      if(min > max) {
        errors.push("Invalid: minimum value greater than maximum value");
      }

      this.showErrors.set(errors);
    }
  }

}