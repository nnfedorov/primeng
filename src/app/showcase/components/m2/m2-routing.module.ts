import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {M2Component} from './m2.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path:'',component: M2Component}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class M2RoutingModule {}
