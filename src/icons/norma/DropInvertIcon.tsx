import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function DropInvertIcon({
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
        d="M9 0L2.636 6.364A9 9 0 009 21.728q.432 0 .863-.041a9 9 0 005.501-15.323zM4.05 7.778L9 2.828v16.9a7 7 0 01-4.95-11.95z"
      />
    </svg>
  );
}

DropInvertIcon.displayName = 'DropInvertIcon';
