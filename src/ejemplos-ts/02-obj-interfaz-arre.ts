
interface Alumno{
    matricula:number;
    nombre:string;
    email:string;
    edad:number;
}

const alumno:Alumno={
    nombre:'Jossu',
    email:'jossu@gmail.com',
    edad:22,
    matricula:19002496
}

let mascotas=['perro', 'Gato', 'Pajaro', 'Bibora']
console.table(mascotas);



mascotas[1]='Nuevo Gato';
mascotas.push('perico verde')
console.table(mascotas);


let nuevoArreglo:(number|string)[]=[]
nuevoArreglo.push('RCR');
nuevoArreglo.push(19002496);