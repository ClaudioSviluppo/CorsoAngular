       // Questo è un validator custom
        // Se include parole presenti nell'array words ritorno l'oggetto altrimenti ritorna null

import { FormControl } from '@angular/forms';

        // con la sintassi :{[key:string]:any}   specifico che la funzione ritorna un oggetto generico
        export function restrictedWords(words: string[]) {
            return ( control: FormControl):{[key:string]:any}  =>{
                if (!words) return null;
                
                var invalidWords = words
                                   .map(w => control.value.includes(w) ? w : null)
                                   .filter (w => w !=null);
    
                return invalidWords && invalidWords.length > 0
                ? {'restrictedWords': invalidWords.join(', ')}: null;
    
            } 
        }