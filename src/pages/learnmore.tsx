import { useEffect, useState } from 'react';
import ShimmerEffect from './shimmer';


const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch('https://example.com/api/data');
    const data = await response.json();
    setData(data);
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <ShimmerEffect/>
      ) : (
        <div>{/* display fetched data */}</div>
      )}
    </div>
  );
};
export default MyComponent
