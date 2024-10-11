
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills.IegWBDja.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app.CdqSL7lB.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/OnePage.uTKdWqnJ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection.CUB19GMo.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useUnauthenticatedErrorModal.CYz3psQl.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LegacyVaultedShippingMethods.k5Wrk7HI.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Rollup.C8wzQmgX.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/SubscriptionPriceBreakdown.DIJh_3uO.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/RageClickCapture.BzE8gJ86.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLogo.Bu_j0Zmn.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PurchaseOptionsAgreement.D15MxEMs.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PickupPointCarrierLogo.CENZ2LM4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/hooks.BtTBOHBh.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedPayment.BG2dUhon.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/OnePageModal.ClFFSOno.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShowShopPayOptin.DisdizfE.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Section.e_sS_r3H.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useGooglePaySdk.ByQmJVhq.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLoginLoader.8j066aKm.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/publishMessage.BjimoyQD.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection.C0WtMQIc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/context.BF-kXshZ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DutyOptions.C6g3S8K2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useAmazonContact.CngS29p9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/StockProblemsLineItemList.B0J9YAPG.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/component-ShopPayVerificationSwitch.DKH_G6xx.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index.CPOdXgtZ.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/app.CpvUl_Ln.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/OnePage.BL1uXB7_.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DeliveryMethodSelectorSection.B4_rfmEs.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Rollup.o9Mx-fKL.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/SubscriptionPriceBreakdown.Bqs0s4oM.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/RageClickCapture.DnkQ4tsk.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayLogo.D_HPU8Dh.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/PickupPointCarrierLogo.C0wRU6wV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/VaultedPayment.Bk8Je7sI.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Section.sQehCocD.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayLoginLoader.CjGSo8kt.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/PayButtonSection.DF7trkKf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DutyOptions.CtZGmwZL.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/useAmazonContact.D-Ox6Dnf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/StockProblemsLineItemList.CxdIQKjw.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayVerificationSwitch.CAxiAssW.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0601/1479/6676/files/Cosmic_Surplus_9_x320.png?v=1665758613"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  