"use strict";(self.webpackChunkips_app=self.webpackChunkips_app||[]).push([[920],{2806:function(e,n,i){i.d(n,{b:function(){return t}});var t=i(1243).Z.create({baseURL:"http://13.59.240.218"});t.interceptors.request.use((function(e){e.headers["Content-Type"]="application/json",e.headers.Accept="*/*",e.headers["Access-Control-Allow-Origin"]="*",e.headers["Access-Control-Allow-Headers"]="Origin, X-Requested-With, Content-Type, Accept";var n=localStorage.getItem("token");return n&&(e.headers.Authorization="Bearer "+n),e}),(function(e){return Promise.reject(e)})),t.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))},7883:function(e,n,i){i.d(n,{$:function(){return a}});var t=i(3637),s=i(184),a=function(e){var n=e.page,i=e.pageSize,a=e.data,r=e.setPage;return(0,s.jsxs)("div",{className:"row pagin-sec",children:[(0,s.jsx)("div",{className:"col-sm-12 col-md-5",children:(0,s.jsx)("div",{className:"dataTables_info",role:"status","aria-live":"polite",children:"Showing ".concat(n*i+1," to  ").concat(n*i+a.data.length," of ").concat(a.count," entries")})}),(0,s.jsx)("div",{className:"col-sm-12 col-md-7",style:{display:"flex",justifyContent:"flex-end"},children:(0,s.jsx)(t.Z,{itemClass:"page-item",prevPageText:"Previous",nextPageText:"Next",linkClass:"page-link",activePage:n+1,itemsCountPerPage:i,totalItemsCount:a.count,pageRangeDisplayed:5,hideFirstLastPages:!0,onChange:function(e){return r(e-1)}})})]})}},7282:function(e,n,i){i.d(n,{p:function(){return o}});var t=i(9439),s=i(2791),a=i(9603),r=i(3360);var c=i.p+"static/media/trash-icon.ee0252a5a11b0d7959d2605f91ec705d.svg",l=i(184),o=function(e){var n=e.onClick,i=(0,s.useState)(!1),o=(0,t.Z)(i,2),d=o[0],u=o[1],h=function(){u(!1)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("img",{className:"action-item",style:{cursor:"pointer"},src:c,onClick:function(){return u(!0)}}),d?(0,l.jsxs)(a.Z,{show:!0,onHide:h,size:"lg",children:[(0,l.jsxs)(a.Z.Header,{closeButton:!1,children:[(0,l.jsx)(a.Z.Title,{children:"Delete"}),(0,l.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:h,children:(0,l.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,l.jsxs)(a.Z.Body,{children:["Are you sure you want to delete?",(0,l.jsxs)("div",{className:"modal-footer d-flex justify-content-end",children:[(0,l.jsx)(r.Z,{variant:"primary",onClick:function(){u(!1),n()},children:" Yes"}),(0,l.jsx)(r.Z,{variant:"danger",onClick:h,children:"No"})]})]})]}):null]})}},2805:function(e,n,i){i.d(n,{d:function(){return a}});i(2791);var t=i.p+"static/media/edit-icon.99f293607452e6df8a5fe12a6b47b2b0.svg",s=i(184),a=function(e){var n=e.onClick;return(0,s.jsx)("img",{style:{cursor:"pointer"},src:t,onClick:n})}},9324:function(e,n,i){i.d(n,{q:function(){return s}});var t=i(184),s=function(e){return 0===e.code?(0,t.jsx)("span",{className:"badge badge-pill badge-danger",children:"InActive"}):1===e.code?(0,t.jsx)("span",{className:"badge badge-pill badge-success",children:"Active"}):2===e.code?(0,t.jsx)("span",{className:"badge badge-pill badge-warning",children:"Hold"}):void 0}},920:function(e,n,i){i.r(n),i.d(n,{Certifications:function(){return w}});var t=i(9439),s=i(6403),a=i(2917),r=i(3418),c=i(2791),l=i(2469),o=i(4849),d=i(2806),u=i(7883),h=i(7282),m=i(2805),x=i(9324),f=i(9603),j=i(1413),p=i(5705),v=i(8007),g=i(184),b=(0,v.Ry)({name:(0,v.Z_)().required("Name is required")}),C=function(e){var n=e.onSubmit,i=e.initialValues,t=(0,p.TA)({initialValues:i,onSubmit:function(e,i){(0,i.validateForm)(e).then((function(i){e.status?n((0,j.Z)((0,j.Z)({},e),{},{status:parseInt(e.status)})):n(e)}))},validationSchema:b,validateOnBlur:!0,validateOnChange:!1});return(0,g.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("aside",{className:"col-md-6",children:(0,g.jsxs)("div",{className:"form-group",children:[(0,g.jsx)("label",{htmlFor:"name",children:"Name *"}),(0,g.jsx)("input",{type:"text",id:"name",value:t.values.name,onChange:t.handleChange,onBlur:t.handleBlur,className:"form-control form-control-lg",placeholder:"Enter Name"}),(0,g.jsx)("div",{className:"invalid-feedback",children:t.errors.name})]})}),(0,g.jsx)("aside",{className:"col-md-12",children:(0,g.jsxs)("div",{className:"form-group",children:[(0,g.jsx)("label",{htmlFor:"description",children:"Description"}),(0,g.jsx)("textarea",{id:"description",value:t.values.description,onChange:t.handleChange,onBlur:t.handleBlur,className:"form-control form-control-lg",placeholder:"Enter Description"}),(0,g.jsx)("div",{className:"invalid-feedback",children:t.errors.description})]})})]}),(0,g.jsx)("div",{className:"modal-footer d-flex justify-content-end",children:(0,g.jsx)("button",{type:"submit",className:"btn mb-2 btn-primary",children:"Save"})})]})},N=function(e){return d.b.post("/certifications",e)},Z=function(e){var n=e.handleSuccess,i=e.handleClose,t=(0,r.D)({mutationFn:N});return(0,g.jsxs)(f.Z,{show:!0,onHide:i,size:"lg",children:[(0,g.jsxs)(f.Z.Header,{closeButton:!1,children:[(0,g.jsx)(f.Z.Title,{children:"New Certification"}),(0,g.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:i,children:(0,g.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,g.jsx)(f.Z.Body,{children:(0,g.jsx)(C,{initialValues:{name:"",description:"",status:""},onSubmit:function(e){t.mutate(e,{onSuccess:n})}})})]})},y=function(e){return d.b.put("/certifications/".concat(e.id),e)},S=function(e){var n=e.handleSuccess,i=e.handleClose,t=e.id,s=(0,a.a)({queryKey:["certification-details",t],queryFn:function(){return function(e){return d.b.get("/certifications/".concat(e)).then((function(e){return e.data}))}(t)}}),c=s.data,l=(0,r.D)({mutationFn:y});return(0,g.jsx)(g.Fragment,{children:c&&(0,g.jsxs)(f.Z,{show:!0,onHide:i,size:"lg",children:[(0,g.jsxs)(f.Z.Header,{closeButton:!1,children:[(0,g.jsx)(f.Z.Title,{children:"Edit Certification"}),(0,g.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:i,children:(0,g.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,g.jsx)(f.Z.Body,{children:(0,g.jsx)(C,{initialValues:c,onSubmit:function(e){l.mutate((0,j.Z)((0,j.Z)({},e),{},{id:t}),{onSuccess:n})}})})]})})},k=function(e){return d.b.delete("/certifications/".concat(e))},w=function(){var e=(0,s.NL)(),n=(0,c.useState)(0),i=(0,t.Z)(n,2),f=i[0],j=i[1],p=(0,c.useState)(!1),v=(0,t.Z)(p,2),b=v[0],C=v[1],N=(0,c.useState)(!1),y=(0,t.Z)(N,2),w=y[0],A=y[1],P=(0,c.useState)(!1),B=(0,t.Z)(P,2),F=B[0],q=B[1],H=(0,c.useState)(),D=(0,t.Z)(H,2),T=D[0],L=D[1],z=(0,a.a)({queryKey:["certifications",f],queryFn:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return d.b.get("/certifications?pageIndex=".concat(e,"&pageSize=").concat(n)).then((function(e){return e.data}))}(f)},keepPreviousData:!0}),E=z.data,O=z.refetch,V=z.isLoading,I=(0,r.D)({mutationFn:k}),R=function(e){return function(){I.mutate(e,{onSuccess:O,onError:function(e){q(!0),setTimeout((function(){q(!1)}),3e3)}})}};return(0,g.jsxs)(g.Fragment,{children:[F?(0,g.jsxs)(l.Z,{variant:"danger",onClose:function(){return F(!1)},children:[(0,g.jsx)(l.Z.Heading,{children:"Server Error!"}),(0,g.jsx)("p",{children:"Can not delete certification"})]}):null,(0,g.jsx)("div",{className:"row justify-content-center",children:(0,g.jsxs)("div",{className:"col-12",children:[(0,g.jsxs)("div",{className:"row heading-add",children:[(0,g.jsx)("aside",{className:"col-sm-10",children:(0,g.jsx)("h2",{className:"mb-0 page-title",style:{display:"inline"},children:"Certification"})}),(0,g.jsx)("aside",{className:"col-sm-2 add-sec",children:(0,g.jsx)("button",{className:"bttn",onClick:function(){C(!0)},children:"Add"})})]}),(0,g.jsx)("div",{className:"row my-2",children:(0,g.jsx)("div",{className:"col-md-12",children:(0,g.jsx)("div",{className:"card shadow",children:(0,g.jsxs)("div",{className:"card-body",children:[(0,g.jsxs)("table",{className:"table",children:[(0,g.jsx)("thead",{children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{children:"Name"}),(0,g.jsx)("th",{children:"Description"}),(0,g.jsx)("th",{children:"Status"}),(0,g.jsx)("th",{children:"Actions"})]})}),(0,g.jsx)("tbody",{children:V?(0,g.jsx)("tr",{children:(0,g.jsx)("td",{rowSpan:"10",colSpan:"4",children:(0,g.jsx)("div",{className:"text-center py-5",children:(0,g.jsx)(o.Z,{animation:"border"})})})}):E.data.map((function(e){return(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:e.name}),(0,g.jsxs)("td",{children:[" ",e.description]}),(0,g.jsx)("td",{children:(0,g.jsx)(x.q,{code:e.status})}),(0,g.jsxs)("td",{className:"actions",children:[(0,g.jsx)(m.d,{onClick:(n=e.id,function(){L(n),A(!0)})}),(0,g.jsx)(h.p,{onClick:R(e.id)})]})]},e.id);var n}))})]}),V?null:(0,g.jsx)(u.$,{page:f,pageSize:20,data:E,setPage:j})]})})})})]})}),b?(0,g.jsx)(Z,{handleSuccess:function(){C(!1),O()},handleClose:function(){return C(!1)}}):null,w?(0,g.jsx)(S,{handleSuccess:function(){e.invalidateQueries({queryKey:["certification-details",T]}),A(!1),O()},handleClose:function(){return A(!1)},id:T}):null]})}},2469:function(e,n,i){var t=i(1413),s=i(5987),a=i(1694),r=i.n(a),c=i(2791),l=i(239),o=i(9007),d=i(6445),u=i(162),h=i(4418),m=i(473),x=i(7472),f=i(6543),j=i(184),p=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],v=(0,x.Z)("h4");v.displayName="DivStyledAsH4";var g=(0,f.Z)("alert-heading",{Component:v}),b=(0,f.Z)("alert-link",{Component:d.Z}),C={variant:"primary",show:!0,transition:h.Z,closeLabel:"Close alert"},N=c.forwardRef((function(e,n){var i=(0,l.Ch)(e,{show:"onClose"}),a=i.bsPrefix,c=i.show,d=i.closeLabel,x=i.closeVariant,f=i.className,v=i.children,g=i.variant,b=i.onClose,C=i.dismissible,N=i.transition,Z=(0,s.Z)(i,p),y=(0,u.vE)(a,"alert"),S=(0,o.Z)((function(e){b&&b(!1,e)})),k=!0===N?h.Z:N,w=(0,j.jsxs)("div",(0,t.Z)((0,t.Z)({role:"alert"},k?void 0:Z),{},{ref:n,className:r()(f,y,g&&"".concat(y,"-").concat(g),C&&"".concat(y,"-dismissible")),children:[C&&(0,j.jsx)(m.Z,{onClick:S,"aria-label":d,variant:x}),v]}));return k?(0,j.jsx)(k,(0,t.Z)((0,t.Z)({unmountOnExit:!0},Z),{},{ref:void 0,in:c,children:w})):c?w:null}));N.displayName="Alert",N.defaultProps=C,n.Z=Object.assign(N,{Link:b,Heading:g})}}]);
//# sourceMappingURL=920.7fd923b0.chunk.js.map