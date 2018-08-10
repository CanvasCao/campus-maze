const util = {}

util.getMiddleGridByConnectionStr = function (connectionStr) {
    const connectionPoints = connectionStr.split(' ')
    const connectionPoint1x = connectionPoints[0].split(',')[0] * 2 + 1
    const connectionPoint1y = connectionPoints[0].split(',')[1] * 2 + 1
    const connectionPoint2x = connectionPoints[1].split(',')[0] * 2 + 1
    const connectionPoint2y = connectionPoints[1].split(',')[1] * 2 + 1
    return {
        x: (connectionPoint1x + connectionPoint2x) / 2,
        y: (connectionPoint1y + connectionPoint2y) / 2
    }
}

module.exports = {util}