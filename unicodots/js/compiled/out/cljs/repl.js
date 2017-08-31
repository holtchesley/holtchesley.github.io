// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__51799){
var map__51824 = p__51799;
var map__51824__$1 = ((((!((map__51824 == null)))?((((map__51824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51824):map__51824);
var m = map__51824__$1;
var n = cljs.core.get.call(null,map__51824__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__51824__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51826_51848 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51827_51849 = null;
var count__51828_51850 = (0);
var i__51829_51851 = (0);
while(true){
if((i__51829_51851 < count__51828_51850)){
var f_51852 = cljs.core._nth.call(null,chunk__51827_51849,i__51829_51851);
cljs.core.println.call(null,"  ",f_51852);

var G__51853 = seq__51826_51848;
var G__51854 = chunk__51827_51849;
var G__51855 = count__51828_51850;
var G__51856 = (i__51829_51851 + (1));
seq__51826_51848 = G__51853;
chunk__51827_51849 = G__51854;
count__51828_51850 = G__51855;
i__51829_51851 = G__51856;
continue;
} else {
var temp__4657__auto___51857 = cljs.core.seq.call(null,seq__51826_51848);
if(temp__4657__auto___51857){
var seq__51826_51858__$1 = temp__4657__auto___51857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51826_51858__$1)){
var c__41882__auto___51859 = cljs.core.chunk_first.call(null,seq__51826_51858__$1);
var G__51860 = cljs.core.chunk_rest.call(null,seq__51826_51858__$1);
var G__51861 = c__41882__auto___51859;
var G__51862 = cljs.core.count.call(null,c__41882__auto___51859);
var G__51863 = (0);
seq__51826_51848 = G__51860;
chunk__51827_51849 = G__51861;
count__51828_51850 = G__51862;
i__51829_51851 = G__51863;
continue;
} else {
var f_51864 = cljs.core.first.call(null,seq__51826_51858__$1);
cljs.core.println.call(null,"  ",f_51864);

var G__51865 = cljs.core.next.call(null,seq__51826_51858__$1);
var G__51866 = null;
var G__51867 = (0);
var G__51868 = (0);
seq__51826_51848 = G__51865;
chunk__51827_51849 = G__51866;
count__51828_51850 = G__51867;
i__51829_51851 = G__51868;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51869 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__41071__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__41071__auto__)){
return or__41071__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_51869);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_51869)))?cljs.core.second.call(null,arglists_51869):arglists_51869));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51830_51870 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51831_51871 = null;
var count__51832_51872 = (0);
var i__51833_51873 = (0);
while(true){
if((i__51833_51873 < count__51832_51872)){
var vec__51834_51874 = cljs.core._nth.call(null,chunk__51831_51871,i__51833_51873);
var name_51875 = cljs.core.nth.call(null,vec__51834_51874,(0),null);
var map__51837_51876 = cljs.core.nth.call(null,vec__51834_51874,(1),null);
var map__51837_51877__$1 = ((((!((map__51837_51876 == null)))?((((map__51837_51876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51837_51876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51837_51876):map__51837_51876);
var doc_51878 = cljs.core.get.call(null,map__51837_51877__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51879 = cljs.core.get.call(null,map__51837_51877__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51875);

cljs.core.println.call(null," ",arglists_51879);

if(cljs.core.truth_(doc_51878)){
cljs.core.println.call(null," ",doc_51878);
} else {
}

var G__51880 = seq__51830_51870;
var G__51881 = chunk__51831_51871;
var G__51882 = count__51832_51872;
var G__51883 = (i__51833_51873 + (1));
seq__51830_51870 = G__51880;
chunk__51831_51871 = G__51881;
count__51832_51872 = G__51882;
i__51833_51873 = G__51883;
continue;
} else {
var temp__4657__auto___51884 = cljs.core.seq.call(null,seq__51830_51870);
if(temp__4657__auto___51884){
var seq__51830_51885__$1 = temp__4657__auto___51884;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51830_51885__$1)){
var c__41882__auto___51886 = cljs.core.chunk_first.call(null,seq__51830_51885__$1);
var G__51887 = cljs.core.chunk_rest.call(null,seq__51830_51885__$1);
var G__51888 = c__41882__auto___51886;
var G__51889 = cljs.core.count.call(null,c__41882__auto___51886);
var G__51890 = (0);
seq__51830_51870 = G__51887;
chunk__51831_51871 = G__51888;
count__51832_51872 = G__51889;
i__51833_51873 = G__51890;
continue;
} else {
var vec__51839_51891 = cljs.core.first.call(null,seq__51830_51885__$1);
var name_51892 = cljs.core.nth.call(null,vec__51839_51891,(0),null);
var map__51842_51893 = cljs.core.nth.call(null,vec__51839_51891,(1),null);
var map__51842_51894__$1 = ((((!((map__51842_51893 == null)))?((((map__51842_51893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51842_51893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51842_51893):map__51842_51893);
var doc_51895 = cljs.core.get.call(null,map__51842_51894__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51896 = cljs.core.get.call(null,map__51842_51894__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51892);

cljs.core.println.call(null," ",arglists_51896);

if(cljs.core.truth_(doc_51895)){
cljs.core.println.call(null," ",doc_51895);
} else {
}

var G__51897 = cljs.core.next.call(null,seq__51830_51885__$1);
var G__51898 = null;
var G__51899 = (0);
var G__51900 = (0);
seq__51830_51870 = G__51897;
chunk__51831_51871 = G__51898;
count__51832_51872 = G__51899;
i__51833_51873 = G__51900;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__51844 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51845 = null;
var count__51846 = (0);
var i__51847 = (0);
while(true){
if((i__51847 < count__51846)){
var role = cljs.core._nth.call(null,chunk__51845,i__51847);
var temp__4657__auto___51901__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___51901__$1)){
var spec_51902 = temp__4657__auto___51901__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_51902));
} else {
}

var G__51903 = seq__51844;
var G__51904 = chunk__51845;
var G__51905 = count__51846;
var G__51906 = (i__51847 + (1));
seq__51844 = G__51903;
chunk__51845 = G__51904;
count__51846 = G__51905;
i__51847 = G__51906;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__51844);
if(temp__4657__auto____$1){
var seq__51844__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51844__$1)){
var c__41882__auto__ = cljs.core.chunk_first.call(null,seq__51844__$1);
var G__51907 = cljs.core.chunk_rest.call(null,seq__51844__$1);
var G__51908 = c__41882__auto__;
var G__51909 = cljs.core.count.call(null,c__41882__auto__);
var G__51910 = (0);
seq__51844 = G__51907;
chunk__51845 = G__51908;
count__51846 = G__51909;
i__51847 = G__51910;
continue;
} else {
var role = cljs.core.first.call(null,seq__51844__$1);
var temp__4657__auto___51911__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___51911__$2)){
var spec_51912 = temp__4657__auto___51911__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_51912));
} else {
}

var G__51913 = cljs.core.next.call(null,seq__51844__$1);
var G__51914 = null;
var G__51915 = (0);
var G__51916 = (0);
seq__51844 = G__51913;
chunk__51845 = G__51914;
count__51846 = G__51915;
i__51847 = G__51916;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1502937017828