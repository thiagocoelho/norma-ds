import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function InfinityIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21.326 10"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M7.121 2.879L9.2 4.962l.006-.006 1.453 1.453.006.006 2.121 2.121a5 5 0 100-7.071l-.713.713 1.414 1.414.713-.713a3 3 0 110 4.243L12.128 5.05l-.006.006-3.586-3.592a5 5 0 100 7.071l.713-.713-1.414-1.414-.713.713a3 3 0 110-4.243z" />
    </svg>
  );
}

InfinityIcon.displayName = 'InfinityIcon';
