import { auth_user_session } from "@/libs/auth-libs";
import Image from "next/image";

const Dashboard = async () => {
  const user = await auth_user_session();

  return (
    <div className="text-color-primary">
      <h3>DASHBOARD</h3>
      <h5>Welcome to AnimeList Website, {user.name}</h5>
      <h5>{user.email}</h5>
      <Image src={user.image} alt="..." width={250} height={250} />
    </div>
  );
};

export default Dashboard;
