import { Member } from "../types";
import Music from "./Music";

const Info = ({ members }: { members: Member[] }) => {
  const allStars = members.reduce((acc, member) => acc + member.stars, 0);

  return (
    <div>
      <div className="snowflakes">
        {new Array(members.length).fill(0).map((member) => (
          <div className="snowflake">
            <div className="inner">❅</div>
          </div>
        ))}
      </div>

      <a href="https://42.mk">
        <img
          src="/base.svg"
          className="m-0 w-[250px] h-[150px]"
        />
      </a>

      <div className="mx-auto flex flex-col items-center content-center container max-w-4xl">
        <div>
          <p>
            Welcome to the Advent of Code 2024 Leaderboard at{" "}
            <a href="https://42.mk/">42.mk</a>.
          </p>
          <p>
            Want to join and be a part of the fun? Click{" "}
            <a href="https://42.mk/events/advent-of-code-2024">here</a>.
          </p>
          <p>
            So far you have earned{" "}
            <span className="font-bold text-xl shadow-primary text-primary underline">
              {allStars}
            </span>{" "}
            stars in total. Keep up the good work!
          </p>
          <p>
            This means we will donate{" "}
            <span className="font-bold text-xl shadow-primary text-primary underline">
              {`${allStars * 5} MKD`}
            </span>{" "}
            stars in total. Let's earn as many stars as possible and help as
            much as we can!
          </p>
          <p>
            Click{" "}
            <a href="https://drugastrana.mk/event/advent-of-code-42-2024/">
              here
            </a>{" "}
            to buy a ticket and increase the prize and donation pool!
          </p>
          <div>
            <Music />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
