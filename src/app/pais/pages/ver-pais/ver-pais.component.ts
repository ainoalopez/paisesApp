import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor( 
    private activetedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {} // para suscribirnos a cualquier cambio del url

  ngOnInit(): void {
    
    // obtenemos el id del pais
    this.activetedRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.getPaisPorAlpha( id ))
      )
      .subscribe( resp => {
        console.log( resp );
      });
  }
}
