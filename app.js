import colors from 'colors'
import {guardarDB, leerDB} from './helpers/guardarArchivo.js'
import  {inquirerMenu, pausa, leerInput}  from './helpers/inquirer.js';
import Tareas from './models/tareas.js';

const main = async ()=>{
    console.clear();

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if(tareasDB ) {
        // establecer tareas 

    }
    await pausa();
    do {
        //imprimir el menu 
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea( desc );
            break;
            case '2':
                console.log(tareas.listadoArr);
            break;
        }
        
        guardarDB( tareas.listadoArr);
        

        await pausa();
    }
    while(opt !== '0')
}

main();