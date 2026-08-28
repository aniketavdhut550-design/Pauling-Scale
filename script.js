/* =====================================================
   PERIODIC TABLE DATA
===================================================== */

const elements = [

    [1,"H","Hydrogen",2.20,"nonmetal",1,1],
    [2,"He","Helium",null,"noble",1,18],

    [3,"Li","Lithium",0.98,"alkali",2,1],
    [4,"Be","Beryllium",1.57,"alkaline",2,2],
    [5,"B","Boron",2.04,"metalloid",2,13],
    [6,"C","Carbon",2.55,"nonmetal",2,14],
    [7,"N","Nitrogen",3.04,"nonmetal",2,15],
    [8,"O","Oxygen",3.44,"nonmetal",2,16],
    [9,"F","Fluorine",3.98,"halogen",2,17],
    [10,"Ne","Neon",null,"noble",2,18],

    [11,"Na","Sodium",0.93,"alkali",3,1],
    [12,"Mg","Magnesium",1.31,"alkaline",3,2],
    [13,"Al","Aluminium",1.61,"post-transition",3,13],
    [14,"Si","Silicon",1.90,"metalloid",3,14],
    [15,"P","Phosphorus",2.19,"nonmetal",3,15],
    [16,"S","Sulfur",2.58,"nonmetal",3,16],
    [17,"Cl","Chlorine",3.16,"halogen",3,17],
    [18,"Ar","Argon",null,"noble",3,18],

    [19,"K","Potassium",0.82,"alkali",4,1],
    [20,"Ca","Calcium",1.00,"alkaline",4,2],
    [21,"Sc","Scandium",1.36,"transition",4,3],
    [22,"Ti","Titanium",1.54,"transition",4,4],
    [23,"V","Vanadium",1.63,"transition",4,5],
    [24,"Cr","Chromium",1.66,"transition",4,6],
    [25,"Mn","Manganese",1.55,"transition",4,7],
    [26,"Fe","Iron",1.83,"transition",4,8],
    [27,"Co","Cobalt",1.88,"transition",4,9],
    [28,"Ni","Nickel",1.91,"transition",4,10],
    [29,"Cu","Copper",1.90,"transition",4,11],
    [30,"Zn","Zinc",1.65,"transition",4,12],
    [31,"Ga","Gallium",1.81,"post-transition",4,13],
    [32,"Ge","Germanium",2.01,"metalloid",4,14],
    [33,"As","Arsenic",2.18,"metalloid",4,15],
    [34,"Se","Selenium",2.55,"nonmetal",4,16],
    [35,"Br","Bromine",2.96,"halogen",4,17],
    [36,"Kr","Krypton",3.00,"noble",4,18],

    [37,"Rb","Rubidium",0.82,"alkali",5,1],
    [38,"Sr","Strontium",0.95,"alkaline",5,2],
    [39,"Y","Yttrium",1.22,"transition",5,3],
    [40,"Zr","Zirconium",1.33,"transition",5,4],
    [41,"Nb","Niobium",1.60,"transition",5,5],
    [42,"Mo","Molybdenum",2.16,"transition",5,6],
    [43,"Tc","Technetium",1.90,"transition",5,7],
    [44,"Ru","Ruthenium",2.20,"transition",5,8],
    [45,"Rh","Rhodium",2.28,"transition",5,9],
    [46,"Pd","Palladium",2.20,"transition",5,10],
    [47,"Ag","Silver",1.93,"transition",5,11],
    [48,"Cd","Cadmium",1.69,"transition",5,12],
    [49,"In","Indium",1.78,"post-transition",5,13],
    [50,"Sn","Tin",1.96,"post-transition",5,14],
    [51,"Sb","Antimony",2.05,"metalloid",5,15],
    [52,"Te","Tellurium",2.10,"metalloid",5,16],
    [53,"I","Iodine",2.66,"halogen",5,17],
    [54,"Xe","Xenon",2.60,"noble",5,18],

    [55,"Cs","Cesium",0.79,"alkali",6,1],
    [56,"Ba","Barium",0.89,"alkaline",6,2],

    [57,"La","Lanthanum",1.10,"lanthanide",6,3],
    [58,"Ce","Cerium",1.12,"lanthanide",6,4],
    [59,"Pr","Praseodymium",1.13,"lanthanide",6,5],
    [60,"Nd","Neodymium",1.14,"lanthanide",6,6],
    [61,"Pm","Promethium",1.13,"lanthanide",6,7],
    [62,"Sm","Samarium",1.17,"lanthanide",6,8],
    [63,"Eu","Europium",1.20,"lanthanide",6,9],
    [64,"Gd","Gadolinium",1.20,"lanthanide",6,10],
    [65,"Tb","Terbium",1.20,"lanthanide",6,11],
    [66,"Dy","Dysprosium",1.22,"lanthanide",6,12],
    [67,"Ho","Holmium",1.23,"lanthanide",6,13],
    [68,"Er","Erbium",1.24,"lanthanide",6,14],
    [69,"Tm","Thulium",1.25,"lanthanide",6,15],
    [70,"Yb","Ytterbium",1.10,"lanthanide",6,16],
    [71,"Lu","Lutetium",1.27,"lanthanide",6,17],

    [72,"Hf","Hafnium",1.30,"transition",6,4],
    [73,"Ta","Tantalum",1.50,"transition",6,5],
    [74,"W","Tungsten",2.36,"transition",6,6],
    [75,"Re","Rhenium",1.90,"transition",6,7],
    [76,"Os","Osmium",2.20,"transition",6,8],
    [77,"Ir","Iridium",2.20,"transition",6,9],
    [78,"Pt","Platinum",2.28,"transition",6,10],
    [79,"Au","Gold",2.54,"transition",6,11],
    [80,"Hg","Mercury",2.00,"transition",6,12],
    [81,"Tl","Thallium",1.62,"post-transition",6,13],
    [82,"Pb","Lead",2.33,"post-transition",6,14],
    [83,"Bi","Bismuth",2.02,"post-transition",6,15],
    [84,"Po","Polonium",2.00,"metalloid",6,16],
    [85,"At","Astatine",2.20,"halogen",6,17],
    [86,"Rn","Radon",null,"noble",6,18],

    [87,"Fr","Francium",0.70,"alkali",7,1],
    [88,"Ra","Radium",0.90,"alkaline",7,2],

    [89,"Ac","Actinium",1.10,"actinide",7,3],
    [90,"Th","Thorium",1.30,"actinide",7,4],
    [91,"Pa","Protactinium",1.50,"actinide",7,5],
    [92,"U","Uranium",1.38,"actinide",7,6],
    [93,"Np","Neptunium",1.36,"actinide",7,7],
    [94,"Pu","Plutonium",1.28,"actinide",7,8],
    [95,"Am","Americium",1.13,"actinide",7,9],
    [96,"Cm","Curium",1.28,"actinide",7,10],
    [97,"Bk","Berkelium",1.30,"actinide",7,11],
    [98,"Cf","Californium",1.30,"actinide",7,12],
    [99,"Es","Einsteinium",1.30,"actinide",7,13],
    [100,"Fm","Fermium",1.30,"actinide",7,14],
    [101,"Md","Mendelevium",1.30,"actinide",7,15],
    [102,"No","Nobelium",1.30,"actinide",7,16],
    [103,"Lr","Lawrencium",1.30,"actinide",7,17],

    [104,"Rf","Rutherfordium",null,"transition",7,4],
    [105,"Db","Dubnium",null,"transition",7,5],
    [106,"Sg","Seaborgium",null,"transition",7,6],
    [107,"Bh","Bohrium",null,"transition",7,7],
    [108,"Hs","Hassium",null,"transition",7,8],
    [109,"Mt","Meitnerium",null,"transition",7,9],
    [110,"Ds","Darmstadtium",null,"transition",7,10],
    [111,"Rg","Roentgenium",null,"transition",7,11],
    [112,"Cn","Copernicium",null,"transition",7,12],
    [113,"Nh","Nihonium",null,"post-transition",7,13],
    [114,"Fl","Flerovium",null,"post-transition",7,14],
    [115,"Mc","Moscovium",null,"post-transition",7,15],
    [116,"Lv","Livermorium",null,"post-transition",7,16],
    [117,"Ts","Tennessine",null,"halogen",7,17],
    [118,"Og","Oganesson",null,"noble",7,18]

];



