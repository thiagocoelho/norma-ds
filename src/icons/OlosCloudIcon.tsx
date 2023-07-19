import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function OlosCloudIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={235.961}
      height={172}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M147.399 171.961q1.3.039 2.607.039a86 86 0 10-67.1-139.75H69.839a69.875 69.875 0 000 139.75h75.212q1.179 0 2.348-.039zm20.987-24.461c25.252-8.265 46.086-32.675 46.086-61.5a64.467 64.467 0 10-128.933 0H64.05a85.8 85.8 0 016.248-32.25h-.459a48.375 48.375 0 000 96.75h75.212a114.856 114.856 0 0023.335-3z"
        fill="#333"
        fillRule="evenodd"
      />
    </svg>
  );
}

OlosCloudIcon.displayName = 'OlosCloudIcon';
