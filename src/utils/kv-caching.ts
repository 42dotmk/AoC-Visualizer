const CACHE_PREFIX = "aoc-2024";
const CACHE_DURATION_S = 60 * 15; // 15 minutes

const key = (cacheKey: string) => `${CACHE_PREFIX}:${cacheKey}`;

export const getCached = async (kv: KVNamespace, cacheKey: string) => {
  const prefix = key(cacheKey);
  const entry = await kv.getWithMetadata(prefix, { type: "json" });

  if (!entry.value) {
    return null;
  }

  return entry.value;
};

export const writeCache = async (
  kv: KVNamespace,
  cacheKey: string,
  data: any
) => {
  const cachePath = key(cacheKey);
  try {
    await kv.put(cachePath, JSON.stringify(data), {
      expirationTtl: CACHE_DURATION_S,
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getCache = (kv: KVNamespace<string>) => ({
  getCached: (cacheKey: string) => getCached(kv, cacheKey),
  writeCache: (cacheKey: string, data: any) => writeCache(kv, cacheKey, data),
});
