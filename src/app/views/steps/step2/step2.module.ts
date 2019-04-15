// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { Step2Component } from './step2.component';

// NgBootstrap
// Core Module
@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		NgbModule,
		RouterModule.forChild([
			{
				path: '',
				component: Step2Component
			},
		]),
	],
	providers: [],
	declarations: [
		Step2Component,
	]
})
export class Step2Module {
}
