"use strict";(self.webpackChunkips_app=self.webpackChunkips_app||[]).push([[424],{2806:function(e,t,s){s.d(t,{b:function(){return a}});var a=s(1243).Z.create({baseURL:"http://13.59.240.218"});a.interceptors.request.use((function(e){e.headers["Content-Type"]="application/json",e.headers.Accept="*/*",e.headers["Access-Control-Allow-Origin"]="*",e.headers["Access-Control-Allow-Headers"]="Origin, X-Requested-With, Content-Type, Accept";var t=localStorage.getItem("token");return t&&(e.headers.Authorization="Bearer "+t),e}),(function(e){return Promise.reject(e)})),a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))},7883:function(e,t,s){s.d(t,{$:function(){return n}});var a=s(3637),l=s(184),n=function(e){var t=e.page,s=e.pageSize,n=e.data,i=e.setPage;return(0,l.jsxs)("div",{className:"row pagin-sec",children:[(0,l.jsx)("div",{className:"col-sm-12 col-md-5",children:(0,l.jsx)("div",{className:"dataTables_info",role:"status","aria-live":"polite",children:"Showing ".concat(t*s+1," to  ").concat(t*s+n.data.length," of ").concat(n.count," entries")})}),(0,l.jsx)("div",{className:"col-sm-12 col-md-7",style:{display:"flex",justifyContent:"flex-end"},children:(0,l.jsx)(a.Z,{itemClass:"page-item",prevPageText:"Previous",nextPageText:"Next",linkClass:"page-link",activePage:t+1,itemsCountPerPage:s,totalItemsCount:n.count,pageRangeDisplayed:5,hideFirstLastPages:!0,onChange:function(e){return i(e-1)}})})]})}},7282:function(e,t,s){s.d(t,{p:function(){return c}});var a=s(9439),l=s(2791),n=s(9603),i=s(3360);var r=s.p+"static/media/trash-icon.ee0252a5a11b0d7959d2605f91ec705d.svg",d=s(184),c=function(e){var t=e.onClick,s=(0,l.useState)(!1),c=(0,a.Z)(s,2),o=c[0],u=c[1],h=function(){u(!1)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("img",{className:"action-item",style:{cursor:"pointer"},src:r,onClick:function(){return u(!0)}}),o?(0,d.jsxs)(n.Z,{show:!0,onHide:h,size:"lg",children:[(0,d.jsxs)(n.Z.Header,{closeButton:!1,children:[(0,d.jsx)(n.Z.Title,{children:"Delete"}),(0,d.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:h,children:(0,d.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,d.jsxs)(n.Z.Body,{children:["Are you sure you want to delete?",(0,d.jsxs)("div",{className:"modal-footer d-flex justify-content-end",children:[(0,d.jsx)(i.Z,{variant:"primary",onClick:function(){u(!1),t()},children:" Yes"}),(0,d.jsx)(i.Z,{variant:"danger",onClick:h,children:"No"})]})]})]}):null]})}},2805:function(e,t,s){s.d(t,{d:function(){return n}});s(2791);var a=s.p+"static/media/edit-icon.99f293607452e6df8a5fe12a6b47b2b0.svg",l=s(184),n=function(e){var t=e.onClick;return(0,l.jsx)("img",{style:{cursor:"pointer"},src:a,onClick:t})}},9324:function(e,t,s){s.d(t,{q:function(){return l}});var a=s(184),l=function(e){return 0===e.code?(0,a.jsx)("span",{className:"badge badge-pill badge-danger",children:"InActive"}):1===e.code?(0,a.jsx)("span",{className:"badge badge-pill badge-success",children:"Active"}):2===e.code?(0,a.jsx)("span",{className:"badge badge-pill badge-warning",children:"Hold"}):void 0}},2424:function(e,t,s){s.r(t),s.d(t,{Temples:function(){return E}});var a=s(9439),l=s(6403),n=s(2917),i=s(3418),r=s(2791),d=s(8088),c=s(2806),o=s(7883),u=s(7282),h=s(2805),m=s(9324),x=s(9603),j=s(5705),p=s(7734),f=s(8007),v=(s(8639),s(9513)),g=s.n(v),b=s(184),N=/^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm,y=(0,f.Ry)({name:(0,f.Z_)().required("Name is required"),userId:(0,f.Z_)().required("Select User"),cityId:(0,f.Z_)().required("Select City"),website:(0,f.Z_)().nullable().matches(N,"Invalid website"),facebookUrl:(0,f.Z_)().nullable().matches(N,"Invalid facebook url"),twitterUrl:(0,f.Z_)().nullable().matches(N,"Invalid twitter url")}),C=function(e){var t=e.onSubmit,s=e.initialValues,l=(0,r.useState)([]),n=(0,a.Z)(l,2),i=n[0],d=n[1],o=(0,r.useState)([]),u=(0,a.Z)(o,2),h=u[0],m=u[1];(0,r.useEffect)((function(){c.b.get("/cities/name").then((function(e){return e.data.map((function(e){var t,s,a,l,n,i,r,d;return{id:e.id,label:"".concat(null===(t=e.name)||void 0===t?void 0:t.trim()," (").concat(null===(s=e.state)||void 0===s?void 0:s.name," - ").concat(null===(a=e.state)||void 0===a||null===(l=a.country)||void 0===l?void 0:l.name,")"),state:{id:e.stateId,label:null===(n=e.state)||void 0===n?void 0:n.name,country:{id:null===(i=e.state)||void 0===i?void 0:i.countryId,label:null===(r=e.state)||void 0===r||null===(d=r.country)||void 0===d?void 0:d.name}}}}))})).then((function(e){var t;(d(e),s.cityId)&&(x.setFieldValue("city",e.filter((function(e){return e.id===s.cityId}))),x.setFieldValue("state",[null===(t=e.find((function(e){return e.id===s.cityId})))||void 0===t?void 0:t.state]))}))}),[]),(0,r.useEffect)((function(){c.b.get("/users/email?userType=TEMPLE").then((function(e){return e.data.map((function(e){return{id:e.id,label:[e.firstName,e.middleName,e.lastName].filter((function(e){return e})).join(" ")}}))})).then((function(e){m(e),s.userId&&x.setFieldValue("user",e.filter((function(e){return e.id==s.userId})))}))}),[]);var x=(0,j.TA)({initialValues:s,onSubmit:function(e,s){(0,s.validateForm)(e).then((function(s){t(e)}))},validationSchema:y,validateOnBlur:!0,validateOnChange:!1});return(0,b.jsxs)("form",{onSubmit:x.handleSubmit,children:[(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)("aside",{className:"col-md-4",children:(0,b.jsxs)("div",{className:"form-group",children:[(0,b.jsx)("label",{htmlFor:"cityId",children:"Temple User *"}),(0,b.jsx)(p.pY,{selected:x.values.user,id:"userId",options:h,onChange:function(e){(null===e||void 0===e?void 0:e.length)>0?(x.setFieldValue("userId",e[0].id),x.setFieldValue("user",e)):(x.setFieldValue("userId",""),x.setFieldValue("user",[]))},placeholder:"Choose a user..."}),(0,b.jsx)("div",{className:"invalid-feedback",children:x.errors.userId})]})}),(0,b.jsx)("aside",{className:"col-md-4",children:(0,b.jsxs)("div",{className:"form-group",children:[(0,b.jsx)("label",{htmlFor:"name",children:"Temple Name *"}),(0,b.jsx)("input",{type:"text",id:"name",value:x.values.name,onChange:x.handleChange,className:"form-control form-control-lg",placeholder:"Enter Temple Name"}),(0,b.jsx)("div",{className:"invalid-feedback",children:x.errors.name})]})}),(0,b.jsx)("aside",{className:"col-md-4",children:(0,b.jsxs)("div",{className:"form-group",children:[(0,b.jsx)("label",{htmlFor:"boardName",children:"Temple Board"}),(0,b.jsx)("input",{type:"text",id:"boardName",value:x.values.boardName,onChange:x.handleChange,className:"form-control form-control-lg",placeholder:"Enter Temple Board"})]})}),(0,b.jsx)("aside",{className:"col-md-4",children:(0,b.jsxs)("div",{className:"form-group",children:[(0,b.jsx)("label",{htmlFor:"legalIdentificationNumber",children:"Legal Identification Number"}),(0,b.jsx)("input",{type:"text",id:"legalIdentificationNumber",value:x.values.legalIdentificationNumber,onChange:x.handleChange,className:"form-control form-control-lg",placeholder:"Enter Legal Identification Number"})]})}),(0,b.jsx)("aside",{className:"col-md-4",children:(0,b.jsxs)("div",{className:"form-group",children:[(0,b.jsx)("label",{htmlFor:"templeType",children:"Temple Type"}),(0,b.jsxs)("select",{id:"templeType",className:"form-control select2",onChange:x.handleChange,value:x.values.templeType,children:[(0,b.jsx)("option",{value:"",children:"Select Temple Type"}),(0,b.jsx)("option",{value:"ARYAN",children:"Aryan"}),(0,b.jsx)("option",{value:"DRAVIDIAN",children:"Dravidian"}),(0,b.jsx)("option",{value:"OTHER",children:"Other"})]})]})}),(0,b.jsx)("aside",{className:"col-md-4",children:(0,b.jsxs)("div",{className:"form-group",children:[(0,b.jsx)("label",{htmlFor:"street",children:"Address"}),(0,b.jsx)("input",{type:"text",id:"street",value:x.values.street,onChange:x.handleChange,className:"form-control form-control-lg",placeholder:"Enter Address"}),(0,b.jsx)("div",{className:"invalid-feedback",children:x.errors.street})]})}),(0,b.jsx)("aside",{className:"col-md-4",children:(0,b.jsxs)("div",{className:"form-group",children:[(0,b.jsx)("label",{htmlFor:"cityId",children:"City *"}),(0,b.jsx)(p.pY,{selected:x.values.city,id:"cityId",options:i,onChange:function(e){var t,s;e&&e.length>0?(x.setFieldValue("city",e),x.setFieldValue("state",[e[0].state]),x.setFieldValue("cityId",e[0].id),x.setFieldValue("stateId",e[0].state.id),x.setFieldValue("countryId",null===(t=e[0].state)||void 0===t||null===(s=t.country)||void 0===s?void 0:s.id)):(x.setFieldValue("city",[]),x.setFieldValue("state",[]),x.setFieldValue("cityId",""),x.setFieldValue("stateId",""),x.setFieldValue("countryId",""))},placeholder:"Choose a city..."}),(0,b.jsx)("div",{className:"invalid-feedback",children:x.errors.cityId})]})}),(0,b.jsx)("aside",{className:"col-md-4",children:(0,b.jsxs)("div",{className:"form-group",children:[(0,b.jsx)("label",{htmlFor:"inputState",children:"State"}),(0,b.jsx)(p.pY,{selected:x.values.state,id:"stateId",disabled:!0,options:x.values.state,placeholder:"Choose a state..."})]})}),(0,b.jsx)("aside",{className:"col-md-4",children:(0,b.jsxs)("div",{className:"form-group",children:[(0,b.jsx)("label",{htmlFor:"phone",children:"Mobile"}),(0,b.jsx)("input",{type:"text",id:"phone",value:x.values.phone,onChange:x.handleChange,className:"form-control form-control-lg",placeholder:"Enter Mobile"})]})}),(0,b.jsx)("aside",{className:"col-md-4",children:(0,b.jsxs)("div",{className:"form-group",children:[(0,b.jsx)("label",{htmlFor:"inputCurrentLocation",children:"Current Location"}),(0,b.jsx)("input",{type:"text",id:"inputCurrentLocation",className:"form-control form-control-lg",placeholder:"Enter Current Location"})]})}),(0,b.jsx)("aside",{className:"col-md-4",children:(0,b.jsxs)("div",{className:"form-group",children:[(0,b.jsx)("label",{htmlFor:"instagramHandle",children:"Instagram Handle"}),(0,b.jsx)("input",{type:"text",id:"instagramHandle",value:x.values.instagramHandle,onChange:x.handleChange,className:"form-control form-control-lg",placeholder:"Enter Instagram Handle"})]})}),(0,b.jsx)("aside",{className:"col-md-4",children:(0,b.jsxs)("div",{className:"form-group",children:[(0,b.jsx)("label",{htmlFor:"yearOfEstablishment",children:"Year Of Establishment"}),(0,b.jsx)(g(),{selected:x.values.yearOfEstablishment?new Date(x.values.yearOfEstablishment):null,onChange:function(e){x.setFieldValue("yearOfEstablishment",e),x.setFieldTouched("yearOfEstablishment")},className:"form-control"})]})}),(0,b.jsx)("aside",{className:"col-md-12",children:(0,b.jsxs)("div",{className:"form-group",children:[(0,b.jsx)("label",{htmlFor:"descriptionOfHistory",children:"Description or History"}),(0,b.jsx)("textarea",{id:"descriptionOfHistory",value:x.values.descriptionOfHistory,className:"form-control form-control-lg",placeholder:"Enter Designation",onChange:x.handleChange})]})}),(0,b.jsx)("aside",{className:"col-md-4",children:(0,b.jsxs)("div",{className:"form-group",children:[(0,b.jsx)("label",{htmlFor:"website",children:"Website"}),(0,b.jsx)("input",{type:"text",id:"website",value:x.values.website,onChange:x.handleChange,className:"form-control form-control-lg",placeholder:"Enter Website"}),(0,b.jsx)("div",{className:"invalid-feedback",children:x.errors.website})]})}),(0,b.jsx)("aside",{className:"col-md-4",children:(0,b.jsxs)("div",{className:"form-group",children:[(0,b.jsx)("label",{htmlFor:"facebookUrl",children:"Facebook URL"}),(0,b.jsx)("input",{type:"text",id:"facebookUrl",value:x.values.facebookUrl,className:"form-control form-control-lg",placeholder:"Enter Facebook URL"}),(0,b.jsx)("div",{className:"invalid-feedback",children:x.errors.facebookUrl})]})}),(0,b.jsx)("aside",{className:"col-md-4",children:(0,b.jsxs)("div",{className:"form-group",children:[(0,b.jsx)("label",{htmlFor:"twitterUrl",children:"Twitter URL"}),(0,b.jsx)("input",{type:"text",id:"twitterUrl",value:x.values.twitterUrl,onChange:x.handleChange,className:"form-control form-control-lg",placeholder:"Enter Twitter URL"}),(0,b.jsx)("div",{className:"invalid-feedback",children:x.errors.twitterUrl})]})})]}),(0,b.jsx)("div",{className:"modal-footer d-flex justify-content-end",children:(0,b.jsx)("button",{type:"submit",className:"btn mb-2 btn-primary",children:"Save"})})]})},F=function(e){return c.b.post("/temples",e)},w=function(e){var t=e.handleSuccess,s=e.handleClose,a=(0,i.D)({mutationFn:F});return(0,b.jsxs)(x.Z,{show:!0,onHide:s,size:"lg",children:[(0,b.jsxs)(x.Z.Header,{closeButton:!1,children:[(0,b.jsx)(x.Z.Title,{children:"New Temple"}),(0,b.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:s,children:(0,b.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,b.jsx)(x.Z.Body,{children:(0,b.jsx)(C,{initialValues:{name:"",description:"",status:""},onSubmit:function(e){a.mutate(e,{onSuccess:t})}})})]})},I=s(1413),T=function(e){return c.b.put("/temples/".concat(e.id),e)},Z=function(e){var t=e.handleSuccess,s=e.handleClose,a=e.id,l=(0,n.a)({queryKey:["temple-details",a],queryFn:function(){return function(e){return c.b.get("/temples/".concat(e)).then((function(e){return e.data}))}(a)}}),r=l.data,d=(l.error,(0,i.D)({mutationFn:T}));return(0,b.jsx)(b.Fragment,{children:r&&(0,b.jsxs)(x.Z,{show:!0,onHide:s,size:"lg",children:[(0,b.jsxs)(x.Z.Header,{closeButton:!1,children:[(0,b.jsx)(x.Z.Title,{children:"Edit Temple"}),(0,b.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:s,children:(0,b.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,b.jsx)(x.Z.Body,{children:(0,b.jsx)(C,{initialValues:(0,I.Z)((0,I.Z)({},r),{},{user:[]}),onSubmit:function(e){d.mutate((0,I.Z)((0,I.Z)({},e),{},{id:a}),{onSuccess:t})}})})]})})},k=s(4849),S=function(e){return c.b.delete("/temples/".concat(e))},E=function(){var e=(0,l.NL)(),t=(0,r.useState)(0),s=(0,a.Z)(t,2),x=s[0],j=s[1],p=(0,r.useState)(!1),f=(0,a.Z)(p,2),v=f[0],g=f[1],N=(0,r.useState)(!1),y=(0,a.Z)(N,2),C=y[0],F=y[1],I=(0,r.useState)(),T=(0,a.Z)(I,2),E=T[0],A=T[1],V=(0,r.useState)(!1),H=(0,a.Z)(V,2),U=(H[0],H[1]),L=(0,n.a)({queryKey:["temples",x],queryFn:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return c.b.get("/temples?pageIndex=".concat(e,"&pageSize=").concat(t)).then((function(e){return e.data}))}(x)},keepPreviousData:!0}),O=L.data,D=L.refetch,R=L.isLoading,q=(0,i.D)({mutationFn:S}),P=function(e){return function(){q.mutate(e,{onSuccess:D,onError:function(e){U(!0),setTimeout((function(){U(!1)}),3e3)}})}};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:"row justify-content-center",children:(0,b.jsxs)("div",{className:"col-12",children:[(0,b.jsxs)("div",{className:"row heading-add",children:[(0,b.jsx)("aside",{className:"col-sm-10",children:(0,b.jsx)("h2",{className:"mb-0 page-title",children:"Temples"})}),(0,b.jsx)("aside",{className:"col-sm-2 add-sec",children:(0,b.jsx)("button",{className:"bttn",onClick:function(){return g(!0)},children:"Add"})})]}),(0,b.jsx)("div",{className:"row my-2",children:(0,b.jsx)("div",{className:"col-md-12",children:(0,b.jsx)("div",{className:"card shadow",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("div",{className:"resp-table temples-tb",children:(0,b.jsxs)("table",{className:"table",children:[(0,b.jsx)("thead",{children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{children:"Temple Name"}),(0,b.jsx)("th",{children:"Temple Board"}),(0,b.jsx)("th",{children:"Temple Images"}),(0,b.jsx)("th",{children:"Legal Identification Number"}),(0,b.jsx)("th",{children:"Temple Type"}),(0,b.jsx)("th",{children:"Address"}),(0,b.jsx)("th",{children:"City"}),(0,b.jsx)("th",{children:"State"}),(0,b.jsx)("th",{children:"Email"}),(0,b.jsx)("th",{children:"Mobile"}),(0,b.jsx)("th",{children:"Current Location"}),(0,b.jsx)("th",{children:"Website"}),(0,b.jsx)("th",{children:"Year Of Establishment"}),(0,b.jsx)("th",{children:"Description or History"}),(0,b.jsx)("th",{children:"Facebook URL"}),(0,b.jsx)("th",{children:"Twitter URL"}),(0,b.jsx)("th",{children:"Instagram Handle"}),(0,b.jsx)("th",{children:"Status"}),(0,b.jsx)("th",{children:"Actions"})]})}),(0,b.jsx)("tbody",{children:R?(0,b.jsx)("tr",{children:(0,b.jsx)("td",{rowSpan:"10",colSpan:"12",children:(0,b.jsx)("div",{className:"text-center py-5",children:(0,b.jsx)(k.Z,{animation:"border"})})})}):O.data.map((function(e){return(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{children:e.name}),(0,b.jsx)("td",{children:e.boardName}),(0,b.jsx)("td",{children:(0,b.jsx)("img",{style:{borderRadius:"50%"},height:"40",width:"40",src:e.image||d})}),(0,b.jsx)("td",{children:e.legalIdentificationNumber}),(0,b.jsx)("td",{children:e.templeType}),(0,b.jsx)("td",{}),(0,b.jsx)("td",{}),(0,b.jsx)("td",{}),(0,b.jsx)("td",{children:e.user.email}),(0,b.jsx)("td",{children:e.phone}),(0,b.jsx)("td",{}),(0,b.jsx)("td",{children:e.website}),(0,b.jsx)("td",{children:new Date(e.yearOfEstablishment).getFullYear()}),(0,b.jsx)("td",{children:e.descriptionOfHistory}),(0,b.jsx)("td",{children:e.facebookUrl}),(0,b.jsx)("td",{children:e.twitterUrl}),(0,b.jsx)("td",{children:e.instagramHandle}),(0,b.jsx)("td",{children:(0,b.jsx)(m.q,{code:e.status})}),(0,b.jsxs)("td",{className:"actions",children:[(0,b.jsx)(h.d,{onClick:(t=e.id,function(){A(t),F(!0)})}),(0,b.jsx)(u.p,{onClick:P(e.id)})]})]},e.id);var t}))})]})}),R?null:(0,b.jsx)(o.$,{page:x,pageSize:20,data:O,setPage:j})]})})})})]})}),v?(0,b.jsx)(w,{handleSuccess:function(){g(!1),D()},handleClose:function(){return g(!1)}}):null,C?(0,b.jsx)(Z,{handleSuccess:function(){e.invalidateQueries({queryKey:["temple-details",E]}),F(!1),D()},id:E,handleClose:function(){return F(!1)}}):null]})}},8088:function(e,t,s){e.exports=s.p+"static/media/avatar-generic-avatar.169ceb4d7fa0dfee81f4.png"}}]);
//# sourceMappingURL=424.e33a2479.chunk.js.map