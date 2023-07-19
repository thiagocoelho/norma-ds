import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function SmartHomeBoilerIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 22"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M0 4a4 4 0 014-4h6a4 4 0 014 4v16h-3.856l.743 2h-2l-.743-2h-2l.743 2h-2l-.743-2H0zm4-2h6a2 2 0 012 2v2H2V4a2 2 0 012-2zM2 8h10v10H2z"
      />
    </svg>
  );
}

SmartHomeBoilerIcon.displayName = 'SmartHomeBoilerIcon';
