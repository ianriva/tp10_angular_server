import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instrumento } from 'src/app/models/instrumento';
import { InstrumentoService } from 'src/app/services/instrumento.service';

@Component({
  selector: 'app-instrumentos',
  templateUrl: './instrumentos.component.html',
  styleUrls: ['./instrumentos.component.css']
})
export class InstrumentosComponent implements OnInit {
  instrumentos: Instrumento[];
  constructor(
    private instrumentoService: InstrumentoService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.listar()
  }

  listar(): void {
    this.instrumentoService.getAllInstrumentos().subscribe((data) => {
        this.instrumentos = data
      })
  }

  instrumentoDetalle(id: number):void{
    this.router.navigate(['/detalle', id])
  }
}
