import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function MailIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 14.324"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M.01 1a1 1 0 011-1H17a1 1 0 011 1v11.324a2 2 0 01-2 2H2a2 2 0 01-2-2v-11a1.008 1.008 0 01.01-.14zM2 3.224v9.1h14v-9.1l-4.878 4.879a3 3 0 01-4.243 0zm1.572-1.256h10.856L9.707 6.689a1 1 0 01-1.414 0z"
      />
    </svg>
  );
}

MailIcon.displayName = 'MailIcon';
