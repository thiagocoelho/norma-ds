import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function AirplaneIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20.019 13.745"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M7.02 0h2a3.9 3.9 0 013.024 1.718l2.475 4.154h4.5a1 1 0 110 2h-4.6l-2.475 4.154a3.9 3.9 0 01-3.024 1.718h-2l3.504-5.872H3.435L2 10.325H0l2.02-3.453v-.033l-2-3.42h2l1.434 2.453h7.065z" />
    </svg>
  );
}

AirplaneIcon.displayName = 'AirplaneIcon';
