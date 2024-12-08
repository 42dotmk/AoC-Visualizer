import { Hono } from "hono";
import { getLeaderboard } from "./api/leaderboard";
import { HonoEnv } from "./types";
import Leaderboard from "./views/Leaderboard";
import Layout from "./views/Layout";

const hono = new Hono<{ Bindings: HonoEnv }>();

hono.get("/", async (c) => {
  return c.html(
    <Layout>
      <Leaderboard env={c.env} />
    </Layout>
  );
});

hono.get("/api/leaderboard", async (c) => {
  try {
    const leaderboard = await getLeaderboard(
      c.env.AoC2024Leaderboard,
      c.env.LEADERBOARD_ID,
      c.env.AOC_COOKIE
    );
    return c.json({ leaderboard });
  } catch (e: any) {
    console.error(e);
    return c.json({ error: e }, 500);
  }
});

export default hono;
