/* Riot v2.6.4, @license MIT */
!function(e,t){"use strict";function n(e,t,n){var r={};return r[e.key]=t,e.pos&&(r[e.pos]=n),r}function r(e,t){for(var n,r=t.length,o=e.length;r>o;)n=t[--r],t.splice(r,1),n.unmount()}function o(e,t){Object.keys(e.tags).forEach(function(n){var r=e.tags[n];R(r)?g(r,function(e){L(e,n,t)}):L(r,n,t)})}function i(e,t,n){var r,o=e._root;for(e._virts=[];o;)r=o.nextSibling,n?t.insertBefore(o,n._root):t.appendChild(o),e._virts.push(o),o=r}function a(e,t,n,r){for(var o,i=e._root,a=0;a<r;a++)o=i.nextSibling,t.insertBefore(i,n._root),i=o}function u(e,t,u){x(e,"each");var f,c=typeof _(e,"no-reorder")!==te||x(e,"no-reorder"),l=S(e),p=W[l]||{tmpl:m(e)},d=ue.test(l),g=e.parentNode,h=document.createTextNode(""),v=C(e),y="option"===l.toLowerCase(),b=[],w=[],N="VIRTUAL"==e.tagName;u=de.loopKeys(u),g.insertBefore(h,e),t.one("before-mount",function(){e.parentNode.removeChild(e),g.stub&&(g=t.root)}).on("update",function(){var m=de(u.val,t),x=document.createDocumentFragment();R(m)||(f=m||!1,m=f?Object.keys(m).map(function(e){return n(u,e,m[e])}):[]);for(var _=0,C=m.length;_<C;_++){var O=m[_],L=c&&typeof O==ne&&!f,T=w.indexOf(O),E=~T&&L?T:_,S=b[E];O=!f&&u.key?n(u,O,_):O,!L&&!S||L&&!~T||!S?(S=new s(p,{parent:t,isLoop:!0,hasImpl:!!W[l],root:d?g:e.cloneNode(),item:O},e.innerHTML),S.mount(),N&&(S._root=S.root.firstChild),_!=b.length&&b[_]?(N?i(S,g,b[_]):g.insertBefore(S.root,b[_].root),w.splice(_,0,O)):N?i(S,x):x.appendChild(S.root),b.splice(_,0,S),E=_):S.update(O,!0),E!==_&&L&&b[_]&&(N?a(S,g,b[_],e.childNodes.length):b[_].root.parentNode&&g.insertBefore(S.root,b[_].root),u.pos&&(S[u.pos]=_),b.splice(_,0,b.splice(E,1)[0]),w.splice(_,0,w.splice(E,1)[0]),!v&&S.tags&&o(S,_)),S._item=O,M(S,"_parent",t)}if(r(m,b),g.insertBefore(x,h),y&&le&&!g.multiple)for(var j=0;j<g.length;j++)if(g[j].__riot1374){g.selectedIndex=j,delete g[j].__riot1374;break}v&&(t.tags[l]=b),w=m.slice()})}function f(e,t,n,r){I(e,function(e){if(1==e.nodeType){if(e.isLoop=e.isLoop||e.parentNode&&e.parentNode.isLoop||_(e,"each")?1:0,n){var o=C(e);o&&!e.isLoop&&n.push(T(o,{root:e,parent:t},e.innerHTML,t))}e.isLoop&&!r||G(e,t,[])}})}function c(e,t,n){function r(e,t,r){de.hasExpr(t)&&n.push(j({dom:e,expr:t},r))}I(e,function(e){var n,o=e.nodeType;if(3==o&&"STYLE"!=e.parentNode.tagName&&r(e,e.nodeValue),1==o)return(n=_(e,"each"))?(u(e,t,n),!1):(g(e.attributes,function(t){var n=t.name,o=n.split("__")[1];if(r(e,t.value,{attr:o||n,bool:o}),o)return x(e,n),!1}),!C(e)&&void 0)})}function s(e,n,r){function o(){var e=_&&y?p:v||p;g(T.attributes,function(t){var n=t.value;m[w(t.name)]=de.hasExpr(n)?de(n,e):n}),g(Object.keys(I),function(t){m[w(t)]=de(I[t],e)})}function i(e){for(var t in C)typeof p[t]!==re&&k(p,t)&&(p[t]=e[t])}function a(e){g(Object.keys(e),function(t){var n=!fe.test(t)&&A(D,t);(typeof p[t]===re||n)&&(n||D.push(t),p[t]=e[t])})}function u(e){p.update(e,!0)}function s(e){if(g(L,function(t){t[e?"mount":"unmount"]()}),v){var t=e?"on":"off";y?v[t]("unmount",p.unmount):v[t]("update",u)[t]("unmount",p.unmount)}}var l,p=z.observable(this),m=K(n.opts)||{},v=n.parent,y=n.isLoop,_=n.hasImpl,C=$(n.item),O=[],L=[],T=n.root,S=T.tagName.toLowerCase(),I={},D=[];e.name&&T._tag&&T._tag.unmount(!0),this.isMounted=!1,T.isLoop=y,T._tag=this,M(this,"_riot_id",++Z),j(this,{parent:v,root:T,opts:m},C),M(this,"tags",{}),g(T.attributes,function(e){var t=e.value;de.hasExpr(t)&&(I[e.name]=t)}),l=ge(e.tmpl,r),M(this,"update",function(e,t){return e=$(e),y&&a(p.parent),e&&b(C)&&(i(e),C=e),j(p,e),o(),p.trigger("update",e),d(O,p),t&&p.parent?p.parent.one("updated",function(){p.trigger("updated")}):me(function(){p.trigger("updated")}),this}),M(this,"mixin",function(){return g(arguments,function(e){var t,n,r=[];e=typeof e===te?z.mixin(e):e,t=h(e)?new e:e;var o=Object.getPrototypeOf(t);do r=r.concat(Object.getOwnPropertyNames(n||t));while(n=Object.getPrototypeOf(n||t));g(r,function(e){if("init"!=e){var n=Object.getOwnPropertyDescriptor(t,e)||Object.getOwnPropertyDescriptor(o,e),r=n&&(n.get||n.set);!p.hasOwnProperty(e)&&r?Object.defineProperty(p,e,n):p[e]=h(t[e])?t[e].bind(p):t[e]}}),t.init&&t.init.bind(p)()}),this}),M(this,"mount",function(){o();var t=z.mixin(X);if(t)for(var n in t)t.hasOwnProperty(n)&&p.mixin(t[n]);if(p._parent&&p._parent.root.isLoop&&a(p._parent),e.fn&&e.fn.call(p,m),c(l,p,O),s(!0),e.attrs&&P(e.attrs,function(e,t){N(T,e,t)}),(e.attrs||_)&&c(p.root,p,O),p.parent&&!y||p.update(C),p.trigger("before-mount"),y&&!_)T=l.firstChild;else{for(;l.firstChild;)T.appendChild(l.firstChild);T.stub&&(T=v.root)}M(p,"root",T),y&&f(p.root,p.parent,null,!0),!p.parent||p.parent.isMounted?(p.isMounted=!0,p.trigger("mount")):p.parent.one("mount",function(){H(p.root)||(p.parent.isMounted=p.isMounted=!0,p.trigger("mount"))})}),M(this,"unmount",function(e){var n,r=T,o=r.parentNode,i=Q.indexOf(p);if(p.trigger("before-unmount"),~i&&Q.splice(i,1),o){if(v)n=E(v),R(n.tags[S])?g(n.tags[S],function(e,t){e._riot_id==p._riot_id&&n.tags[S].splice(t,1)}):n.tags[S]=t;else for(;r.firstChild;)r.removeChild(r.firstChild);e?(x(o,ee),x(o,J)):o.removeChild(r)}this._virts&&g(this._virts,function(e){e.parentNode&&e.parentNode.removeChild(e)}),p.trigger("unmount"),s(),p.off("*"),p.isMounted=!1,delete T._tag}),f(l,this,L)}function l(t,n,r,o){r[t]=function(t){var i,a=o._parent,u=o._item;if(!u)for(;a&&!u;)u=a._item,a=a._parent;t=t||e.event,k(t,"currentTarget")&&(t.currentTarget=r),k(t,"target")&&(t.target=t.srcElement),k(t,"which")&&(t.which=t.charCode||t.keyCode),t.item=u,n.call(o,t)===!0||/radio|check/.test(r.type)||(t.preventDefault&&t.preventDefault(),t.returnValue=!1),t.preventUpdate||(i=u?E(a):o,i.update())}}function p(e,t,n){e&&(e.insertBefore(n,t),e.removeChild(t))}function d(e,t){g(e,function(e,n){var r=e.dom,o=e.attr,i=de(e.expr,t),a=e.parent||e.dom.parentNode;if(e.bool?i=!!i:null==i&&(i=""),e.value!==i){if(e.value=i,!o)return i+="",void(a&&(e.parent=a,"TEXTAREA"===a.tagName?(a.value=i,se||(r.nodeValue=i)):r.nodeValue=i));if("value"===o)return void(r.value!==i&&(r.value=i,N(r,o,i)));if(x(r,o),h(i))l(o,i,r,t);else if("if"==o){var u=e.stub,f=function(){p(u.parentNode,u,r)},c=function(){p(r.parentNode,r,u)};i?u&&(f(),r.inStub=!1,H(r)||I(r,function(e){e._tag&&!e._tag.isMounted&&(e._tag.isMounted=!!e._tag.trigger("mount"))})):(u=e.stub=u||document.createTextNode(""),r.parentNode?c():(t.parent||t).one("updated",c),r.inStub=!0)}else"show"===o?r.style.display=i?"":"none":"hide"===o?r.style.display=i?"none":"":e.bool?(r[o]=i,i&&N(r,o,o),le&&"selected"===o&&"OPTION"===r.tagName&&(r.__riot1374=i)):(0===i||i&&typeof i!==ne)&&(U(o,Y)&&o!=J&&(o=o.slice(Y.length)),N(r,o,i))}})}function g(e,t){for(var n,r=e?e.length:0,o=0;o<r;o++)n=e[o],null!=n&&t(n,o)===!1&&o--;return e}function h(e){return typeof e===oe||!1}function m(e){if(e.outerHTML)return e.outerHTML;var t=D("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}function v(e,t){if(typeof e.innerHTML!=re)e.innerHTML=t;else{var n=(new DOMParser).parseFromString(t,"application/xml");e.appendChild(e.ownerDocument.importNode(n.documentElement,!0))}}function y(e){return~ce.indexOf(e)}function b(e){return e&&typeof e===ne}function x(e,t){e.removeAttribute(t)}function w(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})}function _(e,t){return e.getAttribute(t)}function N(e,t,n){var r=ae.exec(t);r&&r[1]?e.setAttributeNS(ie,r[1],n):e.setAttribute(t,n)}function C(e){return e.tagName&&W[_(e,ee)||_(e,J)||e.tagName.toLowerCase()]}function O(e,t,n){var r=n.tags[t];r?(R(r)||r!==e&&(n.tags[t]=[r]),A(n.tags[t],e)||n.tags[t].push(e)):n.tags[t]=e}function L(e,t,n){var r,o=e.parent;o&&(r=o.tags[t],R(r)?r.splice(n,0,r.splice(r.indexOf(e),1)[0]):O(e,t,o))}function T(e,t,n,r){var o=new s(e,t,n),i=S(t.root),a=E(r);return o.parent=a,o._parent=r,O(o,i,a),a!==r&&O(o,i,r),t.root.innerHTML="",o}function E(e){for(var t=e;!C(t.root)&&t.parent;)t=t.parent;return t}function M(e,t,n,r){return Object.defineProperty(e,t,j({value:n,enumerable:!1,writable:!1,configurable:!0},r)),e}function S(e){var t=C(e),n=_(e,"name"),r=n&&!de.hasExpr(n)?n:t?t.name:e.tagName.toLowerCase();return r}function j(e){for(var t,n=arguments,r=1;r<n.length;++r)if(t=n[r])for(var o in t)k(e,o)&&(e[o]=t[o]);return e}function A(e,t){return~e.indexOf(t)}function R(e){return Array.isArray(e)||e instanceof Array}function k(e,t){var n=Object.getOwnPropertyDescriptor(e,t);return typeof e[t]===re||n&&n.writable}function $(e){if(!(e instanceof s||e&&typeof e.trigger==oe))return e;var t={};for(var n in e)fe.test(n)||(t[n]=e[n]);return t}function I(e,t){if(e){if(t(e)===!1)return;for(e=e.firstChild;e;)I(e,t),e=e.nextSibling}}function P(e,t){for(var n,r=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;n=r.exec(e);)t(n[1].toLowerCase(),n[2]||n[3]||n[4])}function H(e){for(;e;){if(e.inStub)return!0;e=e.parentNode}return!1}function D(e,t){return t?document.createElementNS("http://www.w3.org/2000/svg","svg"):document.createElement(e)}function F(e,t){return(t||document).querySelectorAll(e)}function B(e,t){return(t||document).querySelector(e)}function K(e){return Object.create(e||null)}function q(e){return _(e,"id")||_(e,"name")}function G(e,t,n){var r,o=q(e),i=function(i){A(n,o)||(r=R(i),i?(!r||r&&!A(i,e))&&(r?i.push(e):t[o]=[i,e]):t[o]=e)};o&&(de.hasExpr(o)?t.one("mount",function(){o=q(e),i(t[o])}):i(t[o]))}function U(e,t){return e.slice(0,t.length)===t}function V(e,t,n){var r=W[t],o=e._innerHTML=e._innerHTML||e.innerHTML;return e.innerHTML="",r&&e&&(r=new s(r,{root:e,opts:n},o)),r&&r.mount&&(r.mount(),A(Q,r)||Q.push(r)),r}var z={version:"v2.6.4",settings:{}},Z=0,Q=[],W={},X="__global_mixin",Y="riot-",J=Y+"tag",ee="data-is",te="string",ne="object",re="undefined",oe="function",ie="http://www.w3.org/1999/xlink",ae=/^xlink:(\w+)/,ue=/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,fe=/^(?:_(?:item|id|parent)|update|root|(?:un)?mount|mixin|is(?:Mounted|Loop)|tags|parent|opts|trigger|o(?:n|ff|ne))$/,ce=["altGlyph","animate","animateColor","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","filter","font","foreignObject","g","glyph","glyphRef","image","line","linearGradient","marker","mask","missing-glyph","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tref","tspan","use"],se=0|(e&&e.document||{}).documentMode,le=e&&!!e.InstallTrigger;z.observable=function(e){function t(e,t){for(var n=e.split(" "),r=n.length,o=0;o<r;o++){var i=n[o];i&&t(i,o)}}e=e||{};var n={},r=Array.prototype.slice;return Object.defineProperties(e,{on:{value:function(r,o){return"function"!=typeof o?e:(t(r,function(e,t){(n[e]=n[e]||[]).push(o),o.typed=t>0}),e)},enumerable:!1,writable:!1,configurable:!1},off:{value:function(r,o){return"*"!=r||o?t(r,function(e,t){if(o)for(var r,i=n[e],a=0;r=i&&i[a];++a)r==o&&i.splice(a--,1);else delete n[e]}):n={},e},enumerable:!1,writable:!1,configurable:!1},one:{value:function(t,n){function r(){e.off(t,r),n.apply(e,arguments)}return e.on(t,r)},enumerable:!1,writable:!1,configurable:!1},trigger:{value:function(o){for(var i,a=arguments.length-1,u=new Array(a),f=0;f<a;f++)u[f]=arguments[f+1];return t(o,function(t,o){i=r.call(n[t]||[],0);for(var a,f=0;a=i[f];++f)a.busy||(a.busy=1,a.apply(e,a.typed?[t].concat(u):u),i[f]!==a&&f--,a.busy=0);n["*"]&&"*"!=t&&e.trigger.apply(e,["*",t].concat(u))}),e},enumerable:!1,writable:!1,configurable:!1}}),e},function(t){function n(e){return e.split(/[\/?#]/)}function r(e,t){var n=new RegExp("^"+t[C](/\*/g,"([^/?#]+?)")[C](/\.\./,".*")+"$"),r=e.match(n);if(r)return r.slice(1)}function o(e,t){var n;return function(){clearTimeout(n),n=setTimeout(e,t)}}function i(e){g=o(l,1),M[_](O,g),M[_](L,g),S[_](k,p),e&&l(!0)}function a(){this.$=[],t.observable(this),I.on("stop",this.s.bind(this)),I.on("emit",this.e.bind(this))}function u(e){return e[C](/^\/|\/$/,"")}function f(e){return"string"==typeof e}function c(e){return(e||A.href)[C](b,"")}function s(e){return"#"==h[0]?(e||A.href||"").split(h)[1]||"":(A?c(e):e||"")[C](h,"")}function l(e){var t,n=0==D;if(!(E<=D)&&(D++,H.push(function(){var t=s();(e||t!=m)&&(I[T]("emit",t),m=t)}),n)){for(;t=H.shift();)t();D=0}}function p(e){if(!(1!=e.which||e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){for(var t=e.target;t&&"A"!=t.nodeName;)t=t.parentNode;!t||"A"!=t.nodeName||t[N]("download")||!t[N]("href")||t.target&&"_self"!=t.target||t.href.indexOf(A.href.match(b)[0])==-1||t.href!=A.href&&(t.href.split("#")[0]==A.href.split("#")[0]||"#"!=h[0]&&0!==c(t.href).indexOf(h)||"#"==h[0]&&t.href.split(h)[0]!=A.href.split(h)[0]||!d(s(t.href),t.title||S.title))||e.preventDefault()}}function d(e,t,n){return j?(e=h+u(e),t=t||S.title,n?j.replaceState(null,t,e):j.pushState(null,t,e),S.title=t,P=!1,l(),P):I[T]("emit",s(e))}var g,h,m,v,y,b=/^.+?\/\/+[^\/]+/,x="EventListener",w="remove"+x,_="add"+x,N="hasAttribute",C="replace",O="popstate",L="hashchange",T="trigger",E=3,M="undefined"!=typeof e&&e,S="undefined"!=typeof document&&document,j=M&&history,A=M&&(j.location||M.location),R=a.prototype,k=S&&S.ontouchstart?"touchstart":"click",$=!1,I=t.observable(),P=!1,H=[],D=0;R.m=function(e,t,n){!f(e)||t&&!f(t)?t?this.r(e,t):this.r("@",e):d(e,t,n||!1)},R.s=function(){this.off("*"),this.$=[]},R.e=function(e){this.$.concat("@").some(function(t){var n=("@"==t?v:y)(u(e),u(t));if("undefined"!=typeof n)return this[T].apply(null,[t].concat(n)),P=!0},this)},R.r=function(e,t){"@"!=e&&(e="/"+u(e),this.$.push(e)),this.on(e,t)};var F=new a,B=F.m.bind(F);B.create=function(){var e=new a,t=e.m.bind(e);return t.stop=e.s.bind(e),t},B.base=function(e){h=e||"#",m=s()},B.exec=function(){l(!0)},B.parser=function(e,t){e||t||(v=n,y=r),e&&(v=e),t&&(y=t)},B.query=function(){var e={},t=A.href||m;return t[C](/[?&](.+?)=([^&]*)/g,function(t,n,r){e[n]=r}),e},B.stop=function(){$&&(M&&(M[w](O,g),M[w](L,g),S[w](k,p)),I[T]("stop"),$=!1)},B.start=function(e){$||(M&&("complete"==document.readyState?i(e):M[_]("load",function(){setTimeout(function(){i(e)},1)})),$=!0)},B.base(),B.parser(),t.route=B}(z);var pe=function(e){function t(e){return e}function n(e,t){return t||(t=b),new RegExp(e.source.replace(/{/g,t[2]).replace(/}/g,t[3]),e.global?c:"")}function r(e){if(e===m)return v;var t=e.split(" ");if(2!==t.length||d.test(e))throw new Error('Unsupported brackets "'+e+'"');return t=t.concat(e.replace(g,"\\").split(" ")),t[4]=n(t[1].length>1?/{[\S\s]*?}/:v[4],t),t[5]=n(e.length>3?/\\({|})/g:v[5],t),t[6]=n(v[6],t),t[7]=RegExp("\\\\("+t[3]+")|([[({])|("+t[3]+")|"+p,c),t[8]=e,t}function o(e){return e instanceof RegExp?u(e):b[e]}function i(e){(e||(e=m))!==b[8]&&(b=r(e),u=e===m?t:n,b[9]=u(v[9])),y=e}function a(e){var t;e=e||{},t=e.brackets,Object.defineProperty(e,"brackets",{set:i,get:function(){return y},enumerable:!0}),f=e,i(t)}var u,f,c="g",s=/\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,l=/"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,p=l.source+"|"+/(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source+"|"+/\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,d=RegExp("[\\x00-\\x1F<>a-zA-Z0-9'\",;\\\\]"),g=/(?=[[\]()*+?.^$|])/g,h={"(":RegExp("([()])|"+p,c),"[":RegExp("([[\\]])|"+p,c),"{":RegExp("([{}])|"+p,c)},m="{ }",v=["{","}","{","}",/{[^}]*}/,/\\([{}])/g,/\\({)|{/g,RegExp("\\\\(})|([[({])|(})|"+p,c),m,/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,/(^|[^\\]){=[\S\s]*?}/],y=e,b=[];return o.split=function(e,t,n){function r(e){t||a?c.push(e&&e.replace(n[5],"$1")):c.push(e)}function o(e,t,n){var r,o=h[t];for(o.lastIndex=n,n=1;(r=o.exec(e))&&(!r[1]||(r[1]===t?++n:--n)););return n?e.length:o.lastIndex}n||(n=b);var i,a,u,f,c=[],s=n[6];for(a=u=s.lastIndex=0;i=s.exec(e);){if(f=i.index,a){if(i[2]){s.lastIndex=o(e,i[2],s.lastIndex);continue}if(!i[3])continue}i[1]||(r(e.slice(u,f)),u=s.lastIndex,s=n[6+(a^=1)],s.lastIndex=u)}return e&&u<e.length&&r(e.slice(u)),c},o.hasExpr=function(e){return b[4].test(e)},o.loopKeys=function(e){var t=e.match(b[9]);return t?{key:t[1],pos:t[2],val:b[0]+t[3].trim()+b[1]}:{val:e.trim()}},o.array=function(e){return e?r(e):b},Object.defineProperty(o,"settings",{set:a,get:function(){return f}}),o.settings="undefined"!=typeof z&&z.settings||{},o.set=i,o.R_STRINGS=l,o.R_MLCOMMS=s,o.S_QBLOCKS=p,o}(),de=function(){function t(e,t){return e?(u[e]||(u[e]=r(e))).call(t,n):e}function n(e,n){t.errorHandler&&(e.riotData={tagName:n&&n.root&&n.root.tagName,_riot_id:n&&n._riot_id},t.errorHandler(e))}function r(e){var t=o(e);return"try{return "!==t.slice(0,11)&&(t="return "+t),new Function("E",t+";")}function o(e){var t,n=[],r=pe.split(e.replace(l,'"'),1);if(r.length>2||r[0]){var o,a,u=[];for(o=a=0;o<r.length;++o)t=r[o],t&&(t=1&o?i(t,1,n):'"'+t.replace(/\\/g,"\\\\").replace(/\r\n?|\n/g,"\\n").replace(/"/g,'\\"')+'"')&&(u[a++]=t);t=a<2?u[0]:"["+u.join(",")+'].join("")'}else t=i(r[1],0,n);return n[0]&&(t=t.replace(p,function(e,t){return n[t].replace(/\r/g,"\\r").replace(/\n/g,"\\n")})),t}function i(e,t,n){function r(t,n){var r,o=1,i=d[t];for(i.lastIndex=n.lastIndex;r=i.exec(e);)if(r[0]===t)++o;else if(!--o)break;n.lastIndex=o?e.length:i.lastIndex}if(e=e.replace(s,function(e,t){return e.length>2&&!t?f+(n.push(e)-1)+"~":e}).replace(/\s+/g," ").trim().replace(/\ ?([[\({},?\.:])\ ?/g,"$1")){for(var o,i=[],u=0;e&&(o=e.match(c))&&!o.index;){var l,p,g=/,|([[{(])|$/g;for(e=RegExp.rightContext,l=o[2]?n[o[2]].slice(1,-1).trim().replace(/\s+/g," "):o[1];p=(o=g.exec(e))[1];)r(p,g);p=e.slice(0,o.index),e=RegExp.rightContext,i[u++]=a(p,1,l)}e=u?u>1?"["+i.join(",")+'].join(" ").trim()':i[0]:a(e,t)}return e}function a(e,t,n){var r;return e=e.replace(h,function(e,t,n,o,i){return n&&(o=r?0:o+e.length,"this"!==n&&"global"!==n&&"window"!==n?(e=t+'("'+n+g+n,o&&(r="."===(i=i[o])||"("===i||"["===i)):o&&(r=!m.test(i.slice(o)))),e}),r&&(e="try{return "+e+"}catch(e){E(e,this)}"),n?e=(r?"function(){"+e+"}.call(this)":"("+e+")")+'?"'+n+'":""':t&&(e="function(v){"+(r?e.replace("return ","v="):"v=("+e+")")+';return v||v===0?v:""}.call(this)'),e}var u={};t.haveRaw=pe.hasRaw,t.hasExpr=pe.hasExpr,t.loopKeys=pe.loopKeys,t.clearCache=function(){u={}},t.errorHandler=null;var f=String.fromCharCode(8279),c=/^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,s=RegExp(pe.S_QBLOCKS,"g"),l=/\u2057/g,p=/\u2057(\d+)~/g,d={"(":/[()]/g,"[":/[[\]]/g,"{":/[{}]/g},g='"in this?this:'+("object"!=typeof e?"global":"window")+").",h=/[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,m=/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;return t.version=pe.version="v2.4.2",t}(),ge=function e(){function e(e,r){var o=e&&e.match(/^\s*<([-\w]+)/),i=o&&o[1].toLowerCase(),a=D("div",y(i));return e=n(e,r),f.test(i)?a=t(a,e,i):v(a,e),a.stub=!0,a}function t(e,t,n){var r="o"===n[0],o=r?"select>":"table>";if(e.innerHTML="<"+o+t.trim()+"</"+o,o=e.firstChild,r)o.selectedIndex=-1;else{var i=u[n];i&&1===o.childElementCount&&(o=B(i,o))}return o}function n(e,t){if(!r.test(e))return e;var n={};return t=t&&t.replace(i,function(e,t,r){return n[t]=n[t]||r,""}).trim(),e.replace(a,function(e,t,r){return n[t]||r||""}).replace(o,function(e,n){return t||n||""})}var r=/<yield\b/i,o=/<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/gi,i=/<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/gi,a=/<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,u={tr:"tbody",th:"tr",td:"tr",col:"colgroup"},f=se&&se<10?ue:/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;return e}(),he=function(t){if(!e)return{add:function(){},inject:function(){}};var n=function(){var e=D("style");N(e,"type","text/css");var t=B("style[type=riot]");return t?(t.id&&(e.id=t.id),t.parentNode.replaceChild(e,t)):document.getElementsByTagName("head")[0].appendChild(e),e}(),r=n.styleSheet,o="";return Object.defineProperty(t,"styleNode",{value:n,writable:!0}),{add:function(e){o+=e},inject:function(){o&&(r?r.cssText+=o:n.innerHTML+=o,o="")}}}(z),me=function(e){var t=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame;if(!t||/iP(ad|hone|od).*OS 6/.test(e.navigator.userAgent)){var n=0;t=function(e){var t=Date.now(),r=Math.max(16-(t-n),0);setTimeout(function(){e(n=t+r)},r)}}return t}(e||{});z.util={brackets:pe,tmpl:de},z.mixin=function(){var e={},t=e[X]={},n=0;return function(r,o,i){if(b(r))return void z.mixin("__unnamed_"+n++,r,!0);var a=i?t:e;if(!o){if(typeof a[r]===re)throw new Error("Unregistered mixin: "+r);return a[r]}h(o)?(j(o.prototype,a[r]||{}),a[r]=o):a[r]=j(a[r]||{},o)}}(),z.tag=function(e,t,n,r,o){return h(r)&&(o=r,/^[\w\-]+\s?=/.test(n)?(r=n,n=""):r=""),n&&(h(n)?o=n:he.add(n)),e=e.toLowerCase(),W[e]={name:e,tmpl:t,attrs:r,fn:o},e},z.tag2=function(e,t,n,r,o){return n&&he.add(n),W[e]={name:e,tmpl:t,attrs:r,fn:o},e},z.mount=function(e,t,n){function r(e){var t="";return g(e,function(e){/[^-\w]/.test(e)||(e=e.trim().toLowerCase(),t+=",["+ee+'="'+e+'"],['+J+'="'+e+'"]')}),t}function o(){var e=Object.keys(W);return e+r(e)}function i(e){if(e.tagName){var r=_(e,ee)||_(e,J);t&&r!==t&&(r=t,N(e,ee,t),N(e,J,t));var o=V(e,r||e.tagName.toLowerCase(),n);o&&f.push(o)}else e.length&&g(e,i)}var a,u,f=[];if(he.inject(),b(t)&&(n=t,t=0),typeof e===te?("*"===e?e=u=o():e+=r(e.split(/, */)),a=e?F(e):[]):a=e,"*"===t){if(t=u||o(),a.tagName)a=F(t,a);else{var c=[];g(a,function(e){c.push(F(t,e))}),a=c}t=0}return i(a),f},z.update=function(){return g(Q,function(e){e.update()})},z.vdom=Q,z.Tag=s,typeof exports===ne?module.exports=z:typeof define===oe&&typeof define.amd!==re?define(function(){return z}):e.riot=z}("undefined"!=typeof window?window:void 0);
riot.tag2('app', '<header class="app-header clearfix"> <module-selector modules="{opts.modules}" logo="{opts.logo}" default-module="{opts.defaultModule}" on-select="{setModule}"> <yield></yield> </module-selector> <button class="button {\'is-active\': infoIsOpen}" title="Toggle source" __disabled="{!activeModule.info}" aria-controls="info-panel" onclick="{toggleInfo}"> <span class="icon-info-outline"></span> <span class="a11y-sr-only">Toggle source</span> </button> <button class="button" title="Toggle annotations" disabled> <span class="icon-label"></span> <span class="a11y-sr-only">Toggle annotations</span> </button> <size-controls on-resize="{setSize}" sizes="{opts.sizes}"></size-controls> </header> <main> <info-panel if="{infoIsOpen}" id="info-panel" sections="{activeModule.info}" on-close="{closeInfo}" aria-expanded="{infoIsOpen}"></info-panel> <iframe class="app-frame" frameborder="0" sandbox="allow-same-origin allow-scripts allow-forms allow-popups" riot-src="{activeModule.url}" width="{width}" height="{height}"></iframe> </main>', '', '', function(opts) {
        var tag = this;
        tag.activeModule = undefined;
        tag.width = window.outerWidth;
        tag.height = window.outerHeight;
        tag.infoIsOpen = false;
        tag.setModule = setModule;
        tag.setSize = setSize;
        tag.closeInfo = closeInfo;
        tag.toggleInfo = toggleInfo;

        function setModule(module) {
            tag.update({ activeModule: module });
        }

        function setSize(width) {
            tag.update({ width: width });
        }

        function closeInfo() {
            tag.update({ infoIsOpen: false });
        }

        function toggleInfo() {
            tag.update({ infoIsOpen: !tag.infoIsOpen });
        }
});
riot.tag2('info-panel', '<header class="info-panel-header clearfix"> <nav class="info-panel-navigation" role="tablist"> <button each="{section in sections}" class="button {\'is-active\': section == activeSection}" role="tab" aria-controls="info-content" aria-selected="{section == activeSection}" onclick="{onSelectSection}"> {section} </button> </nav> <div class="info-panel-control"> <button class="button" title="Toggle maximize" onclick="{toggleMaximize}"> <span class="icon-align-top"></span> <span class="a11y-sr-only">Toggle maximize</span> </button> <button class="button" title="Close" onclick="{opts.onClose}"> <span class="icon-clear"></span> <span class="a11y-sr-only">Close</span> </button> </div> </header> <iframe if="{activeSection}" id="info-content" class="info-panel-section" riot-src="{sections[activeSection]}" width="100%" role="tabpanel" aria-labelledby="{activeSection}"></iframe>', '', 'class="{\'is-maximized\': isMaximized}"', function(opts) {
        var tag = this;
        tag.activeSection = undefined;
        tag.isMaximized = false;
        opts.sections = {};
        tag.onSelectSection = onSelectSection;
        tag.onClose = onClose;
        tag.toggleMaximize = toggleMaximize;
        tag.on('update', onUpdate);

        function onSelectSection(event) {
            tag.update({ activeSection: event.item.section });
        }

        function onUpdate() {
            if(tag.sections !== opts.sections) {
                tag.sections = opts.sections || {};
                tag.activeSection = Object.keys(tag.sections)[0];
            }
        }

        function toggleMaximize() {
            tag.isMaximized = !tag.isMaximized;
        }

        function onClose() {
            opts.onClose();
            tag.isMaximized = false;
        }
});
riot.tag2('module-selector', '<img class="module-selector-logo" if="{opts.logo}" riot-src="{opts.logo}" alt=""> <label class="module-selector-label" for="selector"> <span class="a11y-sr-only">Module</span> <select class="module-selector-select" id="selector" name="selector" onchange="{onModuleSelect}"> <yield></yield> <optgroup each="{groupName, modules in moduleGroups}" label="{groupName}"> <option each="{module in modules}" value="{module.url}" __selected="{module.url == activeModule.url}"> {module.name} </option> </optgroup> </select> <span class="icon-expand-more"></span> </label> <a class="button" href="{activeModule.url}" target="_blank" rel="noopener noreferrer" title="Open module in new tab"> <span class="icon-launch"></span> <span class="a11y-sr-only">Open in new tab</span> </a>', '', '', function(opts) {
        var tag = this;
        tag.activeModule = undefined;
        tag.onModuleSelect = onModuleSelect;
        tag.modulesByUrl = {};
        tag.moduleGroups = {};

        tag.on('mount', onMount);
        tag.on('update', onUpdate);

        function onMount() {
            selectFromHash();
            window.addEventListener('hashchange', selectFromHash);
        }

        function onUpdate() {
            tag.modulesByUrl = indexModulesByUrl(opts.modules || []);
            tag.moduleGroups = groupModules(opts.modules || []);
        }

        function groupModules(modules) {
            return modules.reduce(function(groups, module){
                var groupName = module.group || '';
                groups[groupName] = groups[groupName] || [];
                groups[groupName].push(module);
                return groups;
            }, {});
        }

        function indexModulesByUrl(modules) {
            return modules.reduce(function(map, module){
                map[module.url] = module;
                return map;
            }, {});
        }

        function onModuleSelect(event) {
            selectByUrl(event.target.value);
        }

        function selectByUrl(url) {
            url = url || opts.defaultModule;
            var activeModule = tag.modulesByUrl[url];

            if(!activeModule) {
                var firstGroup = Object.keys(tag.moduleGroups)[0];
                activeModule = tag.moduleGroups[firstGroup][0];
                url = activeModule.url;
            }

            tag.selector.value = url;
            tag.update({ activeModule: activeModule });
            if(opts.onSelect) { opts.onSelect(activeModule); }

            window.location.hash = url;
        }

        function selectFromHash() {
            var url = window.location.hash.substr(1);
            selectByUrl(url);
        }
});
riot.tag2('size-controls', '<button each="{size in opts.sizes}" class="button {\'is-active\': size.width == width}" onclick="{onSelectSize}">{size.name}</button> <button class="button {\'is-active\': autoWidth}" onclick="{toggleAutoWidth}">FULL</button> <fieldset class="size-controls-fieldset"> <input class="size-controls-input" id="input-width" min="240" step="10" required="true" value="{width}" oninput="{onSizeInput}" type="{\'number\'}"> <label class="size-controls-label" for="input-width">px</label> </fieldset>', '', '', function(opts) {
        var tag = this;
        var STORAGE_KEY_AUTO = 'demoViewerAuto';
        var STORAGE_KEY_WIDTH = 'demoViewerWidth';
        tag.autoWidth = getSetting(STORAGE_KEY_AUTO);
        tag.onSizeInput = onSizeInput;
        tag.onSelectSize = onSelectSize;
        tag.toggleAutoWidth = toggleAutoWidth;
        tag.width;

        restoreWidth();
        window.addEventListener('resize', onResize, false);

        function onResize() {
            if (tag.autoWidth) { setFullWidth(); }
        }

        function onSizeInput(event) {
            disableAutoWidth();
            setWidth(event.target.value);
        }

        function onSelectSize(event) {
            disableAutoWidth();
            setWidth(event.item.size.width);
        }

        function setWidth(width) {
            tag.update({ width: width });
            if(opts.onResize) {
                opts.onResize(width);
            }
            saveSetting(STORAGE_KEY_WIDTH, width);
        }

        function setFullWidth() {
            setWidth(document.documentElement.clientWidth);
        }

        function toggleAutoWidth() {
            tag.autoWidth = !tag.autoWidth;
            if (tag.autoWidth) { setFullWidth(); }
            saveSetting(STORAGE_KEY_AUTO, tag.autoWidth);
        }

        function disableAutoWidth() {
            tag.autoWidth = false;
            saveSetting(STORAGE_KEY_AUTO, false);
        }

        function restoreWidth() {
            var width = getSetting(STORAGE_KEY_WIDTH);
            (width && !tag.autoWidth) ? setWidth(width) : setFullWidth();
        }

        function saveSetting(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        }
        function getSetting(key) {
            return JSON.parse(localStorage.getItem(key));
        }
});// wrap Riot implementation into generic API.
window.demoViewer = function(config){
    'use strict';
    var element = document.querySelector('demo-viewer');
    var app = document.createElement('app');
    app.innerHTML = element.innerHTML;
    element.innerHTML = '';
    element.appendChild(app);

    if (typeof config.modules === 'string') {
        getJson(config.modules, function(err, modules) {
            if (err) { window.console.log('error fetching modules', err); }
            window.riot.mount(app, { modules: modules, logo: config.logo, sizes: config.sizes });
        });
    } else {
        window.riot.mount(app, config);
    }


    /**
     * Get JSON from URL.
     *
     * @param {String} url
     * @param {Function} callback   - called with (err, json)
     */
    function getJson(url, callback) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                try {
                    var json = JSON.parse(request.responseText);
                    callback(null, json);
                } catch (err) {
                    callback(err);
                }
            } else {
                callback(request);
            }
        };
        request.onerror = function() {
            callback(request);
        };
        request.send();
    }
};
0
