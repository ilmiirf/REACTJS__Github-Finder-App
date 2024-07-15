import RepoItem from "./RepoItem";
import { RepoType, ReposType } from "../../types/user";

export default function RepoList({ repos }: { repos: ReposType }): JSX.Element {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="my-4 text-3xl font-bold card-title">
          Latest Repositories
        </h2>
        {repos.map((repo: RepoType) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}
