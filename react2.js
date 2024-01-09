const productPrice = 500;
function Product(){

    const [quantity, setQuantity] = React.useState(0);

    function addToCart(){
        setQuantity(quantity + 1);
    }

    return(
        <div class="shadow-md rounded-lg bg-slate-800 border-slate-700">
        <a href="#">
            <img
                class="rounded-t-lg"
                src="https://dummyimage.com/680X400/087ea4/ffffff.png&text=Product"
                alt="product image"
            />
        </a>
        <div class="px-5 py-5">
            <div class="flex items-center justify-between mt-5">
                <a href="#">
                    <h3 class="font-semibold text-xl tracking-tight">
                        Reactive Accelerator Course
                    </h3>
                </a>
                <span id="total" class="text-xl font-medium text-teal-500"
                    >Total: ৳ {productPrice * quantity}</span
                >
            </div>
            <div class="flex items-center justify-between mt-5">
                <span id="price" class="text-2xl font-bold text-slate-300"
                    > Price: {productPrice}</span
                >
                <a
                    onClick={addToCart}
                    id="btn-add-to-cart"
                    href="#"
                    class="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#087ea4] hover:bg-[#087ea4]/[.8] focus:ring-[#087ea4]/[.5]"
                    >Add to cart</a
                >
            </div>
        </div>
    </div> 
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <Product/>
    <Product/>
    
    </>
)