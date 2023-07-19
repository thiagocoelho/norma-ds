import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function HashtagIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M4 0v4H0v2h4v4H0v2h4v4h2v-4h4v4h2v-4h4v-2h-4V6h4V4h-4V0h-2v4H6V0zm6 10V6H6v4z"
      />
    </svg>
  );
}

HashtagIcon.displayName = 'HashtagIcon';
