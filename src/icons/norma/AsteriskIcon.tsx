import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function AsteriskIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10.977 12"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M4.489 0h2v4.079l3.341-2.34 1.147 1.638L7.232 6l3.745 2.622L9.83 10.26 6.489 7.921V12h-2V7.921l-3.341 2.34L0 8.622 3.746 6 0 3.378l1.148-1.639 3.341 2.34z" />
    </svg>
  );
}

AsteriskIcon.displayName = 'AsteriskIcon';
