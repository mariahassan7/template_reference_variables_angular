import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-educative-component',
  templateUrl: './educative-component.component.html',
  styleUrls: ['./educative-component.component.css']
})

export class EducativeComponentComponent implements OnInit{

  @Input() educative_user_input: String = "No text entered";
  constructor(){

  }
  ngOnInit(): void {
    this.set_educative_user_data(this.educative_user_input);
  }
  ngOnchnages(){
    alert(`Hey this is teh child component, and you entered :  ${this.educative_user_input}`);
  }

  public set_educative_user_data(educative_user_input: String){
    this.educative_user_input = educative_user_input;
  }

}
