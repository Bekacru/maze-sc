import {
  DesertPlant2,
  DesertStone,
  PalmTree,
  StopSign,
} from "../Desert-Vector";
import { DesertMountain } from "../DesertMountain";
import { Level } from "../Levels";
import { Tree1 } from "../Vectors";
import { Bridge } from "../components/bridge";

export const DesertLayer = () => {
  const svg = `<svg width="37" height="13" viewBox="0 0 37 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="37" height="13" fill="#F2994A"/>
    <path d="M5.5657 7.32793C5.85264 7.32793 6.08526 7.09532 6.08526 6.80838C6.08526 6.52143 5.85264 6.28882 5.5657 6.28882C5.27876 6.28882 5.04614 6.52143 5.04614 6.80838C5.04614 7.09532 5.27876 7.32793 5.5657 7.32793Z" fill="#F1F2F0"/>
    <path d="M24.262 7.32793C24.5489 7.32793 24.7815 7.09532 24.7815 6.80838C24.7815 6.52143 24.5489 6.28882 24.262 6.28882C23.975 6.28882 23.7424 6.52143 23.7424 6.80838C23.7424 7.09532 23.975 7.32793 24.262 7.32793Z" fill="#F1F2F0"/>
    <path d="M18.0295 6.28857C17.7429 6.28857 17.5103 6.52127 17.5103 6.80813C17.5103 7.09499 17.7429 7.32769 18.0295 7.32769C18.3163 7.32769 18.5491 7.09499 18.5491 6.80813C18.5491 6.52127 18.3163 6.28857 18.0295 6.28857Z" fill="#F1F2F0"/>
    <path d="M11.7976 7.32793C12.0846 7.32793 12.3172 7.09532 12.3172 6.80838C12.3172 6.52143 12.0846 6.28882 11.7976 6.28882C11.5107 6.28882 11.2781 6.52143 11.2781 6.80838C11.2781 7.09532 11.5107 7.32793 11.7976 7.32793Z" fill="#F1F2F0"/>
    <path d="M30.4939 7.32793C30.7809 7.32793 31.0135 7.09532 31.0135 6.80838C31.0135 6.52143 30.7809 6.28882 30.4939 6.28882C30.207 6.28882 29.9744 6.52143 29.9744 6.80838C29.9744 7.09532 30.207 7.32793 30.4939 7.32793Z" fill="#F1F2F0"/>
    <path d="M2.51927 3C2.23241 3 2 3.23212 2 3.51898C2 3.80584 2.23241 4.03854 2.51927 4.03854C2.80606 4.03854 3.03854 3.80584 3.03854 3.51898C3.03854 3.23212 2.80606 3 2.51927 3Z" fill="#F1F2F0"/>
    <path d="M8.7512 3C8.46434 3 8.23193 3.23212 8.23193 3.51898C8.23193 3.80584 8.46434 4.03854 8.7512 4.03854C9.03799 4.03854 9.27076 3.80584 9.27076 3.51898C9.27076 3.23212 9.03799 3 8.7512 3Z" fill="#F1F2F0"/>
    <path d="M14.9836 3C14.6968 3 14.4644 3.23212 14.4644 3.51898C14.4644 3.80584 14.6968 4.03854 14.9836 4.03854C15.2704 4.03854 15.5029 3.80584 15.5029 3.51898C15.5029 3.23212 15.2704 3 14.9836 3Z" fill="#F1F2F0"/>
    <path d="M27.4478 3C27.1609 3 26.9282 3.23212 26.9282 3.51898C26.9282 3.80584 27.1609 4.03854 27.4478 4.03854C27.7343 4.03854 27.967 3.80584 27.967 3.51898C27.967 3.23212 27.7343 3 27.4478 3Z" fill="#F1F2F0"/>
    <path d="M21.2156 3C20.9287 3 20.6963 3.23212 20.6963 3.51898C20.6963 3.80584 20.9287 4.03854 21.2156 4.03854C21.5023 4.03854 21.7348 3.80584 21.7348 3.51898C21.7348 3.23212 21.5023 3 21.2156 3Z" fill="#F1F2F0"/>
    <path d="M33.6797 3C33.3928 3 33.1604 3.23212 33.1604 3.51898C33.1604 3.80584 33.3928 4.03854 33.6797 4.03854C33.9665 4.03854 34.1989 3.80584 34.1989 3.51898C34.1989 3.23212 33.9665 3 33.6797 3Z" fill="#F1F2F0"/>
    <path d="M33.6797 9.57861C33.3928 9.57861 33.1604 9.81073 33.1604 10.0976C33.1604 10.385 33.3928 10.6172 33.6797 10.6172C33.9665 10.6172 34.1989 10.385 34.1989 10.0976C34.1989 9.81073 33.9665 9.57861 33.6797 9.57861Z" fill="#F1F2F0"/>
    <path d="M2.51927 9.57861C2.23241 9.57861 2 9.81073 2 10.0976C2 10.385 2.23241 10.6172 2.51927 10.6172C2.80606 10.6172 3.03854 10.385 3.03854 10.0976C3.03854 9.81073 2.80606 9.57861 2.51927 9.57861Z" fill="#F1F2F0"/>
    <path d="M21.2156 9.57861C20.9287 9.57861 20.6963 9.81073 20.6963 10.0976C20.6963 10.385 20.9287 10.6172 21.2156 10.6172C21.5023 10.6172 21.7348 10.385 21.7348 10.0976C21.7348 9.81073 21.5023 9.57861 21.2156 9.57861Z" fill="#F1F2F0"/>
    <path d="M14.9836 9.57861C14.6968 9.57861 14.4644 9.81073 14.4644 10.0976C14.4644 10.385 14.6968 10.6172 14.9836 10.6172C15.2704 10.6172 15.5029 10.385 15.5029 10.0976C15.5029 9.81073 15.2704 9.57861 14.9836 9.57861Z" fill="#F1F2F0"/>
    <path d="M27.4478 9.57861C27.1609 9.57861 26.9282 9.81073 26.9282 10.0976C26.9282 10.385 27.1609 10.6172 27.4478 10.6172C27.7343 10.6172 27.967 10.385 27.967 10.0976C27.967 9.81073 27.7343 9.57861 27.4478 9.57861Z" fill="#F1F2F0"/>
    <path d="M8.7512 9.57861C8.46434 9.57861 8.23193 9.81073 8.23193 10.0976C8.23193 10.385 8.46434 10.6172 8.7512 10.6172C9.03799 10.6172 9.27076 10.385 9.27076 10.0976C9.27083 9.81073 9.03799 9.57861 8.7512 9.57861Z" fill="#F1F2F0"/>
    </svg>
    `;
  const encodedSvg = encodeURIComponent(svg);
  return (
    <div
      style={{
        background: `linear-gradient(
            125deg,
            rgba(255, 234, 212, 0.685) 45.41%,
            rgba(242, 211, 86, 0.32) 109.31%,
            rgba(242, 239, 86, 0.19) 109.32%
          ),
          #c8e0f2`,
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
      className=" flex-grow h-full"
    >
      <div className="flex flex-col justify-end h-full flex-grow">
        <div className="grid grid-cols-4 relative">
          <div className="absolute bottom-0 -mb-2 flex items-end justify-between w-full px-4">
            <Level level={14} status="completed" />
            <Level level={13} status="focus" />
            <Level
              level={12}
              status="locked"
              className="lg:mb-4 md:mb-2 xl:mb-9 mb-2"
            />
            <Level level={11} status="nextActive" />
            <Level level={10} />
            <Level level={9} />
            <Level level={8} />
            {/* <Level level={8} /> */}
          </div>
          <div className="col-span-1 flex items-end px-2">
            <StopSign className="w-7 h-7 -mb-2" />
            <div className="flex items-center gap-2 w-10/12 justify-center -mb-2">
              <Tree1 className="w-[6%] " />
              <DesertPlant2 className="lg:w-[6%] w-1/12" />
            </div>
          </div>
          <div className="col-span-1 flex items-end">
            <Bridge className="lg:-mb-10 xl:-mb-12 md:-mb-8 -mb-4 w-5/12 z-40" />
            <div className="flex items-end gap-12 -mb-1 w-6/12  lg:-mb-2 xl:-mb-1">
              <Tree1 className="w-[6%] -mb-2" />
              <Tree1 className="w-[6%]" />
              <DesertPlant2 className="lg:w-[6%] w-1/12" />
              <PalmTree className="lg:w-[6%] w-1/12" />
            </div>
          </div>
          <div className="col-span-1 flex items-end gap-12">
            <div></div>
            <DesertStone className="w-2/12 lg:-mb-12 -mb-4 md:-mb-6" />
            <div className="flex items-center w-6/12 -mb-3">
              <Tree1 className="w-[6%] -mb-2" />
              <Tree1 className="w-[10%] " />
              <Tree1 className="w-1/12" />
            </div>
          </div>
          <div className="col-span-1 flex items-end justify-between">
            <PalmTree className="w-[7%] lg:-mb-7 xl:-mb-10 md:-mb-5 -mb-4" />
            <DesertMountain className="-mb-4" />
          </div>
        </div>
      </div>
      <div
        className="h-4 z-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
            DesertSvg
          )}")`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "contain",
        }}
      ></div>
      <div
        className="h-4 z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodedSvg}")`,
          backgroundRepeat: "repeat-x",
        }}
      ></div>
    </div>
  );
};

const DesertSvg = `<svg width="267" height="25" viewBox="0 0 267 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 25L0 17L0 9.5L18.8729 6.87403L28.3368 11.1027L31.8459 4.75775L42.7164 6.34496L46.2225 0L66.4727 5.16085L70.6805 5.68992L110.735 0C110.735 0 134.919 12.436 136.675 12.9651C138.428 13.4942 196.278 6.62209 196.278 6.62209L207.847 0L234.137 8.20736L266.438 9.5V19V25L0 25Z" fill="#FFC93F"/>
</svg>

`;
