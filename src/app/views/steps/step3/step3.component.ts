// Angular
import { Component, OnInit } from '@angular/core';
// Services
import { LayoutConfigService } from '../../../core/_base/layout';
import { IOption } from '../models/ioption';
// Widgets model
@Component({
	selector: 'kt-step3',
	templateUrl: './step3.component.html',
	styleUrls: ['step3.component.scss'],
})
export class Step3Component implements OnInit {
	options: IOption[]= [
		{id:1,name:"Groonthandel"},
		{id:2,name:"Private label"},
		{id:3,name:"Retailes"},
		{id:4,name:"E-tailer"},
		{id:5,name:"Merkeigenaar"},
		{id:6,name:"Dropshipping"},
		{id:7,name:"Startend ondernemer"},
		{id:8,name:"Student"},
		{id:9,name:"Oriênterend"},

	]
	constructor(private layoutConfigService: LayoutConfigService) {
	}

	ngOnInit(): void {
	}
}
