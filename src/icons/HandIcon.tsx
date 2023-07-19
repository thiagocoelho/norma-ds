import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function HandIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={231.717}
      height={251.027}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        data-name="Icon ionic-md-hand"
        d="M224.938 135.319c-8.172-8.168-20.2-8.9-28.374-.735l-23.358 23.345c-6.081 6.072-13.409 6.085-17.686 1.038-2.834-3.344-1.715-13.657-.921-20.2l11.715-96.292c1.046-8.6-5.082-16.913-13.689-17.959s-16.43 5.569-17.477 14.17l-12.922 75.631c-.675 1.882-2.124 2.207-2.287-.326l-4.4-98.3a15.7 15.7 0 00-31.395 0l-.306 99.037c.082 1.143-.9 1.47-1.076.165L68.799 37.585c-1.541-8.528-9.707-14.682-18.238-13.141S36.364 34.634 37.903 43.16l12.435 90.468c.013 1.609-.527 2.529-1.293.466l-18.552-49.6c-2.9-8.165-11.877-12.924-20.046-10.024S-1.992 86.833.909 94.997L33.432 201.25c.17.586.35 1.168.534 1.747l.068.219.02.049a69.19 69.19 0 0065.795 47.763 93.618 93.618 0 0055.672-18.867c16.8-10.114 70.641-67.994 70.641-67.994 8.176-8.171 6.953-20.678-1.224-28.848z"
        fill="#333"
      />
    </svg>
  );
}

HandIcon.displayName = 'HandIcon';
