/**
 * Class Comment
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ...				23.3.2017				Created
 */

import { Component } from '@angular/core';

@Component({
	selector: 'comment',
	templateUrl: 'app/components/comment/comment.component.html',
	styleUrls: ['app/components/comment/comment.css']
})
export class Comment {
	heyhoworld: string = 'heyho';

	constructor() {
	}

	ngOnInit() {
	}
}