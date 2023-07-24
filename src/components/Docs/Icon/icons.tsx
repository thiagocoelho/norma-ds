import {defaultIcons} from "./default"
import {normaIcons} from "./norma"

// Combine the icons from both files
const icons = { ...defaultIcons, ...normaIcons } as const;

// Export icon types
export type IconKey = keyof typeof icons;

// Export icon paths
export default icons;