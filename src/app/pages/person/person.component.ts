import { Component, inject, OnInit, viewChild, Signal, WritableSignal, signal, computed, effect, EffectRef } from '@angular/core';
import { PersonStore } from '../../stores/person.store';
import { AllMaterialsModule } from '../../all-materials.module';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Person } from '../../models/person.interface';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-person',
  imports: [AllMaterialsModule, MatTableModule],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'age'];
  dataSource = new MatTableDataSource<Person>([]);
  showTable: WritableSignal<boolean> = signal(false);

  isDataLoaded: Signal<boolean> = computed(() => {
    if(this.personStore.persons().length > 0) {
      return true;
    }

    return false;
  });

  prepareData: EffectRef = effect(() => {
    if(this.isDataLoaded()) {
      this.dataSource = new MatTableDataSource<Person>(this.personStore.persons());
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
    console.log($event);

    this.personStore.updatePageIndex($event.pageIndex);
    this.personStore.updatePageSize($event.pageSize);
  }

}
