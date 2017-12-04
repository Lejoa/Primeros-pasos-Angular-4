import {Component} from '@angular/core';
import {Empleado} from './Empleado';
@Component({
	selector:'empleado',
	templateUrl:'./Empleado.component.html'
})

export class EmpleadoComponent {
	 public titulo = 'Componente empleado';
	 public empleado:Empleado;
	 public employees:Array<Empleado>;
	 public trabajador_externo:boolean;
	 public color:string;
	 public color_seleccionado:string;

	 constructor(){
	 	this.empleado = new Empleado('Alejandro Gómez',
	 		45,'Developer',false);
	 	this.employees = [
	 	new Empleado('Alejo Gómez',24,'Developer',true),
	 	new Empleado('Ana Karina',38,'Developer',true),
	 	new Empleado('Dana',45,'Doctor',true)
	 	];
	 	this.trabajador_externo = true;
	 	this.color = 'green'; 
	 	this.color_seleccionado = '#ccc';
	 }

	 ngOnInit(){
	 	console.log(this.employees);
	 }

	 cambiarExterno(valor){
	 	this.trabajador_externo = valor;
	 }

	 logColorSeleccionado(){
	 	console.log(this.color_seleccionado);
	 }
}