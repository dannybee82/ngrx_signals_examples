import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, UntypedFormGroup, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { AllMaterialsModule } from '../../all-materials.module';
import { AnimalStore } from '../../stores/animal.store';
import { debounceTime, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-animal',
  imports: [AllMaterialsModule, FormsModule, ReactiveFormsModule],
  templateUrl: './animal.html',
  styleUrl: './animal.scss'
})
export class Animal implements OnInit {

  animalForm: UntypedFormGroup = new FormGroup({});

  readonly animalStore = inject(AnimalStore);
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    if(this.animalStore.allAnimals().length === 0) {
      this.animalStore.getAllAnimals();
    }

    this.animalForm = this.fb.group({
      animalName: [this.animalStore.search()]
    });

    this.animalForm.controls['animalName'].valueChanges.pipe(
      debounceTime(300),
      switchMap((data: string) => {
        if(data.length >= 3) {
          return of(data.toLowerCase());
        }

        return of('');
      })
    ).subscribe((data: string) => {
      this.animalStore.searchAnimals(data);
    });
  }

}