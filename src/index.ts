export const one = 4
export const two = 2

// use '_' to avoid eslint check
const _options = {
  asmdn: 'asf'
}

function use(a: any, b: any, c: any) {
  return [
    a, b, c
  ]
}

const help = () => {
  // unused vars 'error'
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [a, _, c] = use(1, 2, 3)
  // don't recommend 'console.xx' func
  // eslint-disable-next-line no-console
  console.log('count: %d', a)
}

help()
