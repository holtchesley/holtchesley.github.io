// Compiled by ClojureScript 1.9.229 {}
goog.provide('unicodots.views');
goog.require('cljs.core');
goog.require('unicodots.dot');
goog.require('re_frame.loggers');
goog.require('goog.events.EventType');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('cljs.core.match');
goog.require('re_frame.core');
unicodots.views.log = new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(re_frame.loggers.get_loggers.call(null));
unicodots.views.grid_coord = (function unicodots$views$grid_coord(p__75591){
var vec__75595 = p__75591;
var x = cljs.core.nth.call(null,vec__75595,(0),null);
var y = cljs.core.nth.call(null,vec__75595,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-column","grid-column",-1086912770),x,new cljs.core.Keyword(null,"grid-row","grid-row",-1737175087),y], null)], null);
});
unicodots.views.location_type_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","path","unicodots.dot/path",2022610237),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-divide","unicodots.dot/fn-divide",427270258)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-multiply","unicodots.dot/fn-multiply",1935832001)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","right","unicodots.dot/right",1891880246)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-or","unicodots.dot/fn-or",1937817482)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-minus","unicodots.dot/fn-minus",416486403)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","macro","unicodots.dot/macro",-251196527)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-equal","unicodots.dot/fn-equal",-208512875)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-mod","unicodots.dot/fn-mod",-1956214496)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-greater-than","unicodots.dot/fn-greater-than",110426633)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","duplicate","unicodots.dot/duplicate",-2042962049)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-less-than","unicodots.dot/fn-less-than",-452179320)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-mod","unicodots.dot/fn-mod",-1956214496)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-greater-than-or-equal","unicodots.dot/fn-greater-than-or-equal",2050841584)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","merge","unicodots.dot/merge",11990608),new cljs.core.Keyword("unicodots.dot","down","unicodots.dot/down",-1047897727)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","down","unicodots.dot/down",-1047897727)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","conditional","unicodots.dot/conditional",-625990976),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-add","unicodots.dot/fn-add",-71095252)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-less-than","unicodots.dot/fn-less-than",-452179320)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","merge","unicodots.dot/merge",11990608),new cljs.core.Keyword("unicodots.dot","left","unicodots.dot/left",-1804382626)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-or","unicodots.dot/fn-or",1937817482)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","left","unicodots.dot/left",-1804382626)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-exponent","unicodots.dot/fn-exponent",-542228252)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-exponent","unicodots.dot/fn-exponent",-542228252)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-add","unicodots.dot/fn-add",-71095252)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-equal","unicodots.dot/fn-equal",-208512875)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","quote","unicodots.dot/quote",-2044282828)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","input","unicodots.dot/input",-1125101444)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","negative","unicodots.dot/negative",656102191)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","up","unicodots.dot/up",1806884368)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-greater-than-or-equal","unicodots.dot/fn-greater-than-or-equal",2050841584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-xor","unicodots.dot/fn-xor",-490474062)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","path","unicodots.dot/path",2022610237),new cljs.core.Keyword("unicodots.dot","both","unicodots.dot/both",1608890935)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","output","unicodots.dot/output",676361230)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-divide","unicodots.dot/fn-divide",427270258)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","path","unicodots.dot/path",2022610237),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","empty-tile","unicodots.dot/empty-tile",1164893653)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-multiply","unicodots.dot/fn-multiply",1935832001)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-xor","unicodots.dot/fn-xor",-490474062)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","conditional","unicodots.dot/conditional",-625990976),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","positive","unicodots.dot/positive",-804211159)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","die","unicodots.dot/die",1403329859)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","merge","unicodots.dot/merge",11990608),new cljs.core.Keyword("unicodots.dot","up","unicodots.dot/up",1806884368)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-greater-than","unicodots.dot/fn-greater-than",110426633)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-and","unicodots.dot/fn-and",233237803)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","merge","unicodots.dot/merge",11990608),new cljs.core.Keyword("unicodots.dot","right","unicodots.dot/right",1891880246)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-minus","unicodots.dot/fn-minus",416486403)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-less-than-or-equal","unicodots.dot/fn-less-than-or-equal",182065575)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-and","unicodots.dot/fn-and",233237803)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-less-than-or-equal","unicodots.dot/fn-less-than-or-equal",182065575)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-not-equal","unicodots.dot/fn-not-equal",-504536438)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-not-equal","unicodots.dot/fn-not-equal",-504536438)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312)], null)],["|","[\u00F7]","{*}","(","{o}","{-}","@","{=}","[%]","[>]","*","{<}","{%}","{\u2265}","V","\u03A9","~","[+]","[<]","<","[o]",")","[^]","{^}","{+}","[=]","\"","?","\\","U","[\u2265]","[x]","+","$","{\u00F7}","\u2014","\u25A0","[*]","{x}","\uFE34","/","&","^","{>}","{a}",">","[-]","{\u2264}","[a]","[\u2264]","[\u2260]","{\u2260}","#"]);
unicodots.views.get_location_image = (function unicodots$views$get_location_image(tile_type){
return cljs.core.get.call(null,unicodots.views.location_type_map,tile_type,"\uFFFD");
});
unicodots.views.empty_location = (function unicodots$views$empty_location(l,t){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paint-tile","paint-tile",-1069487849),l], null));
})], null),unicodots.views.grid_coord.call(null,l)),t], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),l], null)], null));
});
unicodots.views.tiled_location = (function unicodots$views$tiled_location(p__75598,theme){
var map__75601 = p__75598;
var map__75601__$1 = ((((!((map__75601 == null)))?((((map__75601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75601):map__75601);
var l = cljs.core.get.call(null,map__75601__$1,new cljs.core.Keyword("unicodots.dot","location","unicodots.dot/location",-260689895));
var t = cljs.core.get.call(null,map__75601__$1,new cljs.core.Keyword("unicodots.dot","location-type","unicodots.dot/location-type",806658017));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__75601,map__75601__$1,l,t){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paint-tile","paint-tile",-1069487849),l], null));
});})(map__75601,map__75601__$1,l,t))
], null),unicodots.views.grid_coord.call(null,l)),((cljs.core._EQ_.call(null,cljs.core.first.call(null,t),new cljs.core.Keyword("unicodots.dot","literal","unicodots.dot/literal",-814248776)))?cljs.core.second.call(null,t):cljs.core.get.call(null,theme,t,"?"))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),l], null)], null));
});
unicodots.views.top_bar = (function unicodots$views$top_bar(){
var delay_slider_val = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step-delay-val","step-delay-val",496529960)], null));
return ((function (delay_slider_val){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#header","div#header",-546369869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"top-bar"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (delay_slider_val){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step-program","step-program",-1911111376)], null));
});})(delay_slider_val))
], null),"\u23E9"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (delay_slider_val){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-program-stepping","start-program-stepping",1317357406)], null));
});})(delay_slider_val))
], null),"\u25B6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (delay_slider_val){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop-program-stepping","stop-program-stepping",1952359295)], null));
});})(delay_slider_val))
], null),"\u23F8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"50ms"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(2),new cljs.core.Keyword(null,"step","step",1288888124),"0.01",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,delay_slider_val),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (delay_slider_val){
return (function (p1__75603_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-step-timer","set-step-timer",2071590080),(((50) * Math.pow((10),p1__75603_SHARP_.target.value)) | (0))], null));
});})(delay_slider_val))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"5000ms"], null)], null);
});
;})(delay_slider_val))
});
unicodots.views.output_display = (function unicodots$views$output_display(){
var outputs = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output","output",-1105869043)], null));
return ((function (outputs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"outputs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"__Output__"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-container"], null),cljs.core.map_indexed.call(null,((function (outputs){
return (function (i,o){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),o], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
});})(outputs))
,cljs.core.deref.call(null,outputs))], null)], null);
});
;})(outputs))
});
unicodots.views.input_display = (function unicodots$views$input_display(){
var input = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961)], null));
return ((function (input){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inputs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"__Inputs__"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,input),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (input){
return (function (e){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-input","update-input",-884820204),e.target.value], null));
});})(input))
], null)], null)], null);
});
;})(input))
});
unicodots.views.right_bar = (function unicodots$views$right_bar(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"right-bar"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"diagnostics"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unicodots.views.input_display], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unicodots.views.output_display], null)], null);
});
});
unicodots.views.left_bar = (function unicodots$views$left_bar(){
var theme = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"theme","theme",-1247880880)], null));
var tile_paint = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-paint","current-paint",1292257612)], null));
return ((function (theme,tile_paint){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"left-bar"], null),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.palettes","div.palettes",1026909371),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Paths"], null),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","path","unicodots.dot/path",2022610237),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","path","unicodots.dot/path",2022610237),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","path","unicodots.dot/path",2022610237),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","path","unicodots.dot/path",2022610237),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","path","unicodots.dot/path",2022610237),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","path","unicodots.dot/path",2022610237),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","path","unicodots.dot/path",2022610237),new cljs.core.Keyword("unicodots.dot","both","unicodots.dot/both",1608890935)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","path","unicodots.dot/path",2022610237),new cljs.core.Keyword("unicodots.dot","both","unicodots.dot/both",1608890935)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","path","unicodots.dot/path",2022610237),new cljs.core.Keyword("unicodots.dot","both","unicodots.dot/both",1608890935)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","positive","unicodots.dot/positive",-804211159)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","positive","unicodots.dot/positive",-804211159)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","positive","unicodots.dot/positive",-804211159)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","negative","unicodots.dot/negative",656102191)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","negative","unicodots.dot/negative",656102191)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","negative","unicodots.dot/negative",656102191)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","left","unicodots.dot/left",-1804382626)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","left","unicodots.dot/left",-1804382626)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","left","unicodots.dot/left",-1804382626)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","right","unicodots.dot/right",1891880246)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","right","unicodots.dot/right",1891880246)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","right","unicodots.dot/right",1891880246)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","up","unicodots.dot/up",1806884368)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","up","unicodots.dot/up",1806884368)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","up","unicodots.dot/up",1806884368)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","down","unicodots.dot/down",-1047897727)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","down","unicodots.dot/down",-1047897727)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","down","unicodots.dot/down",-1047897727)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","merge","unicodots.dot/merge",11990608),new cljs.core.Keyword("unicodots.dot","left","unicodots.dot/left",-1804382626)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","merge","unicodots.dot/merge",11990608),new cljs.core.Keyword("unicodots.dot","left","unicodots.dot/left",-1804382626)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","merge","unicodots.dot/merge",11990608),new cljs.core.Keyword("unicodots.dot","left","unicodots.dot/left",-1804382626)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","merge","unicodots.dot/merge",11990608),new cljs.core.Keyword("unicodots.dot","right","unicodots.dot/right",1891880246)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","merge","unicodots.dot/merge",11990608),new cljs.core.Keyword("unicodots.dot","right","unicodots.dot/right",1891880246)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","merge","unicodots.dot/merge",11990608),new cljs.core.Keyword("unicodots.dot","right","unicodots.dot/right",1891880246)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","merge","unicodots.dot/merge",11990608),new cljs.core.Keyword("unicodots.dot","up","unicodots.dot/up",1806884368)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","merge","unicodots.dot/merge",11990608),new cljs.core.Keyword("unicodots.dot","up","unicodots.dot/up",1806884368)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","merge","unicodots.dot/merge",11990608),new cljs.core.Keyword("unicodots.dot","up","unicodots.dot/up",1806884368)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","merge","unicodots.dot/merge",11990608),new cljs.core.Keyword("unicodots.dot","down","unicodots.dot/down",-1047897727)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","merge","unicodots.dot/merge",11990608),new cljs.core.Keyword("unicodots.dot","down","unicodots.dot/down",-1047897727)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","merge","unicodots.dot/merge",11990608),new cljs.core.Keyword("unicodots.dot","down","unicodots.dot/down",-1047897727)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","die","unicodots.dot/die",1403329859)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","die","unicodots.dot/die",1403329859)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","die","unicodots.dot/die",1403329859)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Misc"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","duplicate","unicodots.dot/duplicate",-2042962049)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","duplicate","unicodots.dot/duplicate",-2042962049)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","duplicate","unicodots.dot/duplicate",-2042962049)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","quote","unicodots.dot/quote",-2044282828)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","quote","unicodots.dot/quote",-2044282828)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","quote","unicodots.dot/quote",-2044282828)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","output","unicodots.dot/output",676361230)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","output","unicodots.dot/output",676361230)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","output","unicodots.dot/output",676361230)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","input","unicodots.dot/input",-1125101444)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","input","unicodots.dot/input",-1125101444)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","input","unicodots.dot/input",-1125101444)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","macro","unicodots.dot/macro",-251196527)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","macro","unicodots.dot/macro",-251196527)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","macro","unicodots.dot/macro",-251196527)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Conditionals"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","conditional","unicodots.dot/conditional",-625990976),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","conditional","unicodots.dot/conditional",-625990976),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","conditional","unicodots.dot/conditional",-625990976),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","conditional","unicodots.dot/conditional",-625990976),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","conditional","unicodots.dot/conditional",-625990976),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","conditional","unicodots.dot/conditional",-625990976),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Vertical Functions"], null),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","pre-function","unicodots.dot/pre-function",1123047392),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875)], null)))?"selected":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-add","unicodots.dot/fn-add",-71095252)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-add","unicodots.dot/fn-add",-71095252)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-add","unicodots.dot/fn-add",-71095252)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-minus","unicodots.dot/fn-minus",416486403)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-minus","unicodots.dot/fn-minus",416486403)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-minus","unicodots.dot/fn-minus",416486403)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-divide","unicodots.dot/fn-divide",427270258)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-divide","unicodots.dot/fn-divide",427270258)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-divide","unicodots.dot/fn-divide",427270258)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-multiply","unicodots.dot/fn-multiply",1935832001)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-multiply","unicodots.dot/fn-multiply",1935832001)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-multiply","unicodots.dot/fn-multiply",1935832001)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-modulus","unicodots.dot/fn-modulus",1430049486)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-modulus","unicodots.dot/fn-modulus",1430049486)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-mod","unicodots.dot/fn-mod",-1956214496)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-exponent","unicodots.dot/fn-exponent",-542228252)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-exponent","unicodots.dot/fn-exponent",-542228252)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-exponent","unicodots.dot/fn-exponent",-542228252)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-and","unicodots.dot/fn-and",233237803)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-and","unicodots.dot/fn-and",233237803)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-and","unicodots.dot/fn-and",233237803)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-or","unicodots.dot/fn-or",1937817482)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-or","unicodots.dot/fn-or",1937817482)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-or","unicodots.dot/fn-or",1937817482)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-xor","unicodots.dot/fn-xor",-490474062)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-xor","unicodots.dot/fn-xor",-490474062)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-xor","unicodots.dot/fn-xor",-490474062)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-greater-than","unicodots.dot/fn-greater-than",110426633)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-greater-than","unicodots.dot/fn-greater-than",110426633)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-greater-than","unicodots.dot/fn-greater-than",110426633)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-greater-than-or-equal","unicodots.dot/fn-greater-than-or-equal",2050841584)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-greater-than-or-equal","unicodots.dot/fn-greater-than-or-equal",2050841584)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-greater-than-or-equal","unicodots.dot/fn-greater-than-or-equal",2050841584)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-equal","unicodots.dot/fn-equal",-208512875)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-equal","unicodots.dot/fn-equal",-208512875)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-equal","unicodots.dot/fn-equal",-208512875)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-not-equal","unicodots.dot/fn-not-equal",-504536438)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-not-equal","unicodots.dot/fn-not-equal",-504536438)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-not-equal","unicodots.dot/fn-not-equal",-504536438)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-less-than-or-equal","unicodots.dot/fn-less-than-or-equal",182065575)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-less-than-or-equal","unicodots.dot/fn-less-than-or-equal",182065575)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-less-than-equal","unicodots.dot/fn-less-than-equal",1294992483)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-less-than","unicodots.dot/fn-less-than",-452179320)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-less-than","unicodots.dot/fn-less-than",-452179320)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875),new cljs.core.Keyword("unicodots.dot","fn-less-than","unicodots.dot/fn-less-than",-452179320)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Horizontal Functions"], null),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","pre-function","unicodots.dot/pre-function",1123047392),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522)], null)))?"selected":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-add","unicodots.dot/fn-add",-71095252)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-add","unicodots.dot/fn-add",-71095252)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-add","unicodots.dot/fn-add",-71095252)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-minus","unicodots.dot/fn-minus",416486403)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-minus","unicodots.dot/fn-minus",416486403)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-minus","unicodots.dot/fn-minus",416486403)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-divide","unicodots.dot/fn-divide",427270258)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-divide","unicodots.dot/fn-divide",427270258)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-divide","unicodots.dot/fn-divide",427270258)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-multiply","unicodots.dot/fn-multiply",1935832001)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-multiply","unicodots.dot/fn-multiply",1935832001)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-multiply","unicodots.dot/fn-multiply",1935832001)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-modulus","unicodots.dot/fn-modulus",1430049486)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-modulus","unicodots.dot/fn-modulus",1430049486)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-mod","unicodots.dot/fn-mod",-1956214496)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-exponent","unicodots.dot/fn-exponent",-542228252)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-exponent","unicodots.dot/fn-exponent",-542228252)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-exponent","unicodots.dot/fn-exponent",-542228252)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-and","unicodots.dot/fn-and",233237803)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-and","unicodots.dot/fn-and",233237803)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-and","unicodots.dot/fn-and",233237803)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-or","unicodots.dot/fn-or",1937817482)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-or","unicodots.dot/fn-or",1937817482)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-or","unicodots.dot/fn-or",1937817482)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-xor","unicodots.dot/fn-xor",-490474062)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-xor","unicodots.dot/fn-xor",-490474062)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-xor","unicodots.dot/fn-xor",-490474062)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-greater-than","unicodots.dot/fn-greater-than",110426633)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-greater-than","unicodots.dot/fn-greater-than",110426633)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-greater-than","unicodots.dot/fn-greater-than",110426633)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-greater-than-or-equal","unicodots.dot/fn-greater-than-or-equal",2050841584)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-greater-than-or-equal","unicodots.dot/fn-greater-than-or-equal",2050841584)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-greater-than-or-equal","unicodots.dot/fn-greater-than-or-equal",2050841584)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-equal","unicodots.dot/fn-equal",-208512875)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-equal","unicodots.dot/fn-equal",-208512875)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-equal","unicodots.dot/fn-equal",-208512875)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-not-equal","unicodots.dot/fn-not-equal",-504536438)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-not-equal","unicodots.dot/fn-not-equal",-504536438)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-not-equal","unicodots.dot/fn-not-equal",-504536438)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-less-than-or-equal","unicodots.dot/fn-less-than-or-equal",182065575)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-less-than-or-equal","unicodots.dot/fn-less-than-or-equal",182065575)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-less-than-or-equal","unicodots.dot/fn-less-than-or-equal",182065575)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-less-than","unicodots.dot/fn-less-than",-452179320)], null)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-less-than","unicodots.dot/fn-less-than",-452179320)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522),new cljs.core.Keyword("unicodots.dot","fn-less-than","unicodots.dot/fn-less-than",-452179320)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Dot"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),"14px",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"10px",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","dot","unicodots.dot/dot",-642282342),new cljs.core.Keyword("unicodots.dot","left","unicodots.dot/left",-1804382626)], null)))?" selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","dot","unicodots.dot/dot",-642282342),new cljs.core.Keyword("unicodots.dot","left","unicodots.dot/left",-1804382626)], null)], null));
});})(theme,tile_paint))
], null),"\u21D0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","dot","unicodots.dot/dot",-642282342),new cljs.core.Keyword("unicodots.dot","right","unicodots.dot/right",1891880246)], null)))?" selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","dot","unicodots.dot/dot",-642282342),new cljs.core.Keyword("unicodots.dot","right","unicodots.dot/right",1891880246)], null)], null));
});})(theme,tile_paint))
], null),"\u21D2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","dot","unicodots.dot/dot",-642282342),new cljs.core.Keyword("unicodots.dot","up","unicodots.dot/up",1806884368)], null)))?" selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","dot","unicodots.dot/dot",-642282342),new cljs.core.Keyword("unicodots.dot","up","unicodots.dot/up",1806884368)], null)], null));
});})(theme,tile_paint))
], null),"\u21D1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","dot","unicodots.dot/dot",-642282342),new cljs.core.Keyword("unicodots.dot","down","unicodots.dot/down",-1047897727)], null)))?" selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","dot","unicodots.dot/dot",-642282342),new cljs.core.Keyword("unicodots.dot","down","unicodots.dot/down",-1047897727)], null)], null));
});})(theme,tile_paint))
], null),"\u21D3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Other"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tile_paint),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","empty-tile","unicodots.dot/empty-tile",1164893653)], null)))?" selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","empty-tile","unicodots.dot/empty-tile",1164893653)], null)], null));
});})(theme,tile_paint))
], null),cljs.core.get.call(null,cljs.core.deref.call(null,theme),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","empty-tile","unicodots.dot/empty-tile",1164893653)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.deref.call(null,tile_paint)),new cljs.core.Keyword("unicodots.dot","literal","unicodots.dot/literal",-814248776)))?" selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (theme,tile_paint){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","empty-tile","unicodots.dot/empty-tile",1164893653)], null)], null));
});})(theme,tile_paint))
], null),((cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.deref.call(null,tile_paint)),new cljs.core.Keyword("unicodots.dot","literal","unicodots.dot/literal",-814248776)))?cljs.core.second.call(null,cljs.core.deref.call(null,tile_paint)):" ")], null)], null)], null)], null);
});
;})(theme,tile_paint))
});
unicodots.views.world_dot = (function unicodots$views$world_dot(id){
var dot = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dot","dot",1442709401),id], null));
return ((function (dot){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"world-dot"], null),unicodots.views.grid_coord.call(null,new cljs.core.Keyword("unicodots.dot","location","unicodots.dot/location",-260689895).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dot)))),new cljs.core.Keyword("unicodots.dot","glyph","unicodots.dot/glyph",983138102).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dot))], null);
});
;})(dot))
});
unicodots.views.world = (function unicodots$views$world(){
var vec__75617 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623)], null)));
var tiles = cljs.core.nth.call(null,vec__75617,(0),null);
var width = cljs.core.nth.call(null,vec__75617,(1),null);
var height = cljs.core.nth.call(null,vec__75617,(2),null);
var dots = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dot-ids","dot-ids",600587358)], null));
var theme = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"theme","theme",-1247880880)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"world"], null),(function (){var iter__41851__auto__ = ((function (vec__75617,tiles,width,height,dots,theme){
return (function unicodots$views$world_$_iter__75620(s__75621){
return (new cljs.core.LazySeq(null,((function (vec__75617,tiles,width,height,dots,theme){
return (function (){
var s__75621__$1 = s__75621;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__75621__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__41847__auto__ = ((function (s__75621__$1,x,xs__5205__auto__,temp__4657__auto__,vec__75617,tiles,width,height,dots,theme){
return (function unicodots$views$world_$_iter__75620_$_iter__75622(s__75623){
return (new cljs.core.LazySeq(null,((function (s__75621__$1,x,xs__5205__auto__,temp__4657__auto__,vec__75617,tiles,width,height,dots,theme){
return (function (){
var s__75623__$1 = s__75623;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__75623__$1);
if(temp__4657__auto____$1){
var s__75623__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__75623__$2)){
var c__41849__auto__ = cljs.core.chunk_first.call(null,s__75623__$2);
var size__41850__auto__ = cljs.core.count.call(null,c__41849__auto__);
var b__75625 = cljs.core.chunk_buffer.call(null,size__41850__auto__);
if((function (){var i__75624 = (0);
while(true){
if((i__75624 < size__41850__auto__)){
var y = cljs.core._nth.call(null,c__41849__auto__,i__75624);
cljs.core.chunk_append.call(null,b__75625,(function (){var temp__4655__auto__ = cljs.core.get.call(null,tiles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),null);
if(cljs.core.truth_(temp__4655__auto__)){
var tile = temp__4655__auto__;
return unicodots.views.tiled_location.call(null,tile,theme);
} else {
return unicodots.views.empty_location.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),theme.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","empty-tile","unicodots.dot/empty-tile",1164893653)], null)));
}
})());

var G__75630 = (i__75624 + (1));
i__75624 = G__75630;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75625),unicodots$views$world_$_iter__75620_$_iter__75622.call(null,cljs.core.chunk_rest.call(null,s__75623__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75625),null);
}
} else {
var y = cljs.core.first.call(null,s__75623__$2);
return cljs.core.cons.call(null,(function (){var temp__4655__auto__ = cljs.core.get.call(null,tiles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),null);
if(cljs.core.truth_(temp__4655__auto__)){
var tile = temp__4655__auto__;
return unicodots.views.tiled_location.call(null,tile,theme);
} else {
return unicodots.views.empty_location.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),theme.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","empty-tile","unicodots.dot/empty-tile",1164893653)], null)));
}
})(),unicodots$views$world_$_iter__75620_$_iter__75622.call(null,cljs.core.rest.call(null,s__75623__$2)));
}
} else {
return null;
}
break;
}
});})(s__75621__$1,x,xs__5205__auto__,temp__4657__auto__,vec__75617,tiles,width,height,dots,theme))
,null,null));
});})(s__75621__$1,x,xs__5205__auto__,temp__4657__auto__,vec__75617,tiles,width,height,dots,theme))
;
var fs__41848__auto__ = cljs.core.seq.call(null,iterys__41847__auto__.call(null,cljs.core.range.call(null,(1),(function (){var x__41402__auto__ = (height + (2));
var y__41403__auto__ = (30);
return ((x__41402__auto__ > y__41403__auto__) ? x__41402__auto__ : y__41403__auto__);
})())));
if(fs__41848__auto__){
return cljs.core.concat.call(null,fs__41848__auto__,unicodots$views$world_$_iter__75620.call(null,cljs.core.rest.call(null,s__75621__$1)));
} else {
var G__75631 = cljs.core.rest.call(null,s__75621__$1);
s__75621__$1 = G__75631;
continue;
}
} else {
return null;
}
break;
}
});})(vec__75617,tiles,width,height,dots,theme))
,null,null));
});})(vec__75617,tiles,width,height,dots,theme))
;
return iter__41851__auto__.call(null,cljs.core.range.call(null,(1),(function (){var x__41402__auto__ = (width + (1));
var y__41403__auto__ = (30);
return ((x__41402__auto__ > y__41403__auto__) ? x__41402__auto__ : y__41403__auto__);
})()));
})(),(function (){var iter__41851__auto__ = ((function (vec__75617,tiles,width,height,dots,theme){
return (function unicodots$views$world_$_iter__75626(s__75627){
return (new cljs.core.LazySeq(null,((function (vec__75617,tiles,width,height,dots,theme){
return (function (){
var s__75627__$1 = s__75627;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__75627__$1);
if(temp__4657__auto__){
var s__75627__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__75627__$2)){
var c__41849__auto__ = cljs.core.chunk_first.call(null,s__75627__$2);
var size__41850__auto__ = cljs.core.count.call(null,c__41849__auto__);
var b__75629 = cljs.core.chunk_buffer.call(null,size__41850__auto__);
if((function (){var i__75628 = (0);
while(true){
if((i__75628 < size__41850__auto__)){
var did = cljs.core._nth.call(null,c__41849__auto__,i__75628);
cljs.core.chunk_append.call(null,b__75629,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [unicodots.views.world_dot,did], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("dot-"),cljs.core.str(did)].join('')], null)));

var G__75632 = (i__75628 + (1));
i__75628 = G__75632;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75629),unicodots$views$world_$_iter__75626.call(null,cljs.core.chunk_rest.call(null,s__75627__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75629),null);
}
} else {
var did = cljs.core.first.call(null,s__75627__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [unicodots.views.world_dot,did], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("dot-"),cljs.core.str(did)].join('')], null)),unicodots$views$world_$_iter__75626.call(null,cljs.core.rest.call(null,s__75627__$2)));
}
} else {
return null;
}
break;
}
});})(vec__75617,tiles,width,height,dots,theme))
,null,null));
});})(vec__75617,tiles,width,height,dots,theme))
;
return iter__41851__auto__.call(null,cljs.core.deref.call(null,dots));
})()], null);
});
unicodots.views.footer = (function unicodots$views$footer(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"footer"], null),"Footer"], null);
});
});
unicodots.views.main_panel = (function unicodots$views$main_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"player"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unicodots.views.top_bar], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"main-content"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unicodots.views.left_bar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unicodots.views.world], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unicodots.views.right_bar], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unicodots.views.footer], null)], null);
});
});
unicodots.views.key_pressed = (function unicodots$views$key_pressed(event){
var keycode = event.keyCode;
var option = event.metaKey;
var shift = event.shiftKey;
var caught = (function (){try{if((keycode === (45))){
try{if((option === false)){
try{if((shift === false)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","path","unicodots.dot/path",2022610237),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75854){if((e75854 instanceof Error)){
var e__42700__auto__ = e75854;
if((e__42700__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto__;
}
} else {
throw e75854;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75853){if((e75853 instanceof Error)){
var e__42700__auto__ = e75853;
if((e__42700__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto__;
}
} else {
throw e75853;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75750){if((e75750 instanceof Error)){
var e__42700__auto__ = e75750;
if((e__42700__auto__ === cljs.core.match.backtrack)){
try{if((keycode === (124))){
try{if((option === false)){
try{if((shift === true)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","path","unicodots.dot/path",2022610237),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75852){if((e75852 instanceof Error)){
var e__42700__auto____$1 = e75852;
if((e__42700__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$1;
}
} else {
throw e75852;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75851){if((e75851 instanceof Error)){
var e__42700__auto____$1 = e75851;
if((e__42700__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$1;
}
} else {
throw e75851;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75751){if((e75751 instanceof Error)){
var e__42700__auto____$1 = e75751;
if((e__42700__auto____$1 === cljs.core.match.backtrack)){
try{if((keycode === (43))){
try{if((option === false)){
try{if((shift === true)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","path","unicodots.dot/path",2022610237),new cljs.core.Keyword("unicodots.dot","both","unicodots.dot/both",1608890935)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75850){if((e75850 instanceof Error)){
var e__42700__auto____$2 = e75850;
if((e__42700__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$2;
}
} else {
throw e75850;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75849){if((e75849 instanceof Error)){
var e__42700__auto____$2 = e75849;
if((e__42700__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$2;
}
} else {
throw e75849;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75752){if((e75752 instanceof Error)){
var e__42700__auto____$2 = e75752;
if((e__42700__auto____$2 === cljs.core.match.backtrack)){
try{if((keycode === (60))){
try{if((option === false)){
try{if((shift === true)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","merge","unicodots.dot/merge",11990608),new cljs.core.Keyword("unicodots.dot","left","unicodots.dot/left",-1804382626)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75848){if((e75848 instanceof Error)){
var e__42700__auto____$3 = e75848;
if((e__42700__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$3;
}
} else {
throw e75848;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75847){if((e75847 instanceof Error)){
var e__42700__auto____$3 = e75847;
if((e__42700__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$3;
}
} else {
throw e75847;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75753){if((e75753 instanceof Error)){
var e__42700__auto____$3 = e75753;
if((e__42700__auto____$3 === cljs.core.match.backtrack)){
try{if((keycode === (62))){
try{if((option === false)){
try{if((shift === true)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","merge","unicodots.dot/merge",11990608),new cljs.core.Keyword("unicodots.dot","right","unicodots.dot/right",1891880246)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75846){if((e75846 instanceof Error)){
var e__42700__auto____$4 = e75846;
if((e__42700__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$4;
}
} else {
throw e75846;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75845){if((e75845 instanceof Error)){
var e__42700__auto____$4 = e75845;
if((e__42700__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$4;
}
} else {
throw e75845;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75754){if((e75754 instanceof Error)){
var e__42700__auto____$4 = e75754;
if((e__42700__auto____$4 === cljs.core.match.backtrack)){
try{if((keycode === (94))){
try{if((option === false)){
try{if((shift === true)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","merge","unicodots.dot/merge",11990608),new cljs.core.Keyword("unicodots.dot","up","unicodots.dot/up",1806884368)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75844){if((e75844 instanceof Error)){
var e__42700__auto____$5 = e75844;
if((e__42700__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$5;
}
} else {
throw e75844;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75843){if((e75843 instanceof Error)){
var e__42700__auto____$5 = e75843;
if((e__42700__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$5;
}
} else {
throw e75843;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75755){if((e75755 instanceof Error)){
var e__42700__auto____$5 = e75755;
if((e__42700__auto____$5 === cljs.core.match.backtrack)){
try{if((keycode === (118))){
try{if((option === false)){
try{if((shift === false)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","merge","unicodots.dot/merge",11990608),new cljs.core.Keyword("unicodots.dot","down","unicodots.dot/down",-1047897727)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75842){if((e75842 instanceof Error)){
var e__42700__auto____$6 = e75842;
if((e__42700__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$6;
}
} else {
throw e75842;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75841){if((e75841 instanceof Error)){
var e__42700__auto____$6 = e75841;
if((e__42700__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$6;
}
} else {
throw e75841;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75756){if((e75756 instanceof Error)){
var e__42700__auto____$6 = e75756;
if((e__42700__auto____$6 === cljs.core.match.backtrack)){
try{if((keycode === (86))){
try{if((option === false)){
try{if((shift === true)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","merge","unicodots.dot/merge",11990608),new cljs.core.Keyword("unicodots.dot","down","unicodots.dot/down",-1047897727)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75840){if((e75840 instanceof Error)){
var e__42700__auto____$7 = e75840;
if((e__42700__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$7;
}
} else {
throw e75840;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75839){if((e75839 instanceof Error)){
var e__42700__auto____$7 = e75839;
if((e__42700__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$7;
}
} else {
throw e75839;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75757){if((e75757 instanceof Error)){
var e__42700__auto____$7 = e75757;
if((e__42700__auto____$7 === cljs.core.match.backtrack)){
try{if((keycode === (41))){
try{if((option === false)){
try{if((shift === true)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","left","unicodots.dot/left",-1804382626)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75838){if((e75838 instanceof Error)){
var e__42700__auto____$8 = e75838;
if((e__42700__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$8;
}
} else {
throw e75838;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75837){if((e75837 instanceof Error)){
var e__42700__auto____$8 = e75837;
if((e__42700__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$8;
}
} else {
throw e75837;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75758){if((e75758 instanceof Error)){
var e__42700__auto____$8 = e75758;
if((e__42700__auto____$8 === cljs.core.match.backtrack)){
try{if((keycode === (40))){
try{if((option === false)){
try{if((shift === true)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","right","unicodots.dot/right",1891880246)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75836){if((e75836 instanceof Error)){
var e__42700__auto____$9 = e75836;
if((e__42700__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$9;
}
} else {
throw e75836;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75835){if((e75835 instanceof Error)){
var e__42700__auto____$9 = e75835;
if((e__42700__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$9;
}
} else {
throw e75835;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75759){if((e75759 instanceof Error)){
var e__42700__auto____$9 = e75759;
if((e__42700__auto____$9 === cljs.core.match.backtrack)){
try{if((keycode === (117))){
try{if((option === false)){
try{if((shift === false)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","up","unicodots.dot/up",1806884368)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75834){if((e75834 instanceof Error)){
var e__42700__auto____$10 = e75834;
if((e__42700__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$10;
}
} else {
throw e75834;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75833){if((e75833 instanceof Error)){
var e__42700__auto____$10 = e75833;
if((e__42700__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$10;
}
} else {
throw e75833;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75760){if((e75760 instanceof Error)){
var e__42700__auto____$10 = e75760;
if((e__42700__auto____$10 === cljs.core.match.backtrack)){
try{if((keycode === (85))){
try{if((option === false)){
try{if((shift === true)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","up","unicodots.dot/up",1806884368)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75832){if((e75832 instanceof Error)){
var e__42700__auto____$11 = e75832;
if((e__42700__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$11;
}
} else {
throw e75832;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75831){if((e75831 instanceof Error)){
var e__42700__auto____$11 = e75831;
if((e__42700__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$11;
}
} else {
throw e75831;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75761){if((e75761 instanceof Error)){
var e__42700__auto____$11 = e75761;
if((e__42700__auto____$11 === cljs.core.match.backtrack)){
try{if((keycode === (937))){
try{if((option === false)){
try{if((shift === false)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","down","unicodots.dot/down",-1047897727)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75830){if((e75830 instanceof Error)){
var e__42700__auto____$12 = e75830;
if((e__42700__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$12;
}
} else {
throw e75830;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75829){if((e75829 instanceof Error)){
var e__42700__auto____$12 = e75829;
if((e__42700__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$12;
}
} else {
throw e75829;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75762){if((e75762 instanceof Error)){
var e__42700__auto____$12 = e75762;
if((e__42700__auto____$12 === cljs.core.match.backtrack)){
try{if((keycode === (47))){
try{if((option === false)){
try{if((shift === false)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","positive","unicodots.dot/positive",-804211159)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75828){if((e75828 instanceof Error)){
var e__42700__auto____$13 = e75828;
if((e__42700__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$13;
}
} else {
throw e75828;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75827){if((e75827 instanceof Error)){
var e__42700__auto____$13 = e75827;
if((e__42700__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$13;
}
} else {
throw e75827;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75763){if((e75763 instanceof Error)){
var e__42700__auto____$13 = e75763;
if((e__42700__auto____$13 === cljs.core.match.backtrack)){
try{if((keycode === (92))){
try{if((option === false)){
try{if((shift === false)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","reflect","unicodots.dot/reflect",364851517),new cljs.core.Keyword("unicodots.dot","negative","unicodots.dot/negative",656102191)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75826){if((e75826 instanceof Error)){
var e__42700__auto____$14 = e75826;
if((e__42700__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$14;
}
} else {
throw e75826;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75825){if((e75825 instanceof Error)){
var e__42700__auto____$14 = e75825;
if((e__42700__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$14;
}
} else {
throw e75825;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75764){if((e75764 instanceof Error)){
var e__42700__auto____$14 = e75764;
if((e__42700__auto____$14 === cljs.core.match.backtrack)){
try{if((keycode === (38))){
try{if((option === false)){
try{if((shift === true)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","die","unicodots.dot/die",1403329859)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75824){if((e75824 instanceof Error)){
var e__42700__auto____$15 = e75824;
if((e__42700__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$15;
}
} else {
throw e75824;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75823){if((e75823 instanceof Error)){
var e__42700__auto____$15 = e75823;
if((e__42700__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$15;
}
} else {
throw e75823;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75765){if((e75765 instanceof Error)){
var e__42700__auto____$15 = e75765;
if((e__42700__auto____$15 === cljs.core.match.backtrack)){
try{if((keycode === (35))){
try{if((option === false)){
try{if((shift === true)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75822){if((e75822 instanceof Error)){
var e__42700__auto____$16 = e75822;
if((e__42700__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$16;
}
} else {
throw e75822;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75821){if((e75821 instanceof Error)){
var e__42700__auto____$16 = e75821;
if((e__42700__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$16;
}
} else {
throw e75821;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75766){if((e75766 instanceof Error)){
var e__42700__auto____$16 = e75766;
if((e__42700__auto____$16 === cljs.core.match.backtrack)){
try{if((keycode === (64))){
try{if((option === false)){
try{if((shift === true)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","macro","unicodots.dot/macro",-251196527)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75820){if((e75820 instanceof Error)){
var e__42700__auto____$17 = e75820;
if((e__42700__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$17;
}
} else {
throw e75820;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75819){if((e75819 instanceof Error)){
var e__42700__auto____$17 = e75819;
if((e__42700__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$17;
}
} else {
throw e75819;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75767){if((e75767 instanceof Error)){
var e__42700__auto____$17 = e75767;
if((e__42700__auto____$17 === cljs.core.match.backtrack)){
try{if((keycode === (36))){
try{if((option === false)){
try{if((shift === true)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","output","unicodots.dot/output",676361230)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75818){if((e75818 instanceof Error)){
var e__42700__auto____$18 = e75818;
if((e__42700__auto____$18 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$18;
}
} else {
throw e75818;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75817){if((e75817 instanceof Error)){
var e__42700__auto____$18 = e75817;
if((e__42700__auto____$18 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$18;
}
} else {
throw e75817;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75768){if((e75768 instanceof Error)){
var e__42700__auto____$18 = e75768;
if((e__42700__auto____$18 === cljs.core.match.backtrack)){
try{if((keycode === (63))){
try{if((option === false)){
try{if((shift === true)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","input","unicodots.dot/input",-1125101444)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75816){if((e75816 instanceof Error)){
var e__42700__auto____$19 = e75816;
if((e__42700__auto____$19 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$19;
}
} else {
throw e75816;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75815){if((e75815 instanceof Error)){
var e__42700__auto____$19 = e75815;
if((e__42700__auto____$19 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$19;
}
} else {
throw e75815;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75769){if((e75769 instanceof Error)){
var e__42700__auto____$19 = e75769;
if((e__42700__auto____$19 === cljs.core.match.backtrack)){
try{if((keycode === (58))){
try{if((option === false)){
try{if((shift === true)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","pipe","unicodots.dot/pipe",-1773002128)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75814){if((e75814 instanceof Error)){
var e__42700__auto____$20 = e75814;
if((e__42700__auto____$20 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$20;
}
} else {
throw e75814;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75813){if((e75813 instanceof Error)){
var e__42700__auto____$20 = e75813;
if((e__42700__auto____$20 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$20;
}
} else {
throw e75813;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75770){if((e75770 instanceof Error)){
var e__42700__auto____$20 = e75770;
if((e__42700__auto____$20 === cljs.core.match.backtrack)){
try{if((keycode === (34))){
try{if((option === false)){
try{if((shift === true)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","quote","unicodots.dot/quote",-2044282828)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75812){if((e75812 instanceof Error)){
var e__42700__auto____$21 = e75812;
if((e__42700__auto____$21 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$21;
}
} else {
throw e75812;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75811){if((e75811 instanceof Error)){
var e__42700__auto____$21 = e75811;
if((e__42700__auto____$21 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$21;
}
} else {
throw e75811;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75771){if((e75771 instanceof Error)){
var e__42700__auto____$21 = e75771;
if((e__42700__auto____$21 === cljs.core.match.backtrack)){
try{if((keycode === (39))){
try{if((option === false)){
try{if((shift === false)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","quote","unicodots.dot/quote",-2044282828)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75810){if((e75810 instanceof Error)){
var e__42700__auto____$22 = e75810;
if((e__42700__auto____$22 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$22;
}
} else {
throw e75810;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75809){if((e75809 instanceof Error)){
var e__42700__auto____$22 = e75809;
if((e__42700__auto____$22 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$22;
}
} else {
throw e75809;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75772){if((e75772 instanceof Error)){
var e__42700__auto____$22 = e75772;
if((e__42700__auto____$22 === cljs.core.match.backtrack)){
try{if((keycode === (42))){
try{if((option === false)){
try{if((shift === true)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","duplicate","unicodots.dot/duplicate",-2042962049)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75808){if((e75808 instanceof Error)){
var e__42700__auto____$23 = e75808;
if((e__42700__auto____$23 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$23;
}
} else {
throw e75808;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75807){if((e75807 instanceof Error)){
var e__42700__auto____$23 = e75807;
if((e__42700__auto____$23 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$23;
}
} else {
throw e75807;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75773){if((e75773 instanceof Error)){
var e__42700__auto____$23 = e75773;
if((e__42700__auto____$23 === cljs.core.match.backtrack)){
try{if((keycode === (126))){
try{if((option === false)){
try{if((shift === true)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","conditional","unicodots.dot/conditional",-625990976),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75806){if((e75806 instanceof Error)){
var e__42700__auto____$24 = e75806;
if((e__42700__auto____$24 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$24;
}
} else {
throw e75806;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75805){if((e75805 instanceof Error)){
var e__42700__auto____$24 = e75805;
if((e__42700__auto____$24 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$24;
}
} else {
throw e75805;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75774){if((e75774 instanceof Error)){
var e__42700__auto____$24 = e75774;
if((e__42700__auto____$24 === cljs.core.match.backtrack)){
try{if((keycode === (96))){
try{if((option === false)){
try{if((shift === true)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","conditional","unicodots.dot/conditional",-625990976),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75804){if((e75804 instanceof Error)){
var e__42700__auto____$25 = e75804;
if((e__42700__auto____$25 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$25;
}
} else {
throw e75804;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75803){if((e75803 instanceof Error)){
var e__42700__auto____$25 = e75803;
if((e__42700__auto____$25 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$25;
}
} else {
throw e75803;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75775){if((e75775 instanceof Error)){
var e__42700__auto____$25 = e75775;
if((e__42700__auto____$25 === cljs.core.match.backtrack)){
try{if((keycode === (123))){
try{if((option === false)){
try{if((shift === true)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","pre-function","unicodots.dot/pre-function",1123047392),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75802){if((e75802 instanceof Error)){
var e__42700__auto____$26 = e75802;
if((e__42700__auto____$26 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$26;
}
} else {
throw e75802;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75801){if((e75801 instanceof Error)){
var e__42700__auto____$26 = e75801;
if((e__42700__auto____$26 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$26;
}
} else {
throw e75801;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75776){if((e75776 instanceof Error)){
var e__42700__auto____$26 = e75776;
if((e__42700__auto____$26 === cljs.core.match.backtrack)){
try{if((keycode === (91))){
try{if((option === false)){
try{if((shift === false)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","pre-function","unicodots.dot/pre-function",1123047392),new cljs.core.Keyword("unicodots.dot","vertical","unicodots.dot/vertical",-1223441875)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75800){if((e75800 instanceof Error)){
var e__42700__auto____$27 = e75800;
if((e__42700__auto____$27 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$27;
}
} else {
throw e75800;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75799){if((e75799 instanceof Error)){
var e__42700__auto____$27 = e75799;
if((e__42700__auto____$27 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$27;
}
} else {
throw e75799;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75777){if((e75777 instanceof Error)){
var e__42700__auto____$27 = e75777;
if((e__42700__auto____$27 === cljs.core.match.backtrack)){
try{if((keycode === (247))){
try{if((option === false)){
try{if((shift === false)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn-stub","unicodots.dot/fn-stub",-917303490),new cljs.core.Keyword("unicodots.dot","fn-divide","unicodots.dot/fn-divide",427270258)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75798){if((e75798 instanceof Error)){
var e__42700__auto____$28 = e75798;
if((e__42700__auto____$28 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$28;
}
} else {
throw e75798;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75797){if((e75797 instanceof Error)){
var e__42700__auto____$28 = e75797;
if((e__42700__auto____$28 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$28;
}
} else {
throw e75797;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75778){if((e75778 instanceof Error)){
var e__42700__auto____$28 = e75778;
if((e__42700__auto____$28 === cljs.core.match.backtrack)){
try{if((keycode === (37))){
try{if((option === false)){
try{if((shift === true)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn-stub","unicodots.dot/fn-stub",-917303490),new cljs.core.Keyword("unicodots.dot","fn-modulus","unicodots.dot/fn-modulus",1430049486)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75796){if((e75796 instanceof Error)){
var e__42700__auto____$29 = e75796;
if((e__42700__auto____$29 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$29;
}
} else {
throw e75796;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75795){if((e75795 instanceof Error)){
var e__42700__auto____$29 = e75795;
if((e__42700__auto____$29 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$29;
}
} else {
throw e75795;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75779){if((e75779 instanceof Error)){
var e__42700__auto____$29 = e75779;
if((e__42700__auto____$29 === cljs.core.match.backtrack)){
try{if((keycode === (8805))){
try{if((option === false)){
try{if((shift === false)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn-stub","unicodots.dot/fn-stub",-917303490),new cljs.core.Keyword("unicodots.dot","fn-greater-than-or-equal","unicodots.dot/fn-greater-than-or-equal",2050841584)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75794){if((e75794 instanceof Error)){
var e__42700__auto____$30 = e75794;
if((e__42700__auto____$30 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$30;
}
} else {
throw e75794;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75793){if((e75793 instanceof Error)){
var e__42700__auto____$30 = e75793;
if((e__42700__auto____$30 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$30;
}
} else {
throw e75793;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75780){if((e75780 instanceof Error)){
var e__42700__auto____$30 = e75780;
if((e__42700__auto____$30 === cljs.core.match.backtrack)){
try{if((keycode === (8800))){
try{if((option === false)){
try{if((shift === false)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn-stub","unicodots.dot/fn-stub",-917303490),new cljs.core.Keyword("unicodots.dot","fn-not-equal","unicodots.dot/fn-not-equal",-504536438)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75792){if((e75792 instanceof Error)){
var e__42700__auto____$31 = e75792;
if((e__42700__auto____$31 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$31;
}
} else {
throw e75792;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75791){if((e75791 instanceof Error)){
var e__42700__auto____$31 = e75791;
if((e__42700__auto____$31 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$31;
}
} else {
throw e75791;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75781){if((e75781 instanceof Error)){
var e__42700__auto____$31 = e75781;
if((e__42700__auto____$31 === cljs.core.match.backtrack)){
try{if((keycode === (8804))){
try{if((option === false)){
try{if((shift === false)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn-stub","unicodots.dot/fn-stub",-917303490),new cljs.core.Keyword("unicodots.dot","fn-less-than-or-equal","unicodots.dot/fn-less-than-or-equal",182065575)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75790){if((e75790 instanceof Error)){
var e__42700__auto____$32 = e75790;
if((e__42700__auto____$32 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$32;
}
} else {
throw e75790;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75789){if((e75789 instanceof Error)){
var e__42700__auto____$32 = e75789;
if((e__42700__auto____$32 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$32;
}
} else {
throw e75789;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75782){if((e75782 instanceof Error)){
var e__42700__auto____$32 = e75782;
if((e__42700__auto____$32 === cljs.core.match.backtrack)){
try{if((keycode === (61))){
try{if((option === false)){
try{if((shift === false)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn-stub","unicodots.dot/fn-stub",-917303490),new cljs.core.Keyword("unicodots.dot","fn-equal","unicodots.dot/fn-equal",-208512875)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75788){if((e75788 instanceof Error)){
var e__42700__auto____$33 = e75788;
if((e__42700__auto____$33 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$33;
}
} else {
throw e75788;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75787){if((e75787 instanceof Error)){
var e__42700__auto____$33 = e75787;
if((e__42700__auto____$33 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$33;
}
} else {
throw e75787;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75783){if((e75783 instanceof Error)){
var e__42700__auto____$33 = e75783;
if((e__42700__auto____$33 === cljs.core.match.backtrack)){
try{if((keycode === (8226))){
try{if((option === false)){
try{if((shift === false)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","dot","unicodots.dot/dot",-642282342)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75786){if((e75786 instanceof Error)){
var e__42700__auto____$34 = e75786;
if((e__42700__auto____$34 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$34;
}
} else {
throw e75786;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75785){if((e75785 instanceof Error)){
var e__42700__auto____$34 = e75785;
if((e__42700__auto____$34 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__42700__auto____$34;
}
} else {
throw e75785;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75784){if((e75784 instanceof Error)){
var e__42700__auto____$34 = e75784;
if((e__42700__auto____$34 === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","literal","unicodots.dot/literal",-814248776),keycode], null);
} else {
throw e__42700__auto____$34;
}
} else {
throw e75784;

}
}} else {
throw e__42700__auto____$33;
}
} else {
throw e75783;

}
}} else {
throw e__42700__auto____$32;
}
} else {
throw e75782;

}
}} else {
throw e__42700__auto____$31;
}
} else {
throw e75781;

}
}} else {
throw e__42700__auto____$30;
}
} else {
throw e75780;

}
}} else {
throw e__42700__auto____$29;
}
} else {
throw e75779;

}
}} else {
throw e__42700__auto____$28;
}
} else {
throw e75778;

}
}} else {
throw e__42700__auto____$27;
}
} else {
throw e75777;

}
}} else {
throw e__42700__auto____$26;
}
} else {
throw e75776;

}
}} else {
throw e__42700__auto____$25;
}
} else {
throw e75775;

}
}} else {
throw e__42700__auto____$24;
}
} else {
throw e75774;

}
}} else {
throw e__42700__auto____$23;
}
} else {
throw e75773;

}
}} else {
throw e__42700__auto____$22;
}
} else {
throw e75772;

}
}} else {
throw e__42700__auto____$21;
}
} else {
throw e75771;

}
}} else {
throw e__42700__auto____$20;
}
} else {
throw e75770;

}
}} else {
throw e__42700__auto____$19;
}
} else {
throw e75769;

}
}} else {
throw e__42700__auto____$18;
}
} else {
throw e75768;

}
}} else {
throw e__42700__auto____$17;
}
} else {
throw e75767;

}
}} else {
throw e__42700__auto____$16;
}
} else {
throw e75766;

}
}} else {
throw e__42700__auto____$15;
}
} else {
throw e75765;

}
}} else {
throw e__42700__auto____$14;
}
} else {
throw e75764;

}
}} else {
throw e__42700__auto____$13;
}
} else {
throw e75763;

}
}} else {
throw e__42700__auto____$12;
}
} else {
throw e75762;

}
}} else {
throw e__42700__auto____$11;
}
} else {
throw e75761;

}
}} else {
throw e__42700__auto____$10;
}
} else {
throw e75760;

}
}} else {
throw e__42700__auto____$9;
}
} else {
throw e75759;

}
}} else {
throw e__42700__auto____$8;
}
} else {
throw e75758;

}
}} else {
throw e__42700__auto____$7;
}
} else {
throw e75757;

}
}} else {
throw e__42700__auto____$6;
}
} else {
throw e75756;

}
}} else {
throw e__42700__auto____$5;
}
} else {
throw e75755;

}
}} else {
throw e__42700__auto____$4;
}
} else {
throw e75754;

}
}} else {
throw e__42700__auto____$3;
}
} else {
throw e75753;

}
}} else {
throw e__42700__auto____$2;
}
} else {
throw e75752;

}
}} else {
throw e__42700__auto____$1;
}
} else {
throw e75751;

}
}} else {
throw e__42700__auto__;
}
} else {
throw e75750;

}
}})();
if(cljs.core.truth_(caught)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-current-paint","set-current-paint",-833860169),((cljs.core._EQ_.call(null,cljs.core.first.call(null,caught),new cljs.core.Keyword("unicodots.dot","literal","unicodots.dot/literal",-814248776)))?(((((48) <= cljs.core.second.call(null,caught))) && ((cljs.core.second.call(null,caught) <= (57))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","literal","unicodots.dot/literal",-814248776),(cljs.core.second.call(null,caught) - (48))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","literal","unicodots.dot/literal",-814248776),cljs.core.char$.call(null,cljs.core.second.call(null,caught))], null)):caught)], null));
} else {
return null;
}
});
unicodots.views.install_key_listeners = (function unicodots$views$install_key_listeners(){
return goog.events.listen(window,goog.events.EventType.KEYPRESS,unicodots.views.key_pressed);
});
unicodots.views.install_key_listeners.call(null);

//# sourceMappingURL=views.js.map?rel=1503610095061