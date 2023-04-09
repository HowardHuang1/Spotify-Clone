# Spotify Clone

Spotify Clone is a duplicate of the music streaming app Spotify. It supports functionality for fetching your custom playlists from your actual spotify account using the Spotify API and displays your profile picture as well as your song albums in list format. Spotify Clone also displays a play bar with volume adjustments within the footer.

![UI](https://github.com/HowardHuang1/Spotify-Clone/blob/main/Spotify%20UI.png)

The app primarily consists of a React frontend which makes calls to a Spotify API that provides the profile name and icon, song banners, song names, and playlists.

# How To Use

To clone and run this application, you'll need [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/HowardHuang1/Spotify-Clone.git
# Go into the repository
$ cd Spotify-Clone
# Install dependencies
$ npm install
# Run the app
$ npm start
```

Packages and presets will be loaded automatically from `package.json`.

This will fully render the Spotify-Clone website's login page. After you login, Spotify-Clone will load a page displaying your actual spotify playlists. The user can then select various songs to be played from their playlist.
