import { Component, Input, OnInit } from '@angular/core';
import { Filme } from '../../models/filme.model';

@Component({
  selector: 'netflix-clone-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() titulo = '';
  @Input() filmes: Filme[] = [];

  ngOnInit(): void {
  }
}
