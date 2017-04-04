// filters atomic elements. Only prints out ones that have atomic numbers between
// 50 and 100 and filters out the ones that contain "ium" These aren't all the
// elements. I didn't feel like writing them out. May rewrite later to read a
// csv file

var elementArr = [
    {
        id: 1,
        name: "Hydrogen",
        number: 1.00794
    }, {
        id: 2,
        name: "Helium",
        number: 4.002602
    }, {
        id: 3,
        name: "Lithium",
        number: 6.941
    }, {
        id: 4,
        name: "Berylium",
        number: 9.012182
    }, {
        id: 5,
        name: "Boron",
        number: 10.811
    }, {
        id: 6,
        name: "Carbon",
        number: 12.0107
    }, {
        id: 7,
        name: "Nitrogen",
        number: 14.0067
    }, {
        id: 8,
        name: "Oxygen",
        number: 15.9994
    }, {
        id: 9,
        name: "Fluorine",
        number: 18.9984032
    }, {
        id: 10,
        name: "Neon",
        number: 20.1797
    }, {
        id: 11,
        name: "Sodium",
        number: 22.98976928
    }, {
        id: 12,
        name: "Magnesium",
        number: 24.305
    }, {
        id: 13,
        name: "Aluminium",
        number: 26.9815386
    }, {
        id: 14,
        name: "Silicon",
        number: 28.0855
    }, {
        id: 15,
        name: "Phosphorus",
        number: 30.973762
    }, {
        id: 16,
        name: "Sulfur",
        number: 32.065
    }, {
        id: 17,
        name: "Chlorine",
        number: 35.453
    }, {
        id: 18,
        name: "Argon",
        number: 39.948
    }, {
        id: 25,
        name: "Manganese",
        number: 54.938045
    }, {
        id: 42,
        name: "Molybdenum",
        number: 95.96
    }
];

function filterAtomicElements(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i].number > 50 && arr[i].number < 100 && arr[i].name.indexOf("ium") <= -1) {
            console.log(arr[i].name);
        }
    }
}

filterAtomicElements(elementArr);
