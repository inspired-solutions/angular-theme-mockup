import { Component, OnInit, Input, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { IOption } from '../../models/ioption';

@Component({
	selector: 'kt-options',
	templateUrl: './options.component.html',
	styleUrls: ['./options.component.scss'],
})
export class OptionsComponent  {
	@Input() options: IOption[];
	@Input() dense: boolean = false;
	currentOption: IOption;
	constructor() {}

	onSelectOption(option: IOption) {
		this.currentOption = option;
	}
}
