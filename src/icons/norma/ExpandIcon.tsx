import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../../hooks/useIconSize";
import { SvgIconProps } from "../../types/svgIcon";
export function ExpandIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13.455 13.186"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M7.034 11.186l-.035 2-7-.122.122-7 2 .035-.063 3.585L9.953 2.06l-3.532-.062.035-2 7 .122-.122 7-2-.035.063-3.638-7.948 7.677z" />
    </svg>
  );
}

ExpandIcon.displayName = 'ExpandIcon';
