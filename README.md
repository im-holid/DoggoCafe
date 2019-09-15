# Doggo Cafe

## Important

This is a complete project as a customer side, I already make endpoint available on [Back-End](https://github.com/im-holid/doggoKostBackEnd) server in another repo. Althought it's already complete you may find some bug's here. feel free to contact me below or just make another branch in my repo

## Doggo Cafe

Doggo Caffe is a useful application for a place like foodcourt to automize ordering food for customer side. 

## Screenshots

<p float="left">
<img src="https://raw.githubusercontent.com/im-holid/im-holid.github.io/master/Telegram%20Desktop/photo_2019-09-15_20-50-53.jpg" width="200" height="350" alt="Doggo Cafe Home-Error"/>
<img src="https://raw.githubusercontent.com/im-holid/im-holid.github.io/master/Telegram%20Desktop/photo_2019-09-15_20-51-01.jpg" width="200" height="350" alt="Doggo Cafe Home"/>
<img src="https://raw.githubusercontent.com/im-holid/im-holid.github.io/master/Telegram%20Desktop/photo_2019-09-15_20-51-02.jpg" width="200" height="350" alt="Doggo Cafe List Menu"/>
<img src="https://raw.githubusercontent.com/im-holid/im-holid.github.io/master/Telegram%20Desktop/photo_2019-09-15_20-50-50.jpg" width="200" height="350" alt="Doggo Cafe List Menu-Swipe"/>
<img src="https://raw.githubusercontent.com/im-holid/im-holid.github.io/master/Telegram%20Desktop/photo_2019-09-15_20-51-04.jpg" width="200" height="350" alt="Doggo Cafe Cancel Order"/>
<img src="https://raw.githubusercontent.com/im-holid/im-holid.github.io/master/Telegram%20Desktop/photo_2019-09-15_20-51-07.jpg" width="200" height="350" alt="Doggo Cafe Order Page"/>
<img src="https://raw.githubusercontent.com/im-holid/im-holid.github.io/master/Telegram%20Desktop/photo_2019-09-15_20-51-06.jpg" width="200" height="350" alt="Doggo Cafe Dismiss Order"/>
<img src="https://raw.githubusercontent.com/im-holid/im-holid.github.io/master/Telegram%20Desktop/photo_2019-09-15_20-51-09.jpg" width="200" height="350" alt="Doggo Cafe Paying Page"/>
<img src="https://raw.githubusercontent.com/im-holid/im-holid.github.io/master/Telegram%20Desktop/photo_2019-09-15_20-51-10.jpg" width="200" height="350" alt="Doggo Cafe Finish Page"/>
</p>

## Features

- Input Table Number (1-20)
- List Menus
- Order Menus (Inside List Menus Page and Order Page)
- Order Page
- Call Bill

## Why Doggo Cafe?

- Simple code, It's really means basic code, easy to learn and modified.
- a simple application with powerful features
- It's React Native, so it support android & iOS by default
- Express is one of the most starred javascript framework, and it is very easy to use

## Tech Stack

- React Native for the Mobile Frontend
- Express.js at the backend

## Prerequisites

- Make sure You had been install NodeJs in your system [https://nodejs.org/](https://nodejs.org/)
- Then install React Native [https://facebook.github.io/react-native/](https://facebook.github.io/react-native/)
- Dont forget express ad the backend [https://expressjs.com/](https://expressjs.com/)

## Installation & Configuration

follow these steps to install

### Frontend

```bash
git clone https://github.com/im-holid/DoggoCafe.git
cd DoggoCafe
npm install #or yarn if using yarn
npm start #or yarn
react-native run-ios #for ios
react-native run-android #for android
```

edit ./src/Reducers/LOCALIP.js file and set API_HOST as your expressUri

```env
API_HOST=http://192.168.xxx.xxx:YOUR_PORT
```

### Backend

```bash
git clone https://github.com/im-holid/DoggoCafeBackEnd.git
cd DoggoCafeBackEnd
npm install
npm install nodemon -D
npm start
```

## Support Me :)

- Start this repository
- Hire We

  1. [Imam Holid Ahmad](https://www.linkedin.com/in/imamholid/)

## Contact

- WA/TELEGRAM: +628997454421 (Imam Holid Ahmad)
- Email: imamholid@gmail.com

## Download App (Demo usage only)

[![download](https://camo.githubusercontent.com/a9c59dcbf62ec123e8bb099fb473ad30554d70e6/68747470733a2f2f69312e77702e636f6d2f61706b6d6f6473696f732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f31322f446f776e6c6f61642d496e66696e6974652d44657369676e2d332e342e31302d41706b2e706e67 "Download")](https://drive.google.com/file/d/1A54fRZsEDcpju4HDphtrJ4bjGjKB-h_W/view?usp=sharing)
