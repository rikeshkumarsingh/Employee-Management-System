import { Component } from '@angular/core';
import { Employ } from '../employ'
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent {
  employForm: Employ =new Employ(0, '', '', 0);
  employs: any;

  constructor(private emoloyservice: EmployeeService, private router: Router) {}

  addEmploy(): void {
    this.emoloyservice.addEmploy(this.employForm)
      .subscribe(newEmploy => {
        this.employs.push(newEmploy);
        this.employForm = new Employ(0, '', '', 0);// Clear the form
        
      });
      this.router.navigate(['/employ']);
  }

}
