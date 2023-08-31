import colors from 'colors'


const mostrarMenu = ()=>{

    return new Promise((resolve) => {
        console.log('************************'.cyan);
        console.log('SELECCIONE UNA OPCION:'.cyan);
        console.log('************************\n'.cyan);
    
        console.log(`${"1.".cyan} ${'Crear tarea'.green}`);
        console.log(`${"2.".cyan} ${'Listar tareas'.green}`);
        console.log(`${"3.".cyan} ${'Listar tareas completadas'.green}`);
        console.log(`${"4.".cyan} ${'Listar tareas pendientes'.green}`);
        console.log(`${"5.".cyan} ${'Completar tarea(s)'.green}`);
        console.log(`${"0.".cyan} ${'Salir'.green}\n`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Seleccione una opcion: ', (opt)=>{
            console.log({opt});
            readline.close();
            resolve(opt);
        });      
    });
  

}

const pausa = ()=>{

    return new Promise((resolve) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        readline.question(`\nPresione ${'ENTER'.cyan} para continuar\n`, (opt)=>{
            readline.close();
            resolve();
        })     
    })
   
}

export{
    mostrarMenu,
    pausa
}