document.getElementById("calculateAge").addEventListener("click", function() {
    let turtleAge = parseInt(document.getElementById("turtleAge").value);

    if (isNaN(turtleAge) || turtleAge < 0) {
        document.getElementById("result").textContent = "Por favor, ingresa una edad valida.";
        return;
    }

    let humanAge = (turtleAge <= 5) ? turtleAge * 10 : (5 * 10) + ((turtleAge - 5) * 5);

    document.getElementById("result").textContent = `Tu tortuga tiene aproximadamente ${humanAge} años humanos.`;
});
