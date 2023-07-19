import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function SmartHomeWashMachineIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 20"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M3 2h12a1 1 0 011 1v3H2V3a1 1 0 011-1zm13 15V8H2v9a1 1 0 001 1h12a1 1 0 001-1zM0 3a3 3 0 013-3h12a3 3 0 013 3v14a3 3 0 01-3 3H3a3 3 0 01-3-3zm4 0a1 1 0 000 2h2a1 1 0 000-2zm7 2a1 1 0 10-1-1 1 1 0 001 1zm4-1a1 1 0 11-1-1 1 1 0 011 1zm-4 9a2 2 0 11-2-2 2 2 0 012 2zm2 0a4 4 0 11-4-4 4 4 0 014 4z"
      />
    </svg>
  );
}

SmartHomeWashMachineIcon.displayName = 'SmartHomeWashMachineIcon';
