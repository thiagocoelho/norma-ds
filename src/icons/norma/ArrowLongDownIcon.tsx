import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ArrowLongDownIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8.485 22.009"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M5.255 18.167l1.812-1.822 1.418 1.41-4.23 4.25L0 17.779l1.41-1.418 1.845 1.835L3.243.005h2z" />
    </svg>
  );
}

ArrowLongDownIcon.displayName = 'ArrowLongDownIcon';
