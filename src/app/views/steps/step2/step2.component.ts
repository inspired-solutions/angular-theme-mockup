// Angular
import { Component, OnInit } from '@angular/core';

import { LayoutConfigService } from '../../../core/_base/layout';
import { IOption } from '../models/ioption';

// Lodash
// Services
// Widgets model
@Component({
	selector: 'kt-step2',
	templateUrl: './step2.component.html',
	styleUrls: ['step2.component.scss'],
})
export class Step2Component implements OnInit {
	options: IOption[] = [
		{ id: 1, name: 'Ja, ik ben verkoper via bol.com' },
		{ id: 2, name: 'Nee, ik ben (nog) geen verkoper via bol.com' },
	];
	constructor(private layoutConfigService: LayoutConfigService) {}

	ngOnInit(): void {}
}
