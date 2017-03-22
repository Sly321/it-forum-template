/**
 * Class Post
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Sven Liebig				9.3.2017				Created
 */

import { Input, Component } from '@angular/core';
import { Beitrag } from './post.model';

@Component({
	selector: 'post',
	templateUrl: 'app/components/post/post.component.html',
	styleUrls: ['app/components/post/post.css']
})
export class Post {
	@Input() post: Beitrag;

	constructor() {
	}

	ngOnInit() {
	}
}
