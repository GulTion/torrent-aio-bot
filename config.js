const SITE="https://torrent-aio-bot.gultion.repl.co"
const AUTH_CODE="4/1AY0e-g7nx9cmuMKEpvbqfpPZx24eSRJBEMxXJ2VrAJlFDMs3h5DMspLYVWs"
const CLIENT_SECRET="Tk4zXw2dLjR2i8YyeNB4U1U3"
const GDRIVE_PARENT_FOLDER="1DRUFspPfopVEMbwPDIcd9_TKPms5NCIa"
const SEARCH_SITE="https://torrent-aio-bot.gultion.repl.co"
const TELEGRAM_TOKEN="1566108681:AAEbeXZPqeGMtLkJXKg6A7AmUyDx4VOZT78"
const TOKEN='{"access_token":"ya29.a0AfH6SMAofkTHW26BirApbZ2SyWK37WDKamYr-fjRcfnfAZo2VyG4ZCF-7kO4VsQ6rPG8gUQiMaEYtmf7i-X3XCXnOEecklIP1t7Hqt8qEuMT9t-_ubSr4xadCvslvGAL2gl0I_zme7UuCYRwBRa-h8QsY2NXcJPN4ZKU8mN9rJw","refresh_token":"1//0d-1rdhklxcJ8CgYIARAAGA0SNwF-L9IruMcqVFiBRh4RGCpM5uzdFPom1qAFzOkSXqp8QmSkcAT2PUblEbvwt6dx1WIVYhUbCcc","scope":"https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.metadata.readonly","token_type":"Bearer","expiry_date":1609696371778}'
const CLIENT_ID = '266722377154-0pgc8j3m6bgicd0bihsbj8jins13n2rs.apps.googleusercontent.com'

const config = {
  creds:{
    CLIENT_ID, CLIENT_SECRET, TOKEN, AUTH_CODE, GDRIVE_PARENT_FOLDER
  },
  telegramToken:TELEGRAM_TOKEN,
  site:SITE

}

module.exports = config