import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
    title : {
						display : true,
						text : 'Test'
		},

  };
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
 
    { 
      data: [40, 20, 10, 30 ], 
      label: 'Arrival(ARR)', 
      stack: 'a',
   
    },
     { 
      data: [15, 25, 20, 20 ], 
      label: 'Departure(DEP)', 
      stack: 'a', 
    },
    
   ];
  public barChartLabels: string[] = ['Terminal1', 'Terminal2', 'Terminal3','International'];
  
  constructor() { }

  ngOnInit() {
     setInterval(() => this.randomize(), 1000);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      ];

      
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    
  }
}
