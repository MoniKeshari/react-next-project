import React, { useState } from 'react'
import useSWR from 'swr';
import axios from 'axios';
function about() {

  const fetcher = async (url: any) => {
    const response = await axios.get(url);
    console.log(response, 'response');

    return response.data;


  }
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher)
  console.log(data, 'data')
  if (error) return <div>Error fetching data</div>;
  if (!data) {
    return <div>Loading data...</div>;

  }




  return (
    <div>
      {data.map((id: any) => {
        return (
          <>
            <ul>
              <li>{id.name}</li>
              <li>{id.email}</li>
              <li>{id.phone}</li>
              <li>{id.username}</li>
              <li></li>
              <li></li>
            </ul>
          </>
        )
      })}
    </div>
  );
}

export default about