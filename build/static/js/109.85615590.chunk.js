"use strict";(self.webpackChunkips_app=self.webpackChunkips_app||[]).push([[109],{2806:function(e,n,s){s.d(n,{b:function(){return t}});var t=s(1243).Z.create({baseURL:"http://13.59.240.218"});t.interceptors.request.use((function(e){e.headers["Content-Type"]="application/json",e.headers.Accept="*/*",e.headers["Access-Control-Allow-Origin"]="*",e.headers["Access-Control-Allow-Headers"]="Origin, X-Requested-With, Content-Type, Accept";var n=localStorage.getItem("token");return n&&(e.headers.Authorization="Bearer "+n),e}),(function(e){return Promise.reject(e)})),t.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))},7883:function(e,n,s){s.d(n,{$:function(){return a}});var t=s(3637),i=s(184),a=function(e){var n=e.page,s=e.pageSize,a=e.data,r=e.setPage;return(0,i.jsxs)("div",{className:"row pagin-sec",children:[(0,i.jsx)("div",{className:"col-sm-12 col-md-5",children:(0,i.jsx)("div",{className:"dataTables_info",role:"status","aria-live":"polite",children:"Showing ".concat(n*s+1," to  ").concat(n*s+a.data.length," of ").concat(a.count," entries")})}),(0,i.jsx)("div",{className:"col-sm-12 col-md-7",style:{display:"flex",justifyContent:"flex-end"},children:(0,i.jsx)(t.Z,{itemClass:"page-item",prevPageText:"Previous",nextPageText:"Next",linkClass:"page-link",activePage:n+1,itemsCountPerPage:s,totalItemsCount:a.count,pageRangeDisplayed:5,hideFirstLastPages:!0,onChange:function(e){return r(e-1)}})})]})}},6359:function(e,n,s){s.d(n,{n:function(){return i}});var t=s(184),i=function(e){var n=e.dob;return(0,t.jsx)("span",{children:new Intl.DateTimeFormat("en-In",{dateStyle:"medium"}).format(new Date(n))})}},7282:function(e,n,s){s.d(n,{p:function(){return c}});var t=s(9439),i=s(2791),a=s(9603),r=s(3360);var l=s.p+"static/media/trash-icon.ee0252a5a11b0d7959d2605f91ec705d.svg",o=s(184),c=function(e){var n=e.onClick,s=(0,i.useState)(!1),c=(0,t.Z)(s,2),d=c[0],u=c[1],h=function(){u(!1)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("img",{className:"action-item",style:{cursor:"pointer"},src:l,onClick:function(){return u(!0)}}),d?(0,o.jsxs)(a.Z,{show:!0,onHide:h,size:"lg",children:[(0,o.jsxs)(a.Z.Header,{closeButton:!1,children:[(0,o.jsx)(a.Z.Title,{children:"Delete"}),(0,o.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:h,children:(0,o.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,o.jsxs)(a.Z.Body,{children:["Are you sure you want to delete?",(0,o.jsxs)("div",{className:"modal-footer d-flex justify-content-end",children:[(0,o.jsx)(r.Z,{variant:"primary",onClick:function(){u(!1),n()},children:" Yes"}),(0,o.jsx)(r.Z,{variant:"danger",onClick:h,children:"No"})]})]})]}):null]})}},2805:function(e,n,s){s.d(n,{d:function(){return a}});s(2791);var t=s.p+"static/media/edit-icon.99f293607452e6df8a5fe12a6b47b2b0.svg",i=s(184),a=function(e){var n=e.onClick;return(0,i.jsx)("img",{style:{cursor:"pointer"},src:t,onClick:n})}},9324:function(e,n,s){s.d(n,{q:function(){return i}});var t=s(184),i=function(e){return 0===e.code?(0,t.jsx)("span",{className:"badge badge-pill badge-danger",children:"InActive"}):1===e.code?(0,t.jsx)("span",{className:"badge badge-pill badge-success",children:"Active"}):2===e.code?(0,t.jsx)("span",{className:"badge badge-pill badge-warning",children:"Hold"}):void 0}},1109:function(e,n,s){s.r(n),s.d(n,{Bookings:function(){return w}});var t=s(9439),i=s(2917),a=s(3418),r=s(2791),l=s(2469),o=s(4849),c=s(2806),d=s(7883),u=s(6359),h=(s(7282),s(2805),s(9324),s(5987)),m=s(9603),p=s(1413),v=s(5705),f=s(7734),x=s(8007),j=(s(8639),s(9513)),g=s.n(j),b=s(184),N=(0,x.Ry)({serviceId:(0,x.Z_)().required("Select Service")}),Z=function(e){var n=e.onSubmit,s=e.initialValues,i=(0,r.useState)([]),a=(0,t.Z)(i,2),l=a[0],o=a[1],d=(0,r.useState)([]),u=(0,t.Z)(d,2),h=u[0],m=u[1],x=(0,r.useState)([]),j=(0,t.Z)(x,2),Z=j[0],C=j[1];(0,r.useEffect)((function(){c.b.get("/services/name").then((function(e){return e.data.map((function(e){return{id:e.id,label:"".concat(e.name," ($").concat(e.defaultPrice,")")}}))})).then((function(e){o(e),s.servicesId&&y.setFieldValue("services",e.filter((function(e){return e.id===s.servicesId})))}))}),[]),(0,r.useEffect)((function(){c.b.get("/priests/designation").then((function(e){return e.data.map((function(e){var n;return{id:e.id,label:null===e||void 0===e||null===(n=e.user)||void 0===n?void 0:n.userName}}))})).then((function(e){m(e),s.priestId&&y.setFieldValue("priests",e.filter((function(e){return e.id===s.priestId})))}))}),[]),(0,r.useEffect)((function(){c.b.get("/temples/name").then((function(e){return e.data.map((function(e){return{id:e.id,label:e.name}}))})).then((function(e){C(e),s.templeId&&y.setFieldValue("temples",e.filter((function(e){return e.id===s.templeId})))}))}),[]);var y=(0,v.TA)({initialValues:s,onSubmit:function(e,s){(0,s.validateForm)(e).then((function(s){e.status?n((0,p.Z)((0,p.Z)({},e),{},{status:parseInt(e.status)})):n(e)}))},validationSchema:N,validateOnBlur:!0,validateOnChange:!1});return(0,b.jsxs)("form",{onSubmit:y.handleSubmit,children:[(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)("aside",{className:"col-md-6",children:(0,b.jsxs)("div",{className:"form-group",children:[(0,b.jsx)("label",{htmlFor:"yearOfEstablishment",children:"Booking Date"}),(0,b.jsx)(g(),{selected:y.values.bookingDate?new Date(y.values.bookingDate):null,onChange:function(e){y.setFieldValue("bookingDate",e),y.setFieldTouched("bookingDate")},className:"form-control"})]})}),(0,b.jsx)("aside",{className:"col-md-6",children:(0,b.jsxs)("div",{className:"form-group",children:[(0,b.jsx)("label",{htmlFor:"cityId",children:"Service"}),(0,b.jsx)(f.pY,{selected:y.values.services,id:"servicesId",options:l,onChange:function(e){(null===e||void 0===e?void 0:e.length)>0?(y.setFieldValue("servicesId",e[0].id),y.setFieldValue("services",e)):(y.setFieldValue("servicesId",""),y.setFieldValue("services",[]))},placeholder:"Choose a service..."})]})}),(0,b.jsx)("aside",{className:"col-md-6",children:(0,b.jsxs)("div",{className:"form-group",children:[(0,b.jsx)("label",{htmlFor:"cityId",children:"Priest"}),(0,b.jsx)(f.pY,{selected:y.values.priests,id:"priestId",options:h,onChange:function(e){(null===e||void 0===e?void 0:e.length)>0?(y.setFieldValue("priestId",e[0].id),y.setFieldValue("priests",e)):(y.setFieldValue("priestId",""),y.setFieldValue("priests",[]))},placeholder:"Choose a priest..."})]})}),(0,b.jsx)("aside",{className:"col-md-6",children:(0,b.jsxs)("div",{className:"form-group",children:[(0,b.jsx)("label",{htmlFor:"cityId",children:"Temple"}),(0,b.jsx)(f.pY,{selected:y.values.temples,id:"templeId",options:Z,onChange:function(e){(null===e||void 0===e?void 0:e.length)>0?(y.setFieldValue("templeId",e[0].id),y.setFieldValue("temples",e)):(y.setFieldValue("templeId",""),y.setFieldValue("temples",[]))},placeholder:"Choose a temple..."})]})})]}),(0,b.jsx)("div",{className:"modal-footer d-flex justify-content-end",children:(0,b.jsx)("button",{type:"submit",className:"btn mb-2 btn-primary",children:"Save"})})]})},C=["temples","services","priests"],y=function(e){return c.b.post("/bookings",e)},k=function(e){var n=e.handleSuccess,s=e.handleClose,t=(0,a.D)({mutationFn:y});return(0,b.jsxs)(m.Z,{show:!0,onHide:s,size:"lg",children:[(0,b.jsxs)(m.Z.Header,{closeButton:!1,children:[(0,b.jsx)(m.Z.Title,{children:"New Order"}),(0,b.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:s,children:(0,b.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,b.jsx)(m.Z.Body,{children:(0,b.jsx)(Z,{initialValues:{services:[],priests:[],bookingDate:"",temples:[]},onSubmit:function(e){e.temples,e.services,e.priests;var s=(0,h.Z)(e,C);t.mutate(s,{onSuccess:n})}})})]})},S=function(e){return c.b.put("/bookings/".concat(e.id),e)},F=function(e){var n=e.handleSuccess,s=e.handleClose,t=e.id,r=(0,i.a)({queryKey:["bookinng-details",t],queryFn:function(){return function(e){return c.b.get("/bookings/".concat(e)).then((function(e){return e.data}))}(t)}}),l=r.data,o=(0,a.D)({mutationFn:S});return(0,b.jsx)(b.Fragment,{children:l&&(0,b.jsxs)(m.Z,{show:!0,onHide:s,size:"lg",children:[(0,b.jsxs)(m.Z.Header,{closeButton:!1,children:[(0,b.jsx)(m.Z.Title,{children:"Edit Booking"}),(0,b.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:s,children:(0,b.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,b.jsx)(m.Z.Body,{children:(0,b.jsx)(Z,{initialValues:l,onSubmit:function(e){o.mutate((0,p.Z)((0,p.Z)({},e),{},{id:t}),{onSuccess:n})}})})]})})},I=function(e){return c.b.delete("/bookings/".concat(e))},w=function(){var e=(0,r.useState)(0),n=(0,t.Z)(e,2),s=n[0],h=n[1],m=(0,r.useState)(!1),p=(0,t.Z)(m,2),v=p[0],f=p[1],x=(0,r.useState)(!1),j=(0,t.Z)(x,2),g=j[0],N=j[1],Z=(0,r.useState)(!1),C=(0,t.Z)(Z,2),y=C[0],S=(C[1],(0,r.useState)()),w=(0,t.Z)(S,2),V=w[0],D=(w[1],(0,i.a)({queryKey:["bookings",s],queryFn:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return c.b.get("/bookings?pageIndex=".concat(e,"&pageSize=").concat(n)).then((function(e){return e.data}))}(s)},keepPreviousData:!0})),P=D.data,A=D.refetch,B=D.isLoading;(0,a.D)({mutationFn:I});return(0,b.jsxs)(b.Fragment,{children:[y?(0,b.jsxs)(l.Z,{variant:"danger",onClose:function(){return y(!1)},children:[(0,b.jsx)(l.Z.Heading,{children:"Server Error!"}),(0,b.jsx)("p",{children:"Can not delete service"})]}):null,(0,b.jsx)("div",{className:"row justify-content-center",children:(0,b.jsxs)("div",{className:"col-12",children:[(0,b.jsx)("div",{className:"row heading-add",children:(0,b.jsx)("aside",{className:"col-sm-10",children:(0,b.jsx)("h2",{className:"mb-0 page-title",children:"Orders"})})}),(0,b.jsx)("div",{className:"row my-2",children:(0,b.jsx)("div",{className:"col-md-12",children:(0,b.jsx)("div",{className:"card shadow",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsxs)("table",{className:"table",children:[(0,b.jsx)("thead",{children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{children:"Order ID"}),(0,b.jsx)("th",{children:"Customer"}),(0,b.jsx)("th",{children:"Service Name"}),(0,b.jsx)("th",{children:"Priest"}),(0,b.jsx)("th",{children:"Temple"}),(0,b.jsx)("th",{children:"Booking Date"}),(0,b.jsx)("th",{children:"Order Value"}),(0,b.jsx)("th",{children:"Booking Status"})]})}),(0,b.jsx)("tbody",{children:B?(0,b.jsx)("tr",{children:(0,b.jsx)("td",{rowSpan:"10",colSpan:"8",children:(0,b.jsx)("div",{className:"text-center py-5",children:(0,b.jsx)(o.Z,{animation:"border"})})})}):P.data.map((function(e){var n,s,t,i,a,r;return(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{children:e.id}),(0,b.jsx)("td",{children:null===(n=e.user)||void 0===n?void 0:n.userName}),(0,b.jsxs)("td",{children:[" ",null===(s=e.serviceResponse)||void 0===s?void 0:s.name]}),(0,b.jsxs)("td",{children:[" ",null===(t=e.priestResponse)||void 0===t||null===(i=t.user)||void 0===i?void 0:i.userName]}),(0,b.jsxs)("td",{children:[" ",null===(a=e.templeResponse)||void 0===a?void 0:a.user.userName]}),(0,b.jsx)("td",{children:(0,b.jsx)(u.n,{dob:e.bookingDate})}),(0,b.jsxs)("td",{children:[" $",null===(r=e.serviceResponse)||void 0===r?void 0:r.defaultPrice]}),(0,b.jsxs)("td",{children:[" ",e.bookingStatus]})]},e.id)}))})]}),B?null:(0,b.jsx)(d.$,{page:s,pageSize:20,data:P,setPage:h})]})})})})]})}),v?(0,b.jsx)(k,{handleSuccess:function(){f(!1),A()},handleClose:function(){return f(!1)}}):null,g?(0,b.jsx)(F,{handleSuccess:function(){N(!1),A()},handleClose:function(){return N(!1)},id:V}):null]})}},2469:function(e,n,s){var t=s(1413),i=s(5987),a=s(1694),r=s.n(a),l=s(2791),o=s(239),c=s(9007),d=s(6445),u=s(162),h=s(4418),m=s(473),p=s(7472),v=s(6543),f=s(184),x=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],j=(0,p.Z)("h4");j.displayName="DivStyledAsH4";var g=(0,v.Z)("alert-heading",{Component:j}),b=(0,v.Z)("alert-link",{Component:d.Z}),N={variant:"primary",show:!0,transition:h.Z,closeLabel:"Close alert"},Z=l.forwardRef((function(e,n){var s=(0,o.Ch)(e,{show:"onClose"}),a=s.bsPrefix,l=s.show,d=s.closeLabel,p=s.closeVariant,v=s.className,j=s.children,g=s.variant,b=s.onClose,N=s.dismissible,Z=s.transition,C=(0,i.Z)(s,x),y=(0,u.vE)(a,"alert"),k=(0,c.Z)((function(e){b&&b(!1,e)})),S=!0===Z?h.Z:Z,F=(0,f.jsxs)("div",(0,t.Z)((0,t.Z)({role:"alert"},S?void 0:C),{},{ref:n,className:r()(v,y,g&&"".concat(y,"-").concat(g),N&&"".concat(y,"-dismissible")),children:[N&&(0,f.jsx)(m.Z,{onClick:k,"aria-label":d,variant:p}),j]}));return S?(0,f.jsx)(S,(0,t.Z)((0,t.Z)({unmountOnExit:!0},C),{},{ref:void 0,in:l,children:F})):l?F:null}));Z.displayName="Alert",Z.defaultProps=N,n.Z=Object.assign(Z,{Link:b,Heading:g})}}]);
//# sourceMappingURL=109.85615590.chunk.js.map