"use strict";(self.webpackChunkreact_way_of_samurai=self.webpackChunkreact_way_of_samurai||[]).push([[34],{4951:function(s,e,t){t.d(e,{Gr:function(){return f},II:function(){return m},gx:function(){return d}});var r=t(8489),o=t(3738),i=(t(2791),t(8015)),n=t(6139),a=t(184),l=["input","meta"],c=["input","meta"],u=function(s){var e=s.meta,t=e.touched,r=e.error,o=s.children,n=t&&r;return(0,a.jsxs)("div",{className:i.Z.formControl+" "+(n?i.Z.error:""),children:[(0,a.jsx)("div",{children:o}),n&&(0,a.jsx)("span",{children:r})]})},d=function(s){var e=s.input,t=(s.meta,(0,o.Z)(s,l));return(0,a.jsx)(u,(0,r.Z)((0,r.Z)({},s),{},{children:(0,a.jsx)("textarea",(0,r.Z)((0,r.Z)({},e),t))}))},m=function(s){var e=s.input,t=(s.meta,(0,o.Z)(s,c));return(0,a.jsx)(u,(0,r.Z)((0,r.Z)({},s),{},{children:(0,a.jsx)("input",(0,r.Z)((0,r.Z)({},e),t))}))};function f(s,e,t,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return(0,a.jsxs)("div",{children:[(0,a.jsx)(n.Z,(0,r.Z)({placeholder:s,name:e,validate:t,component:o},i))," ",l]})}},9034:function(s,e,t){t.r(e),t.d(e,{default:function(){return W}});var r=t(8489),o=t(7853),i=t(243),n=t(1020),a=t(8334),l=t(2791),c=t(3430),u={descriptionBlock:"ProfileInfo_descriptionBlock__bPSs9",status:"ProfileInfo_status__p6B1M",profile:"ProfileInfo_profile__wKUeB",description:"ProfileInfo_description__-wYAe",button:"ProfileInfo_button__3qexu"},d=t(6295),m=t(184),f=function(s){var e=(0,l.useState)(!1),t=(0,c.Z)(e,2),r=t[0],o=t[1],i=(0,l.useState)(s.status),n=(0,c.Z)(i,2),a=n[0],u=n[1];(0,l.useEffect)((function(){u(s.status)}),[s.status]);return(0,m.jsxs)("div",{children:[!r&&(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Status: "})," ",(0,m.jsx)("span",{onDoubleClick:function(){o(!0)},children:s.status||"-------"})]}),r&&(0,m.jsx)("div",{children:(0,m.jsx)("input",{onChange:function(s){u(s.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),s.updateStatus(a)},value:a})})]})},h=t(3200),p=t(4951),x=t(704),_=t(8015),j=(0,x.Z)({form:"edit-profile"})((function(s){var e=s.handleSubmit,t=s.profile,r=s.error;return(0,m.jsxs)("form",{onSubmit:e,children:[(0,m.jsx)("div",{children:(0,m.jsx)("button",{children:"save"})}),r&&(0,m.jsx)("div",{className:_.Z.formSummaryError,children:r}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Full name"}),": ",(0,p.Gr)("Full name","fullName",[],p.II)]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Looking for a job"}),": ",(0,p.Gr)("","lookingForAJob",[],p.II,{type:"checkbox"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"My professional skills"}),":",(0,p.Gr)("My professional skills","lookingForAJobDescription",[],p.gx)]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"About me"}),":",(0,p.Gr)("About me","aboutMe",[],p.gx)]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Contacts"}),": ",Object.keys(t.contacts).map((function(s){return(0,m.jsx)("div",{className:u.contact,children:(0,m.jsxs)("b",{children:[s,": ",(0,p.Gr)(s,"contacts."+s,[],p.II)]})},s)}))]})]})})),v="ProfileData_item__0WtCH",b="ProfileData_fullName__4obzs",g="ProfileData_button__1RQll",P="ProfileData_contacts__NHP+G",k=function(s){var e=s.profile,t=s.isOwner,r=s.goToEditMode;return(0,m.jsxs)("div",{className:v,children:[(0,m.jsx)("div",{className:b,children:e.fullName}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Looking for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"My professional skills"}),": ",e.lookingForAJobDescription]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),(0,m.jsxs)("div",{className:P,children:[(0,m.jsx)("b",{children:"Contacts"}),":",(0,m.jsxs)("li",{children:[(0,m.jsx)("span",{children:"facebook:"})," ",e.contacts.facebook]}),(0,m.jsxs)("li",{children:[(0,m.jsx)("span",{children:"github:"})," ",e.contacts.github]}),(0,m.jsxs)("li",{children:[(0,m.jsx)("span",{children:"instagram:"})," ",e.contacts.instagram]}),(0,m.jsxs)("li",{children:[(0,m.jsx)("span",{children:"twitter:"})," ",e.contacts.twitter]}),(0,m.jsxs)("li",{children:[(0,m.jsx)("span",{children:"vk:"})," ",e.contacts.vk]}),(0,m.jsxs)("li",{children:[(0,m.jsx)("span",{children:"youtube:"})," ",e.contacts.youtube]})]}),(0,m.jsxs)("div",{children:[" ",t&&(0,m.jsx)("button",{className:g,onClick:r,children:"edit"})]})]})},N=function(s){var e=s.profile,t=s.status,r=s.updateStatus,o=s.isOwner,i=s.savePhoto,n=s.saveProfile,a=(0,l.useState)(!1),p=(0,c.Z)(a,2),x=p[0],_=p[1];if(!e)return(0,m.jsx)(d.Z,{});return(0,m.jsxs)("div",{className:u.descriptionBlock,children:[(0,m.jsxs)("div",{className:u.profile,children:[(0,m.jsx)("img",{src:e.photos.large||h}),o&&(0,m.jsx)("input",{type:"file",onChange:function(s){s.target.files&&s.target.files.length&&i(s.target.files[0])}}),(0,m.jsx)("div",{className:u.status,children:(0,m.jsx)(f,{status:t,updateStatus:r})})]}),(0,m.jsx)("div",{className:u.description,children:x?(0,m.jsx)(j,{initialValues:e,profile:e,onSubmit:function(s){n(s).then((function(){_(!1)}))}}):(0,m.jsx)(k,{goToEditMode:function(){_(!0)},profile:e,isOwner:o})})]})},C="Profile_profile__ItnbC",Z=t(2177),I=t(4483),y=t(3174),S={item:"Post_item__vzpjA",itemImg:"Post_itemImg__MXy-U",itemText:"Post_itemText__tGHRB",itemName:"Post_itemName__AK5GU",itemLike:"Post_itemLike__dt8Ch"},F=function(s){var e,t,r,o=null!==(e=s.profile)&&void 0!==e&&null!==(t=e.photos)&&void 0!==t&&t.small?s.profile.photos.small:h;return(0,m.jsxs)("div",{className:S.item,children:[(0,m.jsx)("div",{className:S.itemImg,children:o&&(0,m.jsx)("img",{src:o,alt:""})}),(0,m.jsxs)("div",{className:S.itemText,children:[(0,m.jsx)("div",{className:S.itemName,children:(null===(r=s.profile)||void 0===r?void 0:r.fullName)||"Samurai"}),(0,m.jsx)("div",{className:S.itemMessage,children:s.message})]}),(0,m.jsxs)("div",{className:S.itemLike,children:[(0,m.jsx)(I.G,{icon:y.m6i})," ",s.likesCount]})]})},w="MyPosts_posts__tFdWj",A="MyPosts_addPost__8YEwK",B="MyPosts_postsBlock__7xiVi",D=t(5705),M=t(310),U=M.Ry({post:M.Z_().typeError("Invalid login").required("Required")}),E=function(s){return(0,m.jsx)(D.J9,{initialValues:{post:""},onSubmit:function(e,t){var r=t.resetForm;s.onSubmit(e.post),r({})},validationSchema:U,validateOnBlur:!0,children:function(s){var e=s.errors,t=s.touched,r=s.handleChange,o=s.handleBlur,i=s.isValid,n=s.dirty;return(0,m.jsx)(D.l0,{children:(0,m.jsxs)("div",{className:_.Z.addPost,children:[(0,m.jsxs)("div",{className:_.Z.addPost__title,children:["Write a new post... ",t.post&&e.post&&(0,m.jsx)("span",{children:e.post})]}),(0,m.jsxs)("div",{className:"textarea",children:[(0,m.jsx)(D.gN,{className:"textarea",component:"textarea",name:"post",onBlur:o,onChange:r}),(0,m.jsx)("button",{disabled:!i&&!n,type:"submit",children:"Post"})]})]})})}})},G=t(1065),O=(0,Z.$j)((function(s){return{posts:s.profilePage.posts,profile:s.profilePage.profile}}),{addPost:G.Nw.addPostActionCreator})((function(s){var e=s.posts.reverse().map((function(e,t){return(0,m.jsx)(F,{profile:s.profile,message:e.message,likesCount:e.likesCount},t)}));return(0,m.jsxs)("div",{className:B,children:[(0,m.jsxs)("div",{className:A,children:[" ",(0,m.jsx)(E,{onSubmit:s.addPost})]}),(0,m.jsx)("div",{className:w,children:e})]})})),T=function(s){return(0,m.jsxs)("div",{className:C,children:[(0,m.jsx)(N,{savePhoto:s.savePhoto,isOwner:s.isOwner,profile:s.profile,status:s.status,saveProfile:s.saveProfile,updateStatus:s.updateStatus}),(0,m.jsx)(O,{profile:void 0,posts:[]})]})},J=t(3679),L=t(2789),R=function(s){(0,n.Z)(t,s);var e=(0,a.Z)(t);function t(s){return(0,o.Z)(this,t),e.call(this,s)}return(0,i.Z)(t,[{key:"refreshProfile",value:function(){var s=+this.props.match.params.userId;s||(s=this.props.authorizedUserId)||this.props.history.push("/login"),s?(this.props.getUserProfile(s),this.props.getStatus(s)):console.error("ID should exists in URI params or in state ('authorizedUserId')")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(s,e){this.props.match.params.userId!=s.match.params.userId&&this.refreshProfile()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return(0,m.jsx)(T,(0,r.Z)((0,r.Z)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),t}(l.Component),W=(0,L.qC)((0,Z.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,authorizedUserId:s.auth.userId,isAuth:s.auth.isAuth}}),{getUserProfile:G.et,getStatus:G.lR,updateStatus:G.Nf,savePhoto:G.Ju,saveProfile:G.Ii}),J.Z)(R)},8015:function(s,e){e.Z={formControl:"FormsControls_formControl__1gurh",error:"FormsControls_error__DaO26",formSummaryError:"FormsControls_formSummaryError__U82dc",login:"FormsControls_login__t83id",form:"FormsControls_form__ferDY",formTitle:"FormsControls_formTitle__71jxp",formDescription:"FormsControls_formDescription__mO+2Y",formWrapper:"FormsControls_formWrapper__acbPl",formLabelText:"FormsControls_formLabelText__RtK4g",input:"FormsControls_input__fGhHC",formButton:"FormsControls_formButton__7YkQB",formError:"FormsControls_formError__pKrE7"}}}]);
//# sourceMappingURL=34.15cd3191.chunk.js.map