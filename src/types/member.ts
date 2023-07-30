export interface Member {
  member_id: number;
  email: string;
  password: string;
  created_at: Date;
  modified_at: Date;
}

export interface MemberResponseDto {
  memberId: number;
  email: string;
  createdAt: Date;
  modifiedAt: Date;
}
