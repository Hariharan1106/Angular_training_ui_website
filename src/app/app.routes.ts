import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Userprofile } from './userprofile/userprofile';
import { About } from './about/about';
import { Management } from './management/management';
import { Contact } from './contact/contact';

export const routes: Routes = [

    {path : '', component : Home},
    {path: 'about', component: About},
    {path: 'management', component: Management},
    {path: 'user', component: Userprofile},
    {path: 'contact', component: Contact}

];
