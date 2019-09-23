import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empmaster',
  templateUrl: './empmaster.component.html',
  styleUrls: ['./empmaster.component.css']
})
export class EmpmasterComponent implements OnInit {
  constructor(private _route:Router) { }

  ngOnInit() {
  }
  submit(){
    let button1 = document.getElementById("radio1") as HTMLInputElement;
    let button2 = document.getElementById("radio2") as HTMLInputElement;
    let button3 = document.getElementById("radio3") as HTMLInputElement;

if (button1.checked){
  this._route.navigate(['/new']);
}else if (button2.checked) {
  this._route.navigate(['/toapprove']);
}else if (button3.checked) {
  this._route.navigate(['/forsecurity']);
}
}
}