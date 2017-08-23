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
var G__34081 = arguments.length;
switch (G__34081) {
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
if(typeof cljs.core.async.t_cljs$core$async34082 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34082 = (function (f,blockable,meta34083){
this.f = f;
this.blockable = blockable;
this.meta34083 = meta34083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34084,meta34083__$1){
var self__ = this;
var _34084__$1 = this;
return (new cljs.core.async.t_cljs$core$async34082(self__.f,self__.blockable,meta34083__$1));
});

cljs.core.async.t_cljs$core$async34082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34084){
var self__ = this;
var _34084__$1 = this;
return self__.meta34083;
});

cljs.core.async.t_cljs$core$async34082.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34082.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34082.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34082.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34083","meta34083",641288084,null)], null);
});

cljs.core.async.t_cljs$core$async34082.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34082";

cljs.core.async.t_cljs$core$async34082.cljs$lang$ctorPrWriter = (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async34082");
});

cljs.core.async.__GT_t_cljs$core$async34082 = (function cljs$core$async$__GT_t_cljs$core$async34082(f__$1,blockable__$1,meta34083){
return (new cljs.core.async.t_cljs$core$async34082(f__$1,blockable__$1,meta34083));
});

}

return (new cljs.core.async.t_cljs$core$async34082(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34088 = arguments.length;
switch (G__34088) {
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
var G__34091 = arguments.length;
switch (G__34091) {
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
var G__34094 = arguments.length;
switch (G__34094) {
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
var val_34096 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34096);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34096,ret){
return (function (){
return fn1.call(null,val_34096);
});})(val_34096,ret))
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
var G__34098 = arguments.length;
switch (G__34098) {
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
var n__31091__auto___34100 = n;
var x_34101 = (0);
while(true){
if((x_34101 < n__31091__auto___34100)){
(a[x_34101] = (0));

var G__34102 = (x_34101 + (1));
x_34101 = G__34102;
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

var G__34103 = (i + (1));
i = G__34103;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34104 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34104 = (function (flag,meta34105){
this.flag = flag;
this.meta34105 = meta34105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34106,meta34105__$1){
var self__ = this;
var _34106__$1 = this;
return (new cljs.core.async.t_cljs$core$async34104(self__.flag,meta34105__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34104.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34106){
var self__ = this;
var _34106__$1 = this;
return self__.meta34105;
});})(flag))
;

cljs.core.async.t_cljs$core$async34104.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34104.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34104.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34104.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34104.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34105","meta34105",821886456,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34104.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34104";

cljs.core.async.t_cljs$core$async34104.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async34104");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34104 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34104(flag__$1,meta34105){
return (new cljs.core.async.t_cljs$core$async34104(flag__$1,meta34105));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34104(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34107 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34107 = (function (flag,cb,meta34108){
this.flag = flag;
this.cb = cb;
this.meta34108 = meta34108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34109,meta34108__$1){
var self__ = this;
var _34109__$1 = this;
return (new cljs.core.async.t_cljs$core$async34107(self__.flag,self__.cb,meta34108__$1));
});

cljs.core.async.t_cljs$core$async34107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34109){
var self__ = this;
var _34109__$1 = this;
return self__.meta34108;
});

cljs.core.async.t_cljs$core$async34107.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34107.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34107.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34107.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34107.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34108","meta34108",-1475752547,null)], null);
});

cljs.core.async.t_cljs$core$async34107.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34107";

cljs.core.async.t_cljs$core$async34107.cljs$lang$ctorPrWriter = (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async34107");
});

cljs.core.async.__GT_t_cljs$core$async34107 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34107(flag__$1,cb__$1,meta34108){
return (new cljs.core.async.t_cljs$core$async34107(flag__$1,cb__$1,meta34108));
});

}

