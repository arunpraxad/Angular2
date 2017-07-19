import { Component } from '@angular/core';

@Component ({
    selector: 'init-app',
    template: `{{output}}!`
})

export class AppComponent {
    output = 'Hello World !!';
}