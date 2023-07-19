import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ReadmeIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 17"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M3 2h5a2 2 0 012 2v9a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1zm10 14a3 3 0 01-1-.171V16a1 1 0 01-2 0v-.171A3 3 0 019 16H3a3 3 0 01-3-3V3a3 3 0 013-3h5a3.99 3.99 0 013 1.354A3.99 3.99 0 0114 0h5a3 3 0 013 3v10a3 3 0 01-3 3zM12 4v9a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1h-5a2 2 0 00-2 2zM4 4h4v2H4zm10 0h4v2h-4zm4 3h-4v2h4zM4 7h4v2H4zm14 3h-4v2h4zM4 10h4v2H4z"
      />
    </svg>
  );
}

ReadmeIcon.displayName = 'ReadmeIcon';
