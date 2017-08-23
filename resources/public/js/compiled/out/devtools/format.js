// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__30781__auto__ = (((value == null))?null:value);
var m__30782__auto__ = (devtools.format._header[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,value);
} else {
var m__30782__auto____$1 = (devtools.format._header["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__30781__auto__ = (((value == null))?null:value);
var m__30782__auto__ = (devtools.format._has_body[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,value);
} else {
var m__30782__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__30781__auto__ = (((value == null))?null:value);
var m__30782__auto__ = (devtools.format._body[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,value);
} else {
var m__30782__auto____$1 = (devtools.format._body["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o39460 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39460["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39461 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39461["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39462 = temp__5276__auto____$2;
return (o39462["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o39463 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39463["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39464 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39464["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39465 = temp__5276__auto____$2;
return (o39465["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o39466 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39466["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39467 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39467["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39468 = temp__5276__auto____$2;
return (o39468["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o39469 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39469["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39470 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39470["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39471 = temp__5276__auto____$2;
return (o39471["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o39472 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39472["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39473 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39473["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39474 = temp__5276__auto____$2;
return (o39474["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o39475 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39475["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39476 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39476["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39477 = temp__5276__auto____$2;
return (o39477["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o39478 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39478["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39479 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39479["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39480 = temp__5276__auto____$2;
return (o39480["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39482 = arguments.length;
var i__31326__auto___39483 = (0);
while(true){
if((i__31326__auto___39483 < len__31325__auto___39482)){
args__31332__auto__.push((arguments[i__31326__auto___39483]));

var G__39484 = (i__31326__auto___39483 + (1));
i__31326__auto___39483 = G__39484;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq39481){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39481));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39486 = arguments.length;
var i__31326__auto___39487 = (0);
while(true){
if((i__31326__auto___39487 < len__31325__auto___39486)){
args__31332__auto__.push((arguments[i__31326__auto___39487]));

var G__39488 = (i__31326__auto___39487 + (1));
i__31326__auto___39487 = G__39488;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq39485){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39485));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39490 = arguments.length;
var i__31326__auto___39491 = (0);
while(true){
if((i__31326__auto___39491 < len__31325__auto___39490)){
args__31332__auto__.push((arguments[i__31326__auto___39491]));

var G__39492 = (i__31326__auto___39491 + (1));
i__31326__auto___39491 = G__39492;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq39489){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39489));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39494 = arguments.length;
var i__31326__auto___39495 = (0);
while(true){
if((i__31326__auto___39495 < len__31325__auto___39494)){
args__31332__auto__.push((arguments[i__31326__auto___39495]));

var G__39496 = (i__31326__auto___39495 + (1));
i__31326__auto___39495 = G__39496;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq39493){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39493));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39498 = arguments.length;
var i__31326__auto___39499 = (0);
while(true){
if((i__31326__auto___39499 < len__31325__auto___39498)){
args__31332__auto__.push((arguments[i__31326__auto___39499]));

var G__39500 = (i__31326__auto___39499 + (1));
i__31326__auto___39499 = G__39500;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq39497){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39497));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39502 = arguments.length;
var i__31326__auto___39503 = (0);
while(true){
if((i__31326__auto___39503 < len__31325__auto___39502)){
args__31332__auto__.push((arguments[i__31326__auto___39503]));

var G__39504 = (i__31326__auto___39503 + (1));
i__31326__auto___39503 = G__39504;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq39501){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39501));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39506 = arguments.length;
var i__31326__auto___39507 = (0);
while(true){
if((i__31326__auto___39507 < len__31325__auto___39506)){
args__31332__auto__.push((arguments[i__31326__auto___39507]));

var G__39508 = (i__31326__auto___39507 + (1));
i__31326__auto___39507 = G__39508;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq39505){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39505));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39516 = arguments.length;
var i__31326__auto___39517 = (0);
while(true){
if((i__31326__auto___39517 < len__31325__auto___39516)){
args__31332__auto__.push((arguments[i__31326__auto___39517]));

var G__39518 = (i__31326__auto___39517 + (1));
i__31326__auto___39517 = G__39518;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((1) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31333__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__39512){
var vec__39513 = p__39512;
var state_override = cljs.core.nth.call(null,vec__39513,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__39513,state_override){
return (function (p1__39509_SHARP_){
return cljs.core.merge.call(null,p1__39509_SHARP_,state_override);
});})(vec__39513,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq39510){
var G__39511 = cljs.core.first.call(null,seq39510);
var seq39510__$1 = cljs.core.next.call(null,seq39510);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__39511,seq39510__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39520 = arguments.length;
var i__31326__auto___39521 = (0);
while(true){
if((i__31326__auto___39521 < len__31325__auto___39520)){
args__31332__auto__.push((arguments[i__31326__auto___39521]));

var G__39522 = (i__31326__auto___39521 + (1));
i__31326__auto___39521 = G__39522;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq39519){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39519));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39525 = arguments.length;
var i__31326__auto___39526 = (0);
while(true){
if((i__31326__auto___39526 < len__31325__auto___39525)){
args__31332__auto__.push((arguments[i__31326__auto___39526]));

var G__39527 = (i__31326__auto___39526 + (1));
i__31326__auto___39526 = G__39527;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((1) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31333__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq39523){
var G__39524 = cljs.core.first.call(null,seq39523);
var seq39523__$1 = cljs.core.next.call(null,seq39523);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__39524,seq39523__$1);
});


//# sourceMappingURL=format.js.map?rel=1503485733546
