/*!
 * jQuery JavaScript Library v1.6.1
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu May 12 15:04:36 2011 -0400
 */
(function(bg,P){var aw=bg.document,by=bg.navigator,bp=bg.location;var b=(function(){var bI=function(b2,b3){return new bI.fn.init(b2,b3,bG)},bX=bg.jQuery,bK=bg.$,bG,b1=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,bQ=/\S/,bM=/^\s+/,bH=/\s+$/,bL=/\d/,bE=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,bR=/^[\],:{}\s]*$/,bZ=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,bT=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,bN=/(?:^|:|,)(?:\s*\[)+/g,bC=/(webkit)[ \/]([\w.]+)/,bV=/(opera)(?:.*version)?[ \/]([\w.]+)/,bU=/(msie) ([\w.]+)/,bW=/(mozilla)(?:.*? rv:([\w.]+))?/,b0=by.userAgent,bY,bF,e,bP=Object.prototype.toString,bJ=Object.prototype.hasOwnProperty,bD=Array.prototype.push,bO=Array.prototype.slice,bS=String.prototype.trim,bz=Array.prototype.indexOf,bB={};bI.fn=bI.prototype={constructor:bI,init:function(b2,b6,b5){var b4,b7,b3,b8;if(!b2){return this}if(b2.nodeType){this.context=this[0]=b2;this.length=1;return this}if(b2==="body"&&!b6&&aw.body){this.context=aw;this[0]=aw.body;this.selector=b2;this.length=1;return this}if(typeof b2==="string"){if(b2.charAt(0)==="<"&&b2.charAt(b2.length-1)===">"&&b2.length>=3){b4=[null,b2,null]}else{b4=b1.exec(b2)}if(b4&&(b4[1]||!b6)){if(b4[1]){b6=b6 instanceof bI?b6[0]:b6;b8=(b6?b6.ownerDocument||b6:aw);b3=bE.exec(b2);if(b3){if(bI.isPlainObject(b6)){b2=[aw.createElement(b3[1])];bI.fn.attr.call(b2,b6,true)}else{b2=[b8.createElement(b3[1])]}}else{b3=bI.buildFragment([b4[1]],[b8]);b2=(b3.cacheable?bI.clone(b3.fragment):b3.fragment).childNodes}return bI.merge(this,b2)}else{b7=aw.getElementById(b4[2]);if(b7&&b7.parentNode){if(b7.id!==b4[2]){return b5.find(b2)}this.length=1;this[0]=b7}this.context=aw;this.selector=b2;return this}}else{if(!b6||b6.jquery){return(b6||b5).find(b2)}else{return this.constructor(b6).find(b2)}}}else{if(bI.isFunction(b2)){return b5.ready(b2)}}if(b2.selector!==P){this.selector=b2.selector;this.context=b2.context}return bI.makeArray(b2,this)},selector:"",jquery:"1.6.1",length:0,size:function(){return this.length},toArray:function(){return bO.call(this,0)},get:function(b2){return b2==null?this.toArray():(b2<0?this[this.length+b2]:this[b2])},pushStack:function(b3,b5,b2){var b4=this.constructor();if(bI.isArray(b3)){bD.apply(b4,b3)}else{bI.merge(b4,b3)}b4.prevObject=this;b4.context=this.context;if(b5==="find"){b4.selector=this.selector+(this.selector?" ":"")+b2}else{if(b5){b4.selector=this.selector+"."+b5+"("+b2+")"}}return b4},each:function(b3,b2){return bI.each(this,b3,b2)},ready:function(b2){bI.bindReady();bF.done(b2);return this},eq:function(b2){return b2===-1?this.slice(b2):this.slice(b2,+b2+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(bO.apply(this,arguments),"slice",bO.call(arguments).join(","))},map:function(b2){return this.pushStack(bI.map(this,function(b4,b3){return b2.call(b4,b3,b4)}))},end:function(){return this.prevObject||this.constructor(null)},push:bD,sort:[].sort,splice:[].splice};bI.fn.init.prototype=bI.fn;bI.extend=bI.fn.extend=function(){var cb,b4,b2,b3,b8,b9,b7=arguments[0]||{},b6=1,b5=arguments.length,ca=false;if(typeof b7==="boolean"){ca=b7;b7=arguments[1]||{};b6=2}if(typeof b7!=="object"&&!bI.isFunction(b7)){b7={}}if(b5===b6){b7=this;--b6}for(;b6<b5;b6++){if((cb=arguments[b6])!=null){for(b4 in cb){b2=b7[b4];b3=cb[b4];if(b7===b3){continue}if(ca&&b3&&(bI.isPlainObject(b3)||(b8=bI.isArray(b3)))){if(b8){b8=false;b9=b2&&bI.isArray(b2)?b2:[]}else{b9=b2&&bI.isPlainObject(b2)?b2:{}}b7[b4]=bI.extend(ca,b9,b3)}else{if(b3!==P){b7[b4]=b3}}}}}return b7};bI.extend({noConflict:function(b2){if(bg.$===bI){bg.$=bK}if(b2&&bg.jQuery===bI){bg.jQuery=bX}return bI},isReady:false,readyWait:1,holdReady:function(b2){if(b2){bI.readyWait++}else{bI.ready(true)}},ready:function(b2){if((b2===true&&!--bI.readyWait)||(b2!==true&&!bI.isReady)){if(!aw.body){return setTimeout(bI.ready,1)}bI.isReady=true;if(b2!==true&&--bI.readyWait>0){return}bF.resolveWith(aw,[bI]);if(bI.fn.trigger){bI(aw).trigger("ready").unbind("ready")}}},bindReady:function(){if(bF){return}bF=bI._Deferred();if(aw.readyState==="complete"){return setTimeout(bI.ready,1)}if(aw.addEventListener){aw.addEventListener("DOMContentLoaded",e,false);bg.addEventListener("load",bI.ready,false)}else{if(aw.attachEvent){aw.attachEvent("onreadystatechange",e);bg.attachEvent("onload",bI.ready);var b2=false;try{b2=bg.frameElement==null}catch(b3){}if(aw.documentElement.doScroll&&b2){bA()}}}},isFunction:function(b2){return bI.type(b2)==="function"},isArray:Array.isArray||function(b2){return bI.type(b2)==="array"},isWindow:function(b2){return b2&&typeof b2==="object"&&"setInterval" in b2},isNaN:function(b2){return b2==null||!bL.test(b2)||isNaN(b2)},type:function(b2){return b2==null?String(b2):bB[bP.call(b2)]||"object"},isPlainObject:function(b3){if(!b3||bI.type(b3)!=="object"||b3.nodeType||bI.isWindow(b3)){return false}if(b3.constructor&&!bJ.call(b3,"constructor")&&!bJ.call(b3.constructor.prototype,"isPrototypeOf")){return false}var b2;for(b2 in b3){}return b2===P||bJ.call(b3,b2)},isEmptyObject:function(b3){for(var b2 in b3){return false}return true},error:function(b2){throw b2},parseJSON:function(b2){if(typeof b2!=="string"||!b2){return null}b2=bI.trim(b2);if(bg.JSON&&bg.JSON.parse){return bg.JSON.parse(b2)}if(bR.test(b2.replace(bZ,"@").replace(bT,"]").replace(bN,""))){return(new Function("return "+b2))()}bI.error("Invalid JSON: "+b2)},parseXML:function(b4,b2,b3){if(bg.DOMParser){b3=new DOMParser();b2=b3.parseFromString(b4,"text/xml")}else{b2=new ActiveXObject("Microsoft.XMLDOM");b2.async="false";b2.loadXML(b4)}b3=b2.documentElement;if(!b3||!b3.nodeName||b3.nodeName==="parsererror"){bI.error("Invalid XML: "+b4)}return b2},noop:function(){},globalEval:function(b2){if(b2&&bQ.test(b2)){(bg.execScript||function(b3){bg["eval"].call(bg,b3)})(b2)}},nodeName:function(b3,b2){return b3.nodeName&&b3.nodeName.toUpperCase()===b2.toUpperCase()},each:function(b5,b8,b4){var b3,b6=0,b7=b5.length,b2=b7===P||bI.isFunction(b5);if(b4){if(b2){for(b3 in b5){if(b8.apply(b5[b3],b4)===false){break}}}else{for(;b6<b7;){if(b8.apply(b5[b6++],b4)===false){break}}}}else{if(b2){for(b3 in b5){if(b8.call(b5[b3],b3,b5[b3])===false){break}}}else{for(;b6<b7;){if(b8.call(b5[b6],b6,b5[b6++])===false){break}}}}return b5},trim:bS?function(b2){return b2==null?"":bS.call(b2)}:function(b2){return b2==null?"":b2.toString().replace(bM,"").replace(bH,"")},makeArray:function(b5,b3){var b2=b3||[];if(b5!=null){var b4=bI.type(b5);if(b5.length==null||b4==="string"||b4==="function"||b4==="regexp"||bI.isWindow(b5)){bD.call(b2,b5)}else{bI.merge(b2,b5)}}return b2},inArray:function(b4,b5){if(bz){return bz.call(b5,b4)}for(var b2=0,b3=b5.length;b2<b3;b2++){if(b5[b2]===b4){return b2}}return -1},merge:function(b6,b4){var b5=b6.length,b3=0;if(typeof b4.length==="number"){for(var b2=b4.length;b3<b2;b3++){b6[b5++]=b4[b3]}}else{while(b4[b3]!==P){b6[b5++]=b4[b3++]}}b6.length=b5;return b6},grep:function(b3,b8,b2){var b4=[],b7;b2=!!b2;for(var b5=0,b6=b3.length;b5<b6;b5++){b7=!!b8(b3[b5],b5);if(b2!==b7){b4.push(b3[b5])}}return b4},map:function(b2,b9,ca){var b7,b8,b6=[],b4=0,b3=b2.length,b5=b2 instanceof bI||b3!==P&&typeof b3==="number"&&((b3>0&&b2[0]&&b2[b3-1])||b3===0||bI.isArray(b2));if(b5){for(;b4<b3;b4++){b7=b9(b2[b4],b4,ca);if(b7!=null){b6[b6.length]=b7}}}else{for(b8 in b2){b7=b9(b2[b8],b8,ca);if(b7!=null){b6[b6.length]=b7}}}return b6.concat.apply([],b6)},guid:1,proxy:function(b6,b5){if(typeof b5==="string"){var b4=b6[b5];b5=b6;b6=b4}if(!bI.isFunction(b6)){return P}var b2=bO.call(arguments,2),b3=function(){return b6.apply(b5,b2.concat(bO.call(arguments)))};b3.guid=b6.guid=b6.guid||b3.guid||bI.guid++;return b3},access:function(b2,ca,b8,b4,b7,b9){var b3=b2.length;if(typeof ca==="object"){for(var b5 in ca){bI.access(b2,b5,ca[b5],b4,b7,b8)}return b2}if(b8!==P){b4=!b9&&b4&&bI.isFunction(b8);for(var b6=0;b6<b3;b6++){b7(b2[b6],ca,b4?b8.call(b2[b6],b6,b7(b2[b6],ca)):b8,b9)}return b2}return b3?b7(b2[0],ca):P},now:function(){return(new Date()).getTime()},uaMatch:function(b3){b3=b3.toLowerCase();var b2=bC.exec(b3)||bV.exec(b3)||bU.exec(b3)||b3.indexOf("compatible")<0&&bW.exec(b3)||[];return{browser:b2[1]||"",version:b2[2]||"0"}},sub:function(){function b2(b5,b6){return new b2.fn.init(b5,b6)}bI.extend(true,b2,this);b2.superclass=this;b2.fn=b2.prototype=this();b2.fn.constructor=b2;b2.sub=this.sub;b2.fn.init=function b4(b5,b6){if(b6&&b6 instanceof bI&&!(b6 instanceof b2)){b6=b2(b6)}return bI.fn.init.call(this,b5,b6,b3)};b2.fn.init.prototype=b2.fn;var b3=b2(aw);return b2},browser:{}});bI.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(b3,b2){bB["[object "+b2+"]"]=b2.toLowerCase()});bY=bI.uaMatch(b0);if(bY.browser){bI.browser[bY.browser]=true;bI.browser.version=bY.version}if(bI.browser.webkit){bI.browser.safari=true}if(bQ.test("\xA0")){bM=/^[\s\xA0]+/;bH=/[\s\xA0]+$/}bG=bI(aw);if(aw.addEventListener){e=function(){aw.removeEventListener("DOMContentLoaded",e,false);bI.ready()}}else{if(aw.attachEvent){e=function(){if(aw.readyState==="complete"){aw.detachEvent("onreadystatechange",e);bI.ready()}}}}function bA(){if(bI.isReady){return}try{aw.documentElement.doScroll("left")}catch(b2){setTimeout(bA,1);return}bI.ready()}return bI})();var a="done fail isResolved isRejected promise then always pipe".split(" "),aL=[].slice;b.extend({_Deferred:function(){var bB=[],bC,bz,bA,e={done:function(){if(!bA){var bE=arguments,bF,bI,bH,bG,bD;if(bC){bD=bC;bC=0}for(bF=0,bI=bE.length;bF<bI;bF++){bH=bE[bF];bG=b.type(bH);if(bG==="array"){e.done.apply(e,bH)}else{if(bG==="function"){bB.push(bH)}}}if(bD){e.resolveWith(bD[0],bD[1])}}return this},resolveWith:function(bE,bD){if(!bA&&!bC&&!bz){bD=bD||[];bz=1;try{while(bB[0]){bB.shift().apply(bE,bD)}}finally{bC=[bE,bD];bz=0}}return this},resolve:function(){e.resolveWith(this,arguments);return this},isResolved:function(){return !!(bz||bC)},cancel:function(){bA=1;bB=[];return this}};return e},Deferred:function(bz){var e=b._Deferred(),bB=b._Deferred(),bA;b.extend(e,{then:function(bD,bC){e.done(bD).fail(bC);return this},always:function(){return e.done.apply(e,arguments).fail.apply(this,arguments)},fail:bB.done,rejectWith:bB.resolveWith,reject:bB.resolve,isRejected:bB.isResolved,pipe:function(bD,bC){return b.Deferred(function(bE){b.each({done:[bD,"resolve"],fail:[bC,"reject"]},function(bG,bJ){var bF=bJ[0],bI=bJ[1],bH;if(b.isFunction(bF)){e[bG](function(){bH=bF.apply(this,arguments);if(bH&&b.isFunction(bH.promise)){bH.promise().then(bE.resolve,bE.reject)}else{bE[bI](bH)}})}else{e[bG](bE[bI])}})}).promise()},promise:function(bD){if(bD==null){if(bA){return bA}bA=bD={}}var bC=a.length;while(bC--){bD[a[bC]]=e[a[bC]]}return bD}});e.done(bB.cancel).fail(e.cancel);delete e.cancel;if(bz){bz.call(e,e)}return e},when:function(bE){var bz=arguments,bA=0,bD=bz.length,bC=bD,e=bD<=1&&bE&&b.isFunction(bE.promise)?bE:b.Deferred();function bB(bF){return function(bG){bz[bF]=arguments.length>1?aL.call(arguments,0):bG;if(!(--bC)){e.resolveWith(e,aL.call(bz,0))}}}if(bD>1){for(;bA<bD;bA++){if(bz[bA]&&b.isFunction(bz[bA].promise)){bz[bA].promise().then(bB(bA),e.reject)}else{--bC}}if(!bC){e.resolveWith(e,bz)}}else{if(e!==bE){e.resolveWith(e,bD?[bE]:[])}}return e.promise()}});b.support=(function(){var bJ=aw.createElement("div"),bP=aw.documentElement,bD,bQ,bK,bB,bI,bE,bG,bA,bH,bz,bM,bC,bF,bN,bR;bJ.setAttribute("className","t");bJ.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";bD=bJ.getElementsByTagName("*");bQ=bJ.getElementsByTagName("a")[0];if(!bD||!bD.length||!bQ){return{}}bK=aw.createElement("select");bB=bK.appendChild(aw.createElement("option"));bI=bJ.getElementsByTagName("input")[0];bG={leadingWhitespace:(bJ.firstChild.nodeType===3),tbody:!bJ.getElementsByTagName("tbody").length,htmlSerialize:!!bJ.getElementsByTagName("link").length,style:/top/.test(bQ.getAttribute("style")),hrefNormalized:(bQ.getAttribute("href")==="/a"),opacity:/^0.55$/.test(bQ.style.opacity),cssFloat:!!bQ.style.cssFloat,checkOn:(bI.value==="on"),optSelected:bB.selected,getSetAttribute:bJ.className!=="t",submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true};bI.checked=true;bG.noCloneChecked=bI.cloneNode(true).checked;bK.disabled=true;bG.optDisabled=!bB.disabled;try{delete bJ.test}catch(bO){bG.deleteExpando=false}if(!bJ.addEventListener&&bJ.attachEvent&&bJ.fireEvent){bJ.attachEvent("onclick",function bL(){bG.noCloneEvent=false;bJ.detachEvent("onclick",bL)});bJ.cloneNode(true).fireEvent("onclick")}bI=aw.createElement("input");bI.value="t";bI.setAttribute("type","radio");bG.radioValue=bI.value==="t";bI.setAttribute("checked","checked");bJ.appendChild(bI);bA=aw.createDocumentFragment();bA.appendChild(bJ.firstChild);bG.checkClone=bA.cloneNode(true).cloneNode(true).lastChild.checked;bJ.innerHTML="";bJ.style.width=bJ.style.paddingLeft="1px";bH=aw.createElement("body");bz={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};for(bN in bz){bH.style[bN]=bz[bN]}bH.appendChild(bJ);bP.insertBefore(bH,bP.firstChild);bG.appendChecked=bI.checked;bG.boxModel=bJ.offsetWidth===2;if("zoom" in bJ.style){bJ.style.display="inline";bJ.style.zoom=1;bG.inlineBlockNeedsLayout=(bJ.offsetWidth===2);bJ.style.display="";bJ.innerHTML="<div style='width:4px;'></div>";bG.shrinkWrapBlocks=(bJ.offsetWidth!==2)}bJ.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";bM=bJ.getElementsByTagName("td");bR=(bM[0].offsetHeight===0);bM[0].style.display="";bM[1].style.display="none";bG.reliableHiddenOffsets=bR&&(bM[0].offsetHeight===0);bJ.innerHTML="";if(aw.defaultView&&aw.defaultView.getComputedStyle){bE=aw.createElement("div");bE.style.width="0";bE.style.marginRight="0";bJ.appendChild(bE);bG.reliableMarginRight=(parseInt((aw.defaultView.getComputedStyle(bE,null)||{marginRight:0}).marginRight,10)||0)===0}bH.innerHTML="";bP.removeChild(bH);if(bJ.attachEvent){for(bN in {submit:1,change:1,focusin:1}){bF="on"+bN;bR=(bF in bJ);if(!bR){bJ.setAttribute(bF,"return;");bR=(typeof bJ[bF]==="function")}bG[bN+"Bubbles"]=bR}}return bG})();b.boxModel=b.support.boxModel;var aS=/^(?:\{.*\}|\[.*\])$/,aB=/([a-z])([A-Z])/g;b.extend({cache:{},uuid:0,expando:"jQuery"+(b.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(e){e=e.nodeType?b.cache[e[b.expando]]:e[b.expando];return !!e&&!Y(e)},data:function(bB,bz,bD,bC){if(!b.acceptData(bB)){return}var bG=b.expando,bF=typeof bz==="string",bE,bH=bB.nodeType,e=bH?b.cache:bB,bA=bH?bB[b.expando]:bB[b.expando]&&b.expando;if((!bA||(bC&&bA&&!e[bA][bG]))&&bF&&bD===P){return}if(!bA){if(bH){bB[b.expando]=bA=++b.uuid}else{bA=b.expando}}if(!e[bA]){e[bA]={};if(!bH){e[bA].toJSON=b.noop}}if(typeof bz==="object"||typeof bz==="function"){if(bC){e[bA][bG]=b.extend(e[bA][bG],bz)}else{e[bA]=b.extend(e[bA],bz)}}bE=e[bA];if(bC){if(!bE[bG]){bE[bG]={}}bE=bE[bG]}if(bD!==P){bE[b.camelCase(bz)]=bD}if(bz==="events"&&!bE[bz]){return bE[bG]&&bE[bG].events}return bF?bE[b.camelCase(bz)]:bE},removeData:function(bC,bA,bD){if(!b.acceptData(bC)){return}var bF=b.expando,bG=bC.nodeType,bz=bG?b.cache:bC,bB=bG?bC[b.expando]:b.expando;if(!bz[bB]){return}if(bA){var bE=bD?bz[bB][bF]:bz[bB];if(bE){delete bE[bA];if(!Y(bE)){return}}}if(bD){delete bz[bB][bF];if(!Y(bz[bB])){return}}var e=bz[bB][bF];if(b.support.deleteExpando||bz!=bg){delete bz[bB]}else{bz[bB]=null}if(e){bz[bB]={};if(!bG){bz[bB].toJSON=b.noop}bz[bB][bF]=e}else{if(bG){if(b.support.deleteExpando){delete bC[b.expando]}else{if(bC.removeAttribute){bC.removeAttribute(b.expando)}else{bC[b.expando]=null}}}}},_data:function(bz,e,bA){return b.data(bz,e,bA,true)},acceptData:function(bz){if(bz.nodeName){var e=b.noData[bz.nodeName.toLowerCase()];if(e){return !(e===true||bz.getAttribute("classid")!==e)}}return true}});b.fn.extend({data:function(bC,bE){var bD=null;if(typeof bC==="undefined"){if(this.length){bD=b.data(this[0]);if(this[0].nodeType===1){var e=this[0].attributes,bA;for(var bB=0,bz=e.length;bB<bz;bB++){bA=e[bB].name;if(bA.indexOf("data-")===0){bA=b.camelCase(bA.substring(5));a9(this[0],bA,bD[bA])}}}}return bD}else{if(typeof bC==="object"){return this.each(function(){b.data(this,bC)})}}var bF=bC.split(".");bF[1]=bF[1]?"."+bF[1]:"";if(bE===P){bD=this.triggerHandler("getData"+bF[1]+"!",[bF[0]]);if(bD===P&&this.length){bD=b.data(this[0],bC);bD=a9(this[0],bC,bD)}return bD===P&&bF[1]?this.data(bF[0]):bD}else{return this.each(function(){var bH=b(this),bG=[bF[0],bE];bH.triggerHandler("setData"+bF[1]+"!",bG);b.data(this,bC,bE);bH.triggerHandler("changeData"+bF[1]+"!",bG)})}},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function a9(bB,bA,bC){if(bC===P&&bB.nodeType===1){var bz="data-"+bA.replace(aB,"$1-$2").toLowerCase();bC=bB.getAttribute(bz);if(typeof bC==="string"){try{bC=bC==="true"?true:bC==="false"?false:bC==="null"?null:!b.isNaN(bC)?parseFloat(bC):aS.test(bC)?b.parseJSON(bC):bC}catch(bD){}b.data(bB,bA,bC)}else{bC=P}}return bC}function Y(bz){for(var e in bz){if(e!=="toJSON"){return false}}return true}function bl(bC,bB,bE){var bA=bB+"defer",bz=bB+"queue",e=bB+"mark",bD=b.data(bC,bA,P,true);if(bD&&(bE==="queue"||!b.data(bC,bz,P,true))&&(bE==="mark"||!b.data(bC,e,P,true))){setTimeout(function(){if(!b.data(bC,bz,P,true)&&!b.data(bC,e,P,true)){b.removeData(bC,bA,true);bD.resolve()}},0)}}b.extend({_mark:function(bz,e){if(bz){e=(e||"fx")+"mark";b.data(bz,e,(b.data(bz,e,P,true)||0)+1,true)}},_unmark:function(bC,bB,bz){if(bC!==true){bz=bB;bB=bC;bC=false}if(bB){bz=bz||"fx";var e=bz+"mark",bA=bC?0:((b.data(bB,e,P,true)||1)-1);if(bA){b.data(bB,e,bA,true)}else{b.removeData(bB,e,true);bl(bB,bz,"mark")}}},queue:function(bz,e,bB){if(bz){e=(e||"fx")+"queue";var bA=b.data(bz,e,P,true);if(bB){if(!bA||b.isArray(bB)){bA=b.data(bz,e,b.makeArray(bB),true)}else{bA.push(bB)}}return bA||[]}},dequeue:function(bB,bA){bA=bA||"fx";var e=b.queue(bB,bA),bz=e.shift(),bC;if(bz==="inprogress"){bz=e.shift()}if(bz){if(bA==="fx"){e.unshift("inprogress")}bz.call(bB,function(){b.dequeue(bB,bA)})}if(!e.length){b.removeData(bB,bA+"queue",true);bl(bB,bA,"queue")}}});b.fn.extend({queue:function(e,bz){if(typeof e!=="string"){bz=e;e="fx"}if(bz===P){return b.queue(this[0],e)}return this.each(function(){var bA=b.queue(this,e,bz);if(e==="fx"&&bA[0]!=="inprogress"){b.dequeue(this,e)}})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(bz,e){bz=b.fx?b.fx.speeds[bz]||bz:bz;e=e||"fx";return this.queue(e,function(){var bA=this;setTimeout(function(){b.dequeue(bA,e)},bz)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(bH,bA){if(typeof bH!=="string"){bA=bH;bH=P}bH=bH||"fx";var e=b.Deferred(),bz=this,bC=bz.length,bF=1,bD=bH+"defer",bE=bH+"queue",bG=bH+"mark",bB;function bI(){if(!(--bF)){e.resolveWith(bz,[bz])}}while(bC--){if((bB=b.data(bz[bC],bD,P,true)||(b.data(bz[bC],bE,P,true)||b.data(bz[bC],bG,P,true))&&b.data(bz[bC],bD,b._Deferred(),true))){bF++;bB.done(bI)}}bI();return e.promise()}});var aQ=/[\n\t\r]/g,ah=/\s+/,aU=/\r/g,g=/^(?:button|input)$/i,I=/^(?:button|input|object|select|textarea)$/i,n=/^a(?:rea)?$/i,ap=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,bc=/\:/,a7,a1;b.fn.extend({attr:function(e,bz){return b.access(this,e,bz,true,b.attr)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,bz){return b.access(this,e,bz,true,b.prop)},removeProp:function(e){e=b.propFix[e]||e;return this.each(function(){try{this[e]=P;delete this[e]}catch(bz){}})},addClass:function(bF){if(b.isFunction(bF)){return this.each(function(bI){var bH=b(this);bH.addClass(bF.call(this,bI,bH.attr("class")||""))})}if(bF&&typeof bF==="string"){var e=(bF||"").split(ah);for(var bB=0,bA=this.length;bB<bA;bB++){var bz=this[bB];if(bz.nodeType===1){if(!bz.className){bz.className=bF}else{var bC=" "+bz.className+" ",bE=bz.className;for(var bD=0,bG=e.length;bD<bG;bD++){if(bC.indexOf(" "+e[bD]+" ")<0){bE+=" "+e[bD]}}bz.className=b.trim(bE)}}}}return this},removeClass:function(bD){if(b.isFunction(bD)){return this.each(function(bH){var bG=b(this);bG.removeClass(bD.call(this,bH,bG.attr("class")))})}if((bD&&typeof bD==="string")||bD===P){var bE=(bD||"").split(ah);for(var bA=0,bz=this.length;bA<bz;bA++){var bC=this[bA];if(bC.nodeType===1&&bC.className){if(bD){var bB=(" "+bC.className+" ").replace(aQ," ");for(var bF=0,e=bE.length;bF<e;bF++){bB=bB.replace(" "+bE[bF]+" "," ")}bC.className=b.trim(bB)}else{bC.className=""}}}}return this},toggleClass:function(bB,bz){var bA=typeof bB,e=typeof bz==="boolean";if(b.isFunction(bB)){return this.each(function(bD){var bC=b(this);bC.toggleClass(bB.call(this,bD,bC.attr("class"),bz),bz)})}return this.each(function(){if(bA==="string"){var bE,bD=0,bC=b(this),bF=bz,bG=bB.split(ah);while((bE=bG[bD++])){bF=e?bF:!bC.hasClass(bE);bC[bF?"addClass":"removeClass"](bE)}}else{if(bA==="undefined"||bA==="boolean"){if(this.className){b._data(this,"__className__",this.className)}this.className=this.className||bB===false?"":b._data(this,"__className__")||""}}})},hasClass:function(e){var bB=" "+e+" ";for(var bA=0,bz=this.length;bA<bz;bA++){if((" "+this[bA].className+" ").replace(aQ," ").indexOf(bB)>-1){return true}}return false},val:function(bB){var e,bz,bA=this[0];if(!arguments.length){if(bA){e=b.valHooks[bA.nodeName.toLowerCase()]||b.valHooks[bA.type];if(e&&"get" in e&&(bz=e.get(bA,"value"))!==P){return bz}return(bA.value||"").replace(aU,"")}return P}var bC=b.isFunction(bB);return this.each(function(bE){var bD=b(this),bF;if(this.nodeType!==1){return}if(bC){bF=bB.call(this,bE,bD.val())}else{bF=bB}if(bF==null){bF=""}else{if(typeof bF==="number"){bF+=""}else{if(b.isArray(bF)){bF=b.map(bF,function(bG){return bG==null?"":bG+""})}}}e=b.valHooks[this.nodeName.toLowerCase()]||b.valHooks[this.type];if(!e||!("set" in e)||e.set(this,bF,"value")===P){this.value=bF}})}});b.extend({valHooks:{option:{get:function(e){var bz=e.attributes.value;return !bz||bz.specified?e.value:e.text}},select:{get:function(e){var bE,bC=e.selectedIndex,bF=[],bG=e.options,bB=e.type==="select-one";if(bC<0){return null}for(var bz=bB?bC:0,bD=bB?bC+1:bG.length;bz<bD;bz++){var bA=bG[bz];if(bA.selected&&(b.support.optDisabled?!bA.disabled:bA.getAttribute("disabled")===null)&&(!bA.parentNode.disabled||!b.nodeName(bA.parentNode,"optgroup"))){bE=b(bA).val();if(bB){return bE}bF.push(bE)}}if(bB&&!bF.length&&bG.length){return b(bG[bC]).val()}return bF},set:function(bz,bA){var e=b.makeArray(bA);b(bz).find("option").each(function(){this.selected=b.inArray(b(this).val(),e)>=0});if(!e.length){bz.selectedIndex=-1}return e}}},attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attrFix:{tabindex:"tabIndex"},attr:function(bE,bB,bF,bD){var bz=bE.nodeType;if(!bE||bz===3||bz===8||bz===2){return P}if(bD&&bB in b.attrFn){return b(bE)[bB](bF)}if(!("getAttribute" in bE)){return b.prop(bE,bB,bF)}var bA,e,bC=bz!==1||!b.isXMLDoc(bE);bB=bC&&b.attrFix[bB]||bB;e=b.attrHooks[bB];if(!e){if(ap.test(bB)&&(typeof bF==="boolean"||bF===P||bF.toLowerCase()===bB.toLowerCase())){e=a1}else{if(a7&&(b.nodeName(bE,"form")||bc.test(bB))){e=a7}}}if(bF!==P){if(bF===null){b.removeAttr(bE,bB);return P}else{if(e&&"set" in e&&bC&&(bA=e.set(bE,bF,bB))!==P){return bA}else{bE.setAttribute(bB,""+bF);return bF}}}else{if(e&&"get" in e&&bC){return e.get(bE,bB)}else{bA=bE.getAttribute(bB);return bA===null?P:bA}}},removeAttr:function(bz,e){var bA;if(bz.nodeType===1){e=b.attrFix[e]||e;if(b.support.getSetAttribute){bz.removeAttribute(e)}else{b.attr(bz,e,"");bz.removeAttributeNode(bz.getAttributeNode(e))}if(ap.test(e)&&(bA=b.propFix[e]||e) in bz){bz[bA]=false}}},attrHooks:{type:{set:function(e,bz){if(g.test(e.nodeName)&&e.parentNode){b.error("type property can't be changed")}else{if(!b.support.radioValue&&bz==="radio"&&b.nodeName(e,"input")){var bA=e.value;e.setAttribute("type",bz);if(bA){e.value=bA}return bz}}}},tabIndex:{get:function(bz){var e=bz.getAttributeNode("tabIndex");return e&&e.specified?parseInt(e.value,10):I.test(bz.nodeName)||n.test(bz.nodeName)&&bz.href?0:P}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(bD,bB,bE){var bz=bD.nodeType;if(!bD||bz===3||bz===8||bz===2){return P}var bA,e,bC=bz!==1||!b.isXMLDoc(bD);bB=bC&&b.propFix[bB]||bB;e=b.propHooks[bB];if(bE!==P){if(e&&"set" in e&&(bA=e.set(bD,bE,bB))!==P){return bA}else{return(bD[bB]=bE)}}else{if(e&&"get" in e&&(bA=e.get(bD,bB))!==P){return bA}else{return bD[bB]}}},propHooks:{}});a1={get:function(bz,e){return bz[b.propFix[e]||e]?e.toLowerCase():P},set:function(bz,bB,e){var bA;if(bB===false){b.removeAttr(bz,e)}else{bA=b.propFix[e]||e;if(bA in bz){bz[bA]=bB}bz.setAttribute(e,e.toLowerCase())}return e}};b.attrHooks.value={get:function(bz,e){if(a7&&b.nodeName(bz,"button")){return a7.get(bz,e)}return bz.value},set:function(bz,bA,e){if(a7&&b.nodeName(bz,"button")){return a7.set(bz,bA,e)}bz.value=bA}};if(!b.support.getSetAttribute){b.attrFix=b.propFix;a7=b.attrHooks.name=b.valHooks.button={get:function(bA,bz){var e;e=bA.getAttributeNode(bz);return e&&e.nodeValue!==""?e.nodeValue:P},set:function(bA,bB,bz){var e=bA.getAttributeNode(bz);if(e){e.nodeValue=bB;return bB}}};b.each(["width","height"],function(bz,e){b.attrHooks[e]=b.extend(b.attrHooks[e],{set:function(bA,bB){if(bB===""){bA.setAttribute(e,"auto");return bB}}})})}if(!b.support.hrefNormalized){b.each(["href","src","width","height"],function(bz,e){b.attrHooks[e]=b.extend(b.attrHooks[e],{get:function(bB){var bA=bB.getAttribute(e,2);return bA===null?P:bA}})})}if(!b.support.style){b.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||P},set:function(e,bz){return(e.style.cssText=""+bz)}}}if(!b.support.optSelected){b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(bz){var e=bz.parentNode;if(e){e.selectedIndex;if(e.parentNode){e.parentNode.selectedIndex}}}})}if(!b.support.checkOn){b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}})}b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,bz){if(b.isArray(bz)){return(e.checked=b.inArray(b(e).val(),bz)>=0)}}})});var aI=Object.prototype.hasOwnProperty,a3=/\.(.*)$/,bi=/^(?:textarea|input|select)$/i,S=/\./g,bm=/ /g,aH=/[^\w\s.|`]/g,L=function(e){return e.replace(aH,"\\$&")};b.event={add:function(bB,bF,bK,bD){if(bB.nodeType===3||bB.nodeType===8){return}if(bK===false){bK=bo}else{if(!bK){return}}var bz,bJ;if(bK.handler){bz=bK;bK=bz.handler}if(!bK.guid){bK.guid=b.guid++}var bG=b._data(bB);if(!bG){return}var bL=bG.events,bE=bG.handle;if(!bL){bG.events=bL={}}if(!bE){bG.handle=bE=function(bM){return typeof b!=="undefined"&&(!bM||b.event.triggered!==bM.type)?b.event.handle.apply(bE.elem,arguments):P}}bE.elem=bB;bF=bF.split(" ");var bI,bC=0,e;while((bI=bF[bC++])){bJ=bz?b.extend({},bz):{handler:bK,data:bD};if(bI.indexOf(".")>-1){e=bI.split(".");bI=e.shift();bJ.namespace=e.slice(0).sort().join(".")}else{e=[];bJ.namespace=""}bJ.type=bI;if(!bJ.guid){bJ.guid=bK.guid}var bA=bL[bI],bH=b.event.special[bI]||{};if(!bA){bA=bL[bI]=[];if(!bH.setup||bH.setup.call(bB,bD,e,bE)===false){if(bB.addEventListener){bB.addEventListener(bI,bE,false)}else{if(bB.attachEvent){bB.attachEvent("on"+bI,bE)}}}}if(bH.add){bH.add.call(bB,bJ);if(!bJ.handler.guid){bJ.handler.guid=bK.guid}}bA.push(bJ);b.event.global[bI]=true}bB=null},global:{},remove:function(bN,bI,bA,bE){if(bN.nodeType===3||bN.nodeType===8){return}if(bA===false){bA=bo}var bQ,bD,bF,bK,bL=0,bB,bG,bJ,bC,bH,e,bP,bM=b.hasData(bN)&&b._data(bN),bz=bM&&bM.events;if(!bM||!bz){return}if(bI&&bI.type){bA=bI.handler;bI=bI.type}if(!bI||typeof bI==="string"&&bI.charAt(0)==="."){bI=bI||"";for(bD in bz){b.event.remove(bN,bD+bI)}return}bI=bI.split(" ");while((bD=bI[bL++])){bP=bD;e=null;bB=bD.indexOf(".")<0;bG=[];if(!bB){bG=bD.split(".");bD=bG.shift();bJ=new RegExp("(^|\\.)"+b.map(bG.slice(0).sort(),L).join("\\.(?:.*\\.)?")+"(\\.|$)")}bH=bz[bD];if(!bH){continue}if(!bA){for(bK=0;bK<bH.length;bK++){e=bH[bK];if(bB||bJ.test(e.namespace)){b.event.remove(bN,bP,e.handler,bK);bH.splice(bK--,1)}}continue}bC=b.event.special[bD]||{};for(bK=bE||0;bK<bH.length;bK++){e=bH[bK];if(bA.guid===e.guid){if(bB||bJ.test(e.namespace)){if(bE==null){bH.splice(bK--,1)}if(bC.remove){bC.remove.call(bN,e)}}if(bE!=null){break}}}if(bH.length===0||bE!=null&&bH.length===1){if(!bC.teardown||bC.teardown.call(bN,bG)===false){b.removeEvent(bN,bD,bM.handle)}bQ=null;delete bz[bD]}}if(b.isEmptyObject(bz)){var bO=bM.handle;if(bO){bO.elem=null}delete bM.events;delete bM.handle;if(b.isEmptyObject(bM)){b.removeData(bN,P,true)}}},customEvent:{getData:true,setData:true,changeData:true},trigger:function(e,bF,bD,bK){var bI=e.type||e,bA=[],bz;if(bI.indexOf("!")>=0){bI=bI.slice(0,-1);bz=true}if(bI.indexOf(".")>=0){bA=bI.split(".");bI=bA.shift();bA.sort()}if((!bD||b.event.customEvent[bI])&&!b.event.global[bI]){return}e=typeof e==="object"?e[b.expando]?e:new b.Event(bI,e):new b.Event(bI);e.type=bI;e.exclusive=bz;e.namespace=bA.join(".");e.namespace_re=new RegExp("(^|\\.)"+bA.join("\\.(?:.*\\.)?")+"(\\.|$)");if(bK||!bD){e.preventDefault();e.stopPropagation()}if(!bD){b.each(b.cache,function(){var bM=b.expando,bL=this[bM];if(bL&&bL.events&&bL.events[bI]){b.event.trigger(e,bF,bL.handle.elem)}});return}if(bD.nodeType===3||bD.nodeType===8){return}e.result=P;e.target=bD;bF=bF?b.makeArray(bF):[];bF.unshift(e);var bJ=bD,bB=bI.indexOf(":")<0?"on"+bI:"";do{var bG=b._data(bJ,"handle");e.currentTarget=bJ;if(bG){bG.apply(bJ,bF)}if(bB&&b.acceptData(bJ)&&bJ[bB]&&bJ[bB].apply(bJ,bF)===false){e.result=false;e.preventDefault()}bJ=bJ.parentNode||bJ.ownerDocument||bJ===e.target.ownerDocument&&bg}while(bJ&&!e.isPropagationStopped());if(!e.isDefaultPrevented()){var bC,bH=b.event.special[bI]||{};if((!bH._default||bH._default.call(bD.ownerDocument,e)===false)&&!(bI==="click"&&b.nodeName(bD,"a"))&&b.acceptData(bD)){try{if(bB&&bD[bI]){bC=bD[bB];if(bC){bD[bB]=null}b.event.triggered=bI;bD[bI]()}}catch(bE){}if(bC){bD[bB]=bC}b.event.triggered=P}}return e.result},handle:function(bF){bF=b.event.fix(bF||bg.event);var bz=((b._data(this,"events")||{})[bF.type]||[]).slice(0),bE=!bF.exclusive&&!bF.namespace,bC=Array.prototype.slice.call(arguments,0);bC[0]=bF;bF.currentTarget=this;for(var bB=0,e=bz.length;bB<e;bB++){var bD=bz[bB];if(bE||bF.namespace_re.test(bD.namespace)){bF.handler=bD.handler;bF.data=bD.data;bF.handleObj=bD;var bA=bD.handler.apply(this,bC);if(bA!==P){bF.result=bA;if(bA===false){bF.preventDefault();bF.stopPropagation()}}if(bF.isImmediatePropagationStopped()){break}}}return bF.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(bC){if(bC[b.expando]){return bC}var bz=bC;bC=b.Event(bz);for(var bA=this.props.length,bE;bA;){bE=this.props[--bA];bC[bE]=bz[bE]}if(!bC.target){bC.target=bC.srcElement||aw}if(bC.target.nodeType===3){bC.target=bC.target.parentNode}if(!bC.relatedTarget&&bC.fromElement){bC.relatedTarget=bC.fromElement===bC.target?bC.toElement:bC.fromElement}if(bC.pageX==null&&bC.clientX!=null){var bB=bC.target.ownerDocument||aw,bD=bB.documentElement,e=bB.body;bC.pageX=bC.clientX+(bD&&bD.scrollLeft||e&&e.scrollLeft||0)-(bD&&bD.clientLeft||e&&e.clientLeft||0);bC.pageY=bC.clientY+(bD&&bD.scrollTop||e&&e.scrollTop||0)-(bD&&bD.clientTop||e&&e.clientTop||0)}if(bC.which==null&&(bC.charCode!=null||bC.keyCode!=null)){bC.which=bC.charCode!=null?bC.charCode:bC.keyCode}if(!bC.metaKey&&bC.ctrlKey){bC.metaKey=bC.ctrlKey}if(!bC.which&&bC.button!==P){bC.which=(bC.button&1?1:(bC.button&2?3:(bC.button&4?2:0)))}return bC},guid:100000000,proxy:b.proxy,special:{ready:{setup:b.bindReady,teardown:b.noop},live:{add:function(e){b.event.add(this,t(e.origType,e.selector),b.extend({},e,{handler:an,guid:e.handler.guid}))},remove:function(e){b.event.remove(this,t(e.origType,e.selector),e)}},beforeunload:{setup:function(bA,bz,e){if(b.isWindow(this)){this.onbeforeunload=e}},teardown:function(bz,e){if(this.onbeforeunload===e){this.onbeforeunload=null}}}}};b.removeEvent=aw.removeEventListener?function(bz,e,bA){if(bz.removeEventListener){bz.removeEventListener(e,bA,false)}}:function(bz,e,bA){if(bz.detachEvent){bz.detachEvent("on"+e,bA)}};b.Event=function(bz,e){if(!this.preventDefault){return new b.Event(bz,e)}if(bz&&bz.type){this.originalEvent=bz;this.type=bz.type;this.isDefaultPrevented=(bz.defaultPrevented||bz.returnValue===false||bz.getPreventDefault&&bz.getPreventDefault())?k:bo}else{this.type=bz}if(e){b.extend(this,e)}this.timeStamp=b.now();this[b.expando]=true};function bo(){return false}function k(){return true}b.Event.prototype={preventDefault:function(){this.isDefaultPrevented=k;var bz=this.originalEvent;if(!bz){return}if(bz.preventDefault){bz.preventDefault()}else{bz.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=k;var bz=this.originalEvent;if(!bz){return}if(bz.stopPropagation){bz.stopPropagation()}bz.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=k;this.stopPropagation()},isDefaultPrevented:bo,isPropagationStopped:bo,isImmediatePropagationStopped:bo};var ag=function(bA){var bz=bA.relatedTarget;bA.type=bA.data;try{if(bz&&bz!==aw&&!bz.parentNode){return}while(bz&&bz!==this){bz=bz.parentNode}if(bz!==this){b.event.handle.apply(this,arguments)}}catch(bB){}},aX=function(e){e.type=e.data;b.event.handle.apply(this,arguments)};b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(bz,e){b.event.special[bz]={setup:function(bA){b.event.add(this,e,bA&&bA.selector?aX:ag,bz)},teardown:function(bA){b.event.remove(this,e,bA&&bA.selector?aX:ag)}}});if(!b.support.submitBubbles){b.event.special.submit={setup:function(bz,e){if(!b.nodeName(this,"form")){b.event.add(this,"click.specialSubmit",function(bC){var bB=bC.target,bA=bB.type;if((bA==="submit"||bA==="image")&&b(bB).closest("form").length){a0("submit",this,arguments)}});b.event.add(this,"keypress.specialSubmit",function(bC){var bB=bC.target,bA=bB.type;if((bA==="text"||bA==="password")&&b(bB).closest("form").length&&bC.keyCode===13){a0("submit",this,arguments)}})}else{return false}},teardown:function(e){b.event.remove(this,".specialSubmit")}}}if(!b.support.changeBubbles){var br,m=function(bz){var e=bz.type,bA=bz.value;if(e==="radio"||e==="checkbox"){bA=bz.checked}else{if(e==="select-multiple"){bA=bz.selectedIndex>-1?b.map(bz.options,function(bB){return bB.selected}).join("-"):""}else{if(b.nodeName(bz,"select")){bA=bz.selectedIndex}}}return bA},ae=function ae(bB){var bz=bB.target,bA,bC;if(!bi.test(bz.nodeName)||bz.readOnly){return}bA=b._data(bz,"_change_data");bC=m(bz);if(bB.type!=="focusout"||bz.type!=="radio"){b._data(bz,"_change_data",bC)}if(bA===P||bC===bA){return}if(bA!=null||bC){bB.type="change";bB.liveFired=P;b.event.trigger(bB,arguments[1],bz)}};b.event.special.change={filters:{focusout:ae,beforedeactivate:ae,click:function(bB){var bA=bB.target,bz=b.nodeName(bA,"input")?bA.type:"";if(bz==="radio"||bz==="checkbox"||b.nodeName(bA,"select")){ae.call(this,bB)}},keydown:function(bB){var bA=bB.target,bz=b.nodeName(bA,"input")?bA.type:"";if((bB.keyCode===13&&!b.nodeName(bA,"textarea"))||(bB.keyCode===32&&(bz==="checkbox"||bz==="radio"))||bz==="select-multiple"){ae.call(this,bB)}},beforeactivate:function(bA){var bz=bA.target;b._data(bz,"_change_data",m(bz))}},setup:function(bA,bz){if(this.type==="file"){return false}for(var e in br){b.event.add(this,e+".specialChange",br[e])}return bi.test(this.nodeName)},teardown:function(e){b.event.remove(this,".specialChange");return bi.test(this.nodeName)}};br=b.event.special.change.filters;br.focus=br.beforeactivate}function a0(bz,bB,e){var bA=b.extend({},e[0]);bA.type=bz;bA.originalEvent={};bA.liveFired=P;b.event.handle.call(bB,bA);if(bA.isDefaultPrevented()){e[0].preventDefault()}}if(!b.support.focusinBubbles){b.each({focus:"focusin",blur:"focusout"},function(bB,e){var bz=0;b.event.special[e]={setup:function(){if(bz++===0){aw.addEventListener(bB,bA,true)}},teardown:function(){if(--bz===0){aw.removeEventListener(bB,bA,true)}}};function bA(bC){var bD=b.event.fix(bC);bD.type=e;bD.originalEvent={};b.event.trigger(bD,null,bD.target);if(bD.isDefaultPrevented()){bC.preventDefault()}}})}b.each(["bind","one"],function(bz,e){b.fn[e]=function(bF,bG,bE){var bD;if(typeof bF==="object"){for(var bC in bF){this[e](bC,bG,bF[bC],bE)}return this}if(arguments.length===2||bG===false){bE=bG;bG=P}if(e==="one"){bD=function(bH){b(this).unbind(bH,bD);return bE.apply(this,arguments)};bD.guid=bE.guid||b.guid++}else{bD=bE}if(bF==="unload"&&e!=="one"){this.one(bF,bG,bE)}else{for(var bB=0,bA=this.length;bB<bA;bB++){b.event.add(this[bB],bF,bD,bG)}}return this}});b.fn.extend({unbind:function(bC,bB){if(typeof bC==="object"&&!bC.preventDefault){for(var bA in bC){this.unbind(bA,bC[bA])}}else{for(var bz=0,e=this.length;bz<e;bz++){b.event.remove(this[bz],bC,bB)}}return this},delegate:function(e,bz,bB,bA){return this.live(bz,bB,bA,e)},undelegate:function(e,bz,bA){if(arguments.length===0){return this.unbind("live")}else{return this.die(bz,null,bA,e)}},trigger:function(e,bz){return this.each(function(){b.event.trigger(e,bz,this)})},triggerHandler:function(e,bz){if(this[0]){return b.event.trigger(e,bz,this[0],true)}},toggle:function(bB){var bz=arguments,e=bB.guid||b.guid++,bA=0,bC=function(bD){var bE=(b.data(this,"lastToggle"+bB.guid)||0)%bA;b.data(this,"lastToggle"+bB.guid,bE+1);bD.preventDefault();return bz[bE].apply(this,arguments)||false};bC.guid=e;while(bA<bz.length){bz[bA++].guid=e}return this.click(bC)},hover:function(e,bz){return this.mouseenter(e).mouseleave(bz||e)}});var aV={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};b.each(["live","die"],function(bz,e){b.fn[e]=function(bJ,bG,bL,bC){var bK,bH=0,bI,bB,bN,bE=bC||this.selector,bA=bC?this:b(this.context);if(typeof bJ==="object"&&!bJ.preventDefault){for(var bM in bJ){bA[e](bM,bG,bJ[bM],bE)}return this}if(e==="die"&&!bJ&&bC&&bC.charAt(0)==="."){bA.unbind(bC);return this}if(bG===false||b.isFunction(bG)){bL=bG||bo;bG=P}bJ=(bJ||"").split(" ");while((bK=bJ[bH++])!=null){bI=a3.exec(bK);bB="";if(bI){bB=bI[0];bK=bK.replace(a3,"")}if(bK==="hover"){bJ.push("mouseenter"+bB,"mouseleave"+bB);continue}bN=bK;if(aV[bK]){bJ.push(aV[bK]+bB);bK=bK+bB}else{bK=(aV[bK]||bK)+bB}if(e==="live"){for(var bF=0,bD=bA.length;bF<bD;bF++){b.event.add(bA[bF],"live."+t(bK,bE),{data:bG,selector:bE,handler:bL,origType:bK,origHandler:bL,preType:bN})}}else{bA.unbind("live."+t(bK,bE),bL)}}return this}});function an(bJ){var bG,bB,bP,bD,e,bL,bI,bK,bH,bO,bF,bE,bN,bM=[],bC=[],bz=b._data(this,"events");if(bJ.liveFired===this||!bz||!bz.live||bJ.target.disabled||bJ.button&&bJ.type==="click"){return}if(bJ.namespace){bE=new RegExp("(^|\\.)"+bJ.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")}bJ.liveFired=this;var bA=bz.live.slice(0);for(bI=0;bI<bA.length;bI++){e=bA[bI];if(e.origType.replace(a3,"")===bJ.type){bC.push(e.selector)}else{bA.splice(bI--,1)}}bD=b(bJ.target).closest(bC,bJ.currentTarget);for(bK=0,bH=bD.length;bK<bH;bK++){bF=bD[bK];for(bI=0;bI<bA.length;bI++){e=bA[bI];if(bF.selector===e.selector&&(!bE||bE.test(e.namespace))&&!bF.elem.disabled){bL=bF.elem;bP=null;if(e.preType==="mouseenter"||e.preType==="mouseleave"){bJ.type=e.preType;bP=b(bJ.relatedTarget).closest(e.selector)[0];if(bP&&b.contains(bL,bP)){bP=bL}}if(!bP||bP!==bL){bM.push({elem:bL,handleObj:e,level:bF.level})}}}}for(bK=0,bH=bM.length;bK<bH;bK++){bD=bM[bK];if(bB&&bD.level>bB){break}bJ.currentTarget=bD.elem;bJ.data=bD.handleObj.data;bJ.handleObj=bD.handleObj;bN=bD.handleObj.origHandler.apply(bD.elem,arguments);if(bN===false||bJ.isPropagationStopped()){bB=bD.level;if(bN===false){bG=false}if(bJ.isImmediatePropagationStopped()){break}}}return bG}function t(bz,e){return(bz&&bz!=="*"?bz+".":"")+e.replace(S,"`").replace(bm,"&")}b.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error").split(" "),function(bz,e){b.fn[e]=function(bB,bA){if(bA==null){bA=bB;bB=null}return arguments.length>0?this.bind(e,bB,bA):this.trigger(e)};if(b.attrFn){b.attrFn[e]=true}});


