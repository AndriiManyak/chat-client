(this.webpackJsonpchat_client=this.webpackJsonpchat_client||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(26),s=a.n(r),i=(a(62),a(27)),o=a.n(i),l=a(51),u=a.n(l),d=a(0),j=function(){return Object(d.jsx)("header",{className:u.a.header,children:Object(d.jsx)("h1",{children:"Chat bots 2.0"})})},b=a(3),m=a(5),_=a(13),f=a.n(_),O=a(6),p=a.n(O),h=a(4),v=a.n(h),g=(v.a.shape({id:v.a.oneOfType([v.a.string,v.a.number]).isRequired,name:v.a.string.isRequired,description:v.a.string.isRequired,image:v.a.string.isRequired,isOnline:v.a.bool.isRequired}),function(e){var t,a=e.type,c=e.author,r=e.time,s=e.text,i=Object(n.useRef)();return Object(n.useEffect)((function(){i.current&&i.current.scrollIntoView({behavior:"smooth"})})),Object(d.jsxs)("div",{className:p()(f.a.message,(t={},Object(m.a)(t,f.a.sent,"sent"===a),Object(m.a)(t,f.a.received,"received"===a),t)),ref:i,children:[Object(d.jsxs)("div",{className:f.a.header,children:[Object(d.jsx)("p",{className:f.a.userName,children:c.name}),Object(d.jsx)("p",{className:f.a.time,children:r})]}),Object(d.jsx)("p",{className:f.a.text,children:s})]})}),x=a(52),C=a.n(x),N=a(2),y=function(e,t){return e===t?"sent":"received"},S=a(23),T=a(57),A="connect_socket",M="send_message",k="join_chat",w="ADD_MESSAGE",E="ADD_MESSAGES",F="ADD_CONTACTS",I="SET_USER",R="SELECT_CONTACT",q={messages:[],contacts:[],selectedContact:null,user:{}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(b.a)(Object(b.a)({},e),{},{contacts:t.payload});case E:return Object(b.a)(Object(b.a)({},e),{},{messages:t.payload});case w:return Object(b.a)(Object(b.a)({},e),{},{messages:[].concat(Object(T.a)(e.messages),[t.payload])});case I:return Object(b.a)(Object(b.a)({},e),{},{user:t.payload});case R:return Object(b.a)(Object(b.a)({},e),{},{selectedContact:t.payload});default:return e}},D=function(e){return e.chatReducer.user},L=function(e){return e.chatReducer.selectedContact},H=function(e){return e.chatReducer.contacts},J=function(e){return e.chatReducer.messages},G=Object(S.b)({chatReducer:B}),U=function(){var e=Object(N.c)(J),t=Object(N.c)(D);return Object(d.jsx)("div",{className:C.a.list,children:e.map((function(e){return Object(d.jsx)(g,Object(b.a)({type:y(e.author.id,t.id)},e),e.id)}))})},W=a(17),z=a(28),X=a.n(z),Y=a(103),K=function(e){return e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},P=function(){var e=Object(N.c)(D),t=Object(N.c)(L),a=Object(n.useState)(""),c=Object(W.a)(a,2),r=c[0],s=c[1],i=Object(N.b)();return Object(d.jsxs)("form",{onSubmit:function(a){if(a.preventDefault(),r.trim()){var n={author:e,receiver:t,id:Object(Y.a)(),text:r,time:K(new Date)};i({type:M,payload:n})}s("")},className:X.a.form,children:[Object(d.jsx)("input",{className:X.a.messageInput,type:"text",name:"message",value:r,onChange:function(e){s(e.target.value)},placeholder:"Start chatting!",autoComplete:"off"}),Object(d.jsx)("button",{type:"submit",className:X.a.submitButton,children:"Send message"})]})},Q=a(54),V=a.n(Q),Z=function(){return Object(d.jsxs)("div",{className:V.a.controller,children:[Object(d.jsx)(U,{}),Object(d.jsx)(P,{})]})},$=a(18),ee=a.n($),te=function(e){var t=e.selectedContact;return Object(d.jsxs)("div",{className:ee.a.contact,children:[Object(d.jsx)("img",{src:t.image,alt:t.name,className:ee.a.image}),Object(d.jsxs)("div",{className:ee.a.information,children:[Object(d.jsx)("p",{className:ee.a.name,children:t.name}),Object(d.jsx)("p",{className:ee.a.description,children:t.description})]})]})},ae=a(12),ne=a.n(ae),ce=function(){var e=Object(N.c)(L);return Object(d.jsx)("section",{className:ae.body,children:e&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(te,{selectedContact:e}),Object(d.jsx)(Z,{})]})})},re=a(14),se=a.n(re),ie=function(e){var t=e.contact,a=Object(N.b)(),n=function(e){a({type:k,payload:e})};return Object(d.jsxs)("div",{className:se.a.contact,onClick:function(){return n(t)},children:[Object(d.jsx)("div",{className:p()(se.a.imageWrapper,Object(m.a)({},se.a.online,t.isOnline)),children:Object(d.jsx)("img",{src:t.image,alt:t.name,className:se.a.image})}),Object(d.jsxs)("div",{className:se.a.information,children:[Object(d.jsx)("p",{className:se.a.name,children:t.name}),Object(d.jsx)("p",{className:se.a.description,children:t.description})]})]})},oe=a(34),le=a.n(oe),ue=function(e){var t=e.activeTab,a=e.searchField,c=e.toggleSidebar,r=Object(N.c)(H),s=Object(N.c)(D),i=Object(n.useMemo)((function(){var e=r;return"online"===t&&(e=e.filter((function(e){return e.isOnline}))),e.filter((function(e){return e.id!==s.id})).filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))}),[r,t,a]);return Object(d.jsx)("ul",{className:le.a.list,children:i.map((function(e){return Object(d.jsx)("li",{className:le.a.item,onClick:c,children:Object(d.jsx)(ie,{contact:e})},e.id)}))})},de=a(19),je=a.n(de),be=function(e){var t=e.activeTab,a=e.setActiveTab;return Object(d.jsxs)("div",{className:je.a.controller,children:[Object(d.jsx)("div",{className:p()(je.a.tab,Object(m.a)({},je.a.active,"online"===t)),onClick:function(){return a("online")},children:"online"}),Object(d.jsx)("div",{className:p()(je.a.tab,Object(m.a)({},je.a.active,"all"===t)),onClick:function(){return a("all")},children:"all"})]})},me=a(35),_e=a.n(me),fe=function(e){var t=e.searchField,a=e.setSearchField;return Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault()},className:_e.a.form,children:Object(d.jsx)("input",{type:"text",name:"search",className:_e.a.input,value:t,onChange:function(e){a(e.target.value)},placeholder:"Search...",autoComplete:"off"})})},Oe=a.p+"static/media/left_arrow.ccf14356.svg",pe=function(){var e=Object(n.useState)(!1),t=Object(W.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)("online"),s=Object(W.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(""),u=Object(W.a)(l,2),j=u[0],b=u[1],_=function(){c((function(e){return!e}))};return Object(d.jsxs)("aside",{className:p()(ne.a.sidebar,Object(m.a)({},ne.a.active,a)),children:[Object(d.jsxs)("div",{className:ne.a.sidebarTop,children:[Object(d.jsx)("div",{className:ne.a.sidebarToggleButton,onClick:_,children:Object(d.jsx)("img",{src:Oe,alt:"arrow",className:ne.a.sidebarToggleArrow})}),Object(d.jsx)(be,{activeTab:i,setActiveTab:o}),Object(d.jsx)(ue,{activeTab:i,searchField:j,toggleSidebar:_})]}),Object(d.jsx)(fe,{searchField:j,setSearchField:b})]})},he=function(){return Object(d.jsxs)("section",{className:ae.chat,children:[Object(d.jsx)(ce,{}),Object(d.jsx)(pe,{})]})},ve=function(e){return{type:I,payload:e}},ge=function(e){return{type:w,payload:e}},xe=function(){var e=Object(N.b)();Object(n.useEffect)((function(){t()}),[]);var t=function(){var t,a=localStorage.getItem("userInfo");a&&(t=JSON.parse(a)),e(ve(t)),e({type:A,payload:t})};return Object(d.jsxs)("div",{className:o.a.app,children:[Object(d.jsx)(j,{}),Object(d.jsx)("main",{className:p()(o.a.main,"container"),children:Object(d.jsx)(he,{})})]})},Ce=a(55),Ne=a(56),ye=a.n(Ne),Se=function(e){return ye()("https://immense-eyrie-03835.herokuapp.com/",{query:e})},Te=[{event:"receive_contacts",handler:function(e){return function(t){e.dispatch(function(e){return{type:F,payload:e}}(t))}}},{event:"receive_created_user",handler:function(e){return function(t){e.dispatch(ve(t)),localStorage.setItem("userInfo",JSON.stringify(t))}}},{event:"receive_message",handler:function(e){return function(t){e.dispatch(ge(t))}}},{event:"receive_messages",handler:function(e){return function(t){e.dispatch(function(e){return{type:E,payload:e}}(t))}}}],Ae=function(){var e=null;return function(t){return function(a){return function(n){switch(n.type){case A:e=Se(n.payload);var c,r=Object(Ce.a)(Te);try{for(r.s();!(c=r.n()).done;){var s=c.value;e.on(s.event,s.handler(t))}}catch(o){r.e(o)}finally{r.f()}break;case M:e.emit(M,n.payload),t.dispatch(ge(n.payload));break;case k:e.emit(k,n.payload),t.dispatch((i=n.payload,{type:R,payload:i}));break;default:return a(n)}var i}}}}(),Me=Object(S.c)(G,Object(S.a)(Ae));s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(N.a,{store:Me,children:Object(d.jsx)(xe,{})})}),document.getElementById("root"))},12:function(e,t,a){e.exports={chat:"Chat_chat__bntdf",body:"Chat_body__bzHhb",sidebar:"Chat_sidebar__38N0b",sidebarTop:"Chat_sidebarTop__39OU0",sidebarToggleButton:"Chat_sidebarToggleButton__Ufhl7",sidebarToggleArrow:"Chat_sidebarToggleArrow__3XnJU",active:"Chat_active__27YEB"}},13:function(e,t,a){e.exports={message:"Message_message__1F6Sp",received:"Message_received__2RoFv",header:"Message_header__1W_4i",text:"Message_text__3C1vz",sent:"Message_sent__2IEi5"}},14:function(e,t,a){e.exports={contact:"Contact_contact__1vkzi",active:"Contact_active__GoqAI",imageWrapper:"Contact_imageWrapper__3PdCk",online:"Contact_online__1qe25",image:"Contact_image__1mA0N",information:"Contact_information__1Ka3c",name:"Contact_name__35GmJ",description:"Contact_description__isdHN"}},18:function(e,t,a){e.exports={contact:"ContactSelected_contact__EO5qQ",image:"ContactSelected_image__2FW0H",information:"ContactSelected_information__19Xtg",name:"ContactSelected_name__2qjGj"}},19:function(e,t,a){e.exports={controller:"ContactsController_controller__15lvh",tab:"ContactsController_tab__tgTYU",active:"ContactsController_active__3qAAX"}},27:function(e,t,a){e.exports={app:"App_app__KgHPi",main:"App_main__2NTvN"}},28:function(e,t,a){e.exports={form:"MessageForm_form__3ul-y",messageInput:"MessageForm_messageInput__2THO5",submitButton:"MessageForm_submitButton__M4SOe"}},34:function(e,t,a){},35:function(e,t,a){e.exports={form:"ContactsSearch_form__etLMa",input:"ContactsSearch_input__3xLIO"}},51:function(e,t,a){e.exports={header:"Header_header__3FowY"}},52:function(e,t,a){e.exports={list:"MessagesList_list__2SQac"}},54:function(e,t,a){e.exports={controller:"MessagesController_controller__mjjIB"}},62:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.c91b47a1.chunk.js.map