/**
 * Class Landing
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ...				3.3.2017				Created
 */

import { Component } from '@angular/core';

@Component({
	selector: 'landing',
	templateUrl: 'app/components/landing/landing.component.html',
	styleUrls: ['app/components/landing/landing.css']
})
export class Landing {
	heyhoworld: string = "heyho";

	constructor() {
	}

	ngOnInit() {
	}
}
