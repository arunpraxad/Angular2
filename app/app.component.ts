import { Component,OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component ({
    selector: 'init-app',
    template: `<ul>
                <li *ngFor="let res of results">{{res}}</li>
            </ul>`
})

export class AppComponent implements OnInit {

    output = 'Hello World !!';
    results: string[];

    constructor(private http: Http) {

    }
    
    ngOnInit() {
        this.http.get('/app/data.json').subscribe(data => {
            console.log('data._body :: ' , data.json());
            this.results = data.json();
        });
    }
}