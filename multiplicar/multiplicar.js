//requireds
const fs = require('fs');  //esta ya existe en node
const colors = require('colors');
//const fs = require('express'); //no existe en node este se instala porque no existe en node
//const fs = require('./');//estos nosotros los hicimos y que estan en algun lado de nuestro proyecto

let listarTabla = (base1, limite=10) => {

	console.log('===================================='.green);
	console.log(`=========tabla de ${base1}==========`.red);
	console.log('===================================='.green);
	for(let  i= 1; i<= limite; i++){
			console.log(`${base1} *  ${i}= ${base1 * i}  `);
		}

}



let crearArchivo = (base, limite = 10 ) => {

	return new Promise(  (resolve, reject) => {

		if( !Number(base)){

			reject(`El valor capturado: ${base} no es un numero!`);
			return;
		}

		let data='';

		for(let  i= 1; i<= limite; i++){
			data +=`${base} *  ${i}= ${base * i} \n ` ;
		}



		fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
			  if (err){ 
			  	reject (err )
			  }else{
			  	resolve(`tabla-${base}.txt`);
			  }
		});


	});
}

module.exports = {
	crearArchivo,
	listarTabla
}