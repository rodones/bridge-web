import React from "react";
import { IntlShape, RawIntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import { Locale } from "../locales/types";

interface ReduxIntlProviderProps {
  locales: Record<Locale, IntlShape>;
}

const ReduxIntlProvider = ({
  children,
  locales,
}: React.PropsWithChildren<ReduxIntlProviderProps>): React.ReactElement => {
  const locale = useSelector((state) => state.locale);

  return <RawIntlProvider value={locales[locale]}>{children}</RawIntlProvider>;
};

export default ReduxIntlProvider;
