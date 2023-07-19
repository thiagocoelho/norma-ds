import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function QrIcon({
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
        d="M6 0H0v6h2V2h4zM0 18v-6h2v4h4v2zM12 0v2h4v4h2V0zm4 12h2v6h-6v-2h4zM4 4h4v4H4zm0 6h4v4H4zm10-6h-4v4h4zm-4 6h4v4h-4z"
      />
    </svg>
  );
}

QrIcon.displayName = 'QrIcon';
