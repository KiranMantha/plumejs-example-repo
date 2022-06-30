import{c as w,d,e as v,f as b}from"./vendor.75761d15.js";function l(e){return typeof e=="function"}function U(e){var t=function(n){Error.call(n),n.stack=new Error().stack},r=e(t);return r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r}var _=U(function(e){return function(r){e(this),this.message=r?r.length+` errors occurred during unsubscription:
`+r.map(function(n,i){return i+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=r}});function P(e,t){if(e){var r=e.indexOf(t);0<=r&&e.splice(r,1)}}var y=function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._teardowns=null}return e.prototype.unsubscribe=function(){var t,r,n,i,o;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=w(s),c=u.next();!c.done;c=u.next()){var E=c.value;E.remove(this)}}catch(a){t={error:a}}finally{try{c&&!c.done&&(r=u.return)&&r.call(u)}finally{if(t)throw t.error}}else s.remove(this);var h=this.initialTeardown;if(l(h))try{h()}catch(a){o=a instanceof _?a.errors:[a]}var I=this._teardowns;if(I){this._teardowns=null;try{for(var p=w(I),f=p.next();!f.done;f=p.next()){var R=f.value;try{D(R)}catch(a){o=o!=null?o:[],a instanceof _?o=d(d([],v(o)),v(a.errors)):o.push(a)}}}catch(a){n={error:a}}finally{try{f&&!f.done&&(i=p.return)&&i.call(p)}finally{if(n)throw n.error}}}if(o)throw new _(o)}},e.prototype.add=function(t){var r;if(t&&t!==this)if(this.closed)D(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._teardowns=(r=this._teardowns)!==null&&r!==void 0?r:[]).push(t)}},e.prototype._hasParent=function(t){var r=this._parentage;return r===t||Array.isArray(r)&&r.includes(t)},e.prototype._addParent=function(t){var r=this._parentage;this._parentage=Array.isArray(r)?(r.push(t),r):r?[r,t]:t},e.prototype._removeParent=function(t){var r=this._parentage;r===t?this._parentage=null:Array.isArray(r)&&P(r,t)},e.prototype.remove=function(t){var r=this._teardowns;r&&P(r,t),t instanceof e&&t._removeParent(this)},e.EMPTY=function(){var t=new e;return t.closed=!0,t}(),e}(),C=y.EMPTY;function F(e){return e instanceof y||e&&"closed"in e&&l(e.remove)&&l(e.add)&&l(e.unsubscribe)}function D(e){l(e)?e():e.unsubscribe()}var T={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},x={setTimeout:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=x.delegate;return((r==null?void 0:r.setTimeout)||setTimeout).apply(void 0,d([],v(e)))},clearTimeout:function(e){var t=x.delegate;return((t==null?void 0:t.clearTimeout)||clearTimeout)(e)},delegate:void 0};function z(e){x.setTimeout(function(){throw e})}function S(){}var m=null;function g(e){if(T.useDeprecatedSynchronousErrorHandling){var t=!m;if(t&&(m={errorThrown:!1,error:null}),e(),t){var r=m,n=r.errorThrown,i=r.error;if(m=null,n)throw i}}else e()}var H=function(e){b(t,e);function t(r){var n=e.call(this)||this;return n.isStopped=!1,r?(n.destination=r,F(r)&&r.add(n)):n.destination=B,n}return t.create=function(r,n,i){return new j(r,n,i)},t.prototype.next=function(r){this.isStopped||this._next(r)},t.prototype.error=function(r){this.isStopped||(this.isStopped=!0,this._error(r))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(r){this.destination.next(r)},t.prototype._error=function(r){try{this.destination.error(r)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(y),j=function(e){b(t,e);function t(r,n,i){var o=e.call(this)||this,s;if(l(r))s=r;else if(r){s=r.next,n=r.error,i=r.complete;var u;o&&T.useDeprecatedNextContext?(u=Object.create(r),u.unsubscribe=function(){return o.unsubscribe()}):u=r,s=s==null?void 0:s.bind(u),n=n==null?void 0:n.bind(u),i=i==null?void 0:i.bind(u)}return o.destination={next:s?A(s):S,error:A(n!=null?n:M),complete:i?A(i):S},o}return t}(H);function A(e,t){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];try{e.apply(void 0,d([],v(r)))}catch(i){z(i)}}}function M(e){throw e}var B={closed:!0,next:S,error:M,complete:S},V=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function q(e){return e}function G(e){return e.length===0?q:e.length===1?e[0]:function(r){return e.reduce(function(n,i){return i(n)},r)}}var O=function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var r=new e;return r.source=this,r.operator=t,r},e.prototype.subscribe=function(t,r,n){var i=this,o=K(t)?t:new j(t,r,n);return g(function(){var s=i,u=s.operator,c=s.source;o.add(u?u.call(o,c):c?i._subscribe(o):i._trySubscribe(o))}),o},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){t.error(r)}},e.prototype.forEach=function(t,r){var n=this;return r=Y(r),new r(function(i,o){var s=new j({next:function(u){try{t(u)}catch(c){o(c),s.unsubscribe()}},error:o,complete:i});n.subscribe(s)})},e.prototype._subscribe=function(t){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(t)},e.prototype[V]=function(){return this},e.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return G(t)(this)},e.prototype.toPromise=function(t){var r=this;return t=Y(t),new t(function(n,i){var o;r.subscribe(function(s){return o=s},function(s){return i(s)},function(){return n(o)})})},e.create=function(t){return new e(t)},e}();function Y(e){var t;return(t=e!=null?e:T.Promise)!==null&&t!==void 0?t:Promise}function J(e){return e&&l(e.next)&&l(e.error)&&l(e.complete)}function K(e){return e&&e instanceof H||J(e)&&F(e)}var L=U(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Q=function(e){b(t,e);function t(){var r=e.call(this)||this;return r.closed=!1,r.observers=[],r.isStopped=!1,r.hasError=!1,r.thrownError=null,r}return t.prototype.lift=function(r){var n=new k(this,this);return n.operator=r,n},t.prototype._throwIfClosed=function(){if(this.closed)throw new L},t.prototype.next=function(r){var n=this;g(function(){var i,o;if(n._throwIfClosed(),!n.isStopped){var s=n.observers.slice();try{for(var u=w(s),c=u.next();!c.done;c=u.next()){var E=c.value;E.next(r)}}catch(h){i={error:h}}finally{try{c&&!c.done&&(o=u.return)&&o.call(u)}finally{if(i)throw i.error}}}})},t.prototype.error=function(r){var n=this;g(function(){if(n._throwIfClosed(),!n.isStopped){n.hasError=n.isStopped=!0,n.thrownError=r;for(var i=n.observers;i.length;)i.shift().error(r)}})},t.prototype.complete=function(){var r=this;g(function(){if(r._throwIfClosed(),!r.isStopped){r.isStopped=!0;for(var n=r.observers;n.length;)n.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var r;return((r=this.observers)===null||r===void 0?void 0:r.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(r){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,r)},t.prototype._subscribe=function(r){return this._throwIfClosed(),this._checkFinalizedStatuses(r),this._innerSubscribe(r)},t.prototype._innerSubscribe=function(r){var n=this,i=n.hasError,o=n.isStopped,s=n.observers;return i||o?C:(s.push(r),new y(function(){return P(s,r)}))},t.prototype._checkFinalizedStatuses=function(r){var n=this,i=n.hasError,o=n.thrownError,s=n.isStopped;i?r.error(o):s&&r.complete()},t.prototype.asObservable=function(){var r=new O;return r.source=this,r},t.create=function(r,n){return new k(r,n)},t}(O),k=function(e){b(t,e);function t(r,n){var i=e.call(this)||this;return i.destination=r,i.source=n,i}return t.prototype.next=function(r){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.next)===null||i===void 0||i.call(n,r)},t.prototype.error=function(r){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.error)===null||i===void 0||i.call(n,r)},t.prototype.complete=function(){var r,n;(n=(r=this.destination)===null||r===void 0?void 0:r.complete)===null||n===void 0||n.call(r)},t.prototype._subscribe=function(r){var n,i;return(i=(n=this.source)===null||n===void 0?void 0:n.subscribe(r))!==null&&i!==void 0?i:C},t}(Q);export{Q as S};
