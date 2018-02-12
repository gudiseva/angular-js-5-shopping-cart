import { Component, OnInit } from '@angular/core';
import { AjaxCallsService } from '../../services/ajax-calls.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers: [AjaxCallsService]
})
export class AlbumsComponent implements OnInit {

  albums = [];
  constructor(private albumService: AjaxCallsService) { }

  ngOnInit() {
    this.albumService.getAlbums().subscribe(
      /*
      (data) => console.log(data), // success callback
      //(data) => this.albums = <any[]>data, // modified to get rid of the errors
      (err) => console.error(err), // failure callback
      () => console.log('completed')
      */

      (data: HttpResponse<Object>) => {
        this.albums = <any[]>data['body'];
      },
      (err) => console.error(err), // failure callback
      () => console.log('completed')
    );
  }

}
