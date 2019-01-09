import indexOf from 'lodash/indexOf'
import Ws from '../common/ws'
import Ajax from '../common/ajax'
import {isSupportWs, IEVersion} from '../common/util'
const config = require('../config')

export default async function main () {
  console.log('indexOf:', indexOf([1, 2, 1, 2], 2, 2))
  console.log('isSupportWs: ', isSupportWs())
  console.log('IEVersion: ', IEVersion())
  console.log('config: ', config)

  if (isSupportWs()) {
    const ws = new Ws({url: 'ws://localhost:8081'})

    console.log('isOpen: ', ws.isOpen())
    setTimeout(function () {
      console.log('isOpen: ', ws.isOpen())
      ws.send('hello')
      ws.close()
      setTimeout(function () {
        console.log('isOpen: ', ws.isOpen())
      }, 1000)
    }, 1000)
  }

  const ajax = new Ajax({
    url: 'http://localhost:8081',
    method: 'POST'
  })
  console.log('start ajax')
  var res = await ajax.send({a:1})
  console.log('res: ', res)
  console.log('end ajax')
}
