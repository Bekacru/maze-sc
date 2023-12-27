import { LevelStar, Primitive, Star } from "./Levels/Primitive";
import { cn } from "./lib/utils";

export const Level = ({
  status = "inActive",
  ...rest
}: {
  level: number;
  invertColor?: boolean;
  className?: string;
  status?:
    | "inActive"
    | "locked"
    | "unlocked"
    | "completed"
    | "nextActive"
    | "failed"
    | "focus";
}) => {
  return status === "inActive" ? (
    <InactiveLevel {...rest} />
  ) : status === "nextActive" ? (
    <NextActiveLevel {...rest} />
  ) : status === "locked" ? (
    <LockedLevel {...rest} />
  ) : status === "failed" ? (
    <FailedLevel {...rest} />
  ) : status === "focus" ? (
    <FocusLevel {...rest} />
  ) : (
    <CompletedLevel {...rest} />
  );
};

interface LevelProps {
  level: number;
  invertColor?: boolean;
  className?: string;
}

export const InactiveLevel = (props: LevelProps) => {
  const color = props.invertColor ? "#333333" : "#919191";
  return <Primitive {...props} color={color} borderColor={color} />;
};

export const CompletedLevel = (props: LevelProps) => {
  const color = "#27AE60";
  return (
    <Primitive
      {...props}
      color={"white"}
      background={color}
      borderColor={"#146C39"}
      className="border-2 border-solid"
    >
      <LevelStar stars={3} />
    </Primitive>
  );
};

