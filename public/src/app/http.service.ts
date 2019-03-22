import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllPets() {
    return this._http.get('/api/pets');
  }
  getOnePetById(id) {
    return this._http.get(`/api/pets/${id}`)
  }

  findPetByName(name) {
    return this._http.get(`/api/petsByName/${name}`)
  }

  createNewPet(author) {
    return this._http.post('/api/pets', author)
  }

  updateOnePet(id, body) {
    return this._http.put(`/api/pets/${id}`, body)
  }

  deleteOnePet(id) {
    return this._http.delete(`/api/pets/${id}`);
  }
}
