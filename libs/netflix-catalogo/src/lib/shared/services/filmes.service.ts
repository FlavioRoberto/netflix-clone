import { Injectable } from '@angular/core';
import { ECategoriaFilme } from '../enums/categoria-filme.enum';
import { Filme } from '../models/filme.model';

@Injectable({ providedIn: "root" })
export class FilmeService {

  listarTop10Filmes(categoria: ECategoriaFilme): Filme[] {
    if (categoria === 1)
      return [{
        url: 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2022/01/legiao_JNSkEsL68xCd.jpg.jpeg',
        titulo: 'Naruto'
      },
      {
        url: 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2022/01/legiao_JNSkEsL68xCd.jpg.jpeg',
        titulo: 'Naruto'
      },
      {
        url: 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2022/01/legiao_JNSkEsL68xCd.jpg.jpeg',
        titulo: 'Naruto'
      },
      {
        url: 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2022/01/legiao_JNSkEsL68xCd.jpg.jpeg',
        titulo: 'Naruto'
      },
      {
        url: 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2022/01/legiao_JNSkEsL68xCd.jpg.jpeg',
        titulo: 'Naruto'
      }];
    else
      return [];
  }

}
