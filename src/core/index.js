import Ws from '../common/ws'
import Ajax from '../common/ajax'
import {isSupportWs, IEVersion} from '../common/util'

export default async function main () {
  console.log('isSupportWs: ', isSupportWs())
  console.log('IEVersion: ', IEVersion())

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
