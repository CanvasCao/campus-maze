function Grid(x, y, type = "W") {
    this.x = x
    this.y = y
    this.type = type
}

Grid.prototype = {
    render: function () {
        return `[${this.type}]`
    }
}

module.exports = {Grid}