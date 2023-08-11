(function(){"use strict";var t={664:function(t,e,a){var r=a(144),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],o=a(1),s={},l=(0,o.Z)(s,n,i,!1,null,null,null),c=l.exports,u=a(345),d=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"home"},[e("HelloWorld")],1)},f=[],m=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar",style:{width:t.progressPercentage},attrs:{role:"progressbar"}})]),1===t.currentStep?e("div",{staticClass:"modal-form mx-auto"},[e("div",{staticClass:"window d-flex flex-column"},[e("h2",[t._v(" First, let’s get a quick price estimate ")]),e("div",{staticClass:"modal-form__select mx-auto"},[e("div",{staticClass:"mx-auto d-flex"},[e("div",{staticClass:"w-auto eight"},[e("label",[t._v("Gender")]),e("div",[e("button",{class:{active:"male"===t.formData.gender},on:{click:function(e){return t.setGender("male")}}},[t._v("Male")]),e("button",{class:{active:"female"===t.formData.gender},on:{click:function(e){return t.setGender("female")}}},[t._v("Female")])])]),e("div",{staticClass:"w-auto"},[e("label",[t._v("Nicotine user?")]),e("div",[e("button",{class:{active:"yes"===t.formData.nicotine},on:{click:function(e){return t.setNicotine("yes")}}},[t._v("Yes")]),e("button",{class:{active:"no"===t.formData.nicotine},on:{click:function(e){return t.setNicotine("no")}}},[t._v("No")])])])]),e("div",{staticClass:"modal-form__input d-flex"},[e("div",{staticClass:"w-auto d-flex flex-column left"},[e("label",[t._v("Date of Birth:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.dateOfBirth,expression:"formData.dateOfBirth"}],attrs:{type:"text",placeholder:"MM/DD/YYYY"},domProps:{value:t.formData.dateOfBirth},on:{input:function(e){e.target.composing||t.$set(t.formData,"dateOfBirth",e.target.value)}}})]),e("div",{staticClass:"w-auto d-flex flex-column"},[e("label",[t._v("Zip code:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.zip,expression:"formData.zip"}],attrs:{type:"text",placeholder:"Zip code"},domProps:{value:t.formData.zip},on:{input:function(e){e.target.composing||t.$set(t.formData,"zip",e.target.value)}}})])]),e("div",{staticClass:"modal-form__button w-100 d-flex"},[e("button",{staticClass:"next mx-auto",attrs:{type:"button"},on:{click:t.validateAndNextStep}},[t._v(" See estimate "),e("img",{attrs:{src:a(999),alt:""}})])])])]),t._m(1)]):e("div",{staticClass:"modal-rates mx-auto"},[e("div",{staticClass:"window d-flex flex-column"},[e("div",[e("button",{staticClass:"forvard",on:{click:t.ForvardStep}},[e("img",{attrs:{src:a(524),alt:""}}),t._v("Edit ")])]),e("h2",[t._v(" Here are your estimated monthly rates ")]),t._m(2),e("div",{staticClass:"modal-rates__track d-flex flex-row mx-auto"},[e("div",{staticClass:"modal-rates__track-thumb d-flex flex-column align-items-center"},[t._m(3),e("p",{attrs:{clas:"mx-auto"}},[t._v("$ "+t._s(t.formData.selectedPrice)+", 000")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.selectedPrice,expression:"formData.selectedPrice"}],attrs:{type:"range",min:"50",max:"900",step:"10"},domProps:{value:t.formData.selectedPrice},on:{input:t.updatePrice,__r:function(e){return t.$set(t.formData,"selectedPrice",e.target.value)}}})]),e("div",{staticClass:"d-flex flex-column align-items-center"},[t._m(4),e("p",[t._v(t._s(t.formData.selectedYear)+" Years")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.selectedYear,expression:"formData.selectedYear"}],attrs:{type:"range",min:"1",max:"30",step:"1"},domProps:{value:t.formData.selectedYear},on:{input:t.updateYear,__r:function(e){return t.$set(t.formData,"selectedYear",e.target.value)}}})])]),e("div",{staticClass:"modal-rates__quote d-flex flex-column"},[t._m(5),e("button",{staticClass:"quote mx-auto",attrs:{type:"button"},on:{click:t.submitForm}},[t._v("Personalize quote")])])]),t._m(6)])])},p=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-progress d-flex align-items-center"},[e("img",{attrs:{src:a(574),alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"grey"},[e("h5",[t._v('Pendella Technologies, Inc (DBA PENDELLA TECHNOLOGIES INSURANCE AGENCY in CA & NY) ("Pendella"), a Delaware corporation with its principal place of business in Fort Myers, Florida, is a licensed independent insurance agency. Any insurance policy premium quotes or ranges displayed are non-binding. The final insurance policy premium for any policy is determined by the underwriting insurance company following application.')])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-rates__health d-flex flex-row mx-auto"},[e("div",{staticClass:"blue"},[e("div",{staticClass:"blue-rates text-center"},[e("h4",{staticClass:"mx-auto"},[t._v(" Excellent health "),e("a",{staticClass:"info-link",attrs:{href:""}},[e("img",{attrs:{src:a(759),alt:""}})])]),e("div",{staticClass:"d-flex flex-row justify-content-center align-items-end"},[e("h2",[t._v("$96")]),e("span",[t._v("/mo")])])])]),e("div",{staticClass:"blue"},[e("div",{staticClass:"blue-rates text-center"},[e("h4",{staticClass:"mx-auto"},[t._v(" Good health "),e("a",{staticClass:"info-link",attrs:{href:""}},[e("img",{attrs:{src:a(759),alt:""}})])]),e("div",{staticClass:"d-flex flex-row justify-content-center align-items-end"},[e("h2",[t._v("$128")]),e("span",[t._v("/mo")])])])]),e("div",{staticClass:"blue"},[e("div",{staticClass:"blue-rates text-center"},[e("h4",{staticClass:"mx-auto"},[t._v(" Fair health "),e("a",{staticClass:"info-link",attrs:{href:""}},[e("img",{attrs:{src:a(759),alt:""}})])]),e("div",{staticClass:"d-flex flex-row justify-content-center align-items-end"},[e("h2",[t._v("$198")]),e("span",[t._v("/mo")])])])])])},function(){var t=this,e=t._self._c;return e("h4",{attrs:{clas:"mx-auto d-flex justify-content-center"}},[t._v(" Coverage amount "),e("a",{staticClass:"info-link",attrs:{href:""}},[e("img",{attrs:{src:a(759),alt:""}})])])},function(){var t=this,e=t._self._c;return e("h4",[t._v(" Years of coverage "),e("a",{staticClass:"info-link",attrs:{href:""}},[e("img",{attrs:{src:a(759),alt:""}})]),e("div",{staticClass:"info-window"},[t._v(" Each person’s situation is different - so we always recommend talking to an agent. "),e("br"),t._v("Generally, our recommendation is to cover yourself up to age 65 (ex. If you’re 45, a 20 year term would cover you to 65). "),e("br"),e("br"),e("b",[t._v("Term Lengths:")]),e("br"),e("br"),e("b",[t._v("10 year term")]),t._v(" - Provides the shortest protection, however, will come at the lowest cost. "),e("br"),e("br"),e("b",[t._v("20 year term")]),t._v("- The most common term length purchased, provides adequate protection for most. "),e("br"),e("br"),e("b",[t._v("30 and 40 year terms")]),t._v(" - Provides the longest protection, at a higher cost. ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"mx-auto d-flex flex-row align-items-center"},[e("img",{attrs:{src:a(506),alt:""}}),e("a",{attrs:{href:""}},[t._v("How much do I need?")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"grey"},[e("p",{staticClass:"mx-auto text-center"},[t._v("Please note that all prices quoted are subject to change, including due to underwriting.")]),e("h5",[t._v('Pendella Technologies, Inc (DBA PENDELLA TECHNOLOGIES INSURANCE AGENCY in CA & NY) ("Pendella"), a Delaware corporation with its principal place of business in Fort Myers, Florida, is a licensed independent insurance agency. Any insurance policy premium quotes or ranges displayed are non-binding. The final insurance policy premium for any policy is determined by the underwriting insurance company following application.')])])}],v=(a(755),a(858),{data(){return{currentStep:1,formData:{gender:"",input2:"",nicotine:"",zip:"",dateOfBirth:"",selectedYear:10,selectedPrice:300,blueBackgroundWidth:0,trackGradientStart:"yellow",trackGradientEnd:"yellow"}}},computed:{progressPercentage(){return(this.currentStep-1)/2*100+"%"}},methods:{nextStep(){this.currentStep<=2&&this.currentStep++},ForvardStep(){this.currentStep>1&&this.currentStep--},validateAndNextStep(){""!==this.formData.gender?this.nextStep():console.log("Step 1 validation failed")},updateYear(t){this.formData.selectedYear=parseInt(t.target.value)},updatePrice(t){this.formData.selectedPrice=parseInt(t.target.value)},submitForm(){console.log("Form data submitted:",this.formData),this.nextStep(),this.formData={gender:"",input2:"",nicotine:"",zip:"",dateOfBirth:""}},setGender(t){this.formData.gender=t},setNicotine(t){this.formData.nicotine=t}}}),h=v,g=(0,o.Z)(h,m,p,!1,null,null,null),_=g.exports,b=r.ZP.extend({name:"HomeView",components:{HelloWorld:_}}),x=b,y=(0,o.Z)(x,d,f,!1,null,null,null),C=y.exports;r.ZP.use(u.ZP);var w=[{path:"/",name:"home",component:C},{path:"/about",name:"about",component:function(){return a.e(443).then(a.bind(a,754))}}],D=new u.ZP({routes:w}),P=D;r.ZP.config.productionTip=!1,new r.ZP({router:P,render:function(t){return t(c)}}).$mount("#app")},999:function(t,e,a){t.exports=a.p+"img/ArrowRight.49f1df05.svg"},524:function(t,e,a){t.exports=a.p+"img/Arrowleft.19ea5a85.svg"},759:function(t,e,a){t.exports=a.p+"img/info.1edee6b7.svg"},574:function(t,e,a){t.exports=a.p+"img/logo.f9537c0a.svg"},506:function(t,e,a){t.exports=a.p+"img/wallet.d3d68355.svg"}},e={};function a(r){var n=e[r];if(void 0!==n)return n.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,r,n,i){if(!r){var o=1/0;for(u=0;u<t.length;u++){r=t[u][0],n=t[u][1],i=t[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&i||o>=i)&&Object.keys(a.O).every((function(t){return a.O[t](r[l])}))?r.splice(l--,1):(s=!1,i<o&&(o=i));if(s){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,n,i]}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,r){return a.f[r](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/about.46054913.js"}}(),function(){a.miniCssF=function(t){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="modal:";a.l=function(r,n,i,o){if(t[r])t[r].push(n);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+i){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",e+i),s.src=r),t[r]=[n];var f=function(e,a){s.onerror=s.onload=null,clearTimeout(m);var n=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(t){return t(a)})),e)return e(a)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={143:0};a.f.j=function(e,r){var n=a.o(t,e)?t[e]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise((function(a,r){n=t[e]=[a,r]}));r.push(n[2]=i);var o=a.p+a.u(e),s=new Error,l=function(r){if(a.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,n[1](s)}};a.l(o,l,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,i,o=r[0],s=r[1],l=r[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(l)var u=l(a)}for(e&&e(r);c<o.length;c++)i=o[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(u)},r=self["webpackChunkmodal"]=self["webpackChunkmodal"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(664)}));r=a.O(r)})();
//# sourceMappingURL=app.65611284.js.map