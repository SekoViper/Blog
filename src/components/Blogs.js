const Blogs = (props) => {
  const { blogs } = props;
  const { title } = props;
  const { deleteBlog } = props;

  return (
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
};

export default Blogs;
