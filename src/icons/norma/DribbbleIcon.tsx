import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function DribbbleIcon({
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
        d="M0 10.955v.089A10.988 10.988 0 0010.87 22H11a11 11 0 100-22h-.335A10.989 10.989 0 000 10.955zm19.481 3.063a9.013 9.013 0 00-2.063-9.327 10.931 10.931 0 01-3.152 3.356A11.033 11.033 0 0115 11.878a11.094 11.094 0 014.477 2.141zm-4.64-.123a9.072 9.072 0 013.731 1.971 9 9 0 01-6.993 4.116 11.058 11.058 0 003.262-6.082zM13 11.622a9.025 9.025 0 00-.5-2.581 10.975 10.975 0 01-9.147-.069 11.129 11.129 0 01-.987-.522 9.021 9.021 0 001.3 7.77A11.017 11.017 0 0113 11.622zM5.047 17.75a9.01 9.01 0 017.811-4.131A9.024 9.024 0 018.674 19.7a8.98 8.98 0 01-3.627-1.95zM11 2a8.958 8.958 0 014.847 1.415 8.944 8.944 0 01-2.479 2.815 10.941 10.941 0 00-4.341-4.014A9.031 9.031 0 0111 2zM7.806 3.846a8.958 8.958 0 013.832 3.39A8.979 8.979 0 014.2 7.159a9.084 9.084 0 01-1.044-.573 9.044 9.044 0 013.173-3.28 9.057 9.057 0 011.477.54z"
      />
    </svg>
  );
}

DribbbleIcon.displayName = 'DribbbleIcon';
