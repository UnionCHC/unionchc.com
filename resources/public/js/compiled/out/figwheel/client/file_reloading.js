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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37213_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37213_SHARP_));
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
var seq__37214 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37215 = null;
var count__37216 = (0);
var i__37217 = (0);
while(true){
if((i__37217 < count__37216)){
var n = cljs.core._nth.call(null,chunk__37215,i__37217);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37218 = seq__37214;
var G__37219 = chunk__37215;
var G__37220 = count__37216;
var G__37221 = (i__37217 + (1));
seq__37214 = G__37218;
chunk__37215 = G__37219;
count__37216 = G__37220;
i__37217 = G__37221;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__37214);
if(temp__5278__auto__){
var seq__37214__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37214__$1)){
var c__30979__auto__ = cljs.core.chunk_first.call(null,seq__37214__$1);
var G__37222 = cljs.core.chunk_rest.call(null,seq__37214__$1);
var G__37223 = c__30979__auto__;
var G__37224 = cljs.core.count.call(null,c__30979__auto__);
var G__37225 = (0);
seq__37214 = G__37222;
chunk__37215 = G__37223;
count__37216 = G__37224;
i__37217 = G__37225;
continue;
} else {
var n = cljs.core.first.call(null,seq__37214__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37226 = cljs.core.next.call(null,seq__37214__$1);
var G__37227 = null;
var G__37228 = (0);
var G__37229 = (0);
seq__37214 = G__37226;
chunk__37215 = G__37227;
count__37216 = G__37228;
i__37217 = G__37229;
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

var seq__37239_37247 = cljs.core.seq.call(null,deps);
var chunk__37240_37248 = null;
var count__37241_37249 = (0);
var i__37242_37250 = (0);
while(true){
if((i__37242_37250 < count__37241_37249)){
var dep_37251 = cljs.core._nth.call(null,chunk__37240_37248,i__37242_37250);
topo_sort_helper_STAR_.call(null,dep_37251,(depth + (1)),state);

var G__37252 = seq__37239_37247;
var G__37253 = chunk__37240_37248;
var G__37254 = count__37241_37249;
var G__37255 = (i__37242_37250 + (1));
seq__37239_37247 = G__37252;
chunk__37240_37248 = G__37253;
count__37241_37249 = G__37254;
i__37242_37250 = G__37255;
continue;
} else {
var temp__5278__auto___37256 = cljs.core.seq.call(null,seq__37239_37247);
if(temp__5278__auto___37256){
var seq__37239_37257__$1 = temp__5278__auto___37256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37239_37257__$1)){
var c__30979__auto___37258 = cljs.core.chunk_first.call(null,seq__37239_37257__$1);
var G__37259 = cljs.core.chunk_rest.call(null,seq__37239_37257__$1);
var G__37260 = c__30979__auto___37258;
var G__37261 = cljs.core.count.call(null,c__30979__auto___37258);
var G__37262 = (0);
seq__37239_37247 = G__37259;
chunk__37240_37248 = G__37260;
count__37241_37249 = G__37261;
i__37242_37250 = G__37262;
continue;
} else {
var dep_37263 = cljs.core.first.call(null,seq__37239_37257__$1);
topo_sort_helper_STAR_.call(null,dep_37263,(depth + (1)),state);

var G__37264 = cljs.core.next.call(null,seq__37239_37257__$1);
var G__37265 = null;
var G__37266 = (0);
var G__37267 = (0);
seq__37239_37247 = G__37264;
chunk__37240_37248 = G__37265;
count__37241_37249 = G__37266;
i__37242_37250 = G__37267;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37243){
var vec__37244 = p__37243;
var seq__37245 = cljs.core.seq.call(null,vec__37244);
var first__37246 = cljs.core.first.call(null,seq__37245);
var seq__37245__$1 = cljs.core.next.call(null,seq__37245);
var x = first__37246;
var xs = seq__37245__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37244,seq__37245,first__37246,seq__37245__$1,x,xs,get_deps__$1){
return (function (p1__37230_SHARP_){
return clojure.set.difference.call(null,p1__37230_SHARP_,x);
});})(vec__37244,seq__37245,first__37246,seq__37245__$1,x,xs,get_deps__$1))
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
var seq__37268 = cljs.core.seq.call(null,provides);
var chunk__37269 = null;
var count__37270 = (0);
var i__37271 = (0);
while(true){
if((i__37271 < count__37270)){
var prov = cljs.core._nth.call(null,chunk__37269,i__37271);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37272_37280 = cljs.core.seq.call(null,requires);
var chunk__37273_37281 = null;
var count__37274_37282 = (0);
var i__37275_37283 = (0);
while(true){
if((i__37275_37283 < count__37274_37282)){
var req_37284 = cljs.core._nth.call(null,chunk__37273_37281,i__37275_37283);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37284,prov);

var G__37285 = seq__37272_37280;
var G__37286 = chunk__37273_37281;
var G__37287 = count__37274_37282;
var G__37288 = (i__37275_37283 + (1));
seq__37272_37280 = G__37285;
chunk__37273_37281 = G__37286;
count__37274_37282 = G__37287;
i__37275_37283 = G__37288;
continue;
} else {
var temp__5278__auto___37289 = cljs.core.seq.call(null,seq__37272_37280);
if(temp__5278__auto___37289){
var seq__37272_37290__$1 = temp__5278__auto___37289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37272_37290__$1)){
var c__30979__auto___37291 = cljs.core.chunk_first.call(null,seq__37272_37290__$1);
var G__37292 = cljs.core.chunk_rest.call(null,seq__37272_37290__$1);
var G__37293 = c__30979__auto___37291;
var G__37294 = cljs.core.count.call(null,c__30979__auto___37291);
var G__37295 = (0);
seq__37272_37280 = G__37292;
chunk__37273_37281 = G__37293;
count__37274_37282 = G__37294;
i__37275_37283 = G__37295;
continue;
} else {
var req_37296 = cljs.core.first.call(null,seq__37272_37290__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37296,prov);

var G__37297 = cljs.core.next.call(null,seq__37272_37290__$1);
var G__37298 = null;
var G__37299 = (0);
var G__37300 = (0);
seq__37272_37280 = G__37297;
chunk__37273_37281 = G__37298;
count__37274_37282 = G__37299;
i__37275_37283 = G__37300;
continue;
}
} else {
}
}
break;
}

