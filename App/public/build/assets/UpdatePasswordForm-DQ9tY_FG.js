import{r as m,W as h,j as s}from"./app-D7zur4Nk.js";import{I as n}from"./InputError-DH0zQmQ1.js";import{I as c}from"./InputLabel-CJk3xOaR.js";import{P as v}from"./PrimaryButton-BUhJ5cr3.js";import{T as d}from"./TextInput-C6_VH8ZM.js";import{q as g}from"./transition-B-oxi_I-.js";function b({className:u=""}){const p=m.useRef(),l=m.useRef(),{data:e,setData:a,errors:o,put:w,reset:t,processing:f,recentlySuccessful:x}=h({current_password:"",password:"",password_confirmation:""}),j=r=>{r.preventDefault(),w(route("password.update"),{preserveScroll:!0,onSuccess:()=>t(),onError:i=>{i.password&&(t("password","password_confirmation"),p.current.focus()),i.current_password&&(t("current_password"),l.current.focus())}})};return s.jsxs("section",{className:u,children:[s.jsxs("header",{children:[s.jsx("h2",{className:"text-lg font-medium text-font-col",children:"Update Password"}),s.jsx("p",{className:"mt-1 text-sm text-font-col",children:"Ensure your account is using a long, random password to stay secure."})]}),s.jsxs("form",{onSubmit:j,className:"mt-6 space-y-6",children:[s.jsxs("div",{children:[s.jsx(c,{htmlFor:"current_password",value:"Current Password"}),s.jsx(d,{id:"current_password",ref:l,value:e.current_password,onChange:r=>a("current_password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password"}),s.jsx(n,{message:o.current_password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(c,{htmlFor:"password",value:"New Password"}),s.jsx(d,{id:"password",ref:p,value:e.password,onChange:r=>a("password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(n,{message:o.password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(c,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(d,{id:"password_confirmation",value:e.password_confirmation,onChange:r=>a("password_confirmation",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(n,{message:o.password_confirmation,className:"mt-2"})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(v,{disabled:f,children:"Save"}),s.jsx(g,{show:x,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:s.jsx("p",{className:"text-sm text-green-600",children:"Saved."})})]})]})]})}export{b as default};