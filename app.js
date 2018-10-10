const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando= argv._[0];

switch(comando){
	case 'listar':
		console.log('Listar');
		listarTabla(argv.base, argv.limite);
	break;

	case 'crear':
		crearArchivo(argv.base, argv.limite)
					.then( archivo => console.log(`Archivo creado:  ${ archivo.green}`) )
					.catch(err => console.log(err) );
	break;

	default:
		console.log('comando no reconocido!!!');
}

//console.log(process.argv);
//console.log(argv.base);




//let argv= process.argv;
//let parametro = argv[2];
//let base= parametro.split('=')[1];



