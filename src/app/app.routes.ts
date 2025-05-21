import { Routes } from '@angular/router';
import { PageComponent } from './view/page/page.component'; 
import {MatTabsModule} from '@angular/material/tabs';

export const routes: Routes = [
    {
        path: '',
        component : PageComponent       
    }
];
