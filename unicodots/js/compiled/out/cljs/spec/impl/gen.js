// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__41677__auto__,writer__41678__auto__,opt__41679__auto__){
return cljs.core._write.call(null,writer__41678__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50553 = arguments.length;
var i__42147__auto___50554 = (0);
while(true){
if((i__42147__auto___50554 < len__42146__auto___50553)){
args__42153__auto__.push((arguments[i__42147__auto___50554]));

var G__50555 = (i__42147__auto___50554 + (1));
i__42147__auto___50554 = G__50555;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq50552){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50552));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50557 = arguments.length;
var i__42147__auto___50558 = (0);
while(true){
if((i__42147__auto___50558 < len__42146__auto___50557)){
args__42153__auto__.push((arguments[i__42147__auto___50558]));

var G__50559 = (i__42147__auto___50558 + (1));
i__42147__auto___50558 = G__50559;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq50556){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50556));
});

var g_QMARK__50560 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_50561 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__50560){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__50560))
,null));
var mkg_50562 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__50560,g_50561){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__50560,g_50561))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__50560,g_50561,mkg_50562){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__50560).call(null,x);
});})(g_QMARK__50560,g_50561,mkg_50562))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__50560,g_50561,mkg_50562){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_50562).call(null,gfn);
});})(g_QMARK__50560,g_50561,mkg_50562))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__50560,g_50561,mkg_50562){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_50561).call(null,generator);
});})(g_QMARK__50560,g_50561,mkg_50562))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__50524__auto___50581 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__50524__auto___50581){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50582 = arguments.length;
var i__42147__auto___50583 = (0);
while(true){
if((i__42147__auto___50583 < len__42146__auto___50582)){
args__42153__auto__.push((arguments[i__42147__auto___50583]));

var G__50584 = (i__42147__auto___50583 + (1));
i__42147__auto___50583 = G__50584;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50524__auto___50581))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50524__auto___50581){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50524__auto___50581),args);
});})(g__50524__auto___50581))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__50524__auto___50581){
return (function (seq50563){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50563));
});})(g__50524__auto___50581))
;


var g__50524__auto___50585 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__50524__auto___50585){
return (function cljs$spec$impl$gen$list(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50586 = arguments.length;
var i__42147__auto___50587 = (0);
while(true){
if((i__42147__auto___50587 < len__42146__auto___50586)){
args__42153__auto__.push((arguments[i__42147__auto___50587]));

var G__50588 = (i__42147__auto___50587 + (1));
i__42147__auto___50587 = G__50588;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50524__auto___50585))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50524__auto___50585){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50524__auto___50585),args);
});})(g__50524__auto___50585))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__50524__auto___50585){
return (function (seq50564){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50564));
});})(g__50524__auto___50585))
;


var g__50524__auto___50589 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__50524__auto___50589){
return (function cljs$spec$impl$gen$map(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50590 = arguments.length;
var i__42147__auto___50591 = (0);
while(true){
if((i__42147__auto___50591 < len__42146__auto___50590)){
args__42153__auto__.push((arguments[i__42147__auto___50591]));

var G__50592 = (i__42147__auto___50591 + (1));
i__42147__auto___50591 = G__50592;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50524__auto___50589))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50524__auto___50589){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50524__auto___50589),args);
});})(g__50524__auto___50589))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__50524__auto___50589){
return (function (seq50565){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50565));
});})(g__50524__auto___50589))
;


var g__50524__auto___50593 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__50524__auto___50593){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50594 = arguments.length;
var i__42147__auto___50595 = (0);
while(true){
if((i__42147__auto___50595 < len__42146__auto___50594)){
args__42153__auto__.push((arguments[i__42147__auto___50595]));

var G__50596 = (i__42147__auto___50595 + (1));
i__42147__auto___50595 = G__50596;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50524__auto___50593))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50524__auto___50593){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50524__auto___50593),args);
});})(g__50524__auto___50593))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__50524__auto___50593){
return (function (seq50566){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50566));
});})(g__50524__auto___50593))
;


