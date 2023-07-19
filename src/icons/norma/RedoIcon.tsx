import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function RedoIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14.246 14.901"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M8.269 6.5l-.174-1.992L10.47 4.3a5 5 0 10.819 6.173l2 .5a7 7 0 11-1.315-8l-.245-2.8L13.723 0l.523 5.977z" />
    </svg>
  );
}

RedoIcon.displayName = 'RedoIcon';
