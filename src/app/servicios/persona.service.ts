import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PersonaService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  private personaUrl = 'http://localhost:3002/api/modules/personas/';

  constructor(private httpClient: HttpClient) {}

  getArticlesTechnology(): Observable<any> {
    return this.httpClient
      .get(
        'http://newsapi.org/v2/everything?q=apple&from=2020-09-08&to=2020-09-08&sortBy=popularity&apiKey=40ce89212aec4dfdb08f16f7e9838b8c'
      )
      .pipe(map((data: any) => data.articles));
  }

  getPersonas() {
    return this.httpClient.get(this.personaUrl + 'persona');
  }

  guardarPersona(persona: any) {
    return this.httpClient.post(
      this.personaUrl + 'persona',
      JSON.stringify(persona),
      this.httpOptions
    );
  }

  editarPersona(idPersona, persona) {
    return this.httpClient.put(
      this.personaUrl + 'persona/' + idPersona,
      JSON.stringify(persona),
      this.httpOptions
    );
  }

  borrarPersona(idPersona) {
    return this.httpClient.delete(
      this.personaUrl + 'persona/' + idPersona,
      this.httpOptions
    );
  }
}