export const NextActiveLevel = ({ level }: LevelProps) => {
  return (
    <Primitive
      level={level}
      background={"#2F80ED"}
      color="#fff"
      className="border-gray-200"
    >
      <svg
        width="113"
        height="32"
        viewBox="0 0 113 32"
        className="absolute -top-6 -right-20 md:-top-8 md:-right-24 scale-50 md:scale-75 lg:scale-100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_98_75)">
          <path
            d="M1 11C1 5.47715 5.47715 1 11 1H101.107C106.669 1 111.163 5.53887 111.106 11.1009L111.042 17.4941C110.987 22.9773 106.526 27.3933 101.042 27.3933H8.90742C6.5205 27.3933 4.2123 28.247 2.39993 29.8003L1.82552 30.2926C1.50118 30.5706 1.00015 30.3402 1.00014 29.913L1 22.5056V11Z"
            fill="#2F80ED"
          />
          <path
            d="M1.5 11C1.5 5.75329 5.7533 1.5 11 1.5H101.107C106.391 1.5 110.66 5.81192 110.606 11.0958L110.542 17.4891C110.489 22.6981 106.252 26.8933 101.042 26.8933H8.90742C6.40115 26.8933 3.97754 27.7897 2.07455 29.4207L1.50014 29.913L1.5 22.5056V11Z"
            stroke="#FFC93F"
          />
        </g>
        <path
          d="M15.9435 16.0275L17.6085 11.8425H19.8435L15.6135 21.12H13.3335L14.7585 18L12.186 11.8425H14.4585L15.9435 16.0275ZM23.6932 18.18C23.0182 18.18 22.4182 18.0425 21.8932 17.7675C21.3732 17.4875 20.9632 17.105 20.6632 16.62C20.3682 16.13 20.2207 15.57 20.2207 14.94C20.2207 14.31 20.3682 13.75 20.6632 13.26C20.9632 12.765 21.3732 12.375 21.8932 12.09C22.4182 11.805 23.0182 11.6625 23.6932 11.6625C24.3682 11.6625 24.9632 11.805 25.4782 12.09C25.9932 12.375 26.3957 12.765 26.6857 13.26C26.9757 13.75 27.1207 14.31 27.1207 14.94C27.1207 15.57 26.9757 16.13 26.6857 16.62C26.3957 17.105 25.9932 17.4875 25.4782 17.7675C24.9632 18.0425 24.3682 18.18 23.6932 18.18ZM23.6932 16.305C23.9532 16.305 24.1782 16.2475 24.3682 16.1325C24.5582 16.0175 24.7057 15.855 24.8107 15.645C24.9157 15.435 24.9682 15.1975 24.9682 14.9325C24.9682 14.6625 24.9157 14.4225 24.8107 14.2125C24.7057 14.0025 24.5582 13.8375 24.3682 13.7175C24.1782 13.5975 23.9532 13.5375 23.6932 13.5375C23.4332 13.5375 23.2057 13.5975 23.0107 13.7175C22.8207 13.8375 22.6707 14.0025 22.5607 14.2125C22.4557 14.4225 22.4032 14.6625 22.4032 14.9325C22.4032 15.1975 22.4557 15.435 22.5607 15.645C22.6707 15.855 22.8207 16.0175 23.0107 16.1325C23.2057 16.2475 23.4332 16.305 23.6932 16.305ZM30.4672 14.6925C30.4672 15.1825 30.5597 15.575 30.7447 15.87C30.9297 16.16 31.2397 16.305 31.6747 16.305C32.1197 16.305 32.4322 16.16 32.6122 15.87C32.7972 15.575 32.8897 15.1825 32.8897 14.6925V11.8425H35.1397V14.9325C35.1397 15.5925 35.0022 16.1675 34.7272 16.6575C34.4572 17.1425 34.0647 17.5175 33.5497 17.7825C33.0347 18.0475 32.4097 18.18 31.6747 18.18C30.9447 18.18 30.3222 18.0475 29.8072 17.7825C29.2922 17.5175 28.8997 17.1425 28.6297 16.6575C28.3597 16.1675 28.2247 15.5925 28.2247 14.9325V11.8425H30.4672V14.6925ZM45.2722 18V17.0025C45.2272 17.1025 45.1122 17.2475 44.9272 17.4375C44.7472 17.6275 44.5072 17.8 44.2072 17.955C43.9072 18.105 43.5572 18.18 43.1572 18.18C42.5572 18.18 42.0322 18.035 41.5822 17.745C41.1322 17.45 40.7822 17.0575 40.5322 16.5675C40.2822 16.0725 40.1572 15.525 40.1572 14.925C40.1572 14.325 40.2822 13.78 40.5322 13.29C40.7822 12.795 41.1322 12.4 41.5822 12.105C42.0322 11.81 42.5572 11.6625 43.1572 11.6625C43.5422 11.6625 43.8797 11.725 44.1697 11.85C44.4597 11.97 44.6947 12.115 44.8747 12.285C45.0547 12.45 45.1797 12.6025 45.2497 12.7425V11.8425H47.5147V18H45.2722ZM42.3922 14.925C42.3922 15.205 42.4572 15.4575 42.5872 15.6825C42.7172 15.9025 42.8897 16.075 43.1047 16.2C43.3247 16.325 43.5672 16.3875 43.8322 16.3875C44.1072 16.3875 44.3497 16.325 44.5597 16.2C44.7697 16.075 44.9347 15.9025 45.0547 15.6825C45.1797 15.4575 45.2422 15.205 45.2422 14.925C45.2422 14.645 45.1797 14.395 45.0547 14.175C44.9347 13.95 44.7697 13.775 44.5597 13.65C44.3497 13.52 44.1072 13.455 43.8322 13.455C43.5672 13.455 43.3247 13.52 43.1047 13.65C42.8897 13.775 42.7172 13.95 42.5872 14.175C42.4572 14.395 42.3922 14.645 42.3922 14.925ZM51.0465 18H48.7665V11.8425H51.0465V12.795H51.009C51.049 12.68 51.1465 12.535 51.3015 12.36C51.4565 12.18 51.674 12.02 51.954 11.88C52.234 11.735 52.5765 11.6625 52.9815 11.6625C53.2665 11.6625 53.529 11.7075 53.769 11.7975C54.009 11.8825 54.184 11.965 54.294 12.045L53.409 13.8975C53.339 13.8125 53.214 13.725 53.034 13.635C52.859 13.54 52.639 13.4925 52.374 13.4925C52.069 13.4925 51.8165 13.57 51.6165 13.725C51.4215 13.88 51.2765 14.0675 51.1815 14.2875C51.0915 14.5075 51.0465 14.715 51.0465 14.91V18ZM56.5627 15.405C56.5777 15.625 56.6477 15.82 56.7727 15.99C56.8977 16.16 57.0702 16.295 57.2902 16.395C57.5152 16.49 57.7802 16.5375 58.0852 16.5375C58.3752 16.5375 58.6352 16.5075 58.8652 16.4475C59.1002 16.3875 59.3027 16.3125 59.4727 16.2225C59.6477 16.1325 59.7827 16.04 59.8777 15.945L60.7627 17.355C60.6377 17.49 60.4602 17.6225 60.2302 17.7525C60.0052 17.8775 59.7077 17.98 59.3377 18.06C58.9677 18.14 58.5002 18.18 57.9352 18.18C57.2552 18.18 56.6502 18.0525 56.1202 17.7975C55.5902 17.5425 55.1727 17.1675 54.8677 16.6725C54.5627 16.1775 54.4102 15.5725 54.4102 14.8575C54.4102 14.2575 54.5402 13.7175 54.8002 13.2375C55.0652 12.7525 55.4477 12.37 55.9477 12.09C56.4477 11.805 57.0502 11.6625 57.7552 11.6625C58.4252 11.6625 59.0052 11.785 59.4952 12.03C59.9902 12.275 60.3702 12.64 60.6352 13.125C60.9052 13.605 61.0402 14.205 61.0402 14.925C61.0402 14.965 61.0377 15.045 61.0327 15.165C61.0327 15.285 61.0277 15.365 61.0177 15.405H56.5627ZM58.8952 14.2125C58.8902 14.0525 58.8477 13.895 58.7677 13.74C58.6877 13.58 58.5677 13.45 58.4077 13.35C58.2477 13.245 58.0427 13.1925 57.7927 13.1925C57.5427 13.1925 57.3302 13.2425 57.1552 13.3425C56.9852 13.4375 56.8552 13.5625 56.7652 13.7175C56.6752 13.8725 56.6252 14.0375 56.6152 14.2125H58.8952ZM70.4781 11.6625C70.9081 11.6625 71.3281 11.75 71.7381 11.925C72.1481 12.1 72.4856 12.3775 72.7506 12.7575C73.0156 13.1325 73.1481 13.6275 73.1481 14.2425V18H70.8681V14.6175C70.8681 14.1775 70.7681 13.8475 70.5681 13.6275C70.3731 13.4025 70.1056 13.29 69.7656 13.29C69.5406 13.29 69.3256 13.35 69.1206 13.47C68.9156 13.585 68.7481 13.75 68.6181 13.965C68.4931 14.175 68.4306 14.4175 68.4306 14.6925V18H66.1431V7.68H68.4306V12.75C68.4856 12.585 68.6081 12.42 68.7981 12.255C68.9931 12.085 69.2356 11.945 69.5256 11.835C69.8206 11.72 70.1381 11.6625 70.4781 11.6625ZM76.3088 15.405C76.3238 15.625 76.3938 15.82 76.5188 15.99C76.6438 16.16 76.8163 16.295 77.0363 16.395C77.2613 16.49 77.5263 16.5375 77.8313 16.5375C78.1213 16.5375 78.3813 16.5075 78.6113 16.4475C78.8463 16.3875 79.0488 16.3125 79.2188 16.2225C79.3938 16.1325 79.5288 16.04 79.6238 15.945L80.5088 17.355C80.3838 17.49 80.2063 17.6225 79.9763 17.7525C79.7513 17.8775 79.4538 17.98 79.0838 18.06C78.7138 18.14 78.2463 18.18 77.6813 18.18C77.0013 18.18 76.3963 18.0525 75.8663 17.7975C75.3363 17.5425 74.9188 17.1675 74.6138 16.6725C74.3088 16.1775 74.1563 15.5725 74.1563 14.8575C74.1563 14.2575 74.2863 13.7175 74.5463 13.2375C74.8113 12.7525 75.1938 12.37 75.6938 12.09C76.1938 11.805 76.7963 11.6625 77.5013 11.6625C78.1713 11.6625 78.7513 11.785 79.2413 12.03C79.7363 12.275 80.1163 12.64 80.3813 13.125C80.6513 13.605 80.7863 14.205 80.7863 14.925C80.7863 14.965 80.7838 15.045 80.7788 15.165C80.7788 15.285 80.7738 15.365 80.7638 15.405H76.3088ZM78.6413 14.2125C78.6363 14.0525 78.5938 13.895 78.5138 13.74C78.4338 13.58 78.3138 13.45 78.1538 13.35C77.9938 13.245 77.7888 13.1925 77.5388 13.1925C77.2888 13.1925 77.0763 13.2425 76.9013 13.3425C76.7313 13.4375 76.6013 13.5625 76.5113 13.7175C76.4213 13.8725 76.3713 14.0375 76.3613 14.2125H78.6413ZM84.0495 18H81.7695V11.8425H84.0495V12.795H84.012C84.052 12.68 84.1495 12.535 84.3045 12.36C84.4595 12.18 84.677 12.02 84.957 11.88C85.237 11.735 85.5795 11.6625 85.9845 11.6625C86.2695 11.6625 86.532 11.7075 86.772 11.7975C87.012 11.8825 87.187 11.965 87.297 12.045L86.412 13.8975C86.342 13.8125 86.217 13.725 86.037 13.635C85.862 13.54 85.642 13.4925 85.377 13.4925C85.072 13.4925 84.8195 13.57 84.6195 13.725C84.4245 13.88 84.2795 14.0675 84.1845 14.2875C84.0945 14.5075 84.0495 14.715 84.0495 14.91V18ZM89.5656 15.405C89.5806 15.625 89.6506 15.82 89.7756 15.99C89.9006 16.16 90.0731 16.295 90.2931 16.395C90.5181 16.49 90.7831 16.5375 91.0881 16.5375C91.3781 16.5375 91.6381 16.5075 91.8681 16.4475C92.1031 16.3875 92.3056 16.3125 92.4756 16.2225C92.6506 16.1325 92.7856 16.04 92.8806 15.945L93.7656 17.355C93.6406 17.49 93.4631 17.6225 93.2331 17.7525C93.0081 17.8775 92.7106 17.98 92.3406 18.06C91.9706 18.14 91.5031 18.18 90.9381 18.18C90.2581 18.18 89.6531 18.0525 89.1231 17.7975C88.5931 17.5425 88.1756 17.1675 87.8706 16.6725C87.5656 16.1775 87.4131 15.5725 87.4131 14.8575C87.4131 14.2575 87.5431 13.7175 87.8031 13.2375C88.0681 12.7525 88.4506 12.37 88.9506 12.09C89.4506 11.805 90.0531 11.6625 90.7581 11.6625C91.4281 11.6625 92.0081 11.785 92.4981 12.03C92.9931 12.275 93.3731 12.64 93.6381 13.125C93.9081 13.605 94.0431 14.205 94.0431 14.925C94.0431 14.965 94.0406 15.045 94.0356 15.165C94.0356 15.285 94.0306 15.365 94.0206 15.405H89.5656ZM91.8981 14.2125C91.8931 14.0525 91.8506 13.895 91.7706 13.74C91.6906 13.58 91.5706 13.45 91.4106 13.35C91.2506 13.245 91.0456 13.1925 90.7956 13.1925C90.5456 13.1925 90.3331 13.2425 90.1581 13.3425C89.9881 13.4375 89.8581 13.5625 89.7681 13.7175C89.6781 13.8725 89.6281 14.0375 89.6181 14.2125H91.8981Z"
          fill="white"
        />
        <defs>
          <filter
            id="filter0_d_98_75"
            x="0"
            y="0"
            width="112.107"
            height="31.4139"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.105882 0 0 0 0 0.105882 0 0 0 0 0.105882 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_98_75"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_98_75"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </Primitive>
  );
};

