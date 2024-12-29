import Image from 'next/image';

const Skills = () => {
    const skills = {
        "Systèmes d'Exploitation": [
            { name: "Windows", icon: "/icons/windows.png" },
            { name: "Linux", icon: "/icons/linux.png" },
        ],
        "Outils et Environnements": [
            { name: "VS Code", icon: "/icons/vscode.png" },
            { name: "MATLAB & Simulink", icon: "/icons/matlab.jpg" },
            { name: "STM32CubeIDE", icon: "/icons/stm32.png" },
            { name: "QUARTUS", icon: "/icons/quartus.jpg" },
            { name: "ModelSim", icon: "/icons/modelsim.jpg" },
            { name: "INTELLIJ IDE", icon: "/icons/intellij.jpg" },
            { name: "ALTIUM DESIGNER", icon: "/icons/altium.jpg" },
        ],
        "Gestion de Versions et Collaboration": [
            { name: "GitHub", icon: "/icons/github.png" },
            { name: "GitLab", icon: "/icons/gitlab.png" },
        ],
        "Langages de Programmation": [
            { name: "Langage C", icon: "/icons/letter-c.png" },
            { name: "Java", icon: "/icons/java.png" },
            { name: "Python", icon: "/icons/python.png" },
            { name: "VHDL", icon: "/icons/vhdl.jpg" },
        ],
        "Outils et Logiciels": [
            { name: "Simulink", icon: "/icons/simulink.jpg" },
            { name: "Commandes Linux et Programmations", icon: "/icons/linux.png" },
        ],
        "Compétences Interpersonnelles": [
            { name: "Bonne communication", icon: "/icons/communication.png" },
            { name: "Bonne capacité d’analyse", icon: "/icons/analysis.png" },
            { name: "Autonome", icon: "/icons/autonomy.png" },
        ],
    };

    const categoryColors = {
        "Systèmes d'Exploitation": "bg-blue-600",
        "Outils et Environnements": "bg-green-600",
        "Gestion de Versions et Collaboration": "bg-purple-600",
        "Langages de Programmation": "bg-yellow-600",
        "Outils et Logiciels": "bg-red-600",
        "Compétences Interpersonnelles": "bg-indigo-600",
    };

    return (
        <section id="skills" className="py-16 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                    Compétences
                </h2>
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="mb-12">
                        <h3
                            className={`text-2xl font-bold text-white ${
                                categoryColors[category] || "bg-gray-600"
                            } p-3 rounded-lg shadow-md mb-4`}
                        >
                            {category}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {items.map((skill, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-md p-6 rounded-md hover:shadow-lg hover:bg-blue-100 transition duration-300 transform hover:scale-105"
                                >
                                    <Image
                                        src={skill.icon || "/icons/default-icon.png"}
                                        alt={`Icône de ${skill.name}`}
                                        width={48}
                                        height={48}
                                        className="mx-auto mb-4"
                                    />
                                    <p className="text-gray-800 font-medium text-lg">
                                        {skill.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
