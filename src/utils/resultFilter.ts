export const resultFilter = (cards: IBook[], filter: string) => {

  const filteredCards = cards.filter((card) => {
    const categorysCard = card.volumeInfo.categories
    let approve = false

    if (categorysCard === undefined) { approve = false; return false }

    categorysCard.forEach((category) => {
      if (category.toLowerCase() === filter) {
        approve = true
      }
    })
    return approve
  })
  return filteredCards
}