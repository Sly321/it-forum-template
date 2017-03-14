var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Firebase = (function () {
    function Firebase() {
    }
    Firebase.prototype.writePost = function (data) {
        var key = firebase.database().ref().child('posts').push().key;
        return this.write("posts/" + key, data);
    };
    Firebase.prototype.write = function (section, data) {
        var updates = {};
        updates['/' + section] = data;
        return firebase.database().ref().update(updates);
    };
    Firebase.prototype.removePost = function (id, callback) {
        if (callback === void 0) { callback = function (e) { }; }
        this.remove("posts/" + id, callback);
    };
    Firebase.prototype.removePostById = function (postId, callback) {
        if (callback === void 0) { callback = function (e) { }; }
        this.removeByAttributeValue('posts', 'id', postId, callback);
    };
    Firebase.prototype.removeByAttributeValue = function (section, attribute, value, callback, limit) {
        if (limit === void 0) { limit = 100; }
        var self = this;
        var dataRef = firebase.database().ref(section);
        var query = dataRef.orderByChild(attribute).equalTo(value).limitToLast(limit);
        query.on('value', function (snapshot) {
            snapshot.forEach(function (data) {
                var record = data.val();
                if (record[attribute] === value) {
                    self.removeRef(dataRef.child(data.key), callback);
                }
            });
        });
    };
    Firebase.prototype.remove = function (section, callback) {
        if (callback === void 0) { callback = function (e) { }; }
        var dataRef = firebase.database().ref(section);
        this.removeRef(dataRef, callback);
    };
    Firebase.prototype.removeRef = function (dataRef, callback) {
        dataRef.remove(callback);
    };
    Firebase.prototype.getByQuery = function (query, callback) {
        query.once('value')
            .then(function (dataSnapshot) {
            var result = [];
            dataSnapshot.forEach(function (data) {
                result.push(data.val());
            });
            console.log(result);
            callback(result);
        });
    };
    Firebase.prototype.get = function (section, callback, limit) {
        if (limit === void 0) { limit = 100; }
        var dataRef = firebase.database().ref(section);
        var query = dataRef.limitToLast(limit);
        this.getByQuery(query, callback);
    };
    Firebase.prototype.getTenLatestPosts = function () {
    };
    Firebase.prototype.getPostsByUserid = function (userId, callback) {
        this.getByAttributeValue('posts', 'userid', userId, callback);
    };
    Firebase.prototype.getByAttributeValue = function (section, attribute, value, callback, limit) {
        if (limit === void 0) { limit = 100; }
        var dataRef = firebase.database().ref(section);
        var query = dataRef.orderByChild(attribute).equalTo(value).limitToLast(limit);
        this.getByQuery(query, callback);
    };
    Firebase = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Firebase);
    return Firebase;
}());
exports.Firebase = Firebase;

//# sourceMappingURL=firebase.service.js.map
