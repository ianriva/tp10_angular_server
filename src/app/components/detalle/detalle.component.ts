import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Instrumento } from 'src/app/models/instrumento';
import { InstrumentoService } from 'src/app/services/instrumento.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  instrumento: Instrumento = new Instrumento();
  id: number;
  imagen: string;
  constructor(private instrumentoService: InstrumentoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getInstrumentoById()
  }

  getInstrumentoById(): void{
    this.id = this.route.snapshot.params['id']
    this.instrumentoService.getInstrumentoById(this.id).subscribe((data) => {
      this.instrumento = data;
      this.imagen = "http://localhost:8080/upload/files/" + this.instrumento.imagen;
    })
  }
}
