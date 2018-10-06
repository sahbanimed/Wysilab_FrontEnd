import { AppComponent } from './app.component';
import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { DisplayUserComponent } from './Views/display-user/display-user.component';

export const router: Routes =[
    {path : '',component : DisplayUserComponent}
];

export const routes : ModuleWithProviders = RouterModule.forRoot(router);