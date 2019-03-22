import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  pet: any;
  id: string;
  skills: any;
  errors: any[];
  capType: string;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) { }

  ngOnInit() {
    this.pet = { "name": "", "type": "", "description": "", "likes": "0", "skills": [] }
    this.errors = [];
  }

  onAddPet() {
    this.errors = [];
    if (this.pet.name.length < 3) {
      this.errors.push("Name must be greater than 3 characters");
    }
    if (this.pet.type.length < 3) {
      this.errors.push("Type be greater than 3 characters");
    }
    if (this.pet.description.length < 3) {
      this.errors.push("Description be greater than 3 characters");
    }
    if (this.errors.length == 0) {


      // Check if this.pet.name is already in db
      this._httpService.findPetByName(this.pet.name).subscribe(data => {

        if (data) {
          this.errors.push("Name already taken.");

        } else {
          this.capType = (this.pet.type.charAt(0).toUpperCase() + this.pet.type.slice(1));
          this.pet.type = this.capType;
          this._httpService.createNewPet(this.pet).subscribe(data => {
            console.log(data)
            this.pet = data;
            this.pet = { "name": "", "type": "", "description": "", "likes": "", "skills": [] }
            this._router.navigate(['/']);
          });
        }



      });




    }
  }

}
