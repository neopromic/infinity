interface ILogoProps {
  fill?: string;
  className?: string;
}

function Logo({ fill, className }: ILogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="813"
      height="813"
      fillRule="evenodd"
      clipRule="evenodd"
      imageRendering="optimizeQuality"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      className={className}
    >
      <path
        fill={fill}
        d="M403.5 182.5a12.93 12.93 0 015 .5A53259.818 53259.818 0 00598 293.5c.667 75 .667 150 0 225a16098.517 16098.517 0 01-192 111 16098.517 16098.517 0 01-192-111c-.667-75-.667-150 0-225a17469.192 17469.192 0 00189.5-111z"
        opacity="0.994"
      ></path>
    </svg>
  );
}

export default Logo;
