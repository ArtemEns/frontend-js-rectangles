
function areIntersected(a, b) {
    var r1sideTop = a.top;
    var r2sideRight = b.left + b.width;
    var r1sideRight = a.left + a.width;
    var r2sideTop = b.top;
    var r1sideDown = a.top + a.height;
    var r2sideLeft = b.left;
    var r1sideLeft = a.left;
    var r2sideDown = b.top + b.height;

    if (r1sideTop >= r2sideDown || r1sideRight <= r2sideLeft || r1sideDown <= r2sideTop || r1sideLeft >= r2sideRight)
    { return false }
    else
    { return true }
}

var intersected = areIntersected({
    left: 0,
    top: 0,
    width: 20,
    height: 20
}, {
    left: 10,
    top: 10,
    width: 25,
    height: 25
    });


function filterVisible(rect, arrOfRect) {
    var filtered = arrOfRect.filter(function (elem) {
        if (elem.height && elem.width && areIntersected(rect, elem))
        { return true; }
        else
        { return false; }
    })
    return filtered;
}