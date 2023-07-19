import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function MusicIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20.504"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M20 4A4 4 0 0015.392.047l-7 1.077A4 4 0 005 5.078v8.763A3.5 3.5 0 107 17V5.078A2 2 0 018.7 3.1l7-1.077A2 2 0 0118 4v6.84A3.5 3.5 0 1020 14zm-2 10a1.5 1.5 0 10-1.5 1.5A1.5 1.5 0 0018 14zM5 17a1.5 1.5 0 10-1.5 1.5A1.5 1.5 0 005 17z"
      />
    </svg>
  );
}

MusicIcon.displayName = 'MusicIcon';
