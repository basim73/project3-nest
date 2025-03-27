import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProductsComponent } from './page/products/products.component';
import { ContactComponent } from './page/contact/contact.component';
import { ProductviewComponent } from './page/productview/productview.component';

export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "products",
        component: ProductsComponent
    },
    {
        path:"contact",
        component: ContactComponent
    },
    {
        path:`productview/:id`,component:ProductviewComponent
    },
];
