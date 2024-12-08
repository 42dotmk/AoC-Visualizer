interface StarDetail {
  star_index: number;
  get_star_ts: number;
}

interface CompletionDayLevel {
  [day: number]: {
    [star: number]: StarDetail;
  };
}

export interface Member {
  id: number;
  name: string;
  stars: number;
  local_score: number;
  global_score: number;
  last_star_ts: number;
  completion_day_level: CompletionDayLevel;
}

export interface Leaderboard {
  event: string;
  owner_id: number;
  day1_ts: number;
  members: { [id: number]: Member };
}

export interface HonoEnv {
  AoC2024Leaderboard: KVNamespace;
  AOC_COOKIE: string;
  LEADERBOARD_ID: string;
}

export interface HonoEnvProps {
  env: HonoEnv;
}
