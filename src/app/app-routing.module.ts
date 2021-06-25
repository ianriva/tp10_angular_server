import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { DondeEstamosComponent } from './components/donde-estamos/donde-estamos.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';
import { InstrumentosComponent } from './components/instrumentos/instrumentos.component';
import { ListaComponent } from './components/lista/lista.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dondeEstamos', component: DondeEstamosComponent},
  {path: 'instrumentos', component: InstrumentosComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'formulario/:id', component: FormularioComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'buscador/:termino', component: BuscadorComponent},
  {path: '**', redirectTo:'', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
