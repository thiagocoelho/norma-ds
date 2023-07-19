import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function CloudIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21.961 16"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M13.719 16h.243A8 8 0 107.716 3H6.5a6.5 6.5 0 100 13h7.219zm1.953-2.275A6.2 6.2 0 0019.962 8a6 6 0 00-12 0h-2a7.978 7.978 0 01.582-3H6.5a4.5 4.5 0 100 9h7a10.7 10.7 0 002.172-.279z"
      />
    </svg>
  );
}

CloudIcon.displayName = 'CloudIcon';
