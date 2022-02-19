import { NgModule } from "@angular/core";
import { NavbarComponent } from './components/navbar/navbar.component';
import { DestaqueComponent } from './components/destaque/destaque.component';
import { SliderComponent } from './components/slider/slider.component';
import { CommonModule } from '@angular/common';

const components = [
  NavbarComponent,
  DestaqueComponent,
  SliderComponent
]

@NgModule({
  imports: [CommonModule],
    declarations: [...components],
  exports: [...components],
})
export class SharedModule { }
