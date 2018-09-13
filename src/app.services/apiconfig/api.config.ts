import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class APIConfig { 

    private settings: any = {};
    private config = {
        appVersion : "1.0.0",
        apiURL :  "",
        remoteURL: "https://api.spider.com.ng/",
        msgURL : "https://messenger.spider.com.ng/",
        authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfYnNvbnR5cGUiOiJPYmplY3RJRCIsImlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjpbODksMjQ5LDE2NCwxNywyMzIsMzAsMjI4LDExLDUyLDE4MiwyMzIsMjA4XX0sImlhdCI6MTUwOTUzMjY5MX0.ghQBHtQdOP63jqP7bysGrB9N1sBZdmVh8H5RdOQXzdw"
    }

    constructor(private storage: Storage){
        this.getSavedSettings().then(settings=>{
            this.settings = settings;
            this.config.apiURL = this.settings && this.settings.ip ? `http://${this.settings.ip}:${this.settings.port}/` : 'http://192.168.10.241:5110/';
        });
        
    }

    get apiConfig(){
        return this.config;
    }

    updateLocalServerSettings(settings){
        return new Promise(resolve=>{
            this.config.apiURL = `http://${settings.ip}:${settings.port}/`;
            this.settings = settings;
            this.storage.set('spider_server_settings', settings).then(()=>{
                resolve(true);
            });
        })
        
    }

    getLocalServerSettings(){
        return new Promise(resolve=>{
            resolve(this.settings || { cloud: true });
        });
    }

    getSavedSettings(){
        return new Promise(resolve=>{
            this.storage.get('spider_server_settings').then(data=>{
                resolve(data || { cloud: true });
            });
        });
    }

}