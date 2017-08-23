// Compiled by ClojureScript 1.9.908 {}
goog.provide('landing.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('landing.components.form_feedback');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"This text is printed from src/landing/core.cljs. Go ahead and edit it and see reloading in action.");
if(typeof landing.core.app_state !== 'undefined'){
} else {
landing.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
landing.core.hello_world = (function landing$core$hello_world(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,landing.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Edit this and watch it change!"], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [landing.components.form_feedback.form_feedback], null),document.getElementById("form-feedback"));
landing.core.on_js_reload = (function landing$core$on_js_reload(){
return null;
});
landing.core.init = (function landing$core$init(){
return console.log("Application init ok!");
});
goog.exportSymbol('landing.core.init', landing.core.init);

//# sourceMappingURL=core.js.map?rel=1503492615677
