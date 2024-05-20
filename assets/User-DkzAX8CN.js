import{p as i,d as c,u as d,a,g as l,q as h,c as x,r as m,t as p,j as e}from"./index-Cps602_G.js";import{n as u}from"./index.browser-DP16PUbO.js";import{C as v,I as f,b as g,c as j,T as E,e as w}from"./Home.styled-DDyxmmmx.js";import{R as b}from"./Register.styled-CDjRuFHR.js";const T=i.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-width: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);

  @media ${c.tablet} {
    min-width: 0;
    width: calc((100% - 40px) / 3);
    height: 350px;
  }
`,I=i.p`
  font-size: 24px;
  font-weight: var(--font-weight-bold);
  text-align: center;
`,R=()=>{const n=d(),r=a(l),s=a(h),o=x();return m.useEffect(()=>{n(p(r.email))},[n,r.email]),e.jsxs(e.Fragment,{children:[e.jsx(b,{onClick:()=>o(-1),children:"Return back"}),s&&s.length>0?e.jsx(v,{children:s.map(t=>e.jsxs(T,{children:[e.jsx(f,{children:e.jsx(g,{src:t.user.eventImg,alt:t.user.eventTitle})}),e.jsxs(j,{children:[e.jsx(E,{children:t.user.eventTitle.length>15?`${t.user.eventTitle.substring(0,15)}...`:t.user.eventTitle}),e.jsx(w,{to:`/event-details/${t.eventId}`,children:"View"})]})]},u()))}):e.jsx(I,{children:"You haven't register for any events yet!"})]})};export{R as User,R as default};
