import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function PlayTrackNextOIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 22"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M11 20a9 9 0 119-9 9 9 0 01-9 9zM0 11a11 11 0 1111 11A11 11 0 010 11zm13-3a1 1 0 012 0v6a1 1 0 01-2 0zm-1 3l-6 3.464V7.536z"
      />
    </svg>
  );
}

PlayTrackNextOIcon.displayName = 'PlayTrackNextOIcon';
