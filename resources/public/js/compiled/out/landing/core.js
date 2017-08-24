// Compiled by ClojureScript 1.9.908 {}
goog.provide('landing.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('landing.components.form_feedback');
goog.require('landing.events');
goog.require('landing.subs');
cljs.core.enable_console_print_BANG_.call(null);
landing.core.mount_feedback = (function landing$core$mount_feedback(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [landing.components.form_feedback.form_feedback], null),document.getElementById("form-feedback"));
});
landing.core.on_js_reload = (function landing$core$on_js_reload(){
return null;
});
landing.core.init = (function landing$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return landing.core.mount_feedback.call(null);
});
goog.exportSymbol('landing.core.init', landing.core.init);

//# sourceMappingURL=core.js.map?rel=1503549672572
