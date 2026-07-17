import { createContext } from 'react';

export type MappingRowGroupLayout = 'validation' | 'list';

export interface MappingRowGroupContextValue {
  inGroup: boolean;
  layout: MappingRowGroupLayout;
}

/**
 * Set on the provider by `MappingRowGroup`. Validation rows in a `validation`
 * layout share column tracks via subgrid; `list` layout stacks flat rows.
 */
export const MappingRowGroupContext = createContext<MappingRowGroupContextValue>({
  inGroup: false,
  layout: 'validation',
});
