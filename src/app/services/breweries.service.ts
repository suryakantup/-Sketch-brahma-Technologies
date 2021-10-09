import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BreweriesService {
public brewriesListUrl="https://api.openbrewerydb.org/breweries"
public breweriesByState="https://api.openbrewerydb.org/breweries?by_state="
public breweriesByType="https://api.openbrewerydb.org/breweries?by_type="
  constructor(public httpClient: HttpClient) { }

  getBrewriesList() {
    let response = this.httpClient.get(this.brewriesListUrl)
    return response;
  }
  getBrewriesListByState(state:string) {
    let response = this.httpClient.get(this.breweriesByState+state)
    return response;
  }
  getBrewriesListByType(type:string) {
    let response = this.httpClient.get(this.breweriesByType+type)
    return response;
  }
}
