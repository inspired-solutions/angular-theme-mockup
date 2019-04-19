import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IOption } from '../../models/ioption';
import { Step } from '../../models/step3-enum';

@Component({
	selector: 'kt-step3-first',
	templateUrl: './step3-first.component.html',
	styleUrls: ['./step3-first.component.scss'],
})
export class Step3FirstComponent implements OnInit {
	@Input() step: Step;
	@Output() stepChange = new EventEmitter<Step>();
	salesOptions: IOption[] = [
		{ id: 1, name: 'Groothandel' },
		{ id: 2, name: 'Private label' },
		{ id: 3, name: 'Retailer' },
		{ id: 4, name: 'E-tailer' },
		{ id: 5, name: 'Merkeigenaar / fabrikant' },
		{ id: 6, name: 'Dropshipping' },
	];
	deliveryOptions: IOption[] = [{ id: 1, name: 'Logistiek via bol.com LVB' }, { id: 2, name: 'Eigen logistiek LVM' }];
	Step = Step;
	constructor() {}

	ngOnInit() {}
	changeStep(step: Step) {
		this.stepChange.emit(step);
	}
}
