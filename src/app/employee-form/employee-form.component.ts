import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
  public currentEmp = {
    empId:"",
    empName:"name",
    empDOJ:"",
    empProject:"",
    empImage:"",    
  }
  addHandler(){
    console.log(this.currentEmp)
  }
}
