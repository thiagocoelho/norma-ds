import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function EraseIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.172 19.172"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M.586 10.486a2 2 0 000 2.828l3.858 3.858H1.172a1 1 0 000 2h16a1 1 0 000-2h-9.13l9.515-9.515a2 2 0 000-2.828L13.314.586a2 2 0 00-2.828 0zm4.326-1.5L2 11.9l4.243 4.243 2.912-2.912zm1.414-1.412l4.243 4.243 5.574-5.574L11.9 2z"
      />
    </svg>
  );
}

EraseIcon.displayName = 'EraseIcon';
