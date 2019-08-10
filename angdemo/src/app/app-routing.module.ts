import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimeListComponent } from './prime/prime-list/prime-list.component';
const routes: Routes = [{
  path:'',
  component: PrimeListComponent,
},{
  path:'Prime',
  children: [
    {  
    path: "list", 
    component: PrimeListComponent,
    //resolve: {
    //  data: UserListResolver
    //}
    }
  ]},

{ path: '**',
component: PrimeListComponent,
}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
