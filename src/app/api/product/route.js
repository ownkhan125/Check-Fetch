import { NextResponse } from "next/server";

const mockProducts = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
];

export async function GET() {
    // Mock runtime data changegth + 1}`,
    // });
    // mockProducts.push({
    //     id: mockProducts.length + 1,
    //     name: `Product ${mockProducts.length + 1}`,
    //     description: `Description for product ${mockProducts.len
    console.log('product api calls ?');
    return NextResponse.json(mockProducts);

}


export async function POST(req) {

    const { productData } = await req.json();
    console.log('product data', productData);
    mockProducts.push({
        id: mockProducts.length + 1,
        name: productData,
    })

    return NextResponse.json(mockProducts);
}
