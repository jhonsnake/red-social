import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const { data: countries } = await supabase.from("countries").select();

  return (
    <ul className="my-auto">
      {countries?.map((publication) => (
        <li key={publication.id}>{publication.name}</li>
      ))}
    </ul>
  );
}