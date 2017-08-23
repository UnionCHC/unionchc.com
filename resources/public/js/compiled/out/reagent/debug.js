// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__31886__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__31886 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31887__i = 0, G__31887__a = new Array(arguments.length -  0);
while (G__31887__i < G__31887__a.length) {G__31887__a[G__31887__i] = arguments[G__31887__i + 0]; ++G__31887__i;}
  args = new cljs.core.IndexedSeq(G__31887__a,0,null);
} 
return G__31886__delegate.call(this,args);};
G__31886.cljs$lang$maxFixedArity = 0;
G__31886.cljs$lang$applyTo = (function (arglist__31888){
var args = cljs.core.seq(arglist__31888);
return G__31886__delegate(args);
});
G__31886.cljs$core$IFn$_invoke$arity$variadic = G__31886__delegate;
return G__31886;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__31889__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__31889 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31890__i = 0, G__31890__a = new Array(arguments.length -  0);
while (G__31890__i < G__31890__a.length) {G__31890__a[G__31890__i] = arguments[G__31890__i + 0]; ++G__31890__i;}
  args = new cljs.core.IndexedSeq(G__31890__a,0,null);
} 
return G__31889__delegate.call(this,args);};
G__31889.cljs$lang$maxFixedArity = 0;
G__31889.cljs$lang$applyTo = (function (arglist__31891){
var args = cljs.core.seq(arglist__31891);
return G__31889__delegate(args);
});
G__31889.cljs$core$IFn$_invoke$arity$variadic = G__31889__delegate;
return G__31889;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1503492613320
