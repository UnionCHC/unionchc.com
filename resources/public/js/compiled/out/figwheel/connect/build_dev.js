// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('landing.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__33753__delegate = function (x){
if(cljs.core.truth_(landing.core.on_js_reload)){
return cljs.core.apply.call(null,landing.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'landing.core/on-js-reload' is missing");
}
};
var G__33753 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__33754__i = 0, G__33754__a = new Array(arguments.length -  0);
while (G__33754__i < G__33754__a.length) {G__33754__a[G__33754__i] = arguments[G__33754__i + 0]; ++G__33754__i;}
  x = new cljs.core.IndexedSeq(G__33754__a,0,null);
} 
return G__33753__delegate.call(this,x);};
G__33753.cljs$lang$maxFixedArity = 0;
G__33753.cljs$lang$applyTo = (function (arglist__33755){
var x = cljs.core.seq(arglist__33755);
return G__33753__delegate(x);
});
G__33753.cljs$core$IFn$_invoke$arity$variadic = G__33753__delegate;
return G__33753;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1503487751083