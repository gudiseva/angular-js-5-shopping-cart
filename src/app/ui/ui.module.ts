import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { UserModule } from '../user/user.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UserModule
  ],
  declarations: [HeaderComponent, FooterComponent, MenuComponent],
  exports: [HeaderComponent, FooterComponent]
})
export class UiModule { }
