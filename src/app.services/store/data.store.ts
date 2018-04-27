import { Injectable } from '@angular/core';

@Injectable()
export class Store {

    private USER: any;

    GET_USER(): any {
        return this.USER ? this.USER : JSON.parse(localStorage.getItem('__user__'));
    }

    UPDATE_USER(data): void {
        localStorage.setItem('__user__', JSON.stringify(data));
        this.USER = data;
    }

    DELETE_USER(): void {
        localStorage.removeItem('__user__');
        this.USER = null;
    }

    GET_RECORD(target: string): any[] {
        let records: any[];
        records = JSON.parse(localStorage.getItem(target) || '[]');
        return records;
    }

    GET_STREET_PROPERTIES(id: string): any[] {
        let records: any[];
        records = JSON.parse(localStorage.getItem('__properties__') || '[]');
        return records.filter(record=>record.property.street_id == id);
        
    }


    GET_PROPERTY_ENTITIES(id: string): any[] {
        let records: any[];
        records = JSON.parse(localStorage.getItem('__entities__') || '[]');
        return records.filter(record=>record.property_id == id);
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
        return records.filter(record=>record.street_id == id);
    }

    GET_PROPERTY_PHOTOS(id: string): any[] {
        let records: any[];
        records = JSON.parse(localStorage.getItem('__property_photos__') || '[]');
        return records.filter(record=>record.property_id == id);
    }

    GET_ENTITY_PHOTOS(id: string): any[] {
        let records: any[];
        records = JSON.parse(localStorage.getItem('__entity_photos__') || '[]');
        return records.filter(record=>record.entity_id == id);
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


}