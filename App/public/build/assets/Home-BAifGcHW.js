import{r as x,j as e,D as m,a as f}from"./app-DxaqefF8.js";import"./Dropdown-BSW3_mGi.js";import{N as p,P as v}from"./Footer-C_6p7wbT.js";import{P as u}from"./PrimaryButton-DpLuu_ZI.js";import"./transition-BDY8zwfe.js";const h=x.forwardRef(function({type:t="text",className:a="",isFocused:r=!1,...s},l){const n=l||x.useRef();return x.useEffect(()=>{r&&n.current.focus()},[]),e.jsxs("div",{className:"flex flex-row w-full rounded-lg",children:[e.jsx("input",{...s,type:t,className:"w-full border-background-col focus:ring-primary-col bg-background-col text-sm text-font-col my-2 py-3 rounded-l"+a,ref:n}),e.jsx("button",{type:"button",className:"focus:ring-red border-primary-col bg-secondary-col hover:bg-primary-col my-2 px-8 py-3 rounded-r-md",children:"Search"})]})}),j=x.forwardRef(function({type:t="select",className:a="",isFocused:r=!1,...s},l){const n=l||x.useRef();return x.useEffect(()=>{r&&n.current.focus()},[]),e.jsxs("select",{...s,type:t,className:"w-2/12 bg-background-col text-sm text-font-col my-2 py-3 border-background-col outline-none focus:border-primary-col focus:ring-border-primary-col rounded-md shadow-sm"+a,ref:n,children:[e.jsx("option",{value:"",disabled:!0,defaultValue:!0,children:"No Filter"})," "]})});function o(c){var t,a,r,s,l,n,i;return c.event_details!=null?(t=c.event_details,t.event_id&&t.event_id,a=t.event_name?t.event_name:"Null",r=t.event_desc?t.event_desc:"Null",s=t.event_orgi?t.event_orgi:"Null",l=t.event_date?t.event_date:"Null",n=t.event_thumb?t.event_thumb:"Null",i=t.slug?t.slug:"Null"):(a="Null",r="Null",s="Null",l="Null",n="Null",i="Null"),e.jsxs("div",{className:"flex-initial bg-tertiary-col p-6 text-left rounded-md w-96",children:[e.jsxs("div",{className:"flex flex-row w-full pb-3",children:[e.jsx("p",{className:"flex-auto text-left text-xs",children:s}),e.jsx("p",{className:"flex-auto text-right text-xs",children:l})]}),e.jsx("img",{src:n,alt:"pizza",className:"h-60 w-full object-cover border-2 border-secondary-col rounded-md"}),e.jsx("h1",{className:"w-full text-lg py-3 truncate",children:a}),e.jsx("p",{className:"line-clamp-3",children:r}),e.jsxs("div",{className:"flex flex-row pt-4 items-center",children:[e.jsxs("div",{className:"flex flex-row space-x-2",children:[e.jsx("span",{className:"mx-auto text-primary-col text-2xl",children:"★"}),e.jsx("span",{className:"mx-auto text-primary-col text-2xl",children:"★"}),e.jsx("span",{className:"mx-auto text-primary-col text-2xl",children:"★"}),e.jsx("span",{className:"mx-auto text-primary-col text-2xl",children:"★"}),e.jsx("span",{className:"mx-auto text-primary-col text-2xl",children:"★"})]}),e.jsx("div",{className:"ml-auto",children:e.jsx(u,{value:i,children:"More Info"})})]})]})}function d(c){var t=c.events,a=t.at(0),r=t.at(1),s=t.at(2),l=c.displaySearchBar,n;return l&&(n=e.jsxs("div",{className:"flex bg-tertiary-col py-4 px-6 text-left rounded-md w-full space-x-5",children:[e.jsx(h,{placeholder:"Enter event name..."}),e.jsx(j,{placeholder:"Filter"})]})),console.log("Search Bar: "+l),e.jsxs(e.Fragment,{children:[n,e.jsxs("div",{className:"flex justify-between w-full text-font-col mx-auto max-w-7xl pt-6",children:[e.jsx(o,{event_details:a}),e.jsx(o,{event_details:r}),e.jsx(o,{event_details:s})]}),e.jsxs("div",{className:"flex justify-between w-full text-font-col mx-auto max-w-7xl pt-6",children:[e.jsx(o,{event_details:r}),e.jsx(o,{event_details:a}),e.jsx(o,{event_details:s})]})]})}function _({events:c}){const[t,a]=m([]);function r(){const s=[...t,[]];a(s)}return console.log(c),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col min-h-screen justify-between bg-background-col",children:[e.jsx(f,{title:"Home"}),e.jsx(p,{}),e.jsxs("div",{className:"flex flex-col w-full  text-font-col mx-auto max-w-7xl px-2 sm:p-5 lg:px-8",children:[e.jsx(d,{events:c,displaySearchBar:!0}),t.map((s,l)=>e.jsx(d,{events:c},l)),e.jsx("div",{className:"m-auto pt-6",children:e.jsx(u,{onClick:r,children:"Show More"})})]}),e.jsx(v,{})]})})}export{_ as default};