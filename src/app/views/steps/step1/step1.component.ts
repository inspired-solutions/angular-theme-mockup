// Angular
import { Component, OnInit } from '@angular/core';

import { IOption } from '../models/ioption';

// Lodash
// Services
// Widgets model
@Component({
	selector: 'kt-step1',
	templateUrl: './step1.component.html',
	styleUrls: ['step1.component.scss'],
})
export class Step1Component implements OnInit {
	options: IOption[] = [
		{ id: 1, name: 'Nieuwe producten en/of niches ontdekken' },
		{ id: 2, name: 'Huildig assortiment verbeteren' },
		{ id: 3, name: 'Productiedee valideren' },
		{ id: 4, name: 'Concurrentie monitoren / voorblijven' },
		{ id: 5, name: 'Trend ontdekken' },
		{ id: 6, name: 'Winstmarge product(en) voorspellen' },
	];
	constructor() {}

	ngOnInit(): void {}
}
