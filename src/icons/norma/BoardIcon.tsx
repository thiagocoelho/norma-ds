import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function BoardIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 16"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M4 0a4 4 0 00-4 4v8a4 4 0 004 4h12a4 4 0 004-4V4a4 4 0 00-4-4zm8 2H8v12h4zm2 0v12h2a2 2 0 002-2V4a2 2 0 00-2-2zM4 14h2V2H4a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );
}

BoardIcon.displayName = 'BoardIcon';
