import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function BookmarkIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 16"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M14 16h-1.828l-4.464-4.465a1 1 0 00-1.414 0L1.828 16H0V3a3 3 0 013-3h8a3 3 0 013 3zM12 3a1 1 0 00-1-1H3a1 1 0 00-1 1v10l2.879-2.879a3 3 0 014.243 0L12 13z"
      />
    </svg>
  );
}

BookmarkIcon.displayName = 'BookmarkIcon';
