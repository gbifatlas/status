function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function l(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function c(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function f(t){return null==t?"":t}let d,h,p=!1;function m(t,e,n,s){for(;t<e;){const r=t+(e-t>>1);n(r)<=s?t=r+1:e=r}return t}function g(t,e){if(p){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const s=e[n];void 0!==s.claim_order&&t.push(s)}e=t}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,i=(r>0&&e[n[r]].claim_order<=o?r+1:m(1,r,(t=>e[n[t]].claim_order),o))-1;s[t]=n[i]+1;const a=i+1;n[a]=t,r=Math.max(a,r)}const o=[],i=[];let a=e.length-1;for(let t=n[r]+1;0!=t;t=s[t-1]){for(o.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);o.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<o.length&&i[e].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;t.insertBefore(i[e],s)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function w(t,e,n){p&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function _(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function S(){return E(" ")}function x(){return E("")}function I(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function T(t){return function(e){return e.preventDefault(),t.call(this,e)}}function A(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function P(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:A(t,s,e[s])}function L(t){return Array.from(t.childNodes)}function R(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function N(t,e,n,s,r=!1){R(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return s()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function B(t,e,n,s){return N(t,(t=>t.nodeName===e),(t=>{const e=[];for(let s=0;s<t.attributes.length;s++){const r=t.attributes[s];n[r.name]||e.push(r.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>s(e)))}function G(t,e,n){return B(t,e,n,$)}function O(t,e,n){return B(t,e,n,y)}function k(t,e){return N(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>E(e)),!0)}function U(t){return k(t," ")}function H(t,e,n){for(let s=n;s<t.length;s+=1){const n=t[s];if(8===n.nodeType&&n.textContent.trim()===e)return s}return t.length}function C(t){const e=H(t,"HTML_TAG_START",0),n=H(t,"HTML_TAG_END",e);if(e===n)return new z;R(t);const s=t.splice(e,n+1);v(s[0]),v(s[s.length-1]);const r=s.slice(1,s.length-1);for(const e of r)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new z(r)}function M(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function j(t,e){t.value=null==e?"":e}function D(){if(void 0===d){d=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){d=!0}}return d}function F(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=$("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=D();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=I(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=I(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(s||r&&n.contentWindow)&&r(),v(n)}}function q(t,e=document.body){return Array.from(e.querySelectorAll(t))}class z extends class{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.e=$(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(v)}}{constructor(t){super(),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)w(this.t,this.n[e],t)}}function K(t){h=t}function V(){if(!h)throw new Error("Function called outside component initialization");return h}function J(t){V().$$.on_mount.push(t)}function W(t){V().$$.after_update.push(t)}function Y(t){V().$$.on_destroy.push(t)}const X=[],Q=[],Z=[],tt=[],et=Promise.resolve();let nt=!1;function st(t){Z.push(t)}let rt=!1;const ot=new Set;function it(){if(!rt){rt=!0;do{for(let t=0;t<X.length;t+=1){const e=X[t];K(e),at(e.$$)}for(K(null),X.length=0;Q.length;)Q.pop()();for(let t=0;t<Z.length;t+=1){const e=Z[t];ot.has(e)||(ot.add(e),e())}Z.length=0}while(X.length);for(;tt.length;)tt.pop()();nt=!1,rt=!1,ot.clear()}}function at(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(st)}}const lt=new Set;let ct;function ut(){ct={r:0,c:[],p:ct}}function ft(){ct.r||r(ct.c),ct=ct.p}function dt(t,e){t&&t.i&&(lt.delete(t),t.i(e))}function ht(t,e,n,s){if(t&&t.o){if(lt.has(t))return;lt.add(t),ct.c.push((()=>{lt.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function pt(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(s[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[o]=a}else for(const t in i)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function mt(t){return"object"==typeof t&&null!==t?t:{}}function gt(t){t&&t.c()}function bt(t,e){t&&t.l(e)}function wt(t,e,s,i){const{fragment:a,on_mount:l,on_destroy:c,after_update:u}=t.$$;a&&a.m(e,s),i||st((()=>{const e=l.map(n).filter(o);c?c.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(st)}function vt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(t,e){-1===t.$$.dirty[0]&&(X.push(t),nt||(nt=!0,et.then(it)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function $t(e,n,o,i,a,l,c,u=[-1]){const f=h;K(e);const d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};c&&c(d.root);let m=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),m&&_t(e,t)),n})):[],d.update(),m=!0,r(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){p=!0;const t=L(n.target);d.fragment&&d.fragment.l(t),t.forEach(v)}else d.fragment&&d.fragment.c();n.intro&&dt(e.$$.fragment),wt(e,n.target,n.anchor,n.customElement),p=!1,it()}K(f)}class yt{$destroy(){vt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Et=[];function St(e,n=t){let s;const r=new Set;function o(t){if(i(e,t)&&(e=t,s)){const t=!Et.length;for(const t of r)t[1](),Et.push(t,e);if(t){for(let t=0;t<Et.length;t+=2)Et[t][0](Et[t+1]);Et.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const l=[i,a];return r.add(l),1===r.size&&(s=n(o)||t),i(e),()=>{r.delete(l),0===r.size&&(s(),s=null)}}}}const xt={};var It={owner:"gbifatlas",repo:"status",sites:[{name:"GBIF Portugal",url:"https://www.gbif.pt/",icon:"https://www.gbif.pt/sites/all/themes/gbifBootstrap-1.0/gbifBootstrap/images/GBIFPORTUGAL-01.png"},{name:"Data - GBIF Portugal",url:"https://dados.gbif.pt/",icon:"https://www.gbif.pt/sites/all/themes/gbifBootstrap-1.0/gbifBootstrap/images/GBIFPORTUGAL-01.png"},{name:"Regions - GBIF Portugal",url:"https://regioes.gbif.pt/",icon:"https://www.gbif.pt/sites/all/themes/gbifBootstrap-1.0/gbifBootstrap/images/GBIFPORTUGAL-01.png"},{name:"Metadata - GBIF Portugal",url:"https://metadados.gbif.pt/",icon:"https://www.gbif.pt/sites/all/themes/gbifBootstrap-1.0/gbifBootstrap/images/GBIFPORTUGAL-01.png"},{name:"Images - GBIF Portugal",url:"https://imagens.gbif.pt/",icon:"https://www.gbif.pt/sites/all/themes/gbifBootstrap-1.0/gbifBootstrap/images/GBIFPORTUGAL-01.png"},{name:"GBIF Spain",url:"https://www.gbif.es/",icon:"https://www.gbif.es/wp-content/uploads/2017/05/gbif-logo.svg"},{name:"Data - GBIF Spain",url:"https://datos.gbif.es/",icon:"https://www.gbif.es/wp-content/uploads/2017/05/gbif-logo.svg"},{name:"IPT - GBIF Spain",url:"https://ipt.gbif.es/",icon:"https://ipt.gbif.es/images/gbif-logo-L.svg"},{name:"eLearning - GBIF Spain",url:"https://elearning.gbif.es/",icon:"https://elearning.gbif.es/web/css/themes/GBIF/images/header-logo.png"},{name:"Records - GBIF Spain",url:"https://registros.gbif.es/",icon:"https://www.gbif.es/wp-content/uploads/2017/05/gbif-logo.svg"}],"status-website":{baseUrl:"/status",logoUrl:"https://images.ctfassets.net/uo17ejk9rkwj/5s7MN9pIKVTulGxIeZio8H/0836922c7764c7ff751d5ae777e16286/GBIF-2015-full-stacked.svg",name:"GBIF Iberian service status",introTitle:"Global Biodiversity Information Facility - Iberian Peninsula",introMessage:"Live status page of GBIF Iberian services",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},path:"https://gbifatlas.github.io/status",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Tt(t,e,n){const s=t.slice();return s[1]=e[n],s}function At(e){let n,s,r,o=It["status-website"]&&!It["status-website"].hideNavLogo&&function(e){let n,s;return{c(){n=$("img"),this.h()},l(t){n=G(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){A(n,"alt",""),l(n.src,s=It["status-website"].logoUrl)||A(n,"src",s),A(n,"class","svelte-a08hsz")},m(t,e){w(t,n,e)},p:t,d(t){t&&v(n)}}}(),i=It["status-website"]&&!It["status-website"].hideNavTitle&&function(e){let n,s,r=It["status-website"].name+"";return{c(){n=$("div"),s=E(r)},l(t){n=G(t,"DIV",{});var e=L(n);s=k(e,r),e.forEach(v)},m(t,e){w(t,n,e),g(n,s)},p:t,d(t){t&&v(n)}}}();return{c(){n=$("div"),s=$("a"),o&&o.c(),r=S(),i&&i.c(),this.h()},l(t){n=G(t,"DIV",{});var e=L(n);s=G(e,"A",{href:!0,class:!0});var a=L(s);o&&o.l(a),r=U(a),i&&i.l(a),a.forEach(v),e.forEach(v),this.h()},h(){A(s,"href",It["status-website"].logoHref||It.path),A(s,"class","logo svelte-a08hsz")},m(t,e){w(t,n,e),g(n,s),o&&o.m(s,null),g(s,r),i&&i.m(s,null)},p(t,e){It["status-website"]&&!It["status-website"].hideNavLogo&&o.p(t,e),It["status-website"]&&!It["status-website"].hideNavTitle&&i.p(t,e)},d(t){t&&v(n),o&&o.d(),i&&i.d()}}}function Pt(t){let e,n,s,r,o,i,a=t[1].title+"";return{c(){e=$("li"),n=$("a"),s=E(a),i=S(),this.h()},l(t){e=G(t,"LI",{});var r=L(e);n=G(r,"A",{"aria-current":!0,href:!0,class:!0});var o=L(n);s=k(o,a),o.forEach(v),i=U(r),r.forEach(v),this.h()},h(){A(n,"aria-current",r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),A(n,"href",o=t[1].href.replace("$OWNER",It.owner).replace("$REPO",It.repo)),A(n,"class","svelte-a08hsz")},m(t,r){w(t,e,r),g(e,n),g(n,s),g(e,i)},p(t,e){1&e&&r!==(r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&A(n,"aria-current",r)},d(t){t&&v(e)}}}function Lt(e){let n,s,r,o,i,a=It["status-website"]&&It["status-website"].logoUrl&&At(),l=It["status-website"]&&It["status-website"].navbar&&function(t){let e,n=It["status-website"].navbar,s=[];for(let e=0;e<n.length;e+=1)s[e]=Pt(Tt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=x()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=x()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);w(t,e,n)},p(t,r){if(1&r){let o;for(n=It["status-website"].navbar,o=0;o<n.length;o+=1){const i=Tt(t,n,o);s[o]?s[o].p(i,r):(s[o]=Pt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){_(s,t),t&&v(e)}}}(e),c=It["status-website"]&&It["status-website"].navbarGitHub&&!It["status-website"].navbar&&function(e){let n,s,r,o=It.i18n.navGitHub+"";return{c(){n=$("li"),s=$("a"),r=E(o),this.h()},l(t){n=G(t,"LI",{});var e=L(n);s=G(e,"A",{href:!0,class:!0});var i=L(s);r=k(i,o),i.forEach(v),e.forEach(v),this.h()},h(){A(s,"href",`https://github.com/${It.owner}/${It.repo}`),A(s,"class","svelte-a08hsz")},m(t,e){w(t,n,e),g(n,s),g(s,r)},p:t,d(t){t&&v(n)}}}();return{c(){n=$("nav"),s=$("div"),a&&a.c(),r=S(),o=$("ul"),l&&l.c(),i=S(),c&&c.c(),this.h()},l(t){n=G(t,"NAV",{class:!0});var e=L(n);s=G(e,"DIV",{class:!0});var u=L(s);a&&a.l(u),r=U(u),o=G(u,"UL",{class:!0});var f=L(o);l&&l.l(f),i=U(f),c&&c.l(f),f.forEach(v),u.forEach(v),e.forEach(v),this.h()},h(){A(o,"class","svelte-a08hsz"),A(s,"class","container svelte-a08hsz"),A(n,"class","svelte-a08hsz")},m(t,e){w(t,n,e),g(n,s),a&&a.m(s,null),g(s,r),g(s,o),l&&l.m(o,null),g(o,i),c&&c.m(o,null)},p(t,[e]){It["status-website"]&&It["status-website"].logoUrl&&a.p(t,e),It["status-website"]&&It["status-website"].navbar&&l.p(t,e),It["status-website"]&&It["status-website"].navbarGitHub&&!It["status-website"].navbar&&c.p(t,e)},i:t,o:t,d(t){t&&v(n),a&&a.d(),l&&l.d(),c&&c.d()}}}function Rt(t,e,n){let{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment)},[s]}class Nt extends yt{constructor(t){super(),$t(this,t,Rt,Lt,i,{segment:0})}}var Bt={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Gt(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ot(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function kt(t,e){var n,s,r,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,l=[],c="",u=e||{},f=0;function d(t){var e=Bt[t[1]||""],n=l[l.length-1]==t;return e?e[1]?(n?l.pop():l.push(t),e[0|n]):e[0]:t}function h(){for(var t="";l.length;)t+=d(l[l.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=a.exec(t);)s=t.substring(f,r.index),f=a.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((i=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Gt(Ot(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=r[6])?(i.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=kt(Gt(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):r[8]?n='<img src="'+Ot(r[8])+'" alt="'+Ot(r[7])+'">':r[10]?(c=c.replace("<a>",'<a href="'+Ot(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(i="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+kt(r[12]||r[15],u)+"</"+i+">":r[16]?n="<code>"+Ot(r[16])+"</code>":(r[17]||r[1])&&(n=d(r[17]||"--"))),c+=s,c+=n;return(c+t.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function Ut(t,e,n){const s=t.slice();return s[3]=e[n],s}function Ht(t,e,n){const s=t.slice();return s[3]=e[n],s}function Ct(t,e,n){const s=t.slice();return s[8]=e[n],s}function Mt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=G(t,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",`${It.path}/themes/${(It["status-website"]||{}).theme||"light"}.css`)},m(t,e){w(t,n,e)},p:t,d(t){t&&v(n)}}}function jt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=G(t,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",(It["status-website"]||{}).themeUrl)},m(t,e){w(t,n,e)},p:t,d(t){t&&v(n)}}}function Dt(e){let n,s;return{c(){n=$("script"),this.h()},l(t){n=G(t,"SCRIPT",{src:!0}),L(n).forEach(v),this.h()},h(){l(n.src,s=e[8].src)||A(n,"src",s),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){w(t,n,e)},p:t,d(t){t&&v(n)}}}function Ft(e){let n;return{c(){n=$("link"),this.h()},l(t){n=G(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){A(n,"rel",e[3].rel),A(n,"href",e[3].href),A(n,"media",e[3].media)},m(t,e){w(t,n,e)},p:t,d(t){t&&v(n)}}}function qt(e){let n;return{c(){n=$("meta"),this.h()},l(t){n=G(t,"META",{name:!0,content:!0}),this.h()},h(){A(n,"name",e[3].name),A(n,"content",e[3].content)},m(t,e){w(t,n,e)},p:t,d(t){t&&v(n)}}}function zt(e){let n,s,r,o,i,a,l,u,f,d,h,p,m,b,y,E,I,T,P=kt(It.i18n.footer.replace(/\$REPO/,`https://github.com/${It.owner}/${It.repo}`))+"",R=(It["status-website"]||{}).customHeadHtml&&function(e){let n,s,r=(It["status-website"]||{}).customHeadHtml+"";return{c(){n=new z,s=x(),this.h()},l(t){n=C(t),s=x(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),w(t,s,e)},p:t,d(t){t&&v(s),t&&n.d()}}}();let N=((It["status-website"]||{}).themeUrl?jt:Mt)(e),B=(It["status-website"]||{}).scripts&&function(t){let e,n=(It["status-website"]||{}).scripts,s=[];for(let e=0;e<n.length;e+=1)s[e]=Dt(Ct(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=x()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=x()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);w(t,e,n)},p(t,r){if(0&r){let o;for(n=(It["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Ct(t,n,o);s[o]?s[o].p(i,r):(s[o]=Dt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){_(s,t),t&&v(e)}}}(e),O=(It["status-website"]||{}).links&&function(t){let e,n=(It["status-website"]||{}).links,s=[];for(let e=0;e<n.length;e+=1)s[e]=Ft(Ht(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=x()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=x()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);w(t,e,n)},p(t,r){if(0&r){let o;for(n=(It["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Ht(t,n,o);s[o]?s[o].p(i,r):(s[o]=Ft(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){_(s,t),t&&v(e)}}}(e),k=(It["status-website"]||{}).metaTags&&function(t){let e,n=(It["status-website"]||{}).metaTags,s=[];for(let e=0;e<n.length;e+=1)s[e]=qt(Ut(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=x()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=x()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);w(t,e,n)},p(t,r){if(0&r){let o;for(n=(It["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Ut(t,n,o);s[o]?s[o].p(i,r):(s[o]=qt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){_(s,t),t&&v(e)}}}(e),H=It["status-website"].css&&function(e){let n,s,r=`<style>${It["status-website"].css}</style>`;return{c(){n=new z,s=x(),this.h()},l(t){n=C(t),s=x(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),w(t,s,e)},p:t,d(t){t&&v(s),t&&n.d()}}}(),M=It["status-website"].js&&function(e){let n,s,r=`<script>${It["status-website"].js}<\/script>`;return{c(){n=new z,s=x(),this.h()},l(t){n=C(t),s=x(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),w(t,s,e)},p:t,d(t){t&&v(s),t&&n.d()}}}(),j=(It["status-website"]||{}).customBodyHtml&&function(e){let n,s,r=(It["status-website"]||{}).customBodyHtml+"";return{c(){n=new z,s=x(),this.h()},l(t){n=C(t),s=x(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),w(t,s,e)},p:t,d(t){t&&v(s),t&&n.d()}}}();p=new Nt({props:{segment:e[0]}});const D=e[2].default,F=function(t,e,n,s){if(t){const r=c(t,e,n,s);return t[0](r)}}(D,e,e[1],null);return{c(){R&&R.c(),n=x(),N.c(),s=$("link"),r=$("link"),o=$("link"),B&&B.c(),i=x(),O&&O.c(),a=x(),k&&k.c(),l=x(),H&&H.c(),u=x(),M&&M.c(),f=x(),d=S(),j&&j.c(),h=S(),gt(p.$$.fragment),m=S(),b=$("main"),F&&F.c(),y=S(),E=$("footer"),I=$("p"),this.h()},l(t){const e=q('[data-svelte="svelte-ri9y7q"]',document.head);R&&R.l(e),n=x(),N.l(e),s=G(e,"LINK",{rel:!0,href:!0}),r=G(e,"LINK",{rel:!0,type:!0,href:!0}),o=G(e,"LINK",{rel:!0,type:!0,href:!0}),B&&B.l(e),i=x(),O&&O.l(e),a=x(),k&&k.l(e),l=x(),H&&H.l(e),u=x(),M&&M.l(e),f=x(),e.forEach(v),d=U(t),j&&j.l(t),h=U(t),bt(p.$$.fragment,t),m=U(t),b=G(t,"MAIN",{class:!0});var c=L(b);F&&F.l(c),c.forEach(v),y=U(t),E=G(t,"FOOTER",{class:!0});var g=L(E);I=G(g,"P",{}),L(I).forEach(v),g.forEach(v),this.h()},h(){A(s,"rel","stylesheet"),A(s,"href",`${It.path}/global.css`),A(r,"rel","icon"),A(r,"type","image/svg"),A(r,"href",(It["status-website"]||{}).faviconSvg||(It["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),A(o,"rel","icon"),A(o,"type","image/png"),A(o,"href",(It["status-website"]||{}).favicon||"/logo-192.png"),A(b,"class","container"),A(E,"class","svelte-jbr799")},m(t,e){R&&R.m(document.head,null),g(document.head,n),N.m(document.head,null),g(document.head,s),g(document.head,r),g(document.head,o),B&&B.m(document.head,null),g(document.head,i),O&&O.m(document.head,null),g(document.head,a),k&&k.m(document.head,null),g(document.head,l),H&&H.m(document.head,null),g(document.head,u),M&&M.m(document.head,null),g(document.head,f),w(t,d,e),j&&j.m(t,e),w(t,h,e),wt(p,t,e),w(t,m,e),w(t,b,e),F&&F.m(b,null),w(t,y,e),w(t,E,e),g(E,I),I.innerHTML=P,T=!0},p(t,[e]){(It["status-website"]||{}).customHeadHtml&&R.p(t,e),N.p(t,e),(It["status-website"]||{}).scripts&&B.p(t,e),(It["status-website"]||{}).links&&O.p(t,e),(It["status-website"]||{}).metaTags&&k.p(t,e),It["status-website"].css&&H.p(t,e),It["status-website"].js&&M.p(t,e),(It["status-website"]||{}).customBodyHtml&&j.p(t,e);const n={};1&e&&(n.segment=t[0]),p.$set(n),F&&F.p&&(!T||2&e)&&function(t,e,n,s,r,o){if(r){const i=c(e,n,s,o);t.p(i,r)}}(F,D,t,t[1],T?function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(D,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){T||(dt(p.$$.fragment,t),dt(F,t),T=!0)},o(t){ht(p.$$.fragment,t),ht(F,t),T=!1},d(t){R&&R.d(t),v(n),N.d(t),v(s),v(r),v(o),B&&B.d(t),v(i),O&&O.d(t),v(a),k&&k.d(t),v(l),H&&H.d(t),v(u),M&&M.d(t),v(f),t&&v(d),j&&j.d(t),t&&v(h),vt(p,t),t&&v(m),t&&v(b),F&&F.d(t),t&&v(y),t&&v(E)}}}function Kt(t,e,n){let{$$slots:s={},$$scope:r}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,r=t.$$scope)},[o,r,s]}class Vt extends yt{constructor(t){super(),$t(this,t,Kt,zt,i,{segment:0})}}function Jt(t){let e,n,s=t[1].stack+"";return{c(){e=$("pre"),n=E(s)},l(t){e=G(t,"PRE",{});var r=L(e);n=k(r,s),r.forEach(v)},m(t,s){w(t,e,s),g(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&M(n,s)},d(t){t&&v(e)}}}function Wt(e){let n,s,r,o,i,a,l,c,u,f=e[1].message+"";document.title=n=e[0];let d=e[2]&&e[1].stack&&Jt(e);return{c(){s=S(),r=$("h1"),o=E(e[0]),i=S(),a=$("p"),l=E(f),c=S(),d&&d.c(),u=x(),this.h()},l(t){q('[data-svelte="svelte-1moakz"]',document.head).forEach(v),s=U(t),r=G(t,"H1",{class:!0});var n=L(r);o=k(n,e[0]),n.forEach(v),i=U(t),a=G(t,"P",{class:!0});var h=L(a);l=k(h,f),h.forEach(v),c=U(t),d&&d.l(t),u=x(),this.h()},h(){A(r,"class","svelte-17w3omn"),A(a,"class","svelte-17w3omn")},m(t,e){w(t,s,e),w(t,r,e),g(r,o),w(t,i,e),w(t,a,e),g(a,l),w(t,c,e),d&&d.m(t,e),w(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&M(o,t[0]),2&e&&f!==(f=t[1].message+"")&&M(l,f),t[2]&&t[1].stack?d?d.p(t,e):(d=Jt(t),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:t,o:t,d(t){t&&v(s),t&&v(r),t&&v(i),t&&v(a),t&&v(c),d&&d.d(t),t&&v(u)}}}function Yt(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r,false]}class Xt extends yt{constructor(t){super(),$t(this,t,Yt,Wt,i,{status:0,error:1})}}function Qt(t){let n,s,r;const o=[t[4].props];var i=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=new i(a())),{c(){n&&gt(n.$$.fragment),s=x()},l(t){n&&bt(n.$$.fragment,t),s=x()},m(t,e){n&&wt(n,t,e),w(t,s,e),r=!0},p(t,e){const r=16&e?pt(o,[mt(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){ut();const t=n;ht(t.$$.fragment,1,0,(()=>{vt(t,1)})),ft()}i?(n=new i(a()),gt(n.$$.fragment),dt(n.$$.fragment,1),wt(n,s.parentNode,s)):n=null}else i&&n.$set(r)},i(t){r||(n&&dt(n.$$.fragment,t),r=!0)},o(t){n&&ht(n.$$.fragment,t),r=!1},d(t){t&&v(s),n&&vt(n,t)}}}function Zt(t){let e,n;return e=new Xt({props:{error:t[0],status:t[1]}}),{c(){gt(e.$$.fragment)},l(t){bt(e.$$.fragment,t)},m(t,s){wt(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(dt(e.$$.fragment,t),n=!0)},o(t){ht(e.$$.fragment,t),n=!1},d(t){vt(e,t)}}}function te(t){let e,n,s,r;const o=[Zt,Qt],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),s=x()},l(t){n.l(t),s=x()},m(t,n){i[e].m(t,n),w(t,s,n),r=!0},p(t,r){let l=e;e=a(t),e===l?i[e].p(t,r):(ut(),ht(i[l],1,1,(()=>{i[l]=null})),ft(),n=i[e],n?n.p(t,r):(n=i[e]=o[e](t),n.c()),dt(n,1),n.m(s.parentNode,s))},i(t){r||(dt(n),r=!0)},o(t){ht(n),r=!1},d(t){i[e].d(t),t&&v(s)}}}function ee(t){let n,s;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[te]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return n=new Vt({props:o}),{c(){gt(n.$$.fragment)},l(t){bt(n.$$.fragment,t)},m(t,e){wt(n,t,e),s=!0},p(t,[e]){const s=12&e?pt(r,[4&e&&{segment:t[2][0]},8&e&&mt(t[3].props)]):{};147&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(dt(n.$$.fragment,t),s=!0)},o(t){ht(n.$$.fragment,t),s=!1},d(t){vt(n,t)}}}function ne(t,e,n){let{stores:s}=e,{error:r}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:l=null}=e,{notify:c}=e;var u,f;return W(c),u=xt,f=s,V().$$.context.set(u,f),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,c=t.notify)},[r,o,i,a,l,s,c]}class se extends yt{constructor(t){super(),$t(this,t,ne,ee,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const re=[],oe=[{js:()=>Promise.all([import("./index.269564b6.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.4d59af3e.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.a9e3fa40.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","_number_-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.17323396.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","_number_-bc1bb552.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.a4776fcd.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],ie=(ae=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ae(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ae(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ae;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function le(t,e,n,s){return new(n||(n=Promise))((function(r,o){function i(t){try{l(s.next(t))}catch(t){o(t)}}function a(t){try{l(s.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}l((s=s.apply(t,e||[])).next())}))}function ce(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let ue,fe=1;const de="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},he={};let pe,me;function ge(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function be(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(pe))return null;let e=t.pathname.slice(pe.length);if(""===e&&(e="/"),!re.some((t=>t.test(e))))for(let n=0;n<ie.length;n+=1){const s=ie[n],r=s.pattern.exec(e);if(r){const n=ge(t.search),o=s.parts[s.parts.length-1],i=o.params?o.params(r):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:s,match:r,page:a}}}}function we(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=ce(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=be(r);if(o){$e(o,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),de.pushState({id:ue},"",r.href)}}function ve(){return{x:pageXOffset,y:pageYOffset}}function _e(t){if(he[ue]=ve(),t.state){const e=be(new URL(location.href));e?$e(e,t.state.id):location.href=location.href}else!function(t){fe=t}(fe+1),function(t){ue=t}(fe),de.replaceState({id:ue},"",location.href)}function $e(t,e,n,s){return le(this,void 0,void 0,(function*(){const r=!!e;if(r)ue=e;else{const t=ve();he[ue]=t,ue=e=++fe,he[ue]=n?t:{x:0,y:0}}if(yield me(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=he[e];s&&(t=document.getElementById(s.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),he[ue]=n,n&&(r||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function ye(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Ee,Se=null;function xe(t){const e=ce(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=be(new URL(t,ye(document)));if(e)Se&&t===Se.href||(Se={href:t,promise:De(e)}),Se.promise}(e.href)}function Ie(t){clearTimeout(Ee),Ee=setTimeout((()=>{xe(t)}),20)}function Te(t,e={noscroll:!1,replaceState:!1}){const n=be(new URL(t,ye(document)));if(n){const s=$e(n,null,e.noscroll);return de[e.replaceState?"replaceState":"pushState"]({id:ue},"",t),s}return location.href=t,new Promise((()=>{}))}const Ae="undefined"!=typeof __SAPPER__&&__SAPPER__;let Pe,Le,Re,Ne=!1,Be=[],Ge="{}";const Oe={page:function(t){const e=St(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||n&&e!==s)&&t(s=e)}))}}}({}),preloading:St(null),session:St(Ae&&Ae.session)};let ke,Ue,He;function Ce(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Me(t){return le(this,void 0,void 0,(function*(){Pe&&Oe.preloading.set(!0);const e=function(t){return Se&&Se.href===t.href?Se.promise:De(t)}(t),n=Le={},s=yield e,{redirect:r}=s;if(n===Le)if(r)yield Te(r.location,{replaceState:!0});else{const{props:e,branch:n}=s;yield je(n,e,Ce(e,t.page))}}))}function je(t,e,n){return le(this,void 0,void 0,(function*(){Oe.page.set(n),Oe.preloading.set(!1),Pe?Pe.$set(e):(e.stores={page:{subscribe:Oe.page.subscribe},preloading:{subscribe:Oe.preloading.subscribe},session:Oe.session},e.level0={props:yield Re},e.notify=Oe.page.notify,Pe=new se({target:He,props:e,hydrate:!0})),Be=t,Ge=JSON.stringify(n.query),Ne=!0,Ue=!1}))}function De(t){return le(this,void 0,void 0,(function*(){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Re){const t=()=>({});Re=Ae.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},ke)}let a,l=1;try{const r=JSON.stringify(n.query),c=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>le(this,void 0,void 0,(function*(){const f=s[a];if(function(t,e,n,s){if(s!==Ge)return!0;const r=Be[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,c,r)&&(u=!0),o.segments[l]=s[a+1],!e)return{segment:f};const d=l++;let h;if(Ue||u||!Be[a]||Be[a].part!==e.i){u=!1;const{default:s,preload:r}=yield oe[e.i].js();let o;o=Ne||!Ae.preloaded[a+1]?r?yield r.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},ke):{}:Ae.preloaded[a+1],h={component:s,props:o,segment:f,match:c,part:e.i}}else h=Be[a];return o[`level${d}`]=h})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:r,props:o,branch:a}}))}var Fe,qe,ze;Oe.session.subscribe((t=>le(void 0,void 0,void 0,(function*(){if(ke=t,!Ne)return;Ue=!0;const e=be(new URL(location.href)),n=Le={},{redirect:s,props:r,branch:o}=yield De(e);n===Le&&(s?yield Te(s.location,{replaceState:!0}):yield je(o,r,Ce(r,e.page)))})))),Fe={target:document.querySelector("#sapper")},qe=Fe.target,He=qe,ze=Ae.baseUrl,pe=ze,me=Me,"scrollRestoration"in de&&(de.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{de.scrollRestoration="auto"})),addEventListener("load",(()=>{de.scrollRestoration="manual"})),addEventListener("click",we),addEventListener("popstate",_e),addEventListener("touchstart",xe),addEventListener("mousemove",Ie),Ae.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:s,preloaded:r,status:o,error:i}=Ae;Re||(Re=r&&r[0]);const a={error:i,status:o,session:s,level0:{props:Re},level1:{props:{status:o,error:i},component:Xt},segments:r},l=ge(n);je([],a,{host:t,path:e,query:l,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;de.replaceState({id:fe},"",e);const n=be(new URL(location.href));if(n)return $e(n,fe,!0,t)}));export{vt as A,I as B,r as C,Q as D,C as E,l as F,f as G,z as H,q as I,kt as J,y as K,O as L,Te as M,j as N,T as O,e as P,P as Q,pt as R,yt as S,W as T,Y as U,u as V,mt as W,st as X,F as Y,L as a,k as b,G as c,v as d,$ as e,A as f,w as g,g as h,$t as i,S as j,U as k,ut as l,ht as m,t as n,ft as o,dt as p,J as q,It as r,i as s,E as t,M as u,x as v,_ as w,gt as x,bt as y,wt as z};

import __inject_styles from './inject_styles.803b7e80.js';