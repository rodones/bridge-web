const deburr = (text: string): string =>
  text.normalize("NFKD").replace(/[\u0300-\u036f]/g, "");

export default deburr;
