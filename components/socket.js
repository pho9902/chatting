const socket = io();

socket.on("connect", () => {
  console.log(1);
});

const send = () => {
  socket.emit("send", "ㅎㅇ");
};
