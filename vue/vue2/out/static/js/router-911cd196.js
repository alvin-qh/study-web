(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{164:function(t,e){},165:function(t,e,n){"use strict";var r=n(168),s=n.n(r),a=n(15),i=n.n(a),o=n(30);function u(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s,a=!0,i=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){i=!0,s=t},f:function(){try{a||null==r.return||r.return()}finally{if(i)throw s}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}i.a.component("breadcrumb",{template:'<nav aria-label="breadcrumb"> \n    <ol class="breadcrumb"> \n        <li v-for="item in previous" class="breadcrumb-item">\n            <a :href="item.href">{{item.name}}</a>\n        </li> \n        <li class="breadcrumb-item active">{{title}}</li> \n    </ol> \n</nav>',data:function(){return{title:document.title}},props:{previous:{type:Array,require:!0,validator:function(t){if(!o.isArray(t))return!1;var e,n=!0,r=u(t);try{for(r.s();!(e=r.n()).done;){var a=e.value;if(!(n="object"===s()(a)&&(a.name&&a.href)))return!1}}catch(t){r.e(t)}finally{r.f()}return n},default:function(){return[]}}}})},175:function(t,e,n){var r={"./af":32,"./af.js":32,"./ar":33,"./ar-dz":34,"./ar-dz.js":34,"./ar-kw":35,"./ar-kw.js":35,"./ar-ly":36,"./ar-ly.js":36,"./ar-ma":37,"./ar-ma.js":37,"./ar-sa":38,"./ar-sa.js":38,"./ar-tn":39,"./ar-tn.js":39,"./ar.js":33,"./az":40,"./az.js":40,"./be":41,"./be.js":41,"./bg":42,"./bg.js":42,"./bm":43,"./bm.js":43,"./bn":44,"./bn.js":44,"./bo":45,"./bo.js":45,"./br":46,"./br.js":46,"./bs":47,"./bs.js":47,"./ca":48,"./ca.js":48,"./cs":49,"./cs.js":49,"./cv":50,"./cv.js":50,"./cy":51,"./cy.js":51,"./da":52,"./da.js":52,"./de":53,"./de-at":54,"./de-at.js":54,"./de-ch":55,"./de-ch.js":55,"./de.js":53,"./dv":56,"./dv.js":56,"./el":57,"./el.js":57,"./en-au":58,"./en-au.js":58,"./en-ca":59,"./en-ca.js":59,"./en-gb":60,"./en-gb.js":60,"./en-ie":61,"./en-ie.js":61,"./en-il":62,"./en-il.js":62,"./en-in":63,"./en-in.js":63,"./en-nz":64,"./en-nz.js":64,"./en-sg":65,"./en-sg.js":65,"./eo":66,"./eo.js":66,"./es":67,"./es-do":68,"./es-do.js":68,"./es-us":69,"./es-us.js":69,"./es.js":67,"./et":70,"./et.js":70,"./eu":71,"./eu.js":71,"./fa":72,"./fa.js":72,"./fi":73,"./fi.js":73,"./fil":74,"./fil.js":74,"./fo":75,"./fo.js":75,"./fr":76,"./fr-ca":77,"./fr-ca.js":77,"./fr-ch":78,"./fr-ch.js":78,"./fr.js":76,"./fy":79,"./fy.js":79,"./ga":80,"./ga.js":80,"./gd":81,"./gd.js":81,"./gl":82,"./gl.js":82,"./gom-deva":83,"./gom-deva.js":83,"./gom-latn":84,"./gom-latn.js":84,"./gu":85,"./gu.js":85,"./he":86,"./he.js":86,"./hi":87,"./hi.js":87,"./hr":88,"./hr.js":88,"./hu":89,"./hu.js":89,"./hy-am":90,"./hy-am.js":90,"./id":91,"./id.js":91,"./is":92,"./is.js":92,"./it":93,"./it-ch":94,"./it-ch.js":94,"./it.js":93,"./ja":95,"./ja.js":95,"./jv":96,"./jv.js":96,"./ka":97,"./ka.js":97,"./kk":98,"./kk.js":98,"./km":99,"./km.js":99,"./kn":100,"./kn.js":100,"./ko":101,"./ko.js":101,"./ku":102,"./ku.js":102,"./ky":103,"./ky.js":103,"./lb":104,"./lb.js":104,"./lo":105,"./lo.js":105,"./lt":106,"./lt.js":106,"./lv":107,"./lv.js":107,"./me":108,"./me.js":108,"./mi":109,"./mi.js":109,"./mk":110,"./mk.js":110,"./ml":111,"./ml.js":111,"./mn":112,"./mn.js":112,"./mr":113,"./mr.js":113,"./ms":114,"./ms-my":115,"./ms-my.js":115,"./ms.js":114,"./mt":116,"./mt.js":116,"./my":117,"./my.js":117,"./nb":118,"./nb.js":118,"./ne":119,"./ne.js":119,"./nl":120,"./nl-be":121,"./nl-be.js":121,"./nl.js":120,"./nn":122,"./nn.js":122,"./oc-lnc":123,"./oc-lnc.js":123,"./pa-in":124,"./pa-in.js":124,"./pl":125,"./pl.js":125,"./pt":126,"./pt-br":127,"./pt-br.js":127,"./pt.js":126,"./ro":128,"./ro.js":128,"./ru":129,"./ru.js":129,"./sd":130,"./sd.js":130,"./se":131,"./se.js":131,"./si":132,"./si.js":132,"./sk":133,"./sk.js":133,"./sl":134,"./sl.js":134,"./sq":135,"./sq.js":135,"./sr":136,"./sr-cyrl":137,"./sr-cyrl.js":137,"./sr.js":136,"./ss":138,"./ss.js":138,"./sv":139,"./sv.js":139,"./sw":140,"./sw.js":140,"./ta":141,"./ta.js":141,"./te":142,"./te.js":142,"./tet":143,"./tet.js":143,"./tg":144,"./tg.js":144,"./th":145,"./th.js":145,"./tl-ph":146,"./tl-ph.js":146,"./tlh":147,"./tlh.js":147,"./tr":148,"./tr.js":148,"./tzl":149,"./tzl.js":149,"./tzm":150,"./tzm-latn":151,"./tzm-latn.js":151,"./tzm.js":150,"./ug-cn":152,"./ug-cn.js":152,"./uk":153,"./uk.js":153,"./ur":154,"./ur.js":154,"./uz":155,"./uz-latn":156,"./uz-latn.js":156,"./uz.js":155,"./vi":157,"./vi.js":157,"./x-pseudo":158,"./x-pseudo.js":158,"./yo":159,"./yo.js":159,"./zh-cn":160,"./zh-cn.js":160,"./zh-hk":161,"./zh-hk.js":161,"./zh-mo":162,"./zh-mo.js":162,"./zh-tw":163,"./zh-tw.js":163};function s(t){var e=a(t);return n(e)}function a(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=a,t.exports=s,s.id=175},211:function(t,e){},215:function(t,e){},22:function(t,e,n){"use strict";n.r(e),n.d(e,"Times",(function(){return a})),n.d(e,"runWith",(function(){return i}));n(164);var r=n(7),s=n.n(r),a={nowString:function(){return s()().format("YYYY年MM月DD日 HH:mm:ss")}};function i(t,e){var n=document.getElementById("app");n&&(n.getAttribute("app:name")===t&&e())}},447:function(t,e){},448:function(t,e,n){"use strict";var r=n(211);n.n(r).a},453:function(t,e,n){"use strict";n.r(e);n(447);var r=n(15),s=n.n(r),a=n(22);n(165);Object(a.runWith)("router.index",(function(){new s.a({el:"#app",data:{links:[{name:"Simple",href:"/www/router/simple.html"},{name:"Page",href:"/www/router/page.html"},{name:"Vue",href:"/www/router/vue.html"}]}})}));n(215);var i=n(30),o={props:{href:{type:String,required:!0},routers:{type:Object,required:!0}},methods:{go:function(t){t.preventDefault(),window.history.pushState(null,this.routers[this.href],this.href),this.$emit("input",this.href)}}},u=n(25),l={components:{VLink:Object(u.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("a",{attrs:{href:this.href},on:{click:this.go}},[this._t("default")],2)}),[],!1,null,null,null).exports},data:function(){return{routers:h,currentLink:window.location.pathname}},methods:{linkStyle:function(t){return this.currentLink===t?["nav-link","active"]:["nav-link"]}},watch:{currentLink:function(){this.$root.currentLink=this.currentLink}}},c=Object(u.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"simple-layout"},[n("header",[n("breadcrumb",{attrs:{previous:[{name:"Home",href:"/www/"},{name:"Router",href:"/www/router/"}]}})],1),t._v(" "),n("main",{staticClass:"container"},[n("ul",{staticClass:"nav nav-tabs",attrs:{role:"tablist"}},t._l(t.routers,(function(e,r){return n("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[n("v-link",{class:t.linkStyle(r),attrs:{href:r,title:e.title,routers:t.routers},model:{value:t.currentLink,callback:function(e){t.currentLink=e},expression:"currentLink"}},[t._v("\n                    "+t._s(e.title)+"\n                ")])],1)})),0),t._v(" "),n("div",{staticClass:"card no-top-border"},[n("div",{staticClass:"card-body"},[t._t("default")],2)])])])}),[],!1,null,null,null).exports,f={title:"Page 1",components:{Layout:c},created:function(){document.title="Page 1"}},j=Object(u.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("layout",[e("div",[this._v("\n        Hello, This is page 1\n    ")])])}),[],!1,null,null,null).exports,m={title:"Page 2",components:{Layout:c},created:function(){document.title="Page 2"}},h={"/www/router/simple/page1":j,"/www/router/simple/page2":Object(u.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("layout",[e("div",[this._v("\n        Hello, This is page 2\n    ")])])}),[],!1,null,null,null).exports},d={title:"404",components:{Layout:c}},p=Object(u.a)(d,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"container-fluid"},[this._v("404, Not found")])}),[],!1,null,null,null).exports;Object(a.runWith)("router.simple",(function(){i.each(h,(function(t,e){return window.history.pushState(null,t.title,e),!1})),new s.a({el:"#app",data:{currentLink:window.location.pathname},computed:{currentView:function(){return h[this.currentLink]||p}},created:function(){var t=this;window.addEventListener("popstate",(function(){t.currentLink=window.location.pathname}))},render:function(t){return t(this.currentView)}})}));var v=n(198),w=n.n(v),b={data:function(){return{routers:z}},computed:{currentLink:function(){return window.location.pathname}},methods:{linkStyle:function(t){return this.currentLink===t?["nav-link","active"]:["nav-link"]}}},g=Object(u.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-layouts"},[n("header",[n("breadcrumb",{attrs:{previous:[{name:"Home",href:"/www/"},{name:"Router",href:"/www/router/"}]}})],1),t._v(" "),n("main",{staticClass:"container"},[n("ul",{staticClass:"nav nav-tabs",attrs:{role:"tablist"}},t._l(t.routers,(function(e,r){return n("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[n("a",{class:t.linkStyle(r),attrs:{href:r,title:e.title}},[t._v(t._s(e.title))])])})),0),t._v(" "),n("div",{staticClass:"card no-top-border"},[n("div",{staticClass:"card-body"},[t._t("default")],2)])])])}),[],!1,null,null,null).exports,y={title:"Page 1",components:{Layout:g},created:function(){document.title="Page 1"}},k=Object(u.a)(y,(function(){var t=this.$createElement,e=this._self._c||t;return e("layout",[e("div",[this._v("\n        Hello, This is page 1\n    ")])])}),[],!1,null,null,null).exports,_={title:"Page 1",components:{Layout:g},created:function(){document.title="Page 1"}},z={"/www/router/page/page1":k,"/www/router/page/page2":Object(u.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("layout",[e("div",[this._v("\n        Hello, This is page 2\n    ")])])}),[],!1,null,null,null).exports},L={title:"Loading",components:{Layout:g},created:function(){document.title=comp.title}},O=(n(448),Object(u.a)(L,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"loading"},[this._v("Loading...")])])}],!1,null,"ef09fc12",null).exports);Object(a.runWith)("router.page",(function(){new s.a({el:"#app",data:{ViewComponent:O},created:function(){var t=this;w()("/www/router/page.html",(function(){return t.ViewComponent=O})),i.each(z,(function(e,n){w()(n,(function(){return t.ViewComponent=e}))})),w()("*",(function(t){return location.href=t.path})),w()(),setTimeout((function(){return w.a.redirect("/www/router/page/page1")}),500)},render:function(t){return t(this.ViewComponent)}})}));var C=n(176),x={created:function(){document.title=this.$router.currentRoute.name}},E={created:function(){document.title=this.$router.currentRoute.name}},$=[{path:"/page1",components:{default:Object(u.a)(x,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    Hello, This is page 1\n")])}),[],!1,null,null,null).exports},name:"Page1"},{path:"/page2",components:{default:Object(u.a)(E,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    Hello, This is page 2\n")])}),[],!1,null,null,null).exports},name:"Page2"}];Object(a.runWith)("router.vue-router",(function(){s.a.use(C.a);var t=new C.a({routes:$,mode:"hash"});new s.a({el:"#app",data:{routes:$},router:t,created:function(){this.is404&&t.replace("/page1")},computed:{is404:function(){return 0===t.currentRoute.matched.length}}})}))}},[[453,0,1]]]);
//# sourceMappingURL=router-911cd196.js.map