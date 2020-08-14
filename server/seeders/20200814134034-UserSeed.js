'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      username: 'Prasety0',
      email: 'prasety0@gmail.com',
      password: 'prasety0',
      avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
      role: 'user',
      createdAt: '2020-08-08',
      updatedAt: '2020-08-08',
    },{
      username: 'MichaelZ',
      email: 'michaelz@gmail.com',
      password: 'michaelz',
      avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
      role: 'user',
      createdAt: '2020-08-08',
      updatedAt: '2020-08-08',
    },{
      username: 'Kayu Studio',
      email: 'admin@kayustudio.com',
      password: 'kayustudio',
      avatar: 'https://i.pinimg.com/originals/f4/71/5d/f4715d6daf242ab7ed6e3f67b8617b56.jpg',
      role: 'creator',
      createdAt: '2020-08-08',
      updatedAt: '2020-08-08',
    },{
      username: 'Satya Comics',
      email: 'contact@satyacomics.com',
      password: 'satyacomics',
      avatar: 'https://img4.goodfon.com/wallpaper/nbig/1/49/gianluca-rolli-artist-princess-girl-asian-brunette-long-hair.jpg',
      role: 'creator',
      createdAt: '2020-08-08',
      updatedAt: '2020-08-08',
    },{
      username: 'AdamSmith',
      email: 'adamsmith@gmail.com',
      password: 'adamsmith',
      avatar: 'https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png',
      role: 'admin',
      createdAt: '2020-08-08',
      updatedAt: '2020-08-08',
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
