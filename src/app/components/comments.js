import React from "react";

const comments = [
    {
        name: "Afnan Riaz",
        date: "24/12/2023",
        text: "Great article! I found it really informative and well-written.",
    },
    {
        name: "Afnan Riaz",
        date: "24/12/2023",
        text: "Thanks for sharing this insightful post. I learned a lot from it!",
    },
    {
        name: "Afnan Riaz",
        date: "24/12/2023",
        text: "I love how you explained everything clearly. Keep up the good work!",
    },
];

function Comments() {
    return (
        <div className="mt-4">
            <h3 className="text-2xl font-inter mb-4">Comments</h3>
            {comments.map((comment) => (
                <div className="bg-neutral-100 rounded-lg p-5 mb-3">
                    <div className="flex items-center gap-4">
                        <h4 className="text-lg leading-5 font-medium">{comment.name}</h4>
                        <span className="text-sm leading-4 text-neutral-700">{comment.date}</span>
                    </div>
                    <p>{comment.text}</p>
                </div>
            ))}
        </div>
    );
}

export default Comments;
