import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pets: any;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) { }

  ngOnInit() {
    console.log("Hello from home.component.ts")
    this.getPets()
  }

  getPets() {
    console.log("GETTING PETS")
    this._httpService.getAllPets().subscribe(data => {
      console.log("Got our pets!", data);
      this.pets = data;
    });
  }



}
