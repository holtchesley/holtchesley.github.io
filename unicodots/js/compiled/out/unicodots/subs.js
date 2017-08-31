// Compiled by ClojureScript 1.9.229 {}
goog.provide('unicodots.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"name","name",1843675177),(function (db){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"world","world",-418292623),(function (db){
var world = new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(db);
var k = cljs.core.keys.call(null,world);
var height = cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,k));
var width = cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,k));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [world,width,height], null);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"input","input",556931961),(function (db){
return new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),(function (db){
return new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"dot-ids","dot-ids",600587358),(function (db){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"dots","dots",714343900).cljs$core$IFn$_invoke$arity$1(db));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (db,p__49486){
var vec__49487 = p__49486;
var _ = cljs.core.nth.call(null,vec__49487,(0),null);
var id = cljs.core.nth.call(null,vec__49487,(1),null);
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),id], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"step-delay-val","step-delay-val",496529960),(function (db,_){
return (Math.log((cljs.core.get.call(null,db,new cljs.core.Keyword(null,"step-delay","step-delay",663195760)) / (50))) / Math.log((10)));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"theme","theme",-1247880880),(function (db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"theme","theme",-1247880880));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"current-paint","current-paint",1292257612),(function (db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"current-paint","current-paint",1292257612));
}));

//# sourceMappingURL=subs.js.map?rel=1503453729870