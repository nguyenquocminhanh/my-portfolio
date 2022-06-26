class AppURL {
    static BaseURL = "http://127.0.0.1:8001/api";

    static AllBlog = this.BaseURL + '/blog/all';

    static BlogDetails(id) {
        return this.BaseURL + '/blog/' + id;
    }

    static AllBlogCategory = this.BaseURL + '/blog/category/all';

    static AllBlogByCategory(id) {
        return this.BaseURL + '/blog/category/' + id;
    }

    static AllComment = this.BaseURL + '/comment/all';

    static StoreComment = this.BaseURL + '/comment/store';

    static LikeComment(id) {
        return this.BaseURL + '/comment/like/' + id;
    }

    static UnLikeComment(id) {
        return this.BaseURL + '/comment/unlike/' + id;
    }
}

export default AppURL