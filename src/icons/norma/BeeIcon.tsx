import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function BeeIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21.571 22.189"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M16.737 14.665a5.993 5.993 0 01-2.271 4.064 4.016 4.016 0 01-1.756 1.96 2 2 0 01-3.874 0 4.016 4.016 0 01-1.75-1.96 5.993 5.993 0 01-2.269-4.047 3 3 0 01-4.11-4.32l4.089-4.878a6 6 0 0111.953-.033l4.121 4.911a3 3 0 01-4.132 4.3zM14.411 12l-1.678-2H8.839l-1.678 2zm2.362-.3l1.032 1.229a1 1 0 101.532-1.285l-2.563-3.05zm-2-3.7V6a4 4 0 00-8 0v2zM3.767 12.933l1.007-1.2V8.621l-2.54 3.027a1 1 0 101.532 1.285zM10.774 18a4 4 0 01-4-4h8a4 4 0 01-4 4z"
      />
    </svg>
  );
}

BeeIcon.displayName = 'BeeIcon';
