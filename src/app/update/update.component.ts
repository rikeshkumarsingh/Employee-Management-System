import { Component } from '@angular/core';
import { Employ } from '../employ';
import {Router}from '@angular/router'

import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  employs: Employ[] = [];
  employForm: Employ =new Employ(0, '', '', 0);
  constructor(private emoloyservice: EmployeeService,private router:Router) { }
  
  updateEmployee(employ: Employ): void {
    this.emoloyservice.updateEmploy(employ)
      .subscribe(updatedEmploy => {
        // Find the index of the updated employee in the array
        const index = this.employs.findIndex(e => e.id === updatedEmploy.id);
        if (index !== -1) {
          // Update the employee in the local array
          this.employs[index] = updatedEmploy;
        }
      });
      this.router.navigate(['/employ']);
  }

}
