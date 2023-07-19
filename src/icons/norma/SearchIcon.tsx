import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function SearchIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.899 18.9"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M14.319 12.908a8 8 0 10-1.412 1.412l.042.045 4.243 4.243a1 1 0 001.414-1.414l-4.243-4.243zm-2.076-9.15a6 6 0 11-8.485 0 6 6 0 018.485 0z"
      />
    </svg>
  );
}

SearchIcon.displayName = 'SearchIcon';
