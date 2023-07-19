import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function MusicNoteIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 19.354"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M8 6.954l5.635-1.127A2.942 2.942 0 1012.481.058l-4.07.814A3 3 0 006 3.814v8.076a4 4 0 102 3.465zm4.874-4.935l-4.07.814a1 1 0 00-.8.981v1.1l5.243-1.049a.942.942 0 10-.369-1.847zM6 15.354a2 2 0 10-2 2 2 2 0 002-2z"
      />
    </svg>
  );
}

MusicNoteIcon.displayName = 'MusicNoteIcon';
