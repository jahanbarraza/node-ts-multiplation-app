import fs from 'fs';

export interface SaveFileUseCase {
    execute: (options: SaveFileOptions) => boolean 
}

export interface SaveFileOptions {
    fileContent     : string;
    fileDestination?    : string;
    fileName?       : string;
}

export class SaveFile implements SaveFileUseCase {

    //creamos el contructor
    constructor (
        /**
         * repository: StorageRepository
         */
    ){}

    //creamos el metodo de guardar el archivo
    execute( { 
        fileContent,
        fileDestination = 'outputs',
        fileName = 'table'
    }: SaveFileOptions):boolean {

        try {

            fs.mkdirSync(fileDestination, { recursive: true });
            fs.writeFileSync(`${fileDestination}/${ fileName }.txt`, fileContent);
            //console.log('File Created! ');
            return true;

        } catch (error) {
            console.error(error)
            return false 
        }



    }




}