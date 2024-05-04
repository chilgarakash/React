import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    console.log(data, "data");

    return (
        <div className='text-center bg-gray-600 text-2xl text-white'>
            <div>Github followers: {data.followers}</div>
            <img src={data.avatar_url} alt="github" />
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/chilgarakash');
    return response.json();
};