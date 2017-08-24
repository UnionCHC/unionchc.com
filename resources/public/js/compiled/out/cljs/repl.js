// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39736){
var map__39737 = p__39736;
var map__39737__$1 = ((((!((map__39737 == null)))?((((map__39737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39737):map__39737);
var m = map__39737__$1;
var n = cljs.core.get.call(null,map__39737__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39737__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5278__auto__)){
var ns = temp__5278__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39739_39761 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39740_39762 = null;
var count__39741_39763 = (0);
var i__39742_39764 = (0);
while(true){
if((i__39742_39764 < count__39741_39763)){
var f_39765 = cljs.core._nth.call(null,chunk__39740_39762,i__39742_39764);
cljs.core.println.call(null,"  ",f_39765);

var G__39766 = seq__39739_39761;
var G__39767 = chunk__39740_39762;
var G__39768 = count__39741_39763;
var G__39769 = (i__39742_39764 + (1));
seq__39739_39761 = G__39766;
chunk__39740_39762 = G__39767;
count__39741_39763 = G__39768;
i__39742_39764 = G__39769;
continue;
} else {
var temp__5278__auto___39770 = cljs.core.seq.call(null,seq__39739_39761);
if(temp__5278__auto___39770){
var seq__39739_39771__$1 = temp__5278__auto___39770;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39739_39771__$1)){
var c__31280__auto___39772 = cljs.core.chunk_first.call(null,seq__39739_39771__$1);
var G__39773 = cljs.core.chunk_rest.call(null,seq__39739_39771__$1);
var G__39774 = c__31280__auto___39772;
var G__39775 = cljs.core.count.call(null,c__31280__auto___39772);
var G__39776 = (0);
seq__39739_39761 = G__39773;
chunk__39740_39762 = G__39774;
count__39741_39763 = G__39775;
i__39742_39764 = G__39776;
continue;
} else {
var f_39777 = cljs.core.first.call(null,seq__39739_39771__$1);
cljs.core.println.call(null,"  ",f_39777);

var G__39778 = cljs.core.next.call(null,seq__39739_39771__$1);
var G__39779 = null;
var G__39780 = (0);
var G__39781 = (0);
seq__39739_39761 = G__39778;
chunk__39740_39762 = G__39779;
count__39741_39763 = G__39780;
i__39742_39764 = G__39781;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39782 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30349__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30349__auto__)){
return or__30349__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39782);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39782)))?cljs.core.second.call(null,arglists_39782):arglists_39782));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39743_39783 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39744_39784 = null;
var count__39745_39785 = (0);
var i__39746_39786 = (0);
while(true){
if((i__39746_39786 < count__39745_39785)){
var vec__39747_39787 = cljs.core._nth.call(null,chunk__39744_39784,i__39746_39786);
var name_39788 = cljs.core.nth.call(null,vec__39747_39787,(0),null);
var map__39750_39789 = cljs.core.nth.call(null,vec__39747_39787,(1),null);
var map__39750_39790__$1 = ((((!((map__39750_39789 == null)))?((((map__39750_39789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39750_39789.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39750_39789):map__39750_39789);
var doc_39791 = cljs.core.get.call(null,map__39750_39790__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39792 = cljs.core.get.call(null,map__39750_39790__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39788);

cljs.core.println.call(null," ",arglists_39792);

if(cljs.core.truth_(doc_39791)){
cljs.core.println.call(null," ",doc_39791);
} else {
}

var G__39793 = seq__39743_39783;
var G__39794 = chunk__39744_39784;
var G__39795 = count__39745_39785;
var G__39796 = (i__39746_39786 + (1));
seq__39743_39783 = G__39793;
chunk__39744_39784 = G__39794;
count__39745_39785 = G__39795;
i__39746_39786 = G__39796;
continue;
} else {
var temp__5278__auto___39797 = cljs.core.seq.call(null,seq__39743_39783);
if(temp__5278__auto___39797){
var seq__39743_39798__$1 = temp__5278__auto___39797;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39743_39798__$1)){
var c__31280__auto___39799 = cljs.core.chunk_first.call(null,seq__39743_39798__$1);
var G__39800 = cljs.core.chunk_rest.call(null,seq__39743_39798__$1);
var G__39801 = c__31280__auto___39799;
var G__39802 = cljs.core.count.call(null,c__31280__auto___39799);
var G__39803 = (0);
seq__39743_39783 = G__39800;
chunk__39744_39784 = G__39801;
count__39745_39785 = G__39802;
i__39746_39786 = G__39803;
continue;
} else {
var vec__39752_39804 = cljs.core.first.call(null,seq__39743_39798__$1);
var name_39805 = cljs.core.nth.call(null,vec__39752_39804,(0),null);
var map__39755_39806 = cljs.core.nth.call(null,vec__39752_39804,(1),null);
var map__39755_39807__$1 = ((((!((map__39755_39806 == null)))?((((map__39755_39806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39755_39806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39755_39806):map__39755_39806);
var doc_39808 = cljs.core.get.call(null,map__39755_39807__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39809 = cljs.core.get.call(null,map__39755_39807__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39805);

cljs.core.println.call(null," ",arglists_39809);

if(cljs.core.truth_(doc_39808)){
cljs.core.println.call(null," ",doc_39808);
} else {
}

var G__39810 = cljs.core.next.call(null,seq__39743_39798__$1);
var G__39811 = null;
var G__39812 = (0);
var G__39813 = (0);
seq__39743_39783 = G__39810;
chunk__39744_39784 = G__39811;
count__39745_39785 = G__39812;
i__39746_39786 = G__39813;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5278__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5278__auto__)){
var fnspec = temp__5278__auto__;
cljs.core.print.call(null,"Spec");

var seq__39757 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39758 = null;
var count__39759 = (0);
var i__39760 = (0);
while(true){
if((i__39760 < count__39759)){
var role = cljs.core._nth.call(null,chunk__39758,i__39760);
var temp__5278__auto___39814__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___39814__$1)){
var spec_39815 = temp__5278__auto___39814__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39815));
} else {
}

var G__39816 = seq__39757;
var G__39817 = chunk__39758;
var G__39818 = count__39759;
var G__39819 = (i__39760 + (1));
seq__39757 = G__39816;
chunk__39758 = G__39817;
count__39759 = G__39818;
i__39760 = G__39819;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__39757);
if(temp__5278__auto____$1){
var seq__39757__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39757__$1)){
var c__31280__auto__ = cljs.core.chunk_first.call(null,seq__39757__$1);
var G__39820 = cljs.core.chunk_rest.call(null,seq__39757__$1);
var G__39821 = c__31280__auto__;
var G__39822 = cljs.core.count.call(null,c__31280__auto__);
var G__39823 = (0);
seq__39757 = G__39820;
chunk__39758 = G__39821;
count__39759 = G__39822;
i__39760 = G__39823;
continue;
} else {
var role = cljs.core.first.call(null,seq__39757__$1);
var temp__5278__auto___39824__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___39824__$2)){
var spec_39825 = temp__5278__auto___39824__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39825));
} else {
}

var G__39826 = cljs.core.next.call(null,seq__39757__$1);
var G__39827 = null;
var G__39828 = (0);
var G__39829 = (0);
seq__39757 = G__39826;
chunk__39758 = G__39827;
count__39759 = G__39828;
i__39760 = G__39829;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1503547308573
