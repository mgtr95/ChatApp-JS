(()=>{"use strict";const e={membersCount:document.querySelector(".members-count"),membersList:document.querySelector(".members-list"),messages:document.querySelector(".messages"),input:document.querySelector(".message-form__input"),form:document.querySelector(".message-form")};function n(n){e.membersCount.innerText=`${n.length} users in room:`,e.membersList.innerHTML="",n.forEach((n=>e.membersList.appendChild(function(e){const{name:n,color:s}=e.clientData,o=document.createElement("div");return o.appendChild(document.createTextNode(n)),o.className="member",o}(n))))}let s=[];const o=new Scaledrone("PpOGDNqHIEJBEr4Z",{data:{name:function(){const e=["Harry","Ross","Bruce","Cook","Carolyn","Morgan","Albert","Walker","Randy","Reed","Larry","Barnes","Lois","Wilson","Jesse","Campbell","Ernest","Rogers","Theresa","Patterson","Henry","Simmons","Michelle","Perry","Frank","Butler","Shirley"],n=["Ruth","Jackson","Debra","Allen","Gerald","Harris","Raymond","Carter","Jacqueline","Torres","Joseph","Nelson","Carlos","Sanchez","Ralph","Clark","Jean","Alexander","Stephen","Roberts","Eric","Long","Amanda","Scott","Teresa","Diaz","Wanda","Thomas"];return n[Math.floor(Math.random()*n.length)]+" "+e[Math.floor(Math.random()*e.length)]}(),color:"#"+Math.floor(16777215*Math.random()).toString(16)}});o.on("open",(r=>{if(r)return console.error(r);console.log("Successfully connected to Scaledrone");const t=o.subscribe("observable-mg_channel1");t.on("open",(e=>{if(e)return console.error(e);console.log("Successfully joined room")})),t.on("members",(e=>{s=e,n(s)})),t.on("member_join",(e=>{s.push(e),n(s)})),t.on("member_leave",(({id:e})=>{const o=s.findIndex((n=>n.id===e));s.splice(o,1),n(s)})),t.on("message",(n=>{const{data:s,clientId:r,member:t}=n;!function(n,s,o){let r=new Date;e.messages.innerHTML+=`\n  <div class="message ${o}">\n    <span class="message-user">${s.clientData.name}</span>\n    <span class="message-value">${n}</span>\n    <span style="font-size:9px;color:rgb(90, 90, 90);">${r.getHours()}:${(r.getMinutes()<10?"0":"")+r.getMinutes()}</span>\n  </div>\n  `}(s,t,r===o.clientId?"message-right":"message-left")})),e.form.addEventListener("submit",(function(){const n=e.input.value;""!==n&&(e.input.value="",o.publish({room:"observable-mg_channel1",message:n}))}))}))})();