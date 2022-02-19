import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NetflixCatalogoModule } from 'libs/netflix-catalogo/src/lib/netflix-catalogo.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NetflixCatalogoModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
