import {RevealOnScroll} from '../RevealOnScroll'


export const About = () => {

    const frontendSkills = [
        "React", 
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS", 
        "TailwindCSS"
    ];

    const backendSkills = [
        "C", 
        "Java", 
        "Python"
    ];


    return (
        <section 
        id="about" 
        className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 
                    className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
                >   
                About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                    Passionate and self-motivated student with hands-on experience in both software and hardware systems.
                    Focused on developing scalable web applications and crafting innovative solutions to complex challenges.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span 
                                    key = {key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span 
                                    key = {key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong> B.S. in Information Engineering </strong> - Hamburg University of Applied Sciences (2022-Current)
                                </li>
                                <li>
                                    Relevant Coursework: C, Java, Data Structures & Algorithms, Databases, Embedded Programming,
                                    Internet of Things...
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <li className="font-semibold"> Store Manager at I Cook Arabs (Kuala Lumpur, Malaysia) (2021-2022)</li>
                                    <p> Opening, closing, operating registers and point of sales.</p>
                                    <p> Maintaining stock in-store and through sheets.</p>
                                </div>
                                <div>
                                    <li className="font-semibold"> Manager at Horizons Net Cafe & IT Store (Damascus, Syria) (2017-2019)</li>
                                    <p> Maintaining the stability of computers and managing customer accounts.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 💪 Hobbies & Interests 🌸 </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <li className="font-semibold"> <strong> Fitness & Strength Training</strong></li>
                                    <p> Consistently committed to maintaining an active lifestyle through regular gym
                                    training, focusing on discipline and well-being.</p>
                                </div>
                                <div>
                                    <li className="font-semibold"> <strong> Perfumery & Scent Exploration</strong></li>
                                    <p> Passionate about fragrances, scent compositions, and the art of perfumemaking, with a deep interest in fragrance notes.</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}