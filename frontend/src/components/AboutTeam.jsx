import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const AboutTeam = () => {
  // Leadership team data
  const leadershipTeam = [
    {
      name: 'Bibas Timilsina',
      position: 'Founder & CEO',
      image: 'https://media.licdn.com/dms/image/v2/C4D03AQFomD3hE9t_sg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1591736465744?e=1762387200&v=beta&t=aWwf4lH7ENqrK1ctlnmbsP_s6xBGI4m2IhvqpBGXkfw',
      bio: 'With extensive expertise in clinical research and pharmaceutical development, Bibas leads our company vision and strategic initiatives to transform clinical research methodologies.',
      social: {
        linkedin: 'https://www.linkedin.com/in/bibas-timilsina-2075775b/',
        email: 'bibc.time@gmail.com'
      }
    },
    {
      name: 'Sujal Timilsina',
      position: 'Founder & CTO',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQFpnSq-JD2_Nw/profile-displayphoto-shrink_200_200/B56ZaHq3yxG4AY-/0/1746032938896?e=1762387200&v=beta&t=J3CMCWyFTPMO6w_PhIClZRls0msZZzeCjFEy7RbyDRo',
      bio: 'Sujal drives our technology innovation, focusing on developing cutting-edge solutions that enhance data integrity and streamline clinical research processes.',
      social: {
        linkedin: 'https://www.linkedin.com/in/sujal-timilsina-a26299197/',
        email: 'sujal.kumar311@gmail.com'
      }
    },
  ];


  return (
    <section id="leadership" className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-teal-700 bg-teal-50 rounded-full mb-4">
            OUR LEADERSHIP
          </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight font-oxygen">
            Meet Our <span className="text-teal-600 font-semibold">Leadership</span> Team
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-teal-500 to-teal-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-oxygen font-normal">
            Experienced professionals guiding our vision and driving innovation in clinical research
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {leadershipTeam.map((member, index) => (
            <div 
              key={member.name}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group max-w-xl mx-auto"
            >
              <div className="relative aspect-w-4 aspect-h-3 bg-gray-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-center space-x-4">
                    <a href={member.social.linkedin} className="bg-white/90 backdrop-blur-sm p-2 rounded-full text-teal-600 hover:text-teal-700 hover:bg-white transition-colors duration-200">
                      <Linkedin size={16} />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="bg-white/90 backdrop-blur-sm p-2 rounded-full text-teal-600 hover:text-teal-700 hover:bg-white transition-colors duration-200">
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-300 font-oxygen">{member.name}</h3>
                <p className="text-sm text-teal-600 mb-3 font-oxygen font-normal">{member.position}</p>
                <p className="text-sm text-gray-600 font-oxygen font-normal">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
