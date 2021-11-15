import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SecuritiesModel } from '@models/securities.model';
import { HttpService } from '@services/http.service';
import { AnonymousSubscription } from 'rxjs/Subscription';
import { SecuritiesDataTableComponent } from '@components/securities-data-table/securities-data-table.component';
import { TYPES } from '@constants/config.constant';
import { interval } from 'rxjs';

@Component({
  selector: 'securities',
  templateUrl: './securities.component.html',
  styleUrls: ['./securities.component.scss']
})
export class SecuritiesComponent implements OnInit, OnDestroy {

  public tableColumns: Array<string>;
  public securitiesData: Array<SecuritiesModel>;
  public pageSize: number;
  public totalCount: number;
  private start: number;
  private sortBy: string;
  private orderBy: string;
  private timerSubscription: AnonymousSubscription;

  constructor(private httpService: HttpService) {
    this.tableColumns = Object.keys(TYPES);
    this.securitiesData = [];
    this.sortBy = this.tableColumns[0];
    this.orderBy = 'asc';
    this.start = 0;
    this.pageSize = 10;
    this.totalCount = 30;
  }

  /**
   * This method will trigger when component initialised
   */
  ngOnInit(): void {
    this.fetchSecurities();
    this.getSecuritiesInInterval();
  }

  /**
   * This method will trigger when user click to sort
   * @Param {Object}
   */
  public sortChange(change): void {
    this.sortBy = change.active;
    this.orderBy = change.direction;
    this.fetchSecurities();
  }

  /**
   * This method will trigger when user click to paginate
   * @Param {Object}
   */
  public pageChange(change): void {
    this.start = (change.pageIndex * change.pageSize);
    this.fetchSecurities();
  }

  /**
   * This method is used to fetch securities
   */
  private fetchSecurities(): void {
    debugger;
    this.httpService.fetchSecurities(this.start, this.pageSize, this.sortBy, this.orderBy)
      .subscribe((result) => {
        this.securitiesData = result;
      });
  }

  /**
   * This method is used to fetch securities for every 5 seconds
   */
  private getSecuritiesInInterval(): void {
    const source = interval(5000);
    this.timerSubscription = source.subscribe(() => {
      this.fetchSecurities();
    });
  }

  /**
   * This method will trigger when component is destroyed
   */
  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}
