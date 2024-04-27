import Product from "@/components/product";

export default function ProductCategories() {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="sm:flex">
        <div className="p-5">
          <div>
            <p className="text-xl">
              By<br></br>PCOS Symptoms
            </p>
          </div>
          <div className="mt-5">
            <div className="py-1">
              <a href="/category/all-treatments">
                <div className="text-lg">All PCOS Treatments</div>
              </a>
            </div>
            <div className="py-1">
              <a href="/category/all-treatments">
                <div className="text-lg">Hair Loss</div>
              </a>
            </div>
            <div className="py-1">
              <a href="/category/all-treatments">
                <div className="text-lg">Insulin Sensitizers</div>
              </a>
            </div>
            <div className="py-1">
              <a href="/category/all-treatments">
                <div className="text-lg">Weight Management</div>
              </a>
            </div>
            <div className="py-1">
              <a href="/category/all-treatments">
                <div className="text-lg">Reduce Unwanted Hair</div>
              </a>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 w-full p-5">
          <Product
            coverImage="/Metformin.png"
            type="Insulin Sensitizers"
            price="95"
            duration="monthly"
            name="Metformin HCL Lotion 20%"
          />
          <Product
            coverImage="/MetSpiro.png"
            type="Reduce Unwanted Hair"
            price="109"
            duration="monthly"
            name="MetSpiro"
          />
          <Product
            coverImage="/Hairless Hype.png"
            type="Reduce Unwanted Hair"
            price="89"
            duration="monthly"
            name="Hairless Hype"
          />
          <Product
            coverImage="/Hair Plus Plus.png"
            type="Hair Loss"
            price="95"
            duration="monthly"
            name="Hair Plus Plus"
          />
          <Product
            coverImage="/Ozempic.png"
            type="Weight Management"
            price="1299"
            duration="monthly"
            name="Ozempic"
          />
          <Product
            coverImage="/LDN.png"
            type="Insulin Sensitizers"
            price="69"
            duration="monthly"
            name="LDN"
          />
          <Product
            coverImage="/Oral Metformin ER.png"
            type="Insulin Sensitizers"
            price="27"
            duration="monthly"
            name="Oral Metformin ER"
          />
          <Product
            coverImage="/Spironolactone.png"
            type="Reduce Unwanted Hair"
            price="28"
            duration="monthly"
            name="Spironolactone"
          />
        </div>
      </div>
    </section>
  );
}
