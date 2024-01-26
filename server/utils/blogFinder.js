const searchABlog = (blogTitle) => {
    const query = `SELECT 'id' FROM blog WHERE title=${blogTitle}`;
}




module.exports = {searchABlog}