import { Link } from "react-router-dom";
import { User } from "../../types/user";

const UserItem = ({ avatar_url, login }: User) => {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div className="">
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img
                src={avatar_url ? avatar_url : "https://placehold.co/600x400"}
                alt="Profile"
              />
            </div>
          </div>
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
};

export default UserItem;
