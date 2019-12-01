import React, { Component } from "react";
import { firestore, auth } from "../firebase";
import { collectIdsAndDocs } from "../utils";
import Posts from "./Posts";
import Authentication from "../components/Authentication";

class Application extends Component {
  state = {
    posts: [],
    user: null
  };

  componentDidMount = async () => {
    this.unsubscribeFromFirestore = firestore
      .collection("posts")
      .onSnapshot(snapshot => {
        const posts = snapshot.docs.map(collectIdsAndDocs);

        this.setState({ posts });
      });
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
        user => {this.setState({ user });
    });
  };

  componentWillUnmount = _ => {
    this.unsubscribeFromFirestore();
    this.unsubscribeFromAuth();
  };      

  render() {
    const { posts, user } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Authentication user={user} />

        <Posts posts={posts} />
  
      </main>
    );
  }
}

export default Application;
