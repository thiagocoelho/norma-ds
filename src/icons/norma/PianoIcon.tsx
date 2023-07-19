import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function PianoIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 23 18"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M21 18a2 2 0 002-2V2a2 2 0 00-2-2H2a2 2 0 00-2 2v14a2 2 0 002 2zM10 2H7.985v8h-1v6H11v-6h-1zm7.015 14H21V2h-2.985v8h-1zm-1-6h-1V2H13v8h-1v6h4.015zm-10.03 6v-6h-1V2H2v14z"
      />
    </svg>
  );
}

PianoIcon.displayName = 'PianoIcon';
