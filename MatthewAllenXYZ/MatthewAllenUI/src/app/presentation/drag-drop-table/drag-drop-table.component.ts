import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableColumns } from 'src/app/models/table-columns.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

const SORT_NEUTRAL = 'neutral';
const SORT_ASC = 'asc';
const SORT_DESC = 'desc';


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
  @Output() filterTableEvent = new EventEmitter<{value: string, property: string}>();
  @Output() sortTableEvent = new EventEmitter<{value: string, property: string}>();

  public columnHeaders: String[];
  public savedCollection: boolean = false;
  public sorters: Map<string, string>;


  ngOnInit() {
    // console.log('dragdrop init')
    this.columnHeaders = this.columns.map(item => item.title);
    this.sorters = this.setSorters();
  }

  updateColumns(): void {
    this.modifiedColumns.emit();
  }

  saveColumns(): void {
    this.modifiedColumns.emit();
  }


  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);

    // reassign position
    // The column was moved right
    if (event.currentIndex > event.previousIndex) {
      for (let i = event.currentIndex; i >= event.previousIndex; i--) {
        this.columns[i].position = i;
      }
    } else {
      // The column was moved left
      for (let i = event.currentIndex; i <= event.previousIndex; i++) {
        this.columns[i].position = i;
      }
    }

  }

  filterTable(event, property): void {
    const value = event.target.value;
    this.filterTableEvent.emit({value, property});
  }

  setSorters(): Map<string,string> {
    let sorterMap = new Map();
    this.columns.forEach(header => sorterMap.set(header.property, SORT_NEUTRAL));
    return sorterMap;
  }

  get sorterIcon() {
    return (sortValue: string) => {
        switch(sortValue) {
          case SORT_ASC: return 'arrow_upward';
          case SORT_DESC: return 'arrow_downward';
          case SORT_NEUTRAL:
          default: return 'swap_vert';
        }
    }
  }

  sortTable(value, property): void {
    this.sorters.forEach((value, key) => {
      if(key === property) {
        switch(value) {
          case SORT_NEUTRAL: {
            this.sorters.set(property, SORT_ASC);
            break;
          }
          
          case SORT_ASC: {
            this.sorters.set(property, SORT_DESC);
            break;
          }
    
          case SORT_DESC: 
          default: {
            this.sorters.set(property, SORT_NEUTRAL);
            break;
          }
        }
      } else if (value !== SORT_NEUTRAL) {
        this.sorters.set(key, SORT_NEUTRAL);
      }
    });

    const sort = {value: this.sorters.get(property), property}

    this.sortTableEvent.emit(sort)
  }


}