/* =====================================================
   CREATE PERIODIC TABLE
===================================================== */

const table =
    document.getElementById("periodicTable");

const fBlock =
    document.getElementById("fBlock");


elements.forEach(element => {

    const [
        number,
        symbol,
        name,
        en,
        category,
        period,
        group
    ] = element;


    if (
        category === "lanthanide" ||
        category === "actinide"
    ) {

        return;

    }


    const box =
        createElementBox(element);


    box.style.gridColumn =
        group;

    box.style.gridRow =
        period;


    table.appendChild(box);

});



/* =====================================================
   F-BLOCK
===================================================== */

elements

    .filter(element =>
        element[4] === "lanthanide" ||
        element[4] === "actinide"
    )

    .forEach(element => {

        const box =
            createElementBox(element);

        fBlock.appendChild(box);

    });



/* =====================================================
   CREATE ELEMENT BOX
===================================================== */

function createElementBox(element) {

    const [
        number,
        symbol,
        name,
        en,
        category
    ] = element;


    const box =
        document.createElement("div");


    box.className =
        "element " + category;


    box.innerHTML = `

        <div class="number">
            ${number}
        </div>

        <div class="symbol">
            ${symbol}
        </div>

        <div class="en">
            ${en !== null ? en : "—"}
        </div>

    `;


    box.title =
        name;


    box.onclick =
        function () {

            showElement(element);

        };


    return box;

}



/* =====================================================
   ELEMENT INFORMATION
===================================================== */

