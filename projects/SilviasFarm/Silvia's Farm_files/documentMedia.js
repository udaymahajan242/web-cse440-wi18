define("documentMedia/skins/skins.json",[],function(){"use strict";var t={};return t["skins.viewer.documentmedia.DocumentMediaSkin"]={react:[["a","link",[],{},["div","img",[],{}],["span","label",[],{}]]],exports:{img:{skin:"skins.core.ImageNewSkin"}},params:{fnt:"FONT",txt:"TEXT_COLOR",txth:"TEXT_COLOR",brw:"SIZE",contentPaddingLeft:"SIZE",contentPaddingRight:"SIZE",contentPaddingTop:"SIZE"},paramsDefaults:{fnt:"font_8",txt:"color_15",txth:"color_13",brw:"5px",contentPaddingLeft:["brw"],contentPaddingRight:["brw"],contentPaddingTop:["brw"]},css:{"%":"text-align:center;","%link":"cursor:pointer !important;position:absolute;top:0;right:0;bottom:0;left:0;","%img":"margin:0 auto;overflow:hidden;text-align:left;","%label":"[fnt]  color:[txt];white-space:nowrap;-webkit-transition:color .5s ease 0s;transition:color .5s ease 0s;display:inline-block;","%label%_hidden":"display:none;","%:hover %label":"color:[txth];"}},t}),define("documentMedia",["lodash","santaProps","react-dom-factories","core","utils","image","skins","documentMedia/skins/skins.json"],function(t,e,n,i,o,a,s,r){"use strict";var d=i.compMixins,p=o.linkRenderer,l={displayName:"DocumentMedia",mixins:[d.skinBasedComp,d.skinInfo,d.createChildComponentMixin],propTypes:t.assign({compData:e.Types.Component.compData.isRequired,compProp:e.Types.Component.compProp.isRequired,style:e.Types.Component.style.isRequired,linkRenderInfo:e.Types.Link.linkRenderInfo.isRequired,rootNavigationInfo:e.Types.Component.rootNavigationInfo.isRequired},e.santaTypesUtils.getSantaTypesByDefinition(a)),statics:{useSantaTypes:!0},getSkinProperties:function(){var e=this.props.compProp,i=this.props.compData;i.alt=function(e,n){return e.showTitle?n.title:t.get(n.link,"name","")}(e,i);var o=i.link?p.renderLink(i.link,this.props.linkRenderInfo,this.props.rootNavigationInfo):{},a=this.getParams(["contentPaddingLeft","contentPaddingRight","contentPaddingTop"]),s={title:i.title};return s["data-content-padding-left"]=parseInt(a.contentPaddingLeft.value,10),s["data-content-padding-right"]=parseInt(a.contentPaddingRight.value,10),s["data-content-padding-top"]=parseInt(a.contentPaddingTop.value,10),s["data-content-image-height"]=parseInt(this.props.style.height,10),{"":s,img:this.createChildComponent(i,"core.components.Image","img",{displayName:"Image",id:this.props.id+"img",ref:"img",imageData:i,containerWidth:this.props.style.width,containerHeight:this.props.style.height,displayMode:"full","aria-hidden":!0}),link:t.assign(o,{target:"_blank"}),label:{parentConst:n.span,children:i.title,className:this.classSet({hidden:!e.showTitle||t.isEmpty(i.title)})}}}};return i.compRegistrar.register("wysiwyg.viewer.components.documentmedia.DocumentMedia",l,!0),s.skinsMap.addBatch(r),l});
//# sourceMappingURL=documentMedia.min.js.map