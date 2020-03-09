import React, { FC } from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import { faHeart, faEnvelope, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { faReact, faTwitter, faLinkedinIn, faFacebook } from  '@fortawesome/free-brands-svg-icons'

const Footer: FC = () => {
    return (
      <div
        className="mt-1 md:mt-6 text-white bg-gray-800 p-3 border-b-2 border-gray-900 rounded-md md:mx-auto mb-2 md:mb-0 md:px-10 md:w-auto md:inline-block block mx-2"
        // style={{ width: "30rem" }}
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
          title="Follow me on Twitter!"
        />
        <IconButton
          href="https://www.linkedin.com/in/cdbonadeo/"
          icon={faLinkedinIn}
          className="text-white"
          title="View my profile on Linkedin!"
          size="2x"
        />
        <IconButton
          href="https://www.facebook.com/cdbonadeo"
          icon={faFacebook}
          className="text-blue-700"
          title="Follow me on Facebook!"
          size="2x"
        />
        <IconButton
          href="mailto:carlosbonadeo@gmail.com"
          className="text-white"
          icon={faEnvelope}
          title="Send me an email!"
          size="2x"
        />
      </div>
    )
}

interface IconButtonProps {
    className?: string,
    href: string,
    size?: FontAwesomeIconProps['size'],
    icon: IconDefinition,
    title?: string
}

const IconButton: FC<IconButtonProps> = ({href, icon, size = 'lg', className, title}) => {
    return (
      <a
        className="mx-2"
        href={href}
        title={title}
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
