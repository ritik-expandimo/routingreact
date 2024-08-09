import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then((response => response.json()))
    //         .then((data) => setData(data))
    // }, [])
    return (
        <>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers} </div>
            <img src={data.avatar_url} alt="Git Picture" width={300} />
        </>

    )
}

export const githubinfoloader = async () =>{
    const res = await fetch("https://api.github.com/users/hiteshchoudhary");
    const resData = await res.json();
    return resData;
}

export default Github