# タスク管理アプリケーション
![スクリーンショット 2022-04-27 125838](https://user-images.githubusercontent.com/85292210/165437724-2a00f9b6-cfaa-440a-b225-081d1aca0659.png)


# 1.アプリ概要
タスクを記録および管理できるwebアプリケーションです。
<br>
SPA(シングルページアプリケーション)の学習もかねて作成しました。
URL:https://todoappservicetoshi.azurewebsites.net

# 2.仕様技術
## フロントエンド
* HTML
* CSS
* javascript
* React 17.0.2
* ChakraUI

## バックエンド
* C#
* .NET Framework 6.0
* Azure SQL Server

## インフラ
* Azure(App Service, SQL Server, SQL データベース)

# 3.システム構成図
![システム構成図](https://user-images.githubusercontent.com/85292210/165245483-c6809bb2-798f-442e-8e57-655ca6e56be2.png)

# 4.データベース
## Todoテーブル
![todoアプリ (1)](https://user-images.githubusercontent.com/85292210/165277644-dab5a890-995b-4385-96b8-02951123a48a.png)

# 5.主な機能
## (1)タスク表示
### a.全件取得・・・初期表示やALLタブを押すと処理
### b.未完了のみ取得・・・TODOタブを押すと処理
### c.完了のみ取得・・・DONEタブを押すと処理
![change_tab](https://user-images.githubusercontent.com/85292210/165265339-592812e5-bb5a-410e-aaea-68abdd4b221f.gif)

## (2)タスク登録・・・タスク名、予定日をいれて登録
![add](https://user-images.githubusercontent.com/85292210/165263319-4b0d2da8-e44e-4c6e-a314-d8033c2b3165.gif)

## (3)タスク更新
### a.完了、未完了切り替え
![change_isCompleted](https://user-images.githubusercontent.com/85292210/165268163-39905e3d-3d7a-4ebd-8c1e-b9c8277ad252.gif)

### b.タスク名と予定日を編集
![edit](https://user-images.githubusercontent.com/85292210/165269699-d52bc86c-e719-4dc9-87ed-347261d4fb8b.gif)

## (4)タスク削除
![delete](https://user-images.githubusercontent.com/85292210/165270045-8e5c2589-0b49-45c6-8e71-4471a3fc2a3c.gif)

## (5)エラーチェック
### a.予定日が現在日時を過ぎている場合、予定日を強調表示
![スクリーンショット 2022-04-26 173327](https://user-images.githubusercontent.com/85292210/165258021-45b7ca50-4fed-419c-aa13-fe0542f4d48e.png)

### b.100文字を超えるとエラー(追加時)
![err_101](https://user-images.githubusercontent.com/85292210/165264033-640a3d64-fcc4-4e2a-940f-28dbe7d74c3a.gif)

### c.100文字を超えるとエラー(編集時)
![err_101_edit](https://user-images.githubusercontent.com/85292210/165269746-d1ac0c35-1f77-4715-90c8-e6fc5b4938d2.gif)

# さいごに
## 意識したこと
* 直感で操作できること
* エラーチェックをどうするか

## 難しかったこと
* Reactで再レンダリングされるタイミング
* コンポーネント設計(どの単位でコンポーネントを分けるかなど)

## これから実装したいこと
* ユーザー認証機能
* リマインドメール機能
* 自動デプロイ設定

