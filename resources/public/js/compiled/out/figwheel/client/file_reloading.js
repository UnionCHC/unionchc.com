// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__30048__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30048__auto__){
return or__30048__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__30048__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
var or__30048__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30048__auto____$1)){
return or__30048__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37211_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37211_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__37212 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37213 = null;
var count__37214 = (0);
var i__37215 = (0);
while(true){
if((i__37215 < count__37214)){
var n = cljs.core._nth.call(null,chunk__37213,i__37215);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37216 = seq__37212;
var G__37217 = chunk__37213;
var G__37218 = count__37214;
var G__37219 = (i__37215 + (1));
seq__37212 = G__37216;
chunk__37213 = G__37217;
count__37214 = G__37218;
i__37215 = G__37219;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__37212);
if(temp__5278__auto__){
var seq__37212__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37212__$1)){
var c__30979__auto__ = cljs.core.chunk_first.call(null,seq__37212__$1);
var G__37220 = cljs.core.chunk_rest.call(null,seq__37212__$1);
var G__37221 = c__30979__auto__;
var G__37222 = cljs.core.count.call(null,c__30979__auto__);
var G__37223 = (0);
seq__37212 = G__37220;
chunk__37213 = G__37221;
count__37214 = G__37222;
i__37215 = G__37223;
continue;
} else {
var n = cljs.core.first.call(null,seq__37212__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37224 = cljs.core.next.call(null,seq__37212__$1);
var G__37225 = null;
var G__37226 = (0);
var G__37227 = (0);
seq__37212 = G__37224;
chunk__37213 = G__37225;
count__37214 = G__37226;
i__37215 = G__37227;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__37237_37245 = cljs.core.seq.call(null,deps);
var chunk__37238_37246 = null;
var count__37239_37247 = (0);
var i__37240_37248 = (0);
while(true){
if((i__37240_37248 < count__37239_37247)){
var dep_37249 = cljs.core._nth.call(null,chunk__37238_37246,i__37240_37248);
topo_sort_helper_STAR_.call(null,dep_37249,(depth + (1)),state);

var G__37250 = seq__37237_37245;
var G__37251 = chunk__37238_37246;
var G__37252 = count__37239_37247;
var G__37253 = (i__37240_37248 + (1));
seq__37237_37245 = G__37250;
chunk__37238_37246 = G__37251;
count__37239_37247 = G__37252;
i__37240_37248 = G__37253;
continue;
} else {
var temp__5278__auto___37254 = cljs.core.seq.call(null,seq__37237_37245);
if(temp__5278__auto___37254){
var seq__37237_37255__$1 = temp__5278__auto___37254;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37237_37255__$1)){
var c__30979__auto___37256 = cljs.core.chunk_first.call(null,seq__37237_37255__$1);
var G__37257 = cljs.core.chunk_rest.call(null,seq__37237_37255__$1);
var G__37258 = c__30979__auto___37256;
var G__37259 = cljs.core.count.call(null,c__30979__auto___37256);
var G__37260 = (0);
seq__37237_37245 = G__37257;
chunk__37238_37246 = G__37258;
count__37239_37247 = G__37259;
i__37240_37248 = G__37260;
continue;
} else {
var dep_37261 = cljs.core.first.call(null,seq__37237_37255__$1);
topo_sort_helper_STAR_.call(null,dep_37261,(depth + (1)),state);

var G__37262 = cljs.core.next.call(null,seq__37237_37255__$1);
var G__37263 = null;
var G__37264 = (0);
var G__37265 = (0);
seq__37237_37245 = G__37262;
chunk__37238_37246 = G__37263;
count__37239_37247 = G__37264;
i__37240_37248 = G__37265;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37241){
var vec__37242 = p__37241;
var seq__37243 = cljs.core.seq.call(null,vec__37242);
var first__37244 = cljs.core.first.call(null,seq__37243);
var seq__37243__$1 = cljs.core.next.call(null,seq__37243);
var x = first__37244;
var xs = seq__37243__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37242,seq__37243,first__37244,seq__37243__$1,x,xs,get_deps__$1){
return (function (p1__37228_SHARP_){
return clojure.set.difference.call(null,p1__37228_SHARP_,x);
});})(vec__37242,seq__37243,first__37244,seq__37243__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__37266 = cljs.core.seq.call(null,provides);
var chunk__37267 = null;
var count__37268 = (0);
var i__37269 = (0);
while(true){
if((i__37269 < count__37268)){
var prov = cljs.core._nth.call(null,chunk__37267,i__37269);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37270_37278 = cljs.core.seq.call(null,requires);
var chunk__37271_37279 = null;
var count__37272_37280 = (0);
var i__37273_37281 = (0);
while(true){
if((i__37273_37281 < count__37272_37280)){
var req_37282 = cljs.core._nth.call(null,chunk__37271_37279,i__37273_37281);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37282,prov);

var G__37283 = seq__37270_37278;
var G__37284 = chunk__37271_37279;
var G__37285 = count__37272_37280;
var G__37286 = (i__37273_37281 + (1));
seq__37270_37278 = G__37283;
chunk__37271_37279 = G__37284;
count__37272_37280 = G__37285;
i__37273_37281 = G__37286;
continue;
} else {
var temp__5278__auto___37287 = cljs.core.seq.call(null,seq__37270_37278);
if(temp__5278__auto___37287){
var seq__37270_37288__$1 = temp__5278__auto___37287;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37270_37288__$1)){
var c__30979__auto___37289 = cljs.core.chunk_first.call(null,seq__37270_37288__$1);
var G__37290 = cljs.core.chunk_rest.call(null,seq__37270_37288__$1);
var G__37291 = c__30979__auto___37289;
var G__37292 = cljs.core.count.call(null,c__30979__auto___37289);
var G__37293 = (0);
seq__37270_37278 = G__37290;
chunk__37271_37279 = G__37291;
count__37272_37280 = G__37292;
i__37273_37281 = G__37293;
continue;
} else {
var req_37294 = cljs.core.first.call(null,seq__37270_37288__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37294,prov);

var G__37295 = cljs.core.next.call(null,seq__37270_37288__$1);
var G__37296 = null;
var G__37297 = (0);
var G__37298 = (0);
seq__37270_37278 = G__37295;
chunk__37271_37279 = G__37296;
count__37272_37280 = G__37297;
i__37273_37281 = G__37298;
continue;
}
} else {
}
}
break;
}

var G__37299 = seq__37266;
var G__37300 = chunk__37267;
var G__37301 = count__37268;
var G__37302 = (i__37269 + (1));
seq__37266 = G__37299;
chunk__37267 = G__37300;
count__37268 = G__37301;
i__37269 = G__37302;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__37266);
if(temp__5278__auto__){
var seq__37266__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37266__$1)){
var c__30979__auto__ = cljs.core.chunk_first.call(null,seq__37266__$1);
var G__37303 = cljs.core.chunk_rest.call(null,seq__37266__$1);
var G__37304 = c__30979__auto__;
var G__37305 = cljs.core.count.call(null,c__30979__auto__);
var G__37306 = (0);
seq__37266 = G__37303;
chunk__37267 = G__37304;
count__37268 = G__37305;
i__37269 = G__37306;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37266__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37274_37307 = cljs.core.seq.call(null,requires);
var chunk__37275_37308 = null;
var count__37276_37309 = (0);
var i__37277_37310 = (0);
while(true){
if((i__37277_37310 < count__37276_37309)){
var req_37311 = cljs.core._nth.call(null,chunk__37275_37308,i__37277_37310);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37311,prov);

var G__37312 = seq__37274_37307;
var G__37313 = chunk__37275_37308;
var G__37314 = count__37276_37309;
var G__37315 = (i__37277_37310 + (1));
seq__37274_37307 = G__37312;
chunk__37275_37308 = G__37313;
count__37276_37309 = G__37314;
i__37277_37310 = G__37315;
continue;
} else {
var temp__5278__auto___37316__$1 = cljs.core.seq.call(null,seq__37274_37307);
if(temp__5278__auto___37316__$1){
var seq__37274_37317__$1 = temp__5278__auto___37316__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37274_37317__$1)){
var c__30979__auto___37318 = cljs.core.chunk_first.call(null,seq__37274_37317__$1);
var G__37319 = cljs.core.chunk_rest.call(null,seq__37274_37317__$1);
var G__37320 = c__30979__auto___37318;
var G__37321 = cljs.core.count.call(null,c__30979__auto___37318);
var G__37322 = (0);
seq__37274_37307 = G__37319;
chunk__37275_37308 = G__37320;
count__37276_37309 = G__37321;
i__37277_37310 = G__37322;
continue;
} else {
var req_37323 = cljs.core.first.call(null,seq__37274_37317__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37323,prov);

var G__37324 = cljs.core.next.call(null,seq__37274_37317__$1);
var G__37325 = null;
var G__37326 = (0);
var G__37327 = (0);
seq__37274_37307 = G__37324;
chunk__37275_37308 = G__37325;
count__37276_37309 = G__37326;
i__37277_37310 = G__37327;
continue;
}
} else {
}
}
break;
}

