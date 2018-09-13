import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class Store {

    constructor(private storage: Storage) {

    }

    GET_STORAGE(target: string) {
        return this.storage.get(target);
    }

    GET_USER() {
        return this.GET_STORAGE('__user__').then(data => {
            return data || {};
        });
    }

    UPDATE_USER(data) {
       return this.storage.set('__user__', data);
    }

    DELETE_USER() {
       return this.storage.remove('__user__');
    }

    GET_RECORD(target: string) {
        return this.GET_STORAGE(target).then(data => {
            return data || [];
        });
    }

    GET_STREET_PROPERTIES(id: string) {
        return this.GET_STORAGE('__properties__').then(data => {
            return data ? data.filter(record => record.property.street_id == id) : [];
        });
    }


    GET_PROPERTY_ENTITIES(id: string) {
        return this.GET_STORAGE('__entities__').then(data => {
            return data ? data.filter(record => record.property_id == id) : [];
        });
    }

    UPDATE_RECORD(target: string, data: any) {
        return new Promise(resolve => {
            let records: any[];
            return this.GET_STORAGE(target).then(_data => {
                records = _data || [];
                records.push(data);
                this.storage.set(target, records).then(() => {
                    resolve(true);
                });
            });
        });
    }

    UPDATE_OFFLINE_RECORD(target: string, data: any, index: number) {
        return new Promise(resolve => {
            let records: any[];
            return this.GET_STORAGE(target).then(_data => {
                records = _data || [];
                records[index] = data;
                this.storage.set(target, records).then(() => {
                    resolve(true);
                });
            });
        });
    }

    GET_PHOTOS(target: string) {
        return this.GET_STORAGE(target).then(data => {
            return data || [];
        });
    }


    GET_STREET_PHOTOS(id: string) {
        return this.GET_STORAGE('__street_photos__').then(data => {
            return data ? data.filter(record => record.street_id == id) : [];
        });
    }

    GET_PROPERTY_PHOTOS(id: string){
        return this.GET_STORAGE('__property_photos__').then(data => {
            return data ? data.filter(record => record.property_id == id) : [];
        });
        
    }

    GET_ENTITY_PHOTOS(id: string){
        return this.GET_STORAGE('__entity_photos__').then(data => {
            return data ? data.filter(record => record.entity_id == id) : [];
        });
    }

    UPDATE_PHOTOS(target: string, data: any) {
        let records: any[];
        return new Promise(resolve => {
            return this.GET_STORAGE(target).then(_data => {
                records = _data || [];
                records.push(data);
                this.storage.set(target, records).then(() => {
                    resolve(true);
                })
            });
        });
    }

    //REMOVE FROM STORAGE

    REMOVE_STREET(id: string) {
        let records: any[];
        let temp: any[];
        return this.GET_STORAGE('__streets__').then(_data => {
            records = _data || [];
            temp = records.filter(data => data.record_id != id);
            this.storage.set('__streets__', temp);
        });
    }


    REMOVE_PROPERTY(id: string) {
        let records: any[];
        let temp: any[];
        return this.GET_STORAGE('__properties__').then(_data => {
            records = _data || [];
            temp = records.filter(data => data.record_id != id);
            this.storage.set('__properties__', temp);
        });
    }


    REMOVE_ENTITY(id: string) {
        let records: any[];
        let temp: any[];
        return this.GET_STORAGE('__entities__').then(_data => {
            records = _data || [];
            temp = records.filter(data => data.record_id != id);
            this.storage.set('__entities__', temp);
        });
    }


    REMOVE_STREET_PHOTO(id: string){
        let records: any[];
        let temp: any[];
        return this.GET_STORAGE('__street_photos__').then(_data => {
            records = _data || [];
            temp = records.filter(data => data.photo_id != id);
            this.storage.set('__street_photos__', temp);
        });
    }

    REMOVE_PROPERTY_PHOTO(id: string) {
        let records: any[];
        let temp: any[];
        return this.GET_STORAGE('__property_photos__').then(_data => {
            records = _data || [];
            temp = records.filter(data => data.photo_id != id);
            this.storage.set('__property_photos__', temp);
        });
    }

    REMOVE_ENTITY_PHOTO(id: string) {
        let records: any[];
        let temp: any[];
        return this.GET_STORAGE('__property_photos__').then(_data => {
            records = _data || [];
            temp = records.filter(data => data.photo_id != id);
            this.storage.set('__entity_photos__', temp);
        });
    }

}