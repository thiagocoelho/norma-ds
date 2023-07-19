import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function FacebookIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10.396 19"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M2.398 19h4v-8.01h3.6l.4-3.98h-4V5a1 1 0 011-1h3V0h-3a5 5 0 00-5 5v2.01h-2l-.4 3.98h2.4z" />
    </svg>
  );
}

FacebookIcon.displayName = 'FacebookIcon';
