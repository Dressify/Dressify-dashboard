import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import {ProfileComponent} from "./profile/profile.component";
import {LeftContentComponent} from "./profile/left-content/left-content.component";
import {RightContentComponent} from "./profile/right-content/right-content.component";
import {UserProfileComponent} from "./profile/user-profile/user-profile.component";
import {MyProfileComponent} from "./profile-edit/my-profile/my-profile.component";
import {ProfileEditComponent} from "./profile-edit/profile-edit.component";
import {EditProfileComponent} from "./profile-edit/edit-profile/edit-profile.component";
import {SharedModule} from "../../../shared/shared.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AboutMeComponent} from "./profile/left-content/about-me/about-me.component";
import {FollowersComponent} from "./profile/left-content/followers/followers.component";
import {FollowingsComponent} from "./profile/left-content/followings/followings.component";
import {FriendsComponent} from "./profile/left-content/friends/friends.component";
import {LatestPhotosComponent} from "./profile/left-content/latest-photos/latest-photos.component";
import {DoubleComponent} from "./profile/right-content/double/double.component";
import {SinglePostComponent} from "./profile/right-content/single-post/single-post.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
      ProfileComponent,
      LeftContentComponent,
      AboutMeComponent,
      FollowersComponent,
      FollowingsComponent,
      FriendsComponent,
      LatestPhotosComponent,
      RightContentComponent,
      DoubleComponent,
      SinglePostComponent,
      UserProfileComponent,
      ProfileEditComponent,
      EditProfileComponent,
      MyProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
