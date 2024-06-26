import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface SportResponse{
  id: number;
  nom: String;
  nmbr_max_seance_semaine: number;
	prix: number;
}

export interface SportPost{
  nom: String;
  nmbr_max_seance_semaine: Number;
	prix: Number;
}

export interface abonnement_sports{
  id: number;
  id_sports: number;
  id_abonnement: number;
  nom: String;
  nmbr_max_seance_semaine: number;
}


@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor(private Http: HttpClient) { }

  getSports(){
    return this.Http.get('http://localhost:8080/sport');
  }

  chercherSport(data: String) {
    return this.Http.get(`http://localhost:8080/sport/${data}`);
  }

  detailSport(SportId: number) {
    return this.Http.get(`http://localhost:8080/sport/${SportId}/edit`);
  }  

  SaveSport(inputData: object){
    return this.Http.post('http://localhost:8080/sport', inputData);
  }

  UpdateSport(inputData: object){
    return this.Http.put('http://localhost:8080/sport',inputData);
  }

  deleteSport(SportId: number) {
    return this.Http.delete(`http://localhost:8080/sport/${SportId}`);
  }
}
