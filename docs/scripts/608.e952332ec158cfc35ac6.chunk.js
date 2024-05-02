"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[608],{608:function(e,s,t){t.r(s);var l=t(674),n=t(968);let r=class{greeting="hello world"};r=(0,l.Cg)([(0,n.Injectable)()],r);let o=class{render(){return n.html`<p>rendering conditionally</p>`}};o=(0,l.Cg)([(0,n.Component)({selector:"conditional-component"})],o);let i=class{renderer;expService;setClass1=!0;setClass2=!0;constructor(e,s){this.renderer=e,this.expService=s}updateService(){this.expService.greeting="hey world",this.renderer.update()}toggleClass1(){this.setClass1=!this.setClass1}toggleClass2(){this.setClass2=!this.setClass2}render(){return n.html` <p
        class="test ${this.setClass1?"class1":""} ${this.setClass2?"class2":""}"
        ${this.setClass1?"hidden":""}
      >
        ${this.expService.greeting}
      </p>
      ${this.setClass1?n.html`<conditional-component></conditional-component>`:""}
      <button onclick=${()=>this.toggleClass1()}>toggle class1</button>
      <button onclick=${()=>this.toggleClass2()}>toggle class2</button>`}};i=(0,l.Cg)([(0,n.Component)({selector:"app-experiments",deps:[n.Renderer,r]})],i)}}]);
//# sourceMappingURL=../sourcemaps/608.js.map