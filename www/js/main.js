// This is a JavaScript file


// APIキーの設定とSDK初期化
var ncmb = new NCMB("44b2d639d0ece051728816617efa48ede77ec4b2562360db5c0dde2d98321ee7","55d3572e08dcea25dd49f0c345a681cdbef44799714057e0afb5a1f6e24c5a54");

// NCMB.Objectのサブクラスを生成
var update = ncmb.DataStore("update");  //ここで指定したクラスの情報を取得する

//変数・配列
var updateddate = [];  //更新日を格納
var contents = [];  //更新内容を格納


//プッシュ通知用の端末情報を取得する
document.addEventListener("deviceready", function(){
            // デバイストークンを取得してinstallationに登録する
            window.NCMB.monaca.setDeviceToken(
                "44b2d639d0ece051728816617efa48ede77ec4b2562360db5c0dde2d98321ee7",
                "55d3572e08dcea25dd49f0c345a681cdbef44799714057e0afb5a1f6e24c5a54",
                "531151192290"
            );
        },false);
        
//ページ読み込み後に、データストアからデータを取得、表示する関数
window.onload = function () {   //ページ読み込み後に動作する

    var information = document.getElementById("information");   //データを表示する要素のIDの取得
    
    //データストアから指定したフィールドのデータを取得する、またHTMLの要素を書き換える
    update.fetchAll()
        .then(function(results){
            for (var i = 0; i < results.length; i++) {  //指定したフィールドの要素の数だけループ
            
                var object = results[i];
                              
                updateddate[i] = object.get("updateddate");   //フィールド指定
                contents[i] = object.get("contents");
                              
                console.log(updateddate[i]);   //コンソールログに表示
                console.log(contents[i]);
                console.log(information);
                              
                information.innerHTML = "<tr>" + "<td>" + updateddate[i] + "</td>" + "<td><a href='#'>" + contents[i] + "</a></td>" + "</tr>" + information.innerHTML; //HTMLを書き換え
            }
        })
        //エラー処理
        .catch(function(err){
            console.log(err);
        });
}
