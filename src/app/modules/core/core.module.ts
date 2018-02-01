import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MainnavComponent } from './mainnav/mainnav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MenuComponent, FooterComponent, MainnavComponent],
  exports: [MenuComponent, FooterComponent, MainnavComponent]

})
export class CoreModule { }
