import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function DropOpacityIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 21.728"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M12.945 20.82A9 9 0 012.636 6.364L9 0l6.364 6.364a9.006 9.006 0 01-2.419 14.456zM4.05 7.778L9 2.828l4.95 4.95A6.977 6.977 0 0116 12.564H2a6.976 6.976 0 012.05-4.786z"
      />
    </svg>
  );
}

DropOpacityIcon.displayName = 'DropOpacityIcon';
