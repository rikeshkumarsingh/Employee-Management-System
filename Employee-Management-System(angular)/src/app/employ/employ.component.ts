import { Component, OnInit } from '@angular/core';
import { Employ } from '../employ'
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-employ',
    templateUrl: './employ.component.html',
    styleUrls: ['./employ.component.css']
})
export class EmployComponent implements OnInit {

    employForm: Employ =new Employ(0, '', '', 0);
    constructor(private emoloyservice: EmployeeService, private router: Router) { }

    employs: Employ[] = [];

    ngOnInit(): void {
        this.getEmployee();
        
    }

    private getEmployee() {
        this.emoloyservice.getEmployList()
        .subscribe(data => {
            this.employs = data;
        });

    }

   
    navigateToUpdate(id: number) {
      this.router.navigate(['/update', id]);
    }
      
    
      
    
      deleteEmployee(id: number): void {
        this.router.navigate(['/employ']);
        this.emoloyservice.deleteEmploy(id)
          .subscribe(() => {
            // Remove the deleted employee from the local array
            this.employs = this.employs.filter(e => e.id !== id);
          });
         
      }

}
