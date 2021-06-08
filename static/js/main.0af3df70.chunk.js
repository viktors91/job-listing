(this["webpackJsonpjob-listing-with-filtering"]=this["webpackJsonpjob-listing-with-filtering"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"id":1,"company":"Photosnap","logo":"./images/photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"./images/manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"./images/account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"./images/myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"./images/loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"Fullstack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"./images/faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"./images/shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"./images/insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"./images/eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"./images/the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')},18:function(e,a,o){},35:function(e,a,o){"use strict";o.r(a);var l=o(0),t=o.n(l),n=o(3),s=o.n(n),i=(o(18),o(13)),c=o(12),r=o(2),u=o(1),d=function(e){var a=e.job,o=a.id,l=a.logo,t=a.company,n=a.position,s=a.postedAt,i=a.location,c=a.contract,r=a.new,d=a.featured,g=e.labels,b=e.onLabelClick;return Object(u.jsxs)("div",{className:"job-container ".concat(1===o||2===o?"border-left":""),children:[Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)("img",{alt:"company-logo",src:"".concat(l)})}),Object(u.jsxs)("div",{className:"job-description",children:[Object(u.jsxs)("div",{className:"job-description__company-row",children:[t,r&&Object(u.jsx)("div",{className:"label label__new",children:"New!"}),d&&Object(u.jsx)("div",{className:"label label__featured",children:"Featured"})]}),Object(u.jsx)("div",{className:"job-description__job-title",children:n}),Object(u.jsxs)("div",{className:"job-description__info-box",children:[Object(u.jsx)("div",{className:"item",children:s}),Object(u.jsx)("div",{className:"item",children:c}),Object(u.jsx)("div",{className:"item",children:i})]})]}),Object(u.jsx)("div",{className:"labels",children:g.map((function(e,a){return Object(u.jsx)("div",{className:"labels__item",onClick:b,children:e},a)}))})]})},g=function(e){var a=e.jobs,o=e.filteredValues,t=e.setFilteredValues,n=Object(l.useMemo)((function(){return a.filter((function(e){var a=[e.role,e.level].concat(Object(r.a)(e.tools),Object(r.a)(e.languages));return o.map((function(e){return e.value})).every((function(e){return a.includes(e)}))}))}),[o,a]);return Object(u.jsx)("div",{className:"job-list-container",children:n.length>0?n.map((function(e,a){return Object(u.jsx)(d,{job:e,labels:[e.role,e.level].concat(Object(r.a)(e.tools),Object(r.a)(e.languages)),onLabelClick:function(e){var a=e.target.innerText;o.map((function(e){return e.value})).includes(a)||t([].concat(Object(r.a)(o),[{value:a,label:a}]))}},a)})):Object(u.jsx)("div",{className:"job-container job-container--empty",children:"No jobs found"})})},b=o(11),v=[{value:"Frontend",label:"Frontend"},{value:"Junior",label:"Junior"},{value:"Senior",label:"Senior"},{value:"React",label:"React"},{value:"Sass",label:"Sass"},{value:"CSS",label:"CSS"},{value:"HTML",label:"HTML"},{value:"JavaScript",label:"JavaScript"},{value:"Fullstack",label:"Fullstack"},{value:"Midweight",label:"Midweight"},{value:"Django",label:"Django"},{value:"Phyton",label:"Phyton"},{value:"Vue",label:"Vue"},{value:"Backend",label:"Backend"},{value:"Ruby",label:"Ruby"},{value:"RoR",label:"RoR"}];var p=function(){var e=Object(l.useState)([]),a=Object(i.a)(e,2),o=a[0],t=a[1];return Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)("header",{}),Object(u.jsxs)("div",{className:"content",children:[o.length>0&&Object(u.jsx)("div",{className:"search-box",children:Object(u.jsx)(c.a,{options:v,className:"custom-select",placeholder:"Filter options\u2026",isClearable:!0,isMulti:!0,classNamePrefix:"custom-select",onChange:function(e){return t(e)},value:o,openMenuOnClick:!1})}),Object(u.jsx)(g,{jobs:b,filteredValues:o,setFilteredValues:t})]})]})};s.a.render(Object(u.jsx)(t.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.0af3df70.chunk.js.map