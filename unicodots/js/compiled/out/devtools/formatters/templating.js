// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x55616_55617 = value;
x55616_55617.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x55621_55622 = value;
x55621_55622.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x55626_55627 = value;
x55626_55627.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__41059__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__41059__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__41059__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__42153__auto__ = [];
var len__42146__auto___55635 = arguments.length;
var i__42147__auto___55636 = (0);
while(true){
if((i__42147__auto___55636 < len__42146__auto___55635)){
args__42153__auto__.push((arguments[i__42147__auto___55636]));

var G__55637 = (i__42147__auto___55636 + (1));
i__42147__auto___55636 = G__55637;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__55631_55638 = cljs.core.seq.call(null,items);
var chunk__55632_55639 = null;
var count__55633_55640 = (0);
var i__55634_55641 = (0);
while(true){
if((i__55634_55641 < count__55633_55640)){
var item_55642 = cljs.core._nth.call(null,chunk__55632_55639,i__55634_55641);
if(cljs.core.some_QMARK_.call(null,item_55642)){
if(cljs.core.coll_QMARK_.call(null,item_55642)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_55642)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_55642));
}
} else {
}

var G__55643 = seq__55631_55638;
var G__55644 = chunk__55632_55639;
var G__55645 = count__55633_55640;
var G__55646 = (i__55634_55641 + (1));
seq__55631_55638 = G__55643;
chunk__55632_55639 = G__55644;
count__55633_55640 = G__55645;
i__55634_55641 = G__55646;
continue;
} else {
var temp__4657__auto___55647 = cljs.core.seq.call(null,seq__55631_55638);
if(temp__4657__auto___55647){
var seq__55631_55648__$1 = temp__4657__auto___55647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55631_55648__$1)){
var c__41882__auto___55649 = cljs.core.chunk_first.call(null,seq__55631_55648__$1);
var G__55650 = cljs.core.chunk_rest.call(null,seq__55631_55648__$1);
var G__55651 = c__41882__auto___55649;
var G__55652 = cljs.core.count.call(null,c__41882__auto___55649);
var G__55653 = (0);
seq__55631_55638 = G__55650;
chunk__55632_55639 = G__55651;
count__55633_55640 = G__55652;
i__55634_55641 = G__55653;
continue;
} else {
var item_55654 = cljs.core.first.call(null,seq__55631_55648__$1);
if(cljs.core.some_QMARK_.call(null,item_55654)){
if(cljs.core.coll_QMARK_.call(null,item_55654)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_55654)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_55654));
}
} else {
}

var G__55655 = cljs.core.next.call(null,seq__55631_55648__$1);
var G__55656 = null;
var G__55657 = (0);
var G__55658 = (0);
seq__55631_55638 = G__55655;
chunk__55632_55639 = G__55656;
count__55633_55640 = G__55657;
i__55634_55641 = G__55658;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq55630){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55630));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__42153__auto__ = [];
var len__42146__auto___55666 = arguments.length;
var i__42147__auto___55667 = (0);
while(true){
if((i__42147__auto___55667 < len__42146__auto___55666)){
args__42153__auto__.push((arguments[i__42147__auto___55667]));

var G__55668 = (i__42147__auto___55667 + (1));
i__42147__auto___55667 = G__55668;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((2) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__42154__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__55662_55669 = cljs.core.seq.call(null,children);
var chunk__55663_55670 = null;
var count__55664_55671 = (0);
var i__55665_55672 = (0);
while(true){
if((i__55665_55672 < count__55664_55671)){
var child_55673 = cljs.core._nth.call(null,chunk__55663_55670,i__55665_55672);
if(cljs.core.some_QMARK_.call(null,child_55673)){
if(cljs.core.coll_QMARK_.call(null,child_55673)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_55673))));
} else {
var temp__4655__auto___55674 = devtools.formatters.helpers.pref.call(null,child_55673);
if(cljs.core.truth_(temp__4655__auto___55674)){
var child_value_55675 = temp__4655__auto___55674;
template.push(child_value_55675);
} else {
}
}
} else {
}

var G__55676 = seq__55662_55669;
var G__55677 = chunk__55663_55670;
var G__55678 = count__55664_55671;
var G__55679 = (i__55665_55672 + (1));
seq__55662_55669 = G__55676;
chunk__55663_55670 = G__55677;
count__55664_55671 = G__55678;
i__55665_55672 = G__55679;
continue;
} else {
var temp__4657__auto___55680 = cljs.core.seq.call(null,seq__55662_55669);
if(temp__4657__auto___55680){
var seq__55662_55681__$1 = temp__4657__auto___55680;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55662_55681__$1)){
var c__41882__auto___55682 = cljs.core.chunk_first.call(null,seq__55662_55681__$1);
var G__55683 = cljs.core.chunk_rest.call(null,seq__55662_55681__$1);
var G__55684 = c__41882__auto___55682;
var G__55685 = cljs.core.count.call(null,c__41882__auto___55682);
var G__55686 = (0);
seq__55662_55669 = G__55683;
chunk__55663_55670 = G__55684;
count__55664_55671 = G__55685;
i__55665_55672 = G__55686;
continue;
} else {
var child_55687 = cljs.core.first.call(null,seq__55662_55681__$1);
if(cljs.core.some_QMARK_.call(null,child_55687)){
if(cljs.core.coll_QMARK_.call(null,child_55687)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_55687))));
} else {
var temp__4655__auto___55688 = devtools.formatters.helpers.pref.call(null,child_55687);
if(cljs.core.truth_(temp__4655__auto___55688)){
var child_value_55689 = temp__4655__auto___55688;
template.push(child_value_55689);
} else {
}
}
} else {
}

