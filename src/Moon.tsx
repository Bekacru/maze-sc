import { motion } from "framer-motion";
export const Moon = () => {
  return (
    <div className="absolute right-0 top-8 md:top-8 md:right-28 flex items-center">
      <div className="flex flex-col gap-1"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
      >
        <g filter="url(#filter0_d_93_2427)">
          <path
            d="M16.0002 34.6666C22.4434 34.6666 27.6668 29.4432 27.6668 22.9999C27.6668 22.4601 26.8577 22.3709 26.5786 22.8329C25.2505 25.0306 22.8386 26.4999 20.0835 26.4999C15.8953 26.4999 12.5002 23.1048 12.5002 18.9166C12.5002 16.1614 13.9695 13.7495 16.1672 12.4215C16.6292 12.1423 16.54 11.3333 16.0002 11.3333C9.55684 11.3333 4.3335 16.5566 4.3335 22.9999C4.3335 29.4432 9.55684 34.6666 16.0002 34.6666Z"
            fill="#F3F6FF"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_93_2427"
            x="0.633496"
            y="0.633252"
            width="36.7335"
            height="36.7333"
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
            <feOffset dx="3" dy="-4" />
            <feGaussianBlur stdDeviation="3.35" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.87264 0 0 0 0 0.782677 0 0 0 0 0.782677 0 0 0 0.29 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_93_2427"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_93_2427"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <div className="flex flex-col gap-1 mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="mx-2"
        >
          <path
            d="M6.26562 0L6.69117 5.12613L11.5445 6.00493L6.60646 6.44258L5.53959 11.2838L5.49018 6.18191L0.260691 5.2789L5.55068 5.24159L6.26562 0Z"
            fill="#E3AD35"
          />
        </svg>
      </div>
    </div>
  );
};

export const Star = ({ className }: { className: string }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={className}
    >
      <path
        d="M6.26562 0L6.69117 5.12613L11.5445 6.00493L6.60646 6.44258L5.53959 11.2838L5.49018 6.18191L0.260691 5.2789L5.55068 5.24159L6.26562 0Z"
        fill="#E3AD35"
      />
    </motion.svg>
  );
};
