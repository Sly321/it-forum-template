/**
 * Class Post
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ...				9.3.2017				Created
 */

import { Component } from '@angular/core';

@Component({
	selector: 'post',
	templateUrl: 'app/components/post/post.component.html',
	styleUrls: ['app/components/post/post.css']
})
export class Post {
	heyhoworld: string = "heyho";

	constructor() {
	}

	ngOnInit() {
	}
}