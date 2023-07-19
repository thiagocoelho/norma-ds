import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function DollarIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 20"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M5 17v3h2v-3h1a4 4 0 000-8H7V5h2v2h2V3H7V0H5v3H4a4 4 0 000 8h1v4H3v-2H1v4zm2-2h1a2 2 0 000-4H7zM5 9V5H4a2 2 0 000 4z"
      />
    </svg>
  );
}

DollarIcon.displayName = 'DollarIcon';
