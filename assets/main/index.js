System.register("chunks:///_virtual/BaseAutoReleaseRef.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameManager.ts"],(function(e){var s,t,a,n,o,r,u;return{setters:[function(e){s=e.inheritsLoose},function(e){t=e.cclegacy,a=e._decorator,n=e.log,o=e.assetManager,r=e.Component},function(e){u=e.gameManager}],execute:function(){var f;t._RF.push({},"5a4985Heg5Po5o0ZN1VtLt5","BaseAutoReleaseRef",void 0);var i=a.ccclass;a.property,e("BaseAutoReleaseRef",i("BaseAutoReleaseRef")(f=function(e){function t(){for(var s,t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return(s=e.call.apply(e,[this].concat(a))||this)._assets=[],s}s(t,e);var a=t.prototype;return a.assetRelease=function(e){var s=u.loader.getByKey(e);n("assetRelease [%s] refCount=%s",s.uuid,s.refCount);var t=o.dependUtil.getDepsRecursively(e);n("assetRelease deps=%s",t.length),s.refCount>t.length&&(s.decRef(),n("assetRelease release refCount=%s",s.refCount))},a.push=function(e){e&&(this._assets.push(e.uuid),e.addRef(),n("add[%s] refCount=%s",e.name,e.refCount))},a.pop=function(e){if(e){var s=this._assets.findIndex((function(s){return s==e.uuid}));s>-1&&this._assets.splice(s,1),e.decRef()}},a.onDestroy=function(){this._assets.forEach((function(e){var s=u.loader.getByKey(e);s&&s.refCount>0&&(s.decRef(),n("release[%s] refCount=%s",s.name,s.refCount))})),this._assets=[]},t}(r))||f);t._RF.pop()}}}));

System.register("chunks:///_virtual/BuyGoldView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIBaseComponent.ts"],(function(t){var n,o,i,e,r;return{setters:[function(t){n=t.inheritsLoose},function(t){o=t.cclegacy,i=t._decorator,e=t.find},function(t){r=t.UIBaseComponent}],execute:function(){var s;o._RF.push({},"bb840gFD3BBtr7f37bVZyrj","BuyGoldView",void 0);var u=i.ccclass;i.property,t("BuyGoldView",u("BuyGoldView")(s=function(t){function o(){return t.apply(this,arguments)||this}return n(o,t),o.prototype.init=function(){var t=this;this.bindButton(e("root/btnClose",this.node),(function(){t.onClose()})),this.bindButton(e("root/btnCancel",this.node),(function(){t.onClose()})),this.bindButton(e("root/btnConfirm",this.node),(function(){}))},o}(r))||s);o._RF.pop()}}}));

