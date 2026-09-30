
const api = "http://localhost:3001/products";
function loadProducts() {
    axios.get(api).then((res)=>{
        document.getElementById("product-list"). innerHTML =  res.data.map((item,index)=>{
            const trangThai = item.stock ;
            if (item.stock > 0) {
                item.status = "Còn hàng";
            } else {
                item.status = "Hết hàng";
            }
            return `
                <tr>
                    <td class="px-4 py-2 border border-gray-300">${index + 1}</td>
                    <td class="px-4 py-2 border border-gray-300">${item.id}</td>
                    <td class="px-4 py-2 border border-gray-300">${item.name}</td>
                    <td class="px-4 py-2 border border-gray-300">${item.price}</td>
                    <td class="px-4 py-2 border border-gray-300">${item.category}</td>
                    <td class="px-4 py-2 border border-gray-300">${item.brand}</td>
                    <td class="px-4 py-2 border border-gray-300">${item.stock}</td>
                    <td class="px-4 py-2 border border-gray-300">${item.status}</td>
                    <td class="px-4 py-2 border border-gray-300">
                        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">Sửa</button>
                        <button class="bg-red-500 text-white px-4 py-2 rounded-lg">Xóa</button>
                    </td>
                </tr>
            `;
        }).join('');
    });
}
loadProducts();

function searchProducts() {

    const tuKhoa = document.getElementById("search").value;

    axios.get(api, {
        params: {
            q: tuKhoa
        }
    }).then((res) => {

        document.getElementById("product-list").innerHTML = res.data.map((item, index) => {

            if (item.stock > 0) {
                item.status = "Còn hàng";
            } else {
                item.status = "Hết hàng";
            }

            return `
                <tr>
                    <td class="px-4 py-2 border border-gray-300">${index + 1}</td>
                    <td class="px-4 py-2 border border-gray-300">${item.id}</td>
                    <td class="px-4 py-2 border border-gray-300">${item.name}</td>
                    <td class="px-4 py-2 border border-gray-300">${item.price}</td>
                    <td class="px-4 py-2 border border-gray-300">${item.category}</td>
                    <td class="px-4 py-2 border border-gray-300">${item.brand}</td>
                    <td class="px-4 py-2 border border-gray-300">${item.stock}</td>
                    <td class="px-4 py-2 border border-gray-300">${item.status}</td>
                    <td class="px-4 py-2 border border-gray-300">
                        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">Sửa</button>
                        <button class="bg-red-500 text-white px-4 py-2 rounded-lg">Xóa</button>
                    </td>
                </tr>
            `;

        }).join("");

    });
}


document.getElementById("btn-search").addEventListener("click", searchProducts);

loadProducts();