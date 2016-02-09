import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: `
        <h1>{{clientName}}</h1>
        <input [(ngModel)]="clientName" />
    `
})
export class AppComponent {
    public clientName = 'Nigel';
    
    
}