export default function CreatePost() {
  return (
    <div className="create-post">
      <h1>Create Resource Post</h1>

      <form>
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter resource title"
        />

        <label>Description</label>
        <textarea
          placeholder="Describe the resource"
          rows="5"
        ></textarea>

        <label>Category</label>
        <select>
          <option>Coding</option>
          <option>DSA</option>
          <option>AI</option>
          <option>Notes</option>
          <option>Java</option>
          <option>Python</option>
          <option>C/C++</option>
          <option>Web Development</option>
        </select>

        <label>Resource Link</label>
        <input
          type="url"
          placeholder="Paste YouTube/Drive link"
        />

        <button type="submit">
          Upload Resource
        </button>
      </form>
    </div>
  );
}