import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function VoicemailIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 10"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M9 8a5 5 0 10-4 2h12a5 5 0 10-4-2zM5 8a3 3 0 10-3-3 3 3 0 003 3zm12 0a3 3 0 10-3-3 3 3 0 003 3z"
      />
    </svg>
  );
}

VoicemailIcon.displayName = 'VoicemailIcon';
