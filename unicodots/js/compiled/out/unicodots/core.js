// Compiled by ClojureScript 1.9.229 {}
goog.provide('unicodots.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('unicodots.views');
goog.require('unicodots.config');
goog.require('unicodots.events');
goog.require('unicodots.subs');
goog.require('re_frame.core');
unicodots.core.dev_setup = (function unicodots$core$dev_setup(){
if(cljs.core.truth_(unicodots.config.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
unicodots.core.mount_root = (function unicodots$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unicodots.views.main_panel], null),document.getElementById("app"));
});
unicodots.core.init = (function unicodots$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

unicodots.core.dev_setup.call(null);

return unicodots.core.mount_root.call(null);
});
goog.exportSymbol('unicodots.core.init', unicodots.core.init);

//# sourceMappingURL=core.js.map?rel=1503610095568