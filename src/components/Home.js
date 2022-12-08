import { React, useState } from 'react';
import Blogs from './Blogs';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: 'My new website', body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sapiente corporis ipsam expedita illum soluta consequuntur sit suscipit! Ipsa, fugit?', author: ' mario', id: 1,
    },
    {
      title: 'Welcome party!', body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sapiente corporis ipsam expedita illum soluta consequuntur sit suscipit! Ipsa, fugit?', author: ' yoshi', id: 2,
    },
    {
      title: 'Web dev top tips', body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sapiente corporis ipsam expedita illum soluta consequuntur sit suscipit! Ipsa, fugit?', author: ' mario', id: 3,
    },
  ]);

  const deleteBlog = (id) => {
    const filteredBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(filteredBlogs);
  };

  return (
    <div className="home">
      <Blogs blogs={blogs} title="Our Blogs" deleteBlog={deleteBlog} />
      <Blogs blogs={blogs.filter((blog) => blog.author === ' yoshi')} title="Yoshi's Blog" deleteBlog={deleteBlog} />
    </div>
  );
};

export default Home;
