// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__41071__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__41071__auto__){
return or__41071__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__41071__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__41071__auto__)){
return or__41071__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__49482_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__49482_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__49487 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__49488 = null;
var count__49489 = (0);
var i__49490 = (0);
while(true){
if((i__49490 < count__49489)){
var n = cljs.core._nth.call(null,chunk__49488,i__49490);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49491 = seq__49487;
var G__49492 = chunk__49488;
var G__49493 = count__49489;
var G__49494 = (i__49490 + (1));
seq__49487 = G__49491;
chunk__49488 = G__49492;
count__49489 = G__49493;
i__49490 = G__49494;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49487);
if(temp__4657__auto__){
var seq__49487__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49487__$1)){
var c__41882__auto__ = cljs.core.chunk_first.call(null,seq__49487__$1);
var G__49495 = cljs.core.chunk_rest.call(null,seq__49487__$1);
var G__49496 = c__41882__auto__;
var G__49497 = cljs.core.count.call(null,c__41882__auto__);
var G__49498 = (0);
seq__49487 = G__49495;
chunk__49488 = G__49496;
count__49489 = G__49497;
i__49490 = G__49498;
continue;
} else {
var n = cljs.core.first.call(null,seq__49487__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49499 = cljs.core.next.call(null,seq__49487__$1);
var G__49500 = null;
var G__49501 = (0);
var G__49502 = (0);
seq__49487 = G__49499;
chunk__49488 = G__49500;
count__49489 = G__49501;
i__49490 = G__49502;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__49553_49564 = cljs.core.seq.call(null,deps);
var chunk__49554_49565 = null;
var count__49555_49566 = (0);
var i__49556_49567 = (0);
while(true){
if((i__49556_49567 < count__49555_49566)){
var dep_49568 = cljs.core._nth.call(null,chunk__49554_49565,i__49556_49567);
topo_sort_helper_STAR_.call(null,dep_49568,(depth + (1)),state);

var G__49569 = seq__49553_49564;
var G__49570 = chunk__49554_49565;
var G__49571 = count__49555_49566;
var G__49572 = (i__49556_49567 + (1));
seq__49553_49564 = G__49569;
chunk__49554_49565 = G__49570;
count__49555_49566 = G__49571;
i__49556_49567 = G__49572;
continue;
} else {
var temp__4657__auto___49573 = cljs.core.seq.call(null,seq__49553_49564);
if(temp__4657__auto___49573){
var seq__49553_49574__$1 = temp__4657__auto___49573;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49553_49574__$1)){
var c__41882__auto___49575 = cljs.core.chunk_first.call(null,seq__49553_49574__$1);
var G__49576 = cljs.core.chunk_rest.call(null,seq__49553_49574__$1);
var G__49577 = c__41882__auto___49575;
var G__49578 = cljs.core.count.call(null,c__41882__auto___49575);
var G__49579 = (0);
seq__49553_49564 = G__49576;
chunk__49554_49565 = G__49577;
count__49555_49566 = G__49578;
i__49556_49567 = G__49579;
continue;
} else {
var dep_49580 = cljs.core.first.call(null,seq__49553_49574__$1);
topo_sort_helper_STAR_.call(null,dep_49580,(depth + (1)),state);

var G__49581 = cljs.core.next.call(null,seq__49553_49574__$1);
var G__49582 = null;
var G__49583 = (0);
var G__49584 = (0);
seq__49553_49564 = G__49581;
chunk__49554_49565 = G__49582;
count__49555_49566 = G__49583;
i__49556_49567 = G__49584;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__49557){
var vec__49561 = p__49557;
var seq__49562 = cljs.core.seq.call(null,vec__49561);
var first__49563 = cljs.core.first.call(null,seq__49562);
var seq__49562__$1 = cljs.core.next.call(null,seq__49562);
var x = first__49563;
var xs = seq__49562__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__49561,seq__49562,first__49563,seq__49562__$1,x,xs,get_deps__$1){
return (function (p1__49503_SHARP_){
return clojure.set.difference.call(null,p1__49503_SHARP_,x);
});})(vec__49561,seq__49562,first__49563,seq__49562__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__49597 = cljs.core.seq.call(null,provides);
var chunk__49598 = null;
var count__49599 = (0);
var i__49600 = (0);
while(true){
if((i__49600 < count__49599)){
var prov = cljs.core._nth.call(null,chunk__49598,i__49600);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49601_49609 = cljs.core.seq.call(null,requires);
var chunk__49602_49610 = null;
var count__49603_49611 = (0);
var i__49604_49612 = (0);
while(true){
if((i__49604_49612 < count__49603_49611)){
var req_49613 = cljs.core._nth.call(null,chunk__49602_49610,i__49604_49612);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49613,prov);

var G__49614 = seq__49601_49609;
var G__49615 = chunk__49602_49610;
var G__49616 = count__49603_49611;
var G__49617 = (i__49604_49612 + (1));
seq__49601_49609 = G__49614;
chunk__49602_49610 = G__49615;
count__49603_49611 = G__49616;
i__49604_49612 = G__49617;
continue;
} else {
var temp__4657__auto___49618 = cljs.core.seq.call(null,seq__49601_49609);
if(temp__4657__auto___49618){
var seq__49601_49619__$1 = temp__4657__auto___49618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49601_49619__$1)){
var c__41882__auto___49620 = cljs.core.chunk_first.call(null,seq__49601_49619__$1);
var G__49621 = cljs.core.chunk_rest.call(null,seq__49601_49619__$1);
var G__49622 = c__41882__auto___49620;
var G__49623 = cljs.core.count.call(null,c__41882__auto___49620);
var G__49624 = (0);
seq__49601_49609 = G__49621;
chunk__49602_49610 = G__49622;
count__49603_49611 = G__49623;
i__49604_49612 = G__49624;
continue;
} else {
var req_49625 = cljs.core.first.call(null,seq__49601_49619__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49625,prov);

var G__49626 = cljs.core.next.call(null,seq__49601_49619__$1);
var G__49627 = null;
var G__49628 = (0);
var G__49629 = (0);
seq__49601_49609 = G__49626;
chunk__49602_49610 = G__49627;
count__49603_49611 = G__49628;
i__49604_49612 = G__49629;
continue;
}
} else {
}
}
break;
}

var G__49630 = seq__49597;
var G__49631 = chunk__49598;
var G__49632 = count__49599;
var G__49633 = (i__49600 + (1));
seq__49597 = G__49630;
chunk__49598 = G__49631;
count__49599 = G__49632;
i__49600 = G__49633;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49597);
if(temp__4657__auto__){
var seq__49597__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49597__$1)){
var c__41882__auto__ = cljs.core.chunk_first.call(null,seq__49597__$1);
var G__49634 = cljs.core.chunk_rest.call(null,seq__49597__$1);
var G__49635 = c__41882__auto__;
var G__49636 = cljs.core.count.call(null,c__41882__auto__);
var G__49637 = (0);
seq__49597 = G__49634;
chunk__49598 = G__49635;
count__49599 = G__49636;
i__49600 = G__49637;
continue;
} else {
var prov = cljs.core.first.call(null,seq__49597__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49605_49638 = cljs.core.seq.call(null,requires);
var chunk__49606_49639 = null;
var count__49607_49640 = (0);
var i__49608_49641 = (0);
while(true){
if((i__49608_49641 < count__49607_49640)){
var req_49642 = cljs.core._nth.call(null,chunk__49606_49639,i__49608_49641);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49642,prov);

var G__49643 = seq__49605_49638;
var G__49644 = chunk__49606_49639;
var G__49645 = count__49607_49640;
var G__49646 = (i__49608_49641 + (1));
seq__49605_49638 = G__49643;
chunk__49606_49639 = G__49644;
count__49607_49640 = G__49645;
i__49608_49641 = G__49646;
continue;
} else {
var temp__4657__auto___49647__$1 = cljs.core.seq.call(null,seq__49605_49638);
if(temp__4657__auto___49647__$1){
var seq__49605_49648__$1 = temp__4657__auto___49647__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49605_49648__$1)){
var c__41882__auto___49649 = cljs.core.chunk_first.call(null,seq__49605_49648__$1);
var G__49650 = cljs.core.chunk_rest.call(null,seq__49605_49648__$1);
var G__49651 = c__41882__auto___49649;
var G__49652 = cljs.core.count.call(null,c__41882__auto___49649);
var G__49653 = (0);
seq__49605_49638 = G__49650;
chunk__49606_49639 = G__49651;
count__49607_49640 = G__49652;
i__49608_49641 = G__49653;
continue;
} else {
var req_49654 = cljs.core.first.call(null,seq__49605_49648__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49654,prov);

var G__49655 = cljs.core.next.call(null,seq__49605_49648__$1);
var G__49656 = null;
var G__49657 = (0);
var G__49658 = (0);
seq__49605_49638 = G__49655;
chunk__49606_49639 = G__49656;
count__49607_49640 = G__49657;
i__49608_49641 = G__49658;
continue;
}
} else {
}
}
break;
}

