// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__35184 = arguments.length;
switch (G__35184) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async35185 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35185 = (function (f,blockable,meta35186){
this.f = f;
this.blockable = blockable;
this.meta35186 = meta35186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35187,meta35186__$1){
var self__ = this;
var _35187__$1 = this;
return (new cljs.core.async.t_cljs$core$async35185(self__.f,self__.blockable,meta35186__$1));
});

cljs.core.async.t_cljs$core$async35185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35187){
var self__ = this;
var _35187__$1 = this;
return self__.meta35186;
});

cljs.core.async.t_cljs$core$async35185.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35185.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35185.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async35185.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async35185.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35186","meta35186",-257868298,null)], null);
});

cljs.core.async.t_cljs$core$async35185.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35185.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35185";

cljs.core.async.t_cljs$core$async35185.cljs$lang$ctorPrWriter = (function (this__31020__auto__,writer__31021__auto__,opt__31022__auto__){
return cljs.core._write.call(null,writer__31021__auto__,"cljs.core.async/t_cljs$core$async35185");
});

cljs.core.async.__GT_t_cljs$core$async35185 = (function cljs$core$async$__GT_t_cljs$core$async35185(f__$1,blockable__$1,meta35186){
return (new cljs.core.async.t_cljs$core$async35185(f__$1,blockable__$1,meta35186));
});

}

return (new cljs.core.async.t_cljs$core$async35185(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var G__35191 = arguments.length;
switch (G__35191) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
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
var G__35194 = arguments.length;
switch (G__35194) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__35197 = arguments.length;
switch (G__35197) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_35199 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35199);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35199,ret){
return (function (){
return fn1.call(null,val_35199);
});})(val_35199,ret))
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
var G__35201 = arguments.length;
switch (G__35201) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5276__auto__)){
var ret = temp__5276__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5276__auto__)){
var retb = temp__5276__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5276__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5276__auto__))
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
var n__31392__auto___35203 = n;
var x_35204 = (0);
while(true){
if((x_35204 < n__31392__auto___35203)){
(a[x_35204] = (0));

var G__35205 = (x_35204 + (1));
x_35204 = G__35205;
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

var G__35206 = (i + (1));
i = G__35206;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async35207 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35207 = (function (flag,meta35208){
this.flag = flag;
this.meta35208 = meta35208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35209,meta35208__$1){
var self__ = this;
var _35209__$1 = this;
return (new cljs.core.async.t_cljs$core$async35207(self__.flag,meta35208__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async35207.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35209){
var self__ = this;
var _35209__$1 = this;
return self__.meta35208;
});})(flag))
;

cljs.core.async.t_cljs$core$async35207.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35207.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async35207.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35207.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35207.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35208","meta35208",-669991812,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async35207.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35207.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35207";

cljs.core.async.t_cljs$core$async35207.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__31020__auto__,writer__31021__auto__,opt__31022__auto__){
return cljs.core._write.call(null,writer__31021__auto__,"cljs.core.async/t_cljs$core$async35207");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async35207 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35207(flag__$1,meta35208){
return (new cljs.core.async.t_cljs$core$async35207(flag__$1,meta35208));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async35207(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async35210 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35210 = (function (flag,cb,meta35211){
this.flag = flag;
this.cb = cb;
this.meta35211 = meta35211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35212,meta35211__$1){
var self__ = this;
var _35212__$1 = this;
return (new cljs.core.async.t_cljs$core$async35210(self__.flag,self__.cb,meta35211__$1));
});

cljs.core.async.t_cljs$core$async35210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35212){
var self__ = this;
var _35212__$1 = this;
return self__.meta35211;
});

cljs.core.async.t_cljs$core$async35210.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35210.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async35210.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35210.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async35210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35211","meta35211",-2087334459,null)], null);
});

cljs.core.async.t_cljs$core$async35210.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35210";

cljs.core.async.t_cljs$core$async35210.cljs$lang$ctorPrWriter = (function (this__31020__auto__,writer__31021__auto__,opt__31022__auto__){
return cljs.core._write.call(null,writer__31021__auto__,"cljs.core.async/t_cljs$core$async35210");
});

cljs.core.async.__GT_t_cljs$core$async35210 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35210(flag__$1,cb__$1,meta35211){
return (new cljs.core.async.t_cljs$core$async35210(flag__$1,cb__$1,meta35211));
});

}

