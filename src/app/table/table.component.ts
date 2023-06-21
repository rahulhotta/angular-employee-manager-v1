import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  constructor(private employeeService :  EmployeeService){}
  allEmployees:any = this.employeeService.employeeList;
   
  ngOnInit(){
    console.log("All employees are",this.allEmployees)
  }
}
