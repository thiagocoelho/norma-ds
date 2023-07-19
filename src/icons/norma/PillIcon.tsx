import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function PillIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21.899 21.899"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M11.657 1.757a6 6 0 018.485 8.485l-9.9 9.9a6 6 0 01-8.485-8.485zm7.071 7.071l-4.243 4.243-5.657-5.657 4.243-4.243a4 4 0 115.657 5.657z"
      />
    </svg>
  );
}

PillIcon.displayName = 'PillIcon';
