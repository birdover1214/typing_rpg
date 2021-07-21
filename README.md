# TypingRPG
このアプリはタイピングゲーム＋ロールプレイングゲームを自分なりに融合させたアプリケーションになります。<br>
単調になりがちなタイピングゲームにロールプレイングゲームならではの育成要素やアイテム収集要素を組み込むことで、楽しみながらタイピングスキルの上達を目指せる事を目的としています。<br>
<br>
【URL】https://typing-rpg.com/<br>
<br>
### ログイン画面<br>
画面上部のフォームに登録済みのメールアドレスとパスワードを入力してログインを行うか、画面中央の「Twitterで簡単登録&ログイン」ボタンでTwitterを利用して新規登録、ログインが行えます。<br>
![typing-rpg com_login](https://user-images.githubusercontent.com/71583677/126056995-6c1c84c9-3112-42a0-9a7a-337054fe2f34.png)
<br>
<br>
### 新規登録画面<br>
フォームに必要情報を入力して新規登録を行います。登録が完了するとログイン状態でゲーム画面へ遷移します。<br>
![typing-rpg com_register](https://user-images.githubusercontent.com/71583677/126057153-307f313c-a754-4d00-9261-cdb6d6ef9b17.png)
<br>
<br>
### ゲーム画面<br>
まずは右上の「？」アイコンをクリックして遊び方をご確認ください。<br>
![typing-rpg com_](https://user-images.githubusercontent.com/71583677/126057275-c490e7ac-7f98-4cd7-8b1b-c413d4f6f9ed.png)
<br><br>
フィールドを選択すると戦闘直前画面へ移行<br>
![typing-rpg com_ (1)](https://user-images.githubusercontent.com/71583677/126057587-dd334e68-afaf-4f71-9c81-4c013fb81bab.png)
<br><br>
戦闘中画面1<br>
![typing-rpg com_ (2)](https://user-images.githubusercontent.com/71583677/126057597-6b65ef1e-99f9-4d47-8628-a8765af0892a.png)
<br><br>
戦闘中画面2<br>
![typing-rpg com_ (3)](https://user-images.githubusercontent.com/71583677/126057602-68b46e22-8b58-444c-9ca6-5d8b3254b81c.png)
<br><br>
戦闘終了<br>
![typing-rpg com_ (4)](https://user-images.githubusercontent.com/71583677/126057612-2ba2071b-08f5-488e-8795-9cafcf0a5314.png)
<br>
<br>
# TypingRPGの特徴
一番の特徴はタイピングゲームにロールプレイングゲームの要素を加えた事です。<br>
タイピングゲーム部分での特徴は複数入力に対応している点です。<br>
例えば、「問題」という文字列であれば「mondai」、「monndai」と2パターンどちらでも正解となり、ユーザーがタイプしたキーに合わせて動的にローマ字部分の表示が変わります。<br>
また、ゲーム画面の通信は全てAjaxを使用しており、画面の遷移は一切行わずプレイできます。
<br>
# 使用技術
<ul>
  <li>PHP7.4</li>
  <li>Laravel7.29</li>
  <li>Javascript(jQuery)</li>
  <li>HTML/CSS(Sass)</li>
  <li>MySQL8.0</li>
  <li>Nginx</li>
  <li>Docker/Docker Compose</li>
  <li>AWS</li>
  <li>Twitter API</li>
</ul>
<br>
<br>

# インフラ構成図
<br>
AWSの複数のサービスを利用して公開しています。<br>
<br>

![構成図](https://user-images.githubusercontent.com/71583677/96476423-21583c80-1270-11eb-8088-c0eabbb635f2.png)
<br>
<br>
# 機能一覧
<ul>
  <li>ユーザー登録/ログイン機能(Laravel/ui)</li>
  <li>Twitter APIを利用したユーザー登録/ログイン機能</li>
  <li>トークンを用いたパスワード変更機能</li>
  <li>ユーザー情報編集機能</li>
  <li>ユーザー退会機能</li>
  <li>Twitter投稿機能</li>
</ul>
