import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployComponent} from './employ/employ.component';
import {AddempComponent} from './addemp/addemp.component';
import {UpdateComponent}from './update/update.component';

const routes: Routes = [
{path:'employ',component:EmployComponent},
{path:'',redirectTo:'employ',pathMatch:'full'},
{path:'add',component:AddempComponent},
{path:'update/:id',component:UpdateComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
