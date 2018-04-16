import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PostAttachmentComponent } from './post-attachment/post-attachment';
import { UserAvatarComponent } from './user-avatar/user-avatar';

const __components__: any[] = [
	PostAttachmentComponent,
	UserAvatarComponent
];
@NgModule({
	declarations: [...__components__],
	imports: [IonicModule],
	entryComponents: [...__components__],
	exports: [...__components__]
})
export class ComponentsModule { }
