var g,k=this,l=function(a,b){var c=a.split("."),d=k;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b},p=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b};Math.random();
var t=function(a,b){function c(){}c.prototype=b.prototype;a.v=b.prototype;a.prototype=new c;a.u=function(a,c,f){for(var h=Array(arguments.length-2),m=2;m<arguments.length;m++)h[m-2]=arguments[m];return b.prototype[c].apply(a,h)}};var u=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};t(u,Error);var aa=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},v=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},w=function(a,b){return a<b?-1:a>b?1:0};Math.random();var x=function(a,b){b.unshift(a);u.call(this,aa.apply(null,b));b.shift()};t(x,u);var y=function(a,b,c){if(!a){var d="Assertion failed";if(b)var d=d+(": "+b),e=Array.prototype.slice.call(arguments,2);throw new x(""+d,e||[]);}};var z=Array.prototype,B=function(a){return z.concat.apply(z,arguments)},ba=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var C=function(a){var b=arguments.length;if(1==b&&"array"==p(arguments[0]))return C.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};C("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));C("action","cite","data","formaction","href","manifest","poster","src");C("embed","iframe","link","object","script","style","template");var D;t:{var E=k.navigator;if(E){var F=E.userAgent;if(F){D=F;break t}}D=""};var ca=-1!=D.indexOf("Opera")||-1!=D.indexOf("OPR"),G=-1!=D.indexOf("Trident")||-1!=D.indexOf("MSIE"),H=-1!=D.indexOf("Gecko")&&-1==D.toLowerCase().indexOf("webkit")&&!(-1!=D.indexOf("Trident")||-1!=D.indexOf("MSIE")),I=-1!=D.toLowerCase().indexOf("webkit"),da=I&&-1!=D.indexOf("Mobile"),J=function(){var a=k.document;return a?a.documentMode:void 0},ea=function(){var a="",b;if(ca&&k.opera)return a=k.opera.version,"function"==p(a)?a():a;H?b=/rv\:([^\);]+)(\)|;)/:G?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:
I&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(D))?a[1]:"");return G&&(b=J(),b>parseFloat(a))?String(b):a}(),fa={},ga=function(a){if(!fa[a]){for(var b=0,c=v(String(ea)).split("."),d=v(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",m=d[f]||"",q=RegExp("(\\d*)(\\D*)","g"),A=RegExp("(\\d*)(\\D*)","g");do{var r=q.exec(h)||["","",""],n=A.exec(m)||["","",""];if(0==r[0].length&&0==n[0].length)break;b=w(0==r[1].length?0:parseInt(r[1],10),0==n[1].length?0:parseInt(n[1],10))||
w(0==r[2].length,0==n[2].length)||w(r[2],n[2])}while(0==b)}fa[a]=0<=b}},ha=k.document,ia=ha&&G?J()||("CSS1Compat"==ha.compatMode?parseInt(ea,10):5):void 0;var K;if(!(K=!H&&!G)){var L;if(L=G)L=G&&9<=ia;K=L}K||H&&ga("1.9.1");G&&ga("9");var M;M=!1;var N=D;N&&(-1!=N.indexOf("Firefox")||-1!=N.indexOf("iPad")||-1!=N.indexOf("iPhone")||-1!=N.indexOf("iPod")||-1!=N.indexOf("Chrome")||-1!=N.indexOf("Android")||-1!=N.indexOf("Safari")&&(M=!0));var ja=M;var la=function(a){var b=window;if(da&&ja&&a){a.focus();var c=0,d=null,d=a.setInterval(function(){b.closed||5==c?(a.clearInterval(d),ka(b)):(b.close(),c++)},150)}else b.close(),ka(b)},ka=function(a){if(!a.closed&&a.document&&a.document.body)if(a=a.document.body,y(null!=a,"goog.dom.setTextContent expects a non-null value for node"),"textContent"in a)a.textContent="Please close this window.";else if(3==a.nodeType)a.data="Please close this window.";else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=
a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data="Please close this window."}else{for(var b;b=a.firstChild;)a.removeChild(b);y(a,"Node cannot be null or undefined.");a.appendChild((9==a.nodeType?a:a.ownerDocument||a.document).createTextNode("Please close this window."))}};var ma="StopIteration"in k?k.StopIteration:Error("StopIteration"),O=function(){};O.prototype.next=function(){throw ma;};O.prototype.s=function(){return this};var P=function(a,b){this.g={};this.c=[];this.q=this.b=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){var e;if(a instanceof P)e=a.l(),d=a.h();else{var c=[],f=0;for(e in a)c[f++]=e;e=c;c=[];f=0;for(d in a)c[f++]=a[d];d=c}for(c=0;c<e.length;c++)this.set(e[c],d[c])}};P.prototype.h=function(){Q(this);for(var a=[],b=0;b<this.c.length;b++)a.push(this.g[this.c[b]]);return a};
P.prototype.l=function(){Q(this);return this.c.concat()};P.prototype.j=function(a){return R(this.g,a)};P.prototype.remove=function(a){return R(this.g,a)?(delete this.g[a],this.b--,this.q++,this.c.length>2*this.b&&Q(this),!0):!1};var Q=function(a){if(a.b!=a.c.length){for(var b=0,c=0;b<a.c.length;){var d=a.c[b];R(a.g,d)&&(a.c[c++]=d);b++}a.c.length=c}if(a.b!=a.c.length){for(var e={},c=b=0;b<a.c.length;)d=a.c[b],R(e,d)||(a.c[c++]=d,e[d]=1),b++;a.c.length=c}};g=P.prototype;
g.get=function(a,b){return R(this.g,a)?this.g[a]:b};g.set=function(a,b){R(this.g,a)||(this.b++,this.c.push(a),this.q++);this.g[a]=b};g.forEach=function(a,b){for(var c=this.l(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};g.clone=function(){return new P(this)};
g.s=function(a){Q(this);var b=0,c=this.c,d=this.g,e=this.q,f=this,h=new O;h.next=function(){for(;;){if(e!=f.q)throw Error("The map has changed since the iterator was created");if(b>=c.length)throw ma;var h=c[b++];return a?h:d[h]}};return h};var R=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var na=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,oa=function(a){if(S){S=!1;var b=k.location;if(b){var c=b.href;if(c&&(c=(c=oa(c)[3]||null)?decodeURI(c):c)&&c!=b.hostname)throw S=!0,Error();}}return a.match(na)},S=I,pa=function(a,b){for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null,h=null;0<=e?(f=c[d].substring(0,e),h=c[d].substring(e+1)):f=c[d];b(f,h?decodeURIComponent(h.replace(/\+/g," ")):"")}};var T=function(a,b){var c;if(a instanceof T)this.e=void 0!==b?b:a.e,qa(this,a.i),c=a.p,U(this),this.p=c,c=a.k,U(this),this.k=c,ra(this,a.o),c=a.n,U(this),this.n=c,sa(this,a.f.clone()),c=a.m,U(this),this.m=c;else if(a&&(c=oa(String(a)))){this.e=!!b;qa(this,c[1]||"",!0);var d=c[2]||"";U(this);this.p=V(d);d=c[3]||"";U(this);this.k=V(d,!0);ra(this,c[4]);d=c[5]||"";U(this);this.n=V(d,!0);sa(this,c[6]||"",!0);c=c[7]||"";U(this);this.m=V(c)}else this.e=!!b,this.f=new W(null,0,this.e)};g=T.prototype;
g.i="";g.p="";g.k="";g.o=null;g.n="";g.m="";g.t=!1;g.e=!1;g.toString=function(){var a=[],b=this.i;b&&a.push(X(b,ta,!0),":");if(b=this.k){a.push("//");var c=this.p;c&&a.push(X(c,ta,!0),"@");a.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g,"%$1"));b=this.o;null!=b&&a.push(":",String(b))}if(b=this.n)this.k&&"/"!=b.charAt(0)&&a.push("/"),a.push(X(b,"/"==b.charAt(0)?ua:va,!0));(b=this.f.toString())&&a.push("?",b);(b=this.m)&&a.push("#",X(b,wa));return a.join("")};g.clone=function(){return new T(this)};
var qa=function(a,b,c){U(a);a.i=c?V(b,!0):b;a.i&&(a.i=a.i.replace(/:$/,""))},ra=function(a,b){U(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.o=b}else a.o=null},sa=function(a,b,c){U(a);b instanceof W?(a.f=b,a.f.r(a.e)):(c||(b=X(b,xa)),a.f=new W(b,0,a.e))},U=function(a){if(a.t)throw Error("Tried to modify a read-only Uri");};T.prototype.r=function(a){this.e=a;this.f&&this.f.r(a);return this};
var V=function(a,b){return a?b?decodeURI(a):decodeURIComponent(a):""},X=function(a,b,c){return"string"==typeof a?(a=encodeURI(a).replace(b,ya),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},ya=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},ta=/[#\/\?@]/g,va=/[\#\?:]/g,ua=/[\#\?]/g,xa=/[\#\?@]/g,wa=/#/g,W=function(a,b,c){this.d=a||null;this.e=!!c},Y=function(a){a.a||(a.a=new P,a.b=0,a.d&&pa(a.d,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),
c)}))};g=W.prototype;g.a=null;g.b=null;g.add=function(a,b){Y(this);this.d=null;a=Z(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b++;return this};g.remove=function(a){Y(this);a=Z(this,a);return this.a.j(a)?(this.d=null,this.b-=this.a.get(a).length,this.a.remove(a)):!1};g.j=function(a){Y(this);a=Z(this,a);return this.a.j(a)};g.l=function(){Y(this);for(var a=this.a.h(),b=this.a.l(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.h=function(a){Y(this);var b=[];if("string"==typeof a)this.j(a)&&(b=B(b,this.a.get(Z(this,a))));else{a=this.a.h();for(var c=0;c<a.length;c++)b=B(b,a[c])}return b};g.set=function(a,b){Y(this);this.d=null;a=Z(this,a);this.j(a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b++;return this};g.get=function(a,b){var c=a?this.h(a):[];return 0<c.length?String(c[0]):b};
g.toString=function(){if(this.d)return this.d;if(!this.a)return"";for(var a=[],b=this.a.l(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.h(d),f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}return this.d=a.join("&")};g.clone=function(){var a=new W;a.d=this.d;this.a&&(a.a=this.a.clone(),a.b=this.b);return a};var Z=function(a,b){var c=String(b);a.e&&(c=c.toLowerCase());return c};
W.prototype.r=function(a){a&&!this.e&&(Y(this),this.d=null,this.a.forEach(function(a,c){var d=c.toLowerCase();c!=d&&(this.remove(c),this.remove(d),0<a.length&&(this.d=null,this.a.set(Z(this,d),ba(a)),this.b+=a.length))},this));this.e=a};var za=function(a){a=new T(a);var b="&"+window.name;U(a);a.f.set(b,!0);b=a.f.h("parent");U(a);a.f.remove("parent");1==b.length&&(b=gadgets.rpc.getOrigin(String(b[0])),U(a),a.f.set("parent",b));b="&"+window.name;U(a);a.f.remove(b);return a.toString()},Aa=function(a,b,c,d,e,f,h){if(!d||!d.document.domain)return!1;var m=za(String(d.document.location.href));if(m.substr(0,c.length)!=c)return!1;c=gadgets.util.getUrlParameters(m);if(!b||!c.parent||b!=gadgets.rpc.getOrigin(String(c.parent)))return!1;if(!e)return l("oauth2callbackUrl",
a),d.oauth2verify.call(d,String(window.name),h)?!0:!1;d.oauth2callback.call(d,a);try{f()}catch(q){}return!0},Ba=function(){try{return window.parent!=window}catch(a){}return!0},Ca=function(){try{return!!window.opener}catch(a){}return!0},Da=function(a,b,c,d,e){try{var f=Ba(),h=!f&&Ca(),m=!0,q=null,A=function(){m&&la(q)};if(!f&&!h)return;var m=(h||!f)&&"keep_open"!==e,q=h?window.opener:window.parent,r=za(b);try{var n;if(d&&(n=q.frames[d],Aa(a,c,r,n,!h,A,e)))return;for(b=0;b<q.frames.length;++b)if(n=
q.frames[b],Aa(a,c,r,n,!h,A,e)){m=!1;break}}catch(Ea){}}catch(Fa){}A()};
l("postmessage.onLoad",function(){window.name="pmh"+String(2147483647*shindig.random()|0);var a=document.createElement("div"),b="true"==document.getElementById("error").value,c=gadgets.rpc.getOrigin(document.getElementById("origin").value),b=c+(b?"?":"#")+document.getElementById("response-form-encoded").value,d=document.getElementById("relay-endpoint").value,e=null,f=document.getElementById("proxy");f&&f.value&&(e=f.value);var f=document.getElementById("after-redirect"),h=null;f&&f.value&&(h=f.value);
a.appendChild(document.createTextNode(b));a.setAttribute("id","postmessage-hello");Da(b,d,c,e,h)});l("postmessage.closePopup",function(){var a=null;try{var b=Ba(),c=!b&&Ca();if(!b&&!c)return;a=c?window.opener:window.parent}catch(d){}la(a)});