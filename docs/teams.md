---
title: Teams
layout: page
---

<script setup>
import {   
    VPTeamPage,
    VPTeamPageTitle,
    VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQEY8ZwS94f7uw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720730736069?e=2147483647&v=beta&t=8ZRLDt8mWUYf9lmcqUMC09xhN5lT81D6DYuauvZFJk0',
    name: 'Madjid.B',
    title: 'CEO',
    orgLink: 'CorpoSense',
    links: [
      { icon: 'linkedin', link: 'https://dz.linkedin.com/in/madjid-bendjaballah' }
    ]
  },
  {
    avatar: 'https://github.com/bitsnaps.png',
    name: 'Ibrahim H.',
    title: 'CTO',
    orgLink: 'CorpoSense',
    links: [
      { icon: 'github', link: 'https://github.com/bitsnaps' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/ibrahimhalouane' }
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
  <!-- <VPTeamPageSection>
    <template #title>Partners</template>
    <template #lead>Lorem ipsum...</template>
    <template #members>
      <VPTeamMembers :members="members" />
    </template>
  </VPTeamPageSection> -->
</VPTeamPage>
