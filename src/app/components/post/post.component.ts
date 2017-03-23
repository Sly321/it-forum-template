/**
 * Class Post
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Sven Liebig				9.3.2017				Created
 */

import { Input, Component } from '@angular/core';
import { Article } from './post.model';

@Component({
	selector: 'post',
	templateUrl: 'app/components/post/post.component.html',
	styleUrls: ['app/components/post/post.css']
})
export class Post {
	@Input() post: Article;

	constructor() {
	}

	ngOnInit() {
	}
}
