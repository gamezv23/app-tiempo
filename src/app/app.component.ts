import { Component } from '@angular/core';
import { TiempoService } from './services/tiempo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-time';

  constructor(private servicio_de_tiempo:TiempoService){ }

buscar(nombreBuscar:any){
  console.log(nombreBuscar.value)
  this.servicio_de_tiempo.obtenerTiempo(nombreBuscar.value)
  .subscribe((datos)=>{
    console.log(datos)
  })

}


}
