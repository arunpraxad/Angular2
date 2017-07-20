import { Component,OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { LocalStorageService } from './app.localstorage';

@Component ({
    selector: 'init-app',
    template: `<ul>
                <li *ngFor="let res of results">{{res}}</li>
            </ul>
            Enter text::
            <input type="text" [(ngModel)]="data" (keyup.enter)="save(data)"/>
            <button type="button" (click)="save(data)">Save</button>
            `
            
})

export class AppComponent implements OnInit {

    output = 'Hello World !!';
    results: string[];

    constructor(private http: Http, private localstorage: LocalStorageService) {

    }
    
    ngOnInit() {
        this.http.get('/data.json').subscribe(data => {
            console.log('data._body :: ' , data.json());
            this.results = data.json();
        });

        let result = this.localstorage.get('todo');
        alert(result);
    }

    save(data:any) {
        alert('entered');
        this.localstorage.save('todo', data);
    }
}