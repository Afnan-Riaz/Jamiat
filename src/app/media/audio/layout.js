import { Page } from "@/utils/model/pageModel";
import Audio from "./page";

export const revalidate=0

export const getData = async () => {
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
