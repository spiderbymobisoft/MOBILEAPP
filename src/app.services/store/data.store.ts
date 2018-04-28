import { Injectable } from '@angular/core';

@Injectable()
export class Store {

    GET_USER(): any {
        return JSON.parse(localStorage.getItem('__user__'));
    }

    UPDATE_USER(data): void {
        localStorage.setItem('__user__', JSON.stringify(data));
    }

    DELETE_USER(): void {
        localStorage.removeItem('__user__');
    }

    GET_RECORD(target: string): any[] {
        let records: any[];
        records = JSON.parse(localStorage.getItem(target) || '[]');
        return records;
    }

    GET_STREET_PROPERTIES(id: string): any[] {
        let records: any[];
        records = JSON.parse(localStorage.getItem('__properties__') || '[]');
        return records.filter(record => record.property.street_id == id);

    }


    GET_PROPERTY_ENTITIES(id: string): any[] {
        let records: any[];
        records = JSON.parse(localStorage.getItem('__entities__') || '[]');
        return records.filter(record => record.property_id == id);
    }

    UPDATE_RECORD(target: string, data: any) {
        return new Promise(resolve => {
            let records: any[];
            records = JSON.parse(localStorage.getItem(target) || '[]');
            records.push(data);
            localStorage.setItem(target, JSON.stringify(records));
            resolve(true);
        });
    }

    GET_PHOTOS(target: string): any[] {
        let records: any[];
        records = JSON.parse(localStorage.getItem(target) || '[]');
        return records;
    }


    GET_STREET_PHOTOS(id: string): any[] {
        let records: any[];
        records = JSON.parse(localStorage.getItem('__street_photos__') || '[]');
        return records.filter(record => record.street_id == id);
    }

    GET_PROPERTY_PHOTOS(id: string): any[] {
        let records: any[];
        records = JSON.parse(localStorage.getItem('__property_photos__') || '[]');
        return records.filter(record => record.property_id == id);
    }

    GET_ENTITY_PHOTOS(id: string): any[] {
        let records: any[];
        records = JSON.parse(localStorage.getItem('__entity_photos__') || '[]');
        return records.filter(record => record.entity_id == id);
    }

    UPDATE_PHOTOS(target: string, data: any) {
        return new Promise(resolve => {
            let records: any[];
            records = JSON.parse(localStorage.getItem(target) || '[]');
            records.push(data);
            localStorage.setItem(target, JSON.stringify(records));
            resolve(true);
        });
    }

    //REMOVE FROM STORAGE

    REMOVE_STREET(id: string): void {
        let records: any[];
        let temp: any[];
        records = JSON.parse(localStorage.getItem('__streets__') || '[]');
        temp = records.filter(data=> data.record_id != id);
        localStorage.setItem('__streets__', JSON.stringify(temp));
    }


    REMOVE_PROPERTY(id: string): void {
        let records: any[];
        let temp: any[];
        records = JSON.parse(localStorage.getItem('__properties__') || '[]');
        temp = records.filter(data=> data.record_id != id);
        localStorage.setItem('__properties__', JSON.stringify(temp));
    }


    REMOVE_ENTITY(id: string): void {
        let records: any[];
        let temp: any[];
        records = JSON.parse(localStorage.getItem('__entities__') || '[]');
        temp = records.filter(data=> data.record_id != id);
        localStorage.setItem('__entities__', JSON.stringify(temp));
    }


    REMOVE_STREET_PHOTO(id: string): void {
        let records: any[];
        let temp: any[];
        records = JSON.parse(localStorage.getItem('__street_photos__') || '[]');
        temp = records.filter(data=> data.photo_id != id);
        localStorage.setItem('__street_photos__', JSON.stringify(temp));
    }

    REMOVE_PROPERTY_PHOTO(id: string): void {
        let records: any[];
        let temp: any[];
        records = JSON.parse(localStorage.getItem('__property_photos__') || '[]');
        temp = records.filter(data=> data.photo_id != id);
        localStorage.setItem('__property_photos__', JSON.stringify(temp));
    }

    REMOVE_ENTITY_PHOTO(id: string): void {
        let records: any[];
        let temp: any[];
        records = JSON.parse(localStorage.getItem('__entity_photos__') || '[]');
        temp = records.filter(data=> data.photo_id != id);
        localStorage.setItem('__entity_photos__', JSON.stringify(temp));
    }

}