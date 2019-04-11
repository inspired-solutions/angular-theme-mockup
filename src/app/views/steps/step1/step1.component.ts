// Angular
import { Component, OnInit } from '@angular/core';
// Lodash
import { shuffle } from 'lodash';
// Services
// import { LayoutConfigService } from '../../../core/_base/layout';
// Widgets model
import { SparklineChartOptions } from '../../../core/_base/metronic';
import { Widget4Data } from '../../partials/content/widgets/widget4/widget4.component';

@Component({
	selector: 'kt-step1',
	templateUrl: './step1.component.html',
	styleUrls: ['step1.component.scss'],
})
export class Step1Component implements OnInit {
	chartOptions1: SparklineChartOptions;
	chartOptions2: SparklineChartOptions;
	chartOptions3: SparklineChartOptions;
	chartOptions4: SparklineChartOptions;
	widget4_1: Widget4Data;
	widget4_2: Widget4Data;
	widget4_3: Widget4Data;
	widget4_4: Widget4Data;

	constructor() {
	}

	ngOnInit(): void {
	}
}
