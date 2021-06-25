import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Instrumento } from 'src/app/models/instrumento';
import { ArchivoService } from 'src/app/services/archivo.service';
import { InstrumentoService } from 'src/app/services/instrumento.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  file: File;
  imagenMin: string;
  id: number;
  instrumento: Instrumento = {
    _id: 0,
    instrumento: '',
    marca: '',
    modelo: '',
    imagen: '',
    precio: 0,
    costoEnvio: '',
    cantidadVendida: 0,
    descripcion: '',
  }

  constructor(
    private instrumentoService: InstrumentoService,
    private archivoService: ArchivoService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id > 0) {
      this.getInstrumentoById(this.id);
    }
  }

  getInstrumentoById(id:number): void{
    this.instrumentoService.getInstrumentoById(id).subscribe((data) => {
      this.instrumento = data;
      this.imagenMin = "http://localhost:8080/upload/files/" + this.instrumento.imagen;
    })
  }

  onFileChange(event: any):void{
    this.instrumento.imagen = event.target.files[0].name;
    this.file = event.target.files[0];
    console.log(this.file)

    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imagenMin = evento.target.result;
    };
    fr.readAsDataURL(this.file);

  }

  guardar():void {
    if (this.id > 0) {
        this.instrumentoService.update(this.instrumento, this.id).subscribe((data) => {
          this.archivoService.upload(this.file).subscribe();
          this.toastr.success('Instrumento actualizado', 'OK',{
            timeOut: 3000
          })
          this.router.navigate(['/lista']);
        })
    }else {
      this.instrumentoService.create(this.instrumento).subscribe((data) => {
        this.archivoService.upload(this.file).subscribe();
          this.toastr.success('Instrumento guardado', 'OK',{
            timeOut: 3000
          })
          this.router.navigate(['/lista']);
        })
    }
  }
}
