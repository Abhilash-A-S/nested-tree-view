import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { MaterialTreeViewComponent } from './component/material-tree-view/material-tree-view.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';

import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MaterialModule} from '../material.module';
import { AddNodePopupComponent } from './component/add-node-popup/add-node-popup.component';
import { AddNodeFormComponent } from './component/add-node-form/add-node-form.component'

@NgModule({
  declarations: [
    AppComponent,
    MaterialTreeViewComponent,
    LandingPageComponent,
    AddNodePopupComponent,
    AddNodeFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatDividerModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
