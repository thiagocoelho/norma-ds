import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function CommunityIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17 12"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M8.5 11.456A6 6 0 118.5.544a6 6 0 110 10.912zm-2-1.487a4 4 0 110-7.938 6 6 0 000 7.938zm4-7.938a4 4 0 110 7.938 6 6 0 000-7.938zm-2 .846a4 4 0 010 6.245 4 4 0 010-6.245z"
      />
    </svg>
  );
}

CommunityIcon.displayName = 'CommunityIcon';
