$(document).ready(function () {
    $(".puzzlePiece").each(function(index) {
        // Randomly position each puzzle piece
        let initialTop, initialLeft;

        if (index === 0) {
            // For piece1, its random position has to be one that will
            // allow the user to place it exactly in its final position.
            initialTop = (Math.floor(Math.random() * 61) * 10) + "px"; 
            initialLeft = (Math.floor(Math.random() * 61) * 10) + "px"; 
        } else {
            initialTop = Math.random() * 100 + "px"; 
            initialLeft = Math.random() * 200 + "px"; 
        }

        $(this).css({
            position: "absolute",
            top: initialTop,
            left: initialLeft,
        });
        
        
        const finalPositions = [
            { top: "100px", left: "250px" }, //top mid
            { top: "100px", left: "500px" }, //top right
            { top: "265px", left: "0px" }, //mid left
            { top: "265px", left: "250px" }, //mid mid done
            { top: "265px", left: "500px" }, //mid right
            { top: "430px", left: "0px" },  //bottom left
            { top: "430px", left: "250px" }, //bottom mid
            { top: "430px", left: "500px" }, //bottom right
            { top: "100px", left: "0px" }, // top left
        ];

        
        if (index !== 0) {
            $(this).animate(finalPositions[index - 1], "slow");
        }
    });

    const $controlledPiece = $("#piece1");

    $("#up").click(function () {
        $controlledPiece.animate({ top: "-=10px" }, "fast");
    });

    $("#down").click(function () {
        $controlledPiece.animate({ top: "+=10px" }, "fast");
    });

    $("#left").click(function () {
        $controlledPiece.animate({ left: "-=10px" }, "fast");
    });

    $("#right").click(function () {
        $controlledPiece.animate({ left: "+=10px" }, "fast");
    });
});
