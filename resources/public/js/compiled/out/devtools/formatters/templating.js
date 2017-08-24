// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x42785_42786 = value;
x42785_42786.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x42788_42789 = value;
x42788_42789.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x42791_42792 = value;
x42791_42792.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__30337__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__30337__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__30337__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__31633__auto__ = [];
var len__31626__auto___42799 = arguments.length;
var i__31627__auto___42800 = (0);
while(true){
if((i__31627__auto___42800 < len__31626__auto___42799)){
args__31633__auto__.push((arguments[i__31627__auto___42800]));

var G__42801 = (i__31627__auto___42800 + (1));
i__31627__auto___42800 = G__42801;
continue;
} else {
}
break;
}

var argseq__31634__auto__ = ((((0) < args__31633__auto__.length))?(new cljs.core.IndexedSeq(args__31633__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31634__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__42795_42802 = cljs.core.seq.call(null,items);
var chunk__42796_42803 = null;
var count__42797_42804 = (0);
var i__42798_42805 = (0);
while(true){
if((i__42798_42805 < count__42797_42804)){
var item_42806 = cljs.core._nth.call(null,chunk__42796_42803,i__42798_42805);
if(!((item_42806 == null))){
if(cljs.core.coll_QMARK_.call(null,item_42806)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_42806)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_42806));
}
} else {
}

var G__42807 = seq__42795_42802;
var G__42808 = chunk__42796_42803;
var G__42809 = count__42797_42804;
var G__42810 = (i__42798_42805 + (1));
seq__42795_42802 = G__42807;
chunk__42796_42803 = G__42808;
count__42797_42804 = G__42809;
i__42798_42805 = G__42810;
continue;
} else {
var temp__5278__auto___42811 = cljs.core.seq.call(null,seq__42795_42802);
if(temp__5278__auto___42811){
var seq__42795_42812__$1 = temp__5278__auto___42811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42795_42812__$1)){
var c__31280__auto___42813 = cljs.core.chunk_first.call(null,seq__42795_42812__$1);
var G__42814 = cljs.core.chunk_rest.call(null,seq__42795_42812__$1);
var G__42815 = c__31280__auto___42813;
var G__42816 = cljs.core.count.call(null,c__31280__auto___42813);
var G__42817 = (0);
seq__42795_42802 = G__42814;
chunk__42796_42803 = G__42815;
count__42797_42804 = G__42816;
i__42798_42805 = G__42817;
continue;
} else {
var item_42818 = cljs.core.first.call(null,seq__42795_42812__$1);
if(!((item_42818 == null))){
if(cljs.core.coll_QMARK_.call(null,item_42818)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_42818)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_42818));
}
} else {
}

var G__42819 = cljs.core.next.call(null,seq__42795_42812__$1);
var G__42820 = null;
var G__42821 = (0);
var G__42822 = (0);
seq__42795_42802 = G__42819;
chunk__42796_42803 = G__42820;
count__42797_42804 = G__42821;
i__42798_42805 = G__42822;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq42794){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42794));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__31633__auto__ = [];
var len__31626__auto___42830 = arguments.length;
var i__31627__auto___42831 = (0);
while(true){
if((i__31627__auto___42831 < len__31626__auto___42830)){
args__31633__auto__.push((arguments[i__31627__auto___42831]));

var G__42832 = (i__31627__auto___42831 + (1));
i__31627__auto___42831 = G__42832;
continue;
} else {
}
break;
}

var argseq__31634__auto__ = ((((2) < args__31633__auto__.length))?(new cljs.core.IndexedSeq(args__31633__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31634__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__42826_42833 = cljs.core.seq.call(null,children);
var chunk__42827_42834 = null;
var count__42828_42835 = (0);
var i__42829_42836 = (0);
while(true){
if((i__42829_42836 < count__42828_42835)){
var child_42837 = cljs.core._nth.call(null,chunk__42827_42834,i__42829_42836);
if(!((child_42837 == null))){
if(cljs.core.coll_QMARK_.call(null,child_42837)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_42837))));
} else {
var temp__5276__auto___42838 = devtools.formatters.helpers.pref.call(null,child_42837);
if(cljs.core.truth_(temp__5276__auto___42838)){
var child_value_42839 = temp__5276__auto___42838;
template.push(child_value_42839);
} else {
}
}
} else {
}

var G__42840 = seq__42826_42833;
var G__42841 = chunk__42827_42834;
var G__42842 = count__42828_42835;
var G__42843 = (i__42829_42836 + (1));
seq__42826_42833 = G__42840;
chunk__42827_42834 = G__42841;
count__42828_42835 = G__42842;
i__42829_42836 = G__42843;
continue;
} else {
var temp__5278__auto___42844 = cljs.core.seq.call(null,seq__42826_42833);
if(temp__5278__auto___42844){
var seq__42826_42845__$1 = temp__5278__auto___42844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42826_42845__$1)){
var c__31280__auto___42846 = cljs.core.chunk_first.call(null,seq__42826_42845__$1);
var G__42847 = cljs.core.chunk_rest.call(null,seq__42826_42845__$1);
var G__42848 = c__31280__auto___42846;
var G__42849 = cljs.core.count.call(null,c__31280__auto___42846);
var G__42850 = (0);
seq__42826_42833 = G__42847;
chunk__42827_42834 = G__42848;
count__42828_42835 = G__42849;
i__42829_42836 = G__42850;
continue;
} else {
var child_42851 = cljs.core.first.call(null,seq__42826_42845__$1);
if(!((child_42851 == null))){
if(cljs.core.coll_QMARK_.call(null,child_42851)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_42851))));
} else {
var temp__5276__auto___42852 = devtools.formatters.helpers.pref.call(null,child_42851);
if(cljs.core.truth_(temp__5276__auto___42852)){
var child_value_42853 = temp__5276__auto___42852;
template.push(child_value_42853);
} else {
}
}
} else {
}

