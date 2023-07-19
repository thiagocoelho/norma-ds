import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ArrowLongUpRIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8.557 23.202"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M.071 4.21L4.346.001l4.211 4.275-1.425 1.4-1.8-1.831-.069 11.886 3.226 3.226-4.247 4.244L0 18.959l3.259-3.26.069-11.89-1.85 1.826zm4.171 16.163l1.414-1.414-1.414-1.414-1.414 1.414z"
      />
    </svg>
  );
}

ArrowLongUpRIcon.displayName = 'ArrowLongUpRIcon';
