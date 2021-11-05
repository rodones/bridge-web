import { useIntl } from "react-intl";
import { useCallback } from "react";

type translator = (
  id: string,
  values?: Record<string, string | number | boolean | Date | null | undefined>,
) => string;

const useTranslate = (): translator => {
  const { formatMessage } = useIntl();

  const translate: translator = useCallback(
    (id, values?) => (id ? formatMessage({ id }, values) : ""),
    [formatMessage],
  );

  return translate;
};

export default useTranslate;
