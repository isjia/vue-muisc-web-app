(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(t,a,s){"use strict";s.r(a);var n=s(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"第3章-页面骨架开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第3章-页面骨架开发","aria-hidden":"true"}},[t._v("#")]),t._v(" 第3章 页面骨架开发")]),s("h2",{attrs:{id:"_3-1-页面入口-header-组件的编写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-页面入口-header-组件的编写","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.1 页面入口+header 组件的编写")]),s("h3",{attrs:{id:"index-html-中增加meta-info"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#index-html-中增加meta-info","aria-hidden":"true"}},[t._v("#")]),t._v(" index.html 中增加meta info")]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width,initial-scale=1.0"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"package-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-json","aria-hidden":"true"}},[t._v("#")]),t._v(" package.json")]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" babel-runtime --save "),s("span",{attrs:{class:"token comment"}},[t._v("# es语法转移，无需引入代码中")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" fastclick --save "),s("span",{attrs:{class:"token comment"}},[t._v("# 解决移动端点击2ms延时问题，main.js 中import")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" babel-polyfill -D "),s("span",{attrs:{class:"token comment"}},[t._v("# es6 api的转译，main.js 中import")]),t._v("\n")])])]),s("h3",{attrs:{id:"使用-m-header-component"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-m-header-component","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 m-header component")]),s("ol",[s("li",[t._v("js中引入")]),s("li",[t._v("js中注册")]),s("li",[t._v("HTML中使用")])]),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- step 3 --\x3e")]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("m-header")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("m-header")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/ecmascript-6"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" MHeader "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'@/components/m-header/m-header'")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// step 1")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    MHeader "),s("span",{attrs:{class:"token comment"}},[t._v("// step 2")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("scoped")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("lang")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylus"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet/stylus"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token style language-css"}},[t._v("\n\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"_3-2-路由配置-tab-顶导组件开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-路由配置-tab-顶导组件开发","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.2 路由配置+ tab 顶导组件开发")]),s("h3",{attrs:{id:"使用-vue-router"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-vue-router","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 Vue Router")]),s("ol",[s("li",[t._v("编写路由 "),s("code",[t._v("router/index.js")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Router "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'vue-router'")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Recommend "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'@/components/recommend/recommend'")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Rank "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'@/components/rank/rank'")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Search "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'@/components/search/search'")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Singer "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'@/components/singer/singer'")]),t._v("\n\nVue"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("use")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Router"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Router")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  routes"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      path"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Root'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      redirect"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/recommend'")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      path"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/recommend'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Recommend'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      component"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Recommend\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      path"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/rank'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Rank'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      component"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Rank\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      path"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/search'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Search'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      component"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Search\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      path"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/singer'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Singer'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      component"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Singer\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("挂载路由 "),s("code",[t._v("main.js")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" router "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'./router/index'")]),t._v("\n"),s("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("/* eslint-disable no-new */")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'#app'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  router"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 挂载路由")]),t._v("\n  render"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" h "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("h")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("路由导航")])]),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tab"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tab-item"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("tag")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("div"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("to")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/recommend"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tab-link"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("推荐"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tab-item"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("tag")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("div"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("to")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/singer"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tab-link"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("歌手"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tab-item"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("tag")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("div"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("to")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/rank"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tab-link"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("排行"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tab-item"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("tag")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("div"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("to")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/search"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tab-link"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("搜索"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/ecmascript-6"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("scoped")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("lang")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylus"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet/stylus"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token style language-css"}},[t._v("\n@import "),s("span",{attrs:{class:"token string"}},[t._v('"~@/common/stylus/variable"')]),t._v("\n  .tab\n    "),s("span",{attrs:{class:"token property"}},[t._v("display")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex\n    "),s("span",{attrs:{class:"token property"}},[t._v("height")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 44px\n    "),s("span",{attrs:{class:"token property"}},[t._v("line-height")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 44px\n    "),s("span",{attrs:{class:"token property"}},[t._v("font-size")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $font-size-medium\n    .tab-item\n      "),s("span",{attrs:{class:"token property"}},[t._v("flex")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1\n      "),s("span",{attrs:{class:"token property"}},[t._v("text-align")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center\n      .tab-link\n        "),s("span",{attrs:{class:"token property"}},[t._v("padding-bottom")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px\n        "),s("span",{attrs:{class:"token property"}},[t._v("color")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $color-text-l\n      &.router-link-active\n        .tab-link\n          "),s("span",{attrs:{class:"token property"}},[t._v("color")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $color-theme\n          "),s("span",{attrs:{class:"token property"}},[t._v("border-bottom")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px solid $color-theme\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("渲染 router view")])]),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("m-header")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("m-header")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tab")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tab")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-view")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-view")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/ecmascript-6"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" MHeader "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'@/components/m-header/m-header'")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Tab "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'@/components/tab/tab'")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    MHeader"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Tab\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"根路由默认跳转"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#根路由默认跳转","aria-hidden":"true"}},[t._v("#")]),t._v(" 根路由默认跳转")]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Root'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  redirect"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/recommend'")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])])}],!1,null,null,null);a.default=o.exports}}]);