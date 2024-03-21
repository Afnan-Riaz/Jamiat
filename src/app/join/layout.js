import { getMetaData } from "@/utils/metadata";
import Page from "./page";
export const revalidate = 0;

export async function generateMetadata() {
    const metadata = await getMetaData("join");
    return {
        title: metadata.meta_title,
        description: metadata.meta_description,
        alternates: {
            canonical: metadata.canonical,
        },
    };
}
export default Page;