var g__50524__auto___50597 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__50524__auto___50597){
return (function cljs$spec$impl$gen$set(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50598 = arguments.length;
var i__42147__auto___50599 = (0);
while(true){
if((i__42147__auto___50599 < len__42146__auto___50598)){
args__42153__auto__.push((arguments[i__42147__auto___50599]));

var G__50600 = (i__42147__auto___50599 + (1));
i__42147__auto___50599 = G__50600;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50524__auto___50597))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50524__auto___50597){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50524__auto___50597),args);
});})(g__50524__auto___50597))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__50524__auto___50597){
return (function (seq50567){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50567));
});})(g__50524__auto___50597))
;


var g__50524__auto___50601 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__50524__auto___50601){
return (function cljs$spec$impl$gen$vector(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50602 = arguments.length;
var i__42147__auto___50603 = (0);
while(true){
if((i__42147__auto___50603 < len__42146__auto___50602)){
args__42153__auto__.push((arguments[i__42147__auto___50603]));

var G__50604 = (i__42147__auto___50603 + (1));
i__42147__auto___50603 = G__50604;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50524__auto___50601))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50524__auto___50601){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50524__auto___50601),args);
});})(g__50524__auto___50601))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__50524__auto___50601){
return (function (seq50568){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50568));
});})(g__50524__auto___50601))
;


var g__50524__auto___50605 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__50524__auto___50605){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50606 = arguments.length;
var i__42147__auto___50607 = (0);
while(true){
if((i__42147__auto___50607 < len__42146__auto___50606)){
args__42153__auto__.push((arguments[i__42147__auto___50607]));

var G__50608 = (i__42147__auto___50607 + (1));
i__42147__auto___50607 = G__50608;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50524__auto___50605))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50524__auto___50605){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50524__auto___50605),args);
});})(g__50524__auto___50605))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__50524__auto___50605){
return (function (seq50569){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50569));
});})(g__50524__auto___50605))
;


var g__50524__auto___50609 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__50524__auto___50609){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50610 = arguments.length;
var i__42147__auto___50611 = (0);
while(true){
if((i__42147__auto___50611 < len__42146__auto___50610)){
args__42153__auto__.push((arguments[i__42147__auto___50611]));

var G__50612 = (i__42147__auto___50611 + (1));
i__42147__auto___50611 = G__50612;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50524__auto___50609))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50524__auto___50609){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50524__auto___50609),args);
});})(g__50524__auto___50609))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__50524__auto___50609){
return (function (seq50570){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50570));
});})(g__50524__auto___50609))
;


var g__50524__auto___50613 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__50524__auto___50613){
return (function cljs$spec$impl$gen$elements(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50614 = arguments.length;
var i__42147__auto___50615 = (0);
while(true){
if((i__42147__auto___50615 < len__42146__auto___50614)){
args__42153__auto__.push((arguments[i__42147__auto___50615]));

var G__50616 = (i__42147__auto___50615 + (1));
i__42147__auto___50615 = G__50616;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50524__auto___50613))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50524__auto___50613){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50524__auto___50613),args);
});})(g__50524__auto___50613))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__50524__auto___50613){
return (function (seq50571){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50571));
});})(g__50524__auto___50613))
;


var g__50524__auto___50617 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__50524__auto___50617){
return (function cljs$spec$impl$gen$bind(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50618 = arguments.length;
var i__42147__auto___50619 = (0);
while(true){
if((i__42147__auto___50619 < len__42146__auto___50618)){
args__42153__auto__.push((arguments[i__42147__auto___50619]));

var G__50620 = (i__42147__auto___50619 + (1));
i__42147__auto___50619 = G__50620;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50524__auto___50617))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50524__auto___50617){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50524__auto___50617),args);
});})(g__50524__auto___50617))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__50524__auto___50617){
return (function (seq50572){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50572));
});})(g__50524__auto___50617))
;