bskyb.carousel = function (a) {
    $(".enable-carousel").each(function () {
        var s = $(this).attr("options");
        var c = {};
        c.el = $(this);
        c.length = $(this).find(".carousel-list-item").length;
        c.heros = $(this).find(".carousel-hero-item").clone();
        c.listheight = ($(this).find(".carousel-list-item").height() + parseInt($(this).find(".carousel-list-item").css("marginBottom"))) * -1;
        c.speed = bskyb.util.getoptions({
            opts: s,
            val: "speed",
            parse: true,
            def: 500
        });
        c.auto = bskyb.util.getoptions({
            opts: s,
            val: "auto"
        });
        c.fixed = bskyb.util.getoptions({
            opts: s,
            val: "fixed"
        });
        c.nocycle = bskyb.util.getoptions({
            opts: s,
            val: "nocycle"
        });

        function p(u) {
            try {
                sky.tracking.featuredContentClickManual("carousel", u)
            } catch (t) {}
        }
        function m(t) {
            var e = c.el.find(".carousel-disabled");
            c.el.find(".carousel-disabled:visible")[0] ? e.hide() : e.show()
        }
        function k(t) {
            c.heros.removeClass("js-hdn");
            var e = c.heros.find(".gallery-placeholder").clone();
            c.heros.find(".enable-gallery").html("").append(e);
            c.el.find(".carousel-hero-item:gt(0)").remove();
            c.el.find(".carousel-hero-item").attr({
                rel: "0"
            });
            c.el.find(".carousel-list-item").each(function (w) {
                $(this).attr({
                    rel: w
                });
                c.heros.eq(w).attr({
                    rel: w
                })
            });
            c.el.find(".carousel-list-rail").prepend(c.el.find(".carousel-list-rail li:last").clone());
            c.el.find(".carousel-list-rail").append(c.el.find(".carousel-list-rail li:eq(1)").clone());
            c.el.find(".carousel-list-rail").append(c.el.find(".carousel-list-rail li:eq(2)").clone());
            c.el.find(".carousel-list-rail").css({
                marginTop: c.listheight * 2
            });
            if (c.fixed == "false") {
                c.el.append('<div class="carousel-controls"><div class="carousel-butt butt-bw"></div><ul></ul><div class="carousel-butt butt-fw"></div></div><span class="disabled"></span>');
                for (i = 0; i < c.length; i++) {
                    var u = "";
                    i == 0 && (u = "disabled");
                    c.el.find(".carousel-controls ul").append('<li class="' + u + ' currentitem" rel="' + i + '"></li>')
                }
                c.el.append('<div class="carousel-disabled"></div>')
            }
            c.el.delegate(".hero-link-overlay", "click", function (w) {
                location.href = $(this).attr("href")
            });
            c.el.delegate(".hero-link-overlay", "mouseover", function (w) {
                c.el.find(".hero-hdl,.hero-byl").addClass("on")
            });
            c.el.delegate(".hero-link-overlay", "mouseout", function (w) {
                c.el.find(".hero-hdl,.hero-byl").removeClass("on")
            });
            c.el.delegate("#tab-latest div.carousel-hero-item", "click", function (x) {
                var w = $(this).attr("rel");
                p("carousel-item-" + w)
            });
            $(".v5-carousel .carousel-hero-item").show();
            c.heros.css({
                display: "block"
            });
            c.el.find(".carousel-list-rail li").css({
                visibility: "visible"
            });
            c.el.find(".carousel-list-rail").css({
                backgroundImage: "none"
            });
            c.el.addClass("loaded").css({
                backgroundImage: "none"
            })
        }
        function d(e) {
            if (c.heros.length < 2) {
                return false
            }
            if (typeof (e.auto) == "undefined") {
                clearTimeout(window.carouselInterval);
                c.auto = "false";
                c.nocycle = "false";
                c.el.find(".carousel-list-item").removeClass("disabled")
            } else {} if (c.fixed != "false") {
                c.nocycle = "true"
            }
            if (e.item == c.length) {
                e.item = 0
            }
            if (e.item == -1) {
                e.item = c.length - 1
            }
            if (e.item != "x") {
                m();
                f({
                    item: e.item,
                    nocycle: c.nocycle
                }, function (t) {
                    if (c.fixed == "false") {
                        if (c.nocycle == "false") {
                            c.el.find(".carousel-controls ul li").removeClass("disabled");
                            c.el.find(".carousel-controls ul li:eq(" + e.item + ")").addClass("disabled")
                        }
                        c.el.find(".carousel-controls ul li").removeClass("currentitem");
                        c.el.find(".carousel-controls ul li:eq(" + e.item + ")").addClass("currentitem");
                        g({
                            item: e.item,
                            direction: e.direction,
                            skip: e.skip
                        })
                    }
                })
            }
            if (e.item == "x") {
                c.el.find(".carousel-controls ul li").click(function () {
                    p("dot nav");
                    if ($(this).hasClass("disabled") == false) {
                        d({
                            item: $(this).attr("rel")
                        })
                    }
                })
            }
            if (e.scroll) {}
        }
        function b(e) {
            c.el.find(".carousel-butt").click(function (u, t) {
                !t && p("back and forward arrows");
                var w = c.el.find(".carousel-controls ul li").index(c.el.find(".carousel-controls ul li.currentitem"));
                if ($(this).hasClass("butt-fw")) {
                    d({
                        item: w + 1,
                        direction: "forwards",
                        auto: t
                    })
                } else {
                    d({
                        item: w - 1,
                        direction: "backwards",
                        auto: t
                    })
                }
            })
        }
        function g(u) {
            if (u.direction == "forwards") {
                if (u.skip == 1) {
                    c.el.find(".carousel-list-rail").css({
                        marginTop: 0
                    })
                }
                if (parseInt(c.el.find(".carousel-list-rail").css("marginTop")) == c.listheight * (c.length + 1)) {
                    c.el.find(".carousel-list-rail").css({
                        marginTop: c.listheight
                    })
                }
                c.el.find(".carousel-list-rail").animate({
                    marginTop: c.listheight * (parseInt(u.item + 2))
                }, c.speed, function () {
                    if (u.item == c.length - 1) {
                        c.el.find(".carousel-list-rail").css({
                            marginTop: c.listheight
                        })
                    }
                })
            }
            if (u.direction == "backwards") {
                if (u.item != c.length - 1) {
                    var e = parseInt(c.el.find(".carousel-list-rail").css("marginTop"));
                    c.el.find(".carousel-list-rail").animate({
                        marginTop: e - c.listheight
                    }, c.speed)
                } else {
                    c.el.find(".carousel-list-rail").animate({
                        marginTop: c.listheight
                    }, c.speed, function () {
                        c.el.find(".carousel-list-rail").css({
                            marginTop: c.listheight * (c.length + 1)
                        })
                    })
                }
            }
            if (!u.direction) {
                c.el.find(".carousel-list-rail").animate({
                    marginTop: c.listheight * (parseInt(u.item) + 2)
                }, c.speed)
            }
        }
        function o(e) {
            c.el.find(".carousel-list-item").click(function () {
                p("carousel thumbnails");
                if ($(this).hasClass("disabled")) {
                    return false
                }
                if (c.fixed != "false") {
                    location.href = $(this).find(".carousel-list-link").attr("href")
                } else {
                    if ($(this).position().top == 0) {
                        c.el.find(".butt-fw").trigger("click", "x")
                    } else {
                        var u = parseInt($(this).attr("rel")),
                            t;
                        u == 0 ? t = 1 : t = 0;
                        d({
                            direction: "forwards",
                            item: u,
                            skip: t
                        })
                    }
                    return false
                }
            })
        }
        function f(t, C) {
            function u(J) {
                var I = -660,
                    H = c.speed;
                C && C();
                c.el.find(".carousel-hero-rail").animate({
                    marginLeft: I
                }, H, function () {
                    c.el.find(".carousel-hero-rail").css({
                        marginLeft: 0
                    });
                    c.el.find(".carousel-hero-rail").find(".carousel-hero-item:first").remove();
                    m();
                    c.el.find(".overlay-loader").removeClass("js-hdn");
                    switch (D) {
                    case "standard":
                        l();
                        break;
                    case "gallery":
                        $(".hero-gallery .v5-gallery:visible").Gallery();
                        break;
                    case "video":
                        l();
                        break
                    }
                })
            }
            var y = c.heros.eq(t.item).clone();
            var D = y.attr("type");
            if (c.auto != "false" && t.nocycle != "false" && !t.noscroll) {
                D = "nocycle"
            }
            switch (D) {
            case "standard":
                var G = y.find(".hero-img").attr("load");
                if (y.find(".hero-img").attr("load").length > 0) {
                    var A = new Image();
                    $(A).bind("load", function (H) {
                        y.find(".hero-img").attr("src", G);
                        c.el.find(".carousel-hero-rail").append(y);
                        u(y)
                    }).error(function () {
                        C && C();
                        m()
                    }).attr("src", G)
                } else {
                    u(y)
                }
                break;
            case "video":
                var B = y.attr("videoid");
                var E = y.attr("videoname");
                var e = y.attr("id");
                var w = y.attr("pageurl");
                var x = y.attr("videoposter");
                var F = y.attr("videowidth") || "662";
                var z = y.attr("videoheight") || "372";
                c.el.find(".carousel-hero-rail").append(y);
                h({
                    videoid: B,
                    hero: y,
                    videoname: E,
                    id: e,
                    videowidth: F,
                    videoheight: z
                }, function (H) {
                    $.getJSON("http://api.brightcove.com/services/library?command=find_video_by_id&media_delivery=http&video_fields=name,videoStillURL,renditions&video_id=" + B + "&token=FKf2-UXI9EvFQmSk77uLPw5oVfIcmNUcDTXD9Cl_oRc.&callback=?", function (J) {
                        $("#" + y.attr("id")).prepend("<h4 class='hero-byl v5-rnd-5'>VIDEO: " + J.name + "</h4><img src='/Images/skysports/v5/ajax-loader-t6.gif' class='overlay-loader js-hdn' /><span class='overlay'></span><img class='v5-vid-thumb'/>");
                        if (t.firstplay == true) {
                            c.el.find(".overlay-loader").removeClass("js-hdn")
                        }
                        var I = new Image();
                        if (x || x.length > 0) {
                            J.videoStillURL = x
                        }
                        $(I).bind("load", function (K) {
                            $("#" + y.attr("id")).find(".v5-vid-thumb").attr("src", J.videoStillURL);
                            $("#" + y.attr("id")).find("span.overlay").mouseover(function () {
                                $("#" + y.attr("id")).find(".hero-byl").addClass("on")
                            });
                            $("#" + y.attr("id")).find("span.overlay").mouseout(function () {
                                $("#" + y.attr("id")).find(".hero-byl").removeClass("on")
                            });
                            $("#" + y.attr("id")).find("span.overlay,.hero-byl").click(function () {
                                $("#" + y.attr("id")).find(".hero-byl,span.overlay").hide();
                                $("#" + y.attr("id")).find(".v5-vid-thumb").hide();
                                if (navigator.userAgent.match(/iP/)) {
                                    y.append("<video controls id='carousel-html5vid' src='" + J.renditions[1].url + "' width='660px' height='350px'></video>");
                                    y.find("#carousel-html5vid")[0].play()
                                } else {
                                    VCVP[E].loadVideo(B)
                                }
                                clearTimeout(window.carouselInterval);
                                c.auto = "false";
                                c.nocycle = "false"
                            });
                            if (t.noscroll != true) {
                                u(y)
                            } else {
                                l(t)
                            }
                        }).attr("src", J.videoStillURL);
                        if (navigator.userAgent.match(/iP/)) {
                            y.find("span.overlay").css({
                                visibility: "visible"
                            });
                            y.find(".overlay-loader").remove()
                        }
                    })
                });
                break;
            case "gallery":
                c.el.find(".carousel-hero-rail").append(y);
                u(y);
                break;
            case "nocycle":
                c.el.find(".carousel-list-item[rel=0]").addClass("disabled");
                C && C();
                m();
                l();
                break
            }
        }
        function h(x, u) {
            !x.videowidth && (x.videowidth = 662);
            !x.videoheight && (x.videoheight = 372);
            var A = "false";
            if (x.auto) {
                A = x.auto
            }
            if (navigator.userAgent.match(/iP/)) {
                u()
            } else {
                var y = {};
                y.width = x.videowidth;
                y.height = x.videoheight;
                y.bgcolor = "#050538";
                y.playerID = "739703908001";
                y.publisherID = "165012893";
                y.wmode = "transparent";
                y.isVid = "true";
                y.isUI = "true";
                y.dynamicStreaming = "true";
                y.videoSmoothing = "true";
                y.autoStart = x.auto;
                y.videoId = x.videoid;
                var t = brightcove.createElement("object");
                t.id = x.videoname;
                var z;
                for (var e in y) {
                    z = brightcove.createElement("param");
                    z.name = e;
                    z.value = y[e];
                    t.appendChild(z)
                }
                var w = document.getElementById(x.id);
                brightcove.createExperience(t, w, true);
                u()
            }
        }
        function l(e) {
            clearInterval(window.carouselInterval);
            if (c.auto != "false") {
                c.auto = parseInt(c.auto);
                window.carouselInterval = setTimeout(function () {
                    c.el.find(".butt-fw").trigger("click", "x")
                }, c.auto)
            }
        }
        function q() {
            k();
            b();
            d({
                item: "x",
                auto: "x"
            });
            o()
        }
        try {
            if (location.hash != "#tab-watch") {
                q()
            }
        } catch (n) {}
        if (c.heros.eq(0).attr("type") == "video") {
            c.el.find(".carousel-hero-rail .carousel-hero-item").remove();
            f({
                item: 0,
                type: "video",
                noscroll: true,
                firstplay: true
            });
            if (c.nocycle != "false") {
                c.auto = c.auto
            } else {
                clearTimeout(window.carouselInterval);
                c.auto = "false";
                c.nocycle = "false"
            }
        }
        if (c.heros.eq(0).attr("type") == "gallery") {
            $(".hero-gallery .v5-gallery:visible").Gallery()
        }
        if (c.heros.eq(0).attr("type") == "standard") {
            l()
        }
        tabactions = function () {
            var t = c.el.parents(".enable-tabs");
            c.el.parents(".enable-tabs").find(".tab-anchors li").click(function (y, e) {
                $(".vp-popout-disabled").hide();
                c.el.find("video").each(function () {
                    this.pause()
                });
                if ($(this).hasClass("tab-watch")) {
                    function B(E) {
                        var C = $(".v-player-container", t);
                        var x = $("li#" + E);
                        var D = x.find("a").attr("href");
                        if (C.find("iframe").length == 1) {
                            C.html("");
                            __spHost.startPageUrl = D;
                            __spHost.createSyndicatedPlayer()
                        } else {
                            C.html("");
                            __spHost = new SPHost();
                            __spHost.hostId = "SKYSPORTS";
                            __spHost.brandName = "Sky Sports";
                            __spHost.placeHolder = C.get(0);
                            __spHost.startPageUrl = D;
                            __spHost.createSyndicatedPlayer()
                        }
                        $(".v5-channel-nav li").removeClass("on");
                        x.addClass("on")
                    }
                    function z() {
                        var x = $(".v-player-container", t).html("<img src='/Images/skysports/v5/ajax-loader-t6.gif' class='overlay-loader' />");
                        if (bskyb.browser == "ios") {
                            $.getJSON("http://api.brightcove.com/services/library?command=find_video_by_id&media_delivery=http&video_id=1806217383&token=FKf2-UXI9EvFQmSk77uLPw5oVfIcmNUcDTXD9Cl_oRc.&callback=?", function (C) {
                                $("#vp-player-holder").html("<video height='352px' width='662px' src='" + C.videoFullLength.url + "' poster='" + C.videoStillURL + "' controls=controls></video>").find("overlay-loader").remove()
                            })
                        } else {
                            h({
                                videoid: 1806217383,
                                auto: true,
                                videoname: "rollingnews",
                                id: "vp-player-holder"
                            }, function () {
                                $(".col2", t).find(".v5-channel-nav li").removeClass("on");
                                $(".v5-channel-nav .free", t).parent().addClass("on")
                            })
                        }
                    }
                    function w() {
                        var x = {
                            st: 0
                        };
                        if (bskyb.cookie.get("interactive")) {
                            x = $.evalJSON(decodeURIComponent(bskyb.cookie.get("interactive")))
                        }
                        if (x.st && x.st == 2 && bskyb.cookie.get("skyplayerSSO")) {
                            $("#vp-popout-button").show();
                            $("#tab-watch .vp-login-box").remove();
                            $("#tab-watch .disable-nav").remove();
                            $("#tab-watch #vp-channel-nav").animate({
                                opacity: 1
                            }, function () {
                                $(this).removeClass("disabled")
                            });
                            if (bskyb.cookie.get("tab-watch-channel")) {
                                if (bskyb.cookie.get("tab-watch-channel") != "ch-0") {
                                    B(bskyb.cookie.get("tab-watch-channel"))
                                } else {
                                    z()
                                }
                            } else {
                                z()
                            }
                        } else {
                            $("#vp-popout-button").hide();
                            $("#tab-watch .vp-login-box").show();
                            if (bskyb.cookie.get("tab-watch-channel") == "ch-0") {
                                z()
                            } else {
                                bskyb.cookie.set("tab-watch-channel", "ch-0");
                                z()
                            }
                        }
                    }
                    clearInterval(window.bskybgallery0);
                    clearTimeout(window.carouselInterval);
                    c.auto = "false";
                    var A = c.el.find(".hero-video").attr("videoname");
                    VCVP[A] && VCVP[A].pause();
                    if ($("#tab-watch", t).children().length == 0) {
                        $.ajax({
                            url: $(this).attr("url"),
                            success: function (x) {
                                $("#tab-watch", t).append(x);
                                w();
                                $(".v5-channel-nav .subscribe", t).bind("click", function () {
                                    if (!$(this).parent().hasClass("disabled")) {
                                        var C = $(this).parents("li").attr("id");
                                        bskyb.cookie.set("tab-watch-channel", C);
                                        B(C)
                                    }
                                    return false
                                });
                                $(".v5-channel-nav .free", t).bind("click", function () {
                                    var C = $(this).parents("li").attr("id");
                                    bskyb.cookie.set("tab-watch-channel", C);
                                    z();
                                    return false
                                })
                            }
                        })
                    } else {
                        w()
                    }
                }
                if ($(this).hasClass("tab-latest")) {
                    if (c.el.hasClass("loaded") == false) {
                        q()
                    }
                    if ($(".v-player-container iframe", t).length == 1) {
                        $(".v-player-container iframe", t).attr("src", "")
                    }
                    if (VCVP.rollingnews) {
                        VCVP.rollingnews && VCVP.rollingnews.pause()
                    }
                }
                return false
            });
            try {
                if ($(".tab-section#" + (location.hash.replace("jumpto-", "")))[0]) {
                    $(".tab-anchors li a[href='" + (location.hash.replace("jumpto-", "")) + "']").trigger("click")
                }
            } catch (u) {}
        };
        tabactions();
        $(window).scroll($.debounce(600, function () {
            $("#tab-latest div.enable-carousel:in-viewport")[0] ? l() : clearTimeout(window.carouselInterval)
        }))
    })
};
// JavaScript Document