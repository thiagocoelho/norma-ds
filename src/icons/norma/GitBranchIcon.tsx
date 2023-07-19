import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function GitBranchIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9.958 18"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M2 0a2 2 0 00-1 3.732v10.536A2 2 0 103.732 17h1.226a4 4 0 004-4v-1.268a2 2 0 10-2 0V13a2 2 0 01-2 2H3.732A2.009 2.009 0 003 14.268V3.732A2 2 0 002 0z" />
    </svg>
  );
}

GitBranchIcon.displayName = 'GitBranchIcon';
