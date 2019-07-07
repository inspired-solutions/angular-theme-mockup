// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { Step3FirstComponent } from '../components/step3-first/step3-first.component';
import { Step3SecondComponent } from '../components/step3-second/step3-second.component';
import { Step3Component } from './step3.component';

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
				component: Step3Component,
			},
		]),
	],
	providers: [],
	declarations: [Step3Component, Step3FirstComponent, Step3SecondComponent],
})
export class Step3Module {}
