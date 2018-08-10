var _ = require('lodash');
var {Maze} = require('./maze')


const maze = new Maze({sizeX: 3, sizeY: 3})
maze.initConnections("0,1 0,2;0,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1")
maze.render()


