
const Products = () => {
    const products = [
        {
          name: "Smartphone",
          category: "Electronics",
          image: "https://i.ibb.co/N6fx4qz/client.jpg"
        },
        {
          name: "Laptop",
          category: "Electronics",
          image: "https://i.ibb.co/N6fx4qz/client.jpg"
        },
        {
          name: "T-shirt",
          category: "Clothing",
          image: "https://i.ibb.co/N6fx4qz/client.jpg"
        },
        {
          name: "Jeans",
          category: "Clothing",
          image: "https://i.ibb.co/N6fx4qz/client.jpg"
        },
        {
          name: "Running Shoes",
          category: "Footwear",
          image: "https://i.ibb.co/N6fx4qz/client.jpg"
        },
        {
          name: "Headphones",
          category: "Electronics",
          image: "https://i.ibb.co/N6fx4qz/client.jpg"
        },
        {
          name: "Backpack",
          category: "Accessories",
          image: "https://i.ibb.co/N6fx4qz/client.jpg"
        },
        {
          name: "Dress",
          category: "Clothing",
          image: "https://i.ibb.co/N6fx4qz/client.jpg"
        },
        {
          name: "Watch",
          category: "Accessories",
          image: "https://i.ibb.co/N6fx4qz/client.jpg"
        },
        {
          name: "Sunglasses",
          category: "Accessories",
          image: "https://i.ibb.co/N6fx4qz/client.jpg"
        },
        {
          name: "TV",
          category: "Electronics",
          image: "https://i.ibb.co/N6fx4qz/client.jpg"
        },
        {
          name: "Gaming Console",
          category: "Electronics",
          image: "https://i.ibb.co/N6fx4qz/client.jpg"
        }
    ];

    return (
        <div className="pt-5 pb-10">
            <h1 className="font-medium text-3xl">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-6">
                {
                    products?.map((product, idx) => (
                        <div key={idx} className="bg-accent p-1 rounded-xl">
                            <img src={product?.image} alt="" className="rounded-lg w-full h-32" />
                            <div className="text-center p-1">
                               <h3 className="font-medium text-xl mt-2">Lathe Machine</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Products;