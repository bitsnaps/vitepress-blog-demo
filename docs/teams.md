---
title: Teams
layout: page
---

<script setup>
import {   
    VPTeamPage,
    VPTeamPageTitle,
    VPTeamPageSection,
    VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQEY8ZwS94f7uw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720730736069?e=2147483647&v=beta&t=8ZRLDt8mWUYf9lmcqUMC09xhN5lT81D6DYuauvZFJk0',
    name: 'Madjid',
    title: 'CEO',
    orgLink: 'CorpoSense',
    links: [
      { icon: 'linkedin', link: 'https://dz.linkedin.com/in/madjid-bendjaballah' }
    ]
  },
  {
    avatar: 'https://github.com/bitsnaps.png',
    name: 'Ibrahim',
    title: 'CTO',
    orgLink: 'CorpoSense',
    links: [
      { icon: 'github', link: 'https://github.com/bitsnaps' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/ibrahimhalouane' }
    ]
  },
]

const consultants = [
  {
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg',
    name: 'Redouane',
    title: 'Lead Trainer | BI Consultant',
    orgLink: 'Ooredoo',
    links: [
      { icon: 'linkedin', link: 'https://dz.linkedin.com/in/belkhatmiredouane' }
    ]
  },
  {
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg',
    title: 'Associate Trainer | Data Consultant',
    orgLink: 'Ooredoo',
    links: [
      { icon: 'linkedin', link: 'https://dz.linkedin.com/in/mguerrouachou' }
    ]
  },
]
</script>

<!-- Simple -->
<!-- # Our Team -->
<!-- <VPTeamMembers size="small" :members="members" /> -->

<!-- Advanced -->
<VPTeamPage>

  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of our products and services is guided by a large group of experienced professionals. Only some of them have chosen to be featured below:
    </template>
  </VPTeamPageTitle>
  
  <VPTeamMembers
    size="small"
    :members="members"
  />

 <!-- You can add sections -->
  <VPTeamPageSection>
    <template #title>Consultant</template>
    <template #lead>Some of our consultants...</template>
    <template #members>
      <VPTeamMembers size="small" :members="consultants" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
