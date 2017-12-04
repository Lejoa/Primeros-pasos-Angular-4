export class Empleado {
	

	/*
	Modelo clasico de generación de clases
	e inicialización.
	public nombre:string;
	public edad:number;

	constructor(nombre,edad){

		this.nombre = nombre;
		this.edad = edad;
	}
	*/
	/*Fomra adeacuada en Angular*/
	constructor(
		public nombre:string,
		public edad:number,
		public cargo:string,
		public contratado:boolean){}
}