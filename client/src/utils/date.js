const getDate = (date) => {
    const date123 = new Date(Date.now()).toLocaleString('ru', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    })
    const dateArray = date.split(' ')
    const month = dateArray[1].slice(0, 3)

}

export default getDate