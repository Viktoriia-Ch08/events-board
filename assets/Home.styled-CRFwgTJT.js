import{p as t,i as e,N as a}from"./index-B-p0eL-N.js";const i=t.ul`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  @media ${e.tablet} {
    width: 100%;
  }
`,r=t.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  min-width: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);

  @media ${e.tablet} {
    min-width: 0;
    width: calc((100% - 40px) / 3);
    height: 400px;
  }
`,n=t.div`
  position: relative;
  width: 100%;
`,d=t.img`
  height: 250px;
  object-fit: cover;
`,s=t.h2`
  font-size: 24px;
  font-weight: var(--font-weight-bold);

  @media ${e.tablet} {
    font-size: 18px;
    width: 180px;
  }
`,c=t.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 0 5px;
  @media ${e.tablet} {
    padding: 0 15px;
  }
`,p=t.p`
  font-size: 16px;
  color: var(--text-grey-clr);
`,l=t.p`
  font-size: 20px;
  font-weight: var(--font-weight-bold);
  color: var(--text-special-clr);

  @media ${e.tablet} {
    font-size: 16px;
  }
`,x=t(a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: var(--font-weight-medium);
  color: var(--text-special-clr);
  background-color: var(--text-clr-black);
  border: 2px solid var(--text-clr-light-grey);

  &:active {
    background-color: var(--btn-dark-hover-focus);
  }

  @media ${e.tablet} {
    width: 100%;
    transform: background-color var(--hover-focus-trans);
    &:hover,
    &:focus {
      background-color: var(--btn-dark-hover-focus);
    }
  }
`,f=t.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  @media ${e.tablet} {
    padding: 0 15px;
  }
`;export{i as C,l as D,n as I,f as L,s as T,r as a,d as b,c,p as d,x as e};
