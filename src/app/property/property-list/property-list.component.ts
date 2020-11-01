import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  sellRent = 1;
  Properties: Array<IProperty> ;

  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.sellRent = 2; // menas we will get only rent properties
    }

    this.housingService.getAllProperties(this.sellRent).subscribe(
      data => {
        this.Properties = data;
      }, error => {
        console.log(error);
      }
    )
  }

}
