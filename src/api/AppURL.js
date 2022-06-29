class AppURL {
    static BaseURL = "http://127.0.0.1:8001/api";

    static GetVisitorDetails = this.BaseURL + '/getvisitor';

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

    static GetTestimonial = this.BaseURL + '/testimonial/all';
    static GetBlogPage = this.BaseURL + '/blog-page/all';
    static GetContactPage = this.BaseURL + '/contact-page/all';
    static AllContact = this.BaseURL + '/contact/all';
    static GetAboutPage = this.BaseURL + '/about-page/all';
    static GetHomePage = this.BaseURL + '/home-page/all';

    static AllSkill = this.BaseURL + '/skill/all';
    static AllAbout = this.BaseURL + '/about/all';

    static StoreMessage = this.BaseURL + '/message/store';
    static StoreHireMessage = this.BaseURL + '/hire-message/store';
}

export default AppURL