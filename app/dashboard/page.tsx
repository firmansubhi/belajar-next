import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Edit2Icon } from "lucide-react";

async function getData() {
	const res = await fetch("https://learning2.pt-mine.id/product/list", {
		headers: { Authorization: `Bearer secrettoken123` },
	});
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export default async function Page() {
	const data = await getData();

	console.log("asasasasa", data);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="grid grid-cols-3 gap-4">
				{data.map((item: any) => (
					<Card key={item.id}>
						<CardHeader>
							<CardTitle>{item.title}</CardTitle>
							<CardDescription>
								{item.description}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Image
								alt={item.title}
								src={item.image}
								width={200}
								height={200}
							/>
						</CardContent>
						<CardFooter>
							<Button asChild>
								<Link href={`/dashboard/${item.id}`}>
									<Edit2Icon />
									Edit
								</Link>
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</main>
	);
}