System.register("chunks:///_virtual/Const.ts",["cc"],(function(e){var a;return{setters:[function(e){a=e.cclegacy}],execute:function(){var r,l;e("Const",void 0),a._RF.push({},"2881efGjwhLNLt62Y+PZrKv","Const",void 0),(l=r||(r=e("Const",{}))).ViewPrefabs={LoginLayer:"all|prefab/login/LoginLayer",FullLayer:"all|prefab/FullLayer",GameLayer:"all|prefab/game/GameLayer",HeroLayer:"all|prefab/hero/HeroLayer",GachaLayer:"all|prefab/gacha/GachaLayer",RefinLayer:"all|prefab/refin/RefinLayer",SettingView:"all|prefab/setting/SettingView",BuyGoldView:"all|prefab/buy/BuyGoldView",HeroProLayer:"all|prefab/heroPro/HeroProLayer"},l.DirPath={Json:"bundle1|json/",Icon:"bundle1|icon/"},l.BundlePath={Default:"resources|",all:"all|"},a._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/FullLayer.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameManager.ts","./UIBaseComponent.ts","./Const.ts","./ViewPopStyle.ts"],(function(e){var o,t,n,r,i,s,a,l,u,c,g;return{setters:[function(e){o=e.inheritsLoose,t=e.createClass},function(e){n=e.cclegacy,r=e._decorator,i=e.find,s=e.Label,a=e.ToggleContainer},function(e){l=e.gameManager},function(e){u=e.UIBaseComponent},function(e){c=e.Const},function(e){g=e.ViewPopStyle}],execute:function(){var f;n._RF.push({},"43dc1bS7rtIf5sOGWMreX26","FullLayer",void 0);var h=r.ccclass;r.property,e("FullLayer",h("FullLayer")(f=function(e){function n(){for(var o,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(o=e.call.apply(e,[this].concat(n))||this).currNode=void 0,o}o(n,e);var r=n.prototype;return r.init=function(){this.bindButton(i("root/top/setting",this.node),(function(){l.gui.open(c.ViewPrefabs.SettingView,g.elasticInOut)})),this.bindButton(i("root/top/jia",this.node),(function(){l.gui.open(c.ViewPrefabs.BuyGoldView,g.elasticInOut)})),this.toggles.notifyToggleCheck(this.toggles.toggleItems[0],!0)},r.onToggleGroup=function(e){var o;switch(e.target.name){case"Toggle1":o=c.ViewPrefabs.GameLayer;break;case"Toggle2":o=c.ViewPrefabs.HeroLayer;break;case"Toggle3":o=c.ViewPrefabs.GachaLayer;break;case"Toggle4":o=c.ViewPrefabs.RefinLayer}o&&l.gui.open(o,null,this.onLoadCompleteEvent.bind(this),this.showNode)},r.onLoadCompleteEvent=function(e){if(this.currNode){var o=this.currNode.getComponent(this.currNode.name);null!=o&&o.onClose&&o.onClose(),this.currNode=null}this.currNode=e},t(n,[{key:"showNode",get:function(){return i("root/showNode",this.node)}},{key:"labGold",get:function(){return i("root/top/gold/Label",this.node).getComponent(s)}},{key:"toggles",get:function(){return i("root/bottom/ToggleGroup",this.node).getComponent(a)}}]),n}(u))||f);n._RF.pop()}}}));

System.register("chunks:///_virtual/GachaLayer.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIBaseComponent.ts"],(function(t){var e,n,i,r,a,o,c,l;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){a=t.cclegacy,o=t._decorator,c=t.Node},function(t){l=t.UIBaseComponent}],execute:function(){var u,s,p,b,h,f,y;a._RF.push({},"bae767t29hIW7qAQfDlmSeK","GachaLayer",void 0);var d=o.ccclass,g=o.property;t("GachaLayer",(u=d("GachaLayer"),s=g(c),p=g(c),u((f=e((h=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a))||this,i(e,"btn1",f,r(e)),i(e,"btn2",y,r(e)),e}return n(e,t),e.prototype.init=function(){this.bindButton(this.btn1,(function(){})),this.bindButton(this.btn2,(function(){}))},e}(l)).prototype,"btn1",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=e(h.prototype,"btn2",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=h))||b));a._RF.pop()}}}));

System.register("chunks:///_virtual/GameLayer.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIBaseComponent.ts"],(function(t){var e,n,o,i,r,a,c,s;return{setters:[function(t){e=t.inheritsLoose,n=t.createClass},function(t){o=t.cclegacy,i=t._decorator,r=t.find,a=t.Label,c=t.instantiate},function(t){s=t.UIBaseComponent}],execute:function(){var h;o._RF.push({},"700b3KkI8pHSp3092PrxD69","GameLayer",void 0);var u=i.ccclass;i.property,t("GameLayer",u("GameLayer")(h=function(t){function o(){for(var e,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))||this)._hp=void 0,e._maxHp=void 0,e}return e(o,t),o.prototype.init=function(){this.bindButton(r("btnGameStart",this.gameStartNode),(function(){}))},n(o,[{key:"nodeLife",get:function(){return r("root/top/life",this.node)}},{key:"labTime",get:function(){return r("root/top/timer/Label",this.node).getComponent(a)}},{key:"labShendu",get:function(){return r("root/top/shendu/Label",this.node).getComponent(a)}},{key:"labMetal1",get:function(){return r("root/top/left/metal1/Label",this.node).getComponent(a)}},{key:"labMetal2",get:function(){return r("root/top/left/metal2/Label",this.node).getComponent(a)}},{key:"labMetal3",get:function(){return r("root/top/left/metal3/Label",this.node).getComponent(a)}},{key:"gameStartNode",get:function(){return r("root/bottom/gameStartNode",this.node)}},{key:"hp",get:function(){return this._hp},set:function(t){var e=this;this._hp=t,this.nodeLife.children.forEach((function(t,n){t.active&&(r("xin",t).active=e._hp>=n+1)}))}},{key:"maxHp",get:function(){return this._maxHp},set:function(t){this._maxHp=t,this.nodeLife.children.forEach((function(t){t.active=!1}));for(var e=this.nodeLife.children[0],n=0;n<this._maxHp;n++)if(this.nodeLife.children[n])this.nodeLife.children[n].active=!0;else{var o=c(e);o.parent=this.nodeLife,o.name="xin"+n}this.hp=this._maxHp}}]),o}(s))||h);o._RF.pop()}}}));