var g__50524__auto___50621 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__50524__auto___50621){
return (function cljs$spec$impl$gen$choose(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50622 = arguments.length;
var i__42147__auto___50623 = (0);
while(true){
if((i__42147__auto___50623 < len__42146__auto___50622)){
args__42153__auto__.push((arguments[i__42147__auto___50623]));

var G__50624 = (i__42147__auto___50623 + (1));
i__42147__auto___50623 = G__50624;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50524__auto___50621))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50524__auto___50621){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50524__auto___50621),args);
});})(g__50524__auto___50621))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__50524__auto___50621){
return (function (seq50573){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50573));
});})(g__50524__auto___50621))
;


var g__50524__auto___50625 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__50524__auto___50625){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50626 = arguments.length;
var i__42147__auto___50627 = (0);
while(true){
if((i__42147__auto___50627 < len__42146__auto___50626)){
args__42153__auto__.push((arguments[i__42147__auto___50627]));

var G__50628 = (i__42147__auto___50627 + (1));
i__42147__auto___50627 = G__50628;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50524__auto___50625))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50524__auto___50625){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50524__auto___50625),args);
});})(g__50524__auto___50625))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__50524__auto___50625){
return (function (seq50574){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50574));
});})(g__50524__auto___50625))
;


var g__50524__auto___50629 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__50524__auto___50629){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50630 = arguments.length;
var i__42147__auto___50631 = (0);
while(true){
if((i__42147__auto___50631 < len__42146__auto___50630)){
args__42153__auto__.push((arguments[i__42147__auto___50631]));

var G__50632 = (i__42147__auto___50631 + (1));
i__42147__auto___50631 = G__50632;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50524__auto___50629))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50524__auto___50629){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50524__auto___50629),args);
});})(g__50524__auto___50629))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__50524__auto___50629){
return (function (seq50575){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50575));
});})(g__50524__auto___50629))
;


var g__50524__auto___50633 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__50524__auto___50633){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50634 = arguments.length;
var i__42147__auto___50635 = (0);
while(true){
if((i__42147__auto___50635 < len__42146__auto___50634)){
args__42153__auto__.push((arguments[i__42147__auto___50635]));

var G__50636 = (i__42147__auto___50635 + (1));
i__42147__auto___50635 = G__50636;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50524__auto___50633))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50524__auto___50633){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50524__auto___50633),args);
});})(g__50524__auto___50633))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__50524__auto___50633){
return (function (seq50576){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50576));
});})(g__50524__auto___50633))
;


var g__50524__auto___50637 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__50524__auto___50637){
return (function cljs$spec$impl$gen$sample(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50638 = arguments.length;
var i__42147__auto___50639 = (0);
while(true){
if((i__42147__auto___50639 < len__42146__auto___50638)){
args__42153__auto__.push((arguments[i__42147__auto___50639]));

var G__50640 = (i__42147__auto___50639 + (1));
i__42147__auto___50639 = G__50640;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50524__auto___50637))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50524__auto___50637){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50524__auto___50637),args);
});})(g__50524__auto___50637))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__50524__auto___50637){
return (function (seq50577){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50577));
});})(g__50524__auto___50637))
;


var g__50524__auto___50641 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__50524__auto___50641){
return (function cljs$spec$impl$gen$return(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50642 = arguments.length;
var i__42147__auto___50643 = (0);
while(true){
if((i__42147__auto___50643 < len__42146__auto___50642)){
args__42153__auto__.push((arguments[i__42147__auto___50643]));

var G__50644 = (i__42147__auto___50643 + (1));
i__42147__auto___50643 = G__50644;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50524__auto___50641))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50524__auto___50641){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50524__auto___50641),args);
});})(g__50524__auto___50641))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__50524__auto___50641){
return (function (seq50578){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50578));
});})(g__50524__auto___50641))
;


