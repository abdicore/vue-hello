
const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Scopriamo Vue',
      imageUrl: '../img/n.y.jpg',
      imageAlt: 'New York',

    }
  }
}).mount('#app')