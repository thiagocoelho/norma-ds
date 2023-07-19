import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ArrowLongDownCIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8.485 21.96"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M3.243 5.83a3 3 0 112 0l.013 12.288 1.812-1.823 1.418 1.41-4.231 4.255L0 17.729l1.41-1.418 1.845 1.834zm1-1.83a1 1 0 111-1 1 1 0 01-1 1z"
        data-name="arrow-long-down-c"
      />
    </svg>
  );
}

ArrowLongDownCIcon.displayName = 'ArrowLongDownCIcon';
