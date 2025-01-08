// 'use client'

export const fetchPosts = async ({ queryKey }) => {

    const [, filters] = queryKey; // 'blog' ko skip kar diya, filters object hai
    const { columnFilters, sortBy, currentPage } = filters;

    // Convert filters to query string
    const queryParams = new URLSearchParams({
        columnFilters: columnFilters,
        sortBy: sortBy,
        page: currentPage,
    })

    // API fetch
    const res = await fetch(`http://localhost:3000/api/check?${queryParams}`, {
        method: "GET",
    });
    if (!res.ok) throw new Error("Failed to fetch");
    const response = await res.json();
    console.log('check rresponse data', response);
    return response;
};


export async function updateData(productData, updatedInfo) {

    const response = await fetch(`http://localhost:3000/api/check`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( productData ),
    });
    if (!response.ok) {
        throw new Error('Failed to update product')
    }
    return response.json();
}

