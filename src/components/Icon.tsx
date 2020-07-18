import React from "react"

type Props = {
  name: string
  color?: string
  onClick?: () => void
  style?: object
}

const Icon = ({ color = "var(--black)", name, onClick, style = {} }: Props) => {
  switch (name) {
    case "hamburger":
      return (
        <svg
          width="28"
          height="23"
          viewBox="0 0 28 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={style}
          onClick={onClick}
          aria-labelledby="hamburger-icon"
          className="icon"
        >
          {" "}
          <title id="hamburger-icon">Hamburger Menu</title>
          <line y1="1.5" x2="28" y2="1.5" stroke={color} stroke-width="3" />
          <line y1="11.5" x2="28" y2="11.5" stroke={color} stroke-width="3" />
          <line y1="21.5" x2="28" y2="21.5" stroke={color} stroke-width="3" />
        </svg>
      )
    case "grid":
      return (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={style}
          onClick={onClick}
          aria-labelledby="grid-icon"
          className="icon"
        >
          <title id="grid-icon">Grid</title>
          <rect width="5" height="5" fill={color} />
          <rect y="10" width="5" height="5" fill={color} />
          <rect y="20" width="5" height="5" fill={color} />
          <rect x="10" width="5" height="5" fill={color} />
          <rect x="10" y="10" width="5" height="5" fill={color} />
          <rect x="10" y="20" width="5" height="5" fill={color} />
          <rect x="20" width="5" height="5" fill={color} />
          <rect x="20" y="10" width="5" height="5" fill={color} />
          <rect x="20" y="20" width="5" height="5" fill={color} />
        </svg>
      )
    case "phone":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={style}
          onClick={onClick}
          aria-labelledby="phone-icon"
          className="icon"
        >
          <title id="phone-icon">Phone</title>
          <path
            d="M16.8134 16.6122L15.3326 17.5897C14.3793 18.2461 10.3171 18.9841 4.79066 12.2891C-0.537123 5.84339 0.986334 2.26893 1.70097 1.44463L2.93063 0.166526C3.22055 -0.080717 3.65797 -0.0516355 3.9072 0.247021L7.1412 4.07259L7.14319 4.07457C7.37981 4.35487 7.37207 4.79119 7.06081 5.05401V5.05689L5.62757 6.09063C5.06023 6.6531 5.55482 7.53845 6.13476 8.39373L8.89265 11.6501C10.1756 12.8885 10.8786 13.4606 11.4925 13.0513L12.6844 11.7218C12.9763 11.4765 13.4117 11.5065 13.6609 11.8033L16.8969 15.6289V15.6309C17.1324 15.9121 17.1236 16.3475 16.8134 16.6122Z"
            fill={color}
          />
        </svg>
      )
    case "close":
      return (
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          id="close-icon"
          aria-labelledby="close-icon"
          className="icon"
        >
          <title>Close</title>
          <rect
            y="16.2634"
            width="23"
            height="3"
            rx="1.5"
            transform="rotate(-45 0 16.2634)"
            fill={color}
          />
          <rect
            x="2.12134"
            width="23"
            height="3"
            rx="1.5"
            transform="rotate(45 2.12134 0)"
            fill={color}
          />
        </svg>
      )
    case "phone":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          id="phone-icon"
          aria-labelledby="phone-icon"
          className="icon"
          viewBox="0 0 512 512"
          height="20"
          width="20"
        >
          <title>Phone</title>
          <path
            fill={color}
            d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
          />
        </svg>
      )
    case "mail":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          id="mail-icon"
          aria-labelledby="mail-icon"
          className="icon"
          viewBox="0 0 512 512"
          height="20"
          width="20"
        >
          <title>Mail</title>
          <path
            fill={color}
            d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
          />
        </svg>
      )
    case "line":
      return (
        <svg
          width="21"
          height="18"
          viewBox="0 0 21 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          style={style}
          aria-labelledby="line-icon"
          className="line-icon"
        >
          <title id="line-icon">Line</title>
          <path
            d="M20.9884 7.66526C20.9884 3.43861 16.2809 -7.03137e-07 10.4941 -7.03137e-07C4.70811 -7.03137e-07 0 3.43861 0 7.66526C0 11.4544 3.73342 14.6278 8.77648 15.2279C9.11828 15.2941 9.5834 15.4307 9.70109 15.6936C9.8069 15.9324 9.77029 16.3065 9.73488 16.5477C9.73488 16.5477 9.61176 17.2143 9.58521 17.3562C9.53954 17.5951 9.37438 18.2902 10.4941 17.8654C11.6143 17.4406 16.5378 14.6624 18.7395 12.3814H18.7391C20.26 10.8802 20.9884 9.35687 20.9884 7.66526Z"
            fill={color}
          />
          <path
            d="M8.36163 5.62259H7.6255C7.51264 5.62259 7.4209 5.70498 7.4209 5.80621V9.92233C7.4209 10.0237 7.51264 10.106 7.6255 10.106H8.36163C8.47449 10.106 8.56603 10.0237 8.56603 9.92233V5.80621C8.56603 5.70498 8.47449 5.62259 8.36163 5.62259Z"
            fill="var(--bgColor)"
          />
          <path
            d="M13.4289 5.62259H12.6928C12.5799 5.62259 12.4884 5.70498 12.4884 5.80621V8.25162L10.3929 5.70426C10.3881 5.69774 10.3827 5.69158 10.377 5.6856L10.3756 5.68452C10.3716 5.68035 10.3676 5.67673 10.3634 5.67311C10.3621 5.67202 10.3609 5.67112 10.3595 5.67003C10.3561 5.66713 10.3525 5.66442 10.3487 5.66188C10.3471 5.66043 10.3452 5.65935 10.3434 5.65808C10.3398 5.65591 10.3364 5.65355 10.3328 5.65156C10.3308 5.65029 10.3287 5.64921 10.3265 5.6483C10.3229 5.64631 10.3193 5.64432 10.3157 5.64269C10.3135 5.64178 10.3114 5.64069 10.3092 5.63997C10.3054 5.63834 10.3016 5.63671 10.2976 5.63544C10.2952 5.63472 10.2931 5.63399 10.2909 5.63327C10.2869 5.632 10.2829 5.63074 10.2787 5.62983C10.2764 5.62911 10.274 5.62874 10.2716 5.62802C10.2676 5.62729 10.2638 5.62639 10.2599 5.62566C10.2571 5.6253 10.2541 5.62494 10.2513 5.62476C10.2477 5.62403 10.2441 5.62385 10.2404 5.62349C10.237 5.62313 10.2336 5.62313 10.23 5.62295C10.2274 5.62295 10.2253 5.62259 10.2227 5.62259H9.48682C9.37396 5.62259 9.28223 5.70498 9.28223 5.80621V9.92233C9.28223 10.0237 9.37396 10.106 9.48682 10.106H10.2227C10.3358 10.106 10.4273 10.0237 10.4273 9.92233V7.47765L12.5254 10.0283C12.5399 10.0467 12.5578 10.0618 12.5773 10.0737C12.5779 10.0741 12.5787 10.0746 12.5793 10.0752C12.5835 10.0775 12.5878 10.0799 12.592 10.0821C12.594 10.0831 12.5958 10.0839 12.5978 10.0848C12.6008 10.0864 12.6043 10.0878 12.6075 10.0891C12.6109 10.0904 12.6139 10.0917 12.6175 10.0929C12.6195 10.0936 12.6216 10.0944 12.6236 10.0949C12.6284 10.0965 12.6328 10.0978 12.6375 10.0991C12.6385 10.0991 12.6395 10.0994 12.6405 10.0996C12.6572 10.1036 12.6747 10.106 12.6928 10.106H13.4289C13.5419 10.106 13.6333 10.0237 13.6333 9.92233V5.80621C13.6333 5.70498 13.5419 5.62259 13.4289 5.62259Z"
            fill="var(--bgColor)"
          />
          <path
            d="M6.65561 9.06857H4.66988V5.79572C4.66988 5.69401 4.579 5.61151 4.46715 5.61151H3.73613C3.62408 5.61151 3.5332 5.69401 3.5332 5.79572V9.91619V9.91656C3.5332 9.96605 3.55497 10.0108 3.58993 10.0438C3.59073 10.0447 3.59152 10.0456 3.59272 10.0466C3.59372 10.0475 3.59472 10.0482 3.59572 10.0491C3.63227 10.081 3.6814 10.1006 3.73593 10.1006H3.73613H6.65561C6.76766 10.1006 6.85814 10.0179 6.85814 9.91619V9.25278C6.85814 9.15106 6.76766 9.06857 6.65561 9.06857Z"
            fill="var(--bgColor)"
          />
          <path
            d="M17.4936 6.65311C17.6064 6.65311 17.6976 6.5709 17.6976 6.46913V5.80652C17.6976 5.70492 17.6064 5.62235 17.4936 5.62235H14.553H14.5526C14.4975 5.62235 14.4478 5.64227 14.411 5.67432C14.4102 5.67505 14.4092 5.67559 14.4086 5.67631C14.4074 5.6774 14.4064 5.67849 14.4054 5.67957C14.3704 5.71253 14.3486 5.75708 14.3486 5.80634V5.80652V9.92197V9.92215C14.3486 9.97159 14.3706 10.0163 14.4058 10.0493C14.4066 10.0502 14.4076 10.0513 14.4086 10.052C14.4094 10.0529 14.4106 10.0538 14.4116 10.0545C14.4482 10.0862 14.4979 10.106 14.5526 10.106H14.553H17.4936C17.6064 10.106 17.6976 10.0234 17.6976 9.92197V9.25918C17.6976 9.15777 17.6064 9.07519 17.4936 9.07519H15.4937V8.37944H17.4936C17.6064 8.37944 17.6976 8.29705 17.6976 8.19546V7.53285C17.6976 7.43126 17.6064 7.34868 17.4936 7.34868H15.4937V6.65311H17.4936Z"
            fill="var(--bgColor)"
          />
        </svg>
      )
    default:
      return null
  }
}

export default Icon
