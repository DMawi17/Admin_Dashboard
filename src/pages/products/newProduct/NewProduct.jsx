import "./newProduct.css";

export default function NewProduct() {
    return (
        <div className="newProduct">
            <h1 className="newProductTitle">New Product</h1>
            <form action="" className="newProductForm">
                <div className="newProductItem">
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder="John Smith" />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="John@Smith.com" />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Telephone</label>
                    <input type="text" placeholder="London, England" />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Gender</label>
                    <div className="newProductGender">
                        <input
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                        />
                        <label htmlFor="female">Female</label>
                        <input
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                        />
                        <label htmlFor="male">Male</label>
                        <input
                            type="radio"
                            name="gender"
                            id="other"
                            value="other"
                        />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="newProductItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newProductSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <button className="newProductButton">Create</button>
            </form>
        </div>
    );
}
