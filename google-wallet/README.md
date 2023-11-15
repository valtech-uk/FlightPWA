# Prerequisites

Follow next steps to make sure you can issue Google Wallet passes:
1. Sign up for a [Google Wallet API](https://pay.google.com/business/console) Issuer account.
2. Sign into the [Google Cloud Console](https://console.cloud.google.com/) and enable the Google Wallet API.
3. Create a [service account](https://console.cloud.google.com/iam-admin/serviceaccounts/create) and its service account key in the Google Cloud Console.
4. Authorize the service account as a developer in the [Google Pay and Wallet Console](https://pay.google.com/business/console).
5. Allow some users to test new boarding passes in the [Google Pay and Wallet Console](https://pay.google.com/business/console).

See [Prerequisites page](https://developers.google.com/wallet/tickets/boarding-passes/web/prerequisites) for details.

## Deployment pipeline settings

Add 3 environment variables
```
GOOGLE_WALLET_ISSUER_ID=<issuer id>
GOOGLE_WALLET_SERVICE_EMAIL=<service account email that looks like demo@demo.iam.gserviceaccount.com>
GOOGLE_WALLET_SERVICE_KEY=<private key assigned to service account>
```

## Development environment (.env file)

Add 3 environment variables
```
GOOGLE_WALLET_ISSUER_ID=<issuer id>
GOOGLE_WALLET_SERVICE_EMAIL=<service account email that looks like demo@demo.iam.gserviceaccount.com>
GOOGLE_WALLET_SERVICE_KEY=<private key assigned to service account>
```

# Testing
```
Make sure someone has early access to boarding passes.
```
Use "Create test accounts" button or "Users" tab in the [Google Pay and Wallet Console](https://pay.google.com/business/console/passes) to add Google Wallet users.

# Development

All the information about an upcoming flight is split between two objects: flightClass and flightObject. **FlightClass** contains general data that is common for all boarding passes of a single flight such as issuer name, flight date, airport of departure, destination airport, airline description, icons and images. **FlightObject** provides personal information of a passanger including name, seat number, confirmation code, etc. Take a look at [Pass builder](https://developers.google.com/wallet/tickets/boarding-passes/resources/pass-builder) for a better understanding.

## How to create FlightClass
FlightClass can be created manually and programmatically:
- use [Google Pay and Wallet Console](https://pay.google.com/business/console/passes) to create and edit flightclasses manually.
- use [Google Wallet API](https://codelabs.developers.google.com/add-to-wallet-web#3) to create a flightclass programmatically.
```
Make sure that a new flightclass has ACTIVE status. Google Wallet rejects drafts!
```

## How to create FlightObject
FlightObjects are created programmatically (see generateBoardingPassUrl()):
1. create unique ID of a flight object
2. create JSON description of a flight object with a reference to FlightClass and unique ID
3. create "savetowallet" claim that contains a flight object
4. convert a claim to a signed JWT token
5. use signed JWT token to create "Add to Google Wallet" link

Google Wallet API will create a flightobject once the user adds a boarding pass to their wallet.
```
Google Wallet does not allow multiple flightobjects with the same ID.
```
Use [Boarding pass validator](https://pay.google.com/business/console/passes) to test "savetowallet" claim.

## Existing implementation

- generateBoardingPassUrl() uses a FlightClass that was created manually thus eliminating the need to write corresponding code.
- generateBoardingPassUrl() uses Date.now() to ensure unique id because created boarding passes are not stored permanently.


# Useful links

**[Boarding passes](https://developers.google.com/wallet/tickets/boarding-passes)** - Google documentation about boarding passes

**[Pass builder](https://developers.google.com/wallet/tickets/boarding-passes/resources/pass-builder)** - visual representation of a standard boarding pass

**[Codelabs](https://developers.google.com/wallet/tickets/boarding-passes/resources/codelabs)** - code example

**[Google Wallet Github](https://github.com/google-pay/wallet-web-codelab)** - code example

**[Boarding pass validator](https://pay.google.com/business/console/passes)** - Use "Validate" tab to test JSON representation of a boarding pass

**[REST Resource: flightclass](https://developers.google.com/wallet/reference/rest/v1/flightclass)** - reference documentation

**[REST Resource: flightobject](https://developers.google.com/wallet/reference/rest/v1/flightobject)** - reference documentation

**[Brand guidelines](https://developers.google.com/wallet/generic/resources/brand-guidelines)** - image sizes for boarding passes
