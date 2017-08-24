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
var or__30349__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30349__auto__){
return or__30349__auto__;
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
var or__30349__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30349__auto__)){
return or__30349__auto__;
} else {
var or__30349__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30349__auto____$1)){
return or__30349__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38314_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38314_SHARP_));
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
var seq__38315 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__38316 = null;
var count__38317 = (0);
var i__38318 = (0);
while(true){
if((i__38318 < count__38317)){
var n = cljs.core._nth.call(null,chunk__38316,i__38318);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38319 = seq__38315;
var G__38320 = chunk__38316;
var G__38321 = count__38317;
var G__38322 = (i__38318 + (1));
seq__38315 = G__38319;
chunk__38316 = G__38320;
count__38317 = G__38321;
i__38318 = G__38322;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__38315);
if(temp__5278__auto__){
var seq__38315__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38315__$1)){
var c__31280__auto__ = cljs.core.chunk_first.call(null,seq__38315__$1);
var G__38323 = cljs.core.chunk_rest.call(null,seq__38315__$1);
var G__38324 = c__31280__auto__;
var G__38325 = cljs.core.count.call(null,c__31280__auto__);
var G__38326 = (0);
seq__38315 = G__38323;
chunk__38316 = G__38324;
count__38317 = G__38325;
i__38318 = G__38326;
continue;
} else {
var n = cljs.core.first.call(null,seq__38315__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38327 = cljs.core.next.call(null,seq__38315__$1);
var G__38328 = null;
var G__38329 = (0);
var G__38330 = (0);
seq__38315 = G__38327;
chunk__38316 = G__38328;
count__38317 = G__38329;
i__38318 = G__38330;
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

var seq__38340_38348 = cljs.core.seq.call(null,deps);
var chunk__38341_38349 = null;
var count__38342_38350 = (0);
var i__38343_38351 = (0);
while(true){
if((i__38343_38351 < count__38342_38350)){
var dep_38352 = cljs.core._nth.call(null,chunk__38341_38349,i__38343_38351);
topo_sort_helper_STAR_.call(null,dep_38352,(depth + (1)),state);

var G__38353 = seq__38340_38348;
var G__38354 = chunk__38341_38349;
var G__38355 = count__38342_38350;
var G__38356 = (i__38343_38351 + (1));
seq__38340_38348 = G__38353;
chunk__38341_38349 = G__38354;
count__38342_38350 = G__38355;
i__38343_38351 = G__38356;
continue;
} else {
var temp__5278__auto___38357 = cljs.core.seq.call(null,seq__38340_38348);
if(temp__5278__auto___38357){
var seq__38340_38358__$1 = temp__5278__auto___38357;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38340_38358__$1)){
var c__31280__auto___38359 = cljs.core.chunk_first.call(null,seq__38340_38358__$1);
var G__38360 = cljs.core.chunk_rest.call(null,seq__38340_38358__$1);
var G__38361 = c__31280__auto___38359;
var G__38362 = cljs.core.count.call(null,c__31280__auto___38359);
var G__38363 = (0);
seq__38340_38348 = G__38360;
chunk__38341_38349 = G__38361;
count__38342_38350 = G__38362;
i__38343_38351 = G__38363;
continue;
} else {
var dep_38364 = cljs.core.first.call(null,seq__38340_38358__$1);
topo_sort_helper_STAR_.call(null,dep_38364,(depth + (1)),state);

var G__38365 = cljs.core.next.call(null,seq__38340_38358__$1);
var G__38366 = null;
var G__38367 = (0);
var G__38368 = (0);
seq__38340_38348 = G__38365;
chunk__38341_38349 = G__38366;
count__38342_38350 = G__38367;
i__38343_38351 = G__38368;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__38344){
var vec__38345 = p__38344;
var seq__38346 = cljs.core.seq.call(null,vec__38345);
var first__38347 = cljs.core.first.call(null,seq__38346);
var seq__38346__$1 = cljs.core.next.call(null,seq__38346);
var x = first__38347;
var xs = seq__38346__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__38345,seq__38346,first__38347,seq__38346__$1,x,xs,get_deps__$1){
return (function (p1__38331_SHARP_){
return clojure.set.difference.call(null,p1__38331_SHARP_,x);
});})(vec__38345,seq__38346,first__38347,seq__38346__$1,x,xs,get_deps__$1))
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
var seq__38369 = cljs.core.seq.call(null,provides);
var chunk__38370 = null;
var count__38371 = (0);
var i__38372 = (0);
while(true){
if((i__38372 < count__38371)){
var prov = cljs.core._nth.call(null,chunk__38370,i__38372);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38373_38381 = cljs.core.seq.call(null,requires);
var chunk__38374_38382 = null;
var count__38375_38383 = (0);
var i__38376_38384 = (0);
while(true){
if((i__38376_38384 < count__38375_38383)){
var req_38385 = cljs.core._nth.call(null,chunk__38374_38382,i__38376_38384);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38385,prov);

var G__38386 = seq__38373_38381;
var G__38387 = chunk__38374_38382;
var G__38388 = count__38375_38383;
var G__38389 = (i__38376_38384 + (1));
seq__38373_38381 = G__38386;
chunk__38374_38382 = G__38387;
count__38375_38383 = G__38388;
i__38376_38384 = G__38389;
continue;
} else {
var temp__5278__auto___38390 = cljs.core.seq.call(null,seq__38373_38381);
if(temp__5278__auto___38390){
var seq__38373_38391__$1 = temp__5278__auto___38390;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38373_38391__$1)){
var c__31280__auto___38392 = cljs.core.chunk_first.call(null,seq__38373_38391__$1);
var G__38393 = cljs.core.chunk_rest.call(null,seq__38373_38391__$1);
var G__38394 = c__31280__auto___38392;
var G__38395 = cljs.core.count.call(null,c__31280__auto___38392);
var G__38396 = (0);
seq__38373_38381 = G__38393;
chunk__38374_38382 = G__38394;
count__38375_38383 = G__38395;
i__38376_38384 = G__38396;
continue;
} else {
var req_38397 = cljs.core.first.call(null,seq__38373_38391__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38397,prov);

var G__38398 = cljs.core.next.call(null,seq__38373_38391__$1);
var G__38399 = null;
var G__38400 = (0);
var G__38401 = (0);
seq__38373_38381 = G__38398;
chunk__38374_38382 = G__38399;
count__38375_38383 = G__38400;
i__38376_38384 = G__38401;
continue;
}
} else {
}
}
break;
}

