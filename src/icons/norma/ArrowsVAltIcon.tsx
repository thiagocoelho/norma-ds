import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ArrowsVAltIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8.485 22.404"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M1.415 5.657L0 4.243 4.243.002l4.243 4.243-1.415 1.412-1.828-1.828v14.746l1.828-1.828 1.414 1.414-4.242 4.241L0 18.161l1.414-1.414 1.829 1.828V3.829z" />
    </svg>
  );
}

ArrowsVAltIcon.displayName = 'ArrowsVAltIcon';
