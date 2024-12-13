import { useEffect, useState } from "react"
import Card from "./UI/Card"
import collab from "../assets/collab.PNG"
import automate from "../assets/automate.PNG"
import secure from "../assets/secure.PNG"

function Videolis({ handleSrc }) {
  const srcs = {
    Code: {
      desktop: {
        video:
          "https://github.githubassets.com/assets/code-1_desktop-7ab52aea3358.mp4",
        poster:
          "https://github.githubassets.com/assets/code-1_poster_desktop-b2dc87b71fdc.webp",
      },
      para: "Build code quickly and more securely with GitHub Copilot embedded throughout your workflows.",
    },
    Plan: {
      desktop: {
        poster:
          "https://github.githubassets.com/assets/plan-3_desktop-bde1a03d1322.webp",
      },
      para: "Track and coordinate your work with GitHub Issues, GitHub Projects, and insights.",
    },
    Collaborate: {
      desktop: {
        poster: collab,
      },
      para: "Work easily with your team in real time with GitHub Pull Requests, code reviews, and GitHub Discussions.",
    },
    Automate: {
      desktop: {
        poster: automate,
      },
      para: "Streamline your workflows with automated CI/CD, testing, planning, project management, issue labeling, approvals, onboarding, and more.",
    },
    Secure: {
      desktop: {
        poster: secure,
      },
      para: "Leverage tooling to detect, review, and fix vulnerabilities before they reach production.",
    },
  }

  const [active, setActive] = useState("Code")

  useEffect(() => {
    handleSrc(srcs[active].desktop)
  }, [active])

  return (
    <Card className='flex-col gap-2 w-min mx-auto mt-6'>
      <ul>
        {Object.keys(srcs).map((ele, idx) => (
          <li
            key={`${ele}-${idx}`}
            className={`btn-link ${active == ele && "active-link"}`}
            onClick={() => setActive(ele)}>
            {ele}
          </li>
        ))}
      </ul>
      <p className='text-center px-4 mt-4 text-sm text-gray-400 font-medium h-12'>
        {srcs[active].para}
      </p>
    </Card>
  )
}

export default Videolis
