import { React, useState, useEffect } from 'react';

import Blogs from './Blogs';

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const deleteBlog = (id) => {
    const filteredBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(filteredBlogs);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('http://localhost:8000/blogs');
      setBlogs(await result.json());
    };
    fetchData();
  }, []);

  return (
    <div className="home">
      {blogs && <Blogs blogs={blogs} title="Our Blogs" deleteBlog={deleteBlog} />}
      {blogs && <Blogs blogs={blogs.filter((blog) => blog.author === " yoshi") } title="Yoshi's Blogs" deleteBlog={deleteBlog} />}
    </div>
  );
};

export default Home;
