import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat'; // required to integrate firebase
// AngularFireAuthModule required to connect the firebase authentication service
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// AngularFirestoreModule required to connect to the firestore service
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UserModule } from './user/user.module';
import { environment } from '../../environment';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    UserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  declarations: [AppComponent, NavComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
