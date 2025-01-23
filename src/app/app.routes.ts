import { Routes } from '@angular/router';
import { MapComponent } from './pages/map/map.component';
import { AboutComponent } from './pages/about/about.component';
import { TeamComponent } from './pages/team/team.component';

export const routes: Routes = [
    {path: '', redirectTo: 'map', pathMatch: 'full' },
    {path: 'map', component: MapComponent},
    {path: 'about', component: AboutComponent},
    {path: 'team', component: TeamComponent}
];
