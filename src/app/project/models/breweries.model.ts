export class BreweriesModel{
    id: string;
    name: string;
    brewery_type: string;
    street: string;
    address_2?: any;
    address_3?: any;
    city: string;
    state: string;
    county_province?: any;
    postal_code: string;
    country: string;
    longitude: string;
    latitude: string;
    phone: string;
    website_url: string;
    updated_at: Date;
    created_at: Date;
    
    /**
     *
     */
    constructor() {
        this.id="";
        this.name="";
        this.brewery_type="";
        this.street="";
        this.address_2="";
        this.address_3="";
        this.city="";
        this.state="";
        this.county_province="";
        this.postal_code="";
        this.country="";
        this.longitude="";
        this.latitude="";
        this.phone="";
        this.website_url="";
        this.updated_at= new Date();
        this.created_at= new Date(); 
    }
}