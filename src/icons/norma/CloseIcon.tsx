import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function CloseIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14.964 14.964"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M1.707.293A1 1 0 00.293 1.707l5.775 5.775-5.775 5.775a1 1 0 001.414 1.414l5.775-5.775 5.775 5.775a1 1 0 001.414-1.414L8.896 7.482l5.775-5.775A1 1 0 0013.257.293L7.482 6.068z" />
    </svg>
  );
}

CloseIcon.displayName = 'CloseIcon';
