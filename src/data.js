
const test1 = [
    [{value: 0},{value: 1},{value: 2},{value: 3},{value: 4},{value: 5}],
    [{value: 0},{value: 0},{value: 1},{value: 2},{value: 3},{value: 4}],
    [{value: 0},{value: 0},{value: 0},{value: 1},{value: 2},{value: 3}],
    [{value: 0},{value: 0},{value: 0},{value: 0},{value: 1},{value: 2}],
    [{value: 0},{value: 0},{value: 0},{value: 0},{value: 0},{value: 1}]
];

const beach = [
    [{value: 0},{value: 0},{value: 1},{value: 1},{value: 1},{value: 2},{value: 3},{value: 4},{value: 4},{value: 5}],
    [{value: 0},{value: 0},{value: 1},{value: 1},{value: 1},{value: 2},{value: 3},{value: 4},{value: 4},{value: 5}],
    [{value: 0},{value: 0},{value: 1},{value: 1},{value: 1},{value: 2},{value: 3},{value: 4},{value: 4},{value: 5}],
    [{value: 0},{value: 0},{value: 1},{value: 1},{value: 1},{value: 2},{value: 3},{value: 4},{value: 4},{value: 5}],
    [{value: 0},{value: 0},{value: 1},{value: 1},{value: 1},{value: 2},{value: 3},{value: 4},{value: 4},{value: 5}],
    [{value: 0},{value: 0},{value: 1},{value: 1},{value: 1},{value: 2},{value: 3},{value: 4},{value: 4},{value: 5}],
    [{value: 0},{value: 0},{value: 1},{value: 1},{value: 1},{value: 2},{value: 3},{value: 4},{value: 4},{value: 5}],
    [{value: 0},{value: 0},{value: 1},{value: 1},{value: 1},{value: 2},{value: 3},{value: 4},{value: 4},{value: 5}],
    [{value: 0},{value: 0},{value: 1},{value: 1},{value: 1},{value: 2},{value: 3},{value: 4},{value: 4},{value: 5}],
    [{value: 0},{value: 0},{value: 1},{value: 1},{value: 1},{value: 2},{value: 3},{value: 4},{value: 4},{value: 5}]
];

const island = [
    [{value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}],
    [{value: 0}, {value: 1}, {value: 3}, {value: 4}, {value: 4}, {value: 1}, {value: 1}, {value: 0}, {value: 0}, {value: 0}],
    [{value: 0}, {value: 1}, {value: 4}, {value: 5}, {value: 5}, {value: 5}, {value: 5}, {value: 4}, {value: 0}, {value: 0}],
    [{value: 0}, {value: 1}, {value: 5}, {value: 5}, {value: 6}, {value: 6}, {value: 6}, {value: 5}, {value: 4}, {value: 0}],
    [{value: 0}, {value: 1}, {value: 5}, {value: 6}, {value: 7}, {value: 6}, {value: 6}, {value: 5}, {value: 4}, {value: 0}],
    [{value: 0}, {value: 1}, {value: 5}, {value: 6}, {value: 7}, {value: 7}, {value: 6}, {value: 5}, {value: 4}, {value: 0}],
    [{value: 0}, {value: 1}, {value: 5}, {value: 6}, {value: 6}, {value: 6}, {value: 6}, {value: 5}, {value: 4}, {value: 0}],
    [{value: 0}, {value: 1}, {value: 4}, {value: 5}, {value: 5}, {value: 5}, {value: 5}, {value: 4}, {value: 2}, {value: 0}],
    [{value: 0}, {value: 1}, {value: 3}, {value: 4}, {value: 4}, {value: 4}, {value: 4}, {value: 2}, {value: 2}, {value: 0}],
    [{value: 0}, {value: 0}, {value: 0}, {value: 1}, {value: 1}, {value: 1}, {value: 0}, {value: 0}, {value: 0}, {value: 0}]
]

