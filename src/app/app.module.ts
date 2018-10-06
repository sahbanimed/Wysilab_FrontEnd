import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './Services/user.service';
import { AppComponent } from './app.component';
import { DisplayUserComponent } from './Views/display-user/display-user.component';
import { routes } from './app.router';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SortingPipe } from "./Pipe/SortingPipe";

@NgModule({
  declarations: [
    AppComponent,
    DisplayUserComponent,
    SortingPipe
  ],
  imports: [
    BrowserModule,routes,HttpModule,NgxPaginationModule,NgbModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
