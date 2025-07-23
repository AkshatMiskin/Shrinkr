"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    //states;
    const [url, seturl] = useState("");
    const [shorturl, setShortUrl] = useState("");
    const [generated, setGenerated] = useState(false);

    const generate = (e) => {
        if(!url || !shorturl){
            alert("Please fill all the fields");
            return;
        }
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
          "url": url,
          "shorturl": shorturl
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            seturl("");
            setShortUrl("");
            setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
            console.log(result);
            alert(result.message);
          })
          .catch((error) => console.error(error));
    }

  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg
    flex flex-col gap-4'>
        <h1 className='font-bold text-2xl'>
            Generate your short URLs
        </h1>
        <div className='flex flex-col gap-3'>
            <input type="text" className='px-4 py-2 focus:outline-purple-600 rounded-md bg-white'
            placeholder='Enter your URL'
            onChange={e=>{seturl(e.target.value)}}/>
            <input type='text' className='px-4 py-2 focus:outline-purple-600 rounded-md bg-white'
            placeholder='Enter your preferred short URL' 
            onChange={e=>{setShortUrl(e.target.value)}}/>
            <button onClick={generate} className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white my-2'>Generate</button>
        </div>

        {generated && <Link href={generated} className='text-center text-lg'>Your generated URL is: <span className='font-bold text-purple-600'>{generated}</span></Link>}
    </div>
  )
}

export default Shorten