import * as React from "react";

function SvgPerformance(props) {
  return (
    <svg
      width={95}
      height={104}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        filter="url(#performance_svg__filter0_d)"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path
          d="M47.5 17C62.136 17 74 28.864 74 43.5 74 58.135 62.136 70 47.5 70S21 58.135 21 43.5C21 28.864 32.864 17 47.5 17z"
          fill="#FF4361"
        />
        <path
          d="M47.5 17C62.136 17 74 28.864 74 43.5 74 58.135 62.136 70 47.5 70S21 58.135 21 43.5C21 28.864 32.864 17 47.5 17z"
          fill="url(#performance_svg__paint0_linear)"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42 1h10C68.569 1 82 14.43 82 31v10c0 16.568-13.431 30-30 30H42c-16.569 0-30-13.432-30-30V31C12 14.43 25.43 1 42 1z"
        fill="#FF4361"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42 1h10C68.569 1 82 14.43 82 31v10c0 16.568-13.431 30-30 30H42c-16.569 0-30-13.432-30-30V31C12 14.43 25.43 1 42 1z"
        fill="url(#performance_svg__paint1_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M55.95 31.003a.558.558 0 00-.507-.337H48.82l6.535-10.772a.604.604 0 00.017-.592.555.555 0 00-.489-.303h-8.941a.557.557 0 00-.5.322l-8.382 17.5a.606.606 0 00.024.568.554.554 0 00.476.276h5.746l-6.262 15.524a.598.598 0 00.224.724.545.545 0 00.72-.121L55.87 31.625a.605.605 0 00.08-.622z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="performance_svg__paint0_linear"
          x1={51.635}
          y1={102.635}
          x2={106.635}
          y2={39.365}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F80759" />
          <stop offset={1} stopColor="#BC4E9C" />
        </linearGradient>
        <linearGradient
          id="performance_svg__paint1_linear"
          x1={52.413}
          y1={113.413}
          x2={124.413}
          y2={30.587}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F80759" />
          <stop offset={1} stopColor="#BC4E9C" />
        </linearGradient>
        <filter
          id="performance_svg__filter0_d"
          x={0}
          y={9}
          width={95}
          height={95}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={13} />
          <feGaussianBlur stdDeviation={10.5} />
          <feColorMatrix values="0 0 0 0 0.898039 0 0 0 0 0.117647 0 0 0 0 0.435294 0 0 0 0.3 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgPerformance;
