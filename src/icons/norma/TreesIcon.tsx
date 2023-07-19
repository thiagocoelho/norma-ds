import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function TreesIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 20"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M8.74 14.319A5 5 0 016 15.9V19a1 1 0 01-2 0v-3.1A5 5 0 010 11V5a5 5 0 019.98-.453A4 4 0 0116 8v4a4 4 0 01-3 3.874V19a1 1 0 01-2 0v-3.126a4 4 0 01-2.26-1.555zM8 5v6a3 3 0 01-2 2.829V11a1 1 0 00-2 0v2.829A3 3 0 012 11V5a3 3 0 016 0zm5 8.732V11a1 1 0 00-2 0v2.732A2 2 0 0110 12V8a2 2 0 014 0v4a2 2 0 01-1 1.732z"
      />
    </svg>
  );
}

TreesIcon.displayName = 'TreesIcon';
