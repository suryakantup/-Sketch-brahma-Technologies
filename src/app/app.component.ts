import { Component, OnInit } from '@angular/core';
import { BreweriesModel } from './project/models/breweries.model';
import { BreweriesService } from './services/breweries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[BreweriesModel, BreweriesService]
})
export class AppComponent implements OnInit {
  public breweriesList:BreweriesModel[]=[]
  public searchState:string="";
  public searchType:string=""
  ngOnInit(): void {
    this.getBreweriesList()
  }

  /**
   *
   */
  constructor(public svcBreweries:BreweriesService) {
    
    
  }

  getBreweriesList(){
    this. svcBreweries.getBrewriesList().subscribe(result=>{
      this.breweriesList=result as BreweriesModel[]
    })
  }

  getBreweriesListByState(state:string){
    
    state=state.replace(" ", "_")
    this. svcBreweries.getBrewriesListByState(state).subscribe(result=>{
      this.breweriesList=result as BreweriesModel[]
    })
  }

  getBreweriesListByType(type:string){
    this. svcBreweries.getBrewriesListByType(type).subscribe(result=>{
      this.breweriesList=result as BreweriesModel[]
    })
  }
}
