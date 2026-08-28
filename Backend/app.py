from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Allow frontend to communicate with backend
CORS(app)


# ==========================================
# ELECTRONEGATIVITY DATA
# ==========================================

electronegativity = {

    "H": 2.20,
    "He": None,

    "Li": 0.98,
    "Be": 1.57,
    "B": 2.04,
    "C": 2.55,
    "N": 3.04,
    "O": 3.44,
    "F": 3.98,
    "Ne": None,

    "Na": 0.93,
    "Mg": 1.31,
    "Al": 1.61,
    "Si": 1.90,
    "P": 2.19,
    "S": 2.58,
    "Cl": 3.16,
    "Ar": None,

    "K": 0.82,
    "Ca": 1.00,
    "Sc": 1.36,
    "Ti": 1.54,
    "V": 1.63,
    "Cr": 1.66,
    "Mn": 1.55,
    "Fe": 1.83,
    "Co": 1.88,
    "Ni": 1.91,
    "Cu": 1.90,
    "Zn": 1.65,
    "Ga": 1.81,
    "Ge": 2.01,
    "As": 2.18,
    "Se": 2.55,
    "Br": 2.96,
    "Kr": 3.00,

    "Rb": 0.82,
    "Sr": 0.95,
    "Y": 1.22,
    "Zr": 1.33,
    "Nb": 1.60,
    "Mo": 2.16,
    "Tc": 1.90,
    "Ru": 2.20,
    "Rh": 2.28,
    "Pd": 2.20,
    "Ag": 1.93,
    "Cd": 1.69,
    "In": 1.78,
    "Sn": 1.96,
    "Sb": 2.05,
    "Te": 2.10,
    "I": 2.66,
    "Xe": 2.60,

    "Cs": 0.79,
    "Ba": 0.89,

    "Hf": 1.30,
    "Ta": 1.50,
    "W": 2.36,
    "Re": 1.90,
    "Os": 2.20,
    "Ir": 2.20,
    "Pt": 2.28,
    "Au": 2.54,
    "Hg": 2.00,
    "Tl": 1.62,
    "Pb": 2.33,
    "Bi": 2.02,
    "Po": 2.00,
    "At": 2.20,
    "Rn": None,

    "Fr": 0.70,
    "Ra": 0.90,

    "Rf": None,
    "Db": None,
    "Sg": None,
    "Bh": None,
    "Hs": None,
    "Mt": None,
    "Ds": None,
    "Rg": None,
    "Cn": None,
    "Nh": None,
    "Fl": None,
    "Mc": None,
    "Lv": None,
    "Ts": None,
    "Og": None
}


# ==========================================
# BOND TYPE FUNCTION
# ==========================================

def calculate_bond(diff):

    if diff > 1.7:
        return "Ionic Bond"

    elif diff > 0.4:
        return "Polar Covalent Bond"

    else:
        return "Non-Polar Covalent Bond"


# ==========================================
# API ROUTE
# ==========================================

@app.route("/calculate", methods=["GET"])
def calculate():

    # Get symbols from URL

    el1 = request.args.get("el1")
    el2 = request.args.get("el2")


    # Check if symbols were provided

    if not el1 or not el2:

        return jsonify({
            "error": "Please provide two element symbols."
        }), 400


    # Correct capitalization

    el1 = el1.strip().capitalize()
    el2 = el2.strip().capitalize()


    # Check whether elements exist

    if el1 not in electronegativity:

        return jsonify({
            "error": f"Element {el1} not found."
        }), 404


    if el2 not in electronegativity:

        return jsonify({
            "error": f"Element {el2} not found."
        }), 404


    # Get EN values

    en1 = electronegativity[el1]
    en2 = electronegativity[el2]


    # Some elements don't have EN value

    if en1 is None or en2 is None:

        return jsonify({
            "error": "Electronegativity value is not available."
        }), 400


    # Calculate difference

    diff = abs(en1 - en2)


    # Calculate bond type

    bond_type = calculate_bond(diff)


    # Send JSON response

    return jsonify({

        "element1": el1,
        "element2": el2,

        "en1": en1,
        "en2": en2,

        "diff": round(diff, 2),

        "type": bond_type

    })


# ==========================================
# RUN SERVER
# ==========================================

if __name__ == "__main__":

    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )