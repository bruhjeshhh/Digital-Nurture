import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    // Step 5: Initialize the component state with an empty posts array
    this.state = {
      posts: [],
      error: null
    };
  }

  // Step 6: Create the loadPosts method using the Fetch API
  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Slice to the first 10 posts so the page stays clean and readable
        this.setState({ posts: data.slice(0, 10) });
      })
      .catch((err) => {
        this.setState({ error: err.message });
      });
  }

  // Step 7: Implement the componentDidMount hook to auto-trigger data fetching
  componentDidMount() {
    this.loadPosts();
  }

  // Step 9: Define the componentDidCatch hook to intercept runtime errors gracefully
  componentDidCatch(error, info) {
    alert(`An error occurred in the Posts component: ${error.message}`);
    this.setState({ error: error.message });
  }

  // Step 8: Implement the render method to loop through and display the data structures
  render() {
    const { posts, error } = this.state;

    if (error) {
      return <div style={{ color: 'red', padding: '20px' }}><h3>Error loading posts: {error}</h3></div>;
    }

    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', textAlign: 'left' }}>
        <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>Latest Blog Posts</h2>
        <hr />
        {posts.length === 0 ? (
          <p style={{ textAlign: 'center' }}>Loading live feeds from server...</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} style={{ 
              backgroundColor: '#f9f9f9', 
              padding: '15px', 
              margin: '15px 0', 
              borderRadius: '8px',
              borderLeft: '5px solid #3498db',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#2980b9', textTransform: 'capitalize' }}>
                {post.id}. {post.title}
              </h3>
              <p style={{ margin: 0, color: '#555', lineHeight: '1.6' }}>
                {post.body}
              </p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Posts;