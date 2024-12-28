const Skills = () => {
    const skills = ["C", "Python", "VHDL", "Java", "SQL", "GitHub/GitLab"];
  
    return (
      <section id="skills" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Compétences</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-4 rounded-md transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-blue-500 hover:text-white"
              >
                <p className="font-semibold text-lg">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  