import {Routes, RouterModule}     from '@angular/router';
import {AuthGuard}                from './_guards/index';
import {MainComponent,
        HomeComponent,
        QuestionsComponent,
        AccountComponent}         from './components/index';


const appRoutes: Routes = [

    { path: '', component: MainComponent },
    {
        path: 'home', component:HomeComponent, canActivate: [AuthGuard],
        children: [
            { path: '', component: QuestionsComponent },
            { path: 'home', component: HomeComponent },
            { path: 'questions', component: QuestionsComponent },
            { path: 'account', component: AccountComponent }
        ]
    },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [
    HomeComponent,
    MainComponent,
    QuestionsComponent,
    AccountComponent
];
