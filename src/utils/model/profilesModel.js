import mongoose from "mongoose";

const profilesModel = new mongoose.Schema(
    {
        type: String,
        meta_title: { type: String, required: false },
        meta_description: { type: String, required: false },
        canonical: { type: String, required: false },
        slug: { type: String, required: false },
        name: String,
        image: {type: mongoose.Schema.Types.Mixed,required:false},
        designation: String,
        content: String,
        dob: { type: Date, required: false },
        dod: { type: Date, required: false },
    },
    { versionKey: false }
);
export const Profiles =
    mongoose.models?.profiles ||
    mongoose.model("profiles", profilesModel, "profiles");
