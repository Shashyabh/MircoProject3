var data = document.querySelectorAll(".grid-item");
var ans = document.getElementById("fill");
var equation = "";
const operators = new Set(["+", "-", "*", "/"]);
data.forEach((ele) => {
	ele.addEventListener("click", (e) => {
		// Not start with +,/,*
		if (
			equation.length == 0 &&
			(e.target.innerHTML === "+" || e.target.innerHTML === "/" || e.target.innerHTML === "*")
		) {
			ans.innerHTML = "Invalid Input";
		}
		// If start with "-" then next char will not "-"
		else if (
			operators.has(equation.charAt(equation.length - 1)) &&
			operators.has(e.target.innerHTML)
		) {
			ans.innerHTML = "Invalid Input";
		}

		//Between two or more operator is not present like 88+9--7 , 99-+0--
		else if (
			equation.length > 1 &&
			equation.charAt(equation.length - 1) === "-" &&
			e.target.innerHTML === "-"
		) {
			ans.innerHTML = "Invalid Input";
		} else if (e.target.innerHTML === "=") {
			let result = eval(equation);
			result = result.toFixed(3);
			ans.innerHTML = equation + " = " + eval(result);
			equation = "";
		} else if (e.target.innerHTML === "RESET") {
			ans.innerHTML = "";
			equation = "";
		} else if (e.target.innerHTML === "DEL") {
			equation = equation.substring(0, equation.length - 1);
			ans.innerHTML = equation;
		} else {
			equation = equation + e.target.innerHTML;
			ans.innerHTML = equation;
		}
	});
});
