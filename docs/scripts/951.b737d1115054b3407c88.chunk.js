"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[951],{501:(e,s,t)=>{t.d(s,{Z:()=>l});var r=t(537),n=t.n(r),i=t(645),o=t.n(i)()(n());o.push([e.id,".test{list-style:none;margin:0;padding:0}.test li{color:#000}","",{version:3,sources:["webpack://./src/persons/persons-list.scss"],names:[],mappings:"AAEA,MACE,eAAA,CACA,QAAA,CACA,SAAA,CACA,SACE,UAPG",sourcesContent:["$grey: #000;\n\n.test {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  li {\n    color: $grey;\n  }\n}"],sourceRoot:""}]);const l=o},951:(e,s,t)=>{t.r(s);var r=t(655),n=t(394);let i=class PersonDetails{ObservedProperties=["userDetails"];userDetails;render(){return this.userDetails&&this.userDetails.name?n.dy`
				<strong>Person Details</strong>
				<div>Name: ${this.userDetails.name}</div>
				<div>Company: ${this.userDetails.company.name}</div>
			`:n.dy`<div></div>`}};i=(0,r.gn)([(0,n.wA)({selector:"person-details"})],i);var o=t(674),l=t(501);let a=class PersonService{getPersons(){return fetch("https://jsonplaceholder.typicode.com/users").then((e=>e.json()))}};a=(0,r.gn)([(0,n.GS)()],a);let p=class PersonsList{personSrvc;router;persondetails={};update;usersListRef;personDetailsRef;constructor(e,s){this.personSrvc=e,this.router=s,console.log("current route ",this.router.getCurrentRoute())}mount(){this.personSrvc.getPersons().then((e=>{this.renderUsers(e)}))}alertName(e){this.persondetails=e,this.personDetailsRef.setProps({userDetails:e})}renderUsers(e){const s=e.map((e=>n.dy`
        <li
          class="pointer"
          onclick=${()=>{this.alertName(e)}}
        >
          ${e.name}
        </li>
      `));(0,n.sY)(this.usersListRef,n.dy`${s}`)}render(){return n.dy`
      <h4>
        Sample service injection with http call and passing data to other
        component
      </h4>
      Current route data:
      <code>${JSON.stringify(this.router.getCurrentRoute(),null,2)}</code>
      <div class="mt-20 mb-20 content">
        <ul
          ref="${e=>{this.usersListRef=e}}"
          class="block-list is-small"
        ></ul>
        <person-details
          id="person-details"
          ref="${e=>{this.personDetailsRef=e}}"
        ></person-details>
      </div>
    `}};p=(0,r.gn)([(0,n.wA)({selector:"persons-list",styles:l.Z}),(0,r.w6)("design:paramtypes",[a,o.F])],p)}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy85NTEuYjczN2QxMTE1MDU0YjM0MDdjODguY2h1bmsuanMiLCJtYXBwaW5ncyI6IjBLQUdJQSxFLE1BQTBCLEdBQTRCLEtBRTFEQSxFQUF3QkMsS0FBSyxDQUFDQyxFQUFPQyxHQUFJLGdFQUFpRSxHQUFHLENBQUMsUUFBVSxFQUFFLFFBQVUsQ0FBQyw2Q0FBNkMsTUFBUSxHQUFHLFNBQVcsb0RBQW9ELGVBQWlCLENBQUMsZ0hBQWdILFdBQWEsTUFFM1ksVywyQ0NGQSxJQUFhQyxFQUFiLE1BQWFBLGNBQ0FDLG1CQUE0QixDQUFDLGVBQ3RDQyxZQUVBQyxTQUNJLE9BQUlDLEtBQUtGLGFBQWVFLEtBQUtGLFlBQVlHLEtBQzlCLElBQUk7O2lCQUVORCxLQUFLRixZQUFZRztvQkFDZEQsS0FBS0YsWUFBWUksUUFBUUQ7S0FHMUIsSUFBSSxnQkFaVkwsR0FBYSxVQUh6QixRQUFVLENBQ1BPLFNBQVUsb0JBRURQLEcsc0JDT2IsSUFBTVEsRUFBTixNQUFNQSxjQUNKQyxhQUNFLE9BQU9DLE1BQU0sOENBQThDQyxNQUFNQyxHQUMvREEsRUFBSUMsV0FISkwsR0FBYSxVQURsQixXQUNLQSxHQVlOLElBQU1NLEVBQU4sTUFBTUEsWUFNZ0JDLFdBQW1DQyxPQUx2REMsY0FBcUIsR0FDckJDLE9BQ0FDLGFBQ0FDLGlCQUVBQyxZQUFvQk4sRUFBbUNDLEdBQW5DLEtBQUFELFdBQUFBLEVBQW1DLEtBQUFDLE9BQUFBLEVBQ3JETSxRQUFRQyxJQUFJLGlCQUFrQm5CLEtBQUtZLE9BQU9RLG1CQUc1Q0MsUUFDRXJCLEtBQUtXLFdBQVdOLGFBQWFFLE1BQU1lLElBQ2pDdEIsS0FBS3VCLFlBQVlELE1BSXJCRSxVQUFVQyxHQUNSekIsS0FBS2EsY0FBZ0JZLEVBQ3JCekIsS0FBS2dCLGlCQUFpQlUsU0FBUyxDQUFFNUIsWUFBYTJCLElBR3hDRixZQUFZRCxHQUNsQixNQUFNSyxFQUFRTCxFQUFLTSxLQUFLSCxHQUNmLElBQUk7OztvQkFHRyxLQUNSekIsS0FBS3dCLFVBQVVDOztZQUdmQSxFQUFLeEI7O1dBSWIsUUFBT0QsS0FBS2UsYUFBYyxJQUFJLEdBQUdZLEtBR25DNUIsU0FDRSxPQUFPLElBQUk7Ozs7OztjQU1EOEIsS0FBS0MsVUFBVTlCLEtBQUtZLE9BQU9RLGtCQUFtQixLQUFNOzs7aUJBR2hEVyxJQUNOL0IsS0FBS2UsYUFBZWdCOzs7OztpQkFNZEEsSUFDTi9CLEtBQUtnQixpQkFBbUJlOzs7UUF2RDlCckIsR0FBVyxVQUpoQixRQUFVLENBQ1RQLFNBQVUsZUFDVjZCLE9BQVEsTyw2QkFRd0I1QixFQUErQixPQU4zRE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGVyc29ucy9wZXJzb25zLWxpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGVyc29ucy9wZXJzb24tZGV0YWlscy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BlcnNvbnMvcGVyc29ucy1saXN0LmNvbXBvbmVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50ZXN0e2xpc3Qtc3R5bGU6bm9uZTttYXJnaW46MDtwYWRkaW5nOjB9LnRlc3QgbGl7Y29sb3I6IzAwMH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGVyc29ucy9wZXJzb25zLWxpc3Quc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSxNQUNFLGVBQUEsQ0FDQSxRQUFBLENBQ0EsU0FBQSxDQUNBLFNBQ0UsVUFQR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkZ3JleTogIzAwMDtcXG5cXG4udGVzdCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpIHtcXG4gICAgY29sb3I6ICRncmV5O1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBodG1sLCBJSG9va3MgfSBmcm9tICdAcGx1bWVqcy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwicGVyc29uLWRldGFpbHNcIlxufSlcbmV4cG9ydCBjbGFzcyBQZXJzb25EZXRhaWxzIGltcGxlbWVudHMgSUhvb2tzIHtcbiAgICByZWFkb25seSBPYnNlcnZlZFByb3BlcnRpZXMgPSA8Y29uc3Q+Wyd1c2VyRGV0YWlscyddO1xuICAgIHVzZXJEZXRhaWxzOiB7IG5hbWU6IHN0cmluZzsgY29tcGFueTogeyBuYW1lOiBzdHJpbmcgfSB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy51c2VyRGV0YWlscyAmJiB0aGlzLnVzZXJEZXRhaWxzLm5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBodG1sYFxuXHRcdFx0XHQ8c3Ryb25nPlBlcnNvbiBEZXRhaWxzPC9zdHJvbmc+XG5cdFx0XHRcdDxkaXY+TmFtZTogJHt0aGlzLnVzZXJEZXRhaWxzLm5hbWV9PC9kaXY+XG5cdFx0XHRcdDxkaXY+Q29tcGFueTogJHt0aGlzLnVzZXJEZXRhaWxzLmNvbXBhbnkubmFtZX08L2Rpdj5cblx0XHRcdGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaHRtbGA8ZGl2PjwvZGl2PmA7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRSZWYsXG4gIGh0bWwsXG4gIEluamVjdGFibGUsXG4gIHJlbmRlcixcbn0gZnJvbSBcIkBwbHVtZWpzL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAcGx1bWVqcy9yb3V0ZXJcIjtcbmltcG9ydCB7IFBlcnNvbkRldGFpbHMgfSBmcm9tIFwiLi9wZXJzb24tZGV0YWlscy5jb21wb25lbnRcIjtcbmltcG9ydCBwZXJzb25MaXN0U3R5bGVzIGZyb20gXCIuL3BlcnNvbnMtbGlzdC5zY3NzXCI7XG5cbkBJbmplY3RhYmxlKClcbmNsYXNzIFBlcnNvblNlcnZpY2Uge1xuICBnZXRQZXJzb25zKCkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vyc1wiKS50aGVuKChyZXMpID0+XG4gICAgICByZXMuanNvbigpXG4gICAgKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwicGVyc29ucy1saXN0XCIsXG4gIHN0eWxlczogcGVyc29uTGlzdFN0eWxlcyxcbn0pXG5jbGFzcyBQZXJzb25zTGlzdCB7XG4gIHBlcnNvbmRldGFpbHM6IGFueSA9IHt9O1xuICB1cGRhdGU6IGFueTtcbiAgdXNlcnNMaXN0UmVmOiBIVE1MRWxlbWVudDtcbiAgcGVyc29uRGV0YWlsc1JlZjogQ29tcG9uZW50UmVmPFBlcnNvbkRldGFpbHM+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGVyc29uU3J2YzogUGVyc29uU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIGNvbnNvbGUubG9nKFwiY3VycmVudCByb3V0ZSBcIiwgdGhpcy5yb3V0ZXIuZ2V0Q3VycmVudFJvdXRlKCkpO1xuICB9XG5cbiAgbW91bnQoKSB7XG4gICAgdGhpcy5wZXJzb25TcnZjLmdldFBlcnNvbnMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlclVzZXJzKGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgYWxlcnROYW1lKHVzZXI6IGFueSkge1xuICAgIHRoaXMucGVyc29uZGV0YWlscyA9IHVzZXI7XG4gICAgdGhpcy5wZXJzb25EZXRhaWxzUmVmLnNldFByb3BzKHsgdXNlckRldGFpbHM6IHVzZXIgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclVzZXJzKGRhdGE6IEFycmF5PGFueT4pIHtcbiAgICBjb25zdCBub2RlcyA9IGRhdGEubWFwKCh1c2VyOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8bGlcbiAgICAgICAgICBjbGFzcz1cInBvaW50ZXJcIlxuICAgICAgICAgIG9uY2xpY2s9JHsoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0TmFtZSh1c2VyKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgJHt1c2VyLm5hbWV9XG4gICAgICAgIDwvbGk+XG4gICAgICBgO1xuICAgIH0pO1xuICAgIHJlbmRlcih0aGlzLnVzZXJzTGlzdFJlZiwgaHRtbGAke25vZGVzfWApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGg0PlxuICAgICAgICBTYW1wbGUgc2VydmljZSBpbmplY3Rpb24gd2l0aCBodHRwIGNhbGwgYW5kIHBhc3NpbmcgZGF0YSB0byBvdGhlclxuICAgICAgICBjb21wb25lbnRcbiAgICAgIDwvaDQ+XG4gICAgICBDdXJyZW50IHJvdXRlIGRhdGE6XG4gICAgICA8Y29kZT4ke0pTT04uc3RyaW5naWZ5KHRoaXMucm91dGVyLmdldEN1cnJlbnRSb3V0ZSgpLCBudWxsLCAyKX08L2NvZGU+XG4gICAgICA8ZGl2IGNsYXNzPVwibXQtMjAgbWItMjAgY29udGVudFwiPlxuICAgICAgICA8dWxcbiAgICAgICAgICByZWY9XCIkeyhub2RlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXJzTGlzdFJlZiA9IG5vZGU7XG4gICAgICAgICAgfX1cIlxuICAgICAgICAgIGNsYXNzPVwiYmxvY2stbGlzdCBpcy1zbWFsbFwiXG4gICAgICAgID48L3VsPlxuICAgICAgICA8cGVyc29uLWRldGFpbHNcbiAgICAgICAgICBpZD1cInBlcnNvbi1kZXRhaWxzXCJcbiAgICAgICAgICByZWY9XCIkeyhub2RlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbkRldGFpbHNSZWYgPSBub2RlO1xuICAgICAgICAgIH19XCJcbiAgICAgICAgPjwvcGVyc29uLWRldGFpbHM+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG59XG4iXSwibmFtZXMiOlsiX19fQ1NTX0xPQURFUl9FWFBPUlRfX18iLCJwdXNoIiwibW9kdWxlIiwiaWQiLCJQZXJzb25EZXRhaWxzIiwiT2JzZXJ2ZWRQcm9wZXJ0aWVzIiwidXNlckRldGFpbHMiLCJyZW5kZXIiLCJ0aGlzIiwibmFtZSIsImNvbXBhbnkiLCJzZWxlY3RvciIsIlBlcnNvblNlcnZpY2UiLCJnZXRQZXJzb25zIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIlBlcnNvbnNMaXN0IiwicGVyc29uU3J2YyIsInJvdXRlciIsInBlcnNvbmRldGFpbHMiLCJ1cGRhdGUiLCJ1c2Vyc0xpc3RSZWYiLCJwZXJzb25EZXRhaWxzUmVmIiwiY29uc3RydWN0b3IiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q3VycmVudFJvdXRlIiwibW91bnQiLCJkYXRhIiwicmVuZGVyVXNlcnMiLCJhbGVydE5hbWUiLCJ1c2VyIiwic2V0UHJvcHMiLCJub2RlcyIsIm1hcCIsIkpTT04iLCJzdHJpbmdpZnkiLCJub2RlIiwic3R5bGVzIl0sInNvdXJjZVJvb3QiOiIifQ==