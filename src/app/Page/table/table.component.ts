import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddFormComponent } from '../add-form/add-form.component';
import { IOwner } from './../Models/iowner';
import { OwnerService } from './../Service/owner.service';
import { IGetOwnersList, IOwnerValue } from './../Models/i-get-owners-list';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  displayedColumns: string[] = [
    'FirstName',
    'LastName',
    'Mail',
    'Address',
    'About',
    'DOB',
    'Phone',
    'WA_Number',
    'Bank',
    'gender',
    'BankAccount',
  ];
  // dataSource = new MatTableDataSource<IOwnerValue[]>();
//  dataSource:any = []
dataSource = new MatTableDataSource<IOwnerValue[]>();
  private paginator!: MatPaginator;
  private sort!: MatSort;
  constructor(public dilaog: MatDialog, private OwnerService: OwnerService) { }

  // @ViewChild(MatSort) set matSort(ms: MatSort) {
  //   this.sort = ms;
  //   this.setDataSourceAttributes();
  // }

  // @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
  //   this.paginator = mp;
  //   this.setDataSourceAttributes();
  // }

  // setDataSourceAttributes() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;

  // }

  ngOnInit(): void {
  
    this.getOwnerList()
  }

  
getOwnerList(){
  this.OwnerService.getOwnersList().
     subscribe((value:any) =>{
      this.dataSource.data= value.data;
      console.log(this.dataSource.data);
      // console.log(value.data.$values);
  })
  // this.OwnerService.getOwnersList().subscribe({
  //   next(value) {
  //     console.log(value );
  //     // this.ownersListData =  value.data.$values
  //     console.log(value); 
  //     this.dataSource.data =  value
  //   },
  // })
}
//  _getOwnerList(payload:IGetOwnerPayload){
//   this.OwnerService.getOwnersList(payload).subscribe({
//     next:(owerList:IGetOwnersList)=>{
//       this.ownersListData = owerList.data.$values
//     }
//   })
// }
  openDialog(): void{
    const dialogRef = this.dilaog.open(AddFormComponent,{
      width:'400px',
      data: {owner: null}
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
}
