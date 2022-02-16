import React, { useState } from "react";
//import S3FileUpload from 'react-s3';

const UploadFile = () => {

    const [file, setFile] = useState([]);

    // will put in env variables when i can be bothered just testing for now
    // const config = {
    //     bucketName: 'test-for-file-uploader',
    //     dirName: 'uploads', /* optional */
    //     region: 'eu-west-2',
    //     accessKeyId: 'AKIAYM4MYNARJKTPS4WU',
    //     secretAccessKey: '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',
    // }

    const handleUpload = (e) => {
        console.log('console logging the selected file here: ', file)
        console.log('reached this point')
    };

    // const upload = () => {
    //     // console.log('console logging the selected file here: ', e.target.files[0])
    //     S3FileUpload
    //     .uploadFile(e.target.files[0], config)
    //     .then(data => console.log('if successful this is the object log of the upload: ', data))
    //     // console.log('location of our uploaded file: ', data.location)
    //     .catch(err => alert('error: ', err))
    // };

    return (
        <div className="row">
            <div className="col-6">

                <h1>hello this is for s3!</h1>

                <form encType="multipart/form-data">
                    <input
                        type="file"
                        onChange={e => setFile(e.target.files)}
                    />
                    <button onClick={handleUpload} type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
    );
};

export default UploadFile;
