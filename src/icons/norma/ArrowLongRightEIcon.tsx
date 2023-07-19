import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ArrowLongRightEIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21.973 8.485"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M21.973 4.236l-4.235 4.25-1.417-1.412 1.814-1.82-12.117.042.009 2-6 .027-.027-6 6-.027.009 2 12.145-.042-1.842-1.837L17.724 0zM2.009 3.312l.009 2 2-.009-.009-2z"
      />
    </svg>
  );
}

ArrowLongRightEIcon.displayName = 'ArrowLongRightEIcon';
