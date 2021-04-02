import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableColumns } from 'src/app/models/table-columns.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './drag-drop-table.component.html',
  styleUrls: ['./drag-drop-table.component.scss']
})
export class DragDropTableComponent implements OnInit {
  @Input() data: any;
  @Input() columns: TableColumns[];
  @Output() modifiedColumns = new EventEmitter<TableColumns[]>();

  public columnHeaders: String[];

  ngOnInit() {
    this.columnHeaders = this.columns.map(item => item.title);
  }

  updateColumns(): void {
    console.log('columns: ', this.columns);
    this.modifiedColumns.emit();
  }



  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);

    // reassign position
    // The column was moved right
    console.log('event.currentIndex: ', event.currentIndex, 'event.previousIndex: ', event.previousIndex)
    if (event.currentIndex > event.previousIndex) {
      console.log('currentIndex is greater')
      for (let i = event.currentIndex; i >= event.previousIndex; i--) {
        console.log('i: ', i, ' this.columns[i]: ', this.columns[i]);
        this.columns[i].position = i;
      }
      console.log(' this.columns: ', this.columns)
    } else {
      // The column was moved left
      console.log('currentIndex is less')
      for (let i = event.currentIndex; i <= event.previousIndex; i++) {
        console.log('i: ', i, ' this.columns[i]: ', this.columns[i]);
        this.columns[i].position = i;
      }
      console.log(' this.columns: ', this.columns)
    }

  }

  filterTable(event, headerProperty) {
    console.log('filterTable event: ', event.target.value, ' headerProperty: ', headerProperty);
  }

  sortTable(event, headerProperty) {
    console.log('sortTable event: ', event, ' headerProperty: ', headerProperty);
  }


}
