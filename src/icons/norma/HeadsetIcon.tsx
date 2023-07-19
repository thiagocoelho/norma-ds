import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function HeadsetIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M14 18a2 2 0 01-2-2v-4a2 2 0 012-2h2V9A7 7 0 002 9v1h2a2 2 0 012 2v4a2 2 0 01-2 2H0V9a9 9 0 0118 0v9zm2-6h-2v4h2zM4 12H2v4h2z"
      />
    </svg>
  );
}

HeadsetIcon.displayName = 'HeadsetIcon';
