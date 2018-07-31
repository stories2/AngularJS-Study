import { Injectable } from '@angular/core';

import {postList} from "./model/posts-data";
import {Post} from "./model/post.model";

@Injectable({
  providedIn: 'root'
})
export class PostManagerService {

  constructor() { }

  getLatestPosts(pageNumber: number): Promise<Post[]> {
    return null;
  }
}
