/**
 * Class Landing
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ...				3.3.2017				Created
 */

import { Component } from '@angular/core';

import { Firebase } from '../../services/firebase/firebase.service';

@Component({
	selector: 'landing',
	templateUrl: 'app/components/landing/landing.component.html',
	styleUrls: ['app/components/landing/landing.css']
})
export class Landing {
	searchString: string = '';
	postArray: any = [];

	constructor(private fire: Firebase) {
		this.fire.getTenLatestPosts((e) => {
			e.sort((a, b) => {
				return a.created < b.created;
			});
			this.postArray = e;
		});
	}

	ngOnInit() {
	}

	timeStampToLocaleDate(timeStamp: number) {
		return new Date(timeStamp).toLocaleString();
	}
}
