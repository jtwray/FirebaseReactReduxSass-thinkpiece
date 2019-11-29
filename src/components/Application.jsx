import React, { Component } from "react";
import { firestore } from "../firebase";
import { collectIdsAndDocs } from "../utils";
import Posts from "./Posts";

class Application extends Component {
  state = {
    posts: []
  };

  componentDidMount = async () => {
    const snapshot = await firestore.collection("posts").get();
    const posts = snapshot.docs.map(collectIdsAndDocs);
    this.setState({ posts });
    snapshot.forEach(doc => {
      const id = doc.id;
      const data = doc.data();
      console.log({ id, data });
    });
    console.log("snapshot:", { snapshot }, "posts:", { posts });
  };
  handleCreate = post => {
    const { posts } = this.state;
    this.setState({ posts: [post, ...posts] });
  };

  render() {
    const { posts } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Posts posts={posts} onCreate={this.handleCreate} />
      </main>
    );
  }
}

export default Application;
