import { Component, Input, OnChanges } from "@angular/core";
import { AuthService } from '../../user/auth.service';

import { ISession } from '../shared/index'
import { VoterService } from './voter.service';

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
    @Input() eventId:number;
    visibleSessions: ISession[] = [];

    constructor(private auth: AuthService, private voterService: VoterService) { }

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

    toggleVote(session: ISession) {
        console.log(1)
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(this.eventId,session, this.auth.currentUser.userName);
        } else {
            this.voterService.addVoter(this.eventId,session, this.auth.currentUser.userName);
        }

        if (this.sortBy === 'votes')
            this.visibleSessions.sort(sortByVotesDesc);

    }
    userHasVoted(session: ISession) {
        console.log(2)
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
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



