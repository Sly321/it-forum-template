/**
 * Class Post
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ...				9.3.2017				Created
 */

import { Input, Component } from '@angular/core';

@Component({
	selector: 'post',
	templateUrl: 'app/components/post/post.component.html',
	styleUrls: ['app/components/post/post.css']
})
export class Post {
	@Input() post: { title: string, content: string, author: string, created: Date };

	constructor() {
	}

	ngOnInit() {
		console.log('init');
		console.log(this.post);
	}
}
