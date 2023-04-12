import React, { createContext, useState , ReactNode, useMemo} from 'react';

type FilterContextType = {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

type LayoutProps = {
    children: ReactNode;
    className?: string;
  };
  
export const FilterContext = createContext<FilterContextType>({
  filter: '',
  setFilter: () => {},
});

export const FilterProvider = ({ children }:LayoutProps) => {
  const [filter, setFilter] = useState('all');
  
  const contextValue = useMemo(() => {
    return { filter, setFilter };
  }, [filter, setFilter]);

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};
export default  FilterProvider;