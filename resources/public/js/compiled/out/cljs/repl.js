// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38635){
var map__38636 = p__38635;
var map__38636__$1 = ((((!((map__38636 == null)))?((((map__38636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38636.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38636):map__38636);
var m = map__38636__$1;
var n = cljs.core.get.call(null,map__38636__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38636__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__38638_38660 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38639_38661 = null;
var count__38640_38662 = (0);
var i__38641_38663 = (0);
while(true){
if((i__38641_38663 < count__38640_38662)){
var f_38664 = cljs.core._nth.call(null,chunk__38639_38661,i__38641_38663);
cljs.core.println.call(null,"  ",f_38664);

var G__38665 = seq__38638_38660;
var G__38666 = chunk__38639_38661;
var G__38667 = count__38640_38662;
var G__38668 = (i__38641_38663 + (1));
seq__38638_38660 = G__38665;
chunk__38639_38661 = G__38666;
count__38640_38662 = G__38667;
i__38641_38663 = G__38668;
continue;
} else {
var temp__5278__auto___38669 = cljs.core.seq.call(null,seq__38638_38660);
if(temp__5278__auto___38669){
var seq__38638_38670__$1 = temp__5278__auto___38669;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38638_38670__$1)){
var c__30979__auto___38671 = cljs.core.chunk_first.call(null,seq__38638_38670__$1);
var G__38672 = cljs.core.chunk_rest.call(null,seq__38638_38670__$1);
var G__38673 = c__30979__auto___38671;
var G__38674 = cljs.core.count.call(null,c__30979__auto___38671);
var G__38675 = (0);
seq__38638_38660 = G__38672;
chunk__38639_38661 = G__38673;
count__38640_38662 = G__38674;
i__38641_38663 = G__38675;
continue;
} else {
var f_38676 = cljs.core.first.call(null,seq__38638_38670__$1);
cljs.core.println.call(null,"  ",f_38676);

var G__38677 = cljs.core.next.call(null,seq__38638_38670__$1);
var G__38678 = null;
var G__38679 = (0);
var G__38680 = (0);
seq__38638_38660 = G__38677;
chunk__38639_38661 = G__38678;
count__38640_38662 = G__38679;
i__38641_38663 = G__38680;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38681 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30048__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38681);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38681)))?cljs.core.second.call(null,arglists_38681):arglists_38681));
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
var seq__38642_38682 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38643_38683 = null;
var count__38644_38684 = (0);
var i__38645_38685 = (0);
while(true){
if((i__38645_38685 < count__38644_38684)){
var vec__38646_38686 = cljs.core._nth.call(null,chunk__38643_38683,i__38645_38685);
var name_38687 = cljs.core.nth.call(null,vec__38646_38686,(0),null);
var map__38649_38688 = cljs.core.nth.call(null,vec__38646_38686,(1),null);
var map__38649_38689__$1 = ((((!((map__38649_38688 == null)))?((((map__38649_38688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38649_38688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38649_38688):map__38649_38688);
var doc_38690 = cljs.core.get.call(null,map__38649_38689__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38691 = cljs.core.get.call(null,map__38649_38689__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38687);

cljs.core.println.call(null," ",arglists_38691);

if(cljs.core.truth_(doc_38690)){
cljs.core.println.call(null," ",doc_38690);
} else {
}

var G__38692 = seq__38642_38682;
var G__38693 = chunk__38643_38683;
var G__38694 = count__38644_38684;
var G__38695 = (i__38645_38685 + (1));
seq__38642_38682 = G__38692;
chunk__38643_38683 = G__38693;
count__38644_38684 = G__38694;
i__38645_38685 = G__38695;
continue;
} else {
var temp__5278__auto___38696 = cljs.core.seq.call(null,seq__38642_38682);
if(temp__5278__auto___38696){
var seq__38642_38697__$1 = temp__5278__auto___38696;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38642_38697__$1)){
var c__30979__auto___38698 = cljs.core.chunk_first.call(null,seq__38642_38697__$1);
var G__38699 = cljs.core.chunk_rest.call(null,seq__38642_38697__$1);
var G__38700 = c__30979__auto___38698;
var G__38701 = cljs.core.count.call(null,c__30979__auto___38698);
var G__38702 = (0);
seq__38642_38682 = G__38699;
chunk__38643_38683 = G__38700;
count__38644_38684 = G__38701;
i__38645_38685 = G__38702;
continue;
} else {
var vec__38651_38703 = cljs.core.first.call(null,seq__38642_38697__$1);
var name_38704 = cljs.core.nth.call(null,vec__38651_38703,(0),null);
var map__38654_38705 = cljs.core.nth.call(null,vec__38651_38703,(1),null);
var map__38654_38706__$1 = ((((!((map__38654_38705 == null)))?((((map__38654_38705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38654_38705.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38654_38705):map__38654_38705);
var doc_38707 = cljs.core.get.call(null,map__38654_38706__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38708 = cljs.core.get.call(null,map__38654_38706__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38704);

cljs.core.println.call(null," ",arglists_38708);

if(cljs.core.truth_(doc_38707)){
cljs.core.println.call(null," ",doc_38707);
} else {
}

var G__38709 = cljs.core.next.call(null,seq__38642_38697__$1);
var G__38710 = null;
var G__38711 = (0);
var G__38712 = (0);
seq__38642_38682 = G__38709;
chunk__38643_38683 = G__38710;
count__38644_38684 = G__38711;
i__38645_38685 = G__38712;
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

var seq__38656 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38657 = null;
var count__38658 = (0);
var i__38659 = (0);
while(true){
if((i__38659 < count__38658)){
var role = cljs.core._nth.call(null,chunk__38657,i__38659);
var temp__5278__auto___38713__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___38713__$1)){
var spec_38714 = temp__5278__auto___38713__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38714));
} else {
}

var G__38715 = seq__38656;
var G__38716 = chunk__38657;
var G__38717 = count__38658;
var G__38718 = (i__38659 + (1));
seq__38656 = G__38715;
chunk__38657 = G__38716;
count__38658 = G__38717;
i__38659 = G__38718;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__38656);
if(temp__5278__auto____$1){
var seq__38656__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38656__$1)){
var c__30979__auto__ = cljs.core.chunk_first.call(null,seq__38656__$1);
var G__38719 = cljs.core.chunk_rest.call(null,seq__38656__$1);
var G__38720 = c__30979__auto__;
var G__38721 = cljs.core.count.call(null,c__30979__auto__);
var G__38722 = (0);
seq__38656 = G__38719;
chunk__38657 = G__38720;
count__38658 = G__38721;
i__38659 = G__38722;
continue;
} else {
var role = cljs.core.first.call(null,seq__38656__$1);
var temp__5278__auto___38723__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___38723__$2)){
var spec_38724 = temp__5278__auto___38723__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38724));
} else {
}

var G__38725 = cljs.core.next.call(null,seq__38656__$1);
var G__38726 = null;
var G__38727 = (0);
var G__38728 = (0);
seq__38656 = G__38725;
chunk__38657 = G__38726;
count__38658 = G__38727;
i__38659 = G__38728;
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

//# sourceMappingURL=repl.js.map?rel=1503492838041
