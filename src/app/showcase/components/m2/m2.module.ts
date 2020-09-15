import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppCodeModule} from '../../app.code.component';
import {M2Component} from './m2.component';
import {M2RoutingModule} from './m2-routing.module';

@NgModule({
    imports: [
        CommonModule,
        M2RoutingModule,
        AppCodeModule,
    ],
    declarations: [
        M2Component
    ]
})
export class M2Module {}
