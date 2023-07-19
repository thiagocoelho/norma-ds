import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function SupportIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M10.261 20h-.522A10 10 0 012.908 2.95l.042-.042a9.991 9.991 0 0114.106.006l.03.03A9.967 9.967 0 0120 9.857v.295A9.991 9.991 0 0110.261 20zm1.771-6.55l2.874 2.874a8 8 0 01-9.812 0l2.874-2.874a4.007 4.007 0 004.064-.004zm-5.478-1.418L3.68 14.906a8 8 0 010-9.812l2.874 2.874a4.007 4.007 0 000 4.064zm1.529-1.463l-.015-.051a2 2 0 011.363-2.436l.051-.015a2 2 0 012.436 1.363l.015.051a2 2 0 01-1.363 2.436l-.051.015a2 2 0 01-2.436-1.363zm3.95-4.016a4.007 4.007 0 00-4.064 0L5.094 3.68a8 8 0 019.812 0zm4.288 8.352a8 8 0 000-9.812l-2.875 2.875a4.007 4.007 0 010 4.064z"
      />
    </svg>
  );
}

SupportIcon.displayName = 'SupportIcon';
