import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from '../shared/index'

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    //Il componente si aspetta in input un interfaccia ISession
    //presente in event.model.ts  e importato da ../shared/index
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[] = [];

    ngOnChanges() {
        //  console.log("change")
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            // Se name passa al metodo sort la funzione sortByNameAsc implememtata qui sotto
            // altrimenti chiama la funzione sortByVotesDesc
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) :
                this.visibleSessions.sort(sortByVotesDesc);
        }
    }
    filterSessions(filter: string) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);  //Creo array clone dell'originale
        } else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter;
            })
        }
    }

}

//Sono funzioni fuori dalla classe, in quanto non necessitano di metodi della classe

function sortByNameAsc(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) return 1;
    else if (s1.name === s2.name) return 0;
    else return -1;
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
}



