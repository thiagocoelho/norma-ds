import * as React from "react";
import { nanoid } from "nanoid";
import { useIconSize } from "../hooks/useIconSize";
import { SvgIconProps } from "../types/svgIcon";
export function LogoOlosIcon({
  title,
  titleId = nanoid(),
  ...initProps
}: SvgIconProps): React.ReactElement<SVGElement> {
  const props = useIconSize(initProps);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={247.226}
      height={71.268}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g data-name="Grupo 1879">
        <path
          data-name="Ret\xE2ngulo 2535"
          fill="none"
          stroke="#e3e4e8"
          strokeMiterlimit={10}
          d="M230.96 25.804v5.45h-5.45v-5.45z"
        />
        <path
          data-name="Caminho 1999"
          d="M114.287 42.769H95.756a10.246 10.246 0 01-10.237-10.237v-8.036a10.246 10.246 0 0110.237-10.24h18.531a10.246 10.246 0 0110.237 10.24v8.039a10.246 10.246 0 01-10.237 10.234zM95.142 19.706a4.187 4.187 0 00-4.19 4.19v9.249a4.187 4.187 0 004.19 4.19h19.741a4.187 4.187 0 004.19-4.19v-9.249a4.187 4.187 0 00-4.19-4.19H95.142z"
          fill="#ff7f11"
        />
        <path
          data-name="Caminho 2000"
          d="M162.2 42.769h-24.987a9.149 9.149 0 01-9.351-8.908V14.256h5.45v20.2a3.106 3.106 0 003.3 2.861h25.583v5.45z"
          fill="#ff7f11"
        />
        <path
          data-name="Caminho 2001"
          d="M193.045 42.769h-18.531a10.246 10.246 0 01-10.237-10.237v-8.036a10.246 10.246 0 0110.237-10.24h18.531a10.246 10.246 0 0110.237 10.24v8.039a10.246 10.246 0 01-10.237 10.234zM173.9 19.706a4.187 4.187 0 00-4.19 4.19v9.249a4.187 4.187 0 004.19 4.19h19.741a4.187 4.187 0 004.19-4.19v-9.249a4.187 4.187 0 00-4.19-4.19H173.9z"
          fill="#ff7f11"
        />
        <g data-name="Grupo 1879" fill="#ff7f11">
          <path
            data-name="Caminho 2002"
            d="M71.262 37.435c.051 5.178-5.28 10.509-11.5 11.65-5.791 1.073-10-1.976-9.743-6.609.238-4.514 4.633-9.3 10.151-10.884 5.91-1.7 11.037.8 11.088 5.842z"
          />
          <path
            data-name="Caminho 2003"
            d="M50.09 12.093c.2-3.713 4.19-8.448 9.164-10.782 5.28-2.47 9.828-1.38 9.845 2.674.017 4.156-4.718 9.436-10.237 11.565-5.178 1.993-8.976.358-8.772-3.458z"
          />
          <path
            data-name="Caminho 2004"
            d="M43.89 22.176c4.1-3.475 9.436-4.377 11.872-1.771 2.572 2.742.8 8.125-3.9 11.718-4.514 3.458-9.709 3.713-11.684.852-1.891-2.725-.256-7.461 3.712-10.799z"
          />
          <path
            data-name="Caminho 2005"
            d="M45.628 43.228c-.273 4.548-4.531 9.078-9.2 9.93-4.394.818-7.392-1.976-6.949-6.1.426-4.02 4.037-8.159 8.278-9.385 4.496-1.292 8.143 1.109 7.871 5.555z"
          />
          <path
            data-name="Caminho 2006"
            d="M10.354 51.11c-.562 3.662-3.509 7.137-6.421 7.665-2.777.515-4.429-1.865-3.799-5.242.613-3.3 3.219-6.558 5.944-7.341 2.861-.818 4.837 1.329 4.292 4.905z"
          />
          <path
            data-name="Caminho 2007"
            d="M35.817 12.587c3.577-3.3 8.09-4.428 10.049-2.35 2.061 2.2.443 6.949-3.594 10.39-3.866 3.321-8.278 3.935-9.879 1.6-1.533-2.231-.034-6.472 3.424-9.657z"
          />
          <path
            data-name="Caminho 2008"
            d="M35.289 1.243c3.134-.238 4.037 2.691 1.874 6.523-2.146 3.8-6.353 6.762-9.249 6.643-2.742-.119-3.321-3-1.4-6.455 1.928-3.475 5.812-6.473 8.775-6.694z"
          />
          <path
            data-name="Caminho 2009"
            d="M21.578 70.48c-3.049-1.857-3.577-6.4-1.346-10.288 2.248-3.9 6.643-6 10-4.582 3.577 1.516 4.548 6.37 1.976 10.731-2.555 4.326-7.392 6.1-10.628 4.122z"
          />
          <path
            data-name="Caminho 2010"
            d="M26.245 16.64c2.861.187 3.577 3.389 1.465 7.12-2.1 3.7-6.013 6.234-8.653 5.706-2.5-.511-2.913-3.611-1.039-6.983 1.891-3.389 5.519-6.013 8.227-5.842z"
          />
          <path
            data-name="Caminho 2011"
            d="M26.159 47.64c-.46 4.054-3.952 7.988-7.6 8.653-3.441.63-5.655-1.942-5.093-5.655a10.727 10.727 0 016.958-8.245c3.543-1.022 6.2 1.26 5.74 5.229z"
          />
          <path
            data-name="Caminho 2012"
            d="M17.405 31.648c2.589.6 3.134 4.054 1.09 7.682-2.027 3.609-5.706 5.718-8.073 4.818-2.265-.869-2.538-4.19-.7-7.477 1.84-3.3 5.246-5.57 7.7-5.008z"
          />
          <path
            data-name="Caminho 2013"
            d="M4.136 30.658a11.169 11.169 0 015.6-7.341c2.725-1.277 4.633.1 4.156 3.185a10.985 10.985 0 01-6.013 7.7c-2.657 1.022-4.275-.6-3.73-3.526z"
          />
        </g>
        <path
          data-name="Caminho 2014"
          d="M238.744 25.804h-23.607a3.05 3.05 0 110-6.1h28.734v-5.448h-28.734a8.482 8.482 0 000 16.964h23.607a3.05 3.05 0 010 6.1h-31.6v5.45h31.6a8.482 8.482 0 000-16.964z"
          fill="#ff7f11"
        />
      </g>
    </svg>
  );
}

LogoOlosIcon.displayName = 'LogoOlosIcon';
