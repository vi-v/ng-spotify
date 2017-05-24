import { Component } from '@angular/core';
import { SpotifyService } from './services/spotify.service';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  providers: [ SpotifyService ]
})
export class AppComponent  { name = 'Angular'; }
