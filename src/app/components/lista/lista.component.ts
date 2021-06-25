import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Instrumento } from 'src/app/models/instrumento';
import { InstrumentoService } from 'src/app/services/instrumento.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  title: 'Instrumentos de Musical Hendrix';
  instrumentos: Instrumento[];
  constructor(private instrumentoService: InstrumentoService) {}

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.instrumentoService.getAllInstrumentos().subscribe((instrumentos) => {
      this.instrumentos = instrumentos;
    });
  }

  delete(instrumento: Instrumento): void {
    Swal.fire({
      title: 'Está por eliminar el instrumento',
      text: '¿Estás seguro que deseas eliminar este instrumento?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminalo',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        this.instrumentoService
          .delete(instrumento)
          .subscribe(
            (data) =>
              (this.instrumentos = this.instrumentos.filter(
                (i) => i !== instrumento
              ))
          );
        Swal.fire({
          title: 'Se eliminó el instrumento!',
          icon: 'success',
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Se canceló la eliminación',
          icon: 'error',
        });
      }
    });
  }
}
