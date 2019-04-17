import { Component, OnInit, Input, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { IOption } from '../../models/ioption';

@Component({
	selector: 'kt-options',
	templateUrl: './options.component.html',
	styleUrls: ['./options.component.scss']
})

export class OptionsComponent implements OnInit, AfterViewChecked {
	@Input() options: IOption[];
	@Input() dense: boolean = false;
	currentOption: IOption;
	constructor() { }

	// resize(){
		// document.querySelectorAll(".option").forEach(option =>
		// 	( option as any ).style.height=getComputedStyle(option).width
		// );
	// }
	ngAfterViewChecked(){
		// this.resize();
	}
	ngOnInit(): void {
		// window.addEventListener("resize",this.resize);
	}
	onSelectOption(option: IOption){
		this.currentOption = option;
	}

}
