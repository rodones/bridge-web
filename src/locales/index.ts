import { createIntl, createIntlCache } from "react-intl";
import en from "./en";
import tr from "./tr";

const onError = (err: Error & { code: string }): void => {
  if (err.code === "MISSING_TRANSLATION") return;
  throw err;
};

const cache = createIntlCache();

const intls = {
  en: createIntl(
    {
      locale: "en",
      messages: en,
      /* Our time zone Europe/Istanbul is UTC+03:00.
      The API returns UTC+00:00. We should add 3 hours. 
      To make this we set time zone as UTC+06:00, 
      i.e. Asia/Dhaka. */
      timeZone: "Asia/Dhaka",
      onError,
    },
    cache,
  ),
  tr: createIntl(
    {
      locale: "tr",
      messages: tr,
      timeZone: "Asia/Dhaka",
      onError,
    },
    cache,
  ),
};

export default intls;
