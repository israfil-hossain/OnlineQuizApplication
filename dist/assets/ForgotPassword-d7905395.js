import{w as u,r as o,j as e,y as g,Q as i}from"./index-f5628c54.js";import{F as h,a as p,b as f}from"./index.esm-389e3566.js";import{f as y}from"./forgotPasswordValidation-96bda55d.js";import{P as b}from"./Progress-3b628373.js";import{B as j}from"./index.esm-e7f5240b.js";const F=()=>{const m={email:""};let n=u();const[d,r]=o.useState(!1),c=async(t,{setSubmitting:l,setErrors:a})=>{r(!0),g.forgotPassword(t).then(s=>{console.log("Response",s),i.success("Successfully Reset Password Link Send by Your Email !"),r(!1),n("/login")}).catch(s=>{r(!1),i.error("Something went Wrong!"),console.log("Err => ",s)})};return e.jsx(o.Fragment,{children:e.jsx("div",{className:"h-[100vh] flex justify-center items-start w-full lg:pt-16 pt-5",children:e.jsxs("div",{className:"bg-white  lg:w-[500px] w-full lg:py-20 lg:px-10 px-10 py-10  shadow-md rounded-md hover:shadow-lg",children:[e.jsxs("div",{className:"mb-6 sm:mx-auto sm:w-full sm:max-w-md",children:[e.jsx("h2",{className:"text-center text-xl font-extrabold text-gray-900",children:"Forgot Your Password ?"}),e.jsxs("p",{className:"text-sm text-center py-4",children:["Don't worry, Type your Email address and Submit"," "]})]}),e.jsx("div",{children:e.jsx(h,{initialValues:m,validationSchema:y,onSubmit:c,children:({values:t,handleChange:l,errors:a,touched:s,isSubmitting:x})=>e.jsxs(p,{children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email Address"}),e.jsxs("div",{className:"mt-1",children:[e.jsx(f,{type:"email",name:"email",id:"email",autoComplete:"email",value:t.email,placeholder:"Enter your Email Address",onChange:l,error:s.email&&a.email,className:`appearance-none block w-full px-3 py-2 border border-gray-300 
                                    rounded-md shadow-sm placeholder-gray-400 
                                    focus:ring-green-500 focus:border-green-500 focus:ring-1 sm:text-sm ${s.email&&a.email?"border-red-500":""}`}),s.email&&a.email&&e.jsx("p",{className:"mt-2 text-sm text-red-600 ",children:a.email})]})]}),e.jsx("div",{className:"pt-10",children:e.jsxs("button",{type:"submit",disabled:x,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",children:[e.jsx("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3",children:d?e.jsx(b,{}):e.jsx(j,{className:"h-5 w-5 text-gray-600 group-hover:text-yellow-400","aria-hidden":"true"})}),"Submit"]})})]})})})]})})})};export{F as default};