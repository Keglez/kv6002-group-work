import{W as x,j as e,a as _}from"./app-D7zur4Nk.js";import{N as h}from"./NavBar-V8UoZuqH.js";import{P as j}from"./Footer-Cjn9O_wU.js";import{I as l}from"./InputLabel-CJk3xOaR.js";import{T as m}from"./TextInput-C6_VH8ZM.js";import{I as r}from"./InputError-DH0zQmQ1.js";import"./FileInput-3drTUB1S.js";import{P as i}from"./PrimaryButton-BUhJ5cr3.js";import{F as g}from"./index.es-C5IXFNGU.js";import{f}from"./index-IemVdoXC.js";import"./Dropdown-CbTjuCEL.js";import"./transition-B-oxi_I-.js";function T({auth:o,organiser:v}){const{data:s,setData:a,post:c,processing:d,errors:n,reset:p}=x({event_orgi:v,event_name:"",event_desc:"",event_date:"",event_start_time:"",event_end_time:"",event_location:"",event_thumb:"",event_slug:"",event_attendees:[]}),u=t=>{t.preventDefault(),c(route("store"))};return e.jsxs("div",{className:"flex flex-col min-h-screen justify-between bg-background-col",children:[e.jsx(_,{title:"Create Event"}),e.jsx(h,{prop:o}),e.jsx("div",{className:"min-h-screen flex w-full h-full text-font-col mx-auto max-w-7xl px-2 sm:p-5 lg:px-8",children:e.jsxs("div",{className:"w-full",children:[e.jsxs("h1",{className:"flex justify-between text-xl py-6 bg-foreground-col text-center rounded-lg mb-6",children:[e.jsx("div",{className:"w-2/3 mx-6 flex items-center text-left",children:"Create Event"}),e.jsx("div",{className:"w-1/3 mx-6 rounded-lg text-right bg-foreground-col",children:e.jsx("a",{href:route("event"),children:e.jsx(i,{children:e.jsx(g,{icon:f})})})})]}),e.jsx("div",{className:"overflow-x-auto shadow-md rounded-lg",children:e.jsxs("form",{method:"post",onSubmit:u,className:"bg-tertiary-col p-6",children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"event_orgi",value:"Event Organiser"}),e.jsx(m,{id:"event_orgi",type:"text",name:"event_orgi",value:s.event_orgi,className:"mt-1 block w-full",isFocused:!0,disabled:!0,onChange:t=>a("event_orgi",t.target.value)}),e.jsx(r,{message:n.email,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"event_name",value:"Event Name"}),e.jsx(m,{id:"event_name",type:"text",name:"event_name",value:s.event_name,placeholder:"Enter Event Name",className:"mt-1 block w-full",isFocused:!0,onChange:t=>a("event_name",t.target.value)}),e.jsx(r,{message:n.email,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"event_desc",value:"Event Description"}),e.jsx(m,{id:"event_desc",type:"text",name:"event_desc",value:s.event_desc,placeholder:"Enter Event Description",className:"mt-1 block w-full",isFocused:!0,onChange:t=>a("event_desc",t.target.value)}),e.jsx(r,{message:n.email,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"event_date",value:"Event Date"}),e.jsx(m,{id:"event_date",type:"date",name:"event_date",value:s.event_date,className:"mt-1 block w-full",isFocused:!0,onChange:t=>a("event_date",t.target.value)}),e.jsx(r,{message:n.email,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"event_start_time",value:"Event Start Time"}),e.jsx(m,{id:"event_start_time",type:"time",name:"event_start_time",value:s.event_start_time,className:"mt-1 block w-full",isFocused:!0,onChange:t=>a("event_start_time",t.target.value)}),e.jsx(r,{message:n.email,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"event_end_time",value:"Event End Time"}),e.jsx(m,{id:"event_end_time",type:"time",name:"event_end_time",value:s.event_end_time,className:"mt-1 block w-full",isFocused:!0,onChange:t=>a("event_end_time",t.target.value)}),e.jsx(r,{message:n.email,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"event_location",value:"Event Location"}),e.jsx(m,{id:"event_location",type:"text",name:"event_location",value:s.event_location,placeholder:"Enter Event Location",className:"mt-1 block w-full",isFocused:!0,onChange:t=>a("event_location",t.target.value)}),e.jsx(r,{message:n.email,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"event_thumb",value:"Event Image"}),e.jsx(m,{id:"event_thumb",type:"text",name:"event_thumb",placeholder:"Enter Image URL",value:s.event_thumb,className:"mt-1 block w-full",isFocused:!0,onChange:t=>a("event_thumb",t.target.value)}),e.jsx(r,{message:n.email,className:"mt-2"})]}),e.jsx("div",{className:"flex justify-center mt-6",children:e.jsx(i,{className:"justify-center w-1/3 lg:w-1/6",disabled:d,children:"Submit"})})]})})]})}),e.jsx(j,{})]})}export{T as default};