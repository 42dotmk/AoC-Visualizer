import { html } from "hono/html";
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

      <a class="no-underline text-xs" href="https://42.mk">
        {html`
          <pre id="ascii" class="bg-transparent m-0 p-0 overflow-visible">
<span class="text-secondary-500"> MMMMMMMM         MMMMMMM         MMMMMMMMMM          MMMMMMMMM </span><span class="text-primary"> MM          MM     MMMMMMMMMM             </span>
<span class="text-secondary-500">M      MMM      MM     MMMM      MM       MMMM      MM M        </span><span class="text-primary"> MM          MM   MMM         M            </span>
<span class="text-secondary-500">M       MMMM    MM       MMM     MM         M MM  MMMM          </span><span class="text-primary"> MM          MM  MM           M            </span>
<span class="text-secondary-500">M         MM    MM        MMMM   MM               MM            </span><span class="text-primary"> MM          MM               M            </span>
<span class="text-secondary-500">M         MM    MM          MMM   MMM             MM            </span><span class="text-primary"> MMM         MM             MM             </span>
<span class="text-secondary-500">M         MM    MM           MM     MMM           MM            </span><span class="text-primary">   MMM       MM           MMM              </span>
<span class="text-secondary-500">MMMMMMMMMMMM    MM           MM       MM          MMMMMMM       </span><span class="text-primary">    MMMMMMMMMMM         MMM                </span>
<span class="text-secondary-500">MMMMMMMMMM      MM           MM         MM        MM            </span><span class="text-primary">             MM       MMM                  </span>
<span class="text-secondary-500">M        MMM    MMMMMMMMMMMMMMM           MM      MM            </span><span class="text-primary">             MM      MM                    </span>
<span class="text-secondary-500">M         M MM  MMMMMMMMMMMMMMM            MMM    MM            </span><span class="text-primary">             MM    MM                      </span>
<span class="text-secondary-500">M           MM  MM           MM  MM          MMM  MM            </span><span class="text-primary">             MM  MM           M            </span>
<span class="text-secondary-500">M            M  MM           MM  MMM          MM  MMM           </span><span class="text-primary">             MM  M           MM            </span>
<span class="text-secondary-500">M            M  MM           MM   MM M        MM   MMMM         </span><span class="text-primary">             MM  M         MMMM            </span>
<span class="text-secondary-500">MMMMMMMMMMMMMM  MM           MM     MMMMMMMMMMMM     MMMMMMMMMM </span><span class="text-primary">             MM  MMMMMMMMMMMM              </span></pre>
<script>
  const ascii = document.getElementById("ascii");
  const ALPHANUMERIC = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const getRandomChar = () => ALPHANUMERIC[Math.floor(Math.random() * ALPHANUMERIC.length)];
  ascii.innerHTML = ascii.innerHTML.replace(/M/g, getRandomChar());
</script>
`}
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
            stars in total in addition to the prize pool percentage. Keep up the
            good work!
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
