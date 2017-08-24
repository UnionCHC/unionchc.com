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
var G__32129__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32129 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32130__i = 0, G__32130__a = new Array(arguments.length -  0);
while (G__32130__i < G__32130__a.length) {G__32130__a[G__32130__i] = arguments[G__32130__i + 0]; ++G__32130__i;}
  args = new cljs.core.IndexedSeq(G__32130__a,0,null);
} 
return G__32129__delegate.call(this,args);};
G__32129.cljs$lang$maxFixedArity = 0;
G__32129.cljs$lang$applyTo = (function (arglist__32131){
var args = cljs.core.seq(arglist__32131);
return G__32129__delegate(args);
});
G__32129.cljs$core$IFn$_invoke$arity$variadic = G__32129__delegate;
return G__32129;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__32132__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32133__i = 0, G__32133__a = new Array(arguments.length -  0);
while (G__32133__i < G__32133__a.length) {G__32133__a[G__32133__i] = arguments[G__32133__i + 0]; ++G__32133__i;}
  args = new cljs.core.IndexedSeq(G__32133__a,0,null);
} 
return G__32132__delegate.call(this,args);};
G__32132.cljs$lang$maxFixedArity = 0;
G__32132.cljs$lang$applyTo = (function (arglist__32134){
var args = cljs.core.seq(arglist__32134);
return G__32132__delegate(args);
});
G__32132.cljs$core$IFn$_invoke$arity$variadic = G__32132__delegate;
return G__32132;
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

//# sourceMappingURL=debug.js.map?rel=1503547298748
