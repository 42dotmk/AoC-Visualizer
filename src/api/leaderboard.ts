import { getCache } from "../utils/kv-caching";

const getLeaderboardData = async (leaderboardId: string, cookie: string) => {
    return await fetch(`https://adventofcode.com/2024/leaderboard/private/view/${leaderboardId}.json`, {
        "headers": {
            "Cookie": `session=${cookie}`
        },
        "method": "GET",
    }).then(res => res.json());
};

const getAndCache = async (kv: KVNamespace<string>, leaderboardId: string, cookie: string) => {
    const { getCached, writeCache } = getCache(kv);

    const cached = await getCached(leaderboardId);
    if (cached) {
        return cached;
    }

    const leaderboard = await getLeaderboardData(leaderboardId, cookie);
    await writeCache(leaderboardId, leaderboard);
    return leaderboard;
}

export const getLeaderboard = async (kv: KVNamespace<string>, leaderboardId: string, cookie: string) => {
    const leaderboard = await getAndCache(kv, leaderboardId, cookie);
    
    return leaderboard;
};