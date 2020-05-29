import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from "@angular/forms"; 

import { AppComponent } from './app.component';
import { ProductsComponent } from './Display/products.component';
import { ApiserviceService } from './server/apiservice.service';
import { CreateComponent } from './Create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
