import { HonoEnvProps, Leaderboard, Member } from "../types";
import { getLeaderboard } from "../api/leaderboard";
import Info from "./Info";

const Leaderboard = async ({ env }: HonoEnvProps) => {
  const leaderboard: Leaderboard = (await getLeaderboard(
    env.AoC2024Leaderboard,
    env.LEADERBOARD_ID,
    env.AOC_COOKIE
  )) as Leaderboard;

  if (!leaderboard) {
    return <div>Error loading leaderboard...</div>;
  }

  const sortedMembers = Object.values(leaderboard.members).sort(
    (a, b) => b.local_score - a.local_score
  );

  const renderStars = (member: Member) => {
    const starsPerDay = Object.values(member.completion_day_level).map(
      (day) => Object.keys(day).length
    );

    while (starsPerDay.length < 25) {
      starsPerDay.push(0);
    }

    const getClass = (stars: number) => {
      if (stars == 2) {
        return "shadow-primary text-primary";
      }
      if (stars == 1) {
        return "shadow-secondary-400 text-secondary-400";
      }
      return "text-slate-500";
    };

    return starsPerDay.map((stars, index) => (
      <span
        key={index}
        className={`mt-5 text-2xl font-bold ${getClass(stars)}`}
      >
        *
      </span>
    ));
  };

  return (
    <div>
      <Info members={sortedMembers} />
      <div className="border-2 border-secondary-500 border-r-primary border-b-primary">
        <ul className="m-0 list-none">
          {sortedMembers.map((member, index) => (
            <li key={member.id}>
              <p>
                <span className="w-8 inline-block">{index + 1}.</span>{" "}
                <span className="lg:inline-block hidden relative top-2">
                  {renderStars(member)}
                </span>{" "}
                <span className="text-primary w-8 inline-block">
                  {member.stars}*
                </span>{" "}
                |{" "}
                <span className="text-secondary-400">
                  {member.name ?? "/* // Unnamed */"}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-center text-slate-500 mt-5">
          Fun fact, there are as many snowflaes as members on the leaderboard (
          {sortedMembers.length}). You really are your own special snowflake.
        </p>
      </div>
    </div>
  );
};

export default Leaderboard;
