import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function GiftIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 20"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M16.535.879a3 3 0 00-4.243 0l-1.413 1.414q-.09.09-.172.186-.081-.1-.172-.186L9.121.879a3 3 0 00-4.242 4.242L5.757 6H0v6h2v8h18v-8h2V6h-6.343l.879-.879a3 3 0 00-.001-4.242zm-2.828 4.242l1.414-1.414a1 1 0 10-1.414-1.414l-1.414 1.414a1 1 0 001.414 1.414zM9.121 3.707L7.707 2.293a1 1 0 00-1.414 1.414l1.414 1.414a1 1 0 101.414-1.414zM20 8v2H2V8zm-8.083 4H18v6h-6.083zm-1.833 0v6H4v-6z"
      />
    </svg>
  );
}

GiftIcon.displayName = 'GiftIcon';
