import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit{

  mensaje:string="Enero";


  constructor(){}

  ngOnInit():void{

    console.log(this.mensaje)
  }
  enviarmensaje():void{

  }
}
