import UploadFiles from "../../components/FileUpload";

const FileUpload = () => {
  //Functions
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <div className="card m-3">
            <UploadFiles />
          </div>
        </div>
        <div className="col-6">
          <div className="card m-3">
            <form className="m-3">
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Other Names</label>
                <input className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
