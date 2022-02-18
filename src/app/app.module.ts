import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { ParenttoComponent } from './parentto/parentto.component';
import { FrchildComponent } from './parentto/frchild/frchild.component';
import { RouteComponent } from './route/route.component';
import { HomeComponent } from './home/home.component';
import { PageErrorComponent } from './page-error/page-error.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ParenttoComponent,
    FrchildComponent,
    RouteComponent,
    HomeComponent,
    PageErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
