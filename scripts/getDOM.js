export const DOM = {
  membersCount: document.querySelector(".members-count"),
  membersList: document.querySelector(".members-list"),
  messages: document.querySelector(".messages"),
  input: document.querySelector(".message-form__input"),
  form: document.querySelector(".message-form"),
};

export function createMemberElement(member) {
  const { name } = member.clientData;
  const el = document.createElement("div");
  el.appendChild(document.createTextNode(name));
  el.className = "member";
  return el;
}

export function updateMembersDOM(members) {
  DOM.membersCount.innerText = `${members.length} users in room:`;
  DOM.membersList.innerHTML = "";
  members.forEach((member) =>
    DOM.membersList.appendChild(createMemberElement(member))
  );
}


export function createMessageElement(text, member) {
  let time = new Date();
  DOM.messages.innerHTML += `
  <div class="message">
    <span class="message-user">${member.clientData.name}</span>
    <span class="message-value">${text}</span>
  </div>
  <span style="font-size:10px">${time.getHours()}:${time.getMinutes()}</span>
  `
  return el
}

//old
// export function createMessageElement(text, member) {
//   const el = document.createElement("div");
//   const user = document.createElement("span")
//   user.appendChild(document.createTextNode(member.clientData.name));
//   user.className = "message-member"
//   el.appendChild(user);
//   el.appendChild(document.createTextNode(text));
//   //if statement for left and right positioning
//   el.className = "message";
//   return el;
// }

export function addMessageToListDOM(text, member) {
  const el = DOM.messages;
  const wasTop = el.scrollTop === el.scrollHeight - el.clientHeight;
  el.appendChild(createMessageElement(text, member));
  if (wasTop) {
    el.scrollTop = el.scrollHeight - el.clientHeight;
  }
}

