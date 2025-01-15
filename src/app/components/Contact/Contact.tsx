import React, {useState} from 'react'
import Image from "next/image"
import Logo from "../../../../public/my-logo.png"
import { Separator } from './Separator';


function Contact() {
    const [formData, setFormData] = useState({ name: '',surname: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess('');
        setError('');

        try {
        const res = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (res.ok) {
            setSuccess(data.success);
            setFormData({ name: '',surname: '', email: '', message: '' });
        } else {
            setError(data.error || "Quelque chose s'est mal passé");
        }
        } catch (err) {
        setError("Quelque chose s'est mal passé");
        } finally {
        setLoading(false);
        }
    };
    return (
        <div className='michroma-text h-full flex flex-col justify-center items-center'>
            <div>
                <Image src={Logo} alt='' className='!w-[150px]'/>
            </div>
            
            <div className="form w-[62vw]  flex flex-col items-center "> 
                <h1 className=" text-[25px] md:text-[30px]  text-[#85EA26]">CONTACT ME</h1>
                <p className='text-[20px] font-bold mb-2 mt-5 text-[#85EA26]'><a href="tel:+33467702808" className="hover:underline">07 83 97 19 31</a></p>
                <div className="flex justify-center items-center mb-7">
                    <Separator className="bg-[#85EA26] !w-[20vw] "/>
                    <div className="mx-3 lg:mx-7"><span className="text-[#85EA26] text-[15px]">or</span></div>
                    <Separator className="bg-[#85EA26] !w-[20vw] "/>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full mx-auto">
                    <div className='flex flex-col md:flex-row w-full md:space-x-4 md:space-y-0 space-x-0 space-y-4'>
                    <input  

                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nom"
                        className="p-2 border w-full md:w-[50%] !text-black "
                        required
                    />
                    <input
                        type="text"
                        name="surname"
                        value={formData.surname}
                        onChange={handleChange}
                        placeholder="Prénom"
                        className="p-2 border w-full md:w-[50%] !text-black"
                    />
                    </div>
                    
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="p-2 border !text-black"
                    required
                    />
                    <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows="5"
                    className="p-2 border !text-black"
                    required
                    />
                    <button
                    type="submit"
                    className="p-2 bg-[#85EA26] text-white  hover:bg-[#6ea739]"
                    disabled={loading}
                    >
                    {loading ? "En cours d'envoie..." : 'Envoyer'}
                    </button>
                </form>
                {success && <p className="text-green-500 mt-4">{success}</p>}
                {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
        </div>
    )
}

export default Contact
