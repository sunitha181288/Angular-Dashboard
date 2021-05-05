import { Component, EventEmitter, Input, Output, ViewChild, AfterViewInit } from '@angular/core';
import { SecuritiesModel } from '@models/securities.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge } from 'rxjs';
@Component({
  selector: 'securities-data-table',
  templateUrl: './securities-data-table.component.html',
  styleUrls: ['./securities-data-table.component.scss']
})
export class SecuritiesDataTableComponent implements AfterViewInit {

  @Input() public securitiesData: Array<SecuritiesModel>;
  @Input() public columns: Array<string>;
  @Input() public totalCount: number;
  @Input() public pageSize: number;
  @Output() public sortChange = new EventEmitter<{
    active: string;
    direction: string;
  }>();
  @Output() public pageChange = new EventEmitter<{
    length: number;
    pageIndex: number;
    pageSize: number;
    previousPageIndex: number;
  }>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /**
   * This method will trigger when component view is initialised
   */
  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe((event) => {
      this.sortChange.emit(event);
    });
    this.paginator.page.subscribe((event) => {
      this.pageChange.emit(event);
    });
  }
}