function showElement(element) {

    const [
        number,
        symbol,
        name,
        en,
        category
    ] = element;


    const info =
        document.getElementById(
            "elementInfo"
        );


    info.classList.add("show");


    info.innerHTML = `

        <h3>
            ${name} (${symbol})
        </h3>

        <p>
            <strong>Atomic Number:</strong>
            ${number}
        </p>

        <p>
            <strong>Element:</strong>
            ${name}
        </p>

        <p>
            <strong>Symbol:</strong>
            ${symbol}
        </p>

        <p>
            <strong>
                Pauling Electronegativity:
            </strong>

            ${en !== null ? en : "Not available"}
        </p>

        <p>
            <strong>Category:</strong>
            ${category}
        </p>

        ${
            en !== null

            ?

            `
            <button
                class="select-element-button"
                onclick="
                    selectElement(
                        '${symbol}',
                        ${en}
                    )
                "
            >
                Use This Element in Bond Checker
            </button>
            `

            :

            `
            <p>
                Electronegativity value is
                not available.
            </p>
            `
        }

    `;

}



/* =====================================================
   SELECT ELEMENT
===================================================== */

let selectedElement = 0;


function selectElement(symbol, en) {

    if (selectedElement === 0) {

        document.getElementById("val1").value =
            en;

        document.getElementById("el1").value =
            symbol;

        selectedElement = 1;


        document.getElementById("result").innerText =

            `${symbol} selected as Element 1. ` +
            `Select another element.`;

    }

    else {

        document.getElementById("val2").value =
            en;

        document.getElementById("el2").value =
            symbol;

        selectedElement = 0;


        calculateBond();

    }


    /*
        Open Bond Checker
    */

    document
        .querySelectorAll(".tab-button")
        .forEach(button => {

            button.classList.remove(
                "active"
            );

        });


    document
        .querySelectorAll(".tab-content")
        .forEach(tab => {

            tab.classList.remove(
                "active"
            );

        });


    document
        .querySelectorAll(".tab-button")[1]
        .classList.add("active");


    document
        .getElementById("checker")
        .classList.add("active");


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}



/* =====================================================
   TAB SYSTEM
===================================================== */

function openTab(tabName, button) {

    document
        .querySelectorAll(".tab-content")
        .forEach(tab => {

            tab.classList.remove(
                "active"
            );

        });


    document
        .querySelectorAll(".tab-button")
        .forEach(btn => {

            btn.classList.remove(
                "active"
            );

        });


    document
        .getElementById(tabName)
        .classList.add("active");


    button.classList.add("active");

}



/* =====================================================
   QUESTION / ANSWER
===================================================== */

function toggleAnswer(button) {

    const answer =
        button.nextElementSibling;


    const isOpen =
        answer.classList.contains(
            "show"
        );


    document
        .querySelectorAll(".answer")
        .forEach(item => {

            item.classList.remove(
                "show"
            );

        });


    document
        .querySelectorAll(".question")
        .forEach(item => {

            item.classList.remove(
                "active"
            );

        });


    if (!isOpen) {

        answer.classList.add(
            "show"
        );

        button.classList.add(
            "active"
        );

    }

}



/* =====================================================
   BOND CALCULATOR
===================================================== */

function calculateBond() {

    const a =
        parseFloat(
            document.getElementById(
                "val1"
            ).value
        );


    const b =
        parseFloat(
            document.getElementById(
                "val2"
            ).value
        );


    const result =
        document.getElementById(
            "result"
        );


    if (
        isNaN(a) ||
        isNaN(b)
    ) {

        result.innerText =
            "⚠ Please enter both electronegativity values.";

        return;

    }


    const diff =
        Math.abs(a - b);


    let type;


    if (diff > 1.7) {

        type =
            "Ionic Bond";

    }

    else if (diff > 0.4) {

        type =
            "Polar Covalent Bond";

    }

    else {

        type =
            "Non-Polar Covalent Bond";

    }


    result.innerText =

        `Difference: ${diff.toFixed(2)} → ${type}`;

}



/* =====================================================
   FLASK BACKEND CONNECTION
===================================================== */

function getFromBackend() {

    const el1 =
        document
            .getElementById("el1")
            .value
            .trim();


    const el2 =
        document
            .getElementById("el2")
            .value
            .trim();


    const result =
        document.getElementById(
            "result"
        );


    if (!el1 || !el2) {

        result.innerText =
            "⚠ Please enter both element symbols.";

        return;

    }


    result.innerText =
        "⏳ Checking...";


    const url =

        `http://127.0.0.1:5000/calculate` +

        `?el1=${encodeURIComponent(el1)}` +

        `&el2=${encodeURIComponent(el2)}`;


    fetch(url)

        .then(response => {

            if (!response.ok) {

                return response
                    .json()
                    .then(data => {

                        throw new Error(
                            data.error ||
                            "Server error"
                        );

                    });

            }

            return response.json();

        })


        .then(data => {

            result.innerText =

                `Difference: ${data.diff} → ${data.type}`;

        })


        .catch(error => {

            console.error(error);

            result.innerText =

                "❌ " +
                error.message;

        });

}