import Image from 'next/image';

const blogs = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `Blog Post ${i + 1}`,
  desc: `This is a dummy blog post description. {blogId}. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, vel nisi
          aspernatur iure adipisci eveniet provident debitis vero dicta amet doloribus porro,
          eligendi repellendus ipsam ipsum, similique deserunt voluptas quas! Tempora ad, enim fugit
          id maiores nesciunt quo incidunt exercitationem et, natus pariatur consectetur culpa quae
          error ex esse aliquid alias eligendi earum harum quisquam. Odit veritatis mollitia in
          consectetur expedita laudantium provident iste? Debitis et harum modi fugiat fugit
          obcaecati unde illum accusamus eius qui labore consectetur dolore laborum recusandae,
          enim, sequi sit esse quibusdam molestiae expedita facere vero facilis consequuntur.
          Distinctio perspiciatis ea cum placeat veritatis, expedita voluptates neque sequi et nulla
          soluta labore laudantium! Placeat dolorem alias tempora minus officia voluptatibus error
          ullam ipsam officiis odio consectetur, laboriosam molestias, aperiam eaque? Dolores sequi
          quasi animi ipsam, dolorum {blogId}. tempore dolore. Error similique eaque nulla, amet
          nemo, optio fugit suscipit maxime, fugiat nisi architecto quidem! Aliquam eos perferendis
          fugit accusantium atque sed, excepturi hic maiores harum, architecto, itaque voluptas
          nulla obcaecati doloribus soluta officiis non deleniti? Ipsum dolores architecto atque,
          tenetur perspiciatis dolorum hic corrupti provident quod deleniti sunt adipisci
          necessitatibus fugit nostrum repellat officia. Accusamus, tenetur repellendus odio vitae
          nesciunt consectetur vero. Accusantium nemo necessitatibus quidem officia ab nisi dolorem
          quis ipsum, corporis illum repellendus dicta facere quia non, vel magni, tenetur fugit nam
          porro. Ullam maiores possimus, repellat assumenda quasi consectetur quia aliquid, dolorem
          eligendi minus, eos mollitia sapiente fuga eveniet autem. Sed labore libero soluta,
          consectetur perspiciatis nobis et quas asperiores. Molestiae, quos aperiam est modi
          eligendi dolores quaerat quam reiciendis nemo! Iste temporibus nam numquam, cupiditate
          neque culpa suscipit fugit? Enim eos error vel soluta alias voluptas voluptatum rem
          cumque? Illo animi ducimus ad nobis quod quibusdam incidunt quisquam ut libero maiores
          placeat blanditiis reiciendis amet beatae distinctio itaque, ex quae iste recusandae
          quasi, fugiat magnam corporis? Velit, sapiente recusandae. Eaque in enim sint, fuga dolor
          voluptas minus commodi perferendis, laborum, iusto nemo autem deleniti ullam porro
          exercitationem culpa et nam! Rem cum eaque obcaecati exercitationem culpa tempore
          consequatur voluptatibus iure quibusdam! Tenetur perferendis culpa, repellendus
          dignissimos quia id, ullam fugit corrupti deleniti, minima ea temporibus doloribus
          possimus reprehenderit repudiandae provident? Accusantium tempora expedita doloremque,
          sint quas nostrum aut ipsum quasi soluta dolorem rerum voluptate cumque nisi consequatur
          autem laboriosam quae illo nulla, error perferendis dignissimos assumenda temporibus.
          Repudiandae ad omnis atque obcaecati quasi est explicabo vel, id, fugiat alias suscipit
          fugit ipsum aspernatur blanditiis quam porro at, iste distinctio. Dolore cumque
          praesentium quod id modi unde aut veritatis quisquam minima harum ipsum iusto, voluptatem
          repudiandae earum itaque magnam ad accusamus distinctio consectetur ea architecto? Atque
          dolore vero, architecto nulla dolorum quas reiciendis culpa odio? Eveniet maxime, placeat
          repellendus suscipit tempora voluptate dolore temporibus, praesentium dolorum nesciunt
          obcaecati necessitatibus sint. Facilis minus totam molestias ea at reiciendis, nihil nulla
          consequuntur. Ab saepe nostrum tenetur modi totam dolor, labore voluptates ipsum
          perferendis beatae excepturi ut harum fugit fuga nobis exercitationem repudiandae.
          Perferendis quibusdam obcaecati maxime fugiat nobis dolore nesciunt natus ad nisi
          accusantium, maiores odit iusto?`,
}));

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    blogId: String(blog.id),
  }));
}

export default async function page({
  params,
}: {
  params: Promise<{ blogId: string; locale: string }>;
}) {
  const paramss = await params;
  const blogId = paramss.blogId;
  const blog = blogs[Number(blogId) - 1];

  return (
    <div className="flex min-h-screen justify-center bg-gray-100 p-6 pt-[200px]">
      <div className="max-w-2xl rounded-2xl bg-white p-6 shadow-lg">
        <Image
          src="/images/nature.jpg"
          alt={blog.name}
          width={800}
          height={400}
          className="rounded-lg"
        />
        <h1 className="mt-4 text-3xl font-bold">{blog.name}</h1>
        <p className="mt-2 text-gray-600">By Author Name - January 26, 2025</p>
        <p className="mt-4 text-gray-700">{blog.desc}</p>
      </div>
    </div>
  );
}
