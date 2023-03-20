export const DOM = {
  membersCount: document.querySelector(".members-count"),
  membersList: document.querySelector(".members-list"),
  messages: document.querySelector(".messages"),
  input: document.querySelector(".message-form__input"),
  form: document.querySelector(".message-form"),
};

export function createMemberElement(member) {
  const { name, color } = member.clientData;
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

export function createMessageElementRight(data, member) {
  let time = new Date();
  DOM.messages.innerHTML += `
  <div class="message message-right">
    <span class="message-user">${member.clientData.name}</span>
    <span class="message-value">${data}</span>
    <span style="font-size:9px;color:rgb(90, 90, 90);">${time.getHours()}:${(time.getMinutes()<10?'0':'') + time.getMinutes()}</span>
  </div>
  `;
}

export function createMessageElementLeft(data, member) {
  let time = new Date();
  DOM.messages.innerHTML += `
  <div class="message message-left">
    <span class="message-user">${member.clientData.name}</span>
    <span class="message-value">${data}</span>
    <span style="font-size:9px;color:rgb(90, 90, 90);">${time.getHours()}:${(time.getMinutes()<10?'0':'') + time.getMinutes()}</span>
  </div>
  `;
}


// export function addMessageToListDOM(text, member) {
//   const el = DOM.messages;
//   const wasTop = el.scrollTop === el.scrollHeight - el.clientHeight;
//   el.appendChild(createMessageElement(text, member));
//   if (wasTop) {
//     el.scrollTop = el.scrollHeight - el.clientHeight;
//   }

// }