var g__50524__auto___50645 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__50524__auto___50645){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50646 = arguments.length;
var i__42147__auto___50647 = (0);
while(true){
if((i__42147__auto___50647 < len__42146__auto___50646)){
args__42153__auto__.push((arguments[i__42147__auto___50647]));

var G__50648 = (i__42147__auto___50647 + (1));
i__42147__auto___50647 = G__50648;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50524__auto___50645))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50524__auto___50645){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50524__auto___50645),args);
});})(g__50524__auto___50645))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__50524__auto___50645){
return (function (seq50579){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50579));
});})(g__50524__auto___50645))
;


var g__50524__auto___50649 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__50524__auto___50649){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50650 = arguments.length;
var i__42147__auto___50651 = (0);
while(true){
if((i__42147__auto___50651 < len__42146__auto___50650)){
args__42153__auto__.push((arguments[i__42147__auto___50651]));

var G__50652 = (i__42147__auto___50651 + (1));
i__42147__auto___50651 = G__50652;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50524__auto___50649))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50524__auto___50649){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__50524__auto___50649),args);
});})(g__50524__auto___50649))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__50524__auto___50649){
return (function (seq50580){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50580));
});})(g__50524__auto___50649))
;

var g__50537__auto___50674 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__50537__auto___50674){
return (function cljs$spec$impl$gen$any(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50675 = arguments.length;
var i__42147__auto___50676 = (0);
while(true){
if((i__42147__auto___50676 < len__42146__auto___50675)){
args__42153__auto__.push((arguments[i__42147__auto___50676]));

var G__50677 = (i__42147__auto___50676 + (1));
i__42147__auto___50676 = G__50677;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50537__auto___50674))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50537__auto___50674){
return (function (args){
return cljs.core.deref.call(null,g__50537__auto___50674);
});})(g__50537__auto___50674))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__50537__auto___50674){
return (function (seq50653){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50653));
});})(g__50537__auto___50674))
;


var g__50537__auto___50678 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__50537__auto___50678){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50679 = arguments.length;
var i__42147__auto___50680 = (0);
while(true){
if((i__42147__auto___50680 < len__42146__auto___50679)){
args__42153__auto__.push((arguments[i__42147__auto___50680]));

var G__50681 = (i__42147__auto___50680 + (1));
i__42147__auto___50680 = G__50681;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50537__auto___50678))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50537__auto___50678){
return (function (args){
return cljs.core.deref.call(null,g__50537__auto___50678);
});})(g__50537__auto___50678))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__50537__auto___50678){
return (function (seq50654){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50654));
});})(g__50537__auto___50678))
;


var g__50537__auto___50682 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__50537__auto___50682){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50683 = arguments.length;
var i__42147__auto___50684 = (0);
while(true){
if((i__42147__auto___50684 < len__42146__auto___50683)){
args__42153__auto__.push((arguments[i__42147__auto___50684]));

var G__50685 = (i__42147__auto___50684 + (1));
i__42147__auto___50684 = G__50685;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50537__auto___50682))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50537__auto___50682){
return (function (args){
return cljs.core.deref.call(null,g__50537__auto___50682);
});})(g__50537__auto___50682))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__50537__auto___50682){
return (function (seq50655){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50655));
});})(g__50537__auto___50682))
;


var g__50537__auto___50686 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__50537__auto___50686){
return (function cljs$spec$impl$gen$char(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50687 = arguments.length;
var i__42147__auto___50688 = (0);
while(true){
if((i__42147__auto___50688 < len__42146__auto___50687)){
args__42153__auto__.push((arguments[i__42147__auto___50688]));

var G__50689 = (i__42147__auto___50688 + (1));
i__42147__auto___50688 = G__50689;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50537__auto___50686))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50537__auto___50686){
return (function (args){
return cljs.core.deref.call(null,g__50537__auto___50686);
});})(g__50537__auto___50686))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__50537__auto___50686){
return (function (seq50656){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50656));
});})(g__50537__auto___50686))
;


