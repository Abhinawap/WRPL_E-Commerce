"use client";

import Container from "@/app/components/ui/container";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import CartItem from "./components/CartItem";
import Summary from "./components/summary";



const CartPage = () => {
    const cart= useCart();
    const [Mounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!Mounted) return null;

    return ( 
        <div className="bg-white">
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg:col-span-7">
                            {cart.items.length === 0 && <p className="text-neutral-500">No Items in Cart</p>}
                            <ul>
                                {cart.items.map((item) => (
                                    <CartItem 
                                        key={item.id}
                                        data = {item}>
                                    
                                    </CartItem>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <Summary/>
                </div>
            </Container>
        </div>
     );
}
 
export default CartPage;