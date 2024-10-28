import React from 'react';

const BudgetContext = React.createContext({ budget: [20, 50], setBudget: (budget: number[]) => {} });

export default BudgetContext;