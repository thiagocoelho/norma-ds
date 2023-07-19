import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function FormatSlashIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 7.135 12.9"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M6.526.106a.944.944 0 01.536 1.216l-5.177 11.1a.944.944 0 01-1.276.37.944.944 0 01-.537-1.216L5.249.476a.944.944 0 011.277-.37z"
      />
    </svg>
  );
}

FormatSlashIcon.displayName = 'FormatSlashIcon';
