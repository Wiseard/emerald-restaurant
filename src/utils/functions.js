export function formatDate(date) {
  function getMonthName(monthNumber) {
    date.setMonth(monthNumber)
    return date.toLocaleString('en-US', { month: 'short' })
  }

  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  const month = getMonthName(date.getMonth())
  const year = date.getFullYear()

  return `${day} / ${month} / ${year}`
}

export function formatPrice(number) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number)
}
