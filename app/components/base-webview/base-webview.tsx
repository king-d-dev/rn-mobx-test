import React, { useRef, useEffect, useState } from "react"
import { ActivityIndicator, StyleSheet, Text, View } from "react-native"
// import crashlytics from "@react-native-firebase/crashlytics"

import { WebView } from "react-native-webview"
import { BaseWebViewProps } from "./base-webview.props"

import { color } from "@theme"
import sharedStyles from "@styles/shared"

const styles = StyleSheet.create({
  ...sharedStyles,
})

export const BaseWebView = ({ uri, lastRefresh, spinnerSubTitle, onNavigationStateChange, extraStyles }: BaseWebViewProps) => {
  const htmlElement = useRef(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    htmlElement?.current?.reload()
  }, [lastRefresh])

  // to send a message back: window.ReactNativeWebView.postMessage
  const defaultOnLoadJavascript = `
  (function() {
    function hideElementByClassName(className) {
      var querySelector = document.getElementsByClassName(className);

      for (const el of querySelector) {
         el.style.display = "none";
      }
    }

    function hideElementById(className) {
      var el = document.getElementById(className);

      if(el) {
        el.style.display = "none";
      }
    }

    function disableAnchorsWithConditions() {
      var allAnchors = document.getElementsByTagName('a');

      for (var i = 0; i < allAnchors.length; i++) {
        // window.ReactNativeWebView.postMessage(allAnchors[i])

        if(allAnchors[i].innerHTML.indexOf("View") >= 0) {
          allAnchors[i].style.display = "none";
        }

        // window.ReactNativeWebView.postMessage(allAnchors[i].innerHTML)

        if(allAnchors[i].innerHTML.indexOf("#") >= 0) {
          // var p = document.createElement('p');
          // p.innerHTML = allAnchors[i].innerHTML;
          // allAnchors[i].parentNode.replaceChild(p, allAnchors[i]);
          allAnchors[i].removeAttribute("href");
        }
      }
    }

    hideElementById('shopify-section-footer');
    hideElementById('shopify-section-newsletter-popup');

    hideElementByClassName('site-nav__thumb-menu');
    hideElementByClassName('announcement__text');
    hideElementByClassName('site-header');
    hideElementByClassName('section-header');
    hideElementByClassName('new_customer_notification_subscription');
    hideElementByClassName('new_arrive_signup_form');
    hideElementByClassName('os-step__description');
    hideElementByClassName('main__footer');
    hideElementByClassName('step__footer__info');
    hideElementByClassName('layout-flex__item layout-flex--wrap');
    hideElementByClassName('chat-app');

    // Hide back link in checkout completed view
    hideElementByClassName('trbyE _3Et_A');

    true; // note: this is required, or you'll sometimes get silent failures
  })();`

  const handleWebViewNavigationStateChange = (newNavState) => {
    const { url } = newNavState
    if (!url) {
      return
    }

    onNavigationStateChange && onNavigationStateChange(newNavState)
  }

  return (
    <>
      {isLoading && (
        <View style={[styles.spinnerWrapper, styles.webviewSpinner]}>
          <ActivityIndicator style={styles.spinner} size="large" color={color.primary} />
          {spinnerSubTitle && <Text style={styles.spinnerSubTitle}>{spinnerSubTitle}</Text>}
        </View>
      )}
      <WebView
        style={[styles.mainWrapper, extraStyles]}
        originWhitelist={["http://*", "https://*", "intent://*"]}
        ref={htmlElement}
        mediaPlaybackRequiresUserAction={false}
        onLoadEnd={() => {
          htmlElement?.current?.injectJavaScript(defaultOnLoadJavascript)
          setTimeout(() => setLoading(false), 2000)
        }}
        // onError={(event: WebViewErrorEvent) => {
        // crashlytics().recordError(new Error(JSON.stringify(event)), `BaseWebView: ${uri}`)
        // }}
        source={{ uri }}
        onNavigationStateChange={handleWebViewNavigationStateChange}
        sharedCookiesEnabled={true}
      />
    </>
  )
}
