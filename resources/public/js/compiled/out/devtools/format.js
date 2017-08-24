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
var x__31082__auto__ = (((value == null))?null:value);
var m__31083__auto__ = (devtools.format._header[goog.typeOf(x__31082__auto__)]);
if(!((m__31083__auto__ == null))){
return m__31083__auto__.call(null,value);
} else {
var m__31083__auto____$1 = (devtools.format._header["_"]);
if(!((m__31083__auto____$1 == null))){
return m__31083__auto____$1.call(null,value);
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
var x__31082__auto__ = (((value == null))?null:value);
var m__31083__auto__ = (devtools.format._has_body[goog.typeOf(x__31082__auto__)]);
if(!((m__31083__auto__ == null))){
return m__31083__auto__.call(null,value);
} else {
var m__31083__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__31083__auto____$1 == null))){
return m__31083__auto____$1.call(null,value);
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
var x__31082__auto__ = (((value == null))?null:value);
var m__31083__auto__ = (devtools.format._body[goog.typeOf(x__31082__auto__)]);
if(!((m__31083__auto__ == null))){
return m__31083__auto__.call(null,value);
} else {
var m__31083__auto____$1 = (devtools.format._body["_"]);
if(!((m__31083__auto____$1 == null))){
return m__31083__auto____$1.call(null,value);
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
var o40563 = temp__5276__auto__;
var temp__5276__auto____$1 = (o40563["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o40564 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o40564["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o40565 = temp__5276__auto____$2;
return (o40565["make_template"]);
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
var o40566 = temp__5276__auto__;
var temp__5276__auto____$1 = (o40566["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o40567 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o40567["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o40568 = temp__5276__auto____$2;
return (o40568["make_group"]);
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
var o40569 = temp__5276__auto__;
var temp__5276__auto____$1 = (o40569["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o40570 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o40570["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o40571 = temp__5276__auto____$2;
return (o40571["make_reference"]);
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
var o40572 = temp__5276__auto__;
var temp__5276__auto____$1 = (o40572["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o40573 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o40573["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o40574 = temp__5276__auto____$2;
return (o40574["make_surrogate"]);
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
var o40575 = temp__5276__auto__;
var temp__5276__auto____$1 = (o40575["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o40576 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o40576["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o40577 = temp__5276__auto____$2;
return (o40577["render_markup"]);
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
var o40578 = temp__5276__auto__;
var temp__5276__auto____$1 = (o40578["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o40579 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o40579["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o40580 = temp__5276__auto____$2;
return (o40580["_LT_header_GT_"]);
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
var o40581 = temp__5276__auto__;
var temp__5276__auto____$1 = (o40581["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o40582 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o40582["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o40583 = temp__5276__auto____$2;
return (o40583["_LT_standard_body_GT_"]);
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
var args__31633__auto__ = [];
var len__31626__auto___40585 = arguments.length;
var i__31627__auto___40586 = (0);
while(true){
if((i__31627__auto___40586 < len__31626__auto___40585)){
args__31633__auto__.push((arguments[i__31627__auto___40586]));

var G__40587 = (i__31627__auto___40586 + (1));
i__31627__auto___40586 = G__40587;
continue;
} else {
}
break;
}

var argseq__31634__auto__ = ((((0) < args__31633__auto__.length))?(new cljs.core.IndexedSeq(args__31633__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__31634__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq40584){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40584));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__31633__auto__ = [];
var len__31626__auto___40589 = arguments.length;
var i__31627__auto___40590 = (0);
while(true){
if((i__31627__auto___40590 < len__31626__auto___40589)){
args__31633__auto__.push((arguments[i__31627__auto___40590]));

var G__40591 = (i__31627__auto___40590 + (1));
i__31627__auto___40590 = G__40591;
continue;
} else {
}
break;
}

var argseq__31634__auto__ = ((((0) < args__31633__auto__.length))?(new cljs.core.IndexedSeq(args__31633__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__31634__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq40588){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40588));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__31633__auto__ = [];
var len__31626__auto___40593 = arguments.length;
var i__31627__auto___40594 = (0);
while(true){
if((i__31627__auto___40594 < len__31626__auto___40593)){
args__31633__auto__.push((arguments[i__31627__auto___40594]));

var G__40595 = (i__31627__auto___40594 + (1));
i__31627__auto___40594 = G__40595;
continue;
} else {
}
break;
}

var argseq__31634__auto__ = ((((0) < args__31633__auto__.length))?(new cljs.core.IndexedSeq(args__31633__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31634__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq40592){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40592));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__31633__auto__ = [];
var len__31626__auto___40597 = arguments.length;
var i__31627__auto___40598 = (0);
while(true){
if((i__31627__auto___40598 < len__31626__auto___40597)){
args__31633__auto__.push((arguments[i__31627__auto___40598]));

var G__40599 = (i__31627__auto___40598 + (1));
i__31627__auto___40598 = G__40599;
continue;
} else {
}
break;
}

var argseq__31634__auto__ = ((((0) < args__31633__auto__.length))?(new cljs.core.IndexedSeq(args__31633__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31634__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq40596){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40596));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__31633__auto__ = [];
var len__31626__auto___40601 = arguments.length;
var i__31627__auto___40602 = (0);
while(true){
if((i__31627__auto___40602 < len__31626__auto___40601)){
args__31633__auto__.push((arguments[i__31627__auto___40602]));

var G__40603 = (i__31627__auto___40602 + (1));
i__31627__auto___40602 = G__40603;
continue;
} else {
}
break;
}

var argseq__31634__auto__ = ((((0) < args__31633__auto__.length))?(new cljs.core.IndexedSeq(args__31633__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__31634__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq40600){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40600));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__31633__auto__ = [];
var len__31626__auto___40605 = arguments.length;
var i__31627__auto___40606 = (0);
while(true){
if((i__31627__auto___40606 < len__31626__auto___40605)){
args__31633__auto__.push((arguments[i__31627__auto___40606]));

var G__40607 = (i__31627__auto___40606 + (1));
i__31627__auto___40606 = G__40607;
continue;
} else {
}
break;
}

var argseq__31634__auto__ = ((((0) < args__31633__auto__.length))?(new cljs.core.IndexedSeq(args__31633__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__31634__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq40604){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40604));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__31633__auto__ = [];
var len__31626__auto___40609 = arguments.length;
var i__31627__auto___40610 = (0);
while(true){
if((i__31627__auto___40610 < len__31626__auto___40609)){
args__31633__auto__.push((arguments[i__31627__auto___40610]));

var G__40611 = (i__31627__auto___40610 + (1));
i__31627__auto___40610 = G__40611;
continue;
} else {
}
break;
}

var argseq__31634__auto__ = ((((0) < args__31633__auto__.length))?(new cljs.core.IndexedSeq(args__31633__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31634__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq40608){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40608));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__31633__auto__ = [];
var len__31626__auto___40619 = arguments.length;
var i__31627__auto___40620 = (0);
while(true){
if((i__31627__auto___40620 < len__31626__auto___40619)){
args__31633__auto__.push((arguments[i__31627__auto___40620]));

var G__40621 = (i__31627__auto___40620 + (1));
i__31627__auto___40620 = G__40621;
continue;
} else {
}
break;
}

var argseq__31634__auto__ = ((((1) < args__31633__auto__.length))?(new cljs.core.IndexedSeq(args__31633__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31634__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__40615){
var vec__40616 = p__40615;
var state_override = cljs.core.nth.call(null,vec__40616,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__40616,state_override){
return (function (p1__40612_SHARP_){
return cljs.core.merge.call(null,p1__40612_SHARP_,state_override);
});})(vec__40616,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq40613){
var G__40614 = cljs.core.first.call(null,seq40613);
var seq40613__$1 = cljs.core.next.call(null,seq40613);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__40614,seq40613__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__31633__auto__ = [];
var len__31626__auto___40623 = arguments.length;
var i__31627__auto___40624 = (0);
while(true){
if((i__31627__auto___40624 < len__31626__auto___40623)){
args__31633__auto__.push((arguments[i__31627__auto___40624]));

var G__40625 = (i__31627__auto___40624 + (1));
i__31627__auto___40624 = G__40625;
continue;
} else {
}
break;
}

var argseq__31634__auto__ = ((((0) < args__31633__auto__.length))?(new cljs.core.IndexedSeq(args__31633__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__31634__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq40622){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40622));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__31633__auto__ = [];
var len__31626__auto___40628 = arguments.length;
var i__31627__auto___40629 = (0);
while(true){
if((i__31627__auto___40629 < len__31626__auto___40628)){
args__31633__auto__.push((arguments[i__31627__auto___40629]));

var G__40630 = (i__31627__auto___40629 + (1));
i__31627__auto___40629 = G__40630;
continue;
} else {
}
break;
}

var argseq__31634__auto__ = ((((1) < args__31633__auto__.length))?(new cljs.core.IndexedSeq(args__31633__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31634__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq40626){
var G__40627 = cljs.core.first.call(null,seq40626);
var seq40626__$1 = cljs.core.next.call(null,seq40626);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__40627,seq40626__$1);
});


//# sourceMappingURL=format.js.map?rel=1503547309454
