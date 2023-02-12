// Main File
// Input variables
let title = document.querySelector("#title");
let price = document.querySelector("#price");
let ads = document.querySelector("#ads");
let tax = document.querySelector("#tax");
let discount = document.querySelector("#discount");
// Section Two
let cont = document.querySelector("#cont");
let category = document.querySelector("#category");
let create_btn = document.querySelector("#create");
// Section Three

let search_bar = document.querySelector("#search_bar");
let search_title_btn = document.querySelector("#search_title");
let search_category_btn = document.querySelector("#search_category");
let delete_all_btn = document.querySelector("#delete_all");

// output variables
let total_price = document.querySelector("#total_price");

// Function Get Total
let getTotal = () => {
    if (
        price.value.length > 0 &&
        ads.value.length > 0 &&
        tax.value.length > 0 &&
        discount.value.length > 0
    ) {
        let result = +price.value + +ads.value + +tax.value - +discount.value;
        total_price.innerHTML = result;
        total_price.style.color = "green";
    } else {
        total_price.style.color = "red";
        total_price.innerHTML = "00.00";
    }
};

// Function Create Product

// Data list
let dataPro;
if (localStorage.products != null) {
    dataPro = JSON.parse(localStorage.products);
} else {
    dataPro = [];
}
showData();
// Create Object
create_btn.addEventListener("click", () => {
    let newPro = {
        title: title.value,
        price: price.value,
        ads: ads.value,
        tax: tax.value,
        discount: discount.value,
        total: total_price.innerHTML,
        cont: cont.value,
        category: category.value,
    };
    if (newPro.cont > 1) {
        for (let i = 0; i < newPro.cont; i++) {
            dataPro.push(newPro);
        }
    } else {
        dataPro.push(newPro);
    }
    // save in localStorage
    localStorage.setItem("products", JSON.stringify(dataPro));
    clearData();
    showData();
});

function deleteData(i) {
    dataPro.splice(i, 1);
    localStorage.products = JSON.stringify(dataPro);
    if (dataPro.length <= 0) {
        document.querySelector("#refresh").style.display = "block";
    }
    showData();
}

delete_all_btn.addEventListener("click", () => {
    localStorage.clear();
    dataPro.splice(0);
    showData();
    document.querySelector("#refresh").style.display = "block";
    scroll({
    top:0,
    left:0,
    behavior: 'smooth'
    });
});

// Function Clear Inputs
function clearData() {
    title.value = "";
    price.value = "";
    ads.value = "";
    tax.value = "";
    discount.value = "";
    total_price.innerHTML = "";
    cont.value = "";
    category.value = "";
}

// Show Product

function showData() {
    let table = "";
    for (let i = 0; i < dataPro.length; i++) {
        table += `
        <tr>
                                    <td><span>#</span>${i}</td>
                                    <th>${dataPro[i].title}</th>
                                    <th>${dataPro[i].price}<span>$</span></th>
                                    <th>${dataPro[i].tax}<span>$</span></th>
                                    <th>${dataPro[i].ads}<span>$</span></th>
                                    <th>${dataPro[i].discount}<span>$</span></th>
                                    <th>${dataPro[i].total}<span>$</span></th>
                                    <th>${dataPro[i].category}</th>
                                    <th>
                                        <button
                                            style="background-color: #1134a6"
                                            class="btn"
                                            id="update"
                                        >
                                            Update
                                        </button>
                                    </th>
                                    <th>
                                        <button
                                            style="background-color: #1134a6"
                                            class="btn"
                                            id="delete"
                                            onclick="deleteData(    ${i}    )"
                                        >
                                            Delete
                                        </button>
                                    </th>
                                </tr>
        `;
        document.querySelector("#tbody").innerHTML = table;
    }
    if (dataPro.length > 0) {
        delete_all_btn.style.display = "block";
        document.querySelector("#num_pro").innerHTML = dataPro.length;
    } else {
        delete_all_btn.style.display = "none";
    }
}
showData();
// Delete one Product
