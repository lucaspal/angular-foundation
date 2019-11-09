import { MapComponent } from './map/map.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router"

const routes: Routes = [
    {
        path: '',
        component: MapComponent
    },
    {   
        path: ':id',
        component: MapComponent
    },
    // TODO: Make default 404 component
    // {
    //     path: '**'
    //     component : 404Component
    // }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
