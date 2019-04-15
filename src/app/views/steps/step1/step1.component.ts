// Angular
import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
// Lodash
import { shuffle } from 'lodash';
// Services
// import { LayoutConfigService } from '../../../core/_base/layout';
// Widgets model
import { SparklineChartOptions } from '../../../core/_base/metronic';
import { Widget4Data } from '../../partials/content/widgets/widget4/widget4.component';
import { IOption } from '../models/ioption';


@Component({
	selector: 'kt-step1',
	templateUrl: './step1.component.html',
	styleUrls: ['step1.component.scss'],
})
export class Step1Component implements OnInit {
	options: IOption[]= [
		{id:1,name:"Nieuwe producten en/of niches ontdekken"},
		{id:2,name:"Huildig assortiment verbeteren"},
		{id:3,name:"Productiedee valideren"},
		{id:4,name:"Concurrentie monitoren / voorblijven"},
		{id:5,name:"Trend ontdekken"},
		{id:6,name:"Winstmarge product(en) voorspellen"}
	 ]
	constructor() {}
	
	ngOnInit(): void {
	}
}
