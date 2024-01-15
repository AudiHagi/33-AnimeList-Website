import { auth_user_session } from "@/libs/auth-libs";
import Link from "next/link";

const UserActionButton = async () => {
  const user = await auth_user_session();
  const action_label = user ? "Sign Out" : "Sign In";
  const action_url = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex justify-between gap-2">
      {user ? (
        <Link href="/users/dashboard" className="py-1">
          Dashboard
        </Link>
      ) : null}

      <Link
        href={action_url}
        className="bg-color-dark text-color-accent py-1 px-12"
      >
        {action_label}
      </Link>
    </div>
  );
};

export default UserActionButton;
