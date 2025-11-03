import { personalInfo } from "@/data/portfolio";
import profileImg from "@/amine mahjoub image.png";
import { MapPin, GraduationCap, Sparkles, Mail, Phone } from "lucide-react";

export const AboutApp = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start gap-6">
        <img
          src={profileImg}
          alt={personalInfo.name}
          className="w-32 h-32 rounded-lg object-cover border-2 border-orange-500 shadow-lg"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white mb-2">{personalInfo.name}</h1>
          <p className="text-orange-400 text-lg mb-4">{personalInfo.title}</p>
          <p className="text-gray-300 leading-relaxed">{personalInfo.bio}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-[#2d1b1e] p-4 rounded-lg border border-orange-500/20">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-white">Location</p>
              <p className="text-sm text-gray-300">{personalInfo.location}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#2d1b1e] p-4 rounded-lg border border-orange-500/20">
          <div className="flex items-start gap-3">
            <GraduationCap className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-white">{personalInfo.education}</p>
              <p className="text-sm text-gray-300">{personalInfo.university}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#2d1b1e] p-4 rounded-lg border border-orange-500/20">
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-white">Email</p>
              <p className="text-sm text-gray-300">{personalInfo.email}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#2d1b1e] p-4 rounded-lg border border-orange-500/20">
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-white">Phone</p>
              <p className="text-sm text-gray-300">{personalInfo.phone}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#2d1b1e] p-4 rounded-lg border border-orange-500/20 md:col-span-2">
          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-white">Interests</p>
              <p className="text-sm text-gray-300">
                AI, Blockchain, Web Development, R&D
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

