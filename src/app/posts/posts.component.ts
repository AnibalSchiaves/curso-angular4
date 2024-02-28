import { Component } from "@angular/core";
import { PostService } from "../services/post.service";

@Component({
    selector:"app-posts",
    templateUrl:"./posts.component.html"
})
export class PostsComponent {

    public posts: any;

    constructor(
        private _postService: PostService
    ) { 
        this.posts = [];
    }

    sleep(ms:number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async ngOnInit() {
        //provoco un retardo para demorar la consulta y mostrar "cargando"
        this.sleep(2000).then(
            () => {
                this._postService.getPost().subscribe(result => this.posts = result);
            }
        );       
        
    }
}