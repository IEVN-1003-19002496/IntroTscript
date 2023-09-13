interface Reproductor{
    volumen:number;
    segundos:number;
    cancion:string;
    detalles:Detalles;

}

interface Detalles{
    cantante:string;
    year:number;
}

interface Reproductor{
    volumen:number;
    segundos:number;
    cancion:string;
    detalles:Detalles;
}

const reproductor:Reproductor={
        volumen:90,
        segundos:60,
        cancion:'Puto - Molotov',
        detalles:{
            cantante: 'papichulo',
            year: 2005
        }

        
}

//console.log(`El volumen actual es: ${reproductor.volumen}`);
        //console.log(`El cantante es: ${reproductor.detalles.cantante}`);

        const{volumen,detalles}=reproductor
        const{cantante}=detalles
        console.log(`El volumen actual es: ${volumen}`);
        console.log(`El cantante es: ${cantante}`)

        const colores:string[]=['red','blue','green','violet'];
        console.log(`color1 : ${colores[0]}`)
        console.log(`color2 : ${colores[1]}`)
        console.log(`color3 : ${colores[2]}`)
        console.log(`color4 : ${colores[3]}`)

        const[a,,,b]=colores;

        console.log(`color1 : ${[a]}`)
        console.log(`color1 : ${[b]}`)
        