import React from 'react';

const TimePeriodContext = React.createContext({ days: 1, setDays: (days: number) => {} });

export default TimePeriodContext;