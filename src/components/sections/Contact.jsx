import { useState } from 'react'
import {RevealOnScroll} from '../RevealOnScroll'
import emailjs from 'emailjs-com'
import sent from '../../assets/sent.gif';
import failed from '../../assets/failed.gif';



export const Contact = () => {

    const [formData, setFormData] = useState({
        from_name:"",
        email:"",
        message:"",
    });

    // tracking submission
    const [sendStatus, setSendStatus] = useState ("");


    const handleSubmit = (e) => {
        e.preventDefault();

        // // Mocking the emailjs call for testing
        // setTimeout(() => {
        //     // Simulate success
        //     setSendStatus("success"); 
        //     setFormData({from_name: "", email: "", message: ""});  // Reset form
        //     setTimeout(() => setSendStatus(""), 3000); // Reset status after 3 seconds for animation
        // }, 1000); // Simulate a delay


        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_PUBLIC_KEY
            )
            .then((result) => {
                setSendStatus("success"); // Set status to success
                setFormData({from_name: "", email: "", message: ""}); // Reset form
                setTimeout(() => setSendStatus(""), 3000); // Reset status after 3 seconds for animation
            })
            .catch(() => {
                setSendStatus("error"); // Set status to error
                setTimeout(() => setSendStatus(""), 3000); // Reset status after 3 seconds
            });
    };

    return (
        <section id="contact" 
        className="min-h-screen flex item-center justify-center py-20">
            <RevealOnScroll>
             <div className="px-4 lg:w-150 md:w-100 sm:w-57"> {/*Adjusted width for large/medium/small screen size */}
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Get In Touch
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                <div className='relative'>
                    <input 
                    type="text" 
                    id="from_name" 
                    name="from_name" 
                    required 
                    value={formData.from_name}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition
                    focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                    placeholder="First & Last Name"
                    onChange={(e) => setFormData({...formData, from_name: e.target.value})}
                    />
                </div>

                <div className='relative'>
                    <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition
                    focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                    placeholder="example@gmail.com"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                </div>

                <div className='relative'>
                    <textarea 
                    id="message" 
                    name="message" 
                    required 
                    value={formData.message}
                    rows = {5}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition
                    focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                    placeholder="Write your message here.."
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                </div>

                <button 
                type="submit" 
                className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                >
                    Send Message
                </button>

                </form>

                {/* Conditionally Render GIFs based on the sendStatus */}
                {sendStatus === "success" && (
                    <div className="fixed top-0 left-0 right-0 bottom-50 flex items-center justify-center bg-transparent z-50">
                        <div className="mt-4 text-center animate__animated animate__fadeIn">
                            <img 
                                src={sent}
                                alt="Success"
                                className="mx-auto w-70 h-70 rounded-[50px] border-8 border-[#052A76]"
                            />
                        </div>
                    </div>
                    )}
                {sendStatus === "error" && (
                    <div className="fixed top-0 left-0 right-0 bottom-50 flex items-center justify-center bg-transparent z-50">
                        <div className="mt-4 text-center animate__animated animate__fadeIn">
                            <img 
                                src={failed}
                                alt="Error"
                                className="mx-auto w-70 h-70 rounded-[50px] border-8 border-[#052A76]"
                            />
                        </div>
                    </div>
                )}
                    
            </div>
            </RevealOnScroll>

        </section>
    )
}