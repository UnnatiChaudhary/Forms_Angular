import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";
 @Directive({
    selector:'[appUsernameLength]',
    providers: [
        {
          provide: NG_VALIDATORS,
          useExisting: UsernameLengthDirective,
          multi: true,
        },
      ],
 })
 export class UsernameLengthDirective implements Validator{
    @Input('appUsernameLength') usernameLength:number=30;
    validate(control:AbstractControl):ValidationErrors|null{
        const value=control.value as string;
        if(value.length>this.usernameLength){
            return {'usernameLength':true}
        }
        return null;
    }
 }