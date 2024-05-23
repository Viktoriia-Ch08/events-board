import{p as e,d as n,N as l,b as x,u as d,a as p,c as f,r as v,e as h,j as t}from"./index-DEVsI3mn.js";import{c as m}from"./selectors-D8T8xVRC.js";import{R as g}from"./Register.styled-Byrkh-t_.js";const b=e.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${n.tablet} {
    flex-direction: row;
  }

  margin-bottom: 50px;
`,j=e.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  margin-bottom: 20px;
`,u=e.div`
  min-width: 200px;

  @media ${n.tablet} {
    min-width: 350px;
  }
`,E=e.img`
  width: 100%;
`,w=e.h2`
  font-size: 24px;
  font-weight: var(--font-weight-bold);

  @media ${n.tablet} {
    font-size: 30px;
  }
`,y=e.h3`
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: var(--font-weight-bold);
  @media ${n.tablet} {
    font-size: 24px;
  }
`,r=e.p`
  font-size: 16px;
  color: var(--text-grey-clr);
  text-align: justify;

  @media ${n.tablet} {
    font-size: 20px;
  }
`,k=e.p`
  font-size: 18px;
  font-weight: var(--font-weight-bold);
  color: var(--text-special-clr);
`;e.div`
  display: flex;
`;const z=e.div`
  display: flex;
  gap: 10px;

  margin-bottom: 20px;
  @media ${n.tablet} {
    justify-content: space-between;
  }

  @media ${n.desktop} {
    justify-content: flex-start;
    gap: 20px;
  }
`,o=e(l)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  font-size: 18px;
  text-align: center;
  border: 1px solid var(--text-clr-black);
  border-radius: 12px;
  color: var(--text-special-clr);
  background-color: var(--text-clr-black);
`,I=()=>{const{id:s}=x(),a=d(),i=p(m),c=f();return v.useEffect(()=>{a(h(s))},[a,s]),t.jsxs("div",{children:[t.jsx(g,{onClick:()=>c(-1),children:"Return back"}),Object.keys(i).length>0&&t.jsxs(b,{children:[t.jsx(u,{children:t.jsx(E,{src:i.imageUrl,alt:i.title})}),t.jsxs("div",{children:[t.jsxs(j,{children:[t.jsx(w,{children:i.title}),t.jsx(r,{children:i.organizer}),t.jsx(k,{children:i.eventDate})]}),t.jsxs(z,{children:[t.jsx(o,{to:`/${s}/participants`,children:"Participants"}),t.jsx(o,{to:`/register/${s}`,children:"Register"})]}),t.jsx(y,{children:"Description"}),t.jsx(r,{children:i.description})]})]})]})};export{I as default};
