import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ProfileLayout from '../components/profile/ProfileLayout';
import ProfileContent from '../components/profile/ProfileContent';
import { members } from '../data/members';

export default function MemberProfile() {
  const { memberId } = useParams();
  const member = members.find(
    (m) => m.name.toLowerCase().replace(/\s+/g, '-') === memberId
  );

  useEffect(() => {
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [memberId]);

  if (!member) {
    return <Navigate to="/404" replace />;
  }

  return (
    <ProfileLayout>
      <ProfileContent member={member} />
    </ProfileLayout>
  );
}