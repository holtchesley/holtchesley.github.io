// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.dataset');
goog.require('goog.string');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__42153__auto__ = [];
var len__42146__auto___51939 = arguments.length;
var i__42147__auto___51940 = (0);
while(true){
if((i__42147__auto___51940 < len__42146__auto___51939)){
args__42153__auto__.push((arguments[i__42147__auto___51940]));

var G__51941 = (i__42147__auto___51940 + (1));
i__42147__auto___51940 = G__51941;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((2) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__42154__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__51931_51942 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__51932_51943 = null;
var count__51933_51944 = (0);
var i__51934_51945 = (0);
while(true){
if((i__51934_51945 < count__51933_51944)){
var k_51946 = cljs.core._nth.call(null,chunk__51932_51943,i__51934_51945);
e.setAttribute(cljs.core.name.call(null,k_51946),cljs.core.get.call(null,attrs,k_51946));

var G__51947 = seq__51931_51942;
var G__51948 = chunk__51932_51943;
var G__51949 = count__51933_51944;
var G__51950 = (i__51934_51945 + (1));
seq__51931_51942 = G__51947;
chunk__51932_51943 = G__51948;
count__51933_51944 = G__51949;
i__51934_51945 = G__51950;
continue;
} else {
var temp__4657__auto___51951 = cljs.core.seq.call(null,seq__51931_51942);
if(temp__4657__auto___51951){
var seq__51931_51952__$1 = temp__4657__auto___51951;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51931_51952__$1)){
var c__41882__auto___51953 = cljs.core.chunk_first.call(null,seq__51931_51952__$1);
var G__51954 = cljs.core.chunk_rest.call(null,seq__51931_51952__$1);
var G__51955 = c__41882__auto___51953;
var G__51956 = cljs.core.count.call(null,c__41882__auto___51953);
var G__51957 = (0);
seq__51931_51942 = G__51954;
chunk__51932_51943 = G__51955;
count__51933_51944 = G__51956;
i__51934_51945 = G__51957;
continue;
} else {
var k_51958 = cljs.core.first.call(null,seq__51931_51952__$1);
e.setAttribute(cljs.core.name.call(null,k_51958),cljs.core.get.call(null,attrs,k_51958));

var G__51959 = cljs.core.next.call(null,seq__51931_51952__$1);
var G__51960 = null;
var G__51961 = (0);
var G__51962 = (0);
seq__51931_51942 = G__51959;
chunk__51932_51943 = G__51960;
count__51933_51944 = G__51961;
i__51934_51945 = G__51962;
continue;
}
} else {
}
}
break;
}

var seq__51935_51963 = cljs.core.seq.call(null,children);
var chunk__51936_51964 = null;
var count__51937_51965 = (0);
var i__51938_51966 = (0);
while(true){
if((i__51938_51966 < count__51937_51965)){
var ch_51967 = cljs.core._nth.call(null,chunk__51936_51964,i__51938_51966);
e.appendChild(ch_51967);

var G__51968 = seq__51935_51963;
var G__51969 = chunk__51936_51964;
var G__51970 = count__51937_51965;
var G__51971 = (i__51938_51966 + (1));
seq__51935_51963 = G__51968;
chunk__51936_51964 = G__51969;
count__51937_51965 = G__51970;
i__51938_51966 = G__51971;
continue;
} else {
var temp__4657__auto___51972 = cljs.core.seq.call(null,seq__51935_51963);
if(temp__4657__auto___51972){
var seq__51935_51973__$1 = temp__4657__auto___51972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51935_51973__$1)){
var c__41882__auto___51974 = cljs.core.chunk_first.call(null,seq__51935_51973__$1);
var G__51975 = cljs.core.chunk_rest.call(null,seq__51935_51973__$1);
var G__51976 = c__41882__auto___51974;
var G__51977 = cljs.core.count.call(null,c__41882__auto___51974);
var G__51978 = (0);
seq__51935_51963 = G__51975;
chunk__51936_51964 = G__51976;
count__51937_51965 = G__51977;
i__51938_51966 = G__51978;
continue;
} else {
var ch_51979 = cljs.core.first.call(null,seq__51935_51973__$1);
e.appendChild(ch_51979);

var G__51980 = cljs.core.next.call(null,seq__51935_51973__$1);
var G__51981 = null;
var G__51982 = (0);
var G__51983 = (0);
seq__51935_51963 = G__51980;
chunk__51936_51964 = G__51981;
count__51937_51965 = G__51982;
i__51938_51966 = G__51983;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq51928){
var G__51929 = cljs.core.first.call(null,seq51928);
var seq51928__$1 = cljs.core.next.call(null,seq51928);
var G__51930 = cljs.core.first.call(null,seq51928__$1);
var seq51928__$2 = cljs.core.next.call(null,seq51928__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__51929,G__51930,seq51928__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__41996__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__41997__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__41998__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__41999__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__42000__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__41996__auto__,prefer_table__41997__auto__,method_cache__41998__auto__,cached_hierarchy__41999__auto__,hierarchy__42000__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__41996__auto__,prefer_table__41997__auto__,method_cache__41998__auto__,cached_hierarchy__41999__auto__,hierarchy__42000__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__42000__auto__,method_table__41996__auto__,prefer_table__41997__auto__,method_cache__41998__auto__,cached_hierarchy__41999__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_51984 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;"),cljs.core.str("text-align: left;")].join('')], null));
el_51984.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_51984.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_51984.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_51984);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__51985,st_map){
var map__51992 = p__51985;
var map__51992__$1 = ((((!((map__51992 == null)))?((((map__51992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51992):map__51992);
var container_el = cljs.core.get.call(null,map__51992__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__51992,map__51992__$1,container_el){
return (function (p__51994){
var vec__51995 = p__51994;
var k = cljs.core.nth.call(null,vec__51995,(0),null);
var v = cljs.core.nth.call(null,vec__51995,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__51992,map__51992__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__51998,dom_str){
var map__52001 = p__51998;
var map__52001__$1 = ((((!((map__52001 == null)))?((((map__52001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52001):map__52001);
var c = map__52001__$1;
var content_area_el = cljs.core.get.call(null,map__52001__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__52003){
var map__52006 = p__52003;
var map__52006__$1 = ((((!((map__52006 == null)))?((((map__52006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52006):map__52006);
var content_area_el = cljs.core.get.call(null,map__52006__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__44900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto__){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto__){
return (function (state_52049){
var state_val_52050 = (state_52049[(1)]);
if((state_val_52050 === (1))){
var inst_52034 = (state_52049[(7)]);
var inst_52034__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_52035 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_52036 = ["10px","10px","100%","68px","1.0"];
var inst_52037 = cljs.core.PersistentHashMap.fromArrays(inst_52035,inst_52036);
var inst_52038 = cljs.core.merge.call(null,inst_52037,style);
var inst_52039 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_52034__$1,inst_52038);
var inst_52040 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_52034__$1,msg);
var inst_52041 = cljs.core.async.timeout.call(null,(300));
var state_52049__$1 = (function (){var statearr_52051 = state_52049;
(statearr_52051[(8)] = inst_52040);

(statearr_52051[(7)] = inst_52034__$1);

(statearr_52051[(9)] = inst_52039);

return statearr_52051;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52049__$1,(2),inst_52041);
} else {
if((state_val_52050 === (2))){
var inst_52034 = (state_52049[(7)]);
var inst_52043 = (state_52049[(2)]);
var inst_52044 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_52045 = ["auto"];
var inst_52046 = cljs.core.PersistentHashMap.fromArrays(inst_52044,inst_52045);
var inst_52047 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_52034,inst_52046);
var state_52049__$1 = (function (){var statearr_52052 = state_52049;
(statearr_52052[(10)] = inst_52043);

return statearr_52052;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52049__$1,inst_52047);
} else {
return null;
}
}
});})(c__44900__auto__))
;
return ((function (switch__44788__auto__,c__44900__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__44789__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__44789__auto____0 = (function (){
var statearr_52056 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52056[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__44789__auto__);

(statearr_52056[(1)] = (1));

return statearr_52056;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__44789__auto____1 = (function (state_52049){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_52049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e52057){if((e52057 instanceof Object)){
var ex__44792__auto__ = e52057;
var statearr_52058_52060 = state_52049;
(statearr_52058_52060[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52061 = state_52049;
state_52049 = G__52061;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__44789__auto__ = function(state_52049){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__44789__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__44789__auto____1.call(this,state_52049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__44789__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__44789__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto__))
})();
var state__44902__auto__ = (function (){var statearr_52059 = f__44901__auto__.call(null);
(statearr_52059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto__);

return statearr_52059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto__))
);

return c__44900__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args52062 = [];
var len__42146__auto___52065 = arguments.length;
var i__42147__auto___52066 = (0);
while(true){
if((i__42147__auto___52066 < len__42146__auto___52065)){
args52062.push((arguments[i__42147__auto___52066]));

var G__52067 = (i__42147__auto___52066 + (1));
i__42147__auto___52066 = G__52067;
continue;
} else {
}
break;
}

var G__52064 = args52062.length;
switch (G__52064) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52062.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str(" <span style=\""),cljs.core.str("display: inline-block;"),cljs.core.str("font-size: 13px;"),cljs.core.str("\">"),cljs.core.str(sub_head),cljs.core.str("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\" data-file-column=\""),cljs.core.str(column_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__52069){
var map__52072 = p__52069;
var map__52072__$1 = ((((!((map__52072 == null)))?((((map__52072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52072):map__52072);
var file = cljs.core.get.call(null,map__52072__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__52072__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52072__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__41071__auto__ = file;
if(cljs.core.truth_(or__41071__auto__)){
return or__41071__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str("<span style='"),cljs.core.str(style),cljs.core.str("'>"),cljs.core.str("<span style='color: #757575;'>"),cljs.core.str(line_number),cljs.core.str("  </span>"),cljs.core.str(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__52074){
var vec__52081 = p__52074;
var typ = cljs.core.nth.call(null,vec__52081,(0),null);
var line_number = cljs.core.nth.call(null,vec__52081,(1),null);
var line = cljs.core.nth.call(null,vec__52081,(2),null);
var pred__52084 = cljs.core._EQ_;
var expr__52085 = typ;
if(cljs.core.truth_(pred__52084.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__52085))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__52084.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__52085))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__52084.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__52085))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__52087_SHARP_){
return cljs.core.update_in.call(null,p1__52087_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str("<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str(clojure.string.join.call(null,"\n",lines)),cljs.core.str("</pre>")].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__52088_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__52088_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__52091){
var map__52094 = p__52091;
var map__52094__$1 = ((((!((map__52094 == null)))?((((map__52094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52094):map__52094);
var exception = map__52094__$1;
var message = cljs.core.get.call(null,map__52094__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__52094__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__52094__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__52094__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__52094__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__52094__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__52094__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__52094__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__52094__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__52094__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__52094__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__41059__auto__ = file;
if(cljs.core.truth_(and__41059__auto__)){
return line;
} else {
return and__41059__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__52094,map__52094__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__52089_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__52089_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__52094,map__52094__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str((cljs.core.truth_(class$)?[cljs.core.str(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str(": ")].join(''):"")),cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join(''),(cljs.core.truth_(display_ex_data)?[cljs.core.str("<pre>"),cljs.core.str(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),cljs.core.str("</pre>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__52094,map__52094__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__52090_SHARP_){
return [cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__52090_SHARP_))),cljs.core.str(": "),cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__52090_SHARP_)))].join('');
});})(last_message,map__52094,map__52094__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__52096){
var map__52099 = p__52096;
var map__52099__$1 = ((((!((map__52099 == null)))?((((map__52099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52099):map__52099);
var file = cljs.core.get.call(null,map__52099__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__52099__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52099__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__52104 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__52104__$1 = ((((!((map__52104 == null)))?((((map__52104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52104):map__52104);
var head = cljs.core.get.call(null,map__52104__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__52104__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__52104__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__52104__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__52104__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__52104__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52104__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__52107){
var map__52110 = p__52107;
var map__52110__$1 = ((((!((map__52110 == null)))?((((map__52110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52110):map__52110);
var warning_data = map__52110__$1;
var file = cljs.core.get.call(null,map__52110__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__52110__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52110__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__52110__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__52110__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__41059__auto__ = file;
if(cljs.core.truth_(and__41059__auto__)){
return line;
} else {
return and__41059__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__52110,map__52110__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__52106_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__52106_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__52110,map__52110__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__52114 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__52114__$1 = ((((!((map__52114 == null)))?((((map__52114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52114):map__52114);
var head = cljs.core.get.call(null,map__52114__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__52114__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__52114__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__52114__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__52114__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__52114__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52114__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__52116){
var map__52120 = p__52116;
var map__52120__$1 = ((((!((map__52120 == null)))?((((map__52120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52120):map__52120);
var warning_data = map__52120__$1;
var message = cljs.core.get.call(null,map__52120__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__52120__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__52120__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52120__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__52122 = message;
var G__52122__$1 = (cljs.core.truth_(line)?[cljs.core.str(G__52122),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__52122);
var G__52122__$2 = (cljs.core.truth_((function (){var and__41059__auto__ = line;
if(cljs.core.truth_(and__41059__auto__)){
return column;
} else {
return and__41059__auto__;
}
})())?[cljs.core.str(G__52122__$1),cljs.core.str(", column "),cljs.core.str(column)].join(''):G__52122__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str(G__52122__$2),cljs.core.str(" in file "),cljs.core.str(file)].join('');
} else {
return G__52122__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__52123){
var map__52128 = p__52123;
var map__52128__$1 = ((((!((map__52128 == null)))?((((map__52128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52128):map__52128);
var warning_data = map__52128__$1;
var message = cljs.core.get.call(null,map__52128__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__52128__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__52128__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52128__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__52130 = figwheel.client.heads_up.ensure_container.call(null);
var map__52130__$1 = ((((!((map__52130 == null)))?((((map__52130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52130):map__52130);
var content_area_el = cljs.core.get.call(null,map__52130__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__4657__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__4657__auto__)){
var last_child = temp__4657__auto__;
var temp__4655__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__4655__auto__)){
var message_count = temp__4655__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str(message_count__$1),cljs.core.str(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__44900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto__){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto__){
return (function (state_52178){
var state_val_52179 = (state_52178[(1)]);
if((state_val_52179 === (1))){
var inst_52161 = (state_52178[(7)]);
var inst_52161__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_52162 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_52163 = ["0.0"];
var inst_52164 = cljs.core.PersistentHashMap.fromArrays(inst_52162,inst_52163);
var inst_52165 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_52161__$1,inst_52164);
var inst_52166 = cljs.core.async.timeout.call(null,(300));
var state_52178__$1 = (function (){var statearr_52180 = state_52178;
(statearr_52180[(8)] = inst_52165);

(statearr_52180[(7)] = inst_52161__$1);

return statearr_52180;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52178__$1,(2),inst_52166);
} else {
if((state_val_52179 === (2))){
var inst_52161 = (state_52178[(7)]);
var inst_52168 = (state_52178[(2)]);
var inst_52169 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_52170 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_52171 = cljs.core.PersistentHashMap.fromArrays(inst_52169,inst_52170);
var inst_52172 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_52161,inst_52171);
var inst_52173 = cljs.core.async.timeout.call(null,(200));
var state_52178__$1 = (function (){var statearr_52181 = state_52178;
(statearr_52181[(9)] = inst_52172);

(statearr_52181[(10)] = inst_52168);

return statearr_52181;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52178__$1,(3),inst_52173);
} else {
if((state_val_52179 === (3))){
var inst_52161 = (state_52178[(7)]);
var inst_52175 = (state_52178[(2)]);
var inst_52176 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_52161,"");
var state_52178__$1 = (function (){var statearr_52182 = state_52178;
(statearr_52182[(11)] = inst_52175);

return statearr_52182;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52178__$1,inst_52176);
} else {
return null;
}
}
}
});})(c__44900__auto__))
;
return ((function (switch__44788__auto__,c__44900__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__44789__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__44789__auto____0 = (function (){
var statearr_52186 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52186[(0)] = figwheel$client$heads_up$clear_$_state_machine__44789__auto__);

(statearr_52186[(1)] = (1));

return statearr_52186;
});
var figwheel$client$heads_up$clear_$_state_machine__44789__auto____1 = (function (state_52178){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_52178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e52187){if((e52187 instanceof Object)){
var ex__44792__auto__ = e52187;
var statearr_52188_52190 = state_52178;
(statearr_52188_52190[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52191 = state_52178;
state_52178 = G__52191;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__44789__auto__ = function(state_52178){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__44789__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__44789__auto____1.call(this,state_52178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__44789__auto____0;
figwheel$client$heads_up$clear_$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__44789__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto__))
})();
var state__44902__auto__ = (function (){var statearr_52189 = f__44901__auto__.call(null);
(statearr_52189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto__);

return statearr_52189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto__))
);

return c__44900__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__44900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto__){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto__){
return (function (state_52223){
var state_val_52224 = (state_52223[(1)]);
if((state_val_52224 === (1))){
var inst_52213 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_52223__$1 = state_52223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52223__$1,(2),inst_52213);
} else {
if((state_val_52224 === (2))){
var inst_52215 = (state_52223[(2)]);
var inst_52216 = cljs.core.async.timeout.call(null,(400));
var state_52223__$1 = (function (){var statearr_52225 = state_52223;
(statearr_52225[(7)] = inst_52215);

return statearr_52225;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52223__$1,(3),inst_52216);
} else {
if((state_val_52224 === (3))){
var inst_52218 = (state_52223[(2)]);
var inst_52219 = figwheel.client.heads_up.clear.call(null);
var state_52223__$1 = (function (){var statearr_52226 = state_52223;
(statearr_52226[(8)] = inst_52218);

return statearr_52226;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52223__$1,(4),inst_52219);
} else {
if((state_val_52224 === (4))){
var inst_52221 = (state_52223[(2)]);
var state_52223__$1 = state_52223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52223__$1,inst_52221);
} else {
return null;
}
}
}
}
});})(c__44900__auto__))
;
return ((function (switch__44788__auto__,c__44900__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__44789__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__44789__auto____0 = (function (){
var statearr_52230 = [null,null,null,null,null,null,null,null,null];
(statearr_52230[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__44789__auto__);

(statearr_52230[(1)] = (1));

return statearr_52230;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__44789__auto____1 = (function (state_52223){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_52223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e52231){if((e52231 instanceof Object)){
var ex__44792__auto__ = e52231;
var statearr_52232_52234 = state_52223;
(statearr_52232_52234[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52235 = state_52223;
state_52223 = G__52235;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__44789__auto__ = function(state_52223){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__44789__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__44789__auto____1.call(this,state_52223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__44789__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__44789__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto__))
})();
var state__44902__auto__ = (function (){var statearr_52233 = f__44901__auto__.call(null);
(statearr_52233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto__);

return statearr_52233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto__))
);

return c__44900__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__4657__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": [cljs.core.str("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str("position: absolute;"),cljs.core.str("z-index: 9000;"),cljs.core.str("width: 100vw;"),cljs.core.str("height: 100vh;"),cljs.core.str("top: 0px; left: 0px;"),cljs.core.str("font-family: monospace")].join('')}),goog.dom.createDom("div",({"class": "message", "style": [cljs.core.str("color: #FFF5DB;"),cljs.core.str("width: 100vw;"),cljs.core.str("margin: auto;"),cljs.core.str("margin-top: 10px;"),cljs.core.str("text-align: center; "),cljs.core.str("padding: 2px 0px;"),cljs.core.str("font-size: 13px;"),cljs.core.str("position: relative")].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1502937018142