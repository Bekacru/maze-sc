import { ShipSail } from "../IceVecotrs";
import { Level } from "../Levels";
import { Moon, Star } from "../Moon";
import { Mountain } from "../Mountain";
import { Mountain2 } from "../Mountain2";
import { Particles } from "../Particles";
import { IceStone, Tree1, Tree2 } from "../Vectors";

export const IceLayer = () => {
  return (
    <div
      style={{
        background: `linear-gradient(
        125deg,
        rgba(12, 2, 28, 0.98) 29.58%,
        rgba(54, 16, 168, 0.319) 70.57%,
        rgba(20, 6, 53, 0.601) 89.91%
      ),
      #000`,
        width: "100%",
        height: "33.3%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
      className="relative"
    >
      <Particles />

      <div className="flex flex-col justify-end flex-grow">
        <Moon />
        <Star className="mx-2 absolute top-3 left-3" />
        <Star className="mx-2 absolute top-12 right-80" />
        <Star className="mx-2 absolute top-12 left-80" />
        <div className="grid grid-cols-4 relative">
          <div className="absolute bottom-0 -mb-2 flex justify-between w-full px-4">
            <Level level={1} status="completed" />
            <Level level={2} status="focus" />
            <Level level={3} className="-mt-16" status="locked" />
            <Level level={4} className="-mt-2" status="nextActive" />
            <Level level={5} className="lg:-mt-16 xl:-mt-24 md:-mt-12 -mt-3" />
            <Level level={6} />
            <Level level={7} />
          </div>
          <div className="flex col-span-1 items-end px-2">
            <div className="w-2/6 flex items-end">
              <Tree2 className="w-1/6 -mb-2 sm:-mb-4 md:-mb-3" />
            </div>
            <div className="flex items-center gap-4 w-2/12 -mb-3  lg:-mb-4">
              <Tree1 className="w-3/12" />
              <Tree1 className="w-3/12" />
            </div>
          </div>
          <div className="flex col-span-2 items-end -mb-4 gap-20 justify-end">
            <Mountain2 className="w-4/12" />
            <Mountain className="w-6/12 -mb-3" />
          </div>
          <div className="flex col-span-1 items-end justify-between -mb-8">
            <Tree2 className="w-[6%] md:-mb-3 lg:-mb-7 mb-1 sm:mb-0 xl:-mb-10" />
            <IceStone className="sm:-mb-1 mb-1 md:-mb-4 lg:-mb-6 xl:-mb-10 w-1/12" />
            <ShipSail className="w-4/12 lg:-mb-10 md:-mb-3" />
          </div>
        </div>
        <div
          className="md:h-4 h-2 z-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='169' height='28' viewBox='0 0 169 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 26L0 20L0 11L33.3701 6.87403L38.5549 11.1027L40.4774 4.75775L46.4329 6.34496L48.3537 0L59.4479 5.16085L61.7532 5.68992L83.6974 0C83.6974 0 96.9467 12.436 97.9088 12.9651C98.8692 13.4942 130.563 6.62209 130.563 6.62209L136.901 0L151.304 8.20736L169 13V20V20.5L169 28L0 26Z' fill='url(%23paint0_linear_169_18)'/%3E%3Cpath d='M59.8838 20.9412L64.8441 9.57715L73.0169 21.073L59.8838 20.9412Z' fill='%2341ADE5'/%3E%3Cpath d='M82.9717 20.9414L86.4956 14.5985H88.8213L94.9825 9.44165L96.4908 15.3892L112.53 13.4067L118.922 20.5441L82.9717 20.9414Z' fill='%2341ADE5'/%3E%3Cpath d='M134.729 20.1448L135.657 16.4472L142.32 14.8581L144.26 10.895L160.062 20.5421L134.729 20.1448Z' fill='%2341ADE5'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_169_18' x1='82.8852' y1='-1.00024' x2='82.8852' y2='23.9998' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23D6EDFA'/%3E%3Cstop offset='1' stop-color='%234287B1'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="h-4 bg-[#61B2E3] z-50"></div>
      </div>
    </div>
  );
};
