import { getRandomName, getRandomColor } from "./getRandom.js";
import {
  updateMembersDOM,
  DOM,
  createMessageElement
} from "./getDOM.js";

//declaring members array variable
let members = [];

//connect to channel
const CHANNEL_ID = "PpOGDNqHIEJBEr4Z";
const drone = new Scaledrone(CHANNEL_ID, {
  data: {
    //clientData
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

  room.on("message", (message) => {
    const { data, clientId, member } = message;
    const side = clientId === drone.clientId?"message-right":"message-left";
      createMessageElement(data, member, side);

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




//event listener for new messages
// room.on("data", (text, member) => {
//   if (member) {
//     if (members[0].id === member.id) {
//       createMessageElementRight(text, member);
//     } else {
//       createMessageElementLeft(text, member);
//     }
//     // addMessageToListDOM(text, member);
//   } else {
//     // Message is from server
//   }
// });

// room.on("message", (message) => {
//   const { data, clientId, member } = message;
//   if (member) {
//     if (clientId === drone.clientId) {
//       createMessageElementRight(data, member);
//     } else {
//       createMessageElementLeft(data, member);
//     }
//     // addMessageToListDOM(text, member);
//   } else {
//     // Message is from server
//   }
// });
