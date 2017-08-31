(ns figwheel.connect.dev (:require [unicodots.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/unicodots.core.mount-root (apply js/unicodots.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'unicodots.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

