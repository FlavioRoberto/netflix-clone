import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageModule } from './pages/page.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

const modules = [
    PageModule
];

@NgModule({
    imports: [...modules],
    exports: [...modules]
})
export class NetflixCatalogoModule { }
