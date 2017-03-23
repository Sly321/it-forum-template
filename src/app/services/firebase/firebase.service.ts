/**
 * Class Firebase
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Sven Liebig				7.3.2017				Created
 */

import { Injectable } from '@angular/core';
import { Article } from '../../components/post/post.model';

@Injectable()
export class Firebase {

	/* Post structure

		post: any = {
			authorid: 'uid-123',
			title: 'title',
			content: 'very long string in here with ü ä ö / # + ´ß : - .< and stuff',
			date: new Date(),
			id: 'unique id because posts are expensive'
		};

		comment {
			authorid: string,
			content: string,
			date: date,
			id: string,
			parentPost: id
		}

	*/

	constructor() {
	}

	/* * * * * * * * * */
	/* Write Methods   */
	/* * * * * * * * * */
	writePost(data: Article) {
		// Creates a post and returns the key
		let key = firebase.database().ref().child('posts').push().key;
		return this.write(`posts/${key}`, data);
	}

	write(section: string, data: any) {
		let updates = {};
		updates['/' + section] = data;
		return firebase.database().ref().update(updates);
	}

	/* * * * * * * * * */
	/* Remove Methods  */
	/* * * * * * * * * */

	/*
	removePost(id: string, callback = (e) => { }) {
		this.remove(`posts/${id}`, callback);
	}

	remove(section: string, callback = (e) => { }) {
		let dataRef = firebase.database().ref(section);
		this.removeRef(dataRef, callback);
	}
	*/

	removePostById(postId, callback: (e) => void) {
		this.removeByAttributeValue('posts', 'id', postId, callback);
	}

	removeByAttributeValue(section: string, attribute: string, value: string, callback: any, limit = 100) {
		let self = this;
		let dataRef = firebase.database().ref(section);
		let query = dataRef.orderByChild(attribute).equalTo(value).limitToLast(limit);
		query.on('value', function(snapshot: any) {
			snapshot.forEach(function(data: any) {
				let record = data.val();
				if (record[attribute] === value) {
					self.removeRef(dataRef.child(data.key), callback);
				}
			});
		});
	}

	removeRef(dataRef: any, callback) {
		dataRef.remove(callback);
	}

	/* * * * * * * * * */
	/* Get Methods     */
	/* * * * * * * * * */
	getTenLatestPosts(callback: (e: Array<Article>) => void) {
		let dataRef = firebase.database().ref('posts');
		let query = dataRef.limitToLast(10);
		this.getByQuery(query, callback);
	}

	getPostsByUserid(userId, callback: (e: Array<Article>) => void) {
		this.getByAttributeValue('posts', 'userid', userId, callback);
	}

	getPostsByPostid(postId, callback: (e: Array<Article>) => void) {
		this.getByAttributeValue('posts', 'id', postId, callback);
	}

	getByAttributeValue(section: string, attribute: string, value: string, callback: (e: Array<Article>) => void, limit = 100) {
		let dataRef = firebase.database().ref(section);
		let query = dataRef.orderByChild(attribute).equalTo(value).limitToLast(limit);
		this.getByQuery(query, callback);
	}

	getByQuery(query, callback) {
		query.once('value')
			.then(function(dataSnapshot: any) {
				let result: Array<Article> = [];
				dataSnapshot.forEach(function(data: any) {
					result.push(data.val());
				});
				callback(result);
			});
	}
}
