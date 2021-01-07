const { exec } = require("child_process");

async function sh(cmd, cb){

await exec(cmd, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        cb(error.message)
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    cb(stdout)
});

}

module.exports = sh