var G__49659 = cljs.core.next.call(null,seq__49597__$1);
var G__49660 = null;
var G__49661 = (0);
var G__49662 = (0);
seq__49597 = G__49659;
chunk__49598 = G__49660;
count__49599 = G__49661;
i__49600 = G__49662;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__49667_49671 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__49668_49672 = null;
var count__49669_49673 = (0);
var i__49670_49674 = (0);
while(true){
if((i__49670_49674 < count__49669_49673)){
var ns_49675 = cljs.core._nth.call(null,chunk__49668_49672,i__49670_49674);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49675);

var G__49676 = seq__49667_49671;
var G__49677 = chunk__49668_49672;
var G__49678 = count__49669_49673;
var G__49679 = (i__49670_49674 + (1));
seq__49667_49671 = G__49676;
chunk__49668_49672 = G__49677;
count__49669_49673 = G__49678;
i__49670_49674 = G__49679;
continue;
} else {
var temp__4657__auto___49680 = cljs.core.seq.call(null,seq__49667_49671);
if(temp__4657__auto___49680){
var seq__49667_49681__$1 = temp__4657__auto___49680;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49667_49681__$1)){
var c__41882__auto___49682 = cljs.core.chunk_first.call(null,seq__49667_49681__$1);
var G__49683 = cljs.core.chunk_rest.call(null,seq__49667_49681__$1);
var G__49684 = c__41882__auto___49682;
var G__49685 = cljs.core.count.call(null,c__41882__auto___49682);
var G__49686 = (0);
seq__49667_49671 = G__49683;
chunk__49668_49672 = G__49684;
count__49669_49673 = G__49685;
i__49670_49674 = G__49686;
continue;
} else {
var ns_49687 = cljs.core.first.call(null,seq__49667_49681__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49687);

var G__49688 = cljs.core.next.call(null,seq__49667_49681__$1);
var G__49689 = null;
var G__49690 = (0);
var G__49691 = (0);
seq__49667_49671 = G__49688;
chunk__49668_49672 = G__49689;
count__49669_49673 = G__49690;
i__49670_49674 = G__49691;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__41071__auto__ = goog.require__;
if(cljs.core.truth_(or__41071__auto__)){
return or__41071__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__49692__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__49692 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49693__i = 0, G__49693__a = new Array(arguments.length -  0);
while (G__49693__i < G__49693__a.length) {G__49693__a[G__49693__i] = arguments[G__49693__i + 0]; ++G__49693__i;}
  args = new cljs.core.IndexedSeq(G__49693__a,0);
} 
return G__49692__delegate.call(this,args);};
G__49692.cljs$lang$maxFixedArity = 0;
G__49692.cljs$lang$applyTo = (function (arglist__49694){
var args = cljs.core.seq(arglist__49694);
return G__49692__delegate(args);
});
G__49692.cljs$core$IFn$_invoke$arity$variadic = G__49692__delegate;
return G__49692;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__49695 = cljs.core._EQ_;
var expr__49696 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__49695.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__49696))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__49695,expr__49696){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__49695,expr__49696))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__49695,expr__49696){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e49698){if((e49698 instanceof Error)){
var e = e49698;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49698;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__49695,expr__49696))
} else {
if(cljs.core.truth_(pred__49695.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__49696))){
return ((function (pred__49695,expr__49696){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__49695,expr__49696){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__49695,expr__49696))
);

return deferred.addErrback(((function (deferred,pred__49695,expr__49696){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__49695,expr__49696))
);
});
;})(pred__49695,expr__49696))
} else {
if(cljs.core.truth_(pred__49695.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__49696))){
return ((function (pred__49695,expr__49696){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e49699){if((e49699 instanceof Error)){
var e = e49699;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49699;

}
}})());
});
;})(pred__49695,expr__49696))
} else {
return ((function (pred__49695,expr__49696){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__49695,expr__49696))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__49700,callback){
var map__49703 = p__49700;
var map__49703__$1 = ((((!((map__49703 == null)))?((((map__49703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49703):map__49703);
var file_msg = map__49703__$1;
var request_url = cljs.core.get.call(null,map__49703__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__49703,map__49703__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__49703,map__49703__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__44900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto__){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto__){
return (function (state_49727){
var state_val_49728 = (state_49727[(1)]);
if((state_val_49728 === (7))){
var inst_49723 = (state_49727[(2)]);
var state_49727__$1 = state_49727;
var statearr_49729_49749 = state_49727__$1;
(statearr_49729_49749[(2)] = inst_49723);

(statearr_49729_49749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49728 === (1))){
var state_49727__$1 = state_49727;
var statearr_49730_49750 = state_49727__$1;
(statearr_49730_49750[(2)] = null);

(statearr_49730_49750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49728 === (4))){
var inst_49707 = (state_49727[(7)]);
var inst_49707__$1 = (state_49727[(2)]);
var state_49727__$1 = (function (){var statearr_49731 = state_49727;
(statearr_49731[(7)] = inst_49707__$1);

return statearr_49731;
})();
if(cljs.core.truth_(inst_49707__$1)){
var statearr_49732_49751 = state_49727__$1;
(statearr_49732_49751[(1)] = (5));

} else {
var statearr_49733_49752 = state_49727__$1;
(statearr_49733_49752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49728 === (6))){
var state_49727__$1 = state_49727;
var statearr_49734_49753 = state_49727__$1;
(statearr_49734_49753[(2)] = null);

(statearr_49734_49753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49728 === (3))){
var inst_49725 = (state_49727[(2)]);
var state_49727__$1 = state_49727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49727__$1,inst_49725);
} else {
if((state_val_49728 === (2))){
var state_49727__$1 = state_49727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49727__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_49728 === (11))){
var inst_49719 = (state_49727[(2)]);
var state_49727__$1 = (function (){var statearr_49735 = state_49727;
(statearr_49735[(8)] = inst_49719);

return statearr_49735;
})();
var statearr_49736_49754 = state_49727__$1;
(statearr_49736_49754[(2)] = null);

(statearr_49736_49754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49728 === (9))){
var inst_49713 = (state_49727[(9)]);
var inst_49711 = (state_49727[(10)]);
var inst_49715 = inst_49713.call(null,inst_49711);
var state_49727__$1 = state_49727;
var statearr_49737_49755 = state_49727__$1;
(statearr_49737_49755[(2)] = inst_49715);

(statearr_49737_49755[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49728 === (5))){
var inst_49707 = (state_49727[(7)]);
var inst_49709 = figwheel.client.file_reloading.blocking_load.call(null,inst_49707);
var state_49727__$1 = state_49727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49727__$1,(8),inst_49709);
} else {
if((state_val_49728 === (10))){
var inst_49711 = (state_49727[(10)]);
var inst_49717 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_49711);
var state_49727__$1 = state_49727;
var statearr_49738_49756 = state_49727__$1;
(statearr_49738_49756[(2)] = inst_49717);

(statearr_49738_49756[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49728 === (8))){
var inst_49713 = (state_49727[(9)]);
var inst_49707 = (state_49727[(7)]);
var inst_49711 = (state_49727[(2)]);
var inst_49712 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_49713__$1 = cljs.core.get.call(null,inst_49712,inst_49707);
var state_49727__$1 = (function (){var statearr_49739 = state_49727;
(statearr_49739[(9)] = inst_49713__$1);

(statearr_49739[(10)] = inst_49711);

return statearr_49739;
})();
if(cljs.core.truth_(inst_49713__$1)){
var statearr_49740_49757 = state_49727__$1;
(statearr_49740_49757[(1)] = (9));

} else {
var statearr_49741_49758 = state_49727__$1;
(statearr_49741_49758[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__44900__auto__))
;
return ((function (switch__44788__auto__,c__44900__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__44789__auto__ = null;
var figwheel$client$file_reloading$state_machine__44789__auto____0 = (function (){
var statearr_49745 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49745[(0)] = figwheel$client$file_reloading$state_machine__44789__auto__);

(statearr_49745[(1)] = (1));

return statearr_49745;
});
var figwheel$client$file_reloading$state_machine__44789__auto____1 = (function (state_49727){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_49727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e49746){if((e49746 instanceof Object)){
var ex__44792__auto__ = e49746;
var statearr_49747_49759 = state_49727;
(statearr_49747_49759[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49760 = state_49727;
state_49727 = G__49760;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__44789__auto__ = function(state_49727){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__44789__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__44789__auto____1.call(this,state_49727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__44789__auto____0;
figwheel$client$file_reloading$state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__44789__auto____1;
return figwheel$client$file_reloading$state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto__))
})();
var state__44902__auto__ = (function (){var statearr_49748 = f__44901__auto__.call(null);
(statearr_49748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto__);

return statearr_49748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto__))
);

return c__44900__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__49761,callback){
var map__49764 = p__49761;
var map__49764__$1 = ((((!((map__49764 == null)))?((((map__49764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49764):map__49764);
var file_msg = map__49764__$1;
var namespace = cljs.core.get.call(null,map__49764__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__49764,map__49764__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__49764,map__49764__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__49766){
var map__49769 = p__49766;
var map__49769__$1 = ((((!((map__49769 == null)))?((((map__49769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49769):map__49769);
var file_msg = map__49769__$1;
var namespace = cljs.core.get.call(null,map__49769__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__49771){
var map__49774 = p__49771;
var map__49774__$1 = ((((!((map__49774 == null)))?((((map__49774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49774):map__49774);
var file_msg = map__49774__$1;
var namespace = cljs.core.get.call(null,map__49774__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__41059__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__41059__auto__){
var or__41071__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__41071__auto__)){
return or__41071__auto__;
} else {
var or__41071__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__41071__auto____$1)){
return or__41071__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__41059__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__49776,callback){
var map__49779 = p__49776;
var map__49779__$1 = ((((!((map__49779 == null)))?((((map__49779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49779):map__49779);
var file_msg = map__49779__$1;
var request_url = cljs.core.get.call(null,map__49779__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__49779__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__44900__auto___49883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto___49883,out){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto___49883,out){
return (function (state_49865){
var state_val_49866 = (state_49865[(1)]);
if((state_val_49866 === (1))){
var inst_49839 = cljs.core.seq.call(null,files);
var inst_49840 = cljs.core.first.call(null,inst_49839);
var inst_49841 = cljs.core.next.call(null,inst_49839);
var inst_49842 = files;
var state_49865__$1 = (function (){var statearr_49867 = state_49865;
(statearr_49867[(7)] = inst_49841);

(statearr_49867[(8)] = inst_49840);

(statearr_49867[(9)] = inst_49842);

return statearr_49867;
})();
var statearr_49868_49884 = state_49865__$1;
(statearr_49868_49884[(2)] = null);

(statearr_49868_49884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49866 === (2))){
var inst_49848 = (state_49865[(10)]);
var inst_49842 = (state_49865[(9)]);
var inst_49847 = cljs.core.seq.call(null,inst_49842);
var inst_49848__$1 = cljs.core.first.call(null,inst_49847);
var inst_49849 = cljs.core.next.call(null,inst_49847);
var inst_49850 = (inst_49848__$1 == null);
var inst_49851 = cljs.core.not.call(null,inst_49850);
var state_49865__$1 = (function (){var statearr_49869 = state_49865;
(statearr_49869[(10)] = inst_49848__$1);

(statearr_49869[(11)] = inst_49849);

return statearr_49869;
})();
if(inst_49851){
var statearr_49870_49885 = state_49865__$1;
(statearr_49870_49885[(1)] = (4));

} else {
var statearr_49871_49886 = state_49865__$1;
(statearr_49871_49886[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49866 === (3))){
var inst_49863 = (state_49865[(2)]);
var state_49865__$1 = state_49865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49865__$1,inst_49863);
} else {
if((state_val_49866 === (4))){
var inst_49848 = (state_49865[(10)]);
var inst_49853 = figwheel.client.file_reloading.reload_js_file.call(null,inst_49848);
var state_49865__$1 = state_49865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49865__$1,(7),inst_49853);
} else {
if((state_val_49866 === (5))){
var inst_49859 = cljs.core.async.close_BANG_.call(null,out);
var state_49865__$1 = state_49865;
var statearr_49872_49887 = state_49865__$1;
(statearr_49872_49887[(2)] = inst_49859);

(statearr_49872_49887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49866 === (6))){
var inst_49861 = (state_49865[(2)]);
var state_49865__$1 = state_49865;
var statearr_49873_49888 = state_49865__$1;
(statearr_49873_49888[(2)] = inst_49861);

(statearr_49873_49888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49866 === (7))){
var inst_49849 = (state_49865[(11)]);
var inst_49855 = (state_49865[(2)]);
var inst_49856 = cljs.core.async.put_BANG_.call(null,out,inst_49855);
var inst_49842 = inst_49849;
var state_49865__$1 = (function (){var statearr_49874 = state_49865;
(statearr_49874[(12)] = inst_49856);

(statearr_49874[(9)] = inst_49842);

return statearr_49874;
})();
var statearr_49875_49889 = state_49865__$1;
(statearr_49875_49889[(2)] = null);

(statearr_49875_49889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__44900__auto___49883,out))
;
return ((function (switch__44788__auto__,c__44900__auto___49883,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44789__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44789__auto____0 = (function (){
var statearr_49879 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49879[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44789__auto__);

(statearr_49879[(1)] = (1));

return statearr_49879;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44789__auto____1 = (function (state_49865){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_49865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e49880){if((e49880 instanceof Object)){
var ex__44792__auto__ = e49880;
var statearr_49881_49890 = state_49865;
(statearr_49881_49890[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49891 = state_49865;
state_49865 = G__49891;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44789__auto__ = function(state_49865){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44789__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44789__auto____1.call(this,state_49865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44789__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44789__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto___49883,out))
})();
var state__44902__auto__ = (function (){var statearr_49882 = f__44901__auto__.call(null);
(statearr_49882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto___49883);

return statearr_49882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto___49883,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__49892,opts){
var map__49896 = p__49892;
var map__49896__$1 = ((((!((map__49896 == null)))?((((map__49896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49896):map__49896);
var eval_body__$1 = cljs.core.get.call(null,map__49896__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__49896__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__41059__auto__ = eval_body__$1;
if(cljs.core.truth_(and__41059__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__41059__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e49898){var e = e49898;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__49899_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49899_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__49908){
var vec__49909 = p__49908;
var k = cljs.core.nth.call(null,vec__49909,(0),null);
var v = cljs.core.nth.call(null,vec__49909,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__49912){
var vec__49913 = p__49912;
var k = cljs.core.nth.call(null,vec__49913,(0),null);
var v = cljs.core.nth.call(null,vec__49913,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__49919,p__49920){
var map__50167 = p__49919;
var map__50167__$1 = ((((!((map__50167 == null)))?((((map__50167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50167):map__50167);
var opts = map__50167__$1;
var before_jsload = cljs.core.get.call(null,map__50167__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__50167__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__50167__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__50168 = p__49920;
var map__50168__$1 = ((((!((map__50168 == null)))?((((map__50168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50168):map__50168);
var msg = map__50168__$1;
var files = cljs.core.get.call(null,map__50168__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__50168__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__50168__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__44900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto__,map__50167,map__50167__$1,opts,before_jsload,on_jsload,reload_dependents,map__50168,map__50168__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto__,map__50167,map__50167__$1,opts,before_jsload,on_jsload,reload_dependents,map__50168,map__50168__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_50321){
var state_val_50322 = (state_50321[(1)]);
if((state_val_50322 === (7))){
var inst_50182 = (state_50321[(7)]);
var inst_50183 = (state_50321[(8)]);
var inst_50185 = (state_50321[(9)]);
var inst_50184 = (state_50321[(10)]);
var inst_50190 = cljs.core._nth.call(null,inst_50183,inst_50185);
var inst_50191 = figwheel.client.file_reloading.eval_body.call(null,inst_50190,opts);
var inst_50192 = (inst_50185 + (1));
var tmp50323 = inst_50182;
var tmp50324 = inst_50183;
var tmp50325 = inst_50184;
var inst_50182__$1 = tmp50323;
var inst_50183__$1 = tmp50324;
var inst_50184__$1 = tmp50325;
var inst_50185__$1 = inst_50192;
var state_50321__$1 = (function (){var statearr_50326 = state_50321;
(statearr_50326[(11)] = inst_50191);

(statearr_50326[(7)] = inst_50182__$1);

(statearr_50326[(8)] = inst_50183__$1);

(statearr_50326[(9)] = inst_50185__$1);

(statearr_50326[(10)] = inst_50184__$1);

return statearr_50326;
})();
var statearr_50327_50413 = state_50321__$1;
(statearr_50327_50413[(2)] = null);

(statearr_50327_50413[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (20))){
var inst_50225 = (state_50321[(12)]);
var inst_50233 = figwheel.client.file_reloading.sort_files.call(null,inst_50225);
var state_50321__$1 = state_50321;
var statearr_50328_50414 = state_50321__$1;
(statearr_50328_50414[(2)] = inst_50233);

(statearr_50328_50414[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (27))){
var state_50321__$1 = state_50321;
var statearr_50329_50415 = state_50321__$1;
(statearr_50329_50415[(2)] = null);

(statearr_50329_50415[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (1))){
var inst_50174 = (state_50321[(13)]);
var inst_50171 = before_jsload.call(null,files);
var inst_50172 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_50173 = (function (){return ((function (inst_50174,inst_50171,inst_50172,state_val_50322,c__44900__auto__,map__50167,map__50167__$1,opts,before_jsload,on_jsload,reload_dependents,map__50168,map__50168__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49916_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49916_SHARP_);
});
;})(inst_50174,inst_50171,inst_50172,state_val_50322,c__44900__auto__,map__50167,map__50167__$1,opts,before_jsload,on_jsload,reload_dependents,map__50168,map__50168__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50174__$1 = cljs.core.filter.call(null,inst_50173,files);
var inst_50175 = cljs.core.not_empty.call(null,inst_50174__$1);
var state_50321__$1 = (function (){var statearr_50330 = state_50321;
(statearr_50330[(14)] = inst_50172);

(statearr_50330[(15)] = inst_50171);

(statearr_50330[(13)] = inst_50174__$1);

return statearr_50330;
})();
if(cljs.core.truth_(inst_50175)){
var statearr_50331_50416 = state_50321__$1;
(statearr_50331_50416[(1)] = (2));

} else {
var statearr_50332_50417 = state_50321__$1;
(statearr_50332_50417[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (24))){
var state_50321__$1 = state_50321;
var statearr_50333_50418 = state_50321__$1;
(statearr_50333_50418[(2)] = null);

(statearr_50333_50418[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (39))){
var inst_50275 = (state_50321[(16)]);
var state_50321__$1 = state_50321;
var statearr_50334_50419 = state_50321__$1;
(statearr_50334_50419[(2)] = inst_50275);

(statearr_50334_50419[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (46))){
var inst_50316 = (state_50321[(2)]);
var state_50321__$1 = state_50321;
var statearr_50335_50420 = state_50321__$1;
(statearr_50335_50420[(2)] = inst_50316);

(statearr_50335_50420[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (4))){
var inst_50219 = (state_50321[(2)]);
var inst_50220 = cljs.core.List.EMPTY;
var inst_50221 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_50220);
var inst_50222 = (function (){return ((function (inst_50219,inst_50220,inst_50221,state_val_50322,c__44900__auto__,map__50167,map__50167__$1,opts,before_jsload,on_jsload,reload_dependents,map__50168,map__50168__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49917_SHARP_){
var and__41059__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49917_SHARP_);
if(cljs.core.truth_(and__41059__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49917_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__49917_SHARP_)));
} else {
return and__41059__auto__;
}
});
;})(inst_50219,inst_50220,inst_50221,state_val_50322,c__44900__auto__,map__50167,map__50167__$1,opts,before_jsload,on_jsload,reload_dependents,map__50168,map__50168__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50223 = cljs.core.filter.call(null,inst_50222,files);
var inst_50224 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_50225 = cljs.core.concat.call(null,inst_50223,inst_50224);
var state_50321__$1 = (function (){var statearr_50336 = state_50321;
(statearr_50336[(12)] = inst_50225);

(statearr_50336[(17)] = inst_50221);

(statearr_50336[(18)] = inst_50219);

return statearr_50336;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_50337_50421 = state_50321__$1;
(statearr_50337_50421[(1)] = (16));

} else {
var statearr_50338_50422 = state_50321__$1;
(statearr_50338_50422[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (15))){
var inst_50209 = (state_50321[(2)]);
var state_50321__$1 = state_50321;
var statearr_50339_50423 = state_50321__$1;
(statearr_50339_50423[(2)] = inst_50209);

(statearr_50339_50423[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (21))){
var inst_50235 = (state_50321[(19)]);
var inst_50235__$1 = (state_50321[(2)]);
var inst_50236 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_50235__$1);
var state_50321__$1 = (function (){var statearr_50340 = state_50321;
(statearr_50340[(19)] = inst_50235__$1);

return statearr_50340;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50321__$1,(22),inst_50236);
} else {
if((state_val_50322 === (31))){
var inst_50319 = (state_50321[(2)]);
var state_50321__$1 = state_50321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50321__$1,inst_50319);
} else {
if((state_val_50322 === (32))){
var inst_50275 = (state_50321[(16)]);
var inst_50280 = inst_50275.cljs$lang$protocol_mask$partition0$;
var inst_50281 = (inst_50280 & (64));
var inst_50282 = inst_50275.cljs$core$ISeq$;
var inst_50283 = (inst_50281) || (inst_50282);
var state_50321__$1 = state_50321;
if(cljs.core.truth_(inst_50283)){
var statearr_50341_50424 = state_50321__$1;
(statearr_50341_50424[(1)] = (35));

} else {
var statearr_50342_50425 = state_50321__$1;
(statearr_50342_50425[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (40))){
var inst_50296 = (state_50321[(20)]);
var inst_50295 = (state_50321[(2)]);
var inst_50296__$1 = cljs.core.get.call(null,inst_50295,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_50297 = cljs.core.get.call(null,inst_50295,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_50298 = cljs.core.not_empty.call(null,inst_50296__$1);
var state_50321__$1 = (function (){var statearr_50343 = state_50321;
(statearr_50343[(20)] = inst_50296__$1);

(statearr_50343[(21)] = inst_50297);

return statearr_50343;
})();
if(cljs.core.truth_(inst_50298)){
var statearr_50344_50426 = state_50321__$1;
(statearr_50344_50426[(1)] = (41));

} else {
var statearr_50345_50427 = state_50321__$1;
(statearr_50345_50427[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (33))){
var state_50321__$1 = state_50321;
var statearr_50346_50428 = state_50321__$1;
(statearr_50346_50428[(2)] = false);

(statearr_50346_50428[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (13))){
var inst_50195 = (state_50321[(22)]);
var inst_50199 = cljs.core.chunk_first.call(null,inst_50195);
var inst_50200 = cljs.core.chunk_rest.call(null,inst_50195);
var inst_50201 = cljs.core.count.call(null,inst_50199);
var inst_50182 = inst_50200;
var inst_50183 = inst_50199;
var inst_50184 = inst_50201;
var inst_50185 = (0);
var state_50321__$1 = (function (){var statearr_50347 = state_50321;
(statearr_50347[(7)] = inst_50182);

(statearr_50347[(8)] = inst_50183);

(statearr_50347[(9)] = inst_50185);

(statearr_50347[(10)] = inst_50184);

return statearr_50347;
})();
var statearr_50348_50429 = state_50321__$1;
(statearr_50348_50429[(2)] = null);

(statearr_50348_50429[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (22))){
var inst_50238 = (state_50321[(23)]);
var inst_50243 = (state_50321[(24)]);
var inst_50239 = (state_50321[(25)]);
var inst_50235 = (state_50321[(19)]);
var inst_50238__$1 = (state_50321[(2)]);
var inst_50239__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50238__$1);
var inst_50240 = (function (){var all_files = inst_50235;
var res_SINGLEQUOTE_ = inst_50238__$1;
var res = inst_50239__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_50238,inst_50243,inst_50239,inst_50235,inst_50238__$1,inst_50239__$1,state_val_50322,c__44900__auto__,map__50167,map__50167__$1,opts,before_jsload,on_jsload,reload_dependents,map__50168,map__50168__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49918_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__49918_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_50238,inst_50243,inst_50239,inst_50235,inst_50238__$1,inst_50239__$1,state_val_50322,c__44900__auto__,map__50167,map__50167__$1,opts,before_jsload,on_jsload,reload_dependents,map__50168,map__50168__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50241 = cljs.core.filter.call(null,inst_50240,inst_50238__$1);
var inst_50242 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_50243__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50242);
var inst_50244 = cljs.core.not_empty.call(null,inst_50243__$1);
var state_50321__$1 = (function (){var statearr_50349 = state_50321;
(statearr_50349[(23)] = inst_50238__$1);

(statearr_50349[(24)] = inst_50243__$1);

(statearr_50349[(26)] = inst_50241);

(statearr_50349[(25)] = inst_50239__$1);

return statearr_50349;
})();
if(cljs.core.truth_(inst_50244)){
var statearr_50350_50430 = state_50321__$1;
(statearr_50350_50430[(1)] = (23));

} else {
var statearr_50351_50431 = state_50321__$1;
(statearr_50351_50431[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (36))){
var state_50321__$1 = state_50321;
var statearr_50352_50432 = state_50321__$1;
(statearr_50352_50432[(2)] = false);

(statearr_50352_50432[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (41))){
var inst_50296 = (state_50321[(20)]);
var inst_50300 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_50301 = cljs.core.map.call(null,inst_50300,inst_50296);
var inst_50302 = cljs.core.pr_str.call(null,inst_50301);
var inst_50303 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_50302)].join('');
var inst_50304 = figwheel.client.utils.log.call(null,inst_50303);
var state_50321__$1 = state_50321;
var statearr_50353_50433 = state_50321__$1;
(statearr_50353_50433[(2)] = inst_50304);

(statearr_50353_50433[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (43))){
var inst_50297 = (state_50321[(21)]);
var inst_50307 = (state_50321[(2)]);
var inst_50308 = cljs.core.not_empty.call(null,inst_50297);
var state_50321__$1 = (function (){var statearr_50354 = state_50321;
(statearr_50354[(27)] = inst_50307);

return statearr_50354;
})();
if(cljs.core.truth_(inst_50308)){
var statearr_50355_50434 = state_50321__$1;
(statearr_50355_50434[(1)] = (44));

} else {
var statearr_50356_50435 = state_50321__$1;
(statearr_50356_50435[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (29))){
var inst_50275 = (state_50321[(16)]);
var inst_50238 = (state_50321[(23)]);
var inst_50243 = (state_50321[(24)]);
var inst_50241 = (state_50321[(26)]);
var inst_50239 = (state_50321[(25)]);
var inst_50235 = (state_50321[(19)]);
var inst_50271 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_50274 = (function (){var all_files = inst_50235;
var res_SINGLEQUOTE_ = inst_50238;
var res = inst_50239;
var files_not_loaded = inst_50241;
var dependencies_that_loaded = inst_50243;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50275,inst_50238,inst_50243,inst_50241,inst_50239,inst_50235,inst_50271,state_val_50322,c__44900__auto__,map__50167,map__50167__$1,opts,before_jsload,on_jsload,reload_dependents,map__50168,map__50168__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50273){
var map__50357 = p__50273;
var map__50357__$1 = ((((!((map__50357 == null)))?((((map__50357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50357):map__50357);
var namespace = cljs.core.get.call(null,map__50357__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50275,inst_50238,inst_50243,inst_50241,inst_50239,inst_50235,inst_50271,state_val_50322,c__44900__auto__,map__50167,map__50167__$1,opts,before_jsload,on_jsload,reload_dependents,map__50168,map__50168__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50275__$1 = cljs.core.group_by.call(null,inst_50274,inst_50241);
var inst_50277 = (inst_50275__$1 == null);
var inst_50278 = cljs.core.not.call(null,inst_50277);
var state_50321__$1 = (function (){var statearr_50359 = state_50321;
(statearr_50359[(16)] = inst_50275__$1);

(statearr_50359[(28)] = inst_50271);

return statearr_50359;
})();
if(inst_50278){
var statearr_50360_50436 = state_50321__$1;
(statearr_50360_50436[(1)] = (32));

} else {
var statearr_50361_50437 = state_50321__$1;
(statearr_50361_50437[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (44))){
var inst_50297 = (state_50321[(21)]);
var inst_50310 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50297);
var inst_50311 = cljs.core.pr_str.call(null,inst_50310);
var inst_50312 = [cljs.core.str("not required: "),cljs.core.str(inst_50311)].join('');
var inst_50313 = figwheel.client.utils.log.call(null,inst_50312);
var state_50321__$1 = state_50321;
var statearr_50362_50438 = state_50321__$1;
(statearr_50362_50438[(2)] = inst_50313);

(statearr_50362_50438[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (6))){
var inst_50216 = (state_50321[(2)]);
var state_50321__$1 = state_50321;
var statearr_50363_50439 = state_50321__$1;
(statearr_50363_50439[(2)] = inst_50216);

(statearr_50363_50439[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (28))){
var inst_50241 = (state_50321[(26)]);
var inst_50268 = (state_50321[(2)]);
var inst_50269 = cljs.core.not_empty.call(null,inst_50241);
var state_50321__$1 = (function (){var statearr_50364 = state_50321;
(statearr_50364[(29)] = inst_50268);

return statearr_50364;
})();
if(cljs.core.truth_(inst_50269)){
var statearr_50365_50440 = state_50321__$1;
(statearr_50365_50440[(1)] = (29));

} else {
var statearr_50366_50441 = state_50321__$1;
(statearr_50366_50441[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (25))){
var inst_50239 = (state_50321[(25)]);
var inst_50255 = (state_50321[(2)]);
var inst_50256 = cljs.core.not_empty.call(null,inst_50239);
var state_50321__$1 = (function (){var statearr_50367 = state_50321;
(statearr_50367[(30)] = inst_50255);

return statearr_50367;
})();
if(cljs.core.truth_(inst_50256)){
var statearr_50368_50442 = state_50321__$1;
(statearr_50368_50442[(1)] = (26));

} else {
var statearr_50369_50443 = state_50321__$1;
(statearr_50369_50443[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (34))){
var inst_50290 = (state_50321[(2)]);
var state_50321__$1 = state_50321;
if(cljs.core.truth_(inst_50290)){
var statearr_50370_50444 = state_50321__$1;
(statearr_50370_50444[(1)] = (38));

} else {
var statearr_50371_50445 = state_50321__$1;
(statearr_50371_50445[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (17))){
var state_50321__$1 = state_50321;
var statearr_50372_50446 = state_50321__$1;
(statearr_50372_50446[(2)] = recompile_dependents);

(statearr_50372_50446[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (3))){
var state_50321__$1 = state_50321;
var statearr_50373_50447 = state_50321__$1;
(statearr_50373_50447[(2)] = null);

(statearr_50373_50447[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (12))){
var inst_50212 = (state_50321[(2)]);
var state_50321__$1 = state_50321;
var statearr_50374_50448 = state_50321__$1;
(statearr_50374_50448[(2)] = inst_50212);

(statearr_50374_50448[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (2))){
var inst_50174 = (state_50321[(13)]);
var inst_50181 = cljs.core.seq.call(null,inst_50174);
var inst_50182 = inst_50181;
var inst_50183 = null;
var inst_50184 = (0);
var inst_50185 = (0);
var state_50321__$1 = (function (){var statearr_50375 = state_50321;
(statearr_50375[(7)] = inst_50182);

(statearr_50375[(8)] = inst_50183);

(statearr_50375[(9)] = inst_50185);

(statearr_50375[(10)] = inst_50184);

return statearr_50375;
})();
var statearr_50376_50449 = state_50321__$1;
(statearr_50376_50449[(2)] = null);

(statearr_50376_50449[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (23))){
var inst_50238 = (state_50321[(23)]);
var inst_50243 = (state_50321[(24)]);
var inst_50241 = (state_50321[(26)]);
var inst_50239 = (state_50321[(25)]);
var inst_50235 = (state_50321[(19)]);
var inst_50246 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_50248 = (function (){var all_files = inst_50235;
var res_SINGLEQUOTE_ = inst_50238;
var res = inst_50239;
var files_not_loaded = inst_50241;
var dependencies_that_loaded = inst_50243;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50238,inst_50243,inst_50241,inst_50239,inst_50235,inst_50246,state_val_50322,c__44900__auto__,map__50167,map__50167__$1,opts,before_jsload,on_jsload,reload_dependents,map__50168,map__50168__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50247){
var map__50377 = p__50247;
var map__50377__$1 = ((((!((map__50377 == null)))?((((map__50377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50377):map__50377);
var request_url = cljs.core.get.call(null,map__50377__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50238,inst_50243,inst_50241,inst_50239,inst_50235,inst_50246,state_val_50322,c__44900__auto__,map__50167,map__50167__$1,opts,before_jsload,on_jsload,reload_dependents,map__50168,map__50168__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50249 = cljs.core.reverse.call(null,inst_50243);
var inst_50250 = cljs.core.map.call(null,inst_50248,inst_50249);
var inst_50251 = cljs.core.pr_str.call(null,inst_50250);
var inst_50252 = figwheel.client.utils.log.call(null,inst_50251);
var state_50321__$1 = (function (){var statearr_50379 = state_50321;
(statearr_50379[(31)] = inst_50246);

return statearr_50379;
})();
var statearr_50380_50450 = state_50321__$1;
(statearr_50380_50450[(2)] = inst_50252);

(statearr_50380_50450[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (35))){
var state_50321__$1 = state_50321;
var statearr_50381_50451 = state_50321__$1;
(statearr_50381_50451[(2)] = true);

(statearr_50381_50451[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (19))){
var inst_50225 = (state_50321[(12)]);
var inst_50231 = figwheel.client.file_reloading.expand_files.call(null,inst_50225);
var state_50321__$1 = state_50321;
var statearr_50382_50452 = state_50321__$1;
(statearr_50382_50452[(2)] = inst_50231);

(statearr_50382_50452[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (11))){
var state_50321__$1 = state_50321;
var statearr_50383_50453 = state_50321__$1;
(statearr_50383_50453[(2)] = null);

(statearr_50383_50453[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (9))){
var inst_50214 = (state_50321[(2)]);
var state_50321__$1 = state_50321;
var statearr_50384_50454 = state_50321__$1;
(statearr_50384_50454[(2)] = inst_50214);

(statearr_50384_50454[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (5))){
var inst_50185 = (state_50321[(9)]);
var inst_50184 = (state_50321[(10)]);
var inst_50187 = (inst_50185 < inst_50184);
var inst_50188 = inst_50187;
var state_50321__$1 = state_50321;
if(cljs.core.truth_(inst_50188)){
var statearr_50385_50455 = state_50321__$1;
(statearr_50385_50455[(1)] = (7));

} else {
var statearr_50386_50456 = state_50321__$1;
(statearr_50386_50456[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (14))){
var inst_50195 = (state_50321[(22)]);
var inst_50204 = cljs.core.first.call(null,inst_50195);
var inst_50205 = figwheel.client.file_reloading.eval_body.call(null,inst_50204,opts);
var inst_50206 = cljs.core.next.call(null,inst_50195);
var inst_50182 = inst_50206;
var inst_50183 = null;
var inst_50184 = (0);
var inst_50185 = (0);
var state_50321__$1 = (function (){var statearr_50387 = state_50321;
(statearr_50387[(7)] = inst_50182);

(statearr_50387[(8)] = inst_50183);

(statearr_50387[(9)] = inst_50185);

(statearr_50387[(10)] = inst_50184);

(statearr_50387[(32)] = inst_50205);

return statearr_50387;
})();
var statearr_50388_50457 = state_50321__$1;
(statearr_50388_50457[(2)] = null);

(statearr_50388_50457[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (45))){
var state_50321__$1 = state_50321;
var statearr_50389_50458 = state_50321__$1;
(statearr_50389_50458[(2)] = null);

(statearr_50389_50458[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (26))){
var inst_50238 = (state_50321[(23)]);
var inst_50243 = (state_50321[(24)]);
var inst_50241 = (state_50321[(26)]);
var inst_50239 = (state_50321[(25)]);
var inst_50235 = (state_50321[(19)]);
var inst_50258 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_50260 = (function (){var all_files = inst_50235;
var res_SINGLEQUOTE_ = inst_50238;
var res = inst_50239;
var files_not_loaded = inst_50241;
var dependencies_that_loaded = inst_50243;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50238,inst_50243,inst_50241,inst_50239,inst_50235,inst_50258,state_val_50322,c__44900__auto__,map__50167,map__50167__$1,opts,before_jsload,on_jsload,reload_dependents,map__50168,map__50168__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50259){
var map__50390 = p__50259;
var map__50390__$1 = ((((!((map__50390 == null)))?((((map__50390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50390):map__50390);
var namespace = cljs.core.get.call(null,map__50390__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__50390__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50238,inst_50243,inst_50241,inst_50239,inst_50235,inst_50258,state_val_50322,c__44900__auto__,map__50167,map__50167__$1,opts,before_jsload,on_jsload,reload_dependents,map__50168,map__50168__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50261 = cljs.core.map.call(null,inst_50260,inst_50239);
var inst_50262 = cljs.core.pr_str.call(null,inst_50261);
var inst_50263 = figwheel.client.utils.log.call(null,inst_50262);
var inst_50264 = (function (){var all_files = inst_50235;
var res_SINGLEQUOTE_ = inst_50238;
var res = inst_50239;
var files_not_loaded = inst_50241;
var dependencies_that_loaded = inst_50243;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50238,inst_50243,inst_50241,inst_50239,inst_50235,inst_50258,inst_50260,inst_50261,inst_50262,inst_50263,state_val_50322,c__44900__auto__,map__50167,map__50167__$1,opts,before_jsload,on_jsload,reload_dependents,map__50168,map__50168__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50238,inst_50243,inst_50241,inst_50239,inst_50235,inst_50258,inst_50260,inst_50261,inst_50262,inst_50263,state_val_50322,c__44900__auto__,map__50167,map__50167__$1,opts,before_jsload,on_jsload,reload_dependents,map__50168,map__50168__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50265 = setTimeout(inst_50264,(10));
var state_50321__$1 = (function (){var statearr_50392 = state_50321;
(statearr_50392[(33)] = inst_50258);

(statearr_50392[(34)] = inst_50263);

return statearr_50392;
})();
var statearr_50393_50459 = state_50321__$1;
(statearr_50393_50459[(2)] = inst_50265);

(statearr_50393_50459[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (16))){
var state_50321__$1 = state_50321;
var statearr_50394_50460 = state_50321__$1;
(statearr_50394_50460[(2)] = reload_dependents);

(statearr_50394_50460[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (38))){
var inst_50275 = (state_50321[(16)]);
var inst_50292 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50275);
var state_50321__$1 = state_50321;
var statearr_50395_50461 = state_50321__$1;
(statearr_50395_50461[(2)] = inst_50292);

(statearr_50395_50461[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (30))){
var state_50321__$1 = state_50321;
var statearr_50396_50462 = state_50321__$1;
(statearr_50396_50462[(2)] = null);

(statearr_50396_50462[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (10))){
var inst_50195 = (state_50321[(22)]);
var inst_50197 = cljs.core.chunked_seq_QMARK_.call(null,inst_50195);
var state_50321__$1 = state_50321;
if(inst_50197){
var statearr_50397_50463 = state_50321__$1;
(statearr_50397_50463[(1)] = (13));

} else {
var statearr_50398_50464 = state_50321__$1;
(statearr_50398_50464[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (18))){
var inst_50229 = (state_50321[(2)]);
var state_50321__$1 = state_50321;
if(cljs.core.truth_(inst_50229)){
var statearr_50399_50465 = state_50321__$1;
(statearr_50399_50465[(1)] = (19));

} else {
var statearr_50400_50466 = state_50321__$1;
(statearr_50400_50466[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (42))){
var state_50321__$1 = state_50321;
var statearr_50401_50467 = state_50321__$1;
(statearr_50401_50467[(2)] = null);

(statearr_50401_50467[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (37))){
var inst_50287 = (state_50321[(2)]);
var state_50321__$1 = state_50321;
var statearr_50402_50468 = state_50321__$1;
(statearr_50402_50468[(2)] = inst_50287);

(statearr_50402_50468[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50322 === (8))){
var inst_50182 = (state_50321[(7)]);
var inst_50195 = (state_50321[(22)]);
var inst_50195__$1 = cljs.core.seq.call(null,inst_50182);
var state_50321__$1 = (function (){var statearr_50403 = state_50321;
(statearr_50403[(22)] = inst_50195__$1);

return statearr_50403;
})();
if(inst_50195__$1){
var statearr_50404_50469 = state_50321__$1;
(statearr_50404_50469[(1)] = (10));

} else {
var statearr_50405_50470 = state_50321__$1;
(statearr_50405_50470[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44900__auto__,map__50167,map__50167__$1,opts,before_jsload,on_jsload,reload_dependents,map__50168,map__50168__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__44788__auto__,c__44900__auto__,map__50167,map__50167__$1,opts,before_jsload,on_jsload,reload_dependents,map__50168,map__50168__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44789__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44789__auto____0 = (function (){
var statearr_50409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50409[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__44789__auto__);

(statearr_50409[(1)] = (1));

return statearr_50409;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44789__auto____1 = (function (state_50321){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_50321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e50410){if((e50410 instanceof Object)){
var ex__44792__auto__ = e50410;
var statearr_50411_50471 = state_50321;
(statearr_50411_50471[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50472 = state_50321;
state_50321 = G__50472;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__44789__auto__ = function(state_50321){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44789__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44789__auto____1.call(this,state_50321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44789__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44789__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto__,map__50167,map__50167__$1,opts,before_jsload,on_jsload,reload_dependents,map__50168,map__50168__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__44902__auto__ = (function (){var statearr_50412 = f__44901__auto__.call(null);
(statearr_50412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto__);

return statearr_50412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto__,map__50167,map__50167__$1,opts,before_jsload,on_jsload,reload_dependents,map__50168,map__50168__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__44900__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__50475,link){
var map__50478 = p__50475;
var map__50478__$1 = ((((!((map__50478 == null)))?((((map__50478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50478):map__50478);
var file = cljs.core.get.call(null,map__50478__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__50478,map__50478__$1,file){
return (function (p1__50473_SHARP_,p2__50474_SHARP_){
if(cljs.core._EQ_.call(null,p1__50473_SHARP_,p2__50474_SHARP_)){
return p1__50473_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__50478,map__50478__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__50484){
var map__50485 = p__50484;
var map__50485__$1 = ((((!((map__50485 == null)))?((((map__50485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50485):map__50485);
var match_length = cljs.core.get.call(null,map__50485__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__50485__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__50480_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__50480_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__50487_SHARP_,p2__50488_SHARP_){
return cljs.core.assoc.call(null,p1__50487_SHARP_,cljs.core.get.call(null,p2__50488_SHARP_,key),p2__50488_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_50489 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_50489);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_50489);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__50490,p__50491){
var map__50496 = p__50490;
var map__50496__$1 = ((((!((map__50496 == null)))?((((map__50496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50496):map__50496);
var on_cssload = cljs.core.get.call(null,map__50496__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__50497 = p__50491;
var map__50497__$1 = ((((!((map__50497 == null)))?((((map__50497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50497):map__50497);
var files_msg = map__50497__$1;
var files = cljs.core.get.call(null,map__50497__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1502937015559