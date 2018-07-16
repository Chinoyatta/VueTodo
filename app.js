const vm = new Vue({
  el: '#app',
  data: {
    items: [
        { title: 'ソーシャルゲームにログインする', isChecked: true },
        { title: 'ゴミを捨てに行く', isChecked: true },
        { title: 'お弁当を作る', isChecked: false },
        { title: '朝ごはんを食べる', isChecked: false },
        { title: '持ち物を確認する', isChecked: false }
    ],
    newItemTitle: ''
  },
  methods: {
    addTodo: function(newTitle){
      this.items.push({
        title: newTitle,
        isChecked: false
      });
      this.newItemTitle = '';
    },
  }
})
