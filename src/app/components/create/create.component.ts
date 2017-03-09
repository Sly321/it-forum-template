/**
 * Class Create
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ...				9.3.2017				Created
 */

import { Component } from '@angular/core';

import { Firebase } from '../../services/firebase/firebase.service';

@Component({
	selector: 'create',
	templateUrl: 'app/components/create/create.component.html',
	styleUrls: ['app/components/create/create.css']
})
export class Create {
	heyhoworld: string = 'heyho';

	constructor(private fire: Firebase) {
	}

	ngOnInit() {
	}
}
