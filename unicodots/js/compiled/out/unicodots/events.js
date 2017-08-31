// Compiled by ClojureScript 1.9.229 {}
goog.provide('unicodots.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_frame.loggers');
goog.require('unicodots.db');
goog.require('unicodots.dot');
goog.require('cljs.core.match');
unicodots.events.log = new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(re_frame.loggers.get_loggers.call(null));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return unicodots.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-input","update-input",-884820204),(function (db,p__75859){
var vec__75860 = p__75859;
var _ = cljs.core.nth.call(null,vec__75860,(0),null);
var new_text = cljs.core.nth.call(null,vec__75860,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"input","input",556931961),new_text);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"move-dot","move-dot",-2093164628),(function (db,p__75863){
var vec__75864 = p__75863;
var _ = cljs.core.nth.call(null,vec__75864,(0),null);
var map__75867 = cljs.core.nth.call(null,vec__75864,(1),null);
var map__75867__$1 = ((((!((map__75867 == null)))?((((map__75867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75867):map__75867);
var id = cljs.core.get.call(null,map__75867__$1,new cljs.core.Keyword("unicodots.dot","id","unicodots.dot/id",1509573459));
var options = cljs.core.nth.call(null,vec__75864,(2),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),id], null),unicodots.dot.move_dot,options);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"send-output","send-output",597270720),(function (db,p__75869){
var vec__75870 = p__75869;
var _ = cljs.core.nth.call(null,vec__75870,(0),null);
var val = cljs.core.nth.call(null,vec__75870,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.conj,val);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"send-input","send-input",-1972386700),(function (db,p__75873){
var vec__75874 = p__75873;
var _ = cljs.core.nth.call(null,vec__75874,(0),null);
var val = cljs.core.nth.call(null,vec__75874,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.str,"\n",val);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-macro","set-macro",-1095393929),(function (db,p__75877){
var vec__75878 = p__75877;
var _ = cljs.core.nth.call(null,vec__75878,(0),null);
var dot = cljs.core.nth.call(null,vec__75878,(1),null);
var val = cljs.core.nth.call(null,vec__75878,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),cljs.core.get.call(null,dot,new cljs.core.Keyword("unicodots.dot","id","unicodots.dot/id",1509573459)),new cljs.core.Keyword("unicodots.dot","macro","unicodots.dot/macro",-251196527)], null),val);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-dot-state","set-dot-state",-614551650),(function (db,p__75881){
var vec__75882 = p__75881;
var _ = cljs.core.nth.call(null,vec__75882,(0),null);
var dot = cljs.core.nth.call(null,vec__75882,(1),null);
var new_state = cljs.core.nth.call(null,vec__75882,(2),null);
if(cljs.core._EQ_.call(null,new_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312)], null))){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),cljs.core.get.call(null,dot,new cljs.core.Keyword("unicodots.dot","id","unicodots.dot/id",1509573459)),new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312)], null),(0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),cljs.core.get.call(null,dot,new cljs.core.Keyword("unicodots.dot","id","unicodots.dot/id",1509573459)),new cljs.core.Keyword("unicodots.dot","state","unicodots.dot/state",-46354032)], null),new_state);
} else {
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),cljs.core.get.call(null,dot,new cljs.core.Keyword("unicodots.dot","id","unicodots.dot/id",1509573459)),new cljs.core.Keyword("unicodots.dot","state","unicodots.dot/state",-46354032)], null),new_state);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-value","set-value",445227352),(function (db,p__75885){
var vec__75886 = p__75885;
var _ = cljs.core.nth.call(null,vec__75886,(0),null);
var dot = cljs.core.nth.call(null,vec__75886,(1),null);
var val = cljs.core.nth.call(null,vec__75886,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),cljs.core.get.call(null,dot,new cljs.core.Keyword("unicodots.dot","id","unicodots.dot/id",1509573459)),new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312)], null),val);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"duplicate-dot","duplicate-dot",120254365),(function (db,p__75889){
var vec__75890 = p__75889;
var _ = cljs.core.nth.call(null,vec__75890,(0),null);
var dot = cljs.core.nth.call(null,vec__75890,(1),null);
var tile = cljs.core.nth.call(null,vec__75890,(2),null);
var id = new cljs.core.Keyword("unicodots.dot","id","unicodots.dot/id",1509573459).cljs$core$IFn$_invoke$arity$1(dot);
var dir = new cljs.core.Keyword("unicodots.dot","dir","unicodots.dot/dir",337918054).cljs$core$IFn$_invoke$arity$1(dot);
var start_id = new cljs.core.Keyword(null,"next-dot-id","next-dot-id",397883807).cljs$core$IFn$_invoke$arity$1(db);
var vec__75893 = new cljs.core.Keyword("unicodots.dot","location","unicodots.dot/location",-260689895).cljs$core$IFn$_invoke$arity$1(dot);
var x = cljs.core.nth.call(null,vec__75893,(0),null);
var y = cljs.core.nth.call(null,vec__75893,(1),null);
var lds = cljs.core.filter.call(null,((function (id,dir,start_id,vec__75893,x,y,vec__75890,_,dot,tile){
return (function (x__$1){
var and__41059__auto__ = x__$1;
if(cljs.core.truth_(and__41059__auto__)){
return cljs.core.first.call(null,x__$1);
} else {
return and__41059__auto__;
}
});})(id,dir,start_id,vec__75893,x,y,vec__75890,_,dot,tile))
,cljs.core.map.call(null,((function (id,dir,start_id,vec__75893,x,y,vec__75890,_,dot,tile){
return (function (p__75896){
var vec__75897 = p__75896;
var l = cljs.core.nth.call(null,vec__75897,(0),null);
var d = cljs.core.nth.call(null,vec__75897,(1),null);
var and__41059__auto__ = cljs.core.not_EQ_.call(null,unicodots.dot.reverse_direction.call(null,dir),d);
if(and__41059__auto__){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623),l,new cljs.core.Keyword("unicodots.dot","location","unicodots.dot/location",-260689895)], null)),d], null);
} else {
return and__41059__auto__;
}
});})(id,dir,start_id,vec__75893,x,y,vec__75890,_,dot,tile))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y], null),new cljs.core.Keyword("unicodots.dot","left","unicodots.dot/left",-1804382626)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y], null),new cljs.core.Keyword("unicodots.dot","right","unicodots.dot/right",1891880246)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1))], null),new cljs.core.Keyword("unicodots.dot","up","unicodots.dot/up",1806884368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1))], null),new cljs.core.Keyword("unicodots.dot","down","unicodots.dot/down",-1047897727)], null)], null)));
var spawns = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,((function (id,dir,start_id,vec__75893,x,y,lds,vec__75890,_,dot,tile){
return (function (id_offset,p__75900){
var vec__75901 = p__75900;
var location = cljs.core.nth.call(null,vec__75901,(0),null);
var direction = cljs.core.nth.call(null,vec__75901,(1),null);
return cljs.core.PersistentArrayMap.fromArray([(id + id_offset),cljs.core.merge.call(null,dot,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("unicodots.dot","id","unicodots.dot/id",1509573459),(id + id_offset),new cljs.core.Keyword("unicodots.dot","location","unicodots.dot/location",-260689895),location,new cljs.core.Keyword("unicodots.dot","dir","unicodots.dot/dir",337918054),direction], null))], true, false);
});})(id,dir,start_id,vec__75893,x,y,lds,vec__75890,_,dot,tile))
,lds));
return cljs.core.update.call(null,cljs.core.update.call(null,db,new cljs.core.Keyword(null,"next-dot-id","next-dot-id",397883807),cljs.core._PLUS_,cljs.core.count.call(null,spawns)),new cljs.core.Keyword(null,"dots","dots",714343900),cljs.core.merge,spawns);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"enqueue-fn","enqueue-fn",-33048880),(function (db,p__75904){
var vec__75905 = p__75904;
var _ = cljs.core.nth.call(null,vec__75905,(0),null);
var tile = cljs.core.nth.call(null,vec__75905,(1),null);
var dot = cljs.core.nth.call(null,vec__75905,(2),null);
var tile_location = new cljs.core.Keyword("unicodots.dot","location","unicodots.dot/location",-260689895).cljs$core$IFn$_invoke$arity$1(tile);
var dir = cljs.core.get.call(null,dot,new cljs.core.Keyword("unicodots.dot","dir","unicodots.dot/dir",337918054));
var qk = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("unicodots.dot","left","unicodots.dot/left",-1804382626),new cljs.core.Keyword("unicodots.dot","horizontal-queue","unicodots.dot/horizontal-queue",-100568295),new cljs.core.Keyword("unicodots.dot","right","unicodots.dot/right",1891880246),new cljs.core.Keyword("unicodots.dot","horizontal-queue","unicodots.dot/horizontal-queue",-100568295),new cljs.core.Keyword("unicodots.dot","up","unicodots.dot/up",1806884368),new cljs.core.Keyword("unicodots.dot","vertical-queue","unicodots.dot/vertical-queue",1946427942),new cljs.core.Keyword("unicodots.dot","down","unicodots.dot/down",-1047897727),new cljs.core.Keyword("unicodots.dot","vertical-queue","unicodots.dot/vertical-queue",1946427942)], null).call(null,dir);
var ndb = cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623),tile_location,qk], null),cljs.core.conj,new cljs.core.Keyword("unicodots.dot","id","unicodots.dot/id",1509573459).cljs$core$IFn$_invoke$arity$1(dot)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),new cljs.core.Keyword("unicodots.dot","id","unicodots.dot/id",1509573459).cljs$core$IFn$_invoke$arity$1(dot),new cljs.core.Keyword("unicodots.dot","state","unicodots.dot/state",-46354032)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","enqueued","unicodots.dot/enqueued",2079248603)], null));
if(cljs.core.truth_((function (){var and__41059__auto__ = cljs.core.get_in.call(null,ndb,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623),tile_location,new cljs.core.Keyword("unicodots.dot","horizontal-queue","unicodots.dot/horizontal-queue",-100568295)], null));
if(cljs.core.truth_(and__41059__auto__)){
return cljs.core.get_in.call(null,ndb,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623),tile_location,new cljs.core.Keyword("unicodots.dot","vertical-queue","unicodots.dot/vertical-queue",1946427942)], null));
} else {
return and__41059__auto__;
}
})())){
return cljs.core.update.call(null,ndb,new cljs.core.Keyword(null,"ready-fns","ready-fns",1913519729),cljs.core.conj,tile_location);
} else {
return ndb;
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"enqueue-input","enqueue-input",-459177142),(function (db,p__75908){
var vec__75909 = p__75908;
var _ = cljs.core.nth.call(null,vec__75909,(0),null);
var dot = cljs.core.nth.call(null,vec__75909,(1),null);
var id = new cljs.core.Keyword("unicodots.dot","id","unicodots.dot/id",1509573459).cljs$core$IFn$_invoke$arity$1(dot);
return cljs.core.assoc_in.call(null,cljs.core.update.call(null,db,new cljs.core.Keyword(null,"input-queue","input-queue",-1249708588),cljs.core.conj,id),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),id,new cljs.core.Keyword("unicodots.dot","state","unicodots.dot/state",-46354032)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","enqueued","unicodots.dot/enqueued",2079248603),cljs.core.first.call(null,new cljs.core.Keyword("unicodots.dot","state","unicodots.dot/state",-46354032).cljs$core$IFn$_invoke$arity$1(dot))], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"append-value","append-value",222746039),(function (db,p__75912){
var vec__75913 = p__75912;
var _ = cljs.core.nth.call(null,vec__75913,(0),null);
var dot = cljs.core.nth.call(null,vec__75913,(1),null);
var val = cljs.core.nth.call(null,vec__75913,(2),null);
var old_val = new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312).cljs$core$IFn$_invoke$arity$1(dot);
var new_val = ((typeof old_val === 'number')?(val + ((10) * old_val)):((typeof old_val === 'string')?[cljs.core.str(old_val),cljs.core.str(val)].join(''):val
));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),new cljs.core.Keyword("unicodots.dot","id","unicodots.dot/id",1509573459).cljs$core$IFn$_invoke$arity$1(dot),new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312)], null),new_val);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"accumulate-raw-output","accumulate-raw-output",29723652),(function (p__75916,p__75917){
var map__75918 = p__75916;
var map__75918__$1 = ((((!((map__75918 == null)))?((((map__75918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75918):map__75918);
var db = cljs.core.get.call(null,map__75918__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__75919 = p__75917;
var _ = cljs.core.nth.call(null,vec__75919,(0),null);
var dot = cljs.core.nth.call(null,vec__75919,(1),null);
var tile_type = cljs.core.nth.call(null,vec__75919,(2),null);
var s = cljs.core.get.call(null,new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(db),tile_type,cljs.core.second.call(null,tile_type));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accumulate-output","accumulate-output",1885369110),dot,s], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"accumulate-output","accumulate-output",1885369110),(function (db,p__75923){
var vec__75924 = p__75923;
var _ = cljs.core.nth.call(null,vec__75924,(0),null);
var map__75927 = cljs.core.nth.call(null,vec__75924,(1),null);
var map__75927__$1 = ((((!((map__75927 == null)))?((((map__75927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75927):map__75927);
var dot = map__75927__$1;
var id = cljs.core.get.call(null,map__75927__$1,new cljs.core.Keyword("unicodots.dot","id","unicodots.dot/id",1509573459));
var string = cljs.core.nth.call(null,vec__75924,(2),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),id,new cljs.core.Keyword("unicodots.dot","output","unicodots.dot/output",676361230)], null),cljs.core.str,string);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"flush-output","flush-output",-1522817323),(function (db,p__75929){
var vec__75930 = p__75929;
var _ = cljs.core.nth.call(null,vec__75930,(0),null);
var map__75933 = cljs.core.nth.call(null,vec__75930,(1),null);
var map__75933__$1 = ((((!((map__75933 == null)))?((((map__75933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75933):map__75933);
var id = cljs.core.get.call(null,map__75933__$1,new cljs.core.Keyword("unicodots.dot","id","unicodots.dot/id",1509573459));
var output = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),id,new cljs.core.Keyword("unicodots.dot","output","unicodots.dot/output",676361230)], null));
return cljs.core.update_in.call(null,cljs.core.update.call(null,db,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.conj,output),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),id], null),cljs.core.dissoc,new cljs.core.Keyword("unicodots.dot","output","unicodots.dot/output",676361230));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"send-raw-output","send-raw-output",-176395615),(function (p__75935,p__75936){
var map__75937 = p__75935;
var map__75937__$1 = ((((!((map__75937 == null)))?((((map__75937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75937):map__75937);
var db = cljs.core.get.call(null,map__75937__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__75938 = p__75936;
var _ = cljs.core.nth.call(null,vec__75938,(0),null);
var tile_type = cljs.core.nth.call(null,vec__75938,(1),null);
var s = cljs.core.get.call(null,new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(db),tile_type,cljs.core.second.call(null,tile_type));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-output","send-output",597270720),s], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"set-raw-value","set-raw-value",1535706831),(function (p__75942,p__75943){
var map__75944 = p__75942;
var map__75944__$1 = ((((!((map__75944 == null)))?((((map__75944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75944):map__75944);
var db = cljs.core.get.call(null,map__75944__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__75945 = p__75943;
var _ = cljs.core.nth.call(null,vec__75945,(0),null);
var dot = cljs.core.nth.call(null,vec__75945,(1),null);
var tile_type = cljs.core.nth.call(null,vec__75945,(2),null);
var s = cljs.core.get.call(null,new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(db),tile_type,cljs.core.second.call(null,tile_type));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-value","set-value",445227352),dot,s], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"append-macro","append-macro",-371057384),(function (db,p__75949){
var vec__75950 = p__75949;
var _ = cljs.core.nth.call(null,vec__75950,(0),null);
var map__75953 = cljs.core.nth.call(null,vec__75950,(1),null);
var map__75953__$1 = ((((!((map__75953 == null)))?((((map__75953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75953):map__75953);
var id = cljs.core.get.call(null,map__75953__$1,new cljs.core.Keyword("unicodots.dot","id","unicodots.dot/id",1509573459));
var lt = cljs.core.nth.call(null,vec__75950,(2),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),id,new cljs.core.Keyword("unicodots.dot","macro-stack","unicodots.dot/macro-stack",176293186)], null),cljs.core.conj,lt);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"send-raw-input","send-raw-input",330082071),(function (p__75955,p__75956){
var map__75957 = p__75955;
var map__75957__$1 = ((((!((map__75957 == null)))?((((map__75957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75957):map__75957);
var db = cljs.core.get.call(null,map__75957__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__75958 = p__75956;
var _ = cljs.core.nth.call(null,vec__75958,(0),null);
var lt = cljs.core.nth.call(null,vec__75958,(1),null);
var escaped = cljs.core.nth.call(null,vec__75958,(2),null);
var s = cljs.core.get.call(null,new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(db),lt,cljs.core.second.call(null,lt));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-input","send-input",-1972386700),s], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"end-dot-quote","end-dot-quote",-720614649),(function (db,p__75962){
var vec__75963 = p__75962;
var _ = cljs.core.nth.call(null,vec__75963,(0),null);
var dot = cljs.core.nth.call(null,vec__75963,(1),null);
return db;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"step-program","step-program",-1911111376),(function (p__75966,_){
var map__75967 = p__75966;
var map__75967__$1 = ((((!((map__75967 == null)))?((((map__75967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75967):map__75967);
var db = cljs.core.get.call(null,map__75967__$1,new cljs.core.Keyword(null,"db","db",993250759));
var dot_tiles = cljs.core.map.call(null,((function (map__75967,map__75967__$1,db){
return (function (dot){
var tile = (function (){var or__41071__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623),new cljs.core.Keyword("unicodots.dot","location","unicodots.dot/location",-260689895).cljs$core$IFn$_invoke$arity$1(dot)], null));
if(cljs.core.truth_(or__41071__auto__)){
return or__41071__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("unicodots.dot","location-type","unicodots.dot/location-type",806658017),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","empty-tile","unicodots.dot/empty-tile",1164893653)], null)], null);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dot,tile], null);
});})(map__75967,map__75967__$1,db))
,cljs.core.vals.call(null,new cljs.core.Keyword(null,"dots","dots",714343900).cljs$core$IFn$_invoke$arity$1(db)));
var dot_steps = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.call(null,((function (dot_tiles,map__75967,map__75967__$1,db){
return (function (p__75969){
var vec__75970 = p__75969;
var d = cljs.core.nth.call(null,vec__75970,(0),null);
var t = cljs.core.nth.call(null,vec__75970,(1),null);
return unicodots.dot.transition_dot.call(null,d,t);
});})(dot_tiles,map__75967,map__75967__$1,db))
,dot_tiles));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),cljs.core.conj.call(null,cljs.core.conj.call(null,dot_steps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-fns","process-fns",-1320423457)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-inputs","process-inputs",1264478784)], null))], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-fns","process-fns",-1320423457),(function (db,_){
var d = db;
while(true){
var loc = cljs.core.peek.call(null,new cljs.core.Keyword(null,"ready-fns","ready-fns",1913519729).cljs$core$IFn$_invoke$arity$1(d));
if((loc == null)){
return d;
} else {
var G__75973 = unicodots.dot.process_fn.call(null,d,loc);
d = G__75973;
continue;
}
break;
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-inputs","process-inputs",1264478784),(function (db,_){
return unicodots.dot.process_input.call(null,db);
}));
unicodots.events.step_dispatcher = (function unicodots$events$step_dispatcher(){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step-program","step-program",-1911111376)], null));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-step-timer","set-step-timer",2071590080),(function (db,p__75974){
var vec__75975 = p__75974;
var _ = cljs.core.nth.call(null,vec__75975,(0),null);
var val = cljs.core.nth.call(null,vec__75975,(1),null);
var temp__4655__auto__ = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"step-timer","step-timer",1571568960));
if(cljs.core.truth_(temp__4655__auto__)){
var timer = temp__4655__auto__;
clearTimeout(timer);

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"step-delay","step-delay",663195760),val),new cljs.core.Keyword(null,"step-timer","step-timer",1571568960),setInterval(unicodots.events.step_dispatcher,val));
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"step-delay","step-delay",663195760),val);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"start-program-stepping","start-program-stepping",1317357406),(function (db,_){
var timing = db.call(null,new cljs.core.Keyword(null,"step-delay","step-delay",663195760));
var curr_timer = db.call(null,new cljs.core.Keyword(null,"step-timer","step-timer",1571568960));
if(cljs.core.truth_(curr_timer)){
clearTimeout(curr_timer);
} else {
}

var timer = setInterval(unicodots.events.step_dispatcher,timing);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"step-timer","step-timer",1571568960),timer);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"stop-program-stepping","stop-program-stepping",1952359295),(function (db,_){
var temp__4655__auto__ = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"step-timer","step-timer",1571568960));
if(cljs.core.truth_(temp__4655__auto__)){
var timer = temp__4655__auto__;
clearTimeout(timer);

return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"step-timer","step-timer",1571568960));
} else {
return db;
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"offset-world","offset-world",-1033279543),(function (db,p__75978){
var vec__75979 = p__75978;
var _ = cljs.core.nth.call(null,vec__75979,(0),null);
var x = cljs.core.nth.call(null,vec__75979,(1),null);
var y = cljs.core.nth.call(null,vec__75979,(2),null);
var world = cljs.core.reduce_kv.call(null,((function (vec__75979,_,x,y){
return (function (m,p__75982,tile){
var vec__75983 = p__75982;
var lx = cljs.core.nth.call(null,vec__75983,(0),null);
var ly = cljs.core.nth.call(null,vec__75983,(1),null);
var nloc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(lx + x),(ly + y)], null);
return cljs.core.merge.call(null,m,cljs.core.PersistentArrayMap.fromArray([nloc,cljs.core.assoc.call(null,tile,new cljs.core.Keyword("unicodots.dot","location","unicodots.dot/location",-260689895),nloc)], true, false));
});})(vec__75979,_,x,y))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.get.call(null,db,new cljs.core.Keyword(null,"world","world",-418292623)));
var dots = cljs.core.reduce_kv.call(null,((function (world,vec__75979,_,x,y){
return (function (m,i,v){
return cljs.core.assoc.call(null,m,i,cljs.core.update.call(null,v,new cljs.core.Keyword("unicodots.dot","location","unicodots.dot/location",-260689895),((function (world,vec__75979,_,x,y){
return (function (p__75986){
var vec__75987 = p__75986;
var dx = cljs.core.nth.call(null,vec__75987,(0),null);
var dy = cljs.core.nth.call(null,vec__75987,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx + x),(dy + y)], null);
});})(world,vec__75979,_,x,y))
));
});})(world,vec__75979,_,x,y))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.get.call(null,db,new cljs.core.Keyword(null,"dots","dots",714343900)));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"world","world",-418292623),world),new cljs.core.Keyword(null,"dots","dots",714343900),dots);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-tile","set-tile",1527302597),(function (db,p__75990){
var vec__75991 = p__75990;
var _ = cljs.core.nth.call(null,vec__75991,(0),null);
var loc = cljs.core.nth.call(null,vec__75991,(1),null);
var tile_type = cljs.core.nth.call(null,vec__75991,(2),null);
if((tile_type == null)){
return db;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("unicodots.dot","pre-function","unicodots.dot/pre-function",1123047392),cljs.core.first.call(null,tile_type))){
return db;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","empty-tile","unicodots.dot/empty-tile",1164893653)], null),tile_type)){
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"world","world",-418292623),cljs.core.dissoc,loc);
} else {
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623),loc], null),cljs.core.assoc.call(null,unicodots.dot.tile_defaults.call(null,tile_type),new cljs.core.Keyword("unicodots.dot","location","unicodots.dot/location",-260689895),loc));

}
}
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"paint-tile","paint-tile",-1069487849),(function (p__75994,p__75995){
var map__75996 = p__75994;
var map__75996__$1 = ((((!((map__75996 == null)))?((((map__75996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__75996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75996):map__75996);
var db = cljs.core.get.call(null,map__75996__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__75997 = p__75995;
var _ = cljs.core.nth.call(null,vec__75997,(0),null);
var loc = cljs.core.nth.call(null,vec__75997,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),((cljs.core._EQ_.call(null,new cljs.core.Keyword("unicodots.dot","dot","unicodots.dot/dot",-642282342),cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-paint","current-paint",1292257612),(0)], null))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-dot","add-dot",674995321),loc], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tile","set-tile",1527302597),loc,cljs.core.get.call(null,db,new cljs.core.Keyword(null,"current-paint","current-paint",1292257612))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pad-top-left","pad-top-left",1044302095)], null)], null))], null);
}));
unicodots.events.fn_keypress_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn-stub","unicodots.dot/fn-stub",-917303490),new cljs.core.Keyword("unicodots.dot","fn-not-equal","unicodots.dot/fn-not-equal",-504536438)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn-stub","unicodots.dot/fn-stub",-917303490),new cljs.core.Keyword("unicodots.dot","fn-greater-than-or-equal","unicodots.dot/fn-greater-than-or-equal",2050841584)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","duplicate","unicodots.dot/duplicate",-2042962049)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","literal","unicodots.dot/literal",-814248776),"a"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn-stub","unicodots.dot/fn-stub",-917303490),new cljs.core.Keyword("unicodots.dot","fn-divide","unicodots.dot/fn-divide",427270258)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","literal","unicodots.dot/literal",-814248776),"o"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","literal","unicodots.dot/literal",-814248776),"x"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","merge","unicodots.dot/merge",11990608),new cljs.core.Keyword("unicodots.dot","left","unicodots.dot/left",-1804382626)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn-stub","unicodots.dot/fn-stub",-917303490),new cljs.core.Keyword("unicodots.dot","fn-equal","unicodots.dot/fn-equal",-208512875)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","path","unicodots.dot/path",2022610237),new cljs.core.Keyword("unicodots.dot","both","unicodots.dot/both",1608890935)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","path","unicodots.dot/path",2022610237),new cljs.core.Keyword("unicodots.dot","horizontal","unicodots.dot/horizontal",-441794522)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn-stub","unicodots.dot/fn-stub",-917303490),new cljs.core.Keyword("unicodots.dot","fn-modulus","unicodots.dot/fn-modulus",1430049486)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","merge","unicodots.dot/merge",11990608),new cljs.core.Keyword("unicodots.dot","up","unicodots.dot/up",1806884368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn-stub","unicodots.dot/fn-stub",-917303490),new cljs.core.Keyword("unicodots.dot","fn-less-than-or-equal","unicodots.dot/fn-less-than-or-equal",182065575)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","merge","unicodots.dot/merge",11990608),new cljs.core.Keyword("unicodots.dot","right","unicodots.dot/right",1891880246)], null)],[new cljs.core.Keyword("unicodots.dot","fn-not-equal","unicodots.dot/fn-not-equal",-504536438),new cljs.core.Keyword("unicodots.dot","fn-greater-than-or-equal","unicodots.dot/fn-greater-than-or-equal",2050841584),new cljs.core.Keyword("unicodots.dot","fn-multiply","unicodots.dot/fn-multiply",1935832001),new cljs.core.Keyword("unicodots.dot","fn-and","unicodots.dot/fn-and",233237803),new cljs.core.Keyword("unicodots.dot","fn-divide","unicodots.dot/fn-divide",427270258),new cljs.core.Keyword("unicodots.dot","fn-or","unicodots.dot/fn-or",1937817482),new cljs.core.Keyword("unicodots.dot","fn-xor","unicodots.dot/fn-xor",-490474062),new cljs.core.Keyword("unicodots.dot","fn-less-than","unicodots.dot/fn-less-than",-452179320),new cljs.core.Keyword("unicodots.dot","fn-equal","unicodots.dot/fn-equal",-208512875),new cljs.core.Keyword("unicodots.dot","fn-add","unicodots.dot/fn-add",-71095252),new cljs.core.Keyword("unicodots.dot","fn-minus","unicodots.dot/fn-minus",416486403),new cljs.core.Keyword("unicodots.dot","fn-modulus","unicodots.dot/fn-modulus",1430049486),new cljs.core.Keyword("unicodots.dot","fn-exponent","unicodots.dot/fn-exponent",-542228252),new cljs.core.Keyword("unicodots.dot","fn-less-than-or-equal","unicodots.dot/fn-less-than-or-equal",182065575),new cljs.core.Keyword("unicodots.dot","fn-greater-than","unicodots.dot/fn-greater-than",110426633)]);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-dot","add-dot",674995321),(function (db,p__76001){
var vec__76002 = p__76001;
var _ = cljs.core.nth.call(null,vec__76002,(0),null);
var loc = cljs.core.nth.call(null,vec__76002,(1),null);
var id = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"next-dot-id","next-dot-id",397883807));
var glyph = cljs.core.peek.call(null,new cljs.core.Keyword(null,"dot-seeds","dot-seeds",-2017706311).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(db)));
var dir = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-paint","current-paint",1292257612),(1)], null));
var dot = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("unicodots.dot","id","unicodots.dot/id",1509573459),id,new cljs.core.Keyword("unicodots.dot","glyph","unicodots.dot/glyph",983138102),glyph,new cljs.core.Keyword("unicodots.dot","value","unicodots.dot/value",1719603312),(0),new cljs.core.Keyword("unicodots.dot","location","unicodots.dot/location",-260689895),loc,new cljs.core.Keyword("unicodots.dot","dir","unicodots.dot/dir",337918054),dir,new cljs.core.Keyword("unicodots.dot","state","unicodots.dot/state",-46354032),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","moving","unicodots.dot/moving",-450286281)], null),new cljs.core.Keyword("unicodots.dot","macro-stack","unicodots.dot/macro-stack",176293186),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.update.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),id], null),dot),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"dot-seeds","dot-seeds",-2017706311)], null),((function (id,glyph,dir,dot,vec__76002,_,loc){
return (function (x){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,x)], null),cljs.core.pop.call(null,x));
});})(id,glyph,dir,dot,vec__76002,_,loc))
),new cljs.core.Keyword(null,"next-dot-id","next-dot-id",397883807),cljs.core.inc);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-current-paint","set-current-paint",-833860169),(function (db,p__76005){
var vec__76006 = p__76005;
var _ = cljs.core.nth.call(null,vec__76006,(0),null);
var tile_type = cljs.core.nth.call(null,vec__76006,(1),null);
var current_paint = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"current-paint","current-paint",1292257612));
var fn_deref = cljs.core.get.call(null,unicodots.events.fn_keypress_map,tile_type);
var new_tile = (cljs.core.truth_((function (){var and__41059__auto__ = fn_deref;
if(cljs.core.truth_(and__41059__auto__)){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,current_paint),new cljs.core.Keyword("unicodots.dot","pre-function","unicodots.dot/pre-function",1123047392));
} else {
return and__41059__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("unicodots.dot","fn","unicodots.dot/fn",103642469),cljs.core.second.call(null,current_paint),fn_deref], null):tile_type);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-paint","current-paint",1292257612),new_tile);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"toggle-current-paint","toggle-current-paint",791963935),(function (db,p__76009){
var vec__76010 = p__76009;
var _ = cljs.core.nth.call(null,vec__76010,(0),null);
var tile_type = cljs.core.nth.call(null,vec__76010,(1),null);
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,db,new cljs.core.Keyword(null,"current-paint","current-paint",1292257612)),tile_type)){
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"current-paint","current-paint",1292257612));
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-paint","current-paint",1292257612),tile_type);
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"pad-top-left","pad-top-left",1044302095),(function (p__76013,_){
var map__76014 = p__76013;
var map__76014__$1 = ((((!((map__76014 == null)))?((((map__76014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76014):map__76014);
var db = cljs.core.get.call(null,map__76014__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__76016 = cljs.core.reduce.call(null,((function (map__76014,map__76014__$1,db){
return (function (ms,ns){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__41409__auto__ = cljs.core.first.call(null,ms);
var y__41410__auto__ = cljs.core.first.call(null,ns);
return ((x__41409__auto__ < y__41410__auto__) ? x__41409__auto__ : y__41410__auto__);
})(),(function (){var x__41409__auto__ = cljs.core.second.call(null,ms);
var y__41410__auto__ = cljs.core.second.call(null,ns);
return ((x__41409__auto__ < y__41410__auto__) ? x__41409__auto__ : y__41410__auto__);
})()], null);
});})(map__76014,map__76014__$1,db))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null),cljs.core.keys.call(null,new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(db)));
var left = cljs.core.nth.call(null,vec__76016,(0),null);
var top = cljs.core.nth.call(null,vec__76016,(1),null);
var left_buf = (function (){var x__41402__auto__ = (0);
var y__41403__auto__ = ((4) - left);
return ((x__41402__auto__ > y__41403__auto__) ? x__41402__auto__ : y__41403__auto__);
})();
var top_buf = (function (){var x__41402__auto__ = (0);
var y__41403__auto__ = ((4) - top);
return ((x__41402__auto__ > y__41403__auto__) ? x__41402__auto__ : y__41403__auto__);
})();
if(cljs.core._EQ_.call(null,(0),left_buf,top_buf)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset-world","offset-world",-1033279543),left_buf,top_buf], null)], null);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"pop-macro","pop-macro",1430702211),(function (db,p__76019){
var vec__76020 = p__76019;
var _ = cljs.core.nth.call(null,vec__76020,(0),null);
var map__76023 = cljs.core.nth.call(null,vec__76020,(1),null);
var map__76023__$1 = ((((!((map__76023 == null)))?((((map__76023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76023):map__76023);
var id = cljs.core.get.call(null,map__76023__$1,new cljs.core.Keyword("unicodots.dot","id","unicodots.dot/id",1509573459));
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dots","dots",714343900),id,new cljs.core.Keyword("unicodots.dot","macro-stack","unicodots.dot/macro-stack",176293186)], null),cljs.core.pop);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"apply-macro","apply-macro",-858358150),(function (p__76025,p__76026){
var map__76027 = p__76025;
var map__76027__$1 = ((((!((map__76027 == null)))?((((map__76027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76027):map__76027);
var db = cljs.core.get.call(null,map__76027__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__76028 = p__76026;
var _ = cljs.core.nth.call(null,vec__76028,(0),null);
var map__76031 = cljs.core.nth.call(null,vec__76028,(1),null);
var map__76031__$1 = ((((!((map__76031 == null)))?((((map__76031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76031):map__76031);
var dot = map__76031__$1;
var id = cljs.core.get.call(null,map__76031__$1,new cljs.core.Keyword("unicodots.dot","id","unicodots.dot/id",1509573459));
var loc = cljs.core.get.call(null,map__76031__$1,new cljs.core.Keyword("unicodots.dot","location","unicodots.dot/location",-260689895));
var mac = cljs.core.get.call(null,map__76031__$1,new cljs.core.Keyword("unicodots.dot","macro-stack","unicodots.dot/macro-stack",176293186));
var tile = cljs.core.peek.call(null,mac);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),((cljs.core._EQ_.call(null,new cljs.core.Keyword("unicodots.dot","dot","unicodots.dot/dot",-642282342),tile))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-dot","add-dot",674995321),loc], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pop-macro","pop-macro",1430702211),dot], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tile","set-tile",1527302597),loc,tile], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pop-macro","pop-macro",1430702211),dot], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pad-top-left","pad-top-left",1044302095)], null)], null))], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"kill-dot","kill-dot",766759912),(function (db,p__76034){
var vec__76035 = p__76034;
var _ = cljs.core.nth.call(null,vec__76035,(0),null);
var map__76038 = cljs.core.nth.call(null,vec__76035,(1),null);
var map__76038__$1 = ((((!((map__76038 == null)))?((((map__76038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76038):map__76038);
var id = cljs.core.get.call(null,map__76038__$1,new cljs.core.Keyword("unicodots.dot","id","unicodots.dot/id",1509573459));
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"dots","dots",714343900),cljs.core.dissoc,id);
}));

//# sourceMappingURL=events.js.map?rel=1503610095524