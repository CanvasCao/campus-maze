var _ = require('lodash');
var {util} = require('./utils')
var {Grid} = require('./grid')

function Maze({sizeX, sizeY}) {
    this.sizeX = sizeX
    this.sizeY = sizeY
    this.grids = []
    this.connections = []
}

Maze.prototype = {
    initConnections: function (connectStr) {
        this.connections = connectStr.split(';')
    },
    render: function () {
        var that = this;

        this._setWalls()
        this._setRoads()
        this._setConnection()

        const gridLines = _.groupBy(that.grids, 'x')
        _.forEach(gridLines, (lineGrids) => {
            console.log(lineGrids.map(grid => grid.render()).join(" "))
        })
    },
    _setWalls: function () {
        var that = this;
        _.forEach(_.times(that.sizeX * 2 + 1), function (x) {
            _.forEach(_.times(that.sizeY * 2 + 1), function (y) {
                that.grids.push(new Grid(x, y))
            })
        })
    },
    _setRoads: function () {
        var that = this;
        _.forEach(_.times(that.sizeX), function (x) {
            _.forEach(_.times(that.sizeY), function (y) {
                _.find(that.grids, {x: x * 2 + 1, y: y * 2 + 1}).type = 'R'
            })
        })
    },
    _setConnection: function () {
        var that = this;
        _.forEach(that.connections, (connection) => {
            const middleGrid = util.getMiddleGridByConnectionStr(connection)

            _.find(that.grids, {
                x: middleGrid.x,
                y: middleGrid.y,
            }).type = 'R'

        })
    }
}
module.exports = {Maze}