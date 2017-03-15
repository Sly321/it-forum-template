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
	post: any = null;

	constructor(private route: ActivatedRoute, private fire: Firebase) {
		this.route.params.subscribe(params => {
			this.id = params['id'] || 0;
			if (this.id !== 0) {
				this.loadPost();
			}
		});
	}

	ngOnInit() {
	}

	loadPost() {
		let self = this;
		this.fire.getPostsByPostid(this.id, (e) => {
			if (e.length === 1) {
				self.post = e[0];
			} else if (e.length > 1) {
				console.log('post should be unique');
			} else {
				console.log('post does not exist');
			}
		});
	}

	showPost() {
		return this.post !== null;
	}
}