var G__42854 = cljs.core.next.call(null,seq__42826_42845__$1);
var G__42855 = null;
var G__42856 = (0);
var G__42857 = (0);
seq__42826_42833 = G__42854;
chunk__42827_42834 = G__42855;
count__42828_42835 = G__42856;
i__42829_42836 = G__42857;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq42823){
var G__42824 = cljs.core.first.call(null,seq42823);
var seq42823__$1 = cljs.core.next.call(null,seq42823);
var G__42825 = cljs.core.first.call(null,seq42823__$1);
var seq42823__$2 = cljs.core.next.call(null,seq42823__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__42824,G__42825,seq42823__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__31633__auto__ = [];
var len__31626__auto___42860 = arguments.length;
var i__31627__auto___42861 = (0);
while(true){
if((i__31627__auto___42861 < len__31626__auto___42860)){
args__31633__auto__.push((arguments[i__31627__auto___42861]));

var G__42862 = (i__31627__auto___42861 + (1));
i__31627__auto___42861 = G__42862;
continue;
} else {
}
break;
}

var argseq__31634__auto__ = ((((1) < args__31633__auto__.length))?(new cljs.core.IndexedSeq(args__31633__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31634__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq42858){
var G__42859 = cljs.core.first.call(null,seq42858);
var seq42858__$1 = cljs.core.next.call(null,seq42858);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42859,seq42858__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__31633__auto__ = [];
var len__31626__auto___42865 = arguments.length;
var i__31627__auto___42866 = (0);
while(true){
if((i__31627__auto___42866 < len__31626__auto___42865)){
args__31633__auto__.push((arguments[i__31627__auto___42866]));

var G__42867 = (i__31627__auto___42866 + (1));
i__31627__auto___42866 = G__42867;
continue;
} else {
}
break;
}

var argseq__31634__auto__ = ((((1) < args__31633__auto__.length))?(new cljs.core.IndexedSeq(args__31633__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31634__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq42863){
var G__42864 = cljs.core.first.call(null,seq42863);
var seq42863__$1 = cljs.core.next.call(null,seq42863);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42864,seq42863__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__42869 = arguments.length;
switch (G__42869) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj42871 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__30349__auto__ = start_index;
if(cljs.core.truth_(or__30349__auto__)){
return or__30349__auto__;
} else {
return (0);
}
})()};
return obj42871;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__31633__auto__ = [];
var len__31626__auto___42879 = arguments.length;
var i__31627__auto___42880 = (0);
while(true){
if((i__31627__auto___42880 < len__31626__auto___42879)){
args__31633__auto__.push((arguments[i__31627__auto___42880]));

var G__42881 = (i__31627__auto___42880 + (1));
i__31627__auto___42880 = G__42881;
continue;
} else {
}
break;
}

var argseq__31634__auto__ = ((((1) < args__31633__auto__.length))?(new cljs.core.IndexedSeq(args__31633__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31634__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__42875){
var vec__42876 = p__42875;
var state_override_fn = cljs.core.nth.call(null,vec__42876,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq42873){
var G__42874 = cljs.core.first.call(null,seq42873);
var seq42873__$1 = cljs.core.next.call(null,seq42873);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__42874,seq42873__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_42882 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_42882;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__42883 = name;
switch (G__42883) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__42885 = tag;
var html_tag = cljs.core.nth.call(null,vec__42885,(0),null);
var style = cljs.core.nth.call(null,vec__42885,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_42888 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_42888;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_42889 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_42890 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_42890;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_42889;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__42891 = initial_value;
var G__42892 = value.call(null);
initial_value = G__42891;
value = G__42892;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__42893 = initial_value;
var G__42894 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__42893;
value = G__42894;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__42895 = initial_value;
var G__42896 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__42895;
value = G__42896;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1503547312793
