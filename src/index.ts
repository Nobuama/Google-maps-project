/// <reference types="@types/google.maps" />
// import { User } from "./User";
// import { Company } from "./Company";

google.maps

const mapDiv = document.getElementById('map');

const map = new google.maps.Map(mapDiv as HTMLElement, {
  zoom: 1, 
  center: {
    lat: 0,
    lng: 0
  }
});

