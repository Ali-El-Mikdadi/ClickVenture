import React from 'react';

const RegionContext = React.createContext({ selectedRegion: [] as string[], setSelectedRegion: (region: string[]) => {} });

export default RegionContext;