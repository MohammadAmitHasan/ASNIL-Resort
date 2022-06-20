const ContactUs = () => {
    return (
        <div className='container mx-auto mt-20 p-5' id='contact-us'>
            <div className='text-3xl md:text-4xl font-semibold text-center'>
                <h1 className="text-3xl md:text-5xl font-semibold text-center mb-5 text-slate-800">Make Relationships</h1>
                <h3 className="text-2xl md:text-3xl font-semibold text-center mb-5 text-slate-800">With Us</h3>
                <hr className="w-28 mx-auto h-1 bg-rose-500" />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
                <div className='flex justify-center items-center md:justify-end'>
                    <div>
                        <img className="rounded-lg shadow-lg" src="/images/contactUs.jpg" alt="contact us" />
                    </div>
                </div>

                <div className='flex justify-center md:justify-start items-center'>
                    <form>
                        <div className="grid grid-cols-1 gap-3 mt-5 form-control w-full max-w-xs">

                            <input type="text" autoComplete='off' placeholder="Your name" className="border-2 p-2 rounded-md w-full max-w-xs" />

                            <input type="email" autoComplete='off' placeholder="Your Email" className="border-2 p-2 rounded-md w-full max-w-xs" />
                            <textarea placeholder='Write your comment please' className="border-2 p-2 rounded-md w-full max-w-xs" cols="30" rows="5" />

                            <input className='w-full rounded-full bg-rose-500 text-white p-2' type="submit" value='Send to Us' />
                        </div>


                    </form>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;