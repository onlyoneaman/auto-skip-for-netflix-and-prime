# Auto Skipper

[![Chrome Web Store](https://img.shields.io/chrome-web-store/users/dempbimengdgfdahpccphckokknnappl?color=g&label=Chrome%20Store%20Users)](https://chrome.google.com/webstore/detail/netflix-prime-ott-auto-sk/dempbimengdgfdahpccphckokknnappl)
![Chrome Web Store](https://img.shields.io/chrome-web-store/rating/dempbimengdgfdahpccphckokknnappl)

Auto Skip Intro, Recaps for Prime, Netflix and Other OTTs

OTTs Supported
- Netflix
- Prime Video


It is very tedious to skip those long intro sequences and recaps on Netflix and Amazon Prime, you have to press the skip button each time.

And those Ads on Amazon prime are so annoying, right? No worries, we have got you covered.

We have a solution for our super lazy user. Now you can:

- Auto Skips intros and recaps on both Netflix and Prime
- Auto Skips credits and play next episode on Prime
- Auto Skips "Continue watching on Netflix"
- Auto Skips Ads on Prime

## Chrome Store Link

https://chrome.google.com/webstore/detail/netflix-prime-ott-auto-sk/dempbimengdgfdahpccphckokknnappl?hl=en&gl=IN

## Development

Clone the repo and run `npm run build:dev` or `yarn run build:dev`, make changes and test it in chrome dev mode.
I'll be delighted to receive a PR.

```
npm run build:dev
```

or

```
yarn run build:dev
```

### Updates for Chrome Extension Guidelines Compliance

- Updated the `manifest.json` file to use Manifest V3.
- Added necessary permissions and content security policy.
- Updated icons to use appropriately sized images (`icon16.png` and `icon48.png`).
- Created a `secret_key.js` placeholder for the build process.

## Add your national language (Prime)

So currently Skip Intro, Skip Recap, Next episode skip works for 22 languages supported by prime.
But skip Ads in only supported in a few languages, to enable that in your language, I would need your help in translation of the word `Skip` to your national language.

Please have a look at the file `src/utils/i18n.js`, and add the respective value against keyword `skip_ads` in `i18nMap`.

Please test it in your system, raise a PR and tag me for review. Ping me if you have any doubts.

## Analytics

I am pushing few analytics data points for debugging purposes.

Format

```js
{
  event: "Skipped",
  properties: {
    token: "<AuthKey>",
    extensionId: "<Chrome store extension id>",
    distinct_id: "<Chrome store extension id>",
    selector: "<Which element was skipped>",
    type: "<Prime or Netflix>",
    innerTextDatum: "<Inner text of the element>",
    countryCode,
    countryName,
    city
  },
};
```

The data is totally anonymous, you can also verify the same in the network tab.

## Feedback

If you like the extension and it solves your problem please leave a rating and review on the chrome web store.
Hit me up at `2000.aman.sinha@gmail.com` to say, Hi!
