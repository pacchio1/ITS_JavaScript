import { Component, OnInit } from '@angular/core';
import { ScienziatiService } from 'src/app/services/scienziati.service';

@Component({
  selector: 'app-scienziati',
  templateUrl: './scienziati.component.html',
  styleUrls: ['./scienziati.component.css']
})
export class ScienziatiComponent implements OnInit{

  scienziati: any

  constructor(private service: ScienziatiService){}

  ngOnInit(): void {
    this.service.getScienziati().subscribe(
      res => this.scienziati = res
    )
  }

}
