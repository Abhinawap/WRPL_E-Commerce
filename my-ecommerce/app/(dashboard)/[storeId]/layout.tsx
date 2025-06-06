import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


import prismadb from "@/lib/prismadb";


import Navbar from "@/components/navbar";



export default async function DashboardLayout({
    children,
    params
}:{
    children: React.ReactNode;
    params: { storeId: string }
}) {
    const { userId } = await auth();

    if(!userId){
        redirect('/sign-in')
    }

    const asyncParams = await params;  // ✅ Await params here

    const store = await prismadb.store.findFirst({
        where: {
            id: asyncParams.storeId,  
            userId
        }
    });
    

    if(!store){
        redirect('/');
    }

    return (
        <>
            <Navbar></Navbar>
            {children}
        </>
    )
}