export const FocusLevel = ({ level }: LevelProps) => {
  return (
    <Primitive
      level={level}
      className="border-black/50"
      background={"#2F80ED"}
      color="#fff"
    />
  );
};

export const LockedLevel = ({ level, className, invertColor }: LevelProps) => {
  const color = invertColor ? "#333333" : "#919191";
  return (
    <Primitive
      level={level}
      className={cn(className, "text-gray-400")}
      borderColor={color}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 21 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 right-0 lg:w-6 lg:h-6 md:w-4 md:h-4 w-3 h-3"
      >
        <path
          d="M9.33593 0.741266C6.03776 1.00127 3.56602 3.89608 3.82603 7.19425L4.10895 10.7831L2.91266 10.8774C2.27811 10.9274 1.68942 11.2275 1.2761 11.7116C0.862777 12.1956 0.658678 12.8241 0.708701 13.4586L1.46316 23.0289C1.51319 23.6635 1.81324 24.2522 2.2973 24.6655C2.78137 25.0788 3.4098 25.2829 4.04435 25.2329L18.3998 24.1012C19.0344 24.0512 19.6231 23.7511 20.0364 23.267C20.4497 22.783 20.6538 22.1545 20.6038 21.52L19.8493 11.9497C19.7993 11.3151 19.4992 10.7264 19.0152 10.3131C18.5311 9.8998 17.9027 9.6957 17.2681 9.74573L16.0718 9.84004L15.7889 6.25117C15.5289 2.953 12.6341 0.48126 9.33593 0.741266ZM6.2186 7.00563C6.06262 5.02697 7.54589 3.28983 9.52455 3.13384C11.5032 2.97786 13.2403 4.46112 13.3963 6.43979L13.6793 10.0287L6.50153 10.5945L6.2186 7.00563ZM12.015 19.4562L12.2298 22.1802L9.83718 22.3688L9.62244 19.6448C9.18532 19.4383 8.82106 19.1041 8.57768 18.6864C8.33431 18.2687 8.22325 17.787 8.25915 17.3048C8.29505 16.8227 8.47622 16.3628 8.77878 15.9857C9.08134 15.6086 9.49108 15.3321 9.95397 15.1926C10.2977 15.0877 10.6606 15.0612 11.0159 15.1152C11.3712 15.1692 11.7098 15.3023 12.0068 15.5046C12.3038 15.7069 12.5517 15.9734 12.732 16.2842C12.9123 16.5951 13.0206 16.9424 13.0488 17.3007C13.0811 17.7191 13.0026 18.1387 12.8211 18.5171C12.6396 18.8955 12.3616 19.2194 12.015 19.4562Z"
          fill={color}
        />
      </svg>
    </Primitive>
  );
};

export const FailedLevel = ({ level }: LevelProps) => {
  return (
    <div
      className="border-2 border-black/50 rounded-full p-2 h-16 w-16 flex items-center justify-center relative mt-4"
      style={{ background: "#EB5757" }}
    >
      <span className="text-2xl font-bold text-white">L{level}</span>
    </div>
  );
};
