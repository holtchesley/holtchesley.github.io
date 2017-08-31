// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__42303__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__42303 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42304__i = 0, G__42304__a = new Array(arguments.length -  0);
while (G__42304__i < G__42304__a.length) {G__42304__a[G__42304__i] = arguments[G__42304__i + 0]; ++G__42304__i;}
  args = new cljs.core.IndexedSeq(G__42304__a,0);
} 
return G__42303__delegate.call(this,args);};
G__42303.cljs$lang$maxFixedArity = 0;
G__42303.cljs$lang$applyTo = (function (arglist__42305){
var args = cljs.core.seq(arglist__42305);
return G__42303__delegate(args);
});
G__42303.cljs$core$IFn$_invoke$arity$variadic = G__42303__delegate;
return G__42303;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__42306__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__42306 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42307__i = 0, G__42307__a = new Array(arguments.length -  0);
while (G__42307__i < G__42307__a.length) {G__42307__a[G__42307__i] = arguments[G__42307__i + 0]; ++G__42307__i;}
  args = new cljs.core.IndexedSeq(G__42307__a,0);
} 
return G__42306__delegate.call(this,args);};
G__42306.cljs$lang$maxFixedArity = 0;
G__42306.cljs$lang$applyTo = (function (arglist__42308){
var args = cljs.core.seq(arglist__42308);
return G__42306__delegate(args);
});
G__42306.cljs$core$IFn$_invoke$arity$variadic = G__42306__delegate;
return G__42306;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1502937002696