var G__37301 = seq__37268;
var G__37302 = chunk__37269;
var G__37303 = count__37270;
var G__37304 = (i__37271 + (1));
seq__37268 = G__37301;
chunk__37269 = G__37302;
count__37270 = G__37303;
i__37271 = G__37304;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__37268);
if(temp__5278__auto__){
var seq__37268__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37268__$1)){
var c__30979__auto__ = cljs.core.chunk_first.call(null,seq__37268__$1);
var G__37305 = cljs.core.chunk_rest.call(null,seq__37268__$1);
var G__37306 = c__30979__auto__;
var G__37307 = cljs.core.count.call(null,c__30979__auto__);
var G__37308 = (0);
seq__37268 = G__37305;
chunk__37269 = G__37306;
count__37270 = G__37307;
i__37271 = G__37308;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37268__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37276_37309 = cljs.core.seq.call(null,requires);
var chunk__37277_37310 = null;
var count__37278_37311 = (0);
var i__37279_37312 = (0);
while(true){
if((i__37279_37312 < count__37278_37311)){
var req_37313 = cljs.core._nth.call(null,chunk__37277_37310,i__37279_37312);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37313,prov);

var G__37314 = seq__37276_37309;
var G__37315 = chunk__37277_37310;
var G__37316 = count__37278_37311;
var G__37317 = (i__37279_37312 + (1));
seq__37276_37309 = G__37314;
chunk__37277_37310 = G__37315;
count__37278_37311 = G__37316;
i__37279_37312 = G__37317;
continue;
} else {
var temp__5278__auto___37318__$1 = cljs.core.seq.call(null,seq__37276_37309);
if(temp__5278__auto___37318__$1){
var seq__37276_37319__$1 = temp__5278__auto___37318__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37276_37319__$1)){
var c__30979__auto___37320 = cljs.core.chunk_first.call(null,seq__37276_37319__$1);
var G__37321 = cljs.core.chunk_rest.call(null,seq__37276_37319__$1);
var G__37322 = c__30979__auto___37320;
var G__37323 = cljs.core.count.call(null,c__30979__auto___37320);
var G__37324 = (0);
seq__37276_37309 = G__37321;
chunk__37277_37310 = G__37322;
count__37278_37311 = G__37323;
i__37279_37312 = G__37324;
continue;
} else {
var req_37325 = cljs.core.first.call(null,seq__37276_37319__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37325,prov);

var G__37326 = cljs.core.next.call(null,seq__37276_37319__$1);
var G__37327 = null;
var G__37328 = (0);
var G__37329 = (0);
seq__37276_37309 = G__37326;
chunk__37277_37310 = G__37327;
count__37278_37311 = G__37328;
i__37279_37312 = G__37329;
continue;
}
} else {
}
}
break;
}

