"use strict";(self["webpackChunkmvp_auth_vue_ts"]=self["webpackChunkmvp_auth_vue_ts"]||[]).push([[462],{8462:function(e,l,t){t.r(l),t.d(l,{default:function(){return f}});var a=t(3396),r=t(7139),i=t(4870),n=t(9242),d=t(7795),o=t(6252);const s={class:"font-retro-gaming"},u=(0,a._)("h1",null,"Active Competitions",-1),b={key:0},p={key:1},y={key:2},_={style:{border:"1px solid black"}},m=(0,a._)("thead",null,[(0,a._)("tr",{style:{border:"1px solid black"}},[(0,a._)("td",{style:{border:"1px solid black"}},"Id"),(0,a._)("td",{style:{border:"1px solid black"}},"Game"),(0,a._)("td",{style:{border:"1px solid black"}},"Entry Fee"),(0,a._)("td",{style:{border:"1px solid black"}},"Prizes"),(0,a._)("td",{style:{border:"1px solid black"}},"Start Time"),(0,a._)("td",{style:{border:"1px solid black"}},"End Time")])],-1),k={style:{border:"1px solid black"}},c=(0,a._)("td",{style:{border:"1px solid black"}},"Kade Runner",-1),v={style:{border:"1px solid black"}},w={style:{border:"1px solid black"}},x={style:{border:"1px solid black"}},g={style:{border:"1px solid black"}},T=(0,a._)("br",null,null,-1),z={key:3},h=(0,a._)("h1",null,"Create Competition",-1),C=(0,a._)("button",null,"Create",-1);var U={__name:"Leaderboard",setup(e){const l=(0,o.t)(),{axiosClient:t,getProfile:U,getPlayableCompetitions:D,createCompetition:f}=(0,d.Z)(),F=(0,i.iH)(!1),S=(0,i.iH)([]),E=(0,i.iH)(null);return E.value={gameId:1,entryFee:1,prizes:[1,2,3],startTime:Date.now(),endTime:Date.now()+12e5},(async()=>{S.value=await D(),F.value=!0})(),(e,t)=>((0,a.wg)(),(0,a.iD)("div",s,[u,0==F.value?((0,a.wg)(),(0,a.iD)("div",b,"Loading...")):(0,a.kq)("",!0),0==S.value.length?((0,a.wg)(),(0,a.iD)("div",p," No active competitions. Check back later! ")):((0,a.wg)(),(0,a.iD)("div",y,[(0,a._)("table",_,[m,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(S.value,((e,l)=>((0,a.wg)(),(0,a.iD)("tr",{key:l,style:{border:"1px solid black"}},[(0,a._)("td",k,(0,r.zw)(e.id),1),c,(0,a._)("td",v,(0,r.zw)(e.entryFee),1),(0,a._)("td",w,(0,r.zw)(e.prizes),1),(0,a._)("td",x,(0,r.zw)(e.startTime),1),(0,a._)("td",g,(0,r.zw)(e.endTime),1)])))),128))])])),T,(0,i.SU)(l).isAdmin()?((0,a.wg)(),(0,a.iD)("div",z,[(0,a._)("form",{onSubmit:t[4]||(t[4]=(0,n.iM)((e=>(0,i.SU)(f)(E.value)),["prevent"]))},[h,(0,a._)("label",null,[(0,a.Uk)("Entry Fee "),(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>E.value.entryFee=e),type:"number"},null,512),[[n.nr,E.value.entryFee]])]),(0,a._)("label",null,[(0,a.Uk)("Prizes "),(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>E.value.prizes=e),type:"text"},null,512),[[n.nr,E.value.prizes]])]),(0,a._)("label",null,[(0,a.Uk)("Start Time "),(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>E.value.startTime=e),type:"number"},null,512),[[n.nr,E.value.startTime]])]),(0,a._)("label",null,[(0,a.Uk)("End Time "),(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>E.value.endTime=e),type:"number"},null,512),[[n.nr,E.value.endTime]])]),C],32)])):(0,a.kq)("",!0)]))}};const D=U;var f=D}}]);
//# sourceMappingURL=462.321ace2e.js.map