import React from 'react';
import { useParams } from 'react-router-dom';
import { members } from '../../data/members';
import { motion } from 'framer-motion';

export default function Biodata() {
  const { memberId } = useParams();
  const member = members.find(
    (m) => m.name.toLowerCase().replace(/\s+/g, '-') === memberId
  );

  if (!member) {
    return <div>Biodata tidak ditemukan</div>;
  }

  return (
    
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
<div 
  className="relative bg-primary/10 border-primary border-2 rounded-lg shadow-2xl overflow-hidden"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' id='svg' viewBox='0 0 1440 490' xmlns='http://www.w3.org/2000/svg' class='transition duration-300 ease-in-out delay-150'%3E%3Cpath d='M 0,500 C 0,500 0,250 0,250 C 126.42857142857142,234.10714285714286 252.85714285714283,218.21428571428572 349,211 C 445.1428571428572,203.78571428571428 511,205.25 598,211 C 685,216.75 793.1428571428571,226.78571428571428 890,236 C 986.8571428571429,245.21428571428572 1072.4285714285716,253.60714285714286 1170,251 C 1267.5714285714284,248.39285714285714 1377.1428571428571,234.78571428571428 1440,221 C 1440,221 1440,500 1440,500 Z' stroke='none' stroke-width='0' fill='%232196f340' %3E%3C/path%3E%3Cpath d='M 0,500 C 0,500 0,125 0,125 C 86.03571428571429,146.60714285714286 172.07142857142858,168.21428571428572 288,159 C 403.92857142857144,149.78571428571428 549.75,109.75 662,89 C 774.25,68.25 852.9285714285714,66.78571428571429 945,71 C 1037.0714285714287,75.21428571428571 1142.4285714285716,85.10714285714286 1247,91 C 1351.5714285714284,96.89285714285714 1455.3571428571429,98.78571428571429 1440,100 C 1440,100 1440,500 1440,500 Z' stroke='none' stroke-width='0' fill='%232196f320' %3E%3C/path%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }}>
<div className="bg-transparent border-primary border-2 rounded-lg shadow-2xl p-6">
    <div className="flex justify-between items-center">
      <div className="flex-grow">
        <h1 className="text-2xl font-bold mb-6">Biodata</h1>
        <h3 className="text-lg font-bold">{member.name}</h3>
        <div className=" ">
          <p className="text-gray-600">{member.birthDate}</p>
          <div className="space-y-2 mt-4 text-black">
            <span className="text-black">Hobby:</span>
            <ul className="list-item list-inside pl-4">
              {member.hobby.split(',').map((hobby, index) => (
                <li key={index} className="text-black">- {hobby.trim()}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <img
          src={member.image}
          alt={member.name}
          className="w-24 h-24 rounded-full object-cover shadow-lg"
        />
      </div>
    </div>
  </div>
  </div>
</motion.div>
  );
}