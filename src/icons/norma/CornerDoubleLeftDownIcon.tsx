import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function CornerDoubleLeftDownIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.598 18.516"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M18.599 5.019l-5.019 4.88-1.394-1.434 2.436-2.368-6.02.015a2.4 2.4 0 00-2.394 2.406l.015 5.9 2.266-2.26 1.41 1.421-4.962 4.937-4.938-4.958 1.418-1.411 2.4 2.416-.015-6.036a4.8 4.8 0 014.797-4.816l5.928-.015-2.239-2.3L13.719 0z" />
    </svg>
  );
}

CornerDoubleLeftDownIcon.displayName = 'CornerDoubleLeftDownIcon';
