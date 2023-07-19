import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ListTreeIcon({
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
        d="M8 0H0v8h8V5h2v14h4v3h8v-8h-8v3h-2V5h2v3h8V0h-8v3H8zm12 2h-4v4h4zm-4 14h4v4h-4z"
      />
    </svg>
  );
}

ListTreeIcon.displayName = 'ListTreeIcon';
