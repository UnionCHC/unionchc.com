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
var G__34083 = arguments.length;
switch (G__34083) {
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
if(typeof cljs.core.async.t_cljs$core$async34084 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34084 = (function (f,blockable,meta34085){
this.f = f;
this.blockable = blockable;
this.meta34085 = meta34085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34086,meta34085__$1){
var self__ = this;
var _34086__$1 = this;
return (new cljs.core.async.t_cljs$core$async34084(self__.f,self__.blockable,meta34085__$1));
});

cljs.core.async.t_cljs$core$async34084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34086){
var self__ = this;
var _34086__$1 = this;
return self__.meta34085;
});

cljs.core.async.t_cljs$core$async34084.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34084.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34084.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34084.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34084.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34085","meta34085",1327944399,null)], null);
});

cljs.core.async.t_cljs$core$async34084.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34084.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34084";

cljs.core.async.t_cljs$core$async34084.cljs$lang$ctorPrWriter = (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async34084");
});

cljs.core.async.__GT_t_cljs$core$async34084 = (function cljs$core$async$__GT_t_cljs$core$async34084(f__$1,blockable__$1,meta34085){
return (new cljs.core.async.t_cljs$core$async34084(f__$1,blockable__$1,meta34085));
});

}

return (new cljs.core.async.t_cljs$core$async34084(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34090 = arguments.length;
switch (G__34090) {
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
var G__34093 = arguments.length;
switch (G__34093) {
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
var G__34096 = arguments.length;
switch (G__34096) {
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
var val_34098 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34098);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34098,ret){
return (function (){
return fn1.call(null,val_34098);
});})(val_34098,ret))
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
var G__34100 = arguments.length;
switch (G__34100) {
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
var n__31091__auto___34102 = n;
var x_34103 = (0);
while(true){
if((x_34103 < n__31091__auto___34102)){
(a[x_34103] = (0));

var G__34104 = (x_34103 + (1));
x_34103 = G__34104;
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

var G__34105 = (i + (1));
i = G__34105;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34106 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34106 = (function (flag,meta34107){
this.flag = flag;
this.meta34107 = meta34107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34108,meta34107__$1){
var self__ = this;
var _34108__$1 = this;
return (new cljs.core.async.t_cljs$core$async34106(self__.flag,meta34107__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34106.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34108){
var self__ = this;
var _34108__$1 = this;
return self__.meta34107;
});})(flag))
;

cljs.core.async.t_cljs$core$async34106.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34106.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34106.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34106.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34106.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34107","meta34107",-523554720,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34106.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34106";

cljs.core.async.t_cljs$core$async34106.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async34106");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34106 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34106(flag__$1,meta34107){
return (new cljs.core.async.t_cljs$core$async34106(flag__$1,meta34107));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34106(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34109 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34109 = (function (flag,cb,meta34110){
this.flag = flag;
this.cb = cb;
this.meta34110 = meta34110;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34111,meta34110__$1){
var self__ = this;
var _34111__$1 = this;
return (new cljs.core.async.t_cljs$core$async34109(self__.flag,self__.cb,meta34110__$1));
});

cljs.core.async.t_cljs$core$async34109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34111){
var self__ = this;
var _34111__$1 = this;
return self__.meta34110;
});

cljs.core.async.t_cljs$core$async34109.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34109.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34109.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34109.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34109.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34110","meta34110",-2105410067,null)], null);
});

cljs.core.async.t_cljs$core$async34109.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34109.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34109";

cljs.core.async.t_cljs$core$async34109.cljs$lang$ctorPrWriter = (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async34109");
});

cljs.core.async.__GT_t_cljs$core$async34109 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34109(flag__$1,cb__$1,meta34110){
return (new cljs.core.async.t_cljs$core$async34109(flag__$1,cb__$1,meta34110));
});

}

