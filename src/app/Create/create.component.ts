import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"; 
import { Router } from "@angular/router";
import { ApiserviceService } from '../server/apiservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  empformlabel: string = 'Add Employee';  
  empformbtn: string = 'Save'; 

  constructor(private formBuilder: FormBuilder, private router: Router, private empService: ApiserviceService) { }
  
  addForm: FormGroup;  
  btnvisibility: boolean = true;

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      productName: ['Angular1',Validators.required],
      description: ['Test description',Validators.required],
      mrc: ['5'],
      nrc: ['5'],
      discount: ['3'],
      createdBy: ['Admin'],
      createdDate: [],
    });  
  
    let empid = localStorage.getItem('editEmpId');  
    if (+empid > 0) {  
      this.empService.getById(+empid).subscribe(data => {  
        this.addForm.patchValue(data);  
      })  
      this.btnvisibility = false;  
      this.empformlabel = 'Edit Employee';  
      this.empformbtn = 'Update';  
    }  
  }

  onSubmit() {  
    console.log('Create fire');  
    this.empService.create(this.addForm.value)  
      .subscribe(data => {  
        this.router.navigate(['products']);  
      },  
      error => {  
        alert(error);  
      });  
  }  
  
  onUpdate() {  
    let empid = localStorage.getItem('editEmpId');  

    console.log('Update fire'+JSON.stringify(this.addForm.value)+"id="+empid); 

    this.empService.update(empid,this.addForm.value).subscribe(data => {  
      this.router.navigate(['products']);  
    },  
      error => {  
        alert(error);  
      });  
   }  

}
