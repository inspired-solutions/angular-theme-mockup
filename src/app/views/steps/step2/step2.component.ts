// Angular
import { Component, OnInit } from '@angular/core';
// Lodash
import { shuffle } from 'lodash';
// Services
import { LayoutConfigService } from '../../../core/_base/layout';
// Widgets model
import { SparklineChartOptions } from '../../../core/_base/metronic';
import { Widget4Data } from '../../partials/content/widgets/widget4/widget4.component';
import { IOption } from '../models/ioption';

@Component({
	selector: 'kt-step2',
	templateUrl: './step2.component.html',
	styleUrls: ['step2.component.scss'],
})
export class Step2Component implements OnInit {

	options: IOption[]= [
		{id:1,name:"Ja, ik ben verkoper via bol.com"},
		{id:2,name:"Nee, ik ben (nog) geen verkoper via bol.com"},
	 ]
	constructor(private layoutConfigService: LayoutConfigService) {
	}

	ngOnInit(): void {
	}
}
