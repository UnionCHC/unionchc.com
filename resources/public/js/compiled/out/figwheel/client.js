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
}catch (e40024){if((e40024 instanceof Error)){
var e = e40024;
return "Error: Unable to stringify";
} else {
throw e40024;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__40027 = arguments.length;
switch (G__40027) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__40025_SHARP_){
if(typeof p1__40025_SHARP_ === 'string'){
return p1__40025_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__40025_SHARP_);
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
var args__31633__auto__ = [];
var len__31626__auto___40030 = arguments.length;
var i__31627__auto___40031 = (0);
while(true){
if((i__31627__auto___40031 < len__31626__auto___40030)){
args__31633__auto__.push((arguments[i__31627__auto___40031]));

var G__40032 = (i__31627__auto___40031 + (1));
i__31627__auto___40031 = G__40032;
continue;
} else {
}
break;
}

var argseq__31634__auto__ = ((((0) < args__31633__auto__.length))?(new cljs.core.IndexedSeq(args__31633__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31634__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq40029){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40029));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31633__auto__ = [];
var len__31626__auto___40034 = arguments.length;
var i__31627__auto___40035 = (0);
while(true){
if((i__31627__auto___40035 < len__31626__auto___40034)){
args__31633__auto__.push((arguments[i__31627__auto___40035]));

var G__40036 = (i__31627__auto___40035 + (1));
i__31627__auto___40035 = G__40036;
continue;
} else {
}
break;
}

var argseq__31634__auto__ = ((((0) < args__31633__auto__.length))?(new cljs.core.IndexedSeq(args__31633__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31634__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq40033){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40033));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__40037){
var map__40038 = p__40037;
var map__40038__$1 = ((((!((map__40038 == null)))?((((map__40038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40038.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40038):map__40038);
var message = cljs.core.get.call(null,map__40038__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__40038__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30349__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30349__auto__)){
return or__30349__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30337__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30337__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30337__auto__;
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
var c__35124__auto___40117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto___40117,ch){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto___40117,ch){
return (function (state_40089){
var state_val_40090 = (state_40089[(1)]);
if((state_val_40090 === (7))){
var inst_40085 = (state_40089[(2)]);
var state_40089__$1 = state_40089;
var statearr_40091_40118 = state_40089__$1;
(statearr_40091_40118[(2)] = inst_40085);

(statearr_40091_40118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (1))){
var state_40089__$1 = state_40089;
var statearr_40092_40119 = state_40089__$1;
(statearr_40092_40119[(2)] = null);

(statearr_40092_40119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (4))){
var inst_40042 = (state_40089[(7)]);
var inst_40042__$1 = (state_40089[(2)]);
var state_40089__$1 = (function (){var statearr_40093 = state_40089;
(statearr_40093[(7)] = inst_40042__$1);

return statearr_40093;
})();
if(cljs.core.truth_(inst_40042__$1)){
var statearr_40094_40120 = state_40089__$1;
(statearr_40094_40120[(1)] = (5));

} else {
var statearr_40095_40121 = state_40089__$1;
(statearr_40095_40121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (15))){
var inst_40049 = (state_40089[(8)]);
var inst_40064 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40049);
var inst_40065 = cljs.core.first.call(null,inst_40064);
var inst_40066 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_40065);
var inst_40067 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40066)].join('');
var inst_40068 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_40067);
var state_40089__$1 = state_40089;
var statearr_40096_40122 = state_40089__$1;
(statearr_40096_40122[(2)] = inst_40068);

(statearr_40096_40122[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (13))){
var inst_40073 = (state_40089[(2)]);
var state_40089__$1 = state_40089;
var statearr_40097_40123 = state_40089__$1;
(statearr_40097_40123[(2)] = inst_40073);

(statearr_40097_40123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (6))){
var state_40089__$1 = state_40089;
var statearr_40098_40124 = state_40089__$1;
(statearr_40098_40124[(2)] = null);

(statearr_40098_40124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (17))){
var inst_40071 = (state_40089[(2)]);
var state_40089__$1 = state_40089;
var statearr_40099_40125 = state_40089__$1;
(statearr_40099_40125[(2)] = inst_40071);

(statearr_40099_40125[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (3))){
var inst_40087 = (state_40089[(2)]);
var state_40089__$1 = state_40089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40089__$1,inst_40087);
} else {
if((state_val_40090 === (12))){
var inst_40048 = (state_40089[(9)]);
var inst_40062 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_40048,opts);
var state_40089__$1 = state_40089;
if(cljs.core.truth_(inst_40062)){
var statearr_40100_40126 = state_40089__$1;
(statearr_40100_40126[(1)] = (15));

} else {
var statearr_40101_40127 = state_40089__$1;
(statearr_40101_40127[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (2))){
var state_40089__$1 = state_40089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40089__$1,(4),ch);
} else {
if((state_val_40090 === (11))){
var inst_40049 = (state_40089[(8)]);
var inst_40054 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40055 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_40049);
var inst_40056 = cljs.core.async.timeout.call(null,(1000));
var inst_40057 = [inst_40055,inst_40056];
var inst_40058 = (new cljs.core.PersistentVector(null,2,(5),inst_40054,inst_40057,null));
var state_40089__$1 = state_40089;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40089__$1,(14),inst_40058);
} else {
if((state_val_40090 === (9))){
var inst_40049 = (state_40089[(8)]);
var inst_40075 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_40076 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40049);
var inst_40077 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40076);
var inst_40078 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40077)].join('');
var inst_40079 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_40078);
var state_40089__$1 = (function (){var statearr_40102 = state_40089;
(statearr_40102[(10)] = inst_40075);

return statearr_40102;
})();
var statearr_40103_40128 = state_40089__$1;
(statearr_40103_40128[(2)] = inst_40079);

(statearr_40103_40128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (5))){
var inst_40042 = (state_40089[(7)]);
var inst_40044 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_40045 = (new cljs.core.PersistentArrayMap(null,2,inst_40044,null));
var inst_40046 = (new cljs.core.PersistentHashSet(null,inst_40045,null));
var inst_40047 = figwheel.client.focus_msgs.call(null,inst_40046,inst_40042);
var inst_40048 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_40047);
var inst_40049 = cljs.core.first.call(null,inst_40047);
var inst_40050 = figwheel.client.autoload_QMARK_.call(null);
var state_40089__$1 = (function (){var statearr_40104 = state_40089;
(statearr_40104[(9)] = inst_40048);

(statearr_40104[(8)] = inst_40049);

return statearr_40104;
})();
if(cljs.core.truth_(inst_40050)){
var statearr_40105_40129 = state_40089__$1;
(statearr_40105_40129[(1)] = (8));

} else {
var statearr_40106_40130 = state_40089__$1;
(statearr_40106_40130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (14))){
var inst_40060 = (state_40089[(2)]);
var state_40089__$1 = state_40089;
var statearr_40107_40131 = state_40089__$1;
(statearr_40107_40131[(2)] = inst_40060);

(statearr_40107_40131[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (16))){
var state_40089__$1 = state_40089;
var statearr_40108_40132 = state_40089__$1;
(statearr_40108_40132[(2)] = null);

(statearr_40108_40132[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (10))){
var inst_40081 = (state_40089[(2)]);
var state_40089__$1 = (function (){var statearr_40109 = state_40089;
(statearr_40109[(11)] = inst_40081);

return statearr_40109;
})();
var statearr_40110_40133 = state_40089__$1;
(statearr_40110_40133[(2)] = null);

(statearr_40110_40133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (8))){
var inst_40048 = (state_40089[(9)]);
var inst_40052 = figwheel.client.reload_file_state_QMARK_.call(null,inst_40048,opts);
var state_40089__$1 = state_40089;
if(cljs.core.truth_(inst_40052)){
var statearr_40111_40134 = state_40089__$1;
(statearr_40111_40134[(1)] = (11));

} else {
var statearr_40112_40135 = state_40089__$1;
(statearr_40112_40135[(1)] = (12));

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
});})(c__35124__auto___40117,ch))
;
return ((function (switch__35034__auto__,c__35124__auto___40117,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__35035__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__35035__auto____0 = (function (){
var statearr_40113 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40113[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__35035__auto__);

(statearr_40113[(1)] = (1));

return statearr_40113;
});
var figwheel$client$file_reloader_plugin_$_state_machine__35035__auto____1 = (function (state_40089){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_40089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e40114){if((e40114 instanceof Object)){
var ex__35038__auto__ = e40114;
var statearr_40115_40136 = state_40089;
(statearr_40115_40136[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40137 = state_40089;
state_40089 = G__40137;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__35035__auto__ = function(state_40089){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__35035__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__35035__auto____1.call(this,state_40089);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__35035__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__35035__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto___40117,ch))
})();
var state__35126__auto__ = (function (){var statearr_40116 = f__35125__auto__.call(null);
(statearr_40116[(6)] = c__35124__auto___40117);

return statearr_40116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto___40117,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__40138_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__40138_SHARP_));
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
var base_path_40140 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_40140){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e40139){if((e40139 instanceof Error)){
var e = e40139;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_40140], null));
} else {
var e = e40139;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_40140))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__40141){
var map__40142 = p__40141;
var map__40142__$1 = ((((!((map__40142 == null)))?((((map__40142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40142.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40142):map__40142);
var opts = map__40142__$1;
var build_id = cljs.core.get.call(null,map__40142__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__40142,map__40142__$1,opts,build_id){
return (function (p__40144){
var vec__40145 = p__40144;
var seq__40146 = cljs.core.seq.call(null,vec__40145);
var first__40147 = cljs.core.first.call(null,seq__40146);
var seq__40146__$1 = cljs.core.next.call(null,seq__40146);
var map__40148 = first__40147;
var map__40148__$1 = ((((!((map__40148 == null)))?((((map__40148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40148):map__40148);
var msg = map__40148__$1;
var msg_name = cljs.core.get.call(null,map__40148__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40146__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__40145,seq__40146,first__40147,seq__40146__$1,map__40148,map__40148__$1,msg,msg_name,_,map__40142,map__40142__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__40145,seq__40146,first__40147,seq__40146__$1,map__40148,map__40148__$1,msg,msg_name,_,map__40142,map__40142__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__40142,map__40142__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__40150){
var vec__40151 = p__40150;
var seq__40152 = cljs.core.seq.call(null,vec__40151);
var first__40153 = cljs.core.first.call(null,seq__40152);
var seq__40152__$1 = cljs.core.next.call(null,seq__40152);
var map__40154 = first__40153;
var map__40154__$1 = ((((!((map__40154 == null)))?((((map__40154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40154.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40154):map__40154);
var msg = map__40154__$1;
var msg_name = cljs.core.get.call(null,map__40154__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40152__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__40156){
var map__40157 = p__40156;
var map__40157__$1 = ((((!((map__40157 == null)))?((((map__40157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40157.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40157):map__40157);
var on_compile_warning = cljs.core.get.call(null,map__40157__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__40157__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__40157,map__40157__$1,on_compile_warning,on_compile_fail){
return (function (p__40159){
var vec__40160 = p__40159;
var seq__40161 = cljs.core.seq.call(null,vec__40160);
var first__40162 = cljs.core.first.call(null,seq__40161);
var seq__40161__$1 = cljs.core.next.call(null,seq__40161);
var map__40163 = first__40162;
var map__40163__$1 = ((((!((map__40163 == null)))?((((map__40163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40163):map__40163);
var msg = map__40163__$1;
var msg_name = cljs.core.get.call(null,map__40163__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40161__$1;
var pred__40165 = cljs.core._EQ_;
var expr__40166 = msg_name;
if(cljs.core.truth_(pred__40165.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__40166))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__40165.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__40166))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__40157,map__40157__$1,on_compile_warning,on_compile_fail))
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
var c__35124__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto__,msg_hist,msg_names,msg){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto__,msg_hist,msg_names,msg){
return (function (state_40255){
var state_val_40256 = (state_40255[(1)]);
if((state_val_40256 === (7))){
var inst_40175 = (state_40255[(2)]);
var state_40255__$1 = state_40255;
if(cljs.core.truth_(inst_40175)){
var statearr_40257_40304 = state_40255__$1;
(statearr_40257_40304[(1)] = (8));

} else {
var statearr_40258_40305 = state_40255__$1;
(statearr_40258_40305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (20))){
var inst_40249 = (state_40255[(2)]);
var state_40255__$1 = state_40255;
var statearr_40259_40306 = state_40255__$1;
(statearr_40259_40306[(2)] = inst_40249);

(statearr_40259_40306[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (27))){
var inst_40245 = (state_40255[(2)]);
var state_40255__$1 = state_40255;
var statearr_40260_40307 = state_40255__$1;
(statearr_40260_40307[(2)] = inst_40245);

(statearr_40260_40307[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (1))){
var inst_40168 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_40255__$1 = state_40255;
if(cljs.core.truth_(inst_40168)){
var statearr_40261_40308 = state_40255__$1;
(statearr_40261_40308[(1)] = (2));

} else {
var statearr_40262_40309 = state_40255__$1;
(statearr_40262_40309[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (24))){
var inst_40247 = (state_40255[(2)]);
var state_40255__$1 = state_40255;
var statearr_40263_40310 = state_40255__$1;
(statearr_40263_40310[(2)] = inst_40247);

(statearr_40263_40310[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (4))){
var inst_40253 = (state_40255[(2)]);
var state_40255__$1 = state_40255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40255__$1,inst_40253);
} else {
if((state_val_40256 === (15))){
var inst_40251 = (state_40255[(2)]);
var state_40255__$1 = state_40255;
var statearr_40264_40311 = state_40255__$1;
(statearr_40264_40311[(2)] = inst_40251);

(statearr_40264_40311[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (21))){
var inst_40204 = (state_40255[(2)]);
var inst_40205 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40206 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40205);
var state_40255__$1 = (function (){var statearr_40265 = state_40255;
(statearr_40265[(7)] = inst_40204);

return statearr_40265;
})();
var statearr_40266_40312 = state_40255__$1;
(statearr_40266_40312[(2)] = inst_40206);

(statearr_40266_40312[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (31))){
var inst_40234 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_40255__$1 = state_40255;
if(cljs.core.truth_(inst_40234)){
var statearr_40267_40313 = state_40255__$1;
(statearr_40267_40313[(1)] = (34));

} else {
var statearr_40268_40314 = state_40255__$1;
(statearr_40268_40314[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (32))){
var inst_40243 = (state_40255[(2)]);
var state_40255__$1 = state_40255;
var statearr_40269_40315 = state_40255__$1;
(statearr_40269_40315[(2)] = inst_40243);

(statearr_40269_40315[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (33))){
var inst_40230 = (state_40255[(2)]);
var inst_40231 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40232 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40231);
var state_40255__$1 = (function (){var statearr_40270 = state_40255;
(statearr_40270[(8)] = inst_40230);

return statearr_40270;
})();
var statearr_40271_40316 = state_40255__$1;
(statearr_40271_40316[(2)] = inst_40232);

(statearr_40271_40316[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (13))){
var inst_40189 = figwheel.client.heads_up.clear.call(null);
var state_40255__$1 = state_40255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40255__$1,(16),inst_40189);
} else {
if((state_val_40256 === (22))){
var inst_40210 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40211 = figwheel.client.heads_up.append_warning_message.call(null,inst_40210);
var state_40255__$1 = state_40255;
var statearr_40272_40317 = state_40255__$1;
(statearr_40272_40317[(2)] = inst_40211);

(statearr_40272_40317[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (36))){
var inst_40241 = (state_40255[(2)]);
var state_40255__$1 = state_40255;
var statearr_40273_40318 = state_40255__$1;
(statearr_40273_40318[(2)] = inst_40241);

(statearr_40273_40318[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (29))){
var inst_40221 = (state_40255[(2)]);
var inst_40222 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40223 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40222);
var state_40255__$1 = (function (){var statearr_40274 = state_40255;
(statearr_40274[(9)] = inst_40221);

return statearr_40274;
})();
var statearr_40275_40319 = state_40255__$1;
(statearr_40275_40319[(2)] = inst_40223);

(statearr_40275_40319[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (6))){
var inst_40170 = (state_40255[(10)]);
var state_40255__$1 = state_40255;
var statearr_40276_40320 = state_40255__$1;
(statearr_40276_40320[(2)] = inst_40170);

(statearr_40276_40320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (28))){
var inst_40217 = (state_40255[(2)]);
var inst_40218 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40219 = figwheel.client.heads_up.display_warning.call(null,inst_40218);
var state_40255__$1 = (function (){var statearr_40277 = state_40255;
(statearr_40277[(11)] = inst_40217);

return statearr_40277;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40255__$1,(29),inst_40219);
} else {
if((state_val_40256 === (25))){
var inst_40215 = figwheel.client.heads_up.clear.call(null);
var state_40255__$1 = state_40255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40255__$1,(28),inst_40215);
} else {
if((state_val_40256 === (34))){
var inst_40236 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40255__$1 = state_40255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40255__$1,(37),inst_40236);
} else {
if((state_val_40256 === (17))){
var inst_40195 = (state_40255[(2)]);
var inst_40196 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40197 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40196);
var state_40255__$1 = (function (){var statearr_40278 = state_40255;
(statearr_40278[(12)] = inst_40195);

return statearr_40278;
})();
var statearr_40279_40321 = state_40255__$1;
(statearr_40279_40321[(2)] = inst_40197);

(statearr_40279_40321[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (3))){
var inst_40187 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_40255__$1 = state_40255;
if(cljs.core.truth_(inst_40187)){
var statearr_40280_40322 = state_40255__$1;
(statearr_40280_40322[(1)] = (13));

} else {
var statearr_40281_40323 = state_40255__$1;
(statearr_40281_40323[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (12))){
var inst_40183 = (state_40255[(2)]);
var state_40255__$1 = state_40255;
var statearr_40282_40324 = state_40255__$1;
(statearr_40282_40324[(2)] = inst_40183);

(statearr_40282_40324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (2))){
var inst_40170 = (state_40255[(10)]);
var inst_40170__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_40255__$1 = (function (){var statearr_40283 = state_40255;
(statearr_40283[(10)] = inst_40170__$1);

return statearr_40283;
})();
if(cljs.core.truth_(inst_40170__$1)){
var statearr_40284_40325 = state_40255__$1;
(statearr_40284_40325[(1)] = (5));

} else {
var statearr_40285_40326 = state_40255__$1;
(statearr_40285_40326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (23))){
var inst_40213 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_40255__$1 = state_40255;
if(cljs.core.truth_(inst_40213)){
var statearr_40286_40327 = state_40255__$1;
(statearr_40286_40327[(1)] = (25));

} else {
var statearr_40287_40328 = state_40255__$1;
(statearr_40287_40328[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (35))){
var state_40255__$1 = state_40255;
var statearr_40288_40329 = state_40255__$1;
(statearr_40288_40329[(2)] = null);

(statearr_40288_40329[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (19))){
var inst_40208 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_40255__$1 = state_40255;
if(cljs.core.truth_(inst_40208)){
var statearr_40289_40330 = state_40255__$1;
(statearr_40289_40330[(1)] = (22));

} else {
var statearr_40290_40331 = state_40255__$1;
(statearr_40290_40331[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (11))){
var inst_40179 = (state_40255[(2)]);
var state_40255__$1 = state_40255;
var statearr_40291_40332 = state_40255__$1;
(statearr_40291_40332[(2)] = inst_40179);

(statearr_40291_40332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (9))){
var inst_40181 = figwheel.client.heads_up.clear.call(null);
var state_40255__$1 = state_40255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40255__$1,(12),inst_40181);
} else {
if((state_val_40256 === (5))){
var inst_40172 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_40255__$1 = state_40255;
var statearr_40292_40333 = state_40255__$1;
(statearr_40292_40333[(2)] = inst_40172);

(statearr_40292_40333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (14))){
var inst_40199 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_40255__$1 = state_40255;
if(cljs.core.truth_(inst_40199)){
var statearr_40293_40334 = state_40255__$1;
(statearr_40293_40334[(1)] = (18));

} else {
var statearr_40294_40335 = state_40255__$1;
(statearr_40294_40335[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (26))){
var inst_40225 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_40255__$1 = state_40255;
if(cljs.core.truth_(inst_40225)){
var statearr_40295_40336 = state_40255__$1;
(statearr_40295_40336[(1)] = (30));

} else {
var statearr_40296_40337 = state_40255__$1;
(statearr_40296_40337[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (16))){
var inst_40191 = (state_40255[(2)]);
var inst_40192 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40193 = figwheel.client.heads_up.display_exception.call(null,inst_40192);
var state_40255__$1 = (function (){var statearr_40297 = state_40255;
(statearr_40297[(13)] = inst_40191);

return statearr_40297;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40255__$1,(17),inst_40193);
} else {
if((state_val_40256 === (30))){
var inst_40227 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40228 = figwheel.client.heads_up.display_warning.call(null,inst_40227);
var state_40255__$1 = state_40255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40255__$1,(33),inst_40228);
} else {
if((state_val_40256 === (10))){
var inst_40185 = (state_40255[(2)]);
var state_40255__$1 = state_40255;
var statearr_40298_40338 = state_40255__$1;
(statearr_40298_40338[(2)] = inst_40185);

(statearr_40298_40338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (18))){
var inst_40201 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40202 = figwheel.client.heads_up.display_exception.call(null,inst_40201);
var state_40255__$1 = state_40255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40255__$1,(21),inst_40202);
} else {
if((state_val_40256 === (37))){
var inst_40238 = (state_40255[(2)]);
var state_40255__$1 = state_40255;
var statearr_40299_40339 = state_40255__$1;
(statearr_40299_40339[(2)] = inst_40238);

(statearr_40299_40339[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (8))){
var inst_40177 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40255__$1 = state_40255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40255__$1,(11),inst_40177);
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
});})(c__35124__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__35034__auto__,c__35124__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35035__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35035__auto____0 = (function (){
var statearr_40300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40300[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35035__auto__);

(statearr_40300[(1)] = (1));

return statearr_40300;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35035__auto____1 = (function (state_40255){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_40255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e40301){if((e40301 instanceof Object)){
var ex__35038__auto__ = e40301;
var statearr_40302_40340 = state_40255;
(statearr_40302_40340[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40341 = state_40255;
state_40255 = G__40341;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35035__auto__ = function(state_40255){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35035__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35035__auto____1.call(this,state_40255);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35035__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35035__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto__,msg_hist,msg_names,msg))
})();
var state__35126__auto__ = (function (){var statearr_40303 = f__35125__auto__.call(null);
(statearr_40303[(6)] = c__35124__auto__);

return statearr_40303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto__,msg_hist,msg_names,msg))
);

return c__35124__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__35124__auto___40370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto___40370,ch){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto___40370,ch){
return (function (state_40356){
var state_val_40357 = (state_40356[(1)]);
if((state_val_40357 === (1))){
var state_40356__$1 = state_40356;
var statearr_40358_40371 = state_40356__$1;
(statearr_40358_40371[(2)] = null);

(statearr_40358_40371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40357 === (2))){
var state_40356__$1 = state_40356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40356__$1,(4),ch);
} else {
if((state_val_40357 === (3))){
var inst_40354 = (state_40356[(2)]);
var state_40356__$1 = state_40356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40356__$1,inst_40354);
} else {
if((state_val_40357 === (4))){
var inst_40344 = (state_40356[(7)]);
var inst_40344__$1 = (state_40356[(2)]);
var state_40356__$1 = (function (){var statearr_40359 = state_40356;
(statearr_40359[(7)] = inst_40344__$1);

return statearr_40359;
})();
if(cljs.core.truth_(inst_40344__$1)){
var statearr_40360_40372 = state_40356__$1;
(statearr_40360_40372[(1)] = (5));

} else {
var statearr_40361_40373 = state_40356__$1;
(statearr_40361_40373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40357 === (5))){
var inst_40344 = (state_40356[(7)]);
var inst_40346 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_40344);
var state_40356__$1 = state_40356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40356__$1,(8),inst_40346);
} else {
if((state_val_40357 === (6))){
var state_40356__$1 = state_40356;
var statearr_40362_40374 = state_40356__$1;
(statearr_40362_40374[(2)] = null);

(statearr_40362_40374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40357 === (7))){
var inst_40352 = (state_40356[(2)]);
var state_40356__$1 = state_40356;
var statearr_40363_40375 = state_40356__$1;
(statearr_40363_40375[(2)] = inst_40352);

(statearr_40363_40375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40357 === (8))){
var inst_40348 = (state_40356[(2)]);
var state_40356__$1 = (function (){var statearr_40364 = state_40356;
(statearr_40364[(8)] = inst_40348);

return statearr_40364;
})();
var statearr_40365_40376 = state_40356__$1;
(statearr_40365_40376[(2)] = null);

(statearr_40365_40376[(1)] = (2));


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
});})(c__35124__auto___40370,ch))
;
return ((function (switch__35034__auto__,c__35124__auto___40370,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__35035__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__35035__auto____0 = (function (){
var statearr_40366 = [null,null,null,null,null,null,null,null,null];
(statearr_40366[(0)] = figwheel$client$heads_up_plugin_$_state_machine__35035__auto__);

(statearr_40366[(1)] = (1));

return statearr_40366;
});
var figwheel$client$heads_up_plugin_$_state_machine__35035__auto____1 = (function (state_40356){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_40356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e40367){if((e40367 instanceof Object)){
var ex__35038__auto__ = e40367;
var statearr_40368_40377 = state_40356;
(statearr_40368_40377[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40378 = state_40356;
state_40356 = G__40378;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__35035__auto__ = function(state_40356){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__35035__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__35035__auto____1.call(this,state_40356);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__35035__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__35035__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto___40370,ch))
})();
var state__35126__auto__ = (function (){var statearr_40369 = f__35125__auto__.call(null);
(statearr_40369[(6)] = c__35124__auto___40370);

return statearr_40369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto___40370,ch))
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
var c__35124__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto__){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto__){
return (function (state_40384){
var state_val_40385 = (state_40384[(1)]);
if((state_val_40385 === (1))){
var inst_40379 = cljs.core.async.timeout.call(null,(3000));
var state_40384__$1 = state_40384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40384__$1,(2),inst_40379);
} else {
if((state_val_40385 === (2))){
var inst_40381 = (state_40384[(2)]);
var inst_40382 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_40384__$1 = (function (){var statearr_40386 = state_40384;
(statearr_40386[(7)] = inst_40381);

return statearr_40386;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40384__$1,inst_40382);
} else {
return null;
}
}
});})(c__35124__auto__))
;
return ((function (switch__35034__auto__,c__35124__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__35035__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__35035__auto____0 = (function (){
var statearr_40387 = [null,null,null,null,null,null,null,null];
(statearr_40387[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__35035__auto__);

(statearr_40387[(1)] = (1));

return statearr_40387;
});
var figwheel$client$enforce_project_plugin_$_state_machine__35035__auto____1 = (function (state_40384){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_40384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e40388){if((e40388 instanceof Object)){
var ex__35038__auto__ = e40388;
var statearr_40389_40391 = state_40384;
(statearr_40389_40391[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40392 = state_40384;
state_40384 = G__40392;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__35035__auto__ = function(state_40384){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__35035__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__35035__auto____1.call(this,state_40384);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__35035__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__35035__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto__))
})();
var state__35126__auto__ = (function (){var statearr_40390 = f__35125__auto__.call(null);
(statearr_40390[(6)] = c__35124__auto__);

return statearr_40390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto__))
);

return c__35124__auto__;
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
var c__35124__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35124__auto__,figwheel_version,temp__5278__auto__){
return (function (){
var f__35125__auto__ = (function (){var switch__35034__auto__ = ((function (c__35124__auto__,figwheel_version,temp__5278__auto__){
return (function (state_40399){
var state_val_40400 = (state_40399[(1)]);
if((state_val_40400 === (1))){
var inst_40393 = cljs.core.async.timeout.call(null,(2000));
var state_40399__$1 = state_40399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40399__$1,(2),inst_40393);
} else {
if((state_val_40400 === (2))){
var inst_40395 = (state_40399[(2)]);
var inst_40396 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_40397 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_40396);
var state_40399__$1 = (function (){var statearr_40401 = state_40399;
(statearr_40401[(7)] = inst_40395);

return statearr_40401;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40399__$1,inst_40397);
} else {
return null;
}
}
});})(c__35124__auto__,figwheel_version,temp__5278__auto__))
;
return ((function (switch__35034__auto__,c__35124__auto__,figwheel_version,temp__5278__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35035__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35035__auto____0 = (function (){
var statearr_40402 = [null,null,null,null,null,null,null,null];
(statearr_40402[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35035__auto__);

(statearr_40402[(1)] = (1));

return statearr_40402;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35035__auto____1 = (function (state_40399){
while(true){
var ret_value__35036__auto__ = (function (){try{while(true){
var result__35037__auto__ = switch__35034__auto__.call(null,state_40399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35037__auto__;
}
break;
}
}catch (e40403){if((e40403 instanceof Object)){
var ex__35038__auto__ = e40403;
var statearr_40404_40406 = state_40399;
(statearr_40404_40406[(5)] = ex__35038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40407 = state_40399;
state_40399 = G__40407;
continue;
} else {
return ret_value__35036__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35035__auto__ = function(state_40399){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35035__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35035__auto____1.call(this,state_40399);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35035__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35035__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35035__auto__;
})()
;})(switch__35034__auto__,c__35124__auto__,figwheel_version,temp__5278__auto__))
})();
var state__35126__auto__ = (function (){var statearr_40405 = f__35125__auto__.call(null);
(statearr_40405[(6)] = c__35124__auto__);

return statearr_40405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35126__auto__);
});})(c__35124__auto__,figwheel_version,temp__5278__auto__))
);

return c__35124__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__40408){
var map__40409 = p__40408;
var map__40409__$1 = ((((!((map__40409 == null)))?((((map__40409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40409):map__40409);
var file = cljs.core.get.call(null,map__40409__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40409__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40409__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__40411 = "";
var G__40411__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40411),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__40411);
var G__40411__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40411__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__40411__$1);
if(cljs.core.truth_((function (){var and__30337__auto__ = line;
if(cljs.core.truth_(and__30337__auto__)){
return column;
} else {
return and__30337__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40411__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__40411__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__40412){
var map__40413 = p__40412;
var map__40413__$1 = ((((!((map__40413 == null)))?((((map__40413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40413):map__40413);
var ed = map__40413__$1;
var formatted_exception = cljs.core.get.call(null,map__40413__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__40413__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__40413__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__40415_40419 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__40416_40420 = null;
var count__40417_40421 = (0);
var i__40418_40422 = (0);
while(true){
if((i__40418_40422 < count__40417_40421)){
var msg_40423 = cljs.core._nth.call(null,chunk__40416_40420,i__40418_40422);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40423);

var G__40424 = seq__40415_40419;
var G__40425 = chunk__40416_40420;
var G__40426 = count__40417_40421;
var G__40427 = (i__40418_40422 + (1));
seq__40415_40419 = G__40424;
chunk__40416_40420 = G__40425;
count__40417_40421 = G__40426;
i__40418_40422 = G__40427;
continue;
} else {
var temp__5278__auto___40428 = cljs.core.seq.call(null,seq__40415_40419);
if(temp__5278__auto___40428){
var seq__40415_40429__$1 = temp__5278__auto___40428;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40415_40429__$1)){
var c__31280__auto___40430 = cljs.core.chunk_first.call(null,seq__40415_40429__$1);
var G__40431 = cljs.core.chunk_rest.call(null,seq__40415_40429__$1);
var G__40432 = c__31280__auto___40430;
var G__40433 = cljs.core.count.call(null,c__31280__auto___40430);
var G__40434 = (0);
seq__40415_40419 = G__40431;
chunk__40416_40420 = G__40432;
count__40417_40421 = G__40433;
i__40418_40422 = G__40434;
continue;
} else {
var msg_40435 = cljs.core.first.call(null,seq__40415_40429__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40435);

var G__40436 = cljs.core.next.call(null,seq__40415_40429__$1);
var G__40437 = null;
var G__40438 = (0);
var G__40439 = (0);
seq__40415_40419 = G__40436;
chunk__40416_40420 = G__40437;
count__40417_40421 = G__40438;
i__40418_40422 = G__40439;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40440){
var map__40441 = p__40440;
var map__40441__$1 = ((((!((map__40441 == null)))?((((map__40441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40441):map__40441);
var w = map__40441__$1;
var message = cljs.core.get.call(null,map__40441__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__30337__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30337__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30337__auto__;
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
var seq__40443 = cljs.core.seq.call(null,plugins);
var chunk__40444 = null;
var count__40445 = (0);
var i__40446 = (0);
while(true){
if((i__40446 < count__40445)){
var vec__40447 = cljs.core._nth.call(null,chunk__40444,i__40446);
var k = cljs.core.nth.call(null,vec__40447,(0),null);
var plugin = cljs.core.nth.call(null,vec__40447,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40453 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40443,chunk__40444,count__40445,i__40446,pl_40453,vec__40447,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40453.call(null,msg_hist);
});})(seq__40443,chunk__40444,count__40445,i__40446,pl_40453,vec__40447,k,plugin))
);
} else {
}

var G__40454 = seq__40443;
var G__40455 = chunk__40444;
var G__40456 = count__40445;
var G__40457 = (i__40446 + (1));
seq__40443 = G__40454;
chunk__40444 = G__40455;
count__40445 = G__40456;
i__40446 = G__40457;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__40443);
if(temp__5278__auto__){
var seq__40443__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40443__$1)){
var c__31280__auto__ = cljs.core.chunk_first.call(null,seq__40443__$1);
var G__40458 = cljs.core.chunk_rest.call(null,seq__40443__$1);
var G__40459 = c__31280__auto__;
var G__40460 = cljs.core.count.call(null,c__31280__auto__);
var G__40461 = (0);
seq__40443 = G__40458;
chunk__40444 = G__40459;
count__40445 = G__40460;
i__40446 = G__40461;
continue;
} else {
var vec__40450 = cljs.core.first.call(null,seq__40443__$1);
var k = cljs.core.nth.call(null,vec__40450,(0),null);
var plugin = cljs.core.nth.call(null,vec__40450,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40462 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40443,chunk__40444,count__40445,i__40446,pl_40462,vec__40450,k,plugin,seq__40443__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40462.call(null,msg_hist);
});})(seq__40443,chunk__40444,count__40445,i__40446,pl_40462,vec__40450,k,plugin,seq__40443__$1,temp__5278__auto__))
);
} else {
}

var G__40463 = cljs.core.next.call(null,seq__40443__$1);
var G__40464 = null;
var G__40465 = (0);
var G__40466 = (0);
seq__40443 = G__40463;
chunk__40444 = G__40464;
count__40445 = G__40465;
i__40446 = G__40466;
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
var G__40468 = arguments.length;
switch (G__40468) {
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

var seq__40469_40474 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__40470_40475 = null;
var count__40471_40476 = (0);
var i__40472_40477 = (0);
while(true){
if((i__40472_40477 < count__40471_40476)){
var msg_40478 = cljs.core._nth.call(null,chunk__40470_40475,i__40472_40477);
figwheel.client.socket.handle_incoming_message.call(null,msg_40478);

var G__40479 = seq__40469_40474;
var G__40480 = chunk__40470_40475;
var G__40481 = count__40471_40476;
var G__40482 = (i__40472_40477 + (1));
seq__40469_40474 = G__40479;
chunk__40470_40475 = G__40480;
count__40471_40476 = G__40481;
i__40472_40477 = G__40482;
continue;
} else {
var temp__5278__auto___40483 = cljs.core.seq.call(null,seq__40469_40474);
if(temp__5278__auto___40483){
var seq__40469_40484__$1 = temp__5278__auto___40483;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40469_40484__$1)){
var c__31280__auto___40485 = cljs.core.chunk_first.call(null,seq__40469_40484__$1);
var G__40486 = cljs.core.chunk_rest.call(null,seq__40469_40484__$1);
var G__40487 = c__31280__auto___40485;
var G__40488 = cljs.core.count.call(null,c__31280__auto___40485);
var G__40489 = (0);
seq__40469_40474 = G__40486;
chunk__40470_40475 = G__40487;
count__40471_40476 = G__40488;
i__40472_40477 = G__40489;
continue;
} else {
var msg_40490 = cljs.core.first.call(null,seq__40469_40484__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_40490);

var G__40491 = cljs.core.next.call(null,seq__40469_40484__$1);
var G__40492 = null;
var G__40493 = (0);
var G__40494 = (0);
seq__40469_40474 = G__40491;
chunk__40470_40475 = G__40492;
count__40471_40476 = G__40493;
i__40472_40477 = G__40494;
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
var args__31633__auto__ = [];
var len__31626__auto___40499 = arguments.length;
var i__31627__auto___40500 = (0);
while(true){
if((i__31627__auto___40500 < len__31626__auto___40499)){
args__31633__auto__.push((arguments[i__31627__auto___40500]));

var G__40501 = (i__31627__auto___40500 + (1));
i__31627__auto___40500 = G__40501;
continue;
} else {
}
break;
}

var argseq__31634__auto__ = ((((0) < args__31633__auto__.length))?(new cljs.core.IndexedSeq(args__31633__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31634__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40496){
var map__40497 = p__40496;
var map__40497__$1 = ((((!((map__40497 == null)))?((((map__40497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40497):map__40497);
var opts = map__40497__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40495){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40495));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e40502){if((e40502 instanceof Error)){
var e = e40502;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e40502;

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
return (function (p__40503){
var map__40504 = p__40503;
var map__40504__$1 = ((((!((map__40504 == null)))?((((map__40504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40504):map__40504);
var msg_name = cljs.core.get.call(null,map__40504__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1503547309187
