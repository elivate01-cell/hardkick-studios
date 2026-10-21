import { useState } from 'react';

const QUOTES = [
  ['“My bench went from empty words to 80kg. The coaches here count every rep like money.”', 'Fisayo O., 6 months in'],
  ['“Boxing class fixed my footwork and my temper. Tuesday nights are sacred now.”', 'Dami A., 1 year in'],
  ['“The kids’ class is the only hour my son puts the phone down. Worth every naira.”', 'Mrs. Bello, parent'],
];

const ATHLETES = [
  ['#01', 'Adaeze “Power” Nwosu', 'Powerlifting · 2× regional champ'],
  ['#07', 'Kelechi “Feet” Obi', 'Football conditioning · NPFL trials'],
  ['#10', 'Hauwa “Jabs” Sani', 'Boxing · 9–1 amateur record'],
];

const PROGRAMS = [
  { n: 'Strength floor', body: 'Barbell fundamentals, programmed in 8-week blocks. Chalk provided, excuses not.', tag: 'Mon–Fri · 6 AM & 7 PM' },
  { n: 'Boxing ring', body: 'Footwork, pads, and sparring by consent only. Headgear is not optional.', tag: 'Tue & Thu · 7 PM' },
  { n: 'Football fitness', body: 'Sprints, cones, and agility ladders for players chasing trials.', tag: 'Sat · 9 AM' },
  { n: 'Kids bootcamp', body: 'Ages 8–13. Games that are secretly conditioning. Snack break included.', tag: 'Sat · 11 AM' },
];

export default function App() {
  const [q, setQ] = useState(0);
  const next = () => setQ((q + 1) % QUOTES.length);
  return (
    <div className="hk">
      <div className="top">
        <a className="brand" href="#top">HARD<span>KICK</span> <small>Studios</small></a>
        <nav className="tnav">
          <a href="#athletes">Athletes</a><a href="#programs">Programs</a><a href="#pricing">Pricing</a><a href="#voices">Voices</a>
        </nav>
        <a className="tcta" href="#join">Free trial class</a>
      </div>
      <header className="hero" id="top">
        <div className="slash" aria-hidden="true" />
        <div className="hcopy">
          <p className="kick">STRENGTH · BOXING · CONDITIONING · LAGOS ISLAND</p>
          <h1>SWEAT IS THE<br />SHORTEST PROOF.</h1>
          <p className="lede">A gym built in an old warehouse: iron floor, boxing ring, and coaches who count out loud.</p>
          <div className="hbtns">
            <a className="btn solid" href="#join">Book a trial</a>
            <a className="btn ghost" href="#programs">See programs</a>
          </div>
        </div>
        <div className="hnums" aria-hidden="true">
          <div><b>12</b><span>coaches on staff</span></div>
          <div><b>320</b><span>members sweating weekly</span></div>
          <div><b>05:30</b><span>doors open, Mon–Sat</span></div>
        </div>
      </header>
      <section className="athletes" id="athletes">
        <h2>The lineup</h2>
        <div className="agrid">
          {ATHLETES.map((a) => (
            <article className="acard" key={a[1]}>
              <b className="anum">{a[0]}</b>
              <h3>{a[1]}</h3>
              <p>{a[2]}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="programs" id="programs">
        <h2>Programs</h2>
        <div className="pgrid">
          {PROGRAMS.map((p) => (
            <article className="pcard" key={p.n}>
              <span className="ptag">{p.tag}</span>
              <h3>{p.n}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="pricing" id="pricing">
        <h2>Pricing</h2>
        <div className="prgrid">
          <div className="prcard"><h3>Drop-in</h3><b className="pr">₦3,500<span>/visit</span></b><ul><li>Any class</li><li>No commitment</li></ul></div>
          <div className="prcard hot"><span className="pflag">Most chosen</span><h3>Monthly</h3><b className="pr">₦28,000<span>/mo</span></b><ul><li>All programs</li><li>Locker + chalk</li><li>1 coach check-in</li></ul></div>
          <div className="prcard"><h3>Athlete</h3><b className="pr">₦65,000<span>/mo</span></b><ul><li>All programs + ring time</li><li>Weekly programming</li><li>Trial prep support</li></ul></div>
        </div>
      </section>
      <section className="voices" id="voices">
        <h2>Voices from the floor</h2>
        <div className="vbox">
          <p className="vquote">{QUOTES[q][0]}</p>
          <span className="vwho">— {QUOTES[q][1]}</span>
          <div className="vnav">
            <button onClick={() => setQ((q - 1 + QUOTES.length) % QUOTES.length)} aria-label="Previous quote">◂</button>
            <span className="vdots">{QUOTES.map((_, i) => <i key={i} className={i === q ? 'on' : ''} />)}</span>
            <button onClick={next} aria-label="Next quote">▸</button>
          </div>
        </div>
      </section>
      <section className="join" id="join">
        <div className="jbar">
          <div><h2>FIRST CLASS IS FREE.</h2><p>Bring water and a towel. Bring excuses and they stay at the door.</p></div>
          <a className="btn solid" href="#join">Claim your trial</a>
        </div>
      </section>
      <footer className="foot">
        <span>© {new Date().getFullYear()} HardKick Studios · 14 Marina Warehouse Rd, Lagos Island.</span>
        <span>PED Forge template draft · batch-3</span>
      </footer>
    </div>
  );
}