var G__38402 = seq__38369;
var G__38403 = chunk__38370;
var G__38404 = count__38371;
var G__38405 = (i__38372 + (1));
seq__38369 = G__38402;
chunk__38370 = G__38403;
count__38371 = G__38404;
i__38372 = G__38405;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__38369);
if(temp__5278__auto__){
var seq__38369__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38369__$1)){
var c__31280__auto__ = cljs.core.chunk_first.call(null,seq__38369__$1);
var G__38406 = cljs.core.chunk_rest.call(null,seq__38369__$1);
var G__38407 = c__31280__auto__;
var G__38408 = cljs.core.count.call(null,c__31280__auto__);
var G__38409 = (0);
seq__38369 = G__38406;
chunk__38370 = G__38407;
count__38371 = G__38408;
i__38372 = G__38409;
continue;
} else {
var prov = cljs.core.first.call(null,seq__38369__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38377_38410 = cljs.core.seq.call(null,requires);
var chunk__38378_38411 = null;
var count__38379_38412 = (0);
var i__38380_38413 = (0);
while(true){
if((i__38380_38413 < count__38379_38412)){
var req_38414 = cljs.core._nth.call(null,chunk__38378_38411,i__38380_38413);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38414,prov);

var G__38415 = seq__38377_38410;
var G__38416 = chunk__38378_38411;
var G__38417 = count__38379_38412;
var G__38418 = (i__38380_38413 + (1));
seq__38377_38410 = G__38415;
chunk__38378_38411 = G__38416;
count__38379_38412 = G__38417;
i__38380_38413 = G__38418;
continue;
} else {
var temp__5278__auto___38419__$1 = cljs.core.seq.call(null,seq__38377_38410);
if(temp__5278__auto___38419__$1){
var seq__38377_38420__$1 = temp__5278__auto___38419__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38377_38420__$1)){
var c__31280__auto___38421 = cljs.core.chunk_first.call(null,seq__38377_38420__$1);
var G__38422 = cljs.core.chunk_rest.call(null,seq__38377_38420__$1);
var G__38423 = c__31280__auto___38421;
var G__38424 = cljs.core.count.call(null,c__31280__auto___38421);
var G__38425 = (0);
seq__38377_38410 = G__38422;
chunk__38378_38411 = G__38423;
count__38379_38412 = G__38424;
i__38380_38413 = G__38425;
continue;
} else {
var req_38426 = cljs.core.first.call(null,seq__38377_38420__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38426,prov);

var G__38427 = cljs.core.next.call(null,seq__38377_38420__$1);
var G__38428 = null;
var G__38429 = (0);
var G__38430 = (0);
seq__38377_38410 = G__38427;
chunk__38378_38411 = G__38428;
count__38379_38412 = G__38429;
i__38380_38413 = G__38430;
continue;
}
} else {
}
}
break;
}

