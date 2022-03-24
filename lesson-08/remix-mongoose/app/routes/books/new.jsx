import { Form } from "@remix-run/react";
import { json, redirect, useActionData } from "build";
import connectDb from "~/db/connectDb.server";

export async function action({ request }) {
    const form = await request.formData();
    const db = await connectDb();
    try {
        const newBook = await db.models.Book.create({ title: form.get("title") })
        return redirect(`/books/$newBook._id`)
    } catch (error) {
        return json({ errors: error.errors, value: Object.fromEntries(form) }, { status: 400 });
    }
}

export default function CreateBook() {
    const actionData = useActionData();
    return (
        <div>
            <h1>Create book</h1>
            <Form method="post">
                <label htmlFor="title" className="block">Title</label>
                <input type="text" name="title" id="title" defaultValue={actionData?.values.title} />
                {actionData?.errors.title && (<p className="text-red-500">{actionData.errors.title.message}</p>
                )}

                <button type="submit">Save</button>
            </Form>
        </div>
    )
}