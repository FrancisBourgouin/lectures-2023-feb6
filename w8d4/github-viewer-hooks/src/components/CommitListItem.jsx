export default function CommitListItem(props) {
  const url = props.commit.html_url;
  const message = props.commit.commit.message;
  const date = props.commit.commit.author.date;
  const name = props.commit.commit.author.name;

  return (
    <li>
      <p>
        {message.toLowerCase()} - {date}
      </p>
      <p>By: {name}</p>
    </li>
  );
}

// const url = commitList[0].html_url
// const message = commitList[0].commit.message
// const date = commitList[0].commit.author.date
// const name = commitList[0].commit.author.name
