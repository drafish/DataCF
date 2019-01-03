function sleep (time, i) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('sleep:', i)
      resolve()
    }, time)
  })
}

async function loop () {
  var i = 0
  console.log('start loop')
  while (i < 10) {
    await sleep(1000, i)
    console.log(i)
    i++
  }

  console.log('end loop')
}

export default async function main () {
  console.log('start main')
  await loop()
  console.log('end main')
}
