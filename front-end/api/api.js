// Fetch ou Axios

import axios from "axios";

const URl = "http://localhost:3000";

const responseArtists = await axios.get(`${URl}/artists`);
const responseSongs = await axios.get(`${URl}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
// console.log(responseArtists.data);
