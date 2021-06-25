import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Instrumento } from 'src/app/models/instrumento';
import { InstrumentoService } from 'src/app/services/instrumento.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  instrumentosBuscados: Instrumento[];
  termino: string;
  constructor(
    private instrumentoService: InstrumentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.findByFiltro();
  }
  
  findByFiltro(): void {
    this.route.params.subscribe(params => {
      this.termino = params['termino'];
      this.instrumentoService
      .getInstrumentoByFiltro(this.termino)
      .subscribe((data) => {
        this.instrumentosBuscados = data;
      });
   })
  }
  instrumentoDetalle(id: number): void {
    this.router.navigate(['/detalle', id]);
  }
}
