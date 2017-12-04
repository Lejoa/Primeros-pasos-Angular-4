import { Component} from '@angular/core';

@Component({
	selector:'fruta',
	templateUrl: './Fruta.component.html'
})

export class FrutaComponent{
	public nombre_componente = 'Componente de fruta';
	public listado_frutas:string = 'Naranja, Manzana, Pera y Sandia';

	public nombre:string ;
	public edad:number;
	public trabajos:Array<String> = ['Developer','Student'];
	public varios:Array<any> = [44,'Hola','prrr'];
	public comodin:any = 'LOQUE SEA';


	constructor() 
	{
		this.nombre  = 'Alejandro Gómez';
		this.edad  = 24;

	}

	ngOnInit(){
		/*En este metodo deberia realizarse el 
		 llamado de funcionalidades*/
		/*Es el segundo metodo que se ejecuta de un componente*/

		var uno = 8;
		var dos = 15;

		if(uno === 8){
			var uno = 3;
			var dos = 88;

			console.log('Dentro del if'+uno);
		}
		console.log('Fuera del if'+uno);
	}

	holaMundo()
	{
		alert('HOLAA ANGULAR');
	}

}

 