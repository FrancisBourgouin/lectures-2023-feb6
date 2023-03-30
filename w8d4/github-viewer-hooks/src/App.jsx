import RepoForm from "./components/RepoForm";
import Header from "./components/Header";
import CommitList from "./components/CommitList";

import "./App.css";
import useCommits from "./hooks/useCommits";

function App() {
  const { commitData, fetchCommits } = useCommits();

  return (
    <div className="App">
      <Header />
      <RepoForm onSubmit={fetchCommits} />
      {commitData && <CommitList commits={commitData} />}
    </div>
  );
}

export default App;
