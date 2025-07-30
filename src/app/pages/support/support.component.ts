import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

  SupportForm = new UntypedFormGroup({
    email: new UntypedFormControl("", [Validators.required, Validators.email]),
    subject: new UntypedFormControl("", [Validators.required]),
    message: new UntypedFormControl("", [Validators.required])
  })

  sentInfo(){
    alert("Thank you for contacting us! We will provide you with an answer within 24 hours! :)")
    window.location.reload();
  }
}
