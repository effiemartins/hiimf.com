import { FiSend } from 'react-icons/fi'
import { FiGithub } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'

const twitter = 'hiimf'
const github = 'effiemartins'
const linkedin = 'flora-martins-299631a3'
const email = 'flora.pmartins@gmail.com'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="copyright">
            Copyright © • Made in 2022 using NextJS, TS and Notion!
          </div>
          <div className="social">
            {twitter && (
              <a
                className="twitter"
                href={`https://twitter.com/${twitter}`}
                title={`Twitter @${twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiTwitter className="social-icon" />
              </a>
            )}

            {github && (
              <a
                className="github"
                href={`https://github.com/${github}`}
                title={`GitHub @${github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="social-icon" />
              </a>
            )}

            {linkedin && (
              <a
                className="linkedin"
                href={`https://www.linkedin.com/in/${linkedin}`}
                title={`LinkedIn ${linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin className="social-icon" />
              </a>
            )}

            {email && (
              <a
                className="email"
                href={`mailto:${email}`}
                title={`Email ${email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiSend className="social-icon" />
              </a>
            )}
          </div>
        </div>
      </footer>
    </>
  )
}
