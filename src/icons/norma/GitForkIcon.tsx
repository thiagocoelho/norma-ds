import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function GitForkIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9.771 18"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M0 2a2 2 0 113 1.732v7.308h1.792a2 2 0 002-2V7.784a2 2 0 112-.024v1.28a4 4 0 01-4 4H3v1.228a2 2 0 11-2 0V3.732A2 2 0 010 2z" />
    </svg>
  );
}

GitForkIcon.displayName = 'GitForkIcon';
