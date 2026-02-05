import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { Products } from './pages/products/products';
import { Partners } from './pages/partners/partners';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: AboutComponent},
  { path: 'products', component: Products },
  { path: 'partners', component: Partners },
  { path: 'contact', component: Contact },
];
