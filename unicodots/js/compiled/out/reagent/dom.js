// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__41071__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__41071__auto__)){
return or__41071__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_42769 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_42769){
return (function (){
var _STAR_always_update_STAR_42770 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_42770;
}});})(_STAR_always_update_STAR_42769))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_42769;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args42771 = [];
var len__42146__auto___42774 = arguments.length;
var i__42147__auto___42775 = (0);
while(true){
if((i__42147__auto___42775 < len__42146__auto___42774)){
args42771.push((arguments[i__42147__auto___42775]));

var G__42776 = (i__42147__auto___42775 + (1));
i__42147__auto___42775 = G__42776;
continue;
} else {
}
break;
}

var G__42773 = args42771.length;
switch (G__42773) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42771.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__42782_42786 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__42783_42787 = null;
var count__42784_42788 = (0);
var i__42785_42789 = (0);
while(true){
if((i__42785_42789 < count__42784_42788)){
var v_42790 = cljs.core._nth.call(null,chunk__42783_42787,i__42785_42789);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_42790);

var G__42791 = seq__42782_42786;
var G__42792 = chunk__42783_42787;
var G__42793 = count__42784_42788;
var G__42794 = (i__42785_42789 + (1));
seq__42782_42786 = G__42791;
chunk__42783_42787 = G__42792;
count__42784_42788 = G__42793;
i__42785_42789 = G__42794;
continue;
} else {
var temp__4657__auto___42795 = cljs.core.seq.call(null,seq__42782_42786);
if(temp__4657__auto___42795){
var seq__42782_42796__$1 = temp__4657__auto___42795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42782_42796__$1)){
var c__41882__auto___42797 = cljs.core.chunk_first.call(null,seq__42782_42796__$1);
var G__42798 = cljs.core.chunk_rest.call(null,seq__42782_42796__$1);
var G__42799 = c__41882__auto___42797;
var G__42800 = cljs.core.count.call(null,c__41882__auto___42797);
var G__42801 = (0);
seq__42782_42786 = G__42798;
chunk__42783_42787 = G__42799;
count__42784_42788 = G__42800;
i__42785_42789 = G__42801;
continue;
} else {
var v_42802 = cljs.core.first.call(null,seq__42782_42796__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_42802);

var G__42803 = cljs.core.next.call(null,seq__42782_42796__$1);
var G__42804 = null;
var G__42805 = (0);
var G__42806 = (0);
seq__42782_42786 = G__42803;
chunk__42783_42787 = G__42804;
count__42784_42788 = G__42805;
i__42785_42789 = G__42806;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1502937004427