var G__38431 = cljs.core.next.call(null,seq__38369__$1);
var G__38432 = null;
var G__38433 = (0);
var G__38434 = (0);
seq__38369 = G__38431;
chunk__38370 = G__38432;
count__38371 = G__38433;
i__38372 = G__38434;
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
var seq__38435_38439 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__38436_38440 = null;
var count__38437_38441 = (0);
var i__38438_38442 = (0);
while(true){
if((i__38438_38442 < count__38437_38441)){
var ns_38443 = cljs.core._nth.call(null,chunk__38436_38440,i__38438_38442);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38443);

var G__38444 = seq__38435_38439;
var G__38445 = chunk__38436_38440;
var G__38446 = count__38437_38441;
var G__38447 = (i__38438_38442 + (1));
seq__38435_38439 = G__38444;
chunk__38436_38440 = G__38445;
count__38437_38441 = G__38446;
i__38438_38442 = G__38447;
continue;
} else {
var temp__5278__auto___38448 = cljs.core.seq.call(null,seq__38435_38439);
if(temp__5278__auto___38448){
var seq__38435_38449__$1 = temp__5278__auto___38448;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38435_38449__$1)){
var c__31280__auto___38450 = cljs.core.chunk_first.call(null,seq__38435_38449__$1);
var G__38451 = cljs.core.chunk_rest.call(null,seq__38435_38449__$1);
var G__38452 = c__31280__auto___38450;
var G__38453 = cljs.core.count.call(null,c__31280__auto___38450);
var G__38454 = (0);
seq__38435_38439 = G__38451;
chunk__38436_38440 = G__38452;
count__38437_38441 = G__38453;
i__38438_38442 = G__38454;
continue;
} else {
var ns_38455 = cljs.core.first.call(null,seq__38435_38449__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38455);

var G__38456 = cljs.core.next.call(null,seq__38435_38449__$1);
var G__38457 = null;
var G__38458 = (0);
var G__38459 = (0);
seq__38435_38439 = G__38456;
chunk__38436_38440 = G__38457;
count__38437_38441 = G__38458;
i__38438_38442 = G__38459;
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
goog.require_figwheel_backup_ = (function (){var or__30349__auto__ = goog.require__;
if(cljs.core.truth_(or__30349__auto__)){
return or__30349__auto__;
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
var G__38460__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__38460 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38461__i = 0, G__38461__a = new Array(arguments.length -  0);
while (G__38461__i < G__38461__a.length) {G__38461__a[G__38461__i] = arguments[G__38461__i + 0]; ++G__38461__i;}
  args = new cljs.core.IndexedSeq(G__38461__a,0,null);
} 
return G__38460__delegate.call(this,args);};
G__38460.cljs$lang$maxFixedArity = 0;
G__38460.cljs$lang$applyTo = (function (arglist__38462){
var args = cljs.core.seq(arglist__38462);
return G__38460__delegate(args);
});
G__38460.cljs$core$IFn$_invoke$arity$variadic = G__38460__delegate;
return G__38460;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__38463_SHARP_,p2__38464_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38463_SHARP_)].join('')),p2__38464_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__38465_SHARP_,p2__38466_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38465_SHARP_)].join(''),p2__38466_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__38467 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__38467.addCallback(((function (G__38467){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__38467))
);

G__38467.addErrback(((function (G__38467){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__38467))
);

return G__38467;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__38468 = cljs.core._EQ_;
var expr__38469 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__38468.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__38469))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__38468,expr__38469){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__38468,expr__38469))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__38468,expr__38469){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e38471){if((e38471 instanceof Error)){
var e = e38471;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38471;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__38468,expr__38469))
} else {
if(cljs.core.truth_(pred__38468.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__38469))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__38468.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__38469))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__38468.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__38469))){
return ((function (pred__38468,expr__38469){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e38472){if((e38472 instanceof Error)){
var e = e38472;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38472;

}
}})());
});
;})(pred__38468,expr__38469))
} else {
return ((function (pred__38468,expr__38469){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__38468,expr__38469))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__38473,callback){
var map__38474 = p__38473;
var map__38474__$1 = ((((!((map__38474 == null)))?((((map__38474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38474.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38474):map__38474);
var file_msg = map__38474__$1;
var request_url = cljs.core.get.call(null,map__38474__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__38474,map__38474__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__38474,map__38474__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__35124__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto__){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto__){
return (function (state_38498){
var state_val_38499 = (state_38498[(1)]);
if((state_val_38499 === (7))){
var inst_38494 = (state_38498[(2)]);
var state_38498__$1 = state_38498;
var statearr_38500_38517 = state_38498__$1;
(statearr_38500_38517[(2)] = inst_38494);

(statearr_38500_38517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (1))){
var state_38498__$1 = state_38498;
var statearr_38501_38518 = state_38498__$1;
(statearr_38501_38518[(2)] = null);

(statearr_38501_38518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (4))){
var inst_38478 = (state_38498[(7)]);
var inst_38478__$1 = (state_38498[(2)]);
var state_38498__$1 = (function (){var statearr_38502 = state_38498;
(statearr_38502[(7)] = inst_38478__$1);

return statearr_38502;
})();
if(cljs.core.truth_(inst_38478__$1)){
var statearr_38503_38519 = state_38498__$1;
(statearr_38503_38519[(1)] = (5));

} else {
var statearr_38504_38520 = state_38498__$1;
(statearr_38504_38520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (6))){
var state_38498__$1 = state_38498;
var statearr_38505_38521 = state_38498__$1;
(statearr_38505_38521[(2)] = null);

(statearr_38505_38521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (3))){
var inst_38496 = (state_38498[(2)]);
var state_38498__$1 = state_38498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38498__$1,inst_38496);
} else {
if((state_val_38499 === (2))){
var state_38498__$1 = state_38498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38498__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38499 === (11))){
var inst_38490 = (state_38498[(2)]);
var state_38498__$1 = (function (){var statearr_38506 = state_38498;
(statearr_38506[(8)] = inst_38490);

return statearr_38506;
})();
var statearr_38507_38522 = state_38498__$1;
(statearr_38507_38522[(2)] = null);

(statearr_38507_38522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (9))){
var inst_38484 = (state_38498[(9)]);
var inst_38482 = (state_38498[(10)]);
var inst_38486 = inst_38484.call(null,inst_38482);
var state_38498__$1 = state_38498;
var statearr_38508_38523 = state_38498__$1;
(statearr_38508_38523[(2)] = inst_38486);

(statearr_38508_38523[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (5))){
var inst_38478 = (state_38498[(7)]);
var inst_38480 = figwheel.client.file_reloading.blocking_load.call(null,inst_38478);
var state_38498__$1 = state_38498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38498__$1,(8),inst_38480);
} else {
if((state_val_38499 === (10))){
var inst_38482 = (state_38498[(10)]);
var inst_38488 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_38482);
var state_38498__$1 = state_38498;
var statearr_38509_38524 = state_38498__$1;
(statearr_38509_38524[(2)] = inst_38488);

(statearr_38509_38524[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (8))){
var inst_38484 = (state_38498[(9)]);
var inst_38478 = (state_38498[(7)]);
var inst_38482 = (state_38498[(2)]);
var inst_38483 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_38484__$1 = cljs.core.get.call(null,inst_38483,inst_38478);
var state_38498__$1 = (function (){var statearr_38510 = state_38498;
(statearr_38510[(9)] = inst_38484__$1);

(statearr_38510[(10)] = inst_38482);

return statearr_38510;
})();
if(cljs.core.truth_(inst_38484__$1)){
var statearr_38511_38525 = state_38498__$1;
(statearr_38511_38525[(1)] = (9));

} else {
var statearr_38512_38526 = state_38498__$1;
(statearr_38512_38526[(1)] = (10));

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
});})(c__35124__auto__))
;
return ((function (switch__35034__auto__,c__35124__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__35035__auto__ = null;
var figwheel$client$file_reloading$state_machine__35035__auto____0 = (function (){
var statearr_38513 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38513[(0)] = figwheel$client$file_reloading$state_machine__35035__auto__);

(statearr_38513[(1)] = (1));

return statearr_38513;
});
var figwheel$client$file_reloading$state_machine__35035__auto____1 = (function (state_38498){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_38498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e38514){if((e38514 instanceof Object)){
var ex__35038__auto__ = e38514;
var statearr_38515_38527 = state_38498;
(statearr_38515_38527[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38528 = state_38498;
state_38498 = G__38528;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__35035__auto__ = function(state_38498){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__35035__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__35035__auto____1.call(this,state_38498);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__35035__auto____0;
figwheel$client$file_reloading$state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__35035__auto____1;
return figwheel$client$file_reloading$state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto__))
})();
var state__35126__auto__ = (function (){var statearr_38516 = f__35125__auto__.call(null);
(statearr_38516[(6)] = c__35124__auto__);

return statearr_38516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto__))
);

return c__35124__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38529,callback){
var map__38530 = p__38529;
var map__38530__$1 = ((((!((map__38530 == null)))?((((map__38530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38530):map__38530);
var file_msg = map__38530__$1;
var namespace = cljs.core.get.call(null,map__38530__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38530,map__38530__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38530,map__38530__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__38532){
var map__38533 = p__38532;
var map__38533__$1 = ((((!((map__38533 == null)))?((((map__38533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38533.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38533):map__38533);
var file_msg = map__38533__$1;
var namespace = cljs.core.get.call(null,map__38533__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38535){
var map__38536 = p__38535;
var map__38536__$1 = ((((!((map__38536 == null)))?((((map__38536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38536.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38536):map__38536);
var file_msg = map__38536__$1;
var namespace = cljs.core.get.call(null,map__38536__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30337__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30337__auto__){
var or__30349__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30349__auto__)){
return or__30349__auto__;
} else {
var or__30349__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30349__auto____$1)){
return or__30349__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30337__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38538,callback){
var map__38539 = p__38538;
var map__38539__$1 = ((((!((map__38539 == null)))?((((map__38539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38539.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38539):map__38539);
var file_msg = map__38539__$1;
var request_url = cljs.core.get.call(null,map__38539__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38539__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__35124__auto___38589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto___38589,out){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto___38589,out){
return (function (state_38574){
var state_val_38575 = (state_38574[(1)]);
if((state_val_38575 === (1))){
var inst_38548 = cljs.core.seq.call(null,files);
var inst_38549 = cljs.core.first.call(null,inst_38548);
var inst_38550 = cljs.core.next.call(null,inst_38548);
var inst_38551 = files;
var state_38574__$1 = (function (){var statearr_38576 = state_38574;
(statearr_38576[(7)] = inst_38550);

(statearr_38576[(8)] = inst_38551);

(statearr_38576[(9)] = inst_38549);

return statearr_38576;
})();
var statearr_38577_38590 = state_38574__$1;
(statearr_38577_38590[(2)] = null);

(statearr_38577_38590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38575 === (2))){
var inst_38557 = (state_38574[(10)]);
var inst_38551 = (state_38574[(8)]);
var inst_38556 = cljs.core.seq.call(null,inst_38551);
var inst_38557__$1 = cljs.core.first.call(null,inst_38556);
var inst_38558 = cljs.core.next.call(null,inst_38556);
var inst_38559 = (inst_38557__$1 == null);
var inst_38560 = cljs.core.not.call(null,inst_38559);
var state_38574__$1 = (function (){var statearr_38578 = state_38574;
(statearr_38578[(10)] = inst_38557__$1);

(statearr_38578[(11)] = inst_38558);

return statearr_38578;
})();
if(inst_38560){
var statearr_38579_38591 = state_38574__$1;
(statearr_38579_38591[(1)] = (4));

} else {
var statearr_38580_38592 = state_38574__$1;
(statearr_38580_38592[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38575 === (3))){
var inst_38572 = (state_38574[(2)]);
var state_38574__$1 = state_38574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38574__$1,inst_38572);
} else {
if((state_val_38575 === (4))){
var inst_38557 = (state_38574[(10)]);
var inst_38562 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38557);
var state_38574__$1 = state_38574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38574__$1,(7),inst_38562);
} else {
if((state_val_38575 === (5))){
var inst_38568 = cljs.core.async.close_BANG_.call(null,out);
var state_38574__$1 = state_38574;
var statearr_38581_38593 = state_38574__$1;
(statearr_38581_38593[(2)] = inst_38568);

(statearr_38581_38593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38575 === (6))){
var inst_38570 = (state_38574[(2)]);
var state_38574__$1 = state_38574;
var statearr_38582_38594 = state_38574__$1;
(statearr_38582_38594[(2)] = inst_38570);

(statearr_38582_38594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38575 === (7))){
var inst_38558 = (state_38574[(11)]);
var inst_38564 = (state_38574[(2)]);
var inst_38565 = cljs.core.async.put_BANG_.call(null,out,inst_38564);
var inst_38551 = inst_38558;
var state_38574__$1 = (function (){var statearr_38583 = state_38574;
(statearr_38583[(8)] = inst_38551);

(statearr_38583[(12)] = inst_38565);

return statearr_38583;
})();
var statearr_38584_38595 = state_38574__$1;
(statearr_38584_38595[(2)] = null);

(statearr_38584_38595[(1)] = (2));


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
});})(c__35124__auto___38589,out))
;
return ((function (switch__35034__auto__,c__35124__auto___38589,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35035__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35035__auto____0 = (function (){
var statearr_38585 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38585[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35035__auto__);

(statearr_38585[(1)] = (1));

return statearr_38585;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35035__auto____1 = (function (state_38574){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_38574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e38586){if((e38586 instanceof Object)){
var ex__35038__auto__ = e38586;
var statearr_38587_38596 = state_38574;
(statearr_38587_38596[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38597 = state_38574;
state_38574 = G__38597;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35035__auto__ = function(state_38574){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35035__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35035__auto____1.call(this,state_38574);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35035__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35035__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto___38589,out))
})();
var state__35126__auto__ = (function (){var statearr_38588 = f__35125__auto__.call(null);
(statearr_38588[(6)] = c__35124__auto___38589);

return statearr_38588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto___38589,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38598,opts){
var map__38599 = p__38598;
var map__38599__$1 = ((((!((map__38599 == null)))?((((map__38599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38599):map__38599);
var eval_body = cljs.core.get.call(null,map__38599__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38599__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30337__auto__ = eval_body;
if(cljs.core.truth_(and__30337__auto__)){
return typeof eval_body === 'string';
} else {
return and__30337__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e38601){var e = e38601;
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
return (function (p1__38602_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38602_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__38603){
var vec__38604 = p__38603;
var k = cljs.core.nth.call(null,vec__38604,(0),null);
var v = cljs.core.nth.call(null,vec__38604,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__38607){
var vec__38608 = p__38607;
var k = cljs.core.nth.call(null,vec__38608,(0),null);
var v = cljs.core.nth.call(null,vec__38608,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__38614,p__38615){
var map__38616 = p__38614;
var map__38616__$1 = ((((!((map__38616 == null)))?((((map__38616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38616.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38616):map__38616);
var opts = map__38616__$1;
var before_jsload = cljs.core.get.call(null,map__38616__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__38616__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__38616__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__38617 = p__38615;
var map__38617__$1 = ((((!((map__38617 == null)))?((((map__38617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38617):map__38617);
var msg = map__38617__$1;
var files = cljs.core.get.call(null,map__38617__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__38617__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__38617__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__35124__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto__,map__38616,map__38616__$1,opts,before_jsload,on_jsload,reload_dependents,map__38617,map__38617__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto__,map__38616,map__38616__$1,opts,before_jsload,on_jsload,reload_dependents,map__38617,map__38617__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_38771){
var state_val_38772 = (state_38771[(1)]);
if((state_val_38772 === (7))){
var inst_38634 = (state_38771[(7)]);
var inst_38632 = (state_38771[(8)]);
var inst_38633 = (state_38771[(9)]);
var inst_38631 = (state_38771[(10)]);
var inst_38639 = cljs.core._nth.call(null,inst_38632,inst_38634);
var inst_38640 = figwheel.client.file_reloading.eval_body.call(null,inst_38639,opts);
var inst_38641 = (inst_38634 + (1));
var tmp38773 = inst_38632;
var tmp38774 = inst_38633;
var tmp38775 = inst_38631;
var inst_38631__$1 = tmp38775;
var inst_38632__$1 = tmp38773;
var inst_38633__$1 = tmp38774;
var inst_38634__$1 = inst_38641;
var state_38771__$1 = (function (){var statearr_38776 = state_38771;
(statearr_38776[(7)] = inst_38634__$1);

(statearr_38776[(8)] = inst_38632__$1);

(statearr_38776[(11)] = inst_38640);

(statearr_38776[(9)] = inst_38633__$1);

(statearr_38776[(10)] = inst_38631__$1);

return statearr_38776;
})();
var statearr_38777_38860 = state_38771__$1;
(statearr_38777_38860[(2)] = null);

(statearr_38777_38860[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (20))){
var inst_38674 = (state_38771[(12)]);
var inst_38682 = figwheel.client.file_reloading.sort_files.call(null,inst_38674);
var state_38771__$1 = state_38771;
var statearr_38778_38861 = state_38771__$1;
(statearr_38778_38861[(2)] = inst_38682);

(statearr_38778_38861[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (27))){
var state_38771__$1 = state_38771;
var statearr_38779_38862 = state_38771__$1;
(statearr_38779_38862[(2)] = null);

(statearr_38779_38862[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (1))){
var inst_38623 = (state_38771[(13)]);
var inst_38620 = before_jsload.call(null,files);
var inst_38621 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_38622 = (function (){return ((function (inst_38623,inst_38620,inst_38621,state_val_38772,c__35124__auto__,map__38616,map__38616__$1,opts,before_jsload,on_jsload,reload_dependents,map__38617,map__38617__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38611_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38611_SHARP_);
});
;})(inst_38623,inst_38620,inst_38621,state_val_38772,c__35124__auto__,map__38616,map__38616__$1,opts,before_jsload,on_jsload,reload_dependents,map__38617,map__38617__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38623__$1 = cljs.core.filter.call(null,inst_38622,files);
var inst_38624 = cljs.core.not_empty.call(null,inst_38623__$1);
var state_38771__$1 = (function (){var statearr_38780 = state_38771;
(statearr_38780[(13)] = inst_38623__$1);

(statearr_38780[(14)] = inst_38621);

(statearr_38780[(15)] = inst_38620);

return statearr_38780;
})();
if(cljs.core.truth_(inst_38624)){
var statearr_38781_38863 = state_38771__$1;
(statearr_38781_38863[(1)] = (2));

} else {
var statearr_38782_38864 = state_38771__$1;
(statearr_38782_38864[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (24))){
var state_38771__$1 = state_38771;
var statearr_38783_38865 = state_38771__$1;
(statearr_38783_38865[(2)] = null);

(statearr_38783_38865[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (39))){
var inst_38724 = (state_38771[(16)]);
var state_38771__$1 = state_38771;
var statearr_38784_38866 = state_38771__$1;
(statearr_38784_38866[(2)] = inst_38724);

(statearr_38784_38866[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (46))){
var inst_38766 = (state_38771[(2)]);
var state_38771__$1 = state_38771;
var statearr_38785_38867 = state_38771__$1;
(statearr_38785_38867[(2)] = inst_38766);

(statearr_38785_38867[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (4))){
var inst_38668 = (state_38771[(2)]);
var inst_38669 = cljs.core.List.EMPTY;
var inst_38670 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_38669);
var inst_38671 = (function (){return ((function (inst_38668,inst_38669,inst_38670,state_val_38772,c__35124__auto__,map__38616,map__38616__$1,opts,before_jsload,on_jsload,reload_dependents,map__38617,map__38617__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38612_SHARP_){
var and__30337__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38612_SHARP_);
if(cljs.core.truth_(and__30337__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38612_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__38612_SHARP_)));
} else {
return and__30337__auto__;
}
});
;})(inst_38668,inst_38669,inst_38670,state_val_38772,c__35124__auto__,map__38616,map__38616__$1,opts,before_jsload,on_jsload,reload_dependents,map__38617,map__38617__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38672 = cljs.core.filter.call(null,inst_38671,files);
var inst_38673 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_38674 = cljs.core.concat.call(null,inst_38672,inst_38673);
var state_38771__$1 = (function (){var statearr_38786 = state_38771;
(statearr_38786[(12)] = inst_38674);

(statearr_38786[(17)] = inst_38670);

(statearr_38786[(18)] = inst_38668);

return statearr_38786;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_38787_38868 = state_38771__$1;
(statearr_38787_38868[(1)] = (16));

} else {
var statearr_38788_38869 = state_38771__$1;
(statearr_38788_38869[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (15))){
var inst_38658 = (state_38771[(2)]);
var state_38771__$1 = state_38771;
var statearr_38789_38870 = state_38771__$1;
(statearr_38789_38870[(2)] = inst_38658);

(statearr_38789_38870[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (21))){
var inst_38684 = (state_38771[(19)]);
var inst_38684__$1 = (state_38771[(2)]);
var inst_38685 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_38684__$1);
var state_38771__$1 = (function (){var statearr_38790 = state_38771;
(statearr_38790[(19)] = inst_38684__$1);

return statearr_38790;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38771__$1,(22),inst_38685);
} else {
if((state_val_38772 === (31))){
var inst_38769 = (state_38771[(2)]);
var state_38771__$1 = state_38771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38771__$1,inst_38769);
} else {
if((state_val_38772 === (32))){
var inst_38724 = (state_38771[(16)]);
var inst_38729 = inst_38724.cljs$lang$protocol_mask$partition0$;
var inst_38730 = (inst_38729 & (64));
var inst_38731 = inst_38724.cljs$core$ISeq$;
var inst_38732 = (cljs.core.PROTOCOL_SENTINEL === inst_38731);
var inst_38733 = (inst_38730) || (inst_38732);
var state_38771__$1 = state_38771;
if(cljs.core.truth_(inst_38733)){
var statearr_38791_38871 = state_38771__$1;
(statearr_38791_38871[(1)] = (35));

} else {
var statearr_38792_38872 = state_38771__$1;
(statearr_38792_38872[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (40))){
var inst_38746 = (state_38771[(20)]);
var inst_38745 = (state_38771[(2)]);
var inst_38746__$1 = cljs.core.get.call(null,inst_38745,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_38747 = cljs.core.get.call(null,inst_38745,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_38748 = cljs.core.not_empty.call(null,inst_38746__$1);
var state_38771__$1 = (function (){var statearr_38793 = state_38771;
(statearr_38793[(20)] = inst_38746__$1);

(statearr_38793[(21)] = inst_38747);

return statearr_38793;
})();
if(cljs.core.truth_(inst_38748)){
var statearr_38794_38873 = state_38771__$1;
(statearr_38794_38873[(1)] = (41));

} else {
var statearr_38795_38874 = state_38771__$1;
(statearr_38795_38874[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (33))){
var state_38771__$1 = state_38771;
var statearr_38796_38875 = state_38771__$1;
(statearr_38796_38875[(2)] = false);

(statearr_38796_38875[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (13))){
var inst_38644 = (state_38771[(22)]);
var inst_38648 = cljs.core.chunk_first.call(null,inst_38644);
var inst_38649 = cljs.core.chunk_rest.call(null,inst_38644);
var inst_38650 = cljs.core.count.call(null,inst_38648);
var inst_38631 = inst_38649;
var inst_38632 = inst_38648;
var inst_38633 = inst_38650;
var inst_38634 = (0);
var state_38771__$1 = (function (){var statearr_38797 = state_38771;
(statearr_38797[(7)] = inst_38634);

(statearr_38797[(8)] = inst_38632);

(statearr_38797[(9)] = inst_38633);

(statearr_38797[(10)] = inst_38631);

return statearr_38797;
})();
var statearr_38798_38876 = state_38771__$1;
(statearr_38798_38876[(2)] = null);

(statearr_38798_38876[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (22))){
var inst_38692 = (state_38771[(23)]);
var inst_38684 = (state_38771[(19)]);
var inst_38687 = (state_38771[(24)]);
var inst_38688 = (state_38771[(25)]);
var inst_38687__$1 = (state_38771[(2)]);
var inst_38688__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38687__$1);
var inst_38689 = (function (){var all_files = inst_38684;
var res_SINGLEQUOTE_ = inst_38687__$1;
var res = inst_38688__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_38692,inst_38684,inst_38687,inst_38688,inst_38687__$1,inst_38688__$1,state_val_38772,c__35124__auto__,map__38616,map__38616__$1,opts,before_jsload,on_jsload,reload_dependents,map__38617,map__38617__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38613_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38613_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_38692,inst_38684,inst_38687,inst_38688,inst_38687__$1,inst_38688__$1,state_val_38772,c__35124__auto__,map__38616,map__38616__$1,opts,before_jsload,on_jsload,reload_dependents,map__38617,map__38617__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38690 = cljs.core.filter.call(null,inst_38689,inst_38687__$1);
var inst_38691 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_38692__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38691);
var inst_38693 = cljs.core.not_empty.call(null,inst_38692__$1);
var state_38771__$1 = (function (){var statearr_38799 = state_38771;
(statearr_38799[(23)] = inst_38692__$1);

(statearr_38799[(26)] = inst_38690);

(statearr_38799[(24)] = inst_38687__$1);

(statearr_38799[(25)] = inst_38688__$1);

return statearr_38799;
})();
if(cljs.core.truth_(inst_38693)){
var statearr_38800_38877 = state_38771__$1;
(statearr_38800_38877[(1)] = (23));

} else {
var statearr_38801_38878 = state_38771__$1;
(statearr_38801_38878[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (36))){
var state_38771__$1 = state_38771;
var statearr_38802_38879 = state_38771__$1;
(statearr_38802_38879[(2)] = false);

(statearr_38802_38879[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (41))){
var inst_38746 = (state_38771[(20)]);
var inst_38750 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_38751 = cljs.core.map.call(null,inst_38750,inst_38746);
var inst_38752 = cljs.core.pr_str.call(null,inst_38751);
var inst_38753 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38752)].join('');
var inst_38754 = figwheel.client.utils.log.call(null,inst_38753);
var state_38771__$1 = state_38771;
var statearr_38803_38880 = state_38771__$1;
(statearr_38803_38880[(2)] = inst_38754);

(statearr_38803_38880[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (43))){
var inst_38747 = (state_38771[(21)]);
var inst_38757 = (state_38771[(2)]);
var inst_38758 = cljs.core.not_empty.call(null,inst_38747);
var state_38771__$1 = (function (){var statearr_38804 = state_38771;
(statearr_38804[(27)] = inst_38757);

return statearr_38804;
})();
if(cljs.core.truth_(inst_38758)){
var statearr_38805_38881 = state_38771__$1;
(statearr_38805_38881[(1)] = (44));

} else {
var statearr_38806_38882 = state_38771__$1;
(statearr_38806_38882[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (29))){
var inst_38692 = (state_38771[(23)]);
var inst_38690 = (state_38771[(26)]);
var inst_38724 = (state_38771[(16)]);
var inst_38684 = (state_38771[(19)]);
var inst_38687 = (state_38771[(24)]);
var inst_38688 = (state_38771[(25)]);
var inst_38720 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_38723 = (function (){var all_files = inst_38684;
var res_SINGLEQUOTE_ = inst_38687;
var res = inst_38688;
var files_not_loaded = inst_38690;
var dependencies_that_loaded = inst_38692;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38692,inst_38690,inst_38724,inst_38684,inst_38687,inst_38688,inst_38720,state_val_38772,c__35124__auto__,map__38616,map__38616__$1,opts,before_jsload,on_jsload,reload_dependents,map__38617,map__38617__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38722){
var map__38807 = p__38722;
var map__38807__$1 = ((((!((map__38807 == null)))?((((map__38807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38807):map__38807);
var namespace = cljs.core.get.call(null,map__38807__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38692,inst_38690,inst_38724,inst_38684,inst_38687,inst_38688,inst_38720,state_val_38772,c__35124__auto__,map__38616,map__38616__$1,opts,before_jsload,on_jsload,reload_dependents,map__38617,map__38617__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38724__$1 = cljs.core.group_by.call(null,inst_38723,inst_38690);
var inst_38726 = (inst_38724__$1 == null);
var inst_38727 = cljs.core.not.call(null,inst_38726);
var state_38771__$1 = (function (){var statearr_38809 = state_38771;
(statearr_38809[(16)] = inst_38724__$1);

(statearr_38809[(28)] = inst_38720);

return statearr_38809;
})();
if(inst_38727){
var statearr_38810_38883 = state_38771__$1;
(statearr_38810_38883[(1)] = (32));

} else {
var statearr_38811_38884 = state_38771__$1;
(statearr_38811_38884[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (44))){
var inst_38747 = (state_38771[(21)]);
var inst_38760 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38747);
var inst_38761 = cljs.core.pr_str.call(null,inst_38760);
var inst_38762 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38761)].join('');
var inst_38763 = figwheel.client.utils.log.call(null,inst_38762);
var state_38771__$1 = state_38771;
var statearr_38812_38885 = state_38771__$1;
(statearr_38812_38885[(2)] = inst_38763);

(statearr_38812_38885[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (6))){
var inst_38665 = (state_38771[(2)]);
var state_38771__$1 = state_38771;
var statearr_38813_38886 = state_38771__$1;
(statearr_38813_38886[(2)] = inst_38665);

(statearr_38813_38886[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (28))){
var inst_38690 = (state_38771[(26)]);
var inst_38717 = (state_38771[(2)]);
var inst_38718 = cljs.core.not_empty.call(null,inst_38690);
var state_38771__$1 = (function (){var statearr_38814 = state_38771;
(statearr_38814[(29)] = inst_38717);

return statearr_38814;
})();
if(cljs.core.truth_(inst_38718)){
var statearr_38815_38887 = state_38771__$1;
(statearr_38815_38887[(1)] = (29));

} else {
var statearr_38816_38888 = state_38771__$1;
(statearr_38816_38888[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (25))){
var inst_38688 = (state_38771[(25)]);
var inst_38704 = (state_38771[(2)]);
var inst_38705 = cljs.core.not_empty.call(null,inst_38688);
var state_38771__$1 = (function (){var statearr_38817 = state_38771;
(statearr_38817[(30)] = inst_38704);

return statearr_38817;
})();
if(cljs.core.truth_(inst_38705)){
var statearr_38818_38889 = state_38771__$1;
(statearr_38818_38889[(1)] = (26));

} else {
var statearr_38819_38890 = state_38771__$1;
(statearr_38819_38890[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (34))){
var inst_38740 = (state_38771[(2)]);
var state_38771__$1 = state_38771;
if(cljs.core.truth_(inst_38740)){
var statearr_38820_38891 = state_38771__$1;
(statearr_38820_38891[(1)] = (38));

} else {
var statearr_38821_38892 = state_38771__$1;
(statearr_38821_38892[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (17))){
var state_38771__$1 = state_38771;
var statearr_38822_38893 = state_38771__$1;
(statearr_38822_38893[(2)] = recompile_dependents);

(statearr_38822_38893[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (3))){
var state_38771__$1 = state_38771;
var statearr_38823_38894 = state_38771__$1;
(statearr_38823_38894[(2)] = null);

(statearr_38823_38894[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (12))){
var inst_38661 = (state_38771[(2)]);
var state_38771__$1 = state_38771;
var statearr_38824_38895 = state_38771__$1;
(statearr_38824_38895[(2)] = inst_38661);

(statearr_38824_38895[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (2))){
var inst_38623 = (state_38771[(13)]);
var inst_38630 = cljs.core.seq.call(null,inst_38623);
var inst_38631 = inst_38630;
var inst_38632 = null;
var inst_38633 = (0);
var inst_38634 = (0);
var state_38771__$1 = (function (){var statearr_38825 = state_38771;
(statearr_38825[(7)] = inst_38634);

(statearr_38825[(8)] = inst_38632);

(statearr_38825[(9)] = inst_38633);

(statearr_38825[(10)] = inst_38631);

return statearr_38825;
})();
var statearr_38826_38896 = state_38771__$1;
(statearr_38826_38896[(2)] = null);

(statearr_38826_38896[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (23))){
var inst_38692 = (state_38771[(23)]);
var inst_38690 = (state_38771[(26)]);
var inst_38684 = (state_38771[(19)]);
var inst_38687 = (state_38771[(24)]);
var inst_38688 = (state_38771[(25)]);
var inst_38695 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_38697 = (function (){var all_files = inst_38684;
var res_SINGLEQUOTE_ = inst_38687;
var res = inst_38688;
var files_not_loaded = inst_38690;
var dependencies_that_loaded = inst_38692;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38692,inst_38690,inst_38684,inst_38687,inst_38688,inst_38695,state_val_38772,c__35124__auto__,map__38616,map__38616__$1,opts,before_jsload,on_jsload,reload_dependents,map__38617,map__38617__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38696){
var map__38827 = p__38696;
var map__38827__$1 = ((((!((map__38827 == null)))?((((map__38827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38827):map__38827);
var request_url = cljs.core.get.call(null,map__38827__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38692,inst_38690,inst_38684,inst_38687,inst_38688,inst_38695,state_val_38772,c__35124__auto__,map__38616,map__38616__$1,opts,before_jsload,on_jsload,reload_dependents,map__38617,map__38617__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38698 = cljs.core.reverse.call(null,inst_38692);
var inst_38699 = cljs.core.map.call(null,inst_38697,inst_38698);
var inst_38700 = cljs.core.pr_str.call(null,inst_38699);
var inst_38701 = figwheel.client.utils.log.call(null,inst_38700);
var state_38771__$1 = (function (){var statearr_38829 = state_38771;
(statearr_38829[(31)] = inst_38695);

return statearr_38829;
})();
var statearr_38830_38897 = state_38771__$1;
(statearr_38830_38897[(2)] = inst_38701);

(statearr_38830_38897[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (35))){
var state_38771__$1 = state_38771;
var statearr_38831_38898 = state_38771__$1;
(statearr_38831_38898[(2)] = true);

(statearr_38831_38898[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (19))){
var inst_38674 = (state_38771[(12)]);
var inst_38680 = figwheel.client.file_reloading.expand_files.call(null,inst_38674);
var state_38771__$1 = state_38771;
var statearr_38832_38899 = state_38771__$1;
(statearr_38832_38899[(2)] = inst_38680);

(statearr_38832_38899[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (11))){
var state_38771__$1 = state_38771;
var statearr_38833_38900 = state_38771__$1;
(statearr_38833_38900[(2)] = null);

(statearr_38833_38900[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (9))){
var inst_38663 = (state_38771[(2)]);
var state_38771__$1 = state_38771;
var statearr_38834_38901 = state_38771__$1;
(statearr_38834_38901[(2)] = inst_38663);

(statearr_38834_38901[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (5))){
var inst_38634 = (state_38771[(7)]);
var inst_38633 = (state_38771[(9)]);
var inst_38636 = (inst_38634 < inst_38633);
var inst_38637 = inst_38636;
var state_38771__$1 = state_38771;
if(cljs.core.truth_(inst_38637)){
var statearr_38835_38902 = state_38771__$1;
(statearr_38835_38902[(1)] = (7));

} else {
var statearr_38836_38903 = state_38771__$1;
(statearr_38836_38903[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (14))){
var inst_38644 = (state_38771[(22)]);
var inst_38653 = cljs.core.first.call(null,inst_38644);
var inst_38654 = figwheel.client.file_reloading.eval_body.call(null,inst_38653,opts);
var inst_38655 = cljs.core.next.call(null,inst_38644);
var inst_38631 = inst_38655;
var inst_38632 = null;
var inst_38633 = (0);
var inst_38634 = (0);
var state_38771__$1 = (function (){var statearr_38837 = state_38771;
(statearr_38837[(7)] = inst_38634);

(statearr_38837[(8)] = inst_38632);

(statearr_38837[(32)] = inst_38654);

(statearr_38837[(9)] = inst_38633);

(statearr_38837[(10)] = inst_38631);

return statearr_38837;
})();
var statearr_38838_38904 = state_38771__$1;
(statearr_38838_38904[(2)] = null);

(statearr_38838_38904[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (45))){
var state_38771__$1 = state_38771;
var statearr_38839_38905 = state_38771__$1;
(statearr_38839_38905[(2)] = null);

(statearr_38839_38905[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (26))){
var inst_38692 = (state_38771[(23)]);
var inst_38690 = (state_38771[(26)]);
var inst_38684 = (state_38771[(19)]);
var inst_38687 = (state_38771[(24)]);
var inst_38688 = (state_38771[(25)]);
var inst_38707 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_38709 = (function (){var all_files = inst_38684;
var res_SINGLEQUOTE_ = inst_38687;
var res = inst_38688;
var files_not_loaded = inst_38690;
var dependencies_that_loaded = inst_38692;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38692,inst_38690,inst_38684,inst_38687,inst_38688,inst_38707,state_val_38772,c__35124__auto__,map__38616,map__38616__$1,opts,before_jsload,on_jsload,reload_dependents,map__38617,map__38617__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38708){
var map__38840 = p__38708;
var map__38840__$1 = ((((!((map__38840 == null)))?((((map__38840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38840):map__38840);
var namespace = cljs.core.get.call(null,map__38840__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__38840__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38692,inst_38690,inst_38684,inst_38687,inst_38688,inst_38707,state_val_38772,c__35124__auto__,map__38616,map__38616__$1,opts,before_jsload,on_jsload,reload_dependents,map__38617,map__38617__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38710 = cljs.core.map.call(null,inst_38709,inst_38688);
var inst_38711 = cljs.core.pr_str.call(null,inst_38710);
var inst_38712 = figwheel.client.utils.log.call(null,inst_38711);
var inst_38713 = (function (){var all_files = inst_38684;
var res_SINGLEQUOTE_ = inst_38687;
var res = inst_38688;
var files_not_loaded = inst_38690;
var dependencies_that_loaded = inst_38692;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38692,inst_38690,inst_38684,inst_38687,inst_38688,inst_38707,inst_38709,inst_38710,inst_38711,inst_38712,state_val_38772,c__35124__auto__,map__38616,map__38616__$1,opts,before_jsload,on_jsload,reload_dependents,map__38617,map__38617__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38692,inst_38690,inst_38684,inst_38687,inst_38688,inst_38707,inst_38709,inst_38710,inst_38711,inst_38712,state_val_38772,c__35124__auto__,map__38616,map__38616__$1,opts,before_jsload,on_jsload,reload_dependents,map__38617,map__38617__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38714 = setTimeout(inst_38713,(10));
var state_38771__$1 = (function (){var statearr_38842 = state_38771;
(statearr_38842[(33)] = inst_38712);

(statearr_38842[(34)] = inst_38707);

return statearr_38842;
})();
var statearr_38843_38906 = state_38771__$1;
(statearr_38843_38906[(2)] = inst_38714);

(statearr_38843_38906[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (16))){
var state_38771__$1 = state_38771;
var statearr_38844_38907 = state_38771__$1;
(statearr_38844_38907[(2)] = reload_dependents);

(statearr_38844_38907[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (38))){
var inst_38724 = (state_38771[(16)]);
var inst_38742 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38724);
var state_38771__$1 = state_38771;
var statearr_38845_38908 = state_38771__$1;
(statearr_38845_38908[(2)] = inst_38742);

(statearr_38845_38908[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (30))){
var state_38771__$1 = state_38771;
var statearr_38846_38909 = state_38771__$1;
(statearr_38846_38909[(2)] = null);

(statearr_38846_38909[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (10))){
var inst_38644 = (state_38771[(22)]);
var inst_38646 = cljs.core.chunked_seq_QMARK_.call(null,inst_38644);
var state_38771__$1 = state_38771;
if(inst_38646){
var statearr_38847_38910 = state_38771__$1;
(statearr_38847_38910[(1)] = (13));

} else {
var statearr_38848_38911 = state_38771__$1;
(statearr_38848_38911[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (18))){
var inst_38678 = (state_38771[(2)]);
var state_38771__$1 = state_38771;
if(cljs.core.truth_(inst_38678)){
var statearr_38849_38912 = state_38771__$1;
(statearr_38849_38912[(1)] = (19));

} else {
var statearr_38850_38913 = state_38771__$1;
(statearr_38850_38913[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (42))){
var state_38771__$1 = state_38771;
var statearr_38851_38914 = state_38771__$1;
(statearr_38851_38914[(2)] = null);

(statearr_38851_38914[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (37))){
var inst_38737 = (state_38771[(2)]);
var state_38771__$1 = state_38771;
var statearr_38852_38915 = state_38771__$1;
(statearr_38852_38915[(2)] = inst_38737);

(statearr_38852_38915[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (8))){
var inst_38644 = (state_38771[(22)]);
var inst_38631 = (state_38771[(10)]);
var inst_38644__$1 = cljs.core.seq.call(null,inst_38631);
var state_38771__$1 = (function (){var statearr_38853 = state_38771;
(statearr_38853[(22)] = inst_38644__$1);

return statearr_38853;
})();
if(inst_38644__$1){
var statearr_38854_38916 = state_38771__$1;
(statearr_38854_38916[(1)] = (10));

} else {
var statearr_38855_38917 = state_38771__$1;
(statearr_38855_38917[(1)] = (11));

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
});})(c__35124__auto__,map__38616,map__38616__$1,opts,before_jsload,on_jsload,reload_dependents,map__38617,map__38617__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__35034__auto__,c__35124__auto__,map__38616,map__38616__$1,opts,before_jsload,on_jsload,reload_dependents,map__38617,map__38617__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35035__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35035__auto____0 = (function (){
var statearr_38856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38856[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__35035__auto__);

(statearr_38856[(1)] = (1));

return statearr_38856;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35035__auto____1 = (function (state_38771){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_38771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e38857){if((e38857 instanceof Object)){
var ex__35038__auto__ = e38857;
var statearr_38858_38918 = state_38771;
(statearr_38858_38918[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38919 = state_38771;
state_38771 = G__38919;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__35035__auto__ = function(state_38771){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35035__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35035__auto____1.call(this,state_38771);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35035__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35035__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto__,map__38616,map__38616__$1,opts,before_jsload,on_jsload,reload_dependents,map__38617,map__38617__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__35126__auto__ = (function (){var statearr_38859 = f__35125__auto__.call(null);
(statearr_38859[(6)] = c__35124__auto__);

return statearr_38859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto__,map__38616,map__38616__$1,opts,before_jsload,on_jsload,reload_dependents,map__38617,map__38617__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__35124__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38922,link){
var map__38923 = p__38922;
var map__38923__$1 = ((((!((map__38923 == null)))?((((map__38923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38923.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38923):map__38923);
var file = cljs.core.get.call(null,map__38923__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__38923,map__38923__$1,file){
return (function (p1__38920_SHARP_,p2__38921_SHARP_){
if(cljs.core._EQ_.call(null,p1__38920_SHARP_,p2__38921_SHARP_)){
return p1__38920_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__38923,map__38923__$1,file))
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
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38926){
var map__38927 = p__38926;
var map__38927__$1 = ((((!((map__38927 == null)))?((((map__38927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38927.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38927):map__38927);
var match_length = cljs.core.get.call(null,map__38927__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38927__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38925_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38925_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38929_SHARP_,p2__38930_SHARP_){
return cljs.core.assoc.call(null,p1__38929_SHARP_,cljs.core.get.call(null,p2__38930_SHARP_,key),p2__38930_SHARP_);
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
var loaded_f_datas_38931 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_38931);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_38931);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38932,p__38933){
var map__38934 = p__38932;
var map__38934__$1 = ((((!((map__38934 == null)))?((((map__38934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38934.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38934):map__38934);
var on_cssload = cljs.core.get.call(null,map__38934__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__38935 = p__38933;
var map__38935__$1 = ((((!((map__38935 == null)))?((((map__38935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38935):map__38935);
var files_msg = map__38935__$1;
var files = cljs.core.get.call(null,map__38935__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1503547306916
