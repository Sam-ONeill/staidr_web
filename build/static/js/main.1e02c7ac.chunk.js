(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t){e.exports={IS_USER:"IS_USER",NEW_USER:"NEW_USER",INIT_CHATS:"INIT_CHATS",LOGOUT:"LOGOUT",MESSAGE_SEND:"MESSAGE_SEND",TYPING:"TYPING",P_MESSAGE_SEND:"P_MESSAGE_SEND",P_TYPING:"P_TYPING",CHECK_CHANNEL:"CHECK_CHANNEL",CREATE_CHANNEL:"CREATE_CHANNEL"}},262:function(e,t,n){e.exports=n(466)},267:function(e,t,n){},293:function(e,t){},466:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(61),i=n.n(s),c=(n(267),n(21)),l=n(22),o=n(24),u=n(23),m=n(25),h=n(74),p=n(226),d=n.n(p),g=n(17),E=n.n(g),f=n(483),C=n(107),v=n(479),y=n(75),b=n(481),S=n(53),k=n(467),O=n(476),j=n(475),N=n(474),T=n(478),U=n(227),w=n.n(U),A=(n(300),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={modal:!1,channelName:"",channelDescription:"",error:null},n.displayChannels=function(e){return e.map(function(e){return r.a.createElement(v.a.Item,{key:e.name,onClick:function(){return n.props.setActiveChannel(e.name)},active:n.props.activeChannel.name===e.name},"# ",e.name,e.msgCount>0&&r.a.createElement(y.a,{size:"mini",color:"red"}," ",e.msgCount," "))})},n.displayUsers=function(e){var t=n.props,a=t.user,s=t.setActivePChannel,i=t.pChats,c=t.activeChannel;return delete e[a.nickname],e=Object.assign({"You...":a},e),Object.keys(e).map(function(e){var t=i.filter(function(t){return t.name===e}),a=null;return t[0]&&t[0].name!==c.name&&t[0].msgCount>0&&(a=t[0].msgCount),r.a.createElement(v.a.Item,{key:e,onClick:"You..."===e?null:function(){return s(e)},active:n.props.activeChannel.name===e},"# ",e[0].toUpperCase()+e.slice(1),r.a.createElement(w.a,{style:{marginLeft:"10px"},size:4,color:"grey",distance:3,visible:!!t[0]&&t[0].isTyping}),a&&r.a.createElement(y.a,{size:"mini",color:"red"}," ",a," "))})},n.openModal=function(){return n.setState({modal:!0})},n.closeModal=function(){return n.setState({modal:!1,channelName:"",channelDescription:"",error:null})},n.handleChange=function(e){return n.setState(Object(C.a)({},e.target.name,e.target.value))},n.isFormValid=function(e){var t=e.channelDescription,a=e.channelName;return t&&a?(n.setState({error:null}),!0):(n.setState({error:"Both Name and Description are require "}),!1)},n.handleSubmit=function(){n.setState({error:null});var e=n.state,t=e.channelDescription,a=e.channelName;n.isFormValid(n.state)&&n.props.socket.emit(E.a.CHECK_CHANNEL,{channelName:a,channelDescription:t},n.checkChannel)},n.checkChannel=function(e){e?n.setState({error:'Channel "'.concat(n.state.channelName,'" name alredy take')}):n.closeModal()},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.users,a=e.chats,s=e.logout,i=this.state,c=i.modal,l=i.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{style:{background:"#1E1E1E",paddingTop:"2em"},vertical:!0,inverted:!0,fluid:!0,stackable:!0,size:"large"},r.a.createElement(b.a,{inverted:!0,as:"h3"},r.a.createElement(S.a,{name:"chat"}),r.a.createElement(b.a.Content,null," Staidr "),r.a.createElement(b.a.Subheader,null,"Login as : ",t.nickname.slice(0,1).toUpperCase()+t.nickname.slice(1))),r.a.createElement(v.a.Menu,null,r.a.createElement(v.a.Item,{style:{paddingLeft:"0"}},r.a.createElement("span",{style:{fontSize:"1.8em",color:"#FFF6F6"}},r.a.createElement(S.a,{name:"rocketchat"})," Channel lists"),r.a.createElement(S.a,{name:"add",onClick:this.openModal})),a[0]&&this.displayChannels(a)),r.a.createElement("br",null),r.a.createElement(v.a.Menu,null,r.a.createElement(v.a.Item,{style:{paddingLeft:"0"}},r.a.createElement("span",{style:{fontSize:"1.2em"}},r.a.createElement(S.a,{name:"address book"})," Online Users")),n&&a[0]&&this.displayUsers(n)),r.a.createElement("br",null),r.a.createElement(v.a.Menu,null,r.a.createElement(v.a.Item,{style:{paddingLeft:"0"}},r.a.createElement(k.a,{icon:!0,inverted:!0,labelPosition:"right",onClick:s},r.a.createElement(S.a,{name:"sign-out alternate"}),"LogOut")))),r.a.createElement(O.a,{open:c,size:"small"},r.a.createElement(b.a,{icon:"bullhorn",content:"Add new Channel"}),r.a.createElement(O.a.Content,null,r.a.createElement(j.a,null,r.a.createElement(j.a.Field,null,r.a.createElement(N.a,{placeholder:"Channel Name",name:"channelName",onChange:this.handleChange})),r.a.createElement(j.a.Field,null,r.a.createElement(N.a,{name:"channelDescription",placeholder:"Channel Description",onChange:this.handleChange}))),l&&r.a.createElement(T.a,{error:!0},r.a.createElement("h4",null,"Error"),this.state.error)),r.a.createElement(O.a.Actions,null,r.a.createElement(k.a,{color:"red",inverted:!0,onClick:this.closeModal},r.a.createElement(S.a,{name:"remove"})," Cancel"),r.a.createElement(k.a,{color:"green",inverted:!0,onClick:this.handleSubmit},r.a.createElement(S.a,{name:"checkmark"})," Add"))))}}]),t}(a.Component)),_=n(482),x=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.activeChannel;return console.log("messages header",JSON.stringify(e)),r.a.createElement(_.a,null,r.a.createElement(b.a,{as:"h2"},r.a.createElement(S.a,{name:"bullhorn"}),r.a.createElement(b.a.Content,null,e.name[0].toUpperCase()+e.name.slice(1)),r.a.createElement(b.a.Subheader,null,"Description : ",r.a.createElement("span",null,e.description[0].toUpperCase()+e.description.slice(1)))))}}]),t}(a.Component),M=n(477),I=n(250),P=n.n(I),D=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.scrollDown()}},{key:"componentDidUpdate",value:function(e,t){this.scrollDown()}},{key:"scrollDown",value:function(){var e=this.refs.contaniner;e.scrollTop=e.scrollHeight}},{key:"render",value:function(){var e=this.props,t=e.messages,n=e.user,a=e.typingUser;return r.a.createElement(_.a,{style:{height:"calc( 100vh - 56px - 147px)"}},r.a.createElement("div",{ref:"contaniner",style:{height:"calc( 100vh - 56px - 147px - 35px)",overflowY:"auto"}},r.a.createElement("div",{style:{minHeight:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:".1em",paddingRight:".5em"}},t.length>0&&t.map(function(e){return r.a.createElement(M.a,{key:e.id,fluid:!0,style:{marginTop:"0px"}},r.a.createElement(M.a.Content,{style:{padding:"3px 10px"},textAlign:e.sender===n.nickname?"right":"left"},r.a.createElement("h3",null,e.message),e.sender[0].toUpperCase()+e.sender.slice(1)," Send @ ",P()(e.timef).fromNow()))}),a&&a.map(function(e){return r.a.createElement("div",{key:e,className:"typing-user"},"".concat(e[0].toUpperCase()+e.slice(1)," is typing . . ."))}))))}}]),t}(a.Component),F=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={msg:""},n.handleChange=function(e){return n.setState({msg:e.target.value})},n.handleSubmit=function(){n.props.sendMsg(n.state.msg),n.setState({msg:""})},n.handleOnFocused=function(){return n.props.sendTyping(!0)},n.handleOnBlur=function(){return n.props.sendTyping(!1)},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.msg;return r.a.createElement(_.a,null,r.a.createElement(j.a,{onSubmit:e.length>0?this.handleSubmit:null},r.a.createElement(j.a.Input,{fluid:!0,name:"msg",value:e,placeholder:"Write your message",onChange:this.handleChange,onFocus:this.handleOnFocused,onBlur:this.handleOnBlur,icon:r.a.createElement(S.a,{name:"send",link:!0,circular:!0,inverted:!0,onClick:this.handleSubmit,disabled:e.length<1})})))}}]),t}(a.Component),G=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={chats:[],activeChannel:null},n.initChats=function(e){return n.updateChats(e,!0)},n.updateChats=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=n.state.chats,r=t?Object(h.a)(e):[].concat(Object(h.a)(a),[e]);n.setState({chats:r,activeChannel:t?e[0]:n.state.activeChannel})},n.addTyping=function(e){var t=e.channel,a=e.isTyping,r=e.sender,s=n.props.user,i=n.state.chats;r!==s.nickname&&(i.map(function(e){return e.name===t&&(a&&!e.typingUser.includes(r)?e.typingUser.push(r):!a&&e.typingUser.includes(r)&&(e.typingUser=e.typingUser.filter(function(e){return e!==r}))),null}),n.setState({chats:i}))},n.addPTyping=function(e){var t=e.channel,a=e.isTyping;console.log(t,a);var r=n.props.pChats;r.map(function(e){return e.name===t&&(e.isTyping=a),null}),n.setState({pChats:r})},n.addMessage=function(e){var t=e.channel,a=e.message,r=n.state,s=r.activeChannel,i=r.chats;i.map(function(e){return e.name===t&&(e.messages.push(a),s.name!==t&&e.msgCount++),null}),n.setState({chats:i})},n.addPMessage=function(e){var t=e.channel,a=e.message,r=n.state.activeChannel,s=n.props.pChats;s.map(function(e){return e.name===t&&(e.messages.push(a),r.name!==t&&e.msgCount++),null}),n.setState({pChats:s})},n.sendMsg=function(e){var t=n.props,a=t.socket,r=t.users,s=n.state.activeChannel;if(s.type){var i=r[s.name];a.emit(E.a.P_MESSAGE_SEND,{receiver:i,msg:e})}else a.emit(E.a.MESSAGE_SEND,{channel:s.name,msg:e})},n.sendTyping=function(e){var t=n.props,a=t.socket,r=t.users,s=n.state.activeChannel;if(s.type){var i=r[s.name];a.emit(E.a.P_TYPING,{receiver:i.socketId,isTyping:e})}a.emit(E.a.TYPING,{channel:s.name,isTyping:e})},n.setActiveChannel=function(e){var t=n.state.chats.filter(function(t){return t.name===e});t[0].msgCount=0,n.setState({activeChannel:t[0]})},n.setActivePChannel=function(e){var t=n.props.pChats.filter(function(t){return t.name===e});t[0].msgCount=0,n.setState({activeChannel:t[0]})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.socket;e.emit(E.a.INIT_CHATS,this.initChats),e.on(E.a.MESSAGE_SEND,this.addMessage),e.on(E.a.TYPING,this.addTyping),e.on(E.a.P_MESSAGE_SEND,this.addPMessage),e.on(E.a.P_TYPING,this.addPTyping),e.on(E.a.CREATE_CHANNEL,this.updateChats)}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.users,a=e.pChats,s=e.logout,i=e.socket,c=this.state,l=c.activeChannel,o=c.chats;return r.a.createElement(f.a,{style:{height:"100vh",margin:"0px"}},r.a.createElement(f.a.Column,{computer:4,tablet:4,mobile:6,style:{background:"#1E1E1E",height:"100%"}},r.a.createElement(A,{user:t,users:n,chats:o,socket:i,activeChannel:l,logout:s,setActivePChannel:this.setActivePChannel,setActiveChannel:this.setActiveChannel,pChats:a})),r.a.createElement(f.a.Column,{computer:12,tablet:12,mobile:10,style:{background:"#eee",height:"100%"}},l&&r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{activeChannel:l}),r.a.createElement(D,{messages:l.messages,user:t,typingUser:l.typingUser}),r.a.createElement(F,{sendMsg:this.sendMsg,sendTyping:this.sendTyping}))))}}]),t}(a.Component),L=n(152),R=n.n(L),H=n(251),B=n(65),z=n(32),W={appButtonContainer:{elevation:8,borderRadius:14,shadowColor:"#000",shadowOffset:{height:4,width:0},shadowOpacity:.3,shadowRadius:4.5,padding:16,paddingVertical:40,margin:20},appButtonText:{fontSize:18,fontWeight:"bold",justifyContent:"center",alignSelf:"center"}},Y=function(){var e=Object(z.b)().loginWithRedirect;return r.a.createElement("button",{style:Object(B.a)({},W.appButtonContainer,{backgroundColor:"#F29947"}),onClick:function(){return e()}},r.a.createElement("div",{style:{justifyContent:"space-between",paddingHorizontal:10,paddingVertical:10,marginTop:"-10%"}},r.a.createElement("p",{style:Object(B.a)({},W.appButtonText,{color:"#FFF6F6",fontSize:18})}," Login")))},V={appButtonContainer:{elevation:8,borderRadius:14,shadowColor:"#000",shadowOffset:{height:4,width:0},shadowOpacity:.3,shadowRadius:4.5,padding:16,paddingVertical:40,margin:20},appButtonText:{fontSize:18,fontWeight:"bold",justifyContent:"center",alignSelf:"center"}},J=function(){var e=Object(z.b)().logout;return r.a.createElement("button",{style:Object(B.a)({},V.appButtonContainer,{backgroundColor:"#F29947"}),onClick:function(){return e({returnTo:window.location.origin})}},r.a.createElement("div",{style:{justifyContent:"space-between",paddingHorizontal:10,paddingVertical:10,marginTop:"-10%"}},r.a.createElement("p",{style:Object(B.a)({},V.appButtonText,{color:"#FFF6F6",fontSize:18})}," Logout")))},K=function(){return Object(z.b)().isAuthenticated?r.a.createElement(J,null):r.a.createElement(Y,null," ")},q=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={nickname:"",error:""},n.setUser=function(e){var t=e.user;e.isUser?n.setState({error:"This user is already signed in"}):(n.setState({error:""}),n.props.setUser(t))},n.handleChange=function(e){n.setState({nickname:e.target.value})},n.handleSubmit=Object(H.a)(R.a.mark(function e(){var t,a,r,s;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.auth0;case 2:t=e.sent,a=t.user,n.setState({nickname:a.nickname}),console.log("handle submit"+n.state),r=n.props.socket,s=n.state.nickname,r.emit(E.a.IS_USER,s,n.setUser);case 9:case"end":return e.stop()}},e)})),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{style:{height:"100vh",padding:"0px",margin:"0px"},textAlign:"center",verticalAlign:"middle"},r.a.createElement(f.a.Column,{computer:6,tablet:8,mobile:14},r.a.createElement(b.a,{as:"h2",icon:!0,textAlign:"center",color:"green"},r.a.createElement(S.a,{name:"book"}),"Staidr"),r.a.createElement(K,null),r.a.createElement(k.a,{onClick:this.handleSubmit},"Continue")))}}]),t}(a.Component),Z=Object(z.c)(q),$="http://localhost/",Q=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={socket:null,user:null,users:{},pChats:[]},n.initSocket=function(){var e=d()($);n.setState({socket:e}),e.on("connect",function(){return console.log("Connected")}),e.on(E.a.LOGOUT,n.setUsers(!1)),e.on(E.a.NEW_USER,n.setUsers(!0))},n.setUser=function(e){var t=n.state.socket;n.setState({user:e}),t.emit(E.a.NEW_USER,e)},n.setUsers=function(e){return function(t){var a=t.newUsers,r=t.outUser,s=n.state,i=s.user,c=s.pChats;if(e){var l=Object(h.a)(c),o=c.map(function(e){return e.name});i&&Object.keys(a).map(function(e){return e===i.nickname||o.includes(e)||l.push({name:e,description:"direct message",messages:[],isTyping:!1,msgCount:0,type:"Private"}),null}),n.setState({users:a,pChats:l})}else{var u=c.filter(function(e){return e.name!==r});n.setState({users:a,pChats:u})}}},n.logout=function(){n.state.socket.emit(E.a.LOGOUT),n.setState({user:null})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.initSocket()}},{key:"render",value:function(){var e=this.state,t=e.user,n=e.users,a=e.pChats,s=e.socket;return console.log("main js"+JSON.stringify(t,n,a,s)),t?r.a.createElement(G,{user:t,users:n,pChats:a,socket:s,logout:this.logout}):r.a.createElement(Z,{socket:s,setUser:this.setUser})}}]),t}(a.Component),X=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(Q,null)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(z.a,{domain:"dev-ulxwc1q3.eu.auth0.com",clientId:"lVZ8BO9u9dgnkAUKScoMpWoZqxRcaUFf",redirectUri:window.location.origin},r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[262,1,2]]]);
//# sourceMappingURL=main.1e02c7ac.chunk.js.map