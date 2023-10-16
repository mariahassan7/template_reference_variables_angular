import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = "Educative's Angular App";
  educative_user_input: String = "No text entered"
  @ViewChild('educative_ng_template', { read: TemplateRef })
  educative_ng_template!: TemplateRef<any>;

  constructor(private my_view_reference:ViewContainerRef){

  }
  ngOnInit(){

  }
  ngAfterViewInit(){
    this.my_view_reference.createEmbeddedView(this.educative_ng_template);
  }

  alert_educative_user(educative_user_input:String){
    this.educative_user_input=educative_user_input
    alert("You entered : " + this.educative_user_input);
  }

}
