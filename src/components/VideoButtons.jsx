// @ts-nocheck
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

  /**
   *
   * @param {React.MouseEvent<HTMLLIElement, MouseEvent>} e
   */
  const handleScroll = (e) => {
    const ul = e.currentTarget.parentElement
    const li = e.currentTarget

    ul.scrollTo({
      left:
        li.offsetLeft < ul.offsetWidth
          ? li.offsetLeft / 2
          : (li.offsetLeft * 2) / 3,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    handleSrc(srcs[active].desktop)
  }, [active])

  return (
    <Card className='flex-col gap-2 md:w-min mx-auto mt-6'>
      <ul className='max-sm:w-11/12 flex gap-2 max-sm:overflow-x-scroll items-center md:justify-center border rounded-full px-4 py-2'>
        {Object.keys(srcs).map((ele, idx) => (
          <li
            key={`${ele}-${idx}`}
            className={`btn-link ${active == ele ? "active-link" : ""}`}
            onClick={(e) => {
              handleScroll(e)
              setActive(ele)
            }}>
            {ele}
          </li>
        ))}
      </ul>
      <p className='text-center px-4 mt-4 text-sm text-gray-400 font-medium'>
        {srcs[active].para}
      </p>
    </Card>
  )
}

export default Videolis
