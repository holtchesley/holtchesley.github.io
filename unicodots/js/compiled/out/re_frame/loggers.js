// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.loggers');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Holds the current set of logging functions.
 * By default, re-frame uses the functions provided by js/console.
 * Use `set-loggers!` to change these defaults
 *   
 */
re_frame.loggers.loggers = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),console.log.bind(console),new cljs.core.Keyword(null,"warn","warn",-436710552),console.warn.bind(console),new cljs.core.Keyword(null,"error","error",-978969032),console.error.bind(console),new cljs.core.Keyword(null,"group","group",582596132),(cljs.core.truth_(console.group)?console.group.bind(console):console.log.bind(console)),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(cljs.core.truth_(console.groupEnd)?console.groupEnd.bind(console):(function (){
return cljs.core.List.EMPTY;
}))], null));
re_frame.loggers.console = (function re_frame$loggers$console(var_args){
var args__42153__auto__ = [];
var len__42146__auto___42958 = arguments.length;
var i__42147__auto___42959 = (0);
while(true){
if((i__42147__auto___42959 < len__42146__auto___42958)){
args__42153__auto__.push((arguments[i__42147__auto___42959]));

var G__42960 = (i__42147__auto___42959 + (1));
i__42147__auto___42959 = G__42960;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((1) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((1)),(0),null)):null);
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42154__auto__);
});

re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic = (function (level,args){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,re_frame.loggers.loggers),level)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("re-frame: log called with unknown level: "),cljs.core.str(level)].join('')),cljs.core.str("\n"),cljs.core.str("(contains? (clojure.core/deref loggers) level)")].join('')));
}

return cljs.core.apply.call(null,level.call(null,cljs.core.deref.call(null,re_frame.loggers.loggers)),args);
});

re_frame.loggers.console.cljs$lang$maxFixedArity = (1);

re_frame.loggers.console.cljs$lang$applyTo = (function (seq42956){
var G__42957 = cljs.core.first.call(null,seq42956);
var seq42956__$1 = cljs.core.next.call(null,seq42956);
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(G__42957,seq42956__$1);
});

/**
 * Change the set (or a subset) of logging functions used by re-frame.
 *   `new-loggers` should be a map with the same keys as `loggers` (above)
 */
re_frame.loggers.set_loggers_BANG_ = (function re_frame$loggers$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_loggers)),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,re_frame.loggers.loggers)))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str("(empty? (difference (set (keys new-loggers)) (-> (clojure.core/deref loggers) keys set)))")].join('')));
}

return cljs.core.swap_BANG_.call(null,re_frame.loggers.loggers,cljs.core.merge,new_loggers);
});
/**
 * Get the current logging functions used by re-frame.
 */
re_frame.loggers.get_loggers = (function re_frame$loggers$get_loggers(){
return cljs.core.deref.call(null,re_frame.loggers.loggers);
});

//# sourceMappingURL=loggers.js.map?rel=1502937004989