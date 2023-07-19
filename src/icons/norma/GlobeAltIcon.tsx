import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function GlobeAltIcon({
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
        d="M9 18a9 9 0 10-9-9 9 9 0 009 9zm2.806-2.585a7 7 0 004.175-5.89 11.53 11.53 0 01-3.044 1.075 14.806 14.806 0 01-1.131 4.815zM6.194 2.585a7.016 7.016 0 00-3.972 4.659A4.4 4.4 0 003.448 8a9.928 9.928 0 001.557.529 15.73 15.73 0 011.189-5.944zm.906 8.326a12.451 12.451 0 00.9 3.641 4.123 4.123 0 00.823 1.292.983.983 0 00.178.141.983.983 0 00.178-.141A4.123 4.123 0 0010 14.552a12.451 12.451 0 00.9-3.641 20.17 20.17 0 01-3.8 0zM5.063 10.6a14.806 14.806 0 001.132 4.817 7 7 0 01-4.175-5.89A11.53 11.53 0 005.063 10.6zM11 8.89A17.837 17.837 0 019 9a17.838 17.838 0 01-2-.11 14.106 14.106 0 011-5.441 4.124 4.124 0 01.823-1.292A.988.988 0 019 2.015a.988.988 0 01.178.141A4.124 4.124 0 0110 3.448a14.106 14.106 0 011 5.442zm1.995-.36a15.729 15.729 0 00-1.189-5.945 7.016 7.016 0 013.972 4.659A4.394 4.394 0 0114.552 8a9.925 9.925 0 01-1.557.53z"
      />
    </svg>
  );
}

GlobeAltIcon.displayName = 'GlobeAltIcon';
