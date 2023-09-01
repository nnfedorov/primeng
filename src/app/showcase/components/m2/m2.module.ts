import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {M2Component} from './m2.component';
import {M2RoutingModule} from './m2-routing.module';
import {AppCodeModule} from '../../layout/doc/code/app.code.component';

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
