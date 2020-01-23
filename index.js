const express = require('express')
const path = require('path')
const app = express()
const port = 3000


app.get('/', (req, res) => res.sendFile('index.html', { root : __dirname}))
app.get('/drip-ios', function(req, res){
	const file = path.join(__dirname, '/upload/latest-ios.ipa');
	res.download(file, 'latest-ios.ipa', (e) => res.send('Nothing to download yet' + e));
});
app.get('/drip-android', function(req, res){
	const file = path.join(__dirname, '/upload/latest-android.apk');
	res.download(file,'latest-android.apk', () => res.send('Nothing to download yet'));
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
