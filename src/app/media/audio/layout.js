import Audio from "./page";

export const getData = async () => {
    const data = await fetch(`https://jamiat.vercel.app/api/`).then((response) =>
        response.json()
    );
    const slug="audio";
    const filter = data.find((item) => item.slug === slug);
    return filter || null;
};


export async function generateMetadata({params}){
    const metadata=await getData();
    return{
        title:metadata.meta_title,
        description:metadata.meta_description,
    }
}
export default Audio;
