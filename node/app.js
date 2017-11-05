const dash_button = require('node-dash-button');
const execSync = require('child_process').execSync;
const dashButtonAddress = process.env.DASH_ADDRESS;

// Dashボタンのアドレス(コピーしたMACアドレスをここに入力)
const dash = dash_button(dashButtonAddress, null, null, 'all');

// ボタンをクリックしたときのアクション
// クリックしてから数秒遅延します。
dash.on('detected', () => {
  const text='こんにちは世界';
    // sayコマンドで声を出力
    //execSync(`say ${text}`);
    console.log(text);
});
