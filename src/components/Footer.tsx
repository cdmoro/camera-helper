import React, { FC } from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import { faHeart, faEnvelope, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { faReact, faTwitter, faLinkedinIn, faFacebook } from  '@fortawesome/free-brands-svg-icons'

const Footer: FC = () => {
    return (
      <div
        className="mt-6 text-white bg-gray-800 p-3 border-b-2 border-gray-900 rounded-md mx-auto"
        style={{ width: "30rem" }}
      >
        <p>
          Made with
          <FontAwesomeIcon
            size="lg"
            className="text-red-700 mx-2 hover:scale-125"
            icon={faHeart}
          />
          by Carlos Bonadeo
        </p>
        <p>
          and
          <IconButton
            href="https://reactjs.org/"
            icon={faReact}
            className="text-blue-400"
          />
          + Typescript + Tailwindcss
        </p>
        <p className="mt-3 mb-2">For congratulations, threats or greetings</p>
        <IconButton
          href="https://twitter.com/CarlosBonadeo"
          icon={faTwitter}
          className="text-blue-500"
          size="2x"
        />
        <IconButton
          href="https://www.linkedin.com/in/cdbonadeo/"
          icon={faLinkedinIn}
          className="text-white"
          size="2x"
        />
        <IconButton
          href="https://www.facebook.com/cdbonadeo"
          icon={faFacebook}
          className="text-blue-700"
          size="2x"
        />
        <IconButton
          href="mailto:carlosbonadeo@gmail.com"
          className="text-white"
          icon={faEnvelope}
          size="2x"
        />
      </div>
    )
}

interface IconButtonProps {
    className?: string,
    href: string,
    size?: FontAwesomeIconProps['size'],
    icon: IconDefinition
}

const IconButton: FC<IconButtonProps> = ({href, icon, size = 'lg', className}) => {
    return (
      <a
        className="mx-2"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
            className={className}
            size={size}
            icon={icon}
        />
      </a>
    )
}

export default Footer
