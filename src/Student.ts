import faker from "faker";

class students{
    private _firstName: string;
    private _lastName: string;
    private _location: {
        lon: number;
        lat: number;
    }

    get StudentName(): string {
        return this._firstName;
    }


    get Lastname(): string {
        return this._lastName;
    }


    get Studentlocation(): { lon: number; lat: number } {
        return this._location;
    }


    }


export class Student {
  firstName: string;
  lastName: string;
  location: {
    latitude: number;
    longitude: number;
  };
  constructor() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.location = {
      latitude: parseFloat(faker.address.latitude()),
      longitude: parseFloat(faker.address.longitude()),
    };
  }
}