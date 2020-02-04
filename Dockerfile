FROM node:10

# アプリケーションディレクトリの作成
WORKDIR /usr/src/app

# package.json & package-lock.jsonをコピー
COPY package*.json ./

# アプリケーションの依存関係をインストール
RUN npm install

# APコードをハンドルする
COPY . .

EXPOSE 3000

# RUN npm start
# CMD [ "npm start" ]
