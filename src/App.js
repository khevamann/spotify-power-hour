import React, { Component } from "react";
import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import hash from "./hash";
import Player from "./Player";
import logo from "./logo.svg";
import "./App.css";
const SKIP_TIME = 60;

class App extends Component {
  constructor() {
    super();
    this.state = {
      timer: 0,
      numSongs: 61,
      token: null,
      item: {
        album: {
          images: [{ url: "" }],
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms: 0,
      },
      is_playing: "Paused",
      progress_ms: 0,
    };
    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
  }
  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token,
      });
      setInterval(() => {
        if (this.state.timer <= 1) {
          this.skipNext(_token);
        } else {
          this.setState({ timer: this.state.timer - 1 });
        }
      }, 1000);
    }
  }

  getCurrentlyPlaying(token) {
    // Make a call using the token
    console.log(token);
    $.ajax({
      url: "https://api.spotify.com/v1/me/player",
      type: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: (data) => {
        if (data) {
          this.setState({
            item: data.item,
            is_playing: data.is_playing,
            progress_ms: data.progress_ms,
          });
        }
      },
    });
  }

  skipNext(token) {
    $.ajax({
      url: "https://api.spotify.com/v1/me/player/next",
      type: "POST",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: (data) => {
        console.log(data);
        this.setState((prevState) => ({
          timer: SKIP_TIME,
          numSongs: prevState.numSongs - 1
        }));
        this.getCurrentlyPlaying(token);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {!this.state.token && (
            <>
              <img src={logo} className="App-logo" alt="logo" />
              <a
                className="btn btn--loginApp-link"
                href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                  "%20"
                )}&response_type=token&show_dialog=true`}
              >
                Login to Spotify
              </a>
            </>
          )}
          {this.state.token && (
            <>
              <p>{this.state.timer} seconds left</p>
              <p>{this.state.numSongs}/60 songs left</p>
              <Player
                item={this.state.item}
                is_playing={this.state.is_playing}
                progress_ms={this.progress_ms}
              />
            </>
          )}
        </header>
      </div>
    );
  }
}

export default App;
