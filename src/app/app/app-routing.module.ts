import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { CartComponent } from '../components/cart/cart.component';
import { FirebaseComponent } from '../components/firebase/firebase.component';
import { ModelDrivenComponent } from '../components/forms/model-driven/model-driven.component';
import { ErrorsComponent } from '../components/errors/errors.component';
import { TemplateDrivenComponent } from '../components/forms/template-driven/template-driven.component';
import { DynamicFormsComponent } from '../components/forms/dynamic-forms/dynamic-forms.component';
import { FormsContainerComponent } from '../components/forms/forms-container/forms-container.component';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: ProductListComponent},
  {path: 'cart', component: CartComponent},
  {path: 'firebase', component: FirebaseComponent},
  {path: 'forms/:name', component: FormsContainerComponent,
    canActivate : [AuthGuard],
    children: [
      {path: '', redirectTo: 'reactive', pathMatch: 'full'},
      {path: 'reactive', component: ModelDrivenComponent},
      {path: 'template', component: TemplateDrivenComponent},
      {path: 'dynamic', component: DynamicFormsComponent},
    ]
  },
  {path: '**', component: ErrorsComponent}
];

@NgModule({
  //imports: [RouterModule.forChild(routes)],
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }