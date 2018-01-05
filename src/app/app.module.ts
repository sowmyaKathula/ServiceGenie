import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule,MatDialogModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule, MatInputModule, MatTabsModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';



import { LoginScreenComponent } from './login-screen/login-screen.component';
import { TabScreenComponent } from './tab-screen/tab-screen.component';
import { SearchComponent } from './search/search.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { CardViewComponent } from './card-view/card-view.component';
import { SignUpScreenComponent } from './sign-up-screen/sign-up-screen.component';
import { ServiceCatComponent } from './service-cat/service-cat.component';
import { MessageComponent } from './message/message.component';
import { UserComponent } from './user/user.component';
import { SessionService } from './session.service';
import { UserCartComponent } from './user-cart/user-cart.component';
import { AlertComponentComponent } from './alert-component/alert-component.component';

const approute: Routes = [
  { path: '', component: GridListComponent},
  { path: ':serviceId/:serviceName', component: ServiceCatComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    TabScreenComponent,
    SearchComponent,
    GridListComponent,
    CardViewComponent,
    SignUpScreenComponent,
    ServiceCatComponent,
    MessageComponent,
    UserComponent,
    UserCartComponent,
    AlertComponentComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule, 
    MatDialogModule,
    MatInputModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
    RouterModule.forRoot(approute),
    MatExpansionModule,
    MatListModule
  ],
  entryComponents: [AlertComponentComponent, TabScreenComponent],
  providers: [ UserComponent, SessionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
