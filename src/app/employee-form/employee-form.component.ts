import { Component, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
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
  @Input() modal: any;
  @Input() isEditClicked:any;
  constructor(private employeeService :  EmployeeService){}
  addHandler(){
    this.currentEmp.empId = new Date().getTime().toString();
    console.log(this.currentEmp)
    this.modal.close('Save click')
    this.employeeService.addDataToEmpList(this.currentEmp)
  }
}