var g__50537__auto___50690 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__50537__auto___50690){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50691 = arguments.length;
var i__42147__auto___50692 = (0);
while(true){
if((i__42147__auto___50692 < len__42146__auto___50691)){
args__42153__auto__.push((arguments[i__42147__auto___50692]));

var G__50693 = (i__42147__auto___50692 + (1));
i__42147__auto___50692 = G__50693;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50537__auto___50690))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50537__auto___50690){
return (function (args){
return cljs.core.deref.call(null,g__50537__auto___50690);
});})(g__50537__auto___50690))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__50537__auto___50690){
return (function (seq50657){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50657));
});})(g__50537__auto___50690))
;


var g__50537__auto___50694 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__50537__auto___50694){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50695 = arguments.length;
var i__42147__auto___50696 = (0);
while(true){
if((i__42147__auto___50696 < len__42146__auto___50695)){
args__42153__auto__.push((arguments[i__42147__auto___50696]));

var G__50697 = (i__42147__auto___50696 + (1));
i__42147__auto___50696 = G__50697;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50537__auto___50694))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50537__auto___50694){
return (function (args){
return cljs.core.deref.call(null,g__50537__auto___50694);
});})(g__50537__auto___50694))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__50537__auto___50694){
return (function (seq50658){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50658));
});})(g__50537__auto___50694))
;


var g__50537__auto___50698 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__50537__auto___50698){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50699 = arguments.length;
var i__42147__auto___50700 = (0);
while(true){
if((i__42147__auto___50700 < len__42146__auto___50699)){
args__42153__auto__.push((arguments[i__42147__auto___50700]));

var G__50701 = (i__42147__auto___50700 + (1));
i__42147__auto___50700 = G__50701;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50537__auto___50698))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50537__auto___50698){
return (function (args){
return cljs.core.deref.call(null,g__50537__auto___50698);
});})(g__50537__auto___50698))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__50537__auto___50698){
return (function (seq50659){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50659));
});})(g__50537__auto___50698))
;


var g__50537__auto___50702 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__50537__auto___50702){
return (function cljs$spec$impl$gen$double(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50703 = arguments.length;
var i__42147__auto___50704 = (0);
while(true){
if((i__42147__auto___50704 < len__42146__auto___50703)){
args__42153__auto__.push((arguments[i__42147__auto___50704]));

var G__50705 = (i__42147__auto___50704 + (1));
i__42147__auto___50704 = G__50705;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50537__auto___50702))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50537__auto___50702){
return (function (args){
return cljs.core.deref.call(null,g__50537__auto___50702);
});})(g__50537__auto___50702))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__50537__auto___50702){
return (function (seq50660){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50660));
});})(g__50537__auto___50702))
;


var g__50537__auto___50706 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__50537__auto___50706){
return (function cljs$spec$impl$gen$int(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50707 = arguments.length;
var i__42147__auto___50708 = (0);
while(true){
if((i__42147__auto___50708 < len__42146__auto___50707)){
args__42153__auto__.push((arguments[i__42147__auto___50708]));

var G__50709 = (i__42147__auto___50708 + (1));
i__42147__auto___50708 = G__50709;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50537__auto___50706))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50537__auto___50706){
return (function (args){
return cljs.core.deref.call(null,g__50537__auto___50706);
});})(g__50537__auto___50706))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__50537__auto___50706){
return (function (seq50661){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50661));
});})(g__50537__auto___50706))
;


var g__50537__auto___50710 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__50537__auto___50710){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50711 = arguments.length;
var i__42147__auto___50712 = (0);
while(true){
if((i__42147__auto___50712 < len__42146__auto___50711)){
args__42153__auto__.push((arguments[i__42147__auto___50712]));

var G__50713 = (i__42147__auto___50712 + (1));
i__42147__auto___50712 = G__50713;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50537__auto___50710))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50537__auto___50710){
return (function (args){
return cljs.core.deref.call(null,g__50537__auto___50710);
});})(g__50537__auto___50710))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__50537__auto___50710){
return (function (seq50662){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50662));
});})(g__50537__auto___50710))
;


