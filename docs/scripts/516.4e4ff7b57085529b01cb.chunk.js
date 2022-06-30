"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[516],{516:function(r,t,e){e.d(t,{x:function(){return X}});var n=e(655);function o(r){return"function"==typeof r}function i(r){var t=r((function(r){Error.call(r),r.stack=(new Error).stack}));return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var s=i((function(r){return function(t){r(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(r,t){return t+1+") "+r.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t}}));function u(r,t){if(r){var e=r.indexOf(t);0<=e&&r.splice(e,1)}}var c=function(){function r(r){this.initialTeardown=r,this.closed=!1,this._parentage=null,this._finalizers=null}var t;return r.prototype.unsubscribe=function(){var r,t,e,i,u;if(!this.closed){this.closed=!0;var c=this._parentage;if(c)if(this._parentage=null,Array.isArray(c))try{for(var a=(0,n.XA)(c),l=a.next();!l.done;l=a.next())l.value.remove(this)}catch(t){r={error:t}}finally{try{l&&!l.done&&(t=a.return)&&t.call(a)}finally{if(r)throw r.error}}else c.remove(this);var f=this.initialTeardown;if(o(f))try{f()}catch(r){u=r instanceof s?r.errors:[r]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var v=(0,n.XA)(h),d=v.next();!d.done;d=v.next()){var b=d.value;try{p(b)}catch(r){u=null!=u?u:[],r instanceof s?u=(0,n.ev)((0,n.ev)([],(0,n.CR)(u)),(0,n.CR)(r.errors)):u.push(r)}}}catch(r){e={error:r}}finally{try{d&&!d.done&&(i=v.return)&&i.call(v)}finally{if(e)throw e.error}}}if(u)throw new s(u)}},r.prototype.add=function(t){var e;if(t&&t!==this)if(this.closed)p(t);else{if(t instanceof r){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(e=this._finalizers)&&void 0!==e?e:[]).push(t)}},r.prototype._hasParent=function(r){var t=this._parentage;return t===r||Array.isArray(t)&&t.includes(r)},r.prototype._addParent=function(r){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(r),t):t?[t,r]:r},r.prototype._removeParent=function(r){var t=this._parentage;t===r?this._parentage=null:Array.isArray(t)&&u(t,r)},r.prototype.remove=function(t){var e=this._finalizers;e&&u(e,t),t instanceof r&&t._removeParent(this)},r.EMPTY=((t=new r).closed=!0,t),r}(),a=c.EMPTY;function l(r){return r instanceof c||r&&"closed"in r&&o(r.remove)&&o(r.add)&&o(r.unsubscribe)}function p(r){o(r)?r():r.unsubscribe()}var f=null,h=null,v=void 0,d=!1,b=!1,y={setTimeout:function(r,t){for(var e=[],o=2;o<arguments.length;o++)e[o-2]=arguments[o];var i=y.delegate;return(null==i?void 0:i.setTimeout)?i.setTimeout.apply(i,(0,n.ev)([r,t],(0,n.CR)(e))):setTimeout.apply(void 0,(0,n.ev)([r,t],(0,n.CR)(e)))},clearTimeout:function(r){var t=y.delegate;return((null==t?void 0:t.clearTimeout)||clearTimeout)(r)},delegate:void 0};function _(){}var m=w("C",void 0,void 0);function w(r,t,e){return{kind:r,value:t,error:e}}var x=null;function S(r){if(d){var t=!x;if(t&&(x={errorThrown:!1,error:null}),r(),t){var e=x,n=e.errorThrown,o=e.error;if(x=null,n)throw o}}else r()}var g=function(r){function t(t){var e=r.call(this)||this;return e.isStopped=!1,t?(e.destination=t,l(t)&&t.add(e)):e.destination=k,e}return(0,n.ZT)(t,r),t.create=function(r,t,e){return new C(r,t,e)},t.prototype.next=function(r){this.isStopped?P(function(r){return w("N",r,void 0)}(r),this):this._next(r)},t.prototype.error=function(r){this.isStopped?P(w("E",void 0,r),this):(this.isStopped=!0,this._error(r))},t.prototype.complete=function(){this.isStopped?P(m,this):(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(r){this.destination.next(r)},t.prototype._error=function(r){try{this.destination.error(r)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(c),T=Function.prototype.bind;function O(r,t){return T.call(r,t)}var E=function(){function r(r){this.partialObserver=r}return r.prototype.next=function(r){var t=this.partialObserver;if(t.next)try{t.next(r)}catch(r){A(r)}},r.prototype.error=function(r){var t=this.partialObserver;if(t.error)try{t.error(r)}catch(r){A(r)}else A(r)},r.prototype.complete=function(){var r=this.partialObserver;if(r.complete)try{r.complete()}catch(r){A(r)}},r}(),C=function(r){function t(t,e,n){var i,s,u=r.call(this)||this;return o(t)||!t?i={next:null!=t?t:void 0,error:null!=e?e:void 0,complete:null!=n?n:void 0}:u&&b?((s=Object.create(t)).unsubscribe=function(){return u.unsubscribe()},i={next:t.next&&O(t.next,s),error:t.error&&O(t.error,s),complete:t.complete&&O(t.complete,s)}):i=t,u.destination=new E(i),u}return(0,n.ZT)(t,r),t}(g);function A(r){var t;d?(t=r,d&&x&&(x.errorThrown=!0,x.error=t)):function(r){y.setTimeout((function(){if(!f)throw r;f(r)}))}(r)}function P(r,t){var e=h;e&&y.setTimeout((function(){return e(r,t)}))}var k={closed:!0,next:_,error:function(r){throw r},complete:_},j="function"==typeof Symbol&&Symbol.observable||"@@observable";function z(r){return r}function I(r){return 0===r.length?z:1===r.length?r[0]:function(t){return r.reduce((function(r,t){return t(r)}),t)}}var R=function(){function r(r){r&&(this._subscribe=r)}return r.prototype.lift=function(t){var e=new r;return e.source=this,e.operator=t,e},r.prototype.subscribe=function(r,t,e){var n,i=this,s=(n=r)&&n instanceof g||function(r){return r&&o(r.next)&&o(r.error)&&o(r.complete)}(n)&&l(n)?r:new C(r,t,e);return S((function(){var r=i,t=r.operator,e=r.source;s.add(t?t.call(s,e):e?i._subscribe(s):i._trySubscribe(s))})),s},r.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(t){r.error(t)}},r.prototype.forEach=function(r,t){var e=this;return new(t=Z(t))((function(t,n){var o=new C({next:function(t){try{r(t)}catch(r){n(r),o.unsubscribe()}},error:n,complete:t});e.subscribe(o)}))},r.prototype._subscribe=function(r){var t;return null===(t=this.source)||void 0===t?void 0:t.subscribe(r)},r.prototype[j]=function(){return this},r.prototype.pipe=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return I(r)(this)},r.prototype.toPromise=function(r){var t=this;return new(r=Z(r))((function(r,e){var n;t.subscribe((function(r){return n=r}),(function(r){return e(r)}),(function(){return r(n)}))}))},r.create=function(t){return new r(t)},r}();function Z(r){var t;return null!==(t=null!=r?r:v)&&void 0!==t?t:Promise}var F=i((function(r){return function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})),X=function(r){function t(){var t=r.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return(0,n.ZT)(t,r),t.prototype.lift=function(r){var t=new M(this,this);return t.operator=r,t},t.prototype._throwIfClosed=function(){if(this.closed)throw new F},t.prototype.next=function(r){var t=this;S((function(){var e,o;if(t._throwIfClosed(),!t.isStopped){t.currentObservers||(t.currentObservers=Array.from(t.observers));try{for(var i=(0,n.XA)(t.currentObservers),s=i.next();!s.done;s=i.next())s.value.next(r)}catch(r){e={error:r}}finally{try{s&&!s.done&&(o=i.return)&&o.call(i)}finally{if(e)throw e.error}}}}))},t.prototype.error=function(r){var t=this;S((function(){if(t._throwIfClosed(),!t.isStopped){t.hasError=t.isStopped=!0,t.thrownError=r;for(var e=t.observers;e.length;)e.shift().error(r)}}))},t.prototype.complete=function(){var r=this;S((function(){if(r._throwIfClosed(),!r.isStopped){r.isStopped=!0;for(var t=r.observers;t.length;)t.shift().complete()}}))},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var r;return(null===(r=this.observers)||void 0===r?void 0:r.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(t){return this._throwIfClosed(),r.prototype._trySubscribe.call(this,t)},t.prototype._subscribe=function(r){return this._throwIfClosed(),this._checkFinalizedStatuses(r),this._innerSubscribe(r)},t.prototype._innerSubscribe=function(r){var t=this,e=this,n=e.hasError,o=e.isStopped,i=e.observers;return n||o?a:(this.currentObservers=null,i.push(r),new c((function(){t.currentObservers=null,u(i,r)})))},t.prototype._checkFinalizedStatuses=function(r){var t=this,e=t.hasError,n=t.thrownError,o=t.isStopped;e?r.error(n):o&&r.complete()},t.prototype.asObservable=function(){var r=new R;return r.source=this,r},t.create=function(r,t){return new M(r,t)},t}(R),M=function(r){function t(t,e){var n=r.call(this)||this;return n.destination=t,n.source=e,n}return(0,n.ZT)(t,r),t.prototype.next=function(r){var t,e;null===(e=null===(t=this.destination)||void 0===t?void 0:t.next)||void 0===e||e.call(t,r)},t.prototype.error=function(r){var t,e;null===(e=null===(t=this.destination)||void 0===t?void 0:t.error)||void 0===e||e.call(t,r)},t.prototype.complete=function(){var r,t;null===(t=null===(r=this.destination)||void 0===r?void 0:r.complete)||void 0===t||t.call(r)},t.prototype._subscribe=function(r){var t,e;return null!==(e=null===(t=this.source)||void 0===t?void 0:t.subscribe(r))&&void 0!==e?e:a},t}(X)}}]);
//# sourceMappingURL=../sourcemaps/516.js.map