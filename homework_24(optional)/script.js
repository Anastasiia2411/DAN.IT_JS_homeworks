startGame(8, 8, 10);

function startGame(width, height, bombs_count) {
    const field = document.querySelector(".field");
    const cellsCount = width * height;
    let p3 = document.createElement("p")
    p3.textContent = `количество бомб: ${bombs_count}, количество флажков: 0`
    document.body.prepend(p3)
    let p = document.createElement("p")

    field.innerHTML = `<div></div>`.repeat(cellsCount);
    document.getElementsByTagName("div")
    const cells = [...field.children]
    let closedCount = cellsCount
    const bombs = [...Array(cellsCount).keys()].sort(() => Math.random() - 0.5).slice(0, bombs_count)
    field.addEventListener("click", createEvent)
    field.addEventListener("mousedown", mouseEvent)
    let count = 0;
    let count2 = 0

    function mouseEvent(event) {
        let p2 = document.createElement("p");
        p2.innerHTML = "⛳"
        p2.style.margin = "0"
        p2.style.width = "100%"
        p2.style.height = "100%"
        p2.style.textAlign = "center"
        let target = event.target
        if (event.button === 2) {
            event.preventDefault()
            if (target.hasChildNodes() || target.tagName === "P") {
                target.remove()
                count2 = count2 - 1
            } else {
                event.target.prepend(p2)
                count2 = count2 + 1
            }
        }
        p3.textContent = `количество бомб: ${bombs_count}, количество флажков: ${count2}`
    }



    function createEvent(event) {
        count++
        if (count < 2) {
            let btn = document.createElement("button");
            btn.style.marginTop = "30px"
            btn.innerHTML = "Начать сначала";
            btn.addEventListener("click", () => {
                window.location.reload()
            })
            document.body.prepend(btn);
        }
        console.log(event.target.tagName)
        if (event.target.tagName !== "DIV") {
            return
        }
        const index = cells.indexOf(event.target)
        const column = index % width;

        const row = Math.floor(index / width);
        open(row, column);
    }

    function getCount(row, column) {
        let count = 0;
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                if (isBomb(row + y, column + x)) {
                    count++
                }
            }
        }
        return count

    }

    function isValid(row, column) {
        return row >= 0 && row < height && column >= 0 && column < width;
    }

    function open(row, column) {
        if (!isValid(row, column)) {
            return
        }
        const index = row * width + column
        const cell = cells[index]
        if (cell.hasChildNodes("p")) {
            return
        }


        if (isBomb(row, column)) {
            const p = document.createElement("p");
            p.style.margin = "0"
            p.innerHTML = "💣"
            if (cell.hasChildNodes("p")) {
                return
            }
            cell.prepend(p)
            openBomb(bombs)
            field.removeEventListener("click", createEvent)
            alert("You loose")

            return
        } else {
            cell.style.background = "#ffffff"
            const p = document.createElement("p");
            p.style.margin = "0"
            let calcMinAround = getCount(row, column)
            if (calcMinAround === 0) {
                cell.innerHTML = " "
                for (let x = -1; x <= 1; x++) {
                    for (let y = -1; y <= 1; y++) {
                        open(row + y, column + x)
                    }
                }
            } else {
                if (cell.hasChildNodes("p")) {
                    return
                }
                p.innerHTML = `${calcMinAround}`
                cell.prepend(p)
            }

        }
        closedCount--
        if (closedCount <= bombs_count) {
            openBomb(bombs)
            field.removeEventListener("click", createEvent)
            alert("You won!")
        }
    }


    function isBomb(row, column) {
        if (!isValid(row, column)) {
            return false
        }
        const index = row * width + column;
        return bombs.includes(index)
    }

    function openBomb(arr) {
        arr.forEach((i) => {
            let Bomb = cells[i]
            const p = document.createElement("p");
            p.style.margin = "0"
            p.innerHTML = "💣"
            if (Bomb.hasChildNodes("p")) {
                return
            }
            Bomb.prepend(p)
        })
    }
}

