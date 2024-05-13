"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const url = "https://dummyjson.com/products";
const page = () => {
  const [products, setproducts] = useState([]);
  async function fetchproducts() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.products);
    setproducts(data.products);
  }
  useEffect(() => {
    fetchproducts();
  }, []);
  return (
    <div>
      <h1 className="text-center">Pesy Do Product Lo</h1>
      <div className="flex flex-wrap justify-center">
        {products.map((meriproducts) => {
          return (
            <Link
              href={`/products/${meriproducts.id}`}
              class="text-gray-600 body-font"
            >
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                  <div class=" p-4 w-[350px]">
                    <a class="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        class="object-cover object-center w-full h-full block"
                        src={meriproducts.thumbnail}
                      />
                    </a>
                    <div class="mt-4">
                      <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {meriproducts.category}
                      </h3>
                      <h2 class="text-gray-900 title-font text-lg font-medium">
                        {meriproducts.tittle}
                      </h2>
                      <p class="mt-1">${meriproducts.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;

{
  /* <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            class="object-cover object-center w-full h-full block"
            src="https://dummyimage.com/420x260"
          />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p class="mt-1">$16.00</p>
        </div>
      </div>
    </div>
  </div>
</section>; */
}
