// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e38923){if((e38923 instanceof Error)){
var e = e38923;
return "Error: Unable to stringify";
} else {
throw e38923;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38926 = arguments.length;
switch (G__38926) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38924_SHARP_){
if(typeof p1__38924_SHARP_ === 'string'){
return p1__38924_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38924_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__31332__auto__ = [];
var len__31325__auto___38929 = arguments.length;
var i__31326__auto___38930 = (0);
while(true){
if((i__31326__auto___38930 < len__31325__auto___38929)){
args__31332__auto__.push((arguments[i__31326__auto___38930]));

var G__38931 = (i__31326__auto___38930 + (1));
i__31326__auto___38930 = G__38931;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38928){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38928));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31332__auto__ = [];
var len__31325__auto___38933 = arguments.length;
var i__31326__auto___38934 = (0);
while(true){
if((i__31326__auto___38934 < len__31325__auto___38933)){
args__31332__auto__.push((arguments[i__31326__auto___38934]));

var G__38935 = (i__31326__auto___38934 + (1));
i__31326__auto___38934 = G__38935;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38932){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38932));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38936){
var map__38937 = p__38936;
var map__38937__$1 = ((((!((map__38937 == null)))?((((map__38937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38937.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38937):map__38937);
var message = cljs.core.get.call(null,map__38937__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38937__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30048__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30036__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30036__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30036__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__34023__auto___39016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto___39016,ch){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto___39016,ch){
return (function (state_38988){
var state_val_38989 = (state_38988[(1)]);
if((state_val_38989 === (7))){
var inst_38984 = (state_38988[(2)]);
var state_38988__$1 = state_38988;
var statearr_38990_39017 = state_38988__$1;
(statearr_38990_39017[(2)] = inst_38984);

(statearr_38990_39017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38989 === (1))){
var state_38988__$1 = state_38988;
var statearr_38991_39018 = state_38988__$1;
(statearr_38991_39018[(2)] = null);

(statearr_38991_39018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38989 === (4))){
var inst_38941 = (state_38988[(7)]);
var inst_38941__$1 = (state_38988[(2)]);
var state_38988__$1 = (function (){var statearr_38992 = state_38988;
(statearr_38992[(7)] = inst_38941__$1);

return statearr_38992;
})();
if(cljs.core.truth_(inst_38941__$1)){
var statearr_38993_39019 = state_38988__$1;
(statearr_38993_39019[(1)] = (5));

} else {
var statearr_38994_39020 = state_38988__$1;
(statearr_38994_39020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38989 === (15))){
var inst_38948 = (state_38988[(8)]);
var inst_38963 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38948);
var inst_38964 = cljs.core.first.call(null,inst_38963);
var inst_38965 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38964);
var inst_38966 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38965)].join('');
var inst_38967 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38966);
var state_38988__$1 = state_38988;
var statearr_38995_39021 = state_38988__$1;
(statearr_38995_39021[(2)] = inst_38967);

(statearr_38995_39021[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38989 === (13))){
var inst_38972 = (state_38988[(2)]);
var state_38988__$1 = state_38988;
var statearr_38996_39022 = state_38988__$1;
(statearr_38996_39022[(2)] = inst_38972);

(statearr_38996_39022[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38989 === (6))){
var state_38988__$1 = state_38988;
var statearr_38997_39023 = state_38988__$1;
(statearr_38997_39023[(2)] = null);

(statearr_38997_39023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38989 === (17))){
var inst_38970 = (state_38988[(2)]);
var state_38988__$1 = state_38988;
var statearr_38998_39024 = state_38988__$1;
(statearr_38998_39024[(2)] = inst_38970);

(statearr_38998_39024[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38989 === (3))){
var inst_38986 = (state_38988[(2)]);
var state_38988__$1 = state_38988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38988__$1,inst_38986);
} else {
if((state_val_38989 === (12))){
var inst_38947 = (state_38988[(9)]);
var inst_38961 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38947,opts);
var state_38988__$1 = state_38988;
if(cljs.core.truth_(inst_38961)){
var statearr_38999_39025 = state_38988__$1;
(statearr_38999_39025[(1)] = (15));

} else {
var statearr_39000_39026 = state_38988__$1;
(statearr_39000_39026[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38989 === (2))){
var state_38988__$1 = state_38988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38988__$1,(4),ch);
} else {
if((state_val_38989 === (11))){
var inst_38948 = (state_38988[(8)]);
var inst_38953 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38954 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38948);
var inst_38955 = cljs.core.async.timeout.call(null,(1000));
var inst_38956 = [inst_38954,inst_38955];
var inst_38957 = (new cljs.core.PersistentVector(null,2,(5),inst_38953,inst_38956,null));
var state_38988__$1 = state_38988;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38988__$1,(14),inst_38957);
} else {
if((state_val_38989 === (9))){
var inst_38948 = (state_38988[(8)]);
var inst_38974 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38975 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38948);
var inst_38976 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38975);
var inst_38977 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38976)].join('');
var inst_38978 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38977);
var state_38988__$1 = (function (){var statearr_39001 = state_38988;
(statearr_39001[(10)] = inst_38974);

return statearr_39001;
})();
var statearr_39002_39027 = state_38988__$1;
(statearr_39002_39027[(2)] = inst_38978);

(statearr_39002_39027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38989 === (5))){
var inst_38941 = (state_38988[(7)]);
var inst_38943 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38944 = (new cljs.core.PersistentArrayMap(null,2,inst_38943,null));
var inst_38945 = (new cljs.core.PersistentHashSet(null,inst_38944,null));
var inst_38946 = figwheel.client.focus_msgs.call(null,inst_38945,inst_38941);
var inst_38947 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38946);
var inst_38948 = cljs.core.first.call(null,inst_38946);
var inst_38949 = figwheel.client.autoload_QMARK_.call(null);
var state_38988__$1 = (function (){var statearr_39003 = state_38988;
(statearr_39003[(8)] = inst_38948);

(statearr_39003[(9)] = inst_38947);

return statearr_39003;
})();
if(cljs.core.truth_(inst_38949)){
var statearr_39004_39028 = state_38988__$1;
(statearr_39004_39028[(1)] = (8));

} else {
var statearr_39005_39029 = state_38988__$1;
(statearr_39005_39029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38989 === (14))){
var inst_38959 = (state_38988[(2)]);
var state_38988__$1 = state_38988;
var statearr_39006_39030 = state_38988__$1;
(statearr_39006_39030[(2)] = inst_38959);

(statearr_39006_39030[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38989 === (16))){
var state_38988__$1 = state_38988;
var statearr_39007_39031 = state_38988__$1;
(statearr_39007_39031[(2)] = null);

(statearr_39007_39031[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38989 === (10))){
var inst_38980 = (state_38988[(2)]);
var state_38988__$1 = (function (){var statearr_39008 = state_38988;
(statearr_39008[(11)] = inst_38980);

return statearr_39008;
})();
var statearr_39009_39032 = state_38988__$1;
(statearr_39009_39032[(2)] = null);

(statearr_39009_39032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38989 === (8))){
var inst_38947 = (state_38988[(9)]);
var inst_38951 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38947,opts);
var state_38988__$1 = state_38988;
if(cljs.core.truth_(inst_38951)){
var statearr_39010_39033 = state_38988__$1;
(statearr_39010_39033[(1)] = (11));

} else {
var statearr_39011_39034 = state_38988__$1;
(statearr_39011_39034[(1)] = (12));

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
});})(c__34023__auto___39016,ch))
;
return ((function (switch__33933__auto__,c__34023__auto___39016,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33934__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33934__auto____0 = (function (){
var statearr_39012 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39012[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33934__auto__);

(statearr_39012[(1)] = (1));

return statearr_39012;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33934__auto____1 = (function (state_38988){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_38988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e39013){if((e39013 instanceof Object)){
var ex__33937__auto__ = e39013;
var statearr_39014_39035 = state_38988;
(statearr_39014_39035[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39036 = state_38988;
state_38988 = G__39036;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33934__auto__ = function(state_38988){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33934__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33934__auto____1.call(this,state_38988);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33934__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33934__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto___39016,ch))
})();
var state__34025__auto__ = (function (){var statearr_39015 = f__34024__auto__.call(null);
(statearr_39015[(6)] = c__34023__auto___39016);

return statearr_39015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto___39016,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39037_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39037_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_39039 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39039){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39038){if((e39038 instanceof Error)){
var e = e39038;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39039], null));
} else {
var e = e39038;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39039))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39040){
var map__39041 = p__39040;
var map__39041__$1 = ((((!((map__39041 == null)))?((((map__39041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39041):map__39041);
var opts = map__39041__$1;
var build_id = cljs.core.get.call(null,map__39041__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39041,map__39041__$1,opts,build_id){
return (function (p__39043){
var vec__39044 = p__39043;
var seq__39045 = cljs.core.seq.call(null,vec__39044);
var first__39046 = cljs.core.first.call(null,seq__39045);
var seq__39045__$1 = cljs.core.next.call(null,seq__39045);
var map__39047 = first__39046;
var map__39047__$1 = ((((!((map__39047 == null)))?((((map__39047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39047):map__39047);
var msg = map__39047__$1;
var msg_name = cljs.core.get.call(null,map__39047__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39045__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39044,seq__39045,first__39046,seq__39045__$1,map__39047,map__39047__$1,msg,msg_name,_,map__39041,map__39041__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39044,seq__39045,first__39046,seq__39045__$1,map__39047,map__39047__$1,msg,msg_name,_,map__39041,map__39041__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39041,map__39041__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39049){
var vec__39050 = p__39049;
var seq__39051 = cljs.core.seq.call(null,vec__39050);
var first__39052 = cljs.core.first.call(null,seq__39051);
var seq__39051__$1 = cljs.core.next.call(null,seq__39051);
var map__39053 = first__39052;
var map__39053__$1 = ((((!((map__39053 == null)))?((((map__39053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39053.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39053):map__39053);
var msg = map__39053__$1;
var msg_name = cljs.core.get.call(null,map__39053__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39051__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39055){
var map__39056 = p__39055;
var map__39056__$1 = ((((!((map__39056 == null)))?((((map__39056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39056.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39056):map__39056);
var on_compile_warning = cljs.core.get.call(null,map__39056__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39056__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39056,map__39056__$1,on_compile_warning,on_compile_fail){
return (function (p__39058){
var vec__39059 = p__39058;
var seq__39060 = cljs.core.seq.call(null,vec__39059);
var first__39061 = cljs.core.first.call(null,seq__39060);
var seq__39060__$1 = cljs.core.next.call(null,seq__39060);
var map__39062 = first__39061;
var map__39062__$1 = ((((!((map__39062 == null)))?((((map__39062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39062):map__39062);
var msg = map__39062__$1;
var msg_name = cljs.core.get.call(null,map__39062__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39060__$1;
var pred__39064 = cljs.core._EQ_;
var expr__39065 = msg_name;
if(cljs.core.truth_(pred__39064.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39065))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39064.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39065))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39056,map__39056__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__34023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto__,msg_hist,msg_names,msg){
return (function (state_39154){
var state_val_39155 = (state_39154[(1)]);
if((state_val_39155 === (7))){
var inst_39074 = (state_39154[(2)]);
var state_39154__$1 = state_39154;
if(cljs.core.truth_(inst_39074)){
var statearr_39156_39203 = state_39154__$1;
(statearr_39156_39203[(1)] = (8));

} else {
var statearr_39157_39204 = state_39154__$1;
(statearr_39157_39204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (20))){
var inst_39148 = (state_39154[(2)]);
var state_39154__$1 = state_39154;
var statearr_39158_39205 = state_39154__$1;
(statearr_39158_39205[(2)] = inst_39148);

(statearr_39158_39205[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (27))){
var inst_39144 = (state_39154[(2)]);
var state_39154__$1 = state_39154;
var statearr_39159_39206 = state_39154__$1;
(statearr_39159_39206[(2)] = inst_39144);

(statearr_39159_39206[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (1))){
var inst_39067 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39154__$1 = state_39154;
if(cljs.core.truth_(inst_39067)){
var statearr_39160_39207 = state_39154__$1;
(statearr_39160_39207[(1)] = (2));

} else {
var statearr_39161_39208 = state_39154__$1;
(statearr_39161_39208[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (24))){
var inst_39146 = (state_39154[(2)]);
var state_39154__$1 = state_39154;
var statearr_39162_39209 = state_39154__$1;
(statearr_39162_39209[(2)] = inst_39146);

(statearr_39162_39209[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (4))){
var inst_39152 = (state_39154[(2)]);
var state_39154__$1 = state_39154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39154__$1,inst_39152);
} else {
if((state_val_39155 === (15))){
var inst_39150 = (state_39154[(2)]);
var state_39154__$1 = state_39154;
var statearr_39163_39210 = state_39154__$1;
(statearr_39163_39210[(2)] = inst_39150);

(statearr_39163_39210[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (21))){
var inst_39103 = (state_39154[(2)]);
var inst_39104 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39105 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39104);
var state_39154__$1 = (function (){var statearr_39164 = state_39154;
(statearr_39164[(7)] = inst_39103);

return statearr_39164;
})();
var statearr_39165_39211 = state_39154__$1;
(statearr_39165_39211[(2)] = inst_39105);

(statearr_39165_39211[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (31))){
var inst_39133 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39154__$1 = state_39154;
if(cljs.core.truth_(inst_39133)){
var statearr_39166_39212 = state_39154__$1;
(statearr_39166_39212[(1)] = (34));

} else {
var statearr_39167_39213 = state_39154__$1;
(statearr_39167_39213[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (32))){
var inst_39142 = (state_39154[(2)]);
var state_39154__$1 = state_39154;
var statearr_39168_39214 = state_39154__$1;
(statearr_39168_39214[(2)] = inst_39142);

(statearr_39168_39214[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (33))){
var inst_39129 = (state_39154[(2)]);
var inst_39130 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39131 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39130);
var state_39154__$1 = (function (){var statearr_39169 = state_39154;
(statearr_39169[(8)] = inst_39129);

return statearr_39169;
})();
var statearr_39170_39215 = state_39154__$1;
(statearr_39170_39215[(2)] = inst_39131);

(statearr_39170_39215[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (13))){
var inst_39088 = figwheel.client.heads_up.clear.call(null);
var state_39154__$1 = state_39154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39154__$1,(16),inst_39088);
} else {
if((state_val_39155 === (22))){
var inst_39109 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39110 = figwheel.client.heads_up.append_warning_message.call(null,inst_39109);
var state_39154__$1 = state_39154;
var statearr_39171_39216 = state_39154__$1;
(statearr_39171_39216[(2)] = inst_39110);

(statearr_39171_39216[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (36))){
var inst_39140 = (state_39154[(2)]);
var state_39154__$1 = state_39154;
var statearr_39172_39217 = state_39154__$1;
(statearr_39172_39217[(2)] = inst_39140);

(statearr_39172_39217[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (29))){
var inst_39120 = (state_39154[(2)]);
var inst_39121 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39122 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39121);
var state_39154__$1 = (function (){var statearr_39173 = state_39154;
(statearr_39173[(9)] = inst_39120);

return statearr_39173;
})();
var statearr_39174_39218 = state_39154__$1;
(statearr_39174_39218[(2)] = inst_39122);

(statearr_39174_39218[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (6))){
var inst_39069 = (state_39154[(10)]);
var state_39154__$1 = state_39154;
var statearr_39175_39219 = state_39154__$1;
(statearr_39175_39219[(2)] = inst_39069);

(statearr_39175_39219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (28))){
var inst_39116 = (state_39154[(2)]);
var inst_39117 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39118 = figwheel.client.heads_up.display_warning.call(null,inst_39117);
var state_39154__$1 = (function (){var statearr_39176 = state_39154;
(statearr_39176[(11)] = inst_39116);

return statearr_39176;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39154__$1,(29),inst_39118);
} else {
if((state_val_39155 === (25))){
var inst_39114 = figwheel.client.heads_up.clear.call(null);
var state_39154__$1 = state_39154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39154__$1,(28),inst_39114);
} else {
if((state_val_39155 === (34))){
var inst_39135 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39154__$1 = state_39154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39154__$1,(37),inst_39135);
} else {
if((state_val_39155 === (17))){
var inst_39094 = (state_39154[(2)]);
var inst_39095 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39096 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39095);
var state_39154__$1 = (function (){var statearr_39177 = state_39154;
(statearr_39177[(12)] = inst_39094);

return statearr_39177;
})();
var statearr_39178_39220 = state_39154__$1;
(statearr_39178_39220[(2)] = inst_39096);

(statearr_39178_39220[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (3))){
var inst_39086 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39154__$1 = state_39154;
if(cljs.core.truth_(inst_39086)){
var statearr_39179_39221 = state_39154__$1;
(statearr_39179_39221[(1)] = (13));

} else {
var statearr_39180_39222 = state_39154__$1;
(statearr_39180_39222[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (12))){
var inst_39082 = (state_39154[(2)]);
var state_39154__$1 = state_39154;
var statearr_39181_39223 = state_39154__$1;
(statearr_39181_39223[(2)] = inst_39082);

(statearr_39181_39223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (2))){
var inst_39069 = (state_39154[(10)]);
var inst_39069__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39154__$1 = (function (){var statearr_39182 = state_39154;
(statearr_39182[(10)] = inst_39069__$1);

return statearr_39182;
})();
if(cljs.core.truth_(inst_39069__$1)){
var statearr_39183_39224 = state_39154__$1;
(statearr_39183_39224[(1)] = (5));

} else {
var statearr_39184_39225 = state_39154__$1;
(statearr_39184_39225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (23))){
var inst_39112 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39154__$1 = state_39154;
if(cljs.core.truth_(inst_39112)){
var statearr_39185_39226 = state_39154__$1;
(statearr_39185_39226[(1)] = (25));

} else {
var statearr_39186_39227 = state_39154__$1;
(statearr_39186_39227[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (35))){
var state_39154__$1 = state_39154;
var statearr_39187_39228 = state_39154__$1;
(statearr_39187_39228[(2)] = null);

(statearr_39187_39228[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (19))){
var inst_39107 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39154__$1 = state_39154;
if(cljs.core.truth_(inst_39107)){
var statearr_39188_39229 = state_39154__$1;
(statearr_39188_39229[(1)] = (22));

} else {
var statearr_39189_39230 = state_39154__$1;
(statearr_39189_39230[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (11))){
var inst_39078 = (state_39154[(2)]);
var state_39154__$1 = state_39154;
var statearr_39190_39231 = state_39154__$1;
(statearr_39190_39231[(2)] = inst_39078);

(statearr_39190_39231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (9))){
var inst_39080 = figwheel.client.heads_up.clear.call(null);
var state_39154__$1 = state_39154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39154__$1,(12),inst_39080);
} else {
if((state_val_39155 === (5))){
var inst_39071 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39154__$1 = state_39154;
var statearr_39191_39232 = state_39154__$1;
(statearr_39191_39232[(2)] = inst_39071);

(statearr_39191_39232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (14))){
var inst_39098 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39154__$1 = state_39154;
if(cljs.core.truth_(inst_39098)){
var statearr_39192_39233 = state_39154__$1;
(statearr_39192_39233[(1)] = (18));

} else {
var statearr_39193_39234 = state_39154__$1;
(statearr_39193_39234[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (26))){
var inst_39124 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39154__$1 = state_39154;
if(cljs.core.truth_(inst_39124)){
var statearr_39194_39235 = state_39154__$1;
(statearr_39194_39235[(1)] = (30));

} else {
var statearr_39195_39236 = state_39154__$1;
(statearr_39195_39236[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (16))){
var inst_39090 = (state_39154[(2)]);
var inst_39091 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39092 = figwheel.client.heads_up.display_exception.call(null,inst_39091);
var state_39154__$1 = (function (){var statearr_39196 = state_39154;
(statearr_39196[(13)] = inst_39090);

return statearr_39196;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39154__$1,(17),inst_39092);
} else {
if((state_val_39155 === (30))){
var inst_39126 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39127 = figwheel.client.heads_up.display_warning.call(null,inst_39126);
var state_39154__$1 = state_39154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39154__$1,(33),inst_39127);
} else {
if((state_val_39155 === (10))){
var inst_39084 = (state_39154[(2)]);
var state_39154__$1 = state_39154;
var statearr_39197_39237 = state_39154__$1;
(statearr_39197_39237[(2)] = inst_39084);

(statearr_39197_39237[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (18))){
var inst_39100 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39101 = figwheel.client.heads_up.display_exception.call(null,inst_39100);
var state_39154__$1 = state_39154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39154__$1,(21),inst_39101);
} else {
if((state_val_39155 === (37))){
var inst_39137 = (state_39154[(2)]);
var state_39154__$1 = state_39154;
var statearr_39198_39238 = state_39154__$1;
(statearr_39198_39238[(2)] = inst_39137);

(statearr_39198_39238[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39155 === (8))){
var inst_39076 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39154__$1 = state_39154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39154__$1,(11),inst_39076);
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
});})(c__34023__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33933__auto__,c__34023__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33934__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33934__auto____0 = (function (){
var statearr_39199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39199[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33934__auto__);

(statearr_39199[(1)] = (1));

return statearr_39199;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33934__auto____1 = (function (state_39154){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_39154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e39200){if((e39200 instanceof Object)){
var ex__33937__auto__ = e39200;
var statearr_39201_39239 = state_39154;
(statearr_39201_39239[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39240 = state_39154;
state_39154 = G__39240;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33934__auto__ = function(state_39154){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33934__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33934__auto____1.call(this,state_39154);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33934__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33934__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto__,msg_hist,msg_names,msg))
})();
var state__34025__auto__ = (function (){var statearr_39202 = f__34024__auto__.call(null);
(statearr_39202[(6)] = c__34023__auto__);

return statearr_39202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto__,msg_hist,msg_names,msg))
);

return c__34023__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34023__auto___39269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto___39269,ch){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto___39269,ch){
return (function (state_39255){
var state_val_39256 = (state_39255[(1)]);
if((state_val_39256 === (1))){
var state_39255__$1 = state_39255;
var statearr_39257_39270 = state_39255__$1;
(statearr_39257_39270[(2)] = null);

(statearr_39257_39270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39256 === (2))){
var state_39255__$1 = state_39255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39255__$1,(4),ch);
} else {
if((state_val_39256 === (3))){
var inst_39253 = (state_39255[(2)]);
var state_39255__$1 = state_39255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39255__$1,inst_39253);
} else {
if((state_val_39256 === (4))){
var inst_39243 = (state_39255[(7)]);
var inst_39243__$1 = (state_39255[(2)]);
var state_39255__$1 = (function (){var statearr_39258 = state_39255;
(statearr_39258[(7)] = inst_39243__$1);

return statearr_39258;
})();
if(cljs.core.truth_(inst_39243__$1)){
var statearr_39259_39271 = state_39255__$1;
(statearr_39259_39271[(1)] = (5));

} else {
var statearr_39260_39272 = state_39255__$1;
(statearr_39260_39272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39256 === (5))){
var inst_39243 = (state_39255[(7)]);
var inst_39245 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39243);
var state_39255__$1 = state_39255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39255__$1,(8),inst_39245);
} else {
if((state_val_39256 === (6))){
var state_39255__$1 = state_39255;
var statearr_39261_39273 = state_39255__$1;
(statearr_39261_39273[(2)] = null);

(statearr_39261_39273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39256 === (7))){
var inst_39251 = (state_39255[(2)]);
var state_39255__$1 = state_39255;
var statearr_39262_39274 = state_39255__$1;
(statearr_39262_39274[(2)] = inst_39251);

(statearr_39262_39274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39256 === (8))){
var inst_39247 = (state_39255[(2)]);
var state_39255__$1 = (function (){var statearr_39263 = state_39255;
(statearr_39263[(8)] = inst_39247);

return statearr_39263;
})();
var statearr_39264_39275 = state_39255__$1;
(statearr_39264_39275[(2)] = null);

(statearr_39264_39275[(1)] = (2));


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
});})(c__34023__auto___39269,ch))
;
return ((function (switch__33933__auto__,c__34023__auto___39269,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33934__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33934__auto____0 = (function (){
var statearr_39265 = [null,null,null,null,null,null,null,null,null];
(statearr_39265[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33934__auto__);

(statearr_39265[(1)] = (1));

return statearr_39265;
});
var figwheel$client$heads_up_plugin_$_state_machine__33934__auto____1 = (function (state_39255){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_39255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e39266){if((e39266 instanceof Object)){
var ex__33937__auto__ = e39266;
var statearr_39267_39276 = state_39255;
(statearr_39267_39276[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39277 = state_39255;
state_39255 = G__39277;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33934__auto__ = function(state_39255){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33934__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33934__auto____1.call(this,state_39255);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33934__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33934__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto___39269,ch))
})();
var state__34025__auto__ = (function (){var statearr_39268 = f__34024__auto__.call(null);
(statearr_39268[(6)] = c__34023__auto___39269);

return statearr_39268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto___39269,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto__){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto__){
return (function (state_39283){
var state_val_39284 = (state_39283[(1)]);
if((state_val_39284 === (1))){
var inst_39278 = cljs.core.async.timeout.call(null,(3000));
var state_39283__$1 = state_39283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39283__$1,(2),inst_39278);
} else {
if((state_val_39284 === (2))){
var inst_39280 = (state_39283[(2)]);
var inst_39281 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39283__$1 = (function (){var statearr_39285 = state_39283;
(statearr_39285[(7)] = inst_39280);

return statearr_39285;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39283__$1,inst_39281);
} else {
return null;
}
}
});})(c__34023__auto__))
;
return ((function (switch__33933__auto__,c__34023__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33934__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33934__auto____0 = (function (){
var statearr_39286 = [null,null,null,null,null,null,null,null];
(statearr_39286[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33934__auto__);

(statearr_39286[(1)] = (1));

return statearr_39286;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33934__auto____1 = (function (state_39283){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_39283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e39287){if((e39287 instanceof Object)){
var ex__33937__auto__ = e39287;
var statearr_39288_39290 = state_39283;
(statearr_39288_39290[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39291 = state_39283;
state_39283 = G__39291;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33934__auto__ = function(state_39283){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33934__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33934__auto____1.call(this,state_39283);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33934__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33934__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto__))
})();
var state__34025__auto__ = (function (){var statearr_39289 = f__34024__auto__.call(null);
(statearr_39289[(6)] = c__34023__auto__);

return statearr_39289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto__))
);

return c__34023__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5278__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5278__auto__)){
var figwheel_version = temp__5278__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34023__auto__,figwheel_version,temp__5278__auto__){
return (function (){
var f__34024__auto__ = (function (){var switch__33933__auto__ = ((function (c__34023__auto__,figwheel_version,temp__5278__auto__){
return (function (state_39298){
var state_val_39299 = (state_39298[(1)]);
if((state_val_39299 === (1))){
var inst_39292 = cljs.core.async.timeout.call(null,(2000));
var state_39298__$1 = state_39298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39298__$1,(2),inst_39292);
} else {
if((state_val_39299 === (2))){
var inst_39294 = (state_39298[(2)]);
var inst_39295 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39296 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39295);
var state_39298__$1 = (function (){var statearr_39300 = state_39298;
(statearr_39300[(7)] = inst_39294);

return statearr_39300;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39298__$1,inst_39296);
} else {
return null;
}
}
});})(c__34023__auto__,figwheel_version,temp__5278__auto__))
;
return ((function (switch__33933__auto__,c__34023__auto__,figwheel_version,temp__5278__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33934__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33934__auto____0 = (function (){
var statearr_39301 = [null,null,null,null,null,null,null,null];
(statearr_39301[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33934__auto__);

(statearr_39301[(1)] = (1));

return statearr_39301;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33934__auto____1 = (function (state_39298){
while(true){
var ret_value__33935__auto__ = (function (){try{while(true){
var result__33936__auto__ = switch__33933__auto__.call(null,state_39298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33936__auto__;
}
break;
}
}catch (e39302){if((e39302 instanceof Object)){
var ex__33937__auto__ = e39302;
var statearr_39303_39305 = state_39298;
(statearr_39303_39305[(5)] = ex__33937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39306 = state_39298;
state_39298 = G__39306;
continue;
} else {
return ret_value__33935__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33934__auto__ = function(state_39298){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33934__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33934__auto____1.call(this,state_39298);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33934__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33934__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33934__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33934__auto__;
})()
;})(switch__33933__auto__,c__34023__auto__,figwheel_version,temp__5278__auto__))
})();
var state__34025__auto__ = (function (){var statearr_39304 = f__34024__auto__.call(null);
(statearr_39304[(6)] = c__34023__auto__);

return statearr_39304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34025__auto__);
});})(c__34023__auto__,figwheel_version,temp__5278__auto__))
);

return c__34023__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39307){
var map__39308 = p__39307;
var map__39308__$1 = ((((!((map__39308 == null)))?((((map__39308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39308):map__39308);
var file = cljs.core.get.call(null,map__39308__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39308__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39308__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39310 = "";
var G__39310__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39310),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39310);
var G__39310__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39310__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39310__$1);
if(cljs.core.truth_((function (){var and__30036__auto__ = line;
if(cljs.core.truth_(and__30036__auto__)){
return column;
} else {
return and__30036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39310__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39310__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39311){
var map__39312 = p__39311;
var map__39312__$1 = ((((!((map__39312 == null)))?((((map__39312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39312.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39312):map__39312);
var ed = map__39312__$1;
var formatted_exception = cljs.core.get.call(null,map__39312__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39312__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39312__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39314_39318 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39315_39319 = null;
var count__39316_39320 = (0);
var i__39317_39321 = (0);
while(true){
if((i__39317_39321 < count__39316_39320)){
var msg_39322 = cljs.core._nth.call(null,chunk__39315_39319,i__39317_39321);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39322);

var G__39323 = seq__39314_39318;
var G__39324 = chunk__39315_39319;
var G__39325 = count__39316_39320;
var G__39326 = (i__39317_39321 + (1));
seq__39314_39318 = G__39323;
chunk__39315_39319 = G__39324;
count__39316_39320 = G__39325;
i__39317_39321 = G__39326;
continue;
} else {
var temp__5278__auto___39327 = cljs.core.seq.call(null,seq__39314_39318);
if(temp__5278__auto___39327){
var seq__39314_39328__$1 = temp__5278__auto___39327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39314_39328__$1)){
var c__30979__auto___39329 = cljs.core.chunk_first.call(null,seq__39314_39328__$1);
var G__39330 = cljs.core.chunk_rest.call(null,seq__39314_39328__$1);
var G__39331 = c__30979__auto___39329;
var G__39332 = cljs.core.count.call(null,c__30979__auto___39329);
var G__39333 = (0);
seq__39314_39318 = G__39330;
chunk__39315_39319 = G__39331;
count__39316_39320 = G__39332;
i__39317_39321 = G__39333;
continue;
} else {
var msg_39334 = cljs.core.first.call(null,seq__39314_39328__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39334);

var G__39335 = cljs.core.next.call(null,seq__39314_39328__$1);
var G__39336 = null;
var G__39337 = (0);
var G__39338 = (0);
seq__39314_39318 = G__39335;
chunk__39315_39319 = G__39336;
count__39316_39320 = G__39337;
i__39317_39321 = G__39338;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39339){
var map__39340 = p__39339;
var map__39340__$1 = ((((!((map__39340 == null)))?((((map__39340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39340):map__39340);
var w = map__39340__$1;
var message = cljs.core.get.call(null,map__39340__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30036__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30036__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30036__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39342 = cljs.core.seq.call(null,plugins);
var chunk__39343 = null;
var count__39344 = (0);
var i__39345 = (0);
while(true){
if((i__39345 < count__39344)){
var vec__39346 = cljs.core._nth.call(null,chunk__39343,i__39345);
var k = cljs.core.nth.call(null,vec__39346,(0),null);
var plugin = cljs.core.nth.call(null,vec__39346,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39352 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39342,chunk__39343,count__39344,i__39345,pl_39352,vec__39346,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39352.call(null,msg_hist);
});})(seq__39342,chunk__39343,count__39344,i__39345,pl_39352,vec__39346,k,plugin))
);
} else {
}

var G__39353 = seq__39342;
var G__39354 = chunk__39343;
var G__39355 = count__39344;
var G__39356 = (i__39345 + (1));
seq__39342 = G__39353;
chunk__39343 = G__39354;
count__39344 = G__39355;
i__39345 = G__39356;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__39342);
if(temp__5278__auto__){
var seq__39342__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39342__$1)){
var c__30979__auto__ = cljs.core.chunk_first.call(null,seq__39342__$1);
var G__39357 = cljs.core.chunk_rest.call(null,seq__39342__$1);
var G__39358 = c__30979__auto__;
var G__39359 = cljs.core.count.call(null,c__30979__auto__);
var G__39360 = (0);
seq__39342 = G__39357;
chunk__39343 = G__39358;
count__39344 = G__39359;
i__39345 = G__39360;
continue;
} else {
var vec__39349 = cljs.core.first.call(null,seq__39342__$1);
var k = cljs.core.nth.call(null,vec__39349,(0),null);
var plugin = cljs.core.nth.call(null,vec__39349,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39361 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39342,chunk__39343,count__39344,i__39345,pl_39361,vec__39349,k,plugin,seq__39342__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39361.call(null,msg_hist);
});})(seq__39342,chunk__39343,count__39344,i__39345,pl_39361,vec__39349,k,plugin,seq__39342__$1,temp__5278__auto__))
);
} else {
}

var G__39362 = cljs.core.next.call(null,seq__39342__$1);
var G__39363 = null;
var G__39364 = (0);
var G__39365 = (0);
seq__39342 = G__39362;
chunk__39343 = G__39363;
count__39344 = G__39364;
i__39345 = G__39365;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__39367 = arguments.length;
switch (G__39367) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__39368_39373 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39369_39374 = null;
var count__39370_39375 = (0);
var i__39371_39376 = (0);
while(true){
if((i__39371_39376 < count__39370_39375)){
var msg_39377 = cljs.core._nth.call(null,chunk__39369_39374,i__39371_39376);
figwheel.client.socket.handle_incoming_message.call(null,msg_39377);

var G__39378 = seq__39368_39373;
var G__39379 = chunk__39369_39374;
var G__39380 = count__39370_39375;
var G__39381 = (i__39371_39376 + (1));
seq__39368_39373 = G__39378;
chunk__39369_39374 = G__39379;
count__39370_39375 = G__39380;
i__39371_39376 = G__39381;
continue;
} else {
var temp__5278__auto___39382 = cljs.core.seq.call(null,seq__39368_39373);
if(temp__5278__auto___39382){
var seq__39368_39383__$1 = temp__5278__auto___39382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39368_39383__$1)){
var c__30979__auto___39384 = cljs.core.chunk_first.call(null,seq__39368_39383__$1);
var G__39385 = cljs.core.chunk_rest.call(null,seq__39368_39383__$1);
var G__39386 = c__30979__auto___39384;
var G__39387 = cljs.core.count.call(null,c__30979__auto___39384);
var G__39388 = (0);
seq__39368_39373 = G__39385;
chunk__39369_39374 = G__39386;
count__39370_39375 = G__39387;
i__39371_39376 = G__39388;
continue;
} else {
var msg_39389 = cljs.core.first.call(null,seq__39368_39383__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39389);

var G__39390 = cljs.core.next.call(null,seq__39368_39383__$1);
var G__39391 = null;
var G__39392 = (0);
var G__39393 = (0);
seq__39368_39373 = G__39390;
chunk__39369_39374 = G__39391;
count__39370_39375 = G__39392;
i__39371_39376 = G__39393;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31332__auto__ = [];
var len__31325__auto___39398 = arguments.length;
var i__31326__auto___39399 = (0);
while(true){
if((i__31326__auto___39399 < len__31325__auto___39398)){
args__31332__auto__.push((arguments[i__31326__auto___39399]));

var G__39400 = (i__31326__auto___39399 + (1));
i__31326__auto___39399 = G__39400;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39395){
var map__39396 = p__39395;
var map__39396__$1 = ((((!((map__39396 == null)))?((((map__39396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39396.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39396):map__39396);
var opts = map__39396__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39394){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39394));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39401){if((e39401 instanceof Error)){
var e = e39401;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39401;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__39402){
var map__39403 = p__39402;
var map__39403__$1 = ((((!((map__39403 == null)))?((((map__39403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39403.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39403):map__39403);
var msg_name = cljs.core.get.call(null,map__39403__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1503492622538
