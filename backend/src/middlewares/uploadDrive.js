const fs = require("fs")
const readline = require("readline")
const { google } = require("googleapis")

// service account key file from Google Cloud console.
const KEYFILEPATH = 'web10-auth-331504-d5cdb12fa135.json';

// Request full drive access.
const SCOPES = ['https://www.googleapis.com/auth/drive'];


// Request full drive scope and profile scope, giving full access to google drive as well as the users basic profile information.
// const SCOPES = ['https://www.googleapis.com/auth/drive', 'profile'];

// Create a service account initialize with the service account key file and scope needed
const auth = new google.auth.GoogleAuth({
    keyFile: KEYFILEPATH,
    scopes: SCOPES
});
{/* <img src="https://drive.google.com/uc?export=view&id=XXX"> */ }

module.export = async function createAndUploadFile(name) {
    const driveService = google.drive({ version: 'v3', auth });

    let fileMetadata = {
        'name': 'icon2.png',
        parents: ["1UPFckEL2bnj1wGJ0SaNGDoQHI-9SYNA7"]
    };
    let media = {
        mimeType: 'image/jpeg',
        body: fs.createReadStream(`../uploads/${name}`)
    };

    let response = await driveService.files.create({
        resource: fileMetadata,
        media: media,
        fields: 'id'
    });

    // console.log("response", response)

    switch (response.status) {
        case 200:
            let file = response.result;
            // console.log('Created File Id: ', response.data.id);
            return response.data.id
            break;
        default:
            console.error('Error creating the file, ' + response.errors);
            break;
    }
}


// createAndUploadFile(auth).catch(console.error)
