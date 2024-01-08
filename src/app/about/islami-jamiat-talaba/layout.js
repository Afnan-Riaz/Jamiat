import IJT from "./page";
import { getData } from "./page";


export async function generateMetadata({params}){
    const metadata=await getData();
    return{
        title:metadata.meta_title,
        description:metadata.meta_description,
    }
}
export default IJT;
