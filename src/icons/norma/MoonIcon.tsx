import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function MoonIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M10.226 0a9.992 9.992 0 109.434 7.4 14.869 14.869 0 01-1.743 1.436 11.406 11.406 0 01-3.986 1.841c-1.906.424-3.215.032-3.93-.684s-1.107-2.024-.684-3.93a11.406 11.406 0 011.841-3.986A14.876 14.876 0 0112.594.34 10.035 10.035 0 0010.226 0zm5.431 15.654a7.964 7.964 0 002.25-4.438c-3.546 2.046-7.269 2.248-9.321.2s-1.85-5.775.2-9.321a8 8 0 106.876 13.564z"
      />
    </svg>
  );
}

MoonIcon.displayName = 'MoonIcon';