var G__37328 = cljs.core.next.call(null,seq__37266__$1);
var G__37329 = null;
var G__37330 = (0);
var G__37331 = (0);
seq__37266 = G__37328;
chunk__37267 = G__37329;
count__37268 = G__37330;
i__37269 = G__37331;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__37332_37336 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37333_37337 = null;
var count__37334_37338 = (0);
var i__37335_37339 = (0);
while(true){
if((i__37335_37339 < count__37334_37338)){
var ns_37340 = cljs.core._nth.call(null,chunk__37333_37337,i__37335_37339);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37340);

var G__37341 = seq__37332_37336;
var G__37342 = chunk__37333_37337;
var G__37343 = count__37334_37338;
var G__37344 = (i__37335_37339 + (1));
seq__37332_37336 = G__37341;
chunk__37333_37337 = G__37342;
count__37334_37338 = G__37343;
i__37335_37339 = G__37344;
continue;
} else {
var temp__5278__auto___37345 = cljs.core.seq.call(null,seq__37332_37336);
if(temp__5278__auto___37345){
var seq__37332_37346__$1 = temp__5278__auto___37345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37332_37346__$1)){
var c__30979__auto___37347 = cljs.core.chunk_first.call(null,seq__37332_37346__$1);
var G__37348 = cljs.core.chunk_rest.call(null,seq__37332_37346__$1);
var G__37349 = c__30979__auto___37347;
var G__37350 = cljs.core.count.call(null,c__30979__auto___37347);
var G__37351 = (0);
seq__37332_37336 = G__37348;
chunk__37333_37337 = G__37349;
count__37334_37338 = G__37350;
i__37335_37339 = G__37351;
continue;
} else {
var ns_37352 = cljs.core.first.call(null,seq__37332_37346__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37352);

var G__37353 = cljs.core.next.call(null,seq__37332_37346__$1);
var G__37354 = null;
var G__37355 = (0);
var G__37356 = (0);
seq__37332_37336 = G__37353;
chunk__37333_37337 = G__37354;
count__37334_37338 = G__37355;
i__37335_37339 = G__37356;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__30048__auto__ = goog.require__;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__37357__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37358__i = 0, G__37358__a = new Array(arguments.length -  0);
while (G__37358__i < G__37358__a.length) {G__37358__a[G__37358__i] = arguments[G__37358__i + 0]; ++G__37358__i;}
  args = new cljs.core.IndexedSeq(G__37358__a,0,null);
} 
return G__37357__delegate.call(this,args);};
G__37357.cljs$lang$maxFixedArity = 0;
G__37357.cljs$lang$applyTo = (function (arglist__37359){
var args = cljs.core.seq(arglist__37359);
return G__37357__delegate(args);
});
G__37357.cljs$core$IFn$_invoke$arity$variadic = G__37357__delegate;
return G__37357;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37360_SHARP_,p2__37361_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37360_SHARP_)].join('')),p2__37361_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37362_SHARP_,p2__37363_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37362_SHARP_)].join(''),p2__37363_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37364 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37364.addCallback(((function (G__37364){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37364))
);

G__37364.addErrback(((function (G__37364){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37364))
);

return G__37364;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37365 = cljs.core._EQ_;
var expr__37366 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37365.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37366))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__37365,expr__37366){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__37365,expr__37366))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__37365,expr__37366){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37368){if((e37368 instanceof Error)){
var e = e37368;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37368;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__37365,expr__37366))
} else {
if(cljs.core.truth_(pred__37365.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37366))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37365.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__37366))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37365.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37366))){
return ((function (pred__37365,expr__37366){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37369){if((e37369 instanceof Error)){
var e = e37369;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37369;

}
}})());
});
;})(pred__37365,expr__37366))
} else {
return ((function (pred__37365,expr__37366){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37365,expr__37366))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37370,callback){
var map__37371 = p__37370;
var map__37371__$1 = ((((!((map__37371 == null)))?((((map__37371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37371.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37371):map__37371);
var file_msg = map__37371__$1;
var request_url = cljs.core.get.call(null,map__37371__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__37371,map__37371__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37371,map__37371__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__34021__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34021__auto__){
return (function (){
var f__34022__auto__ = (function (){var switch__33931__auto__ = ((function (c__34021__auto__){
return (function (state_37395){
var state_val_37396 = (state_37395[(1)]);
if((state_val_37396 === (7))){
var inst_37391 = (state_37395[(2)]);
var state_37395__$1 = state_37395;
var statearr_37397_37414 = state_37395__$1;
(statearr_37397_37414[(2)] = inst_37391);

(statearr_37397_37414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (1))){
var state_37395__$1 = state_37395;
var statearr_37398_37415 = state_37395__$1;
(statearr_37398_37415[(2)] = null);

(statearr_37398_37415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (4))){
var inst_37375 = (state_37395[(7)]);
var inst_37375__$1 = (state_37395[(2)]);
var state_37395__$1 = (function (){var statearr_37399 = state_37395;
(statearr_37399[(7)] = inst_37375__$1);

return statearr_37399;
})();
if(cljs.core.truth_(inst_37375__$1)){
var statearr_37400_37416 = state_37395__$1;
(statearr_37400_37416[(1)] = (5));

} else {
var statearr_37401_37417 = state_37395__$1;
(statearr_37401_37417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (6))){
var state_37395__$1 = state_37395;
var statearr_37402_37418 = state_37395__$1;
(statearr_37402_37418[(2)] = null);

(statearr_37402_37418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (3))){
var inst_37393 = (state_37395[(2)]);
var state_37395__$1 = state_37395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37395__$1,inst_37393);
} else {
if((state_val_37396 === (2))){
var state_37395__$1 = state_37395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37395__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37396 === (11))){
var inst_37387 = (state_37395[(2)]);
var state_37395__$1 = (function (){var statearr_37403 = state_37395;
(statearr_37403[(8)] = inst_37387);

return statearr_37403;
})();
var statearr_37404_37419 = state_37395__$1;
(statearr_37404_37419[(2)] = null);

(statearr_37404_37419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (9))){
var inst_37381 = (state_37395[(9)]);
var inst_37379 = (state_37395[(10)]);
var inst_37383 = inst_37381.call(null,inst_37379);
var state_37395__$1 = state_37395;
var statearr_37405_37420 = state_37395__$1;
(statearr_37405_37420[(2)] = inst_37383);

(statearr_37405_37420[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (5))){
var inst_37375 = (state_37395[(7)]);
var inst_37377 = figwheel.client.file_reloading.blocking_load.call(null,inst_37375);
var state_37395__$1 = state_37395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37395__$1,(8),inst_37377);
} else {
if((state_val_37396 === (10))){
var inst_37379 = (state_37395[(10)]);
var inst_37385 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37379);
var state_37395__$1 = state_37395;
var statearr_37406_37421 = state_37395__$1;
(statearr_37406_37421[(2)] = inst_37385);

(statearr_37406_37421[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (8))){
var inst_37381 = (state_37395[(9)]);
var inst_37375 = (state_37395[(7)]);
var inst_37379 = (state_37395[(2)]);
var inst_37380 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37381__$1 = cljs.core.get.call(null,inst_37380,inst_37375);
var state_37395__$1 = (function (){var statearr_37407 = state_37395;
(statearr_37407[(9)] = inst_37381__$1);

(statearr_37407[(10)] = inst_37379);

return statearr_37407;
})();
if(cljs.core.truth_(inst_37381__$1)){
var statearr_37408_37422 = state_37395__$1;
(statearr_37408_37422[(1)] = (9));

} else {
var statearr_37409_37423 = state_37395__$1;
(statearr_37409_37423[(1)] = (10));

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
});})(c__34021__auto__))
;
return ((function (switch__33931__auto__,c__34021__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33932__auto__ = null;
var figwheel$client$file_reloading$state_machine__33932__auto____0 = (function (){
var statearr_37410 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37410[(0)] = figwheel$client$file_reloading$state_machine__33932__auto__);

(statearr_37410[(1)] = (1));

return statearr_37410;
});
var figwheel$client$file_reloading$state_machine__33932__auto____1 = (function (state_37395){
while(true){
var ret_value__33933__auto__ = (function (){try{while(true){
var result__33934__auto__ = switch__33931__auto__.call(null,state_37395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33934__auto__;
}
break;
}
}catch (e37411){if((e37411 instanceof Object)){
var ex__33935__auto__ = e37411;
var statearr_37412_37424 = state_37395;
(statearr_37412_37424[(5)] = ex__33935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37425 = state_37395;
state_37395 = G__37425;
continue;
} else {
return ret_value__33933__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33932__auto__ = function(state_37395){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33932__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33932__auto____1.call(this,state_37395);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33932__auto____0;
figwheel$client$file_reloading$state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33932__auto____1;
return figwheel$client$file_reloading$state_machine__33932__auto__;
})()
;})(switch__33931__auto__,c__34021__auto__))
})();
var state__34023__auto__ = (function (){var statearr_37413 = f__34022__auto__.call(null);
(statearr_37413[(6)] = c__34021__auto__);

return statearr_37413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34023__auto__);
});})(c__34021__auto__))
);

return c__34021__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37426,callback){
var map__37427 = p__37426;
var map__37427__$1 = ((((!((map__37427 == null)))?((((map__37427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37427):map__37427);
var file_msg = map__37427__$1;
var namespace = cljs.core.get.call(null,map__37427__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37427,map__37427__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37427,map__37427__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37429){
var map__37430 = p__37429;
var map__37430__$1 = ((((!((map__37430 == null)))?((((map__37430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37430):map__37430);
var file_msg = map__37430__$1;
var namespace = cljs.core.get.call(null,map__37430__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37432){
var map__37433 = p__37432;
var map__37433__$1 = ((((!((map__37433 == null)))?((((map__37433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37433.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37433):map__37433);
var file_msg = map__37433__$1;
var namespace = cljs.core.get.call(null,map__37433__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30036__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30036__auto__){
var or__30048__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
var or__30048__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30048__auto____$1)){
return or__30048__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30036__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37435,callback){
var map__37436 = p__37435;
var map__37436__$1 = ((((!((map__37436 == null)))?((((map__37436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37436.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37436):map__37436);
var file_msg = map__37436__$1;
var request_url = cljs.core.get.call(null,map__37436__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37436__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__34021__auto___37486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34021__auto___37486,out){
return (function (){
var f__34022__auto__ = (function (){var switch__33931__auto__ = ((function (c__34021__auto___37486,out){
return (function (state_37471){
var state_val_37472 = (state_37471[(1)]);
if((state_val_37472 === (1))){
var inst_37445 = cljs.core.seq.call(null,files);
var inst_37446 = cljs.core.first.call(null,inst_37445);
var inst_37447 = cljs.core.next.call(null,inst_37445);
var inst_37448 = files;
var state_37471__$1 = (function (){var statearr_37473 = state_37471;
(statearr_37473[(7)] = inst_37446);

(statearr_37473[(8)] = inst_37447);

(statearr_37473[(9)] = inst_37448);

return statearr_37473;
})();
var statearr_37474_37487 = state_37471__$1;
(statearr_37474_37487[(2)] = null);

(statearr_37474_37487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37472 === (2))){
var inst_37448 = (state_37471[(9)]);
var inst_37454 = (state_37471[(10)]);
var inst_37453 = cljs.core.seq.call(null,inst_37448);
var inst_37454__$1 = cljs.core.first.call(null,inst_37453);
var inst_37455 = cljs.core.next.call(null,inst_37453);
var inst_37456 = (inst_37454__$1 == null);
var inst_37457 = cljs.core.not.call(null,inst_37456);
var state_37471__$1 = (function (){var statearr_37475 = state_37471;
(statearr_37475[(10)] = inst_37454__$1);

(statearr_37475[(11)] = inst_37455);

return statearr_37475;
})();
if(inst_37457){
var statearr_37476_37488 = state_37471__$1;
(statearr_37476_37488[(1)] = (4));

} else {
var statearr_37477_37489 = state_37471__$1;
(statearr_37477_37489[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37472 === (3))){
var inst_37469 = (state_37471[(2)]);
var state_37471__$1 = state_37471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37471__$1,inst_37469);
} else {
if((state_val_37472 === (4))){
var inst_37454 = (state_37471[(10)]);
var inst_37459 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37454);
var state_37471__$1 = state_37471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37471__$1,(7),inst_37459);
} else {
if((state_val_37472 === (5))){
var inst_37465 = cljs.core.async.close_BANG_.call(null,out);
var state_37471__$1 = state_37471;
var statearr_37478_37490 = state_37471__$1;
(statearr_37478_37490[(2)] = inst_37465);

(statearr_37478_37490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37472 === (6))){
var inst_37467 = (state_37471[(2)]);
var state_37471__$1 = state_37471;
var statearr_37479_37491 = state_37471__$1;
(statearr_37479_37491[(2)] = inst_37467);

(statearr_37479_37491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37472 === (7))){
var inst_37455 = (state_37471[(11)]);
var inst_37461 = (state_37471[(2)]);
var inst_37462 = cljs.core.async.put_BANG_.call(null,out,inst_37461);
var inst_37448 = inst_37455;
var state_37471__$1 = (function (){var statearr_37480 = state_37471;
(statearr_37480[(9)] = inst_37448);

(statearr_37480[(12)] = inst_37462);

return statearr_37480;
})();
var statearr_37481_37492 = state_37471__$1;
(statearr_37481_37492[(2)] = null);

(statearr_37481_37492[(1)] = (2));


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
});})(c__34021__auto___37486,out))
;
return ((function (switch__33931__auto__,c__34021__auto___37486,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33932__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33932__auto____0 = (function (){
var statearr_37482 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37482[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33932__auto__);

(statearr_37482[(1)] = (1));

return statearr_37482;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33932__auto____1 = (function (state_37471){
while(true){
var ret_value__33933__auto__ = (function (){try{while(true){
var result__33934__auto__ = switch__33931__auto__.call(null,state_37471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33934__auto__;
}
break;
}
}catch (e37483){if((e37483 instanceof Object)){
var ex__33935__auto__ = e37483;
var statearr_37484_37493 = state_37471;
(statearr_37484_37493[(5)] = ex__33935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37494 = state_37471;
state_37471 = G__37494;
continue;
} else {
return ret_value__33933__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33932__auto__ = function(state_37471){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33932__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33932__auto____1.call(this,state_37471);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33932__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33932__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33932__auto__;
})()
;})(switch__33931__auto__,c__34021__auto___37486,out))
})();
var state__34023__auto__ = (function (){var statearr_37485 = f__34022__auto__.call(null);
(statearr_37485[(6)] = c__34021__auto___37486);

return statearr_37485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34023__auto__);
});})(c__34021__auto___37486,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37495,opts){
var map__37496 = p__37495;
var map__37496__$1 = ((((!((map__37496 == null)))?((((map__37496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37496):map__37496);
var eval_body = cljs.core.get.call(null,map__37496__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37496__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30036__auto__ = eval_body;
if(cljs.core.truth_(and__30036__auto__)){
return typeof eval_body === 'string';
} else {
return and__30036__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37498){var e = e37498;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5276__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__37499_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37499_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5276__auto__)){
var file_msg = temp__5276__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__37500){
var vec__37501 = p__37500;
var k = cljs.core.nth.call(null,vec__37501,(0),null);
var v = cljs.core.nth.call(null,vec__37501,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37504){
var vec__37505 = p__37504;
var k = cljs.core.nth.call(null,vec__37505,(0),null);
var v = cljs.core.nth.call(null,vec__37505,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37511,p__37512){
var map__37513 = p__37511;
var map__37513__$1 = ((((!((map__37513 == null)))?((((map__37513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37513.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37513):map__37513);
var opts = map__37513__$1;
var before_jsload = cljs.core.get.call(null,map__37513__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37513__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37513__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37514 = p__37512;
var map__37514__$1 = ((((!((map__37514 == null)))?((((map__37514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37514.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37514):map__37514);
var msg = map__37514__$1;
var files = cljs.core.get.call(null,map__37514__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37514__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37514__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34021__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34021__auto__,map__37513,map__37513__$1,opts,before_jsload,on_jsload,reload_dependents,map__37514,map__37514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34022__auto__ = (function (){var switch__33931__auto__ = ((function (c__34021__auto__,map__37513,map__37513__$1,opts,before_jsload,on_jsload,reload_dependents,map__37514,map__37514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37668){
var state_val_37669 = (state_37668[(1)]);
if((state_val_37669 === (7))){
var inst_37531 = (state_37668[(7)]);
var inst_37528 = (state_37668[(8)]);
var inst_37529 = (state_37668[(9)]);
var inst_37530 = (state_37668[(10)]);
var inst_37536 = cljs.core._nth.call(null,inst_37529,inst_37531);
var inst_37537 = figwheel.client.file_reloading.eval_body.call(null,inst_37536,opts);
var inst_37538 = (inst_37531 + (1));
var tmp37670 = inst_37528;
var tmp37671 = inst_37529;
var tmp37672 = inst_37530;
var inst_37528__$1 = tmp37670;
var inst_37529__$1 = tmp37671;
var inst_37530__$1 = tmp37672;
var inst_37531__$1 = inst_37538;
var state_37668__$1 = (function (){var statearr_37673 = state_37668;
(statearr_37673[(11)] = inst_37537);

(statearr_37673[(7)] = inst_37531__$1);

(statearr_37673[(8)] = inst_37528__$1);

(statearr_37673[(9)] = inst_37529__$1);

(statearr_37673[(10)] = inst_37530__$1);

return statearr_37673;
})();
var statearr_37674_37757 = state_37668__$1;
(statearr_37674_37757[(2)] = null);

(statearr_37674_37757[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (20))){
var inst_37571 = (state_37668[(12)]);
var inst_37579 = figwheel.client.file_reloading.sort_files.call(null,inst_37571);
var state_37668__$1 = state_37668;
var statearr_37675_37758 = state_37668__$1;
(statearr_37675_37758[(2)] = inst_37579);

(statearr_37675_37758[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (27))){
var state_37668__$1 = state_37668;
var statearr_37676_37759 = state_37668__$1;
(statearr_37676_37759[(2)] = null);

(statearr_37676_37759[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (1))){
var inst_37520 = (state_37668[(13)]);
var inst_37517 = before_jsload.call(null,files);
var inst_37518 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37519 = (function (){return ((function (inst_37520,inst_37517,inst_37518,state_val_37669,c__34021__auto__,map__37513,map__37513__$1,opts,before_jsload,on_jsload,reload_dependents,map__37514,map__37514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37508_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37508_SHARP_);
});
;})(inst_37520,inst_37517,inst_37518,state_val_37669,c__34021__auto__,map__37513,map__37513__$1,opts,before_jsload,on_jsload,reload_dependents,map__37514,map__37514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37520__$1 = cljs.core.filter.call(null,inst_37519,files);
var inst_37521 = cljs.core.not_empty.call(null,inst_37520__$1);
var state_37668__$1 = (function (){var statearr_37677 = state_37668;
(statearr_37677[(14)] = inst_37518);

(statearr_37677[(13)] = inst_37520__$1);

(statearr_37677[(15)] = inst_37517);

return statearr_37677;
})();
if(cljs.core.truth_(inst_37521)){
var statearr_37678_37760 = state_37668__$1;
(statearr_37678_37760[(1)] = (2));

} else {
var statearr_37679_37761 = state_37668__$1;
(statearr_37679_37761[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (24))){
var state_37668__$1 = state_37668;
var statearr_37680_37762 = state_37668__$1;
(statearr_37680_37762[(2)] = null);

(statearr_37680_37762[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (39))){
var inst_37621 = (state_37668[(16)]);
var state_37668__$1 = state_37668;
var statearr_37681_37763 = state_37668__$1;
(statearr_37681_37763[(2)] = inst_37621);

(statearr_37681_37763[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (46))){
var inst_37663 = (state_37668[(2)]);
var state_37668__$1 = state_37668;
var statearr_37682_37764 = state_37668__$1;
(statearr_37682_37764[(2)] = inst_37663);

(statearr_37682_37764[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (4))){
var inst_37565 = (state_37668[(2)]);
var inst_37566 = cljs.core.List.EMPTY;
var inst_37567 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37566);
var inst_37568 = (function (){return ((function (inst_37565,inst_37566,inst_37567,state_val_37669,c__34021__auto__,map__37513,map__37513__$1,opts,before_jsload,on_jsload,reload_dependents,map__37514,map__37514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37509_SHARP_){
var and__30036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37509_SHARP_);
if(cljs.core.truth_(and__30036__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37509_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37509_SHARP_)));
} else {
return and__30036__auto__;
}
});
;})(inst_37565,inst_37566,inst_37567,state_val_37669,c__34021__auto__,map__37513,map__37513__$1,opts,before_jsload,on_jsload,reload_dependents,map__37514,map__37514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37569 = cljs.core.filter.call(null,inst_37568,files);
var inst_37570 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37571 = cljs.core.concat.call(null,inst_37569,inst_37570);
var state_37668__$1 = (function (){var statearr_37683 = state_37668;
(statearr_37683[(17)] = inst_37565);

(statearr_37683[(18)] = inst_37567);

(statearr_37683[(12)] = inst_37571);

return statearr_37683;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37684_37765 = state_37668__$1;
(statearr_37684_37765[(1)] = (16));

} else {
var statearr_37685_37766 = state_37668__$1;
(statearr_37685_37766[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (15))){
var inst_37555 = (state_37668[(2)]);
var state_37668__$1 = state_37668;
var statearr_37686_37767 = state_37668__$1;
(statearr_37686_37767[(2)] = inst_37555);

(statearr_37686_37767[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (21))){
var inst_37581 = (state_37668[(19)]);
var inst_37581__$1 = (state_37668[(2)]);
var inst_37582 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37581__$1);
var state_37668__$1 = (function (){var statearr_37687 = state_37668;
(statearr_37687[(19)] = inst_37581__$1);

return statearr_37687;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37668__$1,(22),inst_37582);
} else {
if((state_val_37669 === (31))){
var inst_37666 = (state_37668[(2)]);
var state_37668__$1 = state_37668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37668__$1,inst_37666);
} else {
if((state_val_37669 === (32))){
var inst_37621 = (state_37668[(16)]);
var inst_37626 = inst_37621.cljs$lang$protocol_mask$partition0$;
var inst_37627 = (inst_37626 & (64));
var inst_37628 = inst_37621.cljs$core$ISeq$;
var inst_37629 = (cljs.core.PROTOCOL_SENTINEL === inst_37628);
var inst_37630 = (inst_37627) || (inst_37629);
var state_37668__$1 = state_37668;
if(cljs.core.truth_(inst_37630)){
var statearr_37688_37768 = state_37668__$1;
(statearr_37688_37768[(1)] = (35));

} else {
var statearr_37689_37769 = state_37668__$1;
(statearr_37689_37769[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (40))){
var inst_37643 = (state_37668[(20)]);
var inst_37642 = (state_37668[(2)]);
var inst_37643__$1 = cljs.core.get.call(null,inst_37642,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37644 = cljs.core.get.call(null,inst_37642,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37645 = cljs.core.not_empty.call(null,inst_37643__$1);
var state_37668__$1 = (function (){var statearr_37690 = state_37668;
(statearr_37690[(20)] = inst_37643__$1);

(statearr_37690[(21)] = inst_37644);

return statearr_37690;
})();
if(cljs.core.truth_(inst_37645)){
var statearr_37691_37770 = state_37668__$1;
(statearr_37691_37770[(1)] = (41));

} else {
var statearr_37692_37771 = state_37668__$1;
(statearr_37692_37771[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (33))){
var state_37668__$1 = state_37668;
var statearr_37693_37772 = state_37668__$1;
(statearr_37693_37772[(2)] = false);

(statearr_37693_37772[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (13))){
var inst_37541 = (state_37668[(22)]);
var inst_37545 = cljs.core.chunk_first.call(null,inst_37541);
var inst_37546 = cljs.core.chunk_rest.call(null,inst_37541);
var inst_37547 = cljs.core.count.call(null,inst_37545);
var inst_37528 = inst_37546;
var inst_37529 = inst_37545;
var inst_37530 = inst_37547;
var inst_37531 = (0);
var state_37668__$1 = (function (){var statearr_37694 = state_37668;
(statearr_37694[(7)] = inst_37531);

(statearr_37694[(8)] = inst_37528);

(statearr_37694[(9)] = inst_37529);

(statearr_37694[(10)] = inst_37530);

return statearr_37694;
})();
var statearr_37695_37773 = state_37668__$1;
(statearr_37695_37773[(2)] = null);

(statearr_37695_37773[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (22))){
var inst_37589 = (state_37668[(23)]);
var inst_37585 = (state_37668[(24)]);
var inst_37584 = (state_37668[(25)]);
var inst_37581 = (state_37668[(19)]);
var inst_37584__$1 = (state_37668[(2)]);
var inst_37585__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37584__$1);
var inst_37586 = (function (){var all_files = inst_37581;
var res_SINGLEQUOTE_ = inst_37584__$1;
var res = inst_37585__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37589,inst_37585,inst_37584,inst_37581,inst_37584__$1,inst_37585__$1,state_val_37669,c__34021__auto__,map__37513,map__37513__$1,opts,before_jsload,on_jsload,reload_dependents,map__37514,map__37514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37510_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37510_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37589,inst_37585,inst_37584,inst_37581,inst_37584__$1,inst_37585__$1,state_val_37669,c__34021__auto__,map__37513,map__37513__$1,opts,before_jsload,on_jsload,reload_dependents,map__37514,map__37514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37587 = cljs.core.filter.call(null,inst_37586,inst_37584__$1);
var inst_37588 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37589__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37588);
var inst_37590 = cljs.core.not_empty.call(null,inst_37589__$1);
var state_37668__$1 = (function (){var statearr_37696 = state_37668;
(statearr_37696[(26)] = inst_37587);

(statearr_37696[(23)] = inst_37589__$1);

(statearr_37696[(24)] = inst_37585__$1);

(statearr_37696[(25)] = inst_37584__$1);

return statearr_37696;
})();
if(cljs.core.truth_(inst_37590)){
var statearr_37697_37774 = state_37668__$1;
(statearr_37697_37774[(1)] = (23));

} else {
var statearr_37698_37775 = state_37668__$1;
(statearr_37698_37775[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (36))){
var state_37668__$1 = state_37668;
var statearr_37699_37776 = state_37668__$1;
(statearr_37699_37776[(2)] = false);

(statearr_37699_37776[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (41))){
var inst_37643 = (state_37668[(20)]);
var inst_37647 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37648 = cljs.core.map.call(null,inst_37647,inst_37643);
var inst_37649 = cljs.core.pr_str.call(null,inst_37648);
var inst_37650 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37649)].join('');
var inst_37651 = figwheel.client.utils.log.call(null,inst_37650);
var state_37668__$1 = state_37668;
var statearr_37700_37777 = state_37668__$1;
(statearr_37700_37777[(2)] = inst_37651);

(statearr_37700_37777[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (43))){
var inst_37644 = (state_37668[(21)]);
var inst_37654 = (state_37668[(2)]);
var inst_37655 = cljs.core.not_empty.call(null,inst_37644);
var state_37668__$1 = (function (){var statearr_37701 = state_37668;
(statearr_37701[(27)] = inst_37654);

return statearr_37701;
})();
if(cljs.core.truth_(inst_37655)){
var statearr_37702_37778 = state_37668__$1;
(statearr_37702_37778[(1)] = (44));

} else {
var statearr_37703_37779 = state_37668__$1;
(statearr_37703_37779[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (29))){
var inst_37587 = (state_37668[(26)]);
var inst_37621 = (state_37668[(16)]);
var inst_37589 = (state_37668[(23)]);
var inst_37585 = (state_37668[(24)]);
var inst_37584 = (state_37668[(25)]);
var inst_37581 = (state_37668[(19)]);
var inst_37617 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37620 = (function (){var all_files = inst_37581;
var res_SINGLEQUOTE_ = inst_37584;
var res = inst_37585;
var files_not_loaded = inst_37587;
var dependencies_that_loaded = inst_37589;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37587,inst_37621,inst_37589,inst_37585,inst_37584,inst_37581,inst_37617,state_val_37669,c__34021__auto__,map__37513,map__37513__$1,opts,before_jsload,on_jsload,reload_dependents,map__37514,map__37514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37619){
var map__37704 = p__37619;
var map__37704__$1 = ((((!((map__37704 == null)))?((((map__37704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37704.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37704):map__37704);
var namespace = cljs.core.get.call(null,map__37704__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37587,inst_37621,inst_37589,inst_37585,inst_37584,inst_37581,inst_37617,state_val_37669,c__34021__auto__,map__37513,map__37513__$1,opts,before_jsload,on_jsload,reload_dependents,map__37514,map__37514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37621__$1 = cljs.core.group_by.call(null,inst_37620,inst_37587);
var inst_37623 = (inst_37621__$1 == null);
var inst_37624 = cljs.core.not.call(null,inst_37623);
var state_37668__$1 = (function (){var statearr_37706 = state_37668;
(statearr_37706[(16)] = inst_37621__$1);

(statearr_37706[(28)] = inst_37617);

return statearr_37706;
})();
if(inst_37624){
var statearr_37707_37780 = state_37668__$1;
(statearr_37707_37780[(1)] = (32));

} else {
var statearr_37708_37781 = state_37668__$1;
(statearr_37708_37781[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (44))){
var inst_37644 = (state_37668[(21)]);
var inst_37657 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37644);
var inst_37658 = cljs.core.pr_str.call(null,inst_37657);
var inst_37659 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37658)].join('');
var inst_37660 = figwheel.client.utils.log.call(null,inst_37659);
var state_37668__$1 = state_37668;
var statearr_37709_37782 = state_37668__$1;
(statearr_37709_37782[(2)] = inst_37660);

(statearr_37709_37782[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (6))){
var inst_37562 = (state_37668[(2)]);
var state_37668__$1 = state_37668;
var statearr_37710_37783 = state_37668__$1;
(statearr_37710_37783[(2)] = inst_37562);

(statearr_37710_37783[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (28))){
var inst_37587 = (state_37668[(26)]);
var inst_37614 = (state_37668[(2)]);
var inst_37615 = cljs.core.not_empty.call(null,inst_37587);
var state_37668__$1 = (function (){var statearr_37711 = state_37668;
(statearr_37711[(29)] = inst_37614);

return statearr_37711;
})();
if(cljs.core.truth_(inst_37615)){
var statearr_37712_37784 = state_37668__$1;
(statearr_37712_37784[(1)] = (29));

} else {
var statearr_37713_37785 = state_37668__$1;
(statearr_37713_37785[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (25))){
var inst_37585 = (state_37668[(24)]);
var inst_37601 = (state_37668[(2)]);
var inst_37602 = cljs.core.not_empty.call(null,inst_37585);
var state_37668__$1 = (function (){var statearr_37714 = state_37668;
(statearr_37714[(30)] = inst_37601);

return statearr_37714;
})();
if(cljs.core.truth_(inst_37602)){
var statearr_37715_37786 = state_37668__$1;
(statearr_37715_37786[(1)] = (26));

} else {
var statearr_37716_37787 = state_37668__$1;
(statearr_37716_37787[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (34))){
var inst_37637 = (state_37668[(2)]);
var state_37668__$1 = state_37668;
if(cljs.core.truth_(inst_37637)){
var statearr_37717_37788 = state_37668__$1;
(statearr_37717_37788[(1)] = (38));

} else {
var statearr_37718_37789 = state_37668__$1;
(statearr_37718_37789[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (17))){
var state_37668__$1 = state_37668;
var statearr_37719_37790 = state_37668__$1;
(statearr_37719_37790[(2)] = recompile_dependents);

(statearr_37719_37790[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (3))){
var state_37668__$1 = state_37668;
var statearr_37720_37791 = state_37668__$1;
(statearr_37720_37791[(2)] = null);

(statearr_37720_37791[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (12))){
var inst_37558 = (state_37668[(2)]);
var state_37668__$1 = state_37668;
var statearr_37721_37792 = state_37668__$1;
(statearr_37721_37792[(2)] = inst_37558);

(statearr_37721_37792[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (2))){
var inst_37520 = (state_37668[(13)]);
var inst_37527 = cljs.core.seq.call(null,inst_37520);
var inst_37528 = inst_37527;
var inst_37529 = null;
var inst_37530 = (0);
var inst_37531 = (0);
var state_37668__$1 = (function (){var statearr_37722 = state_37668;
(statearr_37722[(7)] = inst_37531);

(statearr_37722[(8)] = inst_37528);

(statearr_37722[(9)] = inst_37529);

(statearr_37722[(10)] = inst_37530);

return statearr_37722;
})();
var statearr_37723_37793 = state_37668__$1;
(statearr_37723_37793[(2)] = null);

(statearr_37723_37793[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (23))){
var inst_37587 = (state_37668[(26)]);
var inst_37589 = (state_37668[(23)]);
var inst_37585 = (state_37668[(24)]);
var inst_37584 = (state_37668[(25)]);
var inst_37581 = (state_37668[(19)]);
var inst_37592 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37594 = (function (){var all_files = inst_37581;
var res_SINGLEQUOTE_ = inst_37584;
var res = inst_37585;
var files_not_loaded = inst_37587;
var dependencies_that_loaded = inst_37589;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37587,inst_37589,inst_37585,inst_37584,inst_37581,inst_37592,state_val_37669,c__34021__auto__,map__37513,map__37513__$1,opts,before_jsload,on_jsload,reload_dependents,map__37514,map__37514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37593){
var map__37724 = p__37593;
var map__37724__$1 = ((((!((map__37724 == null)))?((((map__37724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37724):map__37724);
var request_url = cljs.core.get.call(null,map__37724__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37587,inst_37589,inst_37585,inst_37584,inst_37581,inst_37592,state_val_37669,c__34021__auto__,map__37513,map__37513__$1,opts,before_jsload,on_jsload,reload_dependents,map__37514,map__37514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37595 = cljs.core.reverse.call(null,inst_37589);
var inst_37596 = cljs.core.map.call(null,inst_37594,inst_37595);
var inst_37597 = cljs.core.pr_str.call(null,inst_37596);
var inst_37598 = figwheel.client.utils.log.call(null,inst_37597);
var state_37668__$1 = (function (){var statearr_37726 = state_37668;
(statearr_37726[(31)] = inst_37592);

return statearr_37726;
})();
var statearr_37727_37794 = state_37668__$1;
(statearr_37727_37794[(2)] = inst_37598);

(statearr_37727_37794[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (35))){
var state_37668__$1 = state_37668;
var statearr_37728_37795 = state_37668__$1;
(statearr_37728_37795[(2)] = true);

(statearr_37728_37795[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (19))){
var inst_37571 = (state_37668[(12)]);
var inst_37577 = figwheel.client.file_reloading.expand_files.call(null,inst_37571);
var state_37668__$1 = state_37668;
var statearr_37729_37796 = state_37668__$1;
(statearr_37729_37796[(2)] = inst_37577);

(statearr_37729_37796[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (11))){
var state_37668__$1 = state_37668;
var statearr_37730_37797 = state_37668__$1;
(statearr_37730_37797[(2)] = null);

(statearr_37730_37797[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (9))){
var inst_37560 = (state_37668[(2)]);
var state_37668__$1 = state_37668;
var statearr_37731_37798 = state_37668__$1;
(statearr_37731_37798[(2)] = inst_37560);

(statearr_37731_37798[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (5))){
var inst_37531 = (state_37668[(7)]);
var inst_37530 = (state_37668[(10)]);
var inst_37533 = (inst_37531 < inst_37530);
var inst_37534 = inst_37533;
var state_37668__$1 = state_37668;
if(cljs.core.truth_(inst_37534)){
var statearr_37732_37799 = state_37668__$1;
(statearr_37732_37799[(1)] = (7));

} else {
var statearr_37733_37800 = state_37668__$1;
(statearr_37733_37800[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (14))){
var inst_37541 = (state_37668[(22)]);
var inst_37550 = cljs.core.first.call(null,inst_37541);
var inst_37551 = figwheel.client.file_reloading.eval_body.call(null,inst_37550,opts);
var inst_37552 = cljs.core.next.call(null,inst_37541);
var inst_37528 = inst_37552;
var inst_37529 = null;
var inst_37530 = (0);
var inst_37531 = (0);
var state_37668__$1 = (function (){var statearr_37734 = state_37668;
(statearr_37734[(32)] = inst_37551);

(statearr_37734[(7)] = inst_37531);

(statearr_37734[(8)] = inst_37528);

(statearr_37734[(9)] = inst_37529);

(statearr_37734[(10)] = inst_37530);

return statearr_37734;
})();
var statearr_37735_37801 = state_37668__$1;
(statearr_37735_37801[(2)] = null);

(statearr_37735_37801[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (45))){
var state_37668__$1 = state_37668;
var statearr_37736_37802 = state_37668__$1;
(statearr_37736_37802[(2)] = null);

(statearr_37736_37802[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (26))){
var inst_37587 = (state_37668[(26)]);
var inst_37589 = (state_37668[(23)]);
var inst_37585 = (state_37668[(24)]);
var inst_37584 = (state_37668[(25)]);
var inst_37581 = (state_37668[(19)]);
var inst_37604 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37606 = (function (){var all_files = inst_37581;
var res_SINGLEQUOTE_ = inst_37584;
var res = inst_37585;
var files_not_loaded = inst_37587;
var dependencies_that_loaded = inst_37589;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37587,inst_37589,inst_37585,inst_37584,inst_37581,inst_37604,state_val_37669,c__34021__auto__,map__37513,map__37513__$1,opts,before_jsload,on_jsload,reload_dependents,map__37514,map__37514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37605){
var map__37737 = p__37605;
var map__37737__$1 = ((((!((map__37737 == null)))?((((map__37737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37737):map__37737);
var namespace = cljs.core.get.call(null,map__37737__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37737__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37587,inst_37589,inst_37585,inst_37584,inst_37581,inst_37604,state_val_37669,c__34021__auto__,map__37513,map__37513__$1,opts,before_jsload,on_jsload,reload_dependents,map__37514,map__37514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37607 = cljs.core.map.call(null,inst_37606,inst_37585);
var inst_37608 = cljs.core.pr_str.call(null,inst_37607);
var inst_37609 = figwheel.client.utils.log.call(null,inst_37608);
var inst_37610 = (function (){var all_files = inst_37581;
var res_SINGLEQUOTE_ = inst_37584;
var res = inst_37585;
var files_not_loaded = inst_37587;
var dependencies_that_loaded = inst_37589;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37587,inst_37589,inst_37585,inst_37584,inst_37581,inst_37604,inst_37606,inst_37607,inst_37608,inst_37609,state_val_37669,c__34021__auto__,map__37513,map__37513__$1,opts,before_jsload,on_jsload,reload_dependents,map__37514,map__37514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37587,inst_37589,inst_37585,inst_37584,inst_37581,inst_37604,inst_37606,inst_37607,inst_37608,inst_37609,state_val_37669,c__34021__auto__,map__37513,map__37513__$1,opts,before_jsload,on_jsload,reload_dependents,map__37514,map__37514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37611 = setTimeout(inst_37610,(10));
var state_37668__$1 = (function (){var statearr_37739 = state_37668;
(statearr_37739[(33)] = inst_37604);

(statearr_37739[(34)] = inst_37609);

return statearr_37739;
})();
var statearr_37740_37803 = state_37668__$1;
(statearr_37740_37803[(2)] = inst_37611);

(statearr_37740_37803[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (16))){
var state_37668__$1 = state_37668;
var statearr_37741_37804 = state_37668__$1;
(statearr_37741_37804[(2)] = reload_dependents);

(statearr_37741_37804[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (38))){
var inst_37621 = (state_37668[(16)]);
var inst_37639 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37621);
var state_37668__$1 = state_37668;
var statearr_37742_37805 = state_37668__$1;
(statearr_37742_37805[(2)] = inst_37639);

(statearr_37742_37805[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (30))){
var state_37668__$1 = state_37668;
var statearr_37743_37806 = state_37668__$1;
(statearr_37743_37806[(2)] = null);

(statearr_37743_37806[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (10))){
var inst_37541 = (state_37668[(22)]);
var inst_37543 = cljs.core.chunked_seq_QMARK_.call(null,inst_37541);
var state_37668__$1 = state_37668;
if(inst_37543){
var statearr_37744_37807 = state_37668__$1;
(statearr_37744_37807[(1)] = (13));

} else {
var statearr_37745_37808 = state_37668__$1;
(statearr_37745_37808[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (18))){
var inst_37575 = (state_37668[(2)]);
var state_37668__$1 = state_37668;
if(cljs.core.truth_(inst_37575)){
var statearr_37746_37809 = state_37668__$1;
(statearr_37746_37809[(1)] = (19));

} else {
var statearr_37747_37810 = state_37668__$1;
(statearr_37747_37810[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (42))){
var state_37668__$1 = state_37668;
var statearr_37748_37811 = state_37668__$1;
(statearr_37748_37811[(2)] = null);

(statearr_37748_37811[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (37))){
var inst_37634 = (state_37668[(2)]);
var state_37668__$1 = state_37668;
var statearr_37749_37812 = state_37668__$1;
(statearr_37749_37812[(2)] = inst_37634);

(statearr_37749_37812[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (8))){
var inst_37541 = (state_37668[(22)]);
var inst_37528 = (state_37668[(8)]);
var inst_37541__$1 = cljs.core.seq.call(null,inst_37528);
var state_37668__$1 = (function (){var statearr_37750 = state_37668;
(statearr_37750[(22)] = inst_37541__$1);

return statearr_37750;
})();
if(inst_37541__$1){
var statearr_37751_37813 = state_37668__$1;
(statearr_37751_37813[(1)] = (10));

} else {
var statearr_37752_37814 = state_37668__$1;
(statearr_37752_37814[(1)] = (11));

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
}
});})(c__34021__auto__,map__37513,map__37513__$1,opts,before_jsload,on_jsload,reload_dependents,map__37514,map__37514__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33931__auto__,c__34021__auto__,map__37513,map__37513__$1,opts,before_jsload,on_jsload,reload_dependents,map__37514,map__37514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33932__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33932__auto____0 = (function (){
var statearr_37753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37753[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33932__auto__);

(statearr_37753[(1)] = (1));

return statearr_37753;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33932__auto____1 = (function (state_37668){
while(true){
var ret_value__33933__auto__ = (function (){try{while(true){
var result__33934__auto__ = switch__33931__auto__.call(null,state_37668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33934__auto__;
}
break;
}
}catch (e37754){if((e37754 instanceof Object)){
var ex__33935__auto__ = e37754;
var statearr_37755_37815 = state_37668;
(statearr_37755_37815[(5)] = ex__33935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37816 = state_37668;
state_37668 = G__37816;
continue;
} else {
return ret_value__33933__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33932__auto__ = function(state_37668){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33932__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33932__auto____1.call(this,state_37668);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33932__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33932__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33932__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33932__auto__;
})()
;})(switch__33931__auto__,c__34021__auto__,map__37513,map__37513__$1,opts,before_jsload,on_jsload,reload_dependents,map__37514,map__37514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34023__auto__ = (function (){var statearr_37756 = f__34022__auto__.call(null);
(statearr_37756[(6)] = c__34021__auto__);

return statearr_37756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34023__auto__);
});})(c__34021__auto__,map__37513,map__37513__$1,opts,before_jsload,on_jsload,reload_dependents,map__37514,map__37514__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34021__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37819,link){
var map__37820 = p__37819;
var map__37820__$1 = ((((!((map__37820 == null)))?((((map__37820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37820.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37820):map__37820);
var file = cljs.core.get.call(null,map__37820__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__37820,map__37820__$1,file){
return (function (p1__37817_SHARP_,p2__37818_SHARP_){
if(cljs.core._EQ_.call(null,p1__37817_SHARP_,p2__37818_SHARP_)){
return p1__37817_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__37820,map__37820__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37823){
var map__37824 = p__37823;
var map__37824__$1 = ((((!((map__37824 == null)))?((((map__37824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37824.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37824):map__37824);
var match_length = cljs.core.get.call(null,map__37824__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37824__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37822_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37822_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5278__auto__)){
var res = temp__5278__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37826_SHARP_,p2__37827_SHARP_){
return cljs.core.assoc.call(null,p1__37826_SHARP_,cljs.core.get.call(null,p2__37827_SHARP_,key),p2__37827_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5276__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5276__auto__)){
var link = temp__5276__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5276__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5276__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_37828 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37828);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37828);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37829,p__37830){
var map__37831 = p__37829;
var map__37831__$1 = ((((!((map__37831 == null)))?((((map__37831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37831):map__37831);
var on_cssload = cljs.core.get.call(null,map__37831__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37832 = p__37830;
var map__37832__$1 = ((((!((map__37832 == null)))?((((map__37832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37832):map__37832);
var files_msg = map__37832__$1;
var files = cljs.core.get.call(null,map__37832__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5278__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5278__auto__)){
var f_datas = temp__5278__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1503485730849
