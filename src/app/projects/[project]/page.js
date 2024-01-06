import Image from "next/image";

function Project({params}) {
    return (
        <div>
            <div className="bg-header-bg bg-cover w-full h-28 -mt-24"></div>
            <div className="min-h-[300px] bg-analytics-bg bg-cover flex items-center justify-center bg-center">
                <h1 className="text-5xl text-white font-semibold font-inter">
                    {params.project}
                </h1>
            </div>
            <div className="mx-20 my-10">
                <div className="flex gap-10">
                    <Image
                        className="h-fit"
                        src={"/project-afia.png"}
                        width={400}
                        height={300} alt="photo"
                    />
                    <div className="my-6">
                        <h2 className="text-3xl font-semibold mb-4 text-blue-700">
                            Project 1
                        </h2>
                        <h2 className="text-2xl font-semibold text-black">
                            Heading
                        </h2>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatibus nam vel officia. Iusto eligendi
                            quas excepturi. Distinctio eos, saepe perspiciatis,
                            adipisci voluptatibus itaque delectus ipsa nemo
                            facere dolorem ex placeat exercitationem quam aut
                            sapiente sequi, cum nam architecto non! Itaque qui
                            maxime, aut illo debitis explicabo nam nostrum
                            deleniti assumenda voluptatibus exercitationem! Modi
                            blanditiis impedit velit exercitationem tenetur
                            perferendis similique praesentium magnam optio rem
                            esse fuga enim vero magni saepe nisi harum quo
                            debitis, mollitia labore corporis veritatis nostrum
                            porro quibusdam! Quo, vero quae assumenda sit animi
                            minima magnam accusamus nulla distinctio eveniet,
                            quia cupiditate soluta, ad id architecto
                            necessitatibus sunt ipsam et in amet.
                        </p>
                        <h2 className="text-2xl font-semibold text-black">
                            Heading
                        </h2>
                        <p className="mb-4">
                            Labore, sequi! Corporis neque pariatur tempora
                            magnam voluptatibus culpa dolor veritatis aperiam
                            odit dolore sequi eligendi alias vel facilis ducimus
                            ratione, vitae nesciunt voluptas consequuntur ipsam
                            officiis enim distinctio? Quos iusto natus est eaque
                            assumenda perspiciatis adipisci ea soluta itaque
                            voluptatum ab doloribus vero molestiae incidunt non,
                            cum repellendus veniam eligendi laudantium debitis?
                            Blanditiis minima enim nulla facilis magnam nisi
                            commodi nihil quo possimus dolorem quam eveniet fuga
                            nemo id excepturi nesciunt, sequi laudantium
                            quisquam consequuntur, distinctio suscipit labore
                            necessitatibus quaerat! Iusto obcaecati, dignissimos
                            accusamus labore at harum facere quibusdam possimus
                            cumque consequuntur quasi, quaerat aperiam sapiente
                            beatae voluptate tempora odio quod unde praesentium
                            ipsum deleniti totam! Est provident obcaecati rem
                            minus iusto veritatis aspernatur iure.
                        </p>
                        <h2 className="text-2xl font-semibold text-black">
                            Heading
                        </h2>
                        <p className="mb-4">
                            Doloremque libero rem exercitationem dolorum
                            corrupti alias, ratione vero in delectus non ut
                            labore eveniet incidunt possimus consequatur minus
                            eos tempore laboriosam blanditiis quis doloribus
                            mollitia laudantium sequi? Eligendi possimus
                            blanditiis quisquam placeat ut consequuntur expedita
                            sapiente quam, dolorem tenetur architecto, deleniti
                            quo in quod? Ea quisquam sed eius consequuntur iste
                            dolorem! Velit distinctio eum rem ratione, corporis
                            nobis pariatur ad odit libero omnis. Non nobis
                            soluta impedit rerum aliquid expedita explicabo
                            aperiam ab a ea, praesentium doloremque. Nam.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
