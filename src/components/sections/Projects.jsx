import {RevealOnScroll} from '../RevealOnScroll'


export const Projects = () => {
    return (
        <section 
            id="projects" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                 Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Project */}
                <div 
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                    <h3 className="text-xl font-bold mb-2">IoT-powered Pet Simulator</h3>
                    <li className="text-gray-400 mb-3">
                    Created a web application that synchronously retrieves and displays virtual pet data from a connected 
                    physical device 
                    </li>
                    <li className="text-gray-400 mb-3">
                    Contributed to the design and development of the application’s workflow as a frontend team member, 
                    collaborating with four colleagues to ensure an agile workflow and efficient deployments
                    </li>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React", "Node.js", "Bootstrap", "Docker"].map((tech,key) => (
                            <span 
                            key = {key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a 
                        href="https://www.youtube.com/watch?v=31pBwrbYGa8" 
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                        target="_blank"
                        rel="noopener noreferrer"
                        > 
                        View Project 🎥
                        </a>
                    </div>
                </div>

                <div 
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                    <h3 className="text-xl font-bold mb-2">Distance Measurement</h3>
                    <li className="text-gray-400 mb-3">
                    Developed C programs for Arduino Nano to measure the ultrasound echo time and store the data.
                    </li>
                    <li className="text-gray-400 mb-3">
                    Developed Python programs to retrieve the stored data, calculate the distance based on the time, and 
                    plot the result using NumPy and Pyplot.
                    </li>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["C", "Python", "Ultrasound sensor", "Arduino Nano"].map((tech,key) => (
                            <span 
                            key = {key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    {/* <div className="flex justify-between items-center">
                        <a 
                        href="https://www.youtube.com/watch?v=31pBwrbYGa8" 
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                        target="_blank"
                        rel="noopener noreferrer"
                        > 
                        View Project 🎥
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
        </RevealOnScroll>
        </section>
    )
}