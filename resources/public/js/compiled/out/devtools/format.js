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
var o39462 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39462["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39463 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39463["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39464 = temp__5276__auto____$2;
return (o39464["make_template"]);
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
var o39465 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39465["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39466 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39466["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39467 = temp__5276__auto____$2;
return (o39467["make_group"]);
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
var o39468 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39468["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39469 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39469["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39470 = temp__5276__auto____$2;
return (o39470["make_reference"]);
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
var o39471 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39471["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39472 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39472["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39473 = temp__5276__auto____$2;
return (o39473["make_surrogate"]);
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
var o39474 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39474["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39475 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39475["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39476 = temp__5276__auto____$2;
return (o39476["render_markup"]);
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
var o39477 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39477["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39478 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39478["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39479 = temp__5276__auto____$2;
return (o39479["_LT_header_GT_"]);
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
var o39480 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39480["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39481 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39481["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39482 = temp__5276__auto____$2;
return (o39482["_LT_standard_body_GT_"]);
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
var len__31325__auto___39484 = arguments.length;
var i__31326__auto___39485 = (0);
while(true){
if((i__31326__auto___39485 < len__31325__auto___39484)){
args__31332__auto__.push((arguments[i__31326__auto___39485]));

var G__39486 = (i__31326__auto___39485 + (1));
i__31326__auto___39485 = G__39486;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq39483){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39483));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39488 = arguments.length;
var i__31326__auto___39489 = (0);
while(true){
if((i__31326__auto___39489 < len__31325__auto___39488)){
args__31332__auto__.push((arguments[i__31326__auto___39489]));

var G__39490 = (i__31326__auto___39489 + (1));
i__31326__auto___39489 = G__39490;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq39487){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39487));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39492 = arguments.length;
var i__31326__auto___39493 = (0);
while(true){
if((i__31326__auto___39493 < len__31325__auto___39492)){
args__31332__auto__.push((arguments[i__31326__auto___39493]));

var G__39494 = (i__31326__auto___39493 + (1));
i__31326__auto___39493 = G__39494;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq39491){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39491));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39496 = arguments.length;
var i__31326__auto___39497 = (0);
while(true){
if((i__31326__auto___39497 < len__31325__auto___39496)){
args__31332__auto__.push((arguments[i__31326__auto___39497]));

var G__39498 = (i__31326__auto___39497 + (1));
i__31326__auto___39497 = G__39498;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq39495){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39495));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39500 = arguments.length;
var i__31326__auto___39501 = (0);
while(true){
if((i__31326__auto___39501 < len__31325__auto___39500)){
args__31332__auto__.push((arguments[i__31326__auto___39501]));

var G__39502 = (i__31326__auto___39501 + (1));
i__31326__auto___39501 = G__39502;
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

devtools.format.template.cljs$lang$applyTo = (function (seq39499){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39499));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39504 = arguments.length;
var i__31326__auto___39505 = (0);
while(true){
if((i__31326__auto___39505 < len__31325__auto___39504)){
args__31332__auto__.push((arguments[i__31326__auto___39505]));

var G__39506 = (i__31326__auto___39505 + (1));
i__31326__auto___39505 = G__39506;
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

devtools.format.group.cljs$lang$applyTo = (function (seq39503){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39503));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39508 = arguments.length;
var i__31326__auto___39509 = (0);
while(true){
if((i__31326__auto___39509 < len__31325__auto___39508)){
args__31332__auto__.push((arguments[i__31326__auto___39509]));

var G__39510 = (i__31326__auto___39509 + (1));
i__31326__auto___39509 = G__39510;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq39507){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39507));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39518 = arguments.length;
var i__31326__auto___39519 = (0);
while(true){
if((i__31326__auto___39519 < len__31325__auto___39518)){
args__31332__auto__.push((arguments[i__31326__auto___39519]));

var G__39520 = (i__31326__auto___39519 + (1));
i__31326__auto___39519 = G__39520;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((1) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31333__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__39514){
var vec__39515 = p__39514;
var state_override = cljs.core.nth.call(null,vec__39515,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__39515,state_override){
return (function (p1__39511_SHARP_){
return cljs.core.merge.call(null,p1__39511_SHARP_,state_override);
});})(vec__39515,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq39512){
var G__39513 = cljs.core.first.call(null,seq39512);
var seq39512__$1 = cljs.core.next.call(null,seq39512);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__39513,seq39512__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39522 = arguments.length;
var i__31326__auto___39523 = (0);
while(true){
if((i__31326__auto___39523 < len__31325__auto___39522)){
args__31332__auto__.push((arguments[i__31326__auto___39523]));

var G__39524 = (i__31326__auto___39523 + (1));
i__31326__auto___39523 = G__39524;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq39521){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39521));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39527 = arguments.length;
var i__31326__auto___39528 = (0);
while(true){
if((i__31326__auto___39528 < len__31325__auto___39527)){
args__31332__auto__.push((arguments[i__31326__auto___39528]));

var G__39529 = (i__31326__auto___39528 + (1));
i__31326__auto___39528 = G__39529;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq39525){
var G__39526 = cljs.core.first.call(null,seq39525);
var seq39525__$1 = cljs.core.next.call(null,seq39525);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__39526,seq39525__$1);
});


//# sourceMappingURL=format.js.map?rel=1503492838999
