export class Remark {
	author: string;
	authorid: string;
	content: string;
	created: number;
	id: string;
	title: string;

	constructor(author = '', authorid = '', content = '', created = 0, id = '', title = '') {
		this.author = author;
		this.authorid = authorid;
		this.content = content;
		this.created = created;
		this.id = id;
		this.title = title;
	}
}
