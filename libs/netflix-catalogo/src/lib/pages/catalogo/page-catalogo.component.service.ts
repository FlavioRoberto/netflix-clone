import { Injectable } from "@angular/core";
import { ECategoriaFilme } from "../../shared/enums/categoria-filme.enum";
import { Filme } from "../../shared/models/filme.model";
import { FilmeService } from '../../shared/services/filmes.service';

@Injectable()
export class PageCatalogoService {

  constructor(private _filmeService: FilmeService) { }

  listarFilmesAnimes(): Filme[] {
    return this._filmeService.listarTop10Filmes(ECategoriaFilme.Anime);
  }

  listarFilmesComedias(): Filme[] {
    return this._filmeService.listarTop10Filmes(ECategoriaFilme.Comedia);
  }

}
