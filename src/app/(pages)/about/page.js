'use client';

import { useQuery } from '@tanstack/react-query';


const fetchData = async () => {
    console.log('check call api');
    const res = await fetch('http://localhost:3000/api/check');
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
};

export default function page() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['product'],
        queryFn: fetchData,
        staleTime: 5 * 60 * 1000,
    });

    if (isLoading) return <div className='mx-auto w-fit'>Loading...</div>
    if (isError) return <div>Error fetching data</div>

    return (
        <div>
            about page
            <ul>
                {data?.map((item, index) => (
                    <li key={index}>
                        <p>{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
