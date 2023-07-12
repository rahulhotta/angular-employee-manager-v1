import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employeeList: any = [
    {
      empId: '1',
      empName: 'rahul',
      empDOJ: '24-12-2023',
      empProject: 'unify',
      empImage: '',
    },
    {
      empId: '2',
      empName: 'rahul 1',
      empDOJ: '24-12-2023',
      empProject: 'unify',
      empImage: '',
    },
    {
      empId: '3',
      empName: 'rahul 2',
      empDOJ: '24-12-2023',
      empProject: 'unify',
      empImage: '',
    },
  ];
  getAllEmployees() {
    return this.employeeList;
  }
  addDataToEmpList(data: any) {
    this.employeeList.push(data);
  }
  deleteDataFromEmpList(empId: any) {
    let index = this.employeeList.findIndex((emp: any) => {
      return emp.empId === empId;
    });
    this.employeeList.splice(index, 1);
  }
  editDataInEmpList(empId: any, empData: any){
    let index = this.employeeList.findIndex((emp: any) => {
      return emp.empId === empId;
    });
    this.employeeList[index] = empData
  }

  constructor() {}
}
