import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Trophy, Lightbulb } from 'lucide-react';

interface TeamMemberProps {
  member: {
    name: string;
    role: string;
    bio: string;
    expertise: string[];
    achievements: string[];
    focus: string[];
  };
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-red-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 hover:border-red-500/20 transition-all duration-300">
        <div className="p-6">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-gradient">
              {member.name}
            </h3>
            <p className="text-red-500">{member.role}</p>
          </div>

          {/* Bio */}
          <p className="text-gray-300 mb-6 leading-relaxed">
            {member.bio}
          </p>

          {/* Expertise */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-4 h-4 text-red-500" />
              <h4 className="text-sm font-semibold text-white">Expertise</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {member.expertise.map((skill, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 bg-white/5 rounded-full text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Trophy className="w-4 h-4 text-red-500" />
              <h4 className="text-sm font-semibold text-white">Key Achievements</h4>
            </div>
            <ul className="space-y-2">
              {member.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <Award className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Areas */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-red-500" />
              <h4 className="text-sm font-semibold text-white">Focus Areas</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {member.focus.map((area, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 bg-red-500/10 rounded-full text-red-400"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/5 to-transparent rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-tr-full" />
      </div>
    </motion.div>
  );
};

export default TeamMember;