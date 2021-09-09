import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() saveStudent = new EventEmitter<any>();
  @ViewChild('closeBtn') closeBtn: ElementRef ;
  display = "block"
  submitted = false;
  image:any = null;
  student: any = {
    name:"",
    patronus:"",
    dateOfBirth:null,
    image:""
  }
 studentForm = new FormGroup({
    name: new FormControl(this.student.name, [
      Validators.required,
      Validators.minLength(4)
    ]),
    patronus: new FormControl(this.student.patronus),
    dateOfBirth: new FormControl(this.student.dateOfBirth, Validators.required),
    image: new FormControl(this.student.image),
  });

  constructor() { }

  ngOnInit(): void {

    this.onReset()
  }

  submit(){
    this.submitted = true;
    var obj:any= this.studentForm.value;
    console.log(this.studentForm.invalid)
    if (this.studentForm.invalid) {
      return;
    }
    obj.image = this.image
    this.saveStudent.emit(obj);
     this.closeModal()
    
  }

   getBase64(event:any) {
     var that= this
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      //me.modelvalue = reader.result;
      that.image = reader.result
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

  get f(): { [key: string]: AbstractControl } {
    return this.studentForm.controls;
  }

  onReset(): void {
    this.submitted = false;
    this.studentForm.reset();
    this.image = null;
    this.student = {
      name:"",
      patronus:"",
      dateOfBirth:null,
      image:""
    }
  }

   closeModal(): void {
     this.onReset()
    this.closeBtn.nativeElement.click();
  }

}
