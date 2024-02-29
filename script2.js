$(document).ready(function () {
    $(".draggable").each(function () {

        // Make the pieces draggable
        $(this).draggable({
            cursor: "move",
            snap: ".puzzlePiece",
            snapMode: "inner",
            snapTolerance: 10,
            zIndex: 2, 
        });
    });

    function checkPuzzleSolved() {
        var solved = true;

        // Loop through each draggable piece and check its position
        $(".draggable").each(function () {
            var pieceId = $(this).attr("id");
            var currentPosition = $(this).position();

            if (pieceId === "piece1") {
                var finalTop = 100;
                var finalLeft = 250;
            } else if (pieceId === "piece8") {
                var finalTop = 100;
                var finalLeft = 500;
            } else if (pieceId === "piece5") {
                var finalTop = 265;
                var finalLeft = 0;
            } else {

                var finalTop = $(this).data("final-top");
                var finalLeft = $(this).data("final-left");
            }

            if (
                Math.abs(currentPosition.top - finalTop) > 10 ||
                Math.abs(currentPosition.left - finalLeft) > 10
            ) {
                solved = false;
                return false; 
            }
        });

        if (solved) {
            alert("Puzzle solved! Well done!");
        }
    }

    $(".draggable").on("dragstop", function () {
        checkPuzzleSolved();
    });
});
