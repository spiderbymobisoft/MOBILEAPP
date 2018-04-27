import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '../../app.services/store/data.store';
import { EntitiesOfflinePage } from '../entities-offline/entities.offline';
import { PropertiesOfflinePage } from '../properties-offline/properties.offline';
import { StreetsOfflinePage } from '../streets-offline/streets.offline';
import { CreateService } from '../../app.services/http/crud/create.services';
import { SharedServices } from '../../app.services/library/shared.services';
import { UpdateService } from '../../app.services/http/crud/update.services';

@IonicPage()
@Component({
  selector: 'page-offline',
  templateUrl: 'offline.html',
})
export class OfflinePage {

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
  public menuItems: any[];

  private streets: any[];
  private properties: any[];
  private entities: any[];
  private street_photos: any[];
  private property_photos: any[];
  private entity_photos: any[];

  private count: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private us: UpdateService,
    private store: Store, private cs: CreateService, private ss: SharedServices) {
    this.menuInit();
  }

  ionViewDidLoad() {
    this.dataInit();
    this.offlineDataInit();
  }

  ionViewWillEnter() {
  }

  offlineDataInit() {
    this.streets = this.store.GET_RECORD('__streets__');
    this.properties = this.store.GET_RECORD('__properties__');
    this.entities = this.store.GET_RECORD('__entities__');

    this.street_photos = this.store.GET_PHOTOS('__street_photos__');
    this.property_photos = this.store.GET_PHOTOS('__property_photos__');
    this.entity_photos = this.store.GET_PHOTOS('__entity_photos__');

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
      }
    }
  }

  dataInit() {
    this.user = this.store.GET_USER();
  }

  menuInit() {
    this.menuItems = [{
      title: 'Streets',
      img: 'assets/icon/street.svg',
      description: this.stats.data.streets > 1 ? `${this.stats.data.streets} Record` : `${this.stats.data.streets} Records`,
      page: StreetsOfflinePage
    },
    {
      title: 'Street Photos',
      img: 'assets/icon/photo.svg',
      description: this.stats.photo.street_photos > 1 ? `${this.stats.photo.streets} Record` : `${this.stats.photo.streets} Records`,
      page: StreetsOfflinePage
    },
    {
      title: 'Properties',
      img: 'assets/icon/property.svg',
      description: this.stats.data.properties > 1 ? `${this.stats.data.properties} Record` : `${this.stats.data.properties} Records`,
      page: PropertiesOfflinePage
    },
    {
      title: 'Property Photos',
      img: 'assets/icon/photo.svg',
      description: this.stats.photo.street_photos > 1 ? `${this.stats.photo.properties} Record` : `${this.stats.photo.properties} Records`,
      page: PropertiesOfflinePage
    },
    {
      title: 'Entities',
      img: 'assets/icon/entity.svg',
      description: this.stats.data.entities > 1 ? `${this.stats.data.entities} Record` : `${this.stats.data.entities} Records`,
      page: EntitiesOfflinePage
    },
    {
      title: 'Entity Photos',
      img: 'assets/icon/photo.svg',
      description: this.stats.photo.entity_photos > 1 ? `${this.stats.photo.entities} Record` : `${this.stats.photo.entities} Records`,
      page: EntitiesOfflinePage
    }];
  }

  openThis(menu) {
    this.navCtrl.push(menu.page)
  }

  pushToCloud() {
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
                            this.ss.toast(`Successfully pushed ${this.count} records to cloud`, 3000);
                            this.ss.dismissLoading();
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
  }

  processStreets(payload) {
    
    return new Promise(resolve => {
      if (payload.length > 0) {
        payload.forEach(data => {
          this.count += 1;
          this.cs.addNewStreet(data).then(feedback => {
            if (feedback) {
              this.ss.toast(`Record ${this.count} uploaded successfully.`, 3000);
            } else {
              this.ss.toast(`Record ${this.count} failed to uploaded.`, 3000);
            }
          }).catch(err => {
            this.ss.toast(`Record ${this.count} failed to uploaded.`, 3000);
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
          this.count += 1;
          this.us.uploadStreetPhoto(data).subscribe(feedback => {
            if (feedback.success) {
              this.ss.toast(`Record ${this.count} uploaded successfully.`, 3000);
            } else {
              this.ss.toast(`Record ${this.count} failed to uploaded.`, 3000);
            }
          }, err => {
            this.ss.toast(`Record ${this.count} failed to uploaded.`, 3000);
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
          this.count += 1;
          this.cs.addNewProperty(data).then(feedback => {
            if (feedback) {
              this.ss.toast(`Record ${this.count} uploaded successfully.`, 3000);
            } else {
              this.ss.toast(`Record ${this.count} failed to uploaded.`, 3000);
            }
          }).catch(err => {
            this.ss.toast(`Record ${this.count} failed to uploaded.`, 3000);
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
          this.count += 1;
          this.us.uploadPropertyPhoto(data).subscribe(feedback => {
            if (feedback.success) {
              this.ss.toast(`Record ${this.count} uploaded successfully.`, 3000);
            } else {
              this.ss.toast(`Record ${this.count} failed to uploaded.`, 3000);
            }
          }, err => {
            this.ss.toast(`Record ${this.count} failed to uploaded.`, 3000);
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
          this.count += 1;
          this.cs.addNewPropertyEntity(data).then(feedback => {
            if (feedback) {
              this.ss.toast(`Record ${this.count} uploaded successfully.`, 3000);
            } else {
              this.ss.toast(`Record ${this.count} failed to uploaded.`, 3000);
            }
          }).catch(err => {
            this.ss.toast(`Record ${this.count} failed to uploaded.`, 3000);
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
          this.count += 1;
          this.us.uploadEntityPhoto(data).subscribe(feedback => {
            if (feedback.success) {
              this.ss.toast(`Record ${this.count} uploaded successfully.`, 3000);
            } else {
              this.ss.toast(`Record ${this.count} failed to uploaded.`, 3000);
            }
          }, err => {
            this.ss.toast(`Record ${this.count} failed to uploaded.`, 3000);
          });
        });
      }
      resolve(true);
    });
  }

}
