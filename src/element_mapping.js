import { translateLocale, memoizedLocale } from "./utils/util";
import {
  SKIP_INTRO,
  SKIP_RECAP,
  NEXT_EPISODE,
  SKIP_ADS,
  NETFLIX,
  PRIME, HOTSTAR, HOTSTAR_SKIP_INTRO, HOTSTAR_NEXT_EPISODE,
} from "./utils/i18n";
import { JIOCINEMA } from "./utils/i18n";

const locale = memoizedLocale("locale");

export const elementMapping = [
  {
    type: NETFLIX,
    selector: "[aria-label='Skip Intro']",
    locale,
  },
  {
    type: NETFLIX,
    selector: ".skip-credits > a",
    locale,
  },
  {
    type: NETFLIX,
    selector: "[aria-label='Skip Recap']",
    locale,
  },
  {
    type: NETFLIX,
    selector: "[aria-label='next-episode-seamless-button']",
    locale,
  },
  {
    type: NETFLIX,
    selector: ".interrupter-actions > .nf-icon-button:first-child",
    locale,
  },
  {
    type: NETFLIX,
    selector: "[data-uia='next-episode-seamless-button']",
    //data-uia=next-episode-seamless-button
    //data-uia=control-next
    //aria-label=Next Episode
    locale
  },
  {
    type: HOTSTAR,
    skipEvent: HOTSTAR_SKIP_INTRO,
    selector: `//*[text()="${translateLocale(HOTSTAR_SKIP_INTRO).translatedText}"]`,
    xpath: true,
    ...translateLocale(HOTSTAR_SKIP_INTRO),
  },
  {
    type: HOTSTAR,
    skipEvent: HOTSTAR_NEXT_EPISODE,
    selector: `//button[text()="${translateLocale(HOTSTAR_NEXT_EPISODE).translatedText}"]`,
    xpath: true,
    extraWait: true,
    ...translateLocale(HOTSTAR_NEXT_EPISODE),
  },
  {
    type: PRIME,
    selector: ".skipElement",
    locale,
  },
  {
    type: PRIME,
    selector: ".adSkipButton",
    locale,
  },
  {
    type: PRIME,
    selector: ".nextUpCard",
    locale,
  },
  {
    type: PRIME,
    skipEvent: SKIP_INTRO,
    selector: `//*[text()="${translateLocale(SKIP_INTRO).translatedText}"]`,
    xpath: true,
    ...translateLocale(SKIP_INTRO),
  },
  {
    type: PRIME,
    skipEvent: SKIP_RECAP,
    selector: `//*[text()="${translateLocale(SKIP_RECAP).translatedText}"]`,
    xpath: true,
    ...translateLocale(SKIP_RECAP),
  },
  {
    type: PRIME,
    skipEvent: SKIP_ADS,
    selector: `//*[text()="${translateLocale(SKIP_ADS).translatedText}"]`,
    xpath: true,
    ...translateLocale(SKIP_ADS),
  },
  {
    type: PRIME,
    skipEvent: NEXT_EPISODE,
    selector: `//*[text()="${
      translateLocale(NEXT_EPISODE).translatedText
    }"]/parent::div/following-sibling::div`,
    extraWait: true,
    xpath: true,
    ...translateLocale(NEXT_EPISODE),
  },
  {
    type: JIOCINEMA,
    skipEvent: SKIP_INTRO,
    selector: `//*[text()="${translateLocale(SKIP_INTRO).translatedText}"]`,
    xpath: true,
    ...translateLocale(SKIP_INTRO),
  }
];
