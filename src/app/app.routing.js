"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./_guards/index');
var index_2 = require('./components/index');
var appRoutes = [
    { path: '', component: index_2.MainComponent },
    {
        path: 'home', component: index_2.HomeComponent, canActivate: [index_1.AuthGuard],
        children: [
            { path: '', component: index_2.QuestionsComponent },
            { path: 'home', component: index_2.HomeComponent },
            { path: 'questions', component: index_2.QuestionsComponent },
            { path: 'account', component: index_2.AccountComponent },
            { path: 'reports', component: index_2.ReportsComponent }
        ]
    },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
exports.routedComponents = [
    index_2.HomeComponent,
    index_2.MainComponent,
    index_2.QuestionsComponent,
    index_2.AccountComponent,
    index_2.ReportsComponent
];
//# sourceMappingURL=app.routing.js.map