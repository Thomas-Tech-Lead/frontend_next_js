'use client';
import { useState, useEffect } from 'react';
import Card from '../components/card'

export default function Display() {

    const [ shares, setShares ] = useState([])

    useEffect(
        () => {
            fetch("/api/data/read_data")
            .then((res) => res.json())
            .then((data) => { 
                setShares(data.data) 
            })
        }
    )

    return (
        <div className="flex min-h-screen flex-col">
            <h1 className="p-6 text-6xl">LogedIn</h1>
            <div className="flex justify-between flex-wrap p-6">
                {/* //list of products HORIZONTALY //AND UPDATE LIST OF PRODUCTS BY CLICKING EDIT button //DELETE button */}
                {shares?.length === 0 && <p>Loading...</p>}
                {shares?.length > 0 && shares.map((share) => <Card share={share} key={share.id} />)}
            </div>
        </div>
    );
    
}

