import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function FormatItalicIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10.981 13.084"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M4.98 0h6l-.712 1.869h-2L4.71 11.215h2l-.712 1.869h-6l.712-1.869h2l3.558-9.346h-2z" />
    </svg>
  );
}

FormatItalicIcon.displayName = 'FormatItalicIcon';
