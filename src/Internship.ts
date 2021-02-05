import faker from "faker";

class internship{
    busName: string;
    location: {
        lon: number;
        lat: number;
    }

    get BusinessName(): string {
        return this.busName;
    }

    get internshipLocation(): { lon: number; lat: number } {
        return this.location;
    }

}


export class Internship {
  businessName: string;
  location: {
    latitude: number;
    longitude: number;
  };
  constructor() {
    this.businessName = faker.company.companyName();
    this.location = {
      latitude: parseFloat(faker.address.latitude()),
      longitude: parseFloat(faker.address.longitude()),
    };
  }
}
