// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38633){
var map__38634 = p__38633;
var map__38634__$1 = ((((!((map__38634 == null)))?((((map__38634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38634.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38634):map__38634);
var m = map__38634__$1;
var n = cljs.core.get.call(null,map__38634__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38634__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__38636_38658 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38637_38659 = null;
var count__38638_38660 = (0);
var i__38639_38661 = (0);
while(true){
if((i__38639_38661 < count__38638_38660)){
var f_38662 = cljs.core._nth.call(null,chunk__38637_38659,i__38639_38661);
cljs.core.println.call(null,"  ",f_38662);

var G__38663 = seq__38636_38658;
var G__38664 = chunk__38637_38659;
var G__38665 = count__38638_38660;
var G__38666 = (i__38639_38661 + (1));
seq__38636_38658 = G__38663;
chunk__38637_38659 = G__38664;
count__38638_38660 = G__38665;
i__38639_38661 = G__38666;
continue;
} else {
var temp__5278__auto___38667 = cljs.core.seq.call(null,seq__38636_38658);
if(temp__5278__auto___38667){
var seq__38636_38668__$1 = temp__5278__auto___38667;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38636_38668__$1)){
var c__30979__auto___38669 = cljs.core.chunk_first.call(null,seq__38636_38668__$1);
var G__38670 = cljs.core.chunk_rest.call(null,seq__38636_38668__$1);
var G__38671 = c__30979__auto___38669;
var G__38672 = cljs.core.count.call(null,c__30979__auto___38669);
var G__38673 = (0);
seq__38636_38658 = G__38670;
chunk__38637_38659 = G__38671;
count__38638_38660 = G__38672;
i__38639_38661 = G__38673;
continue;
} else {
var f_38674 = cljs.core.first.call(null,seq__38636_38668__$1);
cljs.core.println.call(null,"  ",f_38674);

var G__38675 = cljs.core.next.call(null,seq__38636_38668__$1);
var G__38676 = null;
var G__38677 = (0);
var G__38678 = (0);
seq__38636_38658 = G__38675;
chunk__38637_38659 = G__38676;
count__38638_38660 = G__38677;
i__38639_38661 = G__38678;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38679 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30048__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38679);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38679)))?cljs.core.second.call(null,arglists_38679):arglists_38679));
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
var seq__38640_38680 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38641_38681 = null;
var count__38642_38682 = (0);
var i__38643_38683 = (0);
while(true){
if((i__38643_38683 < count__38642_38682)){
var vec__38644_38684 = cljs.core._nth.call(null,chunk__38641_38681,i__38643_38683);
var name_38685 = cljs.core.nth.call(null,vec__38644_38684,(0),null);
var map__38647_38686 = cljs.core.nth.call(null,vec__38644_38684,(1),null);
var map__38647_38687__$1 = ((((!((map__38647_38686 == null)))?((((map__38647_38686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38647_38686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38647_38686):map__38647_38686);
var doc_38688 = cljs.core.get.call(null,map__38647_38687__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38689 = cljs.core.get.call(null,map__38647_38687__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38685);

cljs.core.println.call(null," ",arglists_38689);

if(cljs.core.truth_(doc_38688)){
cljs.core.println.call(null," ",doc_38688);
} else {
}

var G__38690 = seq__38640_38680;
var G__38691 = chunk__38641_38681;
var G__38692 = count__38642_38682;
var G__38693 = (i__38643_38683 + (1));
seq__38640_38680 = G__38690;
chunk__38641_38681 = G__38691;
count__38642_38682 = G__38692;
i__38643_38683 = G__38693;
continue;
} else {
var temp__5278__auto___38694 = cljs.core.seq.call(null,seq__38640_38680);
if(temp__5278__auto___38694){
var seq__38640_38695__$1 = temp__5278__auto___38694;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38640_38695__$1)){
var c__30979__auto___38696 = cljs.core.chunk_first.call(null,seq__38640_38695__$1);
var G__38697 = cljs.core.chunk_rest.call(null,seq__38640_38695__$1);
var G__38698 = c__30979__auto___38696;
var G__38699 = cljs.core.count.call(null,c__30979__auto___38696);
var G__38700 = (0);
seq__38640_38680 = G__38697;
chunk__38641_38681 = G__38698;
count__38642_38682 = G__38699;
i__38643_38683 = G__38700;
continue;
} else {
var vec__38649_38701 = cljs.core.first.call(null,seq__38640_38695__$1);
var name_38702 = cljs.core.nth.call(null,vec__38649_38701,(0),null);
var map__38652_38703 = cljs.core.nth.call(null,vec__38649_38701,(1),null);
var map__38652_38704__$1 = ((((!((map__38652_38703 == null)))?((((map__38652_38703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38652_38703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38652_38703):map__38652_38703);
var doc_38705 = cljs.core.get.call(null,map__38652_38704__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38706 = cljs.core.get.call(null,map__38652_38704__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38702);

cljs.core.println.call(null," ",arglists_38706);

if(cljs.core.truth_(doc_38705)){
cljs.core.println.call(null," ",doc_38705);
} else {
}

var G__38707 = cljs.core.next.call(null,seq__38640_38695__$1);
var G__38708 = null;
var G__38709 = (0);
var G__38710 = (0);
seq__38640_38680 = G__38707;
chunk__38641_38681 = G__38708;
count__38642_38682 = G__38709;
i__38643_38683 = G__38710;
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

var seq__38654 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38655 = null;
var count__38656 = (0);
var i__38657 = (0);
while(true){
if((i__38657 < count__38656)){
var role = cljs.core._nth.call(null,chunk__38655,i__38657);
var temp__5278__auto___38711__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___38711__$1)){
var spec_38712 = temp__5278__auto___38711__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38712));
} else {
}

var G__38713 = seq__38654;
var G__38714 = chunk__38655;
var G__38715 = count__38656;
var G__38716 = (i__38657 + (1));
seq__38654 = G__38713;
chunk__38655 = G__38714;
count__38656 = G__38715;
i__38657 = G__38716;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__38654);
if(temp__5278__auto____$1){
var seq__38654__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38654__$1)){
var c__30979__auto__ = cljs.core.chunk_first.call(null,seq__38654__$1);
var G__38717 = cljs.core.chunk_rest.call(null,seq__38654__$1);
var G__38718 = c__30979__auto__;
var G__38719 = cljs.core.count.call(null,c__30979__auto__);
var G__38720 = (0);
seq__38654 = G__38717;
chunk__38655 = G__38718;
count__38656 = G__38719;
i__38657 = G__38720;
continue;
} else {
var role = cljs.core.first.call(null,seq__38654__$1);
var temp__5278__auto___38721__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___38721__$2)){
var spec_38722 = temp__5278__auto___38721__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38722));
} else {
}

var G__38723 = cljs.core.next.call(null,seq__38654__$1);
var G__38724 = null;
var G__38725 = (0);
var G__38726 = (0);
seq__38654 = G__38723;
chunk__38655 = G__38724;
count__38656 = G__38725;
i__38657 = G__38726;
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

//# sourceMappingURL=repl.js.map?rel=1503485732601
