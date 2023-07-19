import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function SpinnerAltIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 10"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M0 10A10 10 0 0110 0v3a7 7 0 00-7 7z" />
    </svg>
  );
}

SpinnerAltIcon.displayName = 'SpinnerAltIcon';
