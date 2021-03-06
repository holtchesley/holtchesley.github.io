// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__43181_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__43181_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected a collection of interceptors, got:")].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering"),cljs.core.str(id),cljs.core.str(", given an empty interceptor chain")].join(''));
} else {
}

var temp__4657__auto___43182 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___43182)){
var not_i_43183 = temp__4657__auto___43182;
if(cljs.core.fn_QMARK_.call(null,not_i_43183)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_43183);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_43183);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: while handling \""),cljs.core.str(re_frame.events._STAR_handling_STAR_),cljs.core.str("\", dispatch-sync was called for \""),cljs.core.str(event_v),cljs.core.str("\". You can't call dispatch-sync within an event handler.")].join(''));
} else {
var _STAR_handling_STAR_43198 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_43199 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__43116__auto___43212 = re_frame.interop.now.call(null);
var duration__43117__auto___43213 = (end__43116__auto___43212 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__43200_43214 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__43201_43215 = null;
var count__43202_43216 = (0);
var i__43203_43217 = (0);
while(true){
if((i__43203_43217 < count__43202_43216)){
var vec__43204_43218 = cljs.core._nth.call(null,chunk__43201_43215,i__43203_43217);
var k__43118__auto___43219 = cljs.core.nth.call(null,vec__43204_43218,(0),null);
var cb__43119__auto___43220 = cljs.core.nth.call(null,vec__43204_43218,(1),null);
try{cb__43119__auto___43220.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__43117__auto___43213,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e43207){if((e43207 instanceof java.lang.Exception)){
var e__43120__auto___43221 = e43207;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__43118__auto___43219,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__43120__auto___43221);
} else {
throw e43207;

}
}
var G__43222 = seq__43200_43214;
var G__43223 = chunk__43201_43215;
var G__43224 = count__43202_43216;
var G__43225 = (i__43203_43217 + (1));
seq__43200_43214 = G__43222;
chunk__43201_43215 = G__43223;
count__43202_43216 = G__43224;
i__43203_43217 = G__43225;
continue;
} else {
var temp__4657__auto___43226 = cljs.core.seq.call(null,seq__43200_43214);
if(temp__4657__auto___43226){
var seq__43200_43227__$1 = temp__4657__auto___43226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43200_43227__$1)){
var c__41882__auto___43228 = cljs.core.chunk_first.call(null,seq__43200_43227__$1);
var G__43229 = cljs.core.chunk_rest.call(null,seq__43200_43227__$1);
var G__43230 = c__41882__auto___43228;
var G__43231 = cljs.core.count.call(null,c__41882__auto___43228);
var G__43232 = (0);
seq__43200_43214 = G__43229;
chunk__43201_43215 = G__43230;
count__43202_43216 = G__43231;
i__43203_43217 = G__43232;
continue;
} else {
var vec__43208_43233 = cljs.core.first.call(null,seq__43200_43227__$1);
var k__43118__auto___43234 = cljs.core.nth.call(null,vec__43208_43233,(0),null);
var cb__43119__auto___43235 = cljs.core.nth.call(null,vec__43208_43233,(1),null);
try{cb__43119__auto___43235.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__43117__auto___43213,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e43211){if((e43211 instanceof java.lang.Exception)){
var e__43120__auto___43236 = e43211;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__43118__auto___43234,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__43120__auto___43236);
} else {
throw e43211;

}
}
var G__43237 = cljs.core.next.call(null,seq__43200_43227__$1);
var G__43238 = null;
var G__43239 = (0);
var G__43240 = (0);
seq__43200_43214 = G__43237;
chunk__43201_43215 = G__43238;
count__43202_43216 = G__43239;
i__43203_43217 = G__43240;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_43199;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_43198;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1502937005358