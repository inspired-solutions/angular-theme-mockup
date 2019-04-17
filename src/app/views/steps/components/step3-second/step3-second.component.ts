import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Step } from '../../models/step3-enum';

@Component({
	selector: 'kt-step3-second',
	templateUrl: './step3-second.component.html',
	styleUrls: ['./step3-second.component.scss']
})
export class Step3SecondComponent implements OnInit {
	@Input() step: Step;
	@Output() stepChange = new EventEmitter<Step>();
	Step = Step;
	constructor() { }
	ngOnInit() {
	}
	changeStep(step: Step) {
		this.stepChange.emit(step);
	}

}
