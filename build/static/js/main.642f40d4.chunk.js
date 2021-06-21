(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{26:function(e,t,s){},51:function(e,t,s){},63:function(e,t,s){"use strict";s.r(t);var o=s(16),n=s.n(o),i=(s(51),s(0)),c=s(72),a=s(7),r=s(75),l=s(18),d=s(1),h=function(e){return Object(d.jsx)(r.a,{className:"navbar navbar-expand-lg navbar-light bg-light justify-content-center",activeKey:"/home",children:Object(d.jsx)(r.a.Item,{children:Object(d.jsxs)(r.a.Link,{className:"navbar-brand",as:l.b,to:"/",children:[Object(d.jsx)("span",{className:"font-weight-bold",children:"K. I. E. I."}),Object(d.jsx)("span",{className:"text-muted",children:" (Beta)"})]})})})},u=Object(i.createContext)({user:{},questions:[],questionGroups:[],result:{},setUser:function(e){e.name,e.email},setAnswer:function(e){e.id,e.answer},getMaxId:function(){},getQuestion:function(e){},getScore:function(){},testAgain:function(){}}),j=s(77),b=function(e){return Object(d.jsxs)(j.a,{className:"my-2 my-md-3 p-4 card-invisible border-0 overflow-hidden w-100",style:{borderRadius:"0.8rem"},children:[Object(d.jsx)(j.a.Header,{className:"text-center border-0 bg-white",style:{fontSize:"calc(10px + 3vmin)"},children:e.title||e.header}),Object(d.jsx)(j.a.Body,{children:e.children})]})},x=s.p+"static/media/introvert.7f43404a.svg",m=s.p+"static/media/ambivert.181946e9.svg",f=s.p+"static/media/extrovert.d1515cc1.svg",g=s(68),y=s(76),p=function(e){var t,s,o=Object(i.useContext)(u),n=o.questions,c=o.getScore();if(!c)return Object(d.jsx)(a.a,{to:"/"});c<=130?(t=f,s=c<=75?"Extremely":c<=89?"Grossly":c<=112?"Moderately":"Slightly",s+=" Extrovert"):c<=171?(t=m,s="Ambivert"):(t=x,s=c<=185?"Slightly":c<=199?"Moderately":c<=228?"Grossly":"Extremely",s+=" Introvert");var r="".concat(o.user.name,"'s personality: ").concat(s);return Object(d.jsxs)("div",{className:"result",children:[Object(d.jsxs)(b,{title:r,children:[Object(d.jsx)("img",{src:t,alt:s,style:{maxHeight:"50vh"}}),Object(d.jsxs)("p",{className:"text-muted text-center mt-3",children:["K. I. E. I. Score: ",c]}),Object(d.jsx)("div",{className:"actions text-center",children:Object(d.jsx)(g.a,{onClick:o.testAgain,variant:"outline-primary",children:"Test again"})})]}),Object(d.jsxs)(y.a,{children:[Object(d.jsxs)(j.a,{children:[Object(d.jsx)(j.a.Header,{children:Object(d.jsx)(y.a.Toggle,{as:g.a,variant:"link",eventKey:"0",children:"Show block scores"})}),Object(d.jsx)(y.a.Collapse,{eventKey:"0",children:Object(d.jsx)(j.a.Body,{children:Object(d.jsx)("ul",{className:"mt-5",children:["a","b","c","d","e"].map((function(e){return Object(d.jsxs)("li",{className:"",children:[Object(d.jsxs)("span",{className:"text-muted text-uppercase",children:["Block ",e,":"]})," ",n.filter((function(t){return t.block===e})).reduce((function(e,t){return t.answer&&(console.log(t),e+=t.scores.findIndex((function(e){return e===t.answer}))+1),e}),0)]},e)}))})})})]}),Object(d.jsxs)(j.a,{children:[Object(d.jsx)(j.a.Header,{children:Object(d.jsx)(y.a.Toggle,{as:g.a,variant:"link",eventKey:"1",children:"Show individual question scores"})}),Object(d.jsx)(y.a.Collapse,{eventKey:"1",children:Object(d.jsx)(j.a.Body,{children:Object(d.jsx)("ul",{className:"mt-5",children:n.sort((function(e,t){return e.id-t.id})).map((function(e){return Object(d.jsxs)("li",{className:"".concat(e.answer?"":"text-muted"),children:[Object(d.jsxs)("span",{className:"text-muted text-uppercase",children:["Block ",e.block,":"]})," ","Q",e.id,". ",e.answer," (Score:"," ",e.scores.findIndex((function(t){return t===e.answer}))+1,")"]},e.id)}))})})})]})]})]})},O=s(74),v=s(69),w=s(46),k=function(e){var t=Object(a.g)(),s=Object(i.useContext)(u);return Object(d.jsx)(b,{title:"K. I. E. I. Personality assessment",children:Object(d.jsxs)("div",{className:"text-center m-auto",style:{maxWidth:"400px"},children:[Object(d.jsx)("p",{className:"text-muted",children:"Begin test and answer all questions to finish the Personality assessment"}),Object(d.jsxs)(O.a,{onSubmit:function(e){e.preventDefault();var o={name:e.target.name.value,email:e.target.email.value};s.user&&o.name===s.user.name&&o.email===s.user.email||s.setUser(o);var n=s.questions.find((function(e){return!e.answer}));t.push("/questions/".concat(n.id))},children:[Object(d.jsx)(v.a,{className:"mb-3",children:Object(d.jsx)(w.a,{required:!0,name:"name",placeholder:"Name","aria-label":"Name"})}),Object(d.jsx)(v.a,{className:"mb-3",children:Object(d.jsx)(w.a,{type:"email",name:"email",placeholder:"Email (Optional)","aria-label":"Email"})}),Object(d.jsx)(g.a,{type:"submit",className:"btn-primary btn-block px-5",children:"Begin Test"})]})]})})},N=s(71),C=s(11),q=(s(26),function(e){var t=e.question,s=e.onChange,o=Object(i.useState)(),n=Object(C.a)(o,2),c=n[0],a=n[1];Object(i.useEffect)((function(){a(t.answer)}),[t]);return Object(d.jsx)("div",{className:"options d-flex flex-column",children:t.options.map((function(e,t){return Object(d.jsx)(g.a,{variant:c===t+1?"primary":"outline-primary",className:"mt-2",onClick:function(){return function(e){e=parseInt(e),s(e),a(e)}(t+1)},style:{textTransform:"unset"},children:e},t+1)}))})}),I=s(73),S=s(70),D=function(e){var t=e.question,s=e.onChange,o=Object(i.useState)(),n=Object(C.a)(o,2),c=n[0],a=n[1];Object(i.useEffect)((function(){a(t.answer)}),[t]);var r=function(e){e=parseInt(e),s(e),a(e)};return Object(d.jsxs)("div",{className:"options",children:[Object(d.jsxs)("ul",{className:"feedback-reactions justify-content-center my-4",children:[Object(d.jsx)("li",{onClick:function(){return r(2)},className:"angry ".concat(2===c?"active":""),children:Object(d.jsx)(I.a,{overlay:Object(d.jsx)(S.a,{id:"how-to-choose-answer",children:"Dislike to a great extent"}),children:Object(d.jsxs)("div",{children:[Object(d.jsx)("svg",{className:"eye left",children:Object(d.jsx)("use",{xlinkHref:"#eye"})}),Object(d.jsx)("svg",{className:"eye right",children:Object(d.jsx)("use",{xlinkHref:"#eye"})}),Object(d.jsx)("svg",{className:"mouth",children:Object(d.jsx)("use",{xlinkHref:"#mouth"})})]})})}),Object(d.jsx)("li",{onClick:function(){return r(4)},className:"sad ".concat(4===c?"active":""),children:Object(d.jsx)(I.a,{overlay:Object(d.jsx)(S.a,{id:"how-to-choose-answer",children:"Dislike to some extent"}),children:Object(d.jsxs)("div",{children:[Object(d.jsx)("svg",{className:"eye left",children:Object(d.jsx)("use",{xlinkHref:"#eye"})}),Object(d.jsx)("svg",{className:"eye right",children:Object(d.jsx)("use",{xlinkHref:"#eye"})}),Object(d.jsx)("svg",{className:"mouth",children:Object(d.jsx)("use",{xlinkHref:"#mouth"})})]})})}),Object(d.jsx)("li",{onClick:function(){return r(5)},className:"ok ".concat(5===c?"active":""),children:Object(d.jsx)(I.a,{overlay:Object(d.jsx)(S.a,{id:"how-to-choose-answer",children:"Indifferent"}),children:Object(d.jsx)("div",{})})}),Object(d.jsx)("li",{onClick:function(){return r(3)},className:"good ".concat(3===c?"active":""),children:Object(d.jsx)(I.a,{overlay:Object(d.jsx)(S.a,{id:"how-to-choose-answer",children:"Like to some extent"}),children:Object(d.jsxs)("div",{children:[Object(d.jsx)("svg",{className:"eye left",children:Object(d.jsx)("use",{xlinkHref:"#eye"})}),Object(d.jsx)("svg",{className:"eye right",children:Object(d.jsx)("use",{xlinkHref:"#eye"})}),Object(d.jsx)("svg",{className:"mouth",children:Object(d.jsx)("use",{xlinkHref:"#mouth"})})]})})}),Object(d.jsx)("li",{onClick:function(){return r(1)},className:"happy ".concat(1===c?"active":""),children:Object(d.jsx)(I.a,{overlay:Object(d.jsx)(S.a,{id:"how-to-choose-answer",children:"Like to a great extent"}),children:Object(d.jsxs)("div",{children:[Object(d.jsx)("svg",{className:"eye left",children:Object(d.jsx)("use",{xlinkHref:"#eye"})}),Object(d.jsx)("svg",{className:"eye right",children:Object(d.jsx)("use",{xlinkHref:"#eye"})})]})})})]}),Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{display:"none"},children:[Object(d.jsx)("symbol",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 7 4",id:"eye",children:Object(d.jsx)("path",{d:"M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1"})}),Object(d.jsx)("symbol",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 7",id:"mouth",children:Object(d.jsx)("path",{d:"M1,5.5 C3.66666667,2.5 6.33333333,1 9,1 C11.6666667,1 14.3333333,2.5 17,5.5"})})]})]})},H=function(e){var t=e.question,s=e.onChange,o=Object(i.useState)(),n=Object(C.a)(o,2),c=n[0],a=n[1];Object(i.useEffect)((function(){a(t.answer)}),[t]);var r=function(e){e=parseInt(e),s(e),a(e)};return Object(d.jsxs)("div",{className:"options",children:[Object(d.jsxs)("ul",{className:"feedback-reactions justify-content-center align-items-center my-4",children:[Object(d.jsx)("span",{className:"text-muted -d-none d-lg-inline-block p-2",children:"Disagree"}),Object(d.jsx)("li",{onClick:function(){return r(2)},className:"ok ".concat(2===c?"active":""),children:Object(d.jsx)(I.a,{overlay:Object(d.jsx)(S.a,{id:"how-to-choose-answer",children:"Disagree"}),children:Object(d.jsx)("div",{})})}),Object(d.jsx)("li",{onClick:function(){return r(3)},className:"good ".concat(3===c?"active":""),children:Object(d.jsx)(I.a,{overlay:Object(d.jsx)(S.a,{id:"how-to-choose-answer",children:"Indifferent"}),children:Object(d.jsxs)("div",{children:[Object(d.jsx)("svg",{className:"eye left",children:Object(d.jsx)("use",{xlinkHref:"#eye"})}),Object(d.jsx)("svg",{className:"eye right",children:Object(d.jsx)("use",{xlinkHref:"#eye"})}),Object(d.jsx)("svg",{className:"mouth",children:Object(d.jsx)("use",{xlinkHref:"#mouth"})})]})})}),Object(d.jsx)("li",{onClick:function(){return r(1)},className:"happy ".concat(1===c?"active":""),children:Object(d.jsx)(I.a,{overlay:Object(d.jsx)(S.a,{id:"how-to-choose-answer",children:"Agree"}),children:Object(d.jsxs)("div",{children:[Object(d.jsx)("svg",{className:"eye left",children:Object(d.jsx)("use",{xlinkHref:"#eye"})}),Object(d.jsx)("svg",{className:"eye right",children:Object(d.jsx)("use",{xlinkHref:"#eye"})})]})})}),Object(d.jsx)("span",{className:"text-muted -d-none d-lg-inline-block p-2",children:"Agree"})]}),Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{display:"none"},children:[Object(d.jsx)("symbol",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 7 4",id:"eye",children:Object(d.jsx)("path",{d:"M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1"})}),Object(d.jsx)("symbol",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 7",id:"mouth",children:Object(d.jsx)("path",{d:"M1,5.5 C3.66666667,2.5 6.33333333,1 9,1 C11.6666667,1 14.3333333,2.5 17,5.5"})})]})]})},A=function(e){var t=e.question,s=e.onChange,o=Object(i.useState)(),n=Object(C.a)(o,2),c=n[0],a=n[1];Object(i.useEffect)((function(){a(t.answer)}),[t]);var r=function(e){e=parseInt(e),s(e),a(e)};return Object(d.jsxs)("div",{className:"options",children:[Object(d.jsxs)("ul",{className:"feedback-reactions justify-content-center align-items-center my-4",children:[Object(d.jsx)("span",{className:"text-muted -d-none d-lg-inline-block p-2",children:"False"}),Object(d.jsx)("li",{onClick:function(){return r(2)},className:"ok ".concat(2===c?"active":""),children:Object(d.jsx)(I.a,{overlay:Object(d.jsx)(S.a,{id:"how-to-choose-answer",children:"Mostly false"}),children:Object(d.jsx)("div",{})})}),Object(d.jsx)("li",{onClick:function(){return r(3)},className:"good ".concat(3===c?"active":""),children:Object(d.jsx)(I.a,{overlay:Object(d.jsx)(S.a,{id:"how-to-choose-answer",children:"Somewhat True"}),children:Object(d.jsxs)("div",{children:[Object(d.jsx)("svg",{className:"eye left",children:Object(d.jsx)("use",{xlinkHref:"#eye"})}),Object(d.jsx)("svg",{className:"eye right",children:Object(d.jsx)("use",{xlinkHref:"#eye"})}),Object(d.jsx)("svg",{className:"mouth",children:Object(d.jsx)("use",{xlinkHref:"#mouth"})})]})})}),Object(d.jsx)("li",{onClick:function(){return r(1)},className:"happy ".concat(1===c?"active":""),children:Object(d.jsx)(I.a,{overlay:Object(d.jsx)(S.a,{id:"how-to-choose-answer",children:"Mostly True"}),children:Object(d.jsxs)("div",{children:[Object(d.jsx)("svg",{className:"eye left",children:Object(d.jsx)("use",{xlinkHref:"#eye"})}),Object(d.jsx)("svg",{className:"eye right",children:Object(d.jsx)("use",{xlinkHref:"#eye"})})]})})}),Object(d.jsx)("span",{className:"text-muted -d-none d-lg-inline-block p-2",children:"True"})]}),Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{display:"none"},children:[Object(d.jsx)("symbol",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 7 4",id:"eye",children:Object(d.jsx)("path",{d:"M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1"})}),Object(d.jsx)("symbol",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 7",id:"mouth",children:Object(d.jsx)("path",{d:"M1,5.5 C3.66666667,2.5 6.33333333,1 9,1 C11.6666667,1 14.3333333,2.5 17,5.5"})})]})]})},T=function(e){var t=e.question,s=e.onChange,o=Object(i.useState)(),n=Object(C.a)(o,2),c=n[0],a=n[1];Object(i.useEffect)((function(){a(t.answer)}),[t]);var r=function(e){e=parseInt(e),s(e),a(e)};return Object(d.jsxs)("div",{className:"options",children:[Object(d.jsxs)("ul",{className:"feedback-reactions justify-content-center align-items-center my-4",children:[Object(d.jsx)("span",{className:"text-muted -d-none d-lg-inline-block p-2",children:"Not applicable"}),Object(d.jsx)("li",{onClick:function(){return r(2)},className:"ok ".concat(2===c?"active":""),children:Object(d.jsx)(I.a,{overlay:Object(d.jsx)(S.a,{id:"how-to-choose-answer",children:"Not applicable"}),children:Object(d.jsx)("div",{})})}),Object(d.jsx)("li",{onClick:function(){return r(1)},className:"happy ".concat(1===c?"active":""),children:Object(d.jsx)(I.a,{overlay:Object(d.jsx)(S.a,{id:"how-to-choose-answer",children:"Applicable"}),children:Object(d.jsxs)("div",{children:[Object(d.jsx)("svg",{className:"eye left",children:Object(d.jsx)("use",{xlinkHref:"#eye"})}),Object(d.jsx)("svg",{className:"eye right",children:Object(d.jsx)("use",{xlinkHref:"#eye"})})]})})}),Object(d.jsx)("span",{className:"text-muted -d-none d-lg-inline-block p-2",children:"Applicable"})]}),Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{display:"none"},children:[Object(d.jsx)("symbol",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 7 4",id:"eye",children:Object(d.jsx)("path",{d:"M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1"})}),Object(d.jsx)("symbol",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 7",id:"mouth",children:Object(d.jsx)("path",{d:"M1,5.5 C3.66666667,2.5 6.33333333,1 9,1 C11.6666667,1 14.3333333,2.5 17,5.5"})})]})]})},M=function(e){var t=e.question,s=e.onChange;switch(t.block){case"a":return Object(d.jsx)(q,{question:t,onChange:s});case"b":return Object(d.jsx)(D,{question:t,onChange:s});case"c":return Object(d.jsx)(H,{question:t,onChange:s});case"d":return Object(d.jsx)(A,{question:t,onChange:s});case"e":return Object(d.jsx)(T,{question:t,onChange:s})}},P=function(e){var t=e.question,s=e.updateAnswer,o=e.questionCount;return t?Object(d.jsxs)(i.Fragment,{children:[Object(d.jsxs)("p",{className:"text-muted mt-n3",children:[t.id," / ",o]}),Object(d.jsx)(M,{question:t,onChange:s})]}):Object(d.jsx)("p",{children:"Invalid ID"})},E=function(e){var t=Object(a.g)(),s=Object(a.h)().id,o=Object(i.useContext)(u),n=o.getQuestion(+s);console.log({questions:o.questions,question:n,id:s});var c=function(){t.push("/result")};return n?Object(d.jsx)(b,{title:n.text,children:Object(d.jsxs)("div",{className:"actions mt-2 text-center m-auto",style:{maxWidth:"400px"},children:[Object(d.jsx)(P,{question:n,updateAnswer:function(e){o.setAnswer(n.id,e)},questionCount:o.getMaxId()}),Object(d.jsxs)(N.a,{className:"mt-4",children:[Object(d.jsx)(g.a,{onClick:function(){var e=n.id-1>=1?n.id-1:1;t.push("/questions/".concat(e))},type:"button",variant:"primary",children:"Previous"}),Object(d.jsxs)(g.a,{disabled:!0,type:"button",variant:"primary",className:"d-none d-md-inline-block",children:["Question ",n.id]}),n.id===o.getMaxId()?Object(d.jsx)(g.a,{disabled:!n.answer,onClick:c,type:"button",variant:"primary",className:"px-5",children:"View Result"}):Object(d.jsx)(g.a,{disabled:!n.answer,onClick:function(){var e=n.id+1<=o.getMaxId()?n.id+1:o.getMaxId();t.push("/questions/".concat(e))},type:"button",variant:"primary",className:"px-5",children:"Next"})]}),Object(d.jsx)(g.a,{onClick:c,type:"button",variant:"link",className:"px-5 mt-3 text-muted",children:"View Result"})]})}):Object(d.jsx)("p",{children:"Invalid ID"})},B=s(43),W=s(42),K=[{id:1,block:"a",text:"Which one of the following four jobs you would like best as your profession?",options:["Laboratory research worker","Political leader","Military officer","Officer in a factory or office"],scores:[2,3,4,1]},{id:2,block:"a",text:"Which one of the following four types of pictures (Cinema) do you like to enjoy most?",options:["Picture of a battle","Picture of a comedy","Picture of a grim tragedy","Picture of natural devastation"],scores:[1,2,4,3]},{id:3,block:"a",text:"To which one of the following four types of person do majority of your friends belong?",options:["Persons who love to spend money very much","Persons who love to spend money but adjust it according to their earning","Persons who love to save money but do spend where social prestige is involved","Persons who love to save money very much"],scores:[1,2,3,4]},{id:4,block:"a",text:"Which one of the following four types of work do you like most?",options:["Completely repetitive work","Moderately repetitive work","Slightly repetitive work","Completely non-repetitive work"],scores:[4,3,2,1]},{id:5,block:"a",text:"Which one of the following types of persons do you like the most to have with you in a social gathering?",options:["Those who would initiate the spirit of laughing and talking in the function","Those who would not initiate but join others in laughing and talking to make the function lively","Those who would laugh and talk only to keep friendly terms with others","Those who would always prefer to be silent and observe others activities"],scores:[1,2,3,4]},{id:6,block:"a",text:"Which one of the following types of persons do you like most to have as your friends?",options:["Persons who will never do anything without planning","Persons who will do planning in most of the occasions","Persons who will never like to plan before doing a thing","Persons who will do planning only on rare occasions"],scores:[4,3,2,1]},{id:7,block:"a",text:"Which one o the following types of persons do you like most to have as your friends?",options:["Those who usually feel happy","Those who feel happy most of the times","Those who feel happy occasionally","Those who do not feel happy usually"],scores:[1,2,3,4]},{id:8,block:"a",text:"What will you do during a disturbing mass demonstration on a political issue?",options:["Go and take active part","Observe the situation without taking any active part","Enquire about the situation for the sake of curiosity from a distance","Avoid the situation altogether"],scores:[1,2,3,4]},{id:9,block:"a",text:"How would you like to have a strong opponent and contest with him?",options:["Always prefer to have a strong opponent and contest with him","Sometimes prefer to have a strong opponent and contest with him","Usually prefer not to have a strong opponent and like to withdraw","Practically do not prefer to have a strong opponent and always like to withdraw"],scores:[1,2,3,4]},{id:10,block:"a",text:"To what extent does lack of careful planning make you disturbed?",options:["To a great extent","To some extent","To little extent","To practically no extent"],scores:[4,3,2,1]},{id:11,block:"a",text:"Which one of the following types of work would you like most to do?",options:["Work which involves too much of delicacies (consideration)","Work which involves delicacies but not too much of them","Work which preferably does not involve delicacies","Work which involves no delicacy at all"],scores:[4,3,2,1]},{id:12,block:"b",text:"Always thinking about yourself.",scores:[2,4,5,3,1]},{id:13,block:"b",text:"Thinking much before accepting a new issue or an idea.",scores:[2,4,5,3,1]},{id:14,block:"b",text:"Starting conversation with a stranger.",scores:[1,3,5,4,2]},{id:15,block:"b",text:"Sticking to a task inspite of you failure.",scores:[2,4,5,3,1]},{id:16,block:"b",text:"Standing other's criticism calmly.",scores:[1,3,5,4,2]},{id:17,block:"b",text:"To be cautious while making decisions.",scores:[2,4,5,3,1]},{id:18,block:"b",text:"To have always a planned life.",scores:[2,4,5,3,1]},{id:19,block:"b",text:"Always keeping confidence in others.",scores:[1,3,5,4,2]},{id:20,block:"b",text:"Taking leading parts in social functions.",scores:[1,3,5,4,2]},{id:21,block:"b",text:"Like the idea of having a limited number of friends and associates.",scores:[2,4,5,3,1]},{id:22,block:"b",text:"Always take particular care of personal properties (watches, clothes etc.).",scores:[2,4,5,3,1]},{id:23,block:"b",text:"Always approaching others to make friendship with them.",scores:[1,3,5,4,2]},{id:24,block:"b",text:"Always be cautious about possible misfortunes.",scores:[2,4,5,3,1]},{id:25,block:"b",text:"Prefer thinking alone about a problem till it is solved.",scores:[2,4,5,3,1]},{id:26,block:"b",text:"Always like to plan about future work.",scores:[2,4,5,3,1]},{id:27,block:"b",text:"Changing your work from one type to another.",scores:[1,3,5,4,2]},{id:28,block:"b",text:"Analyzing your thoughts and motives.",scores:[2,4,5,3,1]},{id:29,block:"c",text:"While doing a work, do you pay more attention to details than to important aspects only?",scores:[2,3,1]},{id:30,block:"c",text:"Do you prefer more to work alone than in groups?",scores:[2,3,1]},{id:31,block:"c",text:"Do you find more interest in spending time with books than with people?",scores:[2,3,1]},{id:32,block:"c",text:"Do you want to derive knowledge more through books than through practical experience?",scores:[2,3,1]},{id:33,block:"c",text:"Do you usually avoid trouble rather than facing it?",scores:[2,3,1]},{id:34,block:"c",text:"Do you prefer indoor game to outdoor games?",scores:[2,3,1]},{id:35,block:"c",text:"Do you like more to live in a lonely place rather than in lively one?",scores:[2,3,1]},{id:36,block:"c",text:"Do you like more to take part in an argument than to remain silent?",scores:[1,3,2]},{id:37,block:"c",text:"Do you prefer more to leave a social gathering earlier rather than spending much time in it?",scores:[2,3,1]},{id:38,block:"c",text:"Do you feel that you present a case better through writing than through speaking?",scores:[2,3,1]},{id:39,block:"c",text:"In your routine actions of the days (walking, dressing, talking, etc.) do you like to finish them quickly rather than doing them after careful consideration?",scores:[2,3,1]},{id:40,block:"c",text:"Do you easily remember your daily expenses in specific details rather than forgetting them mostly?",scores:[2,3,1]},{id:41,block:"c",text:"Do you prefer to take up the responsibility of directing others in doing a work rather than having somebody else to direct you?",scores:[1,3,2]},{id:42,block:"c",text:"Do you prefer to work on the last moment rather than starting it earlier?",scores:[1,3,2]},{id:43,block:"d",text:"Checking and rechecking of letters before mailing.",scores:[2,3,1]},{id:44,block:"d",text:"Sitting alone for a long time without being tired.",scores:[2,3,1]},{id:45,block:"d",text:"Concealing your activities from others.",scores:[2,3,1]},{id:46,block:"d",text:"Feel disturbed to a great extent after doing something wrong.",scores:[2,3,1]},{id:47,block:"d",text:"Calling persons who cross streets to avoid meeting you.",scores:[1,3,2]},{id:48,block:"d",text:"To make it a point to be outspoken while speaking.",scores:[1,3,2]},{id:49,block:"d",text:"Feeling hurt at other's aggressive behavior.",scores:[2,3,1]},{id:50,block:"d",text:"Voluntarily giving explanations of what you have done.",scores:[2,3,1]},{id:51,block:"d",text:"Hesitating to ask for loans from others.",scores:[2,3,1]},{id:52,block:"d",text:"Delivering a written report.",scores:[2,3,1]},{id:53,block:"d",text:"Feeling disturbed when people watch at your activities.",scores:[2,3,1]},{id:54,block:"d",text:"Feeling difficult to start conversations with strangers.",scores:[2,3,1]},{id:55,block:"d",text:"Analyzing the feelings and motives of others.",scores:[2,3,1]},{id:56,block:"d",text:"Remaining alone during emotional stress.",scores:[2,3,1]},{id:57,block:"e",text:"Are you always conscientious in your activities?",scores:[2,1]},{id:58,block:"e",text:"Can you tolerate slight abnormality in health?",scores:[1,2]},{id:59,block:"e",text:"Can you work better when you get incentives through other's praise?",scores:[2,1]},{id:60,block:"e",text:"Do you dislike to write about yourself even to very close friends?",scores:[2,1]},{id:61,block:"e",text:"Do you day-dream very frequently?",scores:[2,1]},{id:62,block:"e",text:"Do you usually think about yourself?",scores:[2,1]},{id:63,block:"e",text:"Do you like to talk much at social gatherings?",scores:[1,2]},{id:64,block:"e",text:"Do you prefer to work alone rather than doing the task with others?",scores:[2,1]},{id:65,block:"e",text:"Do you hesitate in making friendship with opposite sex?",scores:[2,1]},{id:66,block:"e",text:"Can you easily work against opposition?",scores:[1,2]},{id:67,block:"e",text:"Do you prefer to take the role of introducing others in a social gathering?",scores:[1,2]},{id:68,block:"e",text:"Are you usually cautious when you start conversation with others?",scores:[2,1]},{id:69,block:"e",text:"Do you consider yourself to be greatly sentimental?",scores:[2,1]},{id:70,block:"e",text:"Do you usually control your temper?",scores:[1,2]}],F=function(e){var t=Object(a.g)(),s=Object(i.useState)(),o=Object(C.a)(s,2),n=o[0],c=o[1],r=Object(i.useState)(),l=Object(C.a)(r,2),h=l[0],j=l[1];Object(i.useEffect)((function(){var e=localStorage.getItem("user"),t=localStorage.getItem("questions");if(e&&t){var s=JSON.parse(t);s[0].scores?j(s):j(K)}else j(K);e&&c(JSON.parse(e))}),[]),Object(i.useEffect)((function(){localStorage.setItem("questions",JSON.stringify(h))}),[h]),Object(i.useEffect)((function(){if(!n)return t.push("/");var e=JSON.parse(localStorage.getItem("user"));localStorage.setItem("user",JSON.stringify(n)),e&&n.name===e.name&&n.email===e.email||(console.log({storedUser:e,user:n}),j(K))}),[n,t]);var b={user:n,questions:h,questionGroups:[],result:{},setUser:c,setAnswer:function(e,t){e=parseInt(e),j((function(s){var o=s.filter((function(t){return t.id===e})),n=Object(C.a)(o,1)[0];return[].concat(Object(W.a)(s.filter((function(t){return t.id!==e}))),[Object(B.a)(Object(B.a)({},n),{},{answer:t})])}))},getMaxId:function(){return Math.max.apply(Math,Object(W.a)(h.map((function(e){return e.id}))))},getQuestion:function(e){if(e=parseInt(e),h)return h.find((function(t){return t.id===e}))},getScore:function(){if(h)return h.reduce((function(e,t){return t.answer&&(console.log(t),e+=t.scores.findIndex((function(e){return e===t.answer}))+1),e}),0)},testAgain:function(){j(K),t.push("/")}};return Object(d.jsx)(u.Provider,{value:b,children:e.children})};var J=function(){return Object(d.jsx)(i.Fragment,{children:Object(d.jsxs)(F,{children:[Object(d.jsx)(h,{}),Object(d.jsxs)(c.a,{className:"container-fluid w-100",children:[Object(d.jsxs)(a.d,{children:[Object(d.jsx)(a.b,{strict:!0,path:"/result",children:Object(d.jsx)(p,{})}),Object(d.jsx)(a.b,{path:"/questions/:id",children:Object(d.jsx)(E,{})}),Object(d.jsx)(a.b,{strict:!0,path:"/",children:Object(d.jsx)(k,{})})]}),Object(d.jsxs)("p",{className:"text-muted text-center mt-2",children:["Developed by"," ",Object(d.jsx)("a",{href:"https://wizamit.com",target:"_blank",children:"WizAmit (Amit Hazra)"})]})]})]})})};n.a.render(Object(d.jsx)(l.a,{children:Object(d.jsx)(J,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.642f40d4.chunk.js.map