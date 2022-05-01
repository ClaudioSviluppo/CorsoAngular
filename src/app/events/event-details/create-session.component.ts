import { componentFactoryName } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession, restrictedWords } from '../shared/index';

@Component({
    selector:'create-session',
    templateUrl:'./create-session.component.html',
    styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input, .error select, .error textarea { background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-ms-input-placeholder { color: #999; }
  `]
})
export class CreateSessionComponent implements OnInit {
    @Output() saveNewSession= new EventEmitter();
    @Output() cancelAddSession= new EventEmitter();

    // Come funzionano gli output, per esempio saveNewSession
    // create-session.component.html al submit chiama il metodo saveSession
    // questo lancia un evento di emit passando la session
    // questo evento viene intercettato nella event-detail-componentFactoryName.html
    // con l'istruzione (saveNewSession)="saveNewSession($event)"
    // N.B. (saveNewSession), questo a sua volta chiama nel suo component event-details-component.ts
    // il metodo "saveNewSession($event)"  passando al metodo attraverso $event tutto l'evemto inviato da emit

    newSessionForm:FormGroup;
    name:FormControl;
    presenter:FormControl;
    duration:FormControl;
    level:FormControl;
    abstract:FormControl;

    ngOnInit(): void {
        // Effettuo binding proprietà form
       this.name = new FormControl('', Validators.required);
       this.presenter = new FormControl('', Validators.required);
       this.duration = new FormControl('', Validators.required);
       this.level = new FormControl('', Validators.required);
       this.abstract= new FormControl('', [Validators.required,
            Validators.maxLength(400), restrictedWords(['foo', 'bars'])]);   
            
      this.newSessionForm = new FormGroup ({
          name: this.name,
          presenter:this.presenter,
          duration:this.duration,
          level:this.level,
          abstract:this.abstract
      })
    }

    saveSession(formValues) {
       let session:ISession = {
           id: undefined,
           name:formValues.name,
           duration: +formValues.duration,
           level:formValues.level,
           presenter:formValues.presenter,
           abstract:formValues.abstract,
           voters: []
       }
    // console.log ('create-session-component.saveSession', session);
      this.saveNewSession.emit(session);
    }

    cancel() {
        this.cancelAddSession.emit();
    }

}