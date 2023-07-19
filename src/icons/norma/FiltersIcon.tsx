import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function FiltersIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20.554 18.59"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M2.985 12.735a6.968 6.968 0 004 1.267 7 7 0 106.592-9.413 7 7 0 10-10.592 8.146zm1.148-1.64a4.976 4.976 0 002.432.886 7 7 0 014.968-7.1 5 5 0 10-7.4 6.209zm12.289-3.6a4.977 4.977 0 00-2.432-.886 7 7 0 01-4.968 7.1 5 5 0 107.4-6.209z"
      />
    </svg>
  );
}

FiltersIcon.displayName = 'FiltersIcon';
