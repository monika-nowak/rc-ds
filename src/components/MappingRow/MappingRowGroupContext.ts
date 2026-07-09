import { createContext } from 'react';

/**
 * Set on the provider by `MappingRowGroup`. When true, validation `MappingRow`s
 * render as `display: contents` so their chip / arrow / status / message cells
 * become grid items of the group's shared column tracks (aligned columns).
 */
export const MappingRowGroupContext = createContext(false);
