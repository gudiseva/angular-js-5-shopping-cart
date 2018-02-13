import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { ConversionPipe } from './pipes/conversion.pipe';
import { FilterdataPipe } from './pipes/filterdata.pipe';
import { PagePipe } from './pipes/page.pipe';
import { TemplateDrivenComponent } from './components/forms/template-driven/template-driven.component';
import { ModelDrivenComponent } from './components/forms/model-driven/model-driven.component';
import { ShowErrorsComponent } from './components/forms/show-errors/show-errors.component';
import { DynamicFormsComponent } from './components/forms/dynamic-forms/dynamic-forms.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlbumsComponent } from './components/albums/albums.component';
import { CartService } from './services/cart.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { FirebaseComponent } from './components/firebase/firebase.component';
import { LoginComponent } from './components/login/login.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserService } from './services/user.service';
import { ErrorsComponent } from './components/errors/errors.component';
import { AppRoutingModule } from './app/app-routing.module';
import { UiModule } from './ui/ui.module';
import { FormsContainerComponent } from './components/forms/forms-container/forms-container.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { CalendarDirective } from './directives/calendar.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    CurrencyComponent,
    ConversionPipe,
    FilterdataPipe,
    PagePipe,
    TemplateDrivenComponent,
    ModelDrivenComponent,
    ShowErrorsComponent,
    DynamicFormsComponent,
    AlbumsComponent,
    FirebaseComponent,
    //LoginComponent,
    ErrorsComponent,
    FormsContainerComponent,
    CalendarDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AppRoutingModule,
    UiModule
  ],
  providers: [CartService,
     //UserService
     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
