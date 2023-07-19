import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function PushChevronUpOIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 22"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M11 2a9 9 0 109 9 9 9 0 00-9-9zm0-2a11 11 0 1011 11A11 11 0 0011 0zM7 9V7h8v2zm8.243 5.3l-1.414 1.414L11 12.883l-2.828 2.829L6.757 14.3 11 10.055z"
      />
    </svg>
  );
}

PushChevronUpOIcon.displayName = 'PushChevronUpOIcon';
