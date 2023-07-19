import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ArrowLongDownEIcon({
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
        d="M7.243 0h-6v6h2l.013 12.145-1.845-1.834-1.41 1.418 4.255 4.231 4.231-4.255-1.418-1.41-1.813 1.823L5.243 6h2zm-4 2h2v2h-2z"
        data-name="arrow-long-down-e"
      />
    </svg>
  );
}

ArrowLongDownEIcon.displayName = 'ArrowLongDownEIcon';
