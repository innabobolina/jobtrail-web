import * as React from "react";

function SvgPartnership(props) {
  return (
    <svg
      width={95}
      height={105}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        filter="url(#partnership_svg__filter0_d)"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path
          d="M47.5 18C62.136 18 74 29.864 74 44.5 74 59.135 62.136 71 47.5 71S21 59.135 21 44.5C21 29.864 32.864 18 47.5 18z"
          fill="#FF4361"
        />
        <path
          d="M47.5 18C62.136 18 74 29.864 74 44.5 74 59.135 62.136 71 47.5 71S21 59.135 21 44.5C21 29.864 32.864 18 47.5 18z"
          fill="url(#partnership_svg__paint0_linear)"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43 1h10C69.569 1 83 14.43 83 31v10c0 16.568-13.431 30-30 30H43c-16.569 0-30-13.432-30-30V31C13 14.43 26.43 1 43 1z"
        fill="#FF4361"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43 1h10C69.569 1 83 14.43 83 31v10c0 16.568-13.431 30-30 30H43c-16.569 0-30-13.432-30-30V31C13 14.43 26.43 1 43 1z"
        fill="url(#partnership_svg__paint1_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51.432 41.64a1.05 1.05 0 00.318-.763V38.17H63v8.126c0 .744-.262 1.382-.787 1.913a2.564 2.564 0 01-1.891.795H35.679a2.564 2.564 0 01-1.892-.795A2.622 2.622 0 0133 46.295V38.17h11.25v2.708c0 .294.106.548.318.763.212.214.463.321.754.321h5.357c.29 0 .541-.107.753-.321zm-1.289-3.471h-4.286v2.167h4.286v-2.167zm12.07-10.039a2.562 2.562 0 00-1.891-.796h-5.894v-2.709c0-.451-.156-.835-.468-1.151A1.544 1.544 0 0052.822 23h-9.643c-.447 0-.826.159-1.139.474-.312.316-.468.7-.468 1.151v2.709h-5.893c-.737 0-1.368.265-1.892.796A2.62 2.62 0 0033 30.043v6.5h30v-6.5a2.62 2.62 0 00-.787-1.913zm-9.927-.796h-8.572v-2.167h8.572v2.167z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="partnership_svg__paint0_linear"
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
          id="partnership_svg__paint1_linear"
          x1={53.413}
          y1={113.413}
          x2={125.413}
          y2={30.587}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF416C" />
          <stop offset={1} stopColor="#FF4B2B" />
        </linearGradient>
        <filter
          id="partnership_svg__filter0_d"
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
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.266667 0 0 0 0 0.341176 0 0 0 0.3 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgPartnership;
