import { Component, OnInit } from '@angular/core';
import { PageCatalogoService } from './page-catalogo.component.service';
import { Filme } from '../../shared/models/filme.model';

@Component({
  selector: 'netflix-clone-page-catalogo',
  templateUrl: './page-catalogo.component.html'
})
export class PageCatalogoComponent implements OnInit {

  filmesAnimes: Filme[] = [];
  filmesComedia: Filme[] = [];

  constructor(private _pageCaralogoService: PageCatalogoService) { }

  ngOnInit(): void {
    this.filmesAnimes = this._pageCaralogoService.listarFilmesAnimes();
    this.filmesComedia = this._pageCaralogoService.listarFilmesComedias();
  }
}
