import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

import { InfoService } from '../info/info.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private info: InfoService) { }
  data :any = {};
  
  ngOnInit() {
    this.info.getinfo().subscribe(res => {
      this.data = res;
    })

  }

}
