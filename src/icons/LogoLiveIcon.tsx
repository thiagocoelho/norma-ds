import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function LogoLiveIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={253}
      height={56}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <text transform="translate(75 43)" fontSize={46} fontFamily="Ubuntu">
        <tspan x={0} y={0}>
          {"olos."}
        </tspan>
        <tspan y={0} fontFamily="Ubuntu-Bold, Ubuntu" fontWeight={700}>
          {"live"}
        </tspan>
      </text>
      <g data-name="Grupo 474">
        <path data-name="Ret\xE2ngulo 1912" fill="#fff" d="M0 0h56v56H0z" />
        <path
          data-name="cloud"
          d="M34.981 47.79q.308.009.619.009A20.4 20.4 0 1019.675 14.65h-3.1a16.575 16.575 0 000 33.149h17.85q.28.001.556-.009zm4.981-5.8C45.955 40.03 50.9 34.239 50.9 27.402a15.3 15.3 0 00-30.6 0h-5.1a20.342 20.342 0 011.481-7.652h-.109a11.475 11.475 0 000 22.95h17.85a27.272 27.272 0 005.541-.712z"
          fill="#fc7f11"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

LogoLiveIcon.displayName = 'LogoLiveIcon';
