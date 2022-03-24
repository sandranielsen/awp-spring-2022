import { useLoaderData } from "remix";
import connectDb from "~/db/connectDb.server.js";

export async function loader({ params }) {
  const db = await connectDb();
  const book = await db.book.findOne({
    where: { slug: params.slug },
  });
  //return db.models.Book.findById(params.bookId);
  if (!book) {
    throw new Response("Not found",
      {
        status: 404,
      });
  }
  return book;
}

export default function BookPage() {
  const book = useLoaderData();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.price}</p>
    </div>
  );
}
