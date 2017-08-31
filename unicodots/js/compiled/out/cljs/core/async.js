// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args44945 = [];
var len__42146__auto___44951 = arguments.length;
var i__42147__auto___44952 = (0);
while(true){
if((i__42147__auto___44952 < len__42146__auto___44951)){
args44945.push((arguments[i__42147__auto___44952]));

var G__44953 = (i__42147__auto___44952 + (1));
i__42147__auto___44952 = G__44953;
continue;
} else {
}
break;
}

var G__44947 = args44945.length;
switch (G__44947) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44945.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async44948 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44948 = (function (f,blockable,meta44949){
this.f = f;
this.blockable = blockable;
this.meta44949 = meta44949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44950,meta44949__$1){
var self__ = this;
var _44950__$1 = this;
return (new cljs.core.async.t_cljs$core$async44948(self__.f,self__.blockable,meta44949__$1));
});

cljs.core.async.t_cljs$core$async44948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44950){
var self__ = this;
var _44950__$1 = this;
return self__.meta44949;
});

cljs.core.async.t_cljs$core$async44948.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44948.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44948.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async44948.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async44948.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44949","meta44949",-1461276824,null)], null);
});

cljs.core.async.t_cljs$core$async44948.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44948.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44948";

cljs.core.async.t_cljs$core$async44948.cljs$lang$ctorPrWriter = (function (this__41677__auto__,writer__41678__auto__,opt__41679__auto__){
return cljs.core._write.call(null,writer__41678__auto__,"cljs.core.async/t_cljs$core$async44948");
});

cljs.core.async.__GT_t_cljs$core$async44948 = (function cljs$core$async$__GT_t_cljs$core$async44948(f__$1,blockable__$1,meta44949){
return (new cljs.core.async.t_cljs$core$async44948(f__$1,blockable__$1,meta44949));
});

}

return (new cljs.core.async.t_cljs$core$async44948(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args44957 = [];
var len__42146__auto___44960 = arguments.length;
var i__42147__auto___44961 = (0);
while(true){
if((i__42147__auto___44961 < len__42146__auto___44960)){
args44957.push((arguments[i__42147__auto___44961]));

var G__44962 = (i__42147__auto___44961 + (1));
i__42147__auto___44961 = G__44962;
continue;
} else {
}
break;
}

var G__44959 = args44957.length;
switch (G__44959) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44957.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args44964 = [];
var len__42146__auto___44967 = arguments.length;
var i__42147__auto___44968 = (0);
while(true){
if((i__42147__auto___44968 < len__42146__auto___44967)){
args44964.push((arguments[i__42147__auto___44968]));

var G__44969 = (i__42147__auto___44968 + (1));
i__42147__auto___44968 = G__44969;
continue;
} else {
}
break;
}

var G__44966 = args44964.length;
switch (G__44966) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44964.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args44971 = [];
var len__42146__auto___44974 = arguments.length;
var i__42147__auto___44975 = (0);
while(true){
if((i__42147__auto___44975 < len__42146__auto___44974)){
args44971.push((arguments[i__42147__auto___44975]));

var G__44976 = (i__42147__auto___44975 + (1));
i__42147__auto___44975 = G__44976;
continue;
} else {
}
break;
}

var G__44973 = args44971.length;
switch (G__44973) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44971.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_44978 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_44978);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_44978,ret){
return (function (){
return fn1.call(null,val_44978);
});})(val_44978,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args44979 = [];
var len__42146__auto___44982 = arguments.length;
var i__42147__auto___44983 = (0);
while(true){
if((i__42147__auto___44983 < len__42146__auto___44982)){
args44979.push((arguments[i__42147__auto___44983]));

var G__44984 = (i__42147__auto___44983 + (1));
i__42147__auto___44983 = G__44984;
continue;
} else {
}
break;
}

var G__44981 = args44979.length;
switch (G__44981) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44979.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__41986__auto___44986 = n;
var x_44987 = (0);
while(true){
if((x_44987 < n__41986__auto___44986)){
(a[x_44987] = (0));

var G__44988 = (x_44987 + (1));
x_44987 = G__44988;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__44989 = (i + (1));
i = G__44989;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async44993 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44993 = (function (alt_flag,flag,meta44994){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta44994 = meta44994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_44995,meta44994__$1){
var self__ = this;
var _44995__$1 = this;
return (new cljs.core.async.t_cljs$core$async44993(self__.alt_flag,self__.flag,meta44994__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async44993.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_44995){
var self__ = this;
var _44995__$1 = this;
return self__.meta44994;
});})(flag))
;

cljs.core.async.t_cljs$core$async44993.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44993.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async44993.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44993.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44993.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44994","meta44994",-1840025903,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async44993.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44993.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44993";

cljs.core.async.t_cljs$core$async44993.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__41677__auto__,writer__41678__auto__,opt__41679__auto__){
return cljs.core._write.call(null,writer__41678__auto__,"cljs.core.async/t_cljs$core$async44993");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async44993 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44993(alt_flag__$1,flag__$1,meta44994){
return (new cljs.core.async.t_cljs$core$async44993(alt_flag__$1,flag__$1,meta44994));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async44993(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async44999 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44999 = (function (alt_handler,flag,cb,meta45000){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta45000 = meta45000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45001,meta45000__$1){
var self__ = this;
var _45001__$1 = this;
return (new cljs.core.async.t_cljs$core$async44999(self__.alt_handler,self__.flag,self__.cb,meta45000__$1));
});

cljs.core.async.t_cljs$core$async44999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45001){
var self__ = this;
var _45001__$1 = this;
return self__.meta45000;
});

cljs.core.async.t_cljs$core$async44999.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44999.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async44999.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44999.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async44999.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45000","meta45000",1760073598,null)], null);
});

cljs.core.async.t_cljs$core$async44999.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44999.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44999";

cljs.core.async.t_cljs$core$async44999.cljs$lang$ctorPrWriter = (function (this__41677__auto__,writer__41678__auto__,opt__41679__auto__){
return cljs.core._write.call(null,writer__41678__auto__,"cljs.core.async/t_cljs$core$async44999");
});

cljs.core.async.__GT_t_cljs$core$async44999 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44999(alt_handler__$1,flag__$1,cb__$1,meta45000){
return (new cljs.core.async.t_cljs$core$async44999(alt_handler__$1,flag__$1,cb__$1,meta45000));
});

}

