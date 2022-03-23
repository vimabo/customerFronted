import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})

export class NuevoClienteComponent implements OnInit {

  id: number = 0;
  firstName = '';
  lastName = '';
  company = '';

  constructor(private clienteService: ClienteService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const cliente = new Cliente(this.id,this.firstName, this.lastName,
        this.company);


    this.clienteService.save(cliente).subscribe(
      data => {
        this.toastr.success('Cliente Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/nuevo']);
      }
    );
  }
}
