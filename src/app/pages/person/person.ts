import { Component, inject, OnInit, viewChild, Signal, WritableSignal, signal, computed, effect, EffectRef } from '@angular/core';
import { PersonStore } from '../../stores/person.store';
import { AllMaterialsModule } from '../../all-materials.module';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PersonInterface } from '../../models/person.interface';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-person',
  imports: [AllMaterialsModule, MatTableModule],
  templateUrl: './person.html',
  styleUrl: './person.scss'
})
export class Person implements OnInit {

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'age'];
  dataSource = new MatTableDataSource<PersonInterface>([]);
  showTable: WritableSignal<boolean> = signal(false);

  isDataLoaded: Signal<boolean> = computed(() => {
    if(this.personStore.persons().length > 0) {
      return true;
    }

    return false;
  });

  prepareData: EffectRef = effect(() => {
    if(this.isDataLoaded()) {
      this.dataSource = new MatTableDataSource<PersonInterface>(this.personStore.persons());
      this.showTable.set(true);

      if(this.paginator()) {
        this.paginator()!.pageSize = this.personStore.pagerSize();
        this.paginator()!.pageIndex = this.personStore.pageIndex();

        this.dataSource.paginator = this.paginator()!;        
      }
    }
  });

  paginator = viewChild<MatPaginator>('paginator');

  readonly personStore = inject(PersonStore);

  ngOnInit(): void {
    if(this.personStore.persons().length === 0) {
      this.personStore.getAllPersons();
    }    
  }
  
  updateChanges($event: PageEvent): void {
    this.personStore.updatePageIndex($event.pageIndex);
    this.personStore.updatePageSize($event.pageSize);
  }

}