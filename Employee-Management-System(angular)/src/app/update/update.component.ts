import { Component } from '@angular/core';
import { Employ } from '../employ';
import {Router}from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  employs: Employ[] = [];
  employForm: Employ =new Employ(0, '', '', 0);
  employId: any;
  constructor(
    private emoloyservice: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.employId = params['id']; // Get the ID from the URL
    });
  }
  ngOnInit() {
    // Fetch the employee data based on the ID
    this.emoloyservice.getEmployee(this.employId)
      .subscribe((employ: Employ) => {
        this.employForm = employ;
      });
  }
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
