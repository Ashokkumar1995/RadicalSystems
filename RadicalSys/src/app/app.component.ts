import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from './app.service';
import { Customer } from './model/customer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(MatSort)
  sort!: MatSort;

  // myForm: FormGroup = new FormGroup;

  title = 'RadicalSys';
  displayedColumns: string[] = [
    '$$hashKey',
    'CustColour',
    'bacsAsk',
    'checkBacs',
    'cusPayID',
    // 'custVatCode',
    // 'custVatName',
    // 'custVatRate',
    'custcolourNum',
    'customernumber',
    'email',
    'firstcontact',
    'fullname',
    'icountry',
    'inccustk',
    'inccustt',
    'inccustu',
    'invFiveLineAddress',
    'invFourLineAddress',
    'invSevenLineAddress',
    'invSixLineAddress',
    'invThreeLineAddress',
    'invTwoLineAddress',
    'isactive',
    'paymentType',
    'phone',
    'runBacs',
    'sitename',
    'startupDate',
    'taxLabel',
    'theApsName',
    'theCustId',
    'theMainAddress',
    'theSiteId',
    'theStatus',
    'unitlist',
  ];
  dataSource = new MatTableDataSource();
  hashKeyControl = new FormControl('');
  selectedCustomer: Customer = <Customer>{};
  public searchValue: any = {};
  public searchCondition: any = {};

  constructor(private service: AppService) {
    this.service.getCustomerDetails().subscribe((data: Customer[]) => {
      this.dataSource.data = data;
    });
  }

  getRecord(data: Customer) {
    console.log(data);
    this.selectedCustomer = data;
  }

  applyFilter(filterValue: any) {
    let fvalue = filterValue.target.value;
    this.dataSource.filter = fvalue.trim().toLowerCase();
  }

  setupFilter(column: string) {
    this.dataSource.filterPredicate = (d: any, filter: string) => {
      const textToSearch = (d[column] && d[column].toLowerCase()) || '';
      return textToSearch.indexOf(filter) !== -1;
    };
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (data: any, filtre: any) => {
      return (data.$$hashKey = filtre);
    };
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  // applyFilter1(filterValue: string) {
  //   }
}
