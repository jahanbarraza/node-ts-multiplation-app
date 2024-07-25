
//creamos las interfaces
export interface CreateTableUseCase {
    execute: ( options: CreateTableOptions ) => string;
}

export interface CreateTableOptions {
    base: number,
    limit?: number          //limit? el "?" me dice que el limit es opcional 

}

//Creamos la Clase
export class CreateTable implements CreateTableUseCase {

    //Creamos el constructor
    constructor (
        /**
         * DI - Dependency Injection
         */

    ){}

    //creamos el metodo que va a crear la tabla
    execute( {base, limit = 10 }: CreateTableOptions ){

        let outputMessage = '';
        for (let i=1; i <= limit; i++) {
            outputMessage += `${ base } X ${ i } = ${ base * i }\n`    
        }

        return outputMessage;
    }



}