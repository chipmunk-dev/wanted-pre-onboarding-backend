import { Member, MemberResponseDto } from '../types/member';

export const memberToMemberResponseDto = (member: Member) => {
  const memberResponseDto: MemberResponseDto = {
    memberId: member.member_id,
    email: member.email,
    createdAt: member.created_at,
    modifiedAt: member.modified_at,
  };

  return memberResponseDto;
};
