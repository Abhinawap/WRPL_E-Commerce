// app/(routes)/product/[productId]/page.tsx

import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Container from "@/app/components/ui/container";
import Gallery from "@/app/components/gallery";
import Info from "@/app/components/info";
import ProductList from "@/app/components/product-list";

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

// ✅ Page component — works with normal (sync) params
const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Products" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;

// ✅ Only this function needs async `params`
export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product = await getProduct(productId);

  return {
    title: product?.name ?? "Product",
    description: product?.description ?? "",
  };
}