var g__50537__auto___50714 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__50537__auto___50714){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50715 = arguments.length;
var i__42147__auto___50716 = (0);
while(true){
if((i__42147__auto___50716 < len__42146__auto___50715)){
args__42153__auto__.push((arguments[i__42147__auto___50716]));

var G__50717 = (i__42147__auto___50716 + (1));
i__42147__auto___50716 = G__50717;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50537__auto___50714))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50537__auto___50714){
return (function (args){
return cljs.core.deref.call(null,g__50537__auto___50714);
});})(g__50537__auto___50714))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__50537__auto___50714){
return (function (seq50663){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50663));
});})(g__50537__auto___50714))
;


var g__50537__auto___50718 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__50537__auto___50718){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50719 = arguments.length;
var i__42147__auto___50720 = (0);
while(true){
if((i__42147__auto___50720 < len__42146__auto___50719)){
args__42153__auto__.push((arguments[i__42147__auto___50720]));

var G__50721 = (i__42147__auto___50720 + (1));
i__42147__auto___50720 = G__50721;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50537__auto___50718))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50537__auto___50718){
return (function (args){
return cljs.core.deref.call(null,g__50537__auto___50718);
});})(g__50537__auto___50718))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__50537__auto___50718){
return (function (seq50664){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50664));
});})(g__50537__auto___50718))
;


var g__50537__auto___50722 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__50537__auto___50722){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50723 = arguments.length;
var i__42147__auto___50724 = (0);
while(true){
if((i__42147__auto___50724 < len__42146__auto___50723)){
args__42153__auto__.push((arguments[i__42147__auto___50724]));

var G__50725 = (i__42147__auto___50724 + (1));
i__42147__auto___50724 = G__50725;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50537__auto___50722))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50537__auto___50722){
return (function (args){
return cljs.core.deref.call(null,g__50537__auto___50722);
});})(g__50537__auto___50722))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__50537__auto___50722){
return (function (seq50665){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50665));
});})(g__50537__auto___50722))
;


var g__50537__auto___50726 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__50537__auto___50726){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50727 = arguments.length;
var i__42147__auto___50728 = (0);
while(true){
if((i__42147__auto___50728 < len__42146__auto___50727)){
args__42153__auto__.push((arguments[i__42147__auto___50728]));

var G__50729 = (i__42147__auto___50728 + (1));
i__42147__auto___50728 = G__50729;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50537__auto___50726))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50537__auto___50726){
return (function (args){
return cljs.core.deref.call(null,g__50537__auto___50726);
});})(g__50537__auto___50726))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__50537__auto___50726){
return (function (seq50666){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50666));
});})(g__50537__auto___50726))
;


var g__50537__auto___50730 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__50537__auto___50730){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50731 = arguments.length;
var i__42147__auto___50732 = (0);
while(true){
if((i__42147__auto___50732 < len__42146__auto___50731)){
args__42153__auto__.push((arguments[i__42147__auto___50732]));

var G__50733 = (i__42147__auto___50732 + (1));
i__42147__auto___50732 = G__50733;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50537__auto___50730))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50537__auto___50730){
return (function (args){
return cljs.core.deref.call(null,g__50537__auto___50730);
});})(g__50537__auto___50730))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__50537__auto___50730){
return (function (seq50667){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50667));
});})(g__50537__auto___50730))
;


var g__50537__auto___50734 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__50537__auto___50734){
return (function cljs$spec$impl$gen$string(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50735 = arguments.length;
var i__42147__auto___50736 = (0);
while(true){
if((i__42147__auto___50736 < len__42146__auto___50735)){
args__42153__auto__.push((arguments[i__42147__auto___50736]));

var G__50737 = (i__42147__auto___50736 + (1));
i__42147__auto___50736 = G__50737;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50537__auto___50734))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50537__auto___50734){
return (function (args){
return cljs.core.deref.call(null,g__50537__auto___50734);
});})(g__50537__auto___50734))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__50537__auto___50734){
return (function (seq50668){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50668));
});})(g__50537__auto___50734))
;


