// Fetch ou Axios

import axios from "axios";
import "dotenv/config";

const { NODE_ENV } = process.env;
const URl = NODE_ENV === "development" ? "http://localhost:3000/api" : "/api";

const responseArtists = await axios.get(`${URl}/artists`);
const responseSongs = await axios.get(`${URl}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
// console.log(responseArtists.data);
