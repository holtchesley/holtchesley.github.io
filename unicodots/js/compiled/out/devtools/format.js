// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__41734__auto__ = (((value == null))?null:value);
var m__41735__auto__ = (devtools.format._header[goog.typeOf(x__41734__auto__)]);
if(!((m__41735__auto__ == null))){
return m__41735__auto__.call(null,value);
} else {
var m__41735__auto____$1 = (devtools.format._header["_"]);
if(!((m__41735__auto____$1 == null))){
return m__41735__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__41734__auto__ = (((value == null))?null:value);
var m__41735__auto__ = (devtools.format._has_body[goog.typeOf(x__41734__auto__)]);
if(!((m__41735__auto__ == null))){
return m__41735__auto__.call(null,value);
} else {
var m__41735__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__41735__auto____$1 == null))){
return m__41735__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__41734__auto__ = (((value == null))?null:value);
var m__41735__auto__ = (devtools.format._body[goog.typeOf(x__41734__auto__)]);
if(!((m__41735__auto__ == null))){
return m__41735__auto__.call(null,value);
} else {
var m__41735__auto____$1 = (devtools.format._body["_"]);
if(!((m__41735__auto____$1 == null))){
return m__41735__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__53105__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__53105__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__53105__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__53105__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__53104__auto__ = temp__4657__auto____$2;
return goog.object.get(o__53104__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__53105__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__53105__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__53105__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__53105__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__53104__auto__ = temp__4657__auto____$2;
return goog.object.get(o__53104__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__53105__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__53105__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__53105__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__53105__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__53104__auto__ = temp__4657__auto____$2;
return goog.object.get(o__53104__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__53105__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__53105__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__53105__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__53105__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__53104__auto__ = temp__4657__auto____$2;
return goog.object.get(o__53104__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__53105__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__53105__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__53105__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__53105__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__53104__auto__ = temp__4657__auto____$2;
return goog.object.get(o__53104__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__53105__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__53105__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__53105__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__53105__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__53104__auto__ = temp__4657__auto____$2;
return goog.object.get(o__53104__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__53105__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__53105__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__53105__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__53105__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__53104__auto__ = temp__4657__auto____$2;
return goog.object.get(o__53104__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__42153__auto__ = [];
var len__42146__auto___53135 = arguments.length;
var i__42147__auto___53136 = (0);
while(true){
if((i__42147__auto___53136 < len__42146__auto___53135)){
args__42153__auto__.push((arguments[i__42147__auto___53136]));

var G__53137 = (i__42147__auto___53136 + (1));
i__42147__auto___53136 = G__53137;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq53134){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53134));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__42153__auto__ = [];
var len__42146__auto___53139 = arguments.length;
var i__42147__auto___53140 = (0);
while(true){
if((i__42147__auto___53140 < len__42146__auto___53139)){
args__42153__auto__.push((arguments[i__42147__auto___53140]));

var G__53141 = (i__42147__auto___53140 + (1));
i__42147__auto___53140 = G__53141;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq53138){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53138));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__42153__auto__ = [];
var len__42146__auto___53143 = arguments.length;
var i__42147__auto___53144 = (0);
while(true){
if((i__42147__auto___53144 < len__42146__auto___53143)){
args__42153__auto__.push((arguments[i__42147__auto___53144]));

var G__53145 = (i__42147__auto___53144 + (1));
i__42147__auto___53144 = G__53145;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq53142){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53142));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__42153__auto__ = [];
var len__42146__auto___53147 = arguments.length;
var i__42147__auto___53148 = (0);
while(true){
if((i__42147__auto___53148 < len__42146__auto___53147)){
args__42153__auto__.push((arguments[i__42147__auto___53148]));

var G__53149 = (i__42147__auto___53148 + (1));
i__42147__auto___53148 = G__53149;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq53146){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53146));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__42153__auto__ = [];
var len__42146__auto___53151 = arguments.length;
var i__42147__auto___53152 = (0);
while(true){
if((i__42147__auto___53152 < len__42146__auto___53151)){
args__42153__auto__.push((arguments[i__42147__auto___53152]));

var G__53153 = (i__42147__auto___53152 + (1));
i__42147__auto___53152 = G__53153;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq53150){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53150));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__42153__auto__ = [];
var len__42146__auto___53155 = arguments.length;
var i__42147__auto___53156 = (0);
while(true){
if((i__42147__auto___53156 < len__42146__auto___53155)){
args__42153__auto__.push((arguments[i__42147__auto___53156]));

var G__53157 = (i__42147__auto___53156 + (1));
i__42147__auto___53156 = G__53157;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq53154){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53154));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__42153__auto__ = [];
var len__42146__auto___53159 = arguments.length;
var i__42147__auto___53160 = (0);
while(true){
if((i__42147__auto___53160 < len__42146__auto___53159)){
args__42153__auto__.push((arguments[i__42147__auto___53160]));

var G__53161 = (i__42147__auto___53160 + (1));
i__42147__auto___53160 = G__53161;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq53158){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53158));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__42153__auto__ = [];
var len__42146__auto___53169 = arguments.length;
var i__42147__auto___53170 = (0);
while(true){
if((i__42147__auto___53170 < len__42146__auto___53169)){
args__42153__auto__.push((arguments[i__42147__auto___53170]));

var G__53171 = (i__42147__auto___53170 + (1));
i__42147__auto___53170 = G__53171;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((1) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42154__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__53165){
var vec__53166 = p__53165;
var state_override = cljs.core.nth.call(null,vec__53166,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__53166,state_override){
return (function (p1__53162_SHARP_){
return cljs.core.merge.call(null,p1__53162_SHARP_,state_override);
});})(vec__53166,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq53163){
var G__53164 = cljs.core.first.call(null,seq53163);
var seq53163__$1 = cljs.core.next.call(null,seq53163);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__53164,seq53163__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__42153__auto__ = [];
var len__42146__auto___53173 = arguments.length;
var i__42147__auto___53174 = (0);
while(true){
if((i__42147__auto___53174 < len__42146__auto___53173)){
args__42153__auto__.push((arguments[i__42147__auto___53174]));

var G__53175 = (i__42147__auto___53174 + (1));
i__42147__auto___53174 = G__53175;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((0) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__42154__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq53172){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53172));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__42153__auto__ = [];
var len__42146__auto___53178 = arguments.length;
var i__42147__auto___53179 = (0);
while(true){
if((i__42147__auto___53179 < len__42146__auto___53178)){
args__42153__auto__.push((arguments[i__42147__auto___53179]));

var G__53180 = (i__42147__auto___53179 + (1));
i__42147__auto___53179 = G__53180;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((1) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42154__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq53176){
var G__53177 = cljs.core.first.call(null,seq53176);
var seq53176__$1 = cljs.core.next.call(null,seq53176);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__53177,seq53176__$1);
});


//# sourceMappingURL=format.js.map?rel=1502937019024