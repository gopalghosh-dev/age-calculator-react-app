import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Basic | Age Calculator App",
	description: "Basic Age Calculator App",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card>
				<CardHeader>
					<CardTitle className="grid place-items-center text-2xl">
						Basic Age Calculator
					</CardTitle>
				</CardHeader>
			</Card>
		</section>
	);
};

export default page;
