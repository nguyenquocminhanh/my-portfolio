class AppURL {
    static BaseURL = "http://127.0.0.1:8001/api";

    static AllBlog = this.BaseURL + '/blog/all';

    static BlogDetails(id) {
        return this.BaseURL + '/blog/' + id;
    }

    static AllBlogCategory = this.BaseURL + '/blog/category/all';
}

export default AppURL