import React from 'react';

import './TeamMember.page.scss'

import member_page_back from '../../../assets/images/member-page-back.png'

function TeamMemberPage() {
  return (
      <div className={'team-member-page'}>
          <div className={'team-member-page__back'}>
              <img src={member_page_back} alt={'img'}/>
          </div>
      </div>
  );
}

export default TeamMemberPage;
