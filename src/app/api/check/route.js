import { NextResponse } from "next/server";

const mockProducts = [
    { id: 1, name: "check", price: 100 },
    { id: 2, name: "pak", price: 800 },
    { id: 3, name: "pak", price: 500 },
    { id: 4, name: "check", price: 1000 },
    { id: 5, name: "china", price: 200 },
    { id: 6, name: "check", price: 700 },
    { id: 7, name: "china", price: 400 },
    { id: 8, name: "pak", price: 600 },
    { id: 9, name: "check", price: 500 },
    { id: 10, name: "china", price: 300 },
    { id: 10, name: "china", price: 300 },
    { id: 10, name: "china", price: 300 },

];

// Handle GET requests
export async function GET(req) {
    try {
        const { searchParams } = new URL(req?.url); // Get URL search params
        if (!searchParams || [...searchParams].length === 0) {
            return NextResponse.json(mockProducts);
        }

        const columnFilters = searchParams?.get("columnFilters")?.toLowerCase()?.trim();
        const sortBy = searchParams?.get("sortBy")?.toLowerCase()?.trim();
        const page = parseInt(searchParams?.get("page"));

        // Pagination logic
        const startIndex = (page - 1) * 10;
        const paginatedProducts = mockProducts.slice(startIndex, startIndex + 10);


        // Sort products by price or name
        switch (sortBy) {
            case "price":
                paginatedProducts.sort((a, b) => a.price - b.price);
                break;
            case "id":
                paginatedProducts.sort((a, b) => a.id - b.id);
                break;
            default:
                paginatedProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }

        if (!columnFilters || columnFilters == undefined) {
            return NextResponse.json(paginatedProducts);
        }

        else if (columnFilters) {
            let filteredProducts = mockProducts.filter((product) =>
                product.name.toString().toLowerCase().trim().includes(columnFilters.toString())
            );
            return NextResponse.json(filteredProducts);
        }


        return NextResponse.json(paginatedProducts);

    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }
}




// Handle POST requests
export async function POST(req) {
    try {
        const reqBody = await req.json();

        if (!reqBody) {
            return NextResponse.json({ error: "Invalid product data provided." }, { status: 400 });
        }

        const newProduct = {
            id: mockProducts.length + 1,
            name: reqBody,
            price: 200,
        };

        mockProducts.push(newProduct);
        return NextResponse.json('Successfull', { status: 201 });



        // if (!productData || typeof productData !== "string") {
        //     return NextResponse.json(
        //         { error: "Invalid product data provided." },
        //         { status: 400 }
        //     );
        // }

        // // Add a new product to the mock array
        // const newProduct = {
        //     id: mockProducts.length + 1,
        //     name: productData?.productData,
        //     price: 200,
        // };
        // console.log('check list', mockProducts);


    } catch (error) {
        console.log(error?.message);
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }

}
