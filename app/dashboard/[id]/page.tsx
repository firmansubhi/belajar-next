import { ProductForm } from "./productForm";

export default async function Page({ params }: { params: { id: string } }) {
	const { id } = params;

	return (
		<div>
			<h1>Dashboard {id}</h1>
			<ProductForm params={{ id }} />
		</div>
	);
}
