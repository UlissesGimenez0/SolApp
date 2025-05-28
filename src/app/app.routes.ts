import { Routes } from '@angular/router';
import { PageComponent } from './view/page/page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CadastroRotaComponent } from './view/page/cadastro/cadastro-rota.component';
import { AtualizarRotaComponent } from './view/page/atualizar-rota/atualizar-rota.component';

export const routes: Routes = [

    {
        path: '',
        component: PageComponent,
    },
    {

        path: 'home',
        component: PageComponent,
    },
    {
        path: 'cadastrar',

        component: CadastroRotaComponent
    },
    {
        path: 'atualizar/:id',
        component: AtualizarRotaComponent 
    }



];
