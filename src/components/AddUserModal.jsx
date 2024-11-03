const AddUserModal = ({ handleSubmit, email, name, setName, setEmail }) => {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Add User</h3>
        <form onSubmit={handleSubmit} className="py-4">
          <label className="block mb-2">
            <span className="text-gray-700">Full Name</span>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Enter full name"
              className="input input-bordered w-full mt-1"
              required
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Email</span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter user email"
              className="input input-bordered w-full mt-1"
              required
            />
          </label>
          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              Add User
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => document.getElementById("my_modal_1").close()}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default AddUserModal;
