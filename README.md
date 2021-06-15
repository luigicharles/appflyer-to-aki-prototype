# appsflyer-to-aki-prototype
appflyer-to-aki-prototype


# AppsFlyer Task 1:

Confirm appsflyer is capturing and able to send the below data on all app and web customers. Specifically: 


PageTitle (?)

IdentifierCanonical (?)

UrlCanonical (?)

SearchKeywords (?)

CategoryName (?)

ProductSKU

ProductName

ProductBrand

ProductCategory

OrderItemQuantity

OrderItemPrice

OrderShippingMode

OrderShippingPrice

OrderShippingTax

OrderPriceTotal

Currency

DeliveryMode

AppVersion

PhoneBrand

PhoneModel

PhoneLanguage

PhoneOsVersion

Screen_dpi

Screen_height

Screen_width

AdvertisingId


# AppsFlyer Task 2:

Investigate whether we’re able to block appsflyer from sending any data to Aki for iOS 14.5 consented customers 


# iOS 14.5 Task 1:

[SNOWFLAKE QUERY FOR THAT] Investigate how we can generate a daily report of gopuff shopper iOS 14.5 consent opt-outs tied to their most recent IDFA.

# iOS 14.5 Task 2: 

Investigate how we can send that mapping file to Aki so that they can scrub these shoppers from their list.

We only want to send the list of shoppers whose IDFA was previously shared with Aki via Appsflyer (or another integration)

