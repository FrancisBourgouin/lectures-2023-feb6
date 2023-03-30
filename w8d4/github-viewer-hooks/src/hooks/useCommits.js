import { useState } from "react";
import axios from "axios";
import useWow from "./useWow";

export default function useCommits() {
  const [commitData, setCommitData] = useState(null);
  const { sayWow } = useWow();

  const fetchCommits = (formData) => {
    const { owner, repo } = formData;
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;

    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setCommitData(data))
      .then(sayWow)
      .catch((err) => console.log(err));
  };

  return { commitData, fetchCommits };
}
