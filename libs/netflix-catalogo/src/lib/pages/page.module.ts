import { NgModule } from "@angular/core";
import { PageCatalogoComponent } from './catalogo/page-catalogo.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { PageCatalogoService } from './catalogo/page-catalogo.component.service';

const modules = [
  CommonModule,
  SharedModule
]

const components = [
  PageCatalogoComponent
]

@NgModule({
  imports: [...modules],
  declarations: [...components],
  exports: [...components],
  providers: [PageCatalogoService]
})
export class PageModule { }
