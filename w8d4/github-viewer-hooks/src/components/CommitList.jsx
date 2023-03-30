import CommitListItem from "./CommitListItem";

export default function CommitList(props) {
  const { commits } = props;

  const parsedCommits = commits.map((commit) => (
    <CommitListItem key={commit.sha} commit={commit} />
  ));
  return (
    <section>
      <h1>Commits</h1>
      <ul>{parsedCommits}</ul>
    </section>
  );
}
