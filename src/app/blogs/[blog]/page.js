
import Image from "next/image";

export default function Blog({params}){
    return(
        <div className="mb-20">
            <div className="h-28 -mt-24 w-full bg-green-800">
            </div>
            <div>
                <Image className="object-cover min-h-[200px] object-center" alt="banner" src={"/analytics-bg.png"} height={500} width={2000}/>
            </div>
            <div className="flex lg:flex-row flex-col mt-14 lg:gap-20 lg:px-20 px-5">
            <main className="lg:w-2/3 w-full">
                <h2 className="text-5xl font-semibold font-inter">{params.blog}</h2>
                <h4 className="text-3xl font-semibold text-blue-700 font-inter my-4">Foundation</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita sapiente, voluptas reiciendis ipsum provident debitis! Quae iure vitae ex placeat eligendi delectus voluptatem atque autem libero. Ad, qui voluptate ipsam distinctio animi dolorem nisi. Dicta ea similique iusto, dignissimos itaque quas modi tempora, natus nisi veritatis, blanditiis odio! Doloremque non itaque molestiae temporibus, dolor alias perspiciatis, sint voluptatem harum vitae repellat officiis aspernatur ea, eos numquam sequi repudiandae maxime doloribus. Eum corrupti error illum repellat dolore eius, cupiditate laudantium qui magnam a. Maiores iusto optio est architecto aut, impedit ut? Rerum, illo sit, earum nobis consequatur ipsum repellat, natus nulla qui aliquam fugit! Eum eius maiores ad aperiam velit doloribus. Laborum, quae praesentium eum neque repudiandae distinctio aperiam eos illo iusto itaque reiciendis, vitae dolorem, esse blanditiis provident velit inventore eveniet possimus officiis? Explicabo, architecto. Cumque saepe magnam, dignissimos possimus laboriosam voluptates, neque facere atque minus aspernatur ratione quis. Eveniet in quas dignissimos nobis cumque, optio nam dolorem esse nihil pariatur quibusdam dolor eaque, soluta eos harum. Numquam quia id quae ipsam velit impedit delectus sequi voluptatibus! Nihil dignissimos consequuntur asperiores, tempore iure molestiae harum ducimus, deleniti eius, debitis quasi? Iste ad iusto cum sint architecto quam iure quidem! Blanditiis saepe natus at debitis.</p>
                <h4 className="text-3xl font-semibold text-blue-700 font-inter my-4">Our Belief</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita sapiente, voluptas reiciendis ipsum provident debitis! Quae iure vitae ex placeat eligendi delectus voluptatem atque autem libero. Ad, qui voluptate ipsam distinctio animi dolorem nisi. Dicta ea similique iusto, dignissimos itaque quas modi tempora, natus nisi veritatis, blanditiis odio! Doloremque non itaque molestiae temporibus, dolor alias perspiciatis, sint voluptatem harum vitae repellat officiis aspernatur ea, eos numquam sequi repudiandae maxime doloribus. Eum corrupti error illum repellat dolore eius, cupiditate laudantium qui magnam a. Maiores iusto optio est architecto aut, impedit ut? Rerum, illo sit, earum nobis consequatur ipsum repellat, natus nulla qui aliquam fugit! Eum eius maiores ad aperiam velit doloribus. Laborum, quae praesentium eum neque repudiandae distinctio aperiam eos illo iusto itaque reiciendis, vitae dolorem, esse blanditiis provident velit inventore eveniet possimus officiis? Explicabo, architecto. Cumque saepe magnam, dignissimos possimus laboriosam voluptates, neque facere atque minus aspernatur ratione quis. Eveniet in quas dignissimos nobis cumque, optio nam dolorem esse nihil pariatur quibusdam dolor eaque, soluta eos harum. Numquam quia id quae ipsam velit impedit delectus sequi voluptatibus! Nihil dignissimos consequuntur asperiores, tempore iure molestiae harum ducimus, deleniti eius, debitis quasi? Iste ad iusto cum sint architecto quam iure quidem! Blanditiis saepe natus at debitis.</p>
                <h4 className="text-3xl font-semibold text-blue-700 font-inter my-4">Our Message</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita sapiente, voluptas reiciendis ipsum provident debitis! Quae iure vitae ex placeat eligendi delectus voluptatem atque autem libero. Ad, qui voluptate ipsam distinctio animi dolorem nisi. Dicta ea similique iusto, dignissimos itaque quas modi tempora, natus nisi veritatis, blanditiis odio! Doloremque non itaque molestiae temporibus, dolor alias perspiciatis, sint voluptatem harum vitae repellat officiis aspernatur ea, eos numquam sequi repudiandae maxime doloribus. Eum corrupti error illum repellat dolore eius, cupiditate laudantium qui magnam a. Maiores iusto optio est architecto aut, impedit ut? Rerum, illo sit, earum nobis consequatur ipsum repellat, natus nulla qui aliquam fugit! Eum eius maiores ad aperiam velit doloribus. Laborum, quae praesentium eum neque repudiandae distinctio aperiam eos illo iusto itaque reiciendis, vitae dolorem, esse blanditiis provident velit inventore eveniet possimus officiis? Explicabo, architecto. Cumque saepe magnam, dignissimos possimus laboriosam voluptates, neque facere atque minus aspernatur ratione quis. Eveniet in quas dignissimos nobis cumque, optio nam dolorem esse nihil pariatur quibusdam dolor eaque, soluta eos harum. Numquam quia id quae ipsam velit impedit delectus sequi voluptatibus! Nihil dignissimos consequuntur asperiores, tempore iure molestiae harum ducimus, deleniti eius, debitis quasi? Iste ad iusto cum sint architecto quam iure quidem! Blanditiis saepe natus at debitis.</p>
            </main>
            <aside className="lg:w-1/3 w-full">
                <div className="w-full flex gap-5 items-center border-b-2 mt-5 pb-5">
                    <Image src={"/inspiration-photo1.png"} height={120} width={120} alt="photo"/>
                    <div>
                        <h4 className="text-lg font-medium">Syed Abul A'la Maududi example news</h4>
                        <p className="text-sm text-gray-500">5 days ago</p>
                    </div>
                </div>
                <div className="w-full flex gap-5 items-center border-b-2 mt-5 pb-5">
                    <Image src={"/inspiration-photo1.png"} height={120} width={120} alt="photo"/>
                    <div>
                        <h4 className="text-lg font-medium">Syed Abul A'la Maududi example news</h4>
                        <p className="text-sm text-gray-500">5 days ago</p>
                    </div>
                </div>
                <div className="w-full flex gap-5 items-center border-b-2 mt-5 pb-5">
                    <Image src={"/inspiration-photo1.png"} height={120} width={120} alt="photo"/>
                    <div>
                        <h4 className="text-lg font-medium">Syed Abul A'la Maududi example news</h4>
                        <p className="text-sm text-gray-500">5 days ago</p>
                    </div>
                </div>
            </aside>
            </div>
        </div>
    )
}