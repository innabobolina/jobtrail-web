import * as React from "react";

function SvgSupport(props) {
  return (
    <svg
      width={95}
      height={105}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        filter="url(#support_svg__filter0_d)"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path
          d="M47.5 18C62.135 18 74 29.864 74 44.5 74 59.135 62.135 71 47.5 71 32.864 71 21 59.135 21 44.5 21 29.864 32.864 18 47.5 18z"
          fill="#FF4361"
        />
        <path
          d="M47.5 18C62.135 18 74 29.864 74 44.5 74 59.135 62.135 71 47.5 71 32.864 71 21 59.135 21 44.5 21 29.864 32.864 18 47.5 18z"
          fill="url(#support_svg__paint0_linear)"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43 1h10C69.569 1 83 14.43 83 31v10c0 16.568-13.431 30-30 30H43C26.43 71 13 57.568 13 41V31C13 14.43 26.43 1 43 1z"
        fill="#FF4361"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43 1h10C69.569 1 83 14.43 83 31v10c0 16.568-13.431 30-30 30H43C26.43 71 13 57.568 13 41V31C13 14.43 26.43 1 43 1z"
        fill="url(#support_svg__paint1_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.1 22H36.9a2.908 2.908 0 00-2.9 2.899v26.1l5.8-5.8h20.3c1.595 0 2.9-1.305 2.9-2.9v-17.4c0-1.595-1.305-2.9-2.9-2.9z"
        fill="#FEFAFC"
      />
      <defs>
        <linearGradient
          id="support_svg__paint0_linear"
          x1={51.635}
          y1={103.635}
          x2={106.635}
          y2={40.365}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F80759" />
          <stop offset={1} stopColor="#BC4E9C" />
        </linearGradient>
        <linearGradient
          id="support_svg__paint1_linear"
          x1={53.413}
          y1={113.413}
          x2={125.413}
          y2={30.587}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F46B45" />
          <stop offset={1} stopColor="#EEA849" />
        </linearGradient>
        <filter
          id="support_svg__filter0_d"
          x={0}
          y={10}
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
          <feColorMatrix values="0 0 0 0 0.94902 0 0 0 0 0.501961 0 0 0 0 0.27451 0 0 0 0.3 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgSupport;
