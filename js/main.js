let title=document.querySelector("#title"),price=document.querySelector("#price"),ads=document.querySelector("#ads"),tax=document.querySelector("#tax"),discount=document.querySelector("#discount"),cont=document.querySelector("#cont"),category=document.querySelector("#category"),create_btn=document.querySelector("#create"),search_bar=document.querySelector("#search_bar"),search_title_btn=document.querySelector("#search_title"),search_category_btn=document.querySelector("#search_category"),delete_all_btn=document.querySelector("#delete_all"),total_price=document.querySelector("#total_price"),getTotal=()=>{if(price.value.length>0&&ads.value.length>0&&tax.value.length>0&&discount.value.length>0){let t=+price.value+ +ads.value+ +tax.value-+discount.value;total_price.innerHTML=t,total_price.style.color="green"}else total_price.style.color="red",total_price.innerHTML="00.00"},dataPro;function deleteData(t){dataPro.splice(t,1),localStorage.products=JSON.stringify(dataPro),dataPro.length<=0&&(document.querySelector("#refresh").style.display="block"),showData()}function clearData(){title.value="",price.value="",ads.value="",tax.value="",discount.value="",total_price.innerHTML="",cont.value="",category.value=""}function showData(){let t="";for(let e=0;e<dataPro.length;e++)t+=`
        <tr>
                                    <td><span>#</span>${e}</td>
                                    <th>${dataPro[e].title}</th>
                                    <th>${dataPro[e].price}<span>$</span></th>
                                    <th>${dataPro[e].tax}<span>$</span></th>
                                    <th>${dataPro[e].ads}<span>$</span></th>
                                    <th>${dataPro[e].discount}<span>$</span></th>
                                    <th>${dataPro[e].total}<span>$</span></th>
                                    <th>${dataPro[e].category}</th>
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
                                            onclick="deleteData(    ${e}    )"
                                        >
                                            Delete
                                        </button>
                                    </th>
                                </tr>
        `,document.querySelector("#tbody").innerHTML=t;dataPro.length>0?(delete_all_btn.style.display="block",document.querySelector("#num_pro").innerHTML=dataPro.length):delete_all_btn.style.display="none"}dataPro=null!=localStorage.products?JSON.parse(localStorage.products):[],showData(),create_btn.addEventListener("click",()=>{let t={title:title.value,price:price.value,ads:ads.value,tax:tax.value,discount:discount.value,total:total_price.innerHTML,cont:cont.value,category:category.value};if(t.cont>1)for(let e=0;e<t.cont;e++)dataPro.push(t);else dataPro.push(t);localStorage.setItem("products",JSON.stringify(dataPro)),clearData(),showData()}),delete_all_btn.addEventListener("click",()=>{localStorage.clear(),dataPro.splice(0),showData(),document.querySelector("#refresh").style.display="block"}),showData();