return (new cljs.core.async.t_cljs$core$async34107(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34110_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34110_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34111_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34111_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30048__auto__ = wport;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34112 = (i + (1));
i = G__34112;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30048__auto__ = ret;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5278__auto__ = (function (){var and__30036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30036__auto__;
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
var args__31332__auto__ = [];
var len__31325__auto___34118 = arguments.length;
var i__31326__auto___34119 = (0);
while(true){
if((i__31326__auto___34119 < len__31325__auto___34118)){
args__31332__auto__.push((arguments[i__31326__auto___34119]));

var G__34120 = (i__31326__auto___34119 + (1));
i__31326__auto___34119 = G__34120;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((1) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31333__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34115){
var map__34116 = p__34115;
var map__34116__$1 = ((((!((map__34116 == null)))?((((map__34116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34116):map__34116);
var opts = map__34116__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34113){
var G__34114 = cljs.core.first.call(null,seq34113);
var seq34113__$1 = cljs.core.next.call(null,seq34113);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34114,seq34113__$1);
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
var G__34122 = arguments.length;
switch (G__34122) {
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
var c__34021__auto___34168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34021__auto___34168){
return (function (){
var f__34022__auto__ = (function (){var switch__33931__auto__ = ((function (c__34021__auto___34168){
return (function (state_34146){
var state_val_34147 = (state_34146[(1)]);
if((state_val_34147 === (7))){
var inst_34142 = (state_34146[(2)]);
var state_34146__$1 = state_34146;
var statearr_34148_34169 = state_34146__$1;
(statearr_34148_34169[(2)] = inst_34142);

(statearr_34148_34169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (1))){
var state_34146__$1 = state_34146;
var statearr_34149_34170 = state_34146__$1;
(statearr_34149_34170[(2)] = null);

(statearr_34149_34170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (4))){
var inst_34125 = (state_34146[(7)]);
var inst_34125__$1 = (state_34146[(2)]);
var inst_34126 = (inst_34125__$1 == null);
var state_34146__$1 = (function (){var statearr_34150 = state_34146;
(statearr_34150[(7)] = inst_34125__$1);

return statearr_34150;
})();
if(cljs.core.truth_(inst_34126)){
var statearr_34151_34171 = state_34146__$1;
(statearr_34151_34171[(1)] = (5));

} else {
var statearr_34152_34172 = state_34146__$1;
(statearr_34152_34172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (13))){
var state_34146__$1 = state_34146;
var statearr_34153_34173 = state_34146__$1;
(statearr_34153_34173[(2)] = null);

(statearr_34153_34173[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (6))){
var inst_34125 = (state_34146[(7)]);
var state_34146__$1 = state_34146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34146__$1,(11),to,inst_34125);
} else {
if((state_val_34147 === (3))){
var inst_34144 = (state_34146[(2)]);
var state_34146__$1 = state_34146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34146__$1,inst_34144);
} else {
if((state_val_34147 === (12))){
var state_34146__$1 = state_34146;
var statearr_34154_34174 = state_34146__$1;
(statearr_34154_34174[(2)] = null);

(statearr_34154_34174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (2))){
var state_34146__$1 = state_34146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34146__$1,(4),from);
} else {
if((state_val_34147 === (11))){
var inst_34135 = (state_34146[(2)]);
var state_34146__$1 = state_34146;
if(cljs.core.truth_(inst_34135)){
var statearr_34155_34175 = state_34146__$1;
(statearr_34155_34175[(1)] = (12));

} else {
var statearr_34156_34176 = state_34146__$1;
(statearr_34156_34176[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (9))){
var state_34146__$1 = state_34146;
var statearr_34157_34177 = state_34146__$1;
(statearr_34157_34177[(2)] = null);

(statearr_34157_34177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (5))){
var state_34146__$1 = state_34146;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34158_34178 = state_34146__$1;
(statearr_34158_34178[(1)] = (8));

} else {
var statearr_34159_34179 = state_34146__$1;
(statearr_34159_34179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (14))){
var inst_34140 = (state_34146[(2)]);
var state_34146__$1 = state_34146;
var statearr_34160_34180 = state_34146__$1;
(statearr_34160_34180[(2)] = inst_34140);

(statearr_34160_34180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (10))){
var inst_34132 = (state_34146[(2)]);
var state_34146__$1 = state_34146;
var statearr_34161_34181 = state_34146__$1;
(statearr_34161_34181[(2)] = inst_34132);

(statearr_34161_34181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34147 === (8))){
var inst_34129 = cljs.core.async.close_BANG_.call(null,to);
var state_34146__$1 = state_34146;
var statearr_34162_34182 = state_34146__$1;
(statearr_34162_34182[(2)] = inst_34129);

(statearr_34162_34182[(1)] = (10));


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
});})(c__34021__auto___34168))
;
return ((function (switch__33931__auto__,c__34021__auto___34168){
return (function() {
var cljs$core$async$state_machine__33932__auto__ = null;
var cljs$core$async$state_machine__33932__auto____0 = (function (){
var statearr_34163 = [null,null,null,null,null,null,null,null];
(statearr_34163[(0)] = cljs$core$async$state_machine__33932__auto__);

(statearr_34163[(1)] = (1));

return statearr_34163;
});
var cljs$core$async$state_machine__33932__auto____1 = (function (state_34146){
while(true){
var ret_value__33933__auto__ = (function (){try{while(true){
var result__33934__auto__ = switch__33931__auto__.call(null,state_34146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33934__auto__;
}
break;
}
}catch (e34164){if((e34164 instanceof Object)){
var ex__33935__auto__ = e34164;
var statearr_34165_34183 = state_34146;
(statearr_34165_34183[(5)] = ex__33935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34184 = state_34146;
state_34146 = G__34184;
continue;
} else {
return ret_value__33933__auto__;
}
break;
}
});
cljs$core$async$state_machine__33932__auto__ = function(state_34146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33932__auto____1.call(this,state_34146);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33932__auto____0;
cljs$core$async$state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33932__auto____1;
return cljs$core$async$state_machine__33932__auto__;
})()
;})(switch__33931__auto__,c__34021__auto___34168))
})();
var state__34023__auto__ = (function (){var statearr_34166 = f__34022__auto__.call(null);
(statearr_34166[(6)] = c__34021__auto___34168);

return statearr_34166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34023__auto__);
});})(c__34021__auto___34168))
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
return (function (p__34185){
var vec__34186 = p__34185;
var v = cljs.core.nth.call(null,vec__34186,(0),null);
var p = cljs.core.nth.call(null,vec__34186,(1),null);
var job = vec__34186;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34021__auto___34357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34021__auto___34357,res,vec__34186,v,p,job,jobs,results){
return (function (){
var f__34022__auto__ = (function (){var switch__33931__auto__ = ((function (c__34021__auto___34357,res,vec__34186,v,p,job,jobs,results){
return (function (state_34193){
var state_val_34194 = (state_34193[(1)]);
if((state_val_34194 === (1))){
var state_34193__$1 = state_34193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34193__$1,(2),res,v);
} else {
if((state_val_34194 === (2))){
var inst_34190 = (state_34193[(2)]);
var inst_34191 = cljs.core.async.close_BANG_.call(null,res);
var state_34193__$1 = (function (){var statearr_34195 = state_34193;
(statearr_34195[(7)] = inst_34190);

return statearr_34195;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34193__$1,inst_34191);
} else {
return null;
}
}
});})(c__34021__auto___34357,res,vec__34186,v,p,job,jobs,results))
;
return ((function (switch__33931__auto__,c__34021__auto___34357,res,vec__34186,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____0 = (function (){
var statearr_34196 = [null,null,null,null,null,null,null,null];
(statearr_34196[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__);

(statearr_34196[(1)] = (1));

return statearr_34196;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____1 = (function (state_34193){
while(true){
var ret_value__33933__auto__ = (function (){try{while(true){
var result__33934__auto__ = switch__33931__auto__.call(null,state_34193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33934__auto__;
}
break;
}
}catch (e34197){if((e34197 instanceof Object)){
var ex__33935__auto__ = e34197;
var statearr_34198_34358 = state_34193;
(statearr_34198_34358[(5)] = ex__33935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34359 = state_34193;
state_34193 = G__34359;
continue;
} else {
return ret_value__33933__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__ = function(state_34193){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____1.call(this,state_34193);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__;
})()
;})(switch__33931__auto__,c__34021__auto___34357,res,vec__34186,v,p,job,jobs,results))
})();
var state__34023__auto__ = (function (){var statearr_34199 = f__34022__auto__.call(null);
(statearr_34199[(6)] = c__34021__auto___34357);

return statearr_34199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34023__auto__);
});})(c__34021__auto___34357,res,vec__34186,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34200){
var vec__34201 = p__34200;
var v = cljs.core.nth.call(null,vec__34201,(0),null);
var p = cljs.core.nth.call(null,vec__34201,(1),null);
var job = vec__34201;
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
var n__31091__auto___34360 = n;
var __34361 = (0);
while(true){
if((__34361 < n__31091__auto___34360)){
var G__34204_34362 = type;
var G__34204_34363__$1 = (((G__34204_34362 instanceof cljs.core.Keyword))?G__34204_34362.fqn:null);
switch (G__34204_34363__$1) {
case "compute":
var c__34021__auto___34365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34361,c__34021__auto___34365,G__34204_34362,G__34204_34363__$1,n__31091__auto___34360,jobs,results,process,async){
return (function (){
var f__34022__auto__ = (function (){var switch__33931__auto__ = ((function (__34361,c__34021__auto___34365,G__34204_34362,G__34204_34363__$1,n__31091__auto___34360,jobs,results,process,async){
return (function (state_34217){
var state_val_34218 = (state_34217[(1)]);
if((state_val_34218 === (1))){
var state_34217__$1 = state_34217;
var statearr_34219_34366 = state_34217__$1;
(statearr_34219_34366[(2)] = null);

(statearr_34219_34366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (2))){
var state_34217__$1 = state_34217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34217__$1,(4),jobs);
} else {
if((state_val_34218 === (3))){
var inst_34215 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34217__$1,inst_34215);
} else {
if((state_val_34218 === (4))){
var inst_34207 = (state_34217[(2)]);
var inst_34208 = process.call(null,inst_34207);
var state_34217__$1 = state_34217;
if(cljs.core.truth_(inst_34208)){
var statearr_34220_34367 = state_34217__$1;
(statearr_34220_34367[(1)] = (5));

} else {
var statearr_34221_34368 = state_34217__$1;
(statearr_34221_34368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (5))){
var state_34217__$1 = state_34217;
var statearr_34222_34369 = state_34217__$1;
(statearr_34222_34369[(2)] = null);

(statearr_34222_34369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (6))){
var state_34217__$1 = state_34217;
var statearr_34223_34370 = state_34217__$1;
(statearr_34223_34370[(2)] = null);

(statearr_34223_34370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (7))){
var inst_34213 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
var statearr_34224_34371 = state_34217__$1;
(statearr_34224_34371[(2)] = inst_34213);

(statearr_34224_34371[(1)] = (3));


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
});})(__34361,c__34021__auto___34365,G__34204_34362,G__34204_34363__$1,n__31091__auto___34360,jobs,results,process,async))
;
return ((function (__34361,switch__33931__auto__,c__34021__auto___34365,G__34204_34362,G__34204_34363__$1,n__31091__auto___34360,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____0 = (function (){
var statearr_34225 = [null,null,null,null,null,null,null];
(statearr_34225[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__);

(statearr_34225[(1)] = (1));

return statearr_34225;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____1 = (function (state_34217){
while(true){
var ret_value__33933__auto__ = (function (){try{while(true){
var result__33934__auto__ = switch__33931__auto__.call(null,state_34217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33934__auto__;
}
break;
}
}catch (e34226){if((e34226 instanceof Object)){
var ex__33935__auto__ = e34226;
var statearr_34227_34372 = state_34217;
(statearr_34227_34372[(5)] = ex__33935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34373 = state_34217;
state_34217 = G__34373;
continue;
} else {
return ret_value__33933__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__ = function(state_34217){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____1.call(this,state_34217);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__;
})()
;})(__34361,switch__33931__auto__,c__34021__auto___34365,G__34204_34362,G__34204_34363__$1,n__31091__auto___34360,jobs,results,process,async))
})();
var state__34023__auto__ = (function (){var statearr_34228 = f__34022__auto__.call(null);
(statearr_34228[(6)] = c__34021__auto___34365);

return statearr_34228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34023__auto__);
});})(__34361,c__34021__auto___34365,G__34204_34362,G__34204_34363__$1,n__31091__auto___34360,jobs,results,process,async))
);


break;
case "async":
var c__34021__auto___34374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34361,c__34021__auto___34374,G__34204_34362,G__34204_34363__$1,n__31091__auto___34360,jobs,results,process,async){
return (function (){
var f__34022__auto__ = (function (){var switch__33931__auto__ = ((function (__34361,c__34021__auto___34374,G__34204_34362,G__34204_34363__$1,n__31091__auto___34360,jobs,results,process,async){
return (function (state_34241){
var state_val_34242 = (state_34241[(1)]);
if((state_val_34242 === (1))){
var state_34241__$1 = state_34241;
var statearr_34243_34375 = state_34241__$1;
(statearr_34243_34375[(2)] = null);

(statearr_34243_34375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (2))){
var state_34241__$1 = state_34241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34241__$1,(4),jobs);
} else {
if((state_val_34242 === (3))){
var inst_34239 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34241__$1,inst_34239);
} else {
if((state_val_34242 === (4))){
var inst_34231 = (state_34241[(2)]);
var inst_34232 = async.call(null,inst_34231);
var state_34241__$1 = state_34241;
if(cljs.core.truth_(inst_34232)){
var statearr_34244_34376 = state_34241__$1;
(statearr_34244_34376[(1)] = (5));

} else {
var statearr_34245_34377 = state_34241__$1;
(statearr_34245_34377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (5))){
var state_34241__$1 = state_34241;
var statearr_34246_34378 = state_34241__$1;
(statearr_34246_34378[(2)] = null);

(statearr_34246_34378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (6))){
var state_34241__$1 = state_34241;
var statearr_34247_34379 = state_34241__$1;
(statearr_34247_34379[(2)] = null);

(statearr_34247_34379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (7))){
var inst_34237 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
var statearr_34248_34380 = state_34241__$1;
(statearr_34248_34380[(2)] = inst_34237);

(statearr_34248_34380[(1)] = (3));


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
});})(__34361,c__34021__auto___34374,G__34204_34362,G__34204_34363__$1,n__31091__auto___34360,jobs,results,process,async))
;
return ((function (__34361,switch__33931__auto__,c__34021__auto___34374,G__34204_34362,G__34204_34363__$1,n__31091__auto___34360,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____0 = (function (){
var statearr_34249 = [null,null,null,null,null,null,null];
(statearr_34249[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__);

(statearr_34249[(1)] = (1));

return statearr_34249;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____1 = (function (state_34241){
while(true){
var ret_value__33933__auto__ = (function (){try{while(true){
var result__33934__auto__ = switch__33931__auto__.call(null,state_34241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33934__auto__;
}
break;
}
}catch (e34250){if((e34250 instanceof Object)){
var ex__33935__auto__ = e34250;
var statearr_34251_34381 = state_34241;
(statearr_34251_34381[(5)] = ex__33935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34382 = state_34241;
state_34241 = G__34382;
continue;
} else {
return ret_value__33933__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__ = function(state_34241){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____1.call(this,state_34241);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__;
})()
;})(__34361,switch__33931__auto__,c__34021__auto___34374,G__34204_34362,G__34204_34363__$1,n__31091__auto___34360,jobs,results,process,async))
})();
var state__34023__auto__ = (function (){var statearr_34252 = f__34022__auto__.call(null);
(statearr_34252[(6)] = c__34021__auto___34374);

return statearr_34252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34023__auto__);
});})(__34361,c__34021__auto___34374,G__34204_34362,G__34204_34363__$1,n__31091__auto___34360,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34204_34363__$1)].join('')));

}

var G__34383 = (__34361 + (1));
__34361 = G__34383;
continue;
} else {
}
break;
}

var c__34021__auto___34384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34021__auto___34384,jobs,results,process,async){
return (function (){
var f__34022__auto__ = (function (){var switch__33931__auto__ = ((function (c__34021__auto___34384,jobs,results,process,async){
return (function (state_34274){
var state_val_34275 = (state_34274[(1)]);
if((state_val_34275 === (1))){
var state_34274__$1 = state_34274;
var statearr_34276_34385 = state_34274__$1;
(statearr_34276_34385[(2)] = null);

(statearr_34276_34385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (2))){
var state_34274__$1 = state_34274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34274__$1,(4),from);
} else {
if((state_val_34275 === (3))){
var inst_34272 = (state_34274[(2)]);
var state_34274__$1 = state_34274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34274__$1,inst_34272);
} else {
if((state_val_34275 === (4))){
var inst_34255 = (state_34274[(7)]);
var inst_34255__$1 = (state_34274[(2)]);
var inst_34256 = (inst_34255__$1 == null);
var state_34274__$1 = (function (){var statearr_34277 = state_34274;
(statearr_34277[(7)] = inst_34255__$1);

return statearr_34277;
})();
if(cljs.core.truth_(inst_34256)){
var statearr_34278_34386 = state_34274__$1;
(statearr_34278_34386[(1)] = (5));

} else {
var statearr_34279_34387 = state_34274__$1;
(statearr_34279_34387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (5))){
var inst_34258 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34274__$1 = state_34274;
var statearr_34280_34388 = state_34274__$1;
(statearr_34280_34388[(2)] = inst_34258);

(statearr_34280_34388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (6))){
var inst_34260 = (state_34274[(8)]);
var inst_34255 = (state_34274[(7)]);
var inst_34260__$1 = cljs.core.async.chan.call(null,(1));
var inst_34261 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34262 = [inst_34255,inst_34260__$1];
var inst_34263 = (new cljs.core.PersistentVector(null,2,(5),inst_34261,inst_34262,null));
var state_34274__$1 = (function (){var statearr_34281 = state_34274;
(statearr_34281[(8)] = inst_34260__$1);

return statearr_34281;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34274__$1,(8),jobs,inst_34263);
} else {
if((state_val_34275 === (7))){
var inst_34270 = (state_34274[(2)]);
var state_34274__$1 = state_34274;
var statearr_34282_34389 = state_34274__$1;
(statearr_34282_34389[(2)] = inst_34270);

(statearr_34282_34389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (8))){
var inst_34260 = (state_34274[(8)]);
var inst_34265 = (state_34274[(2)]);
var state_34274__$1 = (function (){var statearr_34283 = state_34274;
(statearr_34283[(9)] = inst_34265);

return statearr_34283;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34274__$1,(9),results,inst_34260);
} else {
if((state_val_34275 === (9))){
var inst_34267 = (state_34274[(2)]);
var state_34274__$1 = (function (){var statearr_34284 = state_34274;
(statearr_34284[(10)] = inst_34267);

return statearr_34284;
})();
var statearr_34285_34390 = state_34274__$1;
(statearr_34285_34390[(2)] = null);

(statearr_34285_34390[(1)] = (2));


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
});})(c__34021__auto___34384,jobs,results,process,async))
;
return ((function (switch__33931__auto__,c__34021__auto___34384,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____0 = (function (){
var statearr_34286 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34286[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__);

(statearr_34286[(1)] = (1));

return statearr_34286;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____1 = (function (state_34274){
while(true){
var ret_value__33933__auto__ = (function (){try{while(true){
var result__33934__auto__ = switch__33931__auto__.call(null,state_34274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33934__auto__;
}
break;
}
}catch (e34287){if((e34287 instanceof Object)){
var ex__33935__auto__ = e34287;
var statearr_34288_34391 = state_34274;
(statearr_34288_34391[(5)] = ex__33935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34392 = state_34274;
state_34274 = G__34392;
continue;
} else {
return ret_value__33933__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__ = function(state_34274){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____1.call(this,state_34274);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__;
})()
;})(switch__33931__auto__,c__34021__auto___34384,jobs,results,process,async))
})();
var state__34023__auto__ = (function (){var statearr_34289 = f__34022__auto__.call(null);
(statearr_34289[(6)] = c__34021__auto___34384);

return statearr_34289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34023__auto__);
});})(c__34021__auto___34384,jobs,results,process,async))
);


var c__34021__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34021__auto__,jobs,results,process,async){
return (function (){
var f__34022__auto__ = (function (){var switch__33931__auto__ = ((function (c__34021__auto__,jobs,results,process,async){
return (function (state_34327){
var state_val_34328 = (state_34327[(1)]);
if((state_val_34328 === (7))){
var inst_34323 = (state_34327[(2)]);
var state_34327__$1 = state_34327;
var statearr_34329_34393 = state_34327__$1;
(statearr_34329_34393[(2)] = inst_34323);

(statearr_34329_34393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (20))){
var state_34327__$1 = state_34327;
var statearr_34330_34394 = state_34327__$1;
(statearr_34330_34394[(2)] = null);

(statearr_34330_34394[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (1))){
var state_34327__$1 = state_34327;
var statearr_34331_34395 = state_34327__$1;
(statearr_34331_34395[(2)] = null);

(statearr_34331_34395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (4))){
var inst_34292 = (state_34327[(7)]);
var inst_34292__$1 = (state_34327[(2)]);
var inst_34293 = (inst_34292__$1 == null);
var state_34327__$1 = (function (){var statearr_34332 = state_34327;
(statearr_34332[(7)] = inst_34292__$1);

return statearr_34332;
})();
if(cljs.core.truth_(inst_34293)){
var statearr_34333_34396 = state_34327__$1;
(statearr_34333_34396[(1)] = (5));

} else {
var statearr_34334_34397 = state_34327__$1;
(statearr_34334_34397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (15))){
var inst_34305 = (state_34327[(8)]);
var state_34327__$1 = state_34327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34327__$1,(18),to,inst_34305);
} else {
if((state_val_34328 === (21))){
var inst_34318 = (state_34327[(2)]);
var state_34327__$1 = state_34327;
var statearr_34335_34398 = state_34327__$1;
(statearr_34335_34398[(2)] = inst_34318);

(statearr_34335_34398[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (13))){
var inst_34320 = (state_34327[(2)]);
var state_34327__$1 = (function (){var statearr_34336 = state_34327;
(statearr_34336[(9)] = inst_34320);

return statearr_34336;
})();
var statearr_34337_34399 = state_34327__$1;
(statearr_34337_34399[(2)] = null);

(statearr_34337_34399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (6))){
var inst_34292 = (state_34327[(7)]);
var state_34327__$1 = state_34327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34327__$1,(11),inst_34292);
} else {
if((state_val_34328 === (17))){
var inst_34313 = (state_34327[(2)]);
var state_34327__$1 = state_34327;
if(cljs.core.truth_(inst_34313)){
var statearr_34338_34400 = state_34327__$1;
(statearr_34338_34400[(1)] = (19));

} else {
var statearr_34339_34401 = state_34327__$1;
(statearr_34339_34401[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (3))){
var inst_34325 = (state_34327[(2)]);
var state_34327__$1 = state_34327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34327__$1,inst_34325);
} else {
if((state_val_34328 === (12))){
var inst_34302 = (state_34327[(10)]);
var state_34327__$1 = state_34327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34327__$1,(14),inst_34302);
} else {
if((state_val_34328 === (2))){
var state_34327__$1 = state_34327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34327__$1,(4),results);
} else {
if((state_val_34328 === (19))){
var state_34327__$1 = state_34327;
var statearr_34340_34402 = state_34327__$1;
(statearr_34340_34402[(2)] = null);

(statearr_34340_34402[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (11))){
var inst_34302 = (state_34327[(2)]);
var state_34327__$1 = (function (){var statearr_34341 = state_34327;
(statearr_34341[(10)] = inst_34302);

return statearr_34341;
})();
var statearr_34342_34403 = state_34327__$1;
(statearr_34342_34403[(2)] = null);

(statearr_34342_34403[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (9))){
var state_34327__$1 = state_34327;
var statearr_34343_34404 = state_34327__$1;
(statearr_34343_34404[(2)] = null);

(statearr_34343_34404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (5))){
var state_34327__$1 = state_34327;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34344_34405 = state_34327__$1;
(statearr_34344_34405[(1)] = (8));

} else {
var statearr_34345_34406 = state_34327__$1;
(statearr_34345_34406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (14))){
var inst_34305 = (state_34327[(8)]);
var inst_34307 = (state_34327[(11)]);
var inst_34305__$1 = (state_34327[(2)]);
var inst_34306 = (inst_34305__$1 == null);
var inst_34307__$1 = cljs.core.not.call(null,inst_34306);
var state_34327__$1 = (function (){var statearr_34346 = state_34327;
(statearr_34346[(8)] = inst_34305__$1);

(statearr_34346[(11)] = inst_34307__$1);

return statearr_34346;
})();
if(inst_34307__$1){
var statearr_34347_34407 = state_34327__$1;
(statearr_34347_34407[(1)] = (15));

} else {
var statearr_34348_34408 = state_34327__$1;
(statearr_34348_34408[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (16))){
var inst_34307 = (state_34327[(11)]);
var state_34327__$1 = state_34327;
var statearr_34349_34409 = state_34327__$1;
(statearr_34349_34409[(2)] = inst_34307);

(statearr_34349_34409[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (10))){
var inst_34299 = (state_34327[(2)]);
var state_34327__$1 = state_34327;
var statearr_34350_34410 = state_34327__$1;
(statearr_34350_34410[(2)] = inst_34299);

(statearr_34350_34410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (18))){
var inst_34310 = (state_34327[(2)]);
var state_34327__$1 = state_34327;
var statearr_34351_34411 = state_34327__$1;
(statearr_34351_34411[(2)] = inst_34310);

(statearr_34351_34411[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34328 === (8))){
var inst_34296 = cljs.core.async.close_BANG_.call(null,to);
var state_34327__$1 = state_34327;
var statearr_34352_34412 = state_34327__$1;
(statearr_34352_34412[(2)] = inst_34296);

(statearr_34352_34412[(1)] = (10));


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
});})(c__34021__auto__,jobs,results,process,async))
;
return ((function (switch__33931__auto__,c__34021__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____0 = (function (){
var statearr_34353 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34353[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__);

(statearr_34353[(1)] = (1));

return statearr_34353;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____1 = (function (state_34327){
while(true){
var ret_value__33933__auto__ = (function (){try{while(true){
var result__33934__auto__ = switch__33931__auto__.call(null,state_34327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33934__auto__;
}
break;
}
}catch (e34354){if((e34354 instanceof Object)){
var ex__33935__auto__ = e34354;
var statearr_34355_34413 = state_34327;
(statearr_34355_34413[(5)] = ex__33935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34414 = state_34327;
state_34327 = G__34414;
continue;
} else {
return ret_value__33933__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__ = function(state_34327){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____1.call(this,state_34327);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33932__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33932__auto__;
})()
;})(switch__33931__auto__,c__34021__auto__,jobs,results,process,async))
})();
var state__34023__auto__ = (function (){var statearr_34356 = f__34022__auto__.call(null);
(statearr_34356[(6)] = c__34021__auto__);

return statearr_34356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34023__auto__);
});})(c__34021__auto__,jobs,results,process,async))
);

return c__34021__auto__;
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
var G__34416 = arguments.length;
switch (G__34416) {
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
var G__34419 = arguments.length;
switch (G__34419) {
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
var G__34422 = arguments.length;
switch (G__34422) {
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
var c__34021__auto___34471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34021__auto___34471,tc,fc){
return (function (){
var f__34022__auto__ = (function (){var switch__33931__auto__ = ((function (c__34021__auto___34471,tc,fc){
return (function (state_34448){
var state_val_34449 = (state_34448[(1)]);
if((state_val_34449 === (7))){
var inst_34444 = (state_34448[(2)]);
var state_34448__$1 = state_34448;
var statearr_34450_34472 = state_34448__$1;
(statearr_34450_34472[(2)] = inst_34444);

(statearr_34450_34472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (1))){
var state_34448__$1 = state_34448;
var statearr_34451_34473 = state_34448__$1;
(statearr_34451_34473[(2)] = null);

(statearr_34451_34473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (4))){
var inst_34425 = (state_34448[(7)]);
var inst_34425__$1 = (state_34448[(2)]);
var inst_34426 = (inst_34425__$1 == null);
var state_34448__$1 = (function (){var statearr_34452 = state_34448;
(statearr_34452[(7)] = inst_34425__$1);

return statearr_34452;
})();
if(cljs.core.truth_(inst_34426)){
var statearr_34453_34474 = state_34448__$1;
(statearr_34453_34474[(1)] = (5));

} else {
var statearr_34454_34475 = state_34448__$1;
(statearr_34454_34475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (13))){
var state_34448__$1 = state_34448;
var statearr_34455_34476 = state_34448__$1;
(statearr_34455_34476[(2)] = null);

(statearr_34455_34476[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (6))){
var inst_34425 = (state_34448[(7)]);
var inst_34431 = p.call(null,inst_34425);
var state_34448__$1 = state_34448;
if(cljs.core.truth_(inst_34431)){
var statearr_34456_34477 = state_34448__$1;
(statearr_34456_34477[(1)] = (9));

} else {
var statearr_34457_34478 = state_34448__$1;
(statearr_34457_34478[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (3))){
var inst_34446 = (state_34448[(2)]);
var state_34448__$1 = state_34448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34448__$1,inst_34446);
} else {
if((state_val_34449 === (12))){
var state_34448__$1 = state_34448;
var statearr_34458_34479 = state_34448__$1;
(statearr_34458_34479[(2)] = null);

(statearr_34458_34479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (2))){
var state_34448__$1 = state_34448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34448__$1,(4),ch);
} else {
if((state_val_34449 === (11))){
var inst_34425 = (state_34448[(7)]);
var inst_34435 = (state_34448[(2)]);
var state_34448__$1 = state_34448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34448__$1,(8),inst_34435,inst_34425);
} else {
if((state_val_34449 === (9))){
var state_34448__$1 = state_34448;
var statearr_34459_34480 = state_34448__$1;
(statearr_34459_34480[(2)] = tc);

(statearr_34459_34480[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (5))){
var inst_34428 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34429 = cljs.core.async.close_BANG_.call(null,fc);
var state_34448__$1 = (function (){var statearr_34460 = state_34448;
(statearr_34460[(8)] = inst_34428);

return statearr_34460;
})();
var statearr_34461_34481 = state_34448__$1;
(statearr_34461_34481[(2)] = inst_34429);

(statearr_34461_34481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (14))){
var inst_34442 = (state_34448[(2)]);
var state_34448__$1 = state_34448;
var statearr_34462_34482 = state_34448__$1;
(statearr_34462_34482[(2)] = inst_34442);

(statearr_34462_34482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (10))){
var state_34448__$1 = state_34448;
var statearr_34463_34483 = state_34448__$1;
(statearr_34463_34483[(2)] = fc);

(statearr_34463_34483[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (8))){
var inst_34437 = (state_34448[(2)]);
var state_34448__$1 = state_34448;
if(cljs.core.truth_(inst_34437)){
var statearr_34464_34484 = state_34448__$1;
(statearr_34464_34484[(1)] = (12));

} else {
var statearr_34465_34485 = state_34448__$1;
(statearr_34465_34485[(1)] = (13));

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
});})(c__34021__auto___34471,tc,fc))
;
return ((function (switch__33931__auto__,c__34021__auto___34471,tc,fc){
return (function() {
var cljs$core$async$state_machine__33932__auto__ = null;
var cljs$core$async$state_machine__33932__auto____0 = (function (){
var statearr_34466 = [null,null,null,null,null,null,null,null,null];
(statearr_34466[(0)] = cljs$core$async$state_machine__33932__auto__);

(statearr_34466[(1)] = (1));

return statearr_34466;
});
var cljs$core$async$state_machine__33932__auto____1 = (function (state_34448){
while(true){
var ret_value__33933__auto__ = (function (){try{while(true){
var result__33934__auto__ = switch__33931__auto__.call(null,state_34448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33934__auto__;
}
break;
}
}catch (e34467){if((e34467 instanceof Object)){
var ex__33935__auto__ = e34467;
var statearr_34468_34486 = state_34448;
(statearr_34468_34486[(5)] = ex__33935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34487 = state_34448;
state_34448 = G__34487;
continue;
} else {
return ret_value__33933__auto__;
}
break;
}
});
cljs$core$async$state_machine__33932__auto__ = function(state_34448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33932__auto____1.call(this,state_34448);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33932__auto____0;
cljs$core$async$state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33932__auto____1;
return cljs$core$async$state_machine__33932__auto__;
})()
;})(switch__33931__auto__,c__34021__auto___34471,tc,fc))
})();
var state__34023__auto__ = (function (){var statearr_34469 = f__34022__auto__.call(null);
(statearr_34469[(6)] = c__34021__auto___34471);

return statearr_34469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34023__auto__);
});})(c__34021__auto___34471,tc,fc))
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
var c__34021__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34021__auto__){
return (function (){
var f__34022__auto__ = (function (){var switch__33931__auto__ = ((function (c__34021__auto__){
return (function (state_34508){
var state_val_34509 = (state_34508[(1)]);
if((state_val_34509 === (7))){
var inst_34504 = (state_34508[(2)]);
var state_34508__$1 = state_34508;
var statearr_34510_34528 = state_34508__$1;
(statearr_34510_34528[(2)] = inst_34504);

(statearr_34510_34528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (1))){
var inst_34488 = init;
var state_34508__$1 = (function (){var statearr_34511 = state_34508;
(statearr_34511[(7)] = inst_34488);

return statearr_34511;
})();
var statearr_34512_34529 = state_34508__$1;
(statearr_34512_34529[(2)] = null);

(statearr_34512_34529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (4))){
var inst_34491 = (state_34508[(8)]);
var inst_34491__$1 = (state_34508[(2)]);
var inst_34492 = (inst_34491__$1 == null);
var state_34508__$1 = (function (){var statearr_34513 = state_34508;
(statearr_34513[(8)] = inst_34491__$1);

return statearr_34513;
})();
if(cljs.core.truth_(inst_34492)){
var statearr_34514_34530 = state_34508__$1;
(statearr_34514_34530[(1)] = (5));

} else {
var statearr_34515_34531 = state_34508__$1;
(statearr_34515_34531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (6))){
var inst_34495 = (state_34508[(9)]);
var inst_34488 = (state_34508[(7)]);
var inst_34491 = (state_34508[(8)]);
var inst_34495__$1 = f.call(null,inst_34488,inst_34491);
var inst_34496 = cljs.core.reduced_QMARK_.call(null,inst_34495__$1);
var state_34508__$1 = (function (){var statearr_34516 = state_34508;
(statearr_34516[(9)] = inst_34495__$1);

return statearr_34516;
})();
if(inst_34496){
var statearr_34517_34532 = state_34508__$1;
(statearr_34517_34532[(1)] = (8));

} else {
var statearr_34518_34533 = state_34508__$1;
(statearr_34518_34533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (3))){
var inst_34506 = (state_34508[(2)]);
var state_34508__$1 = state_34508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34508__$1,inst_34506);
} else {
if((state_val_34509 === (2))){
var state_34508__$1 = state_34508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34508__$1,(4),ch);
} else {
if((state_val_34509 === (9))){
var inst_34495 = (state_34508[(9)]);
var inst_34488 = inst_34495;
var state_34508__$1 = (function (){var statearr_34519 = state_34508;
(statearr_34519[(7)] = inst_34488);

return statearr_34519;
})();
var statearr_34520_34534 = state_34508__$1;
(statearr_34520_34534[(2)] = null);

(statearr_34520_34534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (5))){
var inst_34488 = (state_34508[(7)]);
var state_34508__$1 = state_34508;
var statearr_34521_34535 = state_34508__$1;
(statearr_34521_34535[(2)] = inst_34488);

(statearr_34521_34535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (10))){
var inst_34502 = (state_34508[(2)]);
var state_34508__$1 = state_34508;
var statearr_34522_34536 = state_34508__$1;
(statearr_34522_34536[(2)] = inst_34502);

(statearr_34522_34536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (8))){
var inst_34495 = (state_34508[(9)]);
var inst_34498 = cljs.core.deref.call(null,inst_34495);
var state_34508__$1 = state_34508;
var statearr_34523_34537 = state_34508__$1;
(statearr_34523_34537[(2)] = inst_34498);

(statearr_34523_34537[(1)] = (10));


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
});})(c__34021__auto__))
;
return ((function (switch__33931__auto__,c__34021__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33932__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33932__auto____0 = (function (){
var statearr_34524 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34524[(0)] = cljs$core$async$reduce_$_state_machine__33932__auto__);

(statearr_34524[(1)] = (1));

return statearr_34524;
});
var cljs$core$async$reduce_$_state_machine__33932__auto____1 = (function (state_34508){
while(true){
var ret_value__33933__auto__ = (function (){try{while(true){
var result__33934__auto__ = switch__33931__auto__.call(null,state_34508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33934__auto__;
}
break;
}
}catch (e34525){if((e34525 instanceof Object)){
var ex__33935__auto__ = e34525;
var statearr_34526_34538 = state_34508;
(statearr_34526_34538[(5)] = ex__33935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34539 = state_34508;
state_34508 = G__34539;
continue;
} else {
return ret_value__33933__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33932__auto__ = function(state_34508){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33932__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33932__auto____1.call(this,state_34508);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33932__auto____0;
cljs$core$async$reduce_$_state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33932__auto____1;
return cljs$core$async$reduce_$_state_machine__33932__auto__;
})()
;})(switch__33931__auto__,c__34021__auto__))
})();
var state__34023__auto__ = (function (){var statearr_34527 = f__34022__auto__.call(null);
(statearr_34527[(6)] = c__34021__auto__);

return statearr_34527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34023__auto__);
});})(c__34021__auto__))
);

return c__34021__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34021__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34021__auto__,f__$1){
return (function (){
var f__34022__auto__ = (function (){var switch__33931__auto__ = ((function (c__34021__auto__,f__$1){
return (function (state_34545){
var state_val_34546 = (state_34545[(1)]);
if((state_val_34546 === (1))){
var inst_34540 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34545__$1 = state_34545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34545__$1,(2),inst_34540);
} else {
if((state_val_34546 === (2))){
var inst_34542 = (state_34545[(2)]);
var inst_34543 = f__$1.call(null,inst_34542);
var state_34545__$1 = state_34545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34545__$1,inst_34543);
} else {
return null;
}
}
});})(c__34021__auto__,f__$1))
;
return ((function (switch__33931__auto__,c__34021__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33932__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33932__auto____0 = (function (){
var statearr_34547 = [null,null,null,null,null,null,null];
(statearr_34547[(0)] = cljs$core$async$transduce_$_state_machine__33932__auto__);

(statearr_34547[(1)] = (1));

return statearr_34547;
});
var cljs$core$async$transduce_$_state_machine__33932__auto____1 = (function (state_34545){
while(true){
var ret_value__33933__auto__ = (function (){try{while(true){
var result__33934__auto__ = switch__33931__auto__.call(null,state_34545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33934__auto__;
}
break;
}
}catch (e34548){if((e34548 instanceof Object)){
var ex__33935__auto__ = e34548;
var statearr_34549_34551 = state_34545;
(statearr_34549_34551[(5)] = ex__33935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34552 = state_34545;
state_34545 = G__34552;
continue;
} else {
return ret_value__33933__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33932__auto__ = function(state_34545){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33932__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33932__auto____1.call(this,state_34545);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33932__auto____0;
cljs$core$async$transduce_$_state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33932__auto____1;
return cljs$core$async$transduce_$_state_machine__33932__auto__;
})()
;})(switch__33931__auto__,c__34021__auto__,f__$1))
})();
var state__34023__auto__ = (function (){var statearr_34550 = f__34022__auto__.call(null);
(statearr_34550[(6)] = c__34021__auto__);

return statearr_34550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34023__auto__);
});})(c__34021__auto__,f__$1))
);

return c__34021__auto__;
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
var G__34554 = arguments.length;
switch (G__34554) {
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
var c__34021__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34021__auto__){
return (function (){
var f__34022__auto__ = (function (){var switch__33931__auto__ = ((function (c__34021__auto__){
return (function (state_34579){
var state_val_34580 = (state_34579[(1)]);
if((state_val_34580 === (7))){
var inst_34561 = (state_34579[(2)]);
var state_34579__$1 = state_34579;
var statearr_34581_34602 = state_34579__$1;
(statearr_34581_34602[(2)] = inst_34561);

(statearr_34581_34602[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34580 === (1))){
var inst_34555 = cljs.core.seq.call(null,coll);
var inst_34556 = inst_34555;
var state_34579__$1 = (function (){var statearr_34582 = state_34579;
(statearr_34582[(7)] = inst_34556);

return statearr_34582;
})();
var statearr_34583_34603 = state_34579__$1;
(statearr_34583_34603[(2)] = null);

(statearr_34583_34603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34580 === (4))){
var inst_34556 = (state_34579[(7)]);
var inst_34559 = cljs.core.first.call(null,inst_34556);
var state_34579__$1 = state_34579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34579__$1,(7),ch,inst_34559);
} else {
if((state_val_34580 === (13))){
var inst_34573 = (state_34579[(2)]);
var state_34579__$1 = state_34579;
var statearr_34584_34604 = state_34579__$1;
(statearr_34584_34604[(2)] = inst_34573);

(statearr_34584_34604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34580 === (6))){
var inst_34564 = (state_34579[(2)]);
var state_34579__$1 = state_34579;
if(cljs.core.truth_(inst_34564)){
var statearr_34585_34605 = state_34579__$1;
(statearr_34585_34605[(1)] = (8));

} else {
var statearr_34586_34606 = state_34579__$1;
(statearr_34586_34606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34580 === (3))){
var inst_34577 = (state_34579[(2)]);
var state_34579__$1 = state_34579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34579__$1,inst_34577);
} else {
if((state_val_34580 === (12))){
var state_34579__$1 = state_34579;
var statearr_34587_34607 = state_34579__$1;
(statearr_34587_34607[(2)] = null);

(statearr_34587_34607[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34580 === (2))){
var inst_34556 = (state_34579[(7)]);
var state_34579__$1 = state_34579;
if(cljs.core.truth_(inst_34556)){
var statearr_34588_34608 = state_34579__$1;
(statearr_34588_34608[(1)] = (4));

} else {
var statearr_34589_34609 = state_34579__$1;
(statearr_34589_34609[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34580 === (11))){
var inst_34570 = cljs.core.async.close_BANG_.call(null,ch);
var state_34579__$1 = state_34579;
var statearr_34590_34610 = state_34579__$1;
(statearr_34590_34610[(2)] = inst_34570);

(statearr_34590_34610[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34580 === (9))){
var state_34579__$1 = state_34579;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34591_34611 = state_34579__$1;
(statearr_34591_34611[(1)] = (11));

} else {
var statearr_34592_34612 = state_34579__$1;
(statearr_34592_34612[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34580 === (5))){
var inst_34556 = (state_34579[(7)]);
var state_34579__$1 = state_34579;
var statearr_34593_34613 = state_34579__$1;
(statearr_34593_34613[(2)] = inst_34556);

(statearr_34593_34613[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34580 === (10))){
var inst_34575 = (state_34579[(2)]);
var state_34579__$1 = state_34579;
var statearr_34594_34614 = state_34579__$1;
(statearr_34594_34614[(2)] = inst_34575);

(statearr_34594_34614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34580 === (8))){
var inst_34556 = (state_34579[(7)]);
var inst_34566 = cljs.core.next.call(null,inst_34556);
var inst_34556__$1 = inst_34566;
var state_34579__$1 = (function (){var statearr_34595 = state_34579;
(statearr_34595[(7)] = inst_34556__$1);

return statearr_34595;
})();
var statearr_34596_34615 = state_34579__$1;
(statearr_34596_34615[(2)] = null);

(statearr_34596_34615[(1)] = (2));


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
});})(c__34021__auto__))
;
return ((function (switch__33931__auto__,c__34021__auto__){
return (function() {
var cljs$core$async$state_machine__33932__auto__ = null;
var cljs$core$async$state_machine__33932__auto____0 = (function (){
var statearr_34597 = [null,null,null,null,null,null,null,null];
(statearr_34597[(0)] = cljs$core$async$state_machine__33932__auto__);

(statearr_34597[(1)] = (1));

return statearr_34597;
});
var cljs$core$async$state_machine__33932__auto____1 = (function (state_34579){
while(true){
var ret_value__33933__auto__ = (function (){try{while(true){
var result__33934__auto__ = switch__33931__auto__.call(null,state_34579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33934__auto__;
}
break;
}
}catch (e34598){if((e34598 instanceof Object)){
var ex__33935__auto__ = e34598;
var statearr_34599_34616 = state_34579;
(statearr_34599_34616[(5)] = ex__33935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34617 = state_34579;
state_34579 = G__34617;
continue;
} else {
return ret_value__33933__auto__;
}
break;
}
});
cljs$core$async$state_machine__33932__auto__ = function(state_34579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33932__auto____1.call(this,state_34579);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33932__auto____0;
cljs$core$async$state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33932__auto____1;
return cljs$core$async$state_machine__33932__auto__;
})()
;})(switch__33931__auto__,c__34021__auto__))
})();
var state__34023__auto__ = (function (){var statearr_34600 = f__34022__auto__.call(null);
(statearr_34600[(6)] = c__34021__auto__);

return statearr_34600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34023__auto__);
});})(c__34021__auto__))
);

return c__34021__auto__;
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
var x__30781__auto__ = (((_ == null))?null:_);
var m__30782__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,_);
} else {
var m__30782__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,_);
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
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30782__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m,ch);
} else {
var m__30782__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m,ch);
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
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m);
} else {
var m__30782__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async34618 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34618 = (function (ch,cs,meta34619){
this.ch = ch;
this.cs = cs;
this.meta34619 = meta34619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34620,meta34619__$1){
var self__ = this;
var _34620__$1 = this;
return (new cljs.core.async.t_cljs$core$async34618(self__.ch,self__.cs,meta34619__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34618.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34620){
var self__ = this;
var _34620__$1 = this;
return self__.meta34619;
});})(cs))
;

cljs.core.async.t_cljs$core$async34618.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34618.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34618.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34618.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34618.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34618.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34618.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34619","meta34619",-1381634563,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34618.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34618.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34618";

cljs.core.async.t_cljs$core$async34618.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async34618");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34618 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34618(ch__$1,cs__$1,meta34619){
return (new cljs.core.async.t_cljs$core$async34618(ch__$1,cs__$1,meta34619));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34618(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34021__auto___34840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34021__auto___34840,cs,m,dchan,dctr,done){
return (function (){
var f__34022__auto__ = (function (){var switch__33931__auto__ = ((function (c__34021__auto___34840,cs,m,dchan,dctr,done){
return (function (state_34755){
var state_val_34756 = (state_34755[(1)]);
if((state_val_34756 === (7))){
var inst_34751 = (state_34755[(2)]);
var state_34755__$1 = state_34755;
var statearr_34757_34841 = state_34755__$1;
(statearr_34757_34841[(2)] = inst_34751);

(statearr_34757_34841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (20))){
var inst_34654 = (state_34755[(7)]);
var inst_34666 = cljs.core.first.call(null,inst_34654);
var inst_34667 = cljs.core.nth.call(null,inst_34666,(0),null);
var inst_34668 = cljs.core.nth.call(null,inst_34666,(1),null);
var state_34755__$1 = (function (){var statearr_34758 = state_34755;
(statearr_34758[(8)] = inst_34667);

return statearr_34758;
})();
if(cljs.core.truth_(inst_34668)){
var statearr_34759_34842 = state_34755__$1;
(statearr_34759_34842[(1)] = (22));

} else {
var statearr_34760_34843 = state_34755__$1;
(statearr_34760_34843[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (27))){
var inst_34698 = (state_34755[(9)]);
var inst_34703 = (state_34755[(10)]);
var inst_34696 = (state_34755[(11)]);
var inst_34623 = (state_34755[(12)]);
var inst_34703__$1 = cljs.core._nth.call(null,inst_34696,inst_34698);
var inst_34704 = cljs.core.async.put_BANG_.call(null,inst_34703__$1,inst_34623,done);
var state_34755__$1 = (function (){var statearr_34761 = state_34755;
(statearr_34761[(10)] = inst_34703__$1);

return statearr_34761;
})();
if(cljs.core.truth_(inst_34704)){
var statearr_34762_34844 = state_34755__$1;
(statearr_34762_34844[(1)] = (30));

} else {
var statearr_34763_34845 = state_34755__$1;
(statearr_34763_34845[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (1))){
var state_34755__$1 = state_34755;
var statearr_34764_34846 = state_34755__$1;
(statearr_34764_34846[(2)] = null);

(statearr_34764_34846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (24))){
var inst_34654 = (state_34755[(7)]);
var inst_34673 = (state_34755[(2)]);
var inst_34674 = cljs.core.next.call(null,inst_34654);
var inst_34632 = inst_34674;
var inst_34633 = null;
var inst_34634 = (0);
var inst_34635 = (0);
var state_34755__$1 = (function (){var statearr_34765 = state_34755;
(statearr_34765[(13)] = inst_34632);

(statearr_34765[(14)] = inst_34635);

(statearr_34765[(15)] = inst_34633);

(statearr_34765[(16)] = inst_34673);

(statearr_34765[(17)] = inst_34634);

return statearr_34765;
})();
var statearr_34766_34847 = state_34755__$1;
(statearr_34766_34847[(2)] = null);

(statearr_34766_34847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (39))){
var state_34755__$1 = state_34755;
var statearr_34770_34848 = state_34755__$1;
(statearr_34770_34848[(2)] = null);

(statearr_34770_34848[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (4))){
var inst_34623 = (state_34755[(12)]);
var inst_34623__$1 = (state_34755[(2)]);
var inst_34624 = (inst_34623__$1 == null);
var state_34755__$1 = (function (){var statearr_34771 = state_34755;
(statearr_34771[(12)] = inst_34623__$1);

return statearr_34771;
})();
if(cljs.core.truth_(inst_34624)){
var statearr_34772_34849 = state_34755__$1;
(statearr_34772_34849[(1)] = (5));

} else {
var statearr_34773_34850 = state_34755__$1;
(statearr_34773_34850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (15))){
var inst_34632 = (state_34755[(13)]);
var inst_34635 = (state_34755[(14)]);
var inst_34633 = (state_34755[(15)]);
var inst_34634 = (state_34755[(17)]);
var inst_34650 = (state_34755[(2)]);
var inst_34651 = (inst_34635 + (1));
var tmp34767 = inst_34632;
var tmp34768 = inst_34633;
var tmp34769 = inst_34634;
var inst_34632__$1 = tmp34767;
var inst_34633__$1 = tmp34768;
var inst_34634__$1 = tmp34769;
var inst_34635__$1 = inst_34651;
var state_34755__$1 = (function (){var statearr_34774 = state_34755;
(statearr_34774[(13)] = inst_34632__$1);

(statearr_34774[(14)] = inst_34635__$1);

(statearr_34774[(15)] = inst_34633__$1);

(statearr_34774[(18)] = inst_34650);

(statearr_34774[(17)] = inst_34634__$1);

return statearr_34774;
})();
var statearr_34775_34851 = state_34755__$1;
(statearr_34775_34851[(2)] = null);

(statearr_34775_34851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (21))){
var inst_34677 = (state_34755[(2)]);
var state_34755__$1 = state_34755;
var statearr_34779_34852 = state_34755__$1;
(statearr_34779_34852[(2)] = inst_34677);

(statearr_34779_34852[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (31))){
var inst_34703 = (state_34755[(10)]);
var inst_34707 = done.call(null,null);
var inst_34708 = cljs.core.async.untap_STAR_.call(null,m,inst_34703);
var state_34755__$1 = (function (){var statearr_34780 = state_34755;
(statearr_34780[(19)] = inst_34707);

return statearr_34780;
})();
var statearr_34781_34853 = state_34755__$1;
(statearr_34781_34853[(2)] = inst_34708);

(statearr_34781_34853[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (32))){
var inst_34698 = (state_34755[(9)]);
var inst_34696 = (state_34755[(11)]);
var inst_34695 = (state_34755[(20)]);
var inst_34697 = (state_34755[(21)]);
var inst_34710 = (state_34755[(2)]);
var inst_34711 = (inst_34698 + (1));
var tmp34776 = inst_34696;
var tmp34777 = inst_34695;
var tmp34778 = inst_34697;
var inst_34695__$1 = tmp34777;
var inst_34696__$1 = tmp34776;
var inst_34697__$1 = tmp34778;
var inst_34698__$1 = inst_34711;
var state_34755__$1 = (function (){var statearr_34782 = state_34755;
(statearr_34782[(9)] = inst_34698__$1);

(statearr_34782[(11)] = inst_34696__$1);

(statearr_34782[(22)] = inst_34710);

(statearr_34782[(20)] = inst_34695__$1);

(statearr_34782[(21)] = inst_34697__$1);

return statearr_34782;
})();
var statearr_34783_34854 = state_34755__$1;
(statearr_34783_34854[(2)] = null);

(statearr_34783_34854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (40))){
var inst_34723 = (state_34755[(23)]);
var inst_34727 = done.call(null,null);
var inst_34728 = cljs.core.async.untap_STAR_.call(null,m,inst_34723);
var state_34755__$1 = (function (){var statearr_34784 = state_34755;
(statearr_34784[(24)] = inst_34727);

return statearr_34784;
})();
var statearr_34785_34855 = state_34755__$1;
(statearr_34785_34855[(2)] = inst_34728);

(statearr_34785_34855[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (33))){
var inst_34714 = (state_34755[(25)]);
var inst_34716 = cljs.core.chunked_seq_QMARK_.call(null,inst_34714);
var state_34755__$1 = state_34755;
if(inst_34716){
var statearr_34786_34856 = state_34755__$1;
(statearr_34786_34856[(1)] = (36));

} else {
var statearr_34787_34857 = state_34755__$1;
(statearr_34787_34857[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (13))){
var inst_34644 = (state_34755[(26)]);
var inst_34647 = cljs.core.async.close_BANG_.call(null,inst_34644);
var state_34755__$1 = state_34755;
var statearr_34788_34858 = state_34755__$1;
(statearr_34788_34858[(2)] = inst_34647);

(statearr_34788_34858[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (22))){
var inst_34667 = (state_34755[(8)]);
var inst_34670 = cljs.core.async.close_BANG_.call(null,inst_34667);
var state_34755__$1 = state_34755;
var statearr_34789_34859 = state_34755__$1;
(statearr_34789_34859[(2)] = inst_34670);

(statearr_34789_34859[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (36))){
var inst_34714 = (state_34755[(25)]);
var inst_34718 = cljs.core.chunk_first.call(null,inst_34714);
var inst_34719 = cljs.core.chunk_rest.call(null,inst_34714);
var inst_34720 = cljs.core.count.call(null,inst_34718);
var inst_34695 = inst_34719;
var inst_34696 = inst_34718;
var inst_34697 = inst_34720;
var inst_34698 = (0);
var state_34755__$1 = (function (){var statearr_34790 = state_34755;
(statearr_34790[(9)] = inst_34698);

(statearr_34790[(11)] = inst_34696);

(statearr_34790[(20)] = inst_34695);

(statearr_34790[(21)] = inst_34697);

return statearr_34790;
})();
var statearr_34791_34860 = state_34755__$1;
(statearr_34791_34860[(2)] = null);

(statearr_34791_34860[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (41))){
var inst_34714 = (state_34755[(25)]);
var inst_34730 = (state_34755[(2)]);
var inst_34731 = cljs.core.next.call(null,inst_34714);
var inst_34695 = inst_34731;
var inst_34696 = null;
var inst_34697 = (0);
var inst_34698 = (0);
var state_34755__$1 = (function (){var statearr_34792 = state_34755;
(statearr_34792[(27)] = inst_34730);

(statearr_34792[(9)] = inst_34698);

(statearr_34792[(11)] = inst_34696);

(statearr_34792[(20)] = inst_34695);

(statearr_34792[(21)] = inst_34697);

return statearr_34792;
})();
var statearr_34793_34861 = state_34755__$1;
(statearr_34793_34861[(2)] = null);

(statearr_34793_34861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (43))){
var state_34755__$1 = state_34755;
var statearr_34794_34862 = state_34755__$1;
(statearr_34794_34862[(2)] = null);

(statearr_34794_34862[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (29))){
var inst_34739 = (state_34755[(2)]);
var state_34755__$1 = state_34755;
var statearr_34795_34863 = state_34755__$1;
(statearr_34795_34863[(2)] = inst_34739);

(statearr_34795_34863[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (44))){
var inst_34748 = (state_34755[(2)]);
var state_34755__$1 = (function (){var statearr_34796 = state_34755;
(statearr_34796[(28)] = inst_34748);

return statearr_34796;
})();
var statearr_34797_34864 = state_34755__$1;
(statearr_34797_34864[(2)] = null);

(statearr_34797_34864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (6))){
var inst_34687 = (state_34755[(29)]);
var inst_34686 = cljs.core.deref.call(null,cs);
var inst_34687__$1 = cljs.core.keys.call(null,inst_34686);
var inst_34688 = cljs.core.count.call(null,inst_34687__$1);
var inst_34689 = cljs.core.reset_BANG_.call(null,dctr,inst_34688);
var inst_34694 = cljs.core.seq.call(null,inst_34687__$1);
var inst_34695 = inst_34694;
var inst_34696 = null;
var inst_34697 = (0);
var inst_34698 = (0);
var state_34755__$1 = (function (){var statearr_34798 = state_34755;
(statearr_34798[(9)] = inst_34698);

(statearr_34798[(11)] = inst_34696);

(statearr_34798[(30)] = inst_34689);

(statearr_34798[(20)] = inst_34695);

(statearr_34798[(21)] = inst_34697);

(statearr_34798[(29)] = inst_34687__$1);

return statearr_34798;
})();
var statearr_34799_34865 = state_34755__$1;
(statearr_34799_34865[(2)] = null);

(statearr_34799_34865[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (28))){
var inst_34695 = (state_34755[(20)]);
var inst_34714 = (state_34755[(25)]);
var inst_34714__$1 = cljs.core.seq.call(null,inst_34695);
var state_34755__$1 = (function (){var statearr_34800 = state_34755;
(statearr_34800[(25)] = inst_34714__$1);

return statearr_34800;
})();
if(inst_34714__$1){
var statearr_34801_34866 = state_34755__$1;
(statearr_34801_34866[(1)] = (33));

} else {
var statearr_34802_34867 = state_34755__$1;
(statearr_34802_34867[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (25))){
var inst_34698 = (state_34755[(9)]);
var inst_34697 = (state_34755[(21)]);
var inst_34700 = (inst_34698 < inst_34697);
var inst_34701 = inst_34700;
var state_34755__$1 = state_34755;
if(cljs.core.truth_(inst_34701)){
var statearr_34803_34868 = state_34755__$1;
(statearr_34803_34868[(1)] = (27));

} else {
var statearr_34804_34869 = state_34755__$1;
(statearr_34804_34869[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (34))){
var state_34755__$1 = state_34755;
var statearr_34805_34870 = state_34755__$1;
(statearr_34805_34870[(2)] = null);

(statearr_34805_34870[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (17))){
var state_34755__$1 = state_34755;
var statearr_34806_34871 = state_34755__$1;
(statearr_34806_34871[(2)] = null);

(statearr_34806_34871[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (3))){
var inst_34753 = (state_34755[(2)]);
var state_34755__$1 = state_34755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34755__$1,inst_34753);
} else {
if((state_val_34756 === (12))){
var inst_34682 = (state_34755[(2)]);
var state_34755__$1 = state_34755;
var statearr_34807_34872 = state_34755__$1;
(statearr_34807_34872[(2)] = inst_34682);

(statearr_34807_34872[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (2))){
var state_34755__$1 = state_34755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34755__$1,(4),ch);
} else {
if((state_val_34756 === (23))){
var state_34755__$1 = state_34755;
var statearr_34808_34873 = state_34755__$1;
(statearr_34808_34873[(2)] = null);

(statearr_34808_34873[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (35))){
var inst_34737 = (state_34755[(2)]);
var state_34755__$1 = state_34755;
var statearr_34809_34874 = state_34755__$1;
(statearr_34809_34874[(2)] = inst_34737);

(statearr_34809_34874[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (19))){
var inst_34654 = (state_34755[(7)]);
var inst_34658 = cljs.core.chunk_first.call(null,inst_34654);
var inst_34659 = cljs.core.chunk_rest.call(null,inst_34654);
var inst_34660 = cljs.core.count.call(null,inst_34658);
var inst_34632 = inst_34659;
var inst_34633 = inst_34658;
var inst_34634 = inst_34660;
var inst_34635 = (0);
var state_34755__$1 = (function (){var statearr_34810 = state_34755;
(statearr_34810[(13)] = inst_34632);

(statearr_34810[(14)] = inst_34635);

(statearr_34810[(15)] = inst_34633);

(statearr_34810[(17)] = inst_34634);

return statearr_34810;
})();
var statearr_34811_34875 = state_34755__$1;
(statearr_34811_34875[(2)] = null);

(statearr_34811_34875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (11))){
var inst_34632 = (state_34755[(13)]);
var inst_34654 = (state_34755[(7)]);
var inst_34654__$1 = cljs.core.seq.call(null,inst_34632);
var state_34755__$1 = (function (){var statearr_34812 = state_34755;
(statearr_34812[(7)] = inst_34654__$1);

return statearr_34812;
})();
if(inst_34654__$1){
var statearr_34813_34876 = state_34755__$1;
(statearr_34813_34876[(1)] = (16));

} else {
var statearr_34814_34877 = state_34755__$1;
(statearr_34814_34877[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (9))){
var inst_34684 = (state_34755[(2)]);
var state_34755__$1 = state_34755;
var statearr_34815_34878 = state_34755__$1;
(statearr_34815_34878[(2)] = inst_34684);

(statearr_34815_34878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (5))){
var inst_34630 = cljs.core.deref.call(null,cs);
var inst_34631 = cljs.core.seq.call(null,inst_34630);
var inst_34632 = inst_34631;
var inst_34633 = null;
var inst_34634 = (0);
var inst_34635 = (0);
var state_34755__$1 = (function (){var statearr_34816 = state_34755;
(statearr_34816[(13)] = inst_34632);

(statearr_34816[(14)] = inst_34635);

(statearr_34816[(15)] = inst_34633);

(statearr_34816[(17)] = inst_34634);

return statearr_34816;
})();
var statearr_34817_34879 = state_34755__$1;
(statearr_34817_34879[(2)] = null);

(statearr_34817_34879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (14))){
var state_34755__$1 = state_34755;
var statearr_34818_34880 = state_34755__$1;
(statearr_34818_34880[(2)] = null);

(statearr_34818_34880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (45))){
var inst_34745 = (state_34755[(2)]);
var state_34755__$1 = state_34755;
var statearr_34819_34881 = state_34755__$1;
(statearr_34819_34881[(2)] = inst_34745);

(statearr_34819_34881[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (26))){
var inst_34687 = (state_34755[(29)]);
var inst_34741 = (state_34755[(2)]);
var inst_34742 = cljs.core.seq.call(null,inst_34687);
var state_34755__$1 = (function (){var statearr_34820 = state_34755;
(statearr_34820[(31)] = inst_34741);

return statearr_34820;
})();
if(inst_34742){
var statearr_34821_34882 = state_34755__$1;
(statearr_34821_34882[(1)] = (42));

} else {
var statearr_34822_34883 = state_34755__$1;
(statearr_34822_34883[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (16))){
var inst_34654 = (state_34755[(7)]);
var inst_34656 = cljs.core.chunked_seq_QMARK_.call(null,inst_34654);
var state_34755__$1 = state_34755;
if(inst_34656){
var statearr_34823_34884 = state_34755__$1;
(statearr_34823_34884[(1)] = (19));

} else {
var statearr_34824_34885 = state_34755__$1;
(statearr_34824_34885[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (38))){
var inst_34734 = (state_34755[(2)]);
var state_34755__$1 = state_34755;
var statearr_34825_34886 = state_34755__$1;
(statearr_34825_34886[(2)] = inst_34734);

(statearr_34825_34886[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (30))){
var state_34755__$1 = state_34755;
var statearr_34826_34887 = state_34755__$1;
(statearr_34826_34887[(2)] = null);

(statearr_34826_34887[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (10))){
var inst_34635 = (state_34755[(14)]);
var inst_34633 = (state_34755[(15)]);
var inst_34643 = cljs.core._nth.call(null,inst_34633,inst_34635);
var inst_34644 = cljs.core.nth.call(null,inst_34643,(0),null);
var inst_34645 = cljs.core.nth.call(null,inst_34643,(1),null);
var state_34755__$1 = (function (){var statearr_34827 = state_34755;
(statearr_34827[(26)] = inst_34644);

return statearr_34827;
})();
if(cljs.core.truth_(inst_34645)){
var statearr_34828_34888 = state_34755__$1;
(statearr_34828_34888[(1)] = (13));

} else {
var statearr_34829_34889 = state_34755__$1;
(statearr_34829_34889[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (18))){
var inst_34680 = (state_34755[(2)]);
var state_34755__$1 = state_34755;
var statearr_34830_34890 = state_34755__$1;
(statearr_34830_34890[(2)] = inst_34680);

(statearr_34830_34890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (42))){
var state_34755__$1 = state_34755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34755__$1,(45),dchan);
} else {
if((state_val_34756 === (37))){
var inst_34714 = (state_34755[(25)]);
var inst_34723 = (state_34755[(23)]);
var inst_34623 = (state_34755[(12)]);
var inst_34723__$1 = cljs.core.first.call(null,inst_34714);
var inst_34724 = cljs.core.async.put_BANG_.call(null,inst_34723__$1,inst_34623,done);
var state_34755__$1 = (function (){var statearr_34831 = state_34755;
(statearr_34831[(23)] = inst_34723__$1);

return statearr_34831;
})();
if(cljs.core.truth_(inst_34724)){
var statearr_34832_34891 = state_34755__$1;
(statearr_34832_34891[(1)] = (39));

} else {
var statearr_34833_34892 = state_34755__$1;
(statearr_34833_34892[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34756 === (8))){
var inst_34635 = (state_34755[(14)]);
var inst_34634 = (state_34755[(17)]);
var inst_34637 = (inst_34635 < inst_34634);
var inst_34638 = inst_34637;
var state_34755__$1 = state_34755;
if(cljs.core.truth_(inst_34638)){
var statearr_34834_34893 = state_34755__$1;
(statearr_34834_34893[(1)] = (10));

} else {
var statearr_34835_34894 = state_34755__$1;
(statearr_34835_34894[(1)] = (11));

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
});})(c__34021__auto___34840,cs,m,dchan,dctr,done))
;
return ((function (switch__33931__auto__,c__34021__auto___34840,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33932__auto__ = null;
var cljs$core$async$mult_$_state_machine__33932__auto____0 = (function (){
var statearr_34836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34836[(0)] = cljs$core$async$mult_$_state_machine__33932__auto__);

(statearr_34836[(1)] = (1));

return statearr_34836;
});
var cljs$core$async$mult_$_state_machine__33932__auto____1 = (function (state_34755){
while(true){
var ret_value__33933__auto__ = (function (){try{while(true){
var result__33934__auto__ = switch__33931__auto__.call(null,state_34755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33934__auto__;
}
break;
}
}catch (e34837){if((e34837 instanceof Object)){
var ex__33935__auto__ = e34837;
var statearr_34838_34895 = state_34755;
(statearr_34838_34895[(5)] = ex__33935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34896 = state_34755;
state_34755 = G__34896;
continue;
} else {
return ret_value__33933__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33932__auto__ = function(state_34755){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33932__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33932__auto____1.call(this,state_34755);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33932__auto____0;
cljs$core$async$mult_$_state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33932__auto____1;
return cljs$core$async$mult_$_state_machine__33932__auto__;
})()
;})(switch__33931__auto__,c__34021__auto___34840,cs,m,dchan,dctr,done))
})();
var state__34023__auto__ = (function (){var statearr_34839 = f__34022__auto__.call(null);
(statearr_34839[(6)] = c__34021__auto___34840);

return statearr_34839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34023__auto__);
});})(c__34021__auto___34840,cs,m,dchan,dctr,done))
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
var G__34898 = arguments.length;
switch (G__34898) {
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
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m,ch);
} else {
var m__30782__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m,ch);
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
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m,ch);
} else {
var m__30782__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m,ch);
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
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m);
} else {
var m__30782__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m);
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
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m,state_map);
} else {
var m__30782__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m,state_map);
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
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m,mode);
} else {
var m__30782__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31332__auto__ = [];
var len__31325__auto___34910 = arguments.length;
var i__31326__auto___34911 = (0);
while(true){
if((i__31326__auto___34911 < len__31325__auto___34910)){
args__31332__auto__.push((arguments[i__31326__auto___34911]));

var G__34912 = (i__31326__auto___34911 + (1));
i__31326__auto___34911 = G__34912;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((3) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31333__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34904){
var map__34905 = p__34904;
var map__34905__$1 = ((((!((map__34905 == null)))?((((map__34905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34905):map__34905);
var opts = map__34905__$1;
var statearr_34907_34913 = state;
(statearr_34907_34913[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__34905,map__34905__$1,opts){
return (function (val){
var statearr_34908_34914 = state;
(statearr_34908_34914[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34905,map__34905__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_34909_34915 = state;
(statearr_34909_34915[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34900){
var G__34901 = cljs.core.first.call(null,seq34900);
var seq34900__$1 = cljs.core.next.call(null,seq34900);
var G__34902 = cljs.core.first.call(null,seq34900__$1);
var seq34900__$2 = cljs.core.next.call(null,seq34900__$1);
var G__34903 = cljs.core.first.call(null,seq34900__$2);
var seq34900__$3 = cljs.core.next.call(null,seq34900__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34901,G__34902,G__34903,seq34900__$3);
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
if(typeof cljs.core.async.t_cljs$core$async34916 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34916 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34917){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34917 = meta34917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34918,meta34917__$1){
var self__ = this;
var _34918__$1 = this;
return (new cljs.core.async.t_cljs$core$async34916(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34917__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34916.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34918){
var self__ = this;
var _34918__$1 = this;
return self__.meta34917;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34916.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34916.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34916.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34916.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34916.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34916.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34916.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34916.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async34916.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34917","meta34917",-905565614,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34916.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34916.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34916";

cljs.core.async.t_cljs$core$async34916.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async34916");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34916 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34916(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34917){
return (new cljs.core.async.t_cljs$core$async34916(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34917));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34916(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34021__auto___35080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34021__auto___35080,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34022__auto__ = (function (){var switch__33931__auto__ = ((function (c__34021__auto___35080,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35020){
var state_val_35021 = (state_35020[(1)]);
if((state_val_35021 === (7))){
var inst_34935 = (state_35020[(2)]);
var state_35020__$1 = state_35020;
var statearr_35022_35081 = state_35020__$1;
(statearr_35022_35081[(2)] = inst_34935);

(statearr_35022_35081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (20))){
var inst_34947 = (state_35020[(7)]);
var state_35020__$1 = state_35020;
var statearr_35023_35082 = state_35020__$1;
(statearr_35023_35082[(2)] = inst_34947);

(statearr_35023_35082[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (27))){
var state_35020__$1 = state_35020;
var statearr_35024_35083 = state_35020__$1;
(statearr_35024_35083[(2)] = null);

(statearr_35024_35083[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (1))){
var inst_34922 = (state_35020[(8)]);
var inst_34922__$1 = calc_state.call(null);
var inst_34924 = (inst_34922__$1 == null);
var inst_34925 = cljs.core.not.call(null,inst_34924);
var state_35020__$1 = (function (){var statearr_35025 = state_35020;
(statearr_35025[(8)] = inst_34922__$1);

return statearr_35025;
})();
if(inst_34925){
var statearr_35026_35084 = state_35020__$1;
(statearr_35026_35084[(1)] = (2));

} else {
var statearr_35027_35085 = state_35020__$1;
(statearr_35027_35085[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (24))){
var inst_34971 = (state_35020[(9)]);
var inst_34980 = (state_35020[(10)]);
var inst_34994 = (state_35020[(11)]);
var inst_34994__$1 = inst_34971.call(null,inst_34980);
var state_35020__$1 = (function (){var statearr_35028 = state_35020;
(statearr_35028[(11)] = inst_34994__$1);

return statearr_35028;
})();
if(cljs.core.truth_(inst_34994__$1)){
var statearr_35029_35086 = state_35020__$1;
(statearr_35029_35086[(1)] = (29));

} else {
var statearr_35030_35087 = state_35020__$1;
(statearr_35030_35087[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (4))){
var inst_34938 = (state_35020[(2)]);
var state_35020__$1 = state_35020;
if(cljs.core.truth_(inst_34938)){
var statearr_35031_35088 = state_35020__$1;
(statearr_35031_35088[(1)] = (8));

} else {
var statearr_35032_35089 = state_35020__$1;
(statearr_35032_35089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (15))){
var inst_34965 = (state_35020[(2)]);
var state_35020__$1 = state_35020;
if(cljs.core.truth_(inst_34965)){
var statearr_35033_35090 = state_35020__$1;
(statearr_35033_35090[(1)] = (19));

} else {
var statearr_35034_35091 = state_35020__$1;
(statearr_35034_35091[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (21))){
var inst_34970 = (state_35020[(12)]);
var inst_34970__$1 = (state_35020[(2)]);
var inst_34971 = cljs.core.get.call(null,inst_34970__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34972 = cljs.core.get.call(null,inst_34970__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34973 = cljs.core.get.call(null,inst_34970__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35020__$1 = (function (){var statearr_35035 = state_35020;
(statearr_35035[(13)] = inst_34972);

(statearr_35035[(9)] = inst_34971);

(statearr_35035[(12)] = inst_34970__$1);

return statearr_35035;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35020__$1,(22),inst_34973);
} else {
if((state_val_35021 === (31))){
var inst_35002 = (state_35020[(2)]);
var state_35020__$1 = state_35020;
if(cljs.core.truth_(inst_35002)){
var statearr_35036_35092 = state_35020__$1;
(statearr_35036_35092[(1)] = (32));

} else {
var statearr_35037_35093 = state_35020__$1;
(statearr_35037_35093[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (32))){
var inst_34979 = (state_35020[(14)]);
var state_35020__$1 = state_35020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35020__$1,(35),out,inst_34979);
} else {
if((state_val_35021 === (33))){
var inst_34970 = (state_35020[(12)]);
var inst_34947 = inst_34970;
var state_35020__$1 = (function (){var statearr_35038 = state_35020;
(statearr_35038[(7)] = inst_34947);

return statearr_35038;
})();
var statearr_35039_35094 = state_35020__$1;
(statearr_35039_35094[(2)] = null);

(statearr_35039_35094[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (13))){
var inst_34947 = (state_35020[(7)]);
var inst_34954 = inst_34947.cljs$lang$protocol_mask$partition0$;
var inst_34955 = (inst_34954 & (64));
var inst_34956 = inst_34947.cljs$core$ISeq$;
var inst_34957 = (cljs.core.PROTOCOL_SENTINEL === inst_34956);
var inst_34958 = (inst_34955) || (inst_34957);
var state_35020__$1 = state_35020;
if(cljs.core.truth_(inst_34958)){
var statearr_35040_35095 = state_35020__$1;
(statearr_35040_35095[(1)] = (16));

} else {
var statearr_35041_35096 = state_35020__$1;
(statearr_35041_35096[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (22))){
var inst_34980 = (state_35020[(10)]);
var inst_34979 = (state_35020[(14)]);
var inst_34978 = (state_35020[(2)]);
var inst_34979__$1 = cljs.core.nth.call(null,inst_34978,(0),null);
var inst_34980__$1 = cljs.core.nth.call(null,inst_34978,(1),null);
var inst_34981 = (inst_34979__$1 == null);
var inst_34982 = cljs.core._EQ_.call(null,inst_34980__$1,change);
var inst_34983 = (inst_34981) || (inst_34982);
var state_35020__$1 = (function (){var statearr_35042 = state_35020;
(statearr_35042[(10)] = inst_34980__$1);

(statearr_35042[(14)] = inst_34979__$1);

return statearr_35042;
})();
if(cljs.core.truth_(inst_34983)){
var statearr_35043_35097 = state_35020__$1;
(statearr_35043_35097[(1)] = (23));

} else {
var statearr_35044_35098 = state_35020__$1;
(statearr_35044_35098[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (36))){
var inst_34970 = (state_35020[(12)]);
var inst_34947 = inst_34970;
var state_35020__$1 = (function (){var statearr_35045 = state_35020;
(statearr_35045[(7)] = inst_34947);

return statearr_35045;
})();
var statearr_35046_35099 = state_35020__$1;
(statearr_35046_35099[(2)] = null);

(statearr_35046_35099[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (29))){
var inst_34994 = (state_35020[(11)]);
var state_35020__$1 = state_35020;
var statearr_35047_35100 = state_35020__$1;
(statearr_35047_35100[(2)] = inst_34994);

(statearr_35047_35100[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (6))){
var state_35020__$1 = state_35020;
var statearr_35048_35101 = state_35020__$1;
(statearr_35048_35101[(2)] = false);

(statearr_35048_35101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (28))){
var inst_34990 = (state_35020[(2)]);
var inst_34991 = calc_state.call(null);
var inst_34947 = inst_34991;
var state_35020__$1 = (function (){var statearr_35049 = state_35020;
(statearr_35049[(7)] = inst_34947);

(statearr_35049[(15)] = inst_34990);

return statearr_35049;
})();
var statearr_35050_35102 = state_35020__$1;
(statearr_35050_35102[(2)] = null);

(statearr_35050_35102[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (25))){
var inst_35016 = (state_35020[(2)]);
var state_35020__$1 = state_35020;
var statearr_35051_35103 = state_35020__$1;
(statearr_35051_35103[(2)] = inst_35016);

(statearr_35051_35103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (34))){
var inst_35014 = (state_35020[(2)]);
var state_35020__$1 = state_35020;
var statearr_35052_35104 = state_35020__$1;
(statearr_35052_35104[(2)] = inst_35014);

(statearr_35052_35104[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (17))){
var state_35020__$1 = state_35020;
var statearr_35053_35105 = state_35020__$1;
(statearr_35053_35105[(2)] = false);

(statearr_35053_35105[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (3))){
var state_35020__$1 = state_35020;
var statearr_35054_35106 = state_35020__$1;
(statearr_35054_35106[(2)] = false);

(statearr_35054_35106[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (12))){
var inst_35018 = (state_35020[(2)]);
var state_35020__$1 = state_35020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35020__$1,inst_35018);
} else {
if((state_val_35021 === (2))){
var inst_34922 = (state_35020[(8)]);
var inst_34927 = inst_34922.cljs$lang$protocol_mask$partition0$;
var inst_34928 = (inst_34927 & (64));
var inst_34929 = inst_34922.cljs$core$ISeq$;
var inst_34930 = (cljs.core.PROTOCOL_SENTINEL === inst_34929);
var inst_34931 = (inst_34928) || (inst_34930);
var state_35020__$1 = state_35020;
if(cljs.core.truth_(inst_34931)){
var statearr_35055_35107 = state_35020__$1;
(statearr_35055_35107[(1)] = (5));

} else {
var statearr_35056_35108 = state_35020__$1;
(statearr_35056_35108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (23))){
var inst_34979 = (state_35020[(14)]);
var inst_34985 = (inst_34979 == null);
var state_35020__$1 = state_35020;
if(cljs.core.truth_(inst_34985)){
var statearr_35057_35109 = state_35020__$1;
(statearr_35057_35109[(1)] = (26));

} else {
var statearr_35058_35110 = state_35020__$1;
(statearr_35058_35110[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (35))){
var inst_35005 = (state_35020[(2)]);
var state_35020__$1 = state_35020;
if(cljs.core.truth_(inst_35005)){
var statearr_35059_35111 = state_35020__$1;
(statearr_35059_35111[(1)] = (36));

} else {
var statearr_35060_35112 = state_35020__$1;
(statearr_35060_35112[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (19))){
var inst_34947 = (state_35020[(7)]);
var inst_34967 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34947);
var state_35020__$1 = state_35020;
var statearr_35061_35113 = state_35020__$1;
(statearr_35061_35113[(2)] = inst_34967);

(statearr_35061_35113[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (11))){
var inst_34947 = (state_35020[(7)]);
var inst_34951 = (inst_34947 == null);
var inst_34952 = cljs.core.not.call(null,inst_34951);
var state_35020__$1 = state_35020;
if(inst_34952){
var statearr_35062_35114 = state_35020__$1;
(statearr_35062_35114[(1)] = (13));

} else {
var statearr_35063_35115 = state_35020__$1;
(statearr_35063_35115[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (9))){
var inst_34922 = (state_35020[(8)]);
var state_35020__$1 = state_35020;
var statearr_35064_35116 = state_35020__$1;
(statearr_35064_35116[(2)] = inst_34922);

(statearr_35064_35116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (5))){
var state_35020__$1 = state_35020;
var statearr_35065_35117 = state_35020__$1;
(statearr_35065_35117[(2)] = true);

(statearr_35065_35117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (14))){
var state_35020__$1 = state_35020;
var statearr_35066_35118 = state_35020__$1;
(statearr_35066_35118[(2)] = false);

(statearr_35066_35118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (26))){
var inst_34980 = (state_35020[(10)]);
var inst_34987 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34980);
var state_35020__$1 = state_35020;
var statearr_35067_35119 = state_35020__$1;
(statearr_35067_35119[(2)] = inst_34987);

(statearr_35067_35119[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (16))){
var state_35020__$1 = state_35020;
var statearr_35068_35120 = state_35020__$1;
(statearr_35068_35120[(2)] = true);

(statearr_35068_35120[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (38))){
var inst_35010 = (state_35020[(2)]);
var state_35020__$1 = state_35020;
var statearr_35069_35121 = state_35020__$1;
(statearr_35069_35121[(2)] = inst_35010);

(statearr_35069_35121[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (30))){
var inst_34972 = (state_35020[(13)]);
var inst_34971 = (state_35020[(9)]);
var inst_34980 = (state_35020[(10)]);
var inst_34997 = cljs.core.empty_QMARK_.call(null,inst_34971);
var inst_34998 = inst_34972.call(null,inst_34980);
var inst_34999 = cljs.core.not.call(null,inst_34998);
var inst_35000 = (inst_34997) && (inst_34999);
var state_35020__$1 = state_35020;
var statearr_35070_35122 = state_35020__$1;
(statearr_35070_35122[(2)] = inst_35000);

(statearr_35070_35122[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (10))){
var inst_34922 = (state_35020[(8)]);
var inst_34943 = (state_35020[(2)]);
var inst_34944 = cljs.core.get.call(null,inst_34943,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34945 = cljs.core.get.call(null,inst_34943,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34946 = cljs.core.get.call(null,inst_34943,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34947 = inst_34922;
var state_35020__$1 = (function (){var statearr_35071 = state_35020;
(statearr_35071[(16)] = inst_34946);

(statearr_35071[(7)] = inst_34947);

(statearr_35071[(17)] = inst_34944);

(statearr_35071[(18)] = inst_34945);

return statearr_35071;
})();
var statearr_35072_35123 = state_35020__$1;
(statearr_35072_35123[(2)] = null);

(statearr_35072_35123[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (18))){
var inst_34962 = (state_35020[(2)]);
var state_35020__$1 = state_35020;
var statearr_35073_35124 = state_35020__$1;
(statearr_35073_35124[(2)] = inst_34962);

(statearr_35073_35124[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (37))){
var state_35020__$1 = state_35020;
var statearr_35074_35125 = state_35020__$1;
(statearr_35074_35125[(2)] = null);

(statearr_35074_35125[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (8))){
var inst_34922 = (state_35020[(8)]);
var inst_34940 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34922);
var state_35020__$1 = state_35020;
var statearr_35075_35126 = state_35020__$1;
(statearr_35075_35126[(2)] = inst_34940);

(statearr_35075_35126[(1)] = (10));


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
});})(c__34021__auto___35080,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33931__auto__,c__34021__auto___35080,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33932__auto__ = null;
var cljs$core$async$mix_$_state_machine__33932__auto____0 = (function (){
var statearr_35076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35076[(0)] = cljs$core$async$mix_$_state_machine__33932__auto__);

(statearr_35076[(1)] = (1));

return statearr_35076;
});
var cljs$core$async$mix_$_state_machine__33932__auto____1 = (function (state_35020){
while(true){
var ret_value__33933__auto__ = (function (){try{while(true){
var result__33934__auto__ = switch__33931__auto__.call(null,state_35020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33934__auto__;
}
break;
}
}catch (e35077){if((e35077 instanceof Object)){
var ex__33935__auto__ = e35077;
var statearr_35078_35127 = state_35020;
(statearr_35078_35127[(5)] = ex__33935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35128 = state_35020;
state_35020 = G__35128;
continue;
} else {
return ret_value__33933__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33932__auto__ = function(state_35020){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33932__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33932__auto____1.call(this,state_35020);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33932__auto____0;
cljs$core$async$mix_$_state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33932__auto____1;
return cljs$core$async$mix_$_state_machine__33932__auto__;
})()
;})(switch__33931__auto__,c__34021__auto___35080,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34023__auto__ = (function (){var statearr_35079 = f__34022__auto__.call(null);
(statearr_35079[(6)] = c__34021__auto___35080);

return statearr_35079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34023__auto__);
});})(c__34021__auto___35080,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__30781__auto__ = (((p == null))?null:p);
var m__30782__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30782__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__30781__auto__ = (((p == null))?null:p);
var m__30782__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,p,v,ch);
} else {
var m__30782__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35130 = arguments.length;
switch (G__35130) {
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
var x__30781__auto__ = (((p == null))?null:p);
var m__30782__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,p);
} else {
var m__30782__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,p);
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
var x__30781__auto__ = (((p == null))?null:p);
var m__30782__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,p,v);
} else {
var m__30782__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,p,v);
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
var G__35134 = arguments.length;
switch (G__35134) {
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
var or__30048__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30048__auto__,mults){
return (function (p1__35132_SHARP_){
if(cljs.core.truth_(p1__35132_SHARP_.call(null,topic))){
return p1__35132_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35132_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30048__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35135 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35135 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35136){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35136 = meta35136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35137,meta35136__$1){
var self__ = this;
var _35137__$1 = this;
return (new cljs.core.async.t_cljs$core$async35135(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35136__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35135.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35137){
var self__ = this;
var _35137__$1 = this;
return self__.meta35136;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35135.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35135.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35135.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35135.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35135.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async35135.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35135.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35135.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35136","meta35136",-1521955076,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35135.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35135";

cljs.core.async.t_cljs$core$async35135.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async35135");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35135 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35135(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35136){
return (new cljs.core.async.t_cljs$core$async35135(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35136));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35135(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34021__auto___35255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34021__auto___35255,mults,ensure_mult,p){
return (function (){
var f__34022__auto__ = (function (){var switch__33931__auto__ = ((function (c__34021__auto___35255,mults,ensure_mult,p){
return (function (state_35209){
var state_val_35210 = (state_35209[(1)]);
if((state_val_35210 === (7))){
var inst_35205 = (state_35209[(2)]);
var state_35209__$1 = state_35209;
var statearr_35211_35256 = state_35209__$1;
(statearr_35211_35256[(2)] = inst_35205);

(statearr_35211_35256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (20))){
var state_35209__$1 = state_35209;
var statearr_35212_35257 = state_35209__$1;
(statearr_35212_35257[(2)] = null);

(statearr_35212_35257[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (1))){
var state_35209__$1 = state_35209;
var statearr_35213_35258 = state_35209__$1;
(statearr_35213_35258[(2)] = null);

(statearr_35213_35258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (24))){
var inst_35188 = (state_35209[(7)]);
var inst_35197 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35188);
var state_35209__$1 = state_35209;
var statearr_35214_35259 = state_35209__$1;
(statearr_35214_35259[(2)] = inst_35197);

(statearr_35214_35259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (4))){
var inst_35140 = (state_35209[(8)]);
var inst_35140__$1 = (state_35209[(2)]);
var inst_35141 = (inst_35140__$1 == null);
var state_35209__$1 = (function (){var statearr_35215 = state_35209;
(statearr_35215[(8)] = inst_35140__$1);

return statearr_35215;
})();
if(cljs.core.truth_(inst_35141)){
var statearr_35216_35260 = state_35209__$1;
(statearr_35216_35260[(1)] = (5));

} else {
var statearr_35217_35261 = state_35209__$1;
(statearr_35217_35261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (15))){
var inst_35182 = (state_35209[(2)]);
var state_35209__$1 = state_35209;
var statearr_35218_35262 = state_35209__$1;
(statearr_35218_35262[(2)] = inst_35182);

(statearr_35218_35262[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (21))){
var inst_35202 = (state_35209[(2)]);
var state_35209__$1 = (function (){var statearr_35219 = state_35209;
(statearr_35219[(9)] = inst_35202);

return statearr_35219;
})();
var statearr_35220_35263 = state_35209__$1;
(statearr_35220_35263[(2)] = null);

(statearr_35220_35263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (13))){
var inst_35164 = (state_35209[(10)]);
var inst_35166 = cljs.core.chunked_seq_QMARK_.call(null,inst_35164);
var state_35209__$1 = state_35209;
if(inst_35166){
var statearr_35221_35264 = state_35209__$1;
(statearr_35221_35264[(1)] = (16));

} else {
var statearr_35222_35265 = state_35209__$1;
(statearr_35222_35265[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (22))){
var inst_35194 = (state_35209[(2)]);
var state_35209__$1 = state_35209;
if(cljs.core.truth_(inst_35194)){
var statearr_35223_35266 = state_35209__$1;
(statearr_35223_35266[(1)] = (23));

} else {
var statearr_35224_35267 = state_35209__$1;
(statearr_35224_35267[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (6))){
var inst_35188 = (state_35209[(7)]);
var inst_35190 = (state_35209[(11)]);
var inst_35140 = (state_35209[(8)]);
var inst_35188__$1 = topic_fn.call(null,inst_35140);
var inst_35189 = cljs.core.deref.call(null,mults);
var inst_35190__$1 = cljs.core.get.call(null,inst_35189,inst_35188__$1);
var state_35209__$1 = (function (){var statearr_35225 = state_35209;
(statearr_35225[(7)] = inst_35188__$1);

(statearr_35225[(11)] = inst_35190__$1);

return statearr_35225;
})();
if(cljs.core.truth_(inst_35190__$1)){
var statearr_35226_35268 = state_35209__$1;
(statearr_35226_35268[(1)] = (19));

} else {
var statearr_35227_35269 = state_35209__$1;
(statearr_35227_35269[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (25))){
var inst_35199 = (state_35209[(2)]);
var state_35209__$1 = state_35209;
var statearr_35228_35270 = state_35209__$1;
(statearr_35228_35270[(2)] = inst_35199);

(statearr_35228_35270[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (17))){
var inst_35164 = (state_35209[(10)]);
var inst_35173 = cljs.core.first.call(null,inst_35164);
var inst_35174 = cljs.core.async.muxch_STAR_.call(null,inst_35173);
var inst_35175 = cljs.core.async.close_BANG_.call(null,inst_35174);
var inst_35176 = cljs.core.next.call(null,inst_35164);
var inst_35150 = inst_35176;
var inst_35151 = null;
var inst_35152 = (0);
var inst_35153 = (0);
var state_35209__$1 = (function (){var statearr_35229 = state_35209;
(statearr_35229[(12)] = inst_35151);

(statearr_35229[(13)] = inst_35153);

(statearr_35229[(14)] = inst_35175);

(statearr_35229[(15)] = inst_35152);

(statearr_35229[(16)] = inst_35150);

return statearr_35229;
})();
var statearr_35230_35271 = state_35209__$1;
(statearr_35230_35271[(2)] = null);

(statearr_35230_35271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (3))){
var inst_35207 = (state_35209[(2)]);
var state_35209__$1 = state_35209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35209__$1,inst_35207);
} else {
if((state_val_35210 === (12))){
var inst_35184 = (state_35209[(2)]);
var state_35209__$1 = state_35209;
var statearr_35231_35272 = state_35209__$1;
(statearr_35231_35272[(2)] = inst_35184);

(statearr_35231_35272[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (2))){
var state_35209__$1 = state_35209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35209__$1,(4),ch);
} else {
if((state_val_35210 === (23))){
var state_35209__$1 = state_35209;
var statearr_35232_35273 = state_35209__$1;
(statearr_35232_35273[(2)] = null);

(statearr_35232_35273[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (19))){
var inst_35190 = (state_35209[(11)]);
var inst_35140 = (state_35209[(8)]);
var inst_35192 = cljs.core.async.muxch_STAR_.call(null,inst_35190);
var state_35209__$1 = state_35209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35209__$1,(22),inst_35192,inst_35140);
} else {
if((state_val_35210 === (11))){
var inst_35164 = (state_35209[(10)]);
var inst_35150 = (state_35209[(16)]);
var inst_35164__$1 = cljs.core.seq.call(null,inst_35150);
var state_35209__$1 = (function (){var statearr_35233 = state_35209;
(statearr_35233[(10)] = inst_35164__$1);

return statearr_35233;
})();
if(inst_35164__$1){
var statearr_35234_35274 = state_35209__$1;
(statearr_35234_35274[(1)] = (13));

} else {
var statearr_35235_35275 = state_35209__$1;
(statearr_35235_35275[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (9))){
var inst_35186 = (state_35209[(2)]);
var state_35209__$1 = state_35209;
var statearr_35236_35276 = state_35209__$1;
(statearr_35236_35276[(2)] = inst_35186);

(statearr_35236_35276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (5))){
var inst_35147 = cljs.core.deref.call(null,mults);
var inst_35148 = cljs.core.vals.call(null,inst_35147);
var inst_35149 = cljs.core.seq.call(null,inst_35148);
var inst_35150 = inst_35149;
var inst_35151 = null;
var inst_35152 = (0);
var inst_35153 = (0);
var state_35209__$1 = (function (){var statearr_35237 = state_35209;
(statearr_35237[(12)] = inst_35151);

(statearr_35237[(13)] = inst_35153);

(statearr_35237[(15)] = inst_35152);

(statearr_35237[(16)] = inst_35150);

return statearr_35237;
})();
var statearr_35238_35277 = state_35209__$1;
(statearr_35238_35277[(2)] = null);

(statearr_35238_35277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (14))){
var state_35209__$1 = state_35209;
var statearr_35242_35278 = state_35209__$1;
(statearr_35242_35278[(2)] = null);

(statearr_35242_35278[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (16))){
var inst_35164 = (state_35209[(10)]);
var inst_35168 = cljs.core.chunk_first.call(null,inst_35164);
var inst_35169 = cljs.core.chunk_rest.call(null,inst_35164);
var inst_35170 = cljs.core.count.call(null,inst_35168);
var inst_35150 = inst_35169;
var inst_35151 = inst_35168;
var inst_35152 = inst_35170;
var inst_35153 = (0);
var state_35209__$1 = (function (){var statearr_35243 = state_35209;
(statearr_35243[(12)] = inst_35151);

(statearr_35243[(13)] = inst_35153);

(statearr_35243[(15)] = inst_35152);

(statearr_35243[(16)] = inst_35150);

return statearr_35243;
})();
var statearr_35244_35279 = state_35209__$1;
(statearr_35244_35279[(2)] = null);

(statearr_35244_35279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (10))){
var inst_35151 = (state_35209[(12)]);
var inst_35153 = (state_35209[(13)]);
var inst_35152 = (state_35209[(15)]);
var inst_35150 = (state_35209[(16)]);
var inst_35158 = cljs.core._nth.call(null,inst_35151,inst_35153);
var inst_35159 = cljs.core.async.muxch_STAR_.call(null,inst_35158);
var inst_35160 = cljs.core.async.close_BANG_.call(null,inst_35159);
var inst_35161 = (inst_35153 + (1));
var tmp35239 = inst_35151;
var tmp35240 = inst_35152;
var tmp35241 = inst_35150;
var inst_35150__$1 = tmp35241;
var inst_35151__$1 = tmp35239;
var inst_35152__$1 = tmp35240;
var inst_35153__$1 = inst_35161;
var state_35209__$1 = (function (){var statearr_35245 = state_35209;
(statearr_35245[(12)] = inst_35151__$1);

(statearr_35245[(13)] = inst_35153__$1);

(statearr_35245[(17)] = inst_35160);

(statearr_35245[(15)] = inst_35152__$1);

(statearr_35245[(16)] = inst_35150__$1);

return statearr_35245;
})();
var statearr_35246_35280 = state_35209__$1;
(statearr_35246_35280[(2)] = null);

(statearr_35246_35280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (18))){
var inst_35179 = (state_35209[(2)]);
var state_35209__$1 = state_35209;
var statearr_35247_35281 = state_35209__$1;
(statearr_35247_35281[(2)] = inst_35179);

(statearr_35247_35281[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35210 === (8))){
var inst_35153 = (state_35209[(13)]);
var inst_35152 = (state_35209[(15)]);
var inst_35155 = (inst_35153 < inst_35152);
var inst_35156 = inst_35155;
var state_35209__$1 = state_35209;
if(cljs.core.truth_(inst_35156)){
var statearr_35248_35282 = state_35209__$1;
(statearr_35248_35282[(1)] = (10));

} else {
var statearr_35249_35283 = state_35209__$1;
(statearr_35249_35283[(1)] = (11));

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
});})(c__34021__auto___35255,mults,ensure_mult,p))
;
return ((function (switch__33931__auto__,c__34021__auto___35255,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33932__auto__ = null;
var cljs$core$async$state_machine__33932__auto____0 = (function (){
var statearr_35250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35250[(0)] = cljs$core$async$state_machine__33932__auto__);

(statearr_35250[(1)] = (1));

return statearr_35250;
});
var cljs$core$async$state_machine__33932__auto____1 = (function (state_35209){
while(true){
var ret_value__33933__auto__ = (function (){try{while(true){
var result__33934__auto__ = switch__33931__auto__.call(null,state_35209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33934__auto__;
}
break;
}
}catch (e35251){if((e35251 instanceof Object)){
var ex__33935__auto__ = e35251;
var statearr_35252_35284 = state_35209;
(statearr_35252_35284[(5)] = ex__33935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35285 = state_35209;
state_35209 = G__35285;
continue;
} else {
return ret_value__33933__auto__;
}
break;
}
});
cljs$core$async$state_machine__33932__auto__ = function(state_35209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33932__auto____1.call(this,state_35209);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33932__auto____0;
cljs$core$async$state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33932__auto____1;
return cljs$core$async$state_machine__33932__auto__;
})()
;})(switch__33931__auto__,c__34021__auto___35255,mults,ensure_mult,p))
})();
var state__34023__auto__ = (function (){var statearr_35253 = f__34022__auto__.call(null);
(statearr_35253[(6)] = c__34021__auto___35255);

return statearr_35253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34023__auto__);
});})(c__34021__auto___35255,mults,ensure_mult,p))
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
var G__35287 = arguments.length;
switch (G__35287) {
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
var G__35290 = arguments.length;
switch (G__35290) {
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
var G__35293 = arguments.length;
switch (G__35293) {
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
var c__34021__auto___35360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34021__auto___35360,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34022__auto__ = (function (){var switch__33931__auto__ = ((function (c__34021__auto___35360,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35332){
var state_val_35333 = (state_35332[(1)]);
if((state_val_35333 === (7))){
var state_35332__$1 = state_35332;
var statearr_35334_35361 = state_35332__$1;
(statearr_35334_35361[(2)] = null);

(statearr_35334_35361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35333 === (1))){
var state_35332__$1 = state_35332;
var statearr_35335_35362 = state_35332__$1;
(statearr_35335_35362[(2)] = null);

(statearr_35335_35362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35333 === (4))){
var inst_35296 = (state_35332[(7)]);
var inst_35298 = (inst_35296 < cnt);
var state_35332__$1 = state_35332;
if(cljs.core.truth_(inst_35298)){
var statearr_35336_35363 = state_35332__$1;
(statearr_35336_35363[(1)] = (6));

} else {
var statearr_35337_35364 = state_35332__$1;
(statearr_35337_35364[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35333 === (15))){
var inst_35328 = (state_35332[(2)]);
var state_35332__$1 = state_35332;
var statearr_35338_35365 = state_35332__$1;
(statearr_35338_35365[(2)] = inst_35328);

(statearr_35338_35365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35333 === (13))){
var inst_35321 = cljs.core.async.close_BANG_.call(null,out);
var state_35332__$1 = state_35332;
var statearr_35339_35366 = state_35332__$1;
(statearr_35339_35366[(2)] = inst_35321);

(statearr_35339_35366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35333 === (6))){
var state_35332__$1 = state_35332;
var statearr_35340_35367 = state_35332__$1;
(statearr_35340_35367[(2)] = null);

(statearr_35340_35367[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35333 === (3))){
var inst_35330 = (state_35332[(2)]);
var state_35332__$1 = state_35332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35332__$1,inst_35330);
} else {
if((state_val_35333 === (12))){
var inst_35318 = (state_35332[(8)]);
var inst_35318__$1 = (state_35332[(2)]);
var inst_35319 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35318__$1);
var state_35332__$1 = (function (){var statearr_35341 = state_35332;
(statearr_35341[(8)] = inst_35318__$1);

return statearr_35341;
})();
if(cljs.core.truth_(inst_35319)){
var statearr_35342_35368 = state_35332__$1;
(statearr_35342_35368[(1)] = (13));

} else {
var statearr_35343_35369 = state_35332__$1;
(statearr_35343_35369[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35333 === (2))){
var inst_35295 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35296 = (0);
var state_35332__$1 = (function (){var statearr_35344 = state_35332;
(statearr_35344[(7)] = inst_35296);

(statearr_35344[(9)] = inst_35295);

return statearr_35344;
})();
var statearr_35345_35370 = state_35332__$1;
(statearr_35345_35370[(2)] = null);

(statearr_35345_35370[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35333 === (11))){
var inst_35296 = (state_35332[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35332,(10),Object,null,(9));
var inst_35305 = chs__$1.call(null,inst_35296);
var inst_35306 = done.call(null,inst_35296);
var inst_35307 = cljs.core.async.take_BANG_.call(null,inst_35305,inst_35306);
var state_35332__$1 = state_35332;
var statearr_35346_35371 = state_35332__$1;
(statearr_35346_35371[(2)] = inst_35307);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35332__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35333 === (9))){
var inst_35296 = (state_35332[(7)]);
var inst_35309 = (state_35332[(2)]);
var inst_35310 = (inst_35296 + (1));
var inst_35296__$1 = inst_35310;
var state_35332__$1 = (function (){var statearr_35347 = state_35332;
(statearr_35347[(7)] = inst_35296__$1);

(statearr_35347[(10)] = inst_35309);

return statearr_35347;
})();
var statearr_35348_35372 = state_35332__$1;
(statearr_35348_35372[(2)] = null);

(statearr_35348_35372[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35333 === (5))){
var inst_35316 = (state_35332[(2)]);
var state_35332__$1 = (function (){var statearr_35349 = state_35332;
(statearr_35349[(11)] = inst_35316);

return statearr_35349;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35332__$1,(12),dchan);
} else {
if((state_val_35333 === (14))){
var inst_35318 = (state_35332[(8)]);
var inst_35323 = cljs.core.apply.call(null,f,inst_35318);
var state_35332__$1 = state_35332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35332__$1,(16),out,inst_35323);
} else {
if((state_val_35333 === (16))){
var inst_35325 = (state_35332[(2)]);
var state_35332__$1 = (function (){var statearr_35350 = state_35332;
(statearr_35350[(12)] = inst_35325);

return statearr_35350;
})();
var statearr_35351_35373 = state_35332__$1;
(statearr_35351_35373[(2)] = null);

(statearr_35351_35373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35333 === (10))){
var inst_35300 = (state_35332[(2)]);
var inst_35301 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35332__$1 = (function (){var statearr_35352 = state_35332;
(statearr_35352[(13)] = inst_35300);

return statearr_35352;
})();
var statearr_35353_35374 = state_35332__$1;
(statearr_35353_35374[(2)] = inst_35301);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35332__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35333 === (8))){
var inst_35314 = (state_35332[(2)]);
var state_35332__$1 = state_35332;
var statearr_35354_35375 = state_35332__$1;
(statearr_35354_35375[(2)] = inst_35314);

(statearr_35354_35375[(1)] = (5));


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
});})(c__34021__auto___35360,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33931__auto__,c__34021__auto___35360,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33932__auto__ = null;
var cljs$core$async$state_machine__33932__auto____0 = (function (){
var statearr_35355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35355[(0)] = cljs$core$async$state_machine__33932__auto__);

(statearr_35355[(1)] = (1));

return statearr_35355;
});
var cljs$core$async$state_machine__33932__auto____1 = (function (state_35332){
while(true){
var ret_value__33933__auto__ = (function (){try{while(true){
var result__33934__auto__ = switch__33931__auto__.call(null,state_35332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33934__auto__;
}
break;
}
}catch (e35356){if((e35356 instanceof Object)){
var ex__33935__auto__ = e35356;
var statearr_35357_35376 = state_35332;
(statearr_35357_35376[(5)] = ex__33935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35377 = state_35332;
state_35332 = G__35377;
continue;
} else {
return ret_value__33933__auto__;
}
break;
}
});
cljs$core$async$state_machine__33932__auto__ = function(state_35332){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33932__auto____1.call(this,state_35332);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33932__auto____0;
cljs$core$async$state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33932__auto____1;
return cljs$core$async$state_machine__33932__auto__;
})()
;})(switch__33931__auto__,c__34021__auto___35360,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34023__auto__ = (function (){var statearr_35358 = f__34022__auto__.call(null);
(statearr_35358[(6)] = c__34021__auto___35360);

return statearr_35358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34023__auto__);
});})(c__34021__auto___35360,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__35380 = arguments.length;
switch (G__35380) {
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
var c__34021__auto___35434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34021__auto___35434,out){
return (function (){
var f__34022__auto__ = (function (){var switch__33931__auto__ = ((function (c__34021__auto___35434,out){
return (function (state_35412){
var state_val_35413 = (state_35412[(1)]);
if((state_val_35413 === (7))){
var inst_35391 = (state_35412[(7)]);
var inst_35392 = (state_35412[(8)]);
var inst_35391__$1 = (state_35412[(2)]);
var inst_35392__$1 = cljs.core.nth.call(null,inst_35391__$1,(0),null);
var inst_35393 = cljs.core.nth.call(null,inst_35391__$1,(1),null);
var inst_35394 = (inst_35392__$1 == null);
var state_35412__$1 = (function (){var statearr_35414 = state_35412;
(statearr_35414[(7)] = inst_35391__$1);

(statearr_35414[(9)] = inst_35393);

(statearr_35414[(8)] = inst_35392__$1);

return statearr_35414;
})();
if(cljs.core.truth_(inst_35394)){
var statearr_35415_35435 = state_35412__$1;
(statearr_35415_35435[(1)] = (8));

} else {
var statearr_35416_35436 = state_35412__$1;
(statearr_35416_35436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (1))){
var inst_35381 = cljs.core.vec.call(null,chs);
var inst_35382 = inst_35381;
var state_35412__$1 = (function (){var statearr_35417 = state_35412;
(statearr_35417[(10)] = inst_35382);

return statearr_35417;
})();
var statearr_35418_35437 = state_35412__$1;
(statearr_35418_35437[(2)] = null);

(statearr_35418_35437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (4))){
var inst_35382 = (state_35412[(10)]);
var state_35412__$1 = state_35412;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35412__$1,(7),inst_35382);
} else {
if((state_val_35413 === (6))){
var inst_35408 = (state_35412[(2)]);
var state_35412__$1 = state_35412;
var statearr_35419_35438 = state_35412__$1;
(statearr_35419_35438[(2)] = inst_35408);

(statearr_35419_35438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (3))){
var inst_35410 = (state_35412[(2)]);
var state_35412__$1 = state_35412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35412__$1,inst_35410);
} else {
if((state_val_35413 === (2))){
var inst_35382 = (state_35412[(10)]);
var inst_35384 = cljs.core.count.call(null,inst_35382);
var inst_35385 = (inst_35384 > (0));
var state_35412__$1 = state_35412;
if(cljs.core.truth_(inst_35385)){
var statearr_35421_35439 = state_35412__$1;
(statearr_35421_35439[(1)] = (4));

} else {
var statearr_35422_35440 = state_35412__$1;
(statearr_35422_35440[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (11))){
var inst_35382 = (state_35412[(10)]);
var inst_35401 = (state_35412[(2)]);
var tmp35420 = inst_35382;
var inst_35382__$1 = tmp35420;
var state_35412__$1 = (function (){var statearr_35423 = state_35412;
(statearr_35423[(11)] = inst_35401);

(statearr_35423[(10)] = inst_35382__$1);

return statearr_35423;
})();
var statearr_35424_35441 = state_35412__$1;
(statearr_35424_35441[(2)] = null);

(statearr_35424_35441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (9))){
var inst_35392 = (state_35412[(8)]);
var state_35412__$1 = state_35412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35412__$1,(11),out,inst_35392);
} else {
if((state_val_35413 === (5))){
var inst_35406 = cljs.core.async.close_BANG_.call(null,out);
var state_35412__$1 = state_35412;
var statearr_35425_35442 = state_35412__$1;
(statearr_35425_35442[(2)] = inst_35406);

(statearr_35425_35442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (10))){
var inst_35404 = (state_35412[(2)]);
var state_35412__$1 = state_35412;
var statearr_35426_35443 = state_35412__$1;
(statearr_35426_35443[(2)] = inst_35404);

(statearr_35426_35443[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (8))){
var inst_35391 = (state_35412[(7)]);
var inst_35382 = (state_35412[(10)]);
var inst_35393 = (state_35412[(9)]);
var inst_35392 = (state_35412[(8)]);
var inst_35396 = (function (){var cs = inst_35382;
var vec__35387 = inst_35391;
var v = inst_35392;
var c = inst_35393;
return ((function (cs,vec__35387,v,c,inst_35391,inst_35382,inst_35393,inst_35392,state_val_35413,c__34021__auto___35434,out){
return (function (p1__35378_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35378_SHARP_);
});
;})(cs,vec__35387,v,c,inst_35391,inst_35382,inst_35393,inst_35392,state_val_35413,c__34021__auto___35434,out))
})();
var inst_35397 = cljs.core.filterv.call(null,inst_35396,inst_35382);
var inst_35382__$1 = inst_35397;
var state_35412__$1 = (function (){var statearr_35427 = state_35412;
(statearr_35427[(10)] = inst_35382__$1);

return statearr_35427;
})();
var statearr_35428_35444 = state_35412__$1;
(statearr_35428_35444[(2)] = null);

(statearr_35428_35444[(1)] = (2));


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
});})(c__34021__auto___35434,out))
;
return ((function (switch__33931__auto__,c__34021__auto___35434,out){
return (function() {
var cljs$core$async$state_machine__33932__auto__ = null;
var cljs$core$async$state_machine__33932__auto____0 = (function (){
var statearr_35429 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35429[(0)] = cljs$core$async$state_machine__33932__auto__);

(statearr_35429[(1)] = (1));

return statearr_35429;
});
var cljs$core$async$state_machine__33932__auto____1 = (function (state_35412){
while(true){
var ret_value__33933__auto__ = (function (){try{while(true){
var result__33934__auto__ = switch__33931__auto__.call(null,state_35412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33934__auto__;
}
break;
}
}catch (e35430){if((e35430 instanceof Object)){
var ex__33935__auto__ = e35430;
var statearr_35431_35445 = state_35412;
(statearr_35431_35445[(5)] = ex__33935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35446 = state_35412;
state_35412 = G__35446;
continue;
} else {
return ret_value__33933__auto__;
}
break;
}
});
cljs$core$async$state_machine__33932__auto__ = function(state_35412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33932__auto____1.call(this,state_35412);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33932__auto____0;
cljs$core$async$state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33932__auto____1;
return cljs$core$async$state_machine__33932__auto__;
})()
;})(switch__33931__auto__,c__34021__auto___35434,out))
})();
var state__34023__auto__ = (function (){var statearr_35432 = f__34022__auto__.call(null);
(statearr_35432[(6)] = c__34021__auto___35434);

return statearr_35432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34023__auto__);
});})(c__34021__auto___35434,out))
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
var G__35448 = arguments.length;
switch (G__35448) {
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
var c__34021__auto___35493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34021__auto___35493,out){
return (function (){
var f__34022__auto__ = (function (){var switch__33931__auto__ = ((function (c__34021__auto___35493,out){
return (function (state_35472){
var state_val_35473 = (state_35472[(1)]);
if((state_val_35473 === (7))){
var inst_35454 = (state_35472[(7)]);
var inst_35454__$1 = (state_35472[(2)]);
var inst_35455 = (inst_35454__$1 == null);
var inst_35456 = cljs.core.not.call(null,inst_35455);
var state_35472__$1 = (function (){var statearr_35474 = state_35472;
(statearr_35474[(7)] = inst_35454__$1);

return statearr_35474;
})();
if(inst_35456){
var statearr_35475_35494 = state_35472__$1;
(statearr_35475_35494[(1)] = (8));

} else {
var statearr_35476_35495 = state_35472__$1;
(statearr_35476_35495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (1))){
var inst_35449 = (0);
var state_35472__$1 = (function (){var statearr_35477 = state_35472;
(statearr_35477[(8)] = inst_35449);

return statearr_35477;
})();
var statearr_35478_35496 = state_35472__$1;
(statearr_35478_35496[(2)] = null);

(statearr_35478_35496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (4))){
var state_35472__$1 = state_35472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35472__$1,(7),ch);
} else {
if((state_val_35473 === (6))){
var inst_35467 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
var statearr_35479_35497 = state_35472__$1;
(statearr_35479_35497[(2)] = inst_35467);

(statearr_35479_35497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (3))){
var inst_35469 = (state_35472[(2)]);
var inst_35470 = cljs.core.async.close_BANG_.call(null,out);
var state_35472__$1 = (function (){var statearr_35480 = state_35472;
(statearr_35480[(9)] = inst_35469);

return statearr_35480;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35472__$1,inst_35470);
} else {
if((state_val_35473 === (2))){
var inst_35449 = (state_35472[(8)]);
var inst_35451 = (inst_35449 < n);
var state_35472__$1 = state_35472;
if(cljs.core.truth_(inst_35451)){
var statearr_35481_35498 = state_35472__$1;
(statearr_35481_35498[(1)] = (4));

} else {
var statearr_35482_35499 = state_35472__$1;
(statearr_35482_35499[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (11))){
var inst_35449 = (state_35472[(8)]);
var inst_35459 = (state_35472[(2)]);
var inst_35460 = (inst_35449 + (1));
var inst_35449__$1 = inst_35460;
var state_35472__$1 = (function (){var statearr_35483 = state_35472;
(statearr_35483[(10)] = inst_35459);

(statearr_35483[(8)] = inst_35449__$1);

return statearr_35483;
})();
var statearr_35484_35500 = state_35472__$1;
(statearr_35484_35500[(2)] = null);

(statearr_35484_35500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (9))){
var state_35472__$1 = state_35472;
var statearr_35485_35501 = state_35472__$1;
(statearr_35485_35501[(2)] = null);

(statearr_35485_35501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (5))){
var state_35472__$1 = state_35472;
var statearr_35486_35502 = state_35472__$1;
(statearr_35486_35502[(2)] = null);

(statearr_35486_35502[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (10))){
var inst_35464 = (state_35472[(2)]);
var state_35472__$1 = state_35472;
var statearr_35487_35503 = state_35472__$1;
(statearr_35487_35503[(2)] = inst_35464);

(statearr_35487_35503[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35473 === (8))){
var inst_35454 = (state_35472[(7)]);
var state_35472__$1 = state_35472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35472__$1,(11),out,inst_35454);
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
});})(c__34021__auto___35493,out))
;
return ((function (switch__33931__auto__,c__34021__auto___35493,out){
return (function() {
var cljs$core$async$state_machine__33932__auto__ = null;
var cljs$core$async$state_machine__33932__auto____0 = (function (){
var statearr_35488 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35488[(0)] = cljs$core$async$state_machine__33932__auto__);

(statearr_35488[(1)] = (1));

return statearr_35488;
});
var cljs$core$async$state_machine__33932__auto____1 = (function (state_35472){
while(true){
var ret_value__33933__auto__ = (function (){try{while(true){
var result__33934__auto__ = switch__33931__auto__.call(null,state_35472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33934__auto__;
}
break;
}
}catch (e35489){if((e35489 instanceof Object)){
var ex__33935__auto__ = e35489;
var statearr_35490_35504 = state_35472;
(statearr_35490_35504[(5)] = ex__33935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35505 = state_35472;
state_35472 = G__35505;
continue;
} else {
return ret_value__33933__auto__;
}
break;
}
});
cljs$core$async$state_machine__33932__auto__ = function(state_35472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33932__auto____1.call(this,state_35472);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33932__auto____0;
cljs$core$async$state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33932__auto____1;
return cljs$core$async$state_machine__33932__auto__;
})()
;})(switch__33931__auto__,c__34021__auto___35493,out))
})();
var state__34023__auto__ = (function (){var statearr_35491 = f__34022__auto__.call(null);
(statearr_35491[(6)] = c__34021__auto___35493);

return statearr_35491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34023__auto__);
});})(c__34021__auto___35493,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35507 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35507 = (function (f,ch,meta35508){
this.f = f;
this.ch = ch;
this.meta35508 = meta35508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35509,meta35508__$1){
var self__ = this;
var _35509__$1 = this;
return (new cljs.core.async.t_cljs$core$async35507(self__.f,self__.ch,meta35508__$1));
});

cljs.core.async.t_cljs$core$async35507.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35509){
var self__ = this;
var _35509__$1 = this;
return self__.meta35508;
});

cljs.core.async.t_cljs$core$async35507.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35507.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35507.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35507.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35507.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35510 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35510 = (function (f,ch,meta35508,_,fn1,meta35511){
this.f = f;
this.ch = ch;
this.meta35508 = meta35508;
this._ = _;
this.fn1 = fn1;
this.meta35511 = meta35511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35512,meta35511__$1){
var self__ = this;
var _35512__$1 = this;
return (new cljs.core.async.t_cljs$core$async35510(self__.f,self__.ch,self__.meta35508,self__._,self__.fn1,meta35511__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35510.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35512){
var self__ = this;
var _35512__$1 = this;
return self__.meta35511;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35510.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35510.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35510.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35510.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35506_SHARP_){
return f1.call(null,(((p1__35506_SHARP_ == null))?null:self__.f.call(null,p1__35506_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35510.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35508","meta35508",1638450177,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35507","cljs.core.async/t_cljs$core$async35507",1118521616,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35511","meta35511",-1320943516,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35510.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35510.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35510";

cljs.core.async.t_cljs$core$async35510.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async35510");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35510 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35510(f__$1,ch__$1,meta35508__$1,___$2,fn1__$1,meta35511){
return (new cljs.core.async.t_cljs$core$async35510(f__$1,ch__$1,meta35508__$1,___$2,fn1__$1,meta35511));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35510(self__.f,self__.ch,self__.meta35508,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30036__auto__ = ret;
if(cljs.core.truth_(and__30036__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35507.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35507.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35507.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35508","meta35508",1638450177,null)], null);
});

cljs.core.async.t_cljs$core$async35507.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35507.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35507";

cljs.core.async.t_cljs$core$async35507.cljs$lang$ctorPrWriter = (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async35507");
});

cljs.core.async.__GT_t_cljs$core$async35507 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35507(f__$1,ch__$1,meta35508){
return (new cljs.core.async.t_cljs$core$async35507(f__$1,ch__$1,meta35508));
});

}

return (new cljs.core.async.t_cljs$core$async35507(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35513 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35513 = (function (f,ch,meta35514){
this.f = f;
this.ch = ch;
this.meta35514 = meta35514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35515,meta35514__$1){
var self__ = this;
var _35515__$1 = this;
return (new cljs.core.async.t_cljs$core$async35513(self__.f,self__.ch,meta35514__$1));
});

cljs.core.async.t_cljs$core$async35513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35515){
var self__ = this;
var _35515__$1 = this;
return self__.meta35514;
});

cljs.core.async.t_cljs$core$async35513.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35513.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35513.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35513.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35513.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35513.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35513.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35514","meta35514",327184272,null)], null);
});

cljs.core.async.t_cljs$core$async35513.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35513.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35513";

cljs.core.async.t_cljs$core$async35513.cljs$lang$ctorPrWriter = (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async35513");
});

cljs.core.async.__GT_t_cljs$core$async35513 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35513(f__$1,ch__$1,meta35514){
return (new cljs.core.async.t_cljs$core$async35513(f__$1,ch__$1,meta35514));
});

}

return (new cljs.core.async.t_cljs$core$async35513(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35516 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35516 = (function (p,ch,meta35517){
this.p = p;
this.ch = ch;
this.meta35517 = meta35517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35518,meta35517__$1){
var self__ = this;
var _35518__$1 = this;
return (new cljs.core.async.t_cljs$core$async35516(self__.p,self__.ch,meta35517__$1));
});

cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35518){
var self__ = this;
var _35518__$1 = this;
return self__.meta35517;
});

cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35516.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35517","meta35517",-1695711147,null)], null);
});

cljs.core.async.t_cljs$core$async35516.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35516";

cljs.core.async.t_cljs$core$async35516.cljs$lang$ctorPrWriter = (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async35516");
});

cljs.core.async.__GT_t_cljs$core$async35516 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35516(p__$1,ch__$1,meta35517){
return (new cljs.core.async.t_cljs$core$async35516(p__$1,ch__$1,meta35517));
});

}

return (new cljs.core.async.t_cljs$core$async35516(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35520 = arguments.length;
switch (G__35520) {
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
var c__34021__auto___35560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34021__auto___35560,out){
return (function (){
var f__34022__auto__ = (function (){var switch__33931__auto__ = ((function (c__34021__auto___35560,out){
return (function (state_35541){
var state_val_35542 = (state_35541[(1)]);
if((state_val_35542 === (7))){
var inst_35537 = (state_35541[(2)]);
var state_35541__$1 = state_35541;
var statearr_35543_35561 = state_35541__$1;
(statearr_35543_35561[(2)] = inst_35537);

(statearr_35543_35561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (1))){
var state_35541__$1 = state_35541;
var statearr_35544_35562 = state_35541__$1;
(statearr_35544_35562[(2)] = null);

(statearr_35544_35562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (4))){
var inst_35523 = (state_35541[(7)]);
var inst_35523__$1 = (state_35541[(2)]);
var inst_35524 = (inst_35523__$1 == null);
var state_35541__$1 = (function (){var statearr_35545 = state_35541;
(statearr_35545[(7)] = inst_35523__$1);

return statearr_35545;
})();
if(cljs.core.truth_(inst_35524)){
var statearr_35546_35563 = state_35541__$1;
(statearr_35546_35563[(1)] = (5));

} else {
var statearr_35547_35564 = state_35541__$1;
(statearr_35547_35564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (6))){
var inst_35523 = (state_35541[(7)]);
var inst_35528 = p.call(null,inst_35523);
var state_35541__$1 = state_35541;
if(cljs.core.truth_(inst_35528)){
var statearr_35548_35565 = state_35541__$1;
(statearr_35548_35565[(1)] = (8));

} else {
var statearr_35549_35566 = state_35541__$1;
(statearr_35549_35566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (3))){
var inst_35539 = (state_35541[(2)]);
var state_35541__$1 = state_35541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35541__$1,inst_35539);
} else {
if((state_val_35542 === (2))){
var state_35541__$1 = state_35541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35541__$1,(4),ch);
} else {
if((state_val_35542 === (11))){
var inst_35531 = (state_35541[(2)]);
var state_35541__$1 = state_35541;
var statearr_35550_35567 = state_35541__$1;
(statearr_35550_35567[(2)] = inst_35531);

(statearr_35550_35567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (9))){
var state_35541__$1 = state_35541;
var statearr_35551_35568 = state_35541__$1;
(statearr_35551_35568[(2)] = null);

(statearr_35551_35568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (5))){
var inst_35526 = cljs.core.async.close_BANG_.call(null,out);
var state_35541__$1 = state_35541;
var statearr_35552_35569 = state_35541__$1;
(statearr_35552_35569[(2)] = inst_35526);

(statearr_35552_35569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (10))){
var inst_35534 = (state_35541[(2)]);
var state_35541__$1 = (function (){var statearr_35553 = state_35541;
(statearr_35553[(8)] = inst_35534);

return statearr_35553;
})();
var statearr_35554_35570 = state_35541__$1;
(statearr_35554_35570[(2)] = null);

(statearr_35554_35570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35542 === (8))){
var inst_35523 = (state_35541[(7)]);
var state_35541__$1 = state_35541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35541__$1,(11),out,inst_35523);
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
});})(c__34021__auto___35560,out))
;
return ((function (switch__33931__auto__,c__34021__auto___35560,out){
return (function() {
var cljs$core$async$state_machine__33932__auto__ = null;
var cljs$core$async$state_machine__33932__auto____0 = (function (){
var statearr_35555 = [null,null,null,null,null,null,null,null,null];
(statearr_35555[(0)] = cljs$core$async$state_machine__33932__auto__);

(statearr_35555[(1)] = (1));

return statearr_35555;
});
var cljs$core$async$state_machine__33932__auto____1 = (function (state_35541){
while(true){
var ret_value__33933__auto__ = (function (){try{while(true){
var result__33934__auto__ = switch__33931__auto__.call(null,state_35541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33934__auto__;
}
break;
}
}catch (e35556){if((e35556 instanceof Object)){
var ex__33935__auto__ = e35556;
var statearr_35557_35571 = state_35541;
(statearr_35557_35571[(5)] = ex__33935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35572 = state_35541;
state_35541 = G__35572;
continue;
} else {
return ret_value__33933__auto__;
}
break;
}
});
cljs$core$async$state_machine__33932__auto__ = function(state_35541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33932__auto____1.call(this,state_35541);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33932__auto____0;
cljs$core$async$state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33932__auto____1;
return cljs$core$async$state_machine__33932__auto__;
})()
;})(switch__33931__auto__,c__34021__auto___35560,out))
})();
var state__34023__auto__ = (function (){var statearr_35558 = f__34022__auto__.call(null);
(statearr_35558[(6)] = c__34021__auto___35560);

return statearr_35558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34023__auto__);
});})(c__34021__auto___35560,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35574 = arguments.length;
switch (G__35574) {
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
var c__34021__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34021__auto__){
return (function (){
var f__34022__auto__ = (function (){var switch__33931__auto__ = ((function (c__34021__auto__){
return (function (state_35637){
var state_val_35638 = (state_35637[(1)]);
if((state_val_35638 === (7))){
var inst_35633 = (state_35637[(2)]);
var state_35637__$1 = state_35637;
var statearr_35639_35677 = state_35637__$1;
(statearr_35639_35677[(2)] = inst_35633);

(statearr_35639_35677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (20))){
var inst_35603 = (state_35637[(7)]);
var inst_35614 = (state_35637[(2)]);
var inst_35615 = cljs.core.next.call(null,inst_35603);
var inst_35589 = inst_35615;
var inst_35590 = null;
var inst_35591 = (0);
var inst_35592 = (0);
var state_35637__$1 = (function (){var statearr_35640 = state_35637;
(statearr_35640[(8)] = inst_35592);

(statearr_35640[(9)] = inst_35590);

(statearr_35640[(10)] = inst_35589);

(statearr_35640[(11)] = inst_35614);

(statearr_35640[(12)] = inst_35591);

return statearr_35640;
})();
var statearr_35641_35678 = state_35637__$1;
(statearr_35641_35678[(2)] = null);

(statearr_35641_35678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (1))){
var state_35637__$1 = state_35637;
var statearr_35642_35679 = state_35637__$1;
(statearr_35642_35679[(2)] = null);

(statearr_35642_35679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (4))){
var inst_35578 = (state_35637[(13)]);
var inst_35578__$1 = (state_35637[(2)]);
var inst_35579 = (inst_35578__$1 == null);
var state_35637__$1 = (function (){var statearr_35643 = state_35637;
(statearr_35643[(13)] = inst_35578__$1);

return statearr_35643;
})();
if(cljs.core.truth_(inst_35579)){
var statearr_35644_35680 = state_35637__$1;
(statearr_35644_35680[(1)] = (5));

} else {
var statearr_35645_35681 = state_35637__$1;
(statearr_35645_35681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (15))){
var state_35637__$1 = state_35637;
var statearr_35649_35682 = state_35637__$1;
(statearr_35649_35682[(2)] = null);

(statearr_35649_35682[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (21))){
var state_35637__$1 = state_35637;
var statearr_35650_35683 = state_35637__$1;
(statearr_35650_35683[(2)] = null);

(statearr_35650_35683[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (13))){
var inst_35592 = (state_35637[(8)]);
var inst_35590 = (state_35637[(9)]);
var inst_35589 = (state_35637[(10)]);
var inst_35591 = (state_35637[(12)]);
var inst_35599 = (state_35637[(2)]);
var inst_35600 = (inst_35592 + (1));
var tmp35646 = inst_35590;
var tmp35647 = inst_35589;
var tmp35648 = inst_35591;
var inst_35589__$1 = tmp35647;
var inst_35590__$1 = tmp35646;
var inst_35591__$1 = tmp35648;
var inst_35592__$1 = inst_35600;
var state_35637__$1 = (function (){var statearr_35651 = state_35637;
(statearr_35651[(8)] = inst_35592__$1);

(statearr_35651[(9)] = inst_35590__$1);

(statearr_35651[(10)] = inst_35589__$1);

(statearr_35651[(12)] = inst_35591__$1);

(statearr_35651[(14)] = inst_35599);

return statearr_35651;
})();
var statearr_35652_35684 = state_35637__$1;
(statearr_35652_35684[(2)] = null);

(statearr_35652_35684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (22))){
var state_35637__$1 = state_35637;
var statearr_35653_35685 = state_35637__$1;
(statearr_35653_35685[(2)] = null);

(statearr_35653_35685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (6))){
var inst_35578 = (state_35637[(13)]);
var inst_35587 = f.call(null,inst_35578);
var inst_35588 = cljs.core.seq.call(null,inst_35587);
var inst_35589 = inst_35588;
var inst_35590 = null;
var inst_35591 = (0);
var inst_35592 = (0);
var state_35637__$1 = (function (){var statearr_35654 = state_35637;
(statearr_35654[(8)] = inst_35592);

(statearr_35654[(9)] = inst_35590);

(statearr_35654[(10)] = inst_35589);

(statearr_35654[(12)] = inst_35591);

return statearr_35654;
})();
var statearr_35655_35686 = state_35637__$1;
(statearr_35655_35686[(2)] = null);

(statearr_35655_35686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (17))){
var inst_35603 = (state_35637[(7)]);
var inst_35607 = cljs.core.chunk_first.call(null,inst_35603);
var inst_35608 = cljs.core.chunk_rest.call(null,inst_35603);
var inst_35609 = cljs.core.count.call(null,inst_35607);
var inst_35589 = inst_35608;
var inst_35590 = inst_35607;
var inst_35591 = inst_35609;
var inst_35592 = (0);
var state_35637__$1 = (function (){var statearr_35656 = state_35637;
(statearr_35656[(8)] = inst_35592);

(statearr_35656[(9)] = inst_35590);

(statearr_35656[(10)] = inst_35589);

(statearr_35656[(12)] = inst_35591);

return statearr_35656;
})();
var statearr_35657_35687 = state_35637__$1;
(statearr_35657_35687[(2)] = null);

(statearr_35657_35687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (3))){
var inst_35635 = (state_35637[(2)]);
var state_35637__$1 = state_35637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35637__$1,inst_35635);
} else {
if((state_val_35638 === (12))){
var inst_35623 = (state_35637[(2)]);
var state_35637__$1 = state_35637;
var statearr_35658_35688 = state_35637__$1;
(statearr_35658_35688[(2)] = inst_35623);

(statearr_35658_35688[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (2))){
var state_35637__$1 = state_35637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35637__$1,(4),in$);
} else {
if((state_val_35638 === (23))){
var inst_35631 = (state_35637[(2)]);
var state_35637__$1 = state_35637;
var statearr_35659_35689 = state_35637__$1;
(statearr_35659_35689[(2)] = inst_35631);

(statearr_35659_35689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (19))){
var inst_35618 = (state_35637[(2)]);
var state_35637__$1 = state_35637;
var statearr_35660_35690 = state_35637__$1;
(statearr_35660_35690[(2)] = inst_35618);

(statearr_35660_35690[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (11))){
var inst_35589 = (state_35637[(10)]);
var inst_35603 = (state_35637[(7)]);
var inst_35603__$1 = cljs.core.seq.call(null,inst_35589);
var state_35637__$1 = (function (){var statearr_35661 = state_35637;
(statearr_35661[(7)] = inst_35603__$1);

return statearr_35661;
})();
if(inst_35603__$1){
var statearr_35662_35691 = state_35637__$1;
(statearr_35662_35691[(1)] = (14));

} else {
var statearr_35663_35692 = state_35637__$1;
(statearr_35663_35692[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (9))){
var inst_35625 = (state_35637[(2)]);
var inst_35626 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35637__$1 = (function (){var statearr_35664 = state_35637;
(statearr_35664[(15)] = inst_35625);

return statearr_35664;
})();
if(cljs.core.truth_(inst_35626)){
var statearr_35665_35693 = state_35637__$1;
(statearr_35665_35693[(1)] = (21));

} else {
var statearr_35666_35694 = state_35637__$1;
(statearr_35666_35694[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (5))){
var inst_35581 = cljs.core.async.close_BANG_.call(null,out);
var state_35637__$1 = state_35637;
var statearr_35667_35695 = state_35637__$1;
(statearr_35667_35695[(2)] = inst_35581);

(statearr_35667_35695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (14))){
var inst_35603 = (state_35637[(7)]);
var inst_35605 = cljs.core.chunked_seq_QMARK_.call(null,inst_35603);
var state_35637__$1 = state_35637;
if(inst_35605){
var statearr_35668_35696 = state_35637__$1;
(statearr_35668_35696[(1)] = (17));

} else {
var statearr_35669_35697 = state_35637__$1;
(statearr_35669_35697[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (16))){
var inst_35621 = (state_35637[(2)]);
var state_35637__$1 = state_35637;
var statearr_35670_35698 = state_35637__$1;
(statearr_35670_35698[(2)] = inst_35621);

(statearr_35670_35698[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35638 === (10))){
var inst_35592 = (state_35637[(8)]);
var inst_35590 = (state_35637[(9)]);
var inst_35597 = cljs.core._nth.call(null,inst_35590,inst_35592);
var state_35637__$1 = state_35637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35637__$1,(13),out,inst_35597);
} else {
if((state_val_35638 === (18))){
var inst_35603 = (state_35637[(7)]);
var inst_35612 = cljs.core.first.call(null,inst_35603);
var state_35637__$1 = state_35637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35637__$1,(20),out,inst_35612);
} else {
if((state_val_35638 === (8))){
var inst_35592 = (state_35637[(8)]);
var inst_35591 = (state_35637[(12)]);
var inst_35594 = (inst_35592 < inst_35591);
var inst_35595 = inst_35594;
var state_35637__$1 = state_35637;
if(cljs.core.truth_(inst_35595)){
var statearr_35671_35699 = state_35637__$1;
(statearr_35671_35699[(1)] = (10));

} else {
var statearr_35672_35700 = state_35637__$1;
(statearr_35672_35700[(1)] = (11));

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
});})(c__34021__auto__))
;
return ((function (switch__33931__auto__,c__34021__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33932__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33932__auto____0 = (function (){
var statearr_35673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35673[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33932__auto__);

(statearr_35673[(1)] = (1));

return statearr_35673;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33932__auto____1 = (function (state_35637){
while(true){
var ret_value__33933__auto__ = (function (){try{while(true){
var result__33934__auto__ = switch__33931__auto__.call(null,state_35637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33934__auto__;
}
break;
}
}catch (e35674){if((e35674 instanceof Object)){
var ex__33935__auto__ = e35674;
var statearr_35675_35701 = state_35637;
(statearr_35675_35701[(5)] = ex__33935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35702 = state_35637;
state_35637 = G__35702;
continue;
} else {
return ret_value__33933__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33932__auto__ = function(state_35637){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33932__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33932__auto____1.call(this,state_35637);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33932__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33932__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33932__auto__;
})()
;})(switch__33931__auto__,c__34021__auto__))
})();
var state__34023__auto__ = (function (){var statearr_35676 = f__34022__auto__.call(null);
(statearr_35676[(6)] = c__34021__auto__);

return statearr_35676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34023__auto__);
});})(c__34021__auto__))
);

return c__34021__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35704 = arguments.length;
switch (G__35704) {
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
var G__35707 = arguments.length;
switch (G__35707) {
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
var G__35710 = arguments.length;
switch (G__35710) {
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
var c__34021__auto___35757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34021__auto___35757,out){
return (function (){
var f__34022__auto__ = (function (){var switch__33931__auto__ = ((function (c__34021__auto___35757,out){
return (function (state_35734){
var state_val_35735 = (state_35734[(1)]);
if((state_val_35735 === (7))){
var inst_35729 = (state_35734[(2)]);
var state_35734__$1 = state_35734;
var statearr_35736_35758 = state_35734__$1;
(statearr_35736_35758[(2)] = inst_35729);

(statearr_35736_35758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35735 === (1))){
var inst_35711 = null;
var state_35734__$1 = (function (){var statearr_35737 = state_35734;
(statearr_35737[(7)] = inst_35711);

return statearr_35737;
})();
var statearr_35738_35759 = state_35734__$1;
(statearr_35738_35759[(2)] = null);

(statearr_35738_35759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35735 === (4))){
var inst_35714 = (state_35734[(8)]);
var inst_35714__$1 = (state_35734[(2)]);
var inst_35715 = (inst_35714__$1 == null);
var inst_35716 = cljs.core.not.call(null,inst_35715);
var state_35734__$1 = (function (){var statearr_35739 = state_35734;
(statearr_35739[(8)] = inst_35714__$1);

return statearr_35739;
})();
if(inst_35716){
var statearr_35740_35760 = state_35734__$1;
(statearr_35740_35760[(1)] = (5));

} else {
var statearr_35741_35761 = state_35734__$1;
(statearr_35741_35761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35735 === (6))){
var state_35734__$1 = state_35734;
var statearr_35742_35762 = state_35734__$1;
(statearr_35742_35762[(2)] = null);

(statearr_35742_35762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35735 === (3))){
var inst_35731 = (state_35734[(2)]);
var inst_35732 = cljs.core.async.close_BANG_.call(null,out);
var state_35734__$1 = (function (){var statearr_35743 = state_35734;
(statearr_35743[(9)] = inst_35731);

return statearr_35743;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35734__$1,inst_35732);
} else {
if((state_val_35735 === (2))){
var state_35734__$1 = state_35734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35734__$1,(4),ch);
} else {
if((state_val_35735 === (11))){
var inst_35714 = (state_35734[(8)]);
var inst_35723 = (state_35734[(2)]);
var inst_35711 = inst_35714;
var state_35734__$1 = (function (){var statearr_35744 = state_35734;
(statearr_35744[(7)] = inst_35711);

(statearr_35744[(10)] = inst_35723);

return statearr_35744;
})();
var statearr_35745_35763 = state_35734__$1;
(statearr_35745_35763[(2)] = null);

(statearr_35745_35763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35735 === (9))){
var inst_35714 = (state_35734[(8)]);
var state_35734__$1 = state_35734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35734__$1,(11),out,inst_35714);
} else {
if((state_val_35735 === (5))){
var inst_35711 = (state_35734[(7)]);
var inst_35714 = (state_35734[(8)]);
var inst_35718 = cljs.core._EQ_.call(null,inst_35714,inst_35711);
var state_35734__$1 = state_35734;
if(inst_35718){
var statearr_35747_35764 = state_35734__$1;
(statearr_35747_35764[(1)] = (8));

} else {
var statearr_35748_35765 = state_35734__$1;
(statearr_35748_35765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35735 === (10))){
var inst_35726 = (state_35734[(2)]);
var state_35734__$1 = state_35734;
var statearr_35749_35766 = state_35734__$1;
(statearr_35749_35766[(2)] = inst_35726);

(statearr_35749_35766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35735 === (8))){
var inst_35711 = (state_35734[(7)]);
var tmp35746 = inst_35711;
var inst_35711__$1 = tmp35746;
var state_35734__$1 = (function (){var statearr_35750 = state_35734;
(statearr_35750[(7)] = inst_35711__$1);

return statearr_35750;
})();
var statearr_35751_35767 = state_35734__$1;
(statearr_35751_35767[(2)] = null);

(statearr_35751_35767[(1)] = (2));


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
});})(c__34021__auto___35757,out))
;
return ((function (switch__33931__auto__,c__34021__auto___35757,out){
return (function() {
var cljs$core$async$state_machine__33932__auto__ = null;
var cljs$core$async$state_machine__33932__auto____0 = (function (){
var statearr_35752 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35752[(0)] = cljs$core$async$state_machine__33932__auto__);

(statearr_35752[(1)] = (1));

return statearr_35752;
});
var cljs$core$async$state_machine__33932__auto____1 = (function (state_35734){
while(true){
var ret_value__33933__auto__ = (function (){try{while(true){
var result__33934__auto__ = switch__33931__auto__.call(null,state_35734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33934__auto__;
}
break;
}
}catch (e35753){if((e35753 instanceof Object)){
var ex__33935__auto__ = e35753;
var statearr_35754_35768 = state_35734;
(statearr_35754_35768[(5)] = ex__33935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35769 = state_35734;
state_35734 = G__35769;
continue;
} else {
return ret_value__33933__auto__;
}
break;
}
});
cljs$core$async$state_machine__33932__auto__ = function(state_35734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33932__auto____1.call(this,state_35734);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33932__auto____0;
cljs$core$async$state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33932__auto____1;
return cljs$core$async$state_machine__33932__auto__;
})()
;})(switch__33931__auto__,c__34021__auto___35757,out))
})();
var state__34023__auto__ = (function (){var statearr_35755 = f__34022__auto__.call(null);
(statearr_35755[(6)] = c__34021__auto___35757);

return statearr_35755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34023__auto__);
});})(c__34021__auto___35757,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35771 = arguments.length;
switch (G__35771) {
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
var c__34021__auto___35837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34021__auto___35837,out){
return (function (){
var f__34022__auto__ = (function (){var switch__33931__auto__ = ((function (c__34021__auto___35837,out){
return (function (state_35809){
var state_val_35810 = (state_35809[(1)]);
if((state_val_35810 === (7))){
var inst_35805 = (state_35809[(2)]);
var state_35809__$1 = state_35809;
var statearr_35811_35838 = state_35809__$1;
(statearr_35811_35838[(2)] = inst_35805);

(statearr_35811_35838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (1))){
var inst_35772 = (new Array(n));
var inst_35773 = inst_35772;
var inst_35774 = (0);
var state_35809__$1 = (function (){var statearr_35812 = state_35809;
(statearr_35812[(7)] = inst_35773);

(statearr_35812[(8)] = inst_35774);

return statearr_35812;
})();
var statearr_35813_35839 = state_35809__$1;
(statearr_35813_35839[(2)] = null);

(statearr_35813_35839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (4))){
var inst_35777 = (state_35809[(9)]);
var inst_35777__$1 = (state_35809[(2)]);
var inst_35778 = (inst_35777__$1 == null);
var inst_35779 = cljs.core.not.call(null,inst_35778);
var state_35809__$1 = (function (){var statearr_35814 = state_35809;
(statearr_35814[(9)] = inst_35777__$1);

return statearr_35814;
})();
if(inst_35779){
var statearr_35815_35840 = state_35809__$1;
(statearr_35815_35840[(1)] = (5));

} else {
var statearr_35816_35841 = state_35809__$1;
(statearr_35816_35841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (15))){
var inst_35799 = (state_35809[(2)]);
var state_35809__$1 = state_35809;
var statearr_35817_35842 = state_35809__$1;
(statearr_35817_35842[(2)] = inst_35799);

(statearr_35817_35842[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (13))){
var state_35809__$1 = state_35809;
var statearr_35818_35843 = state_35809__$1;
(statearr_35818_35843[(2)] = null);

(statearr_35818_35843[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (6))){
var inst_35774 = (state_35809[(8)]);
var inst_35795 = (inst_35774 > (0));
var state_35809__$1 = state_35809;
if(cljs.core.truth_(inst_35795)){
var statearr_35819_35844 = state_35809__$1;
(statearr_35819_35844[(1)] = (12));

} else {
var statearr_35820_35845 = state_35809__$1;
(statearr_35820_35845[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (3))){
var inst_35807 = (state_35809[(2)]);
var state_35809__$1 = state_35809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35809__$1,inst_35807);
} else {
if((state_val_35810 === (12))){
var inst_35773 = (state_35809[(7)]);
var inst_35797 = cljs.core.vec.call(null,inst_35773);
var state_35809__$1 = state_35809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35809__$1,(15),out,inst_35797);
} else {
if((state_val_35810 === (2))){
var state_35809__$1 = state_35809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35809__$1,(4),ch);
} else {
if((state_val_35810 === (11))){
var inst_35789 = (state_35809[(2)]);
var inst_35790 = (new Array(n));
var inst_35773 = inst_35790;
var inst_35774 = (0);
var state_35809__$1 = (function (){var statearr_35821 = state_35809;
(statearr_35821[(7)] = inst_35773);

(statearr_35821[(8)] = inst_35774);

(statearr_35821[(10)] = inst_35789);

return statearr_35821;
})();
var statearr_35822_35846 = state_35809__$1;
(statearr_35822_35846[(2)] = null);

(statearr_35822_35846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (9))){
var inst_35773 = (state_35809[(7)]);
var inst_35787 = cljs.core.vec.call(null,inst_35773);
var state_35809__$1 = state_35809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35809__$1,(11),out,inst_35787);
} else {
if((state_val_35810 === (5))){
var inst_35773 = (state_35809[(7)]);
var inst_35777 = (state_35809[(9)]);
var inst_35774 = (state_35809[(8)]);
var inst_35782 = (state_35809[(11)]);
var inst_35781 = (inst_35773[inst_35774] = inst_35777);
var inst_35782__$1 = (inst_35774 + (1));
var inst_35783 = (inst_35782__$1 < n);
var state_35809__$1 = (function (){var statearr_35823 = state_35809;
(statearr_35823[(12)] = inst_35781);

(statearr_35823[(11)] = inst_35782__$1);

return statearr_35823;
})();
if(cljs.core.truth_(inst_35783)){
var statearr_35824_35847 = state_35809__$1;
(statearr_35824_35847[(1)] = (8));

} else {
var statearr_35825_35848 = state_35809__$1;
(statearr_35825_35848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (14))){
var inst_35802 = (state_35809[(2)]);
var inst_35803 = cljs.core.async.close_BANG_.call(null,out);
var state_35809__$1 = (function (){var statearr_35827 = state_35809;
(statearr_35827[(13)] = inst_35802);

return statearr_35827;
})();
var statearr_35828_35849 = state_35809__$1;
(statearr_35828_35849[(2)] = inst_35803);

(statearr_35828_35849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (10))){
var inst_35793 = (state_35809[(2)]);
var state_35809__$1 = state_35809;
var statearr_35829_35850 = state_35809__$1;
(statearr_35829_35850[(2)] = inst_35793);

(statearr_35829_35850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (8))){
var inst_35773 = (state_35809[(7)]);
var inst_35782 = (state_35809[(11)]);
var tmp35826 = inst_35773;
var inst_35773__$1 = tmp35826;
var inst_35774 = inst_35782;
var state_35809__$1 = (function (){var statearr_35830 = state_35809;
(statearr_35830[(7)] = inst_35773__$1);

(statearr_35830[(8)] = inst_35774);

return statearr_35830;
})();
var statearr_35831_35851 = state_35809__$1;
(statearr_35831_35851[(2)] = null);

(statearr_35831_35851[(1)] = (2));


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
});})(c__34021__auto___35837,out))
;
return ((function (switch__33931__auto__,c__34021__auto___35837,out){
return (function() {
var cljs$core$async$state_machine__33932__auto__ = null;
var cljs$core$async$state_machine__33932__auto____0 = (function (){
var statearr_35832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35832[(0)] = cljs$core$async$state_machine__33932__auto__);

(statearr_35832[(1)] = (1));

return statearr_35832;
});
var cljs$core$async$state_machine__33932__auto____1 = (function (state_35809){
while(true){
var ret_value__33933__auto__ = (function (){try{while(true){
var result__33934__auto__ = switch__33931__auto__.call(null,state_35809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33934__auto__;
}
break;
}
}catch (e35833){if((e35833 instanceof Object)){
var ex__33935__auto__ = e35833;
var statearr_35834_35852 = state_35809;
(statearr_35834_35852[(5)] = ex__33935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35853 = state_35809;
state_35809 = G__35853;
continue;
} else {
return ret_value__33933__auto__;
}
break;
}
});
cljs$core$async$state_machine__33932__auto__ = function(state_35809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33932__auto____1.call(this,state_35809);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33932__auto____0;
cljs$core$async$state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33932__auto____1;
return cljs$core$async$state_machine__33932__auto__;
})()
;})(switch__33931__auto__,c__34021__auto___35837,out))
})();
var state__34023__auto__ = (function (){var statearr_35835 = f__34022__auto__.call(null);
(statearr_35835[(6)] = c__34021__auto___35837);

return statearr_35835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34023__auto__);
});})(c__34021__auto___35837,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35855 = arguments.length;
switch (G__35855) {
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
var c__34021__auto___35925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34021__auto___35925,out){
return (function (){
var f__34022__auto__ = (function (){var switch__33931__auto__ = ((function (c__34021__auto___35925,out){
return (function (state_35897){
var state_val_35898 = (state_35897[(1)]);
if((state_val_35898 === (7))){
var inst_35893 = (state_35897[(2)]);
var state_35897__$1 = state_35897;
var statearr_35899_35926 = state_35897__$1;
(statearr_35899_35926[(2)] = inst_35893);

(statearr_35899_35926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (1))){
var inst_35856 = [];
var inst_35857 = inst_35856;
var inst_35858 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35897__$1 = (function (){var statearr_35900 = state_35897;
(statearr_35900[(7)] = inst_35857);

(statearr_35900[(8)] = inst_35858);

return statearr_35900;
})();
var statearr_35901_35927 = state_35897__$1;
(statearr_35901_35927[(2)] = null);

(statearr_35901_35927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (4))){
var inst_35861 = (state_35897[(9)]);
var inst_35861__$1 = (state_35897[(2)]);
var inst_35862 = (inst_35861__$1 == null);
var inst_35863 = cljs.core.not.call(null,inst_35862);
var state_35897__$1 = (function (){var statearr_35902 = state_35897;
(statearr_35902[(9)] = inst_35861__$1);

return statearr_35902;
})();
if(inst_35863){
var statearr_35903_35928 = state_35897__$1;
(statearr_35903_35928[(1)] = (5));

} else {
var statearr_35904_35929 = state_35897__$1;
(statearr_35904_35929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (15))){
var inst_35887 = (state_35897[(2)]);
var state_35897__$1 = state_35897;
var statearr_35905_35930 = state_35897__$1;
(statearr_35905_35930[(2)] = inst_35887);

(statearr_35905_35930[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (13))){
var state_35897__$1 = state_35897;
var statearr_35906_35931 = state_35897__$1;
(statearr_35906_35931[(2)] = null);

(statearr_35906_35931[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (6))){
var inst_35857 = (state_35897[(7)]);
var inst_35882 = inst_35857.length;
var inst_35883 = (inst_35882 > (0));
var state_35897__$1 = state_35897;
if(cljs.core.truth_(inst_35883)){
var statearr_35907_35932 = state_35897__$1;
(statearr_35907_35932[(1)] = (12));

} else {
var statearr_35908_35933 = state_35897__$1;
(statearr_35908_35933[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (3))){
var inst_35895 = (state_35897[(2)]);
var state_35897__$1 = state_35897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35897__$1,inst_35895);
} else {
if((state_val_35898 === (12))){
var inst_35857 = (state_35897[(7)]);
var inst_35885 = cljs.core.vec.call(null,inst_35857);
var state_35897__$1 = state_35897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35897__$1,(15),out,inst_35885);
} else {
if((state_val_35898 === (2))){
var state_35897__$1 = state_35897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35897__$1,(4),ch);
} else {
if((state_val_35898 === (11))){
var inst_35861 = (state_35897[(9)]);
var inst_35865 = (state_35897[(10)]);
var inst_35875 = (state_35897[(2)]);
var inst_35876 = [];
var inst_35877 = inst_35876.push(inst_35861);
var inst_35857 = inst_35876;
var inst_35858 = inst_35865;
var state_35897__$1 = (function (){var statearr_35909 = state_35897;
(statearr_35909[(7)] = inst_35857);

(statearr_35909[(11)] = inst_35875);

(statearr_35909[(8)] = inst_35858);

(statearr_35909[(12)] = inst_35877);

return statearr_35909;
})();
var statearr_35910_35934 = state_35897__$1;
(statearr_35910_35934[(2)] = null);

(statearr_35910_35934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (9))){
var inst_35857 = (state_35897[(7)]);
var inst_35873 = cljs.core.vec.call(null,inst_35857);
var state_35897__$1 = state_35897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35897__$1,(11),out,inst_35873);
} else {
if((state_val_35898 === (5))){
var inst_35861 = (state_35897[(9)]);
var inst_35865 = (state_35897[(10)]);
var inst_35858 = (state_35897[(8)]);
var inst_35865__$1 = f.call(null,inst_35861);
var inst_35866 = cljs.core._EQ_.call(null,inst_35865__$1,inst_35858);
var inst_35867 = cljs.core.keyword_identical_QMARK_.call(null,inst_35858,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35868 = (inst_35866) || (inst_35867);
var state_35897__$1 = (function (){var statearr_35911 = state_35897;
(statearr_35911[(10)] = inst_35865__$1);

return statearr_35911;
})();
if(cljs.core.truth_(inst_35868)){
var statearr_35912_35935 = state_35897__$1;
(statearr_35912_35935[(1)] = (8));

} else {
var statearr_35913_35936 = state_35897__$1;
(statearr_35913_35936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (14))){
var inst_35890 = (state_35897[(2)]);
var inst_35891 = cljs.core.async.close_BANG_.call(null,out);
var state_35897__$1 = (function (){var statearr_35915 = state_35897;
(statearr_35915[(13)] = inst_35890);

return statearr_35915;
})();
var statearr_35916_35937 = state_35897__$1;
(statearr_35916_35937[(2)] = inst_35891);

(statearr_35916_35937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (10))){
var inst_35880 = (state_35897[(2)]);
var state_35897__$1 = state_35897;
var statearr_35917_35938 = state_35897__$1;
(statearr_35917_35938[(2)] = inst_35880);

(statearr_35917_35938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (8))){
var inst_35861 = (state_35897[(9)]);
var inst_35857 = (state_35897[(7)]);
var inst_35865 = (state_35897[(10)]);
var inst_35870 = inst_35857.push(inst_35861);
var tmp35914 = inst_35857;
var inst_35857__$1 = tmp35914;
var inst_35858 = inst_35865;
var state_35897__$1 = (function (){var statearr_35918 = state_35897;
(statearr_35918[(7)] = inst_35857__$1);

(statearr_35918[(8)] = inst_35858);

(statearr_35918[(14)] = inst_35870);

return statearr_35918;
})();
var statearr_35919_35939 = state_35897__$1;
(statearr_35919_35939[(2)] = null);

(statearr_35919_35939[(1)] = (2));


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
});})(c__34021__auto___35925,out))
;
return ((function (switch__33931__auto__,c__34021__auto___35925,out){
return (function() {
var cljs$core$async$state_machine__33932__auto__ = null;
var cljs$core$async$state_machine__33932__auto____0 = (function (){
var statearr_35920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35920[(0)] = cljs$core$async$state_machine__33932__auto__);

(statearr_35920[(1)] = (1));

return statearr_35920;
});
var cljs$core$async$state_machine__33932__auto____1 = (function (state_35897){
while(true){
var ret_value__33933__auto__ = (function (){try{while(true){
var result__33934__auto__ = switch__33931__auto__.call(null,state_35897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33934__auto__;
}
break;
}
}catch (e35921){if((e35921 instanceof Object)){
var ex__33935__auto__ = e35921;
var statearr_35922_35940 = state_35897;
(statearr_35922_35940[(5)] = ex__33935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35941 = state_35897;
state_35897 = G__35941;
continue;
} else {
return ret_value__33933__auto__;
}
break;
}
});
cljs$core$async$state_machine__33932__auto__ = function(state_35897){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33932__auto____1.call(this,state_35897);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33932__auto____0;
cljs$core$async$state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33932__auto____1;
return cljs$core$async$state_machine__33932__auto__;
})()
;})(switch__33931__auto__,c__34021__auto___35925,out))
})();
var state__34023__auto__ = (function (){var statearr_35923 = f__34022__auto__.call(null);
(statearr_35923[(6)] = c__34021__auto___35925);

return statearr_35923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34023__auto__);
});})(c__34021__auto___35925,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1503485727650
