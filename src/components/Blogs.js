import PropTypes from 'prop-types';

const Blogs = ({ blogs, title, deleteBlog }) => (
  <>
    <h1>{title}</h1>
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <p>
            By
            {blog.author}
          </p>
          <button type="button" onClick={() => deleteBlog(blog.id)}>Delete</button>
        </div>
      ))}
    </div>

  </>
);
Blogs.defaultProps = { blogs: null, title: null, deleteBlog: null };
Blogs.propTypes = { blogs: PropTypes.string, title: PropTypes.string, deleteBlog: PropTypes.func };

export default Blogs;
