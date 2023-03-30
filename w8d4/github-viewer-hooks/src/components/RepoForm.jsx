import useFormData from "../hooks/useFormData";

export default function RepoForm(props) {
  const initialValues = { owner: "", repo: "" };
  const { formData, handleSubmit, handleChange } = useFormData(
    initialValues,
    props.onSubmit
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="owner"
        onChange={handleChange}
        value={formData.owner}
      />
      <input
        type="text"
        name="repo"
        onChange={handleChange}
        value={formData.repo}
      />
      <button>Fetch the commits</button>
    </form>
  );
}
