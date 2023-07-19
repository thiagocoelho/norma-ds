import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function HomeAltIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 21.757"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M3 21.758a3 3 0 01-3-3v-10.1a2.172 2.172 0 01.636-1.536L6.879.879a3 3 0 014.243 0l6.243 6.243A2.172 2.172 0 0118 8.657v10.1a3 3 0 01-3 3zM9.707 2.293L16 8.586v10.172a1 1 0 01-1 1h-3v-5a3 3 0 00-6 0v5H3a1 1 0 01-1-1V8.586l6.293-6.293a1 1 0 011.414 0z"
      />
    </svg>
  );
}

HomeAltIcon.displayName = 'HomeAltIcon';
