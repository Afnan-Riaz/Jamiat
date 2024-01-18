import { Page } from "@/utils/model/pageModel";
import Audio from "./page";

export const getData = async () => {
    // try {
    //     const data = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/`).then(
    //         (response) => {
    //             if (!response.ok) {
    //                 console.error(
    //                     `Error: ${response.status} - ${response.statusText}`
    //                 );
    //                 return [];
    //             }
    //         }
    //     );
    //     const slug = "audio";
    //     const filter = data.find((item) => item.slug === slug);
    //     return filter || null;
    // } catch (error) {
    //     console.error("Error fetching data:", error.message);
    // }

    await mongoose.connect(connectionStr);
    const data = await Page.findOne({ slug: slug });
    return data;
};

export async function generateMetadata({ params }) {
    const metadata = await getData();
    return {
        title: metadata.meta_title,
        description: metadata.meta_description,
    };
}
export default Audio;
