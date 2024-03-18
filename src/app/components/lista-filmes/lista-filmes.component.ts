// lista-filmes.component.ts
import { Component, OnInit } from '@angular/core';
import { FilmeService } from './filme.service';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {
  filmes: any[] = [];

  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
    this.carregarFilmes();
  }

  carregarFilmes() {
    this.filmeService.getFilmes().subscribe(data => {
      this.filmes = data;
    });
  }
}
