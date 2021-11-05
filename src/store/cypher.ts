/**
 * Usefull resources:
 * - https://dev.to/voraciousdev/a-practical-guide-to-the-web-cryptography-api-4o8n
 * - https://gist.github.com/pedrouid/b4056fd1f754918ddae86b32cf7d803e
 */

const key = crypto.subtle.importKey(
  "jwk",
  {
    kty: "oct",
    k: process.env.RODONES_PANEL_STORAGE_ENCRYPTION_KEY,
    alg: "A256CTR",
    ext: true,
  },
  {
    name: "AES-CTR",
  },
  false,
  ["encrypt", "decrypt"],
);

const encode = (data: string): Uint8Array => {
  const encoder = new TextEncoder();

  return encoder.encode(data);
};

const decode = (buffer: BufferSource): string => {
  const decoder = new TextDecoder();

  return decoder.decode(buffer);
};

const pack = (buffer: ArrayBuffer): string => {
  return btoa(
    String.fromCharCode.apply(
      null,
      new Uint8Array(buffer) as unknown as number[],
    ),
  );
};

const unpack = (packed: string): ArrayBuffer => {
  const string = atob(packed);
  const buffer = new ArrayBuffer(string.length);
  const bufferView = new Uint8Array(buffer);

  for (let i = 0; i < string.length; i += 1) {
    bufferView[i] = string.charCodeAt(i);
  }

  return buffer;
};

export const encrypt = async (value: unknown): Promise<string> => {
  if (!crypto?.subtle || !TextEncoder || !TextDecoder || !ArrayBuffer)
    return Promise.resolve(JSON.stringify(value));

  return crypto.subtle
    .encrypt(
      {
        name: "AES-CTR",
        counter: new Uint8Array(16),
        length: 128,
      },
      await key,
      encode(JSON.stringify(value)),
    )
    .then(pack);
};

export const decrypt = async (
  value: string | null,
): Promise<unknown | undefined> => {
  if (!crypto?.subtle || !TextEncoder || !TextDecoder || !ArrayBuffer)
    return JSON.parse(value as string);

  try {
    return JSON.parse(
      await crypto.subtle
        .decrypt(
          {
            name: "AES-CTR",
            counter: new ArrayBuffer(16),
            length: 128,
          },
          await key,
          unpack(value as string),
        )
        .then(decode),
    );
  } catch (_) {
    return undefined;
  }
};
