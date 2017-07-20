import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from './app.localstorage';

@NgModule ({
    imports:[
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers:[
        LocalStorageService
    ]
})

export class AppModule {

}