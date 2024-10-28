// FavouriteActivitiesContext.tsx
import * as React from 'react';

type FavouriteActivitiesContextType = {
  favouriteActivities: string[];
  setFavouriteActivities: (favouriteActivities: string[]) => void;
};

const FavouriteActivitiesContext = React.createContext<FavouriteActivitiesContextType>({
  favouriteActivities: [],
  setFavouriteActivities: () => {},
});

export default FavouriteActivitiesContext;