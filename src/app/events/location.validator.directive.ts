import { Directive } from "@angular/core";
import { AbstractControl, FormGroup, Validator, NG_VALIDATORS} from '@angular/forms';
//NG_VALIDATORS è una lista dei Validato che Angular Supporta
//Quando creiamo un validator dobbiamo sempre aggiungerlo
//E il mio validator lo aggiungo con la sintassi che qui vedo in providers

@Directive({
    selector: '[validateLocation]',
    providers: [{provide: NG_VALIDATORS, useExisting:LocationValidator, multi:true}]
})
export class LocationValidator implements Validator {  //Mio validator custom
    constructor(){
        console.log ('validator fired');
    }
    validate(formGroup: FormGroup): { [key: string]: any } {
        let addressControl = formGroup.controls['address'];
        let cityControl = formGroup.controls['city'];
        let countryControl = formGroup.controls['country'];
        let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

        console.log(formGroup);

        if ((addressControl && addressControl.value &&
            cityControl && cityControl.value &&
            countryControl && countryControl.value
        ) || (onlineUrlControl && onlineUrlControl.value)) {
            return null;  // Validazione passata
        } else {
            return { validateLocation: false };
        }
    }


}