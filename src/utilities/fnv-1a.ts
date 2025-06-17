type Fnv1aSize = (typeof SIZES)[number];

const PRIMES: Record<Fnv1aSize, bigint> = {
  32: 16_777_619n,
  64: 1_099_511_628_211n,
};

const OFFSETS: Record<Fnv1aSize, bigint> = {
  32: 2_166_136_261n,
  64: 14_695_981_039_346_656_037n,
};

const SIZES = [32, 64] as const;

const encoder = new TextEncoder();

const list = new Intl.ListFormat("en", {
  style: "long",
  type: "disjunction",
}).format(SIZES.map((value) => value.toString()));

export const fnv1a = (value: string | Uint8Array, size: Fnv1aSize) => {
  if (!PRIMES[size]) {
    throw new Error(`The \`size\` option must be one of ${list}`);
  }

  if (typeof value === "string") {
    value = encoder.encode(value);
  }

  const prime = PRIMES[size];
  let hash = OFFSETS[size];

  for (let index = 0; index < value.length; index++) {
    hash ^= BigInt(value[index]!);
    hash = BigInt.asUintN(size, hash * prime);
  }

  return hash;
};
