/*
Instrucciones de la actividad
^
Para esta práctica se pide crear un algoritmo para resolver el problema de la torre de Hanói
La idea principal es resolver el problema de mover n discos de una varilla de origen a una varilla de destino utilizando una varilla auxiliar, siguiendo las reglas del juego:
1. Solo un disco puede moverse a la vez.
2. Un disco más grande no puede estar sobre uno más pequeño.
3. Solo puedes mover el disco que está en la parte superior de una pila.
PISTA
La función de entrada deber tener 4 parámetros (número de discos, torre inicial, torre final, torre auxilias)
Cada vez que se haga un movimiento deberá imprimirse por la consola
Debería ser recursiva
IMPORTANTE
NO se puede usar material de internet que resuelva directamente el ejercicio
NO se puede usar ningún asistente de código inteligente, estilo chat-gtp o copilot
Se deberá entregar mediante un repositorio de github y una release
 */


//La función devolverá void y tendra 4 parámetros de entrada
const MoverDiscoHanoi = (Disco: number, torreInicial: string, torreFinal: string, torreAuxiliar: string): void => {
    //Caso que no haya discos --> imposible no hay ese caso?
    if( Disco === 0) {
        console.log("Error, tiene que haber discos");
    }

    //Este es el caso final, es cuando queda solo el disco 1 (más pequeño), que tendrá que moverse obligatoriamente a la torre Final.
    if (Disco === 1) {
        console.log(`Muevo el disco: 1 desde ${torreInicial} a la ${torreFinal}`);
    return;
    }

    //Aplicamos recursividad de la función, que moverá los discos que estén encima del disco más grande primero. Disco más grande es el Disco 3
    //Utilizaremos la torre auxiliar 
    MoverDiscoHanoi(Disco-1, torreInicial, torreAuxiliar, torreFinal); 

    console.log(`Muevo el disco: ${Disco} de la torre ${torreInicial} a la ${torreFinal}`);

    
    MoverDiscoHanoi(Disco-1, torreAuxiliar, torreFinal, torreInicial); 

}

const DiscosTotales: number = 3;
MoverDiscoHanoi(DiscosTotales, "A", "B", "C"); //Pasamos a la función el número de discos y las 3 torres: inical, final y aux
