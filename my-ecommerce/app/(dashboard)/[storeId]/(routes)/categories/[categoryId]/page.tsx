import prismadb from "@/lib/prismadb";
import { CategoryForm } from "./components/category-form";

const CategoryPage = async ({
    params
} : {
    params: {
        categoryId: string;
        storeId: string;
    }

}) => {

    const asyncparams = await params;
    const category = await prismadb.category.findUnique({
        where: {
            id: asyncparams.categoryId
        }
    });

    const billboards = await prismadb.billboard.findMany({
        where: {
            storeId: asyncparams.storeId
        }
    });

    return ( 
        <div>
            <div className="flex-1 space-y-4 p-8 pt-6">
                <CategoryForm 
                billboards={billboards} 
                initialData={category}
            />
            </div>
        </div>
     );
}
 
export default CategoryPage;