var G__37330 = cljs.core.next.call(null,seq__37268__$1);
var G__37331 = null;
var G__37332 = (0);
var G__37333 = (0);
seq__37268 = G__37330;
chunk__37269 = G__37331;
count__37270 = G__37332;
i__37271 = G__37333;
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
var seq__37334_37338 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37335_37339 = null;
var count__37336_37340 = (0);
var i__37337_37341 = (0);
while(true){
if((i__37337_37341 < count__37336_37340)){
var ns_37342 = cljs.core._nth.call(null,chunk__37335_37339,i__37337_37341);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37342);

var G__37343 = seq__37334_37338;
var G__37344 = chunk__37335_37339;
var G__37345 = count__37336_37340;
var G__37346 = (i__37337_37341 + (1));
seq__37334_37338 = G__37343;
chunk__37335_37339 = G__37344;
count__37336_37340 = G__37345;
i__37337_37341 = G__37346;
continue;
} else {
var temp__5278__auto___37347 = cljs.core.seq.call(null,seq__37334_37338);
if(temp__5278__auto___37347){
var seq__37334_37348__$1 = temp__5278__auto___37347;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37334_37348__$1)){
var c__30979__auto___37349 = cljs.core.chunk_first.call(null,seq__37334_37348__$1);
var G__37350 = cljs.core.chunk_rest.call(null,seq__37334_37348__$1);
var G__37351 = c__30979__auto___37349;
var G__37352 = cljs.core.count.call(null,c__30979__auto___37349);
var G__37353 = (0);
seq__37334_37338 = G__37350;
chunk__37335_37339 = G__37351;
count__37336_37340 = G__37352;
i__37337_37341 = G__37353;
continue;
} else {
var ns_37354 = cljs.core.first.call(null,seq__37334_37348__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37354);

var G__37355 = cljs.core.next.call(null,seq__37334_37348__$1);
var G__37356 = null;
var G__37357 = (0);
var G__37358 = (0);
seq__37334_37338 = G__37355;
chunk__37335_37339 = G__37356;
count__37336_37340 = G__37357;
i__37337_37341 = G__37358;
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
var G__37359__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37359 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37360__i = 0, G__37360__a = new Array(arguments.length -  0);
while (G__37360__i < G__37360__a.length) {G__37360__a[G__37360__i] = arguments[G__37360__i + 0]; ++G__37360__i;}
  args = new cljs.core.IndexedSeq(G__37360__a,0,null);
} 
return G__37359__delegate.call(this,args);};
G__37359.cljs$lang$maxFixedArity = 0;
G__37359.cljs$lang$applyTo = (function (arglist__37361){
var args = cljs.core.seq(arglist__37361);
return G__37359__delegate(args);
});
G__37359.cljs$core$IFn$_invoke$arity$variadic = G__37359__delegate;
return G__37359;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37362_SHARP_,p2__37363_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37362_SHARP_)].join('')),p2__37363_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37364_SHARP_,p2__37365_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37364_SHARP_)].join(''),p2__37365_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37366 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37366.addCallback(((function (G__37366){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37366))
);

G__37366.addErrback(((function (G__37366){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37366))
);

return G__37366;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37367 = cljs.core._EQ_;
var expr__37368 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37367.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37368))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__37367,expr__37368){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__37367,expr__37368))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__37367,expr__37368){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37370){if((e37370 instanceof Error)){
var e = e37370;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37370;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__37367,expr__37368))
} else {
if(cljs.core.truth_(pred__37367.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37368))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37367.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__37368))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37367.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37368))){
return ((function (pred__37367,expr__37368){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37371){if((e37371 instanceof Error)){
var e = e37371;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37371;

}
}})());
});
;})(pred__37367,expr__37368))
} else {
return ((function (pred__37367,expr__37368){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37367,expr__37368))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37372,callback){
var map__37373 = p__37372;
var map__37373__$1 = ((((!((map__37373 == null)))?((((map__37373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37373):map__37373);
var file_msg = map__37373__$1;
var request_url = cljs.core.get.call(null,map__37373__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__37373,map__37373__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37373,map__37373__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__34023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto__){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto__){
return (function (state_37397){
var state_val_37398 = (state_37397[(1)]);
if((state_val_37398 === (7))){
var inst_37393 = (state_37397[(2)]);
var state_37397__$1 = state_37397;
var statearr_37399_37416 = state_37397__$1;
(statearr_37399_37416[(2)] = inst_37393);

(statearr_37399_37416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (1))){
var state_37397__$1 = state_37397;
var statearr_37400_37417 = state_37397__$1;
(statearr_37400_37417[(2)] = null);

(statearr_37400_37417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (4))){
var inst_37377 = (state_37397[(7)]);
var inst_37377__$1 = (state_37397[(2)]);
var state_37397__$1 = (function (){var statearr_37401 = state_37397;
(statearr_37401[(7)] = inst_37377__$1);

return statearr_37401;
})();
if(cljs.core.truth_(inst_37377__$1)){
var statearr_37402_37418 = state_37397__$1;
(statearr_37402_37418[(1)] = (5));

} else {
var statearr_37403_37419 = state_37397__$1;
(statearr_37403_37419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (6))){
var state_37397__$1 = state_37397;
var statearr_37404_37420 = state_37397__$1;
(statearr_37404_37420[(2)] = null);

(statearr_37404_37420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (3))){
var inst_37395 = (state_37397[(2)]);
var state_37397__$1 = state_37397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37397__$1,inst_37395);
} else {
if((state_val_37398 === (2))){
var state_37397__$1 = state_37397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37397__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37398 === (11))){
var inst_37389 = (state_37397[(2)]);
var state_37397__$1 = (function (){var statearr_37405 = state_37397;
(statearr_37405[(8)] = inst_37389);

return statearr_37405;
})();
var statearr_37406_37421 = state_37397__$1;
(statearr_37406_37421[(2)] = null);

(statearr_37406_37421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (9))){
var inst_37381 = (state_37397[(9)]);
var inst_37383 = (state_37397[(10)]);
var inst_37385 = inst_37383.call(null,inst_37381);
var state_37397__$1 = state_37397;
var statearr_37407_37422 = state_37397__$1;
(statearr_37407_37422[(2)] = inst_37385);

(statearr_37407_37422[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (5))){
var inst_37377 = (state_37397[(7)]);
var inst_37379 = figwheel.client.file_reloading.blocking_load.call(null,inst_37377);
var state_37397__$1 = state_37397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37397__$1,(8),inst_37379);
} else {
if((state_val_37398 === (10))){
var inst_37381 = (state_37397[(9)]);
var inst_37387 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37381);
var state_37397__$1 = state_37397;
var statearr_37408_37423 = state_37397__$1;
(statearr_37408_37423[(2)] = inst_37387);

(statearr_37408_37423[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37398 === (8))){
var inst_37377 = (state_37397[(7)]);
var inst_37383 = (state_37397[(10)]);
var inst_37381 = (state_37397[(2)]);
var inst_37382 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37383__$1 = cljs.core.get.call(null,inst_37382,inst_37377);
var state_37397__$1 = (function (){var statearr_37409 = state_37397;
(statearr_37409[(9)] = inst_37381);

(statearr_37409[(10)] = inst_37383__$1);

return statearr_37409;
})();
if(cljs.core.truth_(inst_37383__$1)){
var statearr_37410_37424 = state_37397__$1;
(statearr_37410_37424[(1)] = (9));

} else {
var statearr_37411_37425 = state_37397__$1;
(statearr_37411_37425[(1)] = (10));

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
});})(c__34023__auto__))
;
return ((function (switch__33933__auto__,c__34023__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33934__auto__ = null;
var figwheel$client$file_reloading$state_machine__33934__auto____0 = (function (){
var statearr_37412 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37412[(0)] = figwheel$client$file_reloading$state_machine__33934__auto__);

(statearr_37412[(1)] = (1));

return statearr_37412;
});
var figwheel$client$file_reloading$state_machine__33934__auto____1 = (function (state_37397){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_37397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e37413){if((e37413 instanceof Object)){
var ex__33937__auto__ = e37413;
var statearr_37414_37426 = state_37397;
(statearr_37414_37426[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37427 = state_37397;
state_37397 = G__37427;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33934__auto__ = function(state_37397){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33934__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33934__auto____1.call(this,state_37397);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33934__auto____0;
figwheel$client$file_reloading$state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33934__auto____1;
return figwheel$client$file_reloading$state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto__))
})();
var state__34025__auto__ = (function (){var statearr_37415 = f__34024__auto__.call(null);
(statearr_37415[(6)] = c__34023__auto__);

return statearr_37415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto__))
);

return c__34023__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37428,callback){
var map__37429 = p__37428;
var map__37429__$1 = ((((!((map__37429 == null)))?((((map__37429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37429):map__37429);
var file_msg = map__37429__$1;
var namespace = cljs.core.get.call(null,map__37429__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37429,map__37429__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37429,map__37429__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37431){
var map__37432 = p__37431;
var map__37432__$1 = ((((!((map__37432 == null)))?((((map__37432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37432.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37432):map__37432);
var file_msg = map__37432__$1;
var namespace = cljs.core.get.call(null,map__37432__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37434){
var map__37435 = p__37434;
var map__37435__$1 = ((((!((map__37435 == null)))?((((map__37435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37435.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37435):map__37435);
var file_msg = map__37435__$1;
var namespace = cljs.core.get.call(null,map__37435__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37437,callback){
var map__37438 = p__37437;
var map__37438__$1 = ((((!((map__37438 == null)))?((((map__37438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37438):map__37438);
var file_msg = map__37438__$1;
var request_url = cljs.core.get.call(null,map__37438__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37438__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__34023__auto___37488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto___37488,out){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto___37488,out){
return (function (state_37473){
var state_val_37474 = (state_37473[(1)]);
if((state_val_37474 === (1))){
var inst_37447 = cljs.core.seq.call(null,files);
var inst_37448 = cljs.core.first.call(null,inst_37447);
var inst_37449 = cljs.core.next.call(null,inst_37447);
var inst_37450 = files;
var state_37473__$1 = (function (){var statearr_37475 = state_37473;
(statearr_37475[(7)] = inst_37450);

(statearr_37475[(8)] = inst_37449);

(statearr_37475[(9)] = inst_37448);

return statearr_37475;
})();
var statearr_37476_37489 = state_37473__$1;
(statearr_37476_37489[(2)] = null);

(statearr_37476_37489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37474 === (2))){
var inst_37450 = (state_37473[(7)]);
var inst_37456 = (state_37473[(10)]);
var inst_37455 = cljs.core.seq.call(null,inst_37450);
var inst_37456__$1 = cljs.core.first.call(null,inst_37455);
var inst_37457 = cljs.core.next.call(null,inst_37455);
var inst_37458 = (inst_37456__$1 == null);
var inst_37459 = cljs.core.not.call(null,inst_37458);
var state_37473__$1 = (function (){var statearr_37477 = state_37473;
(statearr_37477[(10)] = inst_37456__$1);

(statearr_37477[(11)] = inst_37457);

return statearr_37477;
})();
if(inst_37459){
var statearr_37478_37490 = state_37473__$1;
(statearr_37478_37490[(1)] = (4));

} else {
var statearr_37479_37491 = state_37473__$1;
(statearr_37479_37491[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37474 === (3))){
var inst_37471 = (state_37473[(2)]);
var state_37473__$1 = state_37473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37473__$1,inst_37471);
} else {
if((state_val_37474 === (4))){
var inst_37456 = (state_37473[(10)]);
var inst_37461 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37456);
var state_37473__$1 = state_37473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37473__$1,(7),inst_37461);
} else {
if((state_val_37474 === (5))){
var inst_37467 = cljs.core.async.close_BANG_.call(null,out);
var state_37473__$1 = state_37473;
var statearr_37480_37492 = state_37473__$1;
(statearr_37480_37492[(2)] = inst_37467);

(statearr_37480_37492[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37474 === (6))){
var inst_37469 = (state_37473[(2)]);
var state_37473__$1 = state_37473;
var statearr_37481_37493 = state_37473__$1;
(statearr_37481_37493[(2)] = inst_37469);

(statearr_37481_37493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37474 === (7))){
var inst_37457 = (state_37473[(11)]);
var inst_37463 = (state_37473[(2)]);
var inst_37464 = cljs.core.async.put_BANG_.call(null,out,inst_37463);
var inst_37450 = inst_37457;
var state_37473__$1 = (function (){var statearr_37482 = state_37473;
(statearr_37482[(7)] = inst_37450);

(statearr_37482[(12)] = inst_37464);

return statearr_37482;
})();
var statearr_37483_37494 = state_37473__$1;
(statearr_37483_37494[(2)] = null);

(statearr_37483_37494[(1)] = (2));


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
});})(c__34023__auto___37488,out))
;
return ((function (switch__33933__auto__,c__34023__auto___37488,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33934__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33934__auto____0 = (function (){
var statearr_37484 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37484[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33934__auto__);

(statearr_37484[(1)] = (1));

return statearr_37484;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33934__auto____1 = (function (state_37473){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_37473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e37485){if((e37485 instanceof Object)){
var ex__33937__auto__ = e37485;
var statearr_37486_37495 = state_37473;
(statearr_37486_37495[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37496 = state_37473;
state_37473 = G__37496;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33934__auto__ = function(state_37473){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33934__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33934__auto____1.call(this,state_37473);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33934__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33934__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto___37488,out))
})();
var state__34025__auto__ = (function (){var statearr_37487 = f__34024__auto__.call(null);
(statearr_37487[(6)] = c__34023__auto___37488);

return statearr_37487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto___37488,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37497,opts){
var map__37498 = p__37497;
var map__37498__$1 = ((((!((map__37498 == null)))?((((map__37498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37498.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37498):map__37498);
var eval_body = cljs.core.get.call(null,map__37498__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37498__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e37500){var e = e37500;
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
return (function (p1__37501_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37501_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__37502){
var vec__37503 = p__37502;
var k = cljs.core.nth.call(null,vec__37503,(0),null);
var v = cljs.core.nth.call(null,vec__37503,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37506){
var vec__37507 = p__37506;
var k = cljs.core.nth.call(null,vec__37507,(0),null);
var v = cljs.core.nth.call(null,vec__37507,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37513,p__37514){
var map__37515 = p__37513;
var map__37515__$1 = ((((!((map__37515 == null)))?((((map__37515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37515):map__37515);
var opts = map__37515__$1;
var before_jsload = cljs.core.get.call(null,map__37515__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37515__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37515__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37516 = p__37514;
var map__37516__$1 = ((((!((map__37516 == null)))?((((map__37516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37516.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37516):map__37516);
var msg = map__37516__$1;
var files = cljs.core.get.call(null,map__37516__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37516__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37516__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto__,map__37515,map__37515__$1,opts,before_jsload,on_jsload,reload_dependents,map__37516,map__37516__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto__,map__37515,map__37515__$1,opts,before_jsload,on_jsload,reload_dependents,map__37516,map__37516__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37670){
var state_val_37671 = (state_37670[(1)]);
if((state_val_37671 === (7))){
var inst_37533 = (state_37670[(7)]);
var inst_37531 = (state_37670[(8)]);
var inst_37532 = (state_37670[(9)]);
var inst_37530 = (state_37670[(10)]);
var inst_37538 = cljs.core._nth.call(null,inst_37531,inst_37533);
var inst_37539 = figwheel.client.file_reloading.eval_body.call(null,inst_37538,opts);
var inst_37540 = (inst_37533 + (1));
var tmp37672 = inst_37531;
var tmp37673 = inst_37532;
var tmp37674 = inst_37530;
var inst_37530__$1 = tmp37674;
var inst_37531__$1 = tmp37672;
var inst_37532__$1 = tmp37673;
var inst_37533__$1 = inst_37540;
var state_37670__$1 = (function (){var statearr_37675 = state_37670;
(statearr_37675[(11)] = inst_37539);

(statearr_37675[(7)] = inst_37533__$1);

(statearr_37675[(8)] = inst_37531__$1);

(statearr_37675[(9)] = inst_37532__$1);

(statearr_37675[(10)] = inst_37530__$1);

return statearr_37675;
})();
var statearr_37676_37759 = state_37670__$1;
(statearr_37676_37759[(2)] = null);

(statearr_37676_37759[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (20))){
var inst_37573 = (state_37670[(12)]);
var inst_37581 = figwheel.client.file_reloading.sort_files.call(null,inst_37573);
var state_37670__$1 = state_37670;
var statearr_37677_37760 = state_37670__$1;
(statearr_37677_37760[(2)] = inst_37581);

(statearr_37677_37760[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (27))){
var state_37670__$1 = state_37670;
var statearr_37678_37761 = state_37670__$1;
(statearr_37678_37761[(2)] = null);

(statearr_37678_37761[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (1))){
var inst_37522 = (state_37670[(13)]);
var inst_37519 = before_jsload.call(null,files);
var inst_37520 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37521 = (function (){return ((function (inst_37522,inst_37519,inst_37520,state_val_37671,c__34023__auto__,map__37515,map__37515__$1,opts,before_jsload,on_jsload,reload_dependents,map__37516,map__37516__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37510_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37510_SHARP_);
});
;})(inst_37522,inst_37519,inst_37520,state_val_37671,c__34023__auto__,map__37515,map__37515__$1,opts,before_jsload,on_jsload,reload_dependents,map__37516,map__37516__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37522__$1 = cljs.core.filter.call(null,inst_37521,files);
var inst_37523 = cljs.core.not_empty.call(null,inst_37522__$1);
var state_37670__$1 = (function (){var statearr_37679 = state_37670;
(statearr_37679[(13)] = inst_37522__$1);

(statearr_37679[(14)] = inst_37520);

(statearr_37679[(15)] = inst_37519);

return statearr_37679;
})();
if(cljs.core.truth_(inst_37523)){
var statearr_37680_37762 = state_37670__$1;
(statearr_37680_37762[(1)] = (2));

} else {
var statearr_37681_37763 = state_37670__$1;
(statearr_37681_37763[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (24))){
var state_37670__$1 = state_37670;
var statearr_37682_37764 = state_37670__$1;
(statearr_37682_37764[(2)] = null);

(statearr_37682_37764[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (39))){
var inst_37623 = (state_37670[(16)]);
var state_37670__$1 = state_37670;
var statearr_37683_37765 = state_37670__$1;
(statearr_37683_37765[(2)] = inst_37623);

(statearr_37683_37765[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (46))){
var inst_37665 = (state_37670[(2)]);
var state_37670__$1 = state_37670;
var statearr_37684_37766 = state_37670__$1;
(statearr_37684_37766[(2)] = inst_37665);

(statearr_37684_37766[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (4))){
var inst_37567 = (state_37670[(2)]);
var inst_37568 = cljs.core.List.EMPTY;
var inst_37569 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37568);
var inst_37570 = (function (){return ((function (inst_37567,inst_37568,inst_37569,state_val_37671,c__34023__auto__,map__37515,map__37515__$1,opts,before_jsload,on_jsload,reload_dependents,map__37516,map__37516__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37511_SHARP_){
var and__30036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37511_SHARP_);
if(cljs.core.truth_(and__30036__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37511_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37511_SHARP_)));
} else {
return and__30036__auto__;
}
});
;})(inst_37567,inst_37568,inst_37569,state_val_37671,c__34023__auto__,map__37515,map__37515__$1,opts,before_jsload,on_jsload,reload_dependents,map__37516,map__37516__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37571 = cljs.core.filter.call(null,inst_37570,files);
var inst_37572 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37573 = cljs.core.concat.call(null,inst_37571,inst_37572);
var state_37670__$1 = (function (){var statearr_37685 = state_37670;
(statearr_37685[(17)] = inst_37567);

(statearr_37685[(12)] = inst_37573);

(statearr_37685[(18)] = inst_37569);

return statearr_37685;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37686_37767 = state_37670__$1;
(statearr_37686_37767[(1)] = (16));

} else {
var statearr_37687_37768 = state_37670__$1;
(statearr_37687_37768[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (15))){
var inst_37557 = (state_37670[(2)]);
var state_37670__$1 = state_37670;
var statearr_37688_37769 = state_37670__$1;
(statearr_37688_37769[(2)] = inst_37557);

(statearr_37688_37769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (21))){
var inst_37583 = (state_37670[(19)]);
var inst_37583__$1 = (state_37670[(2)]);
var inst_37584 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37583__$1);
var state_37670__$1 = (function (){var statearr_37689 = state_37670;
(statearr_37689[(19)] = inst_37583__$1);

return statearr_37689;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37670__$1,(22),inst_37584);
} else {
if((state_val_37671 === (31))){
var inst_37668 = (state_37670[(2)]);
var state_37670__$1 = state_37670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37670__$1,inst_37668);
} else {
if((state_val_37671 === (32))){
var inst_37623 = (state_37670[(16)]);
var inst_37628 = inst_37623.cljs$lang$protocol_mask$partition0$;
var inst_37629 = (inst_37628 & (64));
var inst_37630 = inst_37623.cljs$core$ISeq$;
var inst_37631 = (cljs.core.PROTOCOL_SENTINEL === inst_37630);
var inst_37632 = (inst_37629) || (inst_37631);
var state_37670__$1 = state_37670;
if(cljs.core.truth_(inst_37632)){
var statearr_37690_37770 = state_37670__$1;
(statearr_37690_37770[(1)] = (35));

} else {
var statearr_37691_37771 = state_37670__$1;
(statearr_37691_37771[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (40))){
var inst_37645 = (state_37670[(20)]);
var inst_37644 = (state_37670[(2)]);
var inst_37645__$1 = cljs.core.get.call(null,inst_37644,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37646 = cljs.core.get.call(null,inst_37644,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37647 = cljs.core.not_empty.call(null,inst_37645__$1);
var state_37670__$1 = (function (){var statearr_37692 = state_37670;
(statearr_37692[(21)] = inst_37646);

(statearr_37692[(20)] = inst_37645__$1);

return statearr_37692;
})();
if(cljs.core.truth_(inst_37647)){
var statearr_37693_37772 = state_37670__$1;
(statearr_37693_37772[(1)] = (41));

} else {
var statearr_37694_37773 = state_37670__$1;
(statearr_37694_37773[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (33))){
var state_37670__$1 = state_37670;
var statearr_37695_37774 = state_37670__$1;
(statearr_37695_37774[(2)] = false);

(statearr_37695_37774[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (13))){
var inst_37543 = (state_37670[(22)]);
var inst_37547 = cljs.core.chunk_first.call(null,inst_37543);
var inst_37548 = cljs.core.chunk_rest.call(null,inst_37543);
var inst_37549 = cljs.core.count.call(null,inst_37547);
var inst_37530 = inst_37548;
var inst_37531 = inst_37547;
var inst_37532 = inst_37549;
var inst_37533 = (0);
var state_37670__$1 = (function (){var statearr_37696 = state_37670;
(statearr_37696[(7)] = inst_37533);

(statearr_37696[(8)] = inst_37531);

(statearr_37696[(9)] = inst_37532);

(statearr_37696[(10)] = inst_37530);

return statearr_37696;
})();
var statearr_37697_37775 = state_37670__$1;
(statearr_37697_37775[(2)] = null);

(statearr_37697_37775[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (22))){
var inst_37586 = (state_37670[(23)]);
var inst_37591 = (state_37670[(24)]);
var inst_37587 = (state_37670[(25)]);
var inst_37583 = (state_37670[(19)]);
var inst_37586__$1 = (state_37670[(2)]);
var inst_37587__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37586__$1);
var inst_37588 = (function (){var all_files = inst_37583;
var res_SINGLEQUOTE_ = inst_37586__$1;
var res = inst_37587__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37586,inst_37591,inst_37587,inst_37583,inst_37586__$1,inst_37587__$1,state_val_37671,c__34023__auto__,map__37515,map__37515__$1,opts,before_jsload,on_jsload,reload_dependents,map__37516,map__37516__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37512_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37512_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37586,inst_37591,inst_37587,inst_37583,inst_37586__$1,inst_37587__$1,state_val_37671,c__34023__auto__,map__37515,map__37515__$1,opts,before_jsload,on_jsload,reload_dependents,map__37516,map__37516__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37589 = cljs.core.filter.call(null,inst_37588,inst_37586__$1);
var inst_37590 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37591__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37590);
var inst_37592 = cljs.core.not_empty.call(null,inst_37591__$1);
var state_37670__$1 = (function (){var statearr_37698 = state_37670;
(statearr_37698[(23)] = inst_37586__$1);

(statearr_37698[(24)] = inst_37591__$1);

(statearr_37698[(25)] = inst_37587__$1);

(statearr_37698[(26)] = inst_37589);

return statearr_37698;
})();
if(cljs.core.truth_(inst_37592)){
var statearr_37699_37776 = state_37670__$1;
(statearr_37699_37776[(1)] = (23));

} else {
var statearr_37700_37777 = state_37670__$1;
(statearr_37700_37777[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (36))){
var state_37670__$1 = state_37670;
var statearr_37701_37778 = state_37670__$1;
(statearr_37701_37778[(2)] = false);

(statearr_37701_37778[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (41))){
var inst_37645 = (state_37670[(20)]);
var inst_37649 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37650 = cljs.core.map.call(null,inst_37649,inst_37645);
var inst_37651 = cljs.core.pr_str.call(null,inst_37650);
var inst_37652 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37651)].join('');
var inst_37653 = figwheel.client.utils.log.call(null,inst_37652);
var state_37670__$1 = state_37670;
var statearr_37702_37779 = state_37670__$1;
(statearr_37702_37779[(2)] = inst_37653);

(statearr_37702_37779[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (43))){
var inst_37646 = (state_37670[(21)]);
var inst_37656 = (state_37670[(2)]);
var inst_37657 = cljs.core.not_empty.call(null,inst_37646);
var state_37670__$1 = (function (){var statearr_37703 = state_37670;
(statearr_37703[(27)] = inst_37656);

return statearr_37703;
})();
if(cljs.core.truth_(inst_37657)){
var statearr_37704_37780 = state_37670__$1;
(statearr_37704_37780[(1)] = (44));

} else {
var statearr_37705_37781 = state_37670__$1;
(statearr_37705_37781[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (29))){
var inst_37586 = (state_37670[(23)]);
var inst_37591 = (state_37670[(24)]);
var inst_37587 = (state_37670[(25)]);
var inst_37583 = (state_37670[(19)]);
var inst_37623 = (state_37670[(16)]);
var inst_37589 = (state_37670[(26)]);
var inst_37619 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37622 = (function (){var all_files = inst_37583;
var res_SINGLEQUOTE_ = inst_37586;
var res = inst_37587;
var files_not_loaded = inst_37589;
var dependencies_that_loaded = inst_37591;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37586,inst_37591,inst_37587,inst_37583,inst_37623,inst_37589,inst_37619,state_val_37671,c__34023__auto__,map__37515,map__37515__$1,opts,before_jsload,on_jsload,reload_dependents,map__37516,map__37516__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37621){
var map__37706 = p__37621;
var map__37706__$1 = ((((!((map__37706 == null)))?((((map__37706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37706.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37706):map__37706);
var namespace = cljs.core.get.call(null,map__37706__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37586,inst_37591,inst_37587,inst_37583,inst_37623,inst_37589,inst_37619,state_val_37671,c__34023__auto__,map__37515,map__37515__$1,opts,before_jsload,on_jsload,reload_dependents,map__37516,map__37516__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37623__$1 = cljs.core.group_by.call(null,inst_37622,inst_37589);
var inst_37625 = (inst_37623__$1 == null);
var inst_37626 = cljs.core.not.call(null,inst_37625);
var state_37670__$1 = (function (){var statearr_37708 = state_37670;
(statearr_37708[(16)] = inst_37623__$1);

(statearr_37708[(28)] = inst_37619);

return statearr_37708;
})();
if(inst_37626){
var statearr_37709_37782 = state_37670__$1;
(statearr_37709_37782[(1)] = (32));

} else {
var statearr_37710_37783 = state_37670__$1;
(statearr_37710_37783[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (44))){
var inst_37646 = (state_37670[(21)]);
var inst_37659 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37646);
var inst_37660 = cljs.core.pr_str.call(null,inst_37659);
var inst_37661 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37660)].join('');
var inst_37662 = figwheel.client.utils.log.call(null,inst_37661);
var state_37670__$1 = state_37670;
var statearr_37711_37784 = state_37670__$1;
(statearr_37711_37784[(2)] = inst_37662);

(statearr_37711_37784[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (6))){
var inst_37564 = (state_37670[(2)]);
var state_37670__$1 = state_37670;
var statearr_37712_37785 = state_37670__$1;
(statearr_37712_37785[(2)] = inst_37564);

(statearr_37712_37785[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (28))){
var inst_37589 = (state_37670[(26)]);
var inst_37616 = (state_37670[(2)]);
var inst_37617 = cljs.core.not_empty.call(null,inst_37589);
var state_37670__$1 = (function (){var statearr_37713 = state_37670;
(statearr_37713[(29)] = inst_37616);

return statearr_37713;
})();
if(cljs.core.truth_(inst_37617)){
var statearr_37714_37786 = state_37670__$1;
(statearr_37714_37786[(1)] = (29));

} else {
var statearr_37715_37787 = state_37670__$1;
(statearr_37715_37787[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (25))){
var inst_37587 = (state_37670[(25)]);
var inst_37603 = (state_37670[(2)]);
var inst_37604 = cljs.core.not_empty.call(null,inst_37587);
var state_37670__$1 = (function (){var statearr_37716 = state_37670;
(statearr_37716[(30)] = inst_37603);

return statearr_37716;
})();
if(cljs.core.truth_(inst_37604)){
var statearr_37717_37788 = state_37670__$1;
(statearr_37717_37788[(1)] = (26));

} else {
var statearr_37718_37789 = state_37670__$1;
(statearr_37718_37789[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (34))){
var inst_37639 = (state_37670[(2)]);
var state_37670__$1 = state_37670;
if(cljs.core.truth_(inst_37639)){
var statearr_37719_37790 = state_37670__$1;
(statearr_37719_37790[(1)] = (38));

} else {
var statearr_37720_37791 = state_37670__$1;
(statearr_37720_37791[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (17))){
var state_37670__$1 = state_37670;
var statearr_37721_37792 = state_37670__$1;
(statearr_37721_37792[(2)] = recompile_dependents);

(statearr_37721_37792[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (3))){
var state_37670__$1 = state_37670;
var statearr_37722_37793 = state_37670__$1;
(statearr_37722_37793[(2)] = null);

(statearr_37722_37793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (12))){
var inst_37560 = (state_37670[(2)]);
var state_37670__$1 = state_37670;
var statearr_37723_37794 = state_37670__$1;
(statearr_37723_37794[(2)] = inst_37560);

(statearr_37723_37794[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (2))){
var inst_37522 = (state_37670[(13)]);
var inst_37529 = cljs.core.seq.call(null,inst_37522);
var inst_37530 = inst_37529;
var inst_37531 = null;
var inst_37532 = (0);
var inst_37533 = (0);
var state_37670__$1 = (function (){var statearr_37724 = state_37670;
(statearr_37724[(7)] = inst_37533);

(statearr_37724[(8)] = inst_37531);

(statearr_37724[(9)] = inst_37532);

(statearr_37724[(10)] = inst_37530);

return statearr_37724;
})();
var statearr_37725_37795 = state_37670__$1;
(statearr_37725_37795[(2)] = null);

(statearr_37725_37795[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (23))){
var inst_37586 = (state_37670[(23)]);
var inst_37591 = (state_37670[(24)]);
var inst_37587 = (state_37670[(25)]);
var inst_37583 = (state_37670[(19)]);
var inst_37589 = (state_37670[(26)]);
var inst_37594 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37596 = (function (){var all_files = inst_37583;
var res_SINGLEQUOTE_ = inst_37586;
var res = inst_37587;
var files_not_loaded = inst_37589;
var dependencies_that_loaded = inst_37591;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37586,inst_37591,inst_37587,inst_37583,inst_37589,inst_37594,state_val_37671,c__34023__auto__,map__37515,map__37515__$1,opts,before_jsload,on_jsload,reload_dependents,map__37516,map__37516__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37595){
var map__37726 = p__37595;
var map__37726__$1 = ((((!((map__37726 == null)))?((((map__37726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37726.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37726):map__37726);
var request_url = cljs.core.get.call(null,map__37726__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37586,inst_37591,inst_37587,inst_37583,inst_37589,inst_37594,state_val_37671,c__34023__auto__,map__37515,map__37515__$1,opts,before_jsload,on_jsload,reload_dependents,map__37516,map__37516__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37597 = cljs.core.reverse.call(null,inst_37591);
var inst_37598 = cljs.core.map.call(null,inst_37596,inst_37597);
var inst_37599 = cljs.core.pr_str.call(null,inst_37598);
var inst_37600 = figwheel.client.utils.log.call(null,inst_37599);
var state_37670__$1 = (function (){var statearr_37728 = state_37670;
(statearr_37728[(31)] = inst_37594);

return statearr_37728;
})();
var statearr_37729_37796 = state_37670__$1;
(statearr_37729_37796[(2)] = inst_37600);

(statearr_37729_37796[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (35))){
var state_37670__$1 = state_37670;
var statearr_37730_37797 = state_37670__$1;
(statearr_37730_37797[(2)] = true);

(statearr_37730_37797[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (19))){
var inst_37573 = (state_37670[(12)]);
var inst_37579 = figwheel.client.file_reloading.expand_files.call(null,inst_37573);
var state_37670__$1 = state_37670;
var statearr_37731_37798 = state_37670__$1;
(statearr_37731_37798[(2)] = inst_37579);

(statearr_37731_37798[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (11))){
var state_37670__$1 = state_37670;
var statearr_37732_37799 = state_37670__$1;
(statearr_37732_37799[(2)] = null);

(statearr_37732_37799[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (9))){
var inst_37562 = (state_37670[(2)]);
var state_37670__$1 = state_37670;
var statearr_37733_37800 = state_37670__$1;
(statearr_37733_37800[(2)] = inst_37562);

(statearr_37733_37800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (5))){
var inst_37533 = (state_37670[(7)]);
var inst_37532 = (state_37670[(9)]);
var inst_37535 = (inst_37533 < inst_37532);
var inst_37536 = inst_37535;
var state_37670__$1 = state_37670;
if(cljs.core.truth_(inst_37536)){
var statearr_37734_37801 = state_37670__$1;
(statearr_37734_37801[(1)] = (7));

} else {
var statearr_37735_37802 = state_37670__$1;
(statearr_37735_37802[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (14))){
var inst_37543 = (state_37670[(22)]);
var inst_37552 = cljs.core.first.call(null,inst_37543);
var inst_37553 = figwheel.client.file_reloading.eval_body.call(null,inst_37552,opts);
var inst_37554 = cljs.core.next.call(null,inst_37543);
var inst_37530 = inst_37554;
var inst_37531 = null;
var inst_37532 = (0);
var inst_37533 = (0);
var state_37670__$1 = (function (){var statearr_37736 = state_37670;
(statearr_37736[(7)] = inst_37533);

(statearr_37736[(8)] = inst_37531);

(statearr_37736[(32)] = inst_37553);

(statearr_37736[(9)] = inst_37532);

(statearr_37736[(10)] = inst_37530);

return statearr_37736;
})();
var statearr_37737_37803 = state_37670__$1;
(statearr_37737_37803[(2)] = null);

(statearr_37737_37803[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (45))){
var state_37670__$1 = state_37670;
var statearr_37738_37804 = state_37670__$1;
(statearr_37738_37804[(2)] = null);

(statearr_37738_37804[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (26))){
var inst_37586 = (state_37670[(23)]);
var inst_37591 = (state_37670[(24)]);
var inst_37587 = (state_37670[(25)]);
var inst_37583 = (state_37670[(19)]);
var inst_37589 = (state_37670[(26)]);
var inst_37606 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37608 = (function (){var all_files = inst_37583;
var res_SINGLEQUOTE_ = inst_37586;
var res = inst_37587;
var files_not_loaded = inst_37589;
var dependencies_that_loaded = inst_37591;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37586,inst_37591,inst_37587,inst_37583,inst_37589,inst_37606,state_val_37671,c__34023__auto__,map__37515,map__37515__$1,opts,before_jsload,on_jsload,reload_dependents,map__37516,map__37516__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37607){
var map__37739 = p__37607;
var map__37739__$1 = ((((!((map__37739 == null)))?((((map__37739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37739):map__37739);
var namespace = cljs.core.get.call(null,map__37739__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37739__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37586,inst_37591,inst_37587,inst_37583,inst_37589,inst_37606,state_val_37671,c__34023__auto__,map__37515,map__37515__$1,opts,before_jsload,on_jsload,reload_dependents,map__37516,map__37516__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37609 = cljs.core.map.call(null,inst_37608,inst_37587);
var inst_37610 = cljs.core.pr_str.call(null,inst_37609);
var inst_37611 = figwheel.client.utils.log.call(null,inst_37610);
var inst_37612 = (function (){var all_files = inst_37583;
var res_SINGLEQUOTE_ = inst_37586;
var res = inst_37587;
var files_not_loaded = inst_37589;
var dependencies_that_loaded = inst_37591;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37586,inst_37591,inst_37587,inst_37583,inst_37589,inst_37606,inst_37608,inst_37609,inst_37610,inst_37611,state_val_37671,c__34023__auto__,map__37515,map__37515__$1,opts,before_jsload,on_jsload,reload_dependents,map__37516,map__37516__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37586,inst_37591,inst_37587,inst_37583,inst_37589,inst_37606,inst_37608,inst_37609,inst_37610,inst_37611,state_val_37671,c__34023__auto__,map__37515,map__37515__$1,opts,before_jsload,on_jsload,reload_dependents,map__37516,map__37516__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37613 = setTimeout(inst_37612,(10));
var state_37670__$1 = (function (){var statearr_37741 = state_37670;
(statearr_37741[(33)] = inst_37606);

(statearr_37741[(34)] = inst_37611);

return statearr_37741;
})();
var statearr_37742_37805 = state_37670__$1;
(statearr_37742_37805[(2)] = inst_37613);

(statearr_37742_37805[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (16))){
var state_37670__$1 = state_37670;
var statearr_37743_37806 = state_37670__$1;
(statearr_37743_37806[(2)] = reload_dependents);

(statearr_37743_37806[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (38))){
var inst_37623 = (state_37670[(16)]);
var inst_37641 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37623);
var state_37670__$1 = state_37670;
var statearr_37744_37807 = state_37670__$1;
(statearr_37744_37807[(2)] = inst_37641);

(statearr_37744_37807[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (30))){
var state_37670__$1 = state_37670;
var statearr_37745_37808 = state_37670__$1;
(statearr_37745_37808[(2)] = null);

(statearr_37745_37808[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (10))){
var inst_37543 = (state_37670[(22)]);
var inst_37545 = cljs.core.chunked_seq_QMARK_.call(null,inst_37543);
var state_37670__$1 = state_37670;
if(inst_37545){
var statearr_37746_37809 = state_37670__$1;
(statearr_37746_37809[(1)] = (13));

} else {
var statearr_37747_37810 = state_37670__$1;
(statearr_37747_37810[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (18))){
var inst_37577 = (state_37670[(2)]);
var state_37670__$1 = state_37670;
if(cljs.core.truth_(inst_37577)){
var statearr_37748_37811 = state_37670__$1;
(statearr_37748_37811[(1)] = (19));

} else {
var statearr_37749_37812 = state_37670__$1;
(statearr_37749_37812[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (42))){
var state_37670__$1 = state_37670;
var statearr_37750_37813 = state_37670__$1;
(statearr_37750_37813[(2)] = null);

(statearr_37750_37813[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (37))){
var inst_37636 = (state_37670[(2)]);
var state_37670__$1 = state_37670;
var statearr_37751_37814 = state_37670__$1;
(statearr_37751_37814[(2)] = inst_37636);

(statearr_37751_37814[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (8))){
var inst_37543 = (state_37670[(22)]);
var inst_37530 = (state_37670[(10)]);
var inst_37543__$1 = cljs.core.seq.call(null,inst_37530);
var state_37670__$1 = (function (){var statearr_37752 = state_37670;
(statearr_37752[(22)] = inst_37543__$1);

return statearr_37752;
})();
if(inst_37543__$1){
var statearr_37753_37815 = state_37670__$1;
(statearr_37753_37815[(1)] = (10));

} else {
var statearr_37754_37816 = state_37670__$1;
(statearr_37754_37816[(1)] = (11));

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
});})(c__34023__auto__,map__37515,map__37515__$1,opts,before_jsload,on_jsload,reload_dependents,map__37516,map__37516__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33933__auto__,c__34023__auto__,map__37515,map__37515__$1,opts,before_jsload,on_jsload,reload_dependents,map__37516,map__37516__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33934__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33934__auto____0 = (function (){
var statearr_37755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37755[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33934__auto__);

(statearr_37755[(1)] = (1));

return statearr_37755;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33934__auto____1 = (function (state_37670){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_37670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e37756){if((e37756 instanceof Object)){
var ex__33937__auto__ = e37756;
var statearr_37757_37817 = state_37670;
(statearr_37757_37817[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37818 = state_37670;
state_37670 = G__37818;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33934__auto__ = function(state_37670){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33934__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33934__auto____1.call(this,state_37670);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33934__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33934__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto__,map__37515,map__37515__$1,opts,before_jsload,on_jsload,reload_dependents,map__37516,map__37516__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34025__auto__ = (function (){var statearr_37758 = f__34024__auto__.call(null);
(statearr_37758[(6)] = c__34023__auto__);

return statearr_37758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto__,map__37515,map__37515__$1,opts,before_jsload,on_jsload,reload_dependents,map__37516,map__37516__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34023__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37821,link){
var map__37822 = p__37821;
var map__37822__$1 = ((((!((map__37822 == null)))?((((map__37822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37822):map__37822);
var file = cljs.core.get.call(null,map__37822__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__37822,map__37822__$1,file){
return (function (p1__37819_SHARP_,p2__37820_SHARP_){
if(cljs.core._EQ_.call(null,p1__37819_SHARP_,p2__37820_SHARP_)){
return p1__37819_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__37822,map__37822__$1,file))
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
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37825){
var map__37826 = p__37825;
var map__37826__$1 = ((((!((map__37826 == null)))?((((map__37826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37826.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37826):map__37826);
var match_length = cljs.core.get.call(null,map__37826__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37826__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37824_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37824_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37828_SHARP_,p2__37829_SHARP_){
return cljs.core.assoc.call(null,p1__37828_SHARP_,cljs.core.get.call(null,p2__37829_SHARP_,key),p2__37829_SHARP_);
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
var loaded_f_datas_37830 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37830);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37830);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37831,p__37832){
var map__37833 = p__37831;
var map__37833__$1 = ((((!((map__37833 == null)))?((((map__37833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37833.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37833):map__37833);
var on_cssload = cljs.core.get.call(null,map__37833__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37834 = p__37832;
var map__37834__$1 = ((((!((map__37834 == null)))?((((map__37834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37834):map__37834);
var files_msg = map__37834__$1;
var files = cljs.core.get.call(null,map__37834__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1503492620081
