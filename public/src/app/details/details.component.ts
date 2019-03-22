import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  pet: any;
  id: string;
  skills: any;
  liked: boolean;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) { }

  ngOnInit() {
    this.liked = false;
    this.pet = { "name": "", "type": "", "description": "", "likes": "", "skills": [] }
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this._httpService.getOnePetById(this.id).subscribe(data => {
      this.pet = data;
      this.skills = this.pet.skills;
      console.log(this.skills)
    });
  }

  like() {

    if (!this.liked) {
      this.pet.likes++;
      this._httpService.updateOnePet(this.id, this.pet).subscribe(data => {
        this.liked = true;
      });
    }

  }

  deletePet(id) {
    console.log(id)
    this._httpService.deleteOnePet(id).subscribe(() => {
      console.log("Deleted pet");
    });
    this._router.navigate(['/']);

  }
}