return (new cljs.core.async.t_cljs$core$async35210(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__35213_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35213_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35214_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35214_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30349__auto__ = wport;
if(cljs.core.truth_(or__30349__auto__)){
return or__30349__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35215 = (i + (1));
i = G__35215;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30349__auto__ = ret;
if(cljs.core.truth_(or__30349__auto__)){
return or__30349__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5278__auto__ = (function (){var and__30337__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30337__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30337__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var got = temp__5278__auto__;
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
var args__31633__auto__ = [];
var len__31626__auto___35221 = arguments.length;
var i__31627__auto___35222 = (0);
while(true){
if((i__31627__auto___35222 < len__31626__auto___35221)){
args__31633__auto__.push((arguments[i__31627__auto___35222]));

var G__35223 = (i__31627__auto___35222 + (1));
i__31627__auto___35222 = G__35223;
continue;
} else {
}
break;
}

var argseq__31634__auto__ = ((((1) < args__31633__auto__.length))?(new cljs.core.IndexedSeq(args__31633__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31634__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35218){
var map__35219 = p__35218;
var map__35219__$1 = ((((!((map__35219 == null)))?((((map__35219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35219.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35219):map__35219);
var opts = map__35219__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35216){
var G__35217 = cljs.core.first.call(null,seq35216);
var seq35216__$1 = cljs.core.next.call(null,seq35216);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35217,seq35216__$1);
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
var G__35225 = arguments.length;
switch (G__35225) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35124__auto___35271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto___35271){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto___35271){
return (function (state_35249){
var state_val_35250 = (state_35249[(1)]);
if((state_val_35250 === (7))){
var inst_35245 = (state_35249[(2)]);
var state_35249__$1 = state_35249;
var statearr_35251_35272 = state_35249__$1;
(statearr_35251_35272[(2)] = inst_35245);

(statearr_35251_35272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (1))){
var state_35249__$1 = state_35249;
var statearr_35252_35273 = state_35249__$1;
(statearr_35252_35273[(2)] = null);

(statearr_35252_35273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (4))){
var inst_35228 = (state_35249[(7)]);
var inst_35228__$1 = (state_35249[(2)]);
var inst_35229 = (inst_35228__$1 == null);
var state_35249__$1 = (function (){var statearr_35253 = state_35249;
(statearr_35253[(7)] = inst_35228__$1);

return statearr_35253;
})();
if(cljs.core.truth_(inst_35229)){
var statearr_35254_35274 = state_35249__$1;
(statearr_35254_35274[(1)] = (5));

} else {
var statearr_35255_35275 = state_35249__$1;
(statearr_35255_35275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (13))){
var state_35249__$1 = state_35249;
var statearr_35256_35276 = state_35249__$1;
(statearr_35256_35276[(2)] = null);

(statearr_35256_35276[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (6))){
var inst_35228 = (state_35249[(7)]);
var state_35249__$1 = state_35249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35249__$1,(11),to,inst_35228);
} else {
if((state_val_35250 === (3))){
var inst_35247 = (state_35249[(2)]);
var state_35249__$1 = state_35249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35249__$1,inst_35247);
} else {
if((state_val_35250 === (12))){
var state_35249__$1 = state_35249;
var statearr_35257_35277 = state_35249__$1;
(statearr_35257_35277[(2)] = null);

(statearr_35257_35277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (2))){
var state_35249__$1 = state_35249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35249__$1,(4),from);
} else {
if((state_val_35250 === (11))){
var inst_35238 = (state_35249[(2)]);
var state_35249__$1 = state_35249;
if(cljs.core.truth_(inst_35238)){
var statearr_35258_35278 = state_35249__$1;
(statearr_35258_35278[(1)] = (12));

} else {
var statearr_35259_35279 = state_35249__$1;
(statearr_35259_35279[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (9))){
var state_35249__$1 = state_35249;
var statearr_35260_35280 = state_35249__$1;
(statearr_35260_35280[(2)] = null);

(statearr_35260_35280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (5))){
var state_35249__$1 = state_35249;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35261_35281 = state_35249__$1;
(statearr_35261_35281[(1)] = (8));

} else {
var statearr_35262_35282 = state_35249__$1;
(statearr_35262_35282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (14))){
var inst_35243 = (state_35249[(2)]);
var state_35249__$1 = state_35249;
var statearr_35263_35283 = state_35249__$1;
(statearr_35263_35283[(2)] = inst_35243);

(statearr_35263_35283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (10))){
var inst_35235 = (state_35249[(2)]);
var state_35249__$1 = state_35249;
var statearr_35264_35284 = state_35249__$1;
(statearr_35264_35284[(2)] = inst_35235);

(statearr_35264_35284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (8))){
var inst_35232 = cljs.core.async.close_BANG_.call(null,to);
var state_35249__$1 = state_35249;
var statearr_35265_35285 = state_35249__$1;
(statearr_35265_35285[(2)] = inst_35232);

(statearr_35265_35285[(1)] = (10));


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
});})(c__35124__auto___35271))
;
return ((function (switch__35034__auto__,c__35124__auto___35271){
return (function() {
var cljs$core$async$state_machine__35035__auto__ = null;
var cljs$core$async$state_machine__35035__auto____0 = (function (){
var statearr_35266 = [null,null,null,null,null,null,null,null];
(statearr_35266[(0)] = cljs$core$async$state_machine__35035__auto__);

(statearr_35266[(1)] = (1));

return statearr_35266;
});
var cljs$core$async$state_machine__35035__auto____1 = (function (state_35249){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_35249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e35267){if((e35267 instanceof Object)){
var ex__35038__auto__ = e35267;
var statearr_35268_35286 = state_35249;
(statearr_35268_35286[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35287 = state_35249;
state_35249 = G__35287;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
cljs$core$async$state_machine__35035__auto__ = function(state_35249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35035__auto____1.call(this,state_35249);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35035__auto____0;
cljs$core$async$state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35035__auto____1;
return cljs$core$async$state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto___35271))
})();
var state__35126__auto__ = (function (){var statearr_35269 = f__35125__auto__.call(null);
(statearr_35269[(6)] = c__35124__auto___35271);

return statearr_35269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto___35271))
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
return (function (p__35288){
var vec__35289 = p__35288;
var v = cljs.core.nth.call(null,vec__35289,(0),null);
var p = cljs.core.nth.call(null,vec__35289,(1),null);
var job = vec__35289;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__35124__auto___35460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto___35460,res,vec__35289,v,p,job,jobs,results){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto___35460,res,vec__35289,v,p,job,jobs,results){
return (function (state_35296){
var state_val_35297 = (state_35296[(1)]);
if((state_val_35297 === (1))){
var state_35296__$1 = state_35296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35296__$1,(2),res,v);
} else {
if((state_val_35297 === (2))){
var inst_35293 = (state_35296[(2)]);
var inst_35294 = cljs.core.async.close_BANG_.call(null,res);
var state_35296__$1 = (function (){var statearr_35298 = state_35296;
(statearr_35298[(7)] = inst_35293);

return statearr_35298;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35296__$1,inst_35294);
} else {
return null;
}
}
});})(c__35124__auto___35460,res,vec__35289,v,p,job,jobs,results))
;
return ((function (switch__35034__auto__,c__35124__auto___35460,res,vec__35289,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____0 = (function (){
var statearr_35299 = [null,null,null,null,null,null,null,null];
(statearr_35299[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__);

(statearr_35299[(1)] = (1));

return statearr_35299;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____1 = (function (state_35296){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_35296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e35300){if((e35300 instanceof Object)){
var ex__35038__auto__ = e35300;
var statearr_35301_35461 = state_35296;
(statearr_35301_35461[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35462 = state_35296;
state_35296 = G__35462;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__ = function(state_35296){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____1.call(this,state_35296);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto___35460,res,vec__35289,v,p,job,jobs,results))
})();
var state__35126__auto__ = (function (){var statearr_35302 = f__35125__auto__.call(null);
(statearr_35302[(6)] = c__35124__auto___35460);

return statearr_35302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto___35460,res,vec__35289,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__35303){
var vec__35304 = p__35303;
var v = cljs.core.nth.call(null,vec__35304,(0),null);
var p = cljs.core.nth.call(null,vec__35304,(1),null);
var job = vec__35304;
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
var n__31392__auto___35463 = n;
var __35464 = (0);
while(true){
if((__35464 < n__31392__auto___35463)){
var G__35307_35465 = type;
var G__35307_35466__$1 = (((G__35307_35465 instanceof cljs.core.Keyword))?G__35307_35465.fqn:null);
switch (G__35307_35466__$1) {
case "compute":
var c__35124__auto___35468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35464,c__35124__auto___35468,G__35307_35465,G__35307_35466__$1,n__31392__auto___35463,jobs,results,process,async){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (__35464,c__35124__auto___35468,G__35307_35465,G__35307_35466__$1,n__31392__auto___35463,jobs,results,process,async){
return (function (state_35320){
var state_val_35321 = (state_35320[(1)]);
if((state_val_35321 === (1))){
var state_35320__$1 = state_35320;
var statearr_35322_35469 = state_35320__$1;
(statearr_35322_35469[(2)] = null);

(statearr_35322_35469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35321 === (2))){
var state_35320__$1 = state_35320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35320__$1,(4),jobs);
} else {
if((state_val_35321 === (3))){
var inst_35318 = (state_35320[(2)]);
var state_35320__$1 = state_35320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35320__$1,inst_35318);
} else {
if((state_val_35321 === (4))){
var inst_35310 = (state_35320[(2)]);
var inst_35311 = process.call(null,inst_35310);
var state_35320__$1 = state_35320;
if(cljs.core.truth_(inst_35311)){
var statearr_35323_35470 = state_35320__$1;
(statearr_35323_35470[(1)] = (5));

} else {
var statearr_35324_35471 = state_35320__$1;
(statearr_35324_35471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35321 === (5))){
var state_35320__$1 = state_35320;
var statearr_35325_35472 = state_35320__$1;
(statearr_35325_35472[(2)] = null);

(statearr_35325_35472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35321 === (6))){
var state_35320__$1 = state_35320;
var statearr_35326_35473 = state_35320__$1;
(statearr_35326_35473[(2)] = null);

(statearr_35326_35473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35321 === (7))){
var inst_35316 = (state_35320[(2)]);
var state_35320__$1 = state_35320;
var statearr_35327_35474 = state_35320__$1;
(statearr_35327_35474[(2)] = inst_35316);

(statearr_35327_35474[(1)] = (3));


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
});})(__35464,c__35124__auto___35468,G__35307_35465,G__35307_35466__$1,n__31392__auto___35463,jobs,results,process,async))
;
return ((function (__35464,switch__35034__auto__,c__35124__auto___35468,G__35307_35465,G__35307_35466__$1,n__31392__auto___35463,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____0 = (function (){
var statearr_35328 = [null,null,null,null,null,null,null];
(statearr_35328[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__);

(statearr_35328[(1)] = (1));

return statearr_35328;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____1 = (function (state_35320){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_35320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e35329){if((e35329 instanceof Object)){
var ex__35038__auto__ = e35329;
var statearr_35330_35475 = state_35320;
(statearr_35330_35475[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35476 = state_35320;
state_35320 = G__35476;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__ = function(state_35320){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____1.call(this,state_35320);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__;
})()
;})(__35464,switch__35034__auto__,c__35124__auto___35468,G__35307_35465,G__35307_35466__$1,n__31392__auto___35463,jobs,results,process,async))
})();
var state__35126__auto__ = (function (){var statearr_35331 = f__35125__auto__.call(null);
(statearr_35331[(6)] = c__35124__auto___35468);

return statearr_35331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(__35464,c__35124__auto___35468,G__35307_35465,G__35307_35466__$1,n__31392__auto___35463,jobs,results,process,async))
);


break;
case "async":
var c__35124__auto___35477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35464,c__35124__auto___35477,G__35307_35465,G__35307_35466__$1,n__31392__auto___35463,jobs,results,process,async){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (__35464,c__35124__auto___35477,G__35307_35465,G__35307_35466__$1,n__31392__auto___35463,jobs,results,process,async){
return (function (state_35344){
var state_val_35345 = (state_35344[(1)]);
if((state_val_35345 === (1))){
var state_35344__$1 = state_35344;
var statearr_35346_35478 = state_35344__$1;
(statearr_35346_35478[(2)] = null);

(statearr_35346_35478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35345 === (2))){
var state_35344__$1 = state_35344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35344__$1,(4),jobs);
} else {
if((state_val_35345 === (3))){
var inst_35342 = (state_35344[(2)]);
var state_35344__$1 = state_35344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35344__$1,inst_35342);
} else {
if((state_val_35345 === (4))){
var inst_35334 = (state_35344[(2)]);
var inst_35335 = async.call(null,inst_35334);
var state_35344__$1 = state_35344;
if(cljs.core.truth_(inst_35335)){
var statearr_35347_35479 = state_35344__$1;
(statearr_35347_35479[(1)] = (5));

} else {
var statearr_35348_35480 = state_35344__$1;
(statearr_35348_35480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35345 === (5))){
var state_35344__$1 = state_35344;
var statearr_35349_35481 = state_35344__$1;
(statearr_35349_35481[(2)] = null);

(statearr_35349_35481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35345 === (6))){
var state_35344__$1 = state_35344;
var statearr_35350_35482 = state_35344__$1;
(statearr_35350_35482[(2)] = null);

(statearr_35350_35482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35345 === (7))){
var inst_35340 = (state_35344[(2)]);
var state_35344__$1 = state_35344;
var statearr_35351_35483 = state_35344__$1;
(statearr_35351_35483[(2)] = inst_35340);

(statearr_35351_35483[(1)] = (3));


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
});})(__35464,c__35124__auto___35477,G__35307_35465,G__35307_35466__$1,n__31392__auto___35463,jobs,results,process,async))
;
return ((function (__35464,switch__35034__auto__,c__35124__auto___35477,G__35307_35465,G__35307_35466__$1,n__31392__auto___35463,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____0 = (function (){
var statearr_35352 = [null,null,null,null,null,null,null];
(statearr_35352[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__);

(statearr_35352[(1)] = (1));

return statearr_35352;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____1 = (function (state_35344){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_35344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e35353){if((e35353 instanceof Object)){
var ex__35038__auto__ = e35353;
var statearr_35354_35484 = state_35344;
(statearr_35354_35484[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35485 = state_35344;
state_35344 = G__35485;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__ = function(state_35344){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____1.call(this,state_35344);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__;
})()
;})(__35464,switch__35034__auto__,c__35124__auto___35477,G__35307_35465,G__35307_35466__$1,n__31392__auto___35463,jobs,results,process,async))
})();
var state__35126__auto__ = (function (){var statearr_35355 = f__35125__auto__.call(null);
(statearr_35355[(6)] = c__35124__auto___35477);

return statearr_35355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(__35464,c__35124__auto___35477,G__35307_35465,G__35307_35466__$1,n__31392__auto___35463,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35307_35466__$1)].join('')));

}

var G__35486 = (__35464 + (1));
__35464 = G__35486;
continue;
} else {
}
break;
}

var c__35124__auto___35487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto___35487,jobs,results,process,async){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto___35487,jobs,results,process,async){
return (function (state_35377){
var state_val_35378 = (state_35377[(1)]);
if((state_val_35378 === (1))){
var state_35377__$1 = state_35377;
var statearr_35379_35488 = state_35377__$1;
(statearr_35379_35488[(2)] = null);

(statearr_35379_35488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (2))){
var state_35377__$1 = state_35377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35377__$1,(4),from);
} else {
if((state_val_35378 === (3))){
var inst_35375 = (state_35377[(2)]);
var state_35377__$1 = state_35377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35377__$1,inst_35375);
} else {
if((state_val_35378 === (4))){
var inst_35358 = (state_35377[(7)]);
var inst_35358__$1 = (state_35377[(2)]);
var inst_35359 = (inst_35358__$1 == null);
var state_35377__$1 = (function (){var statearr_35380 = state_35377;
(statearr_35380[(7)] = inst_35358__$1);

return statearr_35380;
})();
if(cljs.core.truth_(inst_35359)){
var statearr_35381_35489 = state_35377__$1;
(statearr_35381_35489[(1)] = (5));

} else {
var statearr_35382_35490 = state_35377__$1;
(statearr_35382_35490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (5))){
var inst_35361 = cljs.core.async.close_BANG_.call(null,jobs);
var state_35377__$1 = state_35377;
var statearr_35383_35491 = state_35377__$1;
(statearr_35383_35491[(2)] = inst_35361);

(statearr_35383_35491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (6))){
var inst_35358 = (state_35377[(7)]);
var inst_35363 = (state_35377[(8)]);
var inst_35363__$1 = cljs.core.async.chan.call(null,(1));
var inst_35364 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35365 = [inst_35358,inst_35363__$1];
var inst_35366 = (new cljs.core.PersistentVector(null,2,(5),inst_35364,inst_35365,null));
var state_35377__$1 = (function (){var statearr_35384 = state_35377;
(statearr_35384[(8)] = inst_35363__$1);

return statearr_35384;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35377__$1,(8),jobs,inst_35366);
} else {
if((state_val_35378 === (7))){
var inst_35373 = (state_35377[(2)]);
var state_35377__$1 = state_35377;
var statearr_35385_35492 = state_35377__$1;
(statearr_35385_35492[(2)] = inst_35373);

(statearr_35385_35492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (8))){
var inst_35363 = (state_35377[(8)]);
var inst_35368 = (state_35377[(2)]);
var state_35377__$1 = (function (){var statearr_35386 = state_35377;
(statearr_35386[(9)] = inst_35368);

return statearr_35386;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35377__$1,(9),results,inst_35363);
} else {
if((state_val_35378 === (9))){
var inst_35370 = (state_35377[(2)]);
var state_35377__$1 = (function (){var statearr_35387 = state_35377;
(statearr_35387[(10)] = inst_35370);

return statearr_35387;
})();
var statearr_35388_35493 = state_35377__$1;
(statearr_35388_35493[(2)] = null);

(statearr_35388_35493[(1)] = (2));


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
});})(c__35124__auto___35487,jobs,results,process,async))
;
return ((function (switch__35034__auto__,c__35124__auto___35487,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____0 = (function (){
var statearr_35389 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35389[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__);

(statearr_35389[(1)] = (1));

return statearr_35389;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____1 = (function (state_35377){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_35377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e35390){if((e35390 instanceof Object)){
var ex__35038__auto__ = e35390;
var statearr_35391_35494 = state_35377;
(statearr_35391_35494[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35495 = state_35377;
state_35377 = G__35495;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__ = function(state_35377){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____1.call(this,state_35377);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto___35487,jobs,results,process,async))
})();
var state__35126__auto__ = (function (){var statearr_35392 = f__35125__auto__.call(null);
(statearr_35392[(6)] = c__35124__auto___35487);

return statearr_35392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto___35487,jobs,results,process,async))
);


var c__35124__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto__,jobs,results,process,async){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto__,jobs,results,process,async){
return (function (state_35430){
var state_val_35431 = (state_35430[(1)]);
if((state_val_35431 === (7))){
var inst_35426 = (state_35430[(2)]);
var state_35430__$1 = state_35430;
var statearr_35432_35496 = state_35430__$1;
(statearr_35432_35496[(2)] = inst_35426);

(statearr_35432_35496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35431 === (20))){
var state_35430__$1 = state_35430;
var statearr_35433_35497 = state_35430__$1;
(statearr_35433_35497[(2)] = null);

(statearr_35433_35497[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35431 === (1))){
var state_35430__$1 = state_35430;
var statearr_35434_35498 = state_35430__$1;
(statearr_35434_35498[(2)] = null);

(statearr_35434_35498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35431 === (4))){
var inst_35395 = (state_35430[(7)]);
var inst_35395__$1 = (state_35430[(2)]);
var inst_35396 = (inst_35395__$1 == null);
var state_35430__$1 = (function (){var statearr_35435 = state_35430;
(statearr_35435[(7)] = inst_35395__$1);

return statearr_35435;
})();
if(cljs.core.truth_(inst_35396)){
var statearr_35436_35499 = state_35430__$1;
(statearr_35436_35499[(1)] = (5));

} else {
var statearr_35437_35500 = state_35430__$1;
(statearr_35437_35500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35431 === (15))){
var inst_35408 = (state_35430[(8)]);
var state_35430__$1 = state_35430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35430__$1,(18),to,inst_35408);
} else {
if((state_val_35431 === (21))){
var inst_35421 = (state_35430[(2)]);
var state_35430__$1 = state_35430;
var statearr_35438_35501 = state_35430__$1;
(statearr_35438_35501[(2)] = inst_35421);

(statearr_35438_35501[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35431 === (13))){
var inst_35423 = (state_35430[(2)]);
var state_35430__$1 = (function (){var statearr_35439 = state_35430;
(statearr_35439[(9)] = inst_35423);

return statearr_35439;
})();
var statearr_35440_35502 = state_35430__$1;
(statearr_35440_35502[(2)] = null);

(statearr_35440_35502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35431 === (6))){
var inst_35395 = (state_35430[(7)]);
var state_35430__$1 = state_35430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35430__$1,(11),inst_35395);
} else {
if((state_val_35431 === (17))){
var inst_35416 = (state_35430[(2)]);
var state_35430__$1 = state_35430;
if(cljs.core.truth_(inst_35416)){
var statearr_35441_35503 = state_35430__$1;
(statearr_35441_35503[(1)] = (19));

} else {
var statearr_35442_35504 = state_35430__$1;
(statearr_35442_35504[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35431 === (3))){
var inst_35428 = (state_35430[(2)]);
var state_35430__$1 = state_35430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35430__$1,inst_35428);
} else {
if((state_val_35431 === (12))){
var inst_35405 = (state_35430[(10)]);
var state_35430__$1 = state_35430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35430__$1,(14),inst_35405);
} else {
if((state_val_35431 === (2))){
var state_35430__$1 = state_35430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35430__$1,(4),results);
} else {
if((state_val_35431 === (19))){
var state_35430__$1 = state_35430;
var statearr_35443_35505 = state_35430__$1;
(statearr_35443_35505[(2)] = null);

(statearr_35443_35505[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35431 === (11))){
var inst_35405 = (state_35430[(2)]);
var state_35430__$1 = (function (){var statearr_35444 = state_35430;
(statearr_35444[(10)] = inst_35405);

return statearr_35444;
})();
var statearr_35445_35506 = state_35430__$1;
(statearr_35445_35506[(2)] = null);

(statearr_35445_35506[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35431 === (9))){
var state_35430__$1 = state_35430;
var statearr_35446_35507 = state_35430__$1;
(statearr_35446_35507[(2)] = null);

(statearr_35446_35507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35431 === (5))){
var state_35430__$1 = state_35430;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35447_35508 = state_35430__$1;
(statearr_35447_35508[(1)] = (8));

} else {
var statearr_35448_35509 = state_35430__$1;
(statearr_35448_35509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35431 === (14))){
var inst_35408 = (state_35430[(8)]);
var inst_35410 = (state_35430[(11)]);
var inst_35408__$1 = (state_35430[(2)]);
var inst_35409 = (inst_35408__$1 == null);
var inst_35410__$1 = cljs.core.not.call(null,inst_35409);
var state_35430__$1 = (function (){var statearr_35449 = state_35430;
(statearr_35449[(8)] = inst_35408__$1);

(statearr_35449[(11)] = inst_35410__$1);

return statearr_35449;
})();
if(inst_35410__$1){
var statearr_35450_35510 = state_35430__$1;
(statearr_35450_35510[(1)] = (15));

} else {
var statearr_35451_35511 = state_35430__$1;
(statearr_35451_35511[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35431 === (16))){
var inst_35410 = (state_35430[(11)]);
var state_35430__$1 = state_35430;
var statearr_35452_35512 = state_35430__$1;
(statearr_35452_35512[(2)] = inst_35410);

(statearr_35452_35512[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35431 === (10))){
var inst_35402 = (state_35430[(2)]);
var state_35430__$1 = state_35430;
var statearr_35453_35513 = state_35430__$1;
(statearr_35453_35513[(2)] = inst_35402);

(statearr_35453_35513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35431 === (18))){
var inst_35413 = (state_35430[(2)]);
var state_35430__$1 = state_35430;
var statearr_35454_35514 = state_35430__$1;
(statearr_35454_35514[(2)] = inst_35413);

(statearr_35454_35514[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35431 === (8))){
var inst_35399 = cljs.core.async.close_BANG_.call(null,to);
var state_35430__$1 = state_35430;
var statearr_35455_35515 = state_35430__$1;
(statearr_35455_35515[(2)] = inst_35399);

(statearr_35455_35515[(1)] = (10));


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
});})(c__35124__auto__,jobs,results,process,async))
;
return ((function (switch__35034__auto__,c__35124__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____0 = (function (){
var statearr_35456 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__);

(statearr_35456[(1)] = (1));

return statearr_35456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____1 = (function (state_35430){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_35430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e35457){if((e35457 instanceof Object)){
var ex__35038__auto__ = e35457;
var statearr_35458_35516 = state_35430;
(statearr_35458_35516[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35517 = state_35430;
state_35430 = G__35517;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__ = function(state_35430){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____1.call(this,state_35430);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto__,jobs,results,process,async))
})();
var state__35126__auto__ = (function (){var statearr_35459 = f__35125__auto__.call(null);
(statearr_35459[(6)] = c__35124__auto__);

return statearr_35459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto__,jobs,results,process,async))
);

return c__35124__auto__;
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
var G__35519 = arguments.length;
switch (G__35519) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__35522 = arguments.length;
switch (G__35522) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__35525 = arguments.length;
switch (G__35525) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__35124__auto___35574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto___35574,tc,fc){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto___35574,tc,fc){
return (function (state_35551){
var state_val_35552 = (state_35551[(1)]);
if((state_val_35552 === (7))){
var inst_35547 = (state_35551[(2)]);
var state_35551__$1 = state_35551;
var statearr_35553_35575 = state_35551__$1;
(statearr_35553_35575[(2)] = inst_35547);

(statearr_35553_35575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35552 === (1))){
var state_35551__$1 = state_35551;
var statearr_35554_35576 = state_35551__$1;
(statearr_35554_35576[(2)] = null);

(statearr_35554_35576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35552 === (4))){
var inst_35528 = (state_35551[(7)]);
var inst_35528__$1 = (state_35551[(2)]);
var inst_35529 = (inst_35528__$1 == null);
var state_35551__$1 = (function (){var statearr_35555 = state_35551;
(statearr_35555[(7)] = inst_35528__$1);

return statearr_35555;
})();
if(cljs.core.truth_(inst_35529)){
var statearr_35556_35577 = state_35551__$1;
(statearr_35556_35577[(1)] = (5));

} else {
var statearr_35557_35578 = state_35551__$1;
(statearr_35557_35578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35552 === (13))){
var state_35551__$1 = state_35551;
var statearr_35558_35579 = state_35551__$1;
(statearr_35558_35579[(2)] = null);

(statearr_35558_35579[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35552 === (6))){
var inst_35528 = (state_35551[(7)]);
var inst_35534 = p.call(null,inst_35528);
var state_35551__$1 = state_35551;
if(cljs.core.truth_(inst_35534)){
var statearr_35559_35580 = state_35551__$1;
(statearr_35559_35580[(1)] = (9));

} else {
var statearr_35560_35581 = state_35551__$1;
(statearr_35560_35581[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35552 === (3))){
var inst_35549 = (state_35551[(2)]);
var state_35551__$1 = state_35551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35551__$1,inst_35549);
} else {
if((state_val_35552 === (12))){
var state_35551__$1 = state_35551;
var statearr_35561_35582 = state_35551__$1;
(statearr_35561_35582[(2)] = null);

(statearr_35561_35582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35552 === (2))){
var state_35551__$1 = state_35551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35551__$1,(4),ch);
} else {
if((state_val_35552 === (11))){
var inst_35528 = (state_35551[(7)]);
var inst_35538 = (state_35551[(2)]);
var state_35551__$1 = state_35551;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35551__$1,(8),inst_35538,inst_35528);
} else {
if((state_val_35552 === (9))){
var state_35551__$1 = state_35551;
var statearr_35562_35583 = state_35551__$1;
(statearr_35562_35583[(2)] = tc);

(statearr_35562_35583[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35552 === (5))){
var inst_35531 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35532 = cljs.core.async.close_BANG_.call(null,fc);
var state_35551__$1 = (function (){var statearr_35563 = state_35551;
(statearr_35563[(8)] = inst_35531);

return statearr_35563;
})();
var statearr_35564_35584 = state_35551__$1;
(statearr_35564_35584[(2)] = inst_35532);

(statearr_35564_35584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35552 === (14))){
var inst_35545 = (state_35551[(2)]);
var state_35551__$1 = state_35551;
var statearr_35565_35585 = state_35551__$1;
(statearr_35565_35585[(2)] = inst_35545);

(statearr_35565_35585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35552 === (10))){
var state_35551__$1 = state_35551;
var statearr_35566_35586 = state_35551__$1;
(statearr_35566_35586[(2)] = fc);

(statearr_35566_35586[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35552 === (8))){
var inst_35540 = (state_35551[(2)]);
var state_35551__$1 = state_35551;
if(cljs.core.truth_(inst_35540)){
var statearr_35567_35587 = state_35551__$1;
(statearr_35567_35587[(1)] = (12));

} else {
var statearr_35568_35588 = state_35551__$1;
(statearr_35568_35588[(1)] = (13));

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
});})(c__35124__auto___35574,tc,fc))
;
return ((function (switch__35034__auto__,c__35124__auto___35574,tc,fc){
return (function() {
var cljs$core$async$state_machine__35035__auto__ = null;
var cljs$core$async$state_machine__35035__auto____0 = (function (){
var statearr_35569 = [null,null,null,null,null,null,null,null,null];
(statearr_35569[(0)] = cljs$core$async$state_machine__35035__auto__);

(statearr_35569[(1)] = (1));

return statearr_35569;
});
var cljs$core$async$state_machine__35035__auto____1 = (function (state_35551){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_35551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e35570){if((e35570 instanceof Object)){
var ex__35038__auto__ = e35570;
var statearr_35571_35589 = state_35551;
(statearr_35571_35589[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35590 = state_35551;
state_35551 = G__35590;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
cljs$core$async$state_machine__35035__auto__ = function(state_35551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35035__auto____1.call(this,state_35551);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35035__auto____0;
cljs$core$async$state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35035__auto____1;
return cljs$core$async$state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto___35574,tc,fc))
})();
var state__35126__auto__ = (function (){var statearr_35572 = f__35125__auto__.call(null);
(statearr_35572[(6)] = c__35124__auto___35574);

return statearr_35572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto___35574,tc,fc))
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
var c__35124__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto__){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto__){
return (function (state_35611){
var state_val_35612 = (state_35611[(1)]);
if((state_val_35612 === (7))){
var inst_35607 = (state_35611[(2)]);
var state_35611__$1 = state_35611;
var statearr_35613_35631 = state_35611__$1;
(statearr_35613_35631[(2)] = inst_35607);

(statearr_35613_35631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (1))){
var inst_35591 = init;
var state_35611__$1 = (function (){var statearr_35614 = state_35611;
(statearr_35614[(7)] = inst_35591);

return statearr_35614;
})();
var statearr_35615_35632 = state_35611__$1;
(statearr_35615_35632[(2)] = null);

(statearr_35615_35632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (4))){
var inst_35594 = (state_35611[(8)]);
var inst_35594__$1 = (state_35611[(2)]);
var inst_35595 = (inst_35594__$1 == null);
var state_35611__$1 = (function (){var statearr_35616 = state_35611;
(statearr_35616[(8)] = inst_35594__$1);

return statearr_35616;
})();
if(cljs.core.truth_(inst_35595)){
var statearr_35617_35633 = state_35611__$1;
(statearr_35617_35633[(1)] = (5));

} else {
var statearr_35618_35634 = state_35611__$1;
(statearr_35618_35634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (6))){
var inst_35598 = (state_35611[(9)]);
var inst_35594 = (state_35611[(8)]);
var inst_35591 = (state_35611[(7)]);
var inst_35598__$1 = f.call(null,inst_35591,inst_35594);
var inst_35599 = cljs.core.reduced_QMARK_.call(null,inst_35598__$1);
var state_35611__$1 = (function (){var statearr_35619 = state_35611;
(statearr_35619[(9)] = inst_35598__$1);

return statearr_35619;
})();
if(inst_35599){
var statearr_35620_35635 = state_35611__$1;
(statearr_35620_35635[(1)] = (8));

} else {
var statearr_35621_35636 = state_35611__$1;
(statearr_35621_35636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (3))){
var inst_35609 = (state_35611[(2)]);
var state_35611__$1 = state_35611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35611__$1,inst_35609);
} else {
if((state_val_35612 === (2))){
var state_35611__$1 = state_35611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35611__$1,(4),ch);
} else {
if((state_val_35612 === (9))){
var inst_35598 = (state_35611[(9)]);
var inst_35591 = inst_35598;
var state_35611__$1 = (function (){var statearr_35622 = state_35611;
(statearr_35622[(7)] = inst_35591);

return statearr_35622;
})();
var statearr_35623_35637 = state_35611__$1;
(statearr_35623_35637[(2)] = null);

(statearr_35623_35637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (5))){
var inst_35591 = (state_35611[(7)]);
var state_35611__$1 = state_35611;
var statearr_35624_35638 = state_35611__$1;
(statearr_35624_35638[(2)] = inst_35591);

(statearr_35624_35638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (10))){
var inst_35605 = (state_35611[(2)]);
var state_35611__$1 = state_35611;
var statearr_35625_35639 = state_35611__$1;
(statearr_35625_35639[(2)] = inst_35605);

(statearr_35625_35639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35612 === (8))){
var inst_35598 = (state_35611[(9)]);
var inst_35601 = cljs.core.deref.call(null,inst_35598);
var state_35611__$1 = state_35611;
var statearr_35626_35640 = state_35611__$1;
(statearr_35626_35640[(2)] = inst_35601);

(statearr_35626_35640[(1)] = (10));


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
});})(c__35124__auto__))
;
return ((function (switch__35034__auto__,c__35124__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__35035__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35035__auto____0 = (function (){
var statearr_35627 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35627[(0)] = cljs$core$async$reduce_$_state_machine__35035__auto__);

(statearr_35627[(1)] = (1));

return statearr_35627;
});
var cljs$core$async$reduce_$_state_machine__35035__auto____1 = (function (state_35611){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_35611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e35628){if((e35628 instanceof Object)){
var ex__35038__auto__ = e35628;
var statearr_35629_35641 = state_35611;
(statearr_35629_35641[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35642 = state_35611;
state_35611 = G__35642;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35035__auto__ = function(state_35611){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35035__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35035__auto____1.call(this,state_35611);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35035__auto____0;
cljs$core$async$reduce_$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35035__auto____1;
return cljs$core$async$reduce_$_state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto__))
})();
var state__35126__auto__ = (function (){var statearr_35630 = f__35125__auto__.call(null);
(statearr_35630[(6)] = c__35124__auto__);

return statearr_35630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto__))
);

return c__35124__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__35124__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto__,f__$1){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto__,f__$1){
return (function (state_35648){
var state_val_35649 = (state_35648[(1)]);
if((state_val_35649 === (1))){
var inst_35643 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_35648__$1 = state_35648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35648__$1,(2),inst_35643);
} else {
if((state_val_35649 === (2))){
var inst_35645 = (state_35648[(2)]);
var inst_35646 = f__$1.call(null,inst_35645);
var state_35648__$1 = state_35648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35648__$1,inst_35646);
} else {
return null;
}
}
});})(c__35124__auto__,f__$1))
;
return ((function (switch__35034__auto__,c__35124__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__35035__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35035__auto____0 = (function (){
var statearr_35650 = [null,null,null,null,null,null,null];
(statearr_35650[(0)] = cljs$core$async$transduce_$_state_machine__35035__auto__);

(statearr_35650[(1)] = (1));

return statearr_35650;
});
var cljs$core$async$transduce_$_state_machine__35035__auto____1 = (function (state_35648){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_35648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e35651){if((e35651 instanceof Object)){
var ex__35038__auto__ = e35651;
var statearr_35652_35654 = state_35648;
(statearr_35652_35654[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35655 = state_35648;
state_35648 = G__35655;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35035__auto__ = function(state_35648){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35035__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35035__auto____1.call(this,state_35648);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35035__auto____0;
cljs$core$async$transduce_$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35035__auto____1;
return cljs$core$async$transduce_$_state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto__,f__$1))
})();
var state__35126__auto__ = (function (){var statearr_35653 = f__35125__auto__.call(null);
(statearr_35653[(6)] = c__35124__auto__);

return statearr_35653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto__,f__$1))
);

return c__35124__auto__;
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
var G__35657 = arguments.length;
switch (G__35657) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35124__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto__){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto__){
return (function (state_35682){
var state_val_35683 = (state_35682[(1)]);
if((state_val_35683 === (7))){
var inst_35664 = (state_35682[(2)]);
var state_35682__$1 = state_35682;
var statearr_35684_35705 = state_35682__$1;
(statearr_35684_35705[(2)] = inst_35664);

(statearr_35684_35705[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35683 === (1))){
var inst_35658 = cljs.core.seq.call(null,coll);
var inst_35659 = inst_35658;
var state_35682__$1 = (function (){var statearr_35685 = state_35682;
(statearr_35685[(7)] = inst_35659);

return statearr_35685;
})();
var statearr_35686_35706 = state_35682__$1;
(statearr_35686_35706[(2)] = null);

(statearr_35686_35706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35683 === (4))){
var inst_35659 = (state_35682[(7)]);
var inst_35662 = cljs.core.first.call(null,inst_35659);
var state_35682__$1 = state_35682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35682__$1,(7),ch,inst_35662);
} else {
if((state_val_35683 === (13))){
var inst_35676 = (state_35682[(2)]);
var state_35682__$1 = state_35682;
var statearr_35687_35707 = state_35682__$1;
(statearr_35687_35707[(2)] = inst_35676);

(statearr_35687_35707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35683 === (6))){
var inst_35667 = (state_35682[(2)]);
var state_35682__$1 = state_35682;
if(cljs.core.truth_(inst_35667)){
var statearr_35688_35708 = state_35682__$1;
(statearr_35688_35708[(1)] = (8));

} else {
var statearr_35689_35709 = state_35682__$1;
(statearr_35689_35709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35683 === (3))){
var inst_35680 = (state_35682[(2)]);
var state_35682__$1 = state_35682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35682__$1,inst_35680);
} else {
if((state_val_35683 === (12))){
var state_35682__$1 = state_35682;
var statearr_35690_35710 = state_35682__$1;
(statearr_35690_35710[(2)] = null);

(statearr_35690_35710[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35683 === (2))){
var inst_35659 = (state_35682[(7)]);
var state_35682__$1 = state_35682;
if(cljs.core.truth_(inst_35659)){
var statearr_35691_35711 = state_35682__$1;
(statearr_35691_35711[(1)] = (4));

} else {
var statearr_35692_35712 = state_35682__$1;
(statearr_35692_35712[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35683 === (11))){
var inst_35673 = cljs.core.async.close_BANG_.call(null,ch);
var state_35682__$1 = state_35682;
var statearr_35693_35713 = state_35682__$1;
(statearr_35693_35713[(2)] = inst_35673);

(statearr_35693_35713[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35683 === (9))){
var state_35682__$1 = state_35682;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35694_35714 = state_35682__$1;
(statearr_35694_35714[(1)] = (11));

} else {
var statearr_35695_35715 = state_35682__$1;
(statearr_35695_35715[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35683 === (5))){
var inst_35659 = (state_35682[(7)]);
var state_35682__$1 = state_35682;
var statearr_35696_35716 = state_35682__$1;
(statearr_35696_35716[(2)] = inst_35659);

(statearr_35696_35716[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35683 === (10))){
var inst_35678 = (state_35682[(2)]);
var state_35682__$1 = state_35682;
var statearr_35697_35717 = state_35682__$1;
(statearr_35697_35717[(2)] = inst_35678);

(statearr_35697_35717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35683 === (8))){
var inst_35659 = (state_35682[(7)]);
var inst_35669 = cljs.core.next.call(null,inst_35659);
var inst_35659__$1 = inst_35669;
var state_35682__$1 = (function (){var statearr_35698 = state_35682;
(statearr_35698[(7)] = inst_35659__$1);

return statearr_35698;
})();
var statearr_35699_35718 = state_35682__$1;
(statearr_35699_35718[(2)] = null);

(statearr_35699_35718[(1)] = (2));


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
});})(c__35124__auto__))
;
return ((function (switch__35034__auto__,c__35124__auto__){
return (function() {
var cljs$core$async$state_machine__35035__auto__ = null;
var cljs$core$async$state_machine__35035__auto____0 = (function (){
var statearr_35700 = [null,null,null,null,null,null,null,null];
(statearr_35700[(0)] = cljs$core$async$state_machine__35035__auto__);

(statearr_35700[(1)] = (1));

return statearr_35700;
});
var cljs$core$async$state_machine__35035__auto____1 = (function (state_35682){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_35682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e35701){if((e35701 instanceof Object)){
var ex__35038__auto__ = e35701;
var statearr_35702_35719 = state_35682;
(statearr_35702_35719[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35720 = state_35682;
state_35682 = G__35720;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
cljs$core$async$state_machine__35035__auto__ = function(state_35682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35035__auto____1.call(this,state_35682);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35035__auto____0;
cljs$core$async$state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35035__auto____1;
return cljs$core$async$state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto__))
})();
var state__35126__auto__ = (function (){var statearr_35703 = f__35125__auto__.call(null);
(statearr_35703[(6)] = c__35124__auto__);

return statearr_35703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto__))
);

return c__35124__auto__;
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
var x__31082__auto__ = (((_ == null))?null:_);
var m__31083__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__31082__auto__)]);
if(!((m__31083__auto__ == null))){
return m__31083__auto__.call(null,_);
} else {
var m__31083__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__31083__auto____$1 == null))){
return m__31083__auto____$1.call(null,_);
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
var x__31082__auto__ = (((m == null))?null:m);
var m__31083__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__31082__auto__)]);
if(!((m__31083__auto__ == null))){
return m__31083__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__31083__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__31083__auto____$1 == null))){
return m__31083__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__31082__auto__ = (((m == null))?null:m);
var m__31083__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__31082__auto__)]);
if(!((m__31083__auto__ == null))){
return m__31083__auto__.call(null,m,ch);
} else {
var m__31083__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__31083__auto____$1 == null))){
return m__31083__auto____$1.call(null,m,ch);
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
var x__31082__auto__ = (((m == null))?null:m);
var m__31083__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__31082__auto__)]);
if(!((m__31083__auto__ == null))){
return m__31083__auto__.call(null,m);
} else {
var m__31083__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__31083__auto____$1 == null))){
return m__31083__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async35721 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35721 = (function (ch,cs,meta35722){
this.ch = ch;
this.cs = cs;
this.meta35722 = meta35722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35723,meta35722__$1){
var self__ = this;
var _35723__$1 = this;
return (new cljs.core.async.t_cljs$core$async35721(self__.ch,self__.cs,meta35722__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35721.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35723){
var self__ = this;
var _35723__$1 = this;
return self__.meta35722;
});})(cs))
;

cljs.core.async.t_cljs$core$async35721.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35721.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35721.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35721.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35721.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35721.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35721.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35722","meta35722",2076317159,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35721.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35721";

cljs.core.async.t_cljs$core$async35721.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__31020__auto__,writer__31021__auto__,opt__31022__auto__){
return cljs.core._write.call(null,writer__31021__auto__,"cljs.core.async/t_cljs$core$async35721");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async35721 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35721(ch__$1,cs__$1,meta35722){
return (new cljs.core.async.t_cljs$core$async35721(ch__$1,cs__$1,meta35722));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35721(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__35124__auto___35943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto___35943,cs,m,dchan,dctr,done){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto___35943,cs,m,dchan,dctr,done){
return (function (state_35858){
var state_val_35859 = (state_35858[(1)]);
if((state_val_35859 === (7))){
var inst_35854 = (state_35858[(2)]);
var state_35858__$1 = state_35858;
var statearr_35860_35944 = state_35858__$1;
(statearr_35860_35944[(2)] = inst_35854);

(statearr_35860_35944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (20))){
var inst_35757 = (state_35858[(7)]);
var inst_35769 = cljs.core.first.call(null,inst_35757);
var inst_35770 = cljs.core.nth.call(null,inst_35769,(0),null);
var inst_35771 = cljs.core.nth.call(null,inst_35769,(1),null);
var state_35858__$1 = (function (){var statearr_35861 = state_35858;
(statearr_35861[(8)] = inst_35770);

return statearr_35861;
})();
if(cljs.core.truth_(inst_35771)){
var statearr_35862_35945 = state_35858__$1;
(statearr_35862_35945[(1)] = (22));

} else {
var statearr_35863_35946 = state_35858__$1;
(statearr_35863_35946[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (27))){
var inst_35801 = (state_35858[(9)]);
var inst_35726 = (state_35858[(10)]);
var inst_35806 = (state_35858[(11)]);
var inst_35799 = (state_35858[(12)]);
var inst_35806__$1 = cljs.core._nth.call(null,inst_35799,inst_35801);
var inst_35807 = cljs.core.async.put_BANG_.call(null,inst_35806__$1,inst_35726,done);
var state_35858__$1 = (function (){var statearr_35864 = state_35858;
(statearr_35864[(11)] = inst_35806__$1);

return statearr_35864;
})();
if(cljs.core.truth_(inst_35807)){
var statearr_35865_35947 = state_35858__$1;
(statearr_35865_35947[(1)] = (30));

} else {
var statearr_35866_35948 = state_35858__$1;
(statearr_35866_35948[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (1))){
var state_35858__$1 = state_35858;
var statearr_35867_35949 = state_35858__$1;
(statearr_35867_35949[(2)] = null);

(statearr_35867_35949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (24))){
var inst_35757 = (state_35858[(7)]);
var inst_35776 = (state_35858[(2)]);
var inst_35777 = cljs.core.next.call(null,inst_35757);
var inst_35735 = inst_35777;
var inst_35736 = null;
var inst_35737 = (0);
var inst_35738 = (0);
var state_35858__$1 = (function (){var statearr_35868 = state_35858;
(statearr_35868[(13)] = inst_35737);

(statearr_35868[(14)] = inst_35735);

(statearr_35868[(15)] = inst_35776);

(statearr_35868[(16)] = inst_35736);

(statearr_35868[(17)] = inst_35738);

return statearr_35868;
})();
var statearr_35869_35950 = state_35858__$1;
(statearr_35869_35950[(2)] = null);

(statearr_35869_35950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (39))){
var state_35858__$1 = state_35858;
var statearr_35873_35951 = state_35858__$1;
(statearr_35873_35951[(2)] = null);

(statearr_35873_35951[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (4))){
var inst_35726 = (state_35858[(10)]);
var inst_35726__$1 = (state_35858[(2)]);
var inst_35727 = (inst_35726__$1 == null);
var state_35858__$1 = (function (){var statearr_35874 = state_35858;
(statearr_35874[(10)] = inst_35726__$1);

return statearr_35874;
})();
if(cljs.core.truth_(inst_35727)){
var statearr_35875_35952 = state_35858__$1;
(statearr_35875_35952[(1)] = (5));

} else {
var statearr_35876_35953 = state_35858__$1;
(statearr_35876_35953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (15))){
var inst_35737 = (state_35858[(13)]);
var inst_35735 = (state_35858[(14)]);
var inst_35736 = (state_35858[(16)]);
var inst_35738 = (state_35858[(17)]);
var inst_35753 = (state_35858[(2)]);
var inst_35754 = (inst_35738 + (1));
var tmp35870 = inst_35737;
var tmp35871 = inst_35735;
var tmp35872 = inst_35736;
var inst_35735__$1 = tmp35871;
var inst_35736__$1 = tmp35872;
var inst_35737__$1 = tmp35870;
var inst_35738__$1 = inst_35754;
var state_35858__$1 = (function (){var statearr_35877 = state_35858;
(statearr_35877[(13)] = inst_35737__$1);

(statearr_35877[(14)] = inst_35735__$1);

(statearr_35877[(18)] = inst_35753);

(statearr_35877[(16)] = inst_35736__$1);

(statearr_35877[(17)] = inst_35738__$1);

return statearr_35877;
})();
var statearr_35878_35954 = state_35858__$1;
(statearr_35878_35954[(2)] = null);

(statearr_35878_35954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (21))){
var inst_35780 = (state_35858[(2)]);
var state_35858__$1 = state_35858;
var statearr_35882_35955 = state_35858__$1;
(statearr_35882_35955[(2)] = inst_35780);

(statearr_35882_35955[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (31))){
var inst_35806 = (state_35858[(11)]);
var inst_35810 = done.call(null,null);
var inst_35811 = cljs.core.async.untap_STAR_.call(null,m,inst_35806);
var state_35858__$1 = (function (){var statearr_35883 = state_35858;
(statearr_35883[(19)] = inst_35810);

return statearr_35883;
})();
var statearr_35884_35956 = state_35858__$1;
(statearr_35884_35956[(2)] = inst_35811);

(statearr_35884_35956[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (32))){
var inst_35801 = (state_35858[(9)]);
var inst_35798 = (state_35858[(20)]);
var inst_35800 = (state_35858[(21)]);
var inst_35799 = (state_35858[(12)]);
var inst_35813 = (state_35858[(2)]);
var inst_35814 = (inst_35801 + (1));
var tmp35879 = inst_35798;
var tmp35880 = inst_35800;
var tmp35881 = inst_35799;
var inst_35798__$1 = tmp35879;
var inst_35799__$1 = tmp35881;
var inst_35800__$1 = tmp35880;
var inst_35801__$1 = inst_35814;
var state_35858__$1 = (function (){var statearr_35885 = state_35858;
(statearr_35885[(22)] = inst_35813);

(statearr_35885[(9)] = inst_35801__$1);

(statearr_35885[(20)] = inst_35798__$1);

(statearr_35885[(21)] = inst_35800__$1);

(statearr_35885[(12)] = inst_35799__$1);

return statearr_35885;
})();
var statearr_35886_35957 = state_35858__$1;
(statearr_35886_35957[(2)] = null);

(statearr_35886_35957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (40))){
var inst_35826 = (state_35858[(23)]);
var inst_35830 = done.call(null,null);
var inst_35831 = cljs.core.async.untap_STAR_.call(null,m,inst_35826);
var state_35858__$1 = (function (){var statearr_35887 = state_35858;
(statearr_35887[(24)] = inst_35830);

return statearr_35887;
})();
var statearr_35888_35958 = state_35858__$1;
(statearr_35888_35958[(2)] = inst_35831);

(statearr_35888_35958[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (33))){
var inst_35817 = (state_35858[(25)]);
var inst_35819 = cljs.core.chunked_seq_QMARK_.call(null,inst_35817);
var state_35858__$1 = state_35858;
if(inst_35819){
var statearr_35889_35959 = state_35858__$1;
(statearr_35889_35959[(1)] = (36));

} else {
var statearr_35890_35960 = state_35858__$1;
(statearr_35890_35960[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (13))){
var inst_35747 = (state_35858[(26)]);
var inst_35750 = cljs.core.async.close_BANG_.call(null,inst_35747);
var state_35858__$1 = state_35858;
var statearr_35891_35961 = state_35858__$1;
(statearr_35891_35961[(2)] = inst_35750);

(statearr_35891_35961[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (22))){
var inst_35770 = (state_35858[(8)]);
var inst_35773 = cljs.core.async.close_BANG_.call(null,inst_35770);
var state_35858__$1 = state_35858;
var statearr_35892_35962 = state_35858__$1;
(statearr_35892_35962[(2)] = inst_35773);

(statearr_35892_35962[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (36))){
var inst_35817 = (state_35858[(25)]);
var inst_35821 = cljs.core.chunk_first.call(null,inst_35817);
var inst_35822 = cljs.core.chunk_rest.call(null,inst_35817);
var inst_35823 = cljs.core.count.call(null,inst_35821);
var inst_35798 = inst_35822;
var inst_35799 = inst_35821;
var inst_35800 = inst_35823;
var inst_35801 = (0);
var state_35858__$1 = (function (){var statearr_35893 = state_35858;
(statearr_35893[(9)] = inst_35801);

(statearr_35893[(20)] = inst_35798);

(statearr_35893[(21)] = inst_35800);

(statearr_35893[(12)] = inst_35799);

return statearr_35893;
})();
var statearr_35894_35963 = state_35858__$1;
(statearr_35894_35963[(2)] = null);

(statearr_35894_35963[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (41))){
var inst_35817 = (state_35858[(25)]);
var inst_35833 = (state_35858[(2)]);
var inst_35834 = cljs.core.next.call(null,inst_35817);
var inst_35798 = inst_35834;
var inst_35799 = null;
var inst_35800 = (0);
var inst_35801 = (0);
var state_35858__$1 = (function (){var statearr_35895 = state_35858;
(statearr_35895[(9)] = inst_35801);

(statearr_35895[(20)] = inst_35798);

(statearr_35895[(27)] = inst_35833);

(statearr_35895[(21)] = inst_35800);

(statearr_35895[(12)] = inst_35799);

return statearr_35895;
})();
var statearr_35896_35964 = state_35858__$1;
(statearr_35896_35964[(2)] = null);

(statearr_35896_35964[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (43))){
var state_35858__$1 = state_35858;
var statearr_35897_35965 = state_35858__$1;
(statearr_35897_35965[(2)] = null);

(statearr_35897_35965[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (29))){
var inst_35842 = (state_35858[(2)]);
var state_35858__$1 = state_35858;
var statearr_35898_35966 = state_35858__$1;
(statearr_35898_35966[(2)] = inst_35842);

(statearr_35898_35966[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (44))){
var inst_35851 = (state_35858[(2)]);
var state_35858__$1 = (function (){var statearr_35899 = state_35858;
(statearr_35899[(28)] = inst_35851);

return statearr_35899;
})();
var statearr_35900_35967 = state_35858__$1;
(statearr_35900_35967[(2)] = null);

(statearr_35900_35967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (6))){
var inst_35790 = (state_35858[(29)]);
var inst_35789 = cljs.core.deref.call(null,cs);
var inst_35790__$1 = cljs.core.keys.call(null,inst_35789);
var inst_35791 = cljs.core.count.call(null,inst_35790__$1);
var inst_35792 = cljs.core.reset_BANG_.call(null,dctr,inst_35791);
var inst_35797 = cljs.core.seq.call(null,inst_35790__$1);
var inst_35798 = inst_35797;
var inst_35799 = null;
var inst_35800 = (0);
var inst_35801 = (0);
var state_35858__$1 = (function (){var statearr_35901 = state_35858;
(statearr_35901[(29)] = inst_35790__$1);

(statearr_35901[(30)] = inst_35792);

(statearr_35901[(9)] = inst_35801);

(statearr_35901[(20)] = inst_35798);

(statearr_35901[(21)] = inst_35800);

(statearr_35901[(12)] = inst_35799);

return statearr_35901;
})();
var statearr_35902_35968 = state_35858__$1;
(statearr_35902_35968[(2)] = null);

(statearr_35902_35968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (28))){
var inst_35817 = (state_35858[(25)]);
var inst_35798 = (state_35858[(20)]);
var inst_35817__$1 = cljs.core.seq.call(null,inst_35798);
var state_35858__$1 = (function (){var statearr_35903 = state_35858;
(statearr_35903[(25)] = inst_35817__$1);

return statearr_35903;
})();
if(inst_35817__$1){
var statearr_35904_35969 = state_35858__$1;
(statearr_35904_35969[(1)] = (33));

} else {
var statearr_35905_35970 = state_35858__$1;
(statearr_35905_35970[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (25))){
var inst_35801 = (state_35858[(9)]);
var inst_35800 = (state_35858[(21)]);
var inst_35803 = (inst_35801 < inst_35800);
var inst_35804 = inst_35803;
var state_35858__$1 = state_35858;
if(cljs.core.truth_(inst_35804)){
var statearr_35906_35971 = state_35858__$1;
(statearr_35906_35971[(1)] = (27));

} else {
var statearr_35907_35972 = state_35858__$1;
(statearr_35907_35972[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (34))){
var state_35858__$1 = state_35858;
var statearr_35908_35973 = state_35858__$1;
(statearr_35908_35973[(2)] = null);

(statearr_35908_35973[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (17))){
var state_35858__$1 = state_35858;
var statearr_35909_35974 = state_35858__$1;
(statearr_35909_35974[(2)] = null);

(statearr_35909_35974[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (3))){
var inst_35856 = (state_35858[(2)]);
var state_35858__$1 = state_35858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35858__$1,inst_35856);
} else {
if((state_val_35859 === (12))){
var inst_35785 = (state_35858[(2)]);
var state_35858__$1 = state_35858;
var statearr_35910_35975 = state_35858__$1;
(statearr_35910_35975[(2)] = inst_35785);

(statearr_35910_35975[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (2))){
var state_35858__$1 = state_35858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35858__$1,(4),ch);
} else {
if((state_val_35859 === (23))){
var state_35858__$1 = state_35858;
var statearr_35911_35976 = state_35858__$1;
(statearr_35911_35976[(2)] = null);

(statearr_35911_35976[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (35))){
var inst_35840 = (state_35858[(2)]);
var state_35858__$1 = state_35858;
var statearr_35912_35977 = state_35858__$1;
(statearr_35912_35977[(2)] = inst_35840);

(statearr_35912_35977[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (19))){
var inst_35757 = (state_35858[(7)]);
var inst_35761 = cljs.core.chunk_first.call(null,inst_35757);
var inst_35762 = cljs.core.chunk_rest.call(null,inst_35757);
var inst_35763 = cljs.core.count.call(null,inst_35761);
var inst_35735 = inst_35762;
var inst_35736 = inst_35761;
var inst_35737 = inst_35763;
var inst_35738 = (0);
var state_35858__$1 = (function (){var statearr_35913 = state_35858;
(statearr_35913[(13)] = inst_35737);

(statearr_35913[(14)] = inst_35735);

(statearr_35913[(16)] = inst_35736);

(statearr_35913[(17)] = inst_35738);

return statearr_35913;
})();
var statearr_35914_35978 = state_35858__$1;
(statearr_35914_35978[(2)] = null);

(statearr_35914_35978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (11))){
var inst_35735 = (state_35858[(14)]);
var inst_35757 = (state_35858[(7)]);
var inst_35757__$1 = cljs.core.seq.call(null,inst_35735);
var state_35858__$1 = (function (){var statearr_35915 = state_35858;
(statearr_35915[(7)] = inst_35757__$1);

return statearr_35915;
})();
if(inst_35757__$1){
var statearr_35916_35979 = state_35858__$1;
(statearr_35916_35979[(1)] = (16));

} else {
var statearr_35917_35980 = state_35858__$1;
(statearr_35917_35980[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (9))){
var inst_35787 = (state_35858[(2)]);
var state_35858__$1 = state_35858;
var statearr_35918_35981 = state_35858__$1;
(statearr_35918_35981[(2)] = inst_35787);

(statearr_35918_35981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (5))){
var inst_35733 = cljs.core.deref.call(null,cs);
var inst_35734 = cljs.core.seq.call(null,inst_35733);
var inst_35735 = inst_35734;
var inst_35736 = null;
var inst_35737 = (0);
var inst_35738 = (0);
var state_35858__$1 = (function (){var statearr_35919 = state_35858;
(statearr_35919[(13)] = inst_35737);

(statearr_35919[(14)] = inst_35735);

(statearr_35919[(16)] = inst_35736);

(statearr_35919[(17)] = inst_35738);

return statearr_35919;
})();
var statearr_35920_35982 = state_35858__$1;
(statearr_35920_35982[(2)] = null);

(statearr_35920_35982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (14))){
var state_35858__$1 = state_35858;
var statearr_35921_35983 = state_35858__$1;
(statearr_35921_35983[(2)] = null);

(statearr_35921_35983[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (45))){
var inst_35848 = (state_35858[(2)]);
var state_35858__$1 = state_35858;
var statearr_35922_35984 = state_35858__$1;
(statearr_35922_35984[(2)] = inst_35848);

(statearr_35922_35984[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (26))){
var inst_35790 = (state_35858[(29)]);
var inst_35844 = (state_35858[(2)]);
var inst_35845 = cljs.core.seq.call(null,inst_35790);
var state_35858__$1 = (function (){var statearr_35923 = state_35858;
(statearr_35923[(31)] = inst_35844);

return statearr_35923;
})();
if(inst_35845){
var statearr_35924_35985 = state_35858__$1;
(statearr_35924_35985[(1)] = (42));

} else {
var statearr_35925_35986 = state_35858__$1;
(statearr_35925_35986[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (16))){
var inst_35757 = (state_35858[(7)]);
var inst_35759 = cljs.core.chunked_seq_QMARK_.call(null,inst_35757);
var state_35858__$1 = state_35858;
if(inst_35759){
var statearr_35926_35987 = state_35858__$1;
(statearr_35926_35987[(1)] = (19));

} else {
var statearr_35927_35988 = state_35858__$1;
(statearr_35927_35988[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (38))){
var inst_35837 = (state_35858[(2)]);
var state_35858__$1 = state_35858;
var statearr_35928_35989 = state_35858__$1;
(statearr_35928_35989[(2)] = inst_35837);

(statearr_35928_35989[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (30))){
var state_35858__$1 = state_35858;
var statearr_35929_35990 = state_35858__$1;
(statearr_35929_35990[(2)] = null);

(statearr_35929_35990[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (10))){
var inst_35736 = (state_35858[(16)]);
var inst_35738 = (state_35858[(17)]);
var inst_35746 = cljs.core._nth.call(null,inst_35736,inst_35738);
var inst_35747 = cljs.core.nth.call(null,inst_35746,(0),null);
var inst_35748 = cljs.core.nth.call(null,inst_35746,(1),null);
var state_35858__$1 = (function (){var statearr_35930 = state_35858;
(statearr_35930[(26)] = inst_35747);

return statearr_35930;
})();
if(cljs.core.truth_(inst_35748)){
var statearr_35931_35991 = state_35858__$1;
(statearr_35931_35991[(1)] = (13));

} else {
var statearr_35932_35992 = state_35858__$1;
(statearr_35932_35992[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (18))){
var inst_35783 = (state_35858[(2)]);
var state_35858__$1 = state_35858;
var statearr_35933_35993 = state_35858__$1;
(statearr_35933_35993[(2)] = inst_35783);

(statearr_35933_35993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (42))){
var state_35858__$1 = state_35858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35858__$1,(45),dchan);
} else {
if((state_val_35859 === (37))){
var inst_35817 = (state_35858[(25)]);
var inst_35826 = (state_35858[(23)]);
var inst_35726 = (state_35858[(10)]);
var inst_35826__$1 = cljs.core.first.call(null,inst_35817);
var inst_35827 = cljs.core.async.put_BANG_.call(null,inst_35826__$1,inst_35726,done);
var state_35858__$1 = (function (){var statearr_35934 = state_35858;
(statearr_35934[(23)] = inst_35826__$1);

return statearr_35934;
})();
if(cljs.core.truth_(inst_35827)){
var statearr_35935_35994 = state_35858__$1;
(statearr_35935_35994[(1)] = (39));

} else {
var statearr_35936_35995 = state_35858__$1;
(statearr_35936_35995[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35859 === (8))){
var inst_35737 = (state_35858[(13)]);
var inst_35738 = (state_35858[(17)]);
var inst_35740 = (inst_35738 < inst_35737);
var inst_35741 = inst_35740;
var state_35858__$1 = state_35858;
if(cljs.core.truth_(inst_35741)){
var statearr_35937_35996 = state_35858__$1;
(statearr_35937_35996[(1)] = (10));

} else {
var statearr_35938_35997 = state_35858__$1;
(statearr_35938_35997[(1)] = (11));

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
});})(c__35124__auto___35943,cs,m,dchan,dctr,done))
;
return ((function (switch__35034__auto__,c__35124__auto___35943,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__35035__auto__ = null;
var cljs$core$async$mult_$_state_machine__35035__auto____0 = (function (){
var statearr_35939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35939[(0)] = cljs$core$async$mult_$_state_machine__35035__auto__);

(statearr_35939[(1)] = (1));

return statearr_35939;
});
var cljs$core$async$mult_$_state_machine__35035__auto____1 = (function (state_35858){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_35858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e35940){if((e35940 instanceof Object)){
var ex__35038__auto__ = e35940;
var statearr_35941_35998 = state_35858;
(statearr_35941_35998[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35999 = state_35858;
state_35858 = G__35999;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35035__auto__ = function(state_35858){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35035__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35035__auto____1.call(this,state_35858);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35035__auto____0;
cljs$core$async$mult_$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35035__auto____1;
return cljs$core$async$mult_$_state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto___35943,cs,m,dchan,dctr,done))
})();
var state__35126__auto__ = (function (){var statearr_35942 = f__35125__auto__.call(null);
(statearr_35942[(6)] = c__35124__auto___35943);

return statearr_35942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto___35943,cs,m,dchan,dctr,done))
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
var G__36001 = arguments.length;
switch (G__36001) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var x__31082__auto__ = (((m == null))?null:m);
var m__31083__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__31082__auto__)]);
if(!((m__31083__auto__ == null))){
return m__31083__auto__.call(null,m,ch);
} else {
var m__31083__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__31083__auto____$1 == null))){
return m__31083__auto____$1.call(null,m,ch);
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
var x__31082__auto__ = (((m == null))?null:m);
var m__31083__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__31082__auto__)]);
if(!((m__31083__auto__ == null))){
return m__31083__auto__.call(null,m,ch);
} else {
var m__31083__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__31083__auto____$1 == null))){
return m__31083__auto____$1.call(null,m,ch);
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
var x__31082__auto__ = (((m == null))?null:m);
var m__31083__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__31082__auto__)]);
if(!((m__31083__auto__ == null))){
return m__31083__auto__.call(null,m);
} else {
var m__31083__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__31083__auto____$1 == null))){
return m__31083__auto____$1.call(null,m);
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
var x__31082__auto__ = (((m == null))?null:m);
var m__31083__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__31082__auto__)]);
if(!((m__31083__auto__ == null))){
return m__31083__auto__.call(null,m,state_map);
} else {
var m__31083__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__31083__auto____$1 == null))){
return m__31083__auto____$1.call(null,m,state_map);
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
var x__31082__auto__ = (((m == null))?null:m);
var m__31083__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__31082__auto__)]);
if(!((m__31083__auto__ == null))){
return m__31083__auto__.call(null,m,mode);
} else {
var m__31083__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__31083__auto____$1 == null))){
return m__31083__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31633__auto__ = [];
var len__31626__auto___36013 = arguments.length;
var i__31627__auto___36014 = (0);
while(true){
if((i__31627__auto___36014 < len__31626__auto___36013)){
args__31633__auto__.push((arguments[i__31627__auto___36014]));

var G__36015 = (i__31627__auto___36014 + (1));
i__31627__auto___36014 = G__36015;
continue;
} else {
}
break;
}

var argseq__31634__auto__ = ((((3) < args__31633__auto__.length))?(new cljs.core.IndexedSeq(args__31633__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31634__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36007){
var map__36008 = p__36007;
var map__36008__$1 = ((((!((map__36008 == null)))?((((map__36008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36008.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36008):map__36008);
var opts = map__36008__$1;
var statearr_36010_36016 = state;
(statearr_36010_36016[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__36008,map__36008__$1,opts){
return (function (val){
var statearr_36011_36017 = state;
(statearr_36011_36017[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__36008,map__36008__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_36012_36018 = state;
(statearr_36012_36018[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36003){
var G__36004 = cljs.core.first.call(null,seq36003);
var seq36003__$1 = cljs.core.next.call(null,seq36003);
var G__36005 = cljs.core.first.call(null,seq36003__$1);
var seq36003__$2 = cljs.core.next.call(null,seq36003__$1);
var G__36006 = cljs.core.first.call(null,seq36003__$2);
var seq36003__$3 = cljs.core.next.call(null,seq36003__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36004,G__36005,G__36006,seq36003__$3);
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
if(typeof cljs.core.async.t_cljs$core$async36019 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36019 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta36020){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta36020 = meta36020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36021,meta36020__$1){
var self__ = this;
var _36021__$1 = this;
return (new cljs.core.async.t_cljs$core$async36019(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta36020__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36019.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36021){
var self__ = this;
var _36021__$1 = this;
return self__.meta36020;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36019.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36019.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36019.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36019.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36019.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36019.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36019.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36019.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36019.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta36020","meta36020",-1983703842,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36019.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36019";

cljs.core.async.t_cljs$core$async36019.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__31020__auto__,writer__31021__auto__,opt__31022__auto__){
return cljs.core._write.call(null,writer__31021__auto__,"cljs.core.async/t_cljs$core$async36019");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async36019 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async36019(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta36020){
return (new cljs.core.async.t_cljs$core$async36019(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta36020));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async36019(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35124__auto___36183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto___36183,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto___36183,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36123){
var state_val_36124 = (state_36123[(1)]);
if((state_val_36124 === (7))){
var inst_36038 = (state_36123[(2)]);
var state_36123__$1 = state_36123;
var statearr_36125_36184 = state_36123__$1;
(statearr_36125_36184[(2)] = inst_36038);

(statearr_36125_36184[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (20))){
var inst_36050 = (state_36123[(7)]);
var state_36123__$1 = state_36123;
var statearr_36126_36185 = state_36123__$1;
(statearr_36126_36185[(2)] = inst_36050);

(statearr_36126_36185[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (27))){
var state_36123__$1 = state_36123;
var statearr_36127_36186 = state_36123__$1;
(statearr_36127_36186[(2)] = null);

(statearr_36127_36186[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (1))){
var inst_36025 = (state_36123[(8)]);
var inst_36025__$1 = calc_state.call(null);
var inst_36027 = (inst_36025__$1 == null);
var inst_36028 = cljs.core.not.call(null,inst_36027);
var state_36123__$1 = (function (){var statearr_36128 = state_36123;
(statearr_36128[(8)] = inst_36025__$1);

return statearr_36128;
})();
if(inst_36028){
var statearr_36129_36187 = state_36123__$1;
(statearr_36129_36187[(1)] = (2));

} else {
var statearr_36130_36188 = state_36123__$1;
(statearr_36130_36188[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (24))){
var inst_36083 = (state_36123[(9)]);
var inst_36097 = (state_36123[(10)]);
var inst_36074 = (state_36123[(11)]);
var inst_36097__$1 = inst_36074.call(null,inst_36083);
var state_36123__$1 = (function (){var statearr_36131 = state_36123;
(statearr_36131[(10)] = inst_36097__$1);

return statearr_36131;
})();
if(cljs.core.truth_(inst_36097__$1)){
var statearr_36132_36189 = state_36123__$1;
(statearr_36132_36189[(1)] = (29));

} else {
var statearr_36133_36190 = state_36123__$1;
(statearr_36133_36190[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (4))){
var inst_36041 = (state_36123[(2)]);
var state_36123__$1 = state_36123;
if(cljs.core.truth_(inst_36041)){
var statearr_36134_36191 = state_36123__$1;
(statearr_36134_36191[(1)] = (8));

} else {
var statearr_36135_36192 = state_36123__$1;
(statearr_36135_36192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (15))){
var inst_36068 = (state_36123[(2)]);
var state_36123__$1 = state_36123;
if(cljs.core.truth_(inst_36068)){
var statearr_36136_36193 = state_36123__$1;
(statearr_36136_36193[(1)] = (19));

} else {
var statearr_36137_36194 = state_36123__$1;
(statearr_36137_36194[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (21))){
var inst_36073 = (state_36123[(12)]);
var inst_36073__$1 = (state_36123[(2)]);
var inst_36074 = cljs.core.get.call(null,inst_36073__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36075 = cljs.core.get.call(null,inst_36073__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36076 = cljs.core.get.call(null,inst_36073__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36123__$1 = (function (){var statearr_36138 = state_36123;
(statearr_36138[(12)] = inst_36073__$1);

(statearr_36138[(13)] = inst_36075);

(statearr_36138[(11)] = inst_36074);

return statearr_36138;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36123__$1,(22),inst_36076);
} else {
if((state_val_36124 === (31))){
var inst_36105 = (state_36123[(2)]);
var state_36123__$1 = state_36123;
if(cljs.core.truth_(inst_36105)){
var statearr_36139_36195 = state_36123__$1;
(statearr_36139_36195[(1)] = (32));

} else {
var statearr_36140_36196 = state_36123__$1;
(statearr_36140_36196[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (32))){
var inst_36082 = (state_36123[(14)]);
var state_36123__$1 = state_36123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36123__$1,(35),out,inst_36082);
} else {
if((state_val_36124 === (33))){
var inst_36073 = (state_36123[(12)]);
var inst_36050 = inst_36073;
var state_36123__$1 = (function (){var statearr_36141 = state_36123;
(statearr_36141[(7)] = inst_36050);

return statearr_36141;
})();
var statearr_36142_36197 = state_36123__$1;
(statearr_36142_36197[(2)] = null);

(statearr_36142_36197[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (13))){
var inst_36050 = (state_36123[(7)]);
var inst_36057 = inst_36050.cljs$lang$protocol_mask$partition0$;
var inst_36058 = (inst_36057 & (64));
var inst_36059 = inst_36050.cljs$core$ISeq$;
var inst_36060 = (cljs.core.PROTOCOL_SENTINEL === inst_36059);
var inst_36061 = (inst_36058) || (inst_36060);
var state_36123__$1 = state_36123;
if(cljs.core.truth_(inst_36061)){
var statearr_36143_36198 = state_36123__$1;
(statearr_36143_36198[(1)] = (16));

} else {
var statearr_36144_36199 = state_36123__$1;
(statearr_36144_36199[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (22))){
var inst_36083 = (state_36123[(9)]);
var inst_36082 = (state_36123[(14)]);
var inst_36081 = (state_36123[(2)]);
var inst_36082__$1 = cljs.core.nth.call(null,inst_36081,(0),null);
var inst_36083__$1 = cljs.core.nth.call(null,inst_36081,(1),null);
var inst_36084 = (inst_36082__$1 == null);
var inst_36085 = cljs.core._EQ_.call(null,inst_36083__$1,change);
var inst_36086 = (inst_36084) || (inst_36085);
var state_36123__$1 = (function (){var statearr_36145 = state_36123;
(statearr_36145[(9)] = inst_36083__$1);

(statearr_36145[(14)] = inst_36082__$1);

return statearr_36145;
})();
if(cljs.core.truth_(inst_36086)){
var statearr_36146_36200 = state_36123__$1;
(statearr_36146_36200[(1)] = (23));

} else {
var statearr_36147_36201 = state_36123__$1;
(statearr_36147_36201[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (36))){
var inst_36073 = (state_36123[(12)]);
var inst_36050 = inst_36073;
var state_36123__$1 = (function (){var statearr_36148 = state_36123;
(statearr_36148[(7)] = inst_36050);

return statearr_36148;
})();
var statearr_36149_36202 = state_36123__$1;
(statearr_36149_36202[(2)] = null);

(statearr_36149_36202[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (29))){
var inst_36097 = (state_36123[(10)]);
var state_36123__$1 = state_36123;
var statearr_36150_36203 = state_36123__$1;
(statearr_36150_36203[(2)] = inst_36097);

(statearr_36150_36203[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (6))){
var state_36123__$1 = state_36123;
var statearr_36151_36204 = state_36123__$1;
(statearr_36151_36204[(2)] = false);

(statearr_36151_36204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (28))){
var inst_36093 = (state_36123[(2)]);
var inst_36094 = calc_state.call(null);
var inst_36050 = inst_36094;
var state_36123__$1 = (function (){var statearr_36152 = state_36123;
(statearr_36152[(7)] = inst_36050);

(statearr_36152[(15)] = inst_36093);

return statearr_36152;
})();
var statearr_36153_36205 = state_36123__$1;
(statearr_36153_36205[(2)] = null);

(statearr_36153_36205[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (25))){
var inst_36119 = (state_36123[(2)]);
var state_36123__$1 = state_36123;
var statearr_36154_36206 = state_36123__$1;
(statearr_36154_36206[(2)] = inst_36119);

(statearr_36154_36206[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (34))){
var inst_36117 = (state_36123[(2)]);
var state_36123__$1 = state_36123;
var statearr_36155_36207 = state_36123__$1;
(statearr_36155_36207[(2)] = inst_36117);

(statearr_36155_36207[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (17))){
var state_36123__$1 = state_36123;
var statearr_36156_36208 = state_36123__$1;
(statearr_36156_36208[(2)] = false);

(statearr_36156_36208[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (3))){
var state_36123__$1 = state_36123;
var statearr_36157_36209 = state_36123__$1;
(statearr_36157_36209[(2)] = false);

(statearr_36157_36209[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (12))){
var inst_36121 = (state_36123[(2)]);
var state_36123__$1 = state_36123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36123__$1,inst_36121);
} else {
if((state_val_36124 === (2))){
var inst_36025 = (state_36123[(8)]);
var inst_36030 = inst_36025.cljs$lang$protocol_mask$partition0$;
var inst_36031 = (inst_36030 & (64));
var inst_36032 = inst_36025.cljs$core$ISeq$;
var inst_36033 = (cljs.core.PROTOCOL_SENTINEL === inst_36032);
var inst_36034 = (inst_36031) || (inst_36033);
var state_36123__$1 = state_36123;
if(cljs.core.truth_(inst_36034)){
var statearr_36158_36210 = state_36123__$1;
(statearr_36158_36210[(1)] = (5));

} else {
var statearr_36159_36211 = state_36123__$1;
(statearr_36159_36211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (23))){
var inst_36082 = (state_36123[(14)]);
var inst_36088 = (inst_36082 == null);
var state_36123__$1 = state_36123;
if(cljs.core.truth_(inst_36088)){
var statearr_36160_36212 = state_36123__$1;
(statearr_36160_36212[(1)] = (26));

} else {
var statearr_36161_36213 = state_36123__$1;
(statearr_36161_36213[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (35))){
var inst_36108 = (state_36123[(2)]);
var state_36123__$1 = state_36123;
if(cljs.core.truth_(inst_36108)){
var statearr_36162_36214 = state_36123__$1;
(statearr_36162_36214[(1)] = (36));

} else {
var statearr_36163_36215 = state_36123__$1;
(statearr_36163_36215[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (19))){
var inst_36050 = (state_36123[(7)]);
var inst_36070 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36050);
var state_36123__$1 = state_36123;
var statearr_36164_36216 = state_36123__$1;
(statearr_36164_36216[(2)] = inst_36070);

(statearr_36164_36216[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (11))){
var inst_36050 = (state_36123[(7)]);
var inst_36054 = (inst_36050 == null);
var inst_36055 = cljs.core.not.call(null,inst_36054);
var state_36123__$1 = state_36123;
if(inst_36055){
var statearr_36165_36217 = state_36123__$1;
(statearr_36165_36217[(1)] = (13));

} else {
var statearr_36166_36218 = state_36123__$1;
(statearr_36166_36218[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (9))){
var inst_36025 = (state_36123[(8)]);
var state_36123__$1 = state_36123;
var statearr_36167_36219 = state_36123__$1;
(statearr_36167_36219[(2)] = inst_36025);

(statearr_36167_36219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (5))){
var state_36123__$1 = state_36123;
var statearr_36168_36220 = state_36123__$1;
(statearr_36168_36220[(2)] = true);

(statearr_36168_36220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (14))){
var state_36123__$1 = state_36123;
var statearr_36169_36221 = state_36123__$1;
(statearr_36169_36221[(2)] = false);

(statearr_36169_36221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (26))){
var inst_36083 = (state_36123[(9)]);
var inst_36090 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36083);
var state_36123__$1 = state_36123;
var statearr_36170_36222 = state_36123__$1;
(statearr_36170_36222[(2)] = inst_36090);

(statearr_36170_36222[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (16))){
var state_36123__$1 = state_36123;
var statearr_36171_36223 = state_36123__$1;
(statearr_36171_36223[(2)] = true);

(statearr_36171_36223[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (38))){
var inst_36113 = (state_36123[(2)]);
var state_36123__$1 = state_36123;
var statearr_36172_36224 = state_36123__$1;
(statearr_36172_36224[(2)] = inst_36113);

(statearr_36172_36224[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (30))){
var inst_36083 = (state_36123[(9)]);
var inst_36075 = (state_36123[(13)]);
var inst_36074 = (state_36123[(11)]);
var inst_36100 = cljs.core.empty_QMARK_.call(null,inst_36074);
var inst_36101 = inst_36075.call(null,inst_36083);
var inst_36102 = cljs.core.not.call(null,inst_36101);
var inst_36103 = (inst_36100) && (inst_36102);
var state_36123__$1 = state_36123;
var statearr_36173_36225 = state_36123__$1;
(statearr_36173_36225[(2)] = inst_36103);

(statearr_36173_36225[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (10))){
var inst_36025 = (state_36123[(8)]);
var inst_36046 = (state_36123[(2)]);
var inst_36047 = cljs.core.get.call(null,inst_36046,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36048 = cljs.core.get.call(null,inst_36046,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36049 = cljs.core.get.call(null,inst_36046,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36050 = inst_36025;
var state_36123__$1 = (function (){var statearr_36174 = state_36123;
(statearr_36174[(16)] = inst_36049);

(statearr_36174[(7)] = inst_36050);

(statearr_36174[(17)] = inst_36048);

(statearr_36174[(18)] = inst_36047);

return statearr_36174;
})();
var statearr_36175_36226 = state_36123__$1;
(statearr_36175_36226[(2)] = null);

(statearr_36175_36226[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (18))){
var inst_36065 = (state_36123[(2)]);
var state_36123__$1 = state_36123;
var statearr_36176_36227 = state_36123__$1;
(statearr_36176_36227[(2)] = inst_36065);

(statearr_36176_36227[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (37))){
var state_36123__$1 = state_36123;
var statearr_36177_36228 = state_36123__$1;
(statearr_36177_36228[(2)] = null);

(statearr_36177_36228[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36124 === (8))){
var inst_36025 = (state_36123[(8)]);
var inst_36043 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36025);
var state_36123__$1 = state_36123;
var statearr_36178_36229 = state_36123__$1;
(statearr_36178_36229[(2)] = inst_36043);

(statearr_36178_36229[(1)] = (10));


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
});})(c__35124__auto___36183,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__35034__auto__,c__35124__auto___36183,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__35035__auto__ = null;
var cljs$core$async$mix_$_state_machine__35035__auto____0 = (function (){
var statearr_36179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36179[(0)] = cljs$core$async$mix_$_state_machine__35035__auto__);

(statearr_36179[(1)] = (1));

return statearr_36179;
});
var cljs$core$async$mix_$_state_machine__35035__auto____1 = (function (state_36123){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_36123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e36180){if((e36180 instanceof Object)){
var ex__35038__auto__ = e36180;
var statearr_36181_36230 = state_36123;
(statearr_36181_36230[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36231 = state_36123;
state_36123 = G__36231;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35035__auto__ = function(state_36123){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35035__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35035__auto____1.call(this,state_36123);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35035__auto____0;
cljs$core$async$mix_$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35035__auto____1;
return cljs$core$async$mix_$_state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto___36183,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__35126__auto__ = (function (){var statearr_36182 = f__35125__auto__.call(null);
(statearr_36182[(6)] = c__35124__auto___36183);

return statearr_36182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto___36183,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__31082__auto__ = (((p == null))?null:p);
var m__31083__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__31082__auto__)]);
if(!((m__31083__auto__ == null))){
return m__31083__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__31083__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__31083__auto____$1 == null))){
return m__31083__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__31082__auto__ = (((p == null))?null:p);
var m__31083__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__31082__auto__)]);
if(!((m__31083__auto__ == null))){
return m__31083__auto__.call(null,p,v,ch);
} else {
var m__31083__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__31083__auto____$1 == null))){
return m__31083__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__36233 = arguments.length;
switch (G__36233) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__31082__auto__ = (((p == null))?null:p);
var m__31083__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31082__auto__)]);
if(!((m__31083__auto__ == null))){
return m__31083__auto__.call(null,p);
} else {
var m__31083__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31083__auto____$1 == null))){
return m__31083__auto____$1.call(null,p);
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
var x__31082__auto__ = (((p == null))?null:p);
var m__31083__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31082__auto__)]);
if(!((m__31083__auto__ == null))){
return m__31083__auto__.call(null,p,v);
} else {
var m__31083__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31083__auto____$1 == null))){
return m__31083__auto____$1.call(null,p,v);
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
var G__36237 = arguments.length;
switch (G__36237) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30349__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30349__auto__)){
return or__30349__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30349__auto__,mults){
return (function (p1__36235_SHARP_){
if(cljs.core.truth_(p1__36235_SHARP_.call(null,topic))){
return p1__36235_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__36235_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30349__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async36238 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36238 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36239){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36239 = meta36239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36240,meta36239__$1){
var self__ = this;
var _36240__$1 = this;
return (new cljs.core.async.t_cljs$core$async36238(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36239__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36238.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36240){
var self__ = this;
var _36240__$1 = this;
return self__.meta36239;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36238.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36238.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36238.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36238.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36238.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5278__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5278__auto__)){
var m = temp__5278__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36238.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36238.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36238.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36239","meta36239",-1113187411,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36238.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36238";

cljs.core.async.t_cljs$core$async36238.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__31020__auto__,writer__31021__auto__,opt__31022__auto__){
return cljs.core._write.call(null,writer__31021__auto__,"cljs.core.async/t_cljs$core$async36238");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async36238 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async36238(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36239){
return (new cljs.core.async.t_cljs$core$async36238(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36239));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async36238(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35124__auto___36358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto___36358,mults,ensure_mult,p){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto___36358,mults,ensure_mult,p){
return (function (state_36312){
var state_val_36313 = (state_36312[(1)]);
if((state_val_36313 === (7))){
var inst_36308 = (state_36312[(2)]);
var state_36312__$1 = state_36312;
var statearr_36314_36359 = state_36312__$1;
(statearr_36314_36359[(2)] = inst_36308);

(statearr_36314_36359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (20))){
var state_36312__$1 = state_36312;
var statearr_36315_36360 = state_36312__$1;
(statearr_36315_36360[(2)] = null);

(statearr_36315_36360[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (1))){
var state_36312__$1 = state_36312;
var statearr_36316_36361 = state_36312__$1;
(statearr_36316_36361[(2)] = null);

(statearr_36316_36361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (24))){
var inst_36291 = (state_36312[(7)]);
var inst_36300 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36291);
var state_36312__$1 = state_36312;
var statearr_36317_36362 = state_36312__$1;
(statearr_36317_36362[(2)] = inst_36300);

(statearr_36317_36362[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (4))){
var inst_36243 = (state_36312[(8)]);
var inst_36243__$1 = (state_36312[(2)]);
var inst_36244 = (inst_36243__$1 == null);
var state_36312__$1 = (function (){var statearr_36318 = state_36312;
(statearr_36318[(8)] = inst_36243__$1);

return statearr_36318;
})();
if(cljs.core.truth_(inst_36244)){
var statearr_36319_36363 = state_36312__$1;
(statearr_36319_36363[(1)] = (5));

} else {
var statearr_36320_36364 = state_36312__$1;
(statearr_36320_36364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (15))){
var inst_36285 = (state_36312[(2)]);
var state_36312__$1 = state_36312;
var statearr_36321_36365 = state_36312__$1;
(statearr_36321_36365[(2)] = inst_36285);

(statearr_36321_36365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (21))){
var inst_36305 = (state_36312[(2)]);
var state_36312__$1 = (function (){var statearr_36322 = state_36312;
(statearr_36322[(9)] = inst_36305);

return statearr_36322;
})();
var statearr_36323_36366 = state_36312__$1;
(statearr_36323_36366[(2)] = null);

(statearr_36323_36366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (13))){
var inst_36267 = (state_36312[(10)]);
var inst_36269 = cljs.core.chunked_seq_QMARK_.call(null,inst_36267);
var state_36312__$1 = state_36312;
if(inst_36269){
var statearr_36324_36367 = state_36312__$1;
(statearr_36324_36367[(1)] = (16));

} else {
var statearr_36325_36368 = state_36312__$1;
(statearr_36325_36368[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (22))){
var inst_36297 = (state_36312[(2)]);
var state_36312__$1 = state_36312;
if(cljs.core.truth_(inst_36297)){
var statearr_36326_36369 = state_36312__$1;
(statearr_36326_36369[(1)] = (23));

} else {
var statearr_36327_36370 = state_36312__$1;
(statearr_36327_36370[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (6))){
var inst_36243 = (state_36312[(8)]);
var inst_36291 = (state_36312[(7)]);
var inst_36293 = (state_36312[(11)]);
var inst_36291__$1 = topic_fn.call(null,inst_36243);
var inst_36292 = cljs.core.deref.call(null,mults);
var inst_36293__$1 = cljs.core.get.call(null,inst_36292,inst_36291__$1);
var state_36312__$1 = (function (){var statearr_36328 = state_36312;
(statearr_36328[(7)] = inst_36291__$1);

(statearr_36328[(11)] = inst_36293__$1);

return statearr_36328;
})();
if(cljs.core.truth_(inst_36293__$1)){
var statearr_36329_36371 = state_36312__$1;
(statearr_36329_36371[(1)] = (19));

} else {
var statearr_36330_36372 = state_36312__$1;
(statearr_36330_36372[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (25))){
var inst_36302 = (state_36312[(2)]);
var state_36312__$1 = state_36312;
var statearr_36331_36373 = state_36312__$1;
(statearr_36331_36373[(2)] = inst_36302);

(statearr_36331_36373[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (17))){
var inst_36267 = (state_36312[(10)]);
var inst_36276 = cljs.core.first.call(null,inst_36267);
var inst_36277 = cljs.core.async.muxch_STAR_.call(null,inst_36276);
var inst_36278 = cljs.core.async.close_BANG_.call(null,inst_36277);
var inst_36279 = cljs.core.next.call(null,inst_36267);
var inst_36253 = inst_36279;
var inst_36254 = null;
var inst_36255 = (0);
var inst_36256 = (0);
var state_36312__$1 = (function (){var statearr_36332 = state_36312;
(statearr_36332[(12)] = inst_36254);

(statearr_36332[(13)] = inst_36256);

(statearr_36332[(14)] = inst_36255);

(statearr_36332[(15)] = inst_36278);

(statearr_36332[(16)] = inst_36253);

return statearr_36332;
})();
var statearr_36333_36374 = state_36312__$1;
(statearr_36333_36374[(2)] = null);

(statearr_36333_36374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (3))){
var inst_36310 = (state_36312[(2)]);
var state_36312__$1 = state_36312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36312__$1,inst_36310);
} else {
if((state_val_36313 === (12))){
var inst_36287 = (state_36312[(2)]);
var state_36312__$1 = state_36312;
var statearr_36334_36375 = state_36312__$1;
(statearr_36334_36375[(2)] = inst_36287);

(statearr_36334_36375[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (2))){
var state_36312__$1 = state_36312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36312__$1,(4),ch);
} else {
if((state_val_36313 === (23))){
var state_36312__$1 = state_36312;
var statearr_36335_36376 = state_36312__$1;
(statearr_36335_36376[(2)] = null);

(statearr_36335_36376[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (19))){
var inst_36243 = (state_36312[(8)]);
var inst_36293 = (state_36312[(11)]);
var inst_36295 = cljs.core.async.muxch_STAR_.call(null,inst_36293);
var state_36312__$1 = state_36312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36312__$1,(22),inst_36295,inst_36243);
} else {
if((state_val_36313 === (11))){
var inst_36253 = (state_36312[(16)]);
var inst_36267 = (state_36312[(10)]);
var inst_36267__$1 = cljs.core.seq.call(null,inst_36253);
var state_36312__$1 = (function (){var statearr_36336 = state_36312;
(statearr_36336[(10)] = inst_36267__$1);

return statearr_36336;
})();
if(inst_36267__$1){
var statearr_36337_36377 = state_36312__$1;
(statearr_36337_36377[(1)] = (13));

} else {
var statearr_36338_36378 = state_36312__$1;
(statearr_36338_36378[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (9))){
var inst_36289 = (state_36312[(2)]);
var state_36312__$1 = state_36312;
var statearr_36339_36379 = state_36312__$1;
(statearr_36339_36379[(2)] = inst_36289);

(statearr_36339_36379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (5))){
var inst_36250 = cljs.core.deref.call(null,mults);
var inst_36251 = cljs.core.vals.call(null,inst_36250);
var inst_36252 = cljs.core.seq.call(null,inst_36251);
var inst_36253 = inst_36252;
var inst_36254 = null;
var inst_36255 = (0);
var inst_36256 = (0);
var state_36312__$1 = (function (){var statearr_36340 = state_36312;
(statearr_36340[(12)] = inst_36254);

(statearr_36340[(13)] = inst_36256);

(statearr_36340[(14)] = inst_36255);

(statearr_36340[(16)] = inst_36253);

return statearr_36340;
})();
var statearr_36341_36380 = state_36312__$1;
(statearr_36341_36380[(2)] = null);

(statearr_36341_36380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (14))){
var state_36312__$1 = state_36312;
var statearr_36345_36381 = state_36312__$1;
(statearr_36345_36381[(2)] = null);

(statearr_36345_36381[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (16))){
var inst_36267 = (state_36312[(10)]);
var inst_36271 = cljs.core.chunk_first.call(null,inst_36267);
var inst_36272 = cljs.core.chunk_rest.call(null,inst_36267);
var inst_36273 = cljs.core.count.call(null,inst_36271);
var inst_36253 = inst_36272;
var inst_36254 = inst_36271;
var inst_36255 = inst_36273;
var inst_36256 = (0);
var state_36312__$1 = (function (){var statearr_36346 = state_36312;
(statearr_36346[(12)] = inst_36254);

(statearr_36346[(13)] = inst_36256);

(statearr_36346[(14)] = inst_36255);

(statearr_36346[(16)] = inst_36253);

return statearr_36346;
})();
var statearr_36347_36382 = state_36312__$1;
(statearr_36347_36382[(2)] = null);

(statearr_36347_36382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (10))){
var inst_36254 = (state_36312[(12)]);
var inst_36256 = (state_36312[(13)]);
var inst_36255 = (state_36312[(14)]);
var inst_36253 = (state_36312[(16)]);
var inst_36261 = cljs.core._nth.call(null,inst_36254,inst_36256);
var inst_36262 = cljs.core.async.muxch_STAR_.call(null,inst_36261);
var inst_36263 = cljs.core.async.close_BANG_.call(null,inst_36262);
var inst_36264 = (inst_36256 + (1));
var tmp36342 = inst_36254;
var tmp36343 = inst_36255;
var tmp36344 = inst_36253;
var inst_36253__$1 = tmp36344;
var inst_36254__$1 = tmp36342;
var inst_36255__$1 = tmp36343;
var inst_36256__$1 = inst_36264;
var state_36312__$1 = (function (){var statearr_36348 = state_36312;
(statearr_36348[(17)] = inst_36263);

(statearr_36348[(12)] = inst_36254__$1);

(statearr_36348[(13)] = inst_36256__$1);

(statearr_36348[(14)] = inst_36255__$1);

(statearr_36348[(16)] = inst_36253__$1);

return statearr_36348;
})();
var statearr_36349_36383 = state_36312__$1;
(statearr_36349_36383[(2)] = null);

(statearr_36349_36383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (18))){
var inst_36282 = (state_36312[(2)]);
var state_36312__$1 = state_36312;
var statearr_36350_36384 = state_36312__$1;
(statearr_36350_36384[(2)] = inst_36282);

(statearr_36350_36384[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (8))){
var inst_36256 = (state_36312[(13)]);
var inst_36255 = (state_36312[(14)]);
var inst_36258 = (inst_36256 < inst_36255);
var inst_36259 = inst_36258;
var state_36312__$1 = state_36312;
if(cljs.core.truth_(inst_36259)){
var statearr_36351_36385 = state_36312__$1;
(statearr_36351_36385[(1)] = (10));

} else {
var statearr_36352_36386 = state_36312__$1;
(statearr_36352_36386[(1)] = (11));

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
});})(c__35124__auto___36358,mults,ensure_mult,p))
;
return ((function (switch__35034__auto__,c__35124__auto___36358,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__35035__auto__ = null;
var cljs$core$async$state_machine__35035__auto____0 = (function (){
var statearr_36353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36353[(0)] = cljs$core$async$state_machine__35035__auto__);

(statearr_36353[(1)] = (1));

return statearr_36353;
});
var cljs$core$async$state_machine__35035__auto____1 = (function (state_36312){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_36312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e36354){if((e36354 instanceof Object)){
var ex__35038__auto__ = e36354;
var statearr_36355_36387 = state_36312;
(statearr_36355_36387[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36388 = state_36312;
state_36312 = G__36388;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
cljs$core$async$state_machine__35035__auto__ = function(state_36312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35035__auto____1.call(this,state_36312);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35035__auto____0;
cljs$core$async$state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35035__auto____1;
return cljs$core$async$state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto___36358,mults,ensure_mult,p))
})();
var state__35126__auto__ = (function (){var statearr_36356 = f__35125__auto__.call(null);
(statearr_36356[(6)] = c__35124__auto___36358);

return statearr_36356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto___36358,mults,ensure_mult,p))
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
var G__36390 = arguments.length;
switch (G__36390) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__36393 = arguments.length;
switch (G__36393) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__36396 = arguments.length;
switch (G__36396) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__35124__auto___36463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto___36463,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto___36463,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36435){
var state_val_36436 = (state_36435[(1)]);
if((state_val_36436 === (7))){
var state_36435__$1 = state_36435;
var statearr_36437_36464 = state_36435__$1;
(statearr_36437_36464[(2)] = null);

(statearr_36437_36464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36436 === (1))){
var state_36435__$1 = state_36435;
var statearr_36438_36465 = state_36435__$1;
(statearr_36438_36465[(2)] = null);

(statearr_36438_36465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36436 === (4))){
var inst_36399 = (state_36435[(7)]);
var inst_36401 = (inst_36399 < cnt);
var state_36435__$1 = state_36435;
if(cljs.core.truth_(inst_36401)){
var statearr_36439_36466 = state_36435__$1;
(statearr_36439_36466[(1)] = (6));

} else {
var statearr_36440_36467 = state_36435__$1;
(statearr_36440_36467[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36436 === (15))){
var inst_36431 = (state_36435[(2)]);
var state_36435__$1 = state_36435;
var statearr_36441_36468 = state_36435__$1;
(statearr_36441_36468[(2)] = inst_36431);

(statearr_36441_36468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36436 === (13))){
var inst_36424 = cljs.core.async.close_BANG_.call(null,out);
var state_36435__$1 = state_36435;
var statearr_36442_36469 = state_36435__$1;
(statearr_36442_36469[(2)] = inst_36424);

(statearr_36442_36469[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36436 === (6))){
var state_36435__$1 = state_36435;
var statearr_36443_36470 = state_36435__$1;
(statearr_36443_36470[(2)] = null);

(statearr_36443_36470[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36436 === (3))){
var inst_36433 = (state_36435[(2)]);
var state_36435__$1 = state_36435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36435__$1,inst_36433);
} else {
if((state_val_36436 === (12))){
var inst_36421 = (state_36435[(8)]);
var inst_36421__$1 = (state_36435[(2)]);
var inst_36422 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36421__$1);
var state_36435__$1 = (function (){var statearr_36444 = state_36435;
(statearr_36444[(8)] = inst_36421__$1);

return statearr_36444;
})();
if(cljs.core.truth_(inst_36422)){
var statearr_36445_36471 = state_36435__$1;
(statearr_36445_36471[(1)] = (13));

} else {
var statearr_36446_36472 = state_36435__$1;
(statearr_36446_36472[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36436 === (2))){
var inst_36398 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36399 = (0);
var state_36435__$1 = (function (){var statearr_36447 = state_36435;
(statearr_36447[(7)] = inst_36399);

(statearr_36447[(9)] = inst_36398);

return statearr_36447;
})();
var statearr_36448_36473 = state_36435__$1;
(statearr_36448_36473[(2)] = null);

(statearr_36448_36473[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36436 === (11))){
var inst_36399 = (state_36435[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36435,(10),Object,null,(9));
var inst_36408 = chs__$1.call(null,inst_36399);
var inst_36409 = done.call(null,inst_36399);
var inst_36410 = cljs.core.async.take_BANG_.call(null,inst_36408,inst_36409);
var state_36435__$1 = state_36435;
var statearr_36449_36474 = state_36435__$1;
(statearr_36449_36474[(2)] = inst_36410);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36435__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36436 === (9))){
var inst_36399 = (state_36435[(7)]);
var inst_36412 = (state_36435[(2)]);
var inst_36413 = (inst_36399 + (1));
var inst_36399__$1 = inst_36413;
var state_36435__$1 = (function (){var statearr_36450 = state_36435;
(statearr_36450[(7)] = inst_36399__$1);

(statearr_36450[(10)] = inst_36412);

return statearr_36450;
})();
var statearr_36451_36475 = state_36435__$1;
(statearr_36451_36475[(2)] = null);

(statearr_36451_36475[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36436 === (5))){
var inst_36419 = (state_36435[(2)]);
var state_36435__$1 = (function (){var statearr_36452 = state_36435;
(statearr_36452[(11)] = inst_36419);

return statearr_36452;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36435__$1,(12),dchan);
} else {
if((state_val_36436 === (14))){
var inst_36421 = (state_36435[(8)]);
var inst_36426 = cljs.core.apply.call(null,f,inst_36421);
var state_36435__$1 = state_36435;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36435__$1,(16),out,inst_36426);
} else {
if((state_val_36436 === (16))){
var inst_36428 = (state_36435[(2)]);
var state_36435__$1 = (function (){var statearr_36453 = state_36435;
(statearr_36453[(12)] = inst_36428);

return statearr_36453;
})();
var statearr_36454_36476 = state_36435__$1;
(statearr_36454_36476[(2)] = null);

(statearr_36454_36476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36436 === (10))){
var inst_36403 = (state_36435[(2)]);
var inst_36404 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36435__$1 = (function (){var statearr_36455 = state_36435;
(statearr_36455[(13)] = inst_36403);

return statearr_36455;
})();
var statearr_36456_36477 = state_36435__$1;
(statearr_36456_36477[(2)] = inst_36404);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36435__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36436 === (8))){
var inst_36417 = (state_36435[(2)]);
var state_36435__$1 = state_36435;
var statearr_36457_36478 = state_36435__$1;
(statearr_36457_36478[(2)] = inst_36417);

(statearr_36457_36478[(1)] = (5));


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
});})(c__35124__auto___36463,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__35034__auto__,c__35124__auto___36463,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__35035__auto__ = null;
var cljs$core$async$state_machine__35035__auto____0 = (function (){
var statearr_36458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36458[(0)] = cljs$core$async$state_machine__35035__auto__);

(statearr_36458[(1)] = (1));

return statearr_36458;
});
var cljs$core$async$state_machine__35035__auto____1 = (function (state_36435){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_36435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e36459){if((e36459 instanceof Object)){
var ex__35038__auto__ = e36459;
var statearr_36460_36479 = state_36435;
(statearr_36460_36479[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36480 = state_36435;
state_36435 = G__36480;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
cljs$core$async$state_machine__35035__auto__ = function(state_36435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35035__auto____1.call(this,state_36435);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35035__auto____0;
cljs$core$async$state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35035__auto____1;
return cljs$core$async$state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto___36463,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__35126__auto__ = (function (){var statearr_36461 = f__35125__auto__.call(null);
(statearr_36461[(6)] = c__35124__auto___36463);

return statearr_36461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto___36463,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__36483 = arguments.length;
switch (G__36483) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35124__auto___36537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto___36537,out){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto___36537,out){
return (function (state_36515){
var state_val_36516 = (state_36515[(1)]);
if((state_val_36516 === (7))){
var inst_36494 = (state_36515[(7)]);
var inst_36495 = (state_36515[(8)]);
var inst_36494__$1 = (state_36515[(2)]);
var inst_36495__$1 = cljs.core.nth.call(null,inst_36494__$1,(0),null);
var inst_36496 = cljs.core.nth.call(null,inst_36494__$1,(1),null);
var inst_36497 = (inst_36495__$1 == null);
var state_36515__$1 = (function (){var statearr_36517 = state_36515;
(statearr_36517[(7)] = inst_36494__$1);

(statearr_36517[(9)] = inst_36496);

(statearr_36517[(8)] = inst_36495__$1);

return statearr_36517;
})();
if(cljs.core.truth_(inst_36497)){
var statearr_36518_36538 = state_36515__$1;
(statearr_36518_36538[(1)] = (8));

} else {
var statearr_36519_36539 = state_36515__$1;
(statearr_36519_36539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (1))){
var inst_36484 = cljs.core.vec.call(null,chs);
var inst_36485 = inst_36484;
var state_36515__$1 = (function (){var statearr_36520 = state_36515;
(statearr_36520[(10)] = inst_36485);

return statearr_36520;
})();
var statearr_36521_36540 = state_36515__$1;
(statearr_36521_36540[(2)] = null);

(statearr_36521_36540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (4))){
var inst_36485 = (state_36515[(10)]);
var state_36515__$1 = state_36515;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36515__$1,(7),inst_36485);
} else {
if((state_val_36516 === (6))){
var inst_36511 = (state_36515[(2)]);
var state_36515__$1 = state_36515;
var statearr_36522_36541 = state_36515__$1;
(statearr_36522_36541[(2)] = inst_36511);

(statearr_36522_36541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (3))){
var inst_36513 = (state_36515[(2)]);
var state_36515__$1 = state_36515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36515__$1,inst_36513);
} else {
if((state_val_36516 === (2))){
var inst_36485 = (state_36515[(10)]);
var inst_36487 = cljs.core.count.call(null,inst_36485);
var inst_36488 = (inst_36487 > (0));
var state_36515__$1 = state_36515;
if(cljs.core.truth_(inst_36488)){
var statearr_36524_36542 = state_36515__$1;
(statearr_36524_36542[(1)] = (4));

} else {
var statearr_36525_36543 = state_36515__$1;
(statearr_36525_36543[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (11))){
var inst_36485 = (state_36515[(10)]);
var inst_36504 = (state_36515[(2)]);
var tmp36523 = inst_36485;
var inst_36485__$1 = tmp36523;
var state_36515__$1 = (function (){var statearr_36526 = state_36515;
(statearr_36526[(10)] = inst_36485__$1);

(statearr_36526[(11)] = inst_36504);

return statearr_36526;
})();
var statearr_36527_36544 = state_36515__$1;
(statearr_36527_36544[(2)] = null);

(statearr_36527_36544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (9))){
var inst_36495 = (state_36515[(8)]);
var state_36515__$1 = state_36515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36515__$1,(11),out,inst_36495);
} else {
if((state_val_36516 === (5))){
var inst_36509 = cljs.core.async.close_BANG_.call(null,out);
var state_36515__$1 = state_36515;
var statearr_36528_36545 = state_36515__$1;
(statearr_36528_36545[(2)] = inst_36509);

(statearr_36528_36545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (10))){
var inst_36507 = (state_36515[(2)]);
var state_36515__$1 = state_36515;
var statearr_36529_36546 = state_36515__$1;
(statearr_36529_36546[(2)] = inst_36507);

(statearr_36529_36546[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (8))){
var inst_36494 = (state_36515[(7)]);
var inst_36485 = (state_36515[(10)]);
var inst_36496 = (state_36515[(9)]);
var inst_36495 = (state_36515[(8)]);
var inst_36499 = (function (){var cs = inst_36485;
var vec__36490 = inst_36494;
var v = inst_36495;
var c = inst_36496;
return ((function (cs,vec__36490,v,c,inst_36494,inst_36485,inst_36496,inst_36495,state_val_36516,c__35124__auto___36537,out){
return (function (p1__36481_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36481_SHARP_);
});
;})(cs,vec__36490,v,c,inst_36494,inst_36485,inst_36496,inst_36495,state_val_36516,c__35124__auto___36537,out))
})();
var inst_36500 = cljs.core.filterv.call(null,inst_36499,inst_36485);
var inst_36485__$1 = inst_36500;
var state_36515__$1 = (function (){var statearr_36530 = state_36515;
(statearr_36530[(10)] = inst_36485__$1);

return statearr_36530;
})();
var statearr_36531_36547 = state_36515__$1;
(statearr_36531_36547[(2)] = null);

(statearr_36531_36547[(1)] = (2));


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
});})(c__35124__auto___36537,out))
;
return ((function (switch__35034__auto__,c__35124__auto___36537,out){
return (function() {
var cljs$core$async$state_machine__35035__auto__ = null;
var cljs$core$async$state_machine__35035__auto____0 = (function (){
var statearr_36532 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36532[(0)] = cljs$core$async$state_machine__35035__auto__);

(statearr_36532[(1)] = (1));

return statearr_36532;
});
var cljs$core$async$state_machine__35035__auto____1 = (function (state_36515){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_36515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e36533){if((e36533 instanceof Object)){
var ex__35038__auto__ = e36533;
var statearr_36534_36548 = state_36515;
(statearr_36534_36548[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36549 = state_36515;
state_36515 = G__36549;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
cljs$core$async$state_machine__35035__auto__ = function(state_36515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35035__auto____1.call(this,state_36515);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35035__auto____0;
cljs$core$async$state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35035__auto____1;
return cljs$core$async$state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto___36537,out))
})();
var state__35126__auto__ = (function (){var statearr_36535 = f__35125__auto__.call(null);
(statearr_36535[(6)] = c__35124__auto___36537);

return statearr_36535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto___36537,out))
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
var G__36551 = arguments.length;
switch (G__36551) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35124__auto___36596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto___36596,out){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto___36596,out){
return (function (state_36575){
var state_val_36576 = (state_36575[(1)]);
if((state_val_36576 === (7))){
var inst_36557 = (state_36575[(7)]);
var inst_36557__$1 = (state_36575[(2)]);
var inst_36558 = (inst_36557__$1 == null);
var inst_36559 = cljs.core.not.call(null,inst_36558);
var state_36575__$1 = (function (){var statearr_36577 = state_36575;
(statearr_36577[(7)] = inst_36557__$1);

return statearr_36577;
})();
if(inst_36559){
var statearr_36578_36597 = state_36575__$1;
(statearr_36578_36597[(1)] = (8));

} else {
var statearr_36579_36598 = state_36575__$1;
(statearr_36579_36598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (1))){
var inst_36552 = (0);
var state_36575__$1 = (function (){var statearr_36580 = state_36575;
(statearr_36580[(8)] = inst_36552);

return statearr_36580;
})();
var statearr_36581_36599 = state_36575__$1;
(statearr_36581_36599[(2)] = null);

(statearr_36581_36599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (4))){
var state_36575__$1 = state_36575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36575__$1,(7),ch);
} else {
if((state_val_36576 === (6))){
var inst_36570 = (state_36575[(2)]);
var state_36575__$1 = state_36575;
var statearr_36582_36600 = state_36575__$1;
(statearr_36582_36600[(2)] = inst_36570);

(statearr_36582_36600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (3))){
var inst_36572 = (state_36575[(2)]);
var inst_36573 = cljs.core.async.close_BANG_.call(null,out);
var state_36575__$1 = (function (){var statearr_36583 = state_36575;
(statearr_36583[(9)] = inst_36572);

return statearr_36583;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36575__$1,inst_36573);
} else {
if((state_val_36576 === (2))){
var inst_36552 = (state_36575[(8)]);
var inst_36554 = (inst_36552 < n);
var state_36575__$1 = state_36575;
if(cljs.core.truth_(inst_36554)){
var statearr_36584_36601 = state_36575__$1;
(statearr_36584_36601[(1)] = (4));

} else {
var statearr_36585_36602 = state_36575__$1;
(statearr_36585_36602[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (11))){
var inst_36552 = (state_36575[(8)]);
var inst_36562 = (state_36575[(2)]);
var inst_36563 = (inst_36552 + (1));
var inst_36552__$1 = inst_36563;
var state_36575__$1 = (function (){var statearr_36586 = state_36575;
(statearr_36586[(10)] = inst_36562);

(statearr_36586[(8)] = inst_36552__$1);

return statearr_36586;
})();
var statearr_36587_36603 = state_36575__$1;
(statearr_36587_36603[(2)] = null);

(statearr_36587_36603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (9))){
var state_36575__$1 = state_36575;
var statearr_36588_36604 = state_36575__$1;
(statearr_36588_36604[(2)] = null);

(statearr_36588_36604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (5))){
var state_36575__$1 = state_36575;
var statearr_36589_36605 = state_36575__$1;
(statearr_36589_36605[(2)] = null);

(statearr_36589_36605[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (10))){
var inst_36567 = (state_36575[(2)]);
var state_36575__$1 = state_36575;
var statearr_36590_36606 = state_36575__$1;
(statearr_36590_36606[(2)] = inst_36567);

(statearr_36590_36606[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (8))){
var inst_36557 = (state_36575[(7)]);
var state_36575__$1 = state_36575;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36575__$1,(11),out,inst_36557);
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
});})(c__35124__auto___36596,out))
;
return ((function (switch__35034__auto__,c__35124__auto___36596,out){
return (function() {
var cljs$core$async$state_machine__35035__auto__ = null;
var cljs$core$async$state_machine__35035__auto____0 = (function (){
var statearr_36591 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36591[(0)] = cljs$core$async$state_machine__35035__auto__);

(statearr_36591[(1)] = (1));

return statearr_36591;
});
var cljs$core$async$state_machine__35035__auto____1 = (function (state_36575){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_36575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e36592){if((e36592 instanceof Object)){
var ex__35038__auto__ = e36592;
var statearr_36593_36607 = state_36575;
(statearr_36593_36607[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36608 = state_36575;
state_36575 = G__36608;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
cljs$core$async$state_machine__35035__auto__ = function(state_36575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35035__auto____1.call(this,state_36575);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35035__auto____0;
cljs$core$async$state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35035__auto____1;
return cljs$core$async$state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto___36596,out))
})();
var state__35126__auto__ = (function (){var statearr_36594 = f__35125__auto__.call(null);
(statearr_36594[(6)] = c__35124__auto___36596);

return statearr_36594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto___36596,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36610 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36610 = (function (f,ch,meta36611){
this.f = f;
this.ch = ch;
this.meta36611 = meta36611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36612,meta36611__$1){
var self__ = this;
var _36612__$1 = this;
return (new cljs.core.async.t_cljs$core$async36610(self__.f,self__.ch,meta36611__$1));
});

cljs.core.async.t_cljs$core$async36610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36612){
var self__ = this;
var _36612__$1 = this;
return self__.meta36611;
});

cljs.core.async.t_cljs$core$async36610.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36610.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36610.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36610.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36610.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async36613 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36613 = (function (f,ch,meta36611,_,fn1,meta36614){
this.f = f;
this.ch = ch;
this.meta36611 = meta36611;
this._ = _;
this.fn1 = fn1;
this.meta36614 = meta36614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36615,meta36614__$1){
var self__ = this;
var _36615__$1 = this;
return (new cljs.core.async.t_cljs$core$async36613(self__.f,self__.ch,self__.meta36611,self__._,self__.fn1,meta36614__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36613.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36615){
var self__ = this;
var _36615__$1 = this;
return self__.meta36614;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36613.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36613.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36613.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36613.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36609_SHARP_){
return f1.call(null,(((p1__36609_SHARP_ == null))?null:self__.f.call(null,p1__36609_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36613.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36611","meta36611",940677664,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36610","cljs.core.async/t_cljs$core$async36610",922696785,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36614","meta36614",754252570,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36613.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36613";

cljs.core.async.t_cljs$core$async36613.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__31020__auto__,writer__31021__auto__,opt__31022__auto__){
return cljs.core._write.call(null,writer__31021__auto__,"cljs.core.async/t_cljs$core$async36613");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async36613 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36613(f__$1,ch__$1,meta36611__$1,___$2,fn1__$1,meta36614){
return (new cljs.core.async.t_cljs$core$async36613(f__$1,ch__$1,meta36611__$1,___$2,fn1__$1,meta36614));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36613(self__.f,self__.ch,self__.meta36611,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30337__auto__ = ret;
if(cljs.core.truth_(and__30337__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30337__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async36610.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36610.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36610.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36611","meta36611",940677664,null)], null);
});

cljs.core.async.t_cljs$core$async36610.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36610.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36610";

cljs.core.async.t_cljs$core$async36610.cljs$lang$ctorPrWriter = (function (this__31020__auto__,writer__31021__auto__,opt__31022__auto__){
return cljs.core._write.call(null,writer__31021__auto__,"cljs.core.async/t_cljs$core$async36610");
});

cljs.core.async.__GT_t_cljs$core$async36610 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36610(f__$1,ch__$1,meta36611){
return (new cljs.core.async.t_cljs$core$async36610(f__$1,ch__$1,meta36611));
});

}

return (new cljs.core.async.t_cljs$core$async36610(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36616 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36616 = (function (f,ch,meta36617){
this.f = f;
this.ch = ch;
this.meta36617 = meta36617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36618,meta36617__$1){
var self__ = this;
var _36618__$1 = this;
return (new cljs.core.async.t_cljs$core$async36616(self__.f,self__.ch,meta36617__$1));
});

cljs.core.async.t_cljs$core$async36616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36618){
var self__ = this;
var _36618__$1 = this;
return self__.meta36617;
});

cljs.core.async.t_cljs$core$async36616.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36616.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36616.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36616.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36616.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36616.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36616.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36617","meta36617",-1995419578,null)], null);
});

cljs.core.async.t_cljs$core$async36616.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36616.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36616";

cljs.core.async.t_cljs$core$async36616.cljs$lang$ctorPrWriter = (function (this__31020__auto__,writer__31021__auto__,opt__31022__auto__){
return cljs.core._write.call(null,writer__31021__auto__,"cljs.core.async/t_cljs$core$async36616");
});

cljs.core.async.__GT_t_cljs$core$async36616 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36616(f__$1,ch__$1,meta36617){
return (new cljs.core.async.t_cljs$core$async36616(f__$1,ch__$1,meta36617));
});

}

return (new cljs.core.async.t_cljs$core$async36616(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36619 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36619 = (function (p,ch,meta36620){
this.p = p;
this.ch = ch;
this.meta36620 = meta36620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36621,meta36620__$1){
var self__ = this;
var _36621__$1 = this;
return (new cljs.core.async.t_cljs$core$async36619(self__.p,self__.ch,meta36620__$1));
});

cljs.core.async.t_cljs$core$async36619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36621){
var self__ = this;
var _36621__$1 = this;
return self__.meta36620;
});

cljs.core.async.t_cljs$core$async36619.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36619.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36619.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36619.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36619.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36619.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36619.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36619.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36620","meta36620",-481367029,null)], null);
});

cljs.core.async.t_cljs$core$async36619.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36619.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36619";

cljs.core.async.t_cljs$core$async36619.cljs$lang$ctorPrWriter = (function (this__31020__auto__,writer__31021__auto__,opt__31022__auto__){
return cljs.core._write.call(null,writer__31021__auto__,"cljs.core.async/t_cljs$core$async36619");
});

cljs.core.async.__GT_t_cljs$core$async36619 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36619(p__$1,ch__$1,meta36620){
return (new cljs.core.async.t_cljs$core$async36619(p__$1,ch__$1,meta36620));
});

}

return (new cljs.core.async.t_cljs$core$async36619(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36623 = arguments.length;
switch (G__36623) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35124__auto___36663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto___36663,out){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto___36663,out){
return (function (state_36644){
var state_val_36645 = (state_36644[(1)]);
if((state_val_36645 === (7))){
var inst_36640 = (state_36644[(2)]);
var state_36644__$1 = state_36644;
var statearr_36646_36664 = state_36644__$1;
(statearr_36646_36664[(2)] = inst_36640);

(statearr_36646_36664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36645 === (1))){
var state_36644__$1 = state_36644;
var statearr_36647_36665 = state_36644__$1;
(statearr_36647_36665[(2)] = null);

(statearr_36647_36665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36645 === (4))){
var inst_36626 = (state_36644[(7)]);
var inst_36626__$1 = (state_36644[(2)]);
var inst_36627 = (inst_36626__$1 == null);
var state_36644__$1 = (function (){var statearr_36648 = state_36644;
(statearr_36648[(7)] = inst_36626__$1);

return statearr_36648;
})();
if(cljs.core.truth_(inst_36627)){
var statearr_36649_36666 = state_36644__$1;
(statearr_36649_36666[(1)] = (5));

} else {
var statearr_36650_36667 = state_36644__$1;
(statearr_36650_36667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36645 === (6))){
var inst_36626 = (state_36644[(7)]);
var inst_36631 = p.call(null,inst_36626);
var state_36644__$1 = state_36644;
if(cljs.core.truth_(inst_36631)){
var statearr_36651_36668 = state_36644__$1;
(statearr_36651_36668[(1)] = (8));

} else {
var statearr_36652_36669 = state_36644__$1;
(statearr_36652_36669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36645 === (3))){
var inst_36642 = (state_36644[(2)]);
var state_36644__$1 = state_36644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36644__$1,inst_36642);
} else {
if((state_val_36645 === (2))){
var state_36644__$1 = state_36644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36644__$1,(4),ch);
} else {
if((state_val_36645 === (11))){
var inst_36634 = (state_36644[(2)]);
var state_36644__$1 = state_36644;
var statearr_36653_36670 = state_36644__$1;
(statearr_36653_36670[(2)] = inst_36634);

(statearr_36653_36670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36645 === (9))){
var state_36644__$1 = state_36644;
var statearr_36654_36671 = state_36644__$1;
(statearr_36654_36671[(2)] = null);

(statearr_36654_36671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36645 === (5))){
var inst_36629 = cljs.core.async.close_BANG_.call(null,out);
var state_36644__$1 = state_36644;
var statearr_36655_36672 = state_36644__$1;
(statearr_36655_36672[(2)] = inst_36629);

(statearr_36655_36672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36645 === (10))){
var inst_36637 = (state_36644[(2)]);
var state_36644__$1 = (function (){var statearr_36656 = state_36644;
(statearr_36656[(8)] = inst_36637);

return statearr_36656;
})();
var statearr_36657_36673 = state_36644__$1;
(statearr_36657_36673[(2)] = null);

(statearr_36657_36673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36645 === (8))){
var inst_36626 = (state_36644[(7)]);
var state_36644__$1 = state_36644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36644__$1,(11),out,inst_36626);
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
});})(c__35124__auto___36663,out))
;
return ((function (switch__35034__auto__,c__35124__auto___36663,out){
return (function() {
var cljs$core$async$state_machine__35035__auto__ = null;
var cljs$core$async$state_machine__35035__auto____0 = (function (){
var statearr_36658 = [null,null,null,null,null,null,null,null,null];
(statearr_36658[(0)] = cljs$core$async$state_machine__35035__auto__);

(statearr_36658[(1)] = (1));

return statearr_36658;
});
var cljs$core$async$state_machine__35035__auto____1 = (function (state_36644){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_36644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e36659){if((e36659 instanceof Object)){
var ex__35038__auto__ = e36659;
var statearr_36660_36674 = state_36644;
(statearr_36660_36674[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36675 = state_36644;
state_36644 = G__36675;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
cljs$core$async$state_machine__35035__auto__ = function(state_36644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35035__auto____1.call(this,state_36644);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35035__auto____0;
cljs$core$async$state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35035__auto____1;
return cljs$core$async$state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto___36663,out))
})();
var state__35126__auto__ = (function (){var statearr_36661 = f__35125__auto__.call(null);
(statearr_36661[(6)] = c__35124__auto___36663);

return statearr_36661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto___36663,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36677 = arguments.length;
switch (G__36677) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__35124__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto__){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto__){
return (function (state_36740){
var state_val_36741 = (state_36740[(1)]);
if((state_val_36741 === (7))){
var inst_36736 = (state_36740[(2)]);
var state_36740__$1 = state_36740;
var statearr_36742_36780 = state_36740__$1;
(statearr_36742_36780[(2)] = inst_36736);

(statearr_36742_36780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (20))){
var inst_36706 = (state_36740[(7)]);
var inst_36717 = (state_36740[(2)]);
var inst_36718 = cljs.core.next.call(null,inst_36706);
var inst_36692 = inst_36718;
var inst_36693 = null;
var inst_36694 = (0);
var inst_36695 = (0);
var state_36740__$1 = (function (){var statearr_36743 = state_36740;
(statearr_36743[(8)] = inst_36694);

(statearr_36743[(9)] = inst_36693);

(statearr_36743[(10)] = inst_36692);

(statearr_36743[(11)] = inst_36717);

(statearr_36743[(12)] = inst_36695);

return statearr_36743;
})();
var statearr_36744_36781 = state_36740__$1;
(statearr_36744_36781[(2)] = null);

(statearr_36744_36781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (1))){
var state_36740__$1 = state_36740;
var statearr_36745_36782 = state_36740__$1;
(statearr_36745_36782[(2)] = null);

(statearr_36745_36782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (4))){
var inst_36681 = (state_36740[(13)]);
var inst_36681__$1 = (state_36740[(2)]);
var inst_36682 = (inst_36681__$1 == null);
var state_36740__$1 = (function (){var statearr_36746 = state_36740;
(statearr_36746[(13)] = inst_36681__$1);

return statearr_36746;
})();
if(cljs.core.truth_(inst_36682)){
var statearr_36747_36783 = state_36740__$1;
(statearr_36747_36783[(1)] = (5));

} else {
var statearr_36748_36784 = state_36740__$1;
(statearr_36748_36784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (15))){
var state_36740__$1 = state_36740;
var statearr_36752_36785 = state_36740__$1;
(statearr_36752_36785[(2)] = null);

(statearr_36752_36785[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (21))){
var state_36740__$1 = state_36740;
var statearr_36753_36786 = state_36740__$1;
(statearr_36753_36786[(2)] = null);

(statearr_36753_36786[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (13))){
var inst_36694 = (state_36740[(8)]);
var inst_36693 = (state_36740[(9)]);
var inst_36692 = (state_36740[(10)]);
var inst_36695 = (state_36740[(12)]);
var inst_36702 = (state_36740[(2)]);
var inst_36703 = (inst_36695 + (1));
var tmp36749 = inst_36694;
var tmp36750 = inst_36693;
var tmp36751 = inst_36692;
var inst_36692__$1 = tmp36751;
var inst_36693__$1 = tmp36750;
var inst_36694__$1 = tmp36749;
var inst_36695__$1 = inst_36703;
var state_36740__$1 = (function (){var statearr_36754 = state_36740;
(statearr_36754[(8)] = inst_36694__$1);

(statearr_36754[(9)] = inst_36693__$1);

(statearr_36754[(10)] = inst_36692__$1);

(statearr_36754[(14)] = inst_36702);

(statearr_36754[(12)] = inst_36695__$1);

return statearr_36754;
})();
var statearr_36755_36787 = state_36740__$1;
(statearr_36755_36787[(2)] = null);

(statearr_36755_36787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (22))){
var state_36740__$1 = state_36740;
var statearr_36756_36788 = state_36740__$1;
(statearr_36756_36788[(2)] = null);

(statearr_36756_36788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (6))){
var inst_36681 = (state_36740[(13)]);
var inst_36690 = f.call(null,inst_36681);
var inst_36691 = cljs.core.seq.call(null,inst_36690);
var inst_36692 = inst_36691;
var inst_36693 = null;
var inst_36694 = (0);
var inst_36695 = (0);
var state_36740__$1 = (function (){var statearr_36757 = state_36740;
(statearr_36757[(8)] = inst_36694);

(statearr_36757[(9)] = inst_36693);

(statearr_36757[(10)] = inst_36692);

(statearr_36757[(12)] = inst_36695);

return statearr_36757;
})();
var statearr_36758_36789 = state_36740__$1;
(statearr_36758_36789[(2)] = null);

(statearr_36758_36789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (17))){
var inst_36706 = (state_36740[(7)]);
var inst_36710 = cljs.core.chunk_first.call(null,inst_36706);
var inst_36711 = cljs.core.chunk_rest.call(null,inst_36706);
var inst_36712 = cljs.core.count.call(null,inst_36710);
var inst_36692 = inst_36711;
var inst_36693 = inst_36710;
var inst_36694 = inst_36712;
var inst_36695 = (0);
var state_36740__$1 = (function (){var statearr_36759 = state_36740;
(statearr_36759[(8)] = inst_36694);

(statearr_36759[(9)] = inst_36693);

(statearr_36759[(10)] = inst_36692);

(statearr_36759[(12)] = inst_36695);

return statearr_36759;
})();
var statearr_36760_36790 = state_36740__$1;
(statearr_36760_36790[(2)] = null);

(statearr_36760_36790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (3))){
var inst_36738 = (state_36740[(2)]);
var state_36740__$1 = state_36740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36740__$1,inst_36738);
} else {
if((state_val_36741 === (12))){
var inst_36726 = (state_36740[(2)]);
var state_36740__$1 = state_36740;
var statearr_36761_36791 = state_36740__$1;
(statearr_36761_36791[(2)] = inst_36726);

(statearr_36761_36791[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (2))){
var state_36740__$1 = state_36740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36740__$1,(4),in$);
} else {
if((state_val_36741 === (23))){
var inst_36734 = (state_36740[(2)]);
var state_36740__$1 = state_36740;
var statearr_36762_36792 = state_36740__$1;
(statearr_36762_36792[(2)] = inst_36734);

(statearr_36762_36792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (19))){
var inst_36721 = (state_36740[(2)]);
var state_36740__$1 = state_36740;
var statearr_36763_36793 = state_36740__$1;
(statearr_36763_36793[(2)] = inst_36721);

(statearr_36763_36793[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (11))){
var inst_36706 = (state_36740[(7)]);
var inst_36692 = (state_36740[(10)]);
var inst_36706__$1 = cljs.core.seq.call(null,inst_36692);
var state_36740__$1 = (function (){var statearr_36764 = state_36740;
(statearr_36764[(7)] = inst_36706__$1);

return statearr_36764;
})();
if(inst_36706__$1){
var statearr_36765_36794 = state_36740__$1;
(statearr_36765_36794[(1)] = (14));

} else {
var statearr_36766_36795 = state_36740__$1;
(statearr_36766_36795[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (9))){
var inst_36728 = (state_36740[(2)]);
var inst_36729 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36740__$1 = (function (){var statearr_36767 = state_36740;
(statearr_36767[(15)] = inst_36728);

return statearr_36767;
})();
if(cljs.core.truth_(inst_36729)){
var statearr_36768_36796 = state_36740__$1;
(statearr_36768_36796[(1)] = (21));

} else {
var statearr_36769_36797 = state_36740__$1;
(statearr_36769_36797[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (5))){
var inst_36684 = cljs.core.async.close_BANG_.call(null,out);
var state_36740__$1 = state_36740;
var statearr_36770_36798 = state_36740__$1;
(statearr_36770_36798[(2)] = inst_36684);

(statearr_36770_36798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (14))){
var inst_36706 = (state_36740[(7)]);
var inst_36708 = cljs.core.chunked_seq_QMARK_.call(null,inst_36706);
var state_36740__$1 = state_36740;
if(inst_36708){
var statearr_36771_36799 = state_36740__$1;
(statearr_36771_36799[(1)] = (17));

} else {
var statearr_36772_36800 = state_36740__$1;
(statearr_36772_36800[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (16))){
var inst_36724 = (state_36740[(2)]);
var state_36740__$1 = state_36740;
var statearr_36773_36801 = state_36740__$1;
(statearr_36773_36801[(2)] = inst_36724);

(statearr_36773_36801[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (10))){
var inst_36693 = (state_36740[(9)]);
var inst_36695 = (state_36740[(12)]);
var inst_36700 = cljs.core._nth.call(null,inst_36693,inst_36695);
var state_36740__$1 = state_36740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36740__$1,(13),out,inst_36700);
} else {
if((state_val_36741 === (18))){
var inst_36706 = (state_36740[(7)]);
var inst_36715 = cljs.core.first.call(null,inst_36706);
var state_36740__$1 = state_36740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36740__$1,(20),out,inst_36715);
} else {
if((state_val_36741 === (8))){
var inst_36694 = (state_36740[(8)]);
var inst_36695 = (state_36740[(12)]);
var inst_36697 = (inst_36695 < inst_36694);
var inst_36698 = inst_36697;
var state_36740__$1 = state_36740;
if(cljs.core.truth_(inst_36698)){
var statearr_36774_36802 = state_36740__$1;
(statearr_36774_36802[(1)] = (10));

} else {
var statearr_36775_36803 = state_36740__$1;
(statearr_36775_36803[(1)] = (11));

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
});})(c__35124__auto__))
;
return ((function (switch__35034__auto__,c__35124__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35035__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35035__auto____0 = (function (){
var statearr_36776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36776[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35035__auto__);

(statearr_36776[(1)] = (1));

return statearr_36776;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35035__auto____1 = (function (state_36740){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_36740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e36777){if((e36777 instanceof Object)){
var ex__35038__auto__ = e36777;
var statearr_36778_36804 = state_36740;
(statearr_36778_36804[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36805 = state_36740;
state_36740 = G__36805;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35035__auto__ = function(state_36740){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35035__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35035__auto____1.call(this,state_36740);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35035__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35035__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto__))
})();
var state__35126__auto__ = (function (){var statearr_36779 = f__35125__auto__.call(null);
(statearr_36779[(6)] = c__35124__auto__);

return statearr_36779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto__))
);

return c__35124__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36807 = arguments.length;
switch (G__36807) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__36810 = arguments.length;
switch (G__36810) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__36813 = arguments.length;
switch (G__36813) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35124__auto___36860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto___36860,out){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto___36860,out){
return (function (state_36837){
var state_val_36838 = (state_36837[(1)]);
if((state_val_36838 === (7))){
var inst_36832 = (state_36837[(2)]);
var state_36837__$1 = state_36837;
var statearr_36839_36861 = state_36837__$1;
(statearr_36839_36861[(2)] = inst_36832);

(statearr_36839_36861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (1))){
var inst_36814 = null;
var state_36837__$1 = (function (){var statearr_36840 = state_36837;
(statearr_36840[(7)] = inst_36814);

return statearr_36840;
})();
var statearr_36841_36862 = state_36837__$1;
(statearr_36841_36862[(2)] = null);

(statearr_36841_36862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (4))){
var inst_36817 = (state_36837[(8)]);
var inst_36817__$1 = (state_36837[(2)]);
var inst_36818 = (inst_36817__$1 == null);
var inst_36819 = cljs.core.not.call(null,inst_36818);
var state_36837__$1 = (function (){var statearr_36842 = state_36837;
(statearr_36842[(8)] = inst_36817__$1);

return statearr_36842;
})();
if(inst_36819){
var statearr_36843_36863 = state_36837__$1;
(statearr_36843_36863[(1)] = (5));

} else {
var statearr_36844_36864 = state_36837__$1;
(statearr_36844_36864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (6))){
var state_36837__$1 = state_36837;
var statearr_36845_36865 = state_36837__$1;
(statearr_36845_36865[(2)] = null);

(statearr_36845_36865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (3))){
var inst_36834 = (state_36837[(2)]);
var inst_36835 = cljs.core.async.close_BANG_.call(null,out);
var state_36837__$1 = (function (){var statearr_36846 = state_36837;
(statearr_36846[(9)] = inst_36834);

return statearr_36846;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36837__$1,inst_36835);
} else {
if((state_val_36838 === (2))){
var state_36837__$1 = state_36837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36837__$1,(4),ch);
} else {
if((state_val_36838 === (11))){
var inst_36817 = (state_36837[(8)]);
var inst_36826 = (state_36837[(2)]);
var inst_36814 = inst_36817;
var state_36837__$1 = (function (){var statearr_36847 = state_36837;
(statearr_36847[(7)] = inst_36814);

(statearr_36847[(10)] = inst_36826);

return statearr_36847;
})();
var statearr_36848_36866 = state_36837__$1;
(statearr_36848_36866[(2)] = null);

(statearr_36848_36866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (9))){
var inst_36817 = (state_36837[(8)]);
var state_36837__$1 = state_36837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36837__$1,(11),out,inst_36817);
} else {
if((state_val_36838 === (5))){
var inst_36814 = (state_36837[(7)]);
var inst_36817 = (state_36837[(8)]);
var inst_36821 = cljs.core._EQ_.call(null,inst_36817,inst_36814);
var state_36837__$1 = state_36837;
if(inst_36821){
var statearr_36850_36867 = state_36837__$1;
(statearr_36850_36867[(1)] = (8));

} else {
var statearr_36851_36868 = state_36837__$1;
(statearr_36851_36868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (10))){
var inst_36829 = (state_36837[(2)]);
var state_36837__$1 = state_36837;
var statearr_36852_36869 = state_36837__$1;
(statearr_36852_36869[(2)] = inst_36829);

(statearr_36852_36869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36838 === (8))){
var inst_36814 = (state_36837[(7)]);
var tmp36849 = inst_36814;
var inst_36814__$1 = tmp36849;
var state_36837__$1 = (function (){var statearr_36853 = state_36837;
(statearr_36853[(7)] = inst_36814__$1);

return statearr_36853;
})();
var statearr_36854_36870 = state_36837__$1;
(statearr_36854_36870[(2)] = null);

(statearr_36854_36870[(1)] = (2));


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
});})(c__35124__auto___36860,out))
;
return ((function (switch__35034__auto__,c__35124__auto___36860,out){
return (function() {
var cljs$core$async$state_machine__35035__auto__ = null;
var cljs$core$async$state_machine__35035__auto____0 = (function (){
var statearr_36855 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36855[(0)] = cljs$core$async$state_machine__35035__auto__);

(statearr_36855[(1)] = (1));

return statearr_36855;
});
var cljs$core$async$state_machine__35035__auto____1 = (function (state_36837){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_36837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e36856){if((e36856 instanceof Object)){
var ex__35038__auto__ = e36856;
var statearr_36857_36871 = state_36837;
(statearr_36857_36871[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36872 = state_36837;
state_36837 = G__36872;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
cljs$core$async$state_machine__35035__auto__ = function(state_36837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35035__auto____1.call(this,state_36837);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35035__auto____0;
cljs$core$async$state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35035__auto____1;
return cljs$core$async$state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto___36860,out))
})();
var state__35126__auto__ = (function (){var statearr_36858 = f__35125__auto__.call(null);
(statearr_36858[(6)] = c__35124__auto___36860);

return statearr_36858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto___36860,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36874 = arguments.length;
switch (G__36874) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35124__auto___36940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto___36940,out){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto___36940,out){
return (function (state_36912){
var state_val_36913 = (state_36912[(1)]);
if((state_val_36913 === (7))){
var inst_36908 = (state_36912[(2)]);
var state_36912__$1 = state_36912;
var statearr_36914_36941 = state_36912__$1;
(statearr_36914_36941[(2)] = inst_36908);

(statearr_36914_36941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36913 === (1))){
var inst_36875 = (new Array(n));
var inst_36876 = inst_36875;
var inst_36877 = (0);
var state_36912__$1 = (function (){var statearr_36915 = state_36912;
(statearr_36915[(7)] = inst_36877);

(statearr_36915[(8)] = inst_36876);

return statearr_36915;
})();
var statearr_36916_36942 = state_36912__$1;
(statearr_36916_36942[(2)] = null);

(statearr_36916_36942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36913 === (4))){
var inst_36880 = (state_36912[(9)]);
var inst_36880__$1 = (state_36912[(2)]);
var inst_36881 = (inst_36880__$1 == null);
var inst_36882 = cljs.core.not.call(null,inst_36881);
var state_36912__$1 = (function (){var statearr_36917 = state_36912;
(statearr_36917[(9)] = inst_36880__$1);

return statearr_36917;
})();
if(inst_36882){
var statearr_36918_36943 = state_36912__$1;
(statearr_36918_36943[(1)] = (5));

} else {
var statearr_36919_36944 = state_36912__$1;
(statearr_36919_36944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36913 === (15))){
var inst_36902 = (state_36912[(2)]);
var state_36912__$1 = state_36912;
var statearr_36920_36945 = state_36912__$1;
(statearr_36920_36945[(2)] = inst_36902);

(statearr_36920_36945[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36913 === (13))){
var state_36912__$1 = state_36912;
var statearr_36921_36946 = state_36912__$1;
(statearr_36921_36946[(2)] = null);

(statearr_36921_36946[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36913 === (6))){
var inst_36877 = (state_36912[(7)]);
var inst_36898 = (inst_36877 > (0));
var state_36912__$1 = state_36912;
if(cljs.core.truth_(inst_36898)){
var statearr_36922_36947 = state_36912__$1;
(statearr_36922_36947[(1)] = (12));

} else {
var statearr_36923_36948 = state_36912__$1;
(statearr_36923_36948[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36913 === (3))){
var inst_36910 = (state_36912[(2)]);
var state_36912__$1 = state_36912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36912__$1,inst_36910);
} else {
if((state_val_36913 === (12))){
var inst_36876 = (state_36912[(8)]);
var inst_36900 = cljs.core.vec.call(null,inst_36876);
var state_36912__$1 = state_36912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36912__$1,(15),out,inst_36900);
} else {
if((state_val_36913 === (2))){
var state_36912__$1 = state_36912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36912__$1,(4),ch);
} else {
if((state_val_36913 === (11))){
var inst_36892 = (state_36912[(2)]);
var inst_36893 = (new Array(n));
var inst_36876 = inst_36893;
var inst_36877 = (0);
var state_36912__$1 = (function (){var statearr_36924 = state_36912;
(statearr_36924[(7)] = inst_36877);

(statearr_36924[(8)] = inst_36876);

(statearr_36924[(10)] = inst_36892);

return statearr_36924;
})();
var statearr_36925_36949 = state_36912__$1;
(statearr_36925_36949[(2)] = null);

(statearr_36925_36949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36913 === (9))){
var inst_36876 = (state_36912[(8)]);
var inst_36890 = cljs.core.vec.call(null,inst_36876);
var state_36912__$1 = state_36912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36912__$1,(11),out,inst_36890);
} else {
if((state_val_36913 === (5))){
var inst_36877 = (state_36912[(7)]);
var inst_36885 = (state_36912[(11)]);
var inst_36876 = (state_36912[(8)]);
var inst_36880 = (state_36912[(9)]);
var inst_36884 = (inst_36876[inst_36877] = inst_36880);
var inst_36885__$1 = (inst_36877 + (1));
var inst_36886 = (inst_36885__$1 < n);
var state_36912__$1 = (function (){var statearr_36926 = state_36912;
(statearr_36926[(12)] = inst_36884);

(statearr_36926[(11)] = inst_36885__$1);

return statearr_36926;
})();
if(cljs.core.truth_(inst_36886)){
var statearr_36927_36950 = state_36912__$1;
(statearr_36927_36950[(1)] = (8));

} else {
var statearr_36928_36951 = state_36912__$1;
(statearr_36928_36951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36913 === (14))){
var inst_36905 = (state_36912[(2)]);
var inst_36906 = cljs.core.async.close_BANG_.call(null,out);
var state_36912__$1 = (function (){var statearr_36930 = state_36912;
(statearr_36930[(13)] = inst_36905);

return statearr_36930;
})();
var statearr_36931_36952 = state_36912__$1;
(statearr_36931_36952[(2)] = inst_36906);

(statearr_36931_36952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36913 === (10))){
var inst_36896 = (state_36912[(2)]);
var state_36912__$1 = state_36912;
var statearr_36932_36953 = state_36912__$1;
(statearr_36932_36953[(2)] = inst_36896);

(statearr_36932_36953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36913 === (8))){
var inst_36885 = (state_36912[(11)]);
var inst_36876 = (state_36912[(8)]);
var tmp36929 = inst_36876;
var inst_36876__$1 = tmp36929;
var inst_36877 = inst_36885;
var state_36912__$1 = (function (){var statearr_36933 = state_36912;
(statearr_36933[(7)] = inst_36877);

(statearr_36933[(8)] = inst_36876__$1);

return statearr_36933;
})();
var statearr_36934_36954 = state_36912__$1;
(statearr_36934_36954[(2)] = null);

(statearr_36934_36954[(1)] = (2));


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
});})(c__35124__auto___36940,out))
;
return ((function (switch__35034__auto__,c__35124__auto___36940,out){
return (function() {
var cljs$core$async$state_machine__35035__auto__ = null;
var cljs$core$async$state_machine__35035__auto____0 = (function (){
var statearr_36935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36935[(0)] = cljs$core$async$state_machine__35035__auto__);

(statearr_36935[(1)] = (1));

return statearr_36935;
});
var cljs$core$async$state_machine__35035__auto____1 = (function (state_36912){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_36912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e36936){if((e36936 instanceof Object)){
var ex__35038__auto__ = e36936;
var statearr_36937_36955 = state_36912;
(statearr_36937_36955[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36956 = state_36912;
state_36912 = G__36956;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
cljs$core$async$state_machine__35035__auto__ = function(state_36912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35035__auto____1.call(this,state_36912);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35035__auto____0;
cljs$core$async$state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35035__auto____1;
return cljs$core$async$state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto___36940,out))
})();
var state__35126__auto__ = (function (){var statearr_36938 = f__35125__auto__.call(null);
(statearr_36938[(6)] = c__35124__auto___36940);

return statearr_36938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto___36940,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36958 = arguments.length;
switch (G__36958) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35124__auto___37028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto___37028,out){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto___37028,out){
return (function (state_37000){
var state_val_37001 = (state_37000[(1)]);
if((state_val_37001 === (7))){
var inst_36996 = (state_37000[(2)]);
var state_37000__$1 = state_37000;
var statearr_37002_37029 = state_37000__$1;
(statearr_37002_37029[(2)] = inst_36996);

(statearr_37002_37029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37001 === (1))){
var inst_36959 = [];
var inst_36960 = inst_36959;
var inst_36961 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37000__$1 = (function (){var statearr_37003 = state_37000;
(statearr_37003[(7)] = inst_36961);

(statearr_37003[(8)] = inst_36960);

return statearr_37003;
})();
var statearr_37004_37030 = state_37000__$1;
(statearr_37004_37030[(2)] = null);

(statearr_37004_37030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37001 === (4))){
var inst_36964 = (state_37000[(9)]);
var inst_36964__$1 = (state_37000[(2)]);
var inst_36965 = (inst_36964__$1 == null);
var inst_36966 = cljs.core.not.call(null,inst_36965);
var state_37000__$1 = (function (){var statearr_37005 = state_37000;
(statearr_37005[(9)] = inst_36964__$1);

return statearr_37005;
})();
if(inst_36966){
var statearr_37006_37031 = state_37000__$1;
(statearr_37006_37031[(1)] = (5));

} else {
var statearr_37007_37032 = state_37000__$1;
(statearr_37007_37032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37001 === (15))){
var inst_36990 = (state_37000[(2)]);
var state_37000__$1 = state_37000;
var statearr_37008_37033 = state_37000__$1;
(statearr_37008_37033[(2)] = inst_36990);

(statearr_37008_37033[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37001 === (13))){
var state_37000__$1 = state_37000;
var statearr_37009_37034 = state_37000__$1;
(statearr_37009_37034[(2)] = null);

(statearr_37009_37034[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37001 === (6))){
var inst_36960 = (state_37000[(8)]);
var inst_36985 = inst_36960.length;
var inst_36986 = (inst_36985 > (0));
var state_37000__$1 = state_37000;
if(cljs.core.truth_(inst_36986)){
var statearr_37010_37035 = state_37000__$1;
(statearr_37010_37035[(1)] = (12));

} else {
var statearr_37011_37036 = state_37000__$1;
(statearr_37011_37036[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37001 === (3))){
var inst_36998 = (state_37000[(2)]);
var state_37000__$1 = state_37000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37000__$1,inst_36998);
} else {
if((state_val_37001 === (12))){
var inst_36960 = (state_37000[(8)]);
var inst_36988 = cljs.core.vec.call(null,inst_36960);
var state_37000__$1 = state_37000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37000__$1,(15),out,inst_36988);
} else {
if((state_val_37001 === (2))){
var state_37000__$1 = state_37000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37000__$1,(4),ch);
} else {
if((state_val_37001 === (11))){
var inst_36964 = (state_37000[(9)]);
var inst_36968 = (state_37000[(10)]);
var inst_36978 = (state_37000[(2)]);
var inst_36979 = [];
var inst_36980 = inst_36979.push(inst_36964);
var inst_36960 = inst_36979;
var inst_36961 = inst_36968;
var state_37000__$1 = (function (){var statearr_37012 = state_37000;
(statearr_37012[(11)] = inst_36978);

(statearr_37012[(7)] = inst_36961);

(statearr_37012[(12)] = inst_36980);

(statearr_37012[(8)] = inst_36960);

return statearr_37012;
})();
var statearr_37013_37037 = state_37000__$1;
(statearr_37013_37037[(2)] = null);

(statearr_37013_37037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37001 === (9))){
var inst_36960 = (state_37000[(8)]);
var inst_36976 = cljs.core.vec.call(null,inst_36960);
var state_37000__$1 = state_37000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37000__$1,(11),out,inst_36976);
} else {
if((state_val_37001 === (5))){
var inst_36961 = (state_37000[(7)]);
var inst_36964 = (state_37000[(9)]);
var inst_36968 = (state_37000[(10)]);
var inst_36968__$1 = f.call(null,inst_36964);
var inst_36969 = cljs.core._EQ_.call(null,inst_36968__$1,inst_36961);
var inst_36970 = cljs.core.keyword_identical_QMARK_.call(null,inst_36961,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36971 = (inst_36969) || (inst_36970);
var state_37000__$1 = (function (){var statearr_37014 = state_37000;
(statearr_37014[(10)] = inst_36968__$1);

return statearr_37014;
})();
if(cljs.core.truth_(inst_36971)){
var statearr_37015_37038 = state_37000__$1;
(statearr_37015_37038[(1)] = (8));

} else {
var statearr_37016_37039 = state_37000__$1;
(statearr_37016_37039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37001 === (14))){
var inst_36993 = (state_37000[(2)]);
var inst_36994 = cljs.core.async.close_BANG_.call(null,out);
var state_37000__$1 = (function (){var statearr_37018 = state_37000;
(statearr_37018[(13)] = inst_36993);

return statearr_37018;
})();
var statearr_37019_37040 = state_37000__$1;
(statearr_37019_37040[(2)] = inst_36994);

(statearr_37019_37040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37001 === (10))){
var inst_36983 = (state_37000[(2)]);
var state_37000__$1 = state_37000;
var statearr_37020_37041 = state_37000__$1;
(statearr_37020_37041[(2)] = inst_36983);

(statearr_37020_37041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37001 === (8))){
var inst_36964 = (state_37000[(9)]);
var inst_36968 = (state_37000[(10)]);
var inst_36960 = (state_37000[(8)]);
var inst_36973 = inst_36960.push(inst_36964);
var tmp37017 = inst_36960;
var inst_36960__$1 = tmp37017;
var inst_36961 = inst_36968;
var state_37000__$1 = (function (){var statearr_37021 = state_37000;
(statearr_37021[(7)] = inst_36961);

(statearr_37021[(14)] = inst_36973);

(statearr_37021[(8)] = inst_36960__$1);

return statearr_37021;
})();
var statearr_37022_37042 = state_37000__$1;
(statearr_37022_37042[(2)] = null);

(statearr_37022_37042[(1)] = (2));


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
});})(c__35124__auto___37028,out))
;
return ((function (switch__35034__auto__,c__35124__auto___37028,out){
return (function() {
var cljs$core$async$state_machine__35035__auto__ = null;
var cljs$core$async$state_machine__35035__auto____0 = (function (){
var statearr_37023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37023[(0)] = cljs$core$async$state_machine__35035__auto__);

(statearr_37023[(1)] = (1));

return statearr_37023;
});
var cljs$core$async$state_machine__35035__auto____1 = (function (state_37000){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_37000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e37024){if((e37024 instanceof Object)){
var ex__35038__auto__ = e37024;
var statearr_37025_37043 = state_37000;
(statearr_37025_37043[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37044 = state_37000;
state_37000 = G__37044;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
cljs$core$async$state_machine__35035__auto__ = function(state_37000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35035__auto____1.call(this,state_37000);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35035__auto____0;
cljs$core$async$state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35035__auto____1;
return cljs$core$async$state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto___37028,out))
})();
var state__35126__auto__ = (function (){var statearr_37026 = f__35125__auto__.call(null);
(statearr_37026[(6)] = c__35124__auto___37028);

return statearr_37026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto___37028,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1503547304207
