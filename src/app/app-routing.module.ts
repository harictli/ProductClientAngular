import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './Display/products.component';
import { CreateComponent } from './Create/create.component';


const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'create',component:CreateComponent},
  {path:'',redirectTo:'/products',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
