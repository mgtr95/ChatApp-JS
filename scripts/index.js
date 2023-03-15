import { getRandomName, getRandomColor } from "./getRandom.js";
import { updateMembersDOM, addMessageToListDOM, DOM } from "./getDOM.js";

//declaring members array variable
let members = [];

//connect to channel
const CHANNEL_ID = "PpOGDNqHIEJBEr4Z";
const drone = new Scaledrone(CHANNEL_ID, {
  data: {
    // Will be sent out as clientData via events
    name: getRandomName(),
    color: getRandomColor(),
  },
});

//connect to a room
drone.on("open", (error) => {
  if (error) {
    return console.error(error);
  }
  console.log("Successfully connected to Scaledrone");

  //joining room
  const room = drone.subscribe("observable-mg_channel1");
  room.on("open", (error) => {
    if (error) {
      return console.error(error);
    }
    console.log("Successfully joined room");
  });

  //list of online members
  room.on("members", (m) => {
    members = m;
    updateMembersDOM(members);
  });

  //user joined room
  room.on("member_join", (member) => {
    members.push(member);
    updateMembersDOM(members);
  });

  //user left room
  room.on("member_leave", ({ id }) => {
    const index = members.findIndex((member) => member.id === id);
    members.splice(index, 1);
    updateMembersDOM(members);
  });

  //event listener for new messages
  room.on("data", (text, member) => {
    if (member) {
      addMessageToListDOM(text, member);
    } else {
      // Message is from server
    }
  });

  //sending message
  DOM.form.addEventListener("submit", sendMessage);
  
  function sendMessage() {
    const value = DOM.input.value;
    if (value === "") {
      return;
    }
    DOM.input.value = "";
    drone.publish({
      room: "observable-mg_channel1",
      message: value,
    });
  }
});