const bigIsland = [[{value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}],
[{value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 1}, {value: 1}, {value: 1}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 1}, {value: 1}, {value: 0}, {value: 0}, {value: 0}, {value: 0}],
[{value: 0}, {value: 0}, {value: 0}, {value: 1}, {value: 1}, {value: 2}, {value: 3}, {value: 3}, {value: 3}, {value: 2}, {value: 1}, {value: 0}, {value: 1}, {value: 1}, {value: 2}, {value: 2}, {value: 1}, {value: 0}, {value: 0}, {value: 0}],
[{value: 0}, {value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 5}, {value: 5}, {value: 4}, {value: 3}, {value: 1}, {value: 2}, {value: 2}, {value: 4}, {value: 3}, {value: 2}, {value: 1}, {value: 0}, {value: 0}],
[{value: 0}, {value: 0}, {value: 1}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 6}, {value: 6}, {value: 5}, {value: 4}, {value: 2}, {value: 3}, {value: 3}, {value: 4}, {value: 4}, {value: 3}, {value: 2}, {value: 1}, {value: 0}],
[{value: 0}, {value: 0}, {value: 1}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 7}, {value: 7}, {value: 6}, {value: 5}, {value: 4}, {value: 5}, {value: 5}, {value: 5}, {value: 4}, {value: 3}, {value: 2}, {value: 1}, {value: 0}],
[{value: 0}, {value: 1}, {value: 3}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 8}, {value: 8}, {value: 7}, {value: 6}, {value: 5}, {value: 6}, {value: 6}, {value: 6}, {value: 5}, {value: 4}, {value: 3}, {value: 2}, {value: 0}],
[{value: 0}, {value: 1}, {value: 4}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 9}, {value: 9}, {value: 8}, {value: 7}, {value: 6}, {value: 7}, {value: 7}, {value: 7}, {value: 6}, {value: 5}, {value: 3}, {value: 2}, {value: 0}],
[{value: 0}, {value: 1}, {value: 4}, {value: 6}, {value: 8}, {value: 9}, {value: 10}, {value: 10}, {value: 10}, {value: 9}, {value: 8}, {value: 7}, {value: 8}, {value: 8}, {value: 8}, {value: 7}, {value: 5}, {value: 4}, {value: 3}, {value: 0}],
[{value: 0}, {value: 1}, {value: 4}, {value: 6}, {value: 7}, {value: 9}, {value: 10}, {value: 10}, {value: 10}, {value: 9}, {value: 8}, {value: 7}, {value: 8}, {value: 8}, {value: 8}, {value: 7}, {value: 6}, {value: 4}, {value: 3}, {value: 0}],
[{value: 0}, {value: 1}, {value: 3}, {value: 5}, {value: 6}, {value: 8}, {value: 9}, {value: 9}, {value: 9}, {value: 8}, {value: 7}, {value: 6}, {value: 7}, {value: 7}, {value: 7}, {value: 6}, {value: 5}, {value: 4}, {value: 2}, {value: 0}],
[{value: 0}, {value: 1}, {value: 3}, {value: 4}, {value: 5}, {value: 7}, {value: 8}, {value: 8}, {value: 8}, {value: 7}, {value: 6}, {value: 5}, {value: 6}, {value: 6}, {value: 6}, {value: 5}, {value: 4}, {value: 3}, {value: 2}, {value: 0}],
[{value: 0}, {value: 1}, {value: 2}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 7}, {value: 7}, {value: 6}, {value: 5}, {value: 4}, {value: 5}, {value: 5}, {value: 5}, {value: 4}, {value: 3}, {value: 2}, {value: 1}, {value: 0}],
[{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 6}, {value: 6}, {value: 5}, {value: 4}, {value: 3}, {value: 4}, {value: 4}, {value: 4}, {value: 3}, {value: 2}, {value: 1}, {value: 0}, {value: 0}],
[{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 3}, {value: 4}, {value: 5}, {value: 5}, {value: 5}, {value: 4}, {value: 3}, {value: 2}, {value: 3}, {value: 3}, {value: 3}, {value: 2}, {value: 1}, {value: 0}, {value: 0}, {value: 0}],
[{value: 0}, {value: 0}, {value: 1}, {value: 2}, {value: 2}, {value: 3}, {value: 4}, {value: 4}, {value: 4}, {value: 3}, {value: 2}, {value: 1}, {value: 2}, {value: 2}, {value: 2}, {value: 1}, {value: 0}, {value: 0}, {value: 0}, {value: 0}],
[{value: 0}, {value: 0}, {value: 1}, {value: 2}, {value: 2}, {value: 3}, {value: 3}, {value: 3}, {value: 3}, {value: 2}, {value: 1}, {value: 0}, {value: 1}, {value: 1}, {value: 1}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}],
[{value: 0}, {value: 0}, {value: 1}, {value: 1}, {value: 1}, {value: 2}, {value: 2}, {value: 2}, {value: 2}, {value: 1}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}],
[{value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 1}, {value: 1}, {value: 1}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}],
[{value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}]
];

const colorData = [
    {value: -1, color: "#000EAB"}, {value: 0, color: "#0015ff"}, 
    {value: 1, color: "#E4C06B"}, {value: 2, color: "#8AE46B"},
    {value: 3, color: "#6BF03E"}, {value: 4, color: "#4EE61C"},
    {value: 5, color: "#33AB00"}, {value: 6, color: "#9C6F00"},
    {value: 7, color: "#9C4B00"}, {value: 8, color: "#9C3C00"},
    {value: 9, color: "#9C1F00"}, {value: 10, color: "#9C0A00"}
]