import { Component, inject, OnInit } from '@angular/core';
import { AllMaterialsModule } from '../../all-materials.module';
import { CounterStore } from '../../stores/counter.store';

@Component({
  selector: 'app-counter',
  imports: [AllMaterialsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit {

  readonly counterStore = inject(CounterStore);

  ngOnInit(): void {}

}