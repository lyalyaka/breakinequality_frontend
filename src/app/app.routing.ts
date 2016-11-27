import {Routes, RouterModule}     from '@angular/router';
import {AuthGuard}                from './_guards/index';
import {MainComponent,
        HomeComponent,
        QuestionsComponent}       from './components/index';


const appRoutes: Routes = [

    { path: '', component: MainComponent },
    {
        path: 'home', component:HomeComponent, canActivate: [AuthGuard],
        children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent }
        ]
    },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [
    HomeComponent,
    MainComponent
];
