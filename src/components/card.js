'use client';

export default function Card({ share }) {

    return (
        
        <div className="max-w-xs my-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a className href="#">
                <img className="rounded-t-lg" src="/image.jpg" alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{share.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{share.description}</p>
            </div>
        </div>

    )
}