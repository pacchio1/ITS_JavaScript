import { AfterViewInit, Component, OnInit } from '@angular/core';
import { StudentiService } from 'src/app/services/studenti.service';

@Component({
  selector: 'app-studenti',
  templateUrl: './studenti.component.html',
  styleUrls: ['./studenti.component.css']
})
export class StudentiComponent implements OnInit, AfterViewInit{


  STUDENTI : any;
  counter=0
  image = 'https://material.angular.io/assets/img/examples/shiba2.jpg'

  constructor(private studentiService:StudentiService) {
    console.log('costruttore');
    
  }
  ngAfterViewInit(): void {
    console.log('vista inizializzata');
    
  }

  ngOnInit(): void {
    console.log('ngOnInit');

    this.studentiService.getStudenti().subscribe(
      data => {
        console.log(data);
        this.STUDENTI = data
      }
    )
  }


  onClick() {
    this.counter++
    console.log('hai cliccato', this.counter );
    if (this.counter % 2  == 0){
      this.image = ''
    }
  }


}
