import { skills } from "@/data/portfolio";

export const SkillsApp = () => {
  const skillCategories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Technical Skills</h2>
      <div className="space-y-6 overflow-y-auto max-h-[500px]">
        {Object.entries(skillCategories).map(([category, categorySkills]) => (
          <div key={category} className="bg-[#2d1b1e] p-5 rounded-lg border border-orange-500/20">
            <h3 className="text-lg font-semibold text-orange-400 mb-4">{category}</h3>
            <div className="space-y-3">
              {categorySkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white text-sm">{skill.name}</span>
                    <span className="text-gray-400 text-xs">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#1a1a1a] rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

