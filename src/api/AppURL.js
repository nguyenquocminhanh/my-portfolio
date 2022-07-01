class AppURL {
    static BaseURL = process.env.REACT_APP_API_URL;

    // Visitor
    static GetVisitorDetails = this.BaseURL + '/getvisitor';

    // Blog
    static AllBlog = this.BaseURL + '/blog/all';

    static BlogDetails(id) {
        return this.BaseURL + '/blog/' + id;
    }

    // Blog Category
    static AllBlogCategory = this.BaseURL + '/blog/category/all';

    static AllBlogByCategory(id) {
        return this.BaseURL + '/blog/category/' + id;
    }

    // Project
    static AllProject = this.BaseURL + '/project/all';

    static ProjectDetails(id) {
        return this.BaseURL + '/project/' + id;
    }

    // Project Category
    static AllProjectCategory = this.BaseURL + '/project/category/all';

    static AllProjectByCategory(id) {
        return this.BaseURL + '/project/category/' + id;
    }

    // Comment
    static AllComment = this.BaseURL + '/comment/all';

    static StoreComment = this.BaseURL + '/comment/store';

    static LikeComment(id) {
        return this.BaseURL + '/comment/like/' + id;
    }

    static UnLikeComment(id) {
        return this.BaseURL + '/comment/unlike/' + id;
    }

    // Pages
    static GetTestimonial = this.BaseURL + '/testimonial/all';
    static GetBlogPage = this.BaseURL + '/blog-page/all';
    static GetContactPage = this.BaseURL + '/contact-page/all';
    static AllContact = this.BaseURL + '/contact/all';
    static GetAboutPage = this.BaseURL + '/about-page/all';
    static GetHomePage = this.BaseURL + '/home-page/all';
    static GeProjectPage = this.BaseURL + '/project-page/all';

    // About Data
    static AllSkill = this.BaseURL + '/skill/all';
    static AllAbout = this.BaseURL + '/about/all';

    // Message
    static StoreMessage = this.BaseURL + '/message/store';
    static StoreHireMessage = this.BaseURL + '/hire-message/store';
}

export default AppURL