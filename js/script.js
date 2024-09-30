// Blog data
const blogs = {
    blog1: {
        title: "Blog Title 1",
        content: "<p>This is the content of blog post 1.</p><p>More content here...</p>",
        image: "456e3956e9b065134a6fac771d33f353.jpg"
    },
    blog2: {
        title: "Blog Title 2",
        content: "<p>This is the content of blog post 2.</p><p>More content here...</p>",
        image: "background2.jpg"
    }
};

// Function to open the blog post
function openBlogPost(blogId) {
    const selectedBlog = blogs[blogId];
    sessionStorage.setItem('blogTitle', selectedBlog.title);
    sessionStorage.setItem('blogContent', selectedBlog.content);
    sessionStorage.setItem('blogImage', selectedBlog.image);
    window.location.href = 'blpost.html';
}

// On page load for blogpost.html
window.onload = function() {
    const blogTitle = sessionStorage.getItem('blogTitle');
    const blogContent = sessionStorage.getItem('blogContent');
    const blogImage = sessionStorage.getItem('blogImage');

    if (blogTitle && blogContent && blogImage) {
        document.getElementById('blog-title').innerHTML = blogTitle;
        document.getElementById('blog-content').innerHTML = blogContent;
        document.getElementById('header').style.backgroundImage = `url(${blogImage})`;
    }
};



