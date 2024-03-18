import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Filme {
  titulo: string;
  genero: string;
  duracao: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  filme: Filme = { titulo: '', genero: '', duracao: 0 };
  constructor(private http: HttpClient) {}

  ngOnInit() { }

  cadastrarFilme() {
    const apiUrl = 'http://localhost:5283/Filme';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    this.http.post(apiUrl, this.filme, { headers })
      .subscribe(
        (data) => {
          console.log('Resposta do servidor:', data);
          // Limpar o objeto filme após o sucesso do cadastro
          this.filme = { titulo: '', genero: '', duracao: 0 };
        },
        (error) => {
          console.error('Erro ao fazer a solicitação:', error);
        }
      );
  }

  title = 'appfilmes.client';
}
