import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ToolboxIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 19"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M15 3h3a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V5a2 2 0 012-2h3a3 3 0 013-3h4a3 3 0 013 3zm-3-1H8a1 1 0 00-1 1h6a1 1 0 00-1-1zm6 3H2v2h16zM2 17V9h3v2h4V9h2v2h4V9h3v8z"
      />
    </svg>
  );
}

ToolboxIcon.displayName = 'ToolboxIcon';
