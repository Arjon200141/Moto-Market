const Faq = () => {
    return (
        <div className="my-12">
            <div className="mx-40 space-y-4 mb-8">
                <h2 className="text-center text-4xl ">Need Help? We’ve Got Answers!</h2>
                <p  className="text-center ">Check out our FAQ section for clear and concise answers to all your Moto Market questions. From bike selection to delivery details, we’re here to ensure a smooth and informed buying experience!</p>
            </div>
            <div className="flex gap-4 mx-16">
                <div className="flex-1">
                    <img src="https://i.ibb.co.com/k0csMpB/faq.jpg" alt="" />
                </div>
                <div className="flex-1">
                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item border-slate-800 border">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-xl font-medium">What types of bikes does Moto Market sell?</div>
                            <div className="collapse-content">
                                <p className="text-yellow-500/45">Moto Market specializes in a variety of bikes, including sportbikes, cruisers, and adventure models, offering options to suit different riding styles and preferences.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-slate-800 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">Can I test ride a bike before purchasing it?</div>
                            <div className="collapse-content">
                                <p className="text-yellow-500/45">Absolutely! We encourage customers to schedule a test ride to experience the bike firsthand before making a final decision</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-slate-800 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">Does Moto Market offer bike servicing and maintenance?</div>
                            <div className="collapse-content">
                                <p className="text-yellow-500/45"> Yes, we provide professional bike servicing and maintenance to keep your ride in top condition, ensuring long-term performance and safety.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-slate-800 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium"> How do I place an order on Moto Market?</div>
                            <div className="collapse-content">
                                <p className="text-yellow-500/45"> You can easily place an order by browsing our online catalog, adding your preferred bike to the cart, and following the checkout process. You’ll receive an order confirmation once the purchase is complete.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-slate-800 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium"> What is the return policy at Moto Market?</div>
                            <div className="collapse-content">
                                <p className="text-yellow-500/45">If you're not satisfied with your purchase, Moto Market allows returns within 30 days, provided the bike is in its original condition and hasn't been used.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;