return (new cljs.core.async.t_cljs$core$async34109(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34112_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34112_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34113_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34113_SHARP_,port], null));
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
var G__34114 = (i + (1));
i = G__34114;
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
var len__31325__auto___34120 = arguments.length;
var i__31326__auto___34121 = (0);
while(true){
if((i__31326__auto___34121 < len__31325__auto___34120)){
args__31332__auto__.push((arguments[i__31326__auto___34121]));

var G__34122 = (i__31326__auto___34121 + (1));
i__31326__auto___34121 = G__34122;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((1) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31333__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34117){
var map__34118 = p__34117;
var map__34118__$1 = ((((!((map__34118 == null)))?((((map__34118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34118):map__34118);
var opts = map__34118__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34115){
var G__34116 = cljs.core.first.call(null,seq34115);
var seq34115__$1 = cljs.core.next.call(null,seq34115);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34116,seq34115__$1);
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
var G__34124 = arguments.length;
switch (G__34124) {
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
var c__34023__auto___34170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto___34170){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto___34170){
return (function (state_34148){
var state_val_34149 = (state_34148[(1)]);
if((state_val_34149 === (7))){
var inst_34144 = (state_34148[(2)]);
var state_34148__$1 = state_34148;
var statearr_34150_34171 = state_34148__$1;
(statearr_34150_34171[(2)] = inst_34144);

(statearr_34150_34171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34149 === (1))){
var state_34148__$1 = state_34148;
var statearr_34151_34172 = state_34148__$1;
(statearr_34151_34172[(2)] = null);

(statearr_34151_34172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34149 === (4))){
var inst_34127 = (state_34148[(7)]);
var inst_34127__$1 = (state_34148[(2)]);
var inst_34128 = (inst_34127__$1 == null);
var state_34148__$1 = (function (){var statearr_34152 = state_34148;
(statearr_34152[(7)] = inst_34127__$1);

return statearr_34152;
})();
if(cljs.core.truth_(inst_34128)){
var statearr_34153_34173 = state_34148__$1;
(statearr_34153_34173[(1)] = (5));

} else {
var statearr_34154_34174 = state_34148__$1;
(statearr_34154_34174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34149 === (13))){
var state_34148__$1 = state_34148;
var statearr_34155_34175 = state_34148__$1;
(statearr_34155_34175[(2)] = null);

(statearr_34155_34175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34149 === (6))){
var inst_34127 = (state_34148[(7)]);
var state_34148__$1 = state_34148;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34148__$1,(11),to,inst_34127);
} else {
if((state_val_34149 === (3))){
var inst_34146 = (state_34148[(2)]);
var state_34148__$1 = state_34148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34148__$1,inst_34146);
} else {
if((state_val_34149 === (12))){
var state_34148__$1 = state_34148;
var statearr_34156_34176 = state_34148__$1;
(statearr_34156_34176[(2)] = null);

(statearr_34156_34176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34149 === (2))){
var state_34148__$1 = state_34148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34148__$1,(4),from);
} else {
if((state_val_34149 === (11))){
var inst_34137 = (state_34148[(2)]);
var state_34148__$1 = state_34148;
if(cljs.core.truth_(inst_34137)){
var statearr_34157_34177 = state_34148__$1;
(statearr_34157_34177[(1)] = (12));

} else {
var statearr_34158_34178 = state_34148__$1;
(statearr_34158_34178[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34149 === (9))){
var state_34148__$1 = state_34148;
var statearr_34159_34179 = state_34148__$1;
(statearr_34159_34179[(2)] = null);

(statearr_34159_34179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34149 === (5))){
var state_34148__$1 = state_34148;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34160_34180 = state_34148__$1;
(statearr_34160_34180[(1)] = (8));

} else {
var statearr_34161_34181 = state_34148__$1;
(statearr_34161_34181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34149 === (14))){
var inst_34142 = (state_34148[(2)]);
var state_34148__$1 = state_34148;
var statearr_34162_34182 = state_34148__$1;
(statearr_34162_34182[(2)] = inst_34142);

(statearr_34162_34182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34149 === (10))){
var inst_34134 = (state_34148[(2)]);
var state_34148__$1 = state_34148;
var statearr_34163_34183 = state_34148__$1;
(statearr_34163_34183[(2)] = inst_34134);

(statearr_34163_34183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34149 === (8))){
var inst_34131 = cljs.core.async.close_BANG_.call(null,to);
var state_34148__$1 = state_34148;
var statearr_34164_34184 = state_34148__$1;
(statearr_34164_34184[(2)] = inst_34131);

(statearr_34164_34184[(1)] = (10));


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
});})(c__34023__auto___34170))
;
return ((function (switch__33933__auto__,c__34023__auto___34170){
return (function() {
var cljs$core$async$state_machine__33934__auto__ = null;
var cljs$core$async$state_machine__33934__auto____0 = (function (){
var statearr_34165 = [null,null,null,null,null,null,null,null];
(statearr_34165[(0)] = cljs$core$async$state_machine__33934__auto__);

(statearr_34165[(1)] = (1));

return statearr_34165;
});
var cljs$core$async$state_machine__33934__auto____1 = (function (state_34148){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_34148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e34166){if((e34166 instanceof Object)){
var ex__33937__auto__ = e34166;
var statearr_34167_34185 = state_34148;
(statearr_34167_34185[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34186 = state_34148;
state_34148 = G__34186;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
cljs$core$async$state_machine__33934__auto__ = function(state_34148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33934__auto____1.call(this,state_34148);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33934__auto____0;
cljs$core$async$state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33934__auto____1;
return cljs$core$async$state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto___34170))
})();
var state__34025__auto__ = (function (){var statearr_34168 = f__34024__auto__.call(null);
(statearr_34168[(6)] = c__34023__auto___34170);

return statearr_34168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto___34170))
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
return (function (p__34187){
var vec__34188 = p__34187;
var v = cljs.core.nth.call(null,vec__34188,(0),null);
var p = cljs.core.nth.call(null,vec__34188,(1),null);
var job = vec__34188;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34023__auto___34359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto___34359,res,vec__34188,v,p,job,jobs,results){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto___34359,res,vec__34188,v,p,job,jobs,results){
return (function (state_34195){
var state_val_34196 = (state_34195[(1)]);
if((state_val_34196 === (1))){
var state_34195__$1 = state_34195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34195__$1,(2),res,v);
} else {
if((state_val_34196 === (2))){
var inst_34192 = (state_34195[(2)]);
var inst_34193 = cljs.core.async.close_BANG_.call(null,res);
var state_34195__$1 = (function (){var statearr_34197 = state_34195;
(statearr_34197[(7)] = inst_34192);

return statearr_34197;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34195__$1,inst_34193);
} else {
return null;
}
}
});})(c__34023__auto___34359,res,vec__34188,v,p,job,jobs,results))
;
return ((function (switch__33933__auto__,c__34023__auto___34359,res,vec__34188,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____0 = (function (){
var statearr_34198 = [null,null,null,null,null,null,null,null];
(statearr_34198[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__);

(statearr_34198[(1)] = (1));

return statearr_34198;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____1 = (function (state_34195){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_34195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e34199){if((e34199 instanceof Object)){
var ex__33937__auto__ = e34199;
var statearr_34200_34360 = state_34195;
(statearr_34200_34360[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34361 = state_34195;
state_34195 = G__34361;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__ = function(state_34195){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____1.call(this,state_34195);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto___34359,res,vec__34188,v,p,job,jobs,results))
})();
var state__34025__auto__ = (function (){var statearr_34201 = f__34024__auto__.call(null);
(statearr_34201[(6)] = c__34023__auto___34359);

return statearr_34201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto___34359,res,vec__34188,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34202){
var vec__34203 = p__34202;
var v = cljs.core.nth.call(null,vec__34203,(0),null);
var p = cljs.core.nth.call(null,vec__34203,(1),null);
var job = vec__34203;
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
var n__31091__auto___34362 = n;
var __34363 = (0);
while(true){
if((__34363 < n__31091__auto___34362)){
var G__34206_34364 = type;
var G__34206_34365__$1 = (((G__34206_34364 instanceof cljs.core.Keyword))?G__34206_34364.fqn:null);
switch (G__34206_34365__$1) {
case "compute":
var c__34023__auto___34367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34363,c__34023__auto___34367,G__34206_34364,G__34206_34365__$1,n__31091__auto___34362,jobs,results,process,async){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (__34363,c__34023__auto___34367,G__34206_34364,G__34206_34365__$1,n__31091__auto___34362,jobs,results,process,async){
return (function (state_34219){
var state_val_34220 = (state_34219[(1)]);
if((state_val_34220 === (1))){
var state_34219__$1 = state_34219;
var statearr_34221_34368 = state_34219__$1;
(statearr_34221_34368[(2)] = null);

(statearr_34221_34368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (2))){
var state_34219__$1 = state_34219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34219__$1,(4),jobs);
} else {
if((state_val_34220 === (3))){
var inst_34217 = (state_34219[(2)]);
var state_34219__$1 = state_34219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34219__$1,inst_34217);
} else {
if((state_val_34220 === (4))){
var inst_34209 = (state_34219[(2)]);
var inst_34210 = process.call(null,inst_34209);
var state_34219__$1 = state_34219;
if(cljs.core.truth_(inst_34210)){
var statearr_34222_34369 = state_34219__$1;
(statearr_34222_34369[(1)] = (5));

} else {
var statearr_34223_34370 = state_34219__$1;
(statearr_34223_34370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (5))){
var state_34219__$1 = state_34219;
var statearr_34224_34371 = state_34219__$1;
(statearr_34224_34371[(2)] = null);

(statearr_34224_34371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (6))){
var state_34219__$1 = state_34219;
var statearr_34225_34372 = state_34219__$1;
(statearr_34225_34372[(2)] = null);

(statearr_34225_34372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (7))){
var inst_34215 = (state_34219[(2)]);
var state_34219__$1 = state_34219;
var statearr_34226_34373 = state_34219__$1;
(statearr_34226_34373[(2)] = inst_34215);

(statearr_34226_34373[(1)] = (3));


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
});})(__34363,c__34023__auto___34367,G__34206_34364,G__34206_34365__$1,n__31091__auto___34362,jobs,results,process,async))
;
return ((function (__34363,switch__33933__auto__,c__34023__auto___34367,G__34206_34364,G__34206_34365__$1,n__31091__auto___34362,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____0 = (function (){
var statearr_34227 = [null,null,null,null,null,null,null];
(statearr_34227[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__);

(statearr_34227[(1)] = (1));

return statearr_34227;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____1 = (function (state_34219){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_34219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e34228){if((e34228 instanceof Object)){
var ex__33937__auto__ = e34228;
var statearr_34229_34374 = state_34219;
(statearr_34229_34374[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34375 = state_34219;
state_34219 = G__34375;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__ = function(state_34219){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____1.call(this,state_34219);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__;
})()
;})(__34363,switch__33933__auto__,c__34023__auto___34367,G__34206_34364,G__34206_34365__$1,n__31091__auto___34362,jobs,results,process,async))
})();
var state__34025__auto__ = (function (){var statearr_34230 = f__34024__auto__.call(null);
(statearr_34230[(6)] = c__34023__auto___34367);

return statearr_34230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(__34363,c__34023__auto___34367,G__34206_34364,G__34206_34365__$1,n__31091__auto___34362,jobs,results,process,async))
);


break;
case "async":
var c__34023__auto___34376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34363,c__34023__auto___34376,G__34206_34364,G__34206_34365__$1,n__31091__auto___34362,jobs,results,process,async){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (__34363,c__34023__auto___34376,G__34206_34364,G__34206_34365__$1,n__31091__auto___34362,jobs,results,process,async){
return (function (state_34243){
var state_val_34244 = (state_34243[(1)]);
if((state_val_34244 === (1))){
var state_34243__$1 = state_34243;
var statearr_34245_34377 = state_34243__$1;
(statearr_34245_34377[(2)] = null);

(statearr_34245_34377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34244 === (2))){
var state_34243__$1 = state_34243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34243__$1,(4),jobs);
} else {
if((state_val_34244 === (3))){
var inst_34241 = (state_34243[(2)]);
var state_34243__$1 = state_34243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34243__$1,inst_34241);
} else {
if((state_val_34244 === (4))){
var inst_34233 = (state_34243[(2)]);
var inst_34234 = async.call(null,inst_34233);
var state_34243__$1 = state_34243;
if(cljs.core.truth_(inst_34234)){
var statearr_34246_34378 = state_34243__$1;
(statearr_34246_34378[(1)] = (5));

} else {
var statearr_34247_34379 = state_34243__$1;
(statearr_34247_34379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34244 === (5))){
var state_34243__$1 = state_34243;
var statearr_34248_34380 = state_34243__$1;
(statearr_34248_34380[(2)] = null);

(statearr_34248_34380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34244 === (6))){
var state_34243__$1 = state_34243;
var statearr_34249_34381 = state_34243__$1;
(statearr_34249_34381[(2)] = null);

(statearr_34249_34381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34244 === (7))){
var inst_34239 = (state_34243[(2)]);
var state_34243__$1 = state_34243;
var statearr_34250_34382 = state_34243__$1;
(statearr_34250_34382[(2)] = inst_34239);

(statearr_34250_34382[(1)] = (3));


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
});})(__34363,c__34023__auto___34376,G__34206_34364,G__34206_34365__$1,n__31091__auto___34362,jobs,results,process,async))
;
return ((function (__34363,switch__33933__auto__,c__34023__auto___34376,G__34206_34364,G__34206_34365__$1,n__31091__auto___34362,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____0 = (function (){
var statearr_34251 = [null,null,null,null,null,null,null];
(statearr_34251[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__);

(statearr_34251[(1)] = (1));

return statearr_34251;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____1 = (function (state_34243){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_34243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e34252){if((e34252 instanceof Object)){
var ex__33937__auto__ = e34252;
var statearr_34253_34383 = state_34243;
(statearr_34253_34383[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34384 = state_34243;
state_34243 = G__34384;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__ = function(state_34243){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____1.call(this,state_34243);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__;
})()
;})(__34363,switch__33933__auto__,c__34023__auto___34376,G__34206_34364,G__34206_34365__$1,n__31091__auto___34362,jobs,results,process,async))
})();
var state__34025__auto__ = (function (){var statearr_34254 = f__34024__auto__.call(null);
(statearr_34254[(6)] = c__34023__auto___34376);

return statearr_34254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(__34363,c__34023__auto___34376,G__34206_34364,G__34206_34365__$1,n__31091__auto___34362,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34206_34365__$1)].join('')));

}

var G__34385 = (__34363 + (1));
__34363 = G__34385;
continue;
} else {
}
break;
}

var c__34023__auto___34386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto___34386,jobs,results,process,async){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto___34386,jobs,results,process,async){
return (function (state_34276){
var state_val_34277 = (state_34276[(1)]);
if((state_val_34277 === (1))){
var state_34276__$1 = state_34276;
var statearr_34278_34387 = state_34276__$1;
(statearr_34278_34387[(2)] = null);

(statearr_34278_34387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (2))){
var state_34276__$1 = state_34276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34276__$1,(4),from);
} else {
if((state_val_34277 === (3))){
var inst_34274 = (state_34276[(2)]);
var state_34276__$1 = state_34276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34276__$1,inst_34274);
} else {
if((state_val_34277 === (4))){
var inst_34257 = (state_34276[(7)]);
var inst_34257__$1 = (state_34276[(2)]);
var inst_34258 = (inst_34257__$1 == null);
var state_34276__$1 = (function (){var statearr_34279 = state_34276;
(statearr_34279[(7)] = inst_34257__$1);

return statearr_34279;
})();
if(cljs.core.truth_(inst_34258)){
var statearr_34280_34388 = state_34276__$1;
(statearr_34280_34388[(1)] = (5));

} else {
var statearr_34281_34389 = state_34276__$1;
(statearr_34281_34389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (5))){
var inst_34260 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34276__$1 = state_34276;
var statearr_34282_34390 = state_34276__$1;
(statearr_34282_34390[(2)] = inst_34260);

(statearr_34282_34390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (6))){
var inst_34257 = (state_34276[(7)]);
var inst_34262 = (state_34276[(8)]);
var inst_34262__$1 = cljs.core.async.chan.call(null,(1));
var inst_34263 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34264 = [inst_34257,inst_34262__$1];
var inst_34265 = (new cljs.core.PersistentVector(null,2,(5),inst_34263,inst_34264,null));
var state_34276__$1 = (function (){var statearr_34283 = state_34276;
(statearr_34283[(8)] = inst_34262__$1);

return statearr_34283;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34276__$1,(8),jobs,inst_34265);
} else {
if((state_val_34277 === (7))){
var inst_34272 = (state_34276[(2)]);
var state_34276__$1 = state_34276;
var statearr_34284_34391 = state_34276__$1;
(statearr_34284_34391[(2)] = inst_34272);

(statearr_34284_34391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (8))){
var inst_34262 = (state_34276[(8)]);
var inst_34267 = (state_34276[(2)]);
var state_34276__$1 = (function (){var statearr_34285 = state_34276;
(statearr_34285[(9)] = inst_34267);

return statearr_34285;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34276__$1,(9),results,inst_34262);
} else {
if((state_val_34277 === (9))){
var inst_34269 = (state_34276[(2)]);
var state_34276__$1 = (function (){var statearr_34286 = state_34276;
(statearr_34286[(10)] = inst_34269);

return statearr_34286;
})();
var statearr_34287_34392 = state_34276__$1;
(statearr_34287_34392[(2)] = null);

(statearr_34287_34392[(1)] = (2));


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
});})(c__34023__auto___34386,jobs,results,process,async))
;
return ((function (switch__33933__auto__,c__34023__auto___34386,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____0 = (function (){
var statearr_34288 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34288[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__);

(statearr_34288[(1)] = (1));

return statearr_34288;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____1 = (function (state_34276){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_34276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e34289){if((e34289 instanceof Object)){
var ex__33937__auto__ = e34289;
var statearr_34290_34393 = state_34276;
(statearr_34290_34393[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34394 = state_34276;
state_34276 = G__34394;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__ = function(state_34276){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____1.call(this,state_34276);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto___34386,jobs,results,process,async))
})();
var state__34025__auto__ = (function (){var statearr_34291 = f__34024__auto__.call(null);
(statearr_34291[(6)] = c__34023__auto___34386);

return statearr_34291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto___34386,jobs,results,process,async))
);


var c__34023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto__,jobs,results,process,async){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto__,jobs,results,process,async){
return (function (state_34329){
var state_val_34330 = (state_34329[(1)]);
if((state_val_34330 === (7))){
var inst_34325 = (state_34329[(2)]);
var state_34329__$1 = state_34329;
var statearr_34331_34395 = state_34329__$1;
(statearr_34331_34395[(2)] = inst_34325);

(statearr_34331_34395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (20))){
var state_34329__$1 = state_34329;
var statearr_34332_34396 = state_34329__$1;
(statearr_34332_34396[(2)] = null);

(statearr_34332_34396[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (1))){
var state_34329__$1 = state_34329;
var statearr_34333_34397 = state_34329__$1;
(statearr_34333_34397[(2)] = null);

(statearr_34333_34397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (4))){
var inst_34294 = (state_34329[(7)]);
var inst_34294__$1 = (state_34329[(2)]);
var inst_34295 = (inst_34294__$1 == null);
var state_34329__$1 = (function (){var statearr_34334 = state_34329;
(statearr_34334[(7)] = inst_34294__$1);

return statearr_34334;
})();
if(cljs.core.truth_(inst_34295)){
var statearr_34335_34398 = state_34329__$1;
(statearr_34335_34398[(1)] = (5));

} else {
var statearr_34336_34399 = state_34329__$1;
(statearr_34336_34399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (15))){
var inst_34307 = (state_34329[(8)]);
var state_34329__$1 = state_34329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34329__$1,(18),to,inst_34307);
} else {
if((state_val_34330 === (21))){
var inst_34320 = (state_34329[(2)]);
var state_34329__$1 = state_34329;
var statearr_34337_34400 = state_34329__$1;
(statearr_34337_34400[(2)] = inst_34320);

(statearr_34337_34400[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (13))){
var inst_34322 = (state_34329[(2)]);
var state_34329__$1 = (function (){var statearr_34338 = state_34329;
(statearr_34338[(9)] = inst_34322);

return statearr_34338;
})();
var statearr_34339_34401 = state_34329__$1;
(statearr_34339_34401[(2)] = null);

(statearr_34339_34401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (6))){
var inst_34294 = (state_34329[(7)]);
var state_34329__$1 = state_34329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34329__$1,(11),inst_34294);
} else {
if((state_val_34330 === (17))){
var inst_34315 = (state_34329[(2)]);
var state_34329__$1 = state_34329;
if(cljs.core.truth_(inst_34315)){
var statearr_34340_34402 = state_34329__$1;
(statearr_34340_34402[(1)] = (19));

} else {
var statearr_34341_34403 = state_34329__$1;
(statearr_34341_34403[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (3))){
var inst_34327 = (state_34329[(2)]);
var state_34329__$1 = state_34329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34329__$1,inst_34327);
} else {
if((state_val_34330 === (12))){
var inst_34304 = (state_34329[(10)]);
var state_34329__$1 = state_34329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34329__$1,(14),inst_34304);
} else {
if((state_val_34330 === (2))){
var state_34329__$1 = state_34329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34329__$1,(4),results);
} else {
if((state_val_34330 === (19))){
var state_34329__$1 = state_34329;
var statearr_34342_34404 = state_34329__$1;
(statearr_34342_34404[(2)] = null);

(statearr_34342_34404[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (11))){
var inst_34304 = (state_34329[(2)]);
var state_34329__$1 = (function (){var statearr_34343 = state_34329;
(statearr_34343[(10)] = inst_34304);

return statearr_34343;
})();
var statearr_34344_34405 = state_34329__$1;
(statearr_34344_34405[(2)] = null);

(statearr_34344_34405[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (9))){
var state_34329__$1 = state_34329;
var statearr_34345_34406 = state_34329__$1;
(statearr_34345_34406[(2)] = null);

(statearr_34345_34406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (5))){
var state_34329__$1 = state_34329;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34346_34407 = state_34329__$1;
(statearr_34346_34407[(1)] = (8));

} else {
var statearr_34347_34408 = state_34329__$1;
(statearr_34347_34408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (14))){
var inst_34307 = (state_34329[(8)]);
var inst_34309 = (state_34329[(11)]);
var inst_34307__$1 = (state_34329[(2)]);
var inst_34308 = (inst_34307__$1 == null);
var inst_34309__$1 = cljs.core.not.call(null,inst_34308);
var state_34329__$1 = (function (){var statearr_34348 = state_34329;
(statearr_34348[(8)] = inst_34307__$1);

(statearr_34348[(11)] = inst_34309__$1);

return statearr_34348;
})();
if(inst_34309__$1){
var statearr_34349_34409 = state_34329__$1;
(statearr_34349_34409[(1)] = (15));

} else {
var statearr_34350_34410 = state_34329__$1;
(statearr_34350_34410[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (16))){
var inst_34309 = (state_34329[(11)]);
var state_34329__$1 = state_34329;
var statearr_34351_34411 = state_34329__$1;
(statearr_34351_34411[(2)] = inst_34309);

(statearr_34351_34411[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (10))){
var inst_34301 = (state_34329[(2)]);
var state_34329__$1 = state_34329;
var statearr_34352_34412 = state_34329__$1;
(statearr_34352_34412[(2)] = inst_34301);

(statearr_34352_34412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (18))){
var inst_34312 = (state_34329[(2)]);
var state_34329__$1 = state_34329;
var statearr_34353_34413 = state_34329__$1;
(statearr_34353_34413[(2)] = inst_34312);

(statearr_34353_34413[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (8))){
var inst_34298 = cljs.core.async.close_BANG_.call(null,to);
var state_34329__$1 = state_34329;
var statearr_34354_34414 = state_34329__$1;
(statearr_34354_34414[(2)] = inst_34298);

(statearr_34354_34414[(1)] = (10));


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
});})(c__34023__auto__,jobs,results,process,async))
;
return ((function (switch__33933__auto__,c__34023__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____0 = (function (){
var statearr_34355 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34355[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__);

(statearr_34355[(1)] = (1));

return statearr_34355;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____1 = (function (state_34329){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_34329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e34356){if((e34356 instanceof Object)){
var ex__33937__auto__ = e34356;
var statearr_34357_34415 = state_34329;
(statearr_34357_34415[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34416 = state_34329;
state_34329 = G__34416;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__ = function(state_34329){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____1.call(this,state_34329);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33934__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto__,jobs,results,process,async))
})();
var state__34025__auto__ = (function (){var statearr_34358 = f__34024__auto__.call(null);
(statearr_34358[(6)] = c__34023__auto__);

return statearr_34358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto__,jobs,results,process,async))
);

return c__34023__auto__;
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
var G__34418 = arguments.length;
switch (G__34418) {
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
var G__34421 = arguments.length;
switch (G__34421) {
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
var G__34424 = arguments.length;
switch (G__34424) {
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
var c__34023__auto___34473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto___34473,tc,fc){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto___34473,tc,fc){
return (function (state_34450){
var state_val_34451 = (state_34450[(1)]);
if((state_val_34451 === (7))){
var inst_34446 = (state_34450[(2)]);
var state_34450__$1 = state_34450;
var statearr_34452_34474 = state_34450__$1;
(statearr_34452_34474[(2)] = inst_34446);

(statearr_34452_34474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (1))){
var state_34450__$1 = state_34450;
var statearr_34453_34475 = state_34450__$1;
(statearr_34453_34475[(2)] = null);

(statearr_34453_34475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (4))){
var inst_34427 = (state_34450[(7)]);
var inst_34427__$1 = (state_34450[(2)]);
var inst_34428 = (inst_34427__$1 == null);
var state_34450__$1 = (function (){var statearr_34454 = state_34450;
(statearr_34454[(7)] = inst_34427__$1);

return statearr_34454;
})();
if(cljs.core.truth_(inst_34428)){
var statearr_34455_34476 = state_34450__$1;
(statearr_34455_34476[(1)] = (5));

} else {
var statearr_34456_34477 = state_34450__$1;
(statearr_34456_34477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (13))){
var state_34450__$1 = state_34450;
var statearr_34457_34478 = state_34450__$1;
(statearr_34457_34478[(2)] = null);

(statearr_34457_34478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (6))){
var inst_34427 = (state_34450[(7)]);
var inst_34433 = p.call(null,inst_34427);
var state_34450__$1 = state_34450;
if(cljs.core.truth_(inst_34433)){
var statearr_34458_34479 = state_34450__$1;
(statearr_34458_34479[(1)] = (9));

} else {
var statearr_34459_34480 = state_34450__$1;
(statearr_34459_34480[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (3))){
var inst_34448 = (state_34450[(2)]);
var state_34450__$1 = state_34450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34450__$1,inst_34448);
} else {
if((state_val_34451 === (12))){
var state_34450__$1 = state_34450;
var statearr_34460_34481 = state_34450__$1;
(statearr_34460_34481[(2)] = null);

(statearr_34460_34481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (2))){
var state_34450__$1 = state_34450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34450__$1,(4),ch);
} else {
if((state_val_34451 === (11))){
var inst_34427 = (state_34450[(7)]);
var inst_34437 = (state_34450[(2)]);
var state_34450__$1 = state_34450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34450__$1,(8),inst_34437,inst_34427);
} else {
if((state_val_34451 === (9))){
var state_34450__$1 = state_34450;
var statearr_34461_34482 = state_34450__$1;
(statearr_34461_34482[(2)] = tc);

(statearr_34461_34482[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (5))){
var inst_34430 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34431 = cljs.core.async.close_BANG_.call(null,fc);
var state_34450__$1 = (function (){var statearr_34462 = state_34450;
(statearr_34462[(8)] = inst_34430);

return statearr_34462;
})();
var statearr_34463_34483 = state_34450__$1;
(statearr_34463_34483[(2)] = inst_34431);

(statearr_34463_34483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (14))){
var inst_34444 = (state_34450[(2)]);
var state_34450__$1 = state_34450;
var statearr_34464_34484 = state_34450__$1;
(statearr_34464_34484[(2)] = inst_34444);

(statearr_34464_34484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (10))){
var state_34450__$1 = state_34450;
var statearr_34465_34485 = state_34450__$1;
(statearr_34465_34485[(2)] = fc);

(statearr_34465_34485[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (8))){
var inst_34439 = (state_34450[(2)]);
var state_34450__$1 = state_34450;
if(cljs.core.truth_(inst_34439)){
var statearr_34466_34486 = state_34450__$1;
(statearr_34466_34486[(1)] = (12));

} else {
var statearr_34467_34487 = state_34450__$1;
(statearr_34467_34487[(1)] = (13));

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
});})(c__34023__auto___34473,tc,fc))
;
return ((function (switch__33933__auto__,c__34023__auto___34473,tc,fc){
return (function() {
var cljs$core$async$state_machine__33934__auto__ = null;
var cljs$core$async$state_machine__33934__auto____0 = (function (){
var statearr_34468 = [null,null,null,null,null,null,null,null,null];
(statearr_34468[(0)] = cljs$core$async$state_machine__33934__auto__);

(statearr_34468[(1)] = (1));

return statearr_34468;
});
var cljs$core$async$state_machine__33934__auto____1 = (function (state_34450){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_34450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e34469){if((e34469 instanceof Object)){
var ex__33937__auto__ = e34469;
var statearr_34470_34488 = state_34450;
(statearr_34470_34488[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34489 = state_34450;
state_34450 = G__34489;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
cljs$core$async$state_machine__33934__auto__ = function(state_34450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33934__auto____1.call(this,state_34450);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33934__auto____0;
cljs$core$async$state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33934__auto____1;
return cljs$core$async$state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto___34473,tc,fc))
})();
var state__34025__auto__ = (function (){var statearr_34471 = f__34024__auto__.call(null);
(statearr_34471[(6)] = c__34023__auto___34473);

return statearr_34471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto___34473,tc,fc))
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
var c__34023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto__){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto__){
return (function (state_34510){
var state_val_34511 = (state_34510[(1)]);
if((state_val_34511 === (7))){
var inst_34506 = (state_34510[(2)]);
var state_34510__$1 = state_34510;
var statearr_34512_34530 = state_34510__$1;
(statearr_34512_34530[(2)] = inst_34506);

(statearr_34512_34530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34511 === (1))){
var inst_34490 = init;
var state_34510__$1 = (function (){var statearr_34513 = state_34510;
(statearr_34513[(7)] = inst_34490);

return statearr_34513;
})();
var statearr_34514_34531 = state_34510__$1;
(statearr_34514_34531[(2)] = null);

(statearr_34514_34531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34511 === (4))){
var inst_34493 = (state_34510[(8)]);
var inst_34493__$1 = (state_34510[(2)]);
var inst_34494 = (inst_34493__$1 == null);
var state_34510__$1 = (function (){var statearr_34515 = state_34510;
(statearr_34515[(8)] = inst_34493__$1);

return statearr_34515;
})();
if(cljs.core.truth_(inst_34494)){
var statearr_34516_34532 = state_34510__$1;
(statearr_34516_34532[(1)] = (5));

} else {
var statearr_34517_34533 = state_34510__$1;
(statearr_34517_34533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34511 === (6))){
var inst_34493 = (state_34510[(8)]);
var inst_34497 = (state_34510[(9)]);
var inst_34490 = (state_34510[(7)]);
var inst_34497__$1 = f.call(null,inst_34490,inst_34493);
var inst_34498 = cljs.core.reduced_QMARK_.call(null,inst_34497__$1);
var state_34510__$1 = (function (){var statearr_34518 = state_34510;
(statearr_34518[(9)] = inst_34497__$1);

return statearr_34518;
})();
if(inst_34498){
var statearr_34519_34534 = state_34510__$1;
(statearr_34519_34534[(1)] = (8));

} else {
var statearr_34520_34535 = state_34510__$1;
(statearr_34520_34535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34511 === (3))){
var inst_34508 = (state_34510[(2)]);
var state_34510__$1 = state_34510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34510__$1,inst_34508);
} else {
if((state_val_34511 === (2))){
var state_34510__$1 = state_34510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34510__$1,(4),ch);
} else {
if((state_val_34511 === (9))){
var inst_34497 = (state_34510[(9)]);
var inst_34490 = inst_34497;
var state_34510__$1 = (function (){var statearr_34521 = state_34510;
(statearr_34521[(7)] = inst_34490);

return statearr_34521;
})();
var statearr_34522_34536 = state_34510__$1;
(statearr_34522_34536[(2)] = null);

(statearr_34522_34536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34511 === (5))){
var inst_34490 = (state_34510[(7)]);
var state_34510__$1 = state_34510;
var statearr_34523_34537 = state_34510__$1;
(statearr_34523_34537[(2)] = inst_34490);

(statearr_34523_34537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34511 === (10))){
var inst_34504 = (state_34510[(2)]);
var state_34510__$1 = state_34510;
var statearr_34524_34538 = state_34510__$1;
(statearr_34524_34538[(2)] = inst_34504);

(statearr_34524_34538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34511 === (8))){
var inst_34497 = (state_34510[(9)]);
var inst_34500 = cljs.core.deref.call(null,inst_34497);
var state_34510__$1 = state_34510;
var statearr_34525_34539 = state_34510__$1;
(statearr_34525_34539[(2)] = inst_34500);

(statearr_34525_34539[(1)] = (10));


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
});})(c__34023__auto__))
;
return ((function (switch__33933__auto__,c__34023__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33934__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33934__auto____0 = (function (){
var statearr_34526 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34526[(0)] = cljs$core$async$reduce_$_state_machine__33934__auto__);

(statearr_34526[(1)] = (1));

return statearr_34526;
});
var cljs$core$async$reduce_$_state_machine__33934__auto____1 = (function (state_34510){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_34510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e34527){if((e34527 instanceof Object)){
var ex__33937__auto__ = e34527;
var statearr_34528_34540 = state_34510;
(statearr_34528_34540[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34541 = state_34510;
state_34510 = G__34541;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33934__auto__ = function(state_34510){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33934__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33934__auto____1.call(this,state_34510);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33934__auto____0;
cljs$core$async$reduce_$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33934__auto____1;
return cljs$core$async$reduce_$_state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto__))
})();
var state__34025__auto__ = (function (){var statearr_34529 = f__34024__auto__.call(null);
(statearr_34529[(6)] = c__34023__auto__);

return statearr_34529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto__))
);

return c__34023__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto__,f__$1){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto__,f__$1){
return (function (state_34547){
var state_val_34548 = (state_34547[(1)]);
if((state_val_34548 === (1))){
var inst_34542 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34547__$1 = state_34547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34547__$1,(2),inst_34542);
} else {
if((state_val_34548 === (2))){
var inst_34544 = (state_34547[(2)]);
var inst_34545 = f__$1.call(null,inst_34544);
var state_34547__$1 = state_34547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34547__$1,inst_34545);
} else {
return null;
}
}
});})(c__34023__auto__,f__$1))
;
return ((function (switch__33933__auto__,c__34023__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33934__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33934__auto____0 = (function (){
var statearr_34549 = [null,null,null,null,null,null,null];
(statearr_34549[(0)] = cljs$core$async$transduce_$_state_machine__33934__auto__);

(statearr_34549[(1)] = (1));

return statearr_34549;
});
var cljs$core$async$transduce_$_state_machine__33934__auto____1 = (function (state_34547){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_34547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e34550){if((e34550 instanceof Object)){
var ex__33937__auto__ = e34550;
var statearr_34551_34553 = state_34547;
(statearr_34551_34553[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34554 = state_34547;
state_34547 = G__34554;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33934__auto__ = function(state_34547){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33934__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33934__auto____1.call(this,state_34547);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33934__auto____0;
cljs$core$async$transduce_$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33934__auto____1;
return cljs$core$async$transduce_$_state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto__,f__$1))
})();
var state__34025__auto__ = (function (){var statearr_34552 = f__34024__auto__.call(null);
(statearr_34552[(6)] = c__34023__auto__);

return statearr_34552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto__,f__$1))
);

return c__34023__auto__;
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
var G__34556 = arguments.length;
switch (G__34556) {
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
var c__34023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto__){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto__){
return (function (state_34581){
var state_val_34582 = (state_34581[(1)]);
if((state_val_34582 === (7))){
var inst_34563 = (state_34581[(2)]);
var state_34581__$1 = state_34581;
var statearr_34583_34604 = state_34581__$1;
(statearr_34583_34604[(2)] = inst_34563);

(statearr_34583_34604[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34582 === (1))){
var inst_34557 = cljs.core.seq.call(null,coll);
var inst_34558 = inst_34557;
var state_34581__$1 = (function (){var statearr_34584 = state_34581;
(statearr_34584[(7)] = inst_34558);

return statearr_34584;
})();
var statearr_34585_34605 = state_34581__$1;
(statearr_34585_34605[(2)] = null);

(statearr_34585_34605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34582 === (4))){
var inst_34558 = (state_34581[(7)]);
var inst_34561 = cljs.core.first.call(null,inst_34558);
var state_34581__$1 = state_34581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34581__$1,(7),ch,inst_34561);
} else {
if((state_val_34582 === (13))){
var inst_34575 = (state_34581[(2)]);
var state_34581__$1 = state_34581;
var statearr_34586_34606 = state_34581__$1;
(statearr_34586_34606[(2)] = inst_34575);

(statearr_34586_34606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34582 === (6))){
var inst_34566 = (state_34581[(2)]);
var state_34581__$1 = state_34581;
if(cljs.core.truth_(inst_34566)){
var statearr_34587_34607 = state_34581__$1;
(statearr_34587_34607[(1)] = (8));

} else {
var statearr_34588_34608 = state_34581__$1;
(statearr_34588_34608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34582 === (3))){
var inst_34579 = (state_34581[(2)]);
var state_34581__$1 = state_34581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34581__$1,inst_34579);
} else {
if((state_val_34582 === (12))){
var state_34581__$1 = state_34581;
var statearr_34589_34609 = state_34581__$1;
(statearr_34589_34609[(2)] = null);

(statearr_34589_34609[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34582 === (2))){
var inst_34558 = (state_34581[(7)]);
var state_34581__$1 = state_34581;
if(cljs.core.truth_(inst_34558)){
var statearr_34590_34610 = state_34581__$1;
(statearr_34590_34610[(1)] = (4));

} else {
var statearr_34591_34611 = state_34581__$1;
(statearr_34591_34611[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34582 === (11))){
var inst_34572 = cljs.core.async.close_BANG_.call(null,ch);
var state_34581__$1 = state_34581;
var statearr_34592_34612 = state_34581__$1;
(statearr_34592_34612[(2)] = inst_34572);

(statearr_34592_34612[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34582 === (9))){
var state_34581__$1 = state_34581;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34593_34613 = state_34581__$1;
(statearr_34593_34613[(1)] = (11));

} else {
var statearr_34594_34614 = state_34581__$1;
(statearr_34594_34614[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34582 === (5))){
var inst_34558 = (state_34581[(7)]);
var state_34581__$1 = state_34581;
var statearr_34595_34615 = state_34581__$1;
(statearr_34595_34615[(2)] = inst_34558);

(statearr_34595_34615[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34582 === (10))){
var inst_34577 = (state_34581[(2)]);
var state_34581__$1 = state_34581;
var statearr_34596_34616 = state_34581__$1;
(statearr_34596_34616[(2)] = inst_34577);

(statearr_34596_34616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34582 === (8))){
var inst_34558 = (state_34581[(7)]);
var inst_34568 = cljs.core.next.call(null,inst_34558);
var inst_34558__$1 = inst_34568;
var state_34581__$1 = (function (){var statearr_34597 = state_34581;
(statearr_34597[(7)] = inst_34558__$1);

return statearr_34597;
})();
var statearr_34598_34617 = state_34581__$1;
(statearr_34598_34617[(2)] = null);

(statearr_34598_34617[(1)] = (2));


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
});})(c__34023__auto__))
;
return ((function (switch__33933__auto__,c__34023__auto__){
return (function() {
var cljs$core$async$state_machine__33934__auto__ = null;
var cljs$core$async$state_machine__33934__auto____0 = (function (){
var statearr_34599 = [null,null,null,null,null,null,null,null];
(statearr_34599[(0)] = cljs$core$async$state_machine__33934__auto__);

(statearr_34599[(1)] = (1));

return statearr_34599;
});
var cljs$core$async$state_machine__33934__auto____1 = (function (state_34581){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_34581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e34600){if((e34600 instanceof Object)){
var ex__33937__auto__ = e34600;
var statearr_34601_34618 = state_34581;
(statearr_34601_34618[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34619 = state_34581;
state_34581 = G__34619;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
cljs$core$async$state_machine__33934__auto__ = function(state_34581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33934__auto____1.call(this,state_34581);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33934__auto____0;
cljs$core$async$state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33934__auto____1;
return cljs$core$async$state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto__))
})();
var state__34025__auto__ = (function (){var statearr_34602 = f__34024__auto__.call(null);
(statearr_34602[(6)] = c__34023__auto__);

return statearr_34602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto__))
);

return c__34023__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async34620 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34620 = (function (ch,cs,meta34621){
this.ch = ch;
this.cs = cs;
this.meta34621 = meta34621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34622,meta34621__$1){
var self__ = this;
var _34622__$1 = this;
return (new cljs.core.async.t_cljs$core$async34620(self__.ch,self__.cs,meta34621__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34622){
var self__ = this;
var _34622__$1 = this;
return self__.meta34621;
});})(cs))
;

cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34620.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34621","meta34621",-560904023,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34620.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34620";

cljs.core.async.t_cljs$core$async34620.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async34620");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34620 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34620(ch__$1,cs__$1,meta34621){
return (new cljs.core.async.t_cljs$core$async34620(ch__$1,cs__$1,meta34621));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34620(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34023__auto___34842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto___34842,cs,m,dchan,dctr,done){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto___34842,cs,m,dchan,dctr,done){
return (function (state_34757){
var state_val_34758 = (state_34757[(1)]);
if((state_val_34758 === (7))){
var inst_34753 = (state_34757[(2)]);
var state_34757__$1 = state_34757;
var statearr_34759_34843 = state_34757__$1;
(statearr_34759_34843[(2)] = inst_34753);

(statearr_34759_34843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (20))){
var inst_34656 = (state_34757[(7)]);
var inst_34668 = cljs.core.first.call(null,inst_34656);
var inst_34669 = cljs.core.nth.call(null,inst_34668,(0),null);
var inst_34670 = cljs.core.nth.call(null,inst_34668,(1),null);
var state_34757__$1 = (function (){var statearr_34760 = state_34757;
(statearr_34760[(8)] = inst_34669);

return statearr_34760;
})();
if(cljs.core.truth_(inst_34670)){
var statearr_34761_34844 = state_34757__$1;
(statearr_34761_34844[(1)] = (22));

} else {
var statearr_34762_34845 = state_34757__$1;
(statearr_34762_34845[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (27))){
var inst_34698 = (state_34757[(9)]);
var inst_34700 = (state_34757[(10)]);
var inst_34625 = (state_34757[(11)]);
var inst_34705 = (state_34757[(12)]);
var inst_34705__$1 = cljs.core._nth.call(null,inst_34698,inst_34700);
var inst_34706 = cljs.core.async.put_BANG_.call(null,inst_34705__$1,inst_34625,done);
var state_34757__$1 = (function (){var statearr_34763 = state_34757;
(statearr_34763[(12)] = inst_34705__$1);

return statearr_34763;
})();
if(cljs.core.truth_(inst_34706)){
var statearr_34764_34846 = state_34757__$1;
(statearr_34764_34846[(1)] = (30));

} else {
var statearr_34765_34847 = state_34757__$1;
(statearr_34765_34847[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (1))){
var state_34757__$1 = state_34757;
var statearr_34766_34848 = state_34757__$1;
(statearr_34766_34848[(2)] = null);

(statearr_34766_34848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (24))){
var inst_34656 = (state_34757[(7)]);
var inst_34675 = (state_34757[(2)]);
var inst_34676 = cljs.core.next.call(null,inst_34656);
var inst_34634 = inst_34676;
var inst_34635 = null;
var inst_34636 = (0);
var inst_34637 = (0);
var state_34757__$1 = (function (){var statearr_34767 = state_34757;
(statearr_34767[(13)] = inst_34635);

(statearr_34767[(14)] = inst_34636);

(statearr_34767[(15)] = inst_34675);

(statearr_34767[(16)] = inst_34637);

(statearr_34767[(17)] = inst_34634);

return statearr_34767;
})();
var statearr_34768_34849 = state_34757__$1;
(statearr_34768_34849[(2)] = null);

(statearr_34768_34849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (39))){
var state_34757__$1 = state_34757;
var statearr_34772_34850 = state_34757__$1;
(statearr_34772_34850[(2)] = null);

(statearr_34772_34850[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (4))){
var inst_34625 = (state_34757[(11)]);
var inst_34625__$1 = (state_34757[(2)]);
var inst_34626 = (inst_34625__$1 == null);
var state_34757__$1 = (function (){var statearr_34773 = state_34757;
(statearr_34773[(11)] = inst_34625__$1);

return statearr_34773;
})();
if(cljs.core.truth_(inst_34626)){
var statearr_34774_34851 = state_34757__$1;
(statearr_34774_34851[(1)] = (5));

} else {
var statearr_34775_34852 = state_34757__$1;
(statearr_34775_34852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (15))){
var inst_34635 = (state_34757[(13)]);
var inst_34636 = (state_34757[(14)]);
var inst_34637 = (state_34757[(16)]);
var inst_34634 = (state_34757[(17)]);
var inst_34652 = (state_34757[(2)]);
var inst_34653 = (inst_34637 + (1));
var tmp34769 = inst_34635;
var tmp34770 = inst_34636;
var tmp34771 = inst_34634;
var inst_34634__$1 = tmp34771;
var inst_34635__$1 = tmp34769;
var inst_34636__$1 = tmp34770;
var inst_34637__$1 = inst_34653;
var state_34757__$1 = (function (){var statearr_34776 = state_34757;
(statearr_34776[(13)] = inst_34635__$1);

(statearr_34776[(14)] = inst_34636__$1);

(statearr_34776[(18)] = inst_34652);

(statearr_34776[(16)] = inst_34637__$1);

(statearr_34776[(17)] = inst_34634__$1);

return statearr_34776;
})();
var statearr_34777_34853 = state_34757__$1;
(statearr_34777_34853[(2)] = null);

(statearr_34777_34853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (21))){
var inst_34679 = (state_34757[(2)]);
var state_34757__$1 = state_34757;
var statearr_34781_34854 = state_34757__$1;
(statearr_34781_34854[(2)] = inst_34679);

(statearr_34781_34854[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (31))){
var inst_34705 = (state_34757[(12)]);
var inst_34709 = done.call(null,null);
var inst_34710 = cljs.core.async.untap_STAR_.call(null,m,inst_34705);
var state_34757__$1 = (function (){var statearr_34782 = state_34757;
(statearr_34782[(19)] = inst_34709);

return statearr_34782;
})();
var statearr_34783_34855 = state_34757__$1;
(statearr_34783_34855[(2)] = inst_34710);

(statearr_34783_34855[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (32))){
var inst_34698 = (state_34757[(9)]);
var inst_34700 = (state_34757[(10)]);
var inst_34699 = (state_34757[(20)]);
var inst_34697 = (state_34757[(21)]);
var inst_34712 = (state_34757[(2)]);
var inst_34713 = (inst_34700 + (1));
var tmp34778 = inst_34698;
var tmp34779 = inst_34699;
var tmp34780 = inst_34697;
var inst_34697__$1 = tmp34780;
var inst_34698__$1 = tmp34778;
var inst_34699__$1 = tmp34779;
var inst_34700__$1 = inst_34713;
var state_34757__$1 = (function (){var statearr_34784 = state_34757;
(statearr_34784[(9)] = inst_34698__$1);

(statearr_34784[(10)] = inst_34700__$1);

(statearr_34784[(22)] = inst_34712);

(statearr_34784[(20)] = inst_34699__$1);

(statearr_34784[(21)] = inst_34697__$1);

return statearr_34784;
})();
var statearr_34785_34856 = state_34757__$1;
(statearr_34785_34856[(2)] = null);

(statearr_34785_34856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (40))){
var inst_34725 = (state_34757[(23)]);
var inst_34729 = done.call(null,null);
var inst_34730 = cljs.core.async.untap_STAR_.call(null,m,inst_34725);
var state_34757__$1 = (function (){var statearr_34786 = state_34757;
(statearr_34786[(24)] = inst_34729);

return statearr_34786;
})();
var statearr_34787_34857 = state_34757__$1;
(statearr_34787_34857[(2)] = inst_34730);

(statearr_34787_34857[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (33))){
var inst_34716 = (state_34757[(25)]);
var inst_34718 = cljs.core.chunked_seq_QMARK_.call(null,inst_34716);
var state_34757__$1 = state_34757;
if(inst_34718){
var statearr_34788_34858 = state_34757__$1;
(statearr_34788_34858[(1)] = (36));

} else {
var statearr_34789_34859 = state_34757__$1;
(statearr_34789_34859[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (13))){
var inst_34646 = (state_34757[(26)]);
var inst_34649 = cljs.core.async.close_BANG_.call(null,inst_34646);
var state_34757__$1 = state_34757;
var statearr_34790_34860 = state_34757__$1;
(statearr_34790_34860[(2)] = inst_34649);

(statearr_34790_34860[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (22))){
var inst_34669 = (state_34757[(8)]);
var inst_34672 = cljs.core.async.close_BANG_.call(null,inst_34669);
var state_34757__$1 = state_34757;
var statearr_34791_34861 = state_34757__$1;
(statearr_34791_34861[(2)] = inst_34672);

(statearr_34791_34861[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (36))){
var inst_34716 = (state_34757[(25)]);
var inst_34720 = cljs.core.chunk_first.call(null,inst_34716);
var inst_34721 = cljs.core.chunk_rest.call(null,inst_34716);
var inst_34722 = cljs.core.count.call(null,inst_34720);
var inst_34697 = inst_34721;
var inst_34698 = inst_34720;
var inst_34699 = inst_34722;
var inst_34700 = (0);
var state_34757__$1 = (function (){var statearr_34792 = state_34757;
(statearr_34792[(9)] = inst_34698);

(statearr_34792[(10)] = inst_34700);

(statearr_34792[(20)] = inst_34699);

(statearr_34792[(21)] = inst_34697);

return statearr_34792;
})();
var statearr_34793_34862 = state_34757__$1;
(statearr_34793_34862[(2)] = null);

(statearr_34793_34862[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (41))){
var inst_34716 = (state_34757[(25)]);
var inst_34732 = (state_34757[(2)]);
var inst_34733 = cljs.core.next.call(null,inst_34716);
var inst_34697 = inst_34733;
var inst_34698 = null;
var inst_34699 = (0);
var inst_34700 = (0);
var state_34757__$1 = (function (){var statearr_34794 = state_34757;
(statearr_34794[(9)] = inst_34698);

(statearr_34794[(10)] = inst_34700);

(statearr_34794[(20)] = inst_34699);

(statearr_34794[(21)] = inst_34697);

(statearr_34794[(27)] = inst_34732);

return statearr_34794;
})();
var statearr_34795_34863 = state_34757__$1;
(statearr_34795_34863[(2)] = null);

(statearr_34795_34863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (43))){
var state_34757__$1 = state_34757;
var statearr_34796_34864 = state_34757__$1;
(statearr_34796_34864[(2)] = null);

(statearr_34796_34864[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (29))){
var inst_34741 = (state_34757[(2)]);
var state_34757__$1 = state_34757;
var statearr_34797_34865 = state_34757__$1;
(statearr_34797_34865[(2)] = inst_34741);

(statearr_34797_34865[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (44))){
var inst_34750 = (state_34757[(2)]);
var state_34757__$1 = (function (){var statearr_34798 = state_34757;
(statearr_34798[(28)] = inst_34750);

return statearr_34798;
})();
var statearr_34799_34866 = state_34757__$1;
(statearr_34799_34866[(2)] = null);

(statearr_34799_34866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (6))){
var inst_34689 = (state_34757[(29)]);
var inst_34688 = cljs.core.deref.call(null,cs);
var inst_34689__$1 = cljs.core.keys.call(null,inst_34688);
var inst_34690 = cljs.core.count.call(null,inst_34689__$1);
var inst_34691 = cljs.core.reset_BANG_.call(null,dctr,inst_34690);
var inst_34696 = cljs.core.seq.call(null,inst_34689__$1);
var inst_34697 = inst_34696;
var inst_34698 = null;
var inst_34699 = (0);
var inst_34700 = (0);
var state_34757__$1 = (function (){var statearr_34800 = state_34757;
(statearr_34800[(9)] = inst_34698);

(statearr_34800[(10)] = inst_34700);

(statearr_34800[(29)] = inst_34689__$1);

(statearr_34800[(20)] = inst_34699);

(statearr_34800[(21)] = inst_34697);

(statearr_34800[(30)] = inst_34691);

return statearr_34800;
})();
var statearr_34801_34867 = state_34757__$1;
(statearr_34801_34867[(2)] = null);

(statearr_34801_34867[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (28))){
var inst_34716 = (state_34757[(25)]);
var inst_34697 = (state_34757[(21)]);
var inst_34716__$1 = cljs.core.seq.call(null,inst_34697);
var state_34757__$1 = (function (){var statearr_34802 = state_34757;
(statearr_34802[(25)] = inst_34716__$1);

return statearr_34802;
})();
if(inst_34716__$1){
var statearr_34803_34868 = state_34757__$1;
(statearr_34803_34868[(1)] = (33));

} else {
var statearr_34804_34869 = state_34757__$1;
(statearr_34804_34869[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (25))){
var inst_34700 = (state_34757[(10)]);
var inst_34699 = (state_34757[(20)]);
var inst_34702 = (inst_34700 < inst_34699);
var inst_34703 = inst_34702;
var state_34757__$1 = state_34757;
if(cljs.core.truth_(inst_34703)){
var statearr_34805_34870 = state_34757__$1;
(statearr_34805_34870[(1)] = (27));

} else {
var statearr_34806_34871 = state_34757__$1;
(statearr_34806_34871[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (34))){
var state_34757__$1 = state_34757;
var statearr_34807_34872 = state_34757__$1;
(statearr_34807_34872[(2)] = null);

(statearr_34807_34872[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (17))){
var state_34757__$1 = state_34757;
var statearr_34808_34873 = state_34757__$1;
(statearr_34808_34873[(2)] = null);

(statearr_34808_34873[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (3))){
var inst_34755 = (state_34757[(2)]);
var state_34757__$1 = state_34757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34757__$1,inst_34755);
} else {
if((state_val_34758 === (12))){
var inst_34684 = (state_34757[(2)]);
var state_34757__$1 = state_34757;
var statearr_34809_34874 = state_34757__$1;
(statearr_34809_34874[(2)] = inst_34684);

(statearr_34809_34874[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (2))){
var state_34757__$1 = state_34757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34757__$1,(4),ch);
} else {
if((state_val_34758 === (23))){
var state_34757__$1 = state_34757;
var statearr_34810_34875 = state_34757__$1;
(statearr_34810_34875[(2)] = null);

(statearr_34810_34875[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (35))){
var inst_34739 = (state_34757[(2)]);
var state_34757__$1 = state_34757;
var statearr_34811_34876 = state_34757__$1;
(statearr_34811_34876[(2)] = inst_34739);

(statearr_34811_34876[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (19))){
var inst_34656 = (state_34757[(7)]);
var inst_34660 = cljs.core.chunk_first.call(null,inst_34656);
var inst_34661 = cljs.core.chunk_rest.call(null,inst_34656);
var inst_34662 = cljs.core.count.call(null,inst_34660);
var inst_34634 = inst_34661;
var inst_34635 = inst_34660;
var inst_34636 = inst_34662;
var inst_34637 = (0);
var state_34757__$1 = (function (){var statearr_34812 = state_34757;
(statearr_34812[(13)] = inst_34635);

(statearr_34812[(14)] = inst_34636);

(statearr_34812[(16)] = inst_34637);

(statearr_34812[(17)] = inst_34634);

return statearr_34812;
})();
var statearr_34813_34877 = state_34757__$1;
(statearr_34813_34877[(2)] = null);

(statearr_34813_34877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (11))){
var inst_34656 = (state_34757[(7)]);
var inst_34634 = (state_34757[(17)]);
var inst_34656__$1 = cljs.core.seq.call(null,inst_34634);
var state_34757__$1 = (function (){var statearr_34814 = state_34757;
(statearr_34814[(7)] = inst_34656__$1);

return statearr_34814;
})();
if(inst_34656__$1){
var statearr_34815_34878 = state_34757__$1;
(statearr_34815_34878[(1)] = (16));

} else {
var statearr_34816_34879 = state_34757__$1;
(statearr_34816_34879[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (9))){
var inst_34686 = (state_34757[(2)]);
var state_34757__$1 = state_34757;
var statearr_34817_34880 = state_34757__$1;
(statearr_34817_34880[(2)] = inst_34686);

(statearr_34817_34880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (5))){
var inst_34632 = cljs.core.deref.call(null,cs);
var inst_34633 = cljs.core.seq.call(null,inst_34632);
var inst_34634 = inst_34633;
var inst_34635 = null;
var inst_34636 = (0);
var inst_34637 = (0);
var state_34757__$1 = (function (){var statearr_34818 = state_34757;
(statearr_34818[(13)] = inst_34635);

(statearr_34818[(14)] = inst_34636);

(statearr_34818[(16)] = inst_34637);

(statearr_34818[(17)] = inst_34634);

return statearr_34818;
})();
var statearr_34819_34881 = state_34757__$1;
(statearr_34819_34881[(2)] = null);

(statearr_34819_34881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (14))){
var state_34757__$1 = state_34757;
var statearr_34820_34882 = state_34757__$1;
(statearr_34820_34882[(2)] = null);

(statearr_34820_34882[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (45))){
var inst_34747 = (state_34757[(2)]);
var state_34757__$1 = state_34757;
var statearr_34821_34883 = state_34757__$1;
(statearr_34821_34883[(2)] = inst_34747);

(statearr_34821_34883[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (26))){
var inst_34689 = (state_34757[(29)]);
var inst_34743 = (state_34757[(2)]);
var inst_34744 = cljs.core.seq.call(null,inst_34689);
var state_34757__$1 = (function (){var statearr_34822 = state_34757;
(statearr_34822[(31)] = inst_34743);

return statearr_34822;
})();
if(inst_34744){
var statearr_34823_34884 = state_34757__$1;
(statearr_34823_34884[(1)] = (42));

} else {
var statearr_34824_34885 = state_34757__$1;
(statearr_34824_34885[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (16))){
var inst_34656 = (state_34757[(7)]);
var inst_34658 = cljs.core.chunked_seq_QMARK_.call(null,inst_34656);
var state_34757__$1 = state_34757;
if(inst_34658){
var statearr_34825_34886 = state_34757__$1;
(statearr_34825_34886[(1)] = (19));

} else {
var statearr_34826_34887 = state_34757__$1;
(statearr_34826_34887[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (38))){
var inst_34736 = (state_34757[(2)]);
var state_34757__$1 = state_34757;
var statearr_34827_34888 = state_34757__$1;
(statearr_34827_34888[(2)] = inst_34736);

(statearr_34827_34888[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (30))){
var state_34757__$1 = state_34757;
var statearr_34828_34889 = state_34757__$1;
(statearr_34828_34889[(2)] = null);

(statearr_34828_34889[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (10))){
var inst_34635 = (state_34757[(13)]);
var inst_34637 = (state_34757[(16)]);
var inst_34645 = cljs.core._nth.call(null,inst_34635,inst_34637);
var inst_34646 = cljs.core.nth.call(null,inst_34645,(0),null);
var inst_34647 = cljs.core.nth.call(null,inst_34645,(1),null);
var state_34757__$1 = (function (){var statearr_34829 = state_34757;
(statearr_34829[(26)] = inst_34646);

return statearr_34829;
})();
if(cljs.core.truth_(inst_34647)){
var statearr_34830_34890 = state_34757__$1;
(statearr_34830_34890[(1)] = (13));

} else {
var statearr_34831_34891 = state_34757__$1;
(statearr_34831_34891[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (18))){
var inst_34682 = (state_34757[(2)]);
var state_34757__$1 = state_34757;
var statearr_34832_34892 = state_34757__$1;
(statearr_34832_34892[(2)] = inst_34682);

(statearr_34832_34892[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (42))){
var state_34757__$1 = state_34757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34757__$1,(45),dchan);
} else {
if((state_val_34758 === (37))){
var inst_34725 = (state_34757[(23)]);
var inst_34625 = (state_34757[(11)]);
var inst_34716 = (state_34757[(25)]);
var inst_34725__$1 = cljs.core.first.call(null,inst_34716);
var inst_34726 = cljs.core.async.put_BANG_.call(null,inst_34725__$1,inst_34625,done);
var state_34757__$1 = (function (){var statearr_34833 = state_34757;
(statearr_34833[(23)] = inst_34725__$1);

return statearr_34833;
})();
if(cljs.core.truth_(inst_34726)){
var statearr_34834_34893 = state_34757__$1;
(statearr_34834_34893[(1)] = (39));

} else {
var statearr_34835_34894 = state_34757__$1;
(statearr_34835_34894[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (8))){
var inst_34636 = (state_34757[(14)]);
var inst_34637 = (state_34757[(16)]);
var inst_34639 = (inst_34637 < inst_34636);
var inst_34640 = inst_34639;
var state_34757__$1 = state_34757;
if(cljs.core.truth_(inst_34640)){
var statearr_34836_34895 = state_34757__$1;
(statearr_34836_34895[(1)] = (10));

} else {
var statearr_34837_34896 = state_34757__$1;
(statearr_34837_34896[(1)] = (11));

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
});})(c__34023__auto___34842,cs,m,dchan,dctr,done))
;
return ((function (switch__33933__auto__,c__34023__auto___34842,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33934__auto__ = null;
var cljs$core$async$mult_$_state_machine__33934__auto____0 = (function (){
var statearr_34838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34838[(0)] = cljs$core$async$mult_$_state_machine__33934__auto__);

(statearr_34838[(1)] = (1));

return statearr_34838;
});
var cljs$core$async$mult_$_state_machine__33934__auto____1 = (function (state_34757){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_34757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e34839){if((e34839 instanceof Object)){
var ex__33937__auto__ = e34839;
var statearr_34840_34897 = state_34757;
(statearr_34840_34897[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34898 = state_34757;
state_34757 = G__34898;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33934__auto__ = function(state_34757){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33934__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33934__auto____1.call(this,state_34757);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33934__auto____0;
cljs$core$async$mult_$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33934__auto____1;
return cljs$core$async$mult_$_state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto___34842,cs,m,dchan,dctr,done))
})();
var state__34025__auto__ = (function (){var statearr_34841 = f__34024__auto__.call(null);
(statearr_34841[(6)] = c__34023__auto___34842);

return statearr_34841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto___34842,cs,m,dchan,dctr,done))
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
var G__34900 = arguments.length;
switch (G__34900) {
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
var len__31325__auto___34912 = arguments.length;
var i__31326__auto___34913 = (0);
while(true){
if((i__31326__auto___34913 < len__31325__auto___34912)){
args__31332__auto__.push((arguments[i__31326__auto___34913]));

var G__34914 = (i__31326__auto___34913 + (1));
i__31326__auto___34913 = G__34914;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((3) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31333__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34906){
var map__34907 = p__34906;
var map__34907__$1 = ((((!((map__34907 == null)))?((((map__34907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34907.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34907):map__34907);
var opts = map__34907__$1;
var statearr_34909_34915 = state;
(statearr_34909_34915[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__34907,map__34907__$1,opts){
return (function (val){
var statearr_34910_34916 = state;
(statearr_34910_34916[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34907,map__34907__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_34911_34917 = state;
(statearr_34911_34917[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34902){
var G__34903 = cljs.core.first.call(null,seq34902);
var seq34902__$1 = cljs.core.next.call(null,seq34902);
var G__34904 = cljs.core.first.call(null,seq34902__$1);
var seq34902__$2 = cljs.core.next.call(null,seq34902__$1);
var G__34905 = cljs.core.first.call(null,seq34902__$2);
var seq34902__$3 = cljs.core.next.call(null,seq34902__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34903,G__34904,G__34905,seq34902__$3);
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
if(typeof cljs.core.async.t_cljs$core$async34918 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34918 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34919){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34919 = meta34919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34920,meta34919__$1){
var self__ = this;
var _34920__$1 = this;
return (new cljs.core.async.t_cljs$core$async34918(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34919__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34918.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34920){
var self__ = this;
var _34920__$1 = this;
return self__.meta34919;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34918.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34918.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34918.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34918.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34918.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34918.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34918.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34918.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async34918.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34919","meta34919",-384802972,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34918.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34918.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34918";

cljs.core.async.t_cljs$core$async34918.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async34918");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34918 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34918(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34919){
return (new cljs.core.async.t_cljs$core$async34918(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34919));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34918(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34023__auto___35082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto___35082,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto___35082,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35022){
var state_val_35023 = (state_35022[(1)]);
if((state_val_35023 === (7))){
var inst_34937 = (state_35022[(2)]);
var state_35022__$1 = state_35022;
var statearr_35024_35083 = state_35022__$1;
(statearr_35024_35083[(2)] = inst_34937);

(statearr_35024_35083[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (20))){
var inst_34949 = (state_35022[(7)]);
var state_35022__$1 = state_35022;
var statearr_35025_35084 = state_35022__$1;
(statearr_35025_35084[(2)] = inst_34949);

(statearr_35025_35084[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (27))){
var state_35022__$1 = state_35022;
var statearr_35026_35085 = state_35022__$1;
(statearr_35026_35085[(2)] = null);

(statearr_35026_35085[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (1))){
var inst_34924 = (state_35022[(8)]);
var inst_34924__$1 = calc_state.call(null);
var inst_34926 = (inst_34924__$1 == null);
var inst_34927 = cljs.core.not.call(null,inst_34926);
var state_35022__$1 = (function (){var statearr_35027 = state_35022;
(statearr_35027[(8)] = inst_34924__$1);

return statearr_35027;
})();
if(inst_34927){
var statearr_35028_35086 = state_35022__$1;
(statearr_35028_35086[(1)] = (2));

} else {
var statearr_35029_35087 = state_35022__$1;
(statearr_35029_35087[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (24))){
var inst_34996 = (state_35022[(9)]);
var inst_34973 = (state_35022[(10)]);
var inst_34982 = (state_35022[(11)]);
var inst_34996__$1 = inst_34973.call(null,inst_34982);
var state_35022__$1 = (function (){var statearr_35030 = state_35022;
(statearr_35030[(9)] = inst_34996__$1);

return statearr_35030;
})();
if(cljs.core.truth_(inst_34996__$1)){
var statearr_35031_35088 = state_35022__$1;
(statearr_35031_35088[(1)] = (29));

} else {
var statearr_35032_35089 = state_35022__$1;
(statearr_35032_35089[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (4))){
var inst_34940 = (state_35022[(2)]);
var state_35022__$1 = state_35022;
if(cljs.core.truth_(inst_34940)){
var statearr_35033_35090 = state_35022__$1;
(statearr_35033_35090[(1)] = (8));

} else {
var statearr_35034_35091 = state_35022__$1;
(statearr_35034_35091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (15))){
var inst_34967 = (state_35022[(2)]);
var state_35022__$1 = state_35022;
if(cljs.core.truth_(inst_34967)){
var statearr_35035_35092 = state_35022__$1;
(statearr_35035_35092[(1)] = (19));

} else {
var statearr_35036_35093 = state_35022__$1;
(statearr_35036_35093[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (21))){
var inst_34972 = (state_35022[(12)]);
var inst_34972__$1 = (state_35022[(2)]);
var inst_34973 = cljs.core.get.call(null,inst_34972__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34974 = cljs.core.get.call(null,inst_34972__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34975 = cljs.core.get.call(null,inst_34972__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35022__$1 = (function (){var statearr_35037 = state_35022;
(statearr_35037[(12)] = inst_34972__$1);

(statearr_35037[(10)] = inst_34973);

(statearr_35037[(13)] = inst_34974);

return statearr_35037;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35022__$1,(22),inst_34975);
} else {
if((state_val_35023 === (31))){
var inst_35004 = (state_35022[(2)]);
var state_35022__$1 = state_35022;
if(cljs.core.truth_(inst_35004)){
var statearr_35038_35094 = state_35022__$1;
(statearr_35038_35094[(1)] = (32));

} else {
var statearr_35039_35095 = state_35022__$1;
(statearr_35039_35095[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (32))){
var inst_34981 = (state_35022[(14)]);
var state_35022__$1 = state_35022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35022__$1,(35),out,inst_34981);
} else {
if((state_val_35023 === (33))){
var inst_34972 = (state_35022[(12)]);
var inst_34949 = inst_34972;
var state_35022__$1 = (function (){var statearr_35040 = state_35022;
(statearr_35040[(7)] = inst_34949);

return statearr_35040;
})();
var statearr_35041_35096 = state_35022__$1;
(statearr_35041_35096[(2)] = null);

(statearr_35041_35096[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (13))){
var inst_34949 = (state_35022[(7)]);
var inst_34956 = inst_34949.cljs$lang$protocol_mask$partition0$;
var inst_34957 = (inst_34956 & (64));
var inst_34958 = inst_34949.cljs$core$ISeq$;
var inst_34959 = (cljs.core.PROTOCOL_SENTINEL === inst_34958);
var inst_34960 = (inst_34957) || (inst_34959);
var state_35022__$1 = state_35022;
if(cljs.core.truth_(inst_34960)){
var statearr_35042_35097 = state_35022__$1;
(statearr_35042_35097[(1)] = (16));

} else {
var statearr_35043_35098 = state_35022__$1;
(statearr_35043_35098[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (22))){
var inst_34981 = (state_35022[(14)]);
var inst_34982 = (state_35022[(11)]);
var inst_34980 = (state_35022[(2)]);
var inst_34981__$1 = cljs.core.nth.call(null,inst_34980,(0),null);
var inst_34982__$1 = cljs.core.nth.call(null,inst_34980,(1),null);
var inst_34983 = (inst_34981__$1 == null);
var inst_34984 = cljs.core._EQ_.call(null,inst_34982__$1,change);
var inst_34985 = (inst_34983) || (inst_34984);
var state_35022__$1 = (function (){var statearr_35044 = state_35022;
(statearr_35044[(14)] = inst_34981__$1);

(statearr_35044[(11)] = inst_34982__$1);

return statearr_35044;
})();
if(cljs.core.truth_(inst_34985)){
var statearr_35045_35099 = state_35022__$1;
(statearr_35045_35099[(1)] = (23));

} else {
var statearr_35046_35100 = state_35022__$1;
(statearr_35046_35100[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (36))){
var inst_34972 = (state_35022[(12)]);
var inst_34949 = inst_34972;
var state_35022__$1 = (function (){var statearr_35047 = state_35022;
(statearr_35047[(7)] = inst_34949);

return statearr_35047;
})();
var statearr_35048_35101 = state_35022__$1;
(statearr_35048_35101[(2)] = null);

(statearr_35048_35101[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (29))){
var inst_34996 = (state_35022[(9)]);
var state_35022__$1 = state_35022;
var statearr_35049_35102 = state_35022__$1;
(statearr_35049_35102[(2)] = inst_34996);

(statearr_35049_35102[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (6))){
var state_35022__$1 = state_35022;
var statearr_35050_35103 = state_35022__$1;
(statearr_35050_35103[(2)] = false);

(statearr_35050_35103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (28))){
var inst_34992 = (state_35022[(2)]);
var inst_34993 = calc_state.call(null);
var inst_34949 = inst_34993;
var state_35022__$1 = (function (){var statearr_35051 = state_35022;
(statearr_35051[(7)] = inst_34949);

(statearr_35051[(15)] = inst_34992);

return statearr_35051;
})();
var statearr_35052_35104 = state_35022__$1;
(statearr_35052_35104[(2)] = null);

(statearr_35052_35104[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (25))){
var inst_35018 = (state_35022[(2)]);
var state_35022__$1 = state_35022;
var statearr_35053_35105 = state_35022__$1;
(statearr_35053_35105[(2)] = inst_35018);

(statearr_35053_35105[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (34))){
var inst_35016 = (state_35022[(2)]);
var state_35022__$1 = state_35022;
var statearr_35054_35106 = state_35022__$1;
(statearr_35054_35106[(2)] = inst_35016);

(statearr_35054_35106[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (17))){
var state_35022__$1 = state_35022;
var statearr_35055_35107 = state_35022__$1;
(statearr_35055_35107[(2)] = false);

(statearr_35055_35107[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (3))){
var state_35022__$1 = state_35022;
var statearr_35056_35108 = state_35022__$1;
(statearr_35056_35108[(2)] = false);

(statearr_35056_35108[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (12))){
var inst_35020 = (state_35022[(2)]);
var state_35022__$1 = state_35022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35022__$1,inst_35020);
} else {
if((state_val_35023 === (2))){
var inst_34924 = (state_35022[(8)]);
var inst_34929 = inst_34924.cljs$lang$protocol_mask$partition0$;
var inst_34930 = (inst_34929 & (64));
var inst_34931 = inst_34924.cljs$core$ISeq$;
var inst_34932 = (cljs.core.PROTOCOL_SENTINEL === inst_34931);
var inst_34933 = (inst_34930) || (inst_34932);
var state_35022__$1 = state_35022;
if(cljs.core.truth_(inst_34933)){
var statearr_35057_35109 = state_35022__$1;
(statearr_35057_35109[(1)] = (5));

} else {
var statearr_35058_35110 = state_35022__$1;
(statearr_35058_35110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (23))){
var inst_34981 = (state_35022[(14)]);
var inst_34987 = (inst_34981 == null);
var state_35022__$1 = state_35022;
if(cljs.core.truth_(inst_34987)){
var statearr_35059_35111 = state_35022__$1;
(statearr_35059_35111[(1)] = (26));

} else {
var statearr_35060_35112 = state_35022__$1;
(statearr_35060_35112[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (35))){
var inst_35007 = (state_35022[(2)]);
var state_35022__$1 = state_35022;
if(cljs.core.truth_(inst_35007)){
var statearr_35061_35113 = state_35022__$1;
(statearr_35061_35113[(1)] = (36));

} else {
var statearr_35062_35114 = state_35022__$1;
(statearr_35062_35114[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (19))){
var inst_34949 = (state_35022[(7)]);
var inst_34969 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34949);
var state_35022__$1 = state_35022;
var statearr_35063_35115 = state_35022__$1;
(statearr_35063_35115[(2)] = inst_34969);

(statearr_35063_35115[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (11))){
var inst_34949 = (state_35022[(7)]);
var inst_34953 = (inst_34949 == null);
var inst_34954 = cljs.core.not.call(null,inst_34953);
var state_35022__$1 = state_35022;
if(inst_34954){
var statearr_35064_35116 = state_35022__$1;
(statearr_35064_35116[(1)] = (13));

} else {
var statearr_35065_35117 = state_35022__$1;
(statearr_35065_35117[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (9))){
var inst_34924 = (state_35022[(8)]);
var state_35022__$1 = state_35022;
var statearr_35066_35118 = state_35022__$1;
(statearr_35066_35118[(2)] = inst_34924);

(statearr_35066_35118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (5))){
var state_35022__$1 = state_35022;
var statearr_35067_35119 = state_35022__$1;
(statearr_35067_35119[(2)] = true);

(statearr_35067_35119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (14))){
var state_35022__$1 = state_35022;
var statearr_35068_35120 = state_35022__$1;
(statearr_35068_35120[(2)] = false);

(statearr_35068_35120[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (26))){
var inst_34982 = (state_35022[(11)]);
var inst_34989 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34982);
var state_35022__$1 = state_35022;
var statearr_35069_35121 = state_35022__$1;
(statearr_35069_35121[(2)] = inst_34989);

(statearr_35069_35121[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (16))){
var state_35022__$1 = state_35022;
var statearr_35070_35122 = state_35022__$1;
(statearr_35070_35122[(2)] = true);

(statearr_35070_35122[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (38))){
var inst_35012 = (state_35022[(2)]);
var state_35022__$1 = state_35022;
var statearr_35071_35123 = state_35022__$1;
(statearr_35071_35123[(2)] = inst_35012);

(statearr_35071_35123[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (30))){
var inst_34973 = (state_35022[(10)]);
var inst_34982 = (state_35022[(11)]);
var inst_34974 = (state_35022[(13)]);
var inst_34999 = cljs.core.empty_QMARK_.call(null,inst_34973);
var inst_35000 = inst_34974.call(null,inst_34982);
var inst_35001 = cljs.core.not.call(null,inst_35000);
var inst_35002 = (inst_34999) && (inst_35001);
var state_35022__$1 = state_35022;
var statearr_35072_35124 = state_35022__$1;
(statearr_35072_35124[(2)] = inst_35002);

(statearr_35072_35124[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (10))){
var inst_34924 = (state_35022[(8)]);
var inst_34945 = (state_35022[(2)]);
var inst_34946 = cljs.core.get.call(null,inst_34945,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34947 = cljs.core.get.call(null,inst_34945,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34948 = cljs.core.get.call(null,inst_34945,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34949 = inst_34924;
var state_35022__$1 = (function (){var statearr_35073 = state_35022;
(statearr_35073[(16)] = inst_34946);

(statearr_35073[(17)] = inst_34947);

(statearr_35073[(7)] = inst_34949);

(statearr_35073[(18)] = inst_34948);

return statearr_35073;
})();
var statearr_35074_35125 = state_35022__$1;
(statearr_35074_35125[(2)] = null);

(statearr_35074_35125[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (18))){
var inst_34964 = (state_35022[(2)]);
var state_35022__$1 = state_35022;
var statearr_35075_35126 = state_35022__$1;
(statearr_35075_35126[(2)] = inst_34964);

(statearr_35075_35126[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (37))){
var state_35022__$1 = state_35022;
var statearr_35076_35127 = state_35022__$1;
(statearr_35076_35127[(2)] = null);

(statearr_35076_35127[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (8))){
var inst_34924 = (state_35022[(8)]);
var inst_34942 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34924);
var state_35022__$1 = state_35022;
var statearr_35077_35128 = state_35022__$1;
(statearr_35077_35128[(2)] = inst_34942);

(statearr_35077_35128[(1)] = (10));


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
});})(c__34023__auto___35082,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33933__auto__,c__34023__auto___35082,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33934__auto__ = null;
var cljs$core$async$mix_$_state_machine__33934__auto____0 = (function (){
var statearr_35078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35078[(0)] = cljs$core$async$mix_$_state_machine__33934__auto__);

(statearr_35078[(1)] = (1));

return statearr_35078;
});
var cljs$core$async$mix_$_state_machine__33934__auto____1 = (function (state_35022){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_35022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e35079){if((e35079 instanceof Object)){
var ex__33937__auto__ = e35079;
var statearr_35080_35129 = state_35022;
(statearr_35080_35129[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35130 = state_35022;
state_35022 = G__35130;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33934__auto__ = function(state_35022){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33934__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33934__auto____1.call(this,state_35022);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33934__auto____0;
cljs$core$async$mix_$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33934__auto____1;
return cljs$core$async$mix_$_state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto___35082,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34025__auto__ = (function (){var statearr_35081 = f__34024__auto__.call(null);
(statearr_35081[(6)] = c__34023__auto___35082);

return statearr_35081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto___35082,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__35132 = arguments.length;
switch (G__35132) {
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
var G__35136 = arguments.length;
switch (G__35136) {
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
return (function (p1__35134_SHARP_){
if(cljs.core.truth_(p1__35134_SHARP_.call(null,topic))){
return p1__35134_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35134_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30048__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35137 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35138){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35138 = meta35138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35139,meta35138__$1){
var self__ = this;
var _35139__$1 = this;
return (new cljs.core.async.t_cljs$core$async35137(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35138__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35137.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35139){
var self__ = this;
var _35139__$1 = this;
return self__.meta35138;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35137.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35137.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35137.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35137.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35137.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async35137.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35137.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35137.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35138","meta35138",570850867,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35137";

cljs.core.async.t_cljs$core$async35137.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async35137");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35137 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35137(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35138){
return (new cljs.core.async.t_cljs$core$async35137(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35138));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35137(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34023__auto___35257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto___35257,mults,ensure_mult,p){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto___35257,mults,ensure_mult,p){
return (function (state_35211){
var state_val_35212 = (state_35211[(1)]);
if((state_val_35212 === (7))){
var inst_35207 = (state_35211[(2)]);
var state_35211__$1 = state_35211;
var statearr_35213_35258 = state_35211__$1;
(statearr_35213_35258[(2)] = inst_35207);

(statearr_35213_35258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35212 === (20))){
var state_35211__$1 = state_35211;
var statearr_35214_35259 = state_35211__$1;
(statearr_35214_35259[(2)] = null);

(statearr_35214_35259[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35212 === (1))){
var state_35211__$1 = state_35211;
var statearr_35215_35260 = state_35211__$1;
(statearr_35215_35260[(2)] = null);

(statearr_35215_35260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35212 === (24))){
var inst_35190 = (state_35211[(7)]);
var inst_35199 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35190);
var state_35211__$1 = state_35211;
var statearr_35216_35261 = state_35211__$1;
(statearr_35216_35261[(2)] = inst_35199);

(statearr_35216_35261[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35212 === (4))){
var inst_35142 = (state_35211[(8)]);
var inst_35142__$1 = (state_35211[(2)]);
var inst_35143 = (inst_35142__$1 == null);
var state_35211__$1 = (function (){var statearr_35217 = state_35211;
(statearr_35217[(8)] = inst_35142__$1);

return statearr_35217;
})();
if(cljs.core.truth_(inst_35143)){
var statearr_35218_35262 = state_35211__$1;
(statearr_35218_35262[(1)] = (5));

} else {
var statearr_35219_35263 = state_35211__$1;
(statearr_35219_35263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35212 === (15))){
var inst_35184 = (state_35211[(2)]);
var state_35211__$1 = state_35211;
var statearr_35220_35264 = state_35211__$1;
(statearr_35220_35264[(2)] = inst_35184);

(statearr_35220_35264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35212 === (21))){
var inst_35204 = (state_35211[(2)]);
var state_35211__$1 = (function (){var statearr_35221 = state_35211;
(statearr_35221[(9)] = inst_35204);

return statearr_35221;
})();
var statearr_35222_35265 = state_35211__$1;
(statearr_35222_35265[(2)] = null);

(statearr_35222_35265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35212 === (13))){
var inst_35166 = (state_35211[(10)]);
var inst_35168 = cljs.core.chunked_seq_QMARK_.call(null,inst_35166);
var state_35211__$1 = state_35211;
if(inst_35168){
var statearr_35223_35266 = state_35211__$1;
(statearr_35223_35266[(1)] = (16));

} else {
var statearr_35224_35267 = state_35211__$1;
(statearr_35224_35267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35212 === (22))){
var inst_35196 = (state_35211[(2)]);
var state_35211__$1 = state_35211;
if(cljs.core.truth_(inst_35196)){
var statearr_35225_35268 = state_35211__$1;
(statearr_35225_35268[(1)] = (23));

} else {
var statearr_35226_35269 = state_35211__$1;
(statearr_35226_35269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35212 === (6))){
var inst_35142 = (state_35211[(8)]);
var inst_35190 = (state_35211[(7)]);
var inst_35192 = (state_35211[(11)]);
var inst_35190__$1 = topic_fn.call(null,inst_35142);
var inst_35191 = cljs.core.deref.call(null,mults);
var inst_35192__$1 = cljs.core.get.call(null,inst_35191,inst_35190__$1);
var state_35211__$1 = (function (){var statearr_35227 = state_35211;
(statearr_35227[(7)] = inst_35190__$1);

(statearr_35227[(11)] = inst_35192__$1);

return statearr_35227;
})();
if(cljs.core.truth_(inst_35192__$1)){
var statearr_35228_35270 = state_35211__$1;
(statearr_35228_35270[(1)] = (19));

} else {
var statearr_35229_35271 = state_35211__$1;
(statearr_35229_35271[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35212 === (25))){
var inst_35201 = (state_35211[(2)]);
var state_35211__$1 = state_35211;
var statearr_35230_35272 = state_35211__$1;
(statearr_35230_35272[(2)] = inst_35201);

(statearr_35230_35272[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35212 === (17))){
var inst_35166 = (state_35211[(10)]);
var inst_35175 = cljs.core.first.call(null,inst_35166);
var inst_35176 = cljs.core.async.muxch_STAR_.call(null,inst_35175);
var inst_35177 = cljs.core.async.close_BANG_.call(null,inst_35176);
var inst_35178 = cljs.core.next.call(null,inst_35166);
var inst_35152 = inst_35178;
var inst_35153 = null;
var inst_35154 = (0);
var inst_35155 = (0);
var state_35211__$1 = (function (){var statearr_35231 = state_35211;
(statearr_35231[(12)] = inst_35177);

(statearr_35231[(13)] = inst_35155);

(statearr_35231[(14)] = inst_35153);

(statearr_35231[(15)] = inst_35152);

(statearr_35231[(16)] = inst_35154);

return statearr_35231;
})();
var statearr_35232_35273 = state_35211__$1;
(statearr_35232_35273[(2)] = null);

(statearr_35232_35273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35212 === (3))){
var inst_35209 = (state_35211[(2)]);
var state_35211__$1 = state_35211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35211__$1,inst_35209);
} else {
if((state_val_35212 === (12))){
var inst_35186 = (state_35211[(2)]);
var state_35211__$1 = state_35211;
var statearr_35233_35274 = state_35211__$1;
(statearr_35233_35274[(2)] = inst_35186);

(statearr_35233_35274[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35212 === (2))){
var state_35211__$1 = state_35211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35211__$1,(4),ch);
} else {
if((state_val_35212 === (23))){
var state_35211__$1 = state_35211;
var statearr_35234_35275 = state_35211__$1;
(statearr_35234_35275[(2)] = null);

(statearr_35234_35275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35212 === (19))){
var inst_35142 = (state_35211[(8)]);
var inst_35192 = (state_35211[(11)]);
var inst_35194 = cljs.core.async.muxch_STAR_.call(null,inst_35192);
var state_35211__$1 = state_35211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35211__$1,(22),inst_35194,inst_35142);
} else {
if((state_val_35212 === (11))){
var inst_35166 = (state_35211[(10)]);
var inst_35152 = (state_35211[(15)]);
var inst_35166__$1 = cljs.core.seq.call(null,inst_35152);
var state_35211__$1 = (function (){var statearr_35235 = state_35211;
(statearr_35235[(10)] = inst_35166__$1);

return statearr_35235;
})();
if(inst_35166__$1){
var statearr_35236_35276 = state_35211__$1;
(statearr_35236_35276[(1)] = (13));

} else {
var statearr_35237_35277 = state_35211__$1;
(statearr_35237_35277[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35212 === (9))){
var inst_35188 = (state_35211[(2)]);
var state_35211__$1 = state_35211;
var statearr_35238_35278 = state_35211__$1;
(statearr_35238_35278[(2)] = inst_35188);

(statearr_35238_35278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35212 === (5))){
var inst_35149 = cljs.core.deref.call(null,mults);
var inst_35150 = cljs.core.vals.call(null,inst_35149);
var inst_35151 = cljs.core.seq.call(null,inst_35150);
var inst_35152 = inst_35151;
var inst_35153 = null;
var inst_35154 = (0);
var inst_35155 = (0);
var state_35211__$1 = (function (){var statearr_35239 = state_35211;
(statearr_35239[(13)] = inst_35155);

(statearr_35239[(14)] = inst_35153);

(statearr_35239[(15)] = inst_35152);

(statearr_35239[(16)] = inst_35154);

return statearr_35239;
})();
var statearr_35240_35279 = state_35211__$1;
(statearr_35240_35279[(2)] = null);

(statearr_35240_35279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35212 === (14))){
var state_35211__$1 = state_35211;
var statearr_35244_35280 = state_35211__$1;
(statearr_35244_35280[(2)] = null);

(statearr_35244_35280[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35212 === (16))){
var inst_35166 = (state_35211[(10)]);
var inst_35170 = cljs.core.chunk_first.call(null,inst_35166);
var inst_35171 = cljs.core.chunk_rest.call(null,inst_35166);
var inst_35172 = cljs.core.count.call(null,inst_35170);
var inst_35152 = inst_35171;
var inst_35153 = inst_35170;
var inst_35154 = inst_35172;
var inst_35155 = (0);
var state_35211__$1 = (function (){var statearr_35245 = state_35211;
(statearr_35245[(13)] = inst_35155);

(statearr_35245[(14)] = inst_35153);

(statearr_35245[(15)] = inst_35152);

(statearr_35245[(16)] = inst_35154);

return statearr_35245;
})();
var statearr_35246_35281 = state_35211__$1;
(statearr_35246_35281[(2)] = null);

(statearr_35246_35281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35212 === (10))){
var inst_35155 = (state_35211[(13)]);
var inst_35153 = (state_35211[(14)]);
var inst_35152 = (state_35211[(15)]);
var inst_35154 = (state_35211[(16)]);
var inst_35160 = cljs.core._nth.call(null,inst_35153,inst_35155);
var inst_35161 = cljs.core.async.muxch_STAR_.call(null,inst_35160);
var inst_35162 = cljs.core.async.close_BANG_.call(null,inst_35161);
var inst_35163 = (inst_35155 + (1));
var tmp35241 = inst_35153;
var tmp35242 = inst_35152;
var tmp35243 = inst_35154;
var inst_35152__$1 = tmp35242;
var inst_35153__$1 = tmp35241;
var inst_35154__$1 = tmp35243;
var inst_35155__$1 = inst_35163;
var state_35211__$1 = (function (){var statearr_35247 = state_35211;
(statearr_35247[(13)] = inst_35155__$1);

(statearr_35247[(17)] = inst_35162);

(statearr_35247[(14)] = inst_35153__$1);

(statearr_35247[(15)] = inst_35152__$1);

(statearr_35247[(16)] = inst_35154__$1);

return statearr_35247;
})();
var statearr_35248_35282 = state_35211__$1;
(statearr_35248_35282[(2)] = null);

(statearr_35248_35282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35212 === (18))){
var inst_35181 = (state_35211[(2)]);
var state_35211__$1 = state_35211;
var statearr_35249_35283 = state_35211__$1;
(statearr_35249_35283[(2)] = inst_35181);

(statearr_35249_35283[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35212 === (8))){
var inst_35155 = (state_35211[(13)]);
var inst_35154 = (state_35211[(16)]);
var inst_35157 = (inst_35155 < inst_35154);
var inst_35158 = inst_35157;
var state_35211__$1 = state_35211;
if(cljs.core.truth_(inst_35158)){
var statearr_35250_35284 = state_35211__$1;
(statearr_35250_35284[(1)] = (10));

} else {
var statearr_35251_35285 = state_35211__$1;
(statearr_35251_35285[(1)] = (11));

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
});})(c__34023__auto___35257,mults,ensure_mult,p))
;
return ((function (switch__33933__auto__,c__34023__auto___35257,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33934__auto__ = null;
var cljs$core$async$state_machine__33934__auto____0 = (function (){
var statearr_35252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35252[(0)] = cljs$core$async$state_machine__33934__auto__);

(statearr_35252[(1)] = (1));

return statearr_35252;
});
var cljs$core$async$state_machine__33934__auto____1 = (function (state_35211){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_35211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e35253){if((e35253 instanceof Object)){
var ex__33937__auto__ = e35253;
var statearr_35254_35286 = state_35211;
(statearr_35254_35286[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35287 = state_35211;
state_35211 = G__35287;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
cljs$core$async$state_machine__33934__auto__ = function(state_35211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33934__auto____1.call(this,state_35211);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33934__auto____0;
cljs$core$async$state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33934__auto____1;
return cljs$core$async$state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto___35257,mults,ensure_mult,p))
})();
var state__34025__auto__ = (function (){var statearr_35255 = f__34024__auto__.call(null);
(statearr_35255[(6)] = c__34023__auto___35257);

return statearr_35255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto___35257,mults,ensure_mult,p))
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
var G__35289 = arguments.length;
switch (G__35289) {
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
var G__35292 = arguments.length;
switch (G__35292) {
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
var G__35295 = arguments.length;
switch (G__35295) {
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
var c__34023__auto___35362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto___35362,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto___35362,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35334){
var state_val_35335 = (state_35334[(1)]);
if((state_val_35335 === (7))){
var state_35334__$1 = state_35334;
var statearr_35336_35363 = state_35334__$1;
(statearr_35336_35363[(2)] = null);

(statearr_35336_35363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (1))){
var state_35334__$1 = state_35334;
var statearr_35337_35364 = state_35334__$1;
(statearr_35337_35364[(2)] = null);

(statearr_35337_35364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (4))){
var inst_35298 = (state_35334[(7)]);
var inst_35300 = (inst_35298 < cnt);
var state_35334__$1 = state_35334;
if(cljs.core.truth_(inst_35300)){
var statearr_35338_35365 = state_35334__$1;
(statearr_35338_35365[(1)] = (6));

} else {
var statearr_35339_35366 = state_35334__$1;
(statearr_35339_35366[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (15))){
var inst_35330 = (state_35334[(2)]);
var state_35334__$1 = state_35334;
var statearr_35340_35367 = state_35334__$1;
(statearr_35340_35367[(2)] = inst_35330);

(statearr_35340_35367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (13))){
var inst_35323 = cljs.core.async.close_BANG_.call(null,out);
var state_35334__$1 = state_35334;
var statearr_35341_35368 = state_35334__$1;
(statearr_35341_35368[(2)] = inst_35323);

(statearr_35341_35368[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (6))){
var state_35334__$1 = state_35334;
var statearr_35342_35369 = state_35334__$1;
(statearr_35342_35369[(2)] = null);

(statearr_35342_35369[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (3))){
var inst_35332 = (state_35334[(2)]);
var state_35334__$1 = state_35334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35334__$1,inst_35332);
} else {
if((state_val_35335 === (12))){
var inst_35320 = (state_35334[(8)]);
var inst_35320__$1 = (state_35334[(2)]);
var inst_35321 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35320__$1);
var state_35334__$1 = (function (){var statearr_35343 = state_35334;
(statearr_35343[(8)] = inst_35320__$1);

return statearr_35343;
})();
if(cljs.core.truth_(inst_35321)){
var statearr_35344_35370 = state_35334__$1;
(statearr_35344_35370[(1)] = (13));

} else {
var statearr_35345_35371 = state_35334__$1;
(statearr_35345_35371[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (2))){
var inst_35297 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35298 = (0);
var state_35334__$1 = (function (){var statearr_35346 = state_35334;
(statearr_35346[(7)] = inst_35298);

(statearr_35346[(9)] = inst_35297);

return statearr_35346;
})();
var statearr_35347_35372 = state_35334__$1;
(statearr_35347_35372[(2)] = null);

(statearr_35347_35372[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (11))){
var inst_35298 = (state_35334[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35334,(10),Object,null,(9));
var inst_35307 = chs__$1.call(null,inst_35298);
var inst_35308 = done.call(null,inst_35298);
var inst_35309 = cljs.core.async.take_BANG_.call(null,inst_35307,inst_35308);
var state_35334__$1 = state_35334;
var statearr_35348_35373 = state_35334__$1;
(statearr_35348_35373[(2)] = inst_35309);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35334__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (9))){
var inst_35298 = (state_35334[(7)]);
var inst_35311 = (state_35334[(2)]);
var inst_35312 = (inst_35298 + (1));
var inst_35298__$1 = inst_35312;
var state_35334__$1 = (function (){var statearr_35349 = state_35334;
(statearr_35349[(10)] = inst_35311);

(statearr_35349[(7)] = inst_35298__$1);

return statearr_35349;
})();
var statearr_35350_35374 = state_35334__$1;
(statearr_35350_35374[(2)] = null);

(statearr_35350_35374[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (5))){
var inst_35318 = (state_35334[(2)]);
var state_35334__$1 = (function (){var statearr_35351 = state_35334;
(statearr_35351[(11)] = inst_35318);

return statearr_35351;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35334__$1,(12),dchan);
} else {
if((state_val_35335 === (14))){
var inst_35320 = (state_35334[(8)]);
var inst_35325 = cljs.core.apply.call(null,f,inst_35320);
var state_35334__$1 = state_35334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35334__$1,(16),out,inst_35325);
} else {
if((state_val_35335 === (16))){
var inst_35327 = (state_35334[(2)]);
var state_35334__$1 = (function (){var statearr_35352 = state_35334;
(statearr_35352[(12)] = inst_35327);

return statearr_35352;
})();
var statearr_35353_35375 = state_35334__$1;
(statearr_35353_35375[(2)] = null);

(statearr_35353_35375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (10))){
var inst_35302 = (state_35334[(2)]);
var inst_35303 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35334__$1 = (function (){var statearr_35354 = state_35334;
(statearr_35354[(13)] = inst_35302);

return statearr_35354;
})();
var statearr_35355_35376 = state_35334__$1;
(statearr_35355_35376[(2)] = inst_35303);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35334__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (8))){
var inst_35316 = (state_35334[(2)]);
var state_35334__$1 = state_35334;
var statearr_35356_35377 = state_35334__$1;
(statearr_35356_35377[(2)] = inst_35316);

(statearr_35356_35377[(1)] = (5));


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
});})(c__34023__auto___35362,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33933__auto__,c__34023__auto___35362,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33934__auto__ = null;
var cljs$core$async$state_machine__33934__auto____0 = (function (){
var statearr_35357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35357[(0)] = cljs$core$async$state_machine__33934__auto__);

(statearr_35357[(1)] = (1));

return statearr_35357;
});
var cljs$core$async$state_machine__33934__auto____1 = (function (state_35334){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_35334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e35358){if((e35358 instanceof Object)){
var ex__33937__auto__ = e35358;
var statearr_35359_35378 = state_35334;
(statearr_35359_35378[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35379 = state_35334;
state_35334 = G__35379;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
cljs$core$async$state_machine__33934__auto__ = function(state_35334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33934__auto____1.call(this,state_35334);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33934__auto____0;
cljs$core$async$state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33934__auto____1;
return cljs$core$async$state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto___35362,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34025__auto__ = (function (){var statearr_35360 = f__34024__auto__.call(null);
(statearr_35360[(6)] = c__34023__auto___35362);

return statearr_35360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto___35362,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__35382 = arguments.length;
switch (G__35382) {
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
var c__34023__auto___35436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto___35436,out){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto___35436,out){
return (function (state_35414){
var state_val_35415 = (state_35414[(1)]);
if((state_val_35415 === (7))){
var inst_35394 = (state_35414[(7)]);
var inst_35393 = (state_35414[(8)]);
var inst_35393__$1 = (state_35414[(2)]);
var inst_35394__$1 = cljs.core.nth.call(null,inst_35393__$1,(0),null);
var inst_35395 = cljs.core.nth.call(null,inst_35393__$1,(1),null);
var inst_35396 = (inst_35394__$1 == null);
var state_35414__$1 = (function (){var statearr_35416 = state_35414;
(statearr_35416[(9)] = inst_35395);

(statearr_35416[(7)] = inst_35394__$1);

(statearr_35416[(8)] = inst_35393__$1);

return statearr_35416;
})();
if(cljs.core.truth_(inst_35396)){
var statearr_35417_35437 = state_35414__$1;
(statearr_35417_35437[(1)] = (8));

} else {
var statearr_35418_35438 = state_35414__$1;
(statearr_35418_35438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (1))){
var inst_35383 = cljs.core.vec.call(null,chs);
var inst_35384 = inst_35383;
var state_35414__$1 = (function (){var statearr_35419 = state_35414;
(statearr_35419[(10)] = inst_35384);

return statearr_35419;
})();
var statearr_35420_35439 = state_35414__$1;
(statearr_35420_35439[(2)] = null);

(statearr_35420_35439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (4))){
var inst_35384 = (state_35414[(10)]);
var state_35414__$1 = state_35414;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35414__$1,(7),inst_35384);
} else {
if((state_val_35415 === (6))){
var inst_35410 = (state_35414[(2)]);
var state_35414__$1 = state_35414;
var statearr_35421_35440 = state_35414__$1;
(statearr_35421_35440[(2)] = inst_35410);

(statearr_35421_35440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (3))){
var inst_35412 = (state_35414[(2)]);
var state_35414__$1 = state_35414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35414__$1,inst_35412);
} else {
if((state_val_35415 === (2))){
var inst_35384 = (state_35414[(10)]);
var inst_35386 = cljs.core.count.call(null,inst_35384);
var inst_35387 = (inst_35386 > (0));
var state_35414__$1 = state_35414;
if(cljs.core.truth_(inst_35387)){
var statearr_35423_35441 = state_35414__$1;
(statearr_35423_35441[(1)] = (4));

} else {
var statearr_35424_35442 = state_35414__$1;
(statearr_35424_35442[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (11))){
var inst_35384 = (state_35414[(10)]);
var inst_35403 = (state_35414[(2)]);
var tmp35422 = inst_35384;
var inst_35384__$1 = tmp35422;
var state_35414__$1 = (function (){var statearr_35425 = state_35414;
(statearr_35425[(11)] = inst_35403);

(statearr_35425[(10)] = inst_35384__$1);

return statearr_35425;
})();
var statearr_35426_35443 = state_35414__$1;
(statearr_35426_35443[(2)] = null);

(statearr_35426_35443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (9))){
var inst_35394 = (state_35414[(7)]);
var state_35414__$1 = state_35414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35414__$1,(11),out,inst_35394);
} else {
if((state_val_35415 === (5))){
var inst_35408 = cljs.core.async.close_BANG_.call(null,out);
var state_35414__$1 = state_35414;
var statearr_35427_35444 = state_35414__$1;
(statearr_35427_35444[(2)] = inst_35408);

(statearr_35427_35444[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (10))){
var inst_35406 = (state_35414[(2)]);
var state_35414__$1 = state_35414;
var statearr_35428_35445 = state_35414__$1;
(statearr_35428_35445[(2)] = inst_35406);

(statearr_35428_35445[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (8))){
var inst_35395 = (state_35414[(9)]);
var inst_35384 = (state_35414[(10)]);
var inst_35394 = (state_35414[(7)]);
var inst_35393 = (state_35414[(8)]);
var inst_35398 = (function (){var cs = inst_35384;
var vec__35389 = inst_35393;
var v = inst_35394;
var c = inst_35395;
return ((function (cs,vec__35389,v,c,inst_35395,inst_35384,inst_35394,inst_35393,state_val_35415,c__34023__auto___35436,out){
return (function (p1__35380_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35380_SHARP_);
});
;})(cs,vec__35389,v,c,inst_35395,inst_35384,inst_35394,inst_35393,state_val_35415,c__34023__auto___35436,out))
})();
var inst_35399 = cljs.core.filterv.call(null,inst_35398,inst_35384);
var inst_35384__$1 = inst_35399;
var state_35414__$1 = (function (){var statearr_35429 = state_35414;
(statearr_35429[(10)] = inst_35384__$1);

return statearr_35429;
})();
var statearr_35430_35446 = state_35414__$1;
(statearr_35430_35446[(2)] = null);

(statearr_35430_35446[(1)] = (2));


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
});})(c__34023__auto___35436,out))
;
return ((function (switch__33933__auto__,c__34023__auto___35436,out){
return (function() {
var cljs$core$async$state_machine__33934__auto__ = null;
var cljs$core$async$state_machine__33934__auto____0 = (function (){
var statearr_35431 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35431[(0)] = cljs$core$async$state_machine__33934__auto__);

(statearr_35431[(1)] = (1));

return statearr_35431;
});
var cljs$core$async$state_machine__33934__auto____1 = (function (state_35414){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_35414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e35432){if((e35432 instanceof Object)){
var ex__33937__auto__ = e35432;
var statearr_35433_35447 = state_35414;
(statearr_35433_35447[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35448 = state_35414;
state_35414 = G__35448;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
cljs$core$async$state_machine__33934__auto__ = function(state_35414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33934__auto____1.call(this,state_35414);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33934__auto____0;
cljs$core$async$state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33934__auto____1;
return cljs$core$async$state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto___35436,out))
})();
var state__34025__auto__ = (function (){var statearr_35434 = f__34024__auto__.call(null);
(statearr_35434[(6)] = c__34023__auto___35436);

return statearr_35434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto___35436,out))
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
var G__35450 = arguments.length;
switch (G__35450) {
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
var c__34023__auto___35495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto___35495,out){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto___35495,out){
return (function (state_35474){
var state_val_35475 = (state_35474[(1)]);
if((state_val_35475 === (7))){
var inst_35456 = (state_35474[(7)]);
var inst_35456__$1 = (state_35474[(2)]);
var inst_35457 = (inst_35456__$1 == null);
var inst_35458 = cljs.core.not.call(null,inst_35457);
var state_35474__$1 = (function (){var statearr_35476 = state_35474;
(statearr_35476[(7)] = inst_35456__$1);

return statearr_35476;
})();
if(inst_35458){
var statearr_35477_35496 = state_35474__$1;
(statearr_35477_35496[(1)] = (8));

} else {
var statearr_35478_35497 = state_35474__$1;
(statearr_35478_35497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (1))){
var inst_35451 = (0);
var state_35474__$1 = (function (){var statearr_35479 = state_35474;
(statearr_35479[(8)] = inst_35451);

return statearr_35479;
})();
var statearr_35480_35498 = state_35474__$1;
(statearr_35480_35498[(2)] = null);

(statearr_35480_35498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (4))){
var state_35474__$1 = state_35474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35474__$1,(7),ch);
} else {
if((state_val_35475 === (6))){
var inst_35469 = (state_35474[(2)]);
var state_35474__$1 = state_35474;
var statearr_35481_35499 = state_35474__$1;
(statearr_35481_35499[(2)] = inst_35469);

(statearr_35481_35499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (3))){
var inst_35471 = (state_35474[(2)]);
var inst_35472 = cljs.core.async.close_BANG_.call(null,out);
var state_35474__$1 = (function (){var statearr_35482 = state_35474;
(statearr_35482[(9)] = inst_35471);

return statearr_35482;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35474__$1,inst_35472);
} else {
if((state_val_35475 === (2))){
var inst_35451 = (state_35474[(8)]);
var inst_35453 = (inst_35451 < n);
var state_35474__$1 = state_35474;
if(cljs.core.truth_(inst_35453)){
var statearr_35483_35500 = state_35474__$1;
(statearr_35483_35500[(1)] = (4));

} else {
var statearr_35484_35501 = state_35474__$1;
(statearr_35484_35501[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (11))){
var inst_35451 = (state_35474[(8)]);
var inst_35461 = (state_35474[(2)]);
var inst_35462 = (inst_35451 + (1));
var inst_35451__$1 = inst_35462;
var state_35474__$1 = (function (){var statearr_35485 = state_35474;
(statearr_35485[(10)] = inst_35461);

(statearr_35485[(8)] = inst_35451__$1);

return statearr_35485;
})();
var statearr_35486_35502 = state_35474__$1;
(statearr_35486_35502[(2)] = null);

(statearr_35486_35502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (9))){
var state_35474__$1 = state_35474;
var statearr_35487_35503 = state_35474__$1;
(statearr_35487_35503[(2)] = null);

(statearr_35487_35503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (5))){
var state_35474__$1 = state_35474;
var statearr_35488_35504 = state_35474__$1;
(statearr_35488_35504[(2)] = null);

(statearr_35488_35504[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (10))){
var inst_35466 = (state_35474[(2)]);
var state_35474__$1 = state_35474;
var statearr_35489_35505 = state_35474__$1;
(statearr_35489_35505[(2)] = inst_35466);

(statearr_35489_35505[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (8))){
var inst_35456 = (state_35474[(7)]);
var state_35474__$1 = state_35474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35474__$1,(11),out,inst_35456);
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
});})(c__34023__auto___35495,out))
;
return ((function (switch__33933__auto__,c__34023__auto___35495,out){
return (function() {
var cljs$core$async$state_machine__33934__auto__ = null;
var cljs$core$async$state_machine__33934__auto____0 = (function (){
var statearr_35490 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35490[(0)] = cljs$core$async$state_machine__33934__auto__);

(statearr_35490[(1)] = (1));

return statearr_35490;
});
var cljs$core$async$state_machine__33934__auto____1 = (function (state_35474){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_35474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e35491){if((e35491 instanceof Object)){
var ex__33937__auto__ = e35491;
var statearr_35492_35506 = state_35474;
(statearr_35492_35506[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35507 = state_35474;
state_35474 = G__35507;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
cljs$core$async$state_machine__33934__auto__ = function(state_35474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33934__auto____1.call(this,state_35474);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33934__auto____0;
cljs$core$async$state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33934__auto____1;
return cljs$core$async$state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto___35495,out))
})();
var state__34025__auto__ = (function (){var statearr_35493 = f__34024__auto__.call(null);
(statearr_35493[(6)] = c__34023__auto___35495);

return statearr_35493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto___35495,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35509 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35509 = (function (f,ch,meta35510){
this.f = f;
this.ch = ch;
this.meta35510 = meta35510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35511,meta35510__$1){
var self__ = this;
var _35511__$1 = this;
return (new cljs.core.async.t_cljs$core$async35509(self__.f,self__.ch,meta35510__$1));
});

cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35511){
var self__ = this;
var _35511__$1 = this;
return self__.meta35510;
});

cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35512 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35512 = (function (f,ch,meta35510,_,fn1,meta35513){
this.f = f;
this.ch = ch;
this.meta35510 = meta35510;
this._ = _;
this.fn1 = fn1;
this.meta35513 = meta35513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35514,meta35513__$1){
var self__ = this;
var _35514__$1 = this;
return (new cljs.core.async.t_cljs$core$async35512(self__.f,self__.ch,self__.meta35510,self__._,self__.fn1,meta35513__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35512.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35514){
var self__ = this;
var _35514__$1 = this;
return self__.meta35513;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35512.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35512.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35512.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35512.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35508_SHARP_){
return f1.call(null,(((p1__35508_SHARP_ == null))?null:self__.f.call(null,p1__35508_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35512.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35510","meta35510",-905803141,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35509","cljs.core.async/t_cljs$core$async35509",93859132,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35513","meta35513",1075311293,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35512.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35512.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35512";

cljs.core.async.t_cljs$core$async35512.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async35512");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35512 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35512(f__$1,ch__$1,meta35510__$1,___$2,fn1__$1,meta35513){
return (new cljs.core.async.t_cljs$core$async35512(f__$1,ch__$1,meta35510__$1,___$2,fn1__$1,meta35513));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35512(self__.f,self__.ch,self__.meta35510,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35510","meta35510",-905803141,null)], null);
});

cljs.core.async.t_cljs$core$async35509.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35509";

cljs.core.async.t_cljs$core$async35509.cljs$lang$ctorPrWriter = (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async35509");
});

cljs.core.async.__GT_t_cljs$core$async35509 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35509(f__$1,ch__$1,meta35510){
return (new cljs.core.async.t_cljs$core$async35509(f__$1,ch__$1,meta35510));
});

}

return (new cljs.core.async.t_cljs$core$async35509(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35515 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35515 = (function (f,ch,meta35516){
this.f = f;
this.ch = ch;
this.meta35516 = meta35516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35517,meta35516__$1){
var self__ = this;
var _35517__$1 = this;
return (new cljs.core.async.t_cljs$core$async35515(self__.f,self__.ch,meta35516__$1));
});

cljs.core.async.t_cljs$core$async35515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35517){
var self__ = this;
var _35517__$1 = this;
return self__.meta35516;
});

cljs.core.async.t_cljs$core$async35515.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35515.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35515.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35515.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35515.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35515.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35516","meta35516",998372031,null)], null);
});

cljs.core.async.t_cljs$core$async35515.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35515";

cljs.core.async.t_cljs$core$async35515.cljs$lang$ctorPrWriter = (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async35515");
});

cljs.core.async.__GT_t_cljs$core$async35515 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35515(f__$1,ch__$1,meta35516){
return (new cljs.core.async.t_cljs$core$async35515(f__$1,ch__$1,meta35516));
});

}

return (new cljs.core.async.t_cljs$core$async35515(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35518 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35518 = (function (p,ch,meta35519){
this.p = p;
this.ch = ch;
this.meta35519 = meta35519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35520,meta35519__$1){
var self__ = this;
var _35520__$1 = this;
return (new cljs.core.async.t_cljs$core$async35518(self__.p,self__.ch,meta35519__$1));
});

cljs.core.async.t_cljs$core$async35518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35520){
var self__ = this;
var _35520__$1 = this;
return self__.meta35519;
});

cljs.core.async.t_cljs$core$async35518.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35518.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35518.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35518.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35518.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35518.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35518.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35519","meta35519",-878376189,null)], null);
});

cljs.core.async.t_cljs$core$async35518.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35518";

cljs.core.async.t_cljs$core$async35518.cljs$lang$ctorPrWriter = (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async35518");
});

cljs.core.async.__GT_t_cljs$core$async35518 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35518(p__$1,ch__$1,meta35519){
return (new cljs.core.async.t_cljs$core$async35518(p__$1,ch__$1,meta35519));
});

}

return (new cljs.core.async.t_cljs$core$async35518(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35522 = arguments.length;
switch (G__35522) {
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
var c__34023__auto___35562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto___35562,out){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto___35562,out){
return (function (state_35543){
var state_val_35544 = (state_35543[(1)]);
if((state_val_35544 === (7))){
var inst_35539 = (state_35543[(2)]);
var state_35543__$1 = state_35543;
var statearr_35545_35563 = state_35543__$1;
(statearr_35545_35563[(2)] = inst_35539);

(statearr_35545_35563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (1))){
var state_35543__$1 = state_35543;
var statearr_35546_35564 = state_35543__$1;
(statearr_35546_35564[(2)] = null);

(statearr_35546_35564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (4))){
var inst_35525 = (state_35543[(7)]);
var inst_35525__$1 = (state_35543[(2)]);
var inst_35526 = (inst_35525__$1 == null);
var state_35543__$1 = (function (){var statearr_35547 = state_35543;
(statearr_35547[(7)] = inst_35525__$1);

return statearr_35547;
})();
if(cljs.core.truth_(inst_35526)){
var statearr_35548_35565 = state_35543__$1;
(statearr_35548_35565[(1)] = (5));

} else {
var statearr_35549_35566 = state_35543__$1;
(statearr_35549_35566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (6))){
var inst_35525 = (state_35543[(7)]);
var inst_35530 = p.call(null,inst_35525);
var state_35543__$1 = state_35543;
if(cljs.core.truth_(inst_35530)){
var statearr_35550_35567 = state_35543__$1;
(statearr_35550_35567[(1)] = (8));

} else {
var statearr_35551_35568 = state_35543__$1;
(statearr_35551_35568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (3))){
var inst_35541 = (state_35543[(2)]);
var state_35543__$1 = state_35543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35543__$1,inst_35541);
} else {
if((state_val_35544 === (2))){
var state_35543__$1 = state_35543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35543__$1,(4),ch);
} else {
if((state_val_35544 === (11))){
var inst_35533 = (state_35543[(2)]);
var state_35543__$1 = state_35543;
var statearr_35552_35569 = state_35543__$1;
(statearr_35552_35569[(2)] = inst_35533);

(statearr_35552_35569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (9))){
var state_35543__$1 = state_35543;
var statearr_35553_35570 = state_35543__$1;
(statearr_35553_35570[(2)] = null);

(statearr_35553_35570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (5))){
var inst_35528 = cljs.core.async.close_BANG_.call(null,out);
var state_35543__$1 = state_35543;
var statearr_35554_35571 = state_35543__$1;
(statearr_35554_35571[(2)] = inst_35528);

(statearr_35554_35571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (10))){
var inst_35536 = (state_35543[(2)]);
var state_35543__$1 = (function (){var statearr_35555 = state_35543;
(statearr_35555[(8)] = inst_35536);

return statearr_35555;
})();
var statearr_35556_35572 = state_35543__$1;
(statearr_35556_35572[(2)] = null);

(statearr_35556_35572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (8))){
var inst_35525 = (state_35543[(7)]);
var state_35543__$1 = state_35543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35543__$1,(11),out,inst_35525);
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
});})(c__34023__auto___35562,out))
;
return ((function (switch__33933__auto__,c__34023__auto___35562,out){
return (function() {
var cljs$core$async$state_machine__33934__auto__ = null;
var cljs$core$async$state_machine__33934__auto____0 = (function (){
var statearr_35557 = [null,null,null,null,null,null,null,null,null];
(statearr_35557[(0)] = cljs$core$async$state_machine__33934__auto__);

(statearr_35557[(1)] = (1));

return statearr_35557;
});
var cljs$core$async$state_machine__33934__auto____1 = (function (state_35543){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_35543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e35558){if((e35558 instanceof Object)){
var ex__33937__auto__ = e35558;
var statearr_35559_35573 = state_35543;
(statearr_35559_35573[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35574 = state_35543;
state_35543 = G__35574;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
cljs$core$async$state_machine__33934__auto__ = function(state_35543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33934__auto____1.call(this,state_35543);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33934__auto____0;
cljs$core$async$state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33934__auto____1;
return cljs$core$async$state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto___35562,out))
})();
var state__34025__auto__ = (function (){var statearr_35560 = f__34024__auto__.call(null);
(statearr_35560[(6)] = c__34023__auto___35562);

return statearr_35560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto___35562,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35576 = arguments.length;
switch (G__35576) {
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
var c__34023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto__){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto__){
return (function (state_35639){
var state_val_35640 = (state_35639[(1)]);
if((state_val_35640 === (7))){
var inst_35635 = (state_35639[(2)]);
var state_35639__$1 = state_35639;
var statearr_35641_35679 = state_35639__$1;
(statearr_35641_35679[(2)] = inst_35635);

(statearr_35641_35679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35640 === (20))){
var inst_35605 = (state_35639[(7)]);
var inst_35616 = (state_35639[(2)]);
var inst_35617 = cljs.core.next.call(null,inst_35605);
var inst_35591 = inst_35617;
var inst_35592 = null;
var inst_35593 = (0);
var inst_35594 = (0);
var state_35639__$1 = (function (){var statearr_35642 = state_35639;
(statearr_35642[(8)] = inst_35592);

(statearr_35642[(9)] = inst_35616);

(statearr_35642[(10)] = inst_35593);

(statearr_35642[(11)] = inst_35594);

(statearr_35642[(12)] = inst_35591);

return statearr_35642;
})();
var statearr_35643_35680 = state_35639__$1;
(statearr_35643_35680[(2)] = null);

(statearr_35643_35680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35640 === (1))){
var state_35639__$1 = state_35639;
var statearr_35644_35681 = state_35639__$1;
(statearr_35644_35681[(2)] = null);

(statearr_35644_35681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35640 === (4))){
var inst_35580 = (state_35639[(13)]);
var inst_35580__$1 = (state_35639[(2)]);
var inst_35581 = (inst_35580__$1 == null);
var state_35639__$1 = (function (){var statearr_35645 = state_35639;
(statearr_35645[(13)] = inst_35580__$1);

return statearr_35645;
})();
if(cljs.core.truth_(inst_35581)){
var statearr_35646_35682 = state_35639__$1;
(statearr_35646_35682[(1)] = (5));

} else {
var statearr_35647_35683 = state_35639__$1;
(statearr_35647_35683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35640 === (15))){
var state_35639__$1 = state_35639;
var statearr_35651_35684 = state_35639__$1;
(statearr_35651_35684[(2)] = null);

(statearr_35651_35684[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35640 === (21))){
var state_35639__$1 = state_35639;
var statearr_35652_35685 = state_35639__$1;
(statearr_35652_35685[(2)] = null);

(statearr_35652_35685[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35640 === (13))){
var inst_35592 = (state_35639[(8)]);
var inst_35593 = (state_35639[(10)]);
var inst_35594 = (state_35639[(11)]);
var inst_35591 = (state_35639[(12)]);
var inst_35601 = (state_35639[(2)]);
var inst_35602 = (inst_35594 + (1));
var tmp35648 = inst_35592;
var tmp35649 = inst_35593;
var tmp35650 = inst_35591;
var inst_35591__$1 = tmp35650;
var inst_35592__$1 = tmp35648;
var inst_35593__$1 = tmp35649;
var inst_35594__$1 = inst_35602;
var state_35639__$1 = (function (){var statearr_35653 = state_35639;
(statearr_35653[(8)] = inst_35592__$1);

(statearr_35653[(10)] = inst_35593__$1);

(statearr_35653[(14)] = inst_35601);

(statearr_35653[(11)] = inst_35594__$1);

(statearr_35653[(12)] = inst_35591__$1);

return statearr_35653;
})();
var statearr_35654_35686 = state_35639__$1;
(statearr_35654_35686[(2)] = null);

(statearr_35654_35686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35640 === (22))){
var state_35639__$1 = state_35639;
var statearr_35655_35687 = state_35639__$1;
(statearr_35655_35687[(2)] = null);

(statearr_35655_35687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35640 === (6))){
var inst_35580 = (state_35639[(13)]);
var inst_35589 = f.call(null,inst_35580);
var inst_35590 = cljs.core.seq.call(null,inst_35589);
var inst_35591 = inst_35590;
var inst_35592 = null;
var inst_35593 = (0);
var inst_35594 = (0);
var state_35639__$1 = (function (){var statearr_35656 = state_35639;
(statearr_35656[(8)] = inst_35592);

(statearr_35656[(10)] = inst_35593);

(statearr_35656[(11)] = inst_35594);

(statearr_35656[(12)] = inst_35591);

return statearr_35656;
})();
var statearr_35657_35688 = state_35639__$1;
(statearr_35657_35688[(2)] = null);

(statearr_35657_35688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35640 === (17))){
var inst_35605 = (state_35639[(7)]);
var inst_35609 = cljs.core.chunk_first.call(null,inst_35605);
var inst_35610 = cljs.core.chunk_rest.call(null,inst_35605);
var inst_35611 = cljs.core.count.call(null,inst_35609);
var inst_35591 = inst_35610;
var inst_35592 = inst_35609;
var inst_35593 = inst_35611;
var inst_35594 = (0);
var state_35639__$1 = (function (){var statearr_35658 = state_35639;
(statearr_35658[(8)] = inst_35592);

(statearr_35658[(10)] = inst_35593);

(statearr_35658[(11)] = inst_35594);

(statearr_35658[(12)] = inst_35591);

return statearr_35658;
})();
var statearr_35659_35689 = state_35639__$1;
(statearr_35659_35689[(2)] = null);

(statearr_35659_35689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35640 === (3))){
var inst_35637 = (state_35639[(2)]);
var state_35639__$1 = state_35639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35639__$1,inst_35637);
} else {
if((state_val_35640 === (12))){
var inst_35625 = (state_35639[(2)]);
var state_35639__$1 = state_35639;
var statearr_35660_35690 = state_35639__$1;
(statearr_35660_35690[(2)] = inst_35625);

(statearr_35660_35690[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35640 === (2))){
var state_35639__$1 = state_35639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35639__$1,(4),in$);
} else {
if((state_val_35640 === (23))){
var inst_35633 = (state_35639[(2)]);
var state_35639__$1 = state_35639;
var statearr_35661_35691 = state_35639__$1;
(statearr_35661_35691[(2)] = inst_35633);

(statearr_35661_35691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35640 === (19))){
var inst_35620 = (state_35639[(2)]);
var state_35639__$1 = state_35639;
var statearr_35662_35692 = state_35639__$1;
(statearr_35662_35692[(2)] = inst_35620);

(statearr_35662_35692[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35640 === (11))){
var inst_35605 = (state_35639[(7)]);
var inst_35591 = (state_35639[(12)]);
var inst_35605__$1 = cljs.core.seq.call(null,inst_35591);
var state_35639__$1 = (function (){var statearr_35663 = state_35639;
(statearr_35663[(7)] = inst_35605__$1);

return statearr_35663;
})();
if(inst_35605__$1){
var statearr_35664_35693 = state_35639__$1;
(statearr_35664_35693[(1)] = (14));

} else {
var statearr_35665_35694 = state_35639__$1;
(statearr_35665_35694[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35640 === (9))){
var inst_35627 = (state_35639[(2)]);
var inst_35628 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35639__$1 = (function (){var statearr_35666 = state_35639;
(statearr_35666[(15)] = inst_35627);

return statearr_35666;
})();
if(cljs.core.truth_(inst_35628)){
var statearr_35667_35695 = state_35639__$1;
(statearr_35667_35695[(1)] = (21));

} else {
var statearr_35668_35696 = state_35639__$1;
(statearr_35668_35696[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35640 === (5))){
var inst_35583 = cljs.core.async.close_BANG_.call(null,out);
var state_35639__$1 = state_35639;
var statearr_35669_35697 = state_35639__$1;
(statearr_35669_35697[(2)] = inst_35583);

(statearr_35669_35697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35640 === (14))){
var inst_35605 = (state_35639[(7)]);
var inst_35607 = cljs.core.chunked_seq_QMARK_.call(null,inst_35605);
var state_35639__$1 = state_35639;
if(inst_35607){
var statearr_35670_35698 = state_35639__$1;
(statearr_35670_35698[(1)] = (17));

} else {
var statearr_35671_35699 = state_35639__$1;
(statearr_35671_35699[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35640 === (16))){
var inst_35623 = (state_35639[(2)]);
var state_35639__$1 = state_35639;
var statearr_35672_35700 = state_35639__$1;
(statearr_35672_35700[(2)] = inst_35623);

(statearr_35672_35700[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35640 === (10))){
var inst_35592 = (state_35639[(8)]);
var inst_35594 = (state_35639[(11)]);
var inst_35599 = cljs.core._nth.call(null,inst_35592,inst_35594);
var state_35639__$1 = state_35639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35639__$1,(13),out,inst_35599);
} else {
if((state_val_35640 === (18))){
var inst_35605 = (state_35639[(7)]);
var inst_35614 = cljs.core.first.call(null,inst_35605);
var state_35639__$1 = state_35639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35639__$1,(20),out,inst_35614);
} else {
if((state_val_35640 === (8))){
var inst_35593 = (state_35639[(10)]);
var inst_35594 = (state_35639[(11)]);
var inst_35596 = (inst_35594 < inst_35593);
var inst_35597 = inst_35596;
var state_35639__$1 = state_35639;
if(cljs.core.truth_(inst_35597)){
var statearr_35673_35701 = state_35639__$1;
(statearr_35673_35701[(1)] = (10));

} else {
var statearr_35674_35702 = state_35639__$1;
(statearr_35674_35702[(1)] = (11));

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
});})(c__34023__auto__))
;
return ((function (switch__33933__auto__,c__34023__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33934__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33934__auto____0 = (function (){
var statearr_35675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35675[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33934__auto__);

(statearr_35675[(1)] = (1));

return statearr_35675;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33934__auto____1 = (function (state_35639){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_35639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e35676){if((e35676 instanceof Object)){
var ex__33937__auto__ = e35676;
var statearr_35677_35703 = state_35639;
(statearr_35677_35703[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35704 = state_35639;
state_35639 = G__35704;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33934__auto__ = function(state_35639){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33934__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33934__auto____1.call(this,state_35639);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33934__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33934__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto__))
})();
var state__34025__auto__ = (function (){var statearr_35678 = f__34024__auto__.call(null);
(statearr_35678[(6)] = c__34023__auto__);

return statearr_35678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto__))
);

return c__34023__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35706 = arguments.length;
switch (G__35706) {
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
var G__35709 = arguments.length;
switch (G__35709) {
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
var G__35712 = arguments.length;
switch (G__35712) {
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
var c__34023__auto___35759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto___35759,out){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto___35759,out){
return (function (state_35736){
var state_val_35737 = (state_35736[(1)]);
if((state_val_35737 === (7))){
var inst_35731 = (state_35736[(2)]);
var state_35736__$1 = state_35736;
var statearr_35738_35760 = state_35736__$1;
(statearr_35738_35760[(2)] = inst_35731);

(statearr_35738_35760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35737 === (1))){
var inst_35713 = null;
var state_35736__$1 = (function (){var statearr_35739 = state_35736;
(statearr_35739[(7)] = inst_35713);

return statearr_35739;
})();
var statearr_35740_35761 = state_35736__$1;
(statearr_35740_35761[(2)] = null);

(statearr_35740_35761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35737 === (4))){
var inst_35716 = (state_35736[(8)]);
var inst_35716__$1 = (state_35736[(2)]);
var inst_35717 = (inst_35716__$1 == null);
var inst_35718 = cljs.core.not.call(null,inst_35717);
var state_35736__$1 = (function (){var statearr_35741 = state_35736;
(statearr_35741[(8)] = inst_35716__$1);

return statearr_35741;
})();
if(inst_35718){
var statearr_35742_35762 = state_35736__$1;
(statearr_35742_35762[(1)] = (5));

} else {
var statearr_35743_35763 = state_35736__$1;
(statearr_35743_35763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35737 === (6))){
var state_35736__$1 = state_35736;
var statearr_35744_35764 = state_35736__$1;
(statearr_35744_35764[(2)] = null);

(statearr_35744_35764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35737 === (3))){
var inst_35733 = (state_35736[(2)]);
var inst_35734 = cljs.core.async.close_BANG_.call(null,out);
var state_35736__$1 = (function (){var statearr_35745 = state_35736;
(statearr_35745[(9)] = inst_35733);

return statearr_35745;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35736__$1,inst_35734);
} else {
if((state_val_35737 === (2))){
var state_35736__$1 = state_35736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35736__$1,(4),ch);
} else {
if((state_val_35737 === (11))){
var inst_35716 = (state_35736[(8)]);
var inst_35725 = (state_35736[(2)]);
var inst_35713 = inst_35716;
var state_35736__$1 = (function (){var statearr_35746 = state_35736;
(statearr_35746[(7)] = inst_35713);

(statearr_35746[(10)] = inst_35725);

return statearr_35746;
})();
var statearr_35747_35765 = state_35736__$1;
(statearr_35747_35765[(2)] = null);

(statearr_35747_35765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35737 === (9))){
var inst_35716 = (state_35736[(8)]);
var state_35736__$1 = state_35736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35736__$1,(11),out,inst_35716);
} else {
if((state_val_35737 === (5))){
var inst_35713 = (state_35736[(7)]);
var inst_35716 = (state_35736[(8)]);
var inst_35720 = cljs.core._EQ_.call(null,inst_35716,inst_35713);
var state_35736__$1 = state_35736;
if(inst_35720){
var statearr_35749_35766 = state_35736__$1;
(statearr_35749_35766[(1)] = (8));

} else {
var statearr_35750_35767 = state_35736__$1;
(statearr_35750_35767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35737 === (10))){
var inst_35728 = (state_35736[(2)]);
var state_35736__$1 = state_35736;
var statearr_35751_35768 = state_35736__$1;
(statearr_35751_35768[(2)] = inst_35728);

(statearr_35751_35768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35737 === (8))){
var inst_35713 = (state_35736[(7)]);
var tmp35748 = inst_35713;
var inst_35713__$1 = tmp35748;
var state_35736__$1 = (function (){var statearr_35752 = state_35736;
(statearr_35752[(7)] = inst_35713__$1);

return statearr_35752;
})();
var statearr_35753_35769 = state_35736__$1;
(statearr_35753_35769[(2)] = null);

(statearr_35753_35769[(1)] = (2));


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
});})(c__34023__auto___35759,out))
;
return ((function (switch__33933__auto__,c__34023__auto___35759,out){
return (function() {
var cljs$core$async$state_machine__33934__auto__ = null;
var cljs$core$async$state_machine__33934__auto____0 = (function (){
var statearr_35754 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35754[(0)] = cljs$core$async$state_machine__33934__auto__);

(statearr_35754[(1)] = (1));

return statearr_35754;
});
var cljs$core$async$state_machine__33934__auto____1 = (function (state_35736){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_35736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e35755){if((e35755 instanceof Object)){
var ex__33937__auto__ = e35755;
var statearr_35756_35770 = state_35736;
(statearr_35756_35770[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35771 = state_35736;
state_35736 = G__35771;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
cljs$core$async$state_machine__33934__auto__ = function(state_35736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33934__auto____1.call(this,state_35736);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33934__auto____0;
cljs$core$async$state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33934__auto____1;
return cljs$core$async$state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto___35759,out))
})();
var state__34025__auto__ = (function (){var statearr_35757 = f__34024__auto__.call(null);
(statearr_35757[(6)] = c__34023__auto___35759);

return statearr_35757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto___35759,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35773 = arguments.length;
switch (G__35773) {
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
var c__34023__auto___35839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto___35839,out){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto___35839,out){
return (function (state_35811){
var state_val_35812 = (state_35811[(1)]);
if((state_val_35812 === (7))){
var inst_35807 = (state_35811[(2)]);
var state_35811__$1 = state_35811;
var statearr_35813_35840 = state_35811__$1;
(statearr_35813_35840[(2)] = inst_35807);

(statearr_35813_35840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35812 === (1))){
var inst_35774 = (new Array(n));
var inst_35775 = inst_35774;
var inst_35776 = (0);
var state_35811__$1 = (function (){var statearr_35814 = state_35811;
(statearr_35814[(7)] = inst_35775);

(statearr_35814[(8)] = inst_35776);

return statearr_35814;
})();
var statearr_35815_35841 = state_35811__$1;
(statearr_35815_35841[(2)] = null);

(statearr_35815_35841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35812 === (4))){
var inst_35779 = (state_35811[(9)]);
var inst_35779__$1 = (state_35811[(2)]);
var inst_35780 = (inst_35779__$1 == null);
var inst_35781 = cljs.core.not.call(null,inst_35780);
var state_35811__$1 = (function (){var statearr_35816 = state_35811;
(statearr_35816[(9)] = inst_35779__$1);

return statearr_35816;
})();
if(inst_35781){
var statearr_35817_35842 = state_35811__$1;
(statearr_35817_35842[(1)] = (5));

} else {
var statearr_35818_35843 = state_35811__$1;
(statearr_35818_35843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35812 === (15))){
var inst_35801 = (state_35811[(2)]);
var state_35811__$1 = state_35811;
var statearr_35819_35844 = state_35811__$1;
(statearr_35819_35844[(2)] = inst_35801);

(statearr_35819_35844[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35812 === (13))){
var state_35811__$1 = state_35811;
var statearr_35820_35845 = state_35811__$1;
(statearr_35820_35845[(2)] = null);

(statearr_35820_35845[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35812 === (6))){
var inst_35776 = (state_35811[(8)]);
var inst_35797 = (inst_35776 > (0));
var state_35811__$1 = state_35811;
if(cljs.core.truth_(inst_35797)){
var statearr_35821_35846 = state_35811__$1;
(statearr_35821_35846[(1)] = (12));

} else {
var statearr_35822_35847 = state_35811__$1;
(statearr_35822_35847[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35812 === (3))){
var inst_35809 = (state_35811[(2)]);
var state_35811__$1 = state_35811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35811__$1,inst_35809);
} else {
if((state_val_35812 === (12))){
var inst_35775 = (state_35811[(7)]);
var inst_35799 = cljs.core.vec.call(null,inst_35775);
var state_35811__$1 = state_35811;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35811__$1,(15),out,inst_35799);
} else {
if((state_val_35812 === (2))){
var state_35811__$1 = state_35811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35811__$1,(4),ch);
} else {
if((state_val_35812 === (11))){
var inst_35791 = (state_35811[(2)]);
var inst_35792 = (new Array(n));
var inst_35775 = inst_35792;
var inst_35776 = (0);
var state_35811__$1 = (function (){var statearr_35823 = state_35811;
(statearr_35823[(10)] = inst_35791);

(statearr_35823[(7)] = inst_35775);

(statearr_35823[(8)] = inst_35776);

return statearr_35823;
})();
var statearr_35824_35848 = state_35811__$1;
(statearr_35824_35848[(2)] = null);

(statearr_35824_35848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35812 === (9))){
var inst_35775 = (state_35811[(7)]);
var inst_35789 = cljs.core.vec.call(null,inst_35775);
var state_35811__$1 = state_35811;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35811__$1,(11),out,inst_35789);
} else {
if((state_val_35812 === (5))){
var inst_35775 = (state_35811[(7)]);
var inst_35776 = (state_35811[(8)]);
var inst_35784 = (state_35811[(11)]);
var inst_35779 = (state_35811[(9)]);
var inst_35783 = (inst_35775[inst_35776] = inst_35779);
var inst_35784__$1 = (inst_35776 + (1));
var inst_35785 = (inst_35784__$1 < n);
var state_35811__$1 = (function (){var statearr_35825 = state_35811;
(statearr_35825[(12)] = inst_35783);

(statearr_35825[(11)] = inst_35784__$1);

return statearr_35825;
})();
if(cljs.core.truth_(inst_35785)){
var statearr_35826_35849 = state_35811__$1;
(statearr_35826_35849[(1)] = (8));

} else {
var statearr_35827_35850 = state_35811__$1;
(statearr_35827_35850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35812 === (14))){
var inst_35804 = (state_35811[(2)]);
var inst_35805 = cljs.core.async.close_BANG_.call(null,out);
var state_35811__$1 = (function (){var statearr_35829 = state_35811;
(statearr_35829[(13)] = inst_35804);

return statearr_35829;
})();
var statearr_35830_35851 = state_35811__$1;
(statearr_35830_35851[(2)] = inst_35805);

(statearr_35830_35851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35812 === (10))){
var inst_35795 = (state_35811[(2)]);
var state_35811__$1 = state_35811;
var statearr_35831_35852 = state_35811__$1;
(statearr_35831_35852[(2)] = inst_35795);

(statearr_35831_35852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35812 === (8))){
var inst_35775 = (state_35811[(7)]);
var inst_35784 = (state_35811[(11)]);
var tmp35828 = inst_35775;
var inst_35775__$1 = tmp35828;
var inst_35776 = inst_35784;
var state_35811__$1 = (function (){var statearr_35832 = state_35811;
(statearr_35832[(7)] = inst_35775__$1);

(statearr_35832[(8)] = inst_35776);

return statearr_35832;
})();
var statearr_35833_35853 = state_35811__$1;
(statearr_35833_35853[(2)] = null);

(statearr_35833_35853[(1)] = (2));


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
});})(c__34023__auto___35839,out))
;
return ((function (switch__33933__auto__,c__34023__auto___35839,out){
return (function() {
var cljs$core$async$state_machine__33934__auto__ = null;
var cljs$core$async$state_machine__33934__auto____0 = (function (){
var statearr_35834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35834[(0)] = cljs$core$async$state_machine__33934__auto__);

(statearr_35834[(1)] = (1));

return statearr_35834;
});
var cljs$core$async$state_machine__33934__auto____1 = (function (state_35811){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_35811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e35835){if((e35835 instanceof Object)){
var ex__33937__auto__ = e35835;
var statearr_35836_35854 = state_35811;
(statearr_35836_35854[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35855 = state_35811;
state_35811 = G__35855;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
cljs$core$async$state_machine__33934__auto__ = function(state_35811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33934__auto____1.call(this,state_35811);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33934__auto____0;
cljs$core$async$state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33934__auto____1;
return cljs$core$async$state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto___35839,out))
})();
var state__34025__auto__ = (function (){var statearr_35837 = f__34024__auto__.call(null);
(statearr_35837[(6)] = c__34023__auto___35839);

return statearr_35837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto___35839,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35857 = arguments.length;
switch (G__35857) {
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
var c__34023__auto___35927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto___35927,out){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto___35927,out){
return (function (state_35899){
var state_val_35900 = (state_35899[(1)]);
if((state_val_35900 === (7))){
var inst_35895 = (state_35899[(2)]);
var state_35899__$1 = state_35899;
var statearr_35901_35928 = state_35899__$1;
(statearr_35901_35928[(2)] = inst_35895);

(statearr_35901_35928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35900 === (1))){
var inst_35858 = [];
var inst_35859 = inst_35858;
var inst_35860 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35899__$1 = (function (){var statearr_35902 = state_35899;
(statearr_35902[(7)] = inst_35860);

(statearr_35902[(8)] = inst_35859);

return statearr_35902;
})();
var statearr_35903_35929 = state_35899__$1;
(statearr_35903_35929[(2)] = null);

(statearr_35903_35929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35900 === (4))){
var inst_35863 = (state_35899[(9)]);
var inst_35863__$1 = (state_35899[(2)]);
var inst_35864 = (inst_35863__$1 == null);
var inst_35865 = cljs.core.not.call(null,inst_35864);
var state_35899__$1 = (function (){var statearr_35904 = state_35899;
(statearr_35904[(9)] = inst_35863__$1);

return statearr_35904;
})();
if(inst_35865){
var statearr_35905_35930 = state_35899__$1;
(statearr_35905_35930[(1)] = (5));

} else {
var statearr_35906_35931 = state_35899__$1;
(statearr_35906_35931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35900 === (15))){
var inst_35889 = (state_35899[(2)]);
var state_35899__$1 = state_35899;
var statearr_35907_35932 = state_35899__$1;
(statearr_35907_35932[(2)] = inst_35889);

(statearr_35907_35932[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35900 === (13))){
var state_35899__$1 = state_35899;
var statearr_35908_35933 = state_35899__$1;
(statearr_35908_35933[(2)] = null);

(statearr_35908_35933[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35900 === (6))){
var inst_35859 = (state_35899[(8)]);
var inst_35884 = inst_35859.length;
var inst_35885 = (inst_35884 > (0));
var state_35899__$1 = state_35899;
if(cljs.core.truth_(inst_35885)){
var statearr_35909_35934 = state_35899__$1;
(statearr_35909_35934[(1)] = (12));

} else {
var statearr_35910_35935 = state_35899__$1;
(statearr_35910_35935[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35900 === (3))){
var inst_35897 = (state_35899[(2)]);
var state_35899__$1 = state_35899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35899__$1,inst_35897);
} else {
if((state_val_35900 === (12))){
var inst_35859 = (state_35899[(8)]);
var inst_35887 = cljs.core.vec.call(null,inst_35859);
var state_35899__$1 = state_35899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35899__$1,(15),out,inst_35887);
} else {
if((state_val_35900 === (2))){
var state_35899__$1 = state_35899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35899__$1,(4),ch);
} else {
if((state_val_35900 === (11))){
var inst_35867 = (state_35899[(10)]);
var inst_35863 = (state_35899[(9)]);
var inst_35877 = (state_35899[(2)]);
var inst_35878 = [];
var inst_35879 = inst_35878.push(inst_35863);
var inst_35859 = inst_35878;
var inst_35860 = inst_35867;
var state_35899__$1 = (function (){var statearr_35911 = state_35899;
(statearr_35911[(11)] = inst_35879);

(statearr_35911[(7)] = inst_35860);

(statearr_35911[(12)] = inst_35877);

(statearr_35911[(8)] = inst_35859);

return statearr_35911;
})();
var statearr_35912_35936 = state_35899__$1;
(statearr_35912_35936[(2)] = null);

(statearr_35912_35936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35900 === (9))){
var inst_35859 = (state_35899[(8)]);
var inst_35875 = cljs.core.vec.call(null,inst_35859);
var state_35899__$1 = state_35899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35899__$1,(11),out,inst_35875);
} else {
if((state_val_35900 === (5))){
var inst_35867 = (state_35899[(10)]);
var inst_35863 = (state_35899[(9)]);
var inst_35860 = (state_35899[(7)]);
var inst_35867__$1 = f.call(null,inst_35863);
var inst_35868 = cljs.core._EQ_.call(null,inst_35867__$1,inst_35860);
var inst_35869 = cljs.core.keyword_identical_QMARK_.call(null,inst_35860,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35870 = (inst_35868) || (inst_35869);
var state_35899__$1 = (function (){var statearr_35913 = state_35899;
(statearr_35913[(10)] = inst_35867__$1);

return statearr_35913;
})();
if(cljs.core.truth_(inst_35870)){
var statearr_35914_35937 = state_35899__$1;
(statearr_35914_35937[(1)] = (8));

} else {
var statearr_35915_35938 = state_35899__$1;
(statearr_35915_35938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35900 === (14))){
var inst_35892 = (state_35899[(2)]);
var inst_35893 = cljs.core.async.close_BANG_.call(null,out);
var state_35899__$1 = (function (){var statearr_35917 = state_35899;
(statearr_35917[(13)] = inst_35892);

return statearr_35917;
})();
var statearr_35918_35939 = state_35899__$1;
(statearr_35918_35939[(2)] = inst_35893);

(statearr_35918_35939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35900 === (10))){
var inst_35882 = (state_35899[(2)]);
var state_35899__$1 = state_35899;
var statearr_35919_35940 = state_35899__$1;
(statearr_35919_35940[(2)] = inst_35882);

(statearr_35919_35940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35900 === (8))){
var inst_35867 = (state_35899[(10)]);
var inst_35863 = (state_35899[(9)]);
var inst_35859 = (state_35899[(8)]);
var inst_35872 = inst_35859.push(inst_35863);
var tmp35916 = inst_35859;
var inst_35859__$1 = tmp35916;
var inst_35860 = inst_35867;
var state_35899__$1 = (function (){var statearr_35920 = state_35899;
(statearr_35920[(14)] = inst_35872);

(statearr_35920[(7)] = inst_35860);

(statearr_35920[(8)] = inst_35859__$1);

return statearr_35920;
})();
var statearr_35921_35941 = state_35899__$1;
(statearr_35921_35941[(2)] = null);

(statearr_35921_35941[(1)] = (2));


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
});})(c__34023__auto___35927,out))
;
return ((function (switch__33933__auto__,c__34023__auto___35927,out){
return (function() {
var cljs$core$async$state_machine__33934__auto__ = null;
var cljs$core$async$state_machine__33934__auto____0 = (function (){
var statearr_35922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35922[(0)] = cljs$core$async$state_machine__33934__auto__);

(statearr_35922[(1)] = (1));

return statearr_35922;
});
var cljs$core$async$state_machine__33934__auto____1 = (function (state_35899){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_35899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e35923){if((e35923 instanceof Object)){
var ex__33937__auto__ = e35923;
var statearr_35924_35942 = state_35899;
(statearr_35924_35942[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35943 = state_35899;
state_35899 = G__35943;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
cljs$core$async$state_machine__33934__auto__ = function(state_35899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33934__auto____1.call(this,state_35899);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33934__auto____0;
cljs$core$async$state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33934__auto____1;
return cljs$core$async$state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto___35927,out))
})();
var state__34025__auto__ = (function (){var statearr_35925 = f__34024__auto__.call(null);
(statearr_35925[(6)] = c__34023__auto___35927);

return statearr_35925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto___35927,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1503492617433
