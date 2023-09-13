function sumar():void{
    console.log(3+7);
}


sumar()

function sumar2(a:number,b:number):number{

    return (a+b)
}

const resultado=sumar2(4,76)
console.log(resultado)

interface Mascotas{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void
}

function calcular(Mascotas:Mascotas,x:number):void{
    Mascotas.edad+=x;
    console.log(mascotas);

}

const nuevaMascota:Mascotas={
    nombre:'manchas',
    edad:3,
    mostrarEdad(): void{
        console.log('la edad es:', this.edad);
    }
}

calcular(nuevaMascota, 3);