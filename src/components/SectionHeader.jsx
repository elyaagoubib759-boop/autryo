export default function SectionHeader({ eyebrow, title, text, center = false }) {
  return (
    <div className={center ? 'section-header center' : 'section-header'}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text ? <p className="section-text">{text}</p> : null}
    </div>
  )
}
