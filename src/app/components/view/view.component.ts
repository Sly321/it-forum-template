/**
 * Class View
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ...				15.3.2017				Created
 */

import { Component } from '@angular/core';

@Component({
	selector: 'view',
	templateUrl: 'app/components/view/view.component.html',
	styleUrls: ['app/components/view/view.css']
})
export class View {
	heyhoworld: string = 'heyho';

	constructor() {
	}

	ngOnInit() {
	}
}