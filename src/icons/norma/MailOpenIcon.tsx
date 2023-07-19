import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function MailOpenIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.142 22.657"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M.121 9.343a2 2 0 01.465-2.1L6.95.878a3 3 0 014.243 0l6.364 6.364a2 2 0 01.465 2.1 1 1 0 01.05.313v11a2 2 0 01-2 2H2.071a2 2 0 01-2-2v-11a1 1 0 01.05-.312zM2 8.656l6.364-6.364a1 1 0 011.414 0l6.364 6.364h-.03v.03L9.778 15.02a1 1 0 01-1.414 0zm14.071 2.9l-4.879 4.879a3 3 0 01-4.243 0l-4.878-4.879v9.1h14z"
      />
    </svg>
  );
}

MailOpenIcon.displayName = 'MailOpenIcon';
