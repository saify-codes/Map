import { Routes } from '@angular/router';
import { MapComponent } from './pages/map/map.component';
import { AboutComponent } from './pages/about/about.component';
import { TeamComponent } from './pages/team/team.component';
import { HomeComponent } from './pages/home/home.component';
import { CapitalComponent } from './pages/capital/capital.component';
import { BuffaloComponent } from './pages/buffalo/buffalo.component';
import { SyracuseComponent } from './pages/syracuse/syracuse.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DemoElementsComponent } from './pages/demo-elements/demo-elements.component';
import { DemoPositioningComponent } from './pages/demo-positioning/demo-positioning.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'capital', component: CapitalComponent},
    {path: 'buffalo', component: BuffaloComponent},
    {path: 'syracuse', component: SyracuseComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'map', component: MapComponent},
    {path: 'demo', component: DemoElementsComponent},
    {path: 'demo-position', component: DemoPositioningComponent},
];
