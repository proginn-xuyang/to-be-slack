(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0e8be2"],{"8b24":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"q-pa-lg"},[s("q-list",{staticClass:"full-width",attrs:{bordered:"",separator:""}},t._l(t.postList,function(e){return s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.index,style:"color: "+(t.readedLinks.includes(e.url)?"gray":"unset"),attrs:{clickable:"",tag:"a",target:"_blank",href:e.url},on:{click:function(s){return t.clickHandler(e)}}},[t._v("\n      "+t._s(e.title)+"\n    ")])}),1)],1)},a=[],i=(s("6762"),s("2fdb"),s("758b")),r={name:"PageIndex",data:function(){return{postList:[],readedLinks:JSON.parse(localStorage.getItem("slackReadedLinks"))||[]}},watch:{$route:function(){this.getPostList()}},methods:{getPostList:function(){var t=this;i["a"].get("/GetTypeInfo?id=".concat(this.$route.query.id)).then(function(e){t.$set(t,"postList",e.data.Data)})},clickHandler:function(t){this.readedLinks.includes(t.url)||this.readedLinks.push(t.url),localStorage.setItem("slackReadedLinks",JSON.stringify(this.readedLinks))}},created:function(){this.getPostList()}},l=r,c=s("2877"),d=Object(c["a"])(l,n,a,!1,null,null,null);e["default"]=d.exports}}]);