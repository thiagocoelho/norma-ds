import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ArrowLongDownRIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8.487 23.202"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M8.486 4.242L4.244.001 0 4.242l3.244 3.245.013 11.9-1.845-1.834-1.41 1.418 4.255 4.23 4.231-4.255-1.418-1.41-1.812 1.823-.014-11.875zm-5.657 0l1.415-1.414 1.414 1.414-1.414 1.415z"
      />
    </svg>
  );
}

ArrowLongDownRIcon.displayName = 'ArrowLongDownRIcon';
