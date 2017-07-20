import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

    save(key:String, data:any) {
        let localData:any = localStorage.getItem(key);
        if(localData) {
            localData = JSON.parse(localData);
        } else {
            localData = {};
        }
        localData[key] = data;
        localStorage.setItem('todo',JSON.stringify(localData));
    }

    get(name:any){
        let data = JSON.parse(localStorage.getItem('todo'));
        if(!data){
            return undefined;
        }
        if(name){
            if(data[name]){
                return data[name];
            }else{
                return {};
            }
        }
        return data ;
    }
}