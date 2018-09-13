import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '../../app.services/store/data.store';
import { CreateService } from '../../app.services/http/crud/create.services';
import { SharedServices } from '../../app.services/library/shared.services';
import { UpdateService } from '../../app.services/http/crud/update.services';

@IonicPage()
@Component({
  selector: 'page-offline',
  templateUrl: 'offline.html',
})
export class OfflinePage {

  public render: boolean = false;
  public user: any;
  public stats: any = {
    data: {
      streets: 0,
      properties: 0,
      entities: 0
    },
    photo: {
      streets: 0,
      properties: 0,
      entities: 0
    }
  };
  public menuItems: any[] = [];

  private streets: any[] = [];
  private properties: any[] = [];
  private entities: any[] = [];
  private street_photos: any[] = [];
  private property_photos: any[] = [];
  private entity_photos: any[] = [];

  private count: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private us: UpdateService,
    private store: Store, private cs: CreateService, private ss: SharedServices) {

  }

  ionViewDidLoad() {
    
  }

  ionViewWillEnter() {
    this.init();
  }

  init(){
    this.dataInit();
    this.offlineDataInit();
  }

  offlineDataInit() {
    this.menuItems = [];
    this.store.GET_RECORD('__streets__').then(data => {
      this.streets = data || [];
    });
    this.store.GET_RECORD('__properties__').then(data => {
      this.properties = data || [];
    });
    this.store.GET_RECORD('__entities__').then(data => {
      this.entities = data || [];
    });

    this.store.GET_PHOTOS('__street_photos__').then(data => {
      this.street_photos = data || [];
    });
    this.store.GET_PHOTOS('__property_photos__').then(data => {
      this.property_photos = data || [];
    });
    this.store.GET_PHOTOS('__entity_photos__').then(data => {
      this.entity_photos = data || [];
    });

  }

  dataInit() {
    this.store.GET_USER().then(data=>{
      this.user = data;
    });

    setTimeout(() => {
      this.renderInit();
    }, 500);

  }

  renderInit() {
    this.statsInit();
    this.menuItemInit();
    this.render = true;
  }

  statsInit(){
    this.stats = {
      data: {
        streets: this.streets.length,
        properties: this.properties.length,
        entities: this.entities.length
      },
      photo: {
        streets: this.street_photos.length,
        properties: this.property_photos.length,
        entities: this.entity_photos.length
      },
      count: this.streets.length + this.properties.length + this.entities.length + this.street_photos.length + this.property_photos.length + this.entity_photos.length
    } 
  }

  menuItemInit(){
    this.menuItems = [{
      title: 'Streets',
      img: 'assets/icon/street.svg',
      description: this.stats.data.streets > 1 ? `${this.stats.data.streets} Records` : `${this.stats.data.streets} Record`,
      page: 'StreetsOfflinePage'
    },
    {
      title: 'Street Photos',
      img: 'assets/icon/photo.svg',
      description: this.stats.photo.street_photos > 1 ? `${this.stats.photo.streets} Records` : `${this.stats.photo.streets} Record`,
      page: 'StreetsOfflinePage'
    },
    {
      title: 'Properties',
      img: 'assets/icon/property.svg',
      description: this.stats.data.properties > 1 ? `${this.stats.data.properties} Records` : `${this.stats.data.properties} Record`,
      page: 'PropertiesOfflinePage'
    },
    {
      title: 'Property Photos',
      img: 'assets/icon/photo.svg',
      description: this.stats.photo.street_photos > 1 ? `${this.stats.photo.properties} Records` : `${this.stats.photo.properties} Record`,
      page: 'PropertiesOfflinePage'
    },
    {
      title: 'Entities',
      img: 'assets/icon/entity.svg',
      description: this.stats.data.entities > 1 ? `${this.stats.data.entities} Records` : `${this.stats.data.entities} Record`,
      page: 'EntitiesOfflineAllPage'
    },
    {
      title: 'Entity Photos',
      img: 'assets/icon/photo.svg',
      description: this.stats.photo.entity_photos > 1 ? `${this.stats.photo.entities} Records` : `${this.stats.photo.entities} Record`,
      page: 'EntitiesOfflineAllPage'
    }];
  }

  openThis(menu) {
    this.navCtrl.push(menu.page)
  }

  pushToCloud() {
    this.count = 0;
    if (this.stats.count > 0) {
      this.ss.presentLoading();
      this.processStreets(this.streets).then((feedback) => {
        if (feedback) {
          this.processStreetPhotos(this.street_photos).then((feedback) => {
            if (feedback) {
              this.processProperties(this.properties).then((feedback) => {
                if (feedback) {
                  this.processPropertyPhotos(this.property_photos).then((feedback) => {
                    if (feedback) {
                      this.processEntities(this.entities).then((feedback) => {
                        if (feedback) {
                          this.processEntityPhotos(this.entity_photos).then((feedback) => {
                            if (feedback) {
                              setTimeout(() => {
                                if(this.count === 0){
                                  this.ss.toast(`No record found to push to cloud`, 3000);
                                }else{
                                  let record_text: string = this.count > 1 ? 'records' : 'record';
                                  this.ss.toast(`Successfully pushed ${this.count} ${record_text} to cloud`, 3000);
                                }
                                this.init();
                                this.ss.dismissLoading();
                              }, 8000);
                            } else {
                              this.ss.toast('Unable to push entity photos to cloud. Please try again', 2000);
                              this.ss.dismissLoading();
                            }
                          });
                        } else {
                          this.ss.toast('Unable to push entity records to cloud. Please try again', 2000);
                          this.ss.dismissLoading();
                        }
                      });
                    } else {
                      this.ss.toast('Unable to push property photos to cloud. Please try again', 2000);
                      this.ss.dismissLoading();
                    }
                  });
                } else {
                  this.ss.toast('Unable to push property records to cloud. Please try again', 2000);
                  this.ss.dismissLoading();
                }
              });
            } else {
              this.ss.toast('Unable to push street photos to cloud. Please try again', 2000);
              this.ss.dismissLoading();
            }
          });
        } else {
          this.ss.toast('Unable to push street records to cloud. Please try again', 2000);
          this.ss.dismissLoading();
        }
      });

    } else {
      this.ss.toast('No record to push to cloud', 3000);
    }
  }

  processStreets(payload) {
    return new Promise(resolve => {
      if (payload.length > 0) {
        payload.forEach(data => {
          this.cs.addNewStreet(data).then(feedback => {
            if (feedback['success']) {
              this.count += 1;
              this.store.REMOVE_STREET(data.record_id);
            }
          }).catch(err => {
            //this.ss.toast(`Record ${this.count} failed to uploaded.`, 3000);
          });
        });
      }
      resolve(true);
    });
  }

  processStreetPhotos(payload) {
    return new Promise(resolve => {
      if (payload.length > 0) {
        payload.forEach(data => {
          this.us.uploadStreetPhoto(data).subscribe(feedback => {
            if (feedback.success) {
              this.count += 1;
              this.store.REMOVE_STREET_PHOTO(data.photo_id);
            } 
          }, err => {
            //this.ss.toast(`Record ${this.count} failed to uploaded.`, 3000);
          });
        });
      }
      resolve(true);
    });
  }

  processProperties(payload) {
    return new Promise(resolve => {
      if (payload.length > 0) {
        payload.forEach(data => {
          this.cs.addNewProperty(data).then(feedback => {
            if (feedback['success']) {
              this.count += 1;
              this.store.REMOVE_PROPERTY(data.record_id);
            }
          }).catch(err => {
            //this.ss.toast(`Record ${this.count} failed to uploaded.`, 3000);
          });
        });
      }
      resolve(true);
    });
  }

  processPropertyPhotos(payload) {
    return new Promise(resolve => {
      if (payload.length > 0) {
        payload.forEach(data => {
          this.us.uploadPropertyPhoto(data).subscribe(feedback => {
            if (feedback.success) {
              this.count += 1;
              this.store.REMOVE_PROPERTY_PHOTO(data.photo_id);
            } 
          }, err => {
            //this.ss.toast(`Record ${this.count} failed to uploaded.`, 3000);
          });
        });
      }
      resolve(true);
    });
  }

  processEntities(payload) {
    return new Promise(resolve => {
      if (payload.length > 0) {
        payload.forEach(data => {
          this.cs.addNewPropertyEntity(data).then(feedback => {
            if (feedback['success']) {
              this.count += 1;
              this.store.REMOVE_ENTITY(data.record_id);
            }
          }).catch(err => {
            //this.ss.toast(`Record ${this.count} failed to uploaded.`, 3000);
          });
        });
      }
      resolve(true);
    });
  }

  processEntityPhotos(payload) {
    return new Promise(resolve => {
      if (payload.length > 0) {
        payload.forEach(data => {
          this.us.uploadEntityPhoto(data).subscribe(feedback => {
            if (feedback.success) {
              this.count += 1;
              this.store.REMOVE_ENTITY_PHOTO(data.photo_id);
            }
          }, err => {
            //this.ss.toast(`Record ${this.count} failed to uploaded.`, 3000);
          });
        });
      }
      resolve(true);
    });
  }

}
