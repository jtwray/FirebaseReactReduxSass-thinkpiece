import React, { Component } from "react";
import { firestore } from "../firebase";
import { collectIdsAndDocs } from "../utils";
import Posts from "./Posts";

class Application extends Component {
  state = {
    posts: []
  };
  unsubscribe = null;

  componentDidMount = async () => {
    this.unsubscribe = firestore.collection("posts").onSnapshot(snapshot => {
      const posts = snapshot.docs.map(collectIdsAndDocs);
      this.setState({ posts });
    });
  };

  componentWillUnmount = _ => {
    this.unsubscribe();
  };

  handleRemove = async id => {
    const allPosts = [...this.state.posts];
    await firestore.doc(`posts/${id}`).delete();
    const posts = allPosts.filter(post => post.id !== id);

    this.setState({ posts });
  };

  handleCreate = async post => {
    const docRef = await firestore.collection("posts").add(post);
    const doc = await docRef.get();

    const newPost = collectIdsAndDocs(doc);
    const { posts } = this.state;
    this.setState({ posts: [newPost, ...posts] });
  };

  render() {
    const { posts } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Posts
          posts={posts}
          onCreate={this.handleCreate}
          onRemove={this.handleRemove}
        />
      </main>
    );
  }
}

export default Application;
