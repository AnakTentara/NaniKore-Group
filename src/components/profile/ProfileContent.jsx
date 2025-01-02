import React from 'react';
import { FiMail, FiGithub, FiInstagram } from 'react-icons/fi';
import { MdOutlineWeb } from "react-icons/md";
import { motion } from 'framer-motion';


export default function ProfileContent({ member }) {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="shadow-2xl"
    >
    <div className="bg-white rounded-lg shadow-xl">
      <div className="aspect-w-16 aspect-h-9 rounded-t-lg overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-2">{member.name} <span className="text-gray-400 text-sm">( {member.birthDate} )</span></h1>
        <p className="text-primary font-medium mb-6">{member.aspiration}</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4">Professional Biography</h2>
            <p className="text-gray-600">{member.statement}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Bidang Keahlian</h2>
            <div className="flex flex-wrap gap-2">
              {member.expertise?.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-neutral rounded-full text-sm text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Edukasi</h2>
            <div className="space-y-4">
              {member.education?.map((edu) => (
                <div key={edu.degree}>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.school}</p>
                  <p className="text-sm text-gray-500">{edu.year}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Kontak Informasi</h2>
            <div className="space-y-2">
              {member.contact?.email && (
                <a
                  href={`mailto:${member.contact.email}`}
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary"
                >
                  <FiMail className="w-5 h-5" />
                  <span>{member.contact.email}</span>
                </a>
              )}
              {member.social?.website && (
                <a
                  href={member.social.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary"
                >
                  <MdOutlineWeb className="w-5 h-5" />
                  <span>Website</span>
                </a>
              )}
              {member.social?.github && (
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary"
                >
                  <FiGithub className="w-5 h-5" />
                  <span>GitHub Profile</span>
                </a>
              )}
              {member.social?.instagram && (
                <a
                  href={member.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary"
                >
                  <FiInstagram className="w-5 h-5" />
                  <span>Instagram Profile</span>
                </a>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
    </motion.div>
  );
}