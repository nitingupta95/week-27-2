import { client } from "@repo/db/client";

async function Home() {
  const user = await client.user.findMany();
  return (
    <div>
      Home
      {JSON.stringify(user)}
    </div>
  );
}

export default Home;


// export const revalidate = 60 // revalidate every 60 seconds
// or
export const dynamic = 'force-dynamic'