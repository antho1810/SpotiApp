import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { 
    console.log('Spotify Service Listo');
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAdnnK8Aj5gfakx-N29ryDaOQKlsqM813n0zHVgxEDswsSXYFNqXBNdcA9S61z4k-qZtX2uNQb5BAXhHro'

    })

   return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
