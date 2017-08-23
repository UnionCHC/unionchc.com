// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('landing.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__39407__delegate = function (x){
if(cljs.core.truth_(landing.core.on_js_reload)){
return cljs.core.apply.call(null,landing.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'landing.core/on-js-reload' is missing");
}
};
var G__39407 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__39408__i = 0, G__39408__a = new Array(arguments.length -  0);
while (G__39408__i < G__39408__a.length) {G__39408__a[G__39408__i] = arguments[G__39408__i + 0]; ++G__39408__i;}
  x = new cljs.core.IndexedSeq(G__39408__a,0,null);
} 
return G__39407__delegate.call(this,x);};
G__39407.cljs$lang$maxFixedArity = 0;
G__39407.cljs$lang$applyTo = (function (arglist__39409){
var x = cljs.core.seq(arglist__39409);
return G__39407__delegate(x);
});
G__39407.cljs$core$IFn$_invoke$arity$variadic = G__39407__delegate;
return G__39407;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1503492622588
