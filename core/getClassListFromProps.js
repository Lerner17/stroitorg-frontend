export default function(blockName, obj) {
  const classList = []

  for (const item in obj) {
    const value = obj[item]

    if (!obj[item]) {
      continue
    }

    if (typeof value === 'boolean') {
      classList.push(`${blockName}--${item}`)
      continue
    }

    classList.push(`${blockName}--${item}--${obj[item]}`)
  }

  return classList
}
