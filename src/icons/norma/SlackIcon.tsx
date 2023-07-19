import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function SlackIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19 19"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M10 7a2 2 0 004 0V2a2 2 0 00-4 0zM2 5a2 2 0 000 4h5a2 2 0 000-4zm10 5a2 2 0 000 4h5a2 2 0 000-4zm-5 9a2 2 0 01-2-2v-5a2 2 0 014 0v5a2 2 0 01-2 2zM5 2a2 2 0 014 0v2H7a2 2 0 01-2-2zM0 12a2 2 0 004 0v-2H2a2 2 0 00-2 2zm14 5a2 2 0 01-4 0v-2h2a2 2 0 012 2zm5-10a2 2 0 00-4 0v2h2a2 2 0 002-2z"
      />
    </svg>
  );
}

SlackIcon.displayName = 'SlackIcon';
