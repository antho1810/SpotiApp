//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  //paises: any[] = [];

  constructor(private spotify: SpotifyService /*http: HttpClient*/) {
  

    this.spotify.getNewReleases()
    .subscribe( (data: any) => {
      console.log(data.albums.items);
      this.nuevasCanciones = data.albums.items;
    })
    /*   console.log('Constructor del Home');
        this.http.get('https://restcountries.eu/rest/v2/lang/es')
          .subscribe((resp: any) => {
            this.paises = resp;
            console.log(resp);
          })*/
  }

  ngOnInit(): void {
  }

}
