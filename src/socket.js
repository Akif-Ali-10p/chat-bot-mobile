import {io} from "socket.io-client";

let URL = "https://4c25-117-20-31-76.in.ngrok.io";
URL = "http://172.16.16.146:3000";
const socket = io.connect(URL);
console.log("socket created");
socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;