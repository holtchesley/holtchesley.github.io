// Compiled by ClojureScript 1.9.229 {}
goog.provide('unicodots.dot');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('re_frame.loggers');
unicodots.dot.log = new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(re_frame.loggers.get_loggers.call(null));
unicodots.dot.move_dot = (function unicodots$dot$move_dot(p__75125,p__75126){
var map__75160 = p__75125;
var map__75160__$1 = ((((!((map__75160 == null)))?((((map__75160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75160):map__75160);
var dot = map__75160__$1;
var id = cljs.core.get.call(null,map__75160__$1,new cljs.core.Keyword("unicodots.dot","id","unicodots.dot/id",1509573459));
var dot_dir = cljs.core.get.call(null,map__75160__$1,new cljs.core.Keyword("unicodots.dot","dir","unicodots.dot/dir",337918054));
var map__75161 = p__75126;
var map__75161__$1 = ((((!((map__75161 == null)))?((((map__75161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75161):map__75161);
var options = map__75161__$1;
var reflect = cljs.core.get.call(null,map__75161__$1,new cljs.core.Keyword(null,"reflect","reflect",-2113821122));
var force = cljs.core.get.call(null,map__75161__$1,new cljs.core.Keyword(null,"force","force",781957286));
var new_dir = (function (){var ocr_75164 = (function (){var or__41071__auto__ = force;
if(cljs.core.truth_(or__41071__auto__)){
return or__41071__auto__;
} else {
return reflect;
}
})();
var dot_dir__$1 = dot_dir;
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_75164,new cljs.core.Keyword("unicodots.dot","left","unicodots.dot/left",-1804382626))){
return new cljs.core.Keyword("unicodots.dot","left","unicodots.dot/left",-1804382626);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75172){if((e75172 instanceof Error)){
var e__42700__auto__ = e75172;
if((e__42700__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_75164,new cljs.core.Keyword("unicodots.dot","right","unicodots.dot/right",1891880246))){
return new cljs.core.Keyword("unicodots.dot","right","unicodots.dot/right",1891880246);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75173){if((e75173 instanceof Error)){
var e__42700__auto____$1 = e75173;
if((e__42700__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_75164,new cljs.core.Keyword("unicodots.dot","up","unicodots.dot/up",1806884368))){
return new cljs.core.Keyword("unicodots.dot","up","unicodots.dot/up",1806884368);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75174){if((e75174 instanceof Error)){
var e__42700__auto____$2 = e75174;
if((e__42700__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_75164,new cljs.core.Keyword("unicodots.dot","down","unicodots.dot/down",-1047897727))){
return new cljs.core.Keyword("unicodots.dot","down","unicodots.dot/down",-1047897727);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75175){if((e75175 instanceof Error)){
var e__42700__auto____$3 = e75175;
if((e__42700__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_75164,new cljs.core.Keyword("unicodots.dot","positive","unicodots.dot/positive",-804211159))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,dot_dir__$1,new cljs.core.Keyword("unicodots.dot","left","unicodots.dot/left",-1804382626))){
return new cljs.core.Keyword("unicodots.dot","down","unicodots.dot/down",-1047897727);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75182){if((e75182 instanceof Error)){
var e__42700__auto____$4 = e75182;
if((e__42700__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,dot_dir__$1,new cljs.core.Keyword("unicodots.dot","right","unicodots.dot/right",1891880246))){
return new cljs.core.Keyword("unicodots.dot","up","unicodots.dot/up",1806884368);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75183){if((e75183 instanceof Error)){
var e__42700__auto____$5 = e75183;
if((e__42700__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,dot_dir__$1,new cljs.core.Keyword("unicodots.dot","up","unicodots.dot/up",1806884368))){
return new cljs.core.Keyword("unicodots.dot","right","unicodots.dot/right",1891880246);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75184){if((e75184 instanceof Error)){
var e__42700__auto____$6 = e75184;
if((e__42700__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,dot_dir__$1,new cljs.core.Keyword("unicodots.dot","down","unicodots.dot/down",-1047897727))){
return new cljs.core.Keyword("unicodots.dot","left","unicodots.dot/left",-1804382626);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75185){if((e75185 instanceof Error)){
var e__42700__auto____$7 = e75185;
if((e__42700__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$7;
}
} else {
throw e75185;

}
}} else {
throw e__42700__auto____$6;
}
} else {
throw e75184;

}
}} else {
throw e__42700__auto____$5;
}
} else {
throw e75183;

}
}} else {
throw e__42700__auto____$4;
}
} else {
throw e75182;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75176){if((e75176 instanceof Error)){
var e__42700__auto____$4 = e75176;
if((e__42700__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_75164,new cljs.core.Keyword("unicodots.dot","negative","unicodots.dot/negative",656102191))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,dot_dir__$1,new cljs.core.Keyword("unicodots.dot","left","unicodots.dot/left",-1804382626))){
return new cljs.core.Keyword("unicodots.dot","up","unicodots.dot/up",1806884368);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75178){if((e75178 instanceof Error)){
var e__42700__auto____$5 = e75178;
if((e__42700__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,dot_dir__$1,new cljs.core.Keyword("unicodots.dot","right","unicodots.dot/right",1891880246))){
return new cljs.core.Keyword("unicodots.dot","down","unicodots.dot/down",-1047897727);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75179){if((e75179 instanceof Error)){
var e__42700__auto____$6 = e75179;
if((e__42700__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,dot_dir__$1,new cljs.core.Keyword("unicodots.dot","up","unicodots.dot/up",1806884368))){
return new cljs.core.Keyword("unicodots.dot","left","unicodots.dot/left",-1804382626);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75180){if((e75180 instanceof Error)){
var e__42700__auto____$7 = e75180;
if((e__42700__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,dot_dir__$1,new cljs.core.Keyword("unicodots.dot","down","unicodots.dot/down",-1047897727))){
return new cljs.core.Keyword("unicodots.dot","right","unicodots.dot/right",1891880246);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75181){if((e75181 instanceof Error)){
var e__42700__auto____$8 = e75181;
if((e__42700__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$8;
}
} else {
throw e75181;

}
}} else {
throw e__42700__auto____$7;
}
} else {
throw e75180;

}
}} else {
throw e__42700__auto____$6;
}
} else {
throw e75179;

}
}} else {
throw e__42700__auto____$5;
}
} else {
throw e75178;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75177){if((e75177 instanceof Error)){
var e__42700__auto____$5 = e75177;
if((e__42700__auto____$5 === cljs.core.match.backtrack)){
var x = dot_dir__$1;
return x;
} else {
throw e__42700__auto____$5;
}
} else {
throw e75177;

}
}} else {
throw e__42700__auto____$4;
}
} else {
throw e75176;

}
}} else {
throw e__42700__auto____$3;
}
} else {
throw e75175;

}
}} else {
throw e__42700__auto____$2;
}
} else {
throw e75174;

}
}} else {
throw e__42700__auto____$1;
}
} else {
throw e75173;

}
}} else {
throw e__42700__auto__;
}
} else {
throw e75172;

}
}})();
return cljs.core.assoc.call(null,cljs.core.update.call(null,dot,new cljs.core.Keyword("unicodots.dot","location","unicodots.dot/location",-260689895),((function (new_dir,map__75160,map__75160__$1,dot,id,dot_dir,map__75161,map__75161__$1,options,reflect,force){
return (function (p__75186){
var vec__75187 = p__75186;
var x = cljs.core.nth.call(null,vec__75187,(0),null);
var y = cljs.core.nth.call(null,vec__75187,(1),null);
var pred__75190 = cljs.core._EQ_;
var expr__75191 = new_dir;
if(cljs.core.truth_(pred__75190.call(null,new cljs.core.Keyword("unicodots.dot","left","unicodots.dot/left",-1804382626),expr__75191))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y], null);
} else {
if(cljs.core.truth_(pred__75190.call(null,new cljs.core.Keyword("unicodots.dot","right","unicodots.dot/right",1891880246),expr__75191))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y], null);
} else {
if(cljs.core.truth_(pred__75190.call(null,new cljs.core.Keyword("unicodots.dot","up","unicodots.dot/up",1806884368),expr__75191))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1))], null);
} else {
if(cljs.core.truth_(pred__75190.call(null,new cljs.core.Keyword("unicodots.dot","down","unicodots.dot/down",-1047897727),expr__75191))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1))], null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__75191)].join('')));
}
}
}
}
});})(new_dir,map__75160,map__75160__$1,dot,id,dot_dir,map__75161,map__75161__$1,options,reflect,force))
),new cljs.core.Keyword("unicodots.dot","dir","unicodots.dot/dir",337918054),new_dir);
});
unicodots.dot.reverse_direction = (function unicodots$dot$reverse_direction(direction){
var pred__75196 = cljs.core._EQ_;
var expr__75197 = direction;
if(cljs.core.truth_(pred__75196.call(null,new cljs.core.Keyword("unicodots.dot","left","unicodots.dot/left",-1804382626),expr__75197))){
return new cljs.core.Keyword("unicodots.dot","right","unicodots.dot/right",1891880246);
} else {
if(cljs.core.truth_(pred__75196.call(null,new cljs.core.Keyword("unicodots.dot","right","unicodots.dot/right",1891880246),expr__75197))){
return new cljs.core.Keyword("unicodots.dot","left","unicodots.dot/left",-1804382626);
} else {
if(cljs.core.truth_(pred__75196.call(null,new cljs.core.Keyword("unicodots.dot","up","unicodots.dot/up",1806884368),expr__75197))){
return new cljs.core.Keyword("unicodots.dot","down","unicodots.dot/down",-1047897727);
} else {
if(cljs.core.truth_(pred__75196.call(null,new cljs.core.Keyword("unicodots.dot","down","unicodots.dot/down",-1047897727),expr__75197))){
return new cljs.core.Keyword("unicodots.dot","up","unicodots.dot/up",1806884368);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__75197)].join('')));
}
}
}
}
});
unicodots.dot.process_input = (function unicodots$dot$process_input(db){
var inps = clojure.string.split.call(null,db.call(null,new cljs.core.Keyword(null,"input","input",556931961)),/\n/,(2));
var complete_input = cljs.core.pop.call(null,inps);
var next_input = cljs.core.peek.call(null,inps);
var dot_id = cljs.core.peek.call(null,db.call(null,new cljs.core.Keyword(null,"input-queue","input-queue",-1249708588)));
if((cljs.core.empty_QMARK_.call(null,complete_input)) || ((dot_id == null))){
return db;
} else {
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update.call(null,db,new cljs.core.Keyword(null,"input-queue","input-queue",-1249708588),cljs.core.pop),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),dot_id,new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312)], null),complete_input),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),dot_id,new cljs.core.Keyword("unicodots.dot","state","unicodots.dot/state",-46354032)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","moving","unicodots.dot/moving",-450286281)], null));
}
});
unicodots.dot.tile_fns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("unicodots.dot","fn-mod","unicodots.dot/fn-mod",-1956214496),new cljs.core.Keyword("unicodots.dot","fn-minus","unicodots.dot/fn-minus",416486403),new cljs.core.Keyword("unicodots.dot","fn-less-than-equal","unicodots.dot/fn-less-than-equal",1294992483),new cljs.core.Keyword("unicodots.dot","fn-times","unicodots.dot/fn-times",1482078115),new cljs.core.Keyword("unicodots.dot","fn-exponent","unicodots.dot/fn-exponent",-542228252),new cljs.core.Keyword("unicodots.dot","fn-not","unicodots.dot/fn-not",645135814),new cljs.core.Keyword("unicodots.dot","fn-less-than","unicodots.dot/fn-less-than",-452179320),new cljs.core.Keyword("unicodots.dot","fn-greater-than","unicodots.dot/fn-greater-than",110426633),new cljs.core.Keyword("unicodots.dot","fn-not-equal","unicodots.dot/fn-not-equal",-504536438),new cljs.core.Keyword("unicodots.dot","fn-or","unicodots.dot/fn-or",1937817482),new cljs.core.Keyword("unicodots.dot","fn-and","unicodots.dot/fn-and",233237803),new cljs.core.Keyword("unicodots.dot","fn-add","unicodots.dot/fn-add",-71095252),new cljs.core.Keyword("unicodots.dot","fn-greater-than-or-equal","unicodots.dot/fn-greater-than-or-equal",2050841584),new cljs.core.Keyword("unicodots.dot","fn-divide","unicodots.dot/fn-divide",427270258),new cljs.core.Keyword("unicodots.dot","fn-xor","unicodots.dot/fn-xor",-490474062),new cljs.core.Keyword("unicodots.dot","fn-equal","unicodots.dot/fn-equal",-208512875)],[cljs.core.mod,cljs.core._,cljs.core._LT__EQ_,cljs.core._STAR_,Math.pow,(function (x,y){
return cljs.core.not.call(null,x);
}),cljs.core._LT_,cljs.core._GT_,cljs.core.not_EQ_,(function (x,y){
var or__41071__auto__ = x;
if(cljs.core.truth_(or__41071__auto__)){
return or__41071__auto__;
} else {
return y;
}
}),(function (x,y){
var and__41059__auto__ = x;
if(cljs.core.truth_(and__41059__auto__)){
return y;
} else {
return and__41059__auto__;
}
}),cljs.core._PLUS_,cljs.core._GT__EQ_,cljs.core._SLASH_,(function (x,y){
var and__41059__auto__ = cljs.core.not_EQ_.call(null,x,y);
if(and__41059__auto__){
var or__41071__auto__ = x;
if(cljs.core.truth_(or__41071__auto__)){
return or__41071__auto__;
} else {
return y;
}
} else {
return and__41059__auto__;
}
}),cljs.core._EQ_]);
unicodots.dot.process_fn = (function unicodots$dot$process_fn(db,location){
var tile = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623),location], null));
var f_d = cljs.core.get_in.call(null,tile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","location-type","unicodots.dot/location-type",806658017),(1)], null));
var f_r = cljs.core.get_in.call(null,tile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","location-type","unicodots.dot/location-type",806658017),(2)], null));
var hdot = cljs.core.peek.call(null,new cljs.core.Keyword("unicodots.dot","horizontal-queue","unicodots.dot/horizontal-queue",-100568295).cljs$core$IFn$_invoke$arity$1(tile));
var vdot = cljs.core.peek.call(null,new cljs.core.Keyword("unicodots.dot","vertical-queue","unicodots.dot/vertical-queue",1946427942).cljs$core$IFn$_invoke$arity$1(tile));
var hval = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),hdot,new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312)], null));
var vval = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),vdot,new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312)], null));
if(cljs.core.truth_((function (){var and__41059__auto__ = hdot;
if(cljs.core.truth_(and__41059__auto__)){
return vdot;
} else {
return and__41059__auto__;
}
})())){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623),location,new cljs.core.Keyword("unicodots.dot","horizontal-queue","unicodots.dot/horizontal-queue",-100568295)], null),cljs.core.pop),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623),location,new cljs.core.Keyword("unicodots.dot","vertical-queue","unicodots.dot/vertical-queue",1946427942)], null),cljs.core.pop),new cljs.core.Keyword(null,"dots","dots",714343900),cljs.core.dissoc,((cljs.core._EQ_.call(null,new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),f_d))?hdot:vdot)),new cljs.core.Keyword(null,"ready-fns","ready-fns",1913519729),cljs.core.pop),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),((cljs.core._EQ_.call(null,new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),f_d))?vdot:hdot),new cljs.core.Keyword("unicodots.dot","state","unicodots.dot/state",-46354032)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","moving","unicodots.dot/moving",-450286281)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),((cljs.core._EQ_.call(null,new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),f_d))?vdot:hdot),new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312)], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),f_d))?unicodots.dot.tile_fns.call(null,f_r).call(null,vval,hval):unicodots.dot.tile_fns.call(null,f_r).call(null,hval,vval))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),((cljs.core._EQ_.call(null,new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),f_d))?vdot:hdot)], null),unicodots.dot.move_dot);
} else {
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"ready-fns","ready-fns",1913519729),cljs.core.pop);
}
});
unicodots.dot.tile_defaults = (function unicodots$dot$tile_defaults(tile_type){
return cljs.core.assoc.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("unicodots.dot","conditional","unicodots.dot/conditional",-625990976),null,new cljs.core.Keyword("unicodots.dot","function","unicodots.dot/function",351417166),null], null), null),cljs.core.first.call(null,tile_type)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("unicodots.dot","horizontal-queue","unicodots.dot/horizontal-queue",-100568295),cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("unicodots.dot","vertical-queue","unicodots.dot/vertical-queue",1946427942),cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY)], null):cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("unicodots.dot","location-type","unicodots.dot/location-type",806658017),tile_type);
});
unicodots.dot.transition_dot = (function unicodots$dot$transition_dot(dot,tile){
var lt = new cljs.core.Keyword("unicodots.dot","location-type","unicodots.dot/location-type",806658017).cljs$core$IFn$_invoke$arity$1(tile);
var ds = new cljs.core.Keyword("unicodots.dot","state","unicodots.dot/state",-46354032).cljs$core$IFn$_invoke$arity$1(dot);
var actions = (function (){try{if((cljs.core.vector_QMARK_.call(null,ds)) && ((cljs.core.count.call(null,ds) === 2))){
try{var ds_0__75417 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75417,new cljs.core.Keyword("unicodots.dot","quote","unicodots.dot/quote",-2044282828))){
try{if((cljs.core.vector_QMARK_.call(null,lt)) && ((cljs.core.count.call(null,lt) === 1))){
try{var lt_0__75419 = cljs.core.nth.call(null,lt,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,lt_0__75419,new cljs.core.Keyword("unicodots.dot","escape","unicodots.dot/escape",1227194847))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,cljs.core.conj.call(null,ds,new cljs.core.Keyword("unicodots.dot","escape","unicodots.dot/escape",1227194847))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75586){if((e75586 instanceof Error)){
var e__42700__auto__ = e75586;
if((e__42700__auto__ === cljs.core.match.backtrack)){
try{var lt_0__75419 = cljs.core.nth.call(null,lt,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,lt_0__75419,new cljs.core.Keyword("unicodots.dot","quote","unicodots.dot/quote",-2044282828))){
try{var ds_1__75418 = cljs.core.nth.call(null,ds,(1));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_1__75418,new cljs.core.Keyword("unicodots.dot","output","unicodots.dot/output",676361230))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flush-output","flush-output",-1522817323),dot], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","moving","unicodots.dot/moving",-450286281)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75588){if((e75588 instanceof Error)){
var e__42700__auto____$1 = e75588;
if((e__42700__auto____$1 === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","moving","unicodots.dot/moving",-450286281)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw e__42700__auto____$1;
}
} else {
throw e75588;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75587){if((e75587 instanceof Error)){
var e__42700__auto____$1 = e75587;
if((e__42700__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$1;
}
} else {
throw e75587;

}
}} else {
throw e__42700__auto__;
}
} else {
throw e75586;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75585){if((e75585 instanceof Error)){
var e__42700__auto__ = e75585;
if((e__42700__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto__;
}
} else {
throw e75585;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75584){if((e75584 instanceof Error)){
var e__42700__auto__ = e75584;
if((e__42700__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto__;
}
} else {
throw e75584;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75470){if((e75470 instanceof Error)){
var e__42700__auto__ = e75470;
if((e__42700__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ds)) && ((cljs.core.count.call(null,ds) === 3))){
try{var ds_0__75420 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75420,new cljs.core.Keyword("unicodots.dot","quote","unicodots.dot/quote",-2044282828))){
try{var ds_1__75421 = cljs.core.nth.call(null,ds,(1));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_1__75421,new cljs.core.Keyword("unicodots.dot","output","unicodots.dot/output",676361230))){
try{var ds_2__75422 = cljs.core.nth.call(null,ds,(2));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_2__75422,new cljs.core.Keyword("unicodots.dot","escape","unicodots.dot/escape",1227194847))){
try{if((cljs.core.vector_QMARK_.call(null,lt)) && ((cljs.core.count.call(null,lt) === 1))){
try{var lt_0__75423 = cljs.core.nth.call(null,lt,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,lt_0__75423,new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accumulate-raw-output","accumulate-raw-output",29723652),dot,lt], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,cljs.core.subvec.call(null,ds,(0),(2))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75583){if((e75583 instanceof Error)){
var e__42700__auto____$1 = e75583;
if((e__42700__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$1;
}
} else {
throw e75583;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75582){if((e75582 instanceof Error)){
var e__42700__auto____$1 = e75582;
if((e__42700__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$1;
}
} else {
throw e75582;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75581){if((e75581 instanceof Error)){
var e__42700__auto____$1 = e75581;
if((e__42700__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$1;
}
} else {
throw e75581;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75580){if((e75580 instanceof Error)){
var e__42700__auto____$1 = e75580;
if((e__42700__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$1;
}
} else {
throw e75580;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75579){if((e75579 instanceof Error)){
var e__42700__auto____$1 = e75579;
if((e__42700__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$1;
}
} else {
throw e75579;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75471){if((e75471 instanceof Error)){
var e__42700__auto____$1 = e75471;
if((e__42700__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ds)) && ((cljs.core.count.call(null,ds) === 2))){
try{var ds_0__75424 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75424,new cljs.core.Keyword("unicodots.dot","quote","unicodots.dot/quote",-2044282828))){
try{var ds_1__75425 = cljs.core.nth.call(null,ds,(1));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_1__75425,new cljs.core.Keyword("unicodots.dot","output","unicodots.dot/output",676361230))){
try{if((cljs.core.vector_QMARK_.call(null,lt)) && ((cljs.core.count.call(null,lt) === 1))){
try{var lt_0__75426 = cljs.core.nth.call(null,lt,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,lt_0__75426,new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accumulate-output","accumulate-output",1885369110),dot,dot.call(null,new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75578){if((e75578 instanceof Error)){
var e__42700__auto____$2 = e75578;
if((e__42700__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$2;
}
} else {
throw e75578;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75577){if((e75577 instanceof Error)){
var e__42700__auto____$2 = e75577;
if((e__42700__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$2;
}
} else {
throw e75577;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75576){if((e75576 instanceof Error)){
var e__42700__auto____$2 = e75576;
if((e__42700__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$2;
}
} else {
throw e75576;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75575){if((e75575 instanceof Error)){
var e__42700__auto____$2 = e75575;
if((e__42700__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$2;
}
} else {
throw e75575;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75472){if((e75472 instanceof Error)){
var e__42700__auto____$2 = e75472;
if((e__42700__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ds)) && ((cljs.core.count.call(null,ds) === 3))){
try{var ds_0__75427 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75427,new cljs.core.Keyword("unicodots.dot","quote","unicodots.dot/quote",-2044282828))){
try{var ds_1__75428 = cljs.core.nth.call(null,ds,(1));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_1__75428,new cljs.core.Keyword("unicodots.dot","macro","unicodots.dot/macro",-251196527))){
try{var ds_2__75429 = cljs.core.nth.call(null,ds,(2));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_2__75429,new cljs.core.Keyword("unicodots.dot","escape","unicodots.dot/escape",1227194847))){
try{if((cljs.core.vector_QMARK_.call(null,lt)) && ((cljs.core.count.call(null,lt) === 1))){
try{var lt_0__75430 = cljs.core.nth.call(null,lt,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,lt_0__75430,new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append-macro","append-macro",-371057384),dot,lt], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,cljs.core.subvec.call(null,ds,(0),(2))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75574){if((e75574 instanceof Error)){
var e__42700__auto____$3 = e75574;
if((e__42700__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$3;
}
} else {
throw e75574;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75573){if((e75573 instanceof Error)){
var e__42700__auto____$3 = e75573;
if((e__42700__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$3;
}
} else {
throw e75573;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75572){if((e75572 instanceof Error)){
var e__42700__auto____$3 = e75572;
if((e__42700__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$3;
}
} else {
throw e75572;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75571){if((e75571 instanceof Error)){
var e__42700__auto____$3 = e75571;
if((e__42700__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$3;
}
} else {
throw e75571;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75570){if((e75570 instanceof Error)){
var e__42700__auto____$3 = e75570;
if((e__42700__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$3;
}
} else {
throw e75570;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75473){if((e75473 instanceof Error)){
var e__42700__auto____$3 = e75473;
if((e__42700__auto____$3 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ds)) && ((cljs.core.count.call(null,ds) === 2))){
try{var ds_0__75431 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75431,new cljs.core.Keyword("unicodots.dot","quote","unicodots.dot/quote",-2044282828))){
try{var ds_1__75432 = cljs.core.nth.call(null,ds,(1));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_1__75432,new cljs.core.Keyword("unicodots.dot","macro","unicodots.dot/macro",-251196527))){
try{if((cljs.core.vector_QMARK_.call(null,lt)) && ((cljs.core.count.call(null,lt) === 1))){
try{var lt_0__75433 = cljs.core.nth.call(null,lt,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,lt_0__75433,new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312))){
return cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,((typeof dot.call(null,new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312)) === 'string')?cljs.core.reverse.call(null,cljs.core.map.call(null,((function (lt_0__75433,ds_1__75432,ds_0__75431,e__42700__auto____$3,e__42700__auto____$2,e__42700__auto____$1,e__42700__auto__,lt,ds){
return (function (x){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append-macro","append-macro",-371057384),dot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","literal","unicodots.dot/literal",-814248776),x], null)], null);
});})(lt_0__75433,ds_1__75432,ds_0__75431,e__42700__auto____$3,e__42700__auto____$2,e__42700__auto____$1,e__42700__auto__,lt,ds))
,dot.call(null,new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312)))):((cljs.core.int_QMARK_.call(null,dot.call(null,new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312))))?cljs.core.reverse.call(null,cljs.core.map.call(null,((function (lt_0__75433,ds_1__75432,ds_0__75431,e__42700__auto____$3,e__42700__auto____$2,e__42700__auto____$1,e__42700__auto__,lt,ds){
return (function (c){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append-macro","append-macro",-371057384),dot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","literal","unicodots.dot/literal",-814248776),(c | (0))], null)], null);
});})(lt_0__75433,ds_1__75432,ds_0__75431,e__42700__auto____$3,e__42700__auto____$2,e__42700__auto____$1,e__42700__auto__,lt,ds))
,[cljs.core.str(dot.call(null,new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312)))].join(''))):null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e75569){if((e75569 instanceof Error)){
var e__42700__auto____$4 = e75569;
if((e__42700__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$4;
}
} else {
throw e75569;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75568){if((e75568 instanceof Error)){
var e__42700__auto____$4 = e75568;
if((e__42700__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$4;
}
} else {
throw e75568;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75567){if((e75567 instanceof Error)){
var e__42700__auto____$4 = e75567;
if((e__42700__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$4;
}
} else {
throw e75567;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75566){if((e75566 instanceof Error)){
var e__42700__auto____$4 = e75566;
if((e__42700__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$4;
}
} else {
throw e75566;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75474){if((e75474 instanceof Error)){
var e__42700__auto____$4 = e75474;
if((e__42700__auto____$4 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ds)) && ((cljs.core.count.call(null,ds) === 3))){
try{var ds_0__75434 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75434,new cljs.core.Keyword("unicodots.dot","quote","unicodots.dot/quote",-2044282828))){
try{var ds_1__75435 = cljs.core.nth.call(null,ds,(1));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_1__75435,new cljs.core.Keyword("unicodots.dot","pipe","unicodots.dot/pipe",-1773002128))){
try{var ds_2__75436 = cljs.core.nth.call(null,ds,(2));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_2__75436,new cljs.core.Keyword("unicodots.dot","escape","unicodots.dot/escape",1227194847))){
try{if((cljs.core.vector_QMARK_.call(null,lt)) && ((cljs.core.count.call(null,lt) === 1))){
try{var lt_0__75437 = cljs.core.nth.call(null,lt,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,lt_0__75437,new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-raw-input","send-raw-input",330082071),lt], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,cljs.core.subvec.call(null,ds,(0),(2))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75565){if((e75565 instanceof Error)){
var e__42700__auto____$5 = e75565;
if((e__42700__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$5;
}
} else {
throw e75565;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75564){if((e75564 instanceof Error)){
var e__42700__auto____$5 = e75564;
if((e__42700__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$5;
}
} else {
throw e75564;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75563){if((e75563 instanceof Error)){
var e__42700__auto____$5 = e75563;
if((e__42700__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$5;
}
} else {
throw e75563;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75562){if((e75562 instanceof Error)){
var e__42700__auto____$5 = e75562;
if((e__42700__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$5;
}
} else {
throw e75562;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75561){if((e75561 instanceof Error)){
var e__42700__auto____$5 = e75561;
if((e__42700__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$5;
}
} else {
throw e75561;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75475){if((e75475 instanceof Error)){
var e__42700__auto____$5 = e75475;
if((e__42700__auto____$5 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ds)) && ((cljs.core.count.call(null,ds) === 2))){
try{var ds_0__75438 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75438,new cljs.core.Keyword("unicodots.dot","quote","unicodots.dot/quote",-2044282828))){
try{var ds_1__75439 = cljs.core.nth.call(null,ds,(1));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_1__75439,new cljs.core.Keyword("unicodots.dot","pipe","unicodots.dot/pipe",-1773002128))){
try{if((cljs.core.vector_QMARK_.call(null,lt)) && ((cljs.core.count.call(null,lt) === 1))){
try{var lt_0__75440 = cljs.core.nth.call(null,lt,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,lt_0__75440,new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-input","send-input",-1972386700),dot.call(null,new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75560){if((e75560 instanceof Error)){
var e__42700__auto____$6 = e75560;
if((e__42700__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$6;
}
} else {
throw e75560;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75559){if((e75559 instanceof Error)){
var e__42700__auto____$6 = e75559;
if((e__42700__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$6;
}
} else {
throw e75559;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75558){if((e75558 instanceof Error)){
var e__42700__auto____$6 = e75558;
if((e__42700__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$6;
}
} else {
throw e75558;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75557){if((e75557 instanceof Error)){
var e__42700__auto____$6 = e75557;
if((e__42700__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$6;
}
} else {
throw e75557;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75476){if((e75476 instanceof Error)){
var e__42700__auto____$6 = e75476;
if((e__42700__auto____$6 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ds)) && ((cljs.core.count.call(null,ds) >= (2)))){
try{var ds_left__75441 = cljs.core.subvec.call(null,ds,(0),(2));
if((cljs.core.vector_QMARK_.call(null,ds_left__75441)) && ((cljs.core.count.call(null,ds_left__75441) === (2)))){
try{var ds_left__75441_0__75443 = cljs.core.nth.call(null,ds_left__75441,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_left__75441_0__75443,new cljs.core.Keyword("unicodots.dot","quote","unicodots.dot/quote",-2044282828))){
try{var ds_left__75441_1__75444 = cljs.core.nth.call(null,ds_left__75441,(1));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_left__75441_1__75444,new cljs.core.Keyword("unicodots.dot","output","unicodots.dot/output",676361230))){
var e = cljs.core.subvec.call(null,ds,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accumulate-raw-output","accumulate-raw-output",29723652),lt], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null),(cljs.core.truth_(cljs.core.first.call(null,e))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,cljs.core.subvec.call(null,ds,(0),(2))], null):null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75553){if((e75553 instanceof Error)){
var e__42700__auto____$7 = e75553;
if((e__42700__auto____$7 === cljs.core.match.backtrack)){
try{var ds_left__75441_1__75444 = cljs.core.nth.call(null,ds_left__75441,(1));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_left__75441_1__75444,new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312))){
var e = cljs.core.subvec.call(null,ds,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-raw-value","set-raw-value",1535706831),dot,lt], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null),(cljs.core.truth_(cljs.core.first.call(null,e))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,cljs.core.subvec.call(null,ds,(0),(2))], null):null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75554){if((e75554 instanceof Error)){
var e__42700__auto____$8 = e75554;
if((e__42700__auto____$8 === cljs.core.match.backtrack)){
try{var ds_left__75441_1__75444 = cljs.core.nth.call(null,ds_left__75441,(1));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_left__75441_1__75444,new cljs.core.Keyword("unicodots.dot","macro","unicodots.dot/macro",-251196527))){
var e = cljs.core.subvec.call(null,ds,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append-macro","append-macro",-371057384),dot,lt], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null),(cljs.core.truth_(cljs.core.first.call(null,e))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,cljs.core.subvec.call(null,ds,(0),(2))], null):null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75555){if((e75555 instanceof Error)){
var e__42700__auto____$9 = e75555;
if((e__42700__auto____$9 === cljs.core.match.backtrack)){
try{var ds_left__75441_1__75444 = cljs.core.nth.call(null,ds_left__75441,(1));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_left__75441_1__75444,new cljs.core.Keyword("unicodots.dot","pipe","unicodots.dot/pipe",-1773002128))){
var e = cljs.core.subvec.call(null,ds,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-raw-input","send-raw-input",330082071),lt], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null),(cljs.core.truth_(cljs.core.first.call(null,e))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,cljs.core.subvec.call(null,ds,(0),(2))], null):null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75556){if((e75556 instanceof Error)){
var e__42700__auto____$10 = e75556;
if((e__42700__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$10;
}
} else {
throw e75556;

}
}} else {
throw e__42700__auto____$9;
}
} else {
throw e75555;

}
}} else {
throw e__42700__auto____$8;
}
} else {
throw e75554;

}
}} else {
throw e__42700__auto____$7;
}
} else {
throw e75553;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75552){if((e75552 instanceof Error)){
var e__42700__auto____$7 = e75552;
if((e__42700__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$7;
}
} else {
throw e75552;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75551){if((e75551 instanceof Error)){
var e__42700__auto____$7 = e75551;
if((e__42700__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$7;
}
} else {
throw e75551;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75477){if((e75477 instanceof Error)){
var e__42700__auto____$7 = e75477;
if((e__42700__auto____$7 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ds)) && ((cljs.core.count.call(null,ds) >= (1)))){
try{var ds_left__75445 = cljs.core.subvec.call(null,ds,(0),(1));
if((cljs.core.vector_QMARK_.call(null,ds_left__75445)) && ((cljs.core.count.call(null,ds_left__75445) === (1)))){
try{var ds_left__75445_0__75447 = cljs.core.nth.call(null,ds_left__75445,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_left__75445_0__75447,new cljs.core.Keyword("unicodots.dot","enqueued","unicodots.dot/enqueued",2079248603))){
var t = cljs.core.subvec.call(null,ds,(1));
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e75550){if((e75550 instanceof Error)){
var e__42700__auto____$8 = e75550;
if((e__42700__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$8;
}
} else {
throw e75550;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75549){if((e75549 instanceof Error)){
var e__42700__auto____$8 = e75549;
if((e__42700__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$8;
}
} else {
throw e75549;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75478){if((e75478 instanceof Error)){
var e__42700__auto____$8 = e75478;
if((e__42700__auto____$8 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,lt)) && ((cljs.core.count.call(null,lt) === 1))){
try{var lt_0__75448 = cljs.core.nth.call(null,lt,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,lt_0__75448,new cljs.core.Keyword("unicodots.dot","die","unicodots.dot/die",1403329859))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kill-dot","kill-dot",766759912),dot], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75548){if((e75548 instanceof Error)){
var e__42700__auto____$9 = e75548;
if((e__42700__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$9;
}
} else {
throw e75548;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75479){if((e75479 instanceof Error)){
var e__42700__auto____$9 = e75479;
if((e__42700__auto____$9 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,lt)) && ((cljs.core.count.call(null,lt) === 2))){
try{var lt_0__75449 = cljs.core.nth.call(null,lt,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,lt_0__75449,new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517))){
var direction = cljs.core.nth.call(null,lt,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reflect","reflect",-2113821122),direction], null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75534){if((e75534 instanceof Error)){
var e__42700__auto____$10 = e75534;
if((e__42700__auto____$10 === cljs.core.match.backtrack)){
try{var lt_0__75449 = cljs.core.nth.call(null,lt,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,lt_0__75449,new cljs.core.Keyword("unicodots.dot","merge","unicodots.dot/merge",11990608))){
var direction = cljs.core.nth.call(null,lt,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force","force",781957286),direction], null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75535){if((e75535 instanceof Error)){
var e__42700__auto____$11 = e75535;
if((e__42700__auto____$11 === cljs.core.match.backtrack)){
try{var lt_0__75449 = cljs.core.nth.call(null,lt,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,lt_0__75449,new cljs.core.Keyword("unicodots.dot","path","unicodots.dot/path",2022610237))){
var direction = cljs.core.nth.call(null,lt,(1));
var direction__$1 = direction;
var ocr_75537 = dot.call(null,new cljs.core.Keyword("unicodots.dot","dir","unicodots.dot/dir",337918054));
try{if(cljs.core.keyword_identical_QMARK_.call(null,direction__$1,new cljs.core.Keyword("unicodots.dot","both","unicodots.dot/both",1608890935))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","moving","unicodots.dot/moving",-450286281)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75541){if((e75541 instanceof Error)){
var e__42700__auto____$12 = e75541;
if((e__42700__auto____$12 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,direction__$1,new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_75537,new cljs.core.Keyword("unicodots.dot","left","unicodots.dot/left",-1804382626))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","moving","unicodots.dot/moving",-450286281)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75546){if((e75546 instanceof Error)){
var e__42700__auto____$13 = e75546;
if((e__42700__auto____$13 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_75537,new cljs.core.Keyword("unicodots.dot","right","unicodots.dot/right",1891880246))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","moving","unicodots.dot/moving",-450286281)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75547){if((e75547 instanceof Error)){
var e__42700__auto____$14 = e75547;
if((e__42700__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$14;
}
} else {
throw e75547;

}
}} else {
throw e__42700__auto____$13;
}
} else {
throw e75546;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75542){if((e75542 instanceof Error)){
var e__42700__auto____$13 = e75542;
if((e__42700__auto____$13 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,direction__$1,new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875))){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_75537,new cljs.core.Keyword("unicodots.dot","up","unicodots.dot/up",1806884368))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","moving","unicodots.dot/moving",-450286281)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75544){if((e75544 instanceof Error)){
var e__42700__auto____$14 = e75544;
if((e__42700__auto____$14 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_75537,new cljs.core.Keyword("unicodots.dot","down","unicodots.dot/down",-1047897727))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","moving","unicodots.dot/moving",-450286281)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75545){if((e75545 instanceof Error)){
var e__42700__auto____$15 = e75545;
if((e__42700__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$15;
}
} else {
throw e75545;

}
}} else {
throw e__42700__auto____$14;
}
} else {
throw e75544;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75543){if((e75543 instanceof Error)){
var e__42700__auto____$14 = e75543;
if((e__42700__auto____$14 === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kill-dot","kill-dot",766759912),dot], null)], null);
} else {
throw e__42700__auto____$14;
}
} else {
throw e75543;

}
}} else {
throw e__42700__auto____$13;
}
} else {
throw e75542;

}
}} else {
throw e__42700__auto____$12;
}
} else {
throw e75541;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75536){if((e75536 instanceof Error)){
var e__42700__auto____$12 = e75536;
if((e__42700__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$12;
}
} else {
throw e75536;

}
}} else {
throw e__42700__auto____$11;
}
} else {
throw e75535;

}
}} else {
throw e__42700__auto____$10;
}
} else {
throw e75534;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75480){if((e75480 instanceof Error)){
var e__42700__auto____$10 = e75480;
if((e__42700__auto____$10 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,lt)) && ((cljs.core.count.call(null,lt) === 1))){
try{var lt_0__75451 = cljs.core.nth.call(null,lt,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,lt_0__75451,new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312))){
try{if((cljs.core.vector_QMARK_.call(null,ds)) && ((cljs.core.count.call(null,ds) === 1))){
try{var ds_0__75452 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75452,new cljs.core.Keyword("unicodots.dot","output","unicodots.dot/output",676361230))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-output","send-output",597270720),dot.call(null,new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","moving","unicodots.dot/moving",-450286281)], null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75530){if((e75530 instanceof Error)){
var e__42700__auto____$11 = e75530;
if((e__42700__auto____$11 === cljs.core.match.backtrack)){
try{var ds_0__75452 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75452,new cljs.core.Keyword("unicodots.dot","pipe","unicodots.dot/pipe",-1773002128))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-input","send-input",-1972386700),dot.call(null,new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","moving","unicodots.dot/moving",-450286281)], null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75531){if((e75531 instanceof Error)){
var e__42700__auto____$12 = e75531;
if((e__42700__auto____$12 === cljs.core.match.backtrack)){
try{var ds_0__75452 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75452,new cljs.core.Keyword("unicodots.dot","macro","unicodots.dot/macro",-251196527))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-macro","set-macro",-1095393929),dot,dot.call(null,new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","moving","unicodots.dot/moving",-450286281)], null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75532){if((e75532 instanceof Error)){
var e__42700__auto____$13 = e75532;
if((e__42700__auto____$13 === cljs.core.match.backtrack)){
try{var ds_0__75452 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75452,new cljs.core.Keyword("unicodots.dot","moving","unicodots.dot/moving",-450286281))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75533){if((e75533 instanceof Error)){
var e__42700__auto____$14 = e75533;
if((e__42700__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$14;
}
} else {
throw e75533;

}
}} else {
throw e__42700__auto____$13;
}
} else {
throw e75532;

}
}} else {
throw e__42700__auto____$12;
}
} else {
throw e75531;

}
}} else {
throw e__42700__auto____$11;
}
} else {
throw e75530;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75529){if((e75529 instanceof Error)){
var e__42700__auto____$11 = e75529;
if((e__42700__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$11;
}
} else {
throw e75529;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75499){if((e75499 instanceof Error)){
var e__42700__auto____$11 = e75499;
if((e__42700__auto____$11 === cljs.core.match.backtrack)){
try{var lt_0__75451 = cljs.core.nth.call(null,lt,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,lt_0__75451,new cljs.core.Keyword("unicodots.dot","macro","unicodots.dot/macro",-251196527))){
try{if((cljs.core.vector_QMARK_.call(null,ds)) && ((cljs.core.count.call(null,ds) === 1))){
try{var ds_0__75453 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75453,new cljs.core.Keyword("unicodots.dot","output","unicodots.dot/output",676361230))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-output","send-output",597270720),dot.call(null,new cljs.core.Keyword("unicodots.dot","macro","unicodots.dot/macro",-251196527))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75525){if((e75525 instanceof Error)){
var e__42700__auto____$12 = e75525;
if((e__42700__auto____$12 === cljs.core.match.backtrack)){
try{var ds_0__75453 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75453,new cljs.core.Keyword("unicodots.dot","pipe","unicodots.dot/pipe",-1773002128))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-input","send-input",-1972386700),dot.call(null,new cljs.core.Keyword("unicodots.dot","macro","unicodots.dot/macro",-251196527))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75526){if((e75526 instanceof Error)){
var e__42700__auto____$13 = e75526;
if((e__42700__auto____$13 === cljs.core.match.backtrack)){
try{var ds_0__75453 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75453,new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-value","set-value",445227352),dot,dot.call(null,new cljs.core.Keyword("unicodots.dot","macro","unicodots.dot/macro",-251196527))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75527){if((e75527 instanceof Error)){
var e__42700__auto____$14 = e75527;
if((e__42700__auto____$14 === cljs.core.match.backtrack)){
try{var ds_0__75453 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75453,new cljs.core.Keyword("unicodots.dot","moving","unicodots.dot/moving",-450286281))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","macro","unicodots.dot/macro",-251196527)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75528){if((e75528 instanceof Error)){
var e__42700__auto____$15 = e75528;
if((e__42700__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$15;
}
} else {
throw e75528;

}
}} else {
throw e__42700__auto____$14;
}
} else {
throw e75527;

}
}} else {
throw e__42700__auto____$13;
}
} else {
throw e75526;

}
}} else {
throw e__42700__auto____$12;
}
} else {
throw e75525;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75524){if((e75524 instanceof Error)){
var e__42700__auto____$12 = e75524;
if((e__42700__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$12;
}
} else {
throw e75524;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75500){if((e75500 instanceof Error)){
var e__42700__auto____$12 = e75500;
if((e__42700__auto____$12 === cljs.core.match.backtrack)){
try{var lt_0__75451 = cljs.core.nth.call(null,lt,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,lt_0__75451,new cljs.core.Keyword("unicodots.dot","output","unicodots.dot/output",676361230))){
try{if((cljs.core.vector_QMARK_.call(null,ds)) && ((cljs.core.count.call(null,ds) === 1))){
try{var ds_0__75454 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75454,new cljs.core.Keyword("unicodots.dot","output","unicodots.dot/output",676361230))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75520){if((e75520 instanceof Error)){
var e__42700__auto____$13 = e75520;
if((e__42700__auto____$13 === cljs.core.match.backtrack)){
try{var ds_0__75454 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75454,new cljs.core.Keyword("unicodots.dot","pipe","unicodots.dot/pipe",-1773002128))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75521){if((e75521 instanceof Error)){
var e__42700__auto____$14 = e75521;
if((e__42700__auto____$14 === cljs.core.match.backtrack)){
try{var ds_0__75454 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75454,new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75522){if((e75522 instanceof Error)){
var e__42700__auto____$15 = e75522;
if((e__42700__auto____$15 === cljs.core.match.backtrack)){
try{var ds_0__75454 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75454,new cljs.core.Keyword("unicodots.dot","moving","unicodots.dot/moving",-450286281))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","output","unicodots.dot/output",676361230)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75523){if((e75523 instanceof Error)){
var e__42700__auto____$16 = e75523;
if((e__42700__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$16;
}
} else {
throw e75523;

}
}} else {
throw e__42700__auto____$15;
}
} else {
throw e75522;

}
}} else {
throw e__42700__auto____$14;
}
} else {
throw e75521;

}
}} else {
throw e__42700__auto____$13;
}
} else {
throw e75520;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75519){if((e75519 instanceof Error)){
var e__42700__auto____$13 = e75519;
if((e__42700__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$13;
}
} else {
throw e75519;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75501){if((e75501 instanceof Error)){
var e__42700__auto____$13 = e75501;
if((e__42700__auto____$13 === cljs.core.match.backtrack)){
try{var lt_0__75451 = cljs.core.nth.call(null,lt,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,lt_0__75451,new cljs.core.Keyword("unicodots.dot","pipe","unicodots.dot/pipe",-1773002128))){
try{if((cljs.core.vector_QMARK_.call(null,ds)) && ((cljs.core.count.call(null,ds) === 1))){
try{var ds_0__75455 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75455,new cljs.core.Keyword("unicodots.dot","output","unicodots.dot/output",676361230))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75515){if((e75515 instanceof Error)){
var e__42700__auto____$14 = e75515;
if((e__42700__auto____$14 === cljs.core.match.backtrack)){
try{var ds_0__75455 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75455,new cljs.core.Keyword("unicodots.dot","pipe","unicodots.dot/pipe",-1773002128))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75516){if((e75516 instanceof Error)){
var e__42700__auto____$15 = e75516;
if((e__42700__auto____$15 === cljs.core.match.backtrack)){
try{var ds_0__75455 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75455,new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75517){if((e75517 instanceof Error)){
var e__42700__auto____$16 = e75517;
if((e__42700__auto____$16 === cljs.core.match.backtrack)){
try{var ds_0__75455 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75455,new cljs.core.Keyword("unicodots.dot","moving","unicodots.dot/moving",-450286281))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","pipe","unicodots.dot/pipe",-1773002128)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75518){if((e75518 instanceof Error)){
var e__42700__auto____$17 = e75518;
if((e__42700__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$17;
}
} else {
throw e75518;

}
}} else {
throw e__42700__auto____$16;
}
} else {
throw e75517;

}
}} else {
throw e__42700__auto____$15;
}
} else {
throw e75516;

}
}} else {
throw e__42700__auto____$14;
}
} else {
throw e75515;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75514){if((e75514 instanceof Error)){
var e__42700__auto____$14 = e75514;
if((e__42700__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$14;
}
} else {
throw e75514;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75502){if((e75502 instanceof Error)){
var e__42700__auto____$14 = e75502;
if((e__42700__auto____$14 === cljs.core.match.backtrack)){
try{var lt_0__75451 = cljs.core.nth.call(null,lt,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,lt_0__75451,new cljs.core.Keyword("unicodots.dot","quote","unicodots.dot/quote",-2044282828))){
try{if((cljs.core.vector_QMARK_.call(null,ds)) && ((cljs.core.count.call(null,ds) === 1))){
try{var ds_0__75456 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75456,new cljs.core.Keyword("unicodots.dot","output","unicodots.dot/output",676361230))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","quote","unicodots.dot/quote",-2044282828),new cljs.core.Keyword("unicodots.dot","output","unicodots.dot/output",676361230)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75511){if((e75511 instanceof Error)){
var e__42700__auto____$15 = e75511;
if((e__42700__auto____$15 === cljs.core.match.backtrack)){
try{var ds_0__75456 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75456,new cljs.core.Keyword("unicodots.dot","pipe","unicodots.dot/pipe",-1773002128))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","quote","unicodots.dot/quote",-2044282828),new cljs.core.Keyword("unicodots.dot","pipe","unicodots.dot/pipe",-1773002128)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75512){if((e75512 instanceof Error)){
var e__42700__auto____$16 = e75512;
if((e__42700__auto____$16 === cljs.core.match.backtrack)){
try{var ds_0__75456 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75456,new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","quote","unicodots.dot/quote",-2044282828),new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75513){if((e75513 instanceof Error)){
var e__42700__auto____$17 = e75513;
if((e__42700__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$17;
}
} else {
throw e75513;

}
}} else {
throw e__42700__auto____$16;
}
} else {
throw e75512;

}
}} else {
throw e__42700__auto____$15;
}
} else {
throw e75511;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75504){if((e75504 instanceof Error)){
var e__42700__auto____$15 = e75504;
if((e__42700__auto____$15 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ds)) && ((cljs.core.count.call(null,ds) >= (1)))){
try{var ds_left__75457 = cljs.core.subvec.call(null,ds,(0),(1));
if((cljs.core.vector_QMARK_.call(null,ds_left__75457)) && ((cljs.core.count.call(null,ds_left__75457) === (1)))){
try{var ds_left__75457_0__75459 = cljs.core.nth.call(null,ds_left__75457,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_left__75457_0__75459,new cljs.core.Keyword("unicodots.dot","quote","unicodots.dot/quote",-2044282828))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-dot-quote","end-dot-quote",-720614649),dot], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75510){if((e75510 instanceof Error)){
var e__42700__auto____$16 = e75510;
if((e__42700__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$16;
}
} else {
throw e75510;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75509){if((e75509 instanceof Error)){
var e__42700__auto____$16 = e75509;
if((e__42700__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$16;
}
} else {
throw e75509;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75505){if((e75505 instanceof Error)){
var e__42700__auto____$16 = e75505;
if((e__42700__auto____$16 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ds)) && ((cljs.core.count.call(null,ds) === 1))){
try{var ds_0__75460 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75460,new cljs.core.Keyword("unicodots.dot","moving","unicodots.dot/moving",-450286281))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","quote","unicodots.dot/quote",-2044282828)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75507){if((e75507 instanceof Error)){
var e__42700__auto____$17 = e75507;
if((e__42700__auto____$17 === cljs.core.match.backtrack)){
try{var ds_0__75460 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75460,new cljs.core.Keyword("unicodots.dot","macro","unicodots.dot/macro",-251196527))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),dot,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","quote","unicodots.dot/quote",-2044282828),new cljs.core.Keyword("unicodots.dot","macro","unicodots.dot/macro",-251196527)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75508){if((e75508 instanceof Error)){
var e__42700__auto____$18 = e75508;
if((e__42700__auto____$18 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$18;
}
} else {
throw e75508;

}
}} else {
throw e__42700__auto____$17;
}
} else {
throw e75507;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75506){if((e75506 instanceof Error)){
var e__42700__auto____$17 = e75506;
if((e__42700__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$17;
}
} else {
throw e75506;

}
}} else {
throw e__42700__auto____$16;
}
} else {
throw e75505;

}
}} else {
throw e__42700__auto____$15;
}
} else {
throw e75504;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75503){if((e75503 instanceof Error)){
var e__42700__auto____$15 = e75503;
if((e__42700__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$15;
}
} else {
throw e75503;

}
}} else {
throw e__42700__auto____$14;
}
} else {
throw e75502;

}
}} else {
throw e__42700__auto____$13;
}
} else {
throw e75501;

}
}} else {
throw e__42700__auto____$12;
}
} else {
throw e75500;

}
}} else {
throw e__42700__auto____$11;
}
} else {
throw e75499;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75481){if((e75481 instanceof Error)){
var e__42700__auto____$11 = e75481;
if((e__42700__auto____$11 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,lt)) && ((cljs.core.count.call(null,lt) === 2))){
try{var lt_0__75461 = cljs.core.nth.call(null,lt,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,lt_0__75461,new cljs.core.Keyword("unicodots.dot","literal","unicodots.dot/literal",-814248776))){
try{if((cljs.core.vector_QMARK_.call(null,ds)) && ((cljs.core.count.call(null,ds) === 1))){
try{var ds_0__75463 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75463,new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312))){
var x = cljs.core.nth.call(null,lt,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append-value","append-value",222746039),dot,x], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75496){if((e75496 instanceof Error)){
var e__42700__auto____$12 = e75496;
if((e__42700__auto____$12 === cljs.core.match.backtrack)){
try{var ds_0__75463 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75463,new cljs.core.Keyword("unicodots.dot","moving","unicodots.dot/moving",-450286281))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75497){if((e75497 instanceof Error)){
var e__42700__auto____$13 = e75497;
if((e__42700__auto____$13 === cljs.core.match.backtrack)){
try{var ds_0__75463 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75463,new cljs.core.Keyword("unicodots.dot","output","unicodots.dot/output",676361230))){
var x = cljs.core.nth.call(null,lt,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-output","send-output",597270720),x], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),dot,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75498){if((e75498 instanceof Error)){
var e__42700__auto____$14 = e75498;
if((e__42700__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$14;
}
} else {
throw e75498;

}
}} else {
throw e__42700__auto____$13;
}
} else {
throw e75497;

}
}} else {
throw e__42700__auto____$12;
}
} else {
throw e75496;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75495){if((e75495 instanceof Error)){
var e__42700__auto____$12 = e75495;
if((e__42700__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$12;
}
} else {
throw e75495;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75494){if((e75494 instanceof Error)){
var e__42700__auto____$12 = e75494;
if((e__42700__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$12;
}
} else {
throw e75494;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75482){if((e75482 instanceof Error)){
var e__42700__auto____$12 = e75482;
if((e__42700__auto____$12 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,lt)) && ((cljs.core.count.call(null,lt) === 1))){
try{var lt_0__75464 = cljs.core.nth.call(null,lt,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,lt_0__75464,new cljs.core.Keyword("unicodots.dot","duplicate","unicodots.dot/duplicate",-2042962049))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"duplicate-dot","duplicate-dot",120254365),dot,tile], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75493){if((e75493 instanceof Error)){
var e__42700__auto____$13 = e75493;
if((e__42700__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$13;
}
} else {
throw e75493;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75483){if((e75483 instanceof Error)){
var e__42700__auto____$13 = e75483;
if((e__42700__auto____$13 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ds)) && ((cljs.core.count.call(null,ds) === 1))){
try{var ds_0__75465 = cljs.core.nth.call(null,ds,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,ds_0__75465,new cljs.core.Keyword("unicodots.dot","enqueued","unicodots.dot/enqueued",2079248603))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e75492){if((e75492 instanceof Error)){
var e__42700__auto____$14 = e75492;
if((e__42700__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$14;
}
} else {
throw e75492;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75484){if((e75484 instanceof Error)){
var e__42700__auto____$14 = e75484;
if((e__42700__auto____$14 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,lt)) && ((cljs.core.count.call(null,lt) >= (1)))){
try{var lt_left__75466 = cljs.core.subvec.call(null,lt,(0),(1));
if((cljs.core.vector_QMARK_.call(null,lt_left__75466)) && ((cljs.core.count.call(null,lt_left__75466) === (1)))){
try{var lt_left__75466_0__75468 = cljs.core.nth.call(null,lt_left__75466,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,lt_left__75466_0__75468,new cljs.core.Keyword("unicodots.dot","conditional","unicodots.dot/conditional",-625990976))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enqueue-fn","enqueue-fn",-33048880),tile,dot], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75490){if((e75490 instanceof Error)){
var e__42700__auto____$15 = e75490;
if((e__42700__auto____$15 === cljs.core.match.backtrack)){
try{var lt_left__75466_0__75468 = cljs.core.nth.call(null,lt_left__75466,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,lt_left__75466_0__75468,new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enqueue-fn","enqueue-fn",-33048880),tile,dot], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75491){if((e75491 instanceof Error)){
var e__42700__auto____$16 = e75491;
if((e__42700__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$16;
}
} else {
throw e75491;

}
}} else {
throw e__42700__auto____$15;
}
} else {
throw e75490;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75489){if((e75489 instanceof Error)){
var e__42700__auto____$15 = e75489;
if((e__42700__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$15;
}
} else {
throw e75489;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75485){if((e75485 instanceof Error)){
var e__42700__auto____$15 = e75485;
if((e__42700__auto____$15 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,lt)) && ((cljs.core.count.call(null,lt) === 1))){
try{var lt_0__75469 = cljs.core.nth.call(null,lt,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,lt_0__75469,new cljs.core.Keyword("unicodots.dot","input","unicodots.dot/input",-1125101444))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enqueue-input","enqueue-input",-459177142),dot], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75487){if((e75487 instanceof Error)){
var e__42700__auto____$16 = e75487;
if((e__42700__auto____$16 === cljs.core.match.backtrack)){
try{var lt_0__75469 = cljs.core.nth.call(null,lt,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,lt_0__75469,new cljs.core.Keyword("unicodots.dot","empty-tile","unicodots.dot/empty-tile",1164893653))){
if(cljs.core.empty_QMARK_.call(null,dot.call(null,new cljs.core.Keyword("unicodots.dot","macro-stack","unicodots.dot/macro-stack",176293186)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kill-dot","kill-dot",766759912),dot], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-macro","apply-macro",-858358150),dot], null)], null);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e75488){if((e75488 instanceof Error)){
var e__42700__auto____$17 = e75488;
if((e__42700__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$17;
}
} else {
throw e75488;

}
}} else {
throw e__42700__auto____$16;
}
} else {
throw e75487;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75486){if((e75486 instanceof Error)){
var e__42700__auto____$16 = e75486;
if((e__42700__auto____$16 === cljs.core.match.backtrack)){
return null;
} else {
throw e__42700__auto____$16;
}
} else {
throw e75486;

}
}} else {
throw e__42700__auto____$15;
}
} else {
throw e75485;

}
}} else {
throw e__42700__auto____$14;
}
} else {
throw e75484;

}
}} else {
throw e__42700__auto____$13;
}
} else {
throw e75483;

}
}} else {
throw e__42700__auto____$12;
}
} else {
throw e75482;

}
}} else {
throw e__42700__auto____$11;
}
} else {
throw e75481;

}
}} else {
throw e__42700__auto____$10;
}
} else {
throw e75480;

}
}} else {
throw e__42700__auto____$9;
}
} else {
throw e75479;

}
}} else {
throw e__42700__auto____$8;
}
} else {
throw e75478;

}
}} else {
throw e__42700__auto____$7;
}
} else {
throw e75477;

}
}} else {
throw e__42700__auto____$6;
}
} else {
throw e75476;

}
}} else {
throw e__42700__auto____$5;
}
} else {
throw e75475;

}
}} else {
throw e__42700__auto____$4;
}
} else {
throw e75474;

}
}} else {
throw e__42700__auto____$3;
}
} else {
throw e75473;

}
}} else {
throw e__42700__auto____$2;
}
} else {
throw e75472;

}
}} else {
throw e__42700__auto____$1;
}
} else {
throw e75471;

}
}} else {
throw e__42700__auto__;
}
} else {
throw e75470;

}
}})();
cljs.core.println.call(null,"actions",lt,ds," - ",actions);

return cljs.core.vec.call(null,cljs.core.filter.call(null,cljs.core.identity,actions));
});

//# sourceMappingURL=dot.js.map?rel=1503610094308