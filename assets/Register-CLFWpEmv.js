import{u as v,c as R,b as S,a as c,e as w,r as q,d as D,j as e,g as E}from"./index-B-p0eL-N.js";import{u as B,f as F}from"./notifications-DUMPsfpr.js";import{a as I,R as k,b as V,I as N,c as i,d as P,e as n,S as T}from"./Register.styled-Pu5sjbHb.js";import{c as U}from"./selectors-4kcr32cK.js";const L=()=>{const t=v(),l=R(),{id:r}=S(),d=c(U),s=c(w),{handleSubmit:u,register:a,formState:{errors:o,isValid:m},reset:h}=B({mode:"onTouched"});q.useEffect(()=>{t(D(r))},[t,r]);const p=async x=>{const{name:j,email:f,birthDate:b,answer:g}=x;try{t(E({id:r,user:{name:j,email:f,birthDate:b,answer:g,eventTitle:d.title,eventImg:d.imageUrl}})).unwrap().then(()=>{h(),l("/")}).catch(()=>{F("You have already registered")})}catch(y){console.log(y.message)}};return e.jsxs(I,{children:[e.jsx(k,{onClick:()=>l(-1),children:"Return back"}),e.jsxs("form",{onSubmit:u(p),className:"form",children:[e.jsx(V,{children:"Event registration"}),e.jsxs("div",{children:[e.jsxs(N,{children:[e.jsx("label",{children:e.jsx(i,{defaultValue:s&&s.name,type:"text",...a("name",{required:!0}),placeholder:"Adam"})}),e.jsxs("label",{children:[e.jsx(i,{defaultValue:s&&s.email,type:"email",...a("email",{required:!0}),placeholder:"email@gmail.com"}),o.email&&e.jsxs("span",{children:[" ",o.email.message]})]}),e.jsx("label",{children:e.jsx(i,{defaultValue:s&&s.birthDate,type:"date",placeholder:"08.08.1988",min:"1920-01-01",max:"2018-12-31",...a("birthDate",{required:!0})})})]}),e.jsx(P,{children:"How did you know about us?"}),e.jsxs(n,{children:[e.jsx("input",{type:"radio",value:"Social media",...a("answer",{required:!0})}),"Social media"]}),e.jsxs(n,{children:[e.jsx("input",{type:"radio",value:"Friends",...a("answer",{required:!0})}),"Friends"]}),e.jsxs(n,{children:[e.jsx("input",{type:"radio",value:"Found myself",...a("answer",{required:!0})}),"Found myself"]})]}),e.jsx(T,{type:"submit",disabled:!m,children:"Submit"})]})]})};export{L as default};
