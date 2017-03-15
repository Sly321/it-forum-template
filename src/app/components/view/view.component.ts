/**
 * Class View
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ...				15.3.2017				Created
 */

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firebase } from '../../services/firebase/firebase.service';

@Component({
	selector: 'view',
	templateUrl: 'app/components/view/view.component.html',
	styleUrls: ['app/components/view/view.css']
})
export class View {
	id: number;

	constructor(private route: ActivatedRoute, private fire: Firebase) {
		this.route.params.subscribe(params => {
			this.id = params['id'] || 0;
		});
	}

	ngOnInit() {
	}
}
