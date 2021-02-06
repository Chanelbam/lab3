import { Internship } from "./Internship";
import { Students } from "./Students";

 
export class CustomizedMap {
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
  addPin(pinnable: Students | Internship) {
    let contentString: string = "";
    const googlepin = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: pinnable.location.latitude,
        lng: pinnable.location.longitude,
      },
      });
  
      if(pinnable instanceof Students) {
        contentString = `<h2>${pinnable.fullName}</h2>`;
      } else if (pinnable instanceof Internship) {
        contentString = `<h2>Welcome to${pinnable.businessName}'s Internship!</h2>`;
      }
  
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
  
      googlepin.addListener("click", () => {
        return infowindow.open(this.googleMap, googlepin);
      });
    }
  }
