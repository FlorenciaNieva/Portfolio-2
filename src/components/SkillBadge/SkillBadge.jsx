import React from 'react'

export default function SkillBadge({ icon, text }) {
  return (
    <div className="skill-badge">
      {icon} {text}
    </div>
  )
}
