import Mock from 'mockjs'
Mock.mock(/todo.json/, {
  'code': 0,
  'msg': function () {
    return this.code === 0 ? 'ok' : '错了'
  },
  'data|10-20': [
    {
      'name': '@cname',
      'id|+1': 1
    }
  ]
})
