import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableColumns } from 'src/app/models/table-columns.model';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

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

  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century'
  ];

  ngOnInit() {
    this.columnHeaders = this.columns.map(item => item.title);
  }

  updateColumns(): void {
    this.modifiedColumns.emit();
  }



  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    // moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }

  
}
