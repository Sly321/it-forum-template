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
var firebase_service_1 = require('../../services/firebase/firebase.service');
var Create = (function () {
    function Create(fire) {
        this.fire = fire;
        this.title = '';
        this.content = '';
        this.showPreview = false;
    }
    Create.prototype.ngOnInit = function () {
        var editor = ace.edit('editor');
        var options = {
            showLineNumbers: false,
            highlightActiveLine: false,
            showGutter: false,
            showPrintMargin: false,
            fontSize: 18
        };
        editor.setOptions(options);
    };
    Create.prototype.previewPost = function () {
        if (!this.validatePost()) {
            return null;
        }
        var post = this.createPost();
        this.preview = post;
        this.showPreview = true;
    };
    Create.prototype.submitPost = function () {
        if (!this.validatePost()) {
            return null;
        }
        var post = this.createPost();
        var res = this.fire.writePost(post);
        console.log(res);
    };
    Create.prototype.createPost = function () {
        var userid = '420';
        var username = 'Hans Grünbach';
        var creationTime = new Date().getTime();
        var post = {
            authorid: userid,
            author: username,
            title: this.title,
            content: this.content,
            created: creationTime,
            id: userid + "-" + creationTime
        };
        console.log(post);
        return post;
    };
    Create.prototype.validatePost = function () {
        return true;
    };
    Create = __decorate([
        core_1.Component({
            selector: 'create',
            templateUrl: 'app/components/create/create.component.html',
            styleUrls: ['app/components/create/create.css']
        }), 
        __metadata('design:paramtypes', [firebase_service_1.Firebase])
    ], Create);
    return Create;
}());
exports.Create = Create;

//# sourceMappingURL=create.component.js.map
