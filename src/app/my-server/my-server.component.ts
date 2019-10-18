import { Component, OnInit } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-my-server',
  templateUrl: './my-server.component.html',
  styleUrls: ['./my-server.component.css']
})
export class MyServerComponent implements OnInit {

  serverName = ""
  serverContent = ""
  server=[]
  
  constructor() { }

  ngOnInit() {
  }


  addServer(color){    
    this.server.push({
      name:this.serverName,
      content: this.serverContent,
      color:color
    });

  }
}
