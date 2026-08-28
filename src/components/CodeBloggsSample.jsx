const members = [
  { initials: 'TB', name: 'Teah Banks', role: 'Full-stack developer', place: 'Tampa, FL' },
  { initials: 'AM', name: 'Alex Morgan', role: 'UI developer', place: 'Orlando, FL' },
  { initials: 'JR', name: 'Jordan Reed', role: 'Java developer', place: 'Atlanta, GA' },
]

/** Renders a compact, representative CodeBloggs product walkthrough. */
function CodeBloggsSample({ view }) {
  return (
    <div className="codebloggs-sample">
      <header className="codebloggs-sample__header">
        <strong>CodeBloggs</strong>
        <nav aria-label="CodeBloggs sample navigation"><span>Home</span><span>Network</span><span>Profile</span></nav>
        <span className="codebloggs-sample__avatar">TB</span>
      </header>
      <div className="codebloggs-sample__body">
        <aside><b>Explore</b><span>⌂ Home</span><span>✦ Bloggs</span><span>◎ Network</span><span>◉ My profile</span></aside>
        <main>
          {view === 'feed' && <><div className="sample-heading"><div><small>COMMUNITY FEED</small><h5>Ideas worth sharing.</h5></div><button type="button">+ New blogg</button></div><article className="blogg-post"><div className="sample-person"><span>AM</span><div><b>Alex Morgan</b><small>UI developer · 12 min</small></div></div><p>I found a cleaner way to make reusable form feedback accessible. Here are the three patterns that helped most.</p><div className="blogg-post__tags"><span>#accessibility</span><span>#react</span></div><footer><span>♥ 18 likes</span><span>6 comments</span><span>Reply →</span></footer></article><article className="blogg-post blogg-post--short"><div className="sample-person"><span>JR</span><div><b>Jordan Reed</b><small>Java developer · 1 hr</small></div></div><p>Small tests make large refactors much less intimidating.</p></article></>}
          {view === 'network' && <><div className="sample-heading"><div><small>DISCOVER</small><h5>Network</h5><p>Browse developers across the CodeBloggs community.</p></div><b>24 users</b></div><div className="codebloggs-sample__members">{members.map((member, index) => <article key={member.name}><div className="sample-person"><span>{member.initials}<i /></span><div><b>{member.name}</b><small>{member.role}</small></div></div><dl><dt>Location</dt><dd>{member.place}</dd><dt>Latest post</dt><dd>{index === 0 ? 'Building with purpose' : index === 1 ? 'A better component system' : 'Testing the service layer'}</dd></dl><button type="button">View profile</button></article>)}</div></>}
          {view === 'profile' && <div className="codebloggs-profile"><div className="codebloggs-profile__hero"><span>TB<i /></span><div><small>DEVELOPER PROFILE</small><h5>Teah Banks</h5><p>Full-stack developer · Tampa, Florida</p><b>basic account</b></div></div><div className="codebloggs-profile__stats"><span><b>12</b> bloggs</span><span><b>86</b> likes</span><span><b>24</b> connections</span></div><article><small>ABOUT</small><p>Problem solver building thoughtful software around real human needs.</p></article></div>}
        </main>
      </div>
    </div>
  )
}

export default CodeBloggsSample
