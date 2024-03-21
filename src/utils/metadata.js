import { connectDB } from "./db";
import { Page } from "./model/pageModel";

export const getMetaData = async (slug) => {
    await connectDB();
    const data = await Page.findOne({ slug: slug });
    return data;
};