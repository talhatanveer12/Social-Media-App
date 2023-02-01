import io from "socket.io-client";

const socket = io.connect("https://media-app-first.herokuapp.com");

export default socket
