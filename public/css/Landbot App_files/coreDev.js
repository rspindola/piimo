!function(){if(window.AutopilotAnywhere){var jQueryContainer={jQuery:window.jQuery||window.lp&&window.lp.jQuery||window.$};window.AutopilotAnywhere.init=function(){var e;if(!this._inited)return e=this.anywhereConfig.devmode,this._inited=!0,this.initTime=this.now(),null==this._runQueue&&(this._runQueue=[]),e||this.startFormScanLoop(),e||this._runQueue.push(["visit"]),this.startWatchingLocationHref(),/MSIE [89]\./.test(navigator.userAgent)||this.listenForHeadsupPostMessage(),this.processRunQueue()},window.AutopilotAnywhere.now=function(){return("function"==typeof Date.now?Date.now():void 0)||(new Date).getTime()},window.AutopilotAnywhere.keys=function(e){var t,n;if("undefined"!=typeof Object&&null!==Object?Object.keys:void 0)return Object.keys(e);n=[];for(t in e)n.push(t);return n},window.AutopilotAnywhere.isArray=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},window.AutopilotAnywhere.encodeObject=function(e){var t,n,r,o,i,a,s,u,l,d,c,h,p;for(d=[e],t="",l={COMMA:{},ENDARRAY:{},ENDOBJECT:{},KVSEP:{}},r=0;d.length>0;)if(h=d.pop(),h===l.COMMA)t+=",";else if(h===l.ENDARRAY)t+="]";else if(h===l.ENDOBJECT)t+="}";else if(h===l.KVSEP)t+=":";else if(null===h||"boolean"==(u=typeof h)||"number"===u)t+=""+h;else if(null==h)t+="null";else if("string"==typeof h)t+='"'+h.replace(/(\\|")/g,"\\$1").replace(/\n/g,"\\n").replace(/\r/g,"")+'"';else if(h instanceof Array)for(t+="[",d.push(l.ENDARRAY),n=o=h.length-1;o>=0;n=o+=-1)c=h[n],d.push(c),0!==n&&d.push(l.COMMA);else{t+="{",d.push(l.ENDOBJECT),a=[];for(p in h)a.push(p);for(n=s=a.length-1;s>=0;n=s+=-1)i=a[n],d.push(h[i]),d.push(l.KVSEP),d.push(i),0!==n&&d.push(l.COMMA)}return t},window.AutopilotAnywhere.run=function(){var e,t,n,r,o;if(r=arguments[0],n=this[r],"function"==typeof n){for(t=[],o=1;;){if(e=arguments[o++],null==e)break;t.push(e)}return n.apply(this,t)}},window.AutopilotAnywhere.argListToArray=function(e){var t,n;for(t=[],n=0;null!=e[n];)t.push(e[n++]);return t},window.AutopilotAnywhere.processRunQueue=function(){var e,t,n;if(this._runQueue&&!this._blockRunQueue){if(!(e=this._runQueue.shift()))return;return t=this.argListToArray(e),"associate"===t[0]&&"function"!==t[t.length-1]&&t.push(function(){}),"function"==typeof t[t.length-1]&&(n=t[t.length-1],this._blockRunQueue=t,t[t.length-1]=function(e){return function(){var t;return e._blockRunQueue=null,t=e.argListToArray(arguments),n.apply(null,t),e.processRunQueue()}}(this)),this.run.apply(this,t),setTimeout(function(e){return function(){return e.processRunQueue()}}(this),1)}},window.AutopilotAnywhere.associate=function(e,t){return this.sendEvent({type:"associateSession",associate:e},function(e){return function(n,r){if(n){if(t)return t(n);if(console&&console.log)return console.log("AutopilotAnywhere.associate error",n)}else if((null!=r?r.sessionId:void 0)&&(e.sessionId=r.sessionId),e.headsupCheck(),t)return t()}}(this))},window.AutopilotAnywhere.getAnywhereUrl=function(){return this.sessionId?this.anywhereBaseUrl+"/"+this.sessionId:this.anywhereBaseUrl},window.AutopilotAnywhere.sendEvent=function(e,t){var n,r;return null==e&&(e={}),window.autopilotAnywhereScanOnly?"function"==typeof t?t(Error("in scan only mode")):void 0:/MSIE [89]\./.test("undefined"!=typeof navigator&&null!==navigator?navigator.userAgent:void 0)?this.sendEventLegacyBrowser(e,t):window.XMLHttpRequest?("proactiveSubscribe"!==(n=null!=e?e.type:void 0)&&"proactiveReply"!==n||!this.gdpr||"function"==typeof this.GDPRCookieOptIn&&this.GDPRCookieOptIn(),r=new XMLHttpRequest,r.open("PUT",this.getAnywhereUrl(),!0),t&&(r.onreadystatechange=function(){var e,n;if(4===r.readyState){if(200!==r.status)return t(Error(r.status+": "+r.responseText));try{n=JSON.parse(r.responseText)}catch(o){return e=o,t(e)}return t(null,n)}}),r.send(this.encodeObject(e))):"function"==typeof t?t(Error("missing XMLHttpRequest")):void 0},window.AutopilotAnywhere.sendEventLegacyBrowser=function(e,t){var n,r,o,i;if(!window.XDomainRequest)return"function"==typeof t?t(Error("missing XDomainRequest")):void 0;if(o=new window.XDomainRequest,o.timeout=0,o.onprogress=o.ontimeout=function(){},o.onload=function(){var e,n;if(t){if(""===o.responseText)return t(null,"");try{n=JSON.parse(o.responseText)}catch(r){return e=r,t(Error(o.responseText))}return t(null,n)}},o.onerror=function(e){return t?t(e||Error("unknown XDomainRequest error")):void 0},r=document.location.href.match(/^(https?:)/))return i=this.getAnywhereUrl()+"/legacybrowser",i=i.replace(/^https?:/,r[1]),o.open("POST",i,!0),o.send(this.encodeObject(e));if(n=Error("current location not http or https"),t)return t(n);throw n},window.AutopilotAnywhere.serializeForm=function(e,t){var n,r,o,i,a,s,u,l,d,c,h,p,f,m,g,y,w,v,b,A,F,T,S,I,C;for(p=jQueryContainer.jQuery(e).find("TEXTAREA[id]:not([name])"),p.each(function(){return jQueryContainer.jQuery(this).attr("name",jQueryContainer.jQuery(this).attr("id"))}),C=["year","month","day"],r=["hour","minute","second","ampm"],g=t.fields,i=0,s=g.length;s>i;i++){if(n=g[i],"date"===n.type)for(y=n.subfields,o=a=0,u=y.length;u>a;o=++a)S=y[o],S.originalName=S.name,S.name=n.name+"["+C[o]+"]";if("time"===n.type)for(w=n.subfields,o=h=0,l=w.length;l>h;o=++h)S=w[o],S.originalName=S.name,S.name=n.name+"["+r[o]+"]";if("phone"===n.type){v=n.subfields;for(I in v)S=v[I],S&&(S.originalName=S.name,S.name=n.name+"["+I+"]")}"currency"!==n.type&&"number"!==n.type||n.subfield&&(n.subfield.originalName=n.subfield.name,n.subfield.name=n.name)}for(T=e.serialize(),p.each(function(){return jQueryContainer.jQuery(this).removeAttr("name")}),b=t.fields,f=0,d=b.length;d>f;f++){if(n=b[f],"date"===n.type||"time"===n.type)for(A=n.subfields,m=0,c=A.length;c>m;m++)S=A[m],S.name=S.originalName;if("phone"===n.type){F=n.subfields;for(I in F)S=F[I],S&&(S.name=S.originalName)}"currency"!==n.type&&"number"!==n.type||n.subfield&&(n.subfield.name=n.subfield.originalName)}return T},window.AutopilotAnywhere.FV2SendSerializedForm=function(e,t){var n;return/MSIE [89]\./.test("undefined"!=typeof navigator&&null!==navigator?navigator.userAgent:void 0)?this.FV2SendSerializedFormLegacyBrowser(e,t):window.XMLHttpRequest?(n=function(n){return function(){var r;return r=new window.XMLHttpRequest,r.open("POST",n.getAnywhereUrl()+"?optin=1",!0),r.onreadystatechange=function(){return 4===r.readyState?t(200!==r.status?Error(r.status+": "+r.responseText):null):void 0},r.send(e)}}(this),this.gdpr?(console.log("sending V2 form (gdpr mode)"),"function"==typeof this.GDPRCookieOptIn&&this.GDPRCookieOptIn(),setTimeout(function(e){return function(){return n()}}(this),1100)):(console.log("sending V2 form (non-gdpr mode)"),n())):t(Error("Missing XMLHttpRequest"))},window.AutopilotAnywhere.FV2SendSerializedFormLegacyBrowser=function(e,t){var n,r,o;return window.XDomainRequest?(r=new window.XDomainRequest,r.timeout=0,r.onprogress=r.ontimeout=function(){},r.onload=function(){return""===r.responseText?t(null,""):t(Error(r.responseText))},r.onerror=function(e){return t(e||Error("unknown XDomainRequest error"))},void((n=document.location.href.match(/^(https?:)/))?(o=this.getAnywhereUrl(),o=o.replace(/^https?:/,n[1]),this.gdpr?("function"==typeof this.GDPRCookieOptIn&&this.GDPRCookieOptIn(),setTimeout(function(){return console.log("sending V2 form legacy (gdpr mode)"),r.open("POST",o,!0),r.send(e)},1100)):(console.log("sending V2 form legacy (non-gdpr mode)"),r.open("POST",o,!0),r.send(e))):t(Error("current location not http or https")))):t(Error("missing XDomainRequest"))},window.AutopilotAnywhere.paramlessHref=function(){var e;return null!=(e=document.location.href.match(/^(.*?)(#|\?|$)/))?e[1]:void 0},window.AutopilotAnywhere.queryParameters=function(){var e,t,n,r,o;for(r=null!=(o=document.location.href.match(/\?(.*?)(#|$)/))?o[1]:void 0,e=/(.*?)(?:\=(.*?))?(&|$)/g,n={};;){if(t=e.exec(r),!t[1])break;n[t[1]]=t[2]}return n},window.AutopilotAnywhere.utmQueryParameters=function(){var e,t,n,r,o,i;for(i={},r=this.queryParameters(),o=["utm_campaign","utm_source","utm_medium","utm_term","utm_content"],e=0,n=o.length;n>e;e++)t=o[e],null!=r[t]&&(i[t]=r[t]);return i},window.AutopilotAnywhere.visit=function(){var e;return e=this.utmQueryParameters(),url=this.anywhereConfig.devmode?document.location.href:this.paramlessHref(),this.sendEvent({type:"visit",url:url,utm:e})},window.AutopilotAnywhere.getFormVersions=function(e){var t,n,r,o,i,a,s,u;for(r=[],u={},o=0,i=e.length;i>o;o++)t=e[o],n=(null!=(a=t.hash.match(/^(\d+)_/))?a[1]:void 0)||1,"string"==typeof n&&(n=parseInt(n)),s=n,u[s]||(u[s]=!0,r.push(s));return r},window.AutopilotAnywhere.forms=function(e){var t,n,r,o,i,a,s,u,l,d,c,h,p,f,m,g,y,w,v;if(null==e&&(e={}),this.populateSessionIdFields(),m=this.now(),(o=this.configuredForms)&&null!=o.length&&o.length>0){for(t=this,w=jQueryContainer.jQuery(".sqs-layout").length>0,i=document.location.href.toLowerCase().replace(/^https?:/,"").replace(/^\/\/www\./,"//").replace(/[\?#].*$/,"").replace(/\/$/,""),l=this.getFormVersions(o),y=t.formScan(window,{hashVersions:l}),s=function(n,r,o){var a,s,u,l,d,c,h,p,f,g,w,v,b,A,F,T;if(r){if(n.formOnMultiplePages||i===o)for(null==t.trackedForms&&(t.trackedForms={}),t.trackedForms[n.hash]=r,v=r.elements,f=0,w=v.length;w>f;f++)c=v[f],d=jQueryContainer.jQuery(c),d.attr("data-autopilot-anywhere")||(a={origmethod:d.attr("method"),origaction:d.attr("action"),tfid:n.id},function(e,o){return e.attr("data-autopilot-anywhere",n.id),/MSIE [89]\./.test(navigator.userAgent)&&(n.useVersion=2),2===parseInt(n.useVersion)?t.FV2TrackForm(e,n,r,o):t.FV1TrackForm(e,n,r,o)}(d,a));else null==t.notTrackingForms&&(t.notTrackingForms={}),null==(s=t.notTrackingForms)[m]&&(s[m]={}),t.notTrackingForms[m][n.hash]="url mismatch '"+i+"' not '"+o+"'";if(i===o)return null==t.presentForms&&(t.presentForms={}),t.presentForms[n.hash]={id:n.id,version:n.useVersion||1}}else if(null==t.notTrackingForms&&(t.notTrackingForms={}),null==(u=t.notTrackingForms)[m]&&(u[m]={}),t.notTrackingForms[m][n.hash]="form hash "+n.hash+" not found on page",i===o&&e.finalScan&&!(null!=(b=t.presentForms)?b[n.hash]:void 0)&&!t.formPresenceCheckDisabled){g={};for(h in y){l=y[h],g[h]={};for(p in l)T=l[p],"elements"!==p&&(g[h][p]=T)}return t.sendEvent({type:"formerror",hash:n.hash,id:n.id,formMissing:!0,message:"form missing",presentForms:t.presentForms,notTrackingForms:t.notTrackingForms,latestScan:g,userAgent:null!=(A=window.navigator)?A.userAgent:void 0,href:null!=(F=window.location)?F.href:void 0})}},c=0,h=o.length;h>c;c++)n=o[c],g=y[n.hash],r=n.url.toLowerCase().replace(/^https?:/,"").replace(/^\/\/www\./,"//").replace(/[\?#].*$/,"").replace(/\/$/,""),s(n,g,r);if(e.finalScan&&t.presentForms&&!t.formPresenceCheckDisabled){p=t.presentForms,f=[];for(u in p)a=p[u],d=a.id,v=a.version,f.push(t.sendEvent({type:"formpresent",hash:u,id:d,version:v}));return f}}},window.AutopilotAnywhere.FV1TrackForm=function(form,c,scannedForm,autopilotAnywhereMeta){var _t,existingOnClick,existingOnsubmit,mFormSubmit,mf,processForm,ref1,ref2,ref3,ref4,ref5,ref6,ref7,ref8,ref9;return _t=this,existingOnsubmit=form[0].onsubmit,mFormSubmit=null!=(ref1=form.find("#mktFrmSubmit"))?ref1[0]:void 0,mf=!!mFormSubmit,mf&&(existingOnClick=mFormSubmit.onclick,mFormSubmit.onclick=function(){}),(null!=(ref2=window.location)&&null!=(ref3=ref2.href)?ref3.match(/freshdesk\.com/):void 0)&&window.frmValidation&&!window.frmValidationModified&&(window.frmValidation=eval("window.frmValidation = "+window.frmValidation.toString().replace('$(".success")','jQueryContainer.jQuery("form")[0].onsubmit();$(".success")')),window.frmValidationModified=!0),(null!=(ref4=window.location)&&null!=(ref5=ref4.href)?ref5.match(/freshservice\.com/):void 0)&&window.frmValidation&&!window.frmValidationModified&&(window.frmValidation=eval("window.frmValidation = "+window.frmValidation.toString().replace('$(".success").css("display","block")','$(".success").css("display","block"),window.fsForm()')),window.frmValidationModified=!0),(null!=(ref6=window.location)&&null!=(ref7=ref6.href)?ref7.match(/freshdesk.com\/customer-support-glossary\/suggest-term/):void 0)&&form.attr("id","suggestform2"),processForm=function(e){var t,n,r,o,i,a,s,u,l,d,h,p,f,m,g,y,w;if(_t.abortFormScanLoop(),c.wantsFieldVerification&&"object"==typeof c.requiredFields&&_t.keys(c.requiredFields).length>0)for(autopilotAnywhereMeta.requiredFields=[],m=c.requiredFields,t=0,r=m.length;r>t;t++)n=m[t],autopilotAnywhereMeta.requiredFields.push(n);return c.passthroughSubmit?y=function(){}:(e.preventDefault&&e.preventDefault(),y=function(){return window.location=c.successUrl}),mf?(existingOnClick&&!(null!=(g=window.location)&&null!=(o=g.href)?o.match(/freshdesk\.com/):void 0)&&existingOnClick.call(this,e),(null!=(i=form.find(".mktField").find(".textfield.error"))?i.length:void 0)>0||(null!=(a=form.find(".mktFormMsg").text())?a.replace(/\s/g,"").length:void 0)>0?(e.preventDefault(),!1):(null!=(s=window.location)&&null!=(u=s.href)?u.match(/customerhappinesstour\.com/):void 0)&&(null!=(l=form.find(".mktField.error"))?l.length:void 0)>0?(e.preventDefault(),!1):(w=_t.FV1SendForm(form,scannedForm,{autopilotAnywhereMeta:autopilotAnywhereMeta}),200===(null!=w?w.status:void 0)?y():w&&_t.sendEvent({type:"formerror",message:"form could not be submitted to seadrift: "+(w.responseText||w.response)}),!!c.passthroughSubmit)):(null!=(d=window.location)&&null!=(h=d.href)?h.match(/freshdesk\.com/):0)?form.find(".textfield.error").length>0||form.find("fieldError").length>0?void 0:(w=_t.FV1SendForm(form,scannedForm,{autopilotAnywhereMeta:autopilotAnywhereMeta}),200===(null!=w?w.status:void 0)?(y(),(null!=(p=window.location)&&null!=(f=p.href)?f.match(/freshdesk.com\/customer-support-glossary\/suggest-term/):void 0)&&jQueryContainer.jQuery("#suggestform2").children().each(function(){return jQueryContainer.jQuery(this).not("input[type=submit]").val("")})):w&&_t.sendEvent({type:"formerror",message:"form could not be submitted to seadrift: "+(w.responseText||w.response)}),!!c.passthroughSubmit):(w=_t.FV1SendForm(form,scannedForm,{autopilotAnywhereMeta:autopilotAnywhereMeta}),200===(null!=w?w.status:void 0)?y():w&&_t.sendEvent({type:"formerror",message:"form could not be submitted to seadrift: "+(w.responseText||w.response)}),c.passthroughSubmit?"function"==typeof existingOnsubmit?existingOnsubmit.call(this,e):!0:!1)},form[0].onsubmit=processForm,(null!=(ref8=window.location)&&null!=(ref9=ref8.href)?ref9.match(/freshservice\.com/):void 0)&&(window.fsForm=processForm),form.find("input[id]:not([name])").each(function(){var e;return e=jQueryContainer.jQuery(this),e.attr("name",e.attr("id"))})},window.AutopilotAnywhere.FV1SendForm=function(e,t,n){var r,o,i,a,s,u,l,d,c;if(null==n&&(n={}),window.XMLHttpRequest){if(c=this.serializeForm(e,t,n),!c.match(/\=[^\&]+/))return void("undefined"!=typeof console&&null!==console&&console.log("Not sending blank form to Autopilot"));if(n.autopilotAnywhereMeta.requiredFields){for(i=!0,u=[],l=n.autopilotAnywhereMeta.requiredFields,a=0,s=l.length;s>a;a++)r=l[a],o=new RegExp(encodeURIComponent(r).replace(/\%20/g,"\\+").replace(/\?/g,"%3F").replace(/\s/g,"\\+").replace(/\//gi,"%2F").replace(/\%/g,"\\%").replace(/\(/g,"\\(").replace(/\)/g,"\\)")+"=[^&]+"),o.test(c)||(u.push(r),this.missingFields=[r,o],i=!1);if(!i)return void("undefined"!=typeof console&&null!==console&&console.log("Not submitting to Autopilot: not all valid fields are present, missing fields are",u,c))}return n.autopilotAnywhereMeta&&(c+="&AutopilotAnywhereMeta="+encodeURIComponent(this.encodeObject(n.autopilotAnywhereMeta))),this.gdpr?("function"==typeof this.GDPRCookieOptIn&&this.GDPRCookieOptIn(),setTimeout(function(e){return function(){var t;return console.log("sending V1 form (gdpr mode)"),t=new XMLHttpRequest,t.open("POST",e.getAnywhereUrl()+"?optin=1",!1),t.send(c),t}}(this),1100)):(console.log("sending V1 form (non-gdpr mode)"),d=new XMLHttpRequest,d.open("POST",this.getAnywhereUrl()+"?optin=1",!1),d.send(c),d)}},window.AutopilotAnywhere.FV2TrackForm=function(e,t,n,r){var o,i;return e.find("input[id]:not([name])").each(function(){var e;return e=jQueryContainer.jQuery(this),e.attr("name",e.attr("id"))}),i=!1,o=this.FV2CaptureExistingSubmitActions(e,function(a){return function(s){var u;if(!i)return delete r.missingReqFields,i=!0,a.abortFormScanLoop(),u=a.serializeForm(o.replacementForm,n),u.match(/\=[^\&]+/)||(r.missingReqFields=!0),a.FV2TestFormRequiredFields(t,u)||(r.missingReqFields=!0),u+="&AutopilotAnywhereMeta="+encodeURIComponent(a.encodeObject(r)),a.FV2SendSerializedForm(u,function(i){return i&&a.sendEvent({type:"formerror",message:"form could not be submitted: "+i}),t.passthroughSubmit?(a.FV2ReplaceOriginalSubmitActions(o),a.FV2ReplaySubmitAction(s,e,t,n,r)):window.location=t.successUrl})}}(this))},window.AutopilotAnywhere.FV2RestoreFocus=function(){return jQueryContainer.jQuery(".__apHASFOCUS").focus().removeClass("__apHASFOCUS")},window.AutopilotAnywhere.FV2ReTrackFormOnFocus=function(e,t,n,r){var o,i;return o=this,i=!1,e.find("input").each(function(){var a;return a=jQueryContainer.jQuery(this),a.data("__apOldValue",a.val()),a.bind("propertychange change click keyup input paste",function(s){if(a.data("__apOldValue")!==a.val()){if(i)return;return i=!0,a.addClass("__apHASFOCUS"),o.FV2TrackForm(e,t,n,r),o.FV2RestoreFocus()}})})},window.AutopilotAnywhere.FV2SubstituteElement=function(e,t){var n,r,o,i;if(r=[],e.childNodes)for(;n=e.childNodes[0];)e.removeChild(n),r.push(n);for(null==t&&(t=e.cloneNode(!1)),o=0,i=r.length;i>o;o++)n=r[o],t.appendChild(n);return e.parentNode.replaceChild(t,e),t},window.AutopilotAnywhere.FV2CaptureExistingSubmitActions=function(e,t){var n,r,o,i,a,s,u;for(u={originalForm:e,buttons:[]},r=e.find("input[type=submit], button, #mktFrmSubmit").filter("[type!=reset]").toArray()||[],s=this.FV2SubstituteElement(e[0]),s.removeAttribute("onsubmit"),s.onsubmit=function(n){return null!=n&&"function"==typeof n.preventDefault&&n.preventDefault(),null!=n&&"function"==typeof n.stopPropagation&&n.stopPropagation(),t({originalEl:e[0],type:"submit",event:n}),!1},u.replacementForm=jQueryContainer.jQuery(s),o=function(e){return function(n){var r;return r=e.FV2SubstituteElement(n),r.removeAttribute("onclick"),r.onclick=function(e){return null!=e&&"function"==typeof e.preventDefault&&e.preventDefault(),null!=e&&"function"==typeof e.stopPropagation&&e.stopPropagation(),t({originalEl:n,type:"click",event:e}),!1},u.buttons.push({original:n,replacement:r})}}(this),i=0,a=r.length;a>i;i++)n=r[i],o(n);return u},window.AutopilotAnywhere.FV2ReplaceOriginalSubmitActions=function(e){var t,n,r,o,i;for(this.FV2SubstituteElement(e.replacementForm[0],e.originalForm[0]),o=e.buttons,i=[],n=0,r=o.length;r>n;n++)t=o[n],i.push(this.FV2SubstituteElement(t.replacement,t.original));return i},window.AutopilotAnywhere.FV2SimulateEvent=function(e){var t,n,r,o,i,a,s,u;o=e.event,n={cancelBubble:!0,composed:!0,currentTarget:!0,deepPath:!0,defaultPrevented:!0,eventPhase:!0,explicitOriginalTarget:!0,originalTarget:!0,returnValue:!0,srcElement:!0,scoped:!0,target:!0,type:!0,timeStamp:!0,isTrusted:!0},t=o.constructor||Event,t===Object&&(t=Event),s={view:o.view||window,bubbles:o.bubbles||!0,cancelable:o.cancelable||!0};for(i in o)u=o[i],n[i]||(s[i]=u);try{a=new t(o.type,s)}catch(l){r=l,a=document.createEvent("Event"),a.initEvent(e.type,!0,!1)}return e.originalEl.dispatchEvent(a)},window.AutopilotAnywhere.FV2ReplaySubmitAction=function(e,t,n,r,o){return/MSIE 8\./.test("undefined"!=typeof navigator&&null!==navigator?navigator.userAgent:void 0)?this.FV2ReplaySubmitActionLegacyBrowser(e):this.FV2SimulateEvent(e),this.FV2ReTrackFormOnFocus(t,n,r,o)},window.AutopilotAnywhere.FV2ReplaySubmitActionLegacyBrowser=function(e){var t,n;return(n=e.originalEl[e.type])?n():(t=e.event||documment.createEventObject(),e.originalEl.fireEvent("on"+e.type,t))},window.AutopilotAnywhere.FV2TestFormRequiredFields=function(e,t){var n,r,o,i,a,s;if(s=!0,e.wantsFieldVerification&&e.requiredFields&&this.isArray(e.requiredFields))for(a=e.requiredFields,o=0,i=a.length;i>o;o++)n=a[o],r=new RegExp(encodeURIComponent(n).replace(/\%20/g,"\\+").replace(/\?/g,"%3F").replace(/\s/g,"\\+").replace(/\//gi,"%2F").replace(/\%/g,"\\%").replace(/\(/g,"\\(").replace(/\)/g,"\\)")+"=[^&]+"),r.test(t)||(s=!1);return s},window.AutopilotAnywhere.formScan=function(e,t){var n,r,o,i,a,s,u,l,d,c,h,p,f,m,g,y,w,v,b,A,F,T,S,I,C,E,R,O,k,_,x,U,N,V,M,P,D,j,Q,L,q,H,B,G,$,X,z,W,J,Y,K,Z,ee,te,ne,re,oe,ie,ae,se,ue,le,de,ce,he,pe,fe,me,ge,ye,we,ve,be,Ae,Fe,Te,Se,Ie,Ce;if(null==t&&(t={}),R=2,t.findAllVersions&&(t.hashVersions=function(){ge=[];for(var e=R;1>=R?1>=e:e>=1;1>=R?e++:e--)ge.push(e);return ge}.apply(this)),t.hashVersions||(t.hashVersions=[R]),r={},r.hash=function(e){var t,n,o,i,a,s,u,l,d,c,h,p,f,m,g,y,w,v,b;for(n=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],e+=String.fromCharCode(128),v=e.length/4+2,i=Math.ceil(v/16),o=new Array(i),y=0;i>y;){for(o[y]=new Array(16),w=0;16>w;)o[y][w]=e.charCodeAt(64*y+4*w)<<24|e.charCodeAt(64*y+4*w+1)<<16|e.charCodeAt(64*y+4*w+2)<<8|e.charCodeAt(64*y+4*w+3),w++;y++}for(o[i-1][14]=8*(e.length-1)/Math.pow(2,32),o[i-1][14]=Math.floor(o[i-1][14]),o[i-1][15]=8*(e.length-1)&4294967295,u=new Array(64),l=void 0,d=void 0,c=void 0,h=void 0,p=void 0,f=void 0,m=void 0,g=void 0,y=0;i>y;){for(b=0;16>b;)u[b]=o[y][b],b++;for(b=16;64>b;)u[b]=r.a1(u[b-2])+u[b-7]+r.a0(u[b-15])+u[b-16]&4294967295,b++;for(l=t[0],d=t[1],c=t[2],h=t[3],p=t[4],f=t[5],m=t[6],g=t[7],b=0;64>b;)a=g+r.b1(p)+r.Ch(p,f,m)+n[b]+u[b],s=r.b0(l)+r.Maj(l,d,c),g=m,m=f,f=p,p=h+a&4294967295,h=c,c=d,d=l,l=a+s&4294967295,b++;t[0]=t[0]+l&4294967295,t[1]=t[1]+d&4294967295,t[2]=t[2]+c&4294967295,t[3]=t[3]+h&4294967295,t[4]=t[4]+p&4294967295,t[5]=t[5]+f&4294967295,t[6]=t[6]+m&4294967295,t[7]=t[7]+g&4294967295,y++}return r.toHexStr(t[0])+r.toHexStr(t[1])+r.toHexStr(t[2])+r.toHexStr(t[3])+r.toHexStr(t[4])+r.toHexStr(t[5])+r.toHexStr(t[6])+r.toHexStr(t[7])},r.ROTR=function(e,t){return t>>>e|t<<32-e},r.b0=function(e){return r.ROTR(2,e)^r.ROTR(13,e)^r.ROTR(22,e)},r.b1=function(e){return r.ROTR(6,e)^r.ROTR(11,e)^r.ROTR(25,e)},r.a0=function(e){return r.ROTR(7,e)^r.ROTR(18,e)^e>>>3},r.a1=function(e){return r.ROTR(17,e)^r.ROTR(19,e)^e>>>10},r.Ch=function(e,t,n){return e&t^~e&n},r.Maj=function(e,t,n){return e&t^e&n^t&n},r.toHexStr=function(e){var t,n,r;for(n="",r=void 0,t=7;t>=0;)r=e>>>4*t&15,n+=r.toString(16),t--;return n},n={},n._getAttributeWhitelist={autocomplete:!0},n.descend=function(t,n){return null==n?e.document.querySelectorAll(t):t.querySelectorAll(n)},n.nameOrId=function(e){return e.name||e.id},n.hasClass=function(e,t){var n;return n=new RegExp("\\b"+t+"\\b"),(null!=e?e.className:void 0)&&n.test(e.className)},n.attr=function(e,t){return n._getAttributeWhitelist[t]?"function"==typeof e.getAttribute?e.getAttribute(t):void 0:e[t]},n.hasAncestorOfType=function(e,t){for(;;){if(e.nodeName===t)return!0;if(e=e.parentNode,!e)return!1}},I={},I.$=(null!=e&&null!=(K=e.AutopilotAnywhere)?K.jQuery:void 0)||(null!=e?e.jQuery:void 0),!I.$)throw Error("jQuery unavailable");for(I.descend=function(e,t){var n;return t?I.$(e).find(t).toArray():null!=(n=I.$(e))&&"function"==typeof n.toArray?n.toArray():void 0},I.nameOrId=function(e){var t;return t=I.$(e),t.attr("name")||t.attr("id")},I.hasClass=function(e,t){return I.$(e).hasClass(t)},I.attr=function(e,t){return I.$(e).attr(t)},I.hasAncestorOfType=function(e,t){return I.$(e).parents(t).length>0},Ie=t.useDOM&&n||I,Fe=null!=(Z=Ie.descend("#ubpoverlay-overlay"))?Z.length:void 0,we=null!=(ue=Ie.descend(".sqs-layout"))?ue.length:void 0,v={},le=Ie.descend("FORM"),P=0,O=le.length;O>P;P++)if(w=le[P],!Ie.hasAncestorOfType(w,"NOSCRIPT"))for(H=(q=null!=(de=Ie.descend(w,"INPUT[type=hidden][name=_hp_name]"))?de[0]:void 0)?Ie.attr(q,"value"):null,ce=t.hashVersions,B=0,k=ce.length;k>B;B++){for(b=ce[B],y={fields:[],radioFields:{},fingerprint:"",duplicate:!1,ignoredNamesOrIds:{},alreadyUsedGuesses:{},hashVersion:b},he=Ie.descend(w,"INPUT, SELECT, TEXTAREA, FIELDSET, DIV[id], BUTTON"),X=0,_=he.length;_>X;X++)if(m=he[X],!we||"INPUT"!==m.nodeName&&"BUTTON"!==m.nodeName||"submit"!==(Ie.attr(m,"type")||"").toLowerCase()||("INPUT"===m.nodeName?y.fingerprint+="SQUARESPACEINPUTSUBMIT/"+(Ie.attr(m,"value")||"")+" ":y.fingerprint+="SQUARESPACEBUTTONSUBMIT/"+(Ie.attr(m,"value")||"")+" "),(L=Ie.nameOrId(m))&&!(y.ignoredNamesOrIds[L]||L.match(/^captcha$/i)||Ie.hasClass(m,"screenReader")||/^_mc4wp_h_/.test(L)&&"off"===Ie.attr(m,"autocomplete")&&"text"===Ie.attr(m,"type")||H&&"text"===Ie.attr(m,"type")&&Ie.attr(m,"name")===H))switch(m.nodeName){case"DIV":h=(Ie.attr(m,"id")||"").toLowerCase(),h.match(/^currency-yui/)?(p=Ie.descend(m,"INPUT"),1!==(null!=p?p.length:void 0)||Ie.nameOrId(p[0])||(y.fields.push({type:"currency",name:h,guess:null,probablySearch:!1,subfield:p[0]}),y.fingerprint+="INPUT.text/"+h+" ")):h.match(/^number-yui/)&&(p=Ie.descend(m,"INPUT"),1!==(null!=p?p.length:void 0)||Ie.nameOrId(p[0])||(y.fields.push({type:"number",name:h,guess:null,probablySearch:!1,subfield:p[0]}),y.fingerprint+="INPUT.text/"+h+" "));break;case"INPUT":if(g=(Ie.attr(m,"type")||"text").toLowerCase(),"email"===g||"text"===g||"search"===g||"tel"===g||"url"===g){if(Fe&&L.match(/^ubafs-/))continue;f="email"!==g&&!L.match(/email/i)||y.alreadyUsedGuesses.regular_Email?null:"regular_Email",y.fields.push({type:"text",name:L,guess:f,probablySearch:"search"===g||"search"===L||"query"===L||"q"===L||"s"===L||"qu"===L}),y.fingerprint+="INPUT."+g+"/"+L+" ",f&&(y.alreadyUsedGuesses[f]=!0)}else"checkbox"===g?(y.fields.push({type:"checkbox",name:L,guess:null,probablySearch:!1}),y.fingerprint+="INPUT.checkbox/"+L+" "):"radio"===g?(null==(l=y.radioFields)[L]&&(l[L]=[]),y.radioFields[L].push(Ie.attr(m,"value"))):"submit"===g||"password"===g||"hidden"===g||"reset"===g||"file"===g||"image"===g||b>1&&(y.fields.push({type:"text",name:L,guess:null,probablySearch:!1}),y.fingerprint+="INPUT."+g+"/"+L+" ");break;case"SELECT":for($=[],pe=Ie.descend(m,"OPTION")||[],J=0,x=pe.length;x>J;J++)G=pe[J],(ve=Ie.attr(G,"textContent"))&&$.push(ve);y.fields.push({type:"select",name:L,guess:null,probablySearch:!1,optionValues:$}),y.fingerprint+="SELECT/"+L+" ";break;case"TEXTAREA":y.fields.push({type:"text",name:L,guess:null,textArea:!0}),y.fingerprint+="TEXTAREA/"+L+" ";break;case"FIELDSET":if(L.match(/^date-yui/)){if(o=Ie.descend(m,"INPUT"),3===o.length&&(c=Ie.descend(m,".day INPUT"),j=Ie.descend(m,".month INPUT"),Ce=Ie.descend(m,".year INPUT"),c.length===(me=j.length)&&me===(fe=Ce.length)&&1===fe)){for(Y=0,U=o.length;U>Y;Y++)T=o[Y],(S=Ie.nameOrId(T))&&(y.ignoredNamesOrIds[S]=!0);y.fields.push({type:"date",name:L,guess:null,probablySearch:!1,subfields:[Ce[0],j[0],c[0]]}),y.fingerprint+="FIELDSET/"+L+" "}}else if(L.match(/^phone-yui/)){if(d=Ie.descend(m,'INPUT[x-autocompletetype="phone-country-code"]'),u=Ie.descend(m,'INPUT[x-autocompletetype="phone-area-code"]'),z=Ie.descend(m,'INPUT[x-autocompletetype="phone-local-prefix"]'),W=Ie.descend(m,'INPUT[x-autocompletetype="phone-local-suffix"]'),(null!=d?d.length:void 0)<=1&&(null!=u?u.length:void 0)===(te=null!=z?z.length:void 0)&&te===(ee=null!=W?W.length:void 0)&&1===ee){for(ne=[d,u,z,W],Ae=0,N=ne.length;N>Ae;Ae++)T=ne[Ae],(S=Ie.nameOrId(T))&&(y.ignoredNamesOrIds[S]=!0);y.fields.push({type:"phone",name:L,guess:null,probablySearch:!1,subfields:{countryCode:1===(null!=d?d.length:void 0)?d[0]:null,areaCode:null!=u?u[0]:void 0,phonePrefix:null!=z?z[0]:void 0,phoneSuffix:null!=W?W[0]:void 0}}),y.fingerprint+="FIELDSET/"+L+" "}}else if(L.match(/^time-yui/)&&(i=Ie.descend(m,"INPUT"),3===i.length&&(A=Ie.descend(m,".hour INPUT"),D=Ie.descend(m,".minute INPUT"),ye=Ie.descend(m,".second INPUT"),a=Ie.descend(m,".ampm SELECT"),A.length===(ie=D.length)&&ie===(oe=ye.length)&&oe===(re=a.length)&&1===re))){for(Se=0,V=i.length;V>Se;Se++)be=i[Se],(S=Ie.nameOrId(be))&&(y.ignoredNamesOrIds[S]=!0);(s=Ie.nameOrId(a))&&(y.ignoredNamesOrIds[s]=!0),y.fields.push({type:"time",name:L,guess:null,probablySearch:!1,subfields:[A[0],D[0],ye[0],a[0]]}),y.fingerprint+="FIELDSET/"+L+" "}}ae=y.radioFields;for(Q in ae)Te=ae[Q],y.fields.push({type:"radio",name:Q,guess:null,probablySearch:!1,optionValues:Te}),y.fingerprint+="INPUT.radio/"+Q+" ";for(se=y.fields,F=0,M=se.length;M>F;F++)m=se[F],m.guess||(m.name.match(/company|organization/i)?y.alreadyUsedGuesses.regular_Company||(m.guess="regular_Company"):m.name.match(/last|^lname/i)?y.alreadyUsedGuesses.regular_LastName||(m.guess="regular_LastName"):m.name.match(/first|fullname|contact_name|fname|name/i)?y.alreadyUsedGuesses.regular_FirstName||(m.guess="regular_FirstName"):m.name.match(/title|role/i)?y.alreadyUsedGuesses.regular_Title||(m.guess="regular_Title"):m.name.match(/salutation|greeting/i)?y.alreadyUsedGuesses.regular_Salutation||(m.guess="regular_Salutation"):m.name.match(/nick/i)?y.alreadyUsedGuesses.regular_Nickname||(m.guess="regular_Nickname"):m.name.match(/employee/i)?y.alreadyUsedGuesses.regular_NumberOfEmployees||(m.guess="regular_NumberOfEmployees"):m.name.match(/birth|dob/i)?y.alreadyUsedGuesses.regular_Birthday||(m.guess="regular_Birthday"):m.name.match(/industry|sector/i)?y.alreadyUsedGuesses.regular_Industry||(m.guess="regular_Industry"):m.name.match(/phone/i)?y.alreadyUsedGuesses.regular_Phone||(m.guess="regular_Phone"):m.name.match(/mobile|cell/i)?y.alreadyUsedGuesses.regular_MobilePhone||(m.guess="regular_MobilePhone"):m.name.match(/fax/i)?y.alreadyUsedGuesses.regular_Fax||(m.guess="regular_Fax"):m.name.match(/site|web|page/i)?y.alreadyUsedGuesses.regular_Website||(m.guess="regular_Website"):m.name.match(/street/i)?y.alreadyUsedGuesses.regular_MailingStreet||(m.guess="regular_MailingStreet"):m.name.match(/city/i)?y.alreadyUsedGuesses.regular_MailingCity||(m.guess="regular_MailingCity"):m.name.match(/state|province/i)?y.alreadyUsedGuesses.regular_MailingState||(m.guess="regular_MailingState"):m.name.match(/postal|code|zip/i)?y.alreadyUsedGuesses.regular_MailingPostalCode||(m.guess="regular_MailingPostalCode"):m.name.match(/country|nation/i)?y.alreadyUsedGuesses.regular_MailingCountry||(m.guess="regular_MailingCountry"):m.name.match(/lead|source|refer/i)?y.alreadyUsedGuesses.regular_LeadSource||(m.guess="regular_LeadSource"):m.name.match(/notes/i)?y.alreadyUsedGuesses.regular_notes||(m.guess="regular_notes"):m.name.match(/twitter|handle/i)?y.alreadyUsedGuesses.regular_twitter||(m.guess="regular_twitter"):m.name.match(/opted/i)&&(y.alreadyUsedGuesses.regular_HasOptedOutOfEmail||(m.guess="regular_HasOptedOutOfEmail")),m.guess&&(y.alreadyUsedGuesses[m.guess]=!0));y.fields.length>0&&(1===y.fields.length&&y.fields[0].probablySearch||(Ie.attr(w,"action")||1!==y.fields.length||"select"!==y.fields[0].type)&&(y.hash=r.hash(y.fingerprint),b>1&&(y.hash=b+"_"+y.hash),y.hashVersion=b,y.id=Ie.attr(w,"id"),y.action=Ie.attr(w,"action"),y.elements=[w],t.findAllVersions?b===R?(C=y.hash,y.otherHashVersions=[],v[C]?(E=!0,v[C].elements.push(w)):(E=!1,v[C]=y)):E||v[C].otherHashVersions.push(y.hash):v[y.hash]?v[y.hash].elements.push(w):v[y.hash]=y))}return v},window.AutopilotAnywhere.startFormScanLoop=function(){var e,t,n;return e=this,n=1,e.forms({finalScan:!1}),t=setInterval(function(){var r;if(!e.formScanLoopAborted)return n++,r=n>=5,e.forms({finalScan:r}),r?clearInterval(t):void 0},750),window.jQuery&&window.jQuery(".wsite-button").each(function(e,t){var n,r;return n=window.jQuery(t),
r=n.attr("onclick"),"string"==typeof r?n.attr("onclick",r.replace(/^document.getElementById\('/,"jQuery('#")):void 0})},window.AutopilotAnywhere.abortFormScanLoop=function(){return this.formScanLoopAborted=!0},window.AutopilotAnywhere.populateSessionIdFields=function(){return jQueryContainer.jQuery("input[name=_autopilot_session_id][type=hidden]:not([value])").attr("value",this.sessionId)},window.AutopilotAnywhere.headsupCheck=function(e,t){var n;return n=this,null==e&&(e=0),!this.headsupVisible&&!this.headsupRequestInProgress||t?(this.headsupRequestInProgress=!0,this.sendEvent({type:"headsupcheck",url:document.location.href},function(r,o){return n.headsupRequestInProgress=!1,r?void 0:(null!=o?o.refDoc:void 0)?(n.headsupRefDoc=o.refDoc,n.showHeadsup(o.refDoc,o.displaySide,t)):4>e?(clearTimeout(n.headsupRecheckTimeout),n.headsupRecheckTimeout=setTimeout(function(){return n.headsupCheck(e+1,t)},500+1e3*Math.pow(2.25,e))):void 0})):void 0},window.AutopilotAnywhere.showHeadsup=function(e,t,n){var r,o,i;return r=this,!this.headsupVisible&&!this.headsupRequestInProgress||n?(this.headsupVisible&&n&&this.hideHeadsup(),this.headsupVisible=!0,this.headsupIframeUrl=this.anywhereBaseUrl.replace(/\/anywhere\//,"/anywhere/headsup/")+"/"+encodeURIComponent(e)+"/"+r.initTime+"/"+encodeURIComponent(document.location.href),this.headsupIframe=jQueryContainer.jQuery("<iframe>"),this.headsupIframe.attr("src",this.headsupIframeUrl),i="left"===t?"auto":"0px",o="left"===t?"0px":"auto",this.headsupIframe.attr("style","border: none; z-index: 999999; position: fixed; left: "+o+"; top: auto; bottom: 0px; right: "+i+"; width: 355px; height: 135px; opacity: 0.0; background: transparent; max-width: 100%; margin: 0; padding: 0; pointer-events:all;"),jQueryContainer.jQuery("body").append(this.headsupIframe)):void 0},window.AutopilotAnywhere.hideHeadsup=function(){return this.headsupIframe.remove(),this.headsupIframe=null,this.headsupVisible=!1},window.AutopilotAnywhere.startWatchingLocationHref=function(){var e,t;return e=this,t=null,setInterval(function(){var n,r;return t!==(null!=(n=document.location)?n.href:void 0)?(t=null!=(r=document.location)?r.href:void 0,e.locationChanged()):void 0},500)},window.AutopilotAnywhere.locationChanged=function(){return this.anywhereConfig.devmode&&this.run(["visit"]),/MSIE 8\./.test(navigator.userAgent)?void 0:this.run.apply(this,["headsupCheck",0,!0])},window.AutopilotAnywhere.listenForHeadsupPostMessage=function(){var e;return e=this,window.addEventListener("message",function(t){var n,r,o,i,a,s,u,l;e.lastpostMessageOrigin=null!=t?t.origin:void 0,(null!=t?t.origin:void 0)===e.anywhereBaseDomain&&e.headsupIframe&&((null!=t?t.data.init:void 0)&&(e.headsupMessageText=t.data.messageText,e.headsupShortMessageText=t.data.shortMessageText,e.headsupFromName=t.data.fromName,e.headsupTitleAndCompany=t.data.titleAndCompany,e.headsupButtonText=t.data.buttonText,e.subscribeContactListId=t.data.subscribeContactListId,e.redirectUrl=t.data.redirectLink,e.replyBackField=t.data.replyBackField),(null!=t?t.data.close:void 0)&&e.hideHeadsup(),(null!=t?t.data.height:void 0)&&e.headsupIframe.css("height",null!=t?t.data.height:void 0),(null!=t?t.data.width:void 0)&&e.headsupIframe.css("width",null!=t?t.data.width:void 0),(null!=t?t.data.left:void 0)&&e.headsupIframe.css("left",null!=t?t.data.left:void 0),(null!=t?t.data.right:void 0)&&e.headsupIframe.css("right",null!=t?t.data.right:void 0),(null!=t?t.data.top:void 0)&&e.headsupIframe.css("top",null!=t?t.data.top:void 0),(null!=t?t.data.bottom:void 0)&&e.headsupIframe.css("bottom",null!=t?t.data.bottom:void 0),(null!=t?t.data.position:void 0)&&e.headsupIframe.css("position",null!=t?t.data.position:void 0),(null!=t?t.data.opacity:void 0)&&e.headsupIframe.css("opacity",null!=t?t.data.opacity:void 0),(null!=t?t.data.absoluteIFrame:void 0)&&(s=(null!=(o=document.getElementsByTagName("BODY")[0])?o.scrollTop:void 0)||0,l="undefined"!=typeof window&&null!==window?window.innerHeight:void 0,e.headsupIframe.css({position:"absolute",height:Math.max(0,l)+"px",width:"100%",left:"0px",top:Math.max(0,s)+"px",bottom:"auto"})),(null!=t?t.data.shown:void 0)&&(r={type:"headsup",action:"onShown",url:document.location.href,refDoc:e.headsupRefDoc,text:e.headsupShortMessageText},e.sendEvent(r)),(null!=t?t.data.open:void 0)&&(r={type:"headsup",action:"onOpen",url:document.location.href,refDoc:e.headsupRefDoc,text:e.headsupMessageText,fromName:e.headsupFromName,titleAndCompany:e.headsupTitleAndCompany,buttonText:e.headsupButtonText},e.sendEvent(r)),(null!=t?t.data.dismiss:void 0)&&(r={type:"headsup",action:"onDismiss",url:document.location.href,refDoc:e.headsupRefDoc},e.sendEvent(r)),(null!=t?t.data.proactiveCTA:void 0)&&(r={type:"proactiveCTA",action:"onClick",url:document.location.href,refDoc:e.headsupRefDoc,redirectUrl:e.redirectUrl},e.sendEvent(r)),(null!=t?t.data.subscribe:void 0)&&(r={type:"headsupSubscribe",action:"onSubscribe",url:document.location.href,refDoc:e.headsupRefDoc,subscribeContactListId:e.subscribeContactListId},e.sendEvent(r)),(null!=t?t.data.proactiveSubscribe:void 0)&&(u={email:null!=t?t.data.email:void 0,fname:null!=t?t.data.firstName:void 0,lname:null!=t?t.data.lastName:void 0},r={type:"proactiveSubscribe",action:"onSubscribe",url:document.location.href,refDoc:e.headsupRefDoc,subscribeContactListId:e.subscribeContactListId,subData:u},e.sendEvent(r)),(null!=t?t.data.replyBack:void 0)&&(i=null!=t?t.data.reply:void 0)&&(r={type:"headsupReply",action:"onReply",url:document.location.href,refDoc:e.headsupRefDoc,text:e.headsupMessageText,reply:i,fromName:t.data.fromName,titleAndCompany:t.data.titleAndCompany,imgUrl:t.data.imgUrl,replyBackListId:e.subscribeContactListId,replyBackField:e.replyBackField},e.sendEvent(r)),(null!=t?t.data.proactiveReplyBack:void 0)&&(n={email:null!=t?t.data.email:void 0,fname:null!=t?t.data.firstName:void 0,lname:null!=t?t.data.lastName:void 0},r={type:"proactiveReply",action:"onReply",url:document.location.href,refDoc:e.headsupRefDoc,text:e.headsupMessageText,reply:null!=t?t.data.reply:void 0,contactData:n,fromName:t.data.fromName,titleAndCompany:t.data.titleAndCompany,imgUrl:t.data.imgUrl,replyBackListId:e.subscribeContactListId,replyBackField:e.replyBackField},e.sendEvent(r)),(a=null!=t?t.data.redirectTo:void 0)&&(window.location=a))},!1)},window.AutopilotAnywhere.init()}}();