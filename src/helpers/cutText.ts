const cutText = (
  text: string,
  length: number,
  suffix = "...",
  additionalLength = 50,
): string =>
  text.length > length + additionalLength
    ? `${text
        .replaceAll(/^\s+/g, "")
        .substring(0, length)
        .replaceAll(/\s+$/g, "")}${suffix}`
    : text;

export default cutText;
