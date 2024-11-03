const UpdateUserModal = ({ handleUpdate, name, email, setName, setEmail }) => {
  return (
    <dialog id="update_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Update User</h3>
        <form onSubmit={handleUpdate} className="py-4">
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
              Update User
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => document.getElementById("update_modal").close()}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default UpdateUserModal;
