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
    ShowErrorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
