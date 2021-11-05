const readFileAsBase64 = (file: File): Promise<string> => {
  const fileReader = new FileReader();

  return new Promise((resolve, reject) => {
    fileReader.readAsDataURL(file);

    fileReader.addEventListener("load", () => {
      const result = (fileReader.result?.toString() || "").split(",");

      if (result.length !== 2)
        reject(
          new Error("Conversion failed. FileReader returned invalid result."),
        );

      resolve(result[1]);
    });

    fileReader.addEventListener("error", (error) => reject(error));
  });
};

export default readFileAsBase64;
