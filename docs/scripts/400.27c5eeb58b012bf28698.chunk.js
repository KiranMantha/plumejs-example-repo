"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[400],{9400:function(e,s,t){t.r(s);var l=t(655),n=t(3069);let r=class{greeting="hello world"};r=(0,l.gn)([(0,n.GS)()],r);let i=class{render(){return n.dy`<p>rendering conditionally</p>`}};i=(0,l.gn)([(0,n.wA)({selector:"conditional-component"})],i);let o=class{renderer;expService;setClass1=!0;setClass2=!0;constructor(e,s){this.renderer=e,this.expService=s}updateService(){this.expService.greeting="hey world",this.renderer.update()}toggleClass1(){this.setClass1=!this.setClass1}toggleClass2(){this.setClass2=!this.setClass2}render(){return n.dy` <p
        class="test ${this.setClass1?"class1":""} ${this.setClass2?"class2":""}"
        ${this.setClass1?"hidden":""}
      >
        ${this.expService.greeting}
      </p>
      ${this.setClass1?n.dy`<conditional-component></conditional-component>`:""}
      <button onclick=${()=>this.toggleClass1()}>toggle class1</button>
      <button onclick=${()=>this.toggleClass2()}>toggle class2</button>`}};o=(0,l.gn)([(0,n.wA)({selector:"app-experiments",deps:[n.Th,r]})],o)}}]);
//# sourceMappingURL=../sourcemaps/400.js.map