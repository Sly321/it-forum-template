/**
 * Class Header
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ...				4.3.2017				Created
 */

import { Component } from '@angular/core';

@Component({
	selector: 'header',
	templateUrl: 'app/components/header/header.component.html',
	styleUrls: ['app/components/header/header.css']
})
export class Header {
	heyhoworld: string = "heyho";

	constructor() {
	}

	ngOnInit() {
	}
}