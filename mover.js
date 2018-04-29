$(document).ready(function () {
    $(document).on("keyup", function (event) {
        var somethingMoved = false;
        var caseSpeed = 100;
        switch (event.keyCode) {
            case 37:
                $(".tile").sort(function (a,b) {
                    var attrA = $(a).attr('data-col');
                    var attrB = $(b).attr('data-col');
                    if (attrA > attrB) {
                        return 1;
                    }
                    if (attrB > attrA) {
                        return -1;
                    }
                    return 0;
                }).each(function () {
                    var tile_row = $(this).attr("data-row");
                    var tile_col = $(this).attr("data-col");
                    var leftColumn = parseInt(tile_col) - 1;
                    var leftTile = $('.tile[data-row = ' + tile_row + '][data-col = ' + leftColumn + ']');
                    var start = $('.boardtile[data-row = ' + tile_row + '][data-col = ' + tile_col + ']');
                    var possible_dest = $('.boardtile[data-row = ' + tile_row + '][class = "boardtile emptytile"]').first();

                    if (tile_col > possible_dest.attr("data-col") && possible_dest) {
                        var leftmove = start.position().left - possible_dest.position().left;
                        $(this).animate({
                            left: '-=' + leftmove
                        }, caseSpeed);
                        possible_dest.attr("class", "boardtile fulltile");
                        start.attr("class", "boardtile emptytile");
                        tile_col = possible_dest.attr("data-col");
                        $(this).attr("data-col", tile_col);
                        leftColumn = parseInt($(this).attr("data-col") - 1);
                        leftTile = $('.tile[data-row = ' + tile_row + '][data-col = ' + leftColumn + ']');
                        somethingMoved = true;
                    }

                    if ($(this).text() === leftTile.text() && leftTile.attr("id") !== "destroy") {
                        $(this).animate({
                                left: '-=' + 116
                            }, caseSpeed, function () {
                            var addition = parseInt(leftTile.text()) * 2;
                            leftTile.text(addition);
                            leftTile.removeAttr("id");
                            $(this).remove();
                        }
                        );
                        $(this).attr("id", "destroy");
                        leftTile.attr("id", "destroy");
                        tile_col = $(this).attr("data-col");
                        start = $('.boardtile[data-row = ' + tile_row + '][data-col = ' + tile_col + ']');
                        start.attr("class", "boardtile emptytile");
                        $(this).attr("data-col","leftColumn");
                        somethingMoved = true;
                    }
                })
                break;
                case 38:
                    $(".tile").sort(function (a,b) {
                        var attrA = $(a).attr('data-row');
                        var attrB = $(b).attr('data-row');
                        if (attrA > attrB) {
                            return 1;
                        }
                        if (attrB > attrA) {
                            return -1;
                        }
                        return 0;
                    }).each(function () {
                    var tile_row = $(this).attr("data-row");
                    var tile_col = $(this).attr("data-col");
                    var upRow = parseInt(tile_row) - 1;
                    var upTile = $('.tile[data-row = ' + upRow + '][data-col = ' + tile_col + ']');
                    var start = $('.boardtile[data-row = ' + tile_row + '][data-col = ' + tile_col + ']');
                    var possible_dest = $('.boardtile[data-col = ' + tile_col + '][class = "boardtile emptytile"]').first();

                    if (tile_row > possible_dest.attr("data-row") && possible_dest) {
                        var upmove = start.position().top - possible_dest.position().top;
                        $(this).animate({
                            top: '-=' + upmove
                        }, caseSpeed);
                        possible_dest.attr("class", "boardtile fulltile");
                        start.attr("class", "boardtile emptytile");
                        tile_row = possible_dest.attr("data-row");
                        $(this).attr("data-row", tile_row);
                        upRow = parseInt($(this).attr("data-row")) - 1;
                        upTile = $('.tile[data-row = ' + upRow + '][data-col = ' + tile_col + ']');
                        somethingMoved = true;
                    }

                    if ($(this).text() === upTile.text() && upTile.attr("id") !== "destroy") {
                        $(this).animate({
                                top: '-=' + 116
                            }, caseSpeed, function () {
                                var addition = parseInt(upTile.text()) * 2;
                                upTile.text(addition);
                                upTile.removeAttr("id");
                                $(this).remove();
                            }
                        );
                        $(this).attr("id", "destroy");
                        upTile.attr("id", "destroy");
                        tile_row = $(this).attr("data-row");
                        start = $('.boardtile[data-row = ' + tile_row + '][data-col = ' + tile_col + ']');
                        start.attr("class", "boardtile emptytile");
                        $(this).attr("data-col","upRow");
                        somethingMoved = true;
                    }
                })
                break;
            case 39:
                $(".tile").sort(function (a,b) {
                    var attrA = $(a).attr('data-col');
                    var attrB = $(b).attr('data-col');
                    if (attrA > attrB){
                        return -1;}
                    if (attrB > attrA){
                        return 1;}
                    return 0;
                }).each(function () {
                    var tile_row = $(this).attr("data-row");
                    var tile_col = $(this).attr("data-col");
                    var rightColumn = parseInt(tile_col) + 1;
                    var rightTile = $('.tile[data-row = ' + tile_row + '][data-col = ' + rightColumn + ']');
                    var start = $('.boardtile[data-row = ' + tile_row + '][data-col = ' + tile_col + ']');
                    var possible_dest = $('.boardtile[data-row = ' + tile_row + '][class = "boardtile emptytile"]').last();

                    if (tile_col < possible_dest.attr("data-col") && possible_dest) {
                        var rightmove = start.position().left - possible_dest.position().left;
                        $(this).animate({
                            left: '-=' + rightmove
                        }, caseSpeed);
                        possible_dest.attr("class", "boardtile fulltile");
                        start.attr("class", "boardtile emptytile");
                        tile_col = possible_dest.attr("data-col");
                        $(this).attr("data-col", tile_col);
                        rightColumn = parseInt($(this).attr("data-col")) + 1;
                        rightTile = $('.tile[data-row = ' + tile_row + '][data-col = ' + rightColumn + ']');
                        somethingMoved = true;
                    }

                    if ($(this).text() === rightTile.text() && rightTile.attr("id") !== "destroy") {
                        $(this).animate({
                                left: '+=' + 116
                            }, caseSpeed, function () {
                                var addition = parseInt(rightTile.text()) * 2;
                                rightTile.text(addition);
                                rightTile.removeAttr("id");
                                $(this).remove();
                            }
                        );
                        $(this).attr("id", "destroy");
                        rightTile.attr("id", "destroy");
                        tile_col = $(this).attr("data-col");
                        start = $('.boardtile[data-row = ' + tile_row + '][data-col = ' + tile_col + ']');
                        start.attr("class", "boardtile emptytile");
                        $(this).attr("data-col","rightColumn");
                        somethingMoved = true;
                    }
                })
                break;
            case 40:
                $(".tile").sort(function (a,b) {
                    var attrA = $(a).attr('data-row');
                    var attrB = $(b).attr('data-row');
                    if (attrA > attrB){
                        return -1;}
                    if (attrB > attrA){
                        return 1;}
                    return 0;
                }).each(function () {
                    var tile_row = $(this).attr("data-row");
                    var tile_col = $(this).attr("data-col");
                    var bottomRow = parseInt(tile_row) + 1;
                    var bottomTile = $('.tile[data-row = ' + bottomRow + '][data-col = ' + tile_col + ']');
                    var start = $('.boardtile[data-row = ' + tile_row + '][data-col = ' + tile_col + ']');
                    var possible_dest = $('.boardtile[data-col = ' + tile_col + '][class = "boardtile emptytile"]').last();

                    if (tile_row < possible_dest.attr("data-row") && possible_dest) {
                        var bottommove = start.position().top - possible_dest.position().top;
                        $(this).animate({
                            top: '-=' + bottommove
                        }, caseSpeed);
                        possible_dest.attr("class", "boardtile fulltile");
                        start.attr("class", "boardtile emptytile");
                        tile_row = possible_dest.attr("data-row");
                        $(this).attr("data-row", tile_row);
                        bottomRow = parseInt($(this).attr("data-row")) + 1;
                        bottomTile = $('.tile[data-row = ' + bottomRow + '][data-col = ' + tile_col + ']');
                        somethingMoved = true;
                    }

                    if ($(this).text() === bottomTile.text() && bottomTile.attr("id") !== "destroy") {
                        $(this).animate({
                                top: '+=' + 116
                            }, caseSpeed, function () {
                                var addition = parseInt(bottomTile.text()) * 2;
                                bottomTile.text(addition);
                                bottomTile.removeAttr("id");
                                $(this).remove();
                            }
                        );
                        $(this).attr("id", "destroy");
                        bottomTile.attr("id", "destroy");
                        tile_row = $(this).attr("data-row");
                        start = $('.boardtile[data-row = ' + tile_row + '][data-col = ' + tile_col + ']');
                        start.attr("class", "boardtile emptytile");
                        $(this).attr("data-row","bottomColumn");
                        somethingMoved = true;
                    }
                })
                break;
            case 82:
                location.reload();
                break;
        }
        console.log(event.keyCode);
        if (somethingMoved)
            newCase();
        showScore();
        var countTiles = $(".tile").length;
        if (!somethingMoved && countTiles === 16)
            youLoose();
    });
});