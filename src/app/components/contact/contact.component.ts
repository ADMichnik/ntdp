import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  mapOptions: google.maps.MapOptions = {
    center: { lat: 50.053375170737034, lng: 21.415584258659322 },
  };
  markerPosition = { lat: 50.053375170737034, lng: 21.415584258659322 };
}
