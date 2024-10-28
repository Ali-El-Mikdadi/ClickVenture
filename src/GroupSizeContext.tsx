import * as React from 'react';

const GroupSizeContext = React.createContext({ groupSize: '', setGroupSize: (groupSize: string) => {} });

export default GroupSizeContext;