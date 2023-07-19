import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function GitPullIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9.323 18"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M0 2a2 2 0 113.763.945h.58a4 4 0 014 4v1.28a2 2 0 11-2-.024V6.945a2 2 0 00-2-2H3v9.323a2 2 0 11-2 0V3.732A2 2 0 010 2z" />
    </svg>
  );
}

GitPullIcon.displayName = 'GitPullIcon';
