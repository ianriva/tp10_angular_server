import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Instrumento } from 'src/app/models/instrumento';

@Component({
  selector: 'app-item-instrumento',
  templateUrl: './item-instrumento.component.html',
  styleUrls: ['./item-instrumento.component.css']
})
export class ItemInstrumentoComponent implements OnInit {
  
  @Input() instrumentoAux: Instrumento;
  @Input() index: number;

  @Output() instrumentoSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.instrumentoSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }
  
  instrumentoDetalle():void{
    //this.router.navigate(['/detalle', this.index])
    this.instrumentoSeleccionado.emit(this.index);
  }
}
