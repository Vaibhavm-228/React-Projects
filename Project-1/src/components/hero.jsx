const Herosection = () =>{
return(
    <main className="hero container">
        <div className="hero-content">
           <h1>YOUR FEET DESERVE THE BEST</h1> 
           <p>
            Browse our collection today and step up your style.Find your perfect pair now.
           </p>
           <div className="hero-btn">
            <button>Shop Now</button>
            <button className="Secondary-btn">Category</button>
           </div>
           
           <div className="Shopping">
            <p>Also Available On</p>
           </div>

           <div className="brand-icons">
            <img src="/images/flipkart.png"alt="flipkart"/>
            <img src="/images/amazon.png" alt="amazon"/>

           </div>
        </div>
        <div className="heroimage">
            <img src="/images/shoe_image.png" alt="shoe-image"/>
        </div>
    </main>
);
};

export default Herosection;