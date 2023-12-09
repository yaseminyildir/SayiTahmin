

const SampleProduct=[
{Id:1,ProductName:" Saten elbise",Category:"Elbise",UnitPrice:"599",UnitsInStock:"20"},
{Id:2,ProductName:" Mini etek",Category:"Etek",UnitPrice:"789",UnitsInStock:"27"}
]

//constructor yöntemi, bir urun nesnesi oluşturmak için kullanılabilir. id, productName, UnitPrice ve UnitsInStock parametreleri alır ve bu parametrelerle bir  film nesnesi oluşturur. Oluşturulan nesnenin özellikleri id, productName, UnitPrice ve UnitsInStock olarak atanır.
class Product{
    constructor(id,productName,category,unitPrice,unitsInStock){  
        this.Id=id,
        this.ProductName=productName,
        this.Category=category,
        this.UnitPrice=unitPrice,
        this.UnitsInStock=unitsInStock
    }
}
class productUI{
    static getProducts(){
        for(let i=0; i<SampleProduct.length;i++){
            this.addProduct(SampleProduct[i]);
        }
        
       
    }

    static addProduct(product){
     const productTable=document.getElementById("productTable")
     const tr =document.createElement("tr")
     tr.innerHTML=`
     <td>${product.Id}</td>
     <td>${product.ProductName}</td>
     <td>${product.Category}</td>
     <td>${product.UnitPrice}</td>
     <td>${product.UnitsInStock}</td>
     <td>
     <button class="btn btn-sm btn-danger" name="delete" id=${product.Id}>x</button>
   
     </td>
     `
     productTable.append(tr);
    }

    static removeProduct(productId){
     SampleProduct.forEach(function(value,index){
        if(value.id==productId){
            SampleProduct.splice(index,1)
        }
     })
     this.UpdateTable();
    }

    static UpdateTable(){
        const productTable=document.getElementById('productTable');
        productTable.innerHTML="";
        this.getProducts();
    }
    
}
    document.getElementById("btnCreate").onclick=function(){
    let productName=document.getElementById("productName").value;
    let category=document.getElementById("productCategory").value;
    let unitPrice=document.getElementById("productUnitPrice").value;
    let unitsInStock=document.getElementById("productUnitInStock").value;

    
    const product=new Product(SampleProduct[SampleProduct.length-1].Id+1,productName,category,unitPrice,unitsInStock);
    SampleProduct.push(product);
    productUI.addProduct(product);
    clearInputs();
}
function clearInputs(){
   document.getElementById("productName").value="";
   document.getElementById("productCategory").value="";
   document.getElementById("productUnitPrice").value="";
   document.getElementById("productUnitInStock").value="";
}
document.getElementById("productTable").addEventListener('click',function(val){
    if(val.target.name=='delete'){
      const productId=parseInt(val.target.id);
      productUI.removeProduct(productId);
     }
})


window.onload=productUI.getProducts();












