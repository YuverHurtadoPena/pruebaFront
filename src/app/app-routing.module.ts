import { FormListaRComponent } from './components/form-lista-r/form-lista-r.component';
import { ListRepComponent } from './components/list-rep/list-rep.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',redirectTo:'/listar',pathMatch: 'full'},

{path: 'form', component:FormListaRComponent},
{path: 'listar',component:ListRepComponent},

{path: '**', redirectTo: '/listar', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