var G__55690 = cljs.core.next.call(null,seq__55662_55681__$1);
var G__55691 = null;
var G__55692 = (0);
var G__55693 = (0);
seq__55662_55669 = G__55690;
chunk__55663_55670 = G__55691;
count__55664_55671 = G__55692;
i__55665_55672 = G__55693;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq55659){
var G__55660 = cljs.core.first.call(null,seq55659);
var seq55659__$1 = cljs.core.next.call(null,seq55659);
var G__55661 = cljs.core.first.call(null,seq55659__$1);
var seq55659__$2 = cljs.core.next.call(null,seq55659__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__55660,G__55661,seq55659__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__42153__auto__ = [];
var len__42146__auto___55696 = arguments.length;
var i__42147__auto___55697 = (0);
while(true){
if((i__42147__auto___55697 < len__42146__auto___55696)){
args__42153__auto__.push((arguments[i__42147__auto___55697]));

var G__55698 = (i__42147__auto___55697 + (1));
i__42147__auto___55697 = G__55698;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((1) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42154__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq55694){
var G__55695 = cljs.core.first.call(null,seq55694);
var seq55694__$1 = cljs.core.next.call(null,seq55694);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__55695,seq55694__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__42153__auto__ = [];
var len__42146__auto___55701 = arguments.length;
var i__42147__auto___55702 = (0);
while(true){
if((i__42147__auto___55702 < len__42146__auto___55701)){
args__42153__auto__.push((arguments[i__42147__auto___55702]));

var G__55703 = (i__42147__auto___55702 + (1));
i__42147__auto___55702 = G__55703;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((1) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42154__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq55699){
var G__55700 = cljs.core.first.call(null,seq55699);
var seq55699__$1 = cljs.core.next.call(null,seq55699);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__55700,seq55699__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args55704 = [];
var len__42146__auto___55709 = arguments.length;
var i__42147__auto___55710 = (0);
while(true){
if((i__42147__auto___55710 < len__42146__auto___55709)){
args55704.push((arguments[i__42147__auto___55710]));

var G__55711 = (i__42147__auto___55710 + (1));
i__42147__auto___55710 = G__55711;
continue;
} else {
}
break;
}

var G__55706 = args55704.length;
switch (G__55706) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55704.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj55708 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__41071__auto__ = start_index;
if(cljs.core.truth_(or__41071__auto__)){
return or__41071__auto__;
} else {
return (0);
}
})()};
return obj55708;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__42153__auto__ = [];
var len__42146__auto___55719 = arguments.length;
var i__42147__auto___55720 = (0);
while(true){
if((i__42147__auto___55720 < len__42146__auto___55719)){
args__42153__auto__.push((arguments[i__42147__auto___55720]));

var G__55721 = (i__42147__auto___55720 + (1));
i__42147__auto___55720 = G__55721;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((1) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42154__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__55715){
var vec__55716 = p__55715;
var state_override_fn = cljs.core.nth.call(null,vec__55716,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq55713){
var G__55714 = cljs.core.first.call(null,seq55713);
var seq55713__$1 = cljs.core.next.call(null,seq55713);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__55714,seq55713__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__42057__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_55725_55728 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_55726_55729 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_55725_55728,_STAR_print_fn_STAR_55726_55729,sb__42057__auto__){
return (function (x__42058__auto__){
return sb__42057__auto__.append(x__42058__auto__);
});})(_STAR_print_newline_STAR_55725_55728,_STAR_print_fn_STAR_55726_55729,sb__42057__auto__))
;

try{var _STAR_print_level_STAR_55727_55730 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_55727_55730;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_55726_55729;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_55725_55728;
}
return [cljs.core.str(sb__42057__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_55732 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_55732;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__55734 = name;
switch (G__55734) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__55739 = tag;
var html_tag = cljs.core.nth.call(null,vec__55739,(0),null);
var style = cljs.core.nth.call(null,vec__55739,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_55743 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_55743;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_55746 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_55747 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_55747;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_55746;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__55748 = initial_value;
var G__55749 = value.call(null);
initial_value = G__55748;
value = G__55749;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__55750 = initial_value;
var G__55751 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__55750;
value = G__55751;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__55752 = initial_value;
var G__55753 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__55752;
value = G__55753;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1502937023301