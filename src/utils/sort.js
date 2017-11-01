const sort = (arr, key) => {
    for (let x in arr) {
        if (arr[x].child) {
            arr[x].child = sort(arr[x].child, key)
        }
    }
    return arr.sort((a, b) => {
        return (a[key] ? a[key] : 0) - (b[key] ? b[key] : 0)
    })
}

export default sort
