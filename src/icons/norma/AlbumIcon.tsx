import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function AlbumIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M0 17a3 3 0 003 3h14a3 3 0 003-3V3a3 3 0 00-3-3H3a3 3 0 00-3 3zm18 0a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1h5v8.011h2.4L12 7.864l1.6 2.147H16V2h1a1 1 0 011 1zM14 2h-4v5.336l2-2.676 2 2.675z"
      />
    </svg>
  );
}

AlbumIcon.displayName = 'AlbumIcon';
