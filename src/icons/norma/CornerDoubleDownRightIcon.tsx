import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function CornerDoubleDownRightIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.598 18.516"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M9.899 4.937L4.937 0-.001 4.958l1.419 1.415 2.403-2.415-.015 6.036a4.8 4.8 0 004.793 4.811l5.928.015-2.239 2.3 1.434 1.394 4.877-5.017-5.019-4.88-1.394 1.434 2.436 2.368-6.02-.015a2.4 2.4 0 01-2.394-2.406l.015-5.9 2.266 2.26z" />
    </svg>
  );
}

CornerDoubleDownRightIcon.displayName = 'CornerDoubleDownRightIcon';
