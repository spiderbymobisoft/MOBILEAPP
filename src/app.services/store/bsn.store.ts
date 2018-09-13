import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { RetrieveService } from '../http/crud/retrieve.services';

@Injectable()
export class BSNStore {

    constructor(private storage: Storage, private rs: RetrieveService) {

    }

    INIT(userId){
        this.rs.getUserBSN(userId).subscribe(data=>{
            this.storage.set('__bsn__', data.result);
        },err=>{});
    }

    GET() {
        return this.storage.get('__bsn__');
    }

    UPDATE(records:any[]) {
        return new Promise(resolve => {
            this.storage.set('__bsn__', records).then(() => {
                resolve(true);
            });
        });
    }

   

 

}