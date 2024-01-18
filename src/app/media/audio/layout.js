import Audio from "./page";

export const getData = async () => {
    try {
        const data = await fetch(`${process.env.domain}/api/`).then(
            (response) => {
                if (!response.ok) {
                    console.error(
                        `Error: ${response.status} - ${response.statusText}`
                    );
                    return [];
                }
            }
        );
        const slug = "audio";
        const filter = data.find((item) => item.slug === slug);
        return filter || null;
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
};

export async function generateMetadata({ params }) {
    const metadata = await getData();
    return {
        title: metadata.meta_title,
        description: metadata.meta_description,
    };
}
export default Audio;
