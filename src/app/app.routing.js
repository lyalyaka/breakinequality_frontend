"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./_guards/index');
var main_component_1 = require('./components/main.component');
var home_component_1 = require('./components/home.component');
var news_component_1 = require('./components/news.component');
var profile_component_1 = require('./components/profile.component');
var appRoutes = [
    { path: '', component: main_component_1.MainComponent },
    {
        path: 'home', component: home_component_1.HomeComponent, canActivate: [index_1.AuthGuard],
        children: [
            { path: '', component: news_component_1.NewsComponent },
            { path: 'news', component: news_component_1.NewsComponent },
            { path: 'profile', component: profile_component_1.ProfileComponent }
        ]
    },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
exports.routedComponents = [
    home_component_1.HomeComponent,
    main_component_1.MainComponent,
    news_component_1.NewsComponent,
    profile_component_1.ProfileComponent
];
//# sourceMappingURL=app.routing.js.map