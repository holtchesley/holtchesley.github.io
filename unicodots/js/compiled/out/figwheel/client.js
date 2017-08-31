// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args52238 = [];
var len__42146__auto___52241 = arguments.length;
var i__42147__auto___52242 = (0);
while(true){
if((i__42147__auto___52242 < len__42146__auto___52241)){
args52238.push((arguments[i__42147__auto___52242]));

var G__52243 = (i__42147__auto___52242 + (1));
i__42147__auto___52242 = G__52243;
continue;
} else {
}
break;
}

var G__52240 = args52238.length;
switch (G__52240) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52238.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__42153__auto__ = [];
var len__42146__auto___52246 = arguments.length;
var i__42147__auto___52247 = (0);
while(true){
if((i__42147__auto___52247 < len__42146__auto___52246)){
args__42153__auto__.push((arguments[i__42147__auto___52247]));

var G__52248 = (i__42147__auto___52247 + (1));
i__42147__auto___52247 = G__52248;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq52245){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52245));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__42153__auto__ = [];
var len__42146__auto___52250 = arguments.length;
var i__42147__auto___52251 = (0);
while(true){
if((i__42147__auto___52251 < len__42146__auto___52250)){
args__42153__auto__.push((arguments[i__42147__auto___52251]));

var G__52252 = (i__42147__auto___52251 + (1));
i__42147__auto___52251 = G__52252;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq52249){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52249));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__52253){
var map__52256 = p__52253;
var map__52256__$1 = ((((!((map__52256 == null)))?((((map__52256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52256):map__52256);
var message = cljs.core.get.call(null,map__52256__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__52256__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__41071__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__41071__auto__)){
return or__41071__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__41059__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__41059__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__41059__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__44900__auto___52418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto___52418,ch){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto___52418,ch){
return (function (state_52387){
var state_val_52388 = (state_52387[(1)]);
if((state_val_52388 === (7))){
var inst_52383 = (state_52387[(2)]);
var state_52387__$1 = state_52387;
var statearr_52389_52419 = state_52387__$1;
(statearr_52389_52419[(2)] = inst_52383);

(statearr_52389_52419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52388 === (1))){
var state_52387__$1 = state_52387;
var statearr_52390_52420 = state_52387__$1;
(statearr_52390_52420[(2)] = null);

(statearr_52390_52420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52388 === (4))){
var inst_52340 = (state_52387[(7)]);
var inst_52340__$1 = (state_52387[(2)]);
var state_52387__$1 = (function (){var statearr_52391 = state_52387;
(statearr_52391[(7)] = inst_52340__$1);

return statearr_52391;
})();
if(cljs.core.truth_(inst_52340__$1)){
var statearr_52392_52421 = state_52387__$1;
(statearr_52392_52421[(1)] = (5));

} else {
var statearr_52393_52422 = state_52387__$1;
(statearr_52393_52422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52388 === (15))){
var inst_52347 = (state_52387[(8)]);
var inst_52362 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_52347);
var inst_52363 = cljs.core.first.call(null,inst_52362);
var inst_52364 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_52363);
var inst_52365 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_52364)].join('');
var inst_52366 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_52365);
var state_52387__$1 = state_52387;
var statearr_52394_52423 = state_52387__$1;
(statearr_52394_52423[(2)] = inst_52366);

(statearr_52394_52423[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52388 === (13))){
var inst_52371 = (state_52387[(2)]);
var state_52387__$1 = state_52387;
var statearr_52395_52424 = state_52387__$1;
(statearr_52395_52424[(2)] = inst_52371);

(statearr_52395_52424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52388 === (6))){
var state_52387__$1 = state_52387;
var statearr_52396_52425 = state_52387__$1;
(statearr_52396_52425[(2)] = null);

(statearr_52396_52425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52388 === (17))){
var inst_52369 = (state_52387[(2)]);
var state_52387__$1 = state_52387;
var statearr_52397_52426 = state_52387__$1;
(statearr_52397_52426[(2)] = inst_52369);

(statearr_52397_52426[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52388 === (3))){
var inst_52385 = (state_52387[(2)]);
var state_52387__$1 = state_52387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52387__$1,inst_52385);
} else {
if((state_val_52388 === (12))){
var inst_52346 = (state_52387[(9)]);
var inst_52360 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_52346,opts);
var state_52387__$1 = state_52387;
if(cljs.core.truth_(inst_52360)){
var statearr_52398_52427 = state_52387__$1;
(statearr_52398_52427[(1)] = (15));

} else {
var statearr_52399_52428 = state_52387__$1;
(statearr_52399_52428[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52388 === (2))){
var state_52387__$1 = state_52387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52387__$1,(4),ch);
} else {
if((state_val_52388 === (11))){
var inst_52347 = (state_52387[(8)]);
var inst_52352 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52353 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_52347);
var inst_52354 = cljs.core.async.timeout.call(null,(1000));
var inst_52355 = [inst_52353,inst_52354];
var inst_52356 = (new cljs.core.PersistentVector(null,2,(5),inst_52352,inst_52355,null));
var state_52387__$1 = state_52387;
return cljs.core.async.ioc_alts_BANG_.call(null,state_52387__$1,(14),inst_52356);
} else {
if((state_val_52388 === (9))){
var inst_52347 = (state_52387[(8)]);
var inst_52373 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_52374 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_52347);
var inst_52375 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_52374);
var inst_52376 = [cljs.core.str("Not loading: "),cljs.core.str(inst_52375)].join('');
var inst_52377 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_52376);
var state_52387__$1 = (function (){var statearr_52400 = state_52387;
(statearr_52400[(10)] = inst_52373);

return statearr_52400;
})();
var statearr_52401_52429 = state_52387__$1;
(statearr_52401_52429[(2)] = inst_52377);

(statearr_52401_52429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52388 === (5))){
var inst_52340 = (state_52387[(7)]);
var inst_52342 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_52343 = (new cljs.core.PersistentArrayMap(null,2,inst_52342,null));
var inst_52344 = (new cljs.core.PersistentHashSet(null,inst_52343,null));
var inst_52345 = figwheel.client.focus_msgs.call(null,inst_52344,inst_52340);
var inst_52346 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_52345);
var inst_52347 = cljs.core.first.call(null,inst_52345);
var inst_52348 = figwheel.client.autoload_QMARK_.call(null);
var state_52387__$1 = (function (){var statearr_52402 = state_52387;
(statearr_52402[(8)] = inst_52347);

(statearr_52402[(9)] = inst_52346);

return statearr_52402;
})();
if(cljs.core.truth_(inst_52348)){
var statearr_52403_52430 = state_52387__$1;
(statearr_52403_52430[(1)] = (8));

} else {
var statearr_52404_52431 = state_52387__$1;
(statearr_52404_52431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52388 === (14))){
var inst_52358 = (state_52387[(2)]);
var state_52387__$1 = state_52387;
var statearr_52405_52432 = state_52387__$1;
(statearr_52405_52432[(2)] = inst_52358);

(statearr_52405_52432[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52388 === (16))){
var state_52387__$1 = state_52387;
var statearr_52406_52433 = state_52387__$1;
(statearr_52406_52433[(2)] = null);

(statearr_52406_52433[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52388 === (10))){
var inst_52379 = (state_52387[(2)]);
var state_52387__$1 = (function (){var statearr_52407 = state_52387;
(statearr_52407[(11)] = inst_52379);

return statearr_52407;
})();
var statearr_52408_52434 = state_52387__$1;
(statearr_52408_52434[(2)] = null);

(statearr_52408_52434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52388 === (8))){
var inst_52346 = (state_52387[(9)]);
var inst_52350 = figwheel.client.reload_file_state_QMARK_.call(null,inst_52346,opts);
var state_52387__$1 = state_52387;
if(cljs.core.truth_(inst_52350)){
var statearr_52409_52435 = state_52387__$1;
(statearr_52409_52435[(1)] = (11));

} else {
var statearr_52410_52436 = state_52387__$1;
(statearr_52410_52436[(1)] = (12));

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
});})(c__44900__auto___52418,ch))
;
return ((function (switch__44788__auto__,c__44900__auto___52418,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__44789__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__44789__auto____0 = (function (){
var statearr_52414 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52414[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__44789__auto__);

(statearr_52414[(1)] = (1));

return statearr_52414;
});
var figwheel$client$file_reloader_plugin_$_state_machine__44789__auto____1 = (function (state_52387){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_52387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e52415){if((e52415 instanceof Object)){
var ex__44792__auto__ = e52415;
var statearr_52416_52437 = state_52387;
(statearr_52416_52437[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52438 = state_52387;
state_52387 = G__52438;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__44789__auto__ = function(state_52387){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__44789__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__44789__auto____1.call(this,state_52387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__44789__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__44789__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto___52418,ch))
})();
var state__44902__auto__ = (function (){var statearr_52417 = f__44901__auto__.call(null);
(statearr_52417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto___52418);

return statearr_52417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto___52418,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__52439_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__52439_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_52442 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_52442){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e52441){if((e52441 instanceof Error)){
var e = e52441;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_52442], null));
} else {
var e = e52441;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_52442))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__52443){
var map__52452 = p__52443;
var map__52452__$1 = ((((!((map__52452 == null)))?((((map__52452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52452):map__52452);
var opts = map__52452__$1;
var build_id = cljs.core.get.call(null,map__52452__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__52452,map__52452__$1,opts,build_id){
return (function (p__52454){
var vec__52455 = p__52454;
var seq__52456 = cljs.core.seq.call(null,vec__52455);
var first__52457 = cljs.core.first.call(null,seq__52456);
var seq__52456__$1 = cljs.core.next.call(null,seq__52456);
var map__52458 = first__52457;
var map__52458__$1 = ((((!((map__52458 == null)))?((((map__52458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52458):map__52458);
var msg = map__52458__$1;
var msg_name = cljs.core.get.call(null,map__52458__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__52456__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__52455,seq__52456,first__52457,seq__52456__$1,map__52458,map__52458__$1,msg,msg_name,_,map__52452,map__52452__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__52455,seq__52456,first__52457,seq__52456__$1,map__52458,map__52458__$1,msg,msg_name,_,map__52452,map__52452__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__52452,map__52452__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__52466){
var vec__52467 = p__52466;
var seq__52468 = cljs.core.seq.call(null,vec__52467);
var first__52469 = cljs.core.first.call(null,seq__52468);
var seq__52468__$1 = cljs.core.next.call(null,seq__52468);
var map__52470 = first__52469;
var map__52470__$1 = ((((!((map__52470 == null)))?((((map__52470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52470):map__52470);
var msg = map__52470__$1;
var msg_name = cljs.core.get.call(null,map__52470__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__52468__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__52472){
var map__52484 = p__52472;
var map__52484__$1 = ((((!((map__52484 == null)))?((((map__52484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52484):map__52484);
var on_compile_warning = cljs.core.get.call(null,map__52484__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__52484__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__52484,map__52484__$1,on_compile_warning,on_compile_fail){
return (function (p__52486){
var vec__52487 = p__52486;
var seq__52488 = cljs.core.seq.call(null,vec__52487);
var first__52489 = cljs.core.first.call(null,seq__52488);
var seq__52488__$1 = cljs.core.next.call(null,seq__52488);
var map__52490 = first__52489;
var map__52490__$1 = ((((!((map__52490 == null)))?((((map__52490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52490):map__52490);
var msg = map__52490__$1;
var msg_name = cljs.core.get.call(null,map__52490__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__52488__$1;
var pred__52492 = cljs.core._EQ_;
var expr__52493 = msg_name;
if(cljs.core.truth_(pred__52492.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__52493))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__52492.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__52493))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__52484,map__52484__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__44900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto__,msg_hist,msg_names,msg){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto__,msg_hist,msg_names,msg){
return (function (state_52721){
var state_val_52722 = (state_52721[(1)]);
if((state_val_52722 === (7))){
var inst_52641 = (state_52721[(2)]);
var state_52721__$1 = state_52721;
if(cljs.core.truth_(inst_52641)){
var statearr_52723_52773 = state_52721__$1;
(statearr_52723_52773[(1)] = (8));

} else {
var statearr_52724_52774 = state_52721__$1;
(statearr_52724_52774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (20))){
var inst_52715 = (state_52721[(2)]);
var state_52721__$1 = state_52721;
var statearr_52725_52775 = state_52721__$1;
(statearr_52725_52775[(2)] = inst_52715);

(statearr_52725_52775[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (27))){
var inst_52711 = (state_52721[(2)]);
var state_52721__$1 = state_52721;
var statearr_52726_52776 = state_52721__$1;
(statearr_52726_52776[(2)] = inst_52711);

(statearr_52726_52776[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (1))){
var inst_52634 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_52721__$1 = state_52721;
if(cljs.core.truth_(inst_52634)){
var statearr_52727_52777 = state_52721__$1;
(statearr_52727_52777[(1)] = (2));

} else {
var statearr_52728_52778 = state_52721__$1;
(statearr_52728_52778[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (24))){
var inst_52713 = (state_52721[(2)]);
var state_52721__$1 = state_52721;
var statearr_52729_52779 = state_52721__$1;
(statearr_52729_52779[(2)] = inst_52713);

(statearr_52729_52779[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (4))){
var inst_52719 = (state_52721[(2)]);
var state_52721__$1 = state_52721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52721__$1,inst_52719);
} else {
if((state_val_52722 === (15))){
var inst_52717 = (state_52721[(2)]);
var state_52721__$1 = state_52721;
var statearr_52730_52780 = state_52721__$1;
(statearr_52730_52780[(2)] = inst_52717);

(statearr_52730_52780[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (21))){
var inst_52670 = (state_52721[(2)]);
var inst_52671 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52672 = figwheel.client.auto_jump_to_error.call(null,opts,inst_52671);
var state_52721__$1 = (function (){var statearr_52731 = state_52721;
(statearr_52731[(7)] = inst_52670);

return statearr_52731;
})();
var statearr_52732_52781 = state_52721__$1;
(statearr_52732_52781[(2)] = inst_52672);

(statearr_52732_52781[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (31))){
var inst_52700 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_52721__$1 = state_52721;
if(cljs.core.truth_(inst_52700)){
var statearr_52733_52782 = state_52721__$1;
(statearr_52733_52782[(1)] = (34));

} else {
var statearr_52734_52783 = state_52721__$1;
(statearr_52734_52783[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (32))){
var inst_52709 = (state_52721[(2)]);
var state_52721__$1 = state_52721;
var statearr_52735_52784 = state_52721__$1;
(statearr_52735_52784[(2)] = inst_52709);

(statearr_52735_52784[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (33))){
var inst_52696 = (state_52721[(2)]);
var inst_52697 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52698 = figwheel.client.auto_jump_to_error.call(null,opts,inst_52697);
var state_52721__$1 = (function (){var statearr_52736 = state_52721;
(statearr_52736[(8)] = inst_52696);

return statearr_52736;
})();
var statearr_52737_52785 = state_52721__$1;
(statearr_52737_52785[(2)] = inst_52698);

(statearr_52737_52785[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (13))){
var inst_52655 = figwheel.client.heads_up.clear.call(null);
var state_52721__$1 = state_52721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52721__$1,(16),inst_52655);
} else {
if((state_val_52722 === (22))){
var inst_52676 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52677 = figwheel.client.heads_up.append_warning_message.call(null,inst_52676);
var state_52721__$1 = state_52721;
var statearr_52738_52786 = state_52721__$1;
(statearr_52738_52786[(2)] = inst_52677);

(statearr_52738_52786[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (36))){
var inst_52707 = (state_52721[(2)]);
var state_52721__$1 = state_52721;
var statearr_52739_52787 = state_52721__$1;
(statearr_52739_52787[(2)] = inst_52707);

(statearr_52739_52787[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (29))){
var inst_52687 = (state_52721[(2)]);
var inst_52688 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52689 = figwheel.client.auto_jump_to_error.call(null,opts,inst_52688);
var state_52721__$1 = (function (){var statearr_52740 = state_52721;
(statearr_52740[(9)] = inst_52687);

return statearr_52740;
})();
var statearr_52741_52788 = state_52721__$1;
(statearr_52741_52788[(2)] = inst_52689);

(statearr_52741_52788[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (6))){
var inst_52636 = (state_52721[(10)]);
var state_52721__$1 = state_52721;
var statearr_52742_52789 = state_52721__$1;
(statearr_52742_52789[(2)] = inst_52636);

(statearr_52742_52789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (28))){
var inst_52683 = (state_52721[(2)]);
var inst_52684 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52685 = figwheel.client.heads_up.display_warning.call(null,inst_52684);
var state_52721__$1 = (function (){var statearr_52743 = state_52721;
(statearr_52743[(11)] = inst_52683);

return statearr_52743;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52721__$1,(29),inst_52685);
} else {
if((state_val_52722 === (25))){
var inst_52681 = figwheel.client.heads_up.clear.call(null);
var state_52721__$1 = state_52721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52721__$1,(28),inst_52681);
} else {
if((state_val_52722 === (34))){
var inst_52702 = figwheel.client.heads_up.flash_loaded.call(null);
var state_52721__$1 = state_52721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52721__$1,(37),inst_52702);
} else {
if((state_val_52722 === (17))){
var inst_52661 = (state_52721[(2)]);
var inst_52662 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52663 = figwheel.client.auto_jump_to_error.call(null,opts,inst_52662);
var state_52721__$1 = (function (){var statearr_52744 = state_52721;
(statearr_52744[(12)] = inst_52661);

return statearr_52744;
})();
var statearr_52745_52790 = state_52721__$1;
(statearr_52745_52790[(2)] = inst_52663);

(statearr_52745_52790[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (3))){
var inst_52653 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_52721__$1 = state_52721;
if(cljs.core.truth_(inst_52653)){
var statearr_52746_52791 = state_52721__$1;
(statearr_52746_52791[(1)] = (13));

} else {
var statearr_52747_52792 = state_52721__$1;
(statearr_52747_52792[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (12))){
var inst_52649 = (state_52721[(2)]);
var state_52721__$1 = state_52721;
var statearr_52748_52793 = state_52721__$1;
(statearr_52748_52793[(2)] = inst_52649);

(statearr_52748_52793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (2))){
var inst_52636 = (state_52721[(10)]);
var inst_52636__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_52721__$1 = (function (){var statearr_52749 = state_52721;
(statearr_52749[(10)] = inst_52636__$1);

return statearr_52749;
})();
if(cljs.core.truth_(inst_52636__$1)){
var statearr_52750_52794 = state_52721__$1;
(statearr_52750_52794[(1)] = (5));

} else {
var statearr_52751_52795 = state_52721__$1;
(statearr_52751_52795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (23))){
var inst_52679 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_52721__$1 = state_52721;
if(cljs.core.truth_(inst_52679)){
var statearr_52752_52796 = state_52721__$1;
(statearr_52752_52796[(1)] = (25));

} else {
var statearr_52753_52797 = state_52721__$1;
(statearr_52753_52797[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (35))){
var state_52721__$1 = state_52721;
var statearr_52754_52798 = state_52721__$1;
(statearr_52754_52798[(2)] = null);

(statearr_52754_52798[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (19))){
var inst_52674 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_52721__$1 = state_52721;
if(cljs.core.truth_(inst_52674)){
var statearr_52755_52799 = state_52721__$1;
(statearr_52755_52799[(1)] = (22));

} else {
var statearr_52756_52800 = state_52721__$1;
(statearr_52756_52800[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (11))){
var inst_52645 = (state_52721[(2)]);
var state_52721__$1 = state_52721;
var statearr_52757_52801 = state_52721__$1;
(statearr_52757_52801[(2)] = inst_52645);

(statearr_52757_52801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (9))){
var inst_52647 = figwheel.client.heads_up.clear.call(null);
var state_52721__$1 = state_52721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52721__$1,(12),inst_52647);
} else {
if((state_val_52722 === (5))){
var inst_52638 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_52721__$1 = state_52721;
var statearr_52758_52802 = state_52721__$1;
(statearr_52758_52802[(2)] = inst_52638);

(statearr_52758_52802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (14))){
var inst_52665 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_52721__$1 = state_52721;
if(cljs.core.truth_(inst_52665)){
var statearr_52759_52803 = state_52721__$1;
(statearr_52759_52803[(1)] = (18));

} else {
var statearr_52760_52804 = state_52721__$1;
(statearr_52760_52804[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (26))){
var inst_52691 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_52721__$1 = state_52721;
if(cljs.core.truth_(inst_52691)){
var statearr_52761_52805 = state_52721__$1;
(statearr_52761_52805[(1)] = (30));

} else {
var statearr_52762_52806 = state_52721__$1;
(statearr_52762_52806[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (16))){
var inst_52657 = (state_52721[(2)]);
var inst_52658 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52659 = figwheel.client.heads_up.display_exception.call(null,inst_52658);
var state_52721__$1 = (function (){var statearr_52763 = state_52721;
(statearr_52763[(13)] = inst_52657);

return statearr_52763;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52721__$1,(17),inst_52659);
} else {
if((state_val_52722 === (30))){
var inst_52693 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52694 = figwheel.client.heads_up.display_warning.call(null,inst_52693);
var state_52721__$1 = state_52721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52721__$1,(33),inst_52694);
} else {
if((state_val_52722 === (10))){
var inst_52651 = (state_52721[(2)]);
var state_52721__$1 = state_52721;
var statearr_52764_52807 = state_52721__$1;
(statearr_52764_52807[(2)] = inst_52651);

(statearr_52764_52807[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (18))){
var inst_52667 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_52668 = figwheel.client.heads_up.display_exception.call(null,inst_52667);
var state_52721__$1 = state_52721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52721__$1,(21),inst_52668);
} else {
if((state_val_52722 === (37))){
var inst_52704 = (state_52721[(2)]);
var state_52721__$1 = state_52721;
var statearr_52765_52808 = state_52721__$1;
(statearr_52765_52808[(2)] = inst_52704);

(statearr_52765_52808[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52722 === (8))){
var inst_52643 = figwheel.client.heads_up.flash_loaded.call(null);
var state_52721__$1 = state_52721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52721__$1,(11),inst_52643);
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
});})(c__44900__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__44788__auto__,c__44900__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44789__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44789__auto____0 = (function (){
var statearr_52769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52769[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44789__auto__);

(statearr_52769[(1)] = (1));

return statearr_52769;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44789__auto____1 = (function (state_52721){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_52721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e52770){if((e52770 instanceof Object)){
var ex__44792__auto__ = e52770;
var statearr_52771_52809 = state_52721;
(statearr_52771_52809[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52810 = state_52721;
state_52721 = G__52810;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44789__auto__ = function(state_52721){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44789__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44789__auto____1.call(this,state_52721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44789__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44789__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto__,msg_hist,msg_names,msg))
})();
var state__44902__auto__ = (function (){var statearr_52772 = f__44901__auto__.call(null);
(statearr_52772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto__);

return statearr_52772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto__,msg_hist,msg_names,msg))
);

return c__44900__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__44900__auto___52873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto___52873,ch){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto___52873,ch){
return (function (state_52856){
var state_val_52857 = (state_52856[(1)]);
if((state_val_52857 === (1))){
var state_52856__$1 = state_52856;
var statearr_52858_52874 = state_52856__$1;
(statearr_52858_52874[(2)] = null);

(statearr_52858_52874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52857 === (2))){
var state_52856__$1 = state_52856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52856__$1,(4),ch);
} else {
if((state_val_52857 === (3))){
var inst_52854 = (state_52856[(2)]);
var state_52856__$1 = state_52856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52856__$1,inst_52854);
} else {
if((state_val_52857 === (4))){
var inst_52844 = (state_52856[(7)]);
var inst_52844__$1 = (state_52856[(2)]);
var state_52856__$1 = (function (){var statearr_52859 = state_52856;
(statearr_52859[(7)] = inst_52844__$1);

return statearr_52859;
})();
if(cljs.core.truth_(inst_52844__$1)){
var statearr_52860_52875 = state_52856__$1;
(statearr_52860_52875[(1)] = (5));

} else {
var statearr_52861_52876 = state_52856__$1;
(statearr_52861_52876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52857 === (5))){
var inst_52844 = (state_52856[(7)]);
var inst_52846 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_52844);
var state_52856__$1 = state_52856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52856__$1,(8),inst_52846);
} else {
if((state_val_52857 === (6))){
var state_52856__$1 = state_52856;
var statearr_52862_52877 = state_52856__$1;
(statearr_52862_52877[(2)] = null);

(statearr_52862_52877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52857 === (7))){
var inst_52852 = (state_52856[(2)]);
var state_52856__$1 = state_52856;
var statearr_52863_52878 = state_52856__$1;
(statearr_52863_52878[(2)] = inst_52852);

(statearr_52863_52878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52857 === (8))){
var inst_52848 = (state_52856[(2)]);
var state_52856__$1 = (function (){var statearr_52864 = state_52856;
(statearr_52864[(8)] = inst_52848);

return statearr_52864;
})();
var statearr_52865_52879 = state_52856__$1;
(statearr_52865_52879[(2)] = null);

(statearr_52865_52879[(1)] = (2));


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
});})(c__44900__auto___52873,ch))
;
return ((function (switch__44788__auto__,c__44900__auto___52873,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__44789__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__44789__auto____0 = (function (){
var statearr_52869 = [null,null,null,null,null,null,null,null,null];
(statearr_52869[(0)] = figwheel$client$heads_up_plugin_$_state_machine__44789__auto__);

(statearr_52869[(1)] = (1));

return statearr_52869;
});
var figwheel$client$heads_up_plugin_$_state_machine__44789__auto____1 = (function (state_52856){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_52856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e52870){if((e52870 instanceof Object)){
var ex__44792__auto__ = e52870;
var statearr_52871_52880 = state_52856;
(statearr_52871_52880[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52881 = state_52856;
state_52856 = G__52881;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__44789__auto__ = function(state_52856){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__44789__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__44789__auto____1.call(this,state_52856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__44789__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__44789__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto___52873,ch))
})();
var state__44902__auto__ = (function (){var statearr_52872 = f__44901__auto__.call(null);
(statearr_52872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto___52873);

return statearr_52872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto___52873,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__44900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto__){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto__){
return (function (state_52902){
var state_val_52903 = (state_52902[(1)]);
if((state_val_52903 === (1))){
var inst_52897 = cljs.core.async.timeout.call(null,(3000));
var state_52902__$1 = state_52902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52902__$1,(2),inst_52897);
} else {
if((state_val_52903 === (2))){
var inst_52899 = (state_52902[(2)]);
var inst_52900 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_52902__$1 = (function (){var statearr_52904 = state_52902;
(statearr_52904[(7)] = inst_52899);

return statearr_52904;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52902__$1,inst_52900);
} else {
return null;
}
}
});})(c__44900__auto__))
;
return ((function (switch__44788__auto__,c__44900__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__44789__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__44789__auto____0 = (function (){
var statearr_52908 = [null,null,null,null,null,null,null,null];
(statearr_52908[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__44789__auto__);

(statearr_52908[(1)] = (1));

return statearr_52908;
});
var figwheel$client$enforce_project_plugin_$_state_machine__44789__auto____1 = (function (state_52902){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_52902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e52909){if((e52909 instanceof Object)){
var ex__44792__auto__ = e52909;
var statearr_52910_52912 = state_52902;
(statearr_52910_52912[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52913 = state_52902;
state_52902 = G__52913;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__44789__auto__ = function(state_52902){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__44789__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__44789__auto____1.call(this,state_52902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__44789__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__44789__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto__))
})();
var state__44902__auto__ = (function (){var statearr_52911 = f__44901__auto__.call(null);
(statearr_52911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto__);

return statearr_52911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto__))
);

return c__44900__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__44900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto__,figwheel_version,temp__4657__auto__){
return (function (state_52936){
var state_val_52937 = (state_52936[(1)]);
if((state_val_52937 === (1))){
var inst_52930 = cljs.core.async.timeout.call(null,(2000));
var state_52936__$1 = state_52936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52936__$1,(2),inst_52930);
} else {
if((state_val_52937 === (2))){
var inst_52932 = (state_52936[(2)]);
var inst_52933 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_52934 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_52933);
var state_52936__$1 = (function (){var statearr_52938 = state_52936;
(statearr_52938[(7)] = inst_52932);

return statearr_52938;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52936__$1,inst_52934);
} else {
return null;
}
}
});})(c__44900__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__44788__auto__,c__44900__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44789__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44789__auto____0 = (function (){
var statearr_52942 = [null,null,null,null,null,null,null,null];
(statearr_52942[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44789__auto__);

(statearr_52942[(1)] = (1));

return statearr_52942;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44789__auto____1 = (function (state_52936){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_52936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e52943){if((e52943 instanceof Object)){
var ex__44792__auto__ = e52943;
var statearr_52944_52946 = state_52936;
(statearr_52944_52946[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52947 = state_52936;
state_52936 = G__52947;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44789__auto__ = function(state_52936){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44789__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44789__auto____1.call(this,state_52936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44789__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44789__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto__,figwheel_version,temp__4657__auto__))
})();
var state__44902__auto__ = (function (){var statearr_52945 = f__44901__auto__.call(null);
(statearr_52945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto__);

return statearr_52945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto__,figwheel_version,temp__4657__auto__))
);

return c__44900__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__52948){
var map__52952 = p__52948;
var map__52952__$1 = ((((!((map__52952 == null)))?((((map__52952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52952):map__52952);
var file = cljs.core.get.call(null,map__52952__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__52952__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52952__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__52954 = "";
var G__52954__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__52954),cljs.core.str("file "),cljs.core.str(file)].join(''):G__52954);
var G__52954__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__52954__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__52954__$1);
if(cljs.core.truth_((function (){var and__41059__auto__ = line;
if(cljs.core.truth_(and__41059__auto__)){
return column;
} else {
return and__41059__auto__;
}
})())){
return [cljs.core.str(G__52954__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__52954__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__52955){
var map__52962 = p__52955;
var map__52962__$1 = ((((!((map__52962 == null)))?((((map__52962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52962):map__52962);
var ed = map__52962__$1;
var formatted_exception = cljs.core.get.call(null,map__52962__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__52962__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__52962__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__52964_52968 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__52965_52969 = null;
var count__52966_52970 = (0);
var i__52967_52971 = (0);
while(true){
if((i__52967_52971 < count__52966_52970)){
var msg_52972 = cljs.core._nth.call(null,chunk__52965_52969,i__52967_52971);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_52972);

var G__52973 = seq__52964_52968;
var G__52974 = chunk__52965_52969;
var G__52975 = count__52966_52970;
var G__52976 = (i__52967_52971 + (1));
seq__52964_52968 = G__52973;
chunk__52965_52969 = G__52974;
count__52966_52970 = G__52975;
i__52967_52971 = G__52976;
continue;
} else {
var temp__4657__auto___52977 = cljs.core.seq.call(null,seq__52964_52968);
if(temp__4657__auto___52977){
var seq__52964_52978__$1 = temp__4657__auto___52977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52964_52978__$1)){
var c__41882__auto___52979 = cljs.core.chunk_first.call(null,seq__52964_52978__$1);
var G__52980 = cljs.core.chunk_rest.call(null,seq__52964_52978__$1);
var G__52981 = c__41882__auto___52979;
var G__52982 = cljs.core.count.call(null,c__41882__auto___52979);
var G__52983 = (0);
seq__52964_52968 = G__52980;
chunk__52965_52969 = G__52981;
count__52966_52970 = G__52982;
i__52967_52971 = G__52983;
continue;
} else {
var msg_52984 = cljs.core.first.call(null,seq__52964_52978__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_52984);

var G__52985 = cljs.core.next.call(null,seq__52964_52978__$1);
var G__52986 = null;
var G__52987 = (0);
var G__52988 = (0);
seq__52964_52968 = G__52985;
chunk__52965_52969 = G__52986;
count__52966_52970 = G__52987;
i__52967_52971 = G__52988;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__52989){
var map__52992 = p__52989;
var map__52992__$1 = ((((!((map__52992 == null)))?((((map__52992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52992):map__52992);
var w = map__52992__$1;
var message = cljs.core.get.call(null,map__52992__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__41059__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__41059__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__41059__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__53004 = cljs.core.seq.call(null,plugins);
var chunk__53005 = null;
var count__53006 = (0);
var i__53007 = (0);
while(true){
if((i__53007 < count__53006)){
var vec__53008 = cljs.core._nth.call(null,chunk__53005,i__53007);
var k = cljs.core.nth.call(null,vec__53008,(0),null);
var plugin = cljs.core.nth.call(null,vec__53008,(1),null);
if(cljs.core.truth_(plugin)){
var pl_53014 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__53004,chunk__53005,count__53006,i__53007,pl_53014,vec__53008,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_53014.call(null,msg_hist);
});})(seq__53004,chunk__53005,count__53006,i__53007,pl_53014,vec__53008,k,plugin))
);
} else {
}

var G__53015 = seq__53004;
var G__53016 = chunk__53005;
var G__53017 = count__53006;
var G__53018 = (i__53007 + (1));
seq__53004 = G__53015;
chunk__53005 = G__53016;
count__53006 = G__53017;
i__53007 = G__53018;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__53004);
if(temp__4657__auto__){
var seq__53004__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53004__$1)){
var c__41882__auto__ = cljs.core.chunk_first.call(null,seq__53004__$1);
var G__53019 = cljs.core.chunk_rest.call(null,seq__53004__$1);
var G__53020 = c__41882__auto__;
var G__53021 = cljs.core.count.call(null,c__41882__auto__);
var G__53022 = (0);
seq__53004 = G__53019;
chunk__53005 = G__53020;
count__53006 = G__53021;
i__53007 = G__53022;
continue;
} else {
var vec__53011 = cljs.core.first.call(null,seq__53004__$1);
var k = cljs.core.nth.call(null,vec__53011,(0),null);
var plugin = cljs.core.nth.call(null,vec__53011,(1),null);
if(cljs.core.truth_(plugin)){
var pl_53023 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__53004,chunk__53005,count__53006,i__53007,pl_53023,vec__53011,k,plugin,seq__53004__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_53023.call(null,msg_hist);
});})(seq__53004,chunk__53005,count__53006,i__53007,pl_53023,vec__53011,k,plugin,seq__53004__$1,temp__4657__auto__))
);
} else {
}

var G__53024 = cljs.core.next.call(null,seq__53004__$1);
var G__53025 = null;
var G__53026 = (0);
var G__53027 = (0);
seq__53004 = G__53024;
chunk__53005 = G__53025;
count__53006 = G__53026;
i__53007 = G__53027;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args53028 = [];
var len__42146__auto___53035 = arguments.length;
var i__42147__auto___53036 = (0);
while(true){
if((i__42147__auto___53036 < len__42146__auto___53035)){
args53028.push((arguments[i__42147__auto___53036]));

var G__53037 = (i__42147__auto___53036 + (1));
i__42147__auto___53036 = G__53037;
continue;
} else {
}
break;
}

var G__53030 = args53028.length;
switch (G__53030) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53028.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__53031_53039 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__53032_53040 = null;
var count__53033_53041 = (0);
var i__53034_53042 = (0);
while(true){
if((i__53034_53042 < count__53033_53041)){
var msg_53043 = cljs.core._nth.call(null,chunk__53032_53040,i__53034_53042);
figwheel.client.socket.handle_incoming_message.call(null,msg_53043);

var G__53044 = seq__53031_53039;
var G__53045 = chunk__53032_53040;
var G__53046 = count__53033_53041;
var G__53047 = (i__53034_53042 + (1));
seq__53031_53039 = G__53044;
chunk__53032_53040 = G__53045;
count__53033_53041 = G__53046;
i__53034_53042 = G__53047;
continue;
} else {
var temp__4657__auto___53048 = cljs.core.seq.call(null,seq__53031_53039);
if(temp__4657__auto___53048){
var seq__53031_53049__$1 = temp__4657__auto___53048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53031_53049__$1)){
var c__41882__auto___53050 = cljs.core.chunk_first.call(null,seq__53031_53049__$1);
var G__53051 = cljs.core.chunk_rest.call(null,seq__53031_53049__$1);
var G__53052 = c__41882__auto___53050;
var G__53053 = cljs.core.count.call(null,c__41882__auto___53050);
var G__53054 = (0);
seq__53031_53039 = G__53051;
chunk__53032_53040 = G__53052;
count__53033_53041 = G__53053;
i__53034_53042 = G__53054;
continue;
} else {
var msg_53055 = cljs.core.first.call(null,seq__53031_53049__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_53055);

var G__53056 = cljs.core.next.call(null,seq__53031_53049__$1);
var G__53057 = null;
var G__53058 = (0);
var G__53059 = (0);
seq__53031_53039 = G__53056;
chunk__53032_53040 = G__53057;
count__53033_53041 = G__53058;
i__53034_53042 = G__53059;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__42153__auto__ = [];
var len__42146__auto___53064 = arguments.length;
var i__42147__auto___53065 = (0);
while(true){
if((i__42147__auto___53065 < len__42146__auto___53064)){
args__42153__auto__.push((arguments[i__42147__auto___53065]));

var G__53066 = (i__42147__auto___53065 + (1));
i__42147__auto___53065 = G__53066;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__53061){
var map__53062 = p__53061;
var map__53062__$1 = ((((!((map__53062 == null)))?((((map__53062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53062):map__53062);
var opts = map__53062__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq53060){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53060));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e53068){if((e53068 instanceof Error)){
var e = e53068;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e53068;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__53072){
var map__53073 = p__53072;
var map__53073__$1 = ((((!((map__53073 == null)))?((((map__53073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53073):map__53073);
var msg_name = cljs.core.get.call(null,map__53073__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1502937018659