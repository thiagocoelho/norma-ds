import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function BowlIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 17.243"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M18.547.293a1 1 0 00-1.414 0l-5.364 5.364H0v2h.008a10 10 0 0019.983 0H20v-2h-5.4l3.95-3.95a1 1 0 00-.003-1.414zm-6.371 7.364h5.814a8 8 0 01-15.979 0z"
      />
    </svg>
  );
}

BowlIcon.displayName = 'BowlIcon';
