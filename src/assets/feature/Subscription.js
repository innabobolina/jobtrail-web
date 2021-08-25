import * as React from "react";

function SvgSubscription(props) {
  return (
    <svg
      width={95}
      height={104}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#subscription_svg__filter0_d)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47.5 17C62.135 17 74 28.864 74 43.5 74 58.135 62.135 70 47.5 70 32.864 70 21 58.135 21 43.5 21 28.864 32.864 17 47.5 17z"
          fill="#FF4361"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42 1h10C68.569 1 82 14.43 82 31v10c0 16.568-13.431 30-30 30H42C25.43 71 12 57.568 12 41V31C12 14.43 25.43 1 42 1z"
        fill="#FF4361"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42 1h10C68.569 1 82 14.43 82 31v10c0 16.568-13.431 30-30 30H42C25.43 71 12 57.568 12 41V31C12 14.43 25.43 1 42 1z"
        fill="url(#subscription_svg__paint0_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64.544 31.858c.006.103-.002.206-.027.31l-2.282 9.167a1.04 1.04 0 01-1.002.79l-13.693.068H33.84c-.476 0-.891-.326-1.006-.79l-2.283-9.201a1.044 1.044 0 01-.027-.318 2.19 2.19 0 01.654-4.274c1.2 0 2.178.98 2.178 2.188 0 .679-.31 1.286-.795 1.688l2.857 2.89a3.891 3.891 0 002.75 1.15 3.89 3.89 0 003.095-1.546l4.696-6.248a2.183 2.183 0 01-.639-1.546c0-1.206.978-2.188 2.179-2.188a2.186 2.186 0 011.573 3.697l.004.005 4.662 6.265a3.887 3.887 0 003.103 1.562 3.841 3.841 0 002.74-1.14l2.875-2.887a2.186 2.186 0 011.365-3.89 2.189 2.189 0 01.723 4.249zm-2.532 13.599a1.04 1.04 0 00-1.038-1.041H34.141a1.04 1.04 0 00-1.038 1.04v2.5A1.04 1.04 0 0034.141 49h26.833a1.04 1.04 0 001.038-1.042v-2.5z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="subscription_svg__paint0_linear"
          x1={52.413}
          y1={113.413}
          x2={124.413}
          y2={30.587}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF5858" />
          <stop offset={1} stopColor="#F857A6" />
        </linearGradient>
        <filter
          id="subscription_svg__filter0_d"
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
          <feColorMatrix values="0 0 0 0 0.992157 0 0 0 0 0.345098 0 0 0 0 0.447059 0 0 0 0.3 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgSubscription;