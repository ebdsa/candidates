function serialize(data) {
  return {
    localCouncil: {
      positions: [
        {
          title: 'Co-chair',
          slug: 'co-chair',
          description: `
  <p>The Co-Chairs shall be the official public spokespersons for the Local and will initiate such actions and policies as the Local’s general welfare may demand. The Co-Chairs shall organize and preside over all official meetings of the organization and the Local Council. The Co-Chairs shall maintain consistent communication with all committee leaders and facilitate collaboration and coordination between them. Additionally:</p>
  <p>The Co-Chairs will also act as, or appoint, the official representatives of the Local to the National Organization and to other DSA Locals. This does not apply during official business at the National DSA Convention, when Local Delegates may act independently on behalf of the Local’s membership.</p>
  <p>The Co-Chairs serve as executive officers of the Local, and they are listed on financial accounts along with the Treasurer.</p>
  <p>At least one Co-Chair must not identify as both White and Cis-Male.</p>
          `,
          candidates: data.localCouncil["Co-chair"],
          seats: '2 seats',
        },
        {
          title: 'Vice Chair',
          slug: 'vice-chair',
          description: `
  <p>The Vice Chair is responsible for assisting the Co-Chairs with all of their duties. If both Co-Chairs are unable to perform their duties, the Vice Chair shall perform all duties and assume all responsibilities of the Co-Chairs until such a time as one or both Co-Chairs are able to resume their posts.</p>
          `,
          candidates: data.localCouncil["Vice Chair"],
          seats: '1 seat',
        },
        {
          title: 'Secretary',
          slug: 'secretary',
          description: `
  <p>The Secretary is responsible for taking minutes of all General Membership and Local Council Meetings, and shall be responsible for publishing these minutes, as well as resolutions, reports, and other official records of the Local. The Secretary may appoint, but must oversee, a temporary proxy minutes-taker for any meeting. That proxy may not vote on behalf of the Secretary. Additionally:</p>
  <ul>
    <li>a. The Secretary shall transfer official records in good condition to their successor.</li>
    <li>b. The Secretary will assume the responsibilities of one of the Co-Chairs, if both Co-Chairs and the Vice Chair is unable to do so.</li>
  </ul>
          `,
          candidates: data.localCouncil["Secretary"],
          seats: '1 seat',
        },
        {
          title: 'Treasurer',
          slug: 'treasurer',
          description: `
  <p>The Treasurer will be responsible for administration of funds, budget, and financial organization of the Local, including overseeing fundraising activities for the Local. The Treasurer will report to the Local Council on the financial status of the organization at each Local Council Meeting. The Treasurer will maintain transparent and open financial reports available to the entire membership upon request by an officer of the Local Council.</p>
          `,
          candidates: data.localCouncil["Treasurer"],
          seats: '1 seat',
        },
        {
          title: 'Internal Organizer',
          slug: 'internal-organizer',
          description: `
  <p>Internal Organizers will jointly oversee the Internal Organizing Committee (see Article VI), which is responsible for fostering a lively participatory and democratic culture within the Local through the development, education, mobilization, and recruitment of members. The Internal Organizing Committee is also charged with organizing General Meetings, Informational Meetings, and social, educational, and fundraising events. Under the direction of the Local Council, the Internal Organizing Committee shall develop and oversee a program of socialist cadre development that includes skills training and political education; and a system of Mobilizers (similar to union shop stewards) who will act as an active conduit of information and engagement between the General Membership and the Local Council.</p>
          `,
          candidates: data.localCouncil["Internal Organizer"],
          seats: '3 seats',
        },
        {
          title: 'External Organizer',
          slug: 'external-organizer',
          description: `
  <p>External Organizers will jointly oversee the External Organizing Committee (see Article VI), which will lead the Local’s fight for a socialist political agenda in the East Bay and beyond. Under the direction of the Local Council and in order to realize the policies, priorities and campaigns set forth by the General Membership, the External Organizing Committee shall manage or execute all of the Local’s issue and electoral campaigns, direct actions, rallies, and other activities expressly targeted at the general public for political purposes.</p>
          `,
          candidates: data.localCouncil["External Organizer"],
          seats: '3 seats',
        },
        {
          title: 'At-Large Local Council Member',
          slug: 'at-large',
          description: `
  <p>At-Large Local Council Members will participate in Local Council decision-making, and are responsible for attending all relevant meetings and reading all relevant documents. At-Large Local Council members are also tasked with representing the views of the membership that elected them as well as helping to advance the goals of the Local generally.</p>
          `,
          candidates: data.localCouncil["At Large Member of Local Council"],
          seats: '2 seats',
        }
      ]
    },
    nationalConvention: {
      candidates: data.nationalConvention.candidates
    }
  }
}

function candidateSlug(candidateName) {
  return [candidateName].reduce((acc, phrase = '') => {
    return acc.concat(phrase.split(' '))
  }, []).join('-').toLowerCase();
}

module.exports = { serialize, candidateSlug }
