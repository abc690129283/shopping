webpackJsonp([2],{"/4TQ":function(t,e){},"Mqw/":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("wSez"),n={mounted:function(){},methods:{handleLogOut:function(){o.MessageBox.confirm("确定要注销?").then(function(t){localStorage.removeItem("userName"),localStorage.removeItem("userImage"),localStorage.removeItem("password"),localStorage.removeItem("member"),localStorage.removeItem("orderPyment"),window.location.href="http://localhost:8080/my"})}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"function-data"},[a("div",{staticClass:"function-data-header"},[a("router-link",{attrs:{to:"/my"}},[a("span",[a("i",{staticClass:"iconfont",attrs:{slot:"icon"},slot:"icon"},[t._v("")])])]),t._v(" "),a("span",{staticStyle:{"padding-left":"0.2rem"}},[t._v("功能")])],1),t._v(" "),a("div",{staticClass:"personal-data-main"},[a("ul",[a("li",{on:{click:t.handleLogOut}},[a("span",[t._v("账号注销")]),t._v(" "),a("span",{staticStyle:{"margin-left":"11.3rem"}},[a("i",{staticClass:"iconfont",attrs:{slot:"icon"},slot:"icon"},[t._v("")])])])])])])},staticRenderFns:[]};var r=a("VU/8")(n,s,!1,function(t){a("/4TQ")},"data-v-e78baee6",null);e.default=r.exports}});
//# sourceMappingURL=2.d54dc8b99c1f2c6a42f6.js.map