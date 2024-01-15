import { auth_user_session } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Dashboard = async () => {
  const user = await auth_user_session();

  return (
    <div className="text-color-primary mt-8 flex flex-col justify-center items-center">
      <h5 className="text-2xl font-bold">
        Welcome to AnimeList Website, {user.name}
      </h5>
      <h5 className="text-2xl font-bold">{user.email}</h5>
      <Image
        src={user.image}
        alt="..."
        width={250}
        height={250}
        className="mt-4"
        style={{
          objectFit: "cover",
          borderRadius: "50px",
        }}
      />
      <div className="flex flex-wrap gap-4 py-8">
        <Link
          href="/users/dashboard/collection"
          className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl"
        >
          My Collection
        </Link>
        <Link
          href="/users/dashboard/comment"
          className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