return (new cljs.core.async.t_cljs$core$async44999(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45002_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45002_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45003_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45003_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__41071__auto__ = wport;
if(cljs.core.truth_(or__41071__auto__)){
return or__41071__auto__;
} else {
return port;
}
})()], null));
} else {
var G__45004 = (i + (1));
i = G__45004;
continue;
}
} else {
return null;
}
break;
}
})();
var or__41071__auto__ = ret;
if(cljs.core.truth_(or__41071__auto__)){
return or__41071__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__41059__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__41059__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__41059__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__42153__auto__ = [];
var len__42146__auto___45010 = arguments.length;
var i__42147__auto___45011 = (0);
while(true){
if((i__42147__auto___45011 < len__42146__auto___45010)){
args__42153__auto__.push((arguments[i__42147__auto___45011]));

var G__45012 = (i__42147__auto___45011 + (1));
i__42147__auto___45011 = G__45012;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((1) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42154__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45007){
var map__45008 = p__45007;
var map__45008__$1 = ((((!((map__45008 == null)))?((((map__45008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45008):map__45008);
var opts = map__45008__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45005){
var G__45006 = cljs.core.first.call(null,seq45005);
var seq45005__$1 = cljs.core.next.call(null,seq45005);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45006,seq45005__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args45013 = [];
var len__42146__auto___45063 = arguments.length;
var i__42147__auto___45064 = (0);
while(true){
if((i__42147__auto___45064 < len__42146__auto___45063)){
args45013.push((arguments[i__42147__auto___45064]));

var G__45065 = (i__42147__auto___45064 + (1));
i__42147__auto___45064 = G__45065;
continue;
} else {
}
break;
}

var G__45015 = args45013.length;
switch (G__45015) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45013.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44900__auto___45067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto___45067){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto___45067){
return (function (state_45039){
var state_val_45040 = (state_45039[(1)]);
if((state_val_45040 === (7))){
var inst_45035 = (state_45039[(2)]);
var state_45039__$1 = state_45039;
var statearr_45041_45068 = state_45039__$1;
(statearr_45041_45068[(2)] = inst_45035);

(statearr_45041_45068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (1))){
var state_45039__$1 = state_45039;
var statearr_45042_45069 = state_45039__$1;
(statearr_45042_45069[(2)] = null);

(statearr_45042_45069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (4))){
var inst_45018 = (state_45039[(7)]);
var inst_45018__$1 = (state_45039[(2)]);
var inst_45019 = (inst_45018__$1 == null);
var state_45039__$1 = (function (){var statearr_45043 = state_45039;
(statearr_45043[(7)] = inst_45018__$1);

return statearr_45043;
})();
if(cljs.core.truth_(inst_45019)){
var statearr_45044_45070 = state_45039__$1;
(statearr_45044_45070[(1)] = (5));

} else {
var statearr_45045_45071 = state_45039__$1;
(statearr_45045_45071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (13))){
var state_45039__$1 = state_45039;
var statearr_45046_45072 = state_45039__$1;
(statearr_45046_45072[(2)] = null);

(statearr_45046_45072[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (6))){
var inst_45018 = (state_45039[(7)]);
var state_45039__$1 = state_45039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45039__$1,(11),to,inst_45018);
} else {
if((state_val_45040 === (3))){
var inst_45037 = (state_45039[(2)]);
var state_45039__$1 = state_45039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45039__$1,inst_45037);
} else {
if((state_val_45040 === (12))){
var state_45039__$1 = state_45039;
var statearr_45047_45073 = state_45039__$1;
(statearr_45047_45073[(2)] = null);

(statearr_45047_45073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (2))){
var state_45039__$1 = state_45039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45039__$1,(4),from);
} else {
if((state_val_45040 === (11))){
var inst_45028 = (state_45039[(2)]);
var state_45039__$1 = state_45039;
if(cljs.core.truth_(inst_45028)){
var statearr_45048_45074 = state_45039__$1;
(statearr_45048_45074[(1)] = (12));

} else {
var statearr_45049_45075 = state_45039__$1;
(statearr_45049_45075[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (9))){
var state_45039__$1 = state_45039;
var statearr_45050_45076 = state_45039__$1;
(statearr_45050_45076[(2)] = null);

(statearr_45050_45076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (5))){
var state_45039__$1 = state_45039;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45051_45077 = state_45039__$1;
(statearr_45051_45077[(1)] = (8));

} else {
var statearr_45052_45078 = state_45039__$1;
(statearr_45052_45078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (14))){
var inst_45033 = (state_45039[(2)]);
var state_45039__$1 = state_45039;
var statearr_45053_45079 = state_45039__$1;
(statearr_45053_45079[(2)] = inst_45033);

(statearr_45053_45079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (10))){
var inst_45025 = (state_45039[(2)]);
var state_45039__$1 = state_45039;
var statearr_45054_45080 = state_45039__$1;
(statearr_45054_45080[(2)] = inst_45025);

(statearr_45054_45080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45040 === (8))){
var inst_45022 = cljs.core.async.close_BANG_.call(null,to);
var state_45039__$1 = state_45039;
var statearr_45055_45081 = state_45039__$1;
(statearr_45055_45081[(2)] = inst_45022);

(statearr_45055_45081[(1)] = (10));


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
});})(c__44900__auto___45067))
;
return ((function (switch__44788__auto__,c__44900__auto___45067){
return (function() {
var cljs$core$async$state_machine__44789__auto__ = null;
var cljs$core$async$state_machine__44789__auto____0 = (function (){
var statearr_45059 = [null,null,null,null,null,null,null,null];
(statearr_45059[(0)] = cljs$core$async$state_machine__44789__auto__);

(statearr_45059[(1)] = (1));

return statearr_45059;
});
var cljs$core$async$state_machine__44789__auto____1 = (function (state_45039){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_45039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e45060){if((e45060 instanceof Object)){
var ex__44792__auto__ = e45060;
var statearr_45061_45082 = state_45039;
(statearr_45061_45082[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45083 = state_45039;
state_45039 = G__45083;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
cljs$core$async$state_machine__44789__auto__ = function(state_45039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44789__auto____1.call(this,state_45039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44789__auto____0;
cljs$core$async$state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44789__auto____1;
return cljs$core$async$state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto___45067))
})();
var state__44902__auto__ = (function (){var statearr_45062 = f__44901__auto__.call(null);
(statearr_45062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto___45067);

return statearr_45062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto___45067))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__45271){
var vec__45272 = p__45271;
var v = cljs.core.nth.call(null,vec__45272,(0),null);
var p = cljs.core.nth.call(null,vec__45272,(1),null);
var job = vec__45272;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__44900__auto___45458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto___45458,res,vec__45272,v,p,job,jobs,results){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto___45458,res,vec__45272,v,p,job,jobs,results){
return (function (state_45279){
var state_val_45280 = (state_45279[(1)]);
if((state_val_45280 === (1))){
var state_45279__$1 = state_45279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45279__$1,(2),res,v);
} else {
if((state_val_45280 === (2))){
var inst_45276 = (state_45279[(2)]);
var inst_45277 = cljs.core.async.close_BANG_.call(null,res);
var state_45279__$1 = (function (){var statearr_45281 = state_45279;
(statearr_45281[(7)] = inst_45276);

return statearr_45281;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45279__$1,inst_45277);
} else {
return null;
}
}
});})(c__44900__auto___45458,res,vec__45272,v,p,job,jobs,results))
;
return ((function (switch__44788__auto__,c__44900__auto___45458,res,vec__45272,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____0 = (function (){
var statearr_45285 = [null,null,null,null,null,null,null,null];
(statearr_45285[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__);

(statearr_45285[(1)] = (1));

return statearr_45285;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____1 = (function (state_45279){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_45279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e45286){if((e45286 instanceof Object)){
var ex__44792__auto__ = e45286;
var statearr_45287_45459 = state_45279;
(statearr_45287_45459[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45460 = state_45279;
state_45279 = G__45460;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__ = function(state_45279){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____1.call(this,state_45279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto___45458,res,vec__45272,v,p,job,jobs,results))
})();
var state__44902__auto__ = (function (){var statearr_45288 = f__44901__auto__.call(null);
(statearr_45288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto___45458);

return statearr_45288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto___45458,res,vec__45272,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__45289){
var vec__45290 = p__45289;
var v = cljs.core.nth.call(null,vec__45290,(0),null);
var p = cljs.core.nth.call(null,vec__45290,(1),null);
var job = vec__45290;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__41986__auto___45461 = n;
var __45462 = (0);
while(true){
if((__45462 < n__41986__auto___45461)){
var G__45293_45463 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__45293_45463) {
case "compute":
var c__44900__auto___45465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45462,c__44900__auto___45465,G__45293_45463,n__41986__auto___45461,jobs,results,process,async){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (__45462,c__44900__auto___45465,G__45293_45463,n__41986__auto___45461,jobs,results,process,async){
return (function (state_45306){
var state_val_45307 = (state_45306[(1)]);
if((state_val_45307 === (1))){
var state_45306__$1 = state_45306;
var statearr_45308_45466 = state_45306__$1;
(statearr_45308_45466[(2)] = null);

(statearr_45308_45466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45307 === (2))){
var state_45306__$1 = state_45306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45306__$1,(4),jobs);
} else {
if((state_val_45307 === (3))){
var inst_45304 = (state_45306[(2)]);
var state_45306__$1 = state_45306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45306__$1,inst_45304);
} else {
if((state_val_45307 === (4))){
var inst_45296 = (state_45306[(2)]);
var inst_45297 = process.call(null,inst_45296);
var state_45306__$1 = state_45306;
if(cljs.core.truth_(inst_45297)){
var statearr_45309_45467 = state_45306__$1;
(statearr_45309_45467[(1)] = (5));

} else {
var statearr_45310_45468 = state_45306__$1;
(statearr_45310_45468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45307 === (5))){
var state_45306__$1 = state_45306;
var statearr_45311_45469 = state_45306__$1;
(statearr_45311_45469[(2)] = null);

(statearr_45311_45469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45307 === (6))){
var state_45306__$1 = state_45306;
var statearr_45312_45470 = state_45306__$1;
(statearr_45312_45470[(2)] = null);

(statearr_45312_45470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45307 === (7))){
var inst_45302 = (state_45306[(2)]);
var state_45306__$1 = state_45306;
var statearr_45313_45471 = state_45306__$1;
(statearr_45313_45471[(2)] = inst_45302);

(statearr_45313_45471[(1)] = (3));


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
});})(__45462,c__44900__auto___45465,G__45293_45463,n__41986__auto___45461,jobs,results,process,async))
;
return ((function (__45462,switch__44788__auto__,c__44900__auto___45465,G__45293_45463,n__41986__auto___45461,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____0 = (function (){
var statearr_45317 = [null,null,null,null,null,null,null];
(statearr_45317[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__);

(statearr_45317[(1)] = (1));

return statearr_45317;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____1 = (function (state_45306){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_45306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e45318){if((e45318 instanceof Object)){
var ex__44792__auto__ = e45318;
var statearr_45319_45472 = state_45306;
(statearr_45319_45472[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45473 = state_45306;
state_45306 = G__45473;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__ = function(state_45306){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____1.call(this,state_45306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__;
})()
;})(__45462,switch__44788__auto__,c__44900__auto___45465,G__45293_45463,n__41986__auto___45461,jobs,results,process,async))
})();
var state__44902__auto__ = (function (){var statearr_45320 = f__44901__auto__.call(null);
(statearr_45320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto___45465);

return statearr_45320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(__45462,c__44900__auto___45465,G__45293_45463,n__41986__auto___45461,jobs,results,process,async))
);


break;
case "async":
var c__44900__auto___45474 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45462,c__44900__auto___45474,G__45293_45463,n__41986__auto___45461,jobs,results,process,async){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (__45462,c__44900__auto___45474,G__45293_45463,n__41986__auto___45461,jobs,results,process,async){
return (function (state_45333){
var state_val_45334 = (state_45333[(1)]);
if((state_val_45334 === (1))){
var state_45333__$1 = state_45333;
var statearr_45335_45475 = state_45333__$1;
(statearr_45335_45475[(2)] = null);

(statearr_45335_45475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45334 === (2))){
var state_45333__$1 = state_45333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45333__$1,(4),jobs);
} else {
if((state_val_45334 === (3))){
var inst_45331 = (state_45333[(2)]);
var state_45333__$1 = state_45333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45333__$1,inst_45331);
} else {
if((state_val_45334 === (4))){
var inst_45323 = (state_45333[(2)]);
var inst_45324 = async.call(null,inst_45323);
var state_45333__$1 = state_45333;
if(cljs.core.truth_(inst_45324)){
var statearr_45336_45476 = state_45333__$1;
(statearr_45336_45476[(1)] = (5));

} else {
var statearr_45337_45477 = state_45333__$1;
(statearr_45337_45477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45334 === (5))){
var state_45333__$1 = state_45333;
var statearr_45338_45478 = state_45333__$1;
(statearr_45338_45478[(2)] = null);

(statearr_45338_45478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45334 === (6))){
var state_45333__$1 = state_45333;
var statearr_45339_45479 = state_45333__$1;
(statearr_45339_45479[(2)] = null);

(statearr_45339_45479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45334 === (7))){
var inst_45329 = (state_45333[(2)]);
var state_45333__$1 = state_45333;
var statearr_45340_45480 = state_45333__$1;
(statearr_45340_45480[(2)] = inst_45329);

(statearr_45340_45480[(1)] = (3));


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
});})(__45462,c__44900__auto___45474,G__45293_45463,n__41986__auto___45461,jobs,results,process,async))
;
return ((function (__45462,switch__44788__auto__,c__44900__auto___45474,G__45293_45463,n__41986__auto___45461,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____0 = (function (){
var statearr_45344 = [null,null,null,null,null,null,null];
(statearr_45344[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__);

(statearr_45344[(1)] = (1));

return statearr_45344;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____1 = (function (state_45333){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_45333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e45345){if((e45345 instanceof Object)){
var ex__44792__auto__ = e45345;
var statearr_45346_45481 = state_45333;
(statearr_45346_45481[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45482 = state_45333;
state_45333 = G__45482;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__ = function(state_45333){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____1.call(this,state_45333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__;
})()
;})(__45462,switch__44788__auto__,c__44900__auto___45474,G__45293_45463,n__41986__auto___45461,jobs,results,process,async))
})();
var state__44902__auto__ = (function (){var statearr_45347 = f__44901__auto__.call(null);
(statearr_45347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto___45474);

return statearr_45347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(__45462,c__44900__auto___45474,G__45293_45463,n__41986__auto___45461,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__45483 = (__45462 + (1));
__45462 = G__45483;
continue;
} else {
}
break;
}

var c__44900__auto___45484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto___45484,jobs,results,process,async){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto___45484,jobs,results,process,async){
return (function (state_45369){
var state_val_45370 = (state_45369[(1)]);
if((state_val_45370 === (1))){
var state_45369__$1 = state_45369;
var statearr_45371_45485 = state_45369__$1;
(statearr_45371_45485[(2)] = null);

(statearr_45371_45485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45370 === (2))){
var state_45369__$1 = state_45369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45369__$1,(4),from);
} else {
if((state_val_45370 === (3))){
var inst_45367 = (state_45369[(2)]);
var state_45369__$1 = state_45369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45369__$1,inst_45367);
} else {
if((state_val_45370 === (4))){
var inst_45350 = (state_45369[(7)]);
var inst_45350__$1 = (state_45369[(2)]);
var inst_45351 = (inst_45350__$1 == null);
var state_45369__$1 = (function (){var statearr_45372 = state_45369;
(statearr_45372[(7)] = inst_45350__$1);

return statearr_45372;
})();
if(cljs.core.truth_(inst_45351)){
var statearr_45373_45486 = state_45369__$1;
(statearr_45373_45486[(1)] = (5));

} else {
var statearr_45374_45487 = state_45369__$1;
(statearr_45374_45487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45370 === (5))){
var inst_45353 = cljs.core.async.close_BANG_.call(null,jobs);
var state_45369__$1 = state_45369;
var statearr_45375_45488 = state_45369__$1;
(statearr_45375_45488[(2)] = inst_45353);

(statearr_45375_45488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45370 === (6))){
var inst_45355 = (state_45369[(8)]);
var inst_45350 = (state_45369[(7)]);
var inst_45355__$1 = cljs.core.async.chan.call(null,(1));
var inst_45356 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45357 = [inst_45350,inst_45355__$1];
var inst_45358 = (new cljs.core.PersistentVector(null,2,(5),inst_45356,inst_45357,null));
var state_45369__$1 = (function (){var statearr_45376 = state_45369;
(statearr_45376[(8)] = inst_45355__$1);

return statearr_45376;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45369__$1,(8),jobs,inst_45358);
} else {
if((state_val_45370 === (7))){
var inst_45365 = (state_45369[(2)]);
var state_45369__$1 = state_45369;
var statearr_45377_45489 = state_45369__$1;
(statearr_45377_45489[(2)] = inst_45365);

(statearr_45377_45489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45370 === (8))){
var inst_45355 = (state_45369[(8)]);
var inst_45360 = (state_45369[(2)]);
var state_45369__$1 = (function (){var statearr_45378 = state_45369;
(statearr_45378[(9)] = inst_45360);

return statearr_45378;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45369__$1,(9),results,inst_45355);
} else {
if((state_val_45370 === (9))){
var inst_45362 = (state_45369[(2)]);
var state_45369__$1 = (function (){var statearr_45379 = state_45369;
(statearr_45379[(10)] = inst_45362);

return statearr_45379;
})();
var statearr_45380_45490 = state_45369__$1;
(statearr_45380_45490[(2)] = null);

(statearr_45380_45490[(1)] = (2));


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
});})(c__44900__auto___45484,jobs,results,process,async))
;
return ((function (switch__44788__auto__,c__44900__auto___45484,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____0 = (function (){
var statearr_45384 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45384[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__);

(statearr_45384[(1)] = (1));

return statearr_45384;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____1 = (function (state_45369){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_45369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e45385){if((e45385 instanceof Object)){
var ex__44792__auto__ = e45385;
var statearr_45386_45491 = state_45369;
(statearr_45386_45491[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45492 = state_45369;
state_45369 = G__45492;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__ = function(state_45369){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____1.call(this,state_45369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto___45484,jobs,results,process,async))
})();
var state__44902__auto__ = (function (){var statearr_45387 = f__44901__auto__.call(null);
(statearr_45387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto___45484);

return statearr_45387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto___45484,jobs,results,process,async))
);


var c__44900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto__,jobs,results,process,async){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto__,jobs,results,process,async){
return (function (state_45425){
var state_val_45426 = (state_45425[(1)]);
if((state_val_45426 === (7))){
var inst_45421 = (state_45425[(2)]);
var state_45425__$1 = state_45425;
var statearr_45427_45493 = state_45425__$1;
(statearr_45427_45493[(2)] = inst_45421);

(statearr_45427_45493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (20))){
var state_45425__$1 = state_45425;
var statearr_45428_45494 = state_45425__$1;
(statearr_45428_45494[(2)] = null);

(statearr_45428_45494[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (1))){
var state_45425__$1 = state_45425;
var statearr_45429_45495 = state_45425__$1;
(statearr_45429_45495[(2)] = null);

(statearr_45429_45495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (4))){
var inst_45390 = (state_45425[(7)]);
var inst_45390__$1 = (state_45425[(2)]);
var inst_45391 = (inst_45390__$1 == null);
var state_45425__$1 = (function (){var statearr_45430 = state_45425;
(statearr_45430[(7)] = inst_45390__$1);

return statearr_45430;
})();
if(cljs.core.truth_(inst_45391)){
var statearr_45431_45496 = state_45425__$1;
(statearr_45431_45496[(1)] = (5));

} else {
var statearr_45432_45497 = state_45425__$1;
(statearr_45432_45497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (15))){
var inst_45403 = (state_45425[(8)]);
var state_45425__$1 = state_45425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45425__$1,(18),to,inst_45403);
} else {
if((state_val_45426 === (21))){
var inst_45416 = (state_45425[(2)]);
var state_45425__$1 = state_45425;
var statearr_45433_45498 = state_45425__$1;
(statearr_45433_45498[(2)] = inst_45416);

(statearr_45433_45498[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (13))){
var inst_45418 = (state_45425[(2)]);
var state_45425__$1 = (function (){var statearr_45434 = state_45425;
(statearr_45434[(9)] = inst_45418);

return statearr_45434;
})();
var statearr_45435_45499 = state_45425__$1;
(statearr_45435_45499[(2)] = null);

(statearr_45435_45499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (6))){
var inst_45390 = (state_45425[(7)]);
var state_45425__$1 = state_45425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45425__$1,(11),inst_45390);
} else {
if((state_val_45426 === (17))){
var inst_45411 = (state_45425[(2)]);
var state_45425__$1 = state_45425;
if(cljs.core.truth_(inst_45411)){
var statearr_45436_45500 = state_45425__$1;
(statearr_45436_45500[(1)] = (19));

} else {
var statearr_45437_45501 = state_45425__$1;
(statearr_45437_45501[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (3))){
var inst_45423 = (state_45425[(2)]);
var state_45425__$1 = state_45425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45425__$1,inst_45423);
} else {
if((state_val_45426 === (12))){
var inst_45400 = (state_45425[(10)]);
var state_45425__$1 = state_45425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45425__$1,(14),inst_45400);
} else {
if((state_val_45426 === (2))){
var state_45425__$1 = state_45425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45425__$1,(4),results);
} else {
if((state_val_45426 === (19))){
var state_45425__$1 = state_45425;
var statearr_45438_45502 = state_45425__$1;
(statearr_45438_45502[(2)] = null);

(statearr_45438_45502[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (11))){
var inst_45400 = (state_45425[(2)]);
var state_45425__$1 = (function (){var statearr_45439 = state_45425;
(statearr_45439[(10)] = inst_45400);

return statearr_45439;
})();
var statearr_45440_45503 = state_45425__$1;
(statearr_45440_45503[(2)] = null);

(statearr_45440_45503[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (9))){
var state_45425__$1 = state_45425;
var statearr_45441_45504 = state_45425__$1;
(statearr_45441_45504[(2)] = null);

(statearr_45441_45504[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (5))){
var state_45425__$1 = state_45425;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45442_45505 = state_45425__$1;
(statearr_45442_45505[(1)] = (8));

} else {
var statearr_45443_45506 = state_45425__$1;
(statearr_45443_45506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (14))){
var inst_45403 = (state_45425[(8)]);
var inst_45405 = (state_45425[(11)]);
var inst_45403__$1 = (state_45425[(2)]);
var inst_45404 = (inst_45403__$1 == null);
var inst_45405__$1 = cljs.core.not.call(null,inst_45404);
var state_45425__$1 = (function (){var statearr_45444 = state_45425;
(statearr_45444[(8)] = inst_45403__$1);

(statearr_45444[(11)] = inst_45405__$1);

return statearr_45444;
})();
if(inst_45405__$1){
var statearr_45445_45507 = state_45425__$1;
(statearr_45445_45507[(1)] = (15));

} else {
var statearr_45446_45508 = state_45425__$1;
(statearr_45446_45508[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (16))){
var inst_45405 = (state_45425[(11)]);
var state_45425__$1 = state_45425;
var statearr_45447_45509 = state_45425__$1;
(statearr_45447_45509[(2)] = inst_45405);

(statearr_45447_45509[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (10))){
var inst_45397 = (state_45425[(2)]);
var state_45425__$1 = state_45425;
var statearr_45448_45510 = state_45425__$1;
(statearr_45448_45510[(2)] = inst_45397);

(statearr_45448_45510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (18))){
var inst_45408 = (state_45425[(2)]);
var state_45425__$1 = state_45425;
var statearr_45449_45511 = state_45425__$1;
(statearr_45449_45511[(2)] = inst_45408);

(statearr_45449_45511[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45426 === (8))){
var inst_45394 = cljs.core.async.close_BANG_.call(null,to);
var state_45425__$1 = state_45425;
var statearr_45450_45512 = state_45425__$1;
(statearr_45450_45512[(2)] = inst_45394);

(statearr_45450_45512[(1)] = (10));


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
});})(c__44900__auto__,jobs,results,process,async))
;
return ((function (switch__44788__auto__,c__44900__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____0 = (function (){
var statearr_45454 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45454[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__);

(statearr_45454[(1)] = (1));

return statearr_45454;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____1 = (function (state_45425){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_45425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e45455){if((e45455 instanceof Object)){
var ex__44792__auto__ = e45455;
var statearr_45456_45513 = state_45425;
(statearr_45456_45513[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45514 = state_45425;
state_45425 = G__45514;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__ = function(state_45425){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____1.call(this,state_45425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44789__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto__,jobs,results,process,async))
})();
var state__44902__auto__ = (function (){var statearr_45457 = f__44901__auto__.call(null);
(statearr_45457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto__);

return statearr_45457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto__,jobs,results,process,async))
);

return c__44900__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args45515 = [];
var len__42146__auto___45518 = arguments.length;
var i__42147__auto___45519 = (0);
while(true){
if((i__42147__auto___45519 < len__42146__auto___45518)){
args45515.push((arguments[i__42147__auto___45519]));

var G__45520 = (i__42147__auto___45519 + (1));
i__42147__auto___45519 = G__45520;
continue;
} else {
}
break;
}

var G__45517 = args45515.length;
switch (G__45517) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45515.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args45522 = [];
var len__42146__auto___45525 = arguments.length;
var i__42147__auto___45526 = (0);
while(true){
if((i__42147__auto___45526 < len__42146__auto___45525)){
args45522.push((arguments[i__42147__auto___45526]));

var G__45527 = (i__42147__auto___45526 + (1));
i__42147__auto___45526 = G__45527;
continue;
} else {
}
break;
}

var G__45524 = args45522.length;
switch (G__45524) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45522.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args45529 = [];
var len__42146__auto___45582 = arguments.length;
var i__42147__auto___45583 = (0);
while(true){
if((i__42147__auto___45583 < len__42146__auto___45582)){
args45529.push((arguments[i__42147__auto___45583]));

var G__45584 = (i__42147__auto___45583 + (1));
i__42147__auto___45583 = G__45584;
continue;
} else {
}
break;
}

var G__45531 = args45529.length;
switch (G__45531) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45529.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__44900__auto___45586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto___45586,tc,fc){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto___45586,tc,fc){
return (function (state_45557){
var state_val_45558 = (state_45557[(1)]);
if((state_val_45558 === (7))){
var inst_45553 = (state_45557[(2)]);
var state_45557__$1 = state_45557;
var statearr_45559_45587 = state_45557__$1;
(statearr_45559_45587[(2)] = inst_45553);

(statearr_45559_45587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45558 === (1))){
var state_45557__$1 = state_45557;
var statearr_45560_45588 = state_45557__$1;
(statearr_45560_45588[(2)] = null);

(statearr_45560_45588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45558 === (4))){
var inst_45534 = (state_45557[(7)]);
var inst_45534__$1 = (state_45557[(2)]);
var inst_45535 = (inst_45534__$1 == null);
var state_45557__$1 = (function (){var statearr_45561 = state_45557;
(statearr_45561[(7)] = inst_45534__$1);

return statearr_45561;
})();
if(cljs.core.truth_(inst_45535)){
var statearr_45562_45589 = state_45557__$1;
(statearr_45562_45589[(1)] = (5));

} else {
var statearr_45563_45590 = state_45557__$1;
(statearr_45563_45590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45558 === (13))){
var state_45557__$1 = state_45557;
var statearr_45564_45591 = state_45557__$1;
(statearr_45564_45591[(2)] = null);

(statearr_45564_45591[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45558 === (6))){
var inst_45534 = (state_45557[(7)]);
var inst_45540 = p.call(null,inst_45534);
var state_45557__$1 = state_45557;
if(cljs.core.truth_(inst_45540)){
var statearr_45565_45592 = state_45557__$1;
(statearr_45565_45592[(1)] = (9));

} else {
var statearr_45566_45593 = state_45557__$1;
(statearr_45566_45593[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45558 === (3))){
var inst_45555 = (state_45557[(2)]);
var state_45557__$1 = state_45557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45557__$1,inst_45555);
} else {
if((state_val_45558 === (12))){
var state_45557__$1 = state_45557;
var statearr_45567_45594 = state_45557__$1;
(statearr_45567_45594[(2)] = null);

(statearr_45567_45594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45558 === (2))){
var state_45557__$1 = state_45557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45557__$1,(4),ch);
} else {
if((state_val_45558 === (11))){
var inst_45534 = (state_45557[(7)]);
var inst_45544 = (state_45557[(2)]);
var state_45557__$1 = state_45557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45557__$1,(8),inst_45544,inst_45534);
} else {
if((state_val_45558 === (9))){
var state_45557__$1 = state_45557;
var statearr_45568_45595 = state_45557__$1;
(statearr_45568_45595[(2)] = tc);

(statearr_45568_45595[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45558 === (5))){
var inst_45537 = cljs.core.async.close_BANG_.call(null,tc);
var inst_45538 = cljs.core.async.close_BANG_.call(null,fc);
var state_45557__$1 = (function (){var statearr_45569 = state_45557;
(statearr_45569[(8)] = inst_45537);

return statearr_45569;
})();
var statearr_45570_45596 = state_45557__$1;
(statearr_45570_45596[(2)] = inst_45538);

(statearr_45570_45596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45558 === (14))){
var inst_45551 = (state_45557[(2)]);
var state_45557__$1 = state_45557;
var statearr_45571_45597 = state_45557__$1;
(statearr_45571_45597[(2)] = inst_45551);

(statearr_45571_45597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45558 === (10))){
var state_45557__$1 = state_45557;
var statearr_45572_45598 = state_45557__$1;
(statearr_45572_45598[(2)] = fc);

(statearr_45572_45598[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45558 === (8))){
var inst_45546 = (state_45557[(2)]);
var state_45557__$1 = state_45557;
if(cljs.core.truth_(inst_45546)){
var statearr_45573_45599 = state_45557__$1;
(statearr_45573_45599[(1)] = (12));

} else {
var statearr_45574_45600 = state_45557__$1;
(statearr_45574_45600[(1)] = (13));

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
});})(c__44900__auto___45586,tc,fc))
;
return ((function (switch__44788__auto__,c__44900__auto___45586,tc,fc){
return (function() {
var cljs$core$async$state_machine__44789__auto__ = null;
var cljs$core$async$state_machine__44789__auto____0 = (function (){
var statearr_45578 = [null,null,null,null,null,null,null,null,null];
(statearr_45578[(0)] = cljs$core$async$state_machine__44789__auto__);

(statearr_45578[(1)] = (1));

return statearr_45578;
});
var cljs$core$async$state_machine__44789__auto____1 = (function (state_45557){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_45557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e45579){if((e45579 instanceof Object)){
var ex__44792__auto__ = e45579;
var statearr_45580_45601 = state_45557;
(statearr_45580_45601[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45602 = state_45557;
state_45557 = G__45602;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
cljs$core$async$state_machine__44789__auto__ = function(state_45557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44789__auto____1.call(this,state_45557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44789__auto____0;
cljs$core$async$state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44789__auto____1;
return cljs$core$async$state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto___45586,tc,fc))
})();
var state__44902__auto__ = (function (){var statearr_45581 = f__44901__auto__.call(null);
(statearr_45581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto___45586);

return statearr_45581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto___45586,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__44900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto__){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto__){
return (function (state_45666){
var state_val_45667 = (state_45666[(1)]);
if((state_val_45667 === (7))){
var inst_45662 = (state_45666[(2)]);
var state_45666__$1 = state_45666;
var statearr_45668_45689 = state_45666__$1;
(statearr_45668_45689[(2)] = inst_45662);

(statearr_45668_45689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45667 === (1))){
var inst_45646 = init;
var state_45666__$1 = (function (){var statearr_45669 = state_45666;
(statearr_45669[(7)] = inst_45646);

return statearr_45669;
})();
var statearr_45670_45690 = state_45666__$1;
(statearr_45670_45690[(2)] = null);

(statearr_45670_45690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45667 === (4))){
var inst_45649 = (state_45666[(8)]);
var inst_45649__$1 = (state_45666[(2)]);
var inst_45650 = (inst_45649__$1 == null);
var state_45666__$1 = (function (){var statearr_45671 = state_45666;
(statearr_45671[(8)] = inst_45649__$1);

return statearr_45671;
})();
if(cljs.core.truth_(inst_45650)){
var statearr_45672_45691 = state_45666__$1;
(statearr_45672_45691[(1)] = (5));

} else {
var statearr_45673_45692 = state_45666__$1;
(statearr_45673_45692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45667 === (6))){
var inst_45649 = (state_45666[(8)]);
var inst_45653 = (state_45666[(9)]);
var inst_45646 = (state_45666[(7)]);
var inst_45653__$1 = f.call(null,inst_45646,inst_45649);
var inst_45654 = cljs.core.reduced_QMARK_.call(null,inst_45653__$1);
var state_45666__$1 = (function (){var statearr_45674 = state_45666;
(statearr_45674[(9)] = inst_45653__$1);

return statearr_45674;
})();
if(inst_45654){
var statearr_45675_45693 = state_45666__$1;
(statearr_45675_45693[(1)] = (8));

} else {
var statearr_45676_45694 = state_45666__$1;
(statearr_45676_45694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45667 === (3))){
var inst_45664 = (state_45666[(2)]);
var state_45666__$1 = state_45666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45666__$1,inst_45664);
} else {
if((state_val_45667 === (2))){
var state_45666__$1 = state_45666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45666__$1,(4),ch);
} else {
if((state_val_45667 === (9))){
var inst_45653 = (state_45666[(9)]);
var inst_45646 = inst_45653;
var state_45666__$1 = (function (){var statearr_45677 = state_45666;
(statearr_45677[(7)] = inst_45646);

return statearr_45677;
})();
var statearr_45678_45695 = state_45666__$1;
(statearr_45678_45695[(2)] = null);

(statearr_45678_45695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45667 === (5))){
var inst_45646 = (state_45666[(7)]);
var state_45666__$1 = state_45666;
var statearr_45679_45696 = state_45666__$1;
(statearr_45679_45696[(2)] = inst_45646);

(statearr_45679_45696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45667 === (10))){
var inst_45660 = (state_45666[(2)]);
var state_45666__$1 = state_45666;
var statearr_45680_45697 = state_45666__$1;
(statearr_45680_45697[(2)] = inst_45660);

(statearr_45680_45697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45667 === (8))){
var inst_45653 = (state_45666[(9)]);
var inst_45656 = cljs.core.deref.call(null,inst_45653);
var state_45666__$1 = state_45666;
var statearr_45681_45698 = state_45666__$1;
(statearr_45681_45698[(2)] = inst_45656);

(statearr_45681_45698[(1)] = (10));


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
});})(c__44900__auto__))
;
return ((function (switch__44788__auto__,c__44900__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__44789__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44789__auto____0 = (function (){
var statearr_45685 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45685[(0)] = cljs$core$async$reduce_$_state_machine__44789__auto__);

(statearr_45685[(1)] = (1));

return statearr_45685;
});
var cljs$core$async$reduce_$_state_machine__44789__auto____1 = (function (state_45666){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_45666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e45686){if((e45686 instanceof Object)){
var ex__44792__auto__ = e45686;
var statearr_45687_45699 = state_45666;
(statearr_45687_45699[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45700 = state_45666;
state_45666 = G__45700;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44789__auto__ = function(state_45666){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44789__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44789__auto____1.call(this,state_45666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44789__auto____0;
cljs$core$async$reduce_$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44789__auto____1;
return cljs$core$async$reduce_$_state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto__))
})();
var state__44902__auto__ = (function (){var statearr_45688 = f__44901__auto__.call(null);
(statearr_45688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto__);

return statearr_45688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto__))
);

return c__44900__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args45701 = [];
var len__42146__auto___45753 = arguments.length;
var i__42147__auto___45754 = (0);
while(true){
if((i__42147__auto___45754 < len__42146__auto___45753)){
args45701.push((arguments[i__42147__auto___45754]));

var G__45755 = (i__42147__auto___45754 + (1));
i__42147__auto___45754 = G__45755;
continue;
} else {
}
break;
}

var G__45703 = args45701.length;
switch (G__45703) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45701.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto__){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto__){
return (function (state_45728){
var state_val_45729 = (state_45728[(1)]);
if((state_val_45729 === (7))){
var inst_45710 = (state_45728[(2)]);
var state_45728__$1 = state_45728;
var statearr_45730_45757 = state_45728__$1;
(statearr_45730_45757[(2)] = inst_45710);

(statearr_45730_45757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45729 === (1))){
var inst_45704 = cljs.core.seq.call(null,coll);
var inst_45705 = inst_45704;
var state_45728__$1 = (function (){var statearr_45731 = state_45728;
(statearr_45731[(7)] = inst_45705);

return statearr_45731;
})();
var statearr_45732_45758 = state_45728__$1;
(statearr_45732_45758[(2)] = null);

(statearr_45732_45758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45729 === (4))){
var inst_45705 = (state_45728[(7)]);
var inst_45708 = cljs.core.first.call(null,inst_45705);
var state_45728__$1 = state_45728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45728__$1,(7),ch,inst_45708);
} else {
if((state_val_45729 === (13))){
var inst_45722 = (state_45728[(2)]);
var state_45728__$1 = state_45728;
var statearr_45733_45759 = state_45728__$1;
(statearr_45733_45759[(2)] = inst_45722);

(statearr_45733_45759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45729 === (6))){
var inst_45713 = (state_45728[(2)]);
var state_45728__$1 = state_45728;
if(cljs.core.truth_(inst_45713)){
var statearr_45734_45760 = state_45728__$1;
(statearr_45734_45760[(1)] = (8));

} else {
var statearr_45735_45761 = state_45728__$1;
(statearr_45735_45761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45729 === (3))){
var inst_45726 = (state_45728[(2)]);
var state_45728__$1 = state_45728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45728__$1,inst_45726);
} else {
if((state_val_45729 === (12))){
var state_45728__$1 = state_45728;
var statearr_45736_45762 = state_45728__$1;
(statearr_45736_45762[(2)] = null);

(statearr_45736_45762[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45729 === (2))){
var inst_45705 = (state_45728[(7)]);
var state_45728__$1 = state_45728;
if(cljs.core.truth_(inst_45705)){
var statearr_45737_45763 = state_45728__$1;
(statearr_45737_45763[(1)] = (4));

} else {
var statearr_45738_45764 = state_45728__$1;
(statearr_45738_45764[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45729 === (11))){
var inst_45719 = cljs.core.async.close_BANG_.call(null,ch);
var state_45728__$1 = state_45728;
var statearr_45739_45765 = state_45728__$1;
(statearr_45739_45765[(2)] = inst_45719);

(statearr_45739_45765[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45729 === (9))){
var state_45728__$1 = state_45728;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45740_45766 = state_45728__$1;
(statearr_45740_45766[(1)] = (11));

} else {
var statearr_45741_45767 = state_45728__$1;
(statearr_45741_45767[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45729 === (5))){
var inst_45705 = (state_45728[(7)]);
var state_45728__$1 = state_45728;
var statearr_45742_45768 = state_45728__$1;
(statearr_45742_45768[(2)] = inst_45705);

(statearr_45742_45768[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45729 === (10))){
var inst_45724 = (state_45728[(2)]);
var state_45728__$1 = state_45728;
var statearr_45743_45769 = state_45728__$1;
(statearr_45743_45769[(2)] = inst_45724);

(statearr_45743_45769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45729 === (8))){
var inst_45705 = (state_45728[(7)]);
var inst_45715 = cljs.core.next.call(null,inst_45705);
var inst_45705__$1 = inst_45715;
var state_45728__$1 = (function (){var statearr_45744 = state_45728;
(statearr_45744[(7)] = inst_45705__$1);

return statearr_45744;
})();
var statearr_45745_45770 = state_45728__$1;
(statearr_45745_45770[(2)] = null);

(statearr_45745_45770[(1)] = (2));


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
});})(c__44900__auto__))
;
return ((function (switch__44788__auto__,c__44900__auto__){
return (function() {
var cljs$core$async$state_machine__44789__auto__ = null;
var cljs$core$async$state_machine__44789__auto____0 = (function (){
var statearr_45749 = [null,null,null,null,null,null,null,null];
(statearr_45749[(0)] = cljs$core$async$state_machine__44789__auto__);

(statearr_45749[(1)] = (1));

return statearr_45749;
});
var cljs$core$async$state_machine__44789__auto____1 = (function (state_45728){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_45728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e45750){if((e45750 instanceof Object)){
var ex__44792__auto__ = e45750;
var statearr_45751_45771 = state_45728;
(statearr_45751_45771[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45772 = state_45728;
state_45728 = G__45772;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
cljs$core$async$state_machine__44789__auto__ = function(state_45728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44789__auto____1.call(this,state_45728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44789__auto____0;
cljs$core$async$state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44789__auto____1;
return cljs$core$async$state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto__))
})();
var state__44902__auto__ = (function (){var statearr_45752 = f__44901__auto__.call(null);
(statearr_45752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto__);

return statearr_45752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto__))
);

return c__44900__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__41734__auto__ = (((_ == null))?null:_);
var m__41735__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__41734__auto__)]);
if(!((m__41735__auto__ == null))){
return m__41735__auto__.call(null,_);
} else {
var m__41735__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__41735__auto____$1 == null))){
return m__41735__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__41734__auto__ = (((m == null))?null:m);
var m__41735__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__41734__auto__)]);
if(!((m__41735__auto__ == null))){
return m__41735__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__41735__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__41735__auto____$1 == null))){
return m__41735__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__41734__auto__ = (((m == null))?null:m);
var m__41735__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__41734__auto__)]);
if(!((m__41735__auto__ == null))){
return m__41735__auto__.call(null,m,ch);
} else {
var m__41735__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__41735__auto____$1 == null))){
return m__41735__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__41734__auto__ = (((m == null))?null:m);
var m__41735__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__41734__auto__)]);
if(!((m__41735__auto__ == null))){
return m__41735__auto__.call(null,m);
} else {
var m__41735__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__41735__auto____$1 == null))){
return m__41735__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async45998 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45998 = (function (mult,ch,cs,meta45999){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta45999 = meta45999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_46000,meta45999__$1){
var self__ = this;
var _46000__$1 = this;
return (new cljs.core.async.t_cljs$core$async45998(self__.mult,self__.ch,self__.cs,meta45999__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async45998.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_46000){
var self__ = this;
var _46000__$1 = this;
return self__.meta45999;
});})(cs))
;

cljs.core.async.t_cljs$core$async45998.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async45998.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async45998.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async45998.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45998.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45998.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45998.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45999","meta45999",-1880504216,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async45998.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45998.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45998";

cljs.core.async.t_cljs$core$async45998.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__41677__auto__,writer__41678__auto__,opt__41679__auto__){
return cljs.core._write.call(null,writer__41678__auto__,"cljs.core.async/t_cljs$core$async45998");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async45998 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async45998(mult__$1,ch__$1,cs__$1,meta45999){
return (new cljs.core.async.t_cljs$core$async45998(mult__$1,ch__$1,cs__$1,meta45999));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async45998(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__44900__auto___46223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto___46223,cs,m,dchan,dctr,done){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto___46223,cs,m,dchan,dctr,done){
return (function (state_46135){
var state_val_46136 = (state_46135[(1)]);
if((state_val_46136 === (7))){
var inst_46131 = (state_46135[(2)]);
var state_46135__$1 = state_46135;
var statearr_46137_46224 = state_46135__$1;
(statearr_46137_46224[(2)] = inst_46131);

(statearr_46137_46224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (20))){
var inst_46034 = (state_46135[(7)]);
var inst_46046 = cljs.core.first.call(null,inst_46034);
var inst_46047 = cljs.core.nth.call(null,inst_46046,(0),null);
var inst_46048 = cljs.core.nth.call(null,inst_46046,(1),null);
var state_46135__$1 = (function (){var statearr_46138 = state_46135;
(statearr_46138[(8)] = inst_46047);

return statearr_46138;
})();
if(cljs.core.truth_(inst_46048)){
var statearr_46139_46225 = state_46135__$1;
(statearr_46139_46225[(1)] = (22));

} else {
var statearr_46140_46226 = state_46135__$1;
(statearr_46140_46226[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (27))){
var inst_46076 = (state_46135[(9)]);
var inst_46083 = (state_46135[(10)]);
var inst_46078 = (state_46135[(11)]);
var inst_46003 = (state_46135[(12)]);
var inst_46083__$1 = cljs.core._nth.call(null,inst_46076,inst_46078);
var inst_46084 = cljs.core.async.put_BANG_.call(null,inst_46083__$1,inst_46003,done);
var state_46135__$1 = (function (){var statearr_46141 = state_46135;
(statearr_46141[(10)] = inst_46083__$1);

return statearr_46141;
})();
if(cljs.core.truth_(inst_46084)){
var statearr_46142_46227 = state_46135__$1;
(statearr_46142_46227[(1)] = (30));

} else {
var statearr_46143_46228 = state_46135__$1;
(statearr_46143_46228[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (1))){
var state_46135__$1 = state_46135;
var statearr_46144_46229 = state_46135__$1;
(statearr_46144_46229[(2)] = null);

(statearr_46144_46229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (24))){
var inst_46034 = (state_46135[(7)]);
var inst_46053 = (state_46135[(2)]);
var inst_46054 = cljs.core.next.call(null,inst_46034);
var inst_46012 = inst_46054;
var inst_46013 = null;
var inst_46014 = (0);
var inst_46015 = (0);
var state_46135__$1 = (function (){var statearr_46145 = state_46135;
(statearr_46145[(13)] = inst_46053);

(statearr_46145[(14)] = inst_46014);

(statearr_46145[(15)] = inst_46015);

(statearr_46145[(16)] = inst_46013);

(statearr_46145[(17)] = inst_46012);

return statearr_46145;
})();
var statearr_46146_46230 = state_46135__$1;
(statearr_46146_46230[(2)] = null);

(statearr_46146_46230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (39))){
var state_46135__$1 = state_46135;
var statearr_46150_46231 = state_46135__$1;
(statearr_46150_46231[(2)] = null);

(statearr_46150_46231[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (4))){
var inst_46003 = (state_46135[(12)]);
var inst_46003__$1 = (state_46135[(2)]);
var inst_46004 = (inst_46003__$1 == null);
var state_46135__$1 = (function (){var statearr_46151 = state_46135;
(statearr_46151[(12)] = inst_46003__$1);

return statearr_46151;
})();
if(cljs.core.truth_(inst_46004)){
var statearr_46152_46232 = state_46135__$1;
(statearr_46152_46232[(1)] = (5));

} else {
var statearr_46153_46233 = state_46135__$1;
(statearr_46153_46233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (15))){
var inst_46014 = (state_46135[(14)]);
var inst_46015 = (state_46135[(15)]);
var inst_46013 = (state_46135[(16)]);
var inst_46012 = (state_46135[(17)]);
var inst_46030 = (state_46135[(2)]);
var inst_46031 = (inst_46015 + (1));
var tmp46147 = inst_46014;
var tmp46148 = inst_46013;
var tmp46149 = inst_46012;
var inst_46012__$1 = tmp46149;
var inst_46013__$1 = tmp46148;
var inst_46014__$1 = tmp46147;
var inst_46015__$1 = inst_46031;
var state_46135__$1 = (function (){var statearr_46154 = state_46135;
(statearr_46154[(18)] = inst_46030);

(statearr_46154[(14)] = inst_46014__$1);

(statearr_46154[(15)] = inst_46015__$1);

(statearr_46154[(16)] = inst_46013__$1);

(statearr_46154[(17)] = inst_46012__$1);

return statearr_46154;
})();
var statearr_46155_46234 = state_46135__$1;
(statearr_46155_46234[(2)] = null);

(statearr_46155_46234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (21))){
var inst_46057 = (state_46135[(2)]);
var state_46135__$1 = state_46135;
var statearr_46159_46235 = state_46135__$1;
(statearr_46159_46235[(2)] = inst_46057);

(statearr_46159_46235[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (31))){
var inst_46083 = (state_46135[(10)]);
var inst_46087 = done.call(null,null);
var inst_46088 = cljs.core.async.untap_STAR_.call(null,m,inst_46083);
var state_46135__$1 = (function (){var statearr_46160 = state_46135;
(statearr_46160[(19)] = inst_46087);

return statearr_46160;
})();
var statearr_46161_46236 = state_46135__$1;
(statearr_46161_46236[(2)] = inst_46088);

(statearr_46161_46236[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (32))){
var inst_46075 = (state_46135[(20)]);
var inst_46076 = (state_46135[(9)]);
var inst_46078 = (state_46135[(11)]);
var inst_46077 = (state_46135[(21)]);
var inst_46090 = (state_46135[(2)]);
var inst_46091 = (inst_46078 + (1));
var tmp46156 = inst_46075;
var tmp46157 = inst_46076;
var tmp46158 = inst_46077;
var inst_46075__$1 = tmp46156;
var inst_46076__$1 = tmp46157;
var inst_46077__$1 = tmp46158;
var inst_46078__$1 = inst_46091;
var state_46135__$1 = (function (){var statearr_46162 = state_46135;
(statearr_46162[(20)] = inst_46075__$1);

(statearr_46162[(22)] = inst_46090);

(statearr_46162[(9)] = inst_46076__$1);

(statearr_46162[(11)] = inst_46078__$1);

(statearr_46162[(21)] = inst_46077__$1);

return statearr_46162;
})();
var statearr_46163_46237 = state_46135__$1;
(statearr_46163_46237[(2)] = null);

(statearr_46163_46237[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (40))){
var inst_46103 = (state_46135[(23)]);
var inst_46107 = done.call(null,null);
var inst_46108 = cljs.core.async.untap_STAR_.call(null,m,inst_46103);
var state_46135__$1 = (function (){var statearr_46164 = state_46135;
(statearr_46164[(24)] = inst_46107);

return statearr_46164;
})();
var statearr_46165_46238 = state_46135__$1;
(statearr_46165_46238[(2)] = inst_46108);

(statearr_46165_46238[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (33))){
var inst_46094 = (state_46135[(25)]);
var inst_46096 = cljs.core.chunked_seq_QMARK_.call(null,inst_46094);
var state_46135__$1 = state_46135;
if(inst_46096){
var statearr_46166_46239 = state_46135__$1;
(statearr_46166_46239[(1)] = (36));

} else {
var statearr_46167_46240 = state_46135__$1;
(statearr_46167_46240[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (13))){
var inst_46024 = (state_46135[(26)]);
var inst_46027 = cljs.core.async.close_BANG_.call(null,inst_46024);
var state_46135__$1 = state_46135;
var statearr_46168_46241 = state_46135__$1;
(statearr_46168_46241[(2)] = inst_46027);

(statearr_46168_46241[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (22))){
var inst_46047 = (state_46135[(8)]);
var inst_46050 = cljs.core.async.close_BANG_.call(null,inst_46047);
var state_46135__$1 = state_46135;
var statearr_46169_46242 = state_46135__$1;
(statearr_46169_46242[(2)] = inst_46050);

(statearr_46169_46242[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (36))){
var inst_46094 = (state_46135[(25)]);
var inst_46098 = cljs.core.chunk_first.call(null,inst_46094);
var inst_46099 = cljs.core.chunk_rest.call(null,inst_46094);
var inst_46100 = cljs.core.count.call(null,inst_46098);
var inst_46075 = inst_46099;
var inst_46076 = inst_46098;
var inst_46077 = inst_46100;
var inst_46078 = (0);
var state_46135__$1 = (function (){var statearr_46170 = state_46135;
(statearr_46170[(20)] = inst_46075);

(statearr_46170[(9)] = inst_46076);

(statearr_46170[(11)] = inst_46078);

(statearr_46170[(21)] = inst_46077);

return statearr_46170;
})();
var statearr_46171_46243 = state_46135__$1;
(statearr_46171_46243[(2)] = null);

(statearr_46171_46243[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (41))){
var inst_46094 = (state_46135[(25)]);
var inst_46110 = (state_46135[(2)]);
var inst_46111 = cljs.core.next.call(null,inst_46094);
var inst_46075 = inst_46111;
var inst_46076 = null;
var inst_46077 = (0);
var inst_46078 = (0);
var state_46135__$1 = (function (){var statearr_46172 = state_46135;
(statearr_46172[(27)] = inst_46110);

(statearr_46172[(20)] = inst_46075);

(statearr_46172[(9)] = inst_46076);

(statearr_46172[(11)] = inst_46078);

(statearr_46172[(21)] = inst_46077);

return statearr_46172;
})();
var statearr_46173_46244 = state_46135__$1;
(statearr_46173_46244[(2)] = null);

(statearr_46173_46244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (43))){
var state_46135__$1 = state_46135;
var statearr_46174_46245 = state_46135__$1;
(statearr_46174_46245[(2)] = null);

(statearr_46174_46245[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (29))){
var inst_46119 = (state_46135[(2)]);
var state_46135__$1 = state_46135;
var statearr_46175_46246 = state_46135__$1;
(statearr_46175_46246[(2)] = inst_46119);

(statearr_46175_46246[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (44))){
var inst_46128 = (state_46135[(2)]);
var state_46135__$1 = (function (){var statearr_46176 = state_46135;
(statearr_46176[(28)] = inst_46128);

return statearr_46176;
})();
var statearr_46177_46247 = state_46135__$1;
(statearr_46177_46247[(2)] = null);

(statearr_46177_46247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (6))){
var inst_46067 = (state_46135[(29)]);
var inst_46066 = cljs.core.deref.call(null,cs);
var inst_46067__$1 = cljs.core.keys.call(null,inst_46066);
var inst_46068 = cljs.core.count.call(null,inst_46067__$1);
var inst_46069 = cljs.core.reset_BANG_.call(null,dctr,inst_46068);
var inst_46074 = cljs.core.seq.call(null,inst_46067__$1);
var inst_46075 = inst_46074;
var inst_46076 = null;
var inst_46077 = (0);
var inst_46078 = (0);
var state_46135__$1 = (function (){var statearr_46178 = state_46135;
(statearr_46178[(29)] = inst_46067__$1);

(statearr_46178[(20)] = inst_46075);

(statearr_46178[(9)] = inst_46076);

(statearr_46178[(11)] = inst_46078);

(statearr_46178[(21)] = inst_46077);

(statearr_46178[(30)] = inst_46069);

return statearr_46178;
})();
var statearr_46179_46248 = state_46135__$1;
(statearr_46179_46248[(2)] = null);

(statearr_46179_46248[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (28))){
var inst_46075 = (state_46135[(20)]);
var inst_46094 = (state_46135[(25)]);
var inst_46094__$1 = cljs.core.seq.call(null,inst_46075);
var state_46135__$1 = (function (){var statearr_46180 = state_46135;
(statearr_46180[(25)] = inst_46094__$1);

return statearr_46180;
})();
if(inst_46094__$1){
var statearr_46181_46249 = state_46135__$1;
(statearr_46181_46249[(1)] = (33));

} else {
var statearr_46182_46250 = state_46135__$1;
(statearr_46182_46250[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (25))){
var inst_46078 = (state_46135[(11)]);
var inst_46077 = (state_46135[(21)]);
var inst_46080 = (inst_46078 < inst_46077);
var inst_46081 = inst_46080;
var state_46135__$1 = state_46135;
if(cljs.core.truth_(inst_46081)){
var statearr_46183_46251 = state_46135__$1;
(statearr_46183_46251[(1)] = (27));

} else {
var statearr_46184_46252 = state_46135__$1;
(statearr_46184_46252[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (34))){
var state_46135__$1 = state_46135;
var statearr_46185_46253 = state_46135__$1;
(statearr_46185_46253[(2)] = null);

(statearr_46185_46253[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (17))){
var state_46135__$1 = state_46135;
var statearr_46186_46254 = state_46135__$1;
(statearr_46186_46254[(2)] = null);

(statearr_46186_46254[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (3))){
var inst_46133 = (state_46135[(2)]);
var state_46135__$1 = state_46135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46135__$1,inst_46133);
} else {
if((state_val_46136 === (12))){
var inst_46062 = (state_46135[(2)]);
var state_46135__$1 = state_46135;
var statearr_46187_46255 = state_46135__$1;
(statearr_46187_46255[(2)] = inst_46062);

(statearr_46187_46255[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (2))){
var state_46135__$1 = state_46135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46135__$1,(4),ch);
} else {
if((state_val_46136 === (23))){
var state_46135__$1 = state_46135;
var statearr_46188_46256 = state_46135__$1;
(statearr_46188_46256[(2)] = null);

(statearr_46188_46256[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (35))){
var inst_46117 = (state_46135[(2)]);
var state_46135__$1 = state_46135;
var statearr_46189_46257 = state_46135__$1;
(statearr_46189_46257[(2)] = inst_46117);

(statearr_46189_46257[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (19))){
var inst_46034 = (state_46135[(7)]);
var inst_46038 = cljs.core.chunk_first.call(null,inst_46034);
var inst_46039 = cljs.core.chunk_rest.call(null,inst_46034);
var inst_46040 = cljs.core.count.call(null,inst_46038);
var inst_46012 = inst_46039;
var inst_46013 = inst_46038;
var inst_46014 = inst_46040;
var inst_46015 = (0);
var state_46135__$1 = (function (){var statearr_46190 = state_46135;
(statearr_46190[(14)] = inst_46014);

(statearr_46190[(15)] = inst_46015);

(statearr_46190[(16)] = inst_46013);

(statearr_46190[(17)] = inst_46012);

return statearr_46190;
})();
var statearr_46191_46258 = state_46135__$1;
(statearr_46191_46258[(2)] = null);

(statearr_46191_46258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (11))){
var inst_46034 = (state_46135[(7)]);
var inst_46012 = (state_46135[(17)]);
var inst_46034__$1 = cljs.core.seq.call(null,inst_46012);
var state_46135__$1 = (function (){var statearr_46192 = state_46135;
(statearr_46192[(7)] = inst_46034__$1);

return statearr_46192;
})();
if(inst_46034__$1){
var statearr_46193_46259 = state_46135__$1;
(statearr_46193_46259[(1)] = (16));

} else {
var statearr_46194_46260 = state_46135__$1;
(statearr_46194_46260[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (9))){
var inst_46064 = (state_46135[(2)]);
var state_46135__$1 = state_46135;
var statearr_46195_46261 = state_46135__$1;
(statearr_46195_46261[(2)] = inst_46064);

(statearr_46195_46261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (5))){
var inst_46010 = cljs.core.deref.call(null,cs);
var inst_46011 = cljs.core.seq.call(null,inst_46010);
var inst_46012 = inst_46011;
var inst_46013 = null;
var inst_46014 = (0);
var inst_46015 = (0);
var state_46135__$1 = (function (){var statearr_46196 = state_46135;
(statearr_46196[(14)] = inst_46014);

(statearr_46196[(15)] = inst_46015);

(statearr_46196[(16)] = inst_46013);

(statearr_46196[(17)] = inst_46012);

return statearr_46196;
})();
var statearr_46197_46262 = state_46135__$1;
(statearr_46197_46262[(2)] = null);

(statearr_46197_46262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (14))){
var state_46135__$1 = state_46135;
var statearr_46198_46263 = state_46135__$1;
(statearr_46198_46263[(2)] = null);

(statearr_46198_46263[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (45))){
var inst_46125 = (state_46135[(2)]);
var state_46135__$1 = state_46135;
var statearr_46199_46264 = state_46135__$1;
(statearr_46199_46264[(2)] = inst_46125);

(statearr_46199_46264[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (26))){
var inst_46067 = (state_46135[(29)]);
var inst_46121 = (state_46135[(2)]);
var inst_46122 = cljs.core.seq.call(null,inst_46067);
var state_46135__$1 = (function (){var statearr_46200 = state_46135;
(statearr_46200[(31)] = inst_46121);

return statearr_46200;
})();
if(inst_46122){
var statearr_46201_46265 = state_46135__$1;
(statearr_46201_46265[(1)] = (42));

} else {
var statearr_46202_46266 = state_46135__$1;
(statearr_46202_46266[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (16))){
var inst_46034 = (state_46135[(7)]);
var inst_46036 = cljs.core.chunked_seq_QMARK_.call(null,inst_46034);
var state_46135__$1 = state_46135;
if(inst_46036){
var statearr_46203_46267 = state_46135__$1;
(statearr_46203_46267[(1)] = (19));

} else {
var statearr_46204_46268 = state_46135__$1;
(statearr_46204_46268[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (38))){
var inst_46114 = (state_46135[(2)]);
var state_46135__$1 = state_46135;
var statearr_46205_46269 = state_46135__$1;
(statearr_46205_46269[(2)] = inst_46114);

(statearr_46205_46269[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (30))){
var state_46135__$1 = state_46135;
var statearr_46206_46270 = state_46135__$1;
(statearr_46206_46270[(2)] = null);

(statearr_46206_46270[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (10))){
var inst_46015 = (state_46135[(15)]);
var inst_46013 = (state_46135[(16)]);
var inst_46023 = cljs.core._nth.call(null,inst_46013,inst_46015);
var inst_46024 = cljs.core.nth.call(null,inst_46023,(0),null);
var inst_46025 = cljs.core.nth.call(null,inst_46023,(1),null);
var state_46135__$1 = (function (){var statearr_46207 = state_46135;
(statearr_46207[(26)] = inst_46024);

return statearr_46207;
})();
if(cljs.core.truth_(inst_46025)){
var statearr_46208_46271 = state_46135__$1;
(statearr_46208_46271[(1)] = (13));

} else {
var statearr_46209_46272 = state_46135__$1;
(statearr_46209_46272[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (18))){
var inst_46060 = (state_46135[(2)]);
var state_46135__$1 = state_46135;
var statearr_46210_46273 = state_46135__$1;
(statearr_46210_46273[(2)] = inst_46060);

(statearr_46210_46273[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (42))){
var state_46135__$1 = state_46135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46135__$1,(45),dchan);
} else {
if((state_val_46136 === (37))){
var inst_46103 = (state_46135[(23)]);
var inst_46094 = (state_46135[(25)]);
var inst_46003 = (state_46135[(12)]);
var inst_46103__$1 = cljs.core.first.call(null,inst_46094);
var inst_46104 = cljs.core.async.put_BANG_.call(null,inst_46103__$1,inst_46003,done);
var state_46135__$1 = (function (){var statearr_46211 = state_46135;
(statearr_46211[(23)] = inst_46103__$1);

return statearr_46211;
})();
if(cljs.core.truth_(inst_46104)){
var statearr_46212_46274 = state_46135__$1;
(statearr_46212_46274[(1)] = (39));

} else {
var statearr_46213_46275 = state_46135__$1;
(statearr_46213_46275[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (8))){
var inst_46014 = (state_46135[(14)]);
var inst_46015 = (state_46135[(15)]);
var inst_46017 = (inst_46015 < inst_46014);
var inst_46018 = inst_46017;
var state_46135__$1 = state_46135;
if(cljs.core.truth_(inst_46018)){
var statearr_46214_46276 = state_46135__$1;
(statearr_46214_46276[(1)] = (10));

} else {
var statearr_46215_46277 = state_46135__$1;
(statearr_46215_46277[(1)] = (11));

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
});})(c__44900__auto___46223,cs,m,dchan,dctr,done))
;
return ((function (switch__44788__auto__,c__44900__auto___46223,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__44789__auto__ = null;
var cljs$core$async$mult_$_state_machine__44789__auto____0 = (function (){
var statearr_46219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46219[(0)] = cljs$core$async$mult_$_state_machine__44789__auto__);

(statearr_46219[(1)] = (1));

return statearr_46219;
});
var cljs$core$async$mult_$_state_machine__44789__auto____1 = (function (state_46135){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_46135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e46220){if((e46220 instanceof Object)){
var ex__44792__auto__ = e46220;
var statearr_46221_46278 = state_46135;
(statearr_46221_46278[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46279 = state_46135;
state_46135 = G__46279;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44789__auto__ = function(state_46135){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44789__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44789__auto____1.call(this,state_46135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44789__auto____0;
cljs$core$async$mult_$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44789__auto____1;
return cljs$core$async$mult_$_state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto___46223,cs,m,dchan,dctr,done))
})();
var state__44902__auto__ = (function (){var statearr_46222 = f__44901__auto__.call(null);
(statearr_46222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto___46223);

return statearr_46222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto___46223,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args46280 = [];
var len__42146__auto___46283 = arguments.length;
var i__42147__auto___46284 = (0);
while(true){
if((i__42147__auto___46284 < len__42146__auto___46283)){
args46280.push((arguments[i__42147__auto___46284]));

var G__46285 = (i__42147__auto___46284 + (1));
i__42147__auto___46284 = G__46285;
continue;
} else {
}
break;
}

var G__46282 = args46280.length;
switch (G__46282) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46280.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__41734__auto__ = (((m == null))?null:m);
var m__41735__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__41734__auto__)]);
if(!((m__41735__auto__ == null))){
return m__41735__auto__.call(null,m,ch);
} else {
var m__41735__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__41735__auto____$1 == null))){
return m__41735__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__41734__auto__ = (((m == null))?null:m);
var m__41735__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__41734__auto__)]);
if(!((m__41735__auto__ == null))){
return m__41735__auto__.call(null,m,ch);
} else {
var m__41735__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__41735__auto____$1 == null))){
return m__41735__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__41734__auto__ = (((m == null))?null:m);
var m__41735__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__41734__auto__)]);
if(!((m__41735__auto__ == null))){
return m__41735__auto__.call(null,m);
} else {
var m__41735__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__41735__auto____$1 == null))){
return m__41735__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__41734__auto__ = (((m == null))?null:m);
var m__41735__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__41734__auto__)]);
if(!((m__41735__auto__ == null))){
return m__41735__auto__.call(null,m,state_map);
} else {
var m__41735__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__41735__auto____$1 == null))){
return m__41735__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__41734__auto__ = (((m == null))?null:m);
var m__41735__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__41734__auto__)]);
if(!((m__41735__auto__ == null))){
return m__41735__auto__.call(null,m,mode);
} else {
var m__41735__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__41735__auto____$1 == null))){
return m__41735__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__42153__auto__ = [];
var len__42146__auto___46297 = arguments.length;
var i__42147__auto___46298 = (0);
while(true){
if((i__42147__auto___46298 < len__42146__auto___46297)){
args__42153__auto__.push((arguments[i__42147__auto___46298]));

var G__46299 = (i__42147__auto___46298 + (1));
i__42147__auto___46298 = G__46299;
continue;
} else {
}
break;
}

var argseq__42154__auto__ = ((((3) < args__42153__auto__.length))?(new cljs.core.IndexedSeq(args__42153__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__42154__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46291){
var map__46292 = p__46291;
var map__46292__$1 = ((((!((map__46292 == null)))?((((map__46292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46292):map__46292);
var opts = map__46292__$1;
var statearr_46294_46300 = state;
(statearr_46294_46300[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__46292,map__46292__$1,opts){
return (function (val){
var statearr_46295_46301 = state;
(statearr_46295_46301[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__46292,map__46292__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_46296_46302 = state;
(statearr_46296_46302[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46287){
var G__46288 = cljs.core.first.call(null,seq46287);
var seq46287__$1 = cljs.core.next.call(null,seq46287);
var G__46289 = cljs.core.first.call(null,seq46287__$1);
var seq46287__$2 = cljs.core.next.call(null,seq46287__$1);
var G__46290 = cljs.core.first.call(null,seq46287__$2);
var seq46287__$3 = cljs.core.next.call(null,seq46287__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46288,G__46289,G__46290,seq46287__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async46468 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46468 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46469){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46469 = meta46469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46470,meta46469__$1){
var self__ = this;
var _46470__$1 = this;
return (new cljs.core.async.t_cljs$core$async46468(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46469__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46468.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46470){
var self__ = this;
var _46470__$1 = this;
return self__.meta46469;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46468.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async46468.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46468.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async46468.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46468.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46468.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46468.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46468.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46468.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46469","meta46469",-955419739,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46468.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46468";

cljs.core.async.t_cljs$core$async46468.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__41677__auto__,writer__41678__auto__,opt__41679__auto__){
return cljs.core._write.call(null,writer__41678__auto__,"cljs.core.async/t_cljs$core$async46468");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async46468 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async46468(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46469){
return (new cljs.core.async.t_cljs$core$async46468(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46469));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async46468(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44900__auto___46633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto___46633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto___46633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_46570){
var state_val_46571 = (state_46570[(1)]);
if((state_val_46571 === (7))){
var inst_46486 = (state_46570[(2)]);
var state_46570__$1 = state_46570;
var statearr_46572_46634 = state_46570__$1;
(statearr_46572_46634[(2)] = inst_46486);

(statearr_46572_46634[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (20))){
var inst_46498 = (state_46570[(7)]);
var state_46570__$1 = state_46570;
var statearr_46573_46635 = state_46570__$1;
(statearr_46573_46635[(2)] = inst_46498);

(statearr_46573_46635[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (27))){
var state_46570__$1 = state_46570;
var statearr_46574_46636 = state_46570__$1;
(statearr_46574_46636[(2)] = null);

(statearr_46574_46636[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (1))){
var inst_46474 = (state_46570[(8)]);
var inst_46474__$1 = calc_state.call(null);
var inst_46476 = (inst_46474__$1 == null);
var inst_46477 = cljs.core.not.call(null,inst_46476);
var state_46570__$1 = (function (){var statearr_46575 = state_46570;
(statearr_46575[(8)] = inst_46474__$1);

return statearr_46575;
})();
if(inst_46477){
var statearr_46576_46637 = state_46570__$1;
(statearr_46576_46637[(1)] = (2));

} else {
var statearr_46577_46638 = state_46570__$1;
(statearr_46577_46638[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (24))){
var inst_46521 = (state_46570[(9)]);
var inst_46530 = (state_46570[(10)]);
var inst_46544 = (state_46570[(11)]);
var inst_46544__$1 = inst_46521.call(null,inst_46530);
var state_46570__$1 = (function (){var statearr_46578 = state_46570;
(statearr_46578[(11)] = inst_46544__$1);

return statearr_46578;
})();
if(cljs.core.truth_(inst_46544__$1)){
var statearr_46579_46639 = state_46570__$1;
(statearr_46579_46639[(1)] = (29));

} else {
var statearr_46580_46640 = state_46570__$1;
(statearr_46580_46640[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (4))){
var inst_46489 = (state_46570[(2)]);
var state_46570__$1 = state_46570;
if(cljs.core.truth_(inst_46489)){
var statearr_46581_46641 = state_46570__$1;
(statearr_46581_46641[(1)] = (8));

} else {
var statearr_46582_46642 = state_46570__$1;
(statearr_46582_46642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (15))){
var inst_46515 = (state_46570[(2)]);
var state_46570__$1 = state_46570;
if(cljs.core.truth_(inst_46515)){
var statearr_46583_46643 = state_46570__$1;
(statearr_46583_46643[(1)] = (19));

} else {
var statearr_46584_46644 = state_46570__$1;
(statearr_46584_46644[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (21))){
var inst_46520 = (state_46570[(12)]);
var inst_46520__$1 = (state_46570[(2)]);
var inst_46521 = cljs.core.get.call(null,inst_46520__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46522 = cljs.core.get.call(null,inst_46520__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46523 = cljs.core.get.call(null,inst_46520__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46570__$1 = (function (){var statearr_46585 = state_46570;
(statearr_46585[(13)] = inst_46522);

(statearr_46585[(9)] = inst_46521);

(statearr_46585[(12)] = inst_46520__$1);

return statearr_46585;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_46570__$1,(22),inst_46523);
} else {
if((state_val_46571 === (31))){
var inst_46552 = (state_46570[(2)]);
var state_46570__$1 = state_46570;
if(cljs.core.truth_(inst_46552)){
var statearr_46586_46645 = state_46570__$1;
(statearr_46586_46645[(1)] = (32));

} else {
var statearr_46587_46646 = state_46570__$1;
(statearr_46587_46646[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (32))){
var inst_46529 = (state_46570[(14)]);
var state_46570__$1 = state_46570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46570__$1,(35),out,inst_46529);
} else {
if((state_val_46571 === (33))){
var inst_46520 = (state_46570[(12)]);
var inst_46498 = inst_46520;
var state_46570__$1 = (function (){var statearr_46588 = state_46570;
(statearr_46588[(7)] = inst_46498);

return statearr_46588;
})();
var statearr_46589_46647 = state_46570__$1;
(statearr_46589_46647[(2)] = null);

(statearr_46589_46647[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (13))){
var inst_46498 = (state_46570[(7)]);
var inst_46505 = inst_46498.cljs$lang$protocol_mask$partition0$;
var inst_46506 = (inst_46505 & (64));
var inst_46507 = inst_46498.cljs$core$ISeq$;
var inst_46508 = (inst_46506) || (inst_46507);
var state_46570__$1 = state_46570;
if(cljs.core.truth_(inst_46508)){
var statearr_46590_46648 = state_46570__$1;
(statearr_46590_46648[(1)] = (16));

} else {
var statearr_46591_46649 = state_46570__$1;
(statearr_46591_46649[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (22))){
var inst_46530 = (state_46570[(10)]);
var inst_46529 = (state_46570[(14)]);
var inst_46528 = (state_46570[(2)]);
var inst_46529__$1 = cljs.core.nth.call(null,inst_46528,(0),null);
var inst_46530__$1 = cljs.core.nth.call(null,inst_46528,(1),null);
var inst_46531 = (inst_46529__$1 == null);
var inst_46532 = cljs.core._EQ_.call(null,inst_46530__$1,change);
var inst_46533 = (inst_46531) || (inst_46532);
var state_46570__$1 = (function (){var statearr_46592 = state_46570;
(statearr_46592[(10)] = inst_46530__$1);

(statearr_46592[(14)] = inst_46529__$1);

return statearr_46592;
})();
if(cljs.core.truth_(inst_46533)){
var statearr_46593_46650 = state_46570__$1;
(statearr_46593_46650[(1)] = (23));

} else {
var statearr_46594_46651 = state_46570__$1;
(statearr_46594_46651[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (36))){
var inst_46520 = (state_46570[(12)]);
var inst_46498 = inst_46520;
var state_46570__$1 = (function (){var statearr_46595 = state_46570;
(statearr_46595[(7)] = inst_46498);

return statearr_46595;
})();
var statearr_46596_46652 = state_46570__$1;
(statearr_46596_46652[(2)] = null);

(statearr_46596_46652[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (29))){
var inst_46544 = (state_46570[(11)]);
var state_46570__$1 = state_46570;
var statearr_46597_46653 = state_46570__$1;
(statearr_46597_46653[(2)] = inst_46544);

(statearr_46597_46653[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (6))){
var state_46570__$1 = state_46570;
var statearr_46598_46654 = state_46570__$1;
(statearr_46598_46654[(2)] = false);

(statearr_46598_46654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (28))){
var inst_46540 = (state_46570[(2)]);
var inst_46541 = calc_state.call(null);
var inst_46498 = inst_46541;
var state_46570__$1 = (function (){var statearr_46599 = state_46570;
(statearr_46599[(15)] = inst_46540);

(statearr_46599[(7)] = inst_46498);

return statearr_46599;
})();
var statearr_46600_46655 = state_46570__$1;
(statearr_46600_46655[(2)] = null);

(statearr_46600_46655[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (25))){
var inst_46566 = (state_46570[(2)]);
var state_46570__$1 = state_46570;
var statearr_46601_46656 = state_46570__$1;
(statearr_46601_46656[(2)] = inst_46566);

(statearr_46601_46656[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (34))){
var inst_46564 = (state_46570[(2)]);
var state_46570__$1 = state_46570;
var statearr_46602_46657 = state_46570__$1;
(statearr_46602_46657[(2)] = inst_46564);

(statearr_46602_46657[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (17))){
var state_46570__$1 = state_46570;
var statearr_46603_46658 = state_46570__$1;
(statearr_46603_46658[(2)] = false);

(statearr_46603_46658[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (3))){
var state_46570__$1 = state_46570;
var statearr_46604_46659 = state_46570__$1;
(statearr_46604_46659[(2)] = false);

(statearr_46604_46659[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (12))){
var inst_46568 = (state_46570[(2)]);
var state_46570__$1 = state_46570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46570__$1,inst_46568);
} else {
if((state_val_46571 === (2))){
var inst_46474 = (state_46570[(8)]);
var inst_46479 = inst_46474.cljs$lang$protocol_mask$partition0$;
var inst_46480 = (inst_46479 & (64));
var inst_46481 = inst_46474.cljs$core$ISeq$;
var inst_46482 = (inst_46480) || (inst_46481);
var state_46570__$1 = state_46570;
if(cljs.core.truth_(inst_46482)){
var statearr_46605_46660 = state_46570__$1;
(statearr_46605_46660[(1)] = (5));

} else {
var statearr_46606_46661 = state_46570__$1;
(statearr_46606_46661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (23))){
var inst_46529 = (state_46570[(14)]);
var inst_46535 = (inst_46529 == null);
var state_46570__$1 = state_46570;
if(cljs.core.truth_(inst_46535)){
var statearr_46607_46662 = state_46570__$1;
(statearr_46607_46662[(1)] = (26));

} else {
var statearr_46608_46663 = state_46570__$1;
(statearr_46608_46663[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (35))){
var inst_46555 = (state_46570[(2)]);
var state_46570__$1 = state_46570;
if(cljs.core.truth_(inst_46555)){
var statearr_46609_46664 = state_46570__$1;
(statearr_46609_46664[(1)] = (36));

} else {
var statearr_46610_46665 = state_46570__$1;
(statearr_46610_46665[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (19))){
var inst_46498 = (state_46570[(7)]);
var inst_46517 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46498);
var state_46570__$1 = state_46570;
var statearr_46611_46666 = state_46570__$1;
(statearr_46611_46666[(2)] = inst_46517);

(statearr_46611_46666[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (11))){
var inst_46498 = (state_46570[(7)]);
var inst_46502 = (inst_46498 == null);
var inst_46503 = cljs.core.not.call(null,inst_46502);
var state_46570__$1 = state_46570;
if(inst_46503){
var statearr_46612_46667 = state_46570__$1;
(statearr_46612_46667[(1)] = (13));

} else {
var statearr_46613_46668 = state_46570__$1;
(statearr_46613_46668[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (9))){
var inst_46474 = (state_46570[(8)]);
var state_46570__$1 = state_46570;
var statearr_46614_46669 = state_46570__$1;
(statearr_46614_46669[(2)] = inst_46474);

(statearr_46614_46669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (5))){
var state_46570__$1 = state_46570;
var statearr_46615_46670 = state_46570__$1;
(statearr_46615_46670[(2)] = true);

(statearr_46615_46670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (14))){
var state_46570__$1 = state_46570;
var statearr_46616_46671 = state_46570__$1;
(statearr_46616_46671[(2)] = false);

(statearr_46616_46671[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (26))){
var inst_46530 = (state_46570[(10)]);
var inst_46537 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_46530);
var state_46570__$1 = state_46570;
var statearr_46617_46672 = state_46570__$1;
(statearr_46617_46672[(2)] = inst_46537);

(statearr_46617_46672[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (16))){
var state_46570__$1 = state_46570;
var statearr_46618_46673 = state_46570__$1;
(statearr_46618_46673[(2)] = true);

(statearr_46618_46673[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (38))){
var inst_46560 = (state_46570[(2)]);
var state_46570__$1 = state_46570;
var statearr_46619_46674 = state_46570__$1;
(statearr_46619_46674[(2)] = inst_46560);

(statearr_46619_46674[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (30))){
var inst_46522 = (state_46570[(13)]);
var inst_46521 = (state_46570[(9)]);
var inst_46530 = (state_46570[(10)]);
var inst_46547 = cljs.core.empty_QMARK_.call(null,inst_46521);
var inst_46548 = inst_46522.call(null,inst_46530);
var inst_46549 = cljs.core.not.call(null,inst_46548);
var inst_46550 = (inst_46547) && (inst_46549);
var state_46570__$1 = state_46570;
var statearr_46620_46675 = state_46570__$1;
(statearr_46620_46675[(2)] = inst_46550);

(statearr_46620_46675[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (10))){
var inst_46474 = (state_46570[(8)]);
var inst_46494 = (state_46570[(2)]);
var inst_46495 = cljs.core.get.call(null,inst_46494,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46496 = cljs.core.get.call(null,inst_46494,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46497 = cljs.core.get.call(null,inst_46494,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46498 = inst_46474;
var state_46570__$1 = (function (){var statearr_46621 = state_46570;
(statearr_46621[(16)] = inst_46496);

(statearr_46621[(7)] = inst_46498);

(statearr_46621[(17)] = inst_46495);

(statearr_46621[(18)] = inst_46497);

return statearr_46621;
})();
var statearr_46622_46676 = state_46570__$1;
(statearr_46622_46676[(2)] = null);

(statearr_46622_46676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (18))){
var inst_46512 = (state_46570[(2)]);
var state_46570__$1 = state_46570;
var statearr_46623_46677 = state_46570__$1;
(statearr_46623_46677[(2)] = inst_46512);

(statearr_46623_46677[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (37))){
var state_46570__$1 = state_46570;
var statearr_46624_46678 = state_46570__$1;
(statearr_46624_46678[(2)] = null);

(statearr_46624_46678[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (8))){
var inst_46474 = (state_46570[(8)]);
var inst_46491 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46474);
var state_46570__$1 = state_46570;
var statearr_46625_46679 = state_46570__$1;
(statearr_46625_46679[(2)] = inst_46491);

(statearr_46625_46679[(1)] = (10));


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
});})(c__44900__auto___46633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__44788__auto__,c__44900__auto___46633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__44789__auto__ = null;
var cljs$core$async$mix_$_state_machine__44789__auto____0 = (function (){
var statearr_46629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46629[(0)] = cljs$core$async$mix_$_state_machine__44789__auto__);

(statearr_46629[(1)] = (1));

return statearr_46629;
});
var cljs$core$async$mix_$_state_machine__44789__auto____1 = (function (state_46570){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_46570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e46630){if((e46630 instanceof Object)){
var ex__44792__auto__ = e46630;
var statearr_46631_46680 = state_46570;
(statearr_46631_46680[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46681 = state_46570;
state_46570 = G__46681;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44789__auto__ = function(state_46570){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44789__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44789__auto____1.call(this,state_46570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44789__auto____0;
cljs$core$async$mix_$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44789__auto____1;
return cljs$core$async$mix_$_state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto___46633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__44902__auto__ = (function (){var statearr_46632 = f__44901__auto__.call(null);
(statearr_46632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto___46633);

return statearr_46632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto___46633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__41734__auto__ = (((p == null))?null:p);
var m__41735__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__41734__auto__)]);
if(!((m__41735__auto__ == null))){
return m__41735__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__41735__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__41735__auto____$1 == null))){
return m__41735__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__41734__auto__ = (((p == null))?null:p);
var m__41735__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__41734__auto__)]);
if(!((m__41735__auto__ == null))){
return m__41735__auto__.call(null,p,v,ch);
} else {
var m__41735__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__41735__auto____$1 == null))){
return m__41735__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args46682 = [];
var len__42146__auto___46685 = arguments.length;
var i__42147__auto___46686 = (0);
while(true){
if((i__42147__auto___46686 < len__42146__auto___46685)){
args46682.push((arguments[i__42147__auto___46686]));

var G__46687 = (i__42147__auto___46686 + (1));
i__42147__auto___46686 = G__46687;
continue;
} else {
}
break;
}

var G__46684 = args46682.length;
switch (G__46684) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46682.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__41734__auto__ = (((p == null))?null:p);
var m__41735__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__41734__auto__)]);
if(!((m__41735__auto__ == null))){
return m__41735__auto__.call(null,p);
} else {
var m__41735__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__41735__auto____$1 == null))){
return m__41735__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__41734__auto__ = (((p == null))?null:p);
var m__41735__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__41734__auto__)]);
if(!((m__41735__auto__ == null))){
return m__41735__auto__.call(null,p,v);
} else {
var m__41735__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__41735__auto____$1 == null))){
return m__41735__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args46690 = [];
var len__42146__auto___46815 = arguments.length;
var i__42147__auto___46816 = (0);
while(true){
if((i__42147__auto___46816 < len__42146__auto___46815)){
args46690.push((arguments[i__42147__auto___46816]));

var G__46817 = (i__42147__auto___46816 + (1));
i__42147__auto___46816 = G__46817;
continue;
} else {
}
break;
}

var G__46692 = args46690.length;
switch (G__46692) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46690.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__41071__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__41071__auto__)){
return or__41071__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__41071__auto__,mults){
return (function (p1__46689_SHARP_){
if(cljs.core.truth_(p1__46689_SHARP_.call(null,topic))){
return p1__46689_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__46689_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__41071__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async46693 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46693 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46694){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46694 = meta46694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_46695,meta46694__$1){
var self__ = this;
var _46695__$1 = this;
return (new cljs.core.async.t_cljs$core$async46693(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46694__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46693.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_46695){
var self__ = this;
var _46695__$1 = this;
return self__.meta46694;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46693.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async46693.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46693.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async46693.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46693.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46693.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46693.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46693.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46694","meta46694",-1548595068,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46693.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46693.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46693";

cljs.core.async.t_cljs$core$async46693.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__41677__auto__,writer__41678__auto__,opt__41679__auto__){
return cljs.core._write.call(null,writer__41678__auto__,"cljs.core.async/t_cljs$core$async46693");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async46693 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async46693(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46694){
return (new cljs.core.async.t_cljs$core$async46693(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46694));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async46693(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44900__auto___46819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto___46819,mults,ensure_mult,p){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto___46819,mults,ensure_mult,p){
return (function (state_46767){
var state_val_46768 = (state_46767[(1)]);
if((state_val_46768 === (7))){
var inst_46763 = (state_46767[(2)]);
var state_46767__$1 = state_46767;
var statearr_46769_46820 = state_46767__$1;
(statearr_46769_46820[(2)] = inst_46763);

(statearr_46769_46820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46768 === (20))){
var state_46767__$1 = state_46767;
var statearr_46770_46821 = state_46767__$1;
(statearr_46770_46821[(2)] = null);

(statearr_46770_46821[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46768 === (1))){
var state_46767__$1 = state_46767;
var statearr_46771_46822 = state_46767__$1;
(statearr_46771_46822[(2)] = null);

(statearr_46771_46822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46768 === (24))){
var inst_46746 = (state_46767[(7)]);
var inst_46755 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_46746);
var state_46767__$1 = state_46767;
var statearr_46772_46823 = state_46767__$1;
(statearr_46772_46823[(2)] = inst_46755);

(statearr_46772_46823[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46768 === (4))){
var inst_46698 = (state_46767[(8)]);
var inst_46698__$1 = (state_46767[(2)]);
var inst_46699 = (inst_46698__$1 == null);
var state_46767__$1 = (function (){var statearr_46773 = state_46767;
(statearr_46773[(8)] = inst_46698__$1);

return statearr_46773;
})();
if(cljs.core.truth_(inst_46699)){
var statearr_46774_46824 = state_46767__$1;
(statearr_46774_46824[(1)] = (5));

} else {
var statearr_46775_46825 = state_46767__$1;
(statearr_46775_46825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46768 === (15))){
var inst_46740 = (state_46767[(2)]);
var state_46767__$1 = state_46767;
var statearr_46776_46826 = state_46767__$1;
(statearr_46776_46826[(2)] = inst_46740);

(statearr_46776_46826[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46768 === (21))){
var inst_46760 = (state_46767[(2)]);
var state_46767__$1 = (function (){var statearr_46777 = state_46767;
(statearr_46777[(9)] = inst_46760);

return statearr_46777;
})();
var statearr_46778_46827 = state_46767__$1;
(statearr_46778_46827[(2)] = null);

(statearr_46778_46827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46768 === (13))){
var inst_46722 = (state_46767[(10)]);
var inst_46724 = cljs.core.chunked_seq_QMARK_.call(null,inst_46722);
var state_46767__$1 = state_46767;
if(inst_46724){
var statearr_46779_46828 = state_46767__$1;
(statearr_46779_46828[(1)] = (16));

} else {
var statearr_46780_46829 = state_46767__$1;
(statearr_46780_46829[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46768 === (22))){
var inst_46752 = (state_46767[(2)]);
var state_46767__$1 = state_46767;
if(cljs.core.truth_(inst_46752)){
var statearr_46781_46830 = state_46767__$1;
(statearr_46781_46830[(1)] = (23));

} else {
var statearr_46782_46831 = state_46767__$1;
(statearr_46782_46831[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46768 === (6))){
var inst_46698 = (state_46767[(8)]);
var inst_46748 = (state_46767[(11)]);
var inst_46746 = (state_46767[(7)]);
var inst_46746__$1 = topic_fn.call(null,inst_46698);
var inst_46747 = cljs.core.deref.call(null,mults);
var inst_46748__$1 = cljs.core.get.call(null,inst_46747,inst_46746__$1);
var state_46767__$1 = (function (){var statearr_46783 = state_46767;
(statearr_46783[(11)] = inst_46748__$1);

(statearr_46783[(7)] = inst_46746__$1);

return statearr_46783;
})();
if(cljs.core.truth_(inst_46748__$1)){
var statearr_46784_46832 = state_46767__$1;
(statearr_46784_46832[(1)] = (19));

} else {
var statearr_46785_46833 = state_46767__$1;
(statearr_46785_46833[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46768 === (25))){
var inst_46757 = (state_46767[(2)]);
var state_46767__$1 = state_46767;
var statearr_46786_46834 = state_46767__$1;
(statearr_46786_46834[(2)] = inst_46757);

(statearr_46786_46834[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46768 === (17))){
var inst_46722 = (state_46767[(10)]);
var inst_46731 = cljs.core.first.call(null,inst_46722);
var inst_46732 = cljs.core.async.muxch_STAR_.call(null,inst_46731);
var inst_46733 = cljs.core.async.close_BANG_.call(null,inst_46732);
var inst_46734 = cljs.core.next.call(null,inst_46722);
var inst_46708 = inst_46734;
var inst_46709 = null;
var inst_46710 = (0);
var inst_46711 = (0);
var state_46767__$1 = (function (){var statearr_46787 = state_46767;
(statearr_46787[(12)] = inst_46733);

(statearr_46787[(13)] = inst_46708);

(statearr_46787[(14)] = inst_46710);

(statearr_46787[(15)] = inst_46709);

(statearr_46787[(16)] = inst_46711);

return statearr_46787;
})();
var statearr_46788_46835 = state_46767__$1;
(statearr_46788_46835[(2)] = null);

(statearr_46788_46835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46768 === (3))){
var inst_46765 = (state_46767[(2)]);
var state_46767__$1 = state_46767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46767__$1,inst_46765);
} else {
if((state_val_46768 === (12))){
var inst_46742 = (state_46767[(2)]);
var state_46767__$1 = state_46767;
var statearr_46789_46836 = state_46767__$1;
(statearr_46789_46836[(2)] = inst_46742);

(statearr_46789_46836[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46768 === (2))){
var state_46767__$1 = state_46767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46767__$1,(4),ch);
} else {
if((state_val_46768 === (23))){
var state_46767__$1 = state_46767;
var statearr_46790_46837 = state_46767__$1;
(statearr_46790_46837[(2)] = null);

(statearr_46790_46837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46768 === (19))){
var inst_46698 = (state_46767[(8)]);
var inst_46748 = (state_46767[(11)]);
var inst_46750 = cljs.core.async.muxch_STAR_.call(null,inst_46748);
var state_46767__$1 = state_46767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46767__$1,(22),inst_46750,inst_46698);
} else {
if((state_val_46768 === (11))){
var inst_46708 = (state_46767[(13)]);
var inst_46722 = (state_46767[(10)]);
var inst_46722__$1 = cljs.core.seq.call(null,inst_46708);
var state_46767__$1 = (function (){var statearr_46791 = state_46767;
(statearr_46791[(10)] = inst_46722__$1);

return statearr_46791;
})();
if(inst_46722__$1){
var statearr_46792_46838 = state_46767__$1;
(statearr_46792_46838[(1)] = (13));

} else {
var statearr_46793_46839 = state_46767__$1;
(statearr_46793_46839[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46768 === (9))){
var inst_46744 = (state_46767[(2)]);
var state_46767__$1 = state_46767;
var statearr_46794_46840 = state_46767__$1;
(statearr_46794_46840[(2)] = inst_46744);

(statearr_46794_46840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46768 === (5))){
var inst_46705 = cljs.core.deref.call(null,mults);
var inst_46706 = cljs.core.vals.call(null,inst_46705);
var inst_46707 = cljs.core.seq.call(null,inst_46706);
var inst_46708 = inst_46707;
var inst_46709 = null;
var inst_46710 = (0);
var inst_46711 = (0);
var state_46767__$1 = (function (){var statearr_46795 = state_46767;
(statearr_46795[(13)] = inst_46708);

(statearr_46795[(14)] = inst_46710);

(statearr_46795[(15)] = inst_46709);

(statearr_46795[(16)] = inst_46711);

return statearr_46795;
})();
var statearr_46796_46841 = state_46767__$1;
(statearr_46796_46841[(2)] = null);

(statearr_46796_46841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46768 === (14))){
var state_46767__$1 = state_46767;
var statearr_46800_46842 = state_46767__$1;
(statearr_46800_46842[(2)] = null);

(statearr_46800_46842[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46768 === (16))){
var inst_46722 = (state_46767[(10)]);
var inst_46726 = cljs.core.chunk_first.call(null,inst_46722);
var inst_46727 = cljs.core.chunk_rest.call(null,inst_46722);
var inst_46728 = cljs.core.count.call(null,inst_46726);
var inst_46708 = inst_46727;
var inst_46709 = inst_46726;
var inst_46710 = inst_46728;
var inst_46711 = (0);
var state_46767__$1 = (function (){var statearr_46801 = state_46767;
(statearr_46801[(13)] = inst_46708);

(statearr_46801[(14)] = inst_46710);

(statearr_46801[(15)] = inst_46709);

(statearr_46801[(16)] = inst_46711);

return statearr_46801;
})();
var statearr_46802_46843 = state_46767__$1;
(statearr_46802_46843[(2)] = null);

(statearr_46802_46843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46768 === (10))){
var inst_46708 = (state_46767[(13)]);
var inst_46710 = (state_46767[(14)]);
var inst_46709 = (state_46767[(15)]);
var inst_46711 = (state_46767[(16)]);
var inst_46716 = cljs.core._nth.call(null,inst_46709,inst_46711);
var inst_46717 = cljs.core.async.muxch_STAR_.call(null,inst_46716);
var inst_46718 = cljs.core.async.close_BANG_.call(null,inst_46717);
var inst_46719 = (inst_46711 + (1));
var tmp46797 = inst_46708;
var tmp46798 = inst_46710;
var tmp46799 = inst_46709;
var inst_46708__$1 = tmp46797;
var inst_46709__$1 = tmp46799;
var inst_46710__$1 = tmp46798;
var inst_46711__$1 = inst_46719;
var state_46767__$1 = (function (){var statearr_46803 = state_46767;
(statearr_46803[(17)] = inst_46718);

(statearr_46803[(13)] = inst_46708__$1);

(statearr_46803[(14)] = inst_46710__$1);

(statearr_46803[(15)] = inst_46709__$1);

(statearr_46803[(16)] = inst_46711__$1);

return statearr_46803;
})();
var statearr_46804_46844 = state_46767__$1;
(statearr_46804_46844[(2)] = null);

(statearr_46804_46844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46768 === (18))){
var inst_46737 = (state_46767[(2)]);
var state_46767__$1 = state_46767;
var statearr_46805_46845 = state_46767__$1;
(statearr_46805_46845[(2)] = inst_46737);

(statearr_46805_46845[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46768 === (8))){
var inst_46710 = (state_46767[(14)]);
var inst_46711 = (state_46767[(16)]);
var inst_46713 = (inst_46711 < inst_46710);
var inst_46714 = inst_46713;
var state_46767__$1 = state_46767;
if(cljs.core.truth_(inst_46714)){
var statearr_46806_46846 = state_46767__$1;
(statearr_46806_46846[(1)] = (10));

} else {
var statearr_46807_46847 = state_46767__$1;
(statearr_46807_46847[(1)] = (11));

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
});})(c__44900__auto___46819,mults,ensure_mult,p))
;
return ((function (switch__44788__auto__,c__44900__auto___46819,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__44789__auto__ = null;
var cljs$core$async$state_machine__44789__auto____0 = (function (){
var statearr_46811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46811[(0)] = cljs$core$async$state_machine__44789__auto__);

(statearr_46811[(1)] = (1));

return statearr_46811;
});
var cljs$core$async$state_machine__44789__auto____1 = (function (state_46767){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_46767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e46812){if((e46812 instanceof Object)){
var ex__44792__auto__ = e46812;
var statearr_46813_46848 = state_46767;
(statearr_46813_46848[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46849 = state_46767;
state_46767 = G__46849;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
cljs$core$async$state_machine__44789__auto__ = function(state_46767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44789__auto____1.call(this,state_46767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44789__auto____0;
cljs$core$async$state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44789__auto____1;
return cljs$core$async$state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto___46819,mults,ensure_mult,p))
})();
var state__44902__auto__ = (function (){var statearr_46814 = f__44901__auto__.call(null);
(statearr_46814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto___46819);

return statearr_46814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto___46819,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args46850 = [];
var len__42146__auto___46853 = arguments.length;
var i__42147__auto___46854 = (0);
while(true){
if((i__42147__auto___46854 < len__42146__auto___46853)){
args46850.push((arguments[i__42147__auto___46854]));

var G__46855 = (i__42147__auto___46854 + (1));
i__42147__auto___46854 = G__46855;
continue;
} else {
}
break;
}

var G__46852 = args46850.length;
switch (G__46852) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46850.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args46857 = [];
var len__42146__auto___46860 = arguments.length;
var i__42147__auto___46861 = (0);
while(true){
if((i__42147__auto___46861 < len__42146__auto___46860)){
args46857.push((arguments[i__42147__auto___46861]));

var G__46862 = (i__42147__auto___46861 + (1));
i__42147__auto___46861 = G__46862;
continue;
} else {
}
break;
}

var G__46859 = args46857.length;
switch (G__46859) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46857.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args46864 = [];
var len__42146__auto___46935 = arguments.length;
var i__42147__auto___46936 = (0);
while(true){
if((i__42147__auto___46936 < len__42146__auto___46935)){
args46864.push((arguments[i__42147__auto___46936]));

var G__46937 = (i__42147__auto___46936 + (1));
i__42147__auto___46936 = G__46937;
continue;
} else {
}
break;
}

var G__46866 = args46864.length;
switch (G__46866) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46864.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__44900__auto___46939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto___46939,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto___46939,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_46905){
var state_val_46906 = (state_46905[(1)]);
if((state_val_46906 === (7))){
var state_46905__$1 = state_46905;
var statearr_46907_46940 = state_46905__$1;
(statearr_46907_46940[(2)] = null);

(statearr_46907_46940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (1))){
var state_46905__$1 = state_46905;
var statearr_46908_46941 = state_46905__$1;
(statearr_46908_46941[(2)] = null);

(statearr_46908_46941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (4))){
var inst_46869 = (state_46905[(7)]);
var inst_46871 = (inst_46869 < cnt);
var state_46905__$1 = state_46905;
if(cljs.core.truth_(inst_46871)){
var statearr_46909_46942 = state_46905__$1;
(statearr_46909_46942[(1)] = (6));

} else {
var statearr_46910_46943 = state_46905__$1;
(statearr_46910_46943[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (15))){
var inst_46901 = (state_46905[(2)]);
var state_46905__$1 = state_46905;
var statearr_46911_46944 = state_46905__$1;
(statearr_46911_46944[(2)] = inst_46901);

(statearr_46911_46944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (13))){
var inst_46894 = cljs.core.async.close_BANG_.call(null,out);
var state_46905__$1 = state_46905;
var statearr_46912_46945 = state_46905__$1;
(statearr_46912_46945[(2)] = inst_46894);

(statearr_46912_46945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (6))){
var state_46905__$1 = state_46905;
var statearr_46913_46946 = state_46905__$1;
(statearr_46913_46946[(2)] = null);

(statearr_46913_46946[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (3))){
var inst_46903 = (state_46905[(2)]);
var state_46905__$1 = state_46905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46905__$1,inst_46903);
} else {
if((state_val_46906 === (12))){
var inst_46891 = (state_46905[(8)]);
var inst_46891__$1 = (state_46905[(2)]);
var inst_46892 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_46891__$1);
var state_46905__$1 = (function (){var statearr_46914 = state_46905;
(statearr_46914[(8)] = inst_46891__$1);

return statearr_46914;
})();
if(cljs.core.truth_(inst_46892)){
var statearr_46915_46947 = state_46905__$1;
(statearr_46915_46947[(1)] = (13));

} else {
var statearr_46916_46948 = state_46905__$1;
(statearr_46916_46948[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (2))){
var inst_46868 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_46869 = (0);
var state_46905__$1 = (function (){var statearr_46917 = state_46905;
(statearr_46917[(7)] = inst_46869);

(statearr_46917[(9)] = inst_46868);

return statearr_46917;
})();
var statearr_46918_46949 = state_46905__$1;
(statearr_46918_46949[(2)] = null);

(statearr_46918_46949[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (11))){
var inst_46869 = (state_46905[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46905,(10),Object,null,(9));
var inst_46878 = chs__$1.call(null,inst_46869);
var inst_46879 = done.call(null,inst_46869);
var inst_46880 = cljs.core.async.take_BANG_.call(null,inst_46878,inst_46879);
var state_46905__$1 = state_46905;
var statearr_46919_46950 = state_46905__$1;
(statearr_46919_46950[(2)] = inst_46880);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46905__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (9))){
var inst_46869 = (state_46905[(7)]);
var inst_46882 = (state_46905[(2)]);
var inst_46883 = (inst_46869 + (1));
var inst_46869__$1 = inst_46883;
var state_46905__$1 = (function (){var statearr_46920 = state_46905;
(statearr_46920[(10)] = inst_46882);

(statearr_46920[(7)] = inst_46869__$1);

return statearr_46920;
})();
var statearr_46921_46951 = state_46905__$1;
(statearr_46921_46951[(2)] = null);

(statearr_46921_46951[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (5))){
var inst_46889 = (state_46905[(2)]);
var state_46905__$1 = (function (){var statearr_46922 = state_46905;
(statearr_46922[(11)] = inst_46889);

return statearr_46922;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46905__$1,(12),dchan);
} else {
if((state_val_46906 === (14))){
var inst_46891 = (state_46905[(8)]);
var inst_46896 = cljs.core.apply.call(null,f,inst_46891);
var state_46905__$1 = state_46905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46905__$1,(16),out,inst_46896);
} else {
if((state_val_46906 === (16))){
var inst_46898 = (state_46905[(2)]);
var state_46905__$1 = (function (){var statearr_46923 = state_46905;
(statearr_46923[(12)] = inst_46898);

return statearr_46923;
})();
var statearr_46924_46952 = state_46905__$1;
(statearr_46924_46952[(2)] = null);

(statearr_46924_46952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (10))){
var inst_46873 = (state_46905[(2)]);
var inst_46874 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_46905__$1 = (function (){var statearr_46925 = state_46905;
(statearr_46925[(13)] = inst_46873);

return statearr_46925;
})();
var statearr_46926_46953 = state_46905__$1;
(statearr_46926_46953[(2)] = inst_46874);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46905__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (8))){
var inst_46887 = (state_46905[(2)]);
var state_46905__$1 = state_46905;
var statearr_46927_46954 = state_46905__$1;
(statearr_46927_46954[(2)] = inst_46887);

(statearr_46927_46954[(1)] = (5));


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
});})(c__44900__auto___46939,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__44788__auto__,c__44900__auto___46939,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__44789__auto__ = null;
var cljs$core$async$state_machine__44789__auto____0 = (function (){
var statearr_46931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46931[(0)] = cljs$core$async$state_machine__44789__auto__);

(statearr_46931[(1)] = (1));

return statearr_46931;
});
var cljs$core$async$state_machine__44789__auto____1 = (function (state_46905){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_46905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e46932){if((e46932 instanceof Object)){
var ex__44792__auto__ = e46932;
var statearr_46933_46955 = state_46905;
(statearr_46933_46955[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46956 = state_46905;
state_46905 = G__46956;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
cljs$core$async$state_machine__44789__auto__ = function(state_46905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44789__auto____1.call(this,state_46905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44789__auto____0;
cljs$core$async$state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44789__auto____1;
return cljs$core$async$state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto___46939,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__44902__auto__ = (function (){var statearr_46934 = f__44901__auto__.call(null);
(statearr_46934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto___46939);

return statearr_46934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto___46939,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args46958 = [];
var len__42146__auto___47016 = arguments.length;
var i__42147__auto___47017 = (0);
while(true){
if((i__42147__auto___47017 < len__42146__auto___47016)){
args46958.push((arguments[i__42147__auto___47017]));

var G__47018 = (i__42147__auto___47017 + (1));
i__42147__auto___47017 = G__47018;
continue;
} else {
}
break;
}

var G__46960 = args46958.length;
switch (G__46960) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46958.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44900__auto___47020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto___47020,out){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto___47020,out){
return (function (state_46992){
var state_val_46993 = (state_46992[(1)]);
if((state_val_46993 === (7))){
var inst_46971 = (state_46992[(7)]);
var inst_46972 = (state_46992[(8)]);
var inst_46971__$1 = (state_46992[(2)]);
var inst_46972__$1 = cljs.core.nth.call(null,inst_46971__$1,(0),null);
var inst_46973 = cljs.core.nth.call(null,inst_46971__$1,(1),null);
var inst_46974 = (inst_46972__$1 == null);
var state_46992__$1 = (function (){var statearr_46994 = state_46992;
(statearr_46994[(7)] = inst_46971__$1);

(statearr_46994[(9)] = inst_46973);

(statearr_46994[(8)] = inst_46972__$1);

return statearr_46994;
})();
if(cljs.core.truth_(inst_46974)){
var statearr_46995_47021 = state_46992__$1;
(statearr_46995_47021[(1)] = (8));

} else {
var statearr_46996_47022 = state_46992__$1;
(statearr_46996_47022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46993 === (1))){
var inst_46961 = cljs.core.vec.call(null,chs);
var inst_46962 = inst_46961;
var state_46992__$1 = (function (){var statearr_46997 = state_46992;
(statearr_46997[(10)] = inst_46962);

return statearr_46997;
})();
var statearr_46998_47023 = state_46992__$1;
(statearr_46998_47023[(2)] = null);

(statearr_46998_47023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46993 === (4))){
var inst_46962 = (state_46992[(10)]);
var state_46992__$1 = state_46992;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46992__$1,(7),inst_46962);
} else {
if((state_val_46993 === (6))){
var inst_46988 = (state_46992[(2)]);
var state_46992__$1 = state_46992;
var statearr_46999_47024 = state_46992__$1;
(statearr_46999_47024[(2)] = inst_46988);

(statearr_46999_47024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46993 === (3))){
var inst_46990 = (state_46992[(2)]);
var state_46992__$1 = state_46992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46992__$1,inst_46990);
} else {
if((state_val_46993 === (2))){
var inst_46962 = (state_46992[(10)]);
var inst_46964 = cljs.core.count.call(null,inst_46962);
var inst_46965 = (inst_46964 > (0));
var state_46992__$1 = state_46992;
if(cljs.core.truth_(inst_46965)){
var statearr_47001_47025 = state_46992__$1;
(statearr_47001_47025[(1)] = (4));

} else {
var statearr_47002_47026 = state_46992__$1;
(statearr_47002_47026[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46993 === (11))){
var inst_46962 = (state_46992[(10)]);
var inst_46981 = (state_46992[(2)]);
var tmp47000 = inst_46962;
var inst_46962__$1 = tmp47000;
var state_46992__$1 = (function (){var statearr_47003 = state_46992;
(statearr_47003[(11)] = inst_46981);

(statearr_47003[(10)] = inst_46962__$1);

return statearr_47003;
})();
var statearr_47004_47027 = state_46992__$1;
(statearr_47004_47027[(2)] = null);

(statearr_47004_47027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46993 === (9))){
var inst_46972 = (state_46992[(8)]);
var state_46992__$1 = state_46992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46992__$1,(11),out,inst_46972);
} else {
if((state_val_46993 === (5))){
var inst_46986 = cljs.core.async.close_BANG_.call(null,out);
var state_46992__$1 = state_46992;
var statearr_47005_47028 = state_46992__$1;
(statearr_47005_47028[(2)] = inst_46986);

(statearr_47005_47028[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46993 === (10))){
var inst_46984 = (state_46992[(2)]);
var state_46992__$1 = state_46992;
var statearr_47006_47029 = state_46992__$1;
(statearr_47006_47029[(2)] = inst_46984);

(statearr_47006_47029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46993 === (8))){
var inst_46971 = (state_46992[(7)]);
var inst_46973 = (state_46992[(9)]);
var inst_46972 = (state_46992[(8)]);
var inst_46962 = (state_46992[(10)]);
var inst_46976 = (function (){var cs = inst_46962;
var vec__46967 = inst_46971;
var v = inst_46972;
var c = inst_46973;
return ((function (cs,vec__46967,v,c,inst_46971,inst_46973,inst_46972,inst_46962,state_val_46993,c__44900__auto___47020,out){
return (function (p1__46957_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__46957_SHARP_);
});
;})(cs,vec__46967,v,c,inst_46971,inst_46973,inst_46972,inst_46962,state_val_46993,c__44900__auto___47020,out))
})();
var inst_46977 = cljs.core.filterv.call(null,inst_46976,inst_46962);
var inst_46962__$1 = inst_46977;
var state_46992__$1 = (function (){var statearr_47007 = state_46992;
(statearr_47007[(10)] = inst_46962__$1);

return statearr_47007;
})();
var statearr_47008_47030 = state_46992__$1;
(statearr_47008_47030[(2)] = null);

(statearr_47008_47030[(1)] = (2));


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
});})(c__44900__auto___47020,out))
;
return ((function (switch__44788__auto__,c__44900__auto___47020,out){
return (function() {
var cljs$core$async$state_machine__44789__auto__ = null;
var cljs$core$async$state_machine__44789__auto____0 = (function (){
var statearr_47012 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47012[(0)] = cljs$core$async$state_machine__44789__auto__);

(statearr_47012[(1)] = (1));

return statearr_47012;
});
var cljs$core$async$state_machine__44789__auto____1 = (function (state_46992){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_46992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e47013){if((e47013 instanceof Object)){
var ex__44792__auto__ = e47013;
var statearr_47014_47031 = state_46992;
(statearr_47014_47031[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47032 = state_46992;
state_46992 = G__47032;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
cljs$core$async$state_machine__44789__auto__ = function(state_46992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44789__auto____1.call(this,state_46992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44789__auto____0;
cljs$core$async$state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44789__auto____1;
return cljs$core$async$state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto___47020,out))
})();
var state__44902__auto__ = (function (){var statearr_47015 = f__44901__auto__.call(null);
(statearr_47015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto___47020);

return statearr_47015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto___47020,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args47033 = [];
var len__42146__auto___47082 = arguments.length;
var i__42147__auto___47083 = (0);
while(true){
if((i__42147__auto___47083 < len__42146__auto___47082)){
args47033.push((arguments[i__42147__auto___47083]));

var G__47084 = (i__42147__auto___47083 + (1));
i__42147__auto___47083 = G__47084;
continue;
} else {
}
break;
}

var G__47035 = args47033.length;
switch (G__47035) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47033.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44900__auto___47086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto___47086,out){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto___47086,out){
return (function (state_47059){
var state_val_47060 = (state_47059[(1)]);
if((state_val_47060 === (7))){
var inst_47041 = (state_47059[(7)]);
var inst_47041__$1 = (state_47059[(2)]);
var inst_47042 = (inst_47041__$1 == null);
var inst_47043 = cljs.core.not.call(null,inst_47042);
var state_47059__$1 = (function (){var statearr_47061 = state_47059;
(statearr_47061[(7)] = inst_47041__$1);

return statearr_47061;
})();
if(inst_47043){
var statearr_47062_47087 = state_47059__$1;
(statearr_47062_47087[(1)] = (8));

} else {
var statearr_47063_47088 = state_47059__$1;
(statearr_47063_47088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (1))){
var inst_47036 = (0);
var state_47059__$1 = (function (){var statearr_47064 = state_47059;
(statearr_47064[(8)] = inst_47036);

return statearr_47064;
})();
var statearr_47065_47089 = state_47059__$1;
(statearr_47065_47089[(2)] = null);

(statearr_47065_47089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (4))){
var state_47059__$1 = state_47059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47059__$1,(7),ch);
} else {
if((state_val_47060 === (6))){
var inst_47054 = (state_47059[(2)]);
var state_47059__$1 = state_47059;
var statearr_47066_47090 = state_47059__$1;
(statearr_47066_47090[(2)] = inst_47054);

(statearr_47066_47090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (3))){
var inst_47056 = (state_47059[(2)]);
var inst_47057 = cljs.core.async.close_BANG_.call(null,out);
var state_47059__$1 = (function (){var statearr_47067 = state_47059;
(statearr_47067[(9)] = inst_47056);

return statearr_47067;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47059__$1,inst_47057);
} else {
if((state_val_47060 === (2))){
var inst_47036 = (state_47059[(8)]);
var inst_47038 = (inst_47036 < n);
var state_47059__$1 = state_47059;
if(cljs.core.truth_(inst_47038)){
var statearr_47068_47091 = state_47059__$1;
(statearr_47068_47091[(1)] = (4));

} else {
var statearr_47069_47092 = state_47059__$1;
(statearr_47069_47092[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (11))){
var inst_47036 = (state_47059[(8)]);
var inst_47046 = (state_47059[(2)]);
var inst_47047 = (inst_47036 + (1));
var inst_47036__$1 = inst_47047;
var state_47059__$1 = (function (){var statearr_47070 = state_47059;
(statearr_47070[(10)] = inst_47046);

(statearr_47070[(8)] = inst_47036__$1);

return statearr_47070;
})();
var statearr_47071_47093 = state_47059__$1;
(statearr_47071_47093[(2)] = null);

(statearr_47071_47093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (9))){
var state_47059__$1 = state_47059;
var statearr_47072_47094 = state_47059__$1;
(statearr_47072_47094[(2)] = null);

(statearr_47072_47094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (5))){
var state_47059__$1 = state_47059;
var statearr_47073_47095 = state_47059__$1;
(statearr_47073_47095[(2)] = null);

(statearr_47073_47095[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (10))){
var inst_47051 = (state_47059[(2)]);
var state_47059__$1 = state_47059;
var statearr_47074_47096 = state_47059__$1;
(statearr_47074_47096[(2)] = inst_47051);

(statearr_47074_47096[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47060 === (8))){
var inst_47041 = (state_47059[(7)]);
var state_47059__$1 = state_47059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47059__$1,(11),out,inst_47041);
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
});})(c__44900__auto___47086,out))
;
return ((function (switch__44788__auto__,c__44900__auto___47086,out){
return (function() {
var cljs$core$async$state_machine__44789__auto__ = null;
var cljs$core$async$state_machine__44789__auto____0 = (function (){
var statearr_47078 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47078[(0)] = cljs$core$async$state_machine__44789__auto__);

(statearr_47078[(1)] = (1));

return statearr_47078;
});
var cljs$core$async$state_machine__44789__auto____1 = (function (state_47059){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_47059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e47079){if((e47079 instanceof Object)){
var ex__44792__auto__ = e47079;
var statearr_47080_47097 = state_47059;
(statearr_47080_47097[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47098 = state_47059;
state_47059 = G__47098;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
cljs$core$async$state_machine__44789__auto__ = function(state_47059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44789__auto____1.call(this,state_47059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44789__auto____0;
cljs$core$async$state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44789__auto____1;
return cljs$core$async$state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto___47086,out))
})();
var state__44902__auto__ = (function (){var statearr_47081 = f__44901__auto__.call(null);
(statearr_47081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto___47086);

return statearr_47081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto___47086,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async47106 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47106 = (function (map_LT_,f,ch,meta47107){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta47107 = meta47107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47108,meta47107__$1){
var self__ = this;
var _47108__$1 = this;
return (new cljs.core.async.t_cljs$core$async47106(self__.map_LT_,self__.f,self__.ch,meta47107__$1));
});

cljs.core.async.t_cljs$core$async47106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47108){
var self__ = this;
var _47108__$1 = this;
return self__.meta47107;
});

cljs.core.async.t_cljs$core$async47106.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async47106.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47106.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47106.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async47106.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async47109 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47109 = (function (map_LT_,f,ch,meta47107,_,fn1,meta47110){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta47107 = meta47107;
this._ = _;
this.fn1 = fn1;
this.meta47110 = meta47110;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_47111,meta47110__$1){
var self__ = this;
var _47111__$1 = this;
return (new cljs.core.async.t_cljs$core$async47109(self__.map_LT_,self__.f,self__.ch,self__.meta47107,self__._,self__.fn1,meta47110__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async47109.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_47111){
var self__ = this;
var _47111__$1 = this;
return self__.meta47110;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47109.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async47109.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47109.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47109.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__47099_SHARP_){
return f1.call(null,(((p1__47099_SHARP_ == null))?null:self__.f.call(null,p1__47099_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async47109.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47107","meta47107",-1659998941,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47106","cljs.core.async/t_cljs$core$async47106",-1319964414,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47110","meta47110",-1966437081,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47109.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47109.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47109";

cljs.core.async.t_cljs$core$async47109.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__41677__auto__,writer__41678__auto__,opt__41679__auto__){
return cljs.core._write.call(null,writer__41678__auto__,"cljs.core.async/t_cljs$core$async47109");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async47109 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47109(map_LT___$1,f__$1,ch__$1,meta47107__$1,___$2,fn1__$1,meta47110){
return (new cljs.core.async.t_cljs$core$async47109(map_LT___$1,f__$1,ch__$1,meta47107__$1,___$2,fn1__$1,meta47110));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async47109(self__.map_LT_,self__.f,self__.ch,self__.meta47107,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__41059__auto__ = ret;
if(cljs.core.truth_(and__41059__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__41059__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async47106.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async47106.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async47106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47107","meta47107",-1659998941,null)], null);
});

cljs.core.async.t_cljs$core$async47106.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47106";

cljs.core.async.t_cljs$core$async47106.cljs$lang$ctorPrWriter = (function (this__41677__auto__,writer__41678__auto__,opt__41679__auto__){
return cljs.core._write.call(null,writer__41678__auto__,"cljs.core.async/t_cljs$core$async47106");
});

cljs.core.async.__GT_t_cljs$core$async47106 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47106(map_LT___$1,f__$1,ch__$1,meta47107){
return (new cljs.core.async.t_cljs$core$async47106(map_LT___$1,f__$1,ch__$1,meta47107));
});

}

return (new cljs.core.async.t_cljs$core$async47106(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async47115 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47115 = (function (map_GT_,f,ch,meta47116){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta47116 = meta47116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47117,meta47116__$1){
var self__ = this;
var _47117__$1 = this;
return (new cljs.core.async.t_cljs$core$async47115(self__.map_GT_,self__.f,self__.ch,meta47116__$1));
});

cljs.core.async.t_cljs$core$async47115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47117){
var self__ = this;
var _47117__$1 = this;
return self__.meta47116;
});

cljs.core.async.t_cljs$core$async47115.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async47115.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47115.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async47115.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47115.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async47115.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async47115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47116","meta47116",569411692,null)], null);
});

cljs.core.async.t_cljs$core$async47115.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47115";

cljs.core.async.t_cljs$core$async47115.cljs$lang$ctorPrWriter = (function (this__41677__auto__,writer__41678__auto__,opt__41679__auto__){
return cljs.core._write.call(null,writer__41678__auto__,"cljs.core.async/t_cljs$core$async47115");
});

cljs.core.async.__GT_t_cljs$core$async47115 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47115(map_GT___$1,f__$1,ch__$1,meta47116){
return (new cljs.core.async.t_cljs$core$async47115(map_GT___$1,f__$1,ch__$1,meta47116));
});

}

return (new cljs.core.async.t_cljs$core$async47115(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async47121 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47121 = (function (filter_GT_,p,ch,meta47122){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta47122 = meta47122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47123,meta47122__$1){
var self__ = this;
var _47123__$1 = this;
return (new cljs.core.async.t_cljs$core$async47121(self__.filter_GT_,self__.p,self__.ch,meta47122__$1));
});

cljs.core.async.t_cljs$core$async47121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47123){
var self__ = this;
var _47123__$1 = this;
return self__.meta47122;
});

cljs.core.async.t_cljs$core$async47121.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async47121.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47121.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47121.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async47121.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47121.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async47121.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async47121.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47122","meta47122",18152143,null)], null);
});

cljs.core.async.t_cljs$core$async47121.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47121";

cljs.core.async.t_cljs$core$async47121.cljs$lang$ctorPrWriter = (function (this__41677__auto__,writer__41678__auto__,opt__41679__auto__){
return cljs.core._write.call(null,writer__41678__auto__,"cljs.core.async/t_cljs$core$async47121");
});

cljs.core.async.__GT_t_cljs$core$async47121 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47121(filter_GT___$1,p__$1,ch__$1,meta47122){
return (new cljs.core.async.t_cljs$core$async47121(filter_GT___$1,p__$1,ch__$1,meta47122));
});

}

return (new cljs.core.async.t_cljs$core$async47121(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args47124 = [];
var len__42146__auto___47168 = arguments.length;
var i__42147__auto___47169 = (0);
while(true){
if((i__42147__auto___47169 < len__42146__auto___47168)){
args47124.push((arguments[i__42147__auto___47169]));

var G__47170 = (i__42147__auto___47169 + (1));
i__42147__auto___47169 = G__47170;
continue;
} else {
}
break;
}

var G__47126 = args47124.length;
switch (G__47126) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47124.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44900__auto___47172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto___47172,out){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto___47172,out){
return (function (state_47147){
var state_val_47148 = (state_47147[(1)]);
if((state_val_47148 === (7))){
var inst_47143 = (state_47147[(2)]);
var state_47147__$1 = state_47147;
var statearr_47149_47173 = state_47147__$1;
(statearr_47149_47173[(2)] = inst_47143);

(statearr_47149_47173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47148 === (1))){
var state_47147__$1 = state_47147;
var statearr_47150_47174 = state_47147__$1;
(statearr_47150_47174[(2)] = null);

(statearr_47150_47174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47148 === (4))){
var inst_47129 = (state_47147[(7)]);
var inst_47129__$1 = (state_47147[(2)]);
var inst_47130 = (inst_47129__$1 == null);
var state_47147__$1 = (function (){var statearr_47151 = state_47147;
(statearr_47151[(7)] = inst_47129__$1);

return statearr_47151;
})();
if(cljs.core.truth_(inst_47130)){
var statearr_47152_47175 = state_47147__$1;
(statearr_47152_47175[(1)] = (5));

} else {
var statearr_47153_47176 = state_47147__$1;
(statearr_47153_47176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47148 === (6))){
var inst_47129 = (state_47147[(7)]);
var inst_47134 = p.call(null,inst_47129);
var state_47147__$1 = state_47147;
if(cljs.core.truth_(inst_47134)){
var statearr_47154_47177 = state_47147__$1;
(statearr_47154_47177[(1)] = (8));

} else {
var statearr_47155_47178 = state_47147__$1;
(statearr_47155_47178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47148 === (3))){
var inst_47145 = (state_47147[(2)]);
var state_47147__$1 = state_47147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47147__$1,inst_47145);
} else {
if((state_val_47148 === (2))){
var state_47147__$1 = state_47147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47147__$1,(4),ch);
} else {
if((state_val_47148 === (11))){
var inst_47137 = (state_47147[(2)]);
var state_47147__$1 = state_47147;
var statearr_47156_47179 = state_47147__$1;
(statearr_47156_47179[(2)] = inst_47137);

(statearr_47156_47179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47148 === (9))){
var state_47147__$1 = state_47147;
var statearr_47157_47180 = state_47147__$1;
(statearr_47157_47180[(2)] = null);

(statearr_47157_47180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47148 === (5))){
var inst_47132 = cljs.core.async.close_BANG_.call(null,out);
var state_47147__$1 = state_47147;
var statearr_47158_47181 = state_47147__$1;
(statearr_47158_47181[(2)] = inst_47132);

(statearr_47158_47181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47148 === (10))){
var inst_47140 = (state_47147[(2)]);
var state_47147__$1 = (function (){var statearr_47159 = state_47147;
(statearr_47159[(8)] = inst_47140);

return statearr_47159;
})();
var statearr_47160_47182 = state_47147__$1;
(statearr_47160_47182[(2)] = null);

(statearr_47160_47182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47148 === (8))){
var inst_47129 = (state_47147[(7)]);
var state_47147__$1 = state_47147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47147__$1,(11),out,inst_47129);
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
});})(c__44900__auto___47172,out))
;
return ((function (switch__44788__auto__,c__44900__auto___47172,out){
return (function() {
var cljs$core$async$state_machine__44789__auto__ = null;
var cljs$core$async$state_machine__44789__auto____0 = (function (){
var statearr_47164 = [null,null,null,null,null,null,null,null,null];
(statearr_47164[(0)] = cljs$core$async$state_machine__44789__auto__);

(statearr_47164[(1)] = (1));

return statearr_47164;
});
var cljs$core$async$state_machine__44789__auto____1 = (function (state_47147){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_47147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e47165){if((e47165 instanceof Object)){
var ex__44792__auto__ = e47165;
var statearr_47166_47183 = state_47147;
(statearr_47166_47183[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47184 = state_47147;
state_47147 = G__47184;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
cljs$core$async$state_machine__44789__auto__ = function(state_47147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44789__auto____1.call(this,state_47147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44789__auto____0;
cljs$core$async$state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44789__auto____1;
return cljs$core$async$state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto___47172,out))
})();
var state__44902__auto__ = (function (){var statearr_47167 = f__44901__auto__.call(null);
(statearr_47167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto___47172);

return statearr_47167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto___47172,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args47185 = [];
var len__42146__auto___47188 = arguments.length;
var i__42147__auto___47189 = (0);
while(true){
if((i__42147__auto___47189 < len__42146__auto___47188)){
args47185.push((arguments[i__42147__auto___47189]));

var G__47190 = (i__42147__auto___47189 + (1));
i__42147__auto___47189 = G__47190;
continue;
} else {
}
break;
}

var G__47187 = args47185.length;
switch (G__47187) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47185.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__44900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto__){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto__){
return (function (state_47357){
var state_val_47358 = (state_47357[(1)]);
if((state_val_47358 === (7))){
var inst_47353 = (state_47357[(2)]);
var state_47357__$1 = state_47357;
var statearr_47359_47400 = state_47357__$1;
(statearr_47359_47400[(2)] = inst_47353);

(statearr_47359_47400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47358 === (20))){
var inst_47323 = (state_47357[(7)]);
var inst_47334 = (state_47357[(2)]);
var inst_47335 = cljs.core.next.call(null,inst_47323);
var inst_47309 = inst_47335;
var inst_47310 = null;
var inst_47311 = (0);
var inst_47312 = (0);
var state_47357__$1 = (function (){var statearr_47360 = state_47357;
(statearr_47360[(8)] = inst_47310);

(statearr_47360[(9)] = inst_47311);

(statearr_47360[(10)] = inst_47309);

(statearr_47360[(11)] = inst_47334);

(statearr_47360[(12)] = inst_47312);

return statearr_47360;
})();
var statearr_47361_47401 = state_47357__$1;
(statearr_47361_47401[(2)] = null);

(statearr_47361_47401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47358 === (1))){
var state_47357__$1 = state_47357;
var statearr_47362_47402 = state_47357__$1;
(statearr_47362_47402[(2)] = null);

(statearr_47362_47402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47358 === (4))){
var inst_47298 = (state_47357[(13)]);
var inst_47298__$1 = (state_47357[(2)]);
var inst_47299 = (inst_47298__$1 == null);
var state_47357__$1 = (function (){var statearr_47363 = state_47357;
(statearr_47363[(13)] = inst_47298__$1);

return statearr_47363;
})();
if(cljs.core.truth_(inst_47299)){
var statearr_47364_47403 = state_47357__$1;
(statearr_47364_47403[(1)] = (5));

} else {
var statearr_47365_47404 = state_47357__$1;
(statearr_47365_47404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47358 === (15))){
var state_47357__$1 = state_47357;
var statearr_47369_47405 = state_47357__$1;
(statearr_47369_47405[(2)] = null);

(statearr_47369_47405[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47358 === (21))){
var state_47357__$1 = state_47357;
var statearr_47370_47406 = state_47357__$1;
(statearr_47370_47406[(2)] = null);

(statearr_47370_47406[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47358 === (13))){
var inst_47310 = (state_47357[(8)]);
var inst_47311 = (state_47357[(9)]);
var inst_47309 = (state_47357[(10)]);
var inst_47312 = (state_47357[(12)]);
var inst_47319 = (state_47357[(2)]);
var inst_47320 = (inst_47312 + (1));
var tmp47366 = inst_47310;
var tmp47367 = inst_47311;
var tmp47368 = inst_47309;
var inst_47309__$1 = tmp47368;
var inst_47310__$1 = tmp47366;
var inst_47311__$1 = tmp47367;
var inst_47312__$1 = inst_47320;
var state_47357__$1 = (function (){var statearr_47371 = state_47357;
(statearr_47371[(8)] = inst_47310__$1);

(statearr_47371[(14)] = inst_47319);

(statearr_47371[(9)] = inst_47311__$1);

(statearr_47371[(10)] = inst_47309__$1);

(statearr_47371[(12)] = inst_47312__$1);

return statearr_47371;
})();
var statearr_47372_47407 = state_47357__$1;
(statearr_47372_47407[(2)] = null);

(statearr_47372_47407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47358 === (22))){
var state_47357__$1 = state_47357;
var statearr_47373_47408 = state_47357__$1;
(statearr_47373_47408[(2)] = null);

(statearr_47373_47408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47358 === (6))){
var inst_47298 = (state_47357[(13)]);
var inst_47307 = f.call(null,inst_47298);
var inst_47308 = cljs.core.seq.call(null,inst_47307);
var inst_47309 = inst_47308;
var inst_47310 = null;
var inst_47311 = (0);
var inst_47312 = (0);
var state_47357__$1 = (function (){var statearr_47374 = state_47357;
(statearr_47374[(8)] = inst_47310);

(statearr_47374[(9)] = inst_47311);

(statearr_47374[(10)] = inst_47309);

(statearr_47374[(12)] = inst_47312);

return statearr_47374;
})();
var statearr_47375_47409 = state_47357__$1;
(statearr_47375_47409[(2)] = null);

(statearr_47375_47409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47358 === (17))){
var inst_47323 = (state_47357[(7)]);
var inst_47327 = cljs.core.chunk_first.call(null,inst_47323);
var inst_47328 = cljs.core.chunk_rest.call(null,inst_47323);
var inst_47329 = cljs.core.count.call(null,inst_47327);
var inst_47309 = inst_47328;
var inst_47310 = inst_47327;
var inst_47311 = inst_47329;
var inst_47312 = (0);
var state_47357__$1 = (function (){var statearr_47376 = state_47357;
(statearr_47376[(8)] = inst_47310);

(statearr_47376[(9)] = inst_47311);

(statearr_47376[(10)] = inst_47309);

(statearr_47376[(12)] = inst_47312);

return statearr_47376;
})();
var statearr_47377_47410 = state_47357__$1;
(statearr_47377_47410[(2)] = null);

(statearr_47377_47410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47358 === (3))){
var inst_47355 = (state_47357[(2)]);
var state_47357__$1 = state_47357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47357__$1,inst_47355);
} else {
if((state_val_47358 === (12))){
var inst_47343 = (state_47357[(2)]);
var state_47357__$1 = state_47357;
var statearr_47378_47411 = state_47357__$1;
(statearr_47378_47411[(2)] = inst_47343);

(statearr_47378_47411[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47358 === (2))){
var state_47357__$1 = state_47357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47357__$1,(4),in$);
} else {
if((state_val_47358 === (23))){
var inst_47351 = (state_47357[(2)]);
var state_47357__$1 = state_47357;
var statearr_47379_47412 = state_47357__$1;
(statearr_47379_47412[(2)] = inst_47351);

(statearr_47379_47412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47358 === (19))){
var inst_47338 = (state_47357[(2)]);
var state_47357__$1 = state_47357;
var statearr_47380_47413 = state_47357__$1;
(statearr_47380_47413[(2)] = inst_47338);

(statearr_47380_47413[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47358 === (11))){
var inst_47309 = (state_47357[(10)]);
var inst_47323 = (state_47357[(7)]);
var inst_47323__$1 = cljs.core.seq.call(null,inst_47309);
var state_47357__$1 = (function (){var statearr_47381 = state_47357;
(statearr_47381[(7)] = inst_47323__$1);

return statearr_47381;
})();
if(inst_47323__$1){
var statearr_47382_47414 = state_47357__$1;
(statearr_47382_47414[(1)] = (14));

} else {
var statearr_47383_47415 = state_47357__$1;
(statearr_47383_47415[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47358 === (9))){
var inst_47345 = (state_47357[(2)]);
var inst_47346 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_47357__$1 = (function (){var statearr_47384 = state_47357;
(statearr_47384[(15)] = inst_47345);

return statearr_47384;
})();
if(cljs.core.truth_(inst_47346)){
var statearr_47385_47416 = state_47357__$1;
(statearr_47385_47416[(1)] = (21));

} else {
var statearr_47386_47417 = state_47357__$1;
(statearr_47386_47417[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47358 === (5))){
var inst_47301 = cljs.core.async.close_BANG_.call(null,out);
var state_47357__$1 = state_47357;
var statearr_47387_47418 = state_47357__$1;
(statearr_47387_47418[(2)] = inst_47301);

(statearr_47387_47418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47358 === (14))){
var inst_47323 = (state_47357[(7)]);
var inst_47325 = cljs.core.chunked_seq_QMARK_.call(null,inst_47323);
var state_47357__$1 = state_47357;
if(inst_47325){
var statearr_47388_47419 = state_47357__$1;
(statearr_47388_47419[(1)] = (17));

} else {
var statearr_47389_47420 = state_47357__$1;
(statearr_47389_47420[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47358 === (16))){
var inst_47341 = (state_47357[(2)]);
var state_47357__$1 = state_47357;
var statearr_47390_47421 = state_47357__$1;
(statearr_47390_47421[(2)] = inst_47341);

(statearr_47390_47421[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47358 === (10))){
var inst_47310 = (state_47357[(8)]);
var inst_47312 = (state_47357[(12)]);
var inst_47317 = cljs.core._nth.call(null,inst_47310,inst_47312);
var state_47357__$1 = state_47357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47357__$1,(13),out,inst_47317);
} else {
if((state_val_47358 === (18))){
var inst_47323 = (state_47357[(7)]);
var inst_47332 = cljs.core.first.call(null,inst_47323);
var state_47357__$1 = state_47357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47357__$1,(20),out,inst_47332);
} else {
if((state_val_47358 === (8))){
var inst_47311 = (state_47357[(9)]);
var inst_47312 = (state_47357[(12)]);
var inst_47314 = (inst_47312 < inst_47311);
var inst_47315 = inst_47314;
var state_47357__$1 = state_47357;
if(cljs.core.truth_(inst_47315)){
var statearr_47391_47422 = state_47357__$1;
(statearr_47391_47422[(1)] = (10));

} else {
var statearr_47392_47423 = state_47357__$1;
(statearr_47392_47423[(1)] = (11));

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
});})(c__44900__auto__))
;
return ((function (switch__44788__auto__,c__44900__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__44789__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44789__auto____0 = (function (){
var statearr_47396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47396[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44789__auto__);

(statearr_47396[(1)] = (1));

return statearr_47396;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44789__auto____1 = (function (state_47357){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_47357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e47397){if((e47397 instanceof Object)){
var ex__44792__auto__ = e47397;
var statearr_47398_47424 = state_47357;
(statearr_47398_47424[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47425 = state_47357;
state_47357 = G__47425;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44789__auto__ = function(state_47357){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44789__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44789__auto____1.call(this,state_47357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44789__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44789__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto__))
})();
var state__44902__auto__ = (function (){var statearr_47399 = f__44901__auto__.call(null);
(statearr_47399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto__);

return statearr_47399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto__))
);

return c__44900__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args47426 = [];
var len__42146__auto___47429 = arguments.length;
var i__42147__auto___47430 = (0);
while(true){
if((i__42147__auto___47430 < len__42146__auto___47429)){
args47426.push((arguments[i__42147__auto___47430]));

var G__47431 = (i__42147__auto___47430 + (1));
i__42147__auto___47430 = G__47431;
continue;
} else {
}
break;
}

var G__47428 = args47426.length;
switch (G__47428) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47426.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args47433 = [];
var len__42146__auto___47436 = arguments.length;
var i__42147__auto___47437 = (0);
while(true){
if((i__42147__auto___47437 < len__42146__auto___47436)){
args47433.push((arguments[i__42147__auto___47437]));

var G__47438 = (i__42147__auto___47437 + (1));
i__42147__auto___47437 = G__47438;
continue;
} else {
}
break;
}

var G__47435 = args47433.length;
switch (G__47435) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47433.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args47440 = [];
var len__42146__auto___47491 = arguments.length;
var i__42147__auto___47492 = (0);
while(true){
if((i__42147__auto___47492 < len__42146__auto___47491)){
args47440.push((arguments[i__42147__auto___47492]));

var G__47493 = (i__42147__auto___47492 + (1));
i__42147__auto___47492 = G__47493;
continue;
} else {
}
break;
}

var G__47442 = args47440.length;
switch (G__47442) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47440.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44900__auto___47495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto___47495,out){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto___47495,out){
return (function (state_47466){
var state_val_47467 = (state_47466[(1)]);
if((state_val_47467 === (7))){
var inst_47461 = (state_47466[(2)]);
var state_47466__$1 = state_47466;
var statearr_47468_47496 = state_47466__$1;
(statearr_47468_47496[(2)] = inst_47461);

(statearr_47468_47496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47467 === (1))){
var inst_47443 = null;
var state_47466__$1 = (function (){var statearr_47469 = state_47466;
(statearr_47469[(7)] = inst_47443);

return statearr_47469;
})();
var statearr_47470_47497 = state_47466__$1;
(statearr_47470_47497[(2)] = null);

(statearr_47470_47497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47467 === (4))){
var inst_47446 = (state_47466[(8)]);
var inst_47446__$1 = (state_47466[(2)]);
var inst_47447 = (inst_47446__$1 == null);
var inst_47448 = cljs.core.not.call(null,inst_47447);
var state_47466__$1 = (function (){var statearr_47471 = state_47466;
(statearr_47471[(8)] = inst_47446__$1);

return statearr_47471;
})();
if(inst_47448){
var statearr_47472_47498 = state_47466__$1;
(statearr_47472_47498[(1)] = (5));

} else {
var statearr_47473_47499 = state_47466__$1;
(statearr_47473_47499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47467 === (6))){
var state_47466__$1 = state_47466;
var statearr_47474_47500 = state_47466__$1;
(statearr_47474_47500[(2)] = null);

(statearr_47474_47500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47467 === (3))){
var inst_47463 = (state_47466[(2)]);
var inst_47464 = cljs.core.async.close_BANG_.call(null,out);
var state_47466__$1 = (function (){var statearr_47475 = state_47466;
(statearr_47475[(9)] = inst_47463);

return statearr_47475;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47466__$1,inst_47464);
} else {
if((state_val_47467 === (2))){
var state_47466__$1 = state_47466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47466__$1,(4),ch);
} else {
if((state_val_47467 === (11))){
var inst_47446 = (state_47466[(8)]);
var inst_47455 = (state_47466[(2)]);
var inst_47443 = inst_47446;
var state_47466__$1 = (function (){var statearr_47476 = state_47466;
(statearr_47476[(10)] = inst_47455);

(statearr_47476[(7)] = inst_47443);

return statearr_47476;
})();
var statearr_47477_47501 = state_47466__$1;
(statearr_47477_47501[(2)] = null);

(statearr_47477_47501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47467 === (9))){
var inst_47446 = (state_47466[(8)]);
var state_47466__$1 = state_47466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47466__$1,(11),out,inst_47446);
} else {
if((state_val_47467 === (5))){
var inst_47443 = (state_47466[(7)]);
var inst_47446 = (state_47466[(8)]);
var inst_47450 = cljs.core._EQ_.call(null,inst_47446,inst_47443);
var state_47466__$1 = state_47466;
if(inst_47450){
var statearr_47479_47502 = state_47466__$1;
(statearr_47479_47502[(1)] = (8));

} else {
var statearr_47480_47503 = state_47466__$1;
(statearr_47480_47503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47467 === (10))){
var inst_47458 = (state_47466[(2)]);
var state_47466__$1 = state_47466;
var statearr_47481_47504 = state_47466__$1;
(statearr_47481_47504[(2)] = inst_47458);

(statearr_47481_47504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47467 === (8))){
var inst_47443 = (state_47466[(7)]);
var tmp47478 = inst_47443;
var inst_47443__$1 = tmp47478;
var state_47466__$1 = (function (){var statearr_47482 = state_47466;
(statearr_47482[(7)] = inst_47443__$1);

return statearr_47482;
})();
var statearr_47483_47505 = state_47466__$1;
(statearr_47483_47505[(2)] = null);

(statearr_47483_47505[(1)] = (2));


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
});})(c__44900__auto___47495,out))
;
return ((function (switch__44788__auto__,c__44900__auto___47495,out){
return (function() {
var cljs$core$async$state_machine__44789__auto__ = null;
var cljs$core$async$state_machine__44789__auto____0 = (function (){
var statearr_47487 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47487[(0)] = cljs$core$async$state_machine__44789__auto__);

(statearr_47487[(1)] = (1));

return statearr_47487;
});
var cljs$core$async$state_machine__44789__auto____1 = (function (state_47466){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_47466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e47488){if((e47488 instanceof Object)){
var ex__44792__auto__ = e47488;
var statearr_47489_47506 = state_47466;
(statearr_47489_47506[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47507 = state_47466;
state_47466 = G__47507;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
cljs$core$async$state_machine__44789__auto__ = function(state_47466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44789__auto____1.call(this,state_47466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44789__auto____0;
cljs$core$async$state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44789__auto____1;
return cljs$core$async$state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto___47495,out))
})();
var state__44902__auto__ = (function (){var statearr_47490 = f__44901__auto__.call(null);
(statearr_47490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto___47495);

return statearr_47490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto___47495,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args47508 = [];
var len__42146__auto___47578 = arguments.length;
var i__42147__auto___47579 = (0);
while(true){
if((i__42147__auto___47579 < len__42146__auto___47578)){
args47508.push((arguments[i__42147__auto___47579]));

var G__47580 = (i__42147__auto___47579 + (1));
i__42147__auto___47579 = G__47580;
continue;
} else {
}
break;
}

var G__47510 = args47508.length;
switch (G__47510) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47508.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44900__auto___47582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto___47582,out){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto___47582,out){
return (function (state_47548){
var state_val_47549 = (state_47548[(1)]);
if((state_val_47549 === (7))){
var inst_47544 = (state_47548[(2)]);
var state_47548__$1 = state_47548;
var statearr_47550_47583 = state_47548__$1;
(statearr_47550_47583[(2)] = inst_47544);

(statearr_47550_47583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (1))){
var inst_47511 = (new Array(n));
var inst_47512 = inst_47511;
var inst_47513 = (0);
var state_47548__$1 = (function (){var statearr_47551 = state_47548;
(statearr_47551[(7)] = inst_47512);

(statearr_47551[(8)] = inst_47513);

return statearr_47551;
})();
var statearr_47552_47584 = state_47548__$1;
(statearr_47552_47584[(2)] = null);

(statearr_47552_47584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (4))){
var inst_47516 = (state_47548[(9)]);
var inst_47516__$1 = (state_47548[(2)]);
var inst_47517 = (inst_47516__$1 == null);
var inst_47518 = cljs.core.not.call(null,inst_47517);
var state_47548__$1 = (function (){var statearr_47553 = state_47548;
(statearr_47553[(9)] = inst_47516__$1);

return statearr_47553;
})();
if(inst_47518){
var statearr_47554_47585 = state_47548__$1;
(statearr_47554_47585[(1)] = (5));

} else {
var statearr_47555_47586 = state_47548__$1;
(statearr_47555_47586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (15))){
var inst_47538 = (state_47548[(2)]);
var state_47548__$1 = state_47548;
var statearr_47556_47587 = state_47548__$1;
(statearr_47556_47587[(2)] = inst_47538);

(statearr_47556_47587[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (13))){
var state_47548__$1 = state_47548;
var statearr_47557_47588 = state_47548__$1;
(statearr_47557_47588[(2)] = null);

(statearr_47557_47588[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (6))){
var inst_47513 = (state_47548[(8)]);
var inst_47534 = (inst_47513 > (0));
var state_47548__$1 = state_47548;
if(cljs.core.truth_(inst_47534)){
var statearr_47558_47589 = state_47548__$1;
(statearr_47558_47589[(1)] = (12));

} else {
var statearr_47559_47590 = state_47548__$1;
(statearr_47559_47590[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (3))){
var inst_47546 = (state_47548[(2)]);
var state_47548__$1 = state_47548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47548__$1,inst_47546);
} else {
if((state_val_47549 === (12))){
var inst_47512 = (state_47548[(7)]);
var inst_47536 = cljs.core.vec.call(null,inst_47512);
var state_47548__$1 = state_47548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47548__$1,(15),out,inst_47536);
} else {
if((state_val_47549 === (2))){
var state_47548__$1 = state_47548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47548__$1,(4),ch);
} else {
if((state_val_47549 === (11))){
var inst_47528 = (state_47548[(2)]);
var inst_47529 = (new Array(n));
var inst_47512 = inst_47529;
var inst_47513 = (0);
var state_47548__$1 = (function (){var statearr_47560 = state_47548;
(statearr_47560[(7)] = inst_47512);

(statearr_47560[(8)] = inst_47513);

(statearr_47560[(10)] = inst_47528);

return statearr_47560;
})();
var statearr_47561_47591 = state_47548__$1;
(statearr_47561_47591[(2)] = null);

(statearr_47561_47591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (9))){
var inst_47512 = (state_47548[(7)]);
var inst_47526 = cljs.core.vec.call(null,inst_47512);
var state_47548__$1 = state_47548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47548__$1,(11),out,inst_47526);
} else {
if((state_val_47549 === (5))){
var inst_47512 = (state_47548[(7)]);
var inst_47513 = (state_47548[(8)]);
var inst_47521 = (state_47548[(11)]);
var inst_47516 = (state_47548[(9)]);
var inst_47520 = (inst_47512[inst_47513] = inst_47516);
var inst_47521__$1 = (inst_47513 + (1));
var inst_47522 = (inst_47521__$1 < n);
var state_47548__$1 = (function (){var statearr_47562 = state_47548;
(statearr_47562[(12)] = inst_47520);

(statearr_47562[(11)] = inst_47521__$1);

return statearr_47562;
})();
if(cljs.core.truth_(inst_47522)){
var statearr_47563_47592 = state_47548__$1;
(statearr_47563_47592[(1)] = (8));

} else {
var statearr_47564_47593 = state_47548__$1;
(statearr_47564_47593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (14))){
var inst_47541 = (state_47548[(2)]);
var inst_47542 = cljs.core.async.close_BANG_.call(null,out);
var state_47548__$1 = (function (){var statearr_47566 = state_47548;
(statearr_47566[(13)] = inst_47541);

return statearr_47566;
})();
var statearr_47567_47594 = state_47548__$1;
(statearr_47567_47594[(2)] = inst_47542);

(statearr_47567_47594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (10))){
var inst_47532 = (state_47548[(2)]);
var state_47548__$1 = state_47548;
var statearr_47568_47595 = state_47548__$1;
(statearr_47568_47595[(2)] = inst_47532);

(statearr_47568_47595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (8))){
var inst_47512 = (state_47548[(7)]);
var inst_47521 = (state_47548[(11)]);
var tmp47565 = inst_47512;
var inst_47512__$1 = tmp47565;
var inst_47513 = inst_47521;
var state_47548__$1 = (function (){var statearr_47569 = state_47548;
(statearr_47569[(7)] = inst_47512__$1);

(statearr_47569[(8)] = inst_47513);

return statearr_47569;
})();
var statearr_47570_47596 = state_47548__$1;
(statearr_47570_47596[(2)] = null);

(statearr_47570_47596[(1)] = (2));


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
});})(c__44900__auto___47582,out))
;
return ((function (switch__44788__auto__,c__44900__auto___47582,out){
return (function() {
var cljs$core$async$state_machine__44789__auto__ = null;
var cljs$core$async$state_machine__44789__auto____0 = (function (){
var statearr_47574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47574[(0)] = cljs$core$async$state_machine__44789__auto__);

(statearr_47574[(1)] = (1));

return statearr_47574;
});
var cljs$core$async$state_machine__44789__auto____1 = (function (state_47548){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_47548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e47575){if((e47575 instanceof Object)){
var ex__44792__auto__ = e47575;
var statearr_47576_47597 = state_47548;
(statearr_47576_47597[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47598 = state_47548;
state_47548 = G__47598;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
cljs$core$async$state_machine__44789__auto__ = function(state_47548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44789__auto____1.call(this,state_47548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44789__auto____0;
cljs$core$async$state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44789__auto____1;
return cljs$core$async$state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto___47582,out))
})();
var state__44902__auto__ = (function (){var statearr_47577 = f__44901__auto__.call(null);
(statearr_47577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto___47582);

return statearr_47577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto___47582,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args47599 = [];
var len__42146__auto___47673 = arguments.length;
var i__42147__auto___47674 = (0);
while(true){
if((i__42147__auto___47674 < len__42146__auto___47673)){
args47599.push((arguments[i__42147__auto___47674]));

var G__47675 = (i__42147__auto___47674 + (1));
i__42147__auto___47674 = G__47675;
continue;
} else {
}
break;
}

var G__47601 = args47599.length;
switch (G__47601) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47599.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44900__auto___47677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44900__auto___47677,out){
return (function (){
var f__44901__auto__ = (function (){var switch__44788__auto__ = ((function (c__44900__auto___47677,out){
return (function (state_47643){
var state_val_47644 = (state_47643[(1)]);
if((state_val_47644 === (7))){
var inst_47639 = (state_47643[(2)]);
var state_47643__$1 = state_47643;
var statearr_47645_47678 = state_47643__$1;
(statearr_47645_47678[(2)] = inst_47639);

(statearr_47645_47678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47644 === (1))){
var inst_47602 = [];
var inst_47603 = inst_47602;
var inst_47604 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47643__$1 = (function (){var statearr_47646 = state_47643;
(statearr_47646[(7)] = inst_47604);

(statearr_47646[(8)] = inst_47603);

return statearr_47646;
})();
var statearr_47647_47679 = state_47643__$1;
(statearr_47647_47679[(2)] = null);

(statearr_47647_47679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47644 === (4))){
var inst_47607 = (state_47643[(9)]);
var inst_47607__$1 = (state_47643[(2)]);
var inst_47608 = (inst_47607__$1 == null);
var inst_47609 = cljs.core.not.call(null,inst_47608);
var state_47643__$1 = (function (){var statearr_47648 = state_47643;
(statearr_47648[(9)] = inst_47607__$1);

return statearr_47648;
})();
if(inst_47609){
var statearr_47649_47680 = state_47643__$1;
(statearr_47649_47680[(1)] = (5));

} else {
var statearr_47650_47681 = state_47643__$1;
(statearr_47650_47681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47644 === (15))){
var inst_47633 = (state_47643[(2)]);
var state_47643__$1 = state_47643;
var statearr_47651_47682 = state_47643__$1;
(statearr_47651_47682[(2)] = inst_47633);

(statearr_47651_47682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47644 === (13))){
var state_47643__$1 = state_47643;
var statearr_47652_47683 = state_47643__$1;
(statearr_47652_47683[(2)] = null);

(statearr_47652_47683[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47644 === (6))){
var inst_47603 = (state_47643[(8)]);
var inst_47628 = inst_47603.length;
var inst_47629 = (inst_47628 > (0));
var state_47643__$1 = state_47643;
if(cljs.core.truth_(inst_47629)){
var statearr_47653_47684 = state_47643__$1;
(statearr_47653_47684[(1)] = (12));

} else {
var statearr_47654_47685 = state_47643__$1;
(statearr_47654_47685[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47644 === (3))){
var inst_47641 = (state_47643[(2)]);
var state_47643__$1 = state_47643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47643__$1,inst_47641);
} else {
if((state_val_47644 === (12))){
var inst_47603 = (state_47643[(8)]);
var inst_47631 = cljs.core.vec.call(null,inst_47603);
var state_47643__$1 = state_47643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47643__$1,(15),out,inst_47631);
} else {
if((state_val_47644 === (2))){
var state_47643__$1 = state_47643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47643__$1,(4),ch);
} else {
if((state_val_47644 === (11))){
var inst_47607 = (state_47643[(9)]);
var inst_47611 = (state_47643[(10)]);
var inst_47621 = (state_47643[(2)]);
var inst_47622 = [];
var inst_47623 = inst_47622.push(inst_47607);
var inst_47603 = inst_47622;
var inst_47604 = inst_47611;
var state_47643__$1 = (function (){var statearr_47655 = state_47643;
(statearr_47655[(7)] = inst_47604);

(statearr_47655[(11)] = inst_47621);

(statearr_47655[(8)] = inst_47603);

(statearr_47655[(12)] = inst_47623);

return statearr_47655;
})();
var statearr_47656_47686 = state_47643__$1;
(statearr_47656_47686[(2)] = null);

(statearr_47656_47686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47644 === (9))){
var inst_47603 = (state_47643[(8)]);
var inst_47619 = cljs.core.vec.call(null,inst_47603);
var state_47643__$1 = state_47643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47643__$1,(11),out,inst_47619);
} else {
if((state_val_47644 === (5))){
var inst_47604 = (state_47643[(7)]);
var inst_47607 = (state_47643[(9)]);
var inst_47611 = (state_47643[(10)]);
var inst_47611__$1 = f.call(null,inst_47607);
var inst_47612 = cljs.core._EQ_.call(null,inst_47611__$1,inst_47604);
var inst_47613 = cljs.core.keyword_identical_QMARK_.call(null,inst_47604,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47614 = (inst_47612) || (inst_47613);
var state_47643__$1 = (function (){var statearr_47657 = state_47643;
(statearr_47657[(10)] = inst_47611__$1);

return statearr_47657;
})();
if(cljs.core.truth_(inst_47614)){
var statearr_47658_47687 = state_47643__$1;
(statearr_47658_47687[(1)] = (8));

} else {
var statearr_47659_47688 = state_47643__$1;
(statearr_47659_47688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47644 === (14))){
var inst_47636 = (state_47643[(2)]);
var inst_47637 = cljs.core.async.close_BANG_.call(null,out);
var state_47643__$1 = (function (){var statearr_47661 = state_47643;
(statearr_47661[(13)] = inst_47636);

return statearr_47661;
})();
var statearr_47662_47689 = state_47643__$1;
(statearr_47662_47689[(2)] = inst_47637);

(statearr_47662_47689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47644 === (10))){
var inst_47626 = (state_47643[(2)]);
var state_47643__$1 = state_47643;
var statearr_47663_47690 = state_47643__$1;
(statearr_47663_47690[(2)] = inst_47626);

(statearr_47663_47690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47644 === (8))){
var inst_47607 = (state_47643[(9)]);
var inst_47611 = (state_47643[(10)]);
var inst_47603 = (state_47643[(8)]);
var inst_47616 = inst_47603.push(inst_47607);
var tmp47660 = inst_47603;
var inst_47603__$1 = tmp47660;
var inst_47604 = inst_47611;
var state_47643__$1 = (function (){var statearr_47664 = state_47643;
(statearr_47664[(7)] = inst_47604);

(statearr_47664[(14)] = inst_47616);

(statearr_47664[(8)] = inst_47603__$1);

return statearr_47664;
})();
var statearr_47665_47691 = state_47643__$1;
(statearr_47665_47691[(2)] = null);

(statearr_47665_47691[(1)] = (2));


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
});})(c__44900__auto___47677,out))
;
return ((function (switch__44788__auto__,c__44900__auto___47677,out){
return (function() {
var cljs$core$async$state_machine__44789__auto__ = null;
var cljs$core$async$state_machine__44789__auto____0 = (function (){
var statearr_47669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47669[(0)] = cljs$core$async$state_machine__44789__auto__);

(statearr_47669[(1)] = (1));

return statearr_47669;
});
var cljs$core$async$state_machine__44789__auto____1 = (function (state_47643){
while(true){
var ret_value__44790__auto__ = (function (){try{while(true){
var result__44791__auto__ = switch__44788__auto__.call(null,state_47643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44791__auto__;
}
break;
}
}catch (e47670){if((e47670 instanceof Object)){
var ex__44792__auto__ = e47670;
var statearr_47671_47692 = state_47643;
(statearr_47671_47692[(5)] = ex__44792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47693 = state_47643;
state_47643 = G__47693;
continue;
} else {
return ret_value__44790__auto__;
}
break;
}
});
cljs$core$async$state_machine__44789__auto__ = function(state_47643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44789__auto____1.call(this,state_47643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44789__auto____0;
cljs$core$async$state_machine__44789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44789__auto____1;
return cljs$core$async$state_machine__44789__auto__;
})()
;})(switch__44788__auto__,c__44900__auto___47677,out))
})();
var state__44902__auto__ = (function (){var statearr_47672 = f__44901__auto__.call(null);
(statearr_47672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44900__auto___47677);

return statearr_47672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44902__auto__);
});})(c__44900__auto___47677,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1502937010875