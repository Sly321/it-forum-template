/**
 * Class Wrapper
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ...				3.3.2017				Created
 */

import { Component } from '@angular/core';

@Component({
	selector: 'wrapper',
	templateUrl: 'app/components/wrapper/wrapper.component.html',
	styleUrls: ['app/components/wrapper/wrapper.css']
})
export class Wrapper {
	heyhoworld: string = 'heyho';

	constructor() {
	}

	ngOnInit() {
	}
}
