// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__43325 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__43326 = null;
var count__43327 = (0);
var i__43328 = (0);
while(true){
if((i__43328 < count__43327)){
var vec__43329 = cljs.core._nth.call(null,chunk__43326,i__43328);
var effect_k = cljs.core.nth.call(null,vec__43329,(0),null);
var value = cljs.core.nth.call(null,vec__43329,(1),null);
var temp__4655__auto___43335 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___43335)){
var effect_fn_43336 = temp__4655__auto___43335;
effect_fn_43336.call(null,value);
} else {
}

var G__43337 = seq__43325;
var G__43338 = chunk__43326;
var G__43339 = count__43327;
var G__43340 = (i__43328 + (1));
seq__43325 = G__43337;
chunk__43326 = G__43338;
count__43327 = G__43339;
i__43328 = G__43340;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43325);
if(temp__4657__auto__){
var seq__43325__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43325__$1)){
var c__41882__auto__ = cljs.core.chunk_first.call(null,seq__43325__$1);
var G__43341 = cljs.core.chunk_rest.call(null,seq__43325__$1);
var G__43342 = c__41882__auto__;
var G__43343 = cljs.core.count.call(null,c__41882__auto__);
var G__43344 = (0);
seq__43325 = G__43341;
chunk__43326 = G__43342;
count__43327 = G__43343;
i__43328 = G__43344;
continue;
} else {
var vec__43332 = cljs.core.first.call(null,seq__43325__$1);
var effect_k = cljs.core.nth.call(null,vec__43332,(0),null);
var value = cljs.core.nth.call(null,vec__43332,(1),null);
var temp__4655__auto___43345 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___43345)){
var effect_fn_43346 = temp__4655__auto___43345;
effect_fn_43346.call(null,value);
} else {
}

var G__43347 = cljs.core.next.call(null,seq__43325__$1);
var G__43348 = null;
var G__43349 = (0);
var G__43350 = (0);
seq__43325 = G__43347;
chunk__43326 = G__43348;
count__43327 = G__43349;
i__43328 = G__43350;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__43351 = cljs.core.seq.call(null,value);
var chunk__43352 = null;
var count__43353 = (0);
var i__43354 = (0);
while(true){
if((i__43354 < count__43353)){
var map__43355 = cljs.core._nth.call(null,chunk__43352,i__43354);
var map__43355__$1 = ((((!((map__43355 == null)))?((((map__43355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43355):map__43355);
var effect = map__43355__$1;
var ms = cljs.core.get.call(null,map__43355__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__43355__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__43351,chunk__43352,count__43353,i__43354,map__43355,map__43355__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__43351,chunk__43352,count__43353,i__43354,map__43355,map__43355__$1,effect,ms,dispatch))
,ms);
}

var G__43359 = seq__43351;
var G__43360 = chunk__43352;
var G__43361 = count__43353;
var G__43362 = (i__43354 + (1));
seq__43351 = G__43359;
chunk__43352 = G__43360;
count__43353 = G__43361;
i__43354 = G__43362;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43351);
if(temp__4657__auto__){
var seq__43351__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43351__$1)){
var c__41882__auto__ = cljs.core.chunk_first.call(null,seq__43351__$1);
var G__43363 = cljs.core.chunk_rest.call(null,seq__43351__$1);
var G__43364 = c__41882__auto__;
var G__43365 = cljs.core.count.call(null,c__41882__auto__);
var G__43366 = (0);
seq__43351 = G__43363;
chunk__43352 = G__43364;
count__43353 = G__43365;
i__43354 = G__43366;
continue;
} else {
var map__43357 = cljs.core.first.call(null,seq__43351__$1);
var map__43357__$1 = ((((!((map__43357 == null)))?((((map__43357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43357):map__43357);
var effect = map__43357__$1;
var ms = cljs.core.get.call(null,map__43357__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__43357__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__43351,chunk__43352,count__43353,i__43354,map__43357,map__43357__$1,effect,ms,dispatch,seq__43351__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__43351,chunk__43352,count__43353,i__43354,map__43357,map__43357__$1,effect,ms,dispatch,seq__43351__$1,temp__4657__auto__))
,ms);
}

var G__43367 = cljs.core.next.call(null,seq__43351__$1);
var G__43368 = null;
var G__43369 = (0);
var G__43370 = (0);
seq__43351 = G__43367;
chunk__43352 = G__43368;
count__43353 = G__43369;
i__43354 = G__43370;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__43371 = cljs.core.seq.call(null,value);
var chunk__43372 = null;
var count__43373 = (0);
var i__43374 = (0);
while(true){
if((i__43374 < count__43373)){
var event = cljs.core._nth.call(null,chunk__43372,i__43374);
re_frame.router.dispatch.call(null,event);

var G__43375 = seq__43371;
var G__43376 = chunk__43372;
var G__43377 = count__43373;
var G__43378 = (i__43374 + (1));
seq__43371 = G__43375;
chunk__43372 = G__43376;
count__43373 = G__43377;
i__43374 = G__43378;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43371);
if(temp__4657__auto__){
var seq__43371__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43371__$1)){
var c__41882__auto__ = cljs.core.chunk_first.call(null,seq__43371__$1);
var G__43379 = cljs.core.chunk_rest.call(null,seq__43371__$1);
var G__43380 = c__41882__auto__;
var G__43381 = cljs.core.count.call(null,c__41882__auto__);
var G__43382 = (0);
seq__43371 = G__43379;
chunk__43372 = G__43380;
count__43373 = G__43381;
i__43374 = G__43382;
continue;
} else {
var event = cljs.core.first.call(null,seq__43371__$1);
re_frame.router.dispatch.call(null,event);

var G__43383 = cljs.core.next.call(null,seq__43371__$1);
var G__43384 = null;
var G__43385 = (0);
var G__43386 = (0);
seq__43371 = G__43383;
chunk__43372 = G__43384;
count__43373 = G__43385;
i__43374 = G__43386;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__43387 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__43388 = null;
var count__43389 = (0);
var i__43390 = (0);
while(true){
if((i__43390 < count__43389)){
var event = cljs.core._nth.call(null,chunk__43388,i__43390);
clear_event.call(null,event);

var G__43391 = seq__43387;
var G__43392 = chunk__43388;
var G__43393 = count__43389;
var G__43394 = (i__43390 + (1));
seq__43387 = G__43391;
chunk__43388 = G__43392;
count__43389 = G__43393;
i__43390 = G__43394;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43387);
if(temp__4657__auto__){
var seq__43387__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43387__$1)){
var c__41882__auto__ = cljs.core.chunk_first.call(null,seq__43387__$1);
var G__43395 = cljs.core.chunk_rest.call(null,seq__43387__$1);
var G__43396 = c__41882__auto__;
var G__43397 = cljs.core.count.call(null,c__41882__auto__);
var G__43398 = (0);
seq__43387 = G__43395;
chunk__43388 = G__43396;
count__43389 = G__43397;
i__43390 = G__43398;
continue;
} else {
var event = cljs.core.first.call(null,seq__43387__$1);
clear_event.call(null,event);

var G__43399 = cljs.core.next.call(null,seq__43387__$1);
var G__43400 = null;
var G__43401 = (0);
var G__43402 = (0);
seq__43387 = G__43399;
chunk__43388 = G__43400;
count__43389 = G__43401;
i__43390 = G__43402;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1502937005786