import{W as n,j as e,a as d}from"./app-Buf-ImK6.js";import{G as c}from"./GuestLayout-B82JyVR3.js";import{T as u,I as x}from"./TextInput-D3iz33LN.js";import{P as p}from"./PrimaryButton-yL9eOEeL.js";import"./Footer-C0PiE7Kr.js";function b({status:t}){const{data:a,setData:o,post:r,processing:l,errors:m}=n({email:""}),i=s=>{s.preventDefault(),r(route("password.email"))};return e.jsxs(c,{children:[e.jsx(d,{title:"Forgot Password"}),e.jsx("h1",{className:"pt-2 pb-4 text-center text-font-col text-xl",children:"Forgot Password"}),e.jsx("div",{className:"mb-4 text-sm text-font-col",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),t&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:t}),e.jsxs("form",{onSubmit:i,children:[e.jsx(u,{id:"email",type:"email",name:"email",value:a.email,placeholder:"Enter email",className:"mt-1 block w-full",isFocused:!0,onChange:s=>o("email",s.target.value)}),e.jsx(x,{message:m.email,className:"mt-2"}),e.jsx("div",{className:"flex items-center justify-end mt-4",children:e.jsx(p,{className:"ms-4",disabled:l,children:"Email Password Reset Link"})})]})]})}export{b as default};