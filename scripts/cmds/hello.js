unmodule.exports = {
 config: {
 name: "salut", 
 version: "1.0", 
 author: "Ayoub ßťøçïo", 
 countDown: 5, 
 role: 2, 
 shortDescription: {
 vi: "đây là mô tả ngắn của lệnh",
 en: "this is short description of command"
 }, 
 longDescription: {
 vi: "đây là mô tả dài của lệnh",
 en: "this is long description of command"
 },
 category: "categoryName",
 guide: {
 vi: "đây là hướng dẫn sử dụng của lệnh",
 en: "this is guide of command"
 } 
 },

 langs: {
 vi: {
 salut: "xin chào",
 salutWithName: "xin chào, id facebook của bạn là %1"
 }, // Vietnamese language
 en: {
 salut: "hello world",
 salutWithName: "hello, your facebook id is %1"
 } // English language
 },


 onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }) {
 message.reply("Hey, moi c’est Laureine. À ton service ☺️")

 }
};
