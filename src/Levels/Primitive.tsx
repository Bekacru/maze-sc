import { cn } from "../lib/utils";

interface LevelProps {
  level: number;
  invertColor?: boolean;
  className?: string;
  color?: string;
  borderColor?: string;
  background?: string;
  children?: React.ReactNode;
}

export const Primitive = ({
  level,
  className,
  color,
  background,
  borderColor,
  children,
}: LevelProps) => {
  return (
    <div
      className={cn(
        "border border-dashed bg-gray-100/20 rounded-full p-4 w-5 h-5 md:h-10 md:w-10 relative lg:h-16 lg:w-16 flex items-center justify-center",
        className
      )}
      style={{ borderColor, background }}
    >
      {children}
      <span
        className="lg:text-2xl font-bold md:text-xl text-sm"
        style={{ color }}
      >
        L{level}
      </span>
    </div>
  );
};

export const Star = ({ className }: { className?: string }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.4832 14.767C15.1164 15.0952 13.6895 15.0793 12.3303 14.7207C10.9712 14.3621 9.72212 13.6721 8.69508 12.7123C7.66804 11.7526 6.89506 10.5531 6.44535 9.22126C5.99564 7.88945 5.88325 6.4669 6.11824 5.081C6.0825 5.11552 6.04477 5.1479 6.00524 5.178C5.72523 5.391 5.37524 5.47 4.67524 5.628L4.04024 5.772C1.58024 6.329 0.350235 6.607 0.057235 7.548C-0.234765 8.488 0.603235 9.469 2.28024 11.43L2.71424 11.937C3.19024 12.494 3.42923 12.773 3.53623 13.117C3.64323 13.462 3.60723 13.834 3.53523 14.577L3.46923 15.254C3.21623 17.871 3.08924 19.179 3.85524 19.76C4.62123 20.342 5.77323 19.812 8.07523 18.751L8.67223 18.477C9.32623 18.175 9.65323 18.025 10.0002 18.025C10.3472 18.025 10.6742 18.175 11.3292 18.477L11.9242 18.751C14.2272 19.811 15.3792 20.341 16.1442 19.761C16.9112 19.179 16.7842 17.871 16.5312 15.254L16.4832 14.767Z"
        fill="#F2994A"
      />
      <path
        d="M7.15323 3.408L6.82523 3.996C6.46523 4.642 6.28524 4.965 6.00524 5.178C6.04477 5.1479 6.0825 5.11552 6.11824 5.081C5.88325 6.4669 5.99564 7.88945 6.44535 9.22126C6.89506 10.5531 7.66804 11.7526 8.69508 12.7123C9.72212 13.6721 10.9712 14.3621 12.3303 14.7207C13.6895 15.0793 15.1164 15.0952 16.4832 14.767L16.4642 14.577C16.3932 13.834 16.3572 13.462 16.4642 13.117C16.5712 12.773 16.8092 12.494 17.2862 11.937L17.7202 11.43C19.3972 9.47 20.2352 8.489 19.9422 7.548C19.6502 6.607 18.4202 6.328 15.9602 5.772L15.3242 5.628C14.6252 5.47 14.2752 5.391 13.9942 5.178C13.7142 4.965 13.5342 4.642 13.1742 3.996L12.8472 3.408C11.5802 1.136 10.9472 0 10.0002 0C9.05323 0 8.42023 1.136 7.15323 3.408Z"
        fill="#F2994A"
      />
      <path
        d="M7.15323 3.408L6.82523 3.996C6.46523 4.642 6.28524 4.965 6.00524 5.178C6.04477 5.1479 6.0825 5.11552 6.11824 5.081C5.88325 6.4669 5.99564 7.88945 6.44535 9.22126C6.89506 10.5531 7.66804 11.7526 8.69508 12.7123C9.72212 13.6721 10.9712 14.3621 12.3303 14.7207C13.6895 15.0793 15.1164 15.0952 16.4832 14.767L16.4642 14.577C16.3932 13.834 16.3572 13.462 16.4642 13.117C16.5712 12.773 16.8092 12.494 17.2862 11.937L17.7202 11.43C19.3972 9.47 20.2352 8.489 19.9422 7.548C19.6502 6.607 18.4202 6.328 15.9602 5.772L15.3242 5.628C14.6252 5.47 14.2752 5.391 13.9942 5.178C13.7142 4.965 13.5342 4.642 13.1742 3.996L12.8472 3.408C11.5802 1.136 10.9472 0 10.0002 0C9.05323 0 8.42023 1.136 7.15323 3.408Z"
        fill="#F2C94C"
        fill-opacity="0.5"
      />
    </svg>
  );
};

export const LevelStar = ({ stars }: { stars: 1 | 2 | 3 }) => {
  return stars === 1 ? (
    <div className="flex items-center">
      <Star />
    </div>
  ) : stars === 2 ? (
    <div className="flex items-center">
      <Star />
      <Star />
    </div>
  ) : (
    <div className="flex top-0 absolute">
      <Star className="w-2 h-2 md:w-4 md:h-4 lg:w-5 lg:h-5" />
      <Star className="w-3 h-3 md:w-6 md:h-6 lg:w-7 lg:h-7 -mt-2 md:-mt-4" />
      <Star className="w-2 h-2 md:w-4 md:h-4 lg:w-5 lg:h-5" />
    </div>
  );
};
