import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function AppleWatchIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 20.01"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M12 3.035v.143a3 3 0 012 2.827v1h1v4h-1v3a3 3 0 01-2 2.831v.169a3 3 0 01-3 3H5a3 3 0 01-3-3v-.169a3 3 0 01-2-2.831v-8a3 3 0 012-2.83v-.19A3 3 0 015.013.005l4 .02A3 3 0 0112 3.035zm-8-.03h6a1 1 0 00-1-.99l-4-.01a1 1 0 00-1 1zm7.2 2.026l-4.215-.026H3a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1v-8a1 1 0 00-.8-.974zM4 17.005a1 1 0 001 1h4a1 1 0 001-1z"
      />
    </svg>
  );
}

AppleWatchIcon.displayName = 'AppleWatchIcon';
