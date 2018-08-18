import { Component, OnInit,ViewChild } from '@angular/core';
import { InfoService } from '../info/info.service';
import {BaseChartDirective} from 'ng2-charts/ng2-charts';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selectedOption: string;
  printedOption: string;
  today:any;
  data :any = {};
  labels =  ['Cantidad de Accidentes en Total'];
  public options = [
    { name: "Alajuela", value: 1 },
    { name: "San José", value: 2 },
    { name: "Heredia", value: 3 },
    { name: "Puntarenas", value: 4 },
    { name: "Guanacaste", value: 5 },
    { name: "Cartago", value: 6 },
    { name: "Limón", value: 7 }
  ]
  constructor(private info: InfoService) {

  }
    
  @ViewChild("baseChart") chart: BaseChartDirective;

  public printe() {

    this.printedOption = this.selectedOption;
    this.today = new Date(this.today).toISOString().substring(0,4);

    this.info.getInfoSpecific(this.today,this.printedOption).subscribe(res => {
      this.data = res;
      
      this.chartData = [{
        label: "Provincia: " + this.printedOption + ". Año: " + this.today,
        data: [Object.keys(this.data).length]
      }]; 
    });


    
  }

  chartData = [
    {
      label: "Provincia y Año.",
      data: [],
    }
  ];
  // CHART COLOR.
  colors = [
    { // 1st Year.
      backgroundColor: 'teal' /*rgba(30, 169, 224, 0.8) */
    }
  ];

  ngOnInit() {
    /*this.info.getInfoSpecific("0000000","0000000").subscribe(res => {
      this.data = res;
    });*/
  }


}
