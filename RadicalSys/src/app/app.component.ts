import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from './app.service';
import { Customer } from './model/customer.model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(MatSort)
  sort!: MatSort;

  title = 'RadicalSys';
  // @ViewChild(MatSort)
  // sort!: MatSort;
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
  // dataSource: Customer[] = [];
  dataSource = new MatTableDataSource();
  hashKeyControl = new FormControl('');
  // filterValues = {};
  public searchValue: any = {};
  public searchCondition: any = {};
  constructor(private service: AppService) {
    this.service.getCustomerDetails().subscribe((data: Customer[]) => {
      // console.log(data);
      this.dataSource.data = data;
    });
  }
  getRecord(data: any) {
    console.log(data);
  }
  applyFilter() {
    console.log(this.searchValue);
    // let searchFilter: any = {
    //   values: this.searchValue,
    // };

    this.dataSource.filter = this.searchValue;
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (data: any, filtre: any) => {
      // let result = true;
      // let keys = Object.keys(data); // keys of the object data
      console.log(data);
      console.log(filtre);
      return (data.$$hashKey = filtre);
      // console.log(keys);
      // let searchCondition = filtre.conditions[keys[0]];
      // console.log(searchCondition);
      // for (const key of keys) {
      //   let searchCondition = filtre.conditions[key]; // get search filter method

      //   if (searchCondition && searchCondition !== 'none') {
      //     if (
      //       filtre.methods[searchCondition](p[key], filtre.values[key]) ===
      //       false
      //     ) {
      //       // invoke search filter
      //       result = false; // if one of the filters method not succeed the row will be remove from the filter result
      //       break;
      //     }
      //   }
      // }

      // return result;
    };

    // this.hashKeyControl.valueChanges.subscribe((data) => {
    //   console.log(data);
    // });
    //   this.dataSource.filterPredicate = (data: Customer, filter: string) => {
    //   return data.$$hashKey == filter;
    //  };
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter1(filterValue: string) {
    // this.hashKeyControl.value;
    // console.log(filterValue);
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    // this.dataSource.filter
    // this.officePinList.filter = filterValue.trim().toLowerCase();
  }
}
