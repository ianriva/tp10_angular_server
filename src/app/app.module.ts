import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { InstrumentosComponent } from './components/instrumentos/instrumentos.component';
import { DondeEstamosComponent } from './components/donde-estamos/donde-estamos.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InstrumentoService } from './services/instrumento.service';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ArchivoService } from './services/archivo.service';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ListaComponent } from './components/lista/lista.component';
import { ItemInstrumentoComponent } from './components/item-instrumento/item-instrumento.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    HeaderComponent,
    HomeComponent,
    InstrumentosComponent,
    DondeEstamosComponent,
    FormularioComponent,
    ListaComponent,
    ItemInstrumentoComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SweetAlert2Module.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [InstrumentoService, ArchivoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
