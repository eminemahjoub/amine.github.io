import { personalInfo } from "@/data/portfolio";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, ExternalLink } from "lucide-react";

export const ContactApp = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-[#2d1b1e] p-5 rounded-lg border border-orange-500/20">
          <div className="flex items-start gap-3 mb-4">
            <Mail className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-white mb-1">Email</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-orange-400 hover:text-orange-300 text-sm break-all"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#2d1b1e] p-5 rounded-lg border border-orange-500/20">
          <div className="flex items-start gap-3 mb-4">
            <Phone className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-white mb-1">Phone</p>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-orange-400 hover:text-orange-300 text-sm"
              >
                {personalInfo.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#2d1b1e] p-5 rounded-lg border border-orange-500/20 md:col-span-2">
          <div className="flex items-start gap-3 mb-4">
            <MapPin className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-white mb-1">Location</p>
              <p className="text-gray-300 text-sm">{personalInfo.location}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#2d1b1e] p-5 rounded-lg border border-orange-500/20 md:col-span-2">
          <p className="font-semibold text-white mb-4">Social Media</p>
          <div className="grid grid-cols-3 gap-3">
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 bg-[#3d2b2e] rounded-lg hover:bg-[#4d3b3e] transition-colors group"
            >
              <Linkedin className="h-5 w-5 text-orange-400 group-hover:text-orange-300" />
              <span className="text-white text-sm">LinkedIn</span>
              <ExternalLink className="h-3 w-3 text-gray-400 ml-auto" />
            </a>

            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 bg-[#3d2b2e] rounded-lg hover:bg-[#4d3b3e] transition-colors group"
            >
              <Github className="h-5 w-5 text-orange-400 group-hover:text-orange-300" />
              <span className="text-white text-sm">GitHub</span>
              <ExternalLink className="h-3 w-3 text-gray-400 ml-auto" />
            </a>

            <a
              href={personalInfo.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 bg-[#3d2b2e] rounded-lg hover:bg-[#4d3b3e] transition-colors group"
            >
              <Twitter className="h-5 w-5 text-orange-400 group-hover:text-orange-300" />
              <span className="text-white text-sm">Twitter</span>
              <ExternalLink className="h-3 w-3 text-gray-400 ml-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

