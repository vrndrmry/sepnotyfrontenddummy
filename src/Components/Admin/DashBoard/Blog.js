import React from 'react'

export default function Blog() {
  return (
    <div>
      <div className="createBlog">
        <form action="">
          <input type="text" placeholder="Title" />
          <input
            type="text"
            placeholder="
                    Summary"
          />
          <input type="file" single />
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            placeholder="Enter Blog"
          ></textarea>
          <button>Create Post</button>
        </form>
      </div>
    </div>
  );
}