System.register("chunks:///_virtual/GameMain.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameRoot.ts","./GameManager.ts","./Const.ts"],(function(n){var e,t,o,a,i,r;return{setters:[function(n){e=n.inheritsLoose},function(n){t=n.cclegacy,o=n._decorator},function(n){a=n.GameRoot},function(n){i=n.gameManager},function(n){r=n.Const}],execute:function(){var c;t._RF.push({},"d33d1ZdRHpJ1o0rSePRPAm4","GameMain",void 0);var s=o.ccclass;o.property,n("GameMain",s("GameMain")(c=function(n){function t(){return n.apply(this,arguments)||this}return e(t,n),t.prototype.initGUI=function(){i.gui.open(r.ViewPrefabs.LoginLayer)},t}(a))||c);t._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["cc","./ResLoader.ts","./MsgEventManager.ts"],(function(e){var n,a,t;return{setters:[function(e){n=e.cclegacy},function(e){a=e.ResLoader},function(e){t=e.MsgEventManager}],execute:function(){e("gameManager",void 0),n._RF.push({},"80436qzUJJAaJdj7PPMKn6/","GameManager",void 0);var s=e("GameManager",(function(){this.event=t.instance,this.gui=null,this.loader=a.instance,e("gameManager",this)}));s.instance=new s,n._RF.pop()}}}));

System.register("chunks:///_virtual/GameRoot.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameManager.ts","./LayerManager.ts"],(function(e){var t,o,n,i,r,a,u,s,c,l,p,f,g,d,m;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){r=e.cclegacy,a=e._decorator,u=e.Node,s=e.JsonAsset,c=e.director,l=e.game,p=e.Game,f=e.log,g=e.Component},function(e){d=e.gameManager},function(e){m=e.LayerManager}],execute:function(){var y,h,G,R,E,N,v;r._RF.push({},"5ce659gtXpDtLZ87sGsOXjY","GameRoot",void 0);var _=a.ccclass,b=a.property;e("GameRoot",(y=_("GameRoot"),h=b({type:u,tooltip:"游戏层"}),G=b({type:u,tooltip:"界面层"}),y((N=t((E=function(e){function t(){for(var t,o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,n(t,"game",N,i(t)),n(t,"gui",v,i(t)),t.persistRootNode=null,t}o(t,e);var r=t.prototype;return r.onLoad=function(){var e=this;d.loader.load("config",s,(function(){e.init(),e.run()}))},r.update=function(e){},r.initGUI=function(){},r.run=function(){},r.init=function(){this.persistRootNode=new u("PersistRootNode"),c.addPersistRootNode(this.persistRootNode),d.gui=new m(this.gui),this.initGUI(),l.on(p.EVENT_SHOW,(function(){f("Game.EVENT_SHOW"),c.resume(),l.resume()})),l.on(p.EVENT_HIDE,(function(){f("Game.EVENT_HIDE"),c.pause(),l.pause()}))},t}(g)).prototype,"game",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=t(E.prototype,"gui",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=E))||R));r._RF.pop()}}}));

System.register("chunks:///_virtual/HeroLayer.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameManager.ts","./UIBaseComponent.ts","./Const.ts","./ViewPopStyle.ts"],(function(e){var i,t,n,l,r,a,o,u,p,b,s,c,g;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,l=e.assertThisInitialized},function(e){r=e.cclegacy,a=e._decorator,o=e.Label,u=e.Node,p=e.ProgressBar},function(e){b=e.gameManager},function(e){s=e.UIBaseComponent},function(e){c=e.Const},function(e){g=e.ViewPopStyle}],execute:function(){var f,y,h,m,B,w,v,z,d,L,H,P,q,U,D,I,N,k,C,S,_,A,G,M,R,V,F;r._RF.push({},"68b366nSrtKH6vkRPI70XZ8","HeroLayer",void 0);var j=a.ccclass,x=a.property;e("HeroLayer",(f=j("HeroLayer"),y=x(o),h=x(o),m=x(u),B=x(u),w=x(o),v=x(p),z=x(o),d=x(o),L=x(o),H=x(o),P=x(u),q=x(u),f((I=i((D=function(e){function i(){for(var i,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return i=e.call.apply(e,[this].concat(r))||this,n(i,"labName",I,l(i)),n(i,"labLevel",N,l(i)),n(i,"helpBtn",k,l(i)),n(i,"uplevelBg",C,l(i)),n(i,"lebUplevelUseGold",S,l(i)),n(i,"progress",_,l(i)),n(i,"progressNum",A,l(i)),n(i,"labAtk",G,l(i)),n(i,"labDef",M,l(i)),n(i,"labHp",R,l(i)),n(i,"qianghBtn1",V,l(i)),n(i,"qianghBtn2",F,l(i)),i}return t(i,e),i.prototype.init=function(){this.bindButton(this.helpBtn,(function(){b.gui.open(c.ViewPrefabs.HeroProLayer,g.elasticInOut)})),this.bindButton(this.uplevelBg,(function(){})),this.bindButton(this.qianghBtn1,(function(){})),this.bindButton(this.qianghBtn2,(function(){}))},i}(s)).prototype,"labName",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=i(D.prototype,"labLevel",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=i(D.prototype,"helpBtn",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=i(D.prototype,"uplevelBg",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=i(D.prototype,"lebUplevelUseGold",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=i(D.prototype,"progress",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=i(D.prototype,"progressNum",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),G=i(D.prototype,"labAtk",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),M=i(D.prototype,"labDef",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=i(D.prototype,"labHp",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),V=i(D.prototype,"qianghBtn1",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=i(D.prototype,"qianghBtn2",[q],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),U=D))||U));r._RF.pop()}}}));

System.register("chunks:///_virtual/HeroProLayer.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIBaseComponent.ts"],(function(o){var n,t,r,e,i;return{setters:[function(o){n=o.inheritsLoose},function(o){t=o.cclegacy,r=o._decorator,e=o.find},function(o){i=o.UIBaseComponent}],execute:function(){var s;t._RF.push({},"a4fa7w8kTVOnqgrYoBcKn8w","HeroProLayer",void 0);var c=r.ccclass;r.property,o("HeroProLayer",c("HeroProLayer")(s=function(o){function t(){return o.apply(this,arguments)||this}return n(t,o),t.prototype.init=function(){var o=this;this.bindButton(e("root/btnClose",this.node),(function(){o.onClose()}))},t}(i))||s);t._RF.pop()}}}));

System.register("chunks:///_virtual/LayerManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameManager.ts"],(function(e){var n,t,o,r,a,i,l,u;return{setters:[function(e){n=e.asyncToGenerator,t=e.regeneratorRuntime},function(e){o=e.cclegacy,r=e._decorator,a=e.warn,i=e.Prefab,l=e.instantiate},function(e){u=e.gameManager}],execute:function(){o._RF.push({},"4fda7UdzDZC0YC5FJDSk/YI","LayerManager",void 0);r.ccclass,r.property,e("LayerManager",function(){var e=o.prototype;function o(e){this.root=void 0,this.views=new Map,this.root=e}return e.open=function(e,n,t,o){var r=this;if(this.views.has(e))a("当前界面已存在！！！",e);else{var s,c,d,p;if(t)s="function"==typeof t?{onComplete:t}:t;else null!=(c=n)&&c.onComplete||null!=(d=n)&&d.onAdded||null!=(p=n)&&p.onError?(s=n,n=null):"function"==typeof n&&(s={onComplete:n},n=null);u.loader.load(e,i,(function(t,a){var i,u;if(t){var c;(null==(c=s)?void 0:c.onError)&&s.onError(t)}else{var d=l(a),p=d.getComponent(d.name);(null==p?void 0:p.setData)&&p.setData(n,e),(null==(i=s)?void 0:i.onAdded)&&s.onAdded(d),d.parent=null!=o?o:r.root,r.views.set(e,{node:d,prefabPath:e}),d.setSiblingIndex(null==p?void 0:p.zIndex),(null==(u=s)?void 0:u.onComplete)&&s.onComplete(d)}}))}},e.openAsync=function(){var e=n(t().mark((function e(n,o){var r=this;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){var a={onComplete:function(n){e(n)}};r.open(n,o,a)})));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),e.get=function(e){var n;return null==(n=this.views.get(e))?void 0:n.node},e.remove=function(e){var n=this.get(e);n&&(n.destroy(),this.views.delete(e),u.loader.release(e))},o}());o._RF.pop()}}}));

System.register("chunks:///_virtual/LoginLayer.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameManager.ts","./UIBaseComponent.ts","./Const.ts"],(function(e){var r,o,n,s,a,t,i,l,c,u,p;return{setters:[function(e){r=e.applyDecoratedDescriptor,o=e.inheritsLoose,n=e.initializerDefineProperty,s=e.assertThisInitialized},function(e){a=e.cclegacy,t=e._decorator,i=e.ProgressBar,l=e.Prefab},function(e){c=e.gameManager},function(e){u=e.UIBaseComponent},function(e){p=e.Const}],execute:function(){var g,f,y,L,b;a._RF.push({},"e3444qssXFPNLir0ZA6/C+y","LoginLayer",void 0);var h=t.ccclass,d=t.property;e("LoginLayer",(g=h("LoginLayer"),f=d(i),g((b=r((L=function(e){function r(){for(var r,o=arguments.length,a=new Array(o),t=0;t<o;t++)a[t]=arguments[t];return r=e.call.apply(e,[this].concat(a))||this,n(r,"progressBar",b,s(r)),r}return o(r,e),r.prototype.init=function(){var e=this;this.progressBar.progress=0;var r=[p.ViewPrefabs.FullLayer,p.ViewPrefabs.GameLayer];c.loader.preload(r,l,(function(r,o,n){console.log("加载进度 %s/%s =%s",r,o,n.url),e.progressBar.progress=r/o}),(function(){console.log("加载完成！"),c.gui.open(p.ViewPrefabs.FullLayer,e.onClose.bind(e))}))},r}(u)).prototype,"progressBar",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=L))||y));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./GameMain.ts","./Const.ts","./FullLayer.ts","./BuyGoldView.ts","./GachaLayer.ts","./GameLayer.ts","./HeroProLayer.ts","./HeroLayer.ts","./LoginLayer.ts","./RefinLayer.ts","./SettingView.ts","./Player.ts","./ViewPopStyle.ts","./GameRoot.ts","./GameManager.ts","./LayerManager.ts","./UIBaseComponent.ts","./ResLoader.ts","./BaseAutoReleaseRef.ts","./MsgEventManager.ts","./ToolsGame.ts","./debug-view-runtime-control.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MsgEventManager.ts",["cc"],(function(e){var n,t;return{setters:[function(e){n=e.cclegacy,t=e._decorator}],execute:function(){var a,r;n._RF.push({},"c3aa8FUAiBNTJ0FHmCsMXEe","MsgEventManager",void 0);var s=t.ccclass;t.property,e("MsgEventManager",s("MsgEventManager")(((r=function(){var e=n.prototype;function n(){this.events=new Map}return e.on=function(e,n,t){var a=this.events.get(e);a||(a=this.events.set(e,new Map).get(e)),a.set(t,{handler:n,obj:t})},e.off=function(e,n){var t;null==(t=this.events.get(e))||t.delete(n)},e.offAll=function(e){var n=this;e?this.events.forEach((function(t,a){n.off(a,e)})):this.events=new Map},e.emit=function(e){for(var n,t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];null==(n=this.events.get(e))||n.forEach((function(e){var n;(n=e.handler).call.apply(n,[e.obj].concat(a))}))},n}()).instance=new r,a=r))||a);n._RF.pop()}}}));

System.register("chunks:///_virtual/Player.ts",["cc"],(function(e){var r,t;return{setters:[function(e){r=e.cclegacy,t=e._decorator}],execute:function(){var c,n;e("gamePlayer",void 0),r._RF.push({},"2fe9fpPXcFP2I/isj8I3dmd","Player",void 0);var a=t.ccclass;t.property,e("Player",a("Player")(((n=function(){function r(){e("gamePlayer",this)}return r.prototype.init=function(e){},r}()).instance=new n,c=n))||c);r._RF.pop()}}}));

System.register("chunks:///_virtual/RefinLayer.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIBaseComponent.ts"],(function(e){var t,n,i,r,o,a,c,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,c=e.Node},function(e){l=e.UIBaseComponent}],execute:function(){var s,u,p,f,y;o._RF.push({},"88b33e61MZLf74tv+O2qbv0","RefinLayer",void 0);var h=a.ccclass,v=a.property;e("RefinLayer",(s=h("RefinLayer"),u=v(c),s((y=t((f=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,i(t,"lhBtn",y,r(t)),t}return n(t,e),t.prototype.init=function(){this.bindButton(this.lhBtn,(function(){}))},t}(l)).prototype,"lhBtn",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=f))||p));o._RF.pop()}}}));

System.register("chunks:///_virtual/ResLoader.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,r,n,s,u,a,i,o,c,l,p,f,h,d,v,g,m,A,w;return{setters:[function(t){e=t.asyncToGenerator,r=t.regeneratorRuntime},function(t){n=t.cclegacy,s=t.js,u=t.Asset,a=t.assetManager,i=t.SpriteAtlas,o=t.SpriteFrame,c=t.Prefab,l=t.Skeleton,p=t.Font,f=t.Mesh,h=t.AnimationClip,d=t.AudioClip,v=t.SceneAsset,g=t.TextAsset,m=t.JsonAsset,A=t.ImageAsset,w=t.TiledMapAsset}],execute:function(){t("resLoader",void 0),n._RF.push({},"4f875YSRxRAZ4Bw3WXYrW0w","ResLoader",void 0);var b=t("ResLoader",function(){function n(){t("resLoader",this)}var b=n.prototype;return b.splitUrl=function(t){var e=t.split(n.splitSign),r=e[0],s=e[1];return s||(s=r,r=n.defaultBundleName),{bundleName:r,path:s}},b.load=function(t,e,r,n){var a=e,i=r,o=n;if(!n){var c=s.isChildClassOf(e,u);r?(o=r,i=null,c||(i=e,a=null)):e&&!c&&(o=e,a=null)}if(t instanceof Array){var l,p=[];for(var f in t){var h=this.splitUrl(t[f]),d=h.bundleName,v=h.path;l||(l=d),l==d?p.push(v):console.warn("加载的分包必须相同！！！ bundleName:"+d)}this.loadBundle(l,(function(t,e){t?o&&o(t):e.load(p,a,i,o)}))}else{var g=this.splitUrl(t),m=g.bundleName,A=g.path;this.loadBundle(m,(function(t,e){t?o&&o(t):e.load(A,a,i,o)}))}},b.loadBundle=function(t,e){var r=a.getBundle(t);r?e&&e(null,r):a.loadBundle(t,e)},b.get=function(t,e){var r=this.splitUrl(t),n=r.bundleName,s=r.path;return a.getBundle(n).get(s,e)},b.getByKey=function(t){return a.assets.get(t)},b.release=function(t){var e=this.splitUrl(t),r=e.bundleName,n=e.path,s=a.getBundle(r);if(s){var u=s.get(n);u&&this.releasePrefabtDepsRecursively(u.uuid)}},b.releasePrefabtDepsRecursively=function(t){var e=a.assets.get(t);a.releaseAsset(e)},b.preload=function(t,e,r,n){var a=e,i=r,o=n;if(!n){var c=s.isChildClassOf(e,u);r?(o=r,i=null,c||(i=e,a=null)):e&&!c&&(o=e,a=null)}if(t instanceof Array){var l,p=[];for(var f in t){var h=this.splitUrl(t[f]),d=h.bundleName,v=h.path;l||(l=d),l==d?p.push(v):console.warn("预加载的分包必须相同！！！ bundleName:"+d)}this.loadBundle(l,(function(t,e){t?o&&o(t):e.preload(p,a,i,o)}))}else{var g=this.splitUrl(t),m=g.bundleName,A=g.path;this.loadBundle(m,(function(t,e){t?o&&o(t):e.preload(A,a,i,o)}))}},b.loadDir=function(t,e,r,n){var a=e,i=r,o=n;if(!n){var c=s.isChildClassOf(e,u);r?(o=r,i=null,c||(i=e,a=null)):e&&!c&&(o=e,a=null)}var l=this.splitUrl(t),p=l.bundleName,f=l.path;this.loadBundle(p,(function(t,e){t?o&&o(t,null):e.loadDir(f,a,i,o)}))},b.getAsset=function(){var t=e(r().mark((function t(e,n){var s=this;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,r){s.load(e,n,(function(e,r){e&&console.error(e.message||e),t(r)}))})));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),b.getSpriteAtlas=function(){var t=e(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.getAsset(e,i));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),b.getSpriteFrame=function(){var t=e(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.getAsset(e+"/spriteFrame",o));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),b.getPrefab=function(){var t=e(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.getAsset(e,c));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),b.getSkeleton=function(){var t=e(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.getAsset(e,l));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),b.getFont=function(){var t=e(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.getAsset(e,p));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),b.getMesh=function(){var t=e(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.getAsset(e,f));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),b.getAnimationClip=function(){var t=e(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.getAsset(e,h));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),b.getAudioClip=function(){var t=e(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.getAsset(e,d));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),b.getSceneAsset=function(){var t=e(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.getAsset(e,v));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),b.getTextAsset=function(){var t=e(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.getAsset(e,g));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),b.getJsonAsset=function(){var t=e(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.getAsset(e,m));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),b.getImageAsset=function(){var t=e(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.getAsset(e,A));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),b.getTiledMapAsset=function(){var t=e(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.getAsset(e,w));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),n}());b.instance=new b,b.defaultBundleName="resources",b.splitSign="|",n._RF.pop()}}}));

System.register("chunks:///_virtual/SettingView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIBaseComponent.ts"],(function(t){var n,i,e,s,o,u,c,r,a;return{setters:[function(t){n=t.applyDecoratedDescriptor,i=t.inheritsLoose,e=t.initializerDefineProperty,s=t.assertThisInitialized},function(t){o=t.cclegacy,u=t._decorator,c=t.Node,r=t.find},function(t){a=t.UIBaseComponent}],execute:function(){var l,d,p,f,h,B,b;o._RF.push({},"0b99eRZF+xE/K1TDm+uEkxz","SettingView",void 0);var v=u.ccclass,m=u.property;t("SettingView",(l=v("SettingView"),d=m(c),p=m(c),l((B=n((h=function(t){function n(){for(var n,i=arguments.length,o=new Array(i),u=0;u<i;u++)o[u]=arguments[u];return n=t.call.apply(t,[this].concat(o))||this,e(n,"musicBtn",B,s(n)),e(n,"soundBtn",b,s(n)),n}i(n,t);var o=n.prototype;return o.init=function(){var t=this;this.bindButton(r("root/btnClose",this.node),(function(){t.onClose()})),this.bindButton(this.musicBtn,(function(){t.setMusic(!t.isMusic())})),this.bindButton(this.soundBtn,(function(){t.setSound(!t.isSound())})),this.setMusic(!1),this.setSound(!1)},o.isMusic=function(){return r("select",this.musicBtn).active},o.setMusic=function(t){r("select",this.musicBtn).active=t},o.isSound=function(){return r("select",this.soundBtn).active},o.setSound=function(t){r("select",this.soundBtn).active=t},n}(a)).prototype,"musicBtn",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=n(h.prototype,"soundBtn",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=h))||f));o._RF.pop()}}}));

System.register("chunks:///_virtual/ToolsGame.ts",["cc","./GameManager.ts","./BaseAutoReleaseRef.ts"],(function(e){var n,r,t,o,a,s,i,p,u,m,c;return{setters:[function(e){n=e.cclegacy,r=e._decorator,t=e.Node,o=e.Layers,a=e.UITransform,s=e.Sprite,i=e.warn,p=e.SpriteFrame,u=e.error},function(e){m=e.gameManager},function(e){c=e.BaseAutoReleaseRef}],execute:function(){n._RF.push({},"99892TJGEpGDJATem4Jzp3V","ToolsGame",void 0);r.ccclass,r.property,e("ToolsGame",function(){function e(){}return e.newNode=function(e,n){var r=new t(n);return r.layer=o.Enum.UI_2D,r.addComponent(a),r.parent=null!=e?e:null,r},e.newSprite=function(n,r,t){var o=e.newNode(r,t);o.addComponent(c);var a=o.addComponent(s);return e.setSpriteFrame(o,n),a},e.setSpriteFrame=function(e,n){var r;if(e instanceof t){if(!(r=e.getComponent(s)))return void i("setSpriteFrame 对象没有精灵脚本！！！")}else r=e;m.loader.load(n+"/spriteFrame",p,(function(e,n){if(e)u(e.message||e);else{var t=r.getComponent(c)||r.addComponent(c);t.pop(r.spriteFrame),r.spriteFrame=n,t.push(r.spriteFrame)}}))},e}());n._RF.pop()}}}));

System.register("chunks:///_virtual/UIBaseComponent.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameManager.ts"],(function(t){var n,e,o,i,a,r,s,c,p,u,f,l;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,o=t.initializerDefineProperty,i=t.assertThisInitialized,a=t.createClass},function(t){r=t.cclegacy,s=t._decorator,c=t.Node,p=t.Button,u=t.find,f=t.Component},function(t){l=t.gameManager}],execute:function(){var d,h,m,g,v;r._RF.push({},"3bffb7ZIOJOw6miI5nhCzwI","UIBaseComponent",void 0);var y=s.ccclass,C=s.property;t("UIBaseComponent",(d=y("UIBaseComponent"),h=C({tooltip:"视图层级"}),d((v=n((g=function(t){function n(){for(var n,e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return n=t.call.apply(t,[this].concat(a))||this,o(n,"zIndex",v,i(n)),n.prefabPath=void 0,n._layerData=void 0,n}e(n,t);var r=n.prototype;return r.onLoad=function(){},r.start=function(){this.addMask(),this.init(this._layerData)},r.setData=function(t,n){this._layerData=t,this.prefabPath=n},r.init=function(t){},r.addMask=function(){var t=this;this.maskBg&&this.maskBg.on(c.EventType.TOUCH_END,(function(n){n.propagationStopped=!0,t.onClose()}))},r.bindButton=function(t,n,e){void 0===e&&(e=!1);var o=t.getComponent(p);o||(o=t.addComponent(p)),e?o.transition=p.Transition.NONE:(o.transition=p.Transition.SCALE,o.zoomScale=1.05),t.on(c.EventType.TOUCH_END,n)},r.onDestroy=function(){l.event.offAll(this)},r.onClose=function(){l.gui.remove(this.prefabPath)},a(n,[{key:"maskBg",get:function(){return u("bg",this.node)}}]),n}(f)).prototype,"zIndex",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 100}}),m=g))||m));r._RF.pop()}}}));

System.register("chunks:///_virtual/ViewPopStyle.ts",["cc"],(function(t){var e,c,n,o,i;return{setters:[function(t){e=t.cclegacy,c=t._decorator,n=t.find,o=t.tween,i=t.v3}],execute:function(){e._RF.push({},"81f8f9jc8pJZL3Fdx794PIS","ViewPopStyle",void 0);c.ccclass,c.property;t("ViewPopStyle",(function(){})).elasticInOut={onAdded:function(t){var e=n("root",t);e&&(e.setScale(0,0,0),o(e).to(.5,{scale:i(1,1,1)},{easing:"elasticInOut"}).start())}},e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});