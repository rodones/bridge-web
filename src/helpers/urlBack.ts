const urlBack = (url: string): string => {
  const protocol = url.lastIndexOf("//") + 1;
  const lastIndex = url.lastIndexOf("/");

  return protocol === lastIndex ? url : url.substring(0, lastIndex);
};

export default urlBack;