var g__50537__auto___50738 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__50537__auto___50738){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50739 = arguments.length;
var i__42147__auto___50740 = (0);
while(true){
if((i__42147__auto___50740 < len__42146__auto___50739)){
args__42153__auto__.push((arguments[i__42147__auto___50740]));

var G__50741 = (i__42147__auto___50740 + (1));
i__42147__auto___50740 = G__50741;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50537__auto___50738))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50537__auto___50738){
return (function (args){
return cljs.core.deref.call(null,g__50537__auto___50738);
});})(g__50537__auto___50738))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__50537__auto___50738){
return (function (seq50669){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50669));
});})(g__50537__auto___50738))
;


var g__50537__auto___50742 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__50537__auto___50742){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50743 = arguments.length;
var i__42147__auto___50744 = (0);
while(true){
if((i__42147__auto___50744 < len__42146__auto___50743)){
args__42153__auto__.push((arguments[i__42147__auto___50744]));

var G__50745 = (i__42147__auto___50744 + (1));
i__42147__auto___50744 = G__50745;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50537__auto___50742))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50537__auto___50742){
return (function (args){
return cljs.core.deref.call(null,g__50537__auto___50742);
});})(g__50537__auto___50742))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__50537__auto___50742){
return (function (seq50670){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50670));
});})(g__50537__auto___50742))
;


var g__50537__auto___50746 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__50537__auto___50746){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50747 = arguments.length;
var i__42147__auto___50748 = (0);
while(true){
if((i__42147__auto___50748 < len__42146__auto___50747)){
args__42153__auto__.push((arguments[i__42147__auto___50748]));

var G__50749 = (i__42147__auto___50748 + (1));
i__42147__auto___50748 = G__50749;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50537__auto___50746))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50537__auto___50746){
return (function (args){
return cljs.core.deref.call(null,g__50537__auto___50746);
});})(g__50537__auto___50746))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__50537__auto___50746){
return (function (seq50671){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50671));
});})(g__50537__auto___50746))
;


var g__50537__auto___50750 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__50537__auto___50750){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50751 = arguments.length;
var i__42147__auto___50752 = (0);
while(true){
if((i__42147__auto___50752 < len__42146__auto___50751)){
args__42153__auto__.push((arguments[i__42147__auto___50752]));

var G__50753 = (i__42147__auto___50752 + (1));
i__42147__auto___50752 = G__50753;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50537__auto___50750))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50537__auto___50750){
return (function (args){
return cljs.core.deref.call(null,g__50537__auto___50750);
});})(g__50537__auto___50750))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__50537__auto___50750){
return (function (seq50672){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50672));
});})(g__50537__auto___50750))
;


var g__50537__auto___50754 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__50537__auto___50754){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50755 = arguments.length;
var i__42147__auto___50756 = (0);
while(true){
if((i__42147__auto___50756 < len__42146__auto___50755)){
args__42153__auto__.push((arguments[i__42147__auto___50756]));

var G__50757 = (i__42147__auto___50756 + (1));
i__42147__auto___50756 = G__50757;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});})(g__50537__auto___50754))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__50537__auto___50754){
return (function (args){
return cljs.core.deref.call(null,g__50537__auto___50754);
});})(g__50537__auto___50754))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__50537__auto___50754){
return (function (seq50673){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50673));
});})(g__50537__auto___50754))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__42153__auto__ = [];
var len__42146__auto___50760 = arguments.length;
var i__42147__auto___50761 = (0);
while(true){
if((i__42147__auto___50761 < len__42146__auto___50760)){
args__42153__auto__.push((arguments[i__42147__auto___50761]));

var G__50762 = (i__42147__auto___50761 + (1));
i__42147__auto___50761 = G__50762;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__50758_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__50758_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq50759){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50759));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__50763_SHARP_){
return (new Date(p1__50763_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1502937016137