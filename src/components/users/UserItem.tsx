import { Link } from "react-router-dom";
import { UserType } from "../../types/user";

export default function UserItem({ user }: { user: UserType }): JSX.Element {
  const { login, avatar_url } = user;

  return (
    <div className="shadow-md card compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="Profile" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            className="text-base-content text-opacity-40"
            to={`/user/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
