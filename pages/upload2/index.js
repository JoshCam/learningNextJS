import React, { useState, useEffect } from 'react';
import S3FileUpload from 'react-s3';

function FileUpload() {

    //const [images, setImages] = useState([])

    // will put in env variables when i can be bothered just testing for now
    const config = {
        bucketName: 'test-for-file-uploader',
        dirName: 'uploads', /* optional */
        region: 'eu-west-2',
        accessKeyId: 'AKIAYM4MYNARJKTPS4WU',
        secretAccessKey: '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',
    }

    async function onChange(e) {
        const file = e.target.files[0];
        // console.log('uploaded file is: ', file);
        //setImages = e.target.files[0];
        const result = await S3FileUpload
        .uploadFile(file, config)
        .then(data => console.log('if successful this is the object log of the upload: ', data))
        // console.log('location of our uploaded file: ', data.location)
        .catch(err => alert('error: ', err))

        console.log('result: ', { result })
    }

    return (
        <div className="App">
        <h1>pls work my head hurts</h1>
        <input
            type="file"
            onChange={onChange}
        />
        </div>
    );
}

export default FileUpload;

