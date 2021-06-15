# appsflyer-to-aki-prototype
appflyer-to-aki-prototype


# AppsFlyer Task 1:

Confirm appsflyer is capturing and able to send the below data on all app and web customers. Specifically: 

* ❓ PageTitle -> (* Possibly "EVENT_NAME")
* ❓ IdentifierCanonical -> ?
* ❓ UrlCanonical -> ?
* ❓ SearchKeywords -> ?
* 👎 CategoryName -> D.N.E.
* ❓ ProductSKU -> ?
* 👎 ProductName -> D.N.E.
* 👎 ProductBrand -> D.N.E.
* 👎 ProductCategory -> D.N.E.
* 👎 OrderItemQuantity -> D.N.E.
* ✅ OrderItemPrice "EVENT_VALUE:af_price"
* 👎 OrderShippingMode -> D.N.E.
* 👎 OrderShippingPrice -> D.N.E.
* 👎 OrderShippingTax -> D.N.E.
* 👎 OrderPriceTotal -> D.N.E. (* Note even for "purchase" af events)
* ✅ Currency -> [ "CURRENCY", "SELECTED_CURRENCY", "EVENT_VALUE:af_currency"]
* 👎 DeliveryMode -> D.N.E.
* ✅ AppVersion -> "APP_VERSION"
* ✅ PhoneBrand -> "PLATFORM"
* ✅ PhoneModel -> "DEVICE_MODEL"
* ✅ PhoneLanguage -> "LANGUAGE"
* ✅ PhoneOsVersion -> "OS_VERSION"
* 👎 Screen_dpi -> D.N.E.
* 👎 Screen_height -> D.N.E.
* 👎 Screen_width -> D.N.E.
* ✅ AdvertisingId -> ["IDFA", "EVENT_VALUE:af_customer_id", "CUSTOMER_USER_ID", "APPSFLYER_ID"]

# AppsFlyer Task 2:

Investigate whether we’re able to block appsflyer from sending any data to Aki for iOS 14.5 consented customers 

# iOS 14.5 Task 1:

[SNOWFLAKE QUERY FOR THAT] Investigate how we can generate a daily report of gopuff shopper iOS 14.5 consent opt-outs tied to their most recent IDFA.

# iOS 14.5 Task 2: 

Investigate how we can send that mapping file to Aki so that they can scrub these shoppers from their list.

We only want to send the list of shoppers whose IDFA was previously shared with Aki via Appsflyer (or another integration)

