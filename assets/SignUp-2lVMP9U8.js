import{r as o,u as U,c as C,j as e,l as O,w as W,m as B}from"./index-B-p0eL-N.js";import{A as F,a as H,b as r,S as h,c as g,d as x,t as j,R as w,e as S,f as V,g as z}from"./Login.styled-2TtrEu_J.js";import{u as G,f as J}from"./notifications-DUMPsfpr.js";import{c as t,S as K}from"./Register.styled-Pu5sjbHb.js";const Z=()=>{const[d,f]=o.useState("password"),[y,b]=o.useState(!1),[E,I]=o.useState(!1),[c,A]=o.useState("password"),l=U(),P=C(),{handleSubmit:T,watch:v,register:a,formState:{errors:s,isValid:q},reset:L}=G({mode:"onTouched"}),N=async n=>{const{name:p,email:u,birthDate:m,password:k}=n;try{l(O({email:u,password:k})).unwrap().then(i=>{const D={uid:i.uid,name:p,email:u,birthDate:m};W(D),l(B({birthDate:m,name:p})),L(),P("/")}).catch(()=>{J("Sorry, user has already exist")})}catch(i){console.log(i.message)}},R=v("password","");return e.jsxs(F,{children:[e.jsx(H,{children:"Sign up"}),e.jsxs("form",{onSubmit:T(N),className:"auth-form",children:[e.jsxs(r,{children:["Enter your name",e.jsx(t,{type:"text",...a("name",{required:!0}),placeholder:"Adam"})]}),e.jsxs(r,{children:["Enter your email",e.jsx(t,{type:"email",...a("email",{required:!0}),placeholder:"email@gmail.com"}),s.email&&e.jsxs("span",{children:[" ",s.email.message]})]}),e.jsxs(r,{children:["Enter your birth date",e.jsx(t,{type:"date",...a("birthDate",{required:!0}),placeholder:"08.08.1988",min:"1920-01-01",max:"2018-12-31"}),s.number&&e.jsxs("span",{children:[" ",s.number.message]})]}),e.jsxs(r,{children:["Enter password",e.jsx(t,{type:d,...a("password",{required:!0}),placeholder:"Password",className:"form-control"}),e.jsx(h,{children:e.jsx(g,{children:e.jsx(x,{onClick:()=>j(d,f,b),children:y?e.jsx(w,{}):e.jsx(S,{})})})}),s.password&&e.jsx("span",{children:s.password.message})]}),e.jsxs(r,{children:["Repeat password",e.jsx(t,{type:c,...a("repeatPassword",{required:!0,validate:n=>n===R||"Passwords do not match"}),placeholder:"Confirm Password",className:"form-control"}),e.jsx(h,{children:e.jsx(g,{children:e.jsx(x,{onClick:()=>j(c,A,I),children:E?e.jsx(w,{}):e.jsx(S,{})})})}),s.repeatPassword&&e.jsx("span",{children:s.repeatPassword.message})]}),e.jsx(K,{type:"submit",disabled:!q,children:"Sign up"})]}),e.jsx(V,{children:"Or"}),e.jsx(z,{to:"/login",children:"Log in"})]})};export